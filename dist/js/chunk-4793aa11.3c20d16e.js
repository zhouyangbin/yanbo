(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4793aa11"],{1508:function(e,t,i){"use strict";var a=i("20b2"),s=i.n(a);s.a},"20b2":function(e,t,i){},"2fdb":function(e,t,i){"use strict";var a=i("5ca1"),s=i("d2c8"),n="includes";a(a.P+a.F*i("5147")(n),"String",{includes:function(e){return!!~s(this,e,n).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"372d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},s=[],n={},r=n,o=(i("ee47"),i("2877")),l=Object(o["a"])(r,a,s,!1,null,"6c517b7e",null),c=l.exports;i.d(t,"a",function(){return m});var m=function(e){return function(){return{component:e,loading:c,delay:0}}}},"38bf":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"assessment-detail"},[i("nav-bar",{attrs:{list:e.nav}}),i("br"),i("section",{staticClass:"content-container bg-white"},[i("div",{staticClass:"content-title"},[i("div",[e._v(e._s(e.performanceDetail.name))]),i("div",{staticClass:"create-btn"},[0===e.performanceDetail.stage&&e.showExecutiveScoreManagement?i("el-button",{attrs:{type:"primary",disabled:!e.performanceDetail.can_start},on:{click:e.openAssessment}},[e._v("开启考核")]):e._e()],1)]),i("div",{staticClass:"list-timeline"},[i("div",{staticClass:"time-line",class:0===e.performanceDetail.stage?"":"active",attrs:{data:0===e.performanceDetail.stage?"":"填写中"+e.performanceDetail.indicator_fill_in+"/确认中"+e.performanceDetail.indicator_confirm}},[e._v("\n        指标设定\n      ")]),i("div",{staticClass:"time-line-sign",class:0===e.performanceDetail.stage?"":"active",attrs:{data:e._f("filterDate")(e.performanceDetail.indicator_setting_end_time)}}),i("div",{staticClass:"time-line-circle",class:e._f("filterCompareDate")(e.performanceDetail.self_evaluation_begin_time)},[i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"})]),i("div",{staticClass:"time-line-sign",class:e._f("filterCompareDate")(e.performanceDetail.self_evaluation_begin_time),attrs:{data:e._f("filterDate")(e.performanceDetail.self_evaluation_begin_time)}}),i("div",{staticClass:"time-line",class:e._f("filterCompareDate")(e.performanceDetail.self_evaluation_begin_time),attrs:{data:0===e.performanceDetail.stage?"":"自评中"+e.performanceDetail.self_evaluation}},[e._v("\n        自评\n      ")]),i("div",{staticClass:"time-line-sign",class:e._f("filterCompareDate")(e.performanceDetail.superior_begin_time),attrs:{data:e._f("filterDate")(e.performanceDetail.superior_begin_time)}}),i("div",{staticClass:"time-line",class:e._f("filterCompareDate")(e.performanceDetail.superior_begin_time),attrs:{data:0===e.performanceDetail.stage?"":"复评中"+e.performanceDetail.re_evaluation}},[e._v("\n        上级评分\n      ")]),i("div",{staticClass:"time-line-sign",class:e._f("filterCompareDate")(e.performanceDetail.isolation_begin_time),attrs:{data:e._f("filterDate")(e.performanceDetail.isolation_begin_time)}}),i("div",{staticClass:"time-line",class:e._f("filterCompareDate")(e.performanceDetail.isolation_begin_time),attrs:{data:0===e.performanceDetail.stage?"":"隔级审核中"+e.performanceDetail.isolation_adult}},[e._v("\n        隔级审核\n      ")]),i("div",{staticClass:"time-line-sign",class:e._f("filterCompareDate")(e.performanceDetail.president_audit_begin_time),attrs:{data:e._f("filterDate")(e.performanceDetail.president_audit_begin_time)}}),i("div",{staticClass:"time-line",class:e._f("filterCompareDate")(e.performanceDetail.president_audit_begin_time),attrs:{data:0===e.performanceDetail.stage?"":"总裁审核中"+e.performanceDetail.president_audit}},[e._v("\n        总裁审核\n      ")]),i("div",{staticClass:"time-line-sign",class:e.performanceDetail.stage>=530?"active":"",attrs:{data:e._f("filterDate")(e.performanceDetail.result_comfirm_end_time)}}),i("div",{staticClass:"time-line",class:e.performanceDetail.stage>=530?"active":"",attrs:{data:0===e.performanceDetail.stage?"":"确认中"+e.performanceDetail.confirm+"/已确认"+e.performanceDetail.confirmed}},[e._v("\n        结果确认\n      ")]),i("div",{staticClass:"time-line-sign",class:e.performanceDetail.stage>=530?"active":"",attrs:{data:e._f("filterDate")(e.performanceDetail.result_confirm_end_time)}})])]),i("section",{staticClass:"content-container"},[i("div",{staticClass:"setting-list-box"},[i("div",{staticClass:"setting-title"},[i("div",[e._v("基本设置")]),e.showExecutiveScoreManagement?i("div",{staticClass:"update-settin",on:{click:e.modifySettings}},[e._v("\n          修改设置\n        ")]):e._e()]),i("div",{staticClass:"basic-setting"},[i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("考核名称:")]),i("div",{staticClass:"setting-value"},[e._v(e._s(e.performanceDetail.name))])]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("适用范围:")]),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.performanceDetail.departments_text,placement:"top"}},[i("div",{staticClass:"setting-value"},[e._v("\n              "+e._s(e.performanceDetail.departments_text)+"\n            ")])])],1),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("绩效类型:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(e._f("filterType")(e.performanceDetail.performance_type))+"\n          ")])]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("考核周期:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(e._f("filterDate")(e.performanceDetail.period_start_time))+"~"+e._s(e._f("filterDate")(e.performanceDetail.period_end_time))+"\n          ")])]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("绩效模板:")]),e._l(e.performanceDetail.templates,function(t){return i("div",{key:t.id,staticClass:"setting-value performance-tpl"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.name,placement:"top"}},[i("div",{staticClass:"setting-value"},[e._v("\n                "+e._s(t.name)+"\n              ")])])],1)})],2),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("是否允许申诉:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(1===e.performanceDetail.allow_appeal?"是":"否")+"\n          ")])]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("标签规则:")]),i("div",{staticClass:"setting-value"},[e.performanceDetail.tag?i("span",[e._v(e._s(e.performanceDetail.tag.tag_type))]):e._e()])]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("考核年份:")]),i("div",{staticClass:"setting-value"},[e._v(e._s(e.performanceDetail.year))])])])]),i("div",{staticClass:"setting-list-box"},[i("div",{staticClass:"setting-title"},[i("div",[e._v("时间设置")]),e.showExecutiveScoreManagement?i("div",{staticClass:"update-settin",on:{click:e.modifyTimes}},[e._v("\n          修改时间\n        ")]):e._e()]),i("div",{staticClass:"time-setting"},[i("div",{staticClass:"time-setting-box"},[i("div",{staticClass:"setting-key"},[e._v("整体考核起止时间:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(e._f("filterDate")(e.initTime.start_time))+" 至\n            "+e._s(e._f("filterDate")(e.initTime.end_time))+"\n          ")])]),i("div",{staticClass:"time-setting-box"},[i("div",{staticClass:"setting-key"},[e._v("各阶段起止时间:")]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.indicator_setting_end_time)}},[e._v("\n              指标设定截止时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.self_evaluation_begin_time)}},[e._v("\n              自评开始时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.superior_begin_time)}},[e._v("\n              上级评开始时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.isolation_begin_time)}},[e._v("\n              隔级审核开始时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.president_audit_begin_time)}},[e._v("\n              总裁审核开始时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.result_confirm_end_time)}},[e._v("\n              结果确认截止时间\n            ")])])]),e.initTime.allow_appeal?i("div",{staticClass:"time-setting-box"},[i("div",{staticClass:"setting-key"},[e._v("可申诉时间段:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(e._f("filterDate")(e.initTime.appeal_begin_time))+"至"+e._s(e._f("filterDate")(e.initTime.appeal_end_time))+"\n          ")])]):e._e()])]),i("div",{staticClass:"setting-list-box"},[i("div",{staticClass:"setting-title"},[e._v("考核人员名单")]),i("el-form",{ref:"personalForm",staticClass:"form-list",attrs:{model:e.personalForm,"label-width":"120px"}},[i("el-form-item",{staticClass:"limit-width",attrs:{prop:"name_or_workcode",label:"姓名(工号):"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.name_or_workcode,callback:function(t){e.$set(e.personalForm,"name_or_workcode",t)},expression:"personalForm.name_or_workcode"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"department_ids",label:"事业部:"}},[i("el-cascader",{attrs:{placeholder:"请选择事业部",props:e.filterProps,options:e.orgTree,"show-all-levels":!1},model:{value:e.personalForm.department_ids,callback:function(t){e.$set(e.personalForm,"department_ids",t)},expression:"personalForm.department_ids"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"stage",label:"状态:"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.personalForm.stage,callback:function(t){e.$set(e.personalForm,"stage",t)},expression:"personalForm.stage"}},e._l(e.stageOptions,function(e,t){return i("el-option",{key:e,attrs:{label:e,value:t}})}),1)],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"hrd_name",label:"HRD:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.hrd_name,callback:function(t){e.$set(e.personalForm,"hrd_name",t)},expression:"personalForm.hrd_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"superior_name",label:"直接上级:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.superior_name,callback:function(t){e.$set(e.personalForm,"superior_name",t)},expression:"personalForm.superior_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"hrbp_name",label:"HRBP:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.hrbp_name,callback:function(t){e.$set(e.personalForm,"hrbp_name",t)},expression:"personalForm.hrbp_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"tag_rule_id",label:"规则分布:"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.personalForm.tag_rule_id,callback:function(t){e.$set(e.personalForm,"tag_rule_id",t)},expression:"personalForm.tag_rule_id"}},e._l(e.tagOptions,function(e){return i("el-option",{key:e.id,attrs:{label:e.display_name,value:e.id}})}),1)],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"executive_type",label:"组织部成员类别:"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.personalForm.executive_type,callback:function(t){e.$set(e.personalForm,"executive_type",t)},expression:"personalForm.executive_type"}},e._l(e.executiveTypes,function(e){return i("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"isolation_name",label:"隔级:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.isolation_name,callback:function(t){e.$set(e.personalForm,"isolation_name",t)},expression:"personalForm.isolation_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"president_name",label:"总裁:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.president_name,callback:function(t){e.$set(e.personalForm,"president_name",t)},expression:"personalForm.president_name"}})],1),i("el-form-item",{staticClass:"on-query"},[i("el-button",{on:{click:function(t){return e.resetForm("personalForm")}}},[e._v("重置")]),i("el-button",{attrs:{type:"primary"},on:{click:e.onQuery}},[e._v("查询")])],1)],1),i("div",{staticClass:"table-operate"},[i("el-button-group",{staticClass:"btn-group"},[e.showExecutiveScoreUserManagement?i("el-button",{attrs:{icon:"el-icon-upload2"},on:{click:e.importList}},[e._v("导入名单")]):e._e(),e.showExecutiveScoreUserManagement?i("el-button",{attrs:{icon:"el-icon-download"},on:{click:e.exportUserList}},[e._v("导出名单")]):e._e(),e.showExecutiveScoreUserManagement?i("el-button",{attrs:{icon:"el-icon-bell",disabled:e.currentStage<100},on:{click:e.reminder}},[e._v("提醒")]):e._e(),e.showExecutiveScoreUserManagement?i("el-button",{attrs:{icon:"el-icon-plus"},on:{click:e.addPerson}},[e._v("添加人员")]):e._e(),e.showExecutiveScoreUserManagement?i("el-button",{attrs:{icon:"el-icon-download"},on:{click:e.exportDetail}},[e._v("导出明细")]):e._e(),i("el-popover",{attrs:{placement:"bottom",width:"120",trigger:"hover"}},[e.showExecutiveScoreManagement?i("div",{staticClass:"more-btn",on:{click:function(t){return e.showUploadWork("finance")}}},[i("i",{staticClass:"el-icon-upload2"}),i("span",[e._v("上传财务指标")])]):e._e(),e.showExecutiveScoreUserManagement?i("div",{staticClass:"more-btn",on:{click:function(t){return e.showUploadWork("work")}}},[i("i",{staticClass:"el-icon-upload2"}),i("span",[e._v("上传工作指标")])]):e._e(),e.showExecutiveScoreUserManagement?i("div",{staticClass:"more-btn",on:{click:e.removeList}},[i("i",{staticClass:"el-icon-delete"}),i("span",[e._v("移除")])]):e._e(),i("el-button",{attrs:{slot:"reference",icon:"el-icon-more"},slot:"reference"})],1)],1),i("div",{staticClass:"table-number"},[i("i",{staticClass:"el-icon-info"}),e._v(" 共"+e._s(e.total)+"人，已选\n          "),i("span",[e._v(e._s(e.selectedNumber))]),e._v(" 人\n        ")])],1),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.userList,stripe:""},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{prop:"workcode",label:"工号",width:"80"}}),i("el-table-column",{attrs:{width:"100",prop:"name",label:"姓名"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"business_unit_name",width:"200",label:"总部/事业部"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"sub_department_name",label:"大部门/分校",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.sub_department_name?i("div",[e._v("\n              "+e._s(t.row.sub_department_name)+"\n            ")]):i("div",[e._v("\n              — —\n            ")])]}}])}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"email",label:"邮箱",width:"120"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"executive_type_text",label:"组织部成员类别",width:"200"}}),i("el-table-column",{attrs:{width:"100",prop:"hrbp_name",label:"HRBP"}}),i("el-table-column",{attrs:{width:"100",prop:"hrd_name",label:"HRD"}}),i("el-table-column",{attrs:{width:"100",prop:"superior_name",label:"直接上级"}}),i("el-table-column",{attrs:{width:"100",prop:"isolation_name",label:"隔级"}}),i("el-table-column",{attrs:{width:"100",prop:"president_name",label:"总裁"}}),i("el-table-column",{attrs:{width:"100",prop:"self_evaluation_score",label:"自评分"}}),i("el-table-column",{attrs:{width:"100",prop:"re_evaluation_score",label:"复评分"}}),i("el-table-column",{attrs:{width:"100",prop:"culture_score",label:"文化评分"}}),i("el-table-column",{attrs:{width:"100",prop:"final_score",label:"最终成绩"}}),i("el-table-column",{attrs:{width:"100",prop:"tag_rule_id",label:"规则分布"}}),i("el-table-column",{attrs:{prop:"stage_text",fixed:"right",width:"120",label:"状态"}}),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showExecutiveScoreUserManagement?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return e.modifyUser(t.row)}}},[e._v("修改")]):e._e(),e.showExecutiveScoreUserManagement?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return e.remove(t.row.id)}}},[e._v("移除")]):e._e(),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return e.viewIndicators(t.row)}}},[e._v("查看详情")])]}}])})],1),i("br"),i("el-row",{attrs:{type:"flex",justify:"end"}},[e.total?i("el-pagination",{attrs:{background:"","current-page":e.personalForm.page,"page-sizes":[10,20,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)],1)]),e.showDialog?i("assessment-dialog",{attrs:{visible:e.showDialog,infoType:e.infoType,performanceId:e.performanceId,performanceTypes:e.performanceTypes,orgTree:e.orgTree},on:{close:e.tplDialogClose,update:e.tplDefine}}):e._e(),e.showSetupTime?i("setup-time",{attrs:{visible:e.showSetupTime,performanceId:e.performanceId,initTime:e.initTime},on:{close:e.setupTimeClose,update:e.confirmTime}}):e._e(),e.showModifyUser?i("modify-user",{attrs:{visible:e.showModifyUser,userType:e.userType,performanceId:e.performanceId,userId:e.userId,userInfo:e.userInfo},on:{close:e.modifyUserClose,update:e.confirmUser}}):e._e(),e.showConfirmDialog?i("confirm-dialog",{attrs:{visible:e.showConfirmDialog,tipsText:e.tipsText,confirmType:e.confirmType},on:{update:e.confirmDialog,close:e.closeDialog}}):e._e(),e.showImportList?i("import-list",{attrs:{visible:e.showImportList,uploadTplUrl:e.uploadTplUrl,importTplUrl:e.importTplUrl,performanceId:e.performanceId},on:{close:e.closeImportList,update:e.confirmImportUser}}):e._e(),e.showUpload?i("common-upload",{attrs:{visible:e.showUpload,uploadTitle:e.uploadTitle,uploadActionUrl:e.uploadActionUrl,downloadUrl:e.downloadUrl},on:{close:e.uploadClose,update:e.confirmUpload}}):e._e()],1)},s=[],n=(i("7f7f"),i("6762"),i("2fdb"),i("372d")),r=i("fea5"),o=i("c9f1"),l=(i("38fb"),{components:{"nav-bar":Object(n["a"])(i.e("chunk-6f993239").then(i.bind(null,"3208"))),"confirm-dialog":Object(n["a"])(i.e("chunk-7ee9162a").then(i.bind(null,"1f04"))),"assessment-dialog":Object(n["a"])(i.e("chunk-4e12264d").then(i.bind(null,"4abf"))),"setup-time":Object(n["a"])(i.e("chunk-10bf323c").then(i.bind(null,"1b32"))),"modify-user":Object(n["a"])(i.e("chunk-69827229").then(i.bind(null,"94a0"))),"common-upload":Object(n["a"])(i.e("chunk-1ff9eaa0").then(i.bind(null,"60b7"))),"import-list":Object(n["a"])(i.e("chunk-0f0d513a").then(i.bind(null,"a9b9")))},data:function(){return{filterProps:{value:"id",label:"name",children:"children"},executiveTypes:[],tagOptions:[],performanceDetail:{name:"",stage:0,indicator_fill_in:0,indicator_confirm:0,indicator_setting_end_time:null,self_evaluation_begin_time:null,self_evaluation:null,superior_begin_time:null,re_evaluation:0,isolation_begin_time:null,isolation_adult:0,president_audit_begin_time:null,president_audit:0,result_comfirm_end_time:null,confirm:0,confirmed:0,result_confirm_end_time:null},performanceId:this.$route.params.id,total:0,selectedNumber:0,showConfirmDialog:!1,showDialog:!1,showSetupTime:!1,infoType:"add",performanceTypes:[],orgTree:[],tipsText:"",confirmType:"",nav:[{label:"组织部绩效考核列表",href:o["kb"]},{label:"考核详情",active:!0}],personalForm:{name_or_workcode:"",department_ids:[],stage:"",executive_type:"",superior_name:"",isolation_name:"",president_name:"",hrbp_name:"",tag_rule_id:"",hrd_name:"",page:1,perPage:10},userList:[],performance_user_ids:[],showModifyUser:!1,userInfo:{},userId:0,userType:"add",currentStage:0,showUpload:!1,uploadTitle:"",uploadActionUrl:"",downloadUrl:"",showImportList:!1,uploadTplUrl:"",importTplUrl:"",constants:{PATH_EXECUTIVE_UPLOAD_FINANCIAL_INDICATORS:o["D"],PATH_EXECUTIVE_UPLOAD_WORK_INDICATORS:o["F"],PATH_EXECUTIVE_IMPORT_FINANCIAL_INDICATORS:o["w"],PATH_EXECUTIVE_IMPORT_WORK_INDICATORS:o["z"]},permissions:[],stageOptions:{}}},computed:{showExecutiveScoreManagement:function(){return this.permissions.includes(400)},showExecutiveScoreUserManagement:function(){return this.permissions.includes(410)},initTime:function(){return{start_time:this.performanceDetail.start_time,end_time:this.performanceDetail.end_time,indicator_setting_end_time:this.performanceDetail.indicator_setting_end_time,self_evaluation_begin_time:this.performanceDetail.self_evaluation_begin_time,superior_begin_time:this.performanceDetail.superior_begin_time,isolation_begin_time:this.performanceDetail.isolation_begin_time,president_audit_begin_time:this.performanceDetail.president_audit_begin_time,result_confirm_end_time:this.performanceDetail.result_confirm_end_time,appeal_begin_time:this.performanceDetail.appeal_begin_time,appeal_end_time:this.performanceDetail.appeal_end_time,allow_appeal:this.performanceDetail.allow_appeal}}},filters:{filterDate:function(e){var t="";return e&&(t=/\d{4}-\d{1,2}-\d{1,2}/g.exec(e),t=t[0]),t},filterType:function(e){var t="";return"annual"===e?t="年度":"semi-annual"===e?t="半年度":"quarter"===e?t="季度":"monthly"===e&&(t="月度"),t},filterCompareDate:function(e){if(e){var t=new Date(e),i=new Date;return t.getTime()<i.getTime()?"active":""}return""}},methods:{handleSizeChange:function(e){this.personalForm.perPage=e,this.getUserList()},handleCurrentChange:function(e){this.personalForm.page=e,this.getUserList()},confirmUpload:function(){this.showUpload=!1,this.getUserList()},confirmImportUser:function(){this.showImportList=!1,this.getUserList()},confirmUser:function(){this.showModifyUser=!1,this.getUserList()},tplDefine:function(){this.showDialog=!1,this.getPerformanceDetailData()},confirmTime:function(){this.showSetupTime=!1,this.getPerformanceDetailData()},modifyUserClose:function(){this.showModifyUser=!1},handleSelectionChange:function(e){this.selectedNumber=e.length,this.performance_user_ids=[];for(var t=0;t<e.length;t++)this.performance_user_ids.push(e[t].id)},reminder:function(){var e=this,t={performance_id:this.performanceId,performance_user_ids:this.performance_user_ids};Object(r["qc"])(t).then(function(t){e.$message({message:"提醒成功",type:"success"})}).catch(function(e){})},addPerson:function(){this.userType="add",this.showModifyUser=!0},importList:function(){this.showImportList=!0,this.importTplUrl=Object(o["y"])(this.performanceId),this.uploadTplUrl=Object(o["A"])(this.performanceId)},closeImportList:function(){this.showImportList=!1},removeList:function(){this.showConfirmDialog=!0,this.tipsText="是否确认移除？",this.confirmType="delete"},modifySettings:function(){this.infoType="modify",this.showDialog=!0},modifyTimes:function(){this.showSetupTime=!0},setupTimeClose:function(){this.showSetupTime=!1},tplDialogClose:function(){this.showDialog=!1},openAssessment:function(){this.showConfirmDialog=!0,this.confirmType="open",this.tipsText="是否确认启动考核？"},confirmDialog:function(e){var t=this;"open"===e?Object(r["Uc"])(this.performanceId).then(function(e){t.showConfirmDialog=!1,t.getPerformanceDetailData()}).catch(function(e){}):"delete"===e?(this.showConfirmDialog=!1,this.delPerformanceUser()):this.showConfirmDialog=!1},closeDialog:function(){this.showConfirmDialog=!1},onQuery:function(){this.getUserList()},resetForm:function(e){this.$refs[e].resetFields(),this.getUserList()},viewIndicators:function(e){this.$router.push(Object(o["nb"])(this.performanceId,e.id,"employee"))},delPerformanceUser:function(){var e=this;if(0===this.performance_user_ids.length)return this.$message({showClose:!0,message:"请至少选择一个人员",type:"error"}),!1;var t={performance_user_ids:this.performance_user_ids};Object(r["j"])(this.performanceId,t).then(function(t){e.performance_user_ids=[],e.getUserList()}).catch(function(e){})},remove:function(e){this.performance_user_ids=[e],this.showConfirmDialog=!0,this.tipsText="是否确认移除？",this.confirmType="delete"},modifyUser:function(e){this.userId=e.id;var t=e.name,i=e.workcode,a=e.email,s=e.superior_workcode,n=e.superior_name,r=e.isolation_workcode,o=e.isolation_name,l=e.president_workcode,c=e.president_name,m=e.hrbp_workcode,p=e.hrbp_name,d=e.hrd_workcode,_=e.hrd_name,u=e.executive_type;this.userInfo={name:t,workcode:i,email:a,superior_workcode:s,superior_name:n,isolation_workcode:r,isolation_name:o,president_workcode:l,president_name:c,hrbp_workcode:m,hrbp_name:p,hrd_workcode:d,hrd_name:_,executive_type:u},this.userType="modify",this.showModifyUser=!0},getUserList:function(){var e=this;Object(r["M"])(this.performanceId,this.personalForm).then(function(t){var i=t.data,a=t.total;e.total=a,e.userList=i}).catch(function(e){})},getPerformanceDetailData:function(){var e=this;Object(r["H"])(this.performanceId).then(function(t){e.currentStage=t.stage,e.performanceDetail=t}).catch(function(e){})},showUploadWork:function(e){this.showUpload=!0,"finance"==e?(this.uploadTitle="财务指标",this.uploadActionUrl=this.constants.PATH_EXECUTIVE_UPLOAD_FINANCIAL_INDICATORS(this.performanceId),this.downloadUrl=this.constants.PATH_EXECUTIVE_IMPORT_FINANCIAL_INDICATORS(this.performanceId)):(this.uploadTitle="工作指标",this.uploadActionUrl=this.constants.PATH_EXECUTIVE_UPLOAD_WORK_INDICATORS(this.performanceId),this.downloadUrl=this.constants.PATH_EXECUTIVE_IMPORT_WORK_INDICATORS(this.performanceId))},uploadClose:function(){this.showUpload=!1},exportDetail:function(){window.open(Object(o["u"])(this.performanceId,this.performance_user_ids),"_blank","noopener")},exportUserList:function(){window.open(Object(o["v"])(this.performanceId,this.performance_user_ids),"_blank","noopener")}},created:function(){var e=this;this.permissions=JSON.parse(localStorage.getItem("permissions")||"[]"),this.getPerformanceDetailData(),Object(r["P"])(this.performanceId).then(function(t){e.stageOptions=t}).catch(function(e){}),Object(r["G"])().then(function(t){e.orgTree=t}).catch(function(e){}),Object(r["L"])().then(function(t){e.performanceTypes=t}).catch(function(e){}),Object(r["p"])(this.performanceId).then(function(t){e.executiveTypes=t}).catch(function(e){}),Object(r["J"])(this.performanceId).then(function(t){e.tagOptions=t}).catch(function(e){}),this.getUserList()}}),c=l,m=(i("1508"),i("d260"),i("2877")),p=Object(m["a"])(c,a,s,!1,null,"6f2983ec",null);t["default"]=p.exports},"488d":function(e,t,i){},5147:function(e,t,i){var a=i("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[a]=!1,!"/./"[e](t)}catch(s){}}return!0}},6762:function(e,t,i){"use strict";var a=i("5ca1"),s=i("c366")(!0);a(a.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},"9f9e":function(e,t,i){},aae3:function(e,t,i){var a=i("d3f4"),s=i("2d95"),n=i("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==s(e))}},d260:function(e,t,i){"use strict";var a=i("488d"),s=i.n(a);s.a},d2c8:function(e,t,i){var a=i("aae3"),s=i("be13");e.exports=function(e,t,i){if(a(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(s(e))}},ee47:function(e,t,i){"use strict";var a=i("9f9e"),s=i.n(a);s.a}}]);