webpackJsonp([7],{"D+lh":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(t){var e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),i=t.getHours(),s=t.getMinutes();t.getSeconds();return[e,n,a].map(r).join("-")+" "+[i,s].map(r).join(":")},r=function(t){return t=t.toString(),t[1]?t:"0"+t}},bSZ8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Biqn"),r=n.n(a),i=n("OE2U"),s=n("xwzc"),o=n("diSO"),l=n("BHhq"),c=n("D+lh"),u={data:function(){return{currentPage:1,stage:10,import_status:0,total:0,currentInfo:{},dialogImport:!1,dialogTimes:!1,dialogInfo:!1,dialogTarget:!1,infoType:"add",depInfo:{},selection:[],formFilter:{number:"",name:"",leaderNum:"",leaderName:"",targetStatus:""},constants:{FINISHED_DATE:i["_15"],ENUM_GENERIC_COMPLETE_STATUS:i["V"],ENUM_PERFORMANCE_FINISH:i["_0"],SELF_EVALUATION_STATUS:i["_110"],LEADER_EVALUATION_STATUS:i["_63"],RESULT_CONFIRM:i["_103"],ENUM_WAIT_CONFIRM:i["_4"],SELECTION_TIPS:i["_108"],RESET:i["_102"],OPERATIONS:i["_85"],EXPORT_DETAILS:i["_8"],REMINDER:i["_100"],ADD:i["c"],BATCH_DEL:i["j"],NUMBER:i["_83"],NAME:i["_78"],LEADER_NUMBER:i["_66"],LEADER_NAME:i["_65"],BASE_OR_BU:i["h"],DEP_OR_SUB:i["E"],EMAIL:i["L"],UP_LEVEL:i["_128"],PATH_PERFORMANCE_USER_DETAIL:s["F"],MODIFY:i["_72"],DEL:i["B"],DETAILS:i["F"],SET_TIMES:i["_114"],IMPORT_RECORDS:i["_27"],WORK_LEVEL:i["_130"],MODIFY_TIMES:i["_73"],LABEL_SELF:i["_55"],LABEL_SUP:i["_58"],APPEAL:i["d"],TARGET_STATUS:i["_119"]},tableData:[],nav:[{label:i["_18"],href:s["A"]},{label:i["_20"],href:Object(s["C"])(this.$route.params.id)},{label:i["_86"],active:!0}]}},components:{"nav-bar":function(){return n.e(26).then(n.bind(null,"PI/7"))},pagination:function(){return n.e(27).then(n.bind(null,"734F"))},"import-dialog":Object(o["a"])(n.e(43).then(n.bind(null,"ZOz1"))),"info-dialog":Object(o["a"])(n.e(44).then(n.bind(null,"wibU"))),"target-dialog":Object(o["a"])(n.e(41).then(n.bind(null,"SIqx"))),"time-set":Object(o["a"])(n.e(50).then(n.bind(null,"S/eA")))},methods:{resetFilter:function(t){this.$refs[t].resetFields()},uploadTarget:function(){this.dialogTarget=!0},exportData:function(){var t=Object(s["l"])(this.$route.params.id,this.selection.map(function(t){return t.id}));window.open(t,"_blank")},batchDel:function(){var t=this;this.$confirm("确定删除这些用户?",i["g"],{confirmButtonText:i["p"],cancelButtonText:i["m"],type:"warning",center:!0}).then(function(){Object(l["d"])(t.$route.params.orgID,{performance_user_ids:t.selection.map(function(t){return t.id})}).then(function(e){t.$message({type:"success",message:i["s"]}),t.refreshList(t.getCurrentPostData())})}).catch(function(){})},handleSelectionChange:function(t){this.selection=t},handleCurrentChange:function(t){this.currentPage=t;var e=r()({},this.getCurrentPostData(),{page:t});this.refreshList(e)},closeImportDia:function(){this.dialogImport=!1,this.refreshList(this.getCurrentPostData())},closeTimeSettingDia:function(){this.dialogTimes=!1,this.refreshList(this.getCurrentPostData())},closeInfoDia:function(){this.dialogInfo=!1,this.refreshList(this.getCurrentPostData())},reminder:function(){var t=this,e="是否要发出提醒?";0==this.selection.length&&(e="是否提醒全部?"),this.$confirm(e,i["g"],{confirmButtonText:i["p"],cancelButtonText:i["m"],type:"warning",center:!0}).then(function(){var e={};e.performance_id=t.$route.params.orgID,0!=t.selection.length&&(e.performance_user_ids=t.selection.map(function(t){return t.id})),Object(l["T"])(e).then(function(e){t.$message({type:"success",message:"提醒成功!"})}).catch(function(t){})}).catch(function(){})},delInfo:function(t){var e=this;this.$confirm(i["_61"],i["g"],{confirmButtonText:i["p"],cancelButtonText:i["m"],type:"warning",center:!0}).then(function(){Object(l["d"])(e.$route.params.orgID,{performance_user_ids:[t.id]}).then(function(t){e.$message({type:"success",message:i["s"]}),e.refreshList(e.getCurrentPostData())}).catch(function(t){})}).catch(function(){})},modifyInfo:function(t){this.infoType="modify",this.currentInfo=t,this.dialogInfo=!0},refreshList:function(t){var e=this;return Object(l["w"])(this.$route.params.orgID,t).then(function(t){var n=t.data,a=t.total,r=t.performance_info;e.tableData=n,e.total=a,e.depInfo=r}).catch(function(t){})},getCurrentPostData:function(){return{page:this.currentPage,workcode:this.formFilter.number,name:this.formFilter.name,superior_workcode:this.formFilter.leaderNum,superior_name:this.formFilter.leaderName,stage:this.formFilter.targetStatus}}},watch:{formFilter:{handler:function(t){var e={page:1,workcode:t.number,name:t.name,superior_workcode:t.leaderNum,superior_name:t.leaderName,stage:t.targetStatus};this.currentPage=1,this.refreshList(e)},deep:!0,immediate:!0}},computed:{hasSchedule:function(){return this.depInfo.start_time&&this.depInfo.end_time},isImported:function(){return!!this.depInfo.user_status},initTime:function(){return{startTime:this.depInfo.start_time,endTime:this.depInfo.end_time,finalEnd:this.depInfo.performance_name_end_time}},step:function(){return 4},canReminder:function(){return this.isImported&&this.isStarted},isStarted:function(){return this.initTime.startTime&&Object(c["a"])(new Date(this.initTime.startTime))<=Object(c["a"])(new Date)},afterEnd:function(){return this.initTime.endTime&&Object(c["a"])(new Date(this.initTime.endTime))<=Object(c["a"])(new Date)}}},m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container dep-page"},[n("div",{staticClass:"bg-white"},[n("el-row",{staticClass:"header",attrs:{type:"flex",justify:"space-between"}},[n("span",[t._v(t._s(t.depInfo.name))]),n("span",{staticClass:"tip"},[t._v("\n          "+t._s(t.constants.FINISHED_DATE)+" "+t._s(t.depInfo.performance_name_end_time)+"\n        ")])]),n("hr"),n("div",{staticClass:"time-line-panel bg-white"},[n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("span",{staticClass:"dep-name"},[t._v("\n            "+t._s(t.depInfo.department_path)+"\n          ")]),n("el-button",{staticStyle:{"margin-right":"20px"},attrs:{disabled:!t.isImported,size:"mini",type:"primary",round:""},on:{click:function(e){t.dialogTimes=!0}}},[t._v("\n            "+t._s(t.hasSchedule?t.constants.MODIFY_TIMES:t.constants.SET_TIMES)+"\n          ")])],1),n("br"),n("br"),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:20}},[n("el-steps",{attrs:{"align-center":"",active:t.step}},[n("el-step",[n("template",{slot:"title"},[n("el-button",{attrs:{disabled:t.isStarted,size:"mini",round:"",type:"primary"},on:{click:function(e){t.dialogImport=!0}}},[t._v(t._s(t.constants.IMPORT_RECORDS))])],1)],2),n("el-step",[n("template",{slot:"title"},[t._v("\n                  "+t._s(t.constants.LABEL_SELF)+"\n                  "),n("span",[t._v("("+t._s(t.depInfo.self_status)+")")])])],2),n("el-step",[n("template",{slot:"title"},[t._v("\n                  "+t._s(t.constants.LABEL_SUP)+"\n                  "),n("span",[t._v("("+t._s(t.depInfo.superior_status)+")")])])],2),n("el-step",[n("template",{slot:"title"},[t._v("\n                  "+t._s(t.constants.APPEAL)+"\n                  "),n("span",[t._v("("+t._s(t.depInfo.appeal_status)+")")])])],2)],1)],1)],1)],1)],1),n("br"),n("div",{staticClass:"bg-white"},[n("el-row",{staticClass:"action-bar",attrs:{align:"middle",type:"flex",justify:"space-between"}},[n("span",[t._v("\n          "+t._s(t.constants.SELECTION_TIPS(t.total,t.selection.length))+"\n        ")]),n("span",[n("el-button",{staticClass:"action-btn",attrs:{disabled:t.afterEnd||0==t.tableData.length,icon:"el-icon-upload2",type:"medium"},on:{click:t.uploadTarget}},[t._v("上传目标")]),n("el-button",{staticClass:"action-btn",attrs:{disabled:0===t.selection.length,icon:"el-icon-download",type:"medium"},on:{click:t.exportData}},[t._v(t._s(t.constants.EXPORT_DETAILS))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:!t.canReminder||t.afterEnd,icon:"el-icon-bell",type:"medium"},on:{click:t.reminder}},[t._v(t._s(t.constants.REMINDER))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:t.afterEnd,icon:"el-icon-plus",type:"medium"},on:{click:function(e){t.infoType="add",t.dialogInfo=!0,t.currentInfo={}}}},[t._v(t._s(t.constants.ADD))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:0===t.selection.length||t.afterEnd,icon:"el-icon-delete",type:"medium"},on:{click:t.batchDel}},[t._v(t._s(t.constants.BATCH_DEL))])],1)]),n("el-form",{ref:"filter-form",staticClass:"filter-form",attrs:{inline:!0,model:t.formFilter}},[n("el-form-item",{attrs:{prop:"number"}},[n("el-input",{attrs:{placeholder:t.constants.NUMBER},model:{value:t.formFilter.number,callback:function(e){t.$set(t.formFilter,"number",e)},expression:"formFilter.number"}})],1),n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:t.constants.NAME},model:{value:t.formFilter.name,callback:function(e){t.$set(t.formFilter,"name",e)},expression:"formFilter.name"}})],1),n("el-form-item",{attrs:{prop:"leaderNum"}},[n("el-input",{attrs:{placeholder:t.constants.LEADER_NUMBER},model:{value:t.formFilter.leaderNum,callback:function(e){t.$set(t.formFilter,"leaderNum",e)},expression:"formFilter.leaderNum"}})],1),n("el-form-item",{attrs:{prop:"leaderName"}},[n("el-input",{attrs:{placeholder:t.constants.LEADER_NAME},model:{value:t.formFilter.leaderName,callback:function(e){t.$set(t.formFilter,"leaderName",e)},expression:"formFilter.leaderName"}})],1),n("el-form-item",{attrs:{prop:"targetStatus"}},[n("el-select",{attrs:{placeholder:"阶段"},model:{value:t.formFilter.targetStatus,callback:function(e){t.$set(t.formFilter,"targetStatus",e)},expression:"formFilter.targetStatus"}},t._l(t.constants.ENUM_PERFORMANCE_FINISH,function(t){return n("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}))],1),n("el-form-item",[n("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:function(e){t.resetFilter("filter-form")}}},[t._v(t._s(t.constants.RESET))])],1)],1),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{height:"400",data:t.tableData,stripe:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{fixed:"left",type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"workcode",label:t.constants.NUMBER,width:"80"}}),n("el-table-column",{attrs:{prop:"name",label:t.constants.NAME,width:"100"}}),n("el-table-column",{attrs:{prop:"department",label:t.constants.BASE_OR_BU,width:"100"}}),n("el-table-column",{attrs:{prop:"syb_department",label:t.constants.DEP_OR_SUB,width:"200"}}),n("el-table-column",{attrs:{prop:"email",label:t.constants.EMAIL,width:"180"}}),n("el-table-column",{attrs:{prop:"superior_workcode",label:"上级工号"}}),n("el-table-column",{attrs:{prop:"superior_name",label:"上级姓名"}}),n("el-table-column",{attrs:{prop:"syb_department",label:"上级事业部"}}),n("el-table-column",{attrs:{prop:"superior_email",label:"上级邮箱"}}),n("el-table-column",{attrs:{prop:"target",label:t.constants.TARGET_STATUS}}),n("el-table-column",{attrs:{prop:"self",label:t.constants.SELF_EVALUATION_STATUS}}),n("el-table-column",{attrs:{prop:"superior",label:t.constants.LEADER_EVALUATION_STATUS}}),n("el-table-column",{attrs:{prop:"confirm",label:"员工确认"}}),n("el-table-column",{attrs:{fixed:"right",label:t.constants.OPERATIONS,width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{disabled:t.afterEnd,type:"text",size:"small"},on:{click:function(n){t.modifyInfo(e.row)}}},[t._v(t._s(t.constants.MODIFY))]),n("el-button",{attrs:{disabled:t.afterEnd,type:"text",size:"small"},on:{click:function(n){t.delInfo(e.row)}}},[t._v(t._s(t.constants.DEL))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.$router.push(t.constants.PATH_PERFORMANCE_USER_DETAIL(t.$route.params.id,t.$route.params.orgID,e.row.id))}}},[t._v(t._s(t.constants.DETAILS))])]}}])})],1),n("br"),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),n("br")],1)]),t.dialogTarget?n("target-dialog",{attrs:{visible:t.dialogTarget},on:{close:function(e){t.dialogTarget=!1}}}):t._e(),t.dialogImport?n("import-dialog",{staticClass:"dialogImport",attrs:{dialogImport:t.dialogImport},on:{close:t.closeImportDia}}):t._e(),t.dialogTimes?n("time-set",{attrs:{initTime:t.initTime,visible:t.dialogTimes},on:{close:t.closeTimeSettingDia}}):t._e(),t.dialogInfo?n("info-dialog",{attrs:{currentInfo:t.currentInfo,infoType:t.infoType,dialogInfo:t.dialogInfo},on:{close:t.closeInfoDia}}):t._e()],1)},d=[],p=n("XyMi");function f(t){n("rX7j")}var _=!1,h=f,b="data-v-7843f222",g=null,E=Object(p["a"])(u,m,d,_,h,b,g);e["default"]=E.exports},rX7j:function(t,e){}});
//# sourceMappingURL=7.2cdf0188.js.map