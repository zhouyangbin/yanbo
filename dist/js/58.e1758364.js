webpackJsonp([58],{"43ll":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Biqn"),o=n.n(r),i=n("OE2U"),u=n("BHhq"),c=(n("N+Om"),{data:function(){return{options:[],constants:{LABEL_NAME:i["_45"],LABEL_TAL_EMAIL:i["_62"],ROLE:i["_114"],LABEL_CONFIRM:i["_35"],LABEL_CANCEL:i["_34"]}}},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"用户信息"},userForm:{type:Object,default:function(){return{email:"",name:"",roles:[],empID:""}}},disabled:{type:Boolean,default:!1},submit:{type:Function,default:function(){return function(){}}}},methods:{closeDialog:function(){this.$emit("update:visible",!1)},handelSubmit:function(){this.userForm.email&&this.userForm.name&&0!=this.userForm.roles.length?this.submit().then(function(e){}):this.$message({message:"企业邮箱、姓名、角色都是必填项哦！",type:"warning"})},querySearchAsync:function(e,t){this.$emit("update:userForm",Object.assign({},this.userForm,{name:""})),e.trim()?Object(u["_7"])({email:e}).then(function(e){if(e){for(var n=e.length-1;n>=0;n--)e[n].value=e[n].name+" - "+e[n].workcode+" - "+e[n].department;t(e)}}).catch(function(e){t([])}):t([])},handleSelect:function(e){this.$emit("update:userForm",Object.assign({},this.userForm,{email:e.email,name:e.name,empID:e.workcode}))},roleChange:function(e){this.$emit("update:userForm",o()({},this.userForm,{roles:e}))},getRoleList:function(){var e=this;return Object(u["z"])().then(function(t){e.options=t})}},computed:{selectedRoles:function(){return this.userForm.roles.map(function(e){return e.id})}},created:function(){this.getRoleList()}}),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.title,visible:e.visible,width:"25%",center:"","before-close":e.closeDialog},on:{"update:visible":function(t){e.visible=t}}},[n("el-form",{staticClass:"user-form"},[n("el-form-item",[n("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:e.constants.LABEL_TAL_EMAIL,disabled:e.disabled,autofocus:!0},on:{select:e.handleSelect},model:{value:e.userForm.email,callback:function(t){e.$set(e.userForm,"email",t)},expression:"userForm.email"}})],1),n("el-form-item",[n("el-input",{attrs:{type:"text",placeholder:e.constants.LABEL_NAME,"auto-complete":"off",disabled:""},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),n("el-form-item",[n("el-select",{staticStyle:{display:"block"},attrs:{"value-key":"id",value:e.userForm.roles,multiple:"",placeholder:e.constants.ROLE},on:{change:e.roleChange}},e._l(e.options,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e}})}))],1)],1),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",round:""},on:{click:e.handelSubmit}},[e._v(e._s(e.constants.LABEL_CONFIRM))]),n("el-button",{attrs:{round:""},on:{click:e.closeDialog}},[e._v(e._s(e.constants.LABEL_CANCEL))])],1)],1)},s=[],l=n("XyMi");function f(e){n("P+tL")}var p=!1,d=f,y=null,g=null,m=Object(l["a"])(c,a,s,p,d,y,g);t["default"]=m.exports},"N+Om":function(e,t,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,o=0,i=Math.min(n,r);o<i;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0}function o(e){return t.Buffer&&"function"===typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var i=n("OMJi"),u=Object.prototype.hasOwnProperty,c=Array.prototype.slice,a=function(){return"foo"===function(){}.name}();function s(e){return Object.prototype.toString.call(e)}function l(e){return!o(e)&&("function"===typeof t.ArrayBuffer&&("function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var f=e.exports=b,p=/\s*function\s+([^\(\s]*)\s*/;function d(e){if(i.isFunction(e)){if(a)return e.name;var t=e.toString(),n=t.match(p);return n&&n[1]}}function y(e,t){return"string"===typeof e?e.length<t?e:e.slice(0,t):e}function g(e){if(a||!i.isFunction(e))return i.inspect(e);var t=d(e),n=t?": "+t:"";return"[Function"+n+"]"}function m(e){return y(g(e.actual),128)+" "+e.operator+" "+y(g(e.expected),128)}function h(e,t,n,r,o){throw new f.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:o})}function b(e,t){e||h(e,!0,t,"==",f.ok)}function v(e,t,n,u){if(e===t)return!0;if(o(e)&&o(t))return 0===r(e,t);if(i.isDate(e)&&i.isDate(t))return e.getTime()===t.getTime();if(i.isRegExp(e)&&i.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"===typeof e||null!==t&&"object"===typeof t){if(l(e)&&l(t)&&s(e)===s(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(o(e)!==o(t))return!1;u=u||{actual:[],expected:[]};var c=u.actual.indexOf(e);return-1!==c&&c===u.expected.indexOf(t)||(u.actual.push(e),u.expected.push(t),O(e,t,n,u))}return n?e===t:e==t}function E(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function O(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(i.isPrimitive(e)||i.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var o=E(e),u=E(t);if(o&&!u||!o&&u)return!1;if(o)return e=c.call(e),t=c.call(t),v(e,t,n);var a,s,l=w(e),f=w(t);if(l.length!==f.length)return!1;for(l.sort(),f.sort(),s=l.length-1;s>=0;s--)if(l[s]!==f[s])return!1;for(s=l.length-1;s>=0;s--)if(a=l[s],!v(e[a],t[a],n,r))return!1;return!0}function S(e,t,n){v(e,t,!0)&&h(e,t,n,"notDeepStrictEqual",S)}function A(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function j(e){var t;try{e()}catch(e){t=e}return t}function x(e,t,n,r){var o;if("function"!==typeof t)throw new TypeError('"block" argument must be a function');"string"===typeof n&&(r=n,n=null),o=j(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!o&&h(o,n,"Missing expected exception"+r);var u="string"===typeof r,c=!e&&i.isError(o),a=!e&&o&&!n;if((c&&u&&A(o,n)||a)&&h(o,n,"Got unwanted exception"+r),e&&o&&n&&!A(o,n)||!e&&o)throw o}f.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=m(this),this.generatedMessage=!0);var t=e.stackStartFunction||h;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var r=n.stack,o=d(t),i=r.indexOf("\n"+o);if(i>=0){var u=r.indexOf("\n",i+1);r=r.substring(u+1)}this.stack=r}}},i.inherits(f.AssertionError,Error),f.fail=h,f.ok=b,f.equal=function(e,t,n){e!=t&&h(e,t,n,"==",f.equal)},f.notEqual=function(e,t,n){e==t&&h(e,t,n,"!=",f.notEqual)},f.deepEqual=function(e,t,n){v(e,t,!1)||h(e,t,n,"deepEqual",f.deepEqual)},f.deepStrictEqual=function(e,t,n){v(e,t,!0)||h(e,t,n,"deepStrictEqual",f.deepStrictEqual)},f.notDeepEqual=function(e,t,n){v(e,t,!1)&&h(e,t,n,"notDeepEqual",f.notDeepEqual)},f.notDeepStrictEqual=S,f.strictEqual=function(e,t,n){e!==t&&h(e,t,n,"===",f.strictEqual)},f.notStrictEqual=function(e,t,n){e===t&&h(e,t,n,"!==",f.notStrictEqual)},f.throws=function(e,t,n){x(!0,e,t,n)},f.doesNotThrow=function(e,t,n){x(!1,e,t,n)},f.ifError=function(e){if(e)throw e};var w=Object.keys||function(e){var t=[];for(var n in e)u.call(e,n)&&t.push(n);return t}}).call(t,n("DuR2"))},OMJi:function(e,t,n){(function(e,r){var o=/%[sdj%]/g;t.format=function(e){if(!S(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(e).replace(o,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),a=r[n];n<i;a=r[++n])v(a)||!w(a)?u+=" "+a:u+=" "+c(a);return u},t.deprecate=function(n,o){if(j(e.process))return function(){return t.deprecate(n,o).apply(this,arguments)};if(!0===r.noDeprecation)return n;var i=!1;function u(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0}return n.apply(this,arguments)}return u};var i,u={};function c(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),b(n)?r.showHidden=n:n&&t._extend(r,n),j(r.showHidden)&&(r.showHidden=!1),j(r.depth)&&(r.depth=2),j(r.colors)&&(r.colors=!1),j(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),f(r,e,r.depth)}function a(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function s(e,t){return e}function l(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function f(e,n,r){if(e.customInspect&&n&&D(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return S(o)||(o=f(e,o,r)),o}var i=p(e,n);if(i)return i;var u=Object.keys(n),c=l(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),F(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return d(n);if(0===u.length){if(D(n)){var a=n.name?": "+n.name:"";return e.stylize("[Function"+a+"]","special")}if(x(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(_(n))return e.stylize(Date.prototype.toString.call(n),"date");if(F(n))return d(n)}var s,b="",v=!1,E=["{","}"];if(h(n)&&(v=!0,E=["[","]"]),D(n)){var O=n.name?": "+n.name:"";b=" [Function"+O+"]"}return x(n)&&(b=" "+RegExp.prototype.toString.call(n)),_(n)&&(b=" "+Date.prototype.toUTCString.call(n)),F(n)&&(b=" "+d(n)),0!==u.length||v&&0!=n.length?r<0?x(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),s=v?y(e,n,r,c,u):u.map(function(t){return g(e,n,r,c,t,v)}),e.seen.pop(),m(s,b,E)):E[0]+b+E[1]}function p(e,t){if(j(t))return e.stylize("undefined","undefined");if(S(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return O(t)?e.stylize(""+t,"number"):b(t)?e.stylize(""+t,"boolean"):v(t)?e.stylize("null","null"):void 0}function d(e){return"["+Error.prototype.toString.call(e)+"]"}function y(e,t,n,r,o){for(var i=[],u=0,c=t.length;u<c;++u)R(t,String(u))?i.push(g(e,t,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(g(e,t,n,r,o,!0))}),i}function g(e,t,n,r,o,i){var u,c,a;if(a=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},a.get?c=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(c=e.stylize("[Setter]","special")),R(r,o)||(u="["+o+"]"),c||(e.seen.indexOf(a.value)<0?(c=v(n)?f(e,a.value,null):f(e,a.value,n-1),c.indexOf("\n")>-1&&(c=i?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n"))):c=e.stylize("[Circular]","special")),j(u)){if(i&&o.match(/^\d+$/))return c;u=JSON.stringify(""+o),u.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function m(e,t,n){var r=e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return r>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function h(e){return Array.isArray(e)}function b(e){return"boolean"===typeof e}function v(e){return null===e}function E(e){return null==e}function O(e){return"number"===typeof e}function S(e){return"string"===typeof e}function A(e){return"symbol"===typeof e}function j(e){return void 0===e}function x(e){return w(e)&&"[object RegExp]"===B(e)}function w(e){return"object"===typeof e&&null!==e}function _(e){return w(e)&&"[object Date]"===B(e)}function F(e){return w(e)&&("[object Error]"===B(e)||e instanceof Error)}function D(e){return"function"===typeof e}function L(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e}function B(e){return Object.prototype.toString.call(e)}function k(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(j(i)&&(i=Object({NODE_ENV:"production",VUE_APP_API_URL:"http://test-pingfen-api.100tal.com/",VUE_APP_APP_ID:"332688098",BASE_URL:"/"}).NODE_DEBUG||""),e=e.toUpperCase(),!u[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var n=r.pid;u[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else u[e]=function(){};return u[e]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=h,t.isBoolean=b,t.isNull=v,t.isNullOrUndefined=E,t.isNumber=O,t.isString=S,t.isSymbol=A,t.isUndefined=j,t.isRegExp=x,t.isObject=w,t.isDate=_,t.isError=F,t.isFunction=D,t.isPrimitive=L,t.isBuffer=n("fC4T");var N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function q(){var e=new Date,t=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":");return[e.getDate(),N[e.getMonth()],t].join(" ")}function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",q(),t.format.apply(t,arguments))},t.inherits=n("ONRY"),t._extend=function(e,t){if(!t||!w(t))return e;var n=Object.keys(t),r=n.length;while(r--)e[n[r]]=t[n[r]];return e}}).call(t,n("DuR2"),n("KNAl"))},ONRY:function(e,t){"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},"P+tL":function(e,t){},fC4T:function(e,t){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}}});