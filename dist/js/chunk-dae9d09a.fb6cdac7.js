(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dae9d09a"],{"0399":function(t,s,e){t.exports=e.p+"img/target_affirmed.d47d606d.png"},"3ef5":function(t,s,e){t.exports=e.p+"img/target_affirming.5a00a23f.png"},5203:function(t,s,e){},"7f2c":function(t,s,e){"use strict";var a=e("86f4"),o=e.n(a);o.a},"86f4":function(t,s,e){},da32:function(t,s,e){t.exports=e.p+"img/target_writing.7ec299b7.png"},e48a:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"index-header"},[e("div",{staticClass:"header-title"},[t._v(t._s(t.userInfo.performance_name))]),e("img",{staticClass:"stage-img",attrs:{src:t.stageImg(t.userInfo.stage),alt:""}}),e("el-row",{staticClass:"flex"},[e("el-row",{staticClass:"grow"},[t.userInfo.opinion?e("el-row",{staticClass:"superior-idea flex"},[e("el-col",{staticStyle:{width:"80px"}},[t._v(t._s(t.constants.SUPERIOR_OPINION)+"：")]),e("el-col",[t._v(t._s(t.userInfo.opinion))])],1):t._e(),e("el-row",{staticClass:"user-info flex"},[t.userInfo.avatar?e("img",{staticClass:"img",attrs:{src:t.userInfo.avatar,alt:""}}):e("div",{staticClass:"img avatar-name"},[t._v("\n          "+t._s(t._f("filterName")(t.userInfo.name))+"\n        ")]),e("el-col",[e("el-row",{staticClass:"user-name"},[e("span",[t._v(t._s(t.userInfo.name))]),e("el-divider",{attrs:{direction:"vertical"}}),e("span",[t._v(t._s(t.userInfo.workcode))])],1),e("el-row",{staticClass:"flex"},[e("el-col",{staticClass:"super"},[e("el-row",{staticClass:"other-info-title"},[t._v(t._s(t.constants.IMMEDIATE_SUPERIOR))]),e("el-row",[t._v(t._s(t.userInfo.superior_name)+"("+t._s(t.userInfo.superior_workcode)+")")])],1),e("el-col",{staticClass:"department"},[e("el-row",{staticClass:"other-info-title"},[t._v(t._s(t.constants.LABEL_DEPARTMENT))]),e("el-row",[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.userInfo.department_name,placement:"top"}},[e("div",{staticClass:"text-over"},[t._v(t._s(t.userInfo.department_name))])])],1)],1),e("el-col",{staticClass:"cycle"},[e("el-row",{staticClass:"other-info-title"},[t._v(t._s(t.constants.ASSESS_CYCLE))]),e("el-row",[t._v(t._s(t.userInfo.cycle))])],1),e("el-col",{staticClass:"deadline"},[e("el-row",{staticClass:"other-info-title"},[t._v(t._s(t.constants.SET_TARGET_DEADLINE))]),e("el-row",[t._v(t._s(t.userInfo.indicator_setting_end_time))])],1)],1),e("el-row",{staticClass:"tip-info"},[t._v(t._s(t.constants.ERROR_MESSAGE_CONTACT_USER))])],1)],1)],1),0!==t.userInfo.stage&&20!==t.userInfo.stage||!t.isShowUpload?t._e():e("el-row",{staticClass:"upload-target"},[e("el-button",{staticClass:"btn",attrs:{icon:"el-icon-upload2"},on:{click:t.uploadTarget}},[t._v(t._s(t.constants.SENIOR_UPLOAD_TARGET))])],1)],1),t.isUpload?e("common-upload",{attrs:{visible:t.isUpload,uploadTitle:t.uploadTitle,uploadActionUrl:t.uploadActionUrl,downloadUrl:t.downloadUrl},on:{close:t.closeUploadDialog,update:t.confirmUpload}}):t._e()],1)},o=[],n=e("38fb"),i=e("372d"),l=e("c9f1"),r={props:{userInfo:{type:Object,default:function(){return{}}},isShowUpload:{type:Boolean,default:!1}},data:function(){return{constants:{SUPERIOR_OPINION:n["Pe"],IMMEDIATE_SUPERIOR:n["nc"],LABEL_DEPARTMENT:n["Ac"],ASSESS_CYCLE:n["m"],SET_TARGET_DEADLINE:n["He"],ERROR_MESSAGE_CONTACT_USER:n["Ib"],SENIOR_UPLOAD_TARGET:n["Fe"],PATH_EXECUTIVE_UPLOAD_TARGET:l["A"],PATH_EXECUTIVE_IMPORT_TARGET:l["t"]},isUpload:!1,uploadActionUrl:"",downloadUrl:"",uploadTitle:"",performanceId:this.$route.params.id,userId:this.$route.params.uid}},filters:{filterName:function(t){var s=t.substr(t.length-2,2);return s}},components:{"common-upload":Object(i["a"])(e.e("chunk-c0d9bece").then(e.bind(null,"60b7")))},methods:{stageImg:function(t){var s="";switch(t){case 0:s=e("da32");break;case 10:s=e("3ef5");break;case 20:s=e("0399");break;default:s="";break}return s},uploadTarget:function(){this.isUpload=!0,this.uploadTitle="工作目标"},closeUploadDialog:function(){this.isUpload=!1},confirmUpload:function(){this.isUpload=!1,this.$emit("update")}},created:function(){this.uploadActionUrl=this.constants.PATH_EXECUTIVE_UPLOAD_TARGET(this.userId),this.downloadUrl=this.constants.PATH_EXECUTIVE_IMPORT_TARGET(this.performanceId,parseInt(this.userId))}},c=r,d=(e("ea95"),e("7f2c"),e("2877")),_=Object(d["a"])(c,a,o,!1,null,"ad648de2",null);s["default"]=_.exports},ea95:function(t,s,e){"use strict";var a=e("5203"),o=e.n(a);o.a}}]);