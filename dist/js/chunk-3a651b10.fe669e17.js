(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a651b10"],{1762:function(e,t,n){},2019:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},a=[],i={},r=i,o=(n("ee47"),n("2877")),l=Object(o["a"])(r,s,a,!1,null,"6c517b7e",null);t["a"]=l.exports},"292c":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav-bar",{attrs:{list:e.nav}}),n("section",{staticClass:"content-container dep-page"},[n("div",{staticClass:"bg-white"},[n("el-row",{staticClass:"header",attrs:{type:"flex",justify:"space-between"}},[n("span",[e._v(e._s(e.gradeInfo.name))]),n("span",{staticClass:"tip"},[e._v(e._s(e.constants.FINISHED_DATE)+" "+e._s(e.gradeInfo.finishedDate))])]),n("hr"),n("div",{staticClass:"time-line-panel bg-white"},[n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("span",{staticClass:"dep-name"},[e._v(e._s(e.depInfo.name))]),e.isShow?n("el-button",{staticStyle:{"margin-right":"20px"},attrs:{disabled:0==e.realTotal||6==e.step,size:"mini",type:"primary",round:""},on:{click:function(t){e.dialogTimes=!0}}},[e._v(e._s(e.hasSchedule?e.constants.MODIFY_TIMES:e.constants.SET_TIMES))]):e._e()],1),n("br"),n("br"),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:20}},[n("el-steps",{attrs:{"align-center":"",active:e.step,"finish-status":"success"}},[n("el-step",[n("template",{slot:"title"},[n("el-button",{attrs:{disabled:!e.canbeImport,size:"mini",round:"",type:"primary"},on:{click:function(t){e.dialogImport=!0}}},[e._v(e._s(e.constants.IMPORT_RECORDS))])],1)],2),n("el-step",[n("template",{slot:"title"},[e._v("\n                  自评"+e._s((e.constants.ENUM_SELF_EVALUATION_STATUS.filter(function(t){return t.key===String(e.depInfo.self_status)})[0]||{}).value)+"\n                  "),e.depInfo.self_status>0?n("span",[e._v("("+e._s(e.depInfo.self)+"/"+e._s(e.depInfo.count)+")")]):e._e(),e.gradeInfo.self_start_time?n("div",[e._v("\n                    "+e._s(e.gradeInfo.self_start_time)+" -\n                    "+e._s(e.gradeInfo.self_end_time)+"\n                  ")]):e._e()])],2),n("el-step",[n("template",{slot:"title"},[e._v("\n                  上级评"+e._s((e.constants.ENUM_LEADER_EVALUATION_STATUS.filter(function(t){return t.key===String(e.depInfo.superior_status)})[0]||{}).value)+"\n                  "),e.depInfo.superior_status>0?n("span",[e._v("("+e._s(e.depInfo.superior)+"/"+e._s(e.depInfo.count)+")")]):e._e(),e.gradeInfo.superior_start_time?n("div",[e._v("\n                    "+e._s(e.gradeInfo.superior_start_time)+" -\n                    "+e._s(e.gradeInfo.superior_end_time)+"\n                  ")]):e._e()])],2),n("el-step",[n("template",{slot:"title"},[e._v("\n                  隔级上级评"+e._s((e.constants.ENUM_LEADER_PLUS_EVALUATION_STATUS.filter(function(t){return t.key===String(e.depInfo.highlevel_status)})[0]||{}).value)+"\n                  "),e.depInfo.highlevel_status>0?n("span",[e._v("("+e._s(e.depInfo.highlevel)+"/"+e._s(e.depInfo.count)+")")]):e._e(),e.gradeInfo.highlevel_start_time?n("div",[e._v("\n                    "+e._s(e.gradeInfo.highlevel_start_time)+" -\n                    "+e._s(e.gradeInfo.highlevel_end_time)+"\n                  ")]):e._e()])],2),n("el-step",[n("template",{slot:"title"},[e._v("\n                  线下合议"+e._s((e.constants.ENUM_FACE_EVALUATION_STATUS.filter(function(t){return t.key===String(e.depInfo.offlinetalk_status)})[0]||{}).value)+"\n                  "),n("div",[e._v("\n                    "+e._s(e.gradeInfo.offlinetalk_start_time)+" -\n                    "+e._s(e.gradeInfo.offlinetalk_end_time)+"\n                  ")])])],2),n("el-step",{attrs:{title:"未开始"}},[n("template",{slot:"title"},[e._v("\n                  员工确认"+e._s((e.constants.ENUM_FACE_EVALUATION_STATUS.filter(function(t){return t.key===String(e.depInfo.feedback_status)})[0]||{}).value)+"\n                  "),e.gradeInfo.feedback_start_time?n("div",[e._v("\n                    "+e._s(e.gradeInfo.feedback_start_time)+" -\n                    "+e._s(e.gradeInfo.feedback_end_time)+"\n                  ")]):e._e()])],2)],1)],1)],1)],1)],1),n("br"),n("div",{staticClass:"bg-white"},[n("el-row",{staticClass:"action-bar",attrs:{align:"middle",type:"flex",justify:"space-between"}},[n("span",[e._v(e._s(e.constants.SELECTION_TIPS(e.total,e.selection.length)))]),n("span",[n("el-button",{staticClass:"action-btn",attrs:{disabled:0===e.selection.length,icon:"el-icon-download",type:"medium"},on:{click:e.exportData}},[e._v(e._s(e.constants.EXPORT_DETAILS))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:!e.canbeReminder,icon:"el-icon-bell",type:"medium"},on:{click:e.reminder}},[e._v(e._s(e.constants.REMINDER))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:!e.canAdd,icon:"el-icon-plus",type:"medium"},on:{click:function(t){e.infoType="add",e.dialogInfo=!0,e.currentInfo={}}}},[e._v(e._s(e.constants.ADD))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:0===e.selection.length||!e.canAdd,icon:"el-icon-delete",type:"medium"},on:{click:e.batchDel}},[e._v(e._s(e.constants.BATCH_DEL))])],1)]),n("el-form",{ref:"filter-form",staticClass:"filter-form",attrs:{inline:!0,model:e.formFilter}},[n("el-form-item",{attrs:{prop:"number"}},[n("el-input",{attrs:{placeholder:e.constants.NUMBER},model:{value:e.formFilter.number,callback:function(t){e.$set(e.formFilter,"number",t)},expression:"formFilter.number"}})],1),n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:e.constants.NAME},model:{value:e.formFilter.name,callback:function(t){e.$set(e.formFilter,"name",t)},expression:"formFilter.name"}})],1),n("el-form-item",{attrs:{prop:"leaderNum"}},[n("el-input",{attrs:{placeholder:e.constants.LEADER_NUMBER},model:{value:e.formFilter.leaderNum,callback:function(t){e.$set(e.formFilter,"leaderNum",t)},expression:"formFilter.leaderNum"}})],1),n("el-form-item",{attrs:{prop:"leaderName"}},[n("el-input",{attrs:{placeholder:e.constants.LEADER_NAME},model:{value:e.formFilter.leaderName,callback:function(t){e.$set(e.formFilter,"leaderName",t)},expression:"formFilter.leaderName"}})],1),n("el-form-item",{attrs:{prop:"upLeaderNum"}},[n("el-input",{attrs:{placeholder:e.constants.PLUS_LEADER_NUMBER},model:{value:e.formFilter.upLeaderNum,callback:function(t){e.$set(e.formFilter,"upLeaderNum",t)},expression:"formFilter.upLeaderNum"}})],1),n("el-form-item",{attrs:{prop:"upLeaderName"}},[n("el-input",{attrs:{placeholder:e.constants.PLUS_LEADER_NAME},model:{value:e.formFilter.upLeaderName,callback:function(t){e.$set(e.formFilter,"upLeaderName",t)},expression:"formFilter.upLeaderName"}})],1),n("el-form-item",{attrs:{prop:"selfEvaluation"}},[n("el-select",{attrs:{placeholder:e.constants.SELF_EVALUATION_STATUS},model:{value:e.formFilter.selfEvaluation,callback:function(t){e.$set(e.formFilter,"selfEvaluation",t)},expression:"formFilter.selfEvaluation"}},e._l(e.constants.ENUM_GENERIC_COMPLETE_STATUS,function(e){return n("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1),n("el-form-item",{attrs:{prop:"leaderEvaluation"}},[n("el-select",{attrs:{placeholder:e.constants.LEADER_EVALUATION_STATUS},model:{value:e.formFilter.leaderEvaluation,callback:function(t){e.$set(e.formFilter,"leaderEvaluation",t)},expression:"formFilter.leaderEvaluation"}},e._l(e.constants.ENUM_GENERIC_COMPLETE_STATUS,function(e){return n("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1),n("el-form-item",{attrs:{prop:"plusLeaderEvaluation"}},[n("el-select",{attrs:{placeholder:e.constants.LEADER_PLUS_EVALUATION_STATUS},model:{value:e.formFilter.plusLeaderEvaluation,callback:function(t){e.$set(e.formFilter,"plusLeaderEvaluation",t)},expression:"formFilter.plusLeaderEvaluation"}},e._l(e.constants.EMUM_CULTURE_GENERIC_COMPLETE_STATUS,function(e){return n("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1),n("el-form-item",{attrs:{prop:"result"}},[n("el-select",{attrs:{placeholder:e.constants.RESULT_CONFIRM},model:{value:e.formFilter.result,callback:function(t){e.$set(e.formFilter,"result",t)},expression:"formFilter.result"}},e._l(e.constants.ENUM_WAIT_CONFIRM,function(e){return n("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1),n("el-form-item",[n("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:function(t){return e.resetFilter("filter-form")}}},[e._v(e._s(e.constants.RESET))])],1)],1),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{height:"400",data:e.tableData,stripe:""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{fixed:"left",type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"workcode",label:e.constants.NUMBER,width:"80"}}),n("el-table-column",{attrs:{prop:"name",label:e.constants.NAME,width:"100"}}),n("el-table-column",{attrs:{prop:"department",label:e.constants.BASE_OR_BU,width:"100"}}),n("el-table-column",{attrs:{prop:"first_department",label:e.constants.DEP_OR_SUB,width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[""==t.row.first_department?n("span",[e._v(" — — ")]):e._e(),""!=t.row.first_department?n("span",[e._v("\n              "+e._s(t.row.first_department)+"\n            ")]):e._e()]}}])}),n("el-table-column",{attrs:{prop:"level",label:e.constants.WORK_LEVEL,width:"100"}}),n("el-table-column",{attrs:{prop:"email",label:e.constants.EMAIL,width:"180"}}),n("el-table-column",{attrs:{prop:"superior_workcode",label:e.constants.LEADER_NUMBER,width:"80"}}),n("el-table-column",{attrs:{prop:"superior_name",label:e.constants.LEADER_NAME,width:"100"}}),n("el-table-column",{attrs:{prop:"superior_department",label:e.constants.UP_LEVEL+e.constants.BASE_OR_BU,width:"150"}}),n("el-table-column",{attrs:{prop:"superior_email",label:e.constants.UP_LEVEL+e.constants.EMAIL,width:"150"}}),n("el-table-column",{attrs:{prop:"highlevel_workcode",label:e.constants.PLUS_UP_LEVEL+e.constants.NUMBER,width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[""==t.row.highlevel_workcode?n("span",[e._v(" — — ")]):e._e(),""!=t.row.highlevel_workcode?n("span",[e._v("\n              "+e._s(t.row.highlevel_workcode)+"\n            ")]):e._e()]}}])}),n("el-table-column",{attrs:{prop:"highlevel_name",label:e.constants.PLUS_UP_LEVEL+e.constants.NAME,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[""==t.row.highlevel_name?n("span",[e._v(" — — ")]):e._e(),""!=t.row.highlevel_name?n("span",[e._v("\n              "+e._s(t.row.highlevel_name)+"\n            ")]):e._e()]}}])}),n("el-table-column",{attrs:{prop:"highlevel_department",label:e.constants.PLUS_UP_LEVEL+e.constants.BASE_OR_BU,width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[""==t.row.highlevel_department?n("span",[e._v(" — — ")]):e._e(),""!=t.row.highlevel_department?n("span",[e._v("\n              "+e._s(t.row.highlevel_department)+"\n            ")]):e._e()]}}])}),n("el-table-column",{attrs:{prop:"highlevel_email",label:e.constants.PLUS_UP_LEVEL+e.constants.EMAIL,width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[""==t.row.highlevel_email?n("span",[e._v(" — — ")]):e._e(),""!=t.row.highlevel_email?n("span",[e._v("\n              "+e._s(t.row.highlevel_email)+"\n            ")]):e._e()]}}])}),n("el-table-column",{attrs:{prop:"_271_level",label:"271等级",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.constants.LEVEL_ALIAS[t.row._271_level]))]}}])}),n("el-table-column",{attrs:{prop:"self_status",label:e.constants.SELF_EVALUATION_STATUS,width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s("已完成"!=(e.constants.ENUM_SELF_EVALUATION_STATUS.filter(function(e){return e.key===String(t.row.self_status)})[0]||{}).value?"未完成":"已完成")+"\n          ")]}}])}),n("el-table-column",{attrs:{prop:"superior_status",label:e.constants.LEADER_EVALUATION_STATUS,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s((e.constants.ENUM_GENERIC_COMPLETE_STATUS.filter(function(e){return e.key===String(t.row.superior_status)})[0]||{}).value)+"\n          ")]}}])}),n("el-table-column",{attrs:{prop:"highlevel_status",label:e.constants.LEADER_PLUS_EVALUATION_STATUS,width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.highlevel_is_agree?n("div",{staticClass:"reject_status"},[n("div",[e._v(e._s(e.constants.REJECT))])]):e._e(),0==t.row.highlevel_is_agree||2==t.row.highlevel_is_agree?n("div",[e._v("\n              "+e._s((e.constants.EMUM_CULTURE_GENERIC_COMPLETE_STATUS.filter(function(e){return e.key===String(t.row.highlevel_status)})[0]||{}).value)+"\n            ")]):e._e()]}}])}),n("el-table-column",{attrs:{prop:"feedback_is_agree",label:e.constants.RESULT_CONFIRM},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s((e.constants.ENUM_WAIT_CONFIRM.filter(function(e){return e.key===String(t.row.feedback_is_agree)})[0]||{}).value)+"\n          ")]}}])}),n("el-table-column",{attrs:{fixed:"right",label:e.constants.OPERATIONS,width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.canEdit?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.modifyInfo(t.row)}}},[e._v(e._s(e.constants.MODIFY))]):e._e(),e.canAdd?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.delInfo(t.row)}}},[e._v(e._s(e.constants.DEL))]):e._e(),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.$router.push(e.constants.PATH_GRADE_EMP_DETAIL(e.$route.params.id,e.$route.params.orgID,t.row.id,t.row.status))}}},[e._v(e._s(e.constants.DETAILS))])]}}])})],1),n("br"),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("pagination",{attrs:{currentPage:e.currentPage,total:e.total},on:{"current-change":e.handleCurrentChange}})],1),n("br")],1)]),e.dialogImport?n("import-dialog",{staticClass:"dialogImport",attrs:{isManagerGrade:e.isManagerGrade,dialogImport:e.dialogImport},on:{close:e.closeImportDia}}):e._e(),e.dialogTimes?n("time-setting",{attrs:{isManagerGrade:e.isManagerGrade,timeData:e.timeData,status:e.status,dialogTimes:e.dialogTimes,orgId:e.orgId},on:{close:e.close}}):e._e(),e.dialogInfo?n("info-dialog",{attrs:{currentInfo:e.currentInfo,infoType:e.infoType,dialogInfo:e.dialogInfo},on:{close:e.closeInfoDia}}):e._e()],1)},a=[],i=(n("7f7f"),n("cebc")),r=n("38fb"),o=n("c9f1"),l=n("372d"),_=n("fea5"),f=n("dedd"),u={created:function(){this.permissions=JSON.parse(localStorage.getItem("permissions")||"[]"),this.permissions.indexOf(201)>-1&&(this.isShow=!0),Object(_["gb"])(this.$route.params.orgID,{page:1}).then(function(e){var t={stage:e.info.stage};localStorage.setItem("stage",JSON.stringify(t))})},data:function(){return{currentStage:10,permissions:[],isShow:!1,currentPage:1,isManagerGrade:!1,stage:10,import_status:0,total:0,realTotal:0,currentInfo:{},dialogImport:!1,dialogTimes:!1,dialogInfo:!1,infoType:"add",gradeInfo:{name:"",finishedDate:"",self_start_time:"",self_end_time:"",superior_start_time:"",superior_end_time:"",highlevel_start_time:"",highlevel_end_time:"",offlinetalk_start_time:"",offlinetalk_end_time:"",feedback_start_time:"",feedback_end_time:"",checked_271:0,visible_271:0,feeling_is_necessary:0},depInfo:{name:"",self_status:0,superior_status:0,highlevel_status:0,feedback_status:0,offlinetalk_status:0,count:"",self:"",superior:"",highlevel:"",refuse:""},selection:[],formFilter:{number:"",name:"",leaderNum:"",leaderName:"",upLeaderNum:"",upLeaderName:"",selfEvaluation:"",leaderEvaluation:"",plusLeaderEvaluation:"",result:""},constants:{FINISHED_DATE:r["Eb"],ENUM_GENERIC_COMPLETE_STATUS:r["kb"],EMUM_CULTURE_GENERIC_COMPLETE_STATUS:r["gb"],SELF_EVALUATION_STATUS:r["Vd"],LEADER_EVALUATION_STATUS:r["Cc"],LEADER_PLUS_EVALUATION_STATUS:r["Hc"],RESULT_CONFIRM:r["Od"],ENUM_WAIT_CONFIRM:r["ub"],SELECTION_TIPS:r["Td"],RESET:r["Nd"],OPERATIONS:r["qd"],EXPORT_DETAILS:r["xb"],REMINDER:r["Ld"],ADD:r["c"],BATCH_DEL:r["m"],NUMBER:r["kd"],NAME:r["fd"],LEADER_NUMBER:r["Fc"],LEADER_NAME:r["Ec"],PLUS_LEADER_NUMBER:r["Dd"],PLUS_LEADER_NAME:r["Cd"],BASE_OR_BU:r["k"],DEP_OR_SUB:r["R"],EMAIL:r["ab"],UP_LEVEL:r["re"],PLUS_UP_LEVEL:r["Fd"],FACE_FEEDBACK:r["Ab"],MODIFY:r["Qc"],DEL:r["N"],DETAILS:r["S"],SET_TIMES:r["ae"],IMPORT_RECORDS:r["Sb"],WORK_LEVEL:r["ue"],ENUM_SELF_EVALUATION_STATUS:r["tb"],ENUM_LEADER_EVALUATION_STATUS:r["lb"],ENUM_FACE_EVALUATION_STATUS:r["jb"],ENUM_LEADER_PLUS_EVALUATION_STATUS:r["mb"],MODIFY_TIMES:r["Rc"],PATH_GRADE_EMP_DETAIL:o["x"],LEVEL_ALIAS:r["Nc"],REJECT:r["Jd"]},tableData:[],nav:[{label:r["Ib"],href:o["A"]},{label:r["Kb"],href:Object(o["C"])(this.$route.params.id)},{label:r["rd"],active:!0}],orgId:0}},components:{"nav-bar":function(){return n.e("chunk-d5094d72").then(n.bind(null,"3208"))},pagination:function(){return n.e("chunk-28d9b0e5").then(n.bind(null,"486f"))},"import-dialog":Object(l["a"])(n.e("chunk-2718e8b0").then(n.bind(null,"63b0"))),"time-setting":Object(l["a"])(n.e("chunk-c05348ae").then(n.bind(null,"61a9"))),"info-dialog":Object(l["a"])(n.e("chunk-a99992be").then(n.bind(null,"e5f3")))},methods:{resetFilter:function(e){this.$refs[e].resetFields()},exportData:function(){var e=Object(o["w"])(this.selection.map(function(e){return e.id}));window.open(e,"_blank","noopener")},batchDel:function(){var e=this;Object(_["g"])({evaluation_user_ids:this.selection.map(function(e){return e.id})}).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.refreshList()}).catch(function(){})},handleSelectionChange:function(e){this.selection=e},handleCurrentChange:function(e){this.currentPage=e;var t={page:e};this.refreshList(t)},closeImportDia:function(){this.dialogImport=!1,this.refreshList()},close:function(){this.dialogTimes=!1,this.refreshList()},closeInfoDia:function(){this.dialogInfo=!1,this.refreshList()},reminder:function(){var e=this,t="是否要发出提醒?";0==this.selection.length&&(t="是否提醒全部?"),this.$confirm(t,"提示",{confirmButtonText:r["A"],cancelButtonText:r["v"],type:"warning",center:!0}).then(function(){var t={};t.evaluation_id=e.$route.params.orgID,0!=e.selection.length&&(t.ids=e.selection.map(function(e){return e.id})),Object(_["Cb"])(t).then(function(t){e.$message({type:"success",message:"提醒成功!"})}).catch(function(e){})}).catch(function(){})},delInfo:function(e){var t=this;this.$confirm("确定删除此用户?","提示",{confirmButtonText:r["A"],cancelButtonText:r["v"],type:"warning",center:!0}).then(function(){Object(_["g"])({evaluation_user_ids:[e.id]}).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.refreshList()})}).catch(function(){})},modifyInfo:function(e){this.infoType="modify",this.currentInfo=e,this.currentInfo.stage=this.stage,this.currentInfo.canEditLeaderInfo=this.canEditLeaderInfo,this.currentInfo.canEdit=this.canEdit,this.dialogInfo=!0},refreshList:function(e){var t=this,n=e||{};n=Object(i["a"])({},{name:this.formFilter.name,workcode:this.formFilter.number,superior_workcode:this.formFilter.leaderNum,superior_name:this.formFilter.leaderName,highlevel_workcode:this.formFilter.upLeaderNum,highlevel_name:this.formFilter.upLeaderName,self_status:this.formFilter.selfEvaluation,superior_status:this.formFilter.leaderEvaluation,highlevel_status:this.formFilter.plusLeaderEvaluation,feedback_is_agree:this.formFilter.result,page:this.currentPage,perPage:20},n),Object(_["gb"])(this.$route.params.orgID,Object(f["a"])(n)).then(function(e){t.realTotal=e.total,t.isManagerGrade=2==e.info.type,t.tableData=e.list.data,t.total=e.list.total,t.depInfo.name=e.info.department_name,t.depInfo.self_status=e.info.self_status,t.depInfo.superior_status=e.info.superior_status,t.depInfo.highlevel_status=e.info.highlevel_status,t.depInfo.feedback_status=e.info.feedback_status,t.depInfo.offlinetalk_status=e.info.offlinetalk_status,t.depInfo.count=e.info.stat[0].count,t.depInfo.self=e.info.stat[0].self,t.depInfo.superior=e.info.stat[0].superior,t.depInfo.highlevel=e.info.stat[0].highlevel,t.depInfo.refuse=e.info.stat[0].refuse,t.gradeInfo.name=e.info.evaluation_name.evaluation_name,t.gradeInfo.feeling_is_necessary=e.info.feeling_is_necessary,t.gradeInfo.finishedDate=e.info.evaluation_name.end_time,t.gradeInfo.self_start_time=e.info.self_start_time,t.gradeInfo.self_end_time=e.info.self_end_time,t.gradeInfo.superior_start_time=e.info.superior_start_time,t.gradeInfo.superior_end_time=e.info.superior_end_time,t.gradeInfo.highlevel_start_time=e.info.highlevel_start_time,t.gradeInfo.highlevel_end_time=e.info.highlevel_end_time,t.gradeInfo.offlinetalk_start_time=e.info.offlinetalk_start_time,t.gradeInfo.offlinetalk_end_time=e.info.offlinetalk_end_time,t.gradeInfo.feedback_start_time=e.info.feedback_start_time,t.gradeInfo.feedback_end_time=e.info.feedback_end_time,t.gradeInfo.checked_271=e.info._271_is_necessary,t.gradeInfo.visible_271=e.info.visible_271,t.stage=parseInt(e.info.stage),t.import_status=parseInt(e.info.import_status)}).catch(function(e){})}},watch:{formFilter:{handler:function(e){var t={name:e.name,workcode:e.number,superior_workcode:e.leaderNum,superior_name:e.leaderName,highlevel_workcode:e.upLeaderNum,highlevel_name:e.upLeaderName,self_status:e.selfEvaluation,superior_status:e.leaderEvaluation,highlevel_status:e.plusLeaderEvaluation,feedback_is_agree:e.result,page:1};this.refreshList(t)},deep:!0,immediate:!0}},computed:{canbeImport:function(){return!this.depInfo.self_status},canbeReminder:function(){return 30==this.stage&&this.canAdd||40==this.stage&&2!==this.depInfo.superior_status||55==this.stage&&2!==this.depInfo.offlinetalk_status||50==this.stage&&2!==this.depInfo.highlevel_status||60==this.stage&&2!==this.depInfo.feedback_status},canAdd:function(){return 2!=this.depInfo.self_status},canEdit:function(){return this.stage<50||50==this.stage&&2!=this.depInfo.highlevel_status},canEditLeaderInfo:function(){return this.stage<40||40==this.stage&&2!=this.depInfo.superior_status},step:function(){var e=this.stage;return 10==e&&0==this.import_status?0:20==e||30==e?2===this.depInfo.self_status?2:1:40==e?2===this.depInfo.superior_status?3:2:50==e?2===this.depInfo.highlevel_status?4:3:55==e?2===this.depInfo.offlinetalk_status?5:4:60==e?2===this.depInfo.feedback_status?6:5:70==e?6:0},hasSchedule:function(){return this.gradeInfo.self_start_time&&this.gradeInfo.self_end_time&&this.gradeInfo.superior_start_time&&this.gradeInfo.superior_end_time&&this.gradeInfo.highlevel_start_time&&this.gradeInfo.highlevel_end_time&&this.gradeInfo.offlinetalk_start_time&&this.gradeInfo.offlinetalk_end_time&&this.gradeInfo.feedback_start_time&&this.gradeInfo.feedback_end_time},status:function(){return{self_status:this.depInfo.self_status,superior_status:this.depInfo.superior_status,highlevel_status:this.depInfo.highlevel_status,offlinetalk_status:this.depInfo.offlinetalk_status,feedback_status:this.depInfo.feedback_status}},timeData:function(){return{self_start_time:this.gradeInfo.self_start_time,self_end_time:this.gradeInfo.self_end_time,superior_start_time:this.gradeInfo.superior_start_time,superior_end_time:this.gradeInfo.superior_end_time,highlevel_start_time:this.gradeInfo.highlevel_start_time,highlevel_end_time:this.gradeInfo.highlevel_end_time,offlinetalk_start_time:this.gradeInfo.offlinetalk_start_time,offlinetalk_end_time:this.gradeInfo.offlinetalk_end_time,feedback_start_time:this.gradeInfo.feedback_start_time,feedback_end_time:this.gradeInfo.feedback_end_time,checked_271:this.gradeInfo.checked_271,finishedDate:this.gradeInfo.finishedDate,visible_271:this.gradeInfo.visible_271,feeling_is_necessary:this.gradeInfo.feeling_is_necessary}}}},c=u,d=(n("f2cc"),n("2877")),m=Object(d["a"])(c,s,a,!1,null,"5d3bd418",null);t["default"]=m.exports},"372d":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var s=n("2019"),a=function(e){return function(){return{component:e,loading:s["a"],delay:0}}}},"9f9e":function(e,t,n){},dedd:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n("456d"),n("ac6a");var s=function(e){var t={};return Object.keys(e).filter(function(t){return void 0!==e[t]&&""!==e[t]}).forEach(function(n){t[n]=e[n]}),t}},ee47:function(e,t,n){"use strict";var s=n("9f9e"),a=n.n(s);a.a},f2cc:function(e,t,n){"use strict";var s=n("1762"),a=n.n(s);a.a}}]);