(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],s=0,f=[];s<c.length;s++)o=c[s],a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"../static/client-app/js/"+({}[e]||e)+"."+{"chunk-1514":"4fbd939d","chunk-1e98":"72525f32","chunk-7933":"9a54a558","chunk-4f24":"55fe9eb5","chunk-5ff4":"d762d19a","chunk-859b":"d9e16d11","3b2f":"1bda281f","6d93":"6e64418d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1514":1,"chunk-1e98":1,"chunk-7933":1,"chunk-4f24":1,"chunk-5ff4":1,"chunk-859b":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="../static/client-app/css/"+({}[e]||e)+"."+{"chunk-1514":"8a6c5994","chunk-1e98":"38af9f55","chunk-7933":"767825d7","chunk-4f24":"6255ebb2","chunk-5ff4":"180cefe4","chunk-859b":"0571cd7b","3b2f":"31d6cfe0","6d93":"31d6cfe0"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){c=s[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var l,s=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),l=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,s.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;u.push([2,"chunk-vendors"]),n()})({2:function(e,t,n){e.exports=n("56d7")},"35a3":function(e,t,n){},"377d":function(e,t,n){"use strict";var r=n("35a3"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("the-sidebar"),n("router-view")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav",attrs:{id:"nav"}},[n("router-link",{staticClass:"nav__item",attrs:{to:"/"}},[n("label",[e._v("Home")])]),n("router-link",{staticClass:"nav__item",attrs:{to:"/projects"}},[n("label",[e._v("Projects")])]),n("router-link",{staticClass:"nav__item",attrs:{to:"/resume"}},[n("label",[e._v("Résumé")])]),n("router-link",{staticClass:"nav__item",attrs:{to:"/contact"}},[n("label",[e._v("Contact")])])],1)},c=[],i=(n("377d"),n("2877")),l={},s=Object(i["a"])(l,u,c,!1,null,null,null);s.options.__file="the-sidebar.vue";var f=s.exports,p={components:{TheSidebar:f}},d=p,h=(n("d0d1"),Object(i["a"])(d,o,a,!1,null,null,null));h.options.__file="app.vue";var m=h.exports,v=n("8c4f");const b=()=>n.e("chunk-4f24").then(n.bind(null,"6511")),k=()=>Promise.all([n.e("chunk-1514"),n.e("chunk-1e98")]).then(n.bind(null,"2ff2")),g=()=>Promise.all([n.e("chunk-1514"),n.e("chunk-7933")]).then(n.bind(null,"8672")),y=()=>n.e("chunk-859b").then(n.bind(null,"4fe8")),_=()=>n.e("chunk-5ff4").then(n.bind(null,"63e6"));r["a"].use(v["a"]);var w=new v["a"]({mode:"history",routes:[{path:"/",name:"home",component:b},{path:"/projects",name:"projects",component:k},{path:"/resume",name:"resume",component:g},{path:"/contact",name:"contact",component:y},{path:"*",component:_}],scrollBehavior(e,t,n){return n||{x:0,y:0}}});r["a"].config.productionTip=!1,new r["a"]({router:w,render:e=>e(m)}).$mount("#app")},"86f8":function(e,t,n){},d0d1:function(e,t,n){"use strict";var r=n("86f8"),o=n.n(r);o.a}});
//# sourceMappingURL=app.129f6b4b.js.map