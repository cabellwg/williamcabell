(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,f=[];s<c.length;s++)a=c[s],o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"../static/client-app/js/"+({}[e]||e)+"-legacy."+{"chunk-25e2":"df96fca8","chunk-61a9":"fa8b9fde","chunk-7ed9":"a3a9ac3c","chunk-a8e5":"d20a78d0","chunk-feaa":"c211d8cd","6d93":"6e64418d","3b2f":"1bda281f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-25e2":1,"chunk-61a9":1,"chunk-7ed9":1,"chunk-a8e5":1,"chunk-feaa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="../static/client-app/css/"+({}[e]||e)+"."+{"chunk-25e2":"d33a1005","chunk-61a9":"f61f69c4","chunk-7ed9":"6964bcb3","chunk-a8e5":"c3857d68","chunk-feaa":"cbdcaa92","6d93":"31d6cfe0","3b2f":"31d6cfe0"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){c=s[u],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var l,s=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,s.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;u.push([2,"chunk-vendors"]),n()})({2:function(e,t,n){e.exports=n("56d7")},"35a3":function(e,t,n){},"377d":function(e,t,n){"use strict";var r=n("35a3"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("551c");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("the-sidebar"),n("router-view")],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav",attrs:{id:"nav"}},[n("router-link",{staticClass:"nav__item",attrs:{to:"/"}},[n("label",[e._v("Home")])]),n("router-link",{staticClass:"nav__item",attrs:{to:"/projects"}},[n("label",[e._v("Projects")])]),n("router-link",{staticClass:"nav__item",attrs:{to:"/resume"}},[n("label",[e._v("Résumé")])]),n("router-link",{staticClass:"nav__item",attrs:{to:"/contact"}},[n("label",[e._v("Contact")])])],1)},c=[],i=(n("377d"),n("2877")),l={},s=Object(i["a"])(l,u,c,!1,null,null,null);s.options.__file="the-sidebar.vue";var f=s.exports,d={components:{TheSidebar:f}},p=d,h=(n("d0d1"),Object(i["a"])(p,a,o,!1,null,null,null));h.options.__file="app.vue";var m=h.exports,v=n("8c4f"),b=function(){return n.e("chunk-a8e5").then(n.bind(null,"6511"))},g=function(){return n.e("chunk-feaa").then(n.bind(null,"2ff2"))},k=function(){return n.e("chunk-25e2").then(n.bind(null,"8672"))},y=function(){return n.e("chunk-7ed9").then(n.bind(null,"4fe8"))},_=function(){return n.e("chunk-61a9").then(n.bind(null,"63e6"))};r["a"].use(v["a"]);var w=new v["a"]({mode:"history",routes:[{path:"/",name:"home",component:b},{path:"/projects",name:"projects",component:g},{path:"/resume",name:"resume",component:k},{path:"/contact",name:"contact",component:y},{path:"*",component:_}],scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});r["a"].config.productionTip=!1,new r["a"]({router:w,render:function(e){return e(m)}}).$mount("#app")},"86f8":function(e,t,n){},d0d1:function(e,t,n){"use strict";var r=n("86f8"),a=n.n(r);a.a}});
//# sourceMappingURL=app-legacy.078ac4d2.js.map