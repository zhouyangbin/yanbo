(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97886816"],{"0733":function(e,t,r){},"47af":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(e){var t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),o=e.getHours(),a=e.getMinutes();e.getSeconds();return[t,r,n].map(i).join("-")+" "+[o,a].map(i).join(":")},i=function(e){return e=e.toString(),e[1]?e:"0"+e}},"57c6":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"},on:{"before-leave":e.beforeLeave,"after-enter":e.afterEnter}},[e.visible?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.outside,expression:"outside"}],staticClass:"objectTree-container"},[r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),r("el-tree",{ref:"tree",attrs:{"empty-text":"努力加载中...",props:e.defaultProps,"default-checked-keys":e.checkedKeys,"node-key":"id","filter-node-method":e.filterNode,"show-checkbox":"",data:e.treeOps},on:{"check-change":e.treeChange}})],1):e._e()])},i=[];function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=r("f7fe"),s={props:{visible:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}},checkedNodes:{type:Array,default:function(){return[]}},exclusive:{type:Boolean,default:!1}},data:function(){return{defaultProps:{label:"name"},filterText:"",tree:this.data}},methods:{filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},afterEnter:function(e){e.style.width="30%"},beforeLeave:function(e){e.style.width="0px",e.style.padding="0px"},treeChange:l(function(e,t,r){var n=this.$refs.tree.getCheckedNodes();if(this.exclusive){if(t){var i=this.findRoot(e.id).id;this.disabledOtherBranch(i)}0==n.length&&this.enableAll()}this.$emit("update:checkedNodes",n.map(function(e){var t=e.name,r=e.id;return{name:t,department_id:r}}))},500),findRoot:function(e){for(var t={},r=0;r<this.data.length;r++)if(t=this.data[r],this.findNode(e,this.data[r]))return t},findNode:function(e,t){if(t.id==e)return!0;var r=t.children;if(r&&r.length>0)for(var n=0;n<r.length;n++)if(this.findNode(e,r[n]))return!0;return!1},disabledOtherBranch:function(e){for(var t=this.tree,r=0;r<t.length;r++)t[r].id!=e&&(t[r]=this.disableNode(t[r],!0),this.$set(t,r,o({},t[r])))},disableNode:function(e,t){var r=this;e.disabled=t;var n=e.children;return n&&n.length>0&&(e.children=n.map(function(e){return r.disableNode(e,t)})),e},enableAll:function(){for(var e=this.tree,t=0;t<e.length;t++)e[t]=this.disableNode(e[t],!1),this.$set(e,t,o({},e[t]))},outside:function(){this.$emit("update:visible",!1)}},watch:{filterText:function(e){this.$refs.tree.filter(e)},data:function(e){this.tree=e}},computed:{checkedKeys:function(){return this.checkedNodes.map(function(e){var t=e.department_id;return t})},treeOps:function(){return this.tree||this.data}},directives:{"click-outside":{bind:function(e,t,r){if("function"!==typeof t.value){var n=r.context.name;"[Vue-click-outside:] provided expression '".concat(t.expression,"' is not a function, but has to be");n&&"Found in component '".concat(n,"'")}var i=t.modifiers.bubble,o=function(r){(i||!e.contains(r.target)&&e!==r.target)&&t.value(r)};e.__vueClickOutside__=o,document.addEventListener("click",o)},unbind:function(e,t){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}}},c=s,u=(r("759d"),r("2877")),d=Object(u["a"])(c,n,i,!1,null,"bd71ba9c",null);d.options.__file="index.vue";t["a"]=d.exports},"759d":function(e,t,r){"use strict";var n=r("0733"),i=r.n(n);i.a},aaa5:function(e,t,r){},e9e4:function(e,t,r){"use strict";var n=r("aaa5"),i=r.n(n);i.a},f7fe:function(e,t,r){(function(t){var r="Expected a function",n=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),f=Object.prototype,m=f.toString,h=Math.max,b=Math.min,y=function(){return p.Date.now()};function v(e,t,n){var i,o,a,l,s,c,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var r=i,n=o;return i=o=void 0,u=t,l=e.apply(n,r),l}function v(e){return u=e,s=setTimeout(O,t),d?m(e):l}function k(e){var r=e-c,n=e-u,i=t-r;return p?b(i,a-n):i}function _(e){var r=e-c,n=e-u;return void 0===c||r>=t||r<0||p&&n>=a}function O(){var e=y();if(_(e))return T(e);s=setTimeout(O,k(e))}function T(e){return s=void 0,f&&i?m(e):(i=o=void 0,l)}function E(){void 0!==s&&clearTimeout(s),u=0,i=c=o=s=void 0}function w(){return void 0===s?l:T(y())}function x(){var e=y(),r=_(e);if(i=arguments,o=this,c=e,r){if(void 0===s)return v(c);if(p)return s=setTimeout(O,t),m(c)}return void 0===s&&(s=setTimeout(O,t)),l}return t=F(t)||0,g(n)&&(d=!!n.leading,p="maxWait"in n,a=p?h(F(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),x.cancel=E,x.flush=w,x}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function k(e){return!!e&&"object"==typeof e}function _(e){return"symbol"==typeof e||k(e)&&m.call(e)==i}function F(e){if("number"==typeof e)return e;if(_(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=l.test(e);return r||s.test(e)?c(e.slice(2),r?2:8):a.test(e)?n:+e}e.exports=v}).call(this,r("c8ba"))},fada:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{width:"650px",visible:e.visible},on:{close:function(t){e.closeDia("ruleForm")}}},[r("span",{attrs:{slot:"title"},slot:"title"},[r("el-row",{staticClass:"dialog-title",attrs:{type:"flex",justify:"center"}},[e._v("\n      "+e._s("copy"==e.actionType?e.constants.COPY_GRADE:e.constants.CREATE_GRADE)+"\n    ")])],1),r("el-form",{ref:"ruleForm",staticClass:"create-form-dialog",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:e.constants.GRADE_NAME,prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{size:"medium",maxlength:20},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),"copy"!=e.actionType?r("el-form-item",{staticClass:"is-required",attrs:{label:e.constants.LABEL_SCOPE,prop:"scope"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.LABEL_SELECT_DIVISION,icon:"caret-bottom",readonly:"readonly"},nativeOn:{click:function(t){e.showScopeTree=!e.showScopeTree}},model:{value:e.scopeSelectedNames,callback:function(t){e.scopeSelectedNames=t},expression:"scopeSelectedNames"}})],1):e._e(),r("el-form-item",{attrs:{label:"绩效属性",prop:"property"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.PLS_SELECT},model:{value:e.ruleForm.property,callback:function(t){e.$set(e.ruleForm,"property",t)},expression:"ruleForm.property"}},e._l(e.constants.ENUM_PERFORMANCE_TYPE,function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}))],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"绩效周期",prop:"endTime"}},[r("div",[r("el-date-picker",{attrs:{disabled:""==e.ruleForm.property,clearable:!1,"picker-options":e.startPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择开始时间"},on:{change:e.calculateEndDate},model:{value:e.ruleForm.startTime,callback:function(t){e.$set(e.ruleForm,"startTime",t)},expression:"ruleForm.startTime"}}),r("span",[e._v("  至   ")]),r("el-date-picker",{attrs:{disabled:""==e.ruleForm.property,clearable:!1,"picker-options":e.endPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择结束时间"},model:{value:e.ruleForm.endTime,callback:function(t){e.$set(e.ruleForm,"endTime",t)},expression:"ruleForm.endTime"}})],1)]),r("el-form-item",{attrs:{label:e.constants.TPL,prop:"tpl"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.PLS_SELECT},model:{value:e.ruleForm.tpl,callback:function(t){e.$set(e.ruleForm,"tpl",t)},expression:"ruleForm.tpl"}},e._l(e.tplOptions,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),r("el-form-item",{attrs:{label:"分数对应关系",prop:"mapping"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.PLS_SELECT},model:{value:e.ruleForm.mapping,callback:function(t){e.$set(e.ruleForm,"mapping",t)},expression:"ruleForm.mapping"}},e._l(e.ruleArr,function(e){return r("el-option",{key:e.id,attrs:{label:e.type,value:e.id}})}))],1),r("br"),r("el-form-item",{attrs:{"label-width":"0px"}},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v(e._s(e.constants.CONFIRM))]),r("el-button",{attrs:{round:""},on:{click:function(t){e.closeDia("ruleForm")}}},[e._v(e._s(e.constants.CANCEL))])],1)],1)],1),e.showScopeTree?r("dp-panel",{attrs:{exclusive:!0,checkedNodes:e.checkedNodes,visible:e.showScopeTree,data:e.departmentTree},on:{"update:checkedNodes":function(t){e.checkedNodes=t},"update:visible":function(t){e.showScopeTree=t}}}):e._e()],1)},i=[],o=r("57c6"),a=r("47af"),l=r("38fb"),s=r("fea5");function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){u(e,t,r[t])})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=r("f7fe"),p={props:{copyID:{type:String,default:""},visible:{type:Boolean,default:!1},actionType:{type:String,default:"add"},departmentTree:{type:Array,default:function(){return[]}},defaultChecked:{type:Array,default:function(){return[]}},initForm:{type:Object},initData:{type:Object}},components:{"dp-panel":o["a"]},data:function(){var e=this,t=function(t,r,n){e.ruleForm.startTime?r&&r<=e.ruleForm.startTime?n(new Error(l["W"])):n():n(new Error(l["bd"]))},r=function(t,r,n){0==e.checkedNodes.length?n(new Error(l["ad"])):n()};return{loading:!0,showScopeTree:!1,checkedNodes:this.defaultChecked,ruleForm:{name:"",property:"",tpl:"",mapping:"",startTime:"",endTime:""},rules:{name:[{required:!0,message:l["Ac"],trigger:"blur"}],scope:[{validator:r,trigger:"change"}],property:[{required:!0,message:"请选择绩效属性",trigger:"blur"}],tpl:[{required:!0,message:l["cd"],trigger:"blur"}],mapping:[{required:!0,message:l["Zc"],trigger:"blur"}],endTime:[{validator:t,trigger:"change"}]},ruleArr:this.initData.rulesArr||[],tplArr:[],tplOptions:this.initData.tplArr||[],constants:{COPY_GRADE:l["x"],CREATE_GRADE:l["z"],GRADE_NAME:l["vb"],LABEL_SCOPE:l["bc"],LABEL_SELECT_DIVISION:l["dc"],ENUM_PERFORMANCE_TYPE:l["eb"],PLS_SELECT:l["Yc"],CANCEL:l["n"],CONFIRM:l["q"],TPL:l["Cd"]}}},methods:{closeDia:function(e){this.$refs[e].resetFields(),this.$emit("update:visible",!1)},submitForm:function(e){var t=this;0!=this.tplOptions.length?0!=this.ruleArr.length?this.$refs[e].validate(function(e){if(e){var r=t.ruleForm,n=r.name,i=r.mapping,o=r.endTime,a=r.property,l=r.startTime,c=r.tpl,u={name:n,department_ids:t.checkedNodes.map(function(e){return e.department_id}),start_time:l,end_time:o,template_id:c,rule_id:i,type_id:a};return"copy"==t.actionType?Object(s["ab"])(t.copyID,u).then(function(e){t.closeDia("ruleForm")}).catch(function(e){}):Object(s["Y"])(u).then(function(e){t.closeDia("ruleForm")}).catch(function(e){})}return!1}):this.$message({message:"当前事业部无分数对应规则，请联系总管理员!",type:"warning"}):this.$message({message:"当前事业部该绩效属性无模版，请联系总管理员!",type:"warning"})},add7Days:function(e){return new Date(e.getTime()+6048e5)},addMonth:function(e,t){return e.getMonth()>12-t-1?(e.setFullYear(e.getFullYear()+1),e.setMonth(e.getMonth()-(12-t))):e.setMonth(e.getMonth()+t),this.add7Days(e)},calculateEndDate:function(e){if(!this.ruleForm.endTime){var t=new Date(e);switch(this.ruleForm.property){case"1":t.setFullYear(t.getFullYear()+1),t=this.add7Days(t);break;case"2":t=this.addMonth(t,6);break;case"3":t=this.addMonth(t,3);break;case"4":t.getMonth()>10?(t.setFullYear(t.getFullYear()+1),t.setMonth(0)):t.setMonth(t.getMonth()+1);break;case"5":case"6":return}this.ruleForm.endTime=Object(a["a"])(t)}},getTplList:d(function(e){var t=this;Object(s["R"])({department_ids:e}).then(function(e){var r=e.rules,n=e.templates;t.ruleArr=r,t.tplArr=n,1==r.length&&(t.ruleForm.mapping=r[0].id),t.loading=!1}).catch(function(e){t.checkedNodes=[]})},500)},watch:{checkedNodes:{handler:function(e,t){this.loading||(this.ruleForm.tpl="",this.ruleForm.mapping=""),e.length>0&&(e||[]).join(",")!=(t||[]).join(",")&&this.getTplList(e.map(function(e){return e.department_id}))},deep:!0,immediate:!0},tplArr:function(e){var t=this,r=e.filter(function(e){return e.type_id==t.ruleForm.property});this.tplOptions=r},"ruleForm.property":{handler:function(e){var t=this;if(!this.loading){this.ruleForm.tpl="";var r=this.tplArr.filter(function(e){return e.type_id==t.ruleForm.property});this.tplOptions=r}},deep:!0,immediate:!0}},computed:{startPickerOptions:function(){return{disabledDate:function(e){var t=Object(a["a"])(new Date(e)),r=Object(a["a"])(new Date).split(" ")[0]+" 00:00";return t<r}}},endPickerOptions:function(){var e=this;return{disabledDate:function(t){var r=Object(a["a"])(new Date(t)),n=Object(a["a"])(new Date).split(" ")[0]+" 00:00";return e.ruleForm.startTime&&(n=e.ruleForm.startTime),r<n}}},scopeSelectedNames:function(){return this.checkedNodes.map(function(e){return e.name}).join(", ")}},created:function(){this.ruleForm=c({},this.ruleForm,this.initForm)}},f=p,m=(r("e9e4"),r("2877")),h=Object(m["a"])(f,n,i,!1,null,"01f97456",null);h.options.__file="index.vue";t["default"]=h.exports}}]);