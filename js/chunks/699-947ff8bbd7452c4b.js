"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{4697:function(e,t,r){r.d(t,{y1:function(){return a}});var n=r(7294);function a(e,t,r){var a=this,l=(0,n.useRef)(null),o=(0,n.useRef)(0),u=(0,n.useRef)(null),i=(0,n.useRef)([]),c=(0,n.useRef)(),s=(0,n.useRef)(),f=(0,n.useRef)(e),d=(0,n.useRef)(!0);(0,n.useEffect)(function(){f.current=e},[e]);var p=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var m=!!(r=r||{}).leading,h=!("trailing"in r)||!!r.trailing,v="maxWait"in r,b=v?Math.max(+r.maxWait||0,t):null;return(0,n.useEffect)(function(){return d.current=!0,function(){d.current=!1}},[]),(0,n.useMemo)(function(){var e=function(e){var t=i.current,r=c.current;return i.current=c.current=null,o.current=e,s.current=f.current.apply(r,t)},r=function(e,t){p&&cancelAnimationFrame(u.current),u.current=p?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!d.current)return!1;var r=e-l.current;return!l.current||r>=t||r<0||v&&e-o.current>=b},g=function(t){return u.current=null,h&&i.current?e(t):(i.current=c.current=null,s.current)},w=function e(){var a=Date.now();if(n(a))return g(a);if(d.current){var u=t-(a-l.current);r(e,v?Math.min(u,b-(a-o.current)):u)}},x=function(){var f=Date.now(),p=n(f);if(i.current=[].slice.call(arguments),c.current=a,l.current=f,p){if(!u.current&&d.current)return o.current=l.current,r(w,t),m?e(l.current):s.current;if(v)return r(w,t),e(l.current)}return u.current||r(w,t),s.current};return x.cancel=function(){u.current&&(p?cancelAnimationFrame(u.current):clearTimeout(u.current)),o.current=0,i.current=l.current=c.current=u.current=null},x.isPending=function(){return!!u.current},x.flush=function(){return u.current?g(Date.now()):s.current},x},[m,v,t,b,h,p])}},221:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(e),(t=(0,a.default)(t,o)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1)),!0===t.allow_wildcard&&0===e.indexOf("*.")&&(e=e.substring(2));var r=e.split("."),l=r[r.length-1];return!(t.require_tld&&(r.length<2||!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(l)||/\s/.test(l))||!t.allow_numeric_tld&&/^\d+$/.test(l))&&r.every(function(e){return!(e.length>63||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e)||/[\uff01-\uff5e]/.test(e)||/^-|-$/.test(e)||!t.allow_underscores&&/_/.test(e))})};var n=l(r(5571)),a=l(r(4808));function l(e){return e&&e.__esModule?e:{default:e}}var o={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1};e.exports=t.default,e.exports.default=t.default},1028:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return((0,a.default)(t),r=String(r))?"4"===r?!!u.test(t)&&t.split(".").sort(function(e,t){return e-t})[3]<=255:"6"===r&&!!c.test(t):e(t,4)||e(t,6)};var n,a=(n=r(5571))&&n.__esModule?n:{default:n},l="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",o="(".concat(l,"[.]){3}").concat(l),u=RegExp("^".concat(o,"$")),i="(?:[0-9a-fA-F]{1,4})",c=RegExp("^("+"(?:".concat(i,":){7}(?:").concat(i,"|:)|")+"(?:".concat(i,":){6}(?:").concat(o,"|:").concat(i,"|:)|")+"(?:".concat(i,":){5}(?::").concat(o,"|(:").concat(i,"){1,2}|:)|")+"(?:".concat(i,":){4}(?:(:").concat(i,"){0,1}:").concat(o,"|(:").concat(i,"){1,3}|:)|")+"(?:".concat(i,":){3}(?:(:").concat(i,"){0,2}:").concat(o,"|(:").concat(i,"){1,4}|:)|")+"(?:".concat(i,":){2}(?:(:").concat(i,"){0,3}:").concat(o,"|(:").concat(i,"){1,5}|:)|")+"(?:".concat(i,":){1}(?:(:").concat(i,"){0,4}:").concat(o,"|(:").concat(i,"){1,6}|:)|")+"(?::((?::".concat(i,"){0,5}:").concat(o,"|(?::").concat(i,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");e.exports=t.default,e.exports.default=t.default},2492:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,n.default)(e),!e||/[\s<>]/.test(e)||0===e.indexOf("mailto:")||(t=(0,o.default)(t,c)).validate_length&&e.length>=2083||!t.allow_fragments&&e.includes("#")||!t.allow_query_components&&(e.includes("?")||e.includes("&")))return!1;if((b=(e=(b=(e=(b=e.split("#")).shift()).split("?")).shift()).split("://")).length>1){if(u=b.shift().toLowerCase(),t.require_valid_protocol&&-1===t.protocols.indexOf(u))return!1}else if(t.require_protocol)return!1;else if("//"===e.substr(0,2)){if(!t.allow_protocol_relative_urls)return!1;b[0]=e.substr(2)}if(""===(e=b.join("://")))return!1;if(""===(e=(b=e.split("/")).shift())&&!t.require_host)return!0;if((b=e.split("@")).length>1){if(t.disallow_auth||""===b[0]||(d=b.shift()).indexOf(":")>=0&&d.split(":").length>2)return!1;var r,u,d,p,m,h,v,b,g,w=function(e){if(Array.isArray(e))return e}(r=d.split(":"))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(i){a=!0,l=i}finally{try{n||null==u.return||u.return()}finally{if(a)throw l}}return r}}(r,2)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),x=w[0],y=w[1];if(""===x&&""===y)return!1}m=b.join("@"),v=null,g=null;var E=m.match(s);if(E?(p="",g=E[1],v=E[2]||null):(p=(b=m.split(":")).shift(),b.length&&(v=b.join(":"))),null!==v&&v.length>0){if(h=parseInt(v,10),!/^[0-9]+$/.test(v)||h<=0||h>65535)return!1}else if(t.require_port)return!1;return t.host_whitelist?f(p,t.host_whitelist):!!((0,l.default)(p)||(0,a.default)(p,t)||g&&(0,l.default)(g,6))&&(p=p||g,!(t.host_blacklist&&f(p,t.host_blacklist)))};var n=u(r(5571)),a=u(r(221)),l=u(r(1028)),o=u(r(4808));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var c={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,allow_fragments:!0,allow_query_components:!0,validate_length:!0},s=/^\[([^\]]+)\](?::([0-9]+))?$/;function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];if(e===n||"[object RegExp]"===Object.prototype.toString.call(n)&&n.test(e))return!0}return!1}e.exports=t.default,e.exports.default=t.default},5571:function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t=r(e);throw null===e?t="null":"object"===t&&(t=e.constructor.name),TypeError("Expected a string but received a ".concat(t))}},e.exports=t.default,e.exports.default=t.default},4808:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)void 0===e[r]&&(e[r]=t[r]);return e},e.exports=t.default,e.exports.default=t.default},9808:function(e,t,r){r.d(t,{O:function(){return L}});var n,a=r(7294),l=r(2351),o=r(9946),u=r(2984),i=r(1363),c=r(4575),s=r(6723),f=r(3784),d=r(4157),p=r(3855),m=r(6045);function h({onFocus:e}){let[t,r]=(0,a.useState)(!0);return t?a.createElement(m._,{as:"button",type:"button",features:m.A.Focusable,onFocus:t=>{t.preventDefault();let n,a=50;n=requestAnimationFrame(function t(){if(a--<=0){n&&cancelAnimationFrame(n);return}if(e()){r(!1),cancelAnimationFrame(n);return}n=requestAnimationFrame(t)})}}):null}var v=r(3781),b=r(1021),g=r(5466),w=((n=w||{})[n.SetSelectedIndex=0]="SetSelectedIndex",n[n.RegisterTab=1]="RegisterTab",n[n.UnregisterTab=2]="UnregisterTab",n[n.RegisterPanel=3]="RegisterPanel",n[n.UnregisterPanel=4]="UnregisterPanel",n);let x={0(e,t){let r=e.tabs.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))});if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(r[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(r[r.length-1])};let n=e.tabs.slice(0,t.index),a=[...e.tabs.slice(t.index),...n].find(e=>r.includes(e));return a?{...e,selectedIndex:e.tabs.indexOf(a)}:e},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=(0,c.z2)([...e.tabs,t.tab],e=>e.current),l=null!=(r=a.indexOf(n))?r:e.selectedIndex;return -1===l&&(l=e.selectedIndex),{...e,tabs:a,selectedIndex:l}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,c.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},y=(0,a.createContext)(null);function E(e){let t=(0,a.useContext)(y);if(null===t){let r=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,E),r}return t}y.displayName="TabsSSRContext";let _=(0,a.createContext)(null);function k(e){let t=(0,a.useContext)(_);if(null===t){let r=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,k),r}return t}_.displayName="TabsDataContext";let T=(0,a.createContext)(null);function R(e){let t=(0,a.useContext)(T);if(null===t){let r=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,R),r}return t}function M(e,t){return(0,u.E)(t.type,x,e,t)}T.displayName="TabsActionsContext";let P=a.Fragment,O=(0,l.yV)(function(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:o=!1,onChange:u,selectedIndex:i=null,...c}=e,d=n?"vertical":"horizontal",m=o?"manual":"auto",b=null!==i,g=(0,f.T)(t),[w,x]=(0,a.useReducer)(M,{selectedIndex:null!=i?i:r,tabs:[],panels:[]}),E=(0,a.useMemo)(()=>({selectedIndex:w.selectedIndex}),[w.selectedIndex]),k=(0,p.E)(u||(()=>{})),R=(0,p.E)(w.tabs),O=(0,a.useMemo)(()=>({orientation:d,activation:m,...w}),[d,m,w]),A=(0,v.z)(e=>(x({type:1,tab:e}),()=>x({type:2,tab:e}))),j=(0,v.z)(e=>(x({type:3,panel:e}),()=>x({type:4,panel:e}))),C=(0,v.z)(e=>{I.current!==e&&k.current(e),b||x({type:0,index:e})}),I=(0,p.E)(b?e.selectedIndex:w.selectedIndex),L=(0,a.useMemo)(()=>({registerTab:A,registerPanel:j,change:C}),[]);(0,s.e)(()=>{x({type:0,index:null!=i?i:r})},[i]);let S=(0,a.useRef)({tabs:[],panels:[]});return a.createElement(y.Provider,{value:S},a.createElement(T.Provider,{value:L},a.createElement(_.Provider,{value:O},O.tabs.length<=0&&a.createElement(h,{onFocus:()=>{var e,t;for(let r of R.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(t=r.current)||t.focus(),!0;return!1}}),(0,l.sY)({ourProps:{ref:g},theirProps:c,slot:E,defaultTag:P,name:"Tabs"}))))}),A=(0,l.yV)(function(e,t){let{orientation:r,selectedIndex:n}=k("Tab.List"),a=(0,f.T)(t);return(0,l.sY)({ourProps:{ref:a,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:"div",name:"Tabs.List"})}),j=(0,l.yV)(function(e,t){var r,n;let p=(0,o.M)(),{id:m=`headlessui-tabs-tab-${p}`,...h}=e,{orientation:w,activation:x,selectedIndex:y,tabs:_,panels:T}=k("Tab"),M=R("Tab"),P=k("Tab"),O=E("Tab"),A=(0,a.useRef)(null),j=(0,f.T)(A,t);(0,s.e)(()=>M.registerTab(A),[M,A]);let C=O.current.tabs.indexOf(m);-1===C&&(C=O.current.tabs.push(m)-1);let I=_.indexOf(A);-1===I&&(I=C);let L=I===y,S=(0,v.z)(e=>{var t;let r=e();if(r===c.fE.Success&&"auto"===x){let n=null==(t=(0,g.r)(A))?void 0:t.activeElement,a=P.tabs.findIndex(e=>e.current===n);-1!==a&&M.change(a)}return r}),z=(0,v.z)(e=>{let t=_.map(e=>e.current).filter(Boolean);if(e.key===i.R.Space||e.key===i.R.Enter){e.preventDefault(),e.stopPropagation(),M.change(I);return}switch(e.key){case i.R.Home:case i.R.PageUp:return e.preventDefault(),e.stopPropagation(),S(()=>(0,c.jA)(t,c.TO.First));case i.R.End:case i.R.PageDown:return e.preventDefault(),e.stopPropagation(),S(()=>(0,c.jA)(t,c.TO.Last))}if(S(()=>(0,u.E)(w,{vertical:()=>e.key===i.R.ArrowUp?(0,c.jA)(t,c.TO.Previous|c.TO.WrapAround):e.key===i.R.ArrowDown?(0,c.jA)(t,c.TO.Next|c.TO.WrapAround):c.fE.Error,horizontal:()=>e.key===i.R.ArrowLeft?(0,c.jA)(t,c.TO.Previous|c.TO.WrapAround):e.key===i.R.ArrowRight?(0,c.jA)(t,c.TO.Next|c.TO.WrapAround):c.fE.Error}))===c.fE.Success)return e.preventDefault()}),F=(0,a.useRef)(!1),$=(0,v.z)(()=>{var e;F.current||(F.current=!0,null==(e=A.current)||e.focus(),M.change(I),(0,b.Y)(()=>{F.current=!1}))}),D=(0,v.z)(e=>{e.preventDefault()}),q=(0,a.useMemo)(()=>({selected:L}),[L]),W={ref:j,onKeyDown:z,onMouseDown:D,onClick:$,id:m,role:"tab",type:(0,d.f)(e,A),"aria-controls":null==(n=null==(r=T[I])?void 0:r.current)?void 0:n.id,"aria-selected":L,tabIndex:L?0:-1};return(0,l.sY)({ourProps:W,theirProps:h,slot:q,defaultTag:"button",name:"Tabs.Tab"})}),C=(0,l.yV)(function(e,t){let{selectedIndex:r}=k("Tab.Panels"),n=(0,f.T)(t),o=(0,a.useMemo)(()=>({selectedIndex:r}),[r]);return(0,l.sY)({ourProps:{ref:n},theirProps:e,slot:o,defaultTag:"div",name:"Tabs.Panels"})}),I=l.AN.RenderStrategy|l.AN.Static,L=Object.assign(j,{Group:O,List:A,Panels:C,Panel:(0,l.yV)(function(e,t){var r,n,u,i;let c=(0,o.M)(),{id:d=`headlessui-tabs-panel-${c}`,...p}=e,{selectedIndex:h,tabs:v,panels:b}=k("Tab.Panel"),g=R("Tab.Panel"),w=E("Tab.Panel"),x=(0,a.useRef)(null),y=(0,f.T)(x,t);(0,s.e)(()=>g.registerPanel(x),[g,x]);let _=w.current.panels.indexOf(d);-1===_&&(_=w.current.panels.push(d)-1);let T=b.indexOf(x);-1===T&&(T=_);let M=T===h,P=(0,a.useMemo)(()=>({selected:M}),[M]),O={ref:y,id:d,role:"tabpanel","aria-labelledby":null==(n=null==(r=v[T])?void 0:r.current)?void 0:n.id,tabIndex:M?0:-1};return M||null!=(u=p.unmount)&&!u||null!=(i=p.static)&&i?(0,l.sY)({ourProps:O,theirProps:p,slot:P,defaultTag:"div",features:I,visible:M,name:"Tabs.Panel"}):a.createElement(m._,{as:"span",...O})})})},5652:function(e,t,r){var n=r(7294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"}))});t.Z=a},7292:function(e,t,r){var n=r(7294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}))});t.Z=a},5071:function(e,t,r){var n=r(7294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"}))});t.Z=a},3658:function(e,t,r){var n=r(7294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"}))});t.Z=a},7272:function(e,t,r){var n=r(7294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"}))});t.Z=a},7621:function(e,t,r){var n=r(7294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"}))});t.Z=a},5350:function(e,t,r){var n=r(7294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"}))});t.Z=a},6197:function(e,t,r){var n=r(7294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"}))});t.Z=a},5362:function(e,t,r){var n=r(7294);let a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});t.Z=a},5820:function(e,t,r){r.d(t,{M:function(){return v}});var n=r(7294),a=r(404),l=r(8868);function o(){let e=(0,n.useRef)(!1);return(0,l.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var u=r(240),i=r(6681);class c extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function s({children:e,isPresent:t}){let r=(0,n.useId)(),a=(0,n.useRef)(null),l=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:e,height:n,top:o,left:u}=l.current;if(t||!a.current||!e||!n)return;a.current.dataset.motionPopId=r;let i=document.createElement("style");return document.head.appendChild(i),i.sheet&&i.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${o}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(i)}},[t]),n.createElement(c,{isPresent:t,childRef:a,sizeRef:l},n.cloneElement(e,{ref:a}))}let f=({children:e,initial:t,isPresent:r,onExitComplete:a,custom:l,presenceAffectsLayout:o,mode:c})=>{let f=(0,i.h)(d),p=(0,n.useId)(),m=(0,n.useMemo)(()=>({id:p,initial:t,isPresent:r,custom:l,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;a&&a()},register:e=>(f.set(e,!1),()=>f.delete(e))}),o?void 0:[r]);return(0,n.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[r]),n.useEffect(()=>{r||f.size||!a||a()},[r]),"popLayout"===c&&(e=n.createElement(s,{isPresent:r},e)),n.createElement(u.O.Provider,{value:m},e)};function d(){return new Map}var p=r(5364),m=r(5411);let h=e=>e.key||"",v=({children:e,custom:t,initial:r=!0,onExitComplete:u,exitBeforeEnter:i,presenceAffectsLayout:c=!0,mode:s="sync"})=>{i&&(s="wait");let[d]=function(){let e=o(),[t,r]=(0,n.useState)(0),l=(0,n.useCallback)(()=>{e.current&&r(t+1)},[t]),u=(0,n.useCallback)(()=>a.Z_.postRender(l),[l]);return[u,t]}(),v=(0,n.useContext)(p.p).forceRender;v&&(d=v);let b=o(),g=function(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}(e),w=g,x=new Set,y=(0,n.useRef)(w),E=(0,n.useRef)(new Map).current,_=(0,n.useRef)(!0);if((0,l.L)(()=>{_.current=!1,function(e,t){e.forEach(e=>{let r=h(e);t.set(r,e)})}(g,E),y.current=w}),(0,m.z)(()=>{_.current=!0,E.clear(),x.clear()}),_.current)return n.createElement(n.Fragment,null,w.map(e=>n.createElement(f,{key:h(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:c,mode:s},e)));w=[...w];let k=y.current.map(h),T=g.map(h),R=k.length;for(let M=0;M<R;M++){let P=k[M];-1===T.indexOf(P)&&x.add(P)}return"wait"===s&&x.size&&(w=[]),x.forEach(e=>{if(-1!==T.indexOf(e))return;let r=E.get(e);if(!r)return;let a=k.indexOf(e),l=()=>{E.delete(e),x.delete(e);let t=y.current.findIndex(t=>t.key===e);if(y.current.splice(t,1),!x.size){if(y.current=g,!1===b.current)return;d(),u&&u()}};w.splice(a,0,n.createElement(f,{key:h(r),isPresent:!1,onExitComplete:l,custom:t,presenceAffectsLayout:c,mode:s},r))}),w=w.map(e=>{let t=e.key;return x.has(t)?e:n.createElement(f,{key:h(e),isPresent:!0,presenceAffectsLayout:c,mode:s},e)}),n.createElement(n.Fragment,null,x.size?w:w.map(e=>(0,n.cloneElement)(e)))}}}]);