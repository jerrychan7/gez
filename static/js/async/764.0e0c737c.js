"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["764"],{5469:function(n,e,r){r.r(e),r.d(e,{default:function(){return o}});var t=r(1549),s=r(6603);function i(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h1,{id:"rendercontext",children:["RenderContext",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#rendercontext",children:"#"})]}),"\n",(0,t.jsxs)(e.h2,{id:"类型",children:["类型",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#类型",children:"#"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"import serialize from 'serialize-javascript';\nimport type { Gez } from './gez';\n/**\n * 渲染的参数\n */\nexport interface RenderContextOptions {\n    /**\n     * 静态资产的公共路径，可以根据业务的上下文来动态设置不同的路径。\n     */\n    base?: string;\n    /**\n     * gez.render() 函数执行时，会调用 entry.server.ts 文件导出的名称。\n     */\n    entryName?: string;\n    /**\n     * 传递给 RenderContext 对象的 params 字段。\n     */\n    params?: Record<string, any>;\n}\n/**\n * 渲染上下文\n */\nexport declare class RenderContext {\n    /**\n     * Gez 的实例。\n     */\n    gez: Gez;\n    /**\n     * 重定向地址。\n     */\n    redirect: string | null;\n    /**\n     * 响应的状态码。\n     */\n    status: number | null;\n    private _html;\n    /**\n     * 参数传入的 base。\n     */\n    readonly base: string;\n    /**\n     * 参数传入的 params。\n     */\n    readonly params: Record<string, any>;\n    /**\n     * 参数传入的 entryName。\n     */\n    readonly entryName: string;\n    /**\n     * 服务端渲染过程中，收集模块执行过程中的 import.meta 对象。\n     */\n    importMetaSet: Set<ImportMeta>;\n    /**\n     * importMetaSet 收集完成后，调用 rc.commit() 函数时，会更新这个对象的信息。\n     */\n    files: RenderFiles;\n    constructor(gez: Gez, options?: RenderContextOptions);\n    /**\n     * 响应的 html 内容。\n     */\n    get html(): string;\n    set html(html: string);\n    /**\n     * 透传 https://github.com/yahoo/serialize-javascript\n     */\n    serialize(input: any, options?: serialize.SerializeJSOptions): any;\n    /**\n     * 在 window 对象，注入一个 JS 变量对象，data 必须是可以被序列化的。\n     */\n    state(varName: string, data: Record<string, any>): string;\n    /**\n     * 同构应用渲染完成后，提交模块依赖更新 files 对象。\n     */\n    commit(): Promise<void>;\n    /**\n     * 根据 files 生成 JS 和 CSS 文件的预加载代码。\n     */\n    preload(): string;\n    /**\n     * 根据 files 生成服务端首屏加载的 CSS。\n     */\n    css(): string;\n    /**\n     * 根据 files 生成 importmap 相关代码。\n     */\n    importmap(): string;\n    /**\n     * 根据 files 生成模块入口执行代码。\n     */\n    moduleEntry(): string;\n    /**\n     * 根据 files 生成 ESM 模块预加载代码。\n     */\n    modulePreload(): string;\n}\n/**\n * 服务端渲染处理函数。\n */\nexport type ServerRenderHandle = (render: RenderContext) => Promise<void>;\n/**\n * 当前页面渲染的文件\n */\nexport interface RenderFiles {\n    /**\n     * CSS 文件列表。\n     */\n    css: string[];\n    /**\n     * ESM 模块列表。\n     */\n    modulepreload: string[];\n    /**\n     * importmap.js 文件列表。\n     */\n    importmap: string[];\n    /**\n     * 全部的 JS 文件列表，包含 modulepreload 和 importmap。\n     */\n    js: string[];\n    /**\n     * 除了 JS 和 CSS 之外的其它文件列表。\n     */\n    resources: string[];\n}\n\n"})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["api%2Fcore%2Frender-context.mdx"]={toc:[{text:"类型",id:"类型",depth:2}],title:"RenderContext",frontmatter:{}}}}]);