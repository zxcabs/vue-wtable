!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wtable",[],t):"object"==typeof exports?exports.wtable=t():e.wtable=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var c,f="function"==typeof s?s.options:s;if(t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=c):r&&(c=r),c){var d=f.functional,l=d?f.render:f.beforeCreate;d?(f._injectStyles=c,f.render=function(e,t){return c.call(t),l(e,t)}):f.beforeCreate=l?[].concat(l,c):[c]}return{esModule:a,exports:s,options:f}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(10),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,f=function(){},d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function l(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(h(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(h(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function p(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function h(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(c)return f;r.parentNode.removeChild(r)}if(d){var o=u++;r=s||(s=p()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=p(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n){c=n;var r=o(e,t);return l(r),function(t){for(var n=[],a=0;a<r.length;a++){var s=r[a];(u=i[s.id]).refs--,n.push(u)}t?l(r=o(e,t)):r=[];for(a=0;a<n.length;a++){var u;if(0===(u=n[a]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}};var v,g=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"w-table",props:{fixed:Boolean,list:{type:Array,default:[]},isPending:Boolean,orderBy:String,orderDir:String},methods:{click:function(e){var t=e.target;"TH"===t.tagName&&t.dataset.orderBy&&this.clickHeader(t.dataset.orderBy)},clickHeader:function(e){var t=void 0;t=this.orderBy===e&&"asc"===this.orderDir?"desc":"asc",this.change({orderBy:e,orderDir:t})},change:function(e){this.isPending||this.$emit("change",e)}},computed:{classes:function(){return{fixed:this.fixed}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"w-th",props:{orderBy:String,orderDir:String},computed:{sortKey:function(){return this.$attrs["data-order-by"]},sortable:function(){return this.sortKey===this.orderBy},isAsc:function(){return"asc"===this.orderDir},classes:function(){return{desc:!this.isAsc}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"w-pagination",props:{offset:{type:Number,default:0},limit:{type:Number,default:1},total:{type:Number,default:1}},methods:{click:function(e){this.$emit("change",{offset:e*this.limit})}},computed:{totalPages:function(){return Math.floor(this.total/this.limit)},page:function(){return Math.floor(this.offset/this.limit)},pages:function(){var e=[];this.page>0&&e.push({label:"<",page:this.page-1});for(var t=0;t<this.totalPages;t+=1)e.push({label:t+1,page:t,isActive:t===this.page});return this.page<this.totalPages-1&&e.push({label:">",page:this.page+1}),e}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);Object.defineProperty(t,"WTable",{enumerable:!0,get:function(){return a(r).default}});var o=n(12);Object.defineProperty(t,"WTh",{enumerable:!0,get:function(){return a(o).default}});var i=n(16);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"WPagination",{enumerable:!0,get:function(){return a(i).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var a=n(11);var s=function(e){n(8)},u=n(0)(o.a,a.a,!1,s,"data-v-25b2fd95",null);t.default=u.exports},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("de45eace",r,!0)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".fixed[data-v-25b2fd95]{table-layout:fixed;width:100%;height:100%;display:block;position:relative}.fixed tbody[data-v-25b2fd95]{height:100%;overflow:auto}.fixed tfoot[data-v-25b2fd95]{position:absolute;bottom:0;width:100%}.fixed tbody[data-v-25b2fd95],.fixed tfoot[data-v-25b2fd95],.fixed thead[data-v-25b2fd95]{display:block}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{class:e.classes,on:{click:e.click}},[n("thead",{ref:"thead"},[n("tr",[e._t("head")],2)]),e._v(" "),n("tbody",{ref:"tbody"},e._l(e.list,function(t,r){return n("tr",{key:r},[e._t("item",null,{item:t,index:r})],2)})),e._v(" "),e.$slots.foot?n("tfoot",{ref:"tfoot"},[e._t("foot")],2):e._e()])},staticRenderFns:[]};t.a=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var a=n(15);var s=function(e){n(13)},u=n(0)(o.a,a.a,!1,s,"data-v-43746465",null);t.default=u.exports},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("9eb3c676",r,!0)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".desc[data-v-43746465]{transform:rotate(180deg);display:inline-block}",""])},function(e,t,n){"use strict";var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("th",[this._t("default"),this._v(" "),this.sortable?t("span",{class:this.classes},[this._v("^")]):this._e()],2)},staticRenderFns:[]};t.a=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var a=n(17),s=n(0)(o.a,a.a,!1,null,null,null);t.default=s.exports},function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",{staticClass:"w-pagination"},e._l(e.pages,function(t){return n("li",{staticClass:"w-page-item",class:{"is-active":t.isActive},on:{click:function(){return e.click(t.page)}}},[e._v(e._s(t.label))])}))])},staticRenderFns:[]};t.a=r}])});
//# sourceMappingURL=index.js.map