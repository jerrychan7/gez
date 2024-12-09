"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["11"],{886:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var t=r(1549),s=r(6603);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",div:"div"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"客户端渲染",children:["客户端渲染",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#客户端渲染",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["如果在生产环境，无法部署一个 Node 实例，可以在构建阶段就生成客户端渲染的 ",(0,t.jsx)(n.code,{children:"index.html"})," 文件。"]}),"\n",(0,t.jsxs)(n.h2,{id:"客户端模板",children:["客户端模板",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#客户端模板",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"在服务渲染时，返回一个通用的模板即可。"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"import type { RenderContext } from '@gez/core';\n\nexport default async (rc: RenderContext) => {\n    // 提交依赖收集\n    await rc.commit();\n    // 响应 HTML\n    rc.html = `\n<!DOCTYPE html>\n<html>\n<head>\n    ${rc.preload()}\n    <title>Gez</title>\n    ${rc.css()}\n</head>\n<body>\n    <div id=\"app\"></div>\n    ${rc.importmap()}\n    ${rc.moduleEntry()}\n    ${rc.modulePreload()}\n</body>\n</html>\n`;\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"构建时生成-indexhtml",children:["构建时生成 index.html",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建时生成-indexhtml",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["在 ",(0,t.jsx)(n.code,{children:"postCompileProdHook"})," 钩子中，手动执行一次 SSR 渲染，将生成的 HTML 写入到 ",(0,t.jsx)(n.code,{children:"dist/client/index.html"})," 文件中。"]}),"\n",(0,t.jsxs)(n.li,{children:["将 ",(0,t.jsx)(n.code,{children:"dist/client/"})," 目录复制到你的服务器上。"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import path from 'node:path';\nimport type { GezOptions } from '@gez/core';\n\nexport default {\n    // ... 其它选项\n    async postCompileProdHook(gez) {\n        const render = await gez.render({\n            params: {\n                url: '/'\n            }\n        });\n        gez.writeSync(\n            gez.resolvePath('dist/client', url.substring(1), 'index.html'),\n            rc.html\n        );\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"postCompileProdHook"})," 钩子会在构建完成后，以生产模式执行构建出来的代码。如果你要生成一个完全静态的网站，也可以在这里实现。"]}),"\n"]})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}let c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["guide%2Fessentials%2Fcsr.mdx"]={toc:[{text:"客户端模板",id:"客户端模板",depth:2},{text:"构建时生成 index.html",id:"构建时生成-indexhtml",depth:2}],title:"客户端渲染",frontmatter:{}}}}]);