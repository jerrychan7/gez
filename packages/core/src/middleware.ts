import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'node:path';
import send from 'send';
import type { Gez } from './gez';

export type Middleware = (
    req: IncomingMessage,
    res: ServerResponse,
    next: Function
) => void;

export function createMiddleware(gez: Gez): Middleware {
    const middlewares = gez.moduleConfig.imports.map((item): Middleware => {
        const base = `/${item.name}/`;
        const baseUrl = new URL(`file:`);
        const root = path.resolve(item.localPath, 'client');
        const reFinal = /\.final\.[A-z]+$/;
        return (req, res, next) => {
            const url = req.url ?? '/';
            const { pathname } = new URL(req.url ?? '/', baseUrl);

            if (!url.startsWith(base) || req.method !== 'GET') {
                next();
                return;
            }

            send(req, pathname.substring(base.length - 1), {
                root
            })
                .on('headers', () => {
                    if (reFinal.test(pathname)) {
                        res.setHeader(
                            'cache-control',
                            'public, max-age=31536000, immutable'
                        );
                    } else {
                        res.setHeader('cache-control', 'no-cache');
                    }
                })
                .pipe(res);
        };
    });
    return mergeMiddlewares(middlewares);
}

/**
 * 将多个中间件，合并成一个中间件执行
 * @param middlewares 中间件列表
 * @returns
 */
export function mergeMiddlewares(middlewares: Middleware[]): Middleware {
    return (req, res, next) => {
        let index = 0;
        function dispatch() {
            if (index < middlewares.length) {
                middlewares[index](req, res, () => {
                    index++;
                    dispatch();
                });
                return;
            } else {
                next();
            }
        }
        dispatch();
    };
}
