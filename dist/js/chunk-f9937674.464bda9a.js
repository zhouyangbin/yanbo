(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9937674"],{2481:function(t,e,i){"use strict";var s=i("6083"),a=i.n(s);a.a},"372d":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},a=[],n={},l=n,o=(i("cdb1"),i("2877")),r=Object(o["a"])(l,s,a,!1,null,"11474e22",null),c=r.exports;i.d(e,"a",function(){return m});var m=function(t){return function(){return{component:t,loading:c,delay:0}}}},"38bf":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"assessment-detail"},[i("nav-bar",{attrs:{list:t.nav}}),i("br"),i("section",{staticClass:"content-container bg-white"},[i("div",{staticClass:"content-title"},[i("div",[t._v(t._s(t.performanceDetail.name))]),i("div",{staticClass:"create-btn"},[i("el-button",{attrs:{type:"primary"},on:{click:t.openAssessment}},[t._v("开启考核")])],1)]),t._m(0)]),i("section",{staticClass:"content-container"},[i("div",{staticClass:"setting-list-box"},[i("div",{staticClass:"setting-title"},[i("div",[t._v("基本设置")]),i("div",{staticClass:"update-settin",on:{click:t.modifySettings}},[t._v("修改设置")])]),i("div",{staticClass:"basic-setting"},[i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[t._v("考核名称:")]),i("div",{staticClass:"setting-value"},[t._v(t._s(t.performanceDetail.name))])]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])]),i("div",{staticClass:"setting-list-box"},[i("div",{staticClass:"setting-title"},[i("div",[t._v("时间设置")]),i("div",{staticClass:"update-settin",on:{click:t.modifyTimes}},[t._v("修改时间")])]),i("div",{staticClass:"time-setting"},[i("div",{staticClass:"time-setting-box"},[i("div",{staticClass:"setting-key"},[t._v("整体起止时间:")]),i("div",{staticClass:"setting-value"},[t._v("\n            "+t._s(t._f("filterDate")(t.initTime.start_time))+" 至\n            "+t._s(t._f("filterDate")(t.initTime.end_time))+"\n          ")])]),i("div",{staticClass:"time-setting-box"},[i("div",{staticClass:"setting-key"},[t._v("各阶段起止时间:")]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-value",attrs:{data:t._f("filterDate")(t.initTime.indicator_setting_end_time)}},[t._v("\n              指标设定截止时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:t._f("filterDate")(t.initTime.self_evaluation_begin_time)}},[t._v("\n              自评时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:t._f("filterDate")(t.initTime.superior_begin_time)}},[t._v("\n              上级评时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:t._f("filterDate")(t.initTime.isolation_begin_time)}},[t._v("\n              隔级审核开始\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:t._f("filterDate")(t.initTime.president_audit_begin_time)}},[t._v("\n              总裁审核时间开始\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:t._f("filterDate")(t.initTime.result_confirm_end_time)}},[t._v("\n              结果确认截止时间\n            ")])])]),i("div",{staticClass:"time-setting-box"},[i("div",{staticClass:"setting-key"},[t._v("可申诉时间段:")]),i("div",{staticClass:"setting-value"},[t._v("\n            "+t._s(t._f("filterDate")(t.initTime.appeal_begin_time))+"至"+t._s(t._f("filterDate")(t.initTime.appeal_end_time))+"\n          ")])])])]),i("div",{staticClass:"setting-list-box"},[i("div",{staticClass:"setting-title"},[t._v("考核人员名单")]),i("el-form",{ref:"personalForm",staticClass:"form-list",attrs:{model:t.personalForm,"label-width":"110px"}},[i("el-form-item",{staticClass:"limit-width",attrs:{prop:"name_or_workcode",label:"姓名(工号):"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:t.personalForm.name_or_workcode,callback:function(e){t.$set(t.personalForm,"name_or_workcode",e)},expression:"personalForm.name_or_workcode"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"department_ids",label:"事业部:"}},[i("el-cascader",{attrs:{placeholder:"请选择事业部",props:t.filterProps,options:t.orgTree,"show-all-levels":!1},model:{value:t.personalForm.department_ids,callback:function(e){t.$set(t.personalForm,"department_ids",e)},expression:"personalForm.department_ids"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"status",label:"状态:"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.personalForm.status,callback:function(e){t.$set(t.personalForm,"status",e)},expression:"personalForm.status"}},t._l(t.statusOptions,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"hrd_name",label:"HRD:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:t.personalForm.hrd_name,callback:function(e){t.$set(t.personalForm,"hrd_name",e)},expression:"personalForm.hrd_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"superior_name",label:"直接上级:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:t.personalForm.superior_name,callback:function(e){t.$set(t.personalForm,"superior_name",e)},expression:"personalForm.superior_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"hrbp_name",label:"HRBP:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:t.personalForm.hrbp_name,callback:function(e){t.$set(t.personalForm,"hrbp_name",e)},expression:"personalForm.hrbp_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"distribution_253",label:"253分布:"}},[i("el-input",{attrs:{placeholder:"请选择"},model:{value:t.personalForm.distribution_253,callback:function(e){t.$set(t.personalForm,"distribution_253",e)},expression:"personalForm.distribution_253"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"executive_type",label:"组织部类别:"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.personalForm.executive_type,callback:function(e){t.$set(t.personalForm,"executive_type",e)},expression:"personalForm.executive_type"}},t._l(t.executiveTypes,function(t){return i("el-option",{key:t.key,attrs:{label:t.name,value:t.key}})}),1)],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"isolation_name",label:"隔级:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:t.personalForm.isolation_name,callback:function(e){t.$set(t.personalForm,"isolation_name",e)},expression:"personalForm.isolation_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"president_name",label:"总裁:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:t.personalForm.president_name,callback:function(e){t.$set(t.personalForm,"president_name",e)},expression:"personalForm.president_name"}})],1),i("el-form-item",{staticClass:"on-query"},[i("el-button",{on:{click:function(e){return t.resetForm("personalForm")}}},[t._v("重置")]),i("el-button",{attrs:{type:"primary"},on:{click:t.onQuery}},[t._v("查询")])],1)],1),i("div",{staticClass:"table-operate"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-view"},on:{click:t.viewDistribution}},[t._v("查看分布")]),i("el-button-group",{staticClass:"btn-group"},[i("el-button",{attrs:{icon:"el-icon-bell"},on:{click:t.reminder}},[t._v("提醒")]),i("el-button",{attrs:{icon:"el-icon-plus"},on:{click:t.addPerson}},[t._v("添加人员")]),i("el-button",{attrs:{icon:"el-icon-download"},on:{click:t.exportList}},[t._v("导出名单")]),i("el-popover",{attrs:{placement:"bottom",width:"120",trigger:"hover"}},[i("div",{staticClass:"more-btn",on:{click:t.uploadFinancialIndicators}},[i("i",{staticClass:"el-icon-upload2"}),i("span",[t._v("上传财务指标")])]),i("div",{staticClass:"more-btn",on:{click:t.uploadWorkObjectives}},[i("i",{staticClass:"el-icon-upload2"}),i("span",[t._v("上传工作目标")])]),i("div",{staticClass:"more-btn",on:{click:t.removeList}},[i("i",{staticClass:"el-icon-delete"}),i("span",[t._v("移除")])]),i("el-button",{attrs:{slot:"reference",icon:"el-icon-more"},slot:"reference"})],1)],1),t._m(7)],1),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.userList,stripe:""},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{prop:"workcode",label:"工号",width:"80"}}),i("el-table-column",{attrs:{prop:"department",label:"总部/事业部",width:"100"}}),i("el-table-column",{attrs:{prop:"business",label:"大部门/分校",width:"100"}}),i("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"180"}}),i("el-table-column",{attrs:{prop:"executive_type_text",label:"组织部类别"}}),i("el-table-column",{attrs:{prop:"superior_name",label:"直接上级"}}),i("el-table-column",{attrs:{prop:"isolation_name",label:"隔级"}}),i("el-table-column",{attrs:{prop:"president_name",label:"总裁"}}),i("el-table-column",{attrs:{prop:"hrbp_name",label:"HRBP"}}),i("el-table-column",{attrs:{prop:"hrd_name",label:"HRD"}}),i("el-table-column",{attrs:{prop:"state",fixed:"right",width:"80",label:"状态"}}),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.modify(e.row)}}},[t._v("修改")]),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.remove(e.row)}}},[t._v("移除")]),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.viewIndicators(e.row)}}},[t._v("查看指标")])]}}])})],1),i("br"),i("el-row",{attrs:{type:"flex",justify:"end"}},[i("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)]),t.showDialog?i("assessment-dialog",{attrs:{visible:t.showDialog,infoType:t.infoType,performanceId:t.performanceId,performanceTypes:t.performanceTypes,orgTree:t.orgTree},on:{close:t.tplDialogClose}}):t._e(),t.showSetupTime?i("setup-time",{attrs:{visible:t.showSetupTime,performanceId:t.performanceId,initTime:t.initTime},on:{close:t.setupTimeClose}}):t._e(),t.showModifyUser?i("modify-user",{attrs:{visible:t.showModifyUser,userType:t.userType,userId:t.userId,performanceId:t.performanceId,executiveTypes:t.executiveTypes,userInfo:t.userInfo},on:{close:t.modifyUserClose}}):t._e(),t.showConfirmDialog?i("confirm-dialog",{attrs:{visible:t.showConfirmDialog,tipsText:t.tipsText},on:{confirm:t.confirmDialog,close:t.closeDialog}}):t._e()],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-timeline"},[i("div",{staticClass:"time-line active",attrs:{data:"填写中100/确认中300"}},[t._v("指标设定")]),i("div",{staticClass:"time-line-sign active",attrs:{data:"11月15日"}}),i("div",{staticClass:"time-line-circle active"},[i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"})]),i("div",{staticClass:"time-line-sign active",attrs:{data:"11月18日"}}),i("div",{staticClass:"time-line active"},[t._v("自评")]),i("div",{staticClass:"time-line-sign active",attrs:{data:"11月23日"}}),i("div",{staticClass:"time-line"},[t._v("上级评分")]),i("div",{staticClass:"time-line-sign",attrs:{data:"11月30日"}}),i("div",{staticClass:"time-line"},[t._v("隔级审核")]),i("div",{staticClass:"time-line-sign",attrs:{data:"12月1日"}}),i("div",{staticClass:"time-line"},[t._v("总裁审核")]),i("div",{staticClass:"time-line-sign",attrs:{data:"12月18日"}}),i("div",{staticClass:"time-line"},[t._v("结果确认")]),i("div",{staticClass:"time-line-sign",attrs:{data:"12月30日"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[t._v("适用范围:")]),i("div",{staticClass:"setting-value"},[t._v("学习事业部")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[t._v("考核类型:")]),i("div",{staticClass:"setting-value"},[t._v("年度")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[t._v("考核周期:")]),i("div",{staticClass:"setting-value"},[t._v("2019年3月-2019年12月")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[t._v("绩效模板:")]),i("div",{staticClass:"setting-value"},[t._v("\n            学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板\n          ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[t._v("是否允许申诉:")]),i("div",{staticClass:"setting-value"},[t._v("是")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[t._v("标签规则:")]),i("div",{staticClass:"setting-value"},[t._v("23221")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-number"},[i("i",{staticClass:"el-icon-info"}),t._v(" 共400人，已选 "),i("span",[t._v("0")]),t._v(" 人\n        ")])}],n=i("372d"),l=i("fea5"),o=(i("38fb"),{components:{"nav-bar":function(){return i.e("chunk-5d596fe7").then(i.bind(null,"3208"))},"confirm-dialog":Object(n["a"])(i.e("chunk-ed57075a").then(i.bind(null,"1f04"))),"assessment-dialog":Object(n["a"])(i.e("chunk-7f8c77da").then(i.bind(null,"4abf"))),"setup-time":Object(n["a"])(i.e("chunk-4ea33df2").then(i.bind(null,"1b32"))),"modify-user":Object(n["a"])(i.e("chunk-4f1ce818").then(i.bind(null,"94a0"))),pagination:function(){return i.e("chunk-41c26728").then(i.bind(null,"486f"))}},data:function(){return{filterProps:{value:"department_id",label:"department_name",children:"children"},statusOptions:[{label:"全部",value:""},{label:"草稿",value:"1"},{label:"进行中",value:"2"},{label:"已结束",value:"4"}],executiveTypes:[],performanceDetail:{},performanceId:this.$route.params.id,currentPage:1,total:0,showConfirmDialog:!1,showDialog:!1,showSetupTime:!1,infoType:"add",performanceTypes:[],orgTree:[],tipsText:"",nav:[{label:"组织部绩效考核列表",active:!1},{label:"考核详情",active:!0}],personalForm:{name_or_workcode:"",department_ids:[],status:"",executive_type:"",superior_name:"",isolation_name:"",president_name:"",hrbp_name:"",distribution_253:"",hrd_name:""},userList:[],performance_user_ids:[],showModifyUser:!1,userInfo:{},userType:"add",userId:""}},computed:{initTime:function(){return{start_time:this.performanceDetail.start_time,end_time:this.performanceDetail.end_time,indicator_setting_end_time:this.performanceDetail.indicator_setting_end_time,self_evaluation_begin_time:this.performanceDetail.self_evaluation_begin_time,superior_begin_time:this.performanceDetail.superior_begin_time,isolation_begin_time:this.performanceDetail.isolation_begin_time,president_audit_begin_time:this.performanceDetail.president_audit_begin_time,result_comfirm_end_time:this.performanceDetail.result_comfirm_end_time,appeal_begin_time:this.performanceDetail.appeal_begin_time,appeal_end_time:this.performanceDetail.appeal_end_time}}},filters:{filterDate:function(t){var e="";return t&&(e=/\d{4}-\d{1,2}-\d{1,2}/g.exec(t),e=e[0]),e}},methods:{modifyUserClose:function(){this.showModifyUser=!1},handleSelectionChange:function(t){console.log(t)},reminder:function(){Object(l["cb"])(this.performanceId).then(function(t){console.log(t)}).catch(function(t){})},addPerson:function(){this.userType="add",this.showModifyUser=!0},exportList:function(){console.log("exportList")},uploadFinancialIndicators:function(){console.log("uploadFinancialIndicators")},uploadWorkObjectives:function(){console.log("uploadWorkObjectives")},removeList:function(){if(0===this.performance_user_ids.length)return!1;Object(l["i"])(this.performanceId,this.performance_user_ids).then(function(t){console.log(t)}).catch(function(t){})},viewDistribution:function(){},modifySettings:function(){this.infoType="modify",this.showDialog=!0},modifyTimes:function(){this.showSetupTime=!0},setupTimeClose:function(){this.showSetupTime=!1},tplDialogClose:function(){this.showDialog=!1},openAssessment:function(){this.showConfirmDialog=!0,this.tipsText="是否确认启动考核？"},confirmDialog:function(){},closeDialog:function(){this.showConfirmDialog=!1},handleCurrentChange:function(){this.currentPage=val},onQuery:function(){this.getUserList()},resetForm:function(t){this.$refs[t].resetFields(),this.getUserList()},viewIndicators:function(t){},remove:function(t){},modify:function(t){this.userType="modify",this.showModifyUser=!0},getUserList:function(){var t=this;Object(l["fb"])(this.performanceId,this.personalForm).then(function(e){t.userList=e}).catch(function(t){})}},created:function(){var t=this;Object(l["Y"])().then(function(e){t.orgTree=e}).catch(function(t){}),Object(l["eb"])().then(function(e){t.performanceTypes=e}).catch(function(t){}),Object(l["ab"])().then(function(e){t.performanceDetail=e}).catch(function(t){}),Object(l["x"])().then(function(e){t.executiveTypes=e}).catch(function(t){}),this.getUserList()}}),r=o,c=(i("2481"),i("5d7e"),i("2877")),m=Object(c["a"])(r,s,a,!1,null,"763a5ee0",null);e["default"]=m.exports},"5d7e":function(t,e,i){"use strict";var s=i("6cab"),a=i.n(s);a.a},"5f05":function(t,e,i){},6083:function(t,e,i){},"6cab":function(t,e,i){},cdb1:function(t,e,i){"use strict";var s=i("5f05"),a=i.n(s);a.a}}]);