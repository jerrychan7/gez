import { pathToFileURL } from 'node:url';
import {
    type App,
    type Gez,
    type Middleware,
    RenderContext,
    type RenderContextOptions,
    type ServerRenderHandle,
    createApp,
    mergeMiddlewares
} from '@gez/core';
import { createVmImport } from '@gez/import';
import { type RspackOptions, rspack } from '@rspack/core';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import type { BuildTarget } from './build-target';
import { createRspackConfig } from './config';
import { pack } from './pack';

export interface RspackAppConfigContext {
    gez: Gez;
    buildTarget: BuildTarget;
    config: RspackOptions;
    options: RspackAppOptions;
}

export interface RspackAppOptions {
    /**
     * 是否压缩代码，默认情况下在生产环境压缩代码。
     */
    minimize?: boolean;
    /**
     * 这是一个过渡的方案，等 Rspack 完全支持 ESM 之后，这个参数会废弃。
     * - auto 默认值，在开发环境时，使用 module 获得热更新，生产环境编译使用 modern-module
     * - module 支持热更新，但是不支持 export *
     * - modern-module 不支持热更新，大部分情况下 支持 export *，部分情况下编译输出不稳定。
     *
     * 更多了解：
     *      https://github.com/web-infra-dev/rspack/issues/8546
     *      https://github.com/web-infra-dev/rspack/issues/8557
     */
    module?: 'auto' | 'module' | 'modern-module';
    /**
     * Rspack 配置钩子，你可以在这里修改 context.config。
     */
    config?: (context: RspackAppConfigContext) => void;
}

export async function createRspackApp(
    gez: Gez,
    options?: RspackAppOptions
): Promise<App> {
    const app = await createApp(gez);
    switch (gez.command) {
        case gez.COMMAND.dev:
            app.middleware = mergeMiddlewares([
                ...(await createMiddleware(gez, options)),
                app.middleware
            ]);
            app.render = rewriteRender(gez);
            break;
        case gez.COMMAND.build:
            app.build = rewriteBuild(gez, options);
            break;
    }
    return app;
}
async function createMiddleware(
    gez: Gez,
    options: RspackAppOptions = {}
): Promise<Middleware[]> {
    const middlewares: Middleware[] = [];
    if (gez.command === gez.COMMAND.dev) {
        const clientCompiler = rspack(
            generateBuildConfig(gez, options, 'client')
        );
        const serverCompiler = rspack(
            generateBuildConfig(gez, options, 'server')
        );
        // @ts-expect-error
        devMiddleware(clientCompiler, {
            writeToDisk: true
        });
        // @ts-expect-error
        devMiddleware(serverCompiler, {
            writeToDisk: true
        });
        middlewares.push(
            // @ts-expect-error
            hotMiddleware(clientCompiler, {
                heartbeat: 5000,
                path: `${gez.basePath}hot-middleware`
            })
        );
        await new Promise<void>((resolve) => {
            clientCompiler.run(() => {
                resolve();
            });
        });
        await new Promise<void>((resolve) => {
            serverCompiler.run(() => {
                resolve();
            });
        });
    }
    return middlewares;
}

function generateBuildConfig(
    gez: Gez,
    options: RspackAppOptions,
    buildTarget: BuildTarget
) {
    const config = createRspackConfig(gez, buildTarget, options);
    options.config?.({ gez, options, buildTarget, config });

    return config;
}

function rewriteRender(gez: Gez) {
    return async (options?: RenderContextOptions): Promise<RenderContext> => {
        const baseURL = pathToFileURL(gez.root) as URL;
        const importMap = gez.getServerImportMap();
        const vmImport = createVmImport(baseURL, importMap);
        const rc = new RenderContext(gez, options);
        const module = await vmImport(
            `${gez.name}/src/entry.server`,
            import.meta.url,
            {
                console,
                setTimeout,
                clearTimeout,
                process,
                URL,
                global
            }
        );
        const serverRender: ServerRenderHandle = module[rc.entryName];
        if (typeof serverRender === 'function') {
            await serverRender(rc);
        }
        return rc;
    };
}

function rewriteBuild(gez: Gez, options: RspackAppOptions = {}) {
    return async (): Promise<boolean> => {
        const list: (() => Promise<boolean>)[] = [
            () => rspackBuild(generateBuildConfig(gez, options, 'client')),
            () => rspackBuild(generateBuildConfig(gez, options, 'server')),
            () => rspackBuild(generateBuildConfig(gez, options, 'node'))
        ];
        for (const build of list) {
            const successful = await build();
            if (!successful) {
                return false;
            }
        }
        gez.writeSync(
            gez.resolvePath('dist/index.js'),
            `
process.env.NODE_ENV = process.env.NODE_ENV ?? 'production';

async function start() {
    const options = await import('./node/src/entry.node.js').then(
        (mod) => mod.default
    );
    const { Gez } = await import('@gez/core');
    const gez = new Gez(options);

    await gez.init(gez.COMMAND.start);
}

start();
`.trim()
        );
        return pack(gez);
    };
}

async function rspackBuild(options: RspackOptions) {
    const ok = await new Promise<boolean>((resolve) => {
        const compiler = rspack(options);
        compiler.run((err, stats) => {
            if (err) {
                console.error(err);
                resolve(false);
                return;
            } else if (stats?.hasErrors()) {
                stats.toJson({ errors: true })?.errors?.forEach((err) => {
                    console.error(err);
                });

                return resolve(false);
            }
            compiler.close((err) => {
                if (err) {
                    console.error(err);
                    resolve(false);
                    return;
                }
                resolve(true);
            });
        });
    });
    // 避免前面的进度条被 rspack.ProgressPlugin 清理了
    ok && console.log('');
    return ok;
}
