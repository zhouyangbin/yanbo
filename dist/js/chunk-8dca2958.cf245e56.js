(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8dca2958"],{"03ef":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container dep-page"},[n("div",{staticClass:"bg-white"},[n("el-row",{staticClass:"header",attrs:{type:"flex",justify:"space-between"}},[n("span",[t._v(t._s(t.depInfo.name))]),n("span",{staticClass:"tip"},[t._v(t._s(t.constants.FINISHED_DATE)+"\n          "+t._s(t.depInfo.performance_name_end_time))])]),n("hr"),n("div",{staticClass:"time-line-panel bg-white"},[n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("span",{staticClass:"dep-name"},[t._v(t._s(t.depInfo.department_path))]),n("el-button",{staticStyle:{"margin-right":"20px"},attrs:{disabled:!t.isImported,size:"mini",type:"primary",round:""},on:{click:function(e){t.dialogTimes=!0}}},[t._v(t._s(t.hasSchedule?t.constants.MODIFY_TIMES:t.constants.SET_TIMES))])],1),n("br"),n("br"),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:20}},[n("el-steps",{attrs:{"align-center":"",active:t.step}},[n("el-step",[n("template",{slot:"title"},[n("el-button",{attrs:{disabled:t.isStarted,size:"mini",round:"",type:"primary"},on:{click:function(e){t.dialogImport=!0}}},[t._v(t._s(t.constants.IMPORT_RECORDS))])],1)],2),n("el-step",[n("template",{slot:"title"},[t._v("\n                  "+t._s(t.constants.LABEL_SELF)+"\n                  "),n("span",[t._v("("+t._s(t.depInfo.self_status)+")")])])],2),n("el-step",[n("template",{slot:"title"},[t._v("\n                  "+t._s(t.constants.LABEL_SUP)+"\n                  "),n("span",[t._v("("+t._s(t.depInfo.superior_status)+")")])])],2),n("el-step",[n("template",{slot:"title"},[t._v("\n                  "+t._s(t.constants.APPEAL)+"\n                  "),n("span",[t._v("("+t._s(t.depInfo.appeal_status)+")")])])],2)],1)],1)],1)],1)],1),n("br"),n("div",{staticClass:"bg-white"},[n("el-row",{staticClass:"action-bar",attrs:{align:"middle",type:"flex",justify:"space-between"}},[n("span",[t._v(t._s(t.constants.SELECTION_TIPS(t.total,t.selection.length)))]),n("span",[n("el-button",{staticClass:"action-btn",attrs:{disabled:!t.canPublish,icon:"el-icon-printer",type:"medium"},on:{click:t.publish}},[t._v("发布结果")]),n("el-button",{staticClass:"action-btn",attrs:{disabled:t.afterEnd||0==t.tableData.length,icon:"el-icon-upload2",type:"medium"},on:{click:t.uploadTarget}},[t._v(t._s(t.constants.UPLOAD_TARGET))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:0===t.selection.length,icon:"el-icon-download",type:"medium"},on:{click:t.exportData}},[t._v(t._s(t.constants.EXPORT_DETAILS))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:!t.canReminder||t.afterEnd,icon:"el-icon-bell",type:"medium"},on:{click:t.reminder}},[t._v(t._s(t.constants.REMINDER))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:t.afterEnd,icon:"el-icon-plus",type:"medium"},on:{click:function(e){t.infoType="add",t.dialogInfo=!0,t.currentInfo={}}}},[t._v(t._s(t.constants.ADD))]),n("el-button",{staticClass:"action-btn",attrs:{disabled:0===t.selection.length||t.afterEnd,icon:"el-icon-delete",type:"medium"},on:{click:t.batchDel}},[t._v(t._s(t.constants.BATCH_DEL))])],1)]),n("el-form",{ref:"filter-form",staticClass:"filter-form",attrs:{inline:!0,model:t.formFilter}},[n("el-form-item",{attrs:{prop:"number"}},[n("el-input",{attrs:{placeholder:t.constants.NUMBER},model:{value:t.formFilter.number,callback:function(e){t.$set(t.formFilter,"number",e)},expression:"formFilter.number"}})],1),n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:t.constants.NAME},model:{value:t.formFilter.name,callback:function(e){t.$set(t.formFilter,"name",e)},expression:"formFilter.name"}})],1),n("el-form-item",{attrs:{prop:"leaderNum"}},[n("el-input",{attrs:{placeholder:t.constants.LEADER_NUMBER},model:{value:t.formFilter.leaderNum,callback:function(e){t.$set(t.formFilter,"leaderNum",e)},expression:"formFilter.leaderNum"}})],1),n("el-form-item",{attrs:{prop:"leaderName"}},[n("el-input",{attrs:{placeholder:t.constants.LEADER_NAME},model:{value:t.formFilter.leaderName,callback:function(e){t.$set(t.formFilter,"leaderName",e)},expression:"formFilter.leaderName"}})],1),n("el-form-item",{attrs:{prop:"targetStatus"}},[n("el-select",{attrs:{placeholder:"阶段"},model:{value:t.formFilter.targetStatus,callback:function(e){t.$set(t.formFilter,"targetStatus",e)},expression:"formFilter.targetStatus"}},t._l(t.constants.ENUM_PERFORMANCE_FINISH,function(t){return n("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}),1)],1),n("el-form-item",[n("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:function(e){return t.resetFilter("filter-form")}}},[t._v(t._s(t.constants.RESET))])],1)],1),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{height:"400",data:t.tableData,stripe:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{fixed:"left",type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"workcode",label:t.constants.NUMBER,width:"80"}}),n("el-table-column",{attrs:{prop:"name",label:t.constants.NAME,width:"100"}}),n("el-table-column",{attrs:{prop:"department",label:t.constants.BASE_OR_BU,width:"100"}}),n("el-table-column",{attrs:{prop:"syb_department",label:t.constants.DEP_OR_SUB,width:"200"}}),n("el-table-column",{attrs:{prop:"email",label:t.constants.EMAIL,width:"180"}}),n("el-table-column",{attrs:{prop:"superior_workcode",label:t.constants.LEADER_NUMBER}}),n("el-table-column",{attrs:{prop:"superior_name",label:t.constants.LEADER_NAME}}),n("el-table-column",{attrs:{prop:"syb_department",label:"上级事业部"}}),n("el-table-column",{attrs:{prop:"superior_email",label:"上级邮箱"}}),n("el-table-column",{attrs:{prop:"target",label:t.constants.TARGET_STATUS}}),n("el-table-column",{attrs:{prop:"self",label:t.constants.SELF_EVALUATION_STATUS}}),n("el-table-column",{attrs:{prop:"superior",label:t.constants.LEADER_EVALUATION_STATUS}}),n("el-table-column",{attrs:{prop:"confirm",label:"员工确认"}}),n("el-table-column",{attrs:{fixed:"right",label:t.constants.OPERATIONS,width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{disabled:t.afterEnd,type:"text",size:"small"},on:{click:function(n){return t.modifyInfo(e.row)}}},[t._v(t._s(t.constants.MODIFY))]),n("el-button",{attrs:{disabled:t.afterEnd,type:"text",size:"small"},on:{click:function(n){return t.delInfo(e.row)}}},[t._v(t._s(t.constants.DEL))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.$router.push(t.constants.PATH_PERFORMANCE_USER_DETAIL(t.$route.params.id,t.$route.params.orgID,e.row.id))}}},[t._v(t._s(t.constants.DETAILS))])]}}])})],1),n("br"),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),n("br")],1)]),t.dialogTarget?n("target-dialog",{attrs:{visible:t.dialogTarget},on:{close:function(e){t.dialogTarget=!1}}}):t._e(),t.dialogImport?n("import-dialog",{staticClass:"dialogImport",attrs:{dialogImport:t.dialogImport},on:{close:t.closeImportDia}}):t._e(),t.dialogTimes?n("time-set",{attrs:{initTime:t.initTime,visible:t.dialogTimes},on:{close:t.closeTimeSettingDia}}):t._e(),t.dialogInfo?n("info-dialog",{attrs:{currentInfo:t.currentInfo,infoType:t.infoType,dialogInfo:t.dialogInfo},on:{close:t.closeInfoDia}}):t._e()],1)},i=[],r=(n("a481"),n("7f7f"),n("cebc")),s=n("38fb"),o=n("c9f1"),l=n("372d"),c=n("fea5"),u=n("47af"),d={data:function(){return{currentPage:1,stage:10,import_status:0,total:0,currentInfo:{},dialogImport:!1,dialogTimes:!1,dialogInfo:!1,dialogTarget:!1,infoType:"add",depInfo:{},selection:[],formFilter:{number:"",name:"",leaderNum:"",leaderName:"",targetStatus:""},constants:{FINISHED_DATE:s["Bb"],ENUM_GENERIC_COMPLETE_STATUS:s["ib"],ENUM_PERFORMANCE_FINISH:s["nb"],SELF_EVALUATION_STATUS:s["Md"],LEADER_EVALUATION_STATUS:s["zc"],RESULT_CONFIRM:s["Fd"],ENUM_WAIT_CONFIRM:s["rb"],SELECTION_TIPS:s["Kd"],RESET:s["Ed"],OPERATIONS:s["jd"],EXPORT_DETAILS:s["ub"],REMINDER:s["Cd"],ADD:s["c"],BATCH_DEL:s["m"],NUMBER:s["hd"],NAME:s["cd"],LEADER_NUMBER:s["Cc"],LEADER_NAME:s["Bc"],BASE_OR_BU:s["k"],DEP_OR_SUB:s["Q"],EMAIL:s["Z"],UP_LEVEL:s["ie"],PATH_PERFORMANCE_USER_DETAIL:o["X"],MODIFY:s["Nc"],DEL:s["M"],DETAILS:s["R"],SET_TIMES:s["Rd"],IMPORT_RECORDS:s["Pb"],WORK_LEVEL:s["le"],MODIFY_TIMES:s["Oc"],LABEL_SELF:s["sc"],LABEL_SUP:s["vc"],APPEAL:s["f"],TARGET_STATUS:s["Wd"],UPLOAD_TARGET:s["fe"]},tableData:[],nav:[{label:s["Fb"],href:o["S"]},{label:s["Hb"],href:Object(o["U"])(this.$route.params.id)},{label:s["kd"],active:!0}]}},components:{"nav-bar":function(){return n.e("chunk-7ec067ee").then(n.bind(null,"3208"))},pagination:function(){return n.e("chunk-28d9b0e5").then(n.bind(null,"486f"))},"import-dialog":Object(l["a"])(n.e("chunk-3257267a").then(n.bind(null,"9b47"))),"info-dialog":Object(l["a"])(n.e("chunk-71009ce3").then(n.bind(null,"95fe"))),"target-dialog":Object(l["a"])(n.e("chunk-1860ebd4").then(n.bind(null,"e427"))),"time-set":Object(l["a"])(n.e("chunk-693e664b").then(n.bind(null,"6574")))},methods:{publish:function(){var t=this,e={performance_id:this.$route.params.orgID};this.selection>0&&(e.performance_user_ids=this.selection.map(function(t){return t.id})),Object(c["R"])(e).then(function(n){var a="尚有".concat(n.undone_count||0,"人未完成，将发布全部结果，确认此操作?");t.$confirm(a,s["j"],{confirmButtonText:s["z"],cancelButtonText:s["u"],type:"warning"}).then(function(){Object(c["vb"])(e).then(function(e){t.selection=[],t.$message({message:"发布成功!",type:"success"}),t.refreshList(t.getCurrentPostData())}).catch(function(t){})}).catch(function(){})})},resetFilter:function(t){this.$refs[t].resetFields()},uploadTarget:function(){this.dialogTarget=!0},exportData:function(){var t=Object(o["u"])(this.$route.params.id,this.selection.map(function(t){return t.id}));window.open(t,"_blank","noopener")},batchDel:function(){var t=this;this.$confirm("确定删除这些用户?",s["j"],{confirmButtonText:s["z"],cancelButtonText:s["u"],type:"warning",center:!0}).then(function(){Object(c["e"])(t.$route.params.orgID,{performance_user_ids:t.selection.map(function(t){return t.id})}).then(function(e){t.$message({type:"success",message:s["C"]}),t.refreshList(t.getCurrentPostData())})}).catch(function(){})},handleSelectionChange:function(t){this.selection=t},handleCurrentChange:function(t){this.currentPage=t;var e=Object(r["a"])({},this.getCurrentPostData(),{page:t});this.refreshList(e)},closeImportDia:function(){this.dialogImport=!1,this.refreshList(this.getCurrentPostData())},closeTimeSettingDia:function(){this.dialogTimes=!1,this.refreshList(this.getCurrentPostData())},closeInfoDia:function(){this.dialogInfo=!1,this.refreshList(this.getCurrentPostData())},reminder:function(){var t=this,e="是否要发出提醒?";0==this.selection.length&&(e="是否提醒全部?"),this.$confirm(e,s["j"],{confirmButtonText:s["z"],cancelButtonText:s["u"],type:"warning",center:!0}).then(function(){var e={};e.performance_id=t.$route.params.orgID,0!=t.selection.length&&(e.performance_user_ids=t.selection.map(function(t){return t.id})),Object(c["sb"])(e).then(function(e){t.$message({type:"success",message:"提醒成功!"})}).catch(function(t){})}).catch(function(){})},delInfo:function(t){var e=this;this.$confirm(s["yc"],s["j"],{confirmButtonText:s["z"],cancelButtonText:s["u"],type:"warning",center:!0}).then(function(){Object(c["e"])(e.$route.params.orgID,{performance_user_ids:[t.id]}).then(function(t){e.$message({type:"success",message:s["C"]}),e.refreshList(e.getCurrentPostData())}).catch(function(t){})}).catch(function(){})},modifyInfo:function(t){this.infoType="modify",this.currentInfo=t,this.dialogInfo=!0},refreshList:function(t){var e=this;return Object(c["P"])(this.$route.params.orgID,t).then(function(t){var n=t.data,a=t.total,i=t.performance_info;e.tableData=n,e.total=a,e.depInfo=i}).catch(function(t){})},getCurrentPostData:function(){return{page:this.currentPage,workcode:this.formFilter.number,name:this.formFilter.name,superior_workcode:this.formFilter.leaderNum,superior_name:this.formFilter.leaderName,stage:this.formFilter.targetStatus}}},watch:{formFilter:{handler:function(t){var e={page:1,workcode:t.number,name:t.name,superior_workcode:t.leaderNum,superior_name:t.leaderName,stage:t.targetStatus};this.currentPage=1,this.refreshList(e)},deep:!0,immediate:!0}},computed:{hasSchedule:function(){return this.depInfo.start_time&&this.depInfo.end_time},isImported:function(){return!!this.depInfo.user_status},initTime:function(){return{startTime:this.depInfo.start_time,endTime:this.depInfo.end_time,targetStartTime:this.depInfo.target_start_time,targetEndTime:this.depInfo.target_end_time,finalEnd:this.depInfo.performance_name_end_time}},step:function(){return 4},canReminder:function(){return this.isImported&&this.isStarted},isStarted:function(){return this.initTime.targetStartTime&&Object(u["a"])(new Date(this.initTime.targetStartTime.replace(/-/gi,"/")))<=Object(u["a"])(new Date)},afterEnd:function(){return this.initTime.endTime&&Object(u["a"])(new Date(this.initTime.endTime.replace(/-/gi,"/")))<=Object(u["a"])(new Date)},canPublish:function(){return this.initTime.startTime&&Object(u["a"])(new Date(this.initTime.startTime.replace(/-/gi,"/")))<=Object(u["a"])(new Date)}}},m=d,f=(n("8220"),n("2877")),p=Object(f["a"])(m,a,i,!1,null,"bd8b7de0",null);e["default"]=p.exports},"1f90":function(t,e,n){},"372d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},i=[],r={},s=r,o=(n("ee47"),n("2877")),l=Object(o["a"])(s,a,i,!1,null,"6c517b7e",null),c=l.exports;n.d(e,"a",function(){return u});var u=function(t){return function(){return{component:t,loading:c,delay:0}}}},"47af":function(t,e,n){"use strict";n.d(e,"a",function(){return a});n("6b54");var a=function(t){var e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),r=t.getHours(),s=t.getMinutes();t.getSeconds();return[e,n,a].map(i).join("-")+" "+[r,s].map(i).join(":")},i=function(t){return t=t.toString(),t[1]?t:"0"+t}},8220:function(t,e,n){"use strict";var a=n("1f90"),i=n.n(a);i.a},"9f9e":function(t,e,n){},ee47:function(t,e,n){"use strict";var a=n("9f9e"),i=n.n(a);i.a}}]);