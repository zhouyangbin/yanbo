(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd061a10"],{"47af":function(e,t,r){"use strict";r.d(t,"a",function(){return a});r("6b54");var a=function(e){var t=e.getFullYear(),r=e.getMonth()+1,a=e.getDate(),l=e.getHours(),o=e.getMinutes();e.getSeconds();return[t,r,a].map(n).join("-")+" "+[l,o].map(n).join(":")},n=function(e){return e=e.toString(),e[1]?e:"0"+e}},"4abf":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"tpl-dialog",attrs:{"close-on-click-modal":!1,width:"650px",visible:e.visible},on:{close:e.close}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?"创建组织部绩效考核":"修改组织部绩效考核")+"\n  ")]),r("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{rules:e.rules,"label-width":"140px",model:e.ruleForm}},[r("el-form-item",{attrs:{label:"考核名称",prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"适用范围",prop:"department_ids"}},[r("common-tree",{attrs:{orgTree:e.orgTree,department_ids:e.ruleForm.department_ids},on:{selectedIds:e.selectedOrg}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"绩效类型",prop:"performance_type"}},[r("el-select",{attrs:{placeholder:e.constants.PLEASE_SELECT_PERFORMANCE_TYPE},model:{value:e.ruleForm.performance_type,callback:function(t){e.$set(e.ruleForm,"performance_type",t)},expression:"ruleForm.performance_type"}},e._l(e.performanceTypes,function(e){return r("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),r("el-form-item",{attrs:{label:"考核年份",prop:"year"}},[r("el-date-picker",{attrs:{"value-format":"yyyy",type:"year",placeholder:"请选择考核年份"},model:{value:e.ruleForm.year,callback:function(t){e.$set(e.ruleForm,"year",t)},expression:"ruleForm.year"}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"考核周期",prop:"end_time"}},[r("div",[r("el-date-picker",{attrs:{clearable:!1,"picker-options":e.startPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"请选择"},model:{value:e.ruleForm.start_time,callback:function(t){e.$set(e.ruleForm,"start_time",t)},expression:"ruleForm.start_time"}}),r("span",[e._v("  至  ")]),r("el-date-picker",{attrs:{clearable:!1,"picker-options":e.endPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"请选择"},model:{value:e.ruleForm.end_time,callback:function(t){e.$set(e.ruleForm,"end_time",t)},expression:"ruleForm.end_time"}})],1)]),r("el-form-item",{attrs:{label:"绩效模板"}},e._l(e.ruleForm.tag,function(t){return r("div",{key:t.id,staticClass:"rule-name"},[e._v("\n        "+e._s(t.name)+"\n      ")])}),0),r("el-form-item",{attrs:{label:"标签规则"}},e._l(e.ruleForm.templates,function(t){return r("div",{key:t.id,staticClass:"rule-name"},[e._v("\n        "+e._s(t.tag_type)+"\n      ")])}),0),r("el-form-item",{attrs:{label:"是否允许申诉",prop:"allow_appeal"}},[r("el-radio-group",{model:{value:e.ruleForm.allow_appeal,callback:function(t){e.$set(e.ruleForm,"allow_appeal",t)},expression:"ruleForm.allow_appeal"}},[r("el-radio",{attrs:{label:1}},[e._v("是")]),r("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v("\n        "+e._s(e.constants.CONFIRM)+"\n      ")]),r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},n=[],l=(r("7f7f"),r("28a5"),r("38fb")),o=r("fea5"),i=r("47af"),s=r("372d"),m={components:{"common-tree":Object(s["a"])(r.e("chunk-8ada7330").then(r.bind(null,"30da")))},props:{visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},initTime:{type:Object,default:function(){return{}}},performanceId:{type:String,default:""},performanceTypes:{type:Array,default:function(){return[]}},orgTree:{type:Array,default:function(){return[]}}},data:function(){var e=this,t=function(t,r,a){e.ruleForm.start_time?r&&r<=e.ruleForm.start_time?a(new Error(l["rb"])):a():a(new Error(l["Vd"]))};return{isWatch:!0,departmentIds:[],rules:{name:[{required:!0,message:l["nd"],trigger:"blur"}],department_ids:[{type:"array",required:!0,message:"请至少选择一个业务单元/职能单元",trigger:"change"}],year:[{required:!0,message:"考核周期不能为空",trigger:"blur"}],end_time:[{validator:t,trigger:"change"}]},ruleForm:{name:"",department_ids:[],performance_type:"annual",year:"",start_time:this.initTime.start_time||"",end_time:this.initTime.end_time||"",tag:[],templates:[],allow_appeal:1},tagType:[],performanceTpl:[],constants:{CONFIRM:l["F"],CANCEL:l["z"],PLS_SELECT_START_TIME:l["Vd"],MSG_FILL_GRADE_NAME:l["nd"],END_TIME_NOT_LESS_THAN_START_TIME:l["rb"]}}},computed:{startPickerOptions:function(){return{disabledDate:function(e){var t=Object(i["a"])(new Date(e)),r=Object(i["a"])(new Date).split(" ")[0]+" 00:00";return t<r}}},endPickerOptions:function(){var e=this;return{disabledDate:function(t){var r=Object(i["a"])(new Date(t)),a=Object(i["a"])(new Date).split(" ")[0]+" 00:00";return e.ruleForm.start_time&&(a=e.ruleForm.start_time),r<a}}}},watch:{departmentIds:{handler:function(e,t){var r=this;if(e.length>0&&this.isWatch){var a={department_ids:e};Object(o["nb"])(a).then(function(e){r.ruleForm.tag=e}).catch(function(e){}),Object(o["tb"])(a).then(function(e){r.ruleForm.templates=e}).catch(function(e){})}},immediate:!0}},created:function(){var e=this;"add"!=this.infoType&&this.performanceId&&Object(o["Y"])(this.performanceId).then(function(t){e.isWatch=!1;var r=t.name,a=t.department_ids,n=t.performance_type,l=t.year,o=t.start_time,i=t.end_time,s=t.templates,m=t.allow_appeal;e.ruleForm={name:r,department_ids:a,performance_type:n,year:l,start_time:o,end_time:i,templates:s,allow_appeal:m}}).catch(function(e){})},methods:{selectedOrg:function(e){this.departmentIds=e,this.ruleForm.department_ids=e},close:function(){this.$emit("close")},submit:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(t)return"add"==e.infoType?Object(o["Fb"])(e.ruleForm).then(function(t){e.close()}):Object(o["pc"])(e.performanceId,e.ruleForm).then(function(t){e.close()})})}},beforeDestroy:function(){this.$refs["ruleForm"].resetFields()}},c=m,u=(r("9ad0"),r("2877")),d=Object(u["a"])(c,a,n,!1,null,"a3ba37fa",null);t["default"]=d.exports},"9ad0":function(e,t,r){"use strict";var a=r("f5db"),n=r.n(a);n.a},f5db:function(e,t,r){}}]);