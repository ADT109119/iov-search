(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{289:function(t,e,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(134).default)("ea0a2442",content,!0,{sourceMap:!1})},290:function(t,e,r){"use strict";r(289)},291:function(t,e,r){var n=r(133)((function(i){return i[1]}));n.push([t.i,".trendWord{overflow-x:scroll;word-break:keep-all;text-wrap:nowrap}",""]),n.locals={},t.exports=n},295:function(t,e,r){"use strict";r.r(e);r(16),r(31);var n=r(1),l={__name:"trendList",setup:function(t){var e=Object(n.c)([]),r="https://docs.google.com/spreadsheets/d/e/2PACX-1vSukF2PVJm9QLsJg-9gRoduN13TRYn7vGa8GTFHsAz_hm0BMGAfe6QKjeJy_3baWcCI3sg9Sm-Cflg9/pub?gid=1903002788&single=true&output=tsv";return fetch(r).then((function(t){return t.text()})).then((function(t){t.split("\n")[0].split("\t").forEach((function(t,i){0!=i&&e.value.push(t)}))})),{__sfc:!0,trendData:e,api:r,trendClick:function(text){var t=new CustomEvent("trendClick",{detail:{text:text}});document.dispatchEvent(t)}}}},o=(r(290),r(48)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e("div",{staticClass:"pl-2.5 pt-1 flex flex-nowrap",staticStyle:{"max-width":"calc(100vw - 1.5rem)"}},[e("span",{staticClass:"text-gray-600 font-semibold align-middle"},[t._v("熱門搜尋: ")]),t._v(" "),e("div",{staticClass:"trendWord flex-1"},t._l(r.trendData,(function(n){return e("button",{staticClass:"ml-2 mr-2 text-gray-600 border-b-2 border-gray-600",on:{click:function(t){return r.trendClick(n)}}},[t._v(t._s(n))])})),0)])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,r){"use strict";r.r(e);var n=r(1),l={__name:"searchBar",setup:function(t){var e=Object(n.c)("");return Object(n.b)((function(){document.addEventListener("trendClick",(function(t){console.log(t.detail.text),e.value=t.detail.text}))})),{__sfc:!0,inputText:e}}},o=r(48),component=Object(o.a)(l,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e("div",{staticClass:"max-w-4xl mx-auto sm:px-6 lg:px-8"},[e("label",{staticClass:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",attrs:{for:"default-search"}},[t._v("Search")]),t._v(" "),e("div",{staticClass:"relative"},[e("div",{staticClass:"absolute inset-y-0 left-2.5 flex items-center ps-3 pointer-events-none"},[e("svg",{staticClass:"w-4 h-4 text-gray-500 dark:text-gray-400",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"}},[e("path",{attrs:{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"}})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:r.inputText,expression:"inputText"}],staticClass:"block w-full p-4 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"search",id:"default-search",placeholder:"搜尋職缺",required:""},domProps:{value:r.inputText},on:{input:function(t){t.target.composing||(r.inputText=t.target.value)}}}),t._v(" "),e("button",{staticClass:"text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",attrs:{type:"submit"}},[t._v("搜尋")])]),t._v(" "),e("TrendList")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TrendList:r(295).default})}}]);