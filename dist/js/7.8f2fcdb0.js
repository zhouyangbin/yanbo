webpackJsonp([7],{bSZ8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Biqn"),s=n.n(a),o=n("OE2U"),i=n("xwzc"),r=n("diSO"),l=n("BHhq"),c={data:function(){return{currentPage:1,stage:10,import_status:0,total:0,currentInfo:{},dialogImport:!1,dialogTimes:!1,dialogInfo:!1,dialogTarget:!1,infoType:"add",depInfo:{},selection:[],formFilter:{number:"",name:"",leaderNum:"",leaderName:"",targetStatus:""},constants:{FINISHED_DATE:o["_8"],ENUM_GENERIC_COMPLETE_STATUS:o["O"],ENUM_PERFORMANCE_FINISH:o["T"],SELF_EVALUATION_STATUS:o["_96"],LEADER_EVALUATION_STATUS:o["_55"],RESULT_CONFIRM:o["_89"],ENUM_WAIT_CONFIRM:o["X"],SELECTION_TIPS:o["_94"],RESET:o["_88"],OPERATIONS:o["_77"],EXPORT_DETAILS:o["_1"],REMINDER:o["_86"],ADD:o["c"],BATCH_DEL:o["h"],NUMBER:o["_75"],NAME:o["_70"],LEADER_NUMBER:o["_58"],LEADER_NAME:o["_57"],BASE_OR_BU:o["g"],DEP_OR_SUB:o["B"],EMAIL:o["H"],UP_LEVEL:o["_114"],PATH_PERFORMANCE_USER_DETAIL:i["D"],MODIFY:o["_64"],DEL:o["y"],DETAILS:o["C"],SET_TIMES:o["_100"],IMPORT_RECORDS:o["_20"],WORK_LEVEL:o["_116"],MODIFY_TIMES:o["_65"],LABEL_SELF:o["_47"],LABEL_SUP:o["_50"],APPEAL:o["d"],TARGET_STATUS:o["_105"]},tableData:[],nav:[{label:o["_11"],href:i["y"]},{label:o["_13"],href:Object(i["A"])(this.$route.params.id)},{label:o["_78"],active:!0}]}},components:{"nav-bar":function(){return n.e(25).then(n.bind(null,"PI/7"))},pagination:function(){return n.e(26).then(n.bind(null,"734F"))},"import-dialog":Object(r["a"])(n.e(38).then(n.bind(null,"ZOz1"))),"info-dialog":Object(r["a"])(n.e(41).then(n.bind(null,"wibU"))),"target-dialog":Object(r["a"])(n.e(40).then(n.bind(null,"SIqx"))),"time-set":Object(r["a"])(n.e(44).then(n.bind(null,"S/eA")))},methods:{resetFilter:function(t){this.$refs[t].resetFields()},uploadTarget:function(){this.dialogTarget=!0},exportData:function(){var t=Object(i["l"])(this.$route.params.id,this.selection.map(function(t){return t.id}));window.open(t,"_blank")},batchDel:function(){var t=this;this.$confirm("确定删除这些用户?",o["f"],{confirmButtonText:o["n"],cancelButtonText:o["k"],type:"warning",center:!0}).then(function(){Object(l["c"])(t.$route.params.orgID,{performance_user_ids:t.selection.map(function(t){return t.id})}).then(function(e){t.$message({type:"success",message:o["q"]}),t.refreshList(t.getCurrentPostData())})}).catch(function(){})},handleSelectionChange:function(t){this.selection=t},handleCurrentChange:function(t){this.currentPage=t;var e=s()({},this.getCurrentPostData(),{page:t});this.refreshList(e)},closeImportDia:function(){this.dialogImport=!1,this.refreshList(this.getCurrentPostData())},closeTimeSettingDia:function(){this.dialogTimes=!1,this.refreshList(this.getCurrentPostData())},closeInfoDia:function(){this.dialogInfo=!1,this.refreshList(this.getCurrentPostData())},reminder:function(){var t=this,e="是否要发出提醒?";0==this.selection.length&&(e="是否提醒全部?"),this.$confirm(e,o["f"],{confirmButtonText:o["n"],cancelButtonText:o["k"],type:"warning",center:!0}).then(function(){var e={};e.performance_id=t.$route.params.orgID,0!=t.selection.length&&(e.performance_user_ids=t.selection.map(function(t){return t.id})),Object(l["S"])(e).then(function(e){t.$message({type:"success",message:"提醒成功!"})}).catch(function(t){})}).catch(function(){})},delInfo:function(t){var e=this;this.$confirm(o["_53"],o["f"],{confirmButtonText:o["n"],cancelButtonText:o["k"],type:"warning",center:!0}).then(function(){Object(l["c"])(e.$route.params.orgID,{performance_user_ids:[t.id]}).then(function(t){e.$message({type:"success",message:o["q"]}),e.refreshList(e.getCurrentPostData())}).catch(function(t){})}).catch(function(){})},modifyInfo:function(t){this.infoType="modify",this.currentInfo=t,this.dialogInfo=!0},refreshList:function(t){var e=this;return Object(l["v"])(this.$route.params.orgID,t).then(function(t){var n=t.data,a=t.total,s=t.performance_info;e.tableData=n,e.total=a,e.depInfo=s}).catch(function(t){})},getCurrentPostData:function(){return{page:this.currentPage,workcode:this.formFilter.number,name:this.formFilter.name,superior_workcode:this.formFilter.leaderNum,superior_name:this.formFilter.leaderName,stage:this.formFilter.targetStatus}}},watch:{formFilter:{handler:function(t){var e={page:1,workcode:t.number,name:t.name,superior_workcode:t.leaderNum,superior_name:t.leaderName,stage:t.targetStatus};this.currentPage=1,this.refreshList(e)},deep:!0,immediate:!0}},computed:{hasSchedule:function(){return this.depInfo.start_time&&this.depInfo.end_time},isImported:function(){return!!this.depInfo.user_status},initTime:function(){return{startTime:this.depInfo.start_time,endTime:this.depInfo.end_time,finalEnd:this.depInfo.performance_name_end_time}},step:function(){return 4}}},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container dep-page"},[n("div",{staticClass:"bg-white"},[n("el-row",{staticClass:"header",attrs:{type:"flex",justify:"space-between"}},[n("span",[t._v(t._s(t.depInfo.name))]),n("span",{staticClass:"tip"},[t._v("\n          "+t._s(t.constants.FINISHED_DATE)+" "+t._s(t.depInfo.performance_name_end_time)+"\n        ")])]),n("hr"),n("div",{staticClass:"time-line-panel bg-white"},[n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("span",{staticClass:"dep-name"},[t._v("\n            "+t._s(t.depInfo.department_path)+"\n          ")]),n("el-button",{staticStyle:{"margin-right":"20px"},attrs:{disabled:!t.isImported,size:"mini",type:"primary",round:""},on:{click:function(e){t.dialogTimes=!0}}},[t._v("\n            "+t._s(t.hasSchedule?t.constants.MODIFY_TIMES:t.constants.SET_TIMES)+"\n          ")])],1),n("br"),n("br"),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:20}},[n("el-steps",{attrs:{"align-center":"",active:t.step}},[n("el-step",[n("template",{slot:"title"},[n("el-button",{attrs:{size:"mini",round:"",type:"primary"},on:{click:function(e){t.dialogImport=!0}}},[t._v(t._s(t.constants.IMPORT_RECORDS))])],1)],2),n("el-step",[n("template",{slot:"title"},[t._v("\n                  "+t._s(t.constants.LABEL_SELF)+"\n                  "),n("span",[t._v("("+t._s(t.depInfo.self_status)+")")])])],2),n("el-step",[n("template",{slot:"title"},[t._v("\n                  "+t._s(t.constants.LABEL_SUP)+"\n                  "),n("span",[t._v("("+t._s(t.depInfo.superior_status)+")")])])],2),n("el-step",[n("template",{slot:"title"},[t._v("\n                  "+t._s(t.constants.APPEAL)+"\n                  "),n("span",[t._v("("+t._s(t.depInfo.appeal_status)+")")])])],2)],1)],1)],1)],1)],1),n("br"),n("div",{staticClass:"bg-white"},[n("el-row",{staticClass:"action-bar",attrs:{align:"middle",type:"flex",justify:"space-between"}},[n("span",[t._v("\n          "+t._s(t.constants.SELECTION_TIPS(t.total,t.selection.length))+"\n        ")]),n("span",[n("el-button",{staticClass:"action-btn",attrs:{icon:"el-icon-upload2",type:"medium"},on:{click:t.uploadTarget}},[t._v("上传目标")]),n("el-button",{staticClass:"action-btn",attrs:{disabled:0===t.selection.length,icon:"el-icon-download",type:"medium"},on:{click:t.exportData}},[t._v(t._s(t.constants.EXPORT_DETAILS))]),n("el-button",{staticClass:"action-btn",attrs:{icon:"el-icon-bell",type:"medium"},on:{click:t.reminder}},[t._v(t._s(t.constants.REMINDER))]),n("el-button",{staticClass:"action-btn",attrs:{icon:"el-icon-plus",type:"medium"},on:{click:function(e){t.infoType="add",t.dialogInfo=!0,t.currentInfo={}}}},[t._v(t._s(t.constants.ADD))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:0===t.selection.length,icon:"el-icon-delete",type:"medium"},on:{click:t.batchDel}},[t._v(t._s(t.constants.BATCH_DEL))])],1)]),n("el-form",{ref:"filter-form",staticClass:"filter-form",attrs:{inline:!0,model:t.formFilter}},[n("el-form-item",{attrs:{prop:"number"}},[n("el-input",{attrs:{placeholder:t.constants.NUMBER},model:{value:t.formFilter.number,callback:function(e){t.$set(t.formFilter,"number",e)},expression:"formFilter.number"}})],1),n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:t.constants.NAME},model:{value:t.formFilter.name,callback:function(e){t.$set(t.formFilter,"name",e)},expression:"formFilter.name"}})],1),n("el-form-item",{attrs:{prop:"leaderNum"}},[n("el-input",{attrs:{placeholder:t.constants.LEADER_NUMBER},model:{value:t.formFilter.leaderNum,callback:function(e){t.$set(t.formFilter,"leaderNum",e)},expression:"formFilter.leaderNum"}})],1),n("el-form-item",{attrs:{prop:"leaderName"}},[n("el-input",{attrs:{placeholder:t.constants.LEADER_NAME},model:{value:t.formFilter.leaderName,callback:function(e){t.$set(t.formFilter,"leaderName",e)},expression:"formFilter.leaderName"}})],1),n("el-form-item",{attrs:{prop:"targetStatus"}},[n("el-select",{attrs:{placeholder:"阶段"},model:{value:t.formFilter.targetStatus,callback:function(e){t.$set(t.formFilter,"targetStatus",e)},expression:"formFilter.targetStatus"}},t._l(t.constants.ENUM_PERFORMANCE_FINISH,function(t){return n("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}))],1),n("el-form-item",[n("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:function(e){t.resetFilter("filter-form")}}},[t._v(t._s(t.constants.RESET))])],1)],1),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{height:"400",data:t.tableData,stripe:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{fixed:"left",type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"workcode",label:t.constants.NUMBER,width:"80"}}),n("el-table-column",{attrs:{prop:"name",label:t.constants.NAME,width:"100"}}),n("el-table-column",{attrs:{prop:"department",label:t.constants.BASE_OR_BU,width:"100"}}),n("el-table-column",{attrs:{prop:"syb_department",label:t.constants.DEP_OR_SUB,width:"200"}}),n("el-table-column",{attrs:{prop:"email",label:t.constants.EMAIL,width:"180"}}),n("el-table-column",{attrs:{prop:"target",label:t.constants.TARGET_STATUS}}),n("el-table-column",{attrs:{prop:"self",label:t.constants.SELF_EVALUATION_STATUS}}),n("el-table-column",{attrs:{prop:"superior",label:t.constants.LEADER_EVALUATION_STATUS}}),n("el-table-column",{attrs:{prop:"confirm",label:"员工确认"}}),n("el-table-column",{attrs:{fixed:"right",label:t.constants.OPERATIONS,width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.modifyInfo(e.row)}}},[t._v(t._s(t.constants.MODIFY))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.delInfo(e.row)}}},[t._v(t._s(t.constants.DEL))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.$router.push(t.constants.PATH_PERFORMANCE_USER_DETAIL(t.$route.params.orgID,e.row.id))}}},[t._v(t._s(t.constants.DETAILS))])]}}])})],1),n("br"),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),n("br")],1)]),n("target-dialog",{attrs:{visible:t.dialogTarget},on:{close:function(e){t.dialogTarget=!1}}}),t.dialogImport?n("import-dialog",{staticClass:"dialogImport",attrs:{dialogImport:t.dialogImport},on:{close:t.closeImportDia}}):t._e(),t.dialogTimes?n("time-set",{attrs:{initTime:t.initTime,visible:t.dialogTimes},on:{close:t.closeTimeSettingDia}}):t._e(),t.dialogInfo?n("info-dialog",{attrs:{currentInfo:t.currentInfo,infoType:t.infoType,dialogInfo:t.dialogInfo},on:{close:t.closeInfoDia}}):t._e()],1)},m=[],f=n("XyMi");function p(t){n("dnZZ")}var d=!1,_=p,h="data-v-c7a283a0",E=null,b=Object(f["a"])(c,u,m,d,_,h,E);e["default"]=b.exports},dnZZ:function(t,e){}});
//# sourceMappingURL=7.8f2fcdb0.js.map