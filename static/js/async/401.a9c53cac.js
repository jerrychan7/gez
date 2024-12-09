"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["401"],{6035:function(e,r,s){s.r(r),s.d(r,{default:function(){return t}});var n=s(1549),d=s(6603),i=s(7997);function c(e){let r=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,d.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"rspack",children:["Rspack",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Gez 是基于 ",(0,n.jsx)(r.a,{href:"https://rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," 构建应用程序，同时也就继承了 Rspack 的全部优势。Gez 提供了一些 Rspack 的配置，你可以根据自己的情况来选择使用哪个。"]}),"\n",(0,n.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,n.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,n.jsx)(r.div,{className:"rspress-directive-content",children:(0,n.jsxs)(r.p,{children:["你可以基于  ",(0,n.jsx)(r.code,{children:"@gez/rspack"})," 的 ",(0,n.jsx)(r.code,{children:"createRspackHtmlApp"})," 函数构建自己的 ",(0,n.jsx)(r.a,{href:"/guide/framework/vue",children:"Vue"}),"、",(0,n.jsx)(r.a,{href:"/guide/framework/react",children:"React"}),"、",(0,n.jsx)(r.a,{href:"/guide/framework/preact",children:"Preact"}),"、",(0,n.jsx)(r.a,{href:"/guide/framework/solid",children:"Solid"}),"、",(0,n.jsx)(r.a,{href:"/guide/framework/solid",children:"Svelte"})," 等不同框架的配置。\n"]})})]}),"\n",(0,n.jsxs)(r.h2,{id:"gezrspack",children:["@gez/rspack",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#gezrspack",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"提供了 Rspack 的基本配置。"}),"\n",(0,n.jsxs)(r.h3,{id:"安装依赖",children:["安装依赖",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#安装依赖",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["如果你没有 ",(0,n.jsx)(r.code,{children:"@gez/rspack"})," 的依赖，那么你可以通过如下命令安装。"]}),"\n",(0,n.jsx)(i.PackageManagerTabs,{command:"install @gez/rspack -D"}),"\n",(0,n.jsxs)(r.h2,{id:"no-loader",children:["No Loader",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#no-loader",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"createRspackApp"})," 提供了 Gez 的必要配置，默认情况下不提供任何 ",(0,n.jsx)(r.a,{href:"https://rspack.dev/guide/features/loader",target:"_blank",rel:"noopener noreferrer",children:"loader"})," 相关的配置，你还需要配置一些 ",(0,n.jsx)(r.a,{href:"https://rspack.dev/guide/features/loader",target:"_blank",rel:"noopener noreferrer",children:"loader"})," 才能将项目跑起来。"]}),"\n",(0,n.jsxs)(r.div,{className:"rspress-directive danger",children:[(0,n.jsx)(r.div,{className:"rspress-directive-title",children:"DANGER"}),(0,n.jsx)(r.div,{className:"rspress-directive-content",children:(0,n.jsxs)(r.p,{children:["Gez 的默认配置不可修改，否则 Gez 无法正常工作，",(0,n.jsx)(r.a,{href:"https://github.com/dp-os/gez/blob/master/packages/rspack/src/config.ts",target:"_blank",rel:"noopener noreferrer",children:"点击这里"})," 了解默认配置。\n"]})})]}),"\n",(0,n.jsxs)(r.h3,{id:"选项",children:["选项",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#选项",children:"#"})]}),"\n",(0,n.jsxs)(r.h4,{id:"config",children:["config() ",(0,n.jsx)(i.Badge,{text:"v3.0.0",type:"tip"}),(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"类型："})," ",(0,n.jsx)(r.code,{children:"config?: (context: RspackAppConfigContext) => void;"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"默认值："})," ",(0,n.jsx)(r.code,{children:"undefined"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"描述："})," 自定义 Rspack 配置。"]}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"例子",children:["例子",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#例子",children:"#"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    async createDevApp(gez) {\n        return import('@gez/rspack').then((m) =>\n            m.createRspackApp(gez, {\n                config({ config }) {\n                    config.module = {\n                        ...config.module,\n                        rules: [\n                            {\n                                test: /\\.ts$/,\n                                exclude: [/node_modules/],\n                                loader: 'builtin:swc-loader',\n                                options: {\n                                  jsc: {\n                                    parser: {\n                                      syntax: 'typescript',\n                                    },\n                                  },\n                                },\n                                type: 'javascript/auto',\n                              }\n                        ]\n                    }\n                }\n            })\n        );\n    }\n} satisfies GezOptions;\n\n"})}),"\n",(0,n.jsxs)(r.h2,{id:"html",children:["Html",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#html",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"createRspackHtmlApp"})," 提供了一些开箱即用的配置，支持 Typescript、Worker、JSON、CSS、Less、Video、Image、Font 的相关文件。"]}),"\n",(0,n.jsxs)(r.h3,{id:"选项-1",children:["选项",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#选项-1",children:"#"})]}),"\n",(0,n.jsxs)(r.h4,{id:"css",children:["css ",(0,n.jsx)(i.Badge,{text:"v3.0.0",type:"tip"}),(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#css",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"类型："})," ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"默认值："})," ",(0,n.jsx)(r.code,{children:"true"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"描述："})," 是否启用默认的 CSS 配置。"]}),"\n"]}),"\n",(0,n.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,n.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,n.jsx)(r.div,{className:"rspress-directive-content",children:(0,n.jsxs)(r.p,{children:["如果你要自定义 CSS loader，可以设置为 ",(0,n.jsx)(r.code,{children:"false"}),"。\n"]})})]}),"\n",(0,n.jsxs)(r.h4,{id:"swcloader",children:["swcLoader ",(0,n.jsx)(i.Badge,{text:"v3.0.0",type:"tip"}),(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#swcloader",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"类型："})," ",(0,n.jsx)(r.code,{children:"SwcLoaderOptions"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"默认值："})," ",(0,n.jsx)(r.code,{children:"undefined"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"描述："})," 透传 ",(0,n.jsx)(r.a,{href:"https://rspack.dev/guide/features/builtin-swc-loader",target:"_blank",rel:"noopener noreferrer",children:"builtin-swc-loader"}),"。"]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"lessloader",children:["lessLoader ",(0,n.jsx)(i.Badge,{text:"v3.0.0",type:"tip"}),(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#lessloader",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"类型："})," ",(0,n.jsx)(r.code,{children:"Record<string, any>;"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"默认值："})," ",(0,n.jsx)(r.code,{children:"undefined"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"描述："})," 透传 ",(0,n.jsx)(r.a,{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer",children:"less-loader"}),"。"]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"styleresourcesloader",children:["styleResourcesLoader ",(0,n.jsx)(i.Badge,{text:"v3.0.0",type:"tip"}),(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#styleresourcesloader",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"类型："})," ",(0,n.jsx)(r.code,{children:"Record<string, any>;"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"默认值："})," ",(0,n.jsx)(r.code,{children:"undefined"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"描述："})," 透传 ",(0,n.jsx)(r.a,{href:"https://github.com/yenshih/style-resources-loader",target:"_blank",rel:"noopener noreferrer",children:"style-resources-loader"}),"。"]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"defineplugin",children:["definePlugin ",(0,n.jsx)(i.Badge,{text:"v3.0.0",type:"tip"}),(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#defineplugin",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"类型："})," ",(0,n.jsx)(r.code,{children:"Record<string, any>;"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"默认值："})," ",(0,n.jsx)(r.code,{children:"undefined"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"描述："})," 透传 ",(0,n.jsx)(r.a,{href:"https://rspack.dev/plugins/webpack/define-plugin",target:"_blank",rel:"noopener noreferrer",children:"DefinePlugin"}),"。"]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"targetweb",children:["target.web ",(0,n.jsx)(i.Badge,{text:"v3.0.0",type:"tip"}),(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#targetweb",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"类型："})," ",(0,n.jsx)(r.code,{children:"string[]"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"默认值："})," ",(0,n.jsx)(r.code,{children:"['chrome>=87', 'firefox>=78', 'safari>=14', 'edge>=88']"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"描述："})," 浏览器的构建目标。"]}),"\n"]}),"\n",(0,n.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,n.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,n.jsx)(r.div,{className:"rspress-directive-content",children:(0,n.jsx)(r.p,{children:"构建目标小于默认配置，Gez 可能无法正常工作。"})})]}),"\n",(0,n.jsxs)(r.h4,{id:"targetnode",children:["target.node ",(0,n.jsx)(i.Badge,{text:"v3.0.0",type:"tip"}),(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#targetnode",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"类型："})," ",(0,n.jsx)(r.code,{children:"string[]"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"默认值："})," ",(0,n.jsx)(r.code,{children:"['node>=20']"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"描述："})," Node.js 的构建目标。"]}),"\n"]}),"\n",(0,n.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,n.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,n.jsx)(r.div,{className:"rspress-directive-content",children:(0,n.jsx)(r.p,{children:"构建目标小于默认配置，无法保证兼容性，请认真考虑后设置。"})})]}),"\n",(0,n.jsxs)(r.h3,{id:"例子-1",children:["例子",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#例子-1",children:"#"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    async createDevApp(gez) {\n        return import('@gez/rspack').then((m) =>\n            m.createRspackHtmlApp(gez, {\n                // 自定义选项\n                config({ config }) {\n                    // 自定义 Rspack 的配置\n                }\n            })\n        );\n    },\n} satisfies GezOptions;\n\n"})}),"\n",(0,n.jsxs)(r.h2,{id:"gezrspack-vue",children:["@gez/rspack-vue",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#gezrspack-vue",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"提供了 Rspack vue 的基本配置。"}),"\n",(0,n.jsxs)(r.h3,{id:"安装",children:["安装",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["如果你没有 ",(0,n.jsx)(r.code,{children:"@gez/rspack-vue"})," 的依赖，那么你可以通过如下命令安装。"]}),"\n",(0,n.jsx)(i.PackageManagerTabs,{command:"install @gez/rspack-vue -D"}),"\n",(0,n.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,n.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,n.jsx)(r.div,{className:"rspress-directive-content",children:(0,n.jsxs)(r.p,{children:["该软件包同时支持 ",(0,n.jsx)(r.a,{href:"https://v2.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Vue2"})," 和 ",(0,n.jsx)(r.a,{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Vue3"}),"。\n"]})})]}),"\n",(0,n.jsxs)(r.h3,{id:"选项-2",children:["选项",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#选项-2",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["选项继承于 ",(0,n.jsx)(r.a,{href:"#html",children:"createRspackHtmlApp"}),"。"]}),"\n",(0,n.jsxs)(r.h4,{id:"vueloader",children:["vueLoader ",(0,n.jsx)(i.Badge,{text:"v3.0.0",type:"tip"}),(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#vueloader",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"类型："})," ",(0,n.jsx)(r.code,{children:"Record<string, any>"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"默认值："})," ",(0,n.jsx)(r.code,{children:"undefined"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"描述："})," 透传 ",(0,n.jsx)(r.a,{href:"https://github.com/vuejs/vue-loader",target:"_blank",rel:"noopener noreferrer",children:"vue-loader"})]}),"\n"]}),"\n",(0,n.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,n.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,n.jsx)(r.div,{className:"rspress-directive-content",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"experimentalInlineMatchResource"})," 和 ",(0,n.jsx)(r.code,{children:"optimizeSSR"})," 由程序自动设置，你传入也无效。\n"]})})]}),"\n",(0,n.jsxs)(r.h3,{id:"vue2",children:["Vue2",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#vue2",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"createRspackVue2App"})," 提供了 Vue2 的 ",(0,n.jsx)(r.code,{children:".vue"})," 文件支持。"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    async createDevApp(gez) {\n        return import('@gez/rspack-vue').then((m) =>\n            m.createRspackVue2App(gez, {\n                config ({ config }) {\n                    // 自定义 Rspack 配置\n                }\n            })\n        );\n    }\n} satisfies GezOptions;\n\n"})}),"\n",(0,n.jsxs)(r.h3,{id:"vue3",children:["Vue3",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#vue3",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"createRspackVue3App"})," 提供了 Vue3 的 ",(0,n.jsx)(r.code,{children:".vue"})," 文件的支持"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    async createDevApp(gez) {\n        return import('@gez/rspack-vue').then((m) =>\n            m.createRspackVue3App(gez, {\n                config ({ config }) {\n                    // 自定义 Rspack 配置\n                }\n            })\n        );\n    }\n} satisfies GezOptions;\n\n"})}),"\n",(0,n.jsxs)(r.h3,{id:"jsxtsx",children:["JSX/TSX",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#jsxtsx",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["目前暂不支持 JSX/TSX ，如果你想要支持它。需要自行添加相关的 Rspack 配置。",(0,n.jsx)(r.a,{href:"https://rspack.dev/guide/tech/vue",target:"_blank",rel:"noopener noreferrer",children:"点击这里"}),"了解 Vue 的相关配置。"]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,d.ah)(),e.components);return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}let t=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["guide%2Fessentials%2Frspack.mdx"]={toc:[{text:"@gez/rspack",id:"gezrspack",depth:2},{text:"安装依赖",id:"安装依赖",depth:3},{text:"No Loader",id:"no-loader",depth:2},{text:"选项",id:"选项",depth:3},{text:"config()",id:"config",depth:4},{text:"例子",id:"例子",depth:3},{text:"Html",id:"html",depth:2},{text:"选项",id:"选项-1",depth:3},{text:"css",id:"css",depth:4},{text:"swcLoader",id:"swcloader",depth:4},{text:"lessLoader",id:"lessloader",depth:4},{text:"styleResourcesLoader",id:"styleresourcesloader",depth:4},{text:"definePlugin",id:"defineplugin",depth:4},{text:"target.web",id:"targetweb",depth:4},{text:"target.node",id:"targetnode",depth:4},{text:"例子",id:"例子-1",depth:3},{text:"@gez/rspack-vue",id:"gezrspack-vue",depth:2},{text:"安装",id:"安装",depth:3},{text:"选项",id:"选项-2",depth:3},{text:"vueLoader",id:"vueloader",depth:4},{text:"Vue2",id:"vue2",depth:3},{text:"Vue3",id:"vue3",depth:3},{text:"JSX/TSX",id:"jsxtsx",depth:3}],title:"Rspack",frontmatter:{}}}}]);