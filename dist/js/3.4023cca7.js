webpackJsonp([3],{"4bgW":function(e,t,r){"use strict";var n=r("Biqn"),i=r.n(n),a=r("y1vT"),o={props:{visible:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}},checkedNodes:{type:Array,default:function(){return[]}},exclusive:{type:Boolean,default:!1}},data:function(){return{defaultProps:{label:"name"},filterText:"",tree:this.data}},methods:{filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},afterEnter:function(e){e.style.width="30%"},beforeLeave:function(e){e.style.width="0px",e.style.padding="0px"},treeChange:a(function(e,t,r){var n=this.$refs.tree.getCheckedNodes();if(this.exclusive){if(t){var i=this.findRoot(e.id).id;this.disabledOtherBranch(i)}0==n.length&&this.enableAll()}this.$emit("update:checkedNodes",n.map(function(e){var t=e.name,r=e.id;return{name:t,department_id:r}}))},500),findRoot:function(e){for(var t={},r=0;r<this.data.length;r++)if(t=this.data[r],this.findNode(e,this.data[r]))return t},findNode:function(e,t){if(t.id==e)return!0;var r=t.children;if(r&&r.length>0)for(var n=0;n<r.length;n++)if(this.findNode(e,r[n]))return!0;return!1},disabledOtherBranch:function(e){for(var t=this.tree,r=0;r<t.length;r++)t[r].id!=e&&(t[r]=this.disableNode(t[r],!0),this.$set(t,r,i()({},t[r])))},disableNode:function(e,t){var r=this;e.disabled=t;var n=e.children;return n&&n.length>0&&(e.children=n.map(function(e){return r.disableNode(e,t)})),e},enableAll:function(){for(var e=this.tree,t=0;t<e.length;t++)e[t]=this.disableNode(e[t],!1),this.$set(e,t,i()({},e[t]))},outside:function(){this.$emit("update:visible",!1)}},watch:{filterText:function(e){this.$refs.tree.filter(e)},data:function(e){this.tree=e}},computed:{checkedKeys:function(){return this.checkedNodes.map(function(e){var t=e.department_id;return t})},treeOps:function(){return this.tree||this.data}},directives:{"click-outside":{bind:function(e,t,r){if("function"!==typeof t.value){var n=r.context.name,i="[Vue-click-outside:] provided expression '".concat(t.expression,"' is not a function, but has to be");n&&(i+="Found in component '".concat(n,"'")),console.warn(i)}var a=t.modifiers.bubble,o=function(r){(a||!e.contains(r.target)&&e!==r.target)&&t.value(r)};e.__vueClickOutside__=o,document.addEventListener("click",o)},unbind:function(e,t){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}}},l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"},on:{"before-leave":e.beforeLeave,"after-enter":e.afterEnter}},[e.visible?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.outside,expression:"outside"}],staticClass:"objectTree-container"},[r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),r("el-tree",{ref:"tree",attrs:{"empty-text":"努力加载中...",props:e.defaultProps,"default-checked-keys":e.checkedKeys,"node-key":"id","filter-node-method":e.filterNode,"show-checkbox":"",data:e.treeOps},on:{"check-change":e.treeChange}})],1):e._e()])},s=[],c=r("XyMi");function u(e){r("OAL3")}var d=!1,p=u,f="data-v-2a1069dc",m=null,h=Object(c["a"])(o,l,s,d,p,f,m);t["a"]=h.exports},"D+lh":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(e){var t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),a=e.getHours(),o=e.getMinutes();e.getSeconds();return[t,r,n].map(i).join("-")+" "+[a,o].map(i).join(":")},i=function(e){return e=e.toString(),e[1]?e:"0"+e}},OAL3:function(e,t){},hfqs:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("OE2U"),i=r("D+lh"),a=r("4bgW"),o=r("BHhq"),l=r("xwzc"),s=r("y1vT"),c={data:function(){var e=this,t=function(t,r,n){e.ruleForm.startTime?r&&r<=e.ruleForm.startTime?n(new Error("结束时间不能小于开始时间")):n():n(new Error("请先选择开始时间"))},r=function(t,r,n){0==e.checkedNodes.length?n(new Error("请先选择范围")):n()};return{checkedNodes:[],showScopeTree:!1,departmentTree:[],actionType:"",copyID:"",filterProps:{value:"id",label:"name",children:"children"},filterForm:{type:"",dp:[]},createGradeDialog:!1,constants:{PERFORMANCE_GRADE_LIST:n["_80"],CREATE_GRADE:n["w"],GRADE_NAME:n["_12"],CONFIRM:n["n"],CANCEL:n["k"],DETAILS:n["C"],EXPORT_DETAILS:n["_1"],ENUM_PERFORMANCE_TYPE:n["U"],LABEL_SELECT_DIVISION:n["_45"],DEPARTMENT:n["A"],DURATION_TYPE:n["F"],FINISHED_DATE:n["_8"],CREATED_DATE:n["v"],OPERATIONS:n["_77"],LABEL_SCOPE:n["_43"],TPL:n["_107"],COPY_GRADE:n["u"]},nav:[{label:n["_11"],active:!0}],tableData:[],currentPage:1,total:0,ruleForm:{name:"",property:"",tpl:"",mapping:"",startTime:"",endTime:""},rules:{name:[{required:!0,message:n["_66"],trigger:"blur"}],scope:[{validator:r}],property:[{required:!0,message:"请选择绩效属性",trigger:"blur"}],tpl:[{required:!0,message:"请选择模板",trigger:"blur"}],mapping:[{required:!0,message:"请选择对应关系",trigger:"blur"}],endTime:[{validator:t,trigger:"change"}]},ruleArr:[],tplArr:[],dpArr:[],tplOptions:[]}},components:{"nav-bar":function(){return r.e(25).then(r.bind(null,"PI/7"))},pagination:function(){return r.e(26).then(r.bind(null,"734F"))},"dp-panel":a["a"]},methods:{handleCurrentChange:function(e){this.currentPage=e,this.refreshList({page:e,department_id:this.selectedDep,type_id:this.filterForm.type})},refreshList:function(e){var t=this;return Object(o["t"])(e).then(function(e){var r=e.total,n=e.data;t.total=r,t.tableData=n.map(function(e,t){return e.index=t,e})})},closeDia:function(e){this.ruleForm={name:"",property:"",tpl:"",mapping:"",startTime:"",endTime:""},this.checkedNodes=[],this.actionType="",this.copyID="",this.$refs[e].resetFields(),this.createGradeDialog=!1,this.refreshList({page:this.currentPage,department_id:this.selectedDep,type_id:this.filterForm.type})},createGrade:function(){var e=this;this.getOrgList(function(){e.createGradeDialog=!0})},copyGrade:function(e){this.actionType="copy",this.copyID=e.id,this.ruleForm={name:"",property:String(e.type_id),tpl:e.template_id,mapping:e.rule_id,startTime:"",endTime:""};var t=e.department.split(",");this.checkedNodes=e.department_ids.map(function(e,r){return{department_id:e,name:t[r]}}),this.createGrade()},gradeExport:function(e){window.open(Object(l["k"])(e.id),"_blank")},submitForm:function(e){var t=this;0!=this.tplOptions.length?this.$refs[e].validate(function(e){if(e){var r=t.ruleForm,n=r.name,i=r.mapping,a=r.endTime,l=r.property,s=r.startTime,c=r.tpl,u={name:n,department_ids:t.checkedNodes.map(function(e){return e.department_id}),start_time:s,end_time:a,template_id:c,rule_id:i,type_id:l};return"copy"==t.actionType?Object(o["N"])(t.copyID,u).then(function(e){t.closeDia("ruleForm")}).catch(function(e){}):Object(o["L"])(u).then(function(e){t.closeDia("ruleForm")}).catch(function(e){})}return!1}):this.$message({message:"当前事业部无模版，请联系总管理员",type:"warning"})},add7Days:function(e){return new Date(e.getTime()+6048e5)},addMonth:function(e,t){e.getMonth()>12-t-1?(e.setFullYear(e.getFullYear()+1),e.setMonth(e.getMonth()-(12-t))):e.setMonth(e.getMonth()+t),e=this.add7Days(e)},calculateEndDate:function(e){if(!this.ruleForm.endTime){var t=new Date(e);switch(this.ruleForm.property){case"1":t.setFullYear(t.getFullYear()+1),t=this.add7Days(t);break;case"2":this.addMonth(t,6);break;case"3":this.addMonth(t,3);break;case"4":t.getMonth()>10?(t.setFullYear(t.getFullYear()+1),t.setMonth(0)):t.setMonth(t.getMonth()+1);break;case"5":case"6":return}this.ruleForm.endTime=Object(i["a"])(t)}},getOrgList:function(e){var t=this;return Object(o["r"])().then(function(r){t.departmentTree=r,e&&e()}).catch(function(e){})},getTplList:s(function(e){var t=this;Object(o["E"])({department_ids:e}).then(function(e){var r=e.rules,n=e.templates;t.ruleArr=r,t.tplArr=n}).catch(function(e){t.checkedNodes=[]})},500),getDepartments:function(){var e=this;return Object(o["r"])().then(function(t){e.dpArr=t}).catch(function(e){})},goSubList:function(e){this.$router.push(Object(l["A"])(e.id))},resetFilter:function(){this.filterForm={type:"",dp:[]}}},computed:{startPickerOptions:function(){return{disabledDate:function(e){var t=Object(i["a"])(new Date(e)),r=Object(i["a"])(new Date).split(" ")[0]+" 00:00";return t<r}}},endPickerOptions:function(){var e=this;return{disabledDate:function(t){var r=Object(i["a"])(new Date(t)),n=Object(i["a"])(new Date).split(" ")[0]+" 00:00";return e.ruleForm.startTime&&(n=e.ruleForm.startTime),r<n}}},scopeSelectedNames:function(){return this.checkedNodes.map(function(e){return e.name}).join(", ")},selectedDep:function(){return this.filterForm.dp.length>0?this.filterForm.dp[this.filterForm.dp.length-1]:""}},watch:{checkedNodes:{handler:function(e,t){e.length>0&&e.join(",")!=t.join(",")&&this.getTplList(e.map(function(e){return e.department_id}))},deep:!0},filterForm:{handler:function(e){var t={page:1,department_id:e.dp.length>0?e.dp[e.dp.length-1]:"",type_id:e.type};this.currentPage=1,this.refreshList(t)},deep:!0,immediate:!0},tplArr:function(e){var t=this,r=e.filter(function(e){return e.type_id==t.ruleForm.property});this.tplOptions=r,0==r.length&&(this.ruleForm.tpl="")}},created:function(){this.getDepartments()}},u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav-bar",{attrs:{list:e.nav}}),r("section",{staticClass:"content-container"},[r("el-row",{attrs:{align:"middle",type:"flex",justify:"space-between"}},[r("div",[r("span",[e._v("\n          "+e._s(e.constants.PERFORMANCE_GRADE_LIST)+"\n        ")]),r("el-cascader",{staticStyle:{"margin-left":"30px"},attrs:{placeholder:e.constants.LABEL_SELECT_DIVISION,props:e.filterProps,options:e.dpArr,"show-all-levels":!1},model:{value:e.filterForm.dp,callback:function(t){e.$set(e.filterForm,"dp",t)},expression:"filterForm.dp"}}),r("el-select",{staticStyle:{"margin-left":"30px"},attrs:{placeholder:"请选择周期类型"},model:{value:e.filterForm.type,callback:function(t){e.$set(e.filterForm,"type",t)},expression:"filterForm.type"}},e._l(e.constants.ENUM_PERFORMANCE_TYPE,function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),r("el-button",{staticStyle:{"margin-left":"30px"},attrs:{round:""},on:{click:e.resetFilter}},[e._v("重置")])],1),r("el-button",{attrs:{type:"primary",round:""},on:{click:e.createGrade}},[e._v(e._s(e.constants.CREATE_GRADE))])],1),r("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,stripe:""}},[r("el-table-column",{attrs:{prop:"name",label:e.constants.GRADE_NAME,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.name)+"\n          "),0===t.row.index?r("span",{staticClass:"newTag"},[e._v("\n            NEW!\n          ")]):e._e()]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"department",label:e.constants.DEPARTMENT,"min-width":"180"}}),r("el-table-column",{attrs:{prop:"type",label:e.constants.DURATION_TYPE}}),r("el-table-column",{attrs:{prop:"end_time",label:e.constants.FINISHED_DATE}}),r("el-table-column",{attrs:{prop:"start_time",label:e.constants.CREATED_DATE}}),r("el-table-column",{attrs:{prop:"address",label:e.constants.OPERATIONS},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){e.goSubList(t.row)}}},[e._v(e._s(e.constants.DETAILS))]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){e.gradeExport(t.row)}}},[e._v(e._s(e.constants.EXPORT_DETAILS))]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){e.copyGrade(t.row)}}},[e._v(e._s(e.constants.COPY_GRADE))])]}}])})],1),r("br"),r("el-row",{attrs:{type:"flex",justify:"end"}},[r("pagination",{attrs:{currentPage:e.currentPage,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1),e.createGradeDialog?r("el-dialog",{attrs:{width:"650px",visible:e.createGradeDialog},on:{close:function(t){e.closeDia("ruleForm")},"update:visible":function(t){e.createGradeDialog=t}}},[r("span",{attrs:{slot:"title"},slot:"title"},[r("el-row",{staticClass:"dialog-title",attrs:{type:"flex",justify:"center"}},[e._v("\n        "+e._s(e.constants.CREATE_GRADE)+"\n      ")])],1),r("el-form",{ref:"ruleForm",staticClass:"create-form-dialog",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:e.constants.GRADE_NAME,prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{size:"medium",maxlength:20},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),"copy"!=e.actionType?r("el-form-item",{staticClass:"is-required",attrs:{label:e.constants.LABEL_SCOPE,prop:"scope"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.LABEL_SELECT_DIVISION,icon:"caret-bottom",readonly:"readonly"},nativeOn:{click:function(t){e.showScopeTree=!e.showScopeTree}},model:{value:e.scopeSelectedNames,callback:function(t){e.scopeSelectedNames=t},expression:"scopeSelectedNames"}})],1):e._e(),r("el-form-item",{attrs:{label:"绩效属性",prop:"property"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择"},model:{value:e.ruleForm.property,callback:function(t){e.$set(e.ruleForm,"property",t)},expression:"ruleForm.property"}},e._l(e.constants.ENUM_PERFORMANCE_TYPE,function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}))],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"绩效周期",prop:"endTime"}},[r("div",[r("el-date-picker",{attrs:{disabled:""==e.ruleForm.property,clearable:!1,"picker-options":e.startPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择开始时间"},on:{change:e.calculateEndDate},model:{value:e.ruleForm.startTime,callback:function(t){e.$set(e.ruleForm,"startTime",t)},expression:"ruleForm.startTime"}}),r("span",[e._v("  至   ")]),r("el-date-picker",{attrs:{disabled:""==e.ruleForm.property,clearable:!1,"picker-options":e.endPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择结束时间"},model:{value:e.ruleForm.endTime,callback:function(t){e.$set(e.ruleForm,"endTime",t)},expression:"ruleForm.endTime"}})],1)]),r("el-form-item",{attrs:{label:e.constants.TPL,prop:"tpl"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择"},model:{value:e.ruleForm.tpl,callback:function(t){e.$set(e.ruleForm,"tpl",t)},expression:"ruleForm.tpl"}},e._l(e.tplOptions,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),r("el-form-item",{attrs:{label:"分数对应关系",prop:"mapping"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择"},model:{value:e.ruleForm.mapping,callback:function(t){e.$set(e.ruleForm,"mapping",t)},expression:"ruleForm.mapping"}},e._l(e.ruleArr,function(e){return r("el-option",{key:e.id,attrs:{label:e.type,value:e.id}})}))],1),r("br"),r("el-form-item",{attrs:{"label-width":"0px"}},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v(e._s(e.constants.CONFIRM))]),r("el-button",{attrs:{round:""},on:{click:function(t){e.closeDia("ruleForm")}}},[e._v(e._s(e.constants.CANCEL))])],1)],1)],1),e.showScopeTree?r("dp-panel",{attrs:{exclusive:!0,checkedNodes:e.checkedNodes,visible:e.showScopeTree,data:e.departmentTree},on:{"update:checkedNodes":function(t){e.checkedNodes=t},"update:visible":function(t){e.showScopeTree=t}}}):e._e()],1):e._e()],1)},d=[],p=r("XyMi");function f(e){r("okBS")}var m=!1,h=f,v="data-v-49899218",b=null,y=Object(p["a"])(c,u,d,m,h,v,b);t["default"]=y.exports},okBS:function(e,t){},y1vT:function(e,t,r){(function(t){var r="Expected a function",n=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),f=Object.prototype,m=f.toString,h=Math.max,v=Math.min,b=function(){return p.Date.now()};function y(e,t,n){var i,a,o,l,s,c,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var r=i,n=a;return i=a=void 0,u=t,l=e.apply(n,r),l}function y(e){return u=e,s=setTimeout(k,t),d?m(e):l}function g(e){var r=e-c,n=e-u,i=t-r;return p?v(i,o-n):i}function E(e){var r=e-c,n=e-u;return void 0===c||r>=t||r<0||p&&n>=o}function k(){var e=b();if(E(e))return F(e);s=setTimeout(k,g(e))}function F(e){return s=void 0,f&&i?m(e):(i=a=void 0,l)}function D(){void 0!==s&&clearTimeout(s),u=0,i=c=a=s=void 0}function O(){return void 0===s?l:F(b())}function A(){var e=b(),r=E(e);if(i=arguments,a=this,c=e,r){if(void 0===s)return y(c);if(p)return s=setTimeout(k,t),m(c)}return void 0===s&&(s=setTimeout(k,t)),l}return t=T(t)||0,_(n)&&(d=!!n.leading,p="maxWait"in n,o=p?h(T(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),A.cancel=D,A.flush=O,A}function _(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){return!!e&&"object"==typeof e}function E(e){return"symbol"==typeof e||g(e)&&m.call(e)==i}function T(e){if("number"==typeof e)return e;if(E(e))return n;if(_(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=l.test(e);return r||s.test(e)?c(e.slice(2),r?2:8):o.test(e)?n:+e}e.exports=y}).call(t,r("DuR2"))}});
//# sourceMappingURL=3.4023cca7.js.map