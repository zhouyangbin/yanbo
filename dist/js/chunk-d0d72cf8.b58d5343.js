(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0d72cf8"],{"24b0":function(e,t,i){},3508:function(e,t,i){"use strict";var a=i("f6ec"),s=i.n(a);s.a},"372d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},s=[],n={},o=n,l=(i("ee47"),i("2877")),r=Object(l["a"])(o,a,s,!1,null,"6c517b7e",null),c=r.exports;i.d(t,"a",function(){return p});var p=function(e){return function(){return{component:e,loading:c,delay:0}}}},"38bf":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"assessment-detail"},[i("nav-bar",{attrs:{list:e.nav}}),i("br"),i("section",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"content-container bg-white"},[i("div",{staticClass:"content-title"},[i("div",[e._v(e._s(e.performanceDetail.name))]),i("div",{staticClass:"create-btn"},[0===e.performanceDetail.stage?i("el-button",{attrs:{type:"primary",disabled:!e.performanceDetail.can_start},on:{click:e.openAssessment}},[e._v("开启考核")]):e._e()],1)]),i("div",{staticClass:"list-timeline"},[i("div",{staticClass:"time-line",class:0===e.performanceDetail.stage?"":"active",attrs:{data:"填写中"+e.performanceDetail.indicator_fill_in+"/确认中"+e.performanceDetail.indicator_confirm}},[e._v("\n        指标设定\n      ")]),i("div",{staticClass:"time-line-sign",class:0===e.performanceDetail.stage?"":"active",attrs:{data:e._f("filterDate")(e.performanceDetail.indicator_setting_end_time)}}),i("div",{staticClass:"time-line-circle",class:e.performanceDetail.self_evaluation_begin_time>e.nowTime?"active":""},[i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"}),i("div",{staticClass:"circle-list"})]),i("div",{staticClass:"time-line-sign",class:e.performanceDetail.self_evaluation_begin_time>e.nowTime?"active":"",attrs:{data:e._f("filterDate")(e.performanceDetail.self_evaluation_begin_time)}}),i("div",{staticClass:"time-line",class:e.performanceDetail.self_evaluation>e.nowTime?"active":"",attrs:{data:"自评中"+e.performanceDetail.self_evaluation}},[e._v("\n        自评\n      ")]),i("div",{staticClass:"time-line-sign",class:e.performanceDetail.superior_begin_time>e.nowTime?"active":"",attrs:{data:e._f("filterDate")(e.performanceDetail.superior_begin_time)}}),i("div",{staticClass:"time-line",class:e.performanceDetail.superior_begin_time>e.nowTime?"active":"",attrs:{data:"复评中"+e.performanceDetail.re_evaluation}},[e._v("\n        上级评分\n      ")]),i("div",{staticClass:"time-line-sign",class:e.performanceDetail.isolation_begin_time>e.nowTime?"active":"",attrs:{data:e._f("filterDate")(e.performanceDetail.isolation_begin_time)}}),i("div",{staticClass:"time-line",class:e.performanceDetail.isolation_begin_time>e.nowTime?"active":"",attrs:{data:"隔级审核中"+e.performanceDetail.isolation_adult}},[e._v("\n        隔级审核\n      ")]),i("div",{staticClass:"time-line-sign",class:e.performanceDetail.president_audit_begin_time>e.nowTime?"active":"",attrs:{data:e._f("filterDate")(e.performanceDetail.president_audit_begin_time)}}),i("div",{staticClass:"time-line",class:e.performanceDetail.president_audit_begin_time>e.nowTime?"active":"",attrs:{data:"总裁审核中"+e.performanceDetail.president_audit}},[e._v("\n        总裁审核\n      ")]),i("div",{staticClass:"time-line-sign",class:600===e.performanceDetail.stage?"active":"",attrs:{data:e._f("filterDate")(e.performanceDetail.result_comfirm_end_time)}}),i("div",{staticClass:"time-line",class:600===e.performanceDetail.stage?"active":"",attrs:{data:"确认中"+e.performanceDetail.confirm+"/已确认"+e.performanceDetail.confirmed}},[e._v("\n        结果确认\n      ")]),i("div",{staticClass:"time-line-sign",class:600===e.performanceDetail.stage?"active":"",attrs:{data:e._f("filterDate")(e.performanceDetail.result_confirm_end_time)}})])]),i("section",{staticClass:"content-container"},[i("div",{staticClass:"setting-list-box"},[i("div",{staticClass:"setting-title"},[i("div",[e._v("基本设置")]),i("div",{staticClass:"update-settin",on:{click:e.modifySettings}},[e._v("修改设置")])]),i("div",{staticClass:"basic-setting"},[i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("考核名称:")]),i("div",{staticClass:"setting-value"},[e._v(e._s(e.performanceDetail.name))])]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("适用范围:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(e.performanceDetail.departments_text)+"\n          ")])]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("绩效类型:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(e._f("filterType")(e.performanceDetail.performance_type))+"\n          ")])]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("考核周期:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(e._f("filterDate")(e.performanceDetail.period_start_time))+"~"+e._s(e._f("filterDate")(e.performanceDetail.period_end_time))+"\n          ")])]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("绩效模板:")]),i("div",{staticClass:"setting-value performance-tpl"},e._l(e.performanceDetail.templates,function(t){return i("span",{key:t.id},[e._v(e._s(t.name))])}),0)]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("是否允许申诉:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(1===e.performanceDetail.allow_appeal?"是":"否")+"\n          ")])]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-key"},[e._v("标签规则:")]),i("div",{staticClass:"setting-value"},[e.performanceDetail.tag?i("span",[e._v(e._s(e.performanceDetail.tag.tag_type))]):e._e()])])])]),i("div",{staticClass:"setting-list-box"},[i("div",{staticClass:"setting-title"},[i("div",[e._v("时间设置")]),i("div",{staticClass:"update-settin",on:{click:e.modifyTimes}},[e._v("修改时间")])]),i("div",{staticClass:"time-setting"},[i("div",{staticClass:"time-setting-box"},[i("div",{staticClass:"setting-key"},[e._v("整体考核起止时间:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(e._f("filterDate")(e.initTime.start_time))+" 至\n            "+e._s(e._f("filterDate")(e.initTime.end_time))+"\n          ")])]),i("div",{staticClass:"time-setting-box"},[i("div",{staticClass:"setting-key"},[e._v("各阶段起止时间:")]),i("div",{staticClass:"setting-detail"},[i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.indicator_setting_end_time)}},[e._v("\n              指标设定截止时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.self_evaluation_begin_time)}},[e._v("\n              自评开始时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.superior_begin_time)}},[e._v("\n              上级评开始时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.isolation_begin_time)}},[e._v("\n              隔级审核开始时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.president_audit_begin_time)}},[e._v("\n              总裁审核开始时间\n            ")]),i("div",{staticClass:"setting-value",attrs:{data:e._f("filterDate")(e.initTime.result_confirm_end_time)}},[e._v("\n              结果确认截止时间\n            ")])])]),i("div",{staticClass:"time-setting-box"},[i("div",{staticClass:"setting-key"},[e._v("可申诉时间段:")]),i("div",{staticClass:"setting-value"},[e._v("\n            "+e._s(e._f("filterDate")(e.initTime.appeal_begin_time))+"至"+e._s(e._f("filterDate")(e.initTime.appeal_end_time))+"\n          ")])])])]),i("div",{staticClass:"setting-list-box"},[i("div",{staticClass:"setting-title"},[e._v("考核人员名单")]),i("el-form",{ref:"personalForm",staticClass:"form-list",attrs:{model:e.personalForm,"label-width":"120px"}},[i("el-form-item",{staticClass:"limit-width",attrs:{prop:"name_or_workcode",label:"姓名(工号):"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.name_or_workcode,callback:function(t){e.$set(e.personalForm,"name_or_workcode",t)},expression:"personalForm.name_or_workcode"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"department_ids",label:"事业部:"}},[i("el-cascader",{attrs:{placeholder:"请选择事业部",props:e.filterProps,options:e.orgTree,"show-all-levels":!1},model:{value:e.personalForm.department_ids,callback:function(t){e.$set(e.personalForm,"department_ids",t)},expression:"personalForm.department_ids"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"stage",label:"状态:"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.personalForm.stage,callback:function(t){e.$set(e.personalForm,"stage",t)},expression:"personalForm.stage"}},e._l(e.statusOptions,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"hrd_name",label:"HRD:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.hrd_name,callback:function(t){e.$set(e.personalForm,"hrd_name",t)},expression:"personalForm.hrd_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"superior_name",label:"直接上级:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.superior_name,callback:function(t){e.$set(e.personalForm,"superior_name",t)},expression:"personalForm.superior_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"hrbp_name",label:"HRBP:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.hrbp_name,callback:function(t){e.$set(e.personalForm,"hrbp_name",t)},expression:"personalForm.hrbp_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"distribution_253",label:"规则分布:"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.personalForm.distribution_253,callback:function(t){e.$set(e.personalForm,"distribution_253",t)},expression:"personalForm.distribution_253"}},e._l(e.tagOptions,function(e){return i("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"executive_type",label:"组织部成员类别:"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.personalForm.executive_type,callback:function(t){e.$set(e.personalForm,"executive_type",t)},expression:"personalForm.executive_type"}},e._l(e.executiveTypes,function(e){return i("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"isolation_name",label:"隔级:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.isolation_name,callback:function(t){e.$set(e.personalForm,"isolation_name",t)},expression:"personalForm.isolation_name"}})],1),i("el-form-item",{staticClass:"limit-width",attrs:{prop:"president_name",label:"总裁:"}},[i("el-input",{attrs:{placeholder:"请输入姓名或工号"},model:{value:e.personalForm.president_name,callback:function(t){e.$set(e.personalForm,"president_name",t)},expression:"personalForm.president_name"}})],1),i("el-form-item",{staticClass:"on-query"},[i("el-button",{on:{click:function(t){return e.resetForm("personalForm")}}},[e._v("重置")]),i("el-button",{attrs:{type:"primary"},on:{click:e.onQuery}},[e._v("查询")])],1)],1),i("div",{staticClass:"table-operate"},[i("el-button-group",{staticClass:"btn-group"},[i("el-button",{attrs:{icon:"el-icon-upload2"},on:{click:e.importList}},[e._v("导入名单")]),i("el-button",{attrs:{icon:"el-icon-bell",disabled:e.currentStage<100},on:{click:e.reminder}},[e._v("提醒")]),i("el-button",{attrs:{icon:"el-icon-plus"},on:{click:e.addPerson}},[e._v("添加人员")]),i("el-button",{attrs:{icon:"el-icon-download"}},[i("a",{staticClass:"down-load",attrs:{download:"",href:e.exportUrl}},[e._v("导出名单")])]),i("el-popover",{attrs:{placement:"bottom",width:"120",trigger:"hover"}},[i("div",{staticClass:"more-btn",on:{click:function(t){return e.showUploadWork("finance")}}},[i("i",{staticClass:"el-icon-upload2"}),i("span",[e._v("上传财务指标")])]),i("div",{staticClass:"more-btn",on:{click:function(t){return e.showUploadWork("work")}}},[i("i",{staticClass:"el-icon-upload2"}),i("span",[e._v("上传工作目标")])]),i("div",{staticClass:"more-btn",on:{click:e.removeList}},[i("i",{staticClass:"el-icon-delete"}),i("span",[e._v("移除")])]),i("el-button",{attrs:{slot:"reference",icon:"el-icon-more"},slot:"reference"})],1)],1),i("div",{staticClass:"table-number"},[i("i",{staticClass:"el-icon-info"}),e._v(" 共"+e._s(e.total)+"人，已选\n          "),i("span",[e._v(e._s(e.selectedNumber))]),e._v(" 人\n        ")])],1),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.userList,stripe:""},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{prop:"workcode",label:"工号",width:"80"}}),i("el-table-column",{attrs:{width:"100",prop:"name",label:"姓名"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"business_unit_name",width:"200",label:"总部/事业部"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"sub_department_name",label:"大部门/分校",width:"200"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"email",label:"邮箱",width:"120"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"executive_type_text",label:"组织部成员类别",width:"200"}}),i("el-table-column",{attrs:{width:"100",prop:"hrbp_name",label:"HRBP"}}),i("el-table-column",{attrs:{width:"100",prop:"hrd_name",label:"HRD"}}),i("el-table-column",{attrs:{width:"100",prop:"superior_name",label:"直接上级"}}),i("el-table-column",{attrs:{width:"100",prop:"isolation_name",label:"隔级"}}),i("el-table-column",{attrs:{width:"100",prop:"president_name",label:"总裁"}}),i("el-table-column",{attrs:{width:"100",prop:"self_evaluation_score",label:"自评分"}}),i("el-table-column",{attrs:{width:"100",prop:"re_evaluation_score",label:"复评分"}}),i("el-table-column",{attrs:{width:"100",prop:"culture_score",label:"文化评分"}}),i("el-table-column",{attrs:{width:"100",prop:"final_score",label:"最终成绩"}}),i("el-table-column",{attrs:{width:"100",prop:"distribution_253",label:"规则分布"}}),i("el-table-column",{attrs:{prop:"stage_text",fixed:"right",width:"120",label:"状态"}}),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return e.modifyUser(t.row)}}},[e._v("修改")]),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return e.remove(t.row.id)}}},[e._v("移除")]),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return e.viewIndicators(t.row)}}},[e._v("查看指标")])]}}])})],1),i("br"),i("el-row",{attrs:{type:"flex",justify:"end"}},[e.total?i("el-pagination",{attrs:{background:"","current-page":e.personalForm.page,"page-sizes":[10,20,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)],1)]),e.showDialog?i("assessment-dialog",{attrs:{visible:e.showDialog,infoType:e.infoType,performanceId:e.performanceId,performanceTypes:e.performanceTypes,orgTree:e.orgTree},on:{close:e.tplDialogClose,define:e.tplDefine}}):e._e(),e.showSetupTime?i("setup-time",{attrs:{visible:e.showSetupTime,performanceId:e.performanceId,initTime:e.initTime},on:{close:e.setupTimeClose,define:e.confirmTime}}):e._e(),e.showModifyUser?i("modify-user",{attrs:{visible:e.showModifyUser,userType:e.userType,performanceId:e.performanceId,userId:e.userId,userInfo:e.userInfo},on:{close:e.modifyUserClose,define:e.confirmUser}}):e._e(),e.showConfirmDialog?i("confirm-dialog",{attrs:{visible:e.showConfirmDialog,tipsText:e.tipsText},on:{define:e.confirmDialog,close:e.closeDialog}}):e._e(),e.showImportList?i("import-list",{attrs:{visible:e.showImportList,uploadTplUrl:e.uploadTplUrl,importTplUrl:e.importTplUrl},on:{close:e.closeImportList,define:e.confirmImportUser}}):e._e(),e.showUploadWorkFile?i("common-upload-dialog",{attrs:{visible:e.showUploadWorkFile,upload_title:e.upload_title,upload_action_url:e.upload_action_url,upload_type:e.upload_type,download_url:e.download_url},on:{close:e.upload_close}}):e._e()],1)},s=[],n=(i("7f7f"),i("372d")),o=i("fea5"),l=i("c9f1"),r=(i("38fb"),{components:{"nav-bar":function(){return i.e("chunk-d5094d72").then(i.bind(null,"3208"))},"confirm-dialog":Object(n["a"])(i.e("chunk-1f5e0c84").then(i.bind(null,"1f04"))),"assessment-dialog":Object(n["a"])(i.e("chunk-77ec5708").then(i.bind(null,"4abf"))),"setup-time":Object(n["a"])(i.e("chunk-530653ba").then(i.bind(null,"1b32"))),"modify-user":Object(n["a"])(i.e("chunk-5b27cb77").then(i.bind(null,"94a0"))),"common-upload-dialog":Object(n["a"])(i.e("chunk-506d40ba").then(i.bind(null,"60b7"))),"import-list":Object(n["a"])(i.e("chunk-4ab548f8").then(i.bind(null,"a9b9")))},data:function(){return{filterProps:{value:"id",label:"name",children:"children"},statusOptions:[{label:"全部",value:""},{label:"草稿",value:"1"},{label:"进行中",value:"2"},{label:"已结束",value:"4"}],executiveTypes:[],tagOptions:[],performanceDetail:{},performanceId:this.$route.params.id,total:0,selectedNumber:0,showConfirmDialog:!1,showDialog:!1,showSetupTime:!1,infoType:"add",performanceTypes:[],orgTree:[],tipsText:"",nowTime:"",nav:[{label:"组织部绩效考核列表",href:l["T"]},{label:"考核详情",active:!0}],personalForm:{name_or_workcode:"",department_ids:[],stage:"",executive_type:"",superior_name:"",isolation_name:"",president_name:"",hrbp_name:"",distribution_253:"",hrd_name:"",page:1,perPage:10},userList:[],performance_user_ids:[],showModifyUser:!1,userInfo:{},userId:0,userType:"add",currentStage:0,showUploadWorkFile:!1,upload_title:"",upload_action_url:"",upload_type:"",download_url:"",isLoading:!0,showImportList:!1,uploadTplUrl:"",importTplUrl:"",exportUrl:"",constants:{postUploadFinancialIndicators:l["qb"],postUploadWorkIndicators:l["rb"],getFinancialtpm:l["ob"],getWorktpm:l["pb"]}}},computed:{initTime:function(){return{start_time:this.performanceDetail.start_time,end_time:this.performanceDetail.end_time,indicator_setting_end_time:this.performanceDetail.indicator_setting_end_time,self_evaluation_begin_time:this.performanceDetail.self_evaluation_begin_time,superior_begin_time:this.performanceDetail.superior_begin_time,isolation_begin_time:this.performanceDetail.isolation_begin_time,president_audit_begin_time:this.performanceDetail.president_audit_begin_time,result_confirm_end_time:this.performanceDetail.result_confirm_end_time,appeal_begin_time:this.performanceDetail.appeal_begin_time,appeal_end_time:this.performanceDetail.appeal_end_time}}},filters:{filterDate:function(e){var t="";return e&&(t=/\d{4}-\d{1,2}-\d{1,2}/g.exec(e),t=t[0]),t},filterType:function(e){var t="";return"annual"===e?t="年度":"semi-annual"===e?t="半年度":"quarter"===e?t="季度":"monthly"===e&&(t="月度"),t}},methods:{handleSizeChange:function(e){this.personalForm.perPage=e,this.getUserList()},handleCurrentChange:function(e){this.personalForm.page=e,this.getUserList()},confirmImportUser:function(){this.showModifyUser=!1,this.getUserList()},confirmUser:function(){this.showModifyUser=!1,this.getUserList()},tplDefine:function(){this.showDialog=!1,this.getPerformanceDetailData()},confirmTime:function(){this.showSetupTime=!1,this.getPerformanceDetailData()},modifyUserClose:function(){this.showModifyUser=!1},handleSelectionChange:function(e){this.selectedNumber=e.length,this.performance_user_ids=[];for(var t=0;t<e.length;t++)this.performance_user_ids.push(e[t].id)},reminder:function(){var e=this;Object(o["gb"])(this.performanceId).then(function(t){e.$message({message:"提醒成功",type:"success"})}).catch(function(e){})},addPerson:function(){this.userType="add",this.showModifyUser=!0},exportList:function(){window.open(Object(l["jb"])(this.performanceId),"_blank","noopener")},importList:function(){this.showImportList=!0,this.importTplUrl=l["hb"],this.uploadTplUrl=Object(l["V"])(this.performanceId)},closeImportList:function(){this.showImportList=!1},removeList:function(){this.delPerformanceUser()},viewDistribution:function(){},modifySettings:function(){this.infoType="modify",this.showDialog=!0},modifyTimes:function(){this.showSetupTime=!0},setupTimeClose:function(){this.showSetupTime=!1},tplDialogClose:function(){this.showDialog=!1},openAssessment:function(){this.showConfirmDialog=!0,this.tipsText="是否确认启动考核？"},confirmDialog:function(e){var t=this;"open"===e?Object(o["zc"])(this.performanceId).then(function(e){t.showConfirmDialog=!1,t.getPerformanceDetailData()}).catch(function(e){}):this.showConfirmDialog=!1},closeDialog:function(){this.showConfirmDialog=!1},onQuery:function(){this.getUserList()},resetForm:function(e){this.$refs[e].resetFields(),this.getUserList()},viewIndicators:function(e){this.$router.push(Object(l["cb"])(this.performanceId,e.id))},delPerformanceUser:function(){var e=this,t={performance_user_ids:this.performance_user_ids};Object(o["k"])(this.performanceId,t).then(function(t){e.performance_user_ids=[],e.getUserList()}).catch(function(e){})},remove:function(e){this.performance_user_ids=[e],this.delPerformanceUser()},modifyUser:function(e){this.userId=e.id;var t=e.name,i=e.workcode,a=e.email,s=e.superior_workcode,n=e.isolation_workcode,o=e.president_workcode,l=e.hrbp_workcode,r=e.hrd_workcode,c=e.executive_type;this.userInfo={name:t,workcode:i,email:a,superior_workcode:s,isolation_workcode:n,president_workcode:o,hrbp_workcode:l,hrd_workcode:r,executive_type:c},this.userType="modify",this.showModifyUser=!0},getUserList:function(){var e=this;Object(o["jb"])(this.performanceId,this.personalForm).then(function(t){var i=t.data,a=t.total;e.total=a,e.userList=i}).catch(function(e){})},getPerformanceDetailData:function(){var e=this;Object(o["cb"])(this.performanceId).then(function(t){e.currentStage=t.stage,e.isLoading=!1,e.performanceDetail=t}).catch(function(e){})},showUploadWork:function(e){this.showUploadWorkFile=!0,"finance"==e?(this.upload_title="上传财务指标",this.upload_action_url=this.constants.postUploadFinancialIndicators(this.performanceId),this.download_url=this.constants.getFinancialtpm(this.performanceId),this.upload_type=e):(this.upload_title="上传工作目标",this.upload_action_url=this.constants.postUploadWorkIndicators(this.performanceId),this.download_url=this.constants.getWorktpm(this.performanceId),this.upload_type=e)},upload_close:function(){this.showUploadWorkFile=!1}},created:function(){var e=this;this.nowTime=new Date,this.exportUrl=Object(l["jb"])(this.performanceId),this.getPerformanceDetailData(),Object(o["ab"])().then(function(t){e.orgTree=t}).catch(function(e){}),Object(o["ib"])().then(function(t){e.performanceTypes=t}).catch(function(e){}),Object(o["z"])().then(function(t){e.executiveTypes=t}).catch(function(e){}),Object(o["p"])().then(function(t){e.tagOptions=t}).catch(function(e){}),this.getUserList()}}),c=r,p=(i("98e7"),i("3508"),i("2877")),m=Object(p["a"])(c,a,s,!1,null,"9b21be00",null);t["default"]=m.exports},"98e7":function(e,t,i){"use strict";var a=i("24b0"),s=i.n(a);s.a},"9f9e":function(e,t,i){},ee47:function(e,t,i){"use strict";var a=i("9f9e"),s=i.n(a);s.a},f6ec:function(e,t,i){}}]);