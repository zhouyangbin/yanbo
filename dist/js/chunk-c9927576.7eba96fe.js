(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9927576"],{"0261":function(e,t,r){"use strict";var a=r("7753"),o=r.n(a);o.a},"47af":function(e,t,r){"use strict";r.d(t,"a",function(){return a});r("6b54");var a=function(e){var t=e.getFullYear(),r=e.getMonth()+1,a=e.getDate(),n=e.getHours(),i=e.getMinutes();e.getSeconds();return[t,r,a].map(o).join("-")+" "+[n,i].map(o).join(":")},o=function(e){return e=e.toString(),e[1]?e:"0"+e}},"4abf":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"tpl-dialog",attrs:{"close-on-click-modal":!1,width:"650px",visible:e.visible},on:{close:e.close}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?"创建组织部绩效考核":"修改组织部绩效考核")+"\n  ")]),r("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{rules:e.rules,"label-width":"140px",model:e.ruleForm}},[r("el-form-item",{attrs:{label:"考核名称",prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"适用范围"}},[r("common-tree",{attrs:{orgTree:e.orgTree,department_ids:e.ruleForm.department_ids},on:{selectedIds:e.selectedOrg}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"绩效类型",prop:"performance_type"}},[r("el-select",{attrs:{placeholder:e.constants.PLEASE_SELECT_PERFORMANCE_TYPE},model:{value:e.ruleForm.performance_type,callback:function(t){e.$set(e.ruleForm,"performance_type",t)},expression:"ruleForm.performance_type"}},e._l(e.performanceTypes,function(e){return r("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),r("el-form-item",{attrs:{label:"考核年份",prop:"year"}},[r("el-date-picker",{attrs:{"value-format":"yyyy",type:"year",placeholder:"请选择考核年份"},model:{value:e.ruleForm.year,callback:function(t){e.$set(e.ruleForm,"year",t)},expression:"ruleForm.year"}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"考核周期",prop:"period_end_time"}},[r("div",[r("el-date-picker",{attrs:{clearable:!1,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"请选择"},model:{value:e.ruleForm.period_start_time,callback:function(t){e.$set(e.ruleForm,"period_start_time",t)},expression:"ruleForm.period_start_time"}}),r("span",[e._v("  至  ")]),r("el-date-picker",{attrs:{clearable:!1,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"请选择"},model:{value:e.ruleForm.period_end_time,callback:function(t){e.$set(e.ruleForm,"period_end_time",t)},expression:"ruleForm.period_end_time"}})],1)]),r("el-form-item",{attrs:{label:"绩效模板"}},[r("div",{staticClass:"rule-name tpl-name"},e._l(e.ruleForm.templates,function(t){return r("span",{key:t.id},[e._v(e._s(t.name))])}),0)]),r("el-form-item",{attrs:{label:"标签规则"}},[e.ruleForm.tag?r("div",{staticClass:"rule-name"},e._l(e.ruleForm.tag,function(t){return r("span",{key:t.id},[e._v(e._s(t.tag_type))])}),0):e._e()]),r("el-form-item",{attrs:{label:"是否允许申诉",prop:"allow_appeal"}},[r("el-radio-group",{model:{value:e.ruleForm.allow_appeal,callback:function(t){e.$set(e.ruleForm,"allow_appeal",t)},expression:"ruleForm.allow_appeal"}},[r("el-radio",{attrs:{label:1}},[e._v("是")]),r("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v("\n        "+e._s(e.constants.CONFIRM)+"\n      ")]),r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},o=[],n=r("5d58"),i=r.n(n),l=r("67bb"),s=r.n(l);function u(e){return u="function"===typeof s.a&&"symbol"===typeof i.a?function(e){return typeof e}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":typeof e},u(e)}function c(e){return c="function"===typeof s.a&&"symbol"===u(i.a)?function(e){return u(e)}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":u(e)},c(e)}r("7f7f");var d=r("38fb"),m=r("fea5"),p=(r("47af"),r("372d")),f={components:{"common-tree":Object(p["a"])(r.e("chunk-25721bc4").then(r.bind(null,"30da")))},props:{visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},initTime:{type:Object,default:function(){return{}}},performanceId:{type:String,default:""},performanceTypes:{type:Array,default:function(){return[]}},orgTree:{type:Array,default:function(){return[]}}},data:function(){var e=this,t=function(t,r,a){e.ruleForm.period_start_time?r&&r<=e.ruleForm.period_start_time?a(new Error(d["rb"])):a():a(new Error(d["Vd"]))};return{rules:{name:[{required:!0,message:d["nd"],trigger:"blur"}],department_ids:[{type:"array",required:!0,message:"请至少选择一个业务单元/职能单元",trigger:"change"}],year:[{required:!0,message:"考核周期不能为空",trigger:"blur"}],period_end_time:[{validator:t,trigger:"change"}]},ruleForm:{name:"",department_ids:[],performance_type:"annual",year:"",period_start_time:this.initTime.period_start_time||"",period_end_time:this.initTime.period_end_time||"",tag:{},templates:[],allow_appeal:1},tagType:[],performanceTpl:[],optionalOrgTree:[],optionalIds:[],constants:{CONFIRM:d["F"],CANCEL:d["z"],PLS_SELECT_START_TIME:d["Vd"],MSG_FILL_GRADE_NAME:d["nd"],END_TIME_NOT_LESS_THAN_START_TIME:d["rb"]}}},created:function(){var e=this;Object(m["vb"])().then(function(t){e.optionalIds=t,"add"!=e.infoType&&e.performanceId?(e.orgTree=e.disabledOrgTree(e.orgTree),Object(m["cb"])(e.performanceId).then(function(t){var r=t.name,a=t.department_ids,o=t.performance_type,n=t.year,i=t.period_start_time,l=t.period_end_time,s=t.tag,u=t.templates,c=t.allow_appeal;e.ruleForm={name:r,department_ids:a,performance_type:o,year:n,period_start_time:i,period_end_time:l,templates:u,tag:s,allow_appeal:c}}).catch(function(e){})):e.orgTree=e.handleOrgTree(e.orgTree)})},methods:{selectedOrg:function(e){var t=this;if(0===e.length)return!1;if("add"!==this.infoType)return!1;this.ruleForm.department_ids=e;var r={department_ids:e};Object(m["ub"])(r).then(function(e){t.ruleForm.tag=e}).catch(function(e){}),Object(m["Ab"])(r).then(function(e){t.ruleForm.templates=e}).catch(function(e){})},close:function(){this.$emit("close")},submit:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(t)return 0!=e.ruleForm.templates.length&&e.ruleForm.tag.tag_type?"add"==e.infoType?Object(m["Nb"])(e.ruleForm).then(function(t){e.$emit("update",t.id)}):Object(m["zc"])(e.performanceId,e.ruleForm).then(function(t){e.$emit("update")}):(e.$message({showClose:!0,message:"请至少选择一个有效业务单元/职能单元!",type:"error"}),!1)})},handleOrgTree:function(e){for(var t in e)"object"===c(e[t])&&(0<=this.optionalIds.indexOf(e[t].department_id)?e[t].disabled=!1:e[t].disabled=!0,void 0!==e[t].children&&this.handleOrgTree(e[t].children));return e},disabledOrgTree:function(e){for(var t in e)"object"===c(e[t])&&(e[t].disabled=!0,void 0!==e[t].children&&this.disabledOrgTree(e[t].children));return e}},beforeDestroy:function(){this.$refs["ruleForm"].resetFields()}},_=f,y=(r("0261"),r("87ff"),r("2877")),b=Object(y["a"])(_,a,o,!1,null,"dc3b8e54",null);t["default"]=b.exports},"5d58":function(e,t,r){e.exports=r("d8d6")},"67bb":function(e,t,r){e.exports=r("f921")},7753:function(e,t,r){},"87ff":function(e,t,r){"use strict";var a=r("92a8"),o=r.n(a);o.a},"92a8":function(e,t,r){}}]);