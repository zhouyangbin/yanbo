webpackJsonp([46],{"4D1/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={props:{value:{type:String,default:""},readOnly:{type:Boolean,default:!1}},data:function(){return{levels:["S","A","B","C","D"]}},computed:{innerLevel:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"level-section",attrs:{type:"flex",justify:"end"}},[n("el-col",{attrs:{span:4}},[n("span",[e._v("\n            结果/\n        ")]),e.readOnly?n("span",{staticClass:"level"},[e._v(e._s(e.value))]):n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.innerLevel,callback:function(t){e.innerLevel=t},expression:"innerLevel"}},e._l(e.levels,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))],1)],1)},s=[],r=n("XyMi");function i(e){n("e8H7")}var u=!1,c=i,o="data-v-5917c945",v=null,p=Object(r["a"])(l,a,s,u,c,o,v);t["default"]=p.exports},e8H7:function(e,t){}});
//# sourceMappingURL=46.06a5d888.js.map