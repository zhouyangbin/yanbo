(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43c64c17","chunk-944cd112"],{"0399":function(t,e,s){t.exports=s.p+"img/target_affirmed.d47d606d.png"},"060b":function(t,e,s){"use strict";var a=s("aa04"),n=s.n(a);n.a},"372d":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},n=[],o={},i=o,l=(s("ee47"),s("2877")),r=Object(l["a"])(i,a,n,!1,null,"6c517b7e",null),c=r.exports;s.d(e,"a",function(){return u});var u=function(t){return function(){return{component:t,loading:c,delay:0}}}},"3ef5":function(t,e,s){t.exports=s.p+"img/target_affirming.5a00a23f.png"},5007:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-header"},[s("div",{staticClass:"header-title"},[t._v(t._s(t.userInfo.performance_name))]),s("img",{staticClass:"stage-img",attrs:{src:t.stageImg(t.userInfo.stage),alt:""}}),s("el-row",{staticClass:"flex"},[s("el-row",{staticClass:"grow"},[t.userInfo.opinion?s("el-row",{staticClass:"superior-idea flex"},[s("el-col",{staticStyle:{width:"80px"}},[t._v(t._s(t.constants.SUPERIOR_OPINION)+"：")]),s("el-col",{staticClass:"idea-detail"},[t._v(t._s(t.userInfo.opinion))])],1):t._e(),s("el-row",{staticClass:"user-info flex"},[t.userInfo.avatar?s("img",{staticClass:"img",attrs:{src:t.userInfo.avatar,alt:""}}):s("div",{staticClass:"img avatar-name"},[t._v("\n          "+t._s(t._f("filterName")(t.userInfo.name))+"\n        ")]),s("el-col",[s("el-row",{staticClass:"user-name"},[s("span",[t._v(t._s(t.userInfo.name))]),s("el-divider",{attrs:{direction:"vertical"}}),s("span",[t._v(t._s(t.userInfo.workcode))])],1),s("el-row",{staticClass:"flex"},[s("el-col",{staticClass:"super"},[s("el-row",{staticClass:"other-info-title"},[t._v(t._s(t.constants.IMMEDIATE_SUPERIOR))]),s("el-row",[t._v(t._s(t.userInfo.superior_name)+"("+t._s(t.userInfo.superior_workcode)+")")])],1),s("el-col",{staticClass:"department"},[s("el-row",{staticClass:"other-info-title"},[t._v(t._s(t.constants.LABEL_DEPARTMENT))]),s("el-row",[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.userInfo.department_name,placement:"top"}},[s("div",{staticClass:"text-over"},[t._v(t._s(t.userInfo.department_name))])])],1)],1),s("el-col",{staticClass:"cycle"},[s("el-row",{staticClass:"other-info-title"},[t._v(t._s(t.constants.ASSESS_CYCLE))]),s("el-row",[t._v(t._s(t.userInfo.cycle))])],1),s("el-col",{staticClass:"deadline"},[s("el-row",{staticClass:"other-info-title"},[t._v(t._s(t.constants.SET_TARGET_DEADLINE))]),s("el-row",[t._v(t._s(t.userInfo.indicator_setting_end_time))])],1)],1),s("el-row",{staticClass:"tip-info"},[t._v(t._s(t.constants.ERROR_MESSAGE_CONTACT_USER))])],1)],1)],1),0!==t.userInfo.stage&&20!==t.userInfo.stage||!t.isShowUpload?t._e():s("el-row",{staticClass:"upload-target"},[s("el-button",{staticClass:"btn",attrs:{icon:"el-icon-upload2"},on:{click:t.uploadTarget}},[t._v(t._s(t.constants.SENIOR_UPLOAD_TARGET))])],1)],1),t.isUpload?s("common-upload",{attrs:{visible:t.isUpload,uploadTitle:t.uploadTitle,uploadActionUrl:t.uploadActionUrl,downloadUrl:t.downloadUrl},on:{close:t.closeUploadDialog,update:t.confirmUpload}}):t._e()],1)},n=[],o=s("38fb"),i=s("372d"),l=s("c9f1"),r={props:{userInfo:{type:Object,default:function(){return{}}},isShowUpload:{type:Boolean,default:!1}},data:function(){return{constants:{SUPERIOR_OPINION:o["Pe"],IMMEDIATE_SUPERIOR:o["nc"],LABEL_DEPARTMENT:o["Ac"],ASSESS_CYCLE:o["m"],SET_TARGET_DEADLINE:o["Ie"],ERROR_MESSAGE_CONTACT_USER:o["Ib"],SENIOR_UPLOAD_TARGET:o["Ge"],PATH_EXECUTIVE_UPLOAD_TARGET:l["E"],PATH_EXECUTIVE_IMPORT_TARGET:l["x"]},isUpload:!1,uploadActionUrl:"",downloadUrl:"",uploadTitle:"",performanceId:this.$route.params.id,userId:this.$route.params.uid}},filters:{filterName:function(t){var e=t.substr(t.length-2,2);return e}},components:{"common-upload":Object(i["a"])(s.e("chunk-1ff9eaa0").then(s.bind(null,"60b7")))},methods:{stageImg:function(t){var e="";switch(t){case 0:e=s("da32");break;case 10:e=s("3ef5");break;case 20:e=s("0399");break;default:e="";break}return e},uploadTarget:function(){this.isUpload=!0,this.uploadTitle="指标"},closeUploadDialog:function(){this.isUpload=!1},confirmUpload:function(t){this.isUpload=!1,this.$emit("update",t)}},created:function(){this.uploadActionUrl=this.constants.PATH_EXECUTIVE_UPLOAD_TARGET(this.userId),this.downloadUrl=this.constants.PATH_EXECUTIVE_IMPORT_TARGET(this.performanceId,parseInt(this.userId))}},c=r,u=(s("629b"),s("060b"),s("2877")),d=Object(u["a"])(c,a,n,!1,null,"4a882b06",null);e["default"]=d.exports},"629b":function(t,e,s){"use strict";var a=s("cb88"),n=s.n(a);n.a},"9f9e":function(t,e,s){},aa04:function(t,e,s){},cb88:function(t,e,s){},da32:function(t,e,s){t.exports=s.p+"img/target_writing.7ec299b7.png"},ee47:function(t,e,s){"use strict";var a=s("9f9e"),n=s.n(a);n.a}}]);