import path from 'node:path';
import type { Gez } from '../gez';
import { getFile, getJsonFile } from './fetch';
import { getPkgHash } from './pkg';
import { decompressionDir } from './zip';

export async function decompression(gez: Gez) {
    let currentImports = gez.moduleConfig.imports.filter((item) => {
        const remoteUrl = item.remoteUrl;
        if (!remoteUrl) {
            return false;
        }
        return true;
    });
    const TRY_MAX_COUNT = 3;
    let tryCount = 0;
    let tryImports: typeof currentImports = [];
    const next = async () => {
        const item = currentImports.shift();
        if (!item) {
            return;
        }
        const url = new URL(item.remoteUrl!);
        const versionJson = await getJsonFile<Record<string, string>>(url.href);
        if (!versionJson) {
            tryImports.push(item);
            return next();
        }
        const result = await Promise.all(
            Object.entries(versionJson).map(async ([key, newHash]) => {
                const root = path.resolve(item.localPath, key);
                const oldHash = getPkgHash(path.resolve(root, 'package.json'));
                // 判断和本地版本号是否一致
                if (newHash === oldHash) {
                    return true;
                }
                const zip = await getFile(getZipUrl(url, newHash));
                // 下载失败
                if (!zip) {
                    return !!oldHash;
                }
                decompressionDir(root, await zip.arrayBuffer());
                return true;
            })
        );
        if (result.includes(false)) {
            tryImports.push(item);
            return next();
        }
        return next();
    };
    const start = async () => {
        await next();
        // 没有错误需要处理
        if (!tryImports.length) {
            return;
        }
        // 处理下一次的请求
        currentImports = tryImports;
        tryImports = [];
        tryCount++;
        console.log(`Try again in 10 seconds`);
        await new Promise<void>((resolve) => {
            setTimeout(resolve, 1000 * 10);
        });
        if (tryCount > TRY_MAX_COUNT) {
            throw new Error(`Download failed`);
        }
        return start();
    };
    await start();
    console.log(`Done!`);
}

function getZipUrl(url: URL, hash: string) {
    const arr = url.href.split('/');
    arr[arr.length - 1] = `${hash}.zip`;
    return arr.join('/');
}
