webpackJsonp([39],{"4bgW":function(e,t,r){"use strict";var n=r("Biqn"),i=r.n(n),o=r("y1vT"),a={props:{visible:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}},checkedNodes:{type:Array,default:function(){return[]}},exclusive:{type:Boolean,default:!1}},data:function(){return{defaultProps:{label:"name"},filterText:"",tree:this.data}},methods:{filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},afterEnter:function(e){e.style.width="30%"},beforeLeave:function(e){e.style.width="0px",e.style.padding="0px"},treeChange:o(function(e,t,r){var n=this.$refs.tree.getCheckedNodes();if(this.exclusive){if(t){var i=this.findRoot(e.id).id;this.disabledOtherBranch(i)}0==n.length&&this.enableAll()}this.$emit("update:checkedNodes",n.map(function(e){var t=e.name,r=e.id;return{name:t,department_id:r}}))},500),findRoot:function(e){for(var t={},r=0;r<this.data.length;r++)if(t=this.data[r],this.findNode(e,this.data[r]))return t},findNode:function(e,t){if(t.id==e)return!0;var r=t.children;if(r&&r.length>0)for(var n=0;n<r.length;n++)if(this.findNode(e,r[n]))return!0;return!1},disabledOtherBranch:function(e){for(var t=this.tree,r=0;r<t.length;r++)t[r].id!=e&&(t[r]=this.disableNode(t[r],!0),this.$set(t,r,i()({},t[r])))},disableNode:function(e,t){var r=this;e.disabled=t;var n=e.children;return n&&n.length>0&&(e.children=n.map(function(e){return r.disableNode(e,t)})),e},enableAll:function(){for(var e=this.tree,t=0;t<e.length;t++)e[t]=this.disableNode(e[t],!1),this.$set(e,t,i()({},e[t]))},outside:function(){this.$emit("update:visible",!1)}},watch:{filterText:function(e){this.$refs.tree.filter(e)},data:function(e){this.tree=e}},computed:{checkedKeys:function(){return this.checkedNodes.map(function(e){var t=e.department_id;return t})},treeOps:function(){return this.tree||this.data}},directives:{"click-outside":{bind:function(e,t,r){if("function"!==typeof t.value){var n=r.context.name,i="[Vue-click-outside:] provided expression '".concat(t.expression,"' is not a function, but has to be");n&&(i+="Found in component '".concat(n,"'")),console.warn(i)}var o=t.modifiers.bubble,a=function(r){(o||!e.contains(r.target)&&e!==r.target)&&t.value(r)};e.__vueClickOutside__=a,document.addEventListener("click",a)},unbind:function(e,t){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}}},l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"},on:{"before-leave":e.beforeLeave,"after-enter":e.afterEnter}},[e.visible?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.outside,expression:"outside"}],staticClass:"objectTree-container"},[r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),r("el-tree",{ref:"tree",attrs:{"empty-text":"努力加载中...",props:e.defaultProps,"default-checked-keys":e.checkedKeys,"node-key":"id","filter-node-method":e.filterNode,"show-checkbox":"",data:e.treeOps},on:{"check-change":e.treeChange}})],1):e._e()])},s=[],c=r("XyMi");function u(e){r("OAL3")}var d=!1,p=u,f="data-v-2a1069dc",m=null,h=Object(c["a"])(a,l,s,d,p,f,m);t["a"]=h.exports},"9bBU":function(e,t,r){r("mClu");var n=r("FeBl").Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},B0bq:function(e,t,r){r("fWfb"),e.exports=r("FeBl").Object.getOwnPropertySymbols},Biqn:function(e,t,r){var n=r("Ttsf"),i=r("qp3O"),o=r("qO4g"),a=r("fKPv");function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},l=o(r);"function"===typeof i&&(l=l.concat(i(r).filter(function(e){return n(r,e).enumerable}))),l.forEach(function(t){a(e,t,r[t])})}return e}e.exports=l},Cdx3:function(e,t,r){var n=r("sB3e"),i=r("lktj");r("uqUo")("keys",function(){return function(e){return i(n(e))}})},"D+lh":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(e){var t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),o=e.getHours(),a=e.getMinutes();e.getSeconds();return[t,r,n].map(i).join("-")+" "+[o,a].map(i).join(":")},i=function(e){return e=e.toString(),e[1]?e:"0"+e}},OAL3:function(e,t){},Q0Ak:function(e,t,r){e.exports=r("9bBU")},Ttsf:function(e,t,r){e.exports=r("cnlX")},cnlX:function(e,t,r){r("iInB");var n=r("FeBl").Object;e.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},fKPv:function(e,t,r){var n=r("Q0Ak");function i(e,t,r){return t in e?n(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e.exports=i},iInB:function(e,t,r){var n=r("TcQ7"),i=r("LKZe").f;r("uqUo")("getOwnPropertyDescriptor",function(){return function(e,t){return i(n(e),t)}})},jFbC:function(e,t,r){r("Cdx3"),e.exports=r("FeBl").Object.keys},mClu:function(e,t,r){var n=r("kM2E");n(n.S+n.F*!r("+E39"),"Object",{defineProperty:r("evD5").f})},qO4g:function(e,t,r){e.exports=r("jFbC")},qp3O:function(e,t,r){e.exports=r("B0bq")},uA7R:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Biqn"),i=r.n(n),o=r("4bgW"),a=r("D+lh"),l=r("OE2U"),s=r("BHhq"),c=r("y1vT"),u={props:{copyID:{type:String,default:""},visible:{type:Boolean,default:!1},actionType:{type:String,default:"add"},departmentTree:{type:Array,default:function(){return[]}},defaultChecked:{type:Array,default:function(){return[]}},initForm:{type:Object},initData:{type:Object}},components:{"dp-panel":o["a"]},data:function(){var e=this,t=function(t,r,n){e.ruleForm.startTime?r&&r<=e.ruleForm.startTime?n(new Error(l["T"])):n():n(new Error(l["_94"]))},r=function(t,r,n){0==e.checkedNodes.length?n(new Error(l["_93"])):n()};return{loading:!0,showScopeTree:!1,checkedNodes:this.defaultChecked,ruleForm:{name:"",property:"",tpl:"",mapping:"",startTime:"",endTime:""},rules:{name:[{required:!0,message:l["_74"],trigger:"blur"}],scope:[{validator:r,trigger:"change"}],property:[{required:!0,message:"请选择绩效属性",trigger:"blur"}],tpl:[{required:!0,message:l["_95"],trigger:"blur"}],mapping:[{required:!0,message:l["_92"],trigger:"blur"}],endTime:[{validator:t,trigger:"change"}]},ruleArr:this.initData.rulesArr||[],tplArr:[],tplOptions:this.initData.tplArr||[],constants:{COPY_GRADE:l["w"],CREATE_GRADE:l["y"],GRADE_NAME:l["_19"],LABEL_SCOPE:l["_51"],LABEL_SELECT_DIVISION:l["_53"],ENUM_PERFORMANCE_TYPE:l["_1"],PLS_SELECT:l["_91"],CANCEL:l["m"],CONFIRM:l["p"],TPL:l["_121"]}}},methods:{closeDia:function(e){this.$refs[e].resetFields(),this.$emit("update:visible",!1)},submitForm:function(e){var t=this;0!=this.tplOptions.length?0!=this.ruleArr.length?this.$refs[e].validate(function(e){if(e){var r=t.ruleForm,n=r.name,i=r.mapping,o=r.endTime,a=r.property,l=r.startTime,c=r.tpl,u={name:n,department_ids:t.checkedNodes.map(function(e){return e.department_id}),start_time:l,end_time:o,template_id:c,rule_id:i,type_id:a};return"copy"==t.actionType?Object(s["O"])(t.copyID,u).then(function(e){t.closeDia("ruleForm")}).catch(function(e){}):Object(s["M"])(u).then(function(e){t.closeDia("ruleForm")}).catch(function(e){})}return!1}):this.$message({message:"当前事业部无分数对应规则，请联系总管理员!",type:"warning"}):this.$message({message:"当前事业部该绩效属性无模版，请联系总管理员!",type:"warning"})},add7Days:function(e){return new Date(e.getTime()+6048e5)},addMonth:function(e,t){return e.getMonth()>12-t-1?(e.setFullYear(e.getFullYear()+1),e.setMonth(e.getMonth()-(12-t))):e.setMonth(e.getMonth()+t),this.add7Days(e)},calculateEndDate:function(e){if(!this.ruleForm.endTime){var t=new Date(e);switch(this.ruleForm.property){case"1":t.setFullYear(t.getFullYear()+1),t=this.add7Days(t);break;case"2":t=this.addMonth(t,6);break;case"3":t=this.addMonth(t,3);break;case"4":t.getMonth()>10?(t.setFullYear(t.getFullYear()+1),t.setMonth(0)):t.setMonth(t.getMonth()+1);break;case"5":case"6":return}this.ruleForm.endTime=Object(a["a"])(t)}},getTplList:c(function(e){var t=this;Object(s["F"])({department_ids:e}).then(function(e){var r=e.rules,n=e.templates;t.ruleArr=r,t.tplArr=n,1==r.length&&(t.ruleForm.mapping=r[0].id),t.loading=!1}).catch(function(e){t.checkedNodes=[]})},500)},watch:{checkedNodes:{handler:function(e,t){this.loading||(this.ruleForm.tpl="",this.ruleForm.mapping=""),e.length>0&&(e||[]).join(",")!=(t||[]).join(",")&&this.getTplList(e.map(function(e){return e.department_id}))},deep:!0,immediate:!0},tplArr:function(e){var t=this,r=e.filter(function(e){return e.type_id==t.ruleForm.property});this.tplOptions=r},"ruleForm.property":{handler:function(e){var t=this;if(!this.loading){this.ruleForm.tpl="";var r=this.tplArr.filter(function(e){return e.type_id==t.ruleForm.property});this.tplOptions=r}},deep:!0,immediate:!0}},computed:{startPickerOptions:function(){return{disabledDate:function(e){var t=Object(a["a"])(new Date(e)),r=Object(a["a"])(new Date).split(" ")[0]+" 00:00";return t<r}}},endPickerOptions:function(){var e=this;return{disabledDate:function(t){var r=Object(a["a"])(new Date(t)),n=Object(a["a"])(new Date).split(" ")[0]+" 00:00";return e.ruleForm.startTime&&(n=e.ruleForm.startTime),r<n}}},scopeSelectedNames:function(){return this.checkedNodes.map(function(e){return e.name}).join(", ")}},created:function(){this.ruleForm=i()({},this.ruleForm,this.initForm)}},d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{width:"650px",visible:e.visible},on:{close:function(t){e.closeDia("ruleForm")}}},[r("span",{attrs:{slot:"title"},slot:"title"},[r("el-row",{staticClass:"dialog-title",attrs:{type:"flex",justify:"center"}},[e._v("\n      "+e._s("copy"==e.actionType?e.constants.COPY_GRADE:e.constants.CREATE_GRADE)+"\n    ")])],1),r("el-form",{ref:"ruleForm",staticClass:"create-form-dialog",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:e.constants.GRADE_NAME,prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{size:"medium",maxlength:20},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),"copy"!=e.actionType?r("el-form-item",{staticClass:"is-required",attrs:{label:e.constants.LABEL_SCOPE,prop:"scope"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.LABEL_SELECT_DIVISION,icon:"caret-bottom",readonly:"readonly"},nativeOn:{click:function(t){e.showScopeTree=!e.showScopeTree}},model:{value:e.scopeSelectedNames,callback:function(t){e.scopeSelectedNames=t},expression:"scopeSelectedNames"}})],1):e._e(),r("el-form-item",{attrs:{label:"绩效属性",prop:"property"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.PLS_SELECT},model:{value:e.ruleForm.property,callback:function(t){e.$set(e.ruleForm,"property",t)},expression:"ruleForm.property"}},e._l(e.constants.ENUM_PERFORMANCE_TYPE,function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}))],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"绩效周期",prop:"endTime"}},[r("div",[r("el-date-picker",{attrs:{disabled:""==e.ruleForm.property,clearable:!1,"picker-options":e.startPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择开始时间"},on:{change:e.calculateEndDate},model:{value:e.ruleForm.startTime,callback:function(t){e.$set(e.ruleForm,"startTime",t)},expression:"ruleForm.startTime"}}),r("span",[e._v("  至   ")]),r("el-date-picker",{attrs:{disabled:""==e.ruleForm.property,clearable:!1,"picker-options":e.endPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择结束时间"},model:{value:e.ruleForm.endTime,callback:function(t){e.$set(e.ruleForm,"endTime",t)},expression:"ruleForm.endTime"}})],1)]),r("el-form-item",{attrs:{label:e.constants.TPL,prop:"tpl"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.PLS_SELECT},model:{value:e.ruleForm.tpl,callback:function(t){e.$set(e.ruleForm,"tpl",t)},expression:"ruleForm.tpl"}},e._l(e.tplOptions,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),r("el-form-item",{attrs:{label:"分数对应关系",prop:"mapping"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.PLS_SELECT},model:{value:e.ruleForm.mapping,callback:function(t){e.$set(e.ruleForm,"mapping",t)},expression:"ruleForm.mapping"}},e._l(e.ruleArr,function(e){return r("el-option",{key:e.id,attrs:{label:e.type,value:e.id}})}))],1),r("br"),r("el-form-item",{attrs:{"label-width":"0px"}},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v(e._s(e.constants.CONFIRM))]),r("el-button",{attrs:{round:""},on:{click:function(t){e.closeDia("ruleForm")}}},[e._v(e._s(e.constants.CANCEL))])],1)],1)],1),e.showScopeTree?r("dp-panel",{attrs:{exclusive:!0,checkedNodes:e.checkedNodes,visible:e.showScopeTree,data:e.departmentTree},on:{"update:checkedNodes":function(t){e.checkedNodes=t},"update:visible":function(t){e.showScopeTree=t}}}):e._e()],1)},p=[],f=r("XyMi");function m(e){r("xXl/")}var h=!1,v=m,y="data-v-01f97456",b=null,g=Object(f["a"])(u,d,p,h,v,y,b);t["default"]=g.exports},uqUo:function(e,t,r){var n=r("kM2E"),i=r("FeBl"),o=r("S82l");e.exports=function(e,t){var r=(i.Object||{})[e]||Object[e],a={};a[e]=t(r),n(n.S+n.F*o(function(){r(1)}),"Object",a)}},"xXl/":function(e,t){},y1vT:function(e,t,r){(function(t){var r="Expected a function",n=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),f=Object.prototype,m=f.toString,h=Math.max,v=Math.min,y=function(){return p.Date.now()};function b(e,t,n){var i,o,a,l,s,c,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var r=i,n=o;return i=o=void 0,u=t,l=e.apply(n,r),l}function b(e){return u=e,s=setTimeout(O,t),d?m(e):l}function _(e){var r=e-c,n=e-u,i=t-r;return p?v(i,a-n):i}function F(e){var r=e-c,n=e-u;return void 0===c||r>=t||r<0||p&&n>=a}function O(){var e=y();if(F(e))return T(e);s=setTimeout(O,_(e))}function T(e){return s=void 0,f&&i?m(e):(i=o=void 0,l)}function x(){void 0!==s&&clearTimeout(s),u=0,i=c=o=s=void 0}function E(){return void 0===s?l:T(y())}function w(){var e=y(),r=F(e);if(i=arguments,o=this,c=e,r){if(void 0===s)return b(c);if(p)return s=setTimeout(O,t),m(c)}return void 0===s&&(s=setTimeout(O,t)),l}return t=k(t)||0,g(n)&&(d=!!n.leading,p="maxWait"in n,a=p?h(k(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),w.cancel=x,w.flush=E,w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){return!!e&&"object"==typeof e}function F(e){return"symbol"==typeof e||_(e)&&m.call(e)==i}function k(e){if("number"==typeof e)return e;if(F(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=l.test(e);return r||s.test(e)?c(e.slice(2),r?2:8):a.test(e)?n:+e}e.exports=b}).call(t,r("DuR2"))}});
//# sourceMappingURL=39.39f6ef22.js.map