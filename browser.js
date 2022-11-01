// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ifthenAsync=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,l=o.__lookupGetter__,c=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,p,y;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(e,t)||c.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,t,r.get),y&&f&&f.call(e,t,r.set),e};var a=r;function p(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[w],i=w,t=null!=(o=e)&&v.call(o,i);try{e[w]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[w]=r:delete e[w],n}:function(e){return d.call(e)},g=Boolean.prototype.toString;var m=b();function h(e){return"object"==typeof e&&(e instanceof Boolean||(m?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===_(e)))}function j(e){return y(e)||h(e)}function S(){return new Function("return this;")()}p(j,"isPrimitive",y),p(j,"isObject",h);var E="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O="object"==typeof A?A:null;var B=function(e){if(arguments.length){if(!y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return S()}if(E)return E;if(T)return T;if(O)return O;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,U=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",C);var V=Array.isArray?Array.isArray:function(e){return"[object Array]"===_(e)};function k(e){return null!==e&&"object"==typeof e}function G(e){var t,r,n,o;if(("Object"===(r=_(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return k(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(k,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!V(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(k));var L="function"==typeof e||"object"==typeof U||"function"==typeof P?function(e){return G(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?G(e).toLowerCase():t};function F(e){return"function"===L(e)}function I(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(e,t,r,n){if(!F(e))throw new TypeError(I("0iU3p",e));if(!F(t))throw new TypeError(I("0iU2S",t));if(!F(r))throw new TypeError(I("0iU3Z",r));if(!F(n))throw new TypeError(I("0iU43",n));function o(e){var t,r,o;if(e)return n(e);for(t=arguments.length,(r=new Array(t))[0]=null,o=1;o<t;o++)r[o]=arguments[o];n.apply(null,r)}e((function(e,i){if(e)return n(e);if(i)return t(o);r(o)}))}}));
//# sourceMappingURL=browser.js.map
