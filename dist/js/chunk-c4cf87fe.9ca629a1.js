(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4cf87fe"],{"26c2":function(e,t,r){"use strict";var n=r("7fb0"),a=r.n(n);a.a},"47af":function(e,t,r){"use strict";r.d(t,"a",function(){return n});r("6b54");var n=function(e){var t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),o=e.getHours(),i=e.getMinutes();e.getSeconds();return[t,r,n].map(a).join("-")+" "+[o,i].map(a).join(":")},a=function(e){return e=e.toString(),e[1]?e:"0"+e}},"4abf":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"tpl-dialog",attrs:{"close-on-click-modal":!1,width:"650px",visible:e.visible},on:{close:e.close}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?"创建组织部绩效考核":"修改组织部绩效考核")+"\n  ")]),r("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{rules:e.rules,"label-width":"140px",model:e.ruleForm}},[r("el-form-item",{attrs:{label:"考核名称",prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"适用范围"}},[r("common-tree",{attrs:{orgTree:e.orgTree,department_ids:e.ruleForm.department_ids},on:{selectedIds:e.selectedOrg}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"绩效类型",prop:"performance_type"}},[r("el-select",{attrs:{placeholder:e.constants.PLEASE_SELECT_PERFORMANCE_TYPE},model:{value:e.ruleForm.performance_type,callback:function(t){e.$set(e.ruleForm,"performance_type",t)},expression:"ruleForm.performance_type"}},e._l(e.performanceTypes,function(e){return r("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),r("el-form-item",{attrs:{label:"考核年份",prop:"year"}},[r("el-date-picker",{attrs:{"value-format":"yyyy",type:"year",placeholder:"请选择考核年份"},model:{value:e.ruleForm.year,callback:function(t){e.$set(e.ruleForm,"year",t)},expression:"ruleForm.year"}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"考核周期",prop:"period_end_time"}},[r("div",[r("el-date-picker",{attrs:{clearable:!1,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"请选择"},model:{value:e.ruleForm.period_start_time,callback:function(t){e.$set(e.ruleForm,"period_start_time",t)},expression:"ruleForm.period_start_time"}}),r("span",[e._v("  至  ")]),r("el-date-picker",{attrs:{clearable:!1,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"请选择"},model:{value:e.ruleForm.period_end_time,callback:function(t){e.$set(e.ruleForm,"period_end_time",t)},expression:"ruleForm.period_end_time"}})],1)]),r("el-form-item",{attrs:{label:"绩效模板"}},[r("div",{staticClass:"rule-name tpl-name"},e._l(e.ruleForm.templates,function(t){return r("span",{key:t.id},[e._v(e._s(t.name))])}),0)]),r("el-form-item",{attrs:{label:"标签规则"}},[e.ruleForm.tag?r("div",{staticClass:"rule-name"},[e.ruleForm.tag?r("span",[e._v(e._s(e.ruleForm.tag.tag_type))]):e._e()]):e._e()]),r("el-form-item",{attrs:{label:"是否允许申诉",prop:"allow_appeal"}},[r("el-radio-group",{model:{value:e.ruleForm.allow_appeal,callback:function(t){e.$set(e.ruleForm,"allow_appeal",t)},expression:"ruleForm.allow_appeal"}},[r("el-radio",{attrs:{label:1}},[e._v("是")]),r("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",size:"medium",disabled:e.disabledBtn,type:"primary"},on:{click:e.submit}},[e._v("\n        "+e._s(e.constants.CONFIRM)+"\n      ")]),r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},a=[],o=r("5d58"),i=r.n(o),l=r("67bb"),s=r.n(l);function u(e){return u="function"===typeof s.a&&"symbol"===typeof i.a?function(e){return typeof e}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":typeof e},u(e)}function c(e){return c="function"===typeof s.a&&"symbol"===u(i.a)?function(e){return u(e)}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":u(e)},c(e)}r("7f7f");var d=r("38fb"),m=r("fea5"),p=(r("47af"),r("372d")),f=r("f7fe"),y={components:{"common-tree":Object(p["a"])(r.e("chunk-25721bc4").then(r.bind(null,"30da")))},props:{visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},initTime:{type:Object,default:function(){return{}}},performanceId:{type:String,default:""},performanceTypes:{type:Array,default:function(){return[]}},orgTree:{type:Array,default:function(){return[]}}},data:function(){var e=this,t=function(t,r,n){e.ruleForm.period_start_time?r&&r<=e.ruleForm.period_start_time?n(new Error(d["tb"])):n():n(new Error(d["de"]))};return{rules:{name:[{required:!0,message:d["qd"],trigger:"blur"},{max:50,message:"考核名称最多不能超过50字",trigger:"blur"}],department_ids:[{type:"array",required:!0,message:"请至少选择一个业务单元/职能单元",trigger:"change"}],year:[{required:!0,message:"考核周期不能为空",trigger:"blur"}],period_end_time:[{validator:t,trigger:"change"}]},ruleForm:{name:"",department_ids:[],performance_type:"annual",year:"",period_start_time:this.initTime.period_start_time||"",period_end_time:this.initTime.period_end_time||"",tag:{tag_type:""},templates:[],allow_appeal:1},tagType:[],performanceTpl:[],optionalOrgTree:[],optionalIds:[],disabledBtn:!1,constants:{CONFIRM:d["G"],CANCEL:d["A"],PLS_SELECT_START_TIME:d["de"],MSG_FILL_GRADE_NAME:d["qd"],END_TIME_NOT_LESS_THAN_START_TIME:d["tb"]}}},created:function(){var e=this;"add"!=this.infoType&&this.performanceId&&(this.orgTree=this.disabledOrgTree(this.orgTree),Object(m["G"])(this.performanceId).then(function(t){var r=t.name,n=t.department_ids,a=t.performance_type,o=t.year,i=t.period_start_time,l=t.period_end_time,s=t.tag,u=t.templates,c=t.allow_appeal;e.ruleForm={name:r,department_ids:n,performance_type:a,year:o,period_start_time:i,period_end_time:l,templates:u,tag:s,allow_appeal:c}}).catch(function(e){}))},methods:{selectedOrg:f(function(e){var t=this;if(0===e.length)return this.ruleForm.templates=[],this.ruleForm.tag={tag_type:""},!1;if("add"!==this.infoType)return!1;this.ruleForm.department_ids=e;var r={department_ids:e};Object(m["O"])(r).then(function(e){t.ruleForm.tag=e}).catch(function(e){}),Object(m["R"])(r).then(function(e){t.ruleForm.templates=e}).catch(function(e){})},500),close:function(){this.$emit("close")},submit:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(t)return 0==e.ruleForm.templates.length||""===e.ruleForm.tag.tag_type?(e.$message({showClose:!0,message:"请至少选择一个有效业务单元/职能单元!",type:"error"}),!1):(e.disabledBtn=!0,"add"==e.infoType?Object(m["Yb"])(e.ruleForm).then(function(t){e.$emit("update",t.id),e.disabledBtn=!1}):Object(m["Dc"])(e.performanceId,e.ruleForm).then(function(t){e.$emit("update"),e.disabledBtn=!1}))})},handleOrgTree:function(e){for(var t in e)"object"===c(e[t])&&(0<=this.optionalIds.indexOf(e[t].department_id)?e[t].disabled=!1:e[t].disabled=!0,void 0!==e[t].children&&this.handleOrgTree(e[t].children));return e},disabledOrgTree:function(e){for(var t in e)"object"===c(e[t])&&(e[t].disabled=!0,void 0!==e[t].children&&this.disabledOrgTree(e[t].children));return e}},beforeDestroy:function(){this.$refs["ruleForm"].resetFields()}},_=y,b=(r("8c6f"),r("26c2"),r("2877")),v=Object(b["a"])(_,n,a,!1,null,"28cc260e",null);t["default"]=v.exports},"5d58":function(e,t,r){e.exports=r("d8d6")},"67bb":function(e,t,r){e.exports=r("f921")},"7fb0":function(e,t,r){},"8c6f":function(e,t,r){"use strict";var n=r("b389"),a=r.n(n);a.a},b389:function(e,t,r){},f7fe:function(e,t,r){(function(t){var r="Expected a function",n=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,m=c||d||Function("return this")(),p=Object.prototype,f=p.toString,y=Math.max,_=Math.min,b=function(){return m.Date.now()};function v(e,t,n){var a,o,i,l,s,u,c=0,d=!1,m=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function f(t){var r=a,n=o;return a=o=void 0,c=t,l=e.apply(n,r),l}function v(e){return c=e,s=setTimeout(O,t),d?f(e):l}function h(e){var r=e-u,n=e-c,a=t-r;return m?_(a,i-n):a}function F(e){var r=e-u,n=e-c;return void 0===u||r>=t||r<0||m&&n>=i}function O(){var e=b();if(F(e))return j(e);s=setTimeout(O,h(e))}function j(e){return s=void 0,p&&a?f(e):(a=o=void 0,l)}function w(){void 0!==s&&clearTimeout(s),c=0,a=u=o=s=void 0}function E(){return void 0===s?l:j(b())}function k(){var e=b(),r=F(e);if(a=arguments,o=this,u=e,r){if(void 0===s)return v(u);if(m)return s=setTimeout(O,t),f(u)}return void 0===s&&(s=setTimeout(O,t)),l}return t=T(t)||0,g(n)&&(d=!!n.leading,m="maxWait"in n,i=m?y(T(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),k.cancel=w,k.flush=E,k}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){return!!e&&"object"==typeof e}function F(e){return"symbol"==typeof e||h(e)&&f.call(e)==a}function T(e){if("number"==typeof e)return e;if(F(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=l.test(e);return r||s.test(e)?u(e.slice(2),r?2:8):i.test(e)?n:+e}e.exports=v}).call(this,r("c8ba"))}}]);