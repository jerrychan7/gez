import path from 'node:path';

export type ProjectPath =
    | 'dist'
    | 'dist/client'
    | 'dist/client/package.json'
    | 'dist/client/versions'
    | 'dist/client/versions/latest.json'
    | 'dist/server'
    | 'dist/server/package.json'
    | 'dist/server/entry.js'
    | 'dist/node'
    | 'dist/node/entry.js'
    | 'src'
    | 'src/entry.node.ts'
    | 'src/entry.client.ts'
    | 'src/entry.server.ts';

export function getProjectPath(root: string, projectPath: ProjectPath): string {
    return path.resolve(root, projectPath);
}
