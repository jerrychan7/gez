import*as e from"ssr-vue2-remote/npm/@gez/vue-ui";import*as t from"ssr-vue2-remote/npm/vue";import*as r from"ssr-vue2-remote/src/components/layout.vue";var o,n,i,u,a,s,f,c={288:function(e,t,r){e.exports={}},725:function(t){t.exports=e},946:function(e){e.exports=t},527:function(e){e.exports=r}},l={};function p(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return c[e](r,r.exports,p),r.exports}p.m=c,p.d=function(e,t){for(var r in t)p.o(t,r)&&!p.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},p.f={},p.e=function(e){return Promise.all(Object.keys(p.f).reduce(function(t,r){return p.f[r](e,t),t},[]))},p.k=function(e){return"chunks/"+e+".a2d38135.final.css"},p.u=function(e){return"chunks/"+e+".0f6d9ec8.final.js"},p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),p.p=e+"../"})(),o={626:0},n="__ssr_vue__remote__",i=(e,t)=>{o[t]=0},u="data-webpack-loading",a=function(e,t,r,o,i){var a,s,f="chunk-"+e;if(!o){for(var c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var d=c[l],m=d.getAttribute("href")||d.href;if(m&&!m.startsWith(p.p)&&(m=p.p+(m.startsWith("/")?m.slice(1):m)),"stylesheet"==d.rel&&(m&&m.startsWith(t)||d.getAttribute("data-webpack")==n+":"+f)){a=d;break}}if(!r)return a}!a&&(s=!0,a=document.createElement("link"),p.nc&&a.setAttribute("nonce",p.nc),a.setAttribute("data-webpack",n+":"+f),i&&a.setAttribute("fetchpriority",i),a.setAttribute(u,1),a.rel="stylesheet",a.href=t);var v=function(e,t){if(a.onerror=a.onload=null,a.removeAttribute(u),clearTimeout(h),t&&"load"!=t.type&&a.parentNode.removeChild(a),r(t),e)return e(t)};if(a.getAttribute(u)){var h=setTimeout(v.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=v.bind(null,a.onerror),a.onload=v.bind(null,a.onload)}else v(void 0,{type:"load",target:a});return o?document.head.insertBefore(a,o):s&&document.head.appendChild(a),a},i(p.m,0,"626"),p.f.css=function(e,t,r){var n=p.o(o,e)?o[e]:void 0;if(0!==n){if(n)t.push(n[2]);else{var u=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=u);var s=p.p+p.k(e),f=Error();a(e,s,function(t){if(p.o(o,e)&&(0!==(n=o[e])&&(o[e]=void 0),n)){if("load"!==t.type){var r=t&&t.type,u=t&&t.target&&t.target.src;f.message="Loading css chunk "+e+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,n[1](f)}else i(p.m,e),n[0]()}},void 0,r)}}},s={626:0},f=function(e){var t=e.ids,r=e.modules,o=e.runtime,n,i,u=0;for(n in r)p.o(r,n)&&(p.m[n]=r[n]);for(o&&o(p);u<t.length;u++)i=t[u],p.o(s,i)&&s[i]&&s[i][0](),s[t[u]]=0},p.f.j=function(e,t){var r=p.o(s,e)?s[e]:void 0;if(0!==r){if(r)t.push(r[1]);else{var o=import("../"+p.u(e)).then(f,function(t){throw 0!==s[e]&&(s[e]=void 0),t}),o=Promise.race([o,new Promise(function(t){r=s[e]=[t]})]);t.push(r[1]=o)}}},p("288");var d=p("946");let m=(0,d.defineAsyncComponent)(()=>p.e("891").then(p.bind(p,920)));({app:new d.default({render:e=>e(m)})}).app.$mount('[data-server-rendered="true"]');