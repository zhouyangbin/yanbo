(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22bec2fd"],{"124b":function(e,t,o){"use strict";var l=o("f04e"),n=o.n(l);n.a},"1dc4":function(e,t,o){},"248c":function(e,t,o){"use strict";var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"section-title"},[e._v("上级信息:")]),o("el-form-item",{attrs:{prop:"leaderNum"}},[o("el-input",{attrs:{disabled:!e.canBeEdit,size:"small",placeholder:e.constants.LEADER_NUMBER},on:{input:e.searchLeader},model:{value:e.infoForm.leaderNum,callback:function(t){e.$set(e.infoForm,"leaderNum",t)},expression:"infoForm.leaderNum"}})],1),o("el-form-item",{attrs:{prop:"leaderName"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.LEADER_NAME},model:{value:e.infoForm.leaderName,callback:function(t){e.$set(e.infoForm,"leaderName",t)},expression:"infoForm.leaderName"}})],1),o("el-form-item",{attrs:{prop:"leaderBU"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.UP_LEVEL+e.constants.BASE_OR_BU},model:{value:e.infoForm.leaderBU,callback:function(t){e.$set(e.infoForm,"leaderBU",t)},expression:"infoForm.leaderBU"}})],1),o("el-form-item",{attrs:{prop:"leaderEmail"}},[o("el-input",{attrs:{size:"small",placeholder:e.constants.UP_LEVEL+e.constants.EMAIL},model:{value:e.infoForm.leaderEmail,callback:function(t){e.$set(e.infoForm,"leaderEmail",t)},expression:"infoForm.leaderEmail"}})],1)],1)},n=[],i=(o("7f7f"),o("38fb")),r=o("fea5"),a={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"},canEdit:{type:Boolean,default:!0}},data:function(){return{constants:{LEADER_NUMBER:i["Lc"],LEADER_NAME:i["Kc"],BASE_OR_BU:i["l"],UP_LEVEL:i["Ce"],EMAIL:i["eb"]}}},methods:{searchLeader:function(e){var t=this;""!=e&&e.length>=6?Object(r["mb"])({empID:e}).then(function(e){e?(t.infoForm.leaderName=e.name,t.infoForm.leaderBU=e.department,t.infoForm.leaderEmail=e.email):(t.infoForm.leaderName="",t.infoForm.leaderBU="",t.infoForm.leaderEmail="")}).catch(function(e){}):(this.infoForm.leaderName="",this.infoForm.leaderBU="",this.infoForm.leaderEmail="")}},computed:{canBeEdit:function(){return"modify"!=this.infoType||this.canEdit}}},s=a,m=(o("e24b"),o("2877")),u=Object(m["a"])(s,l,n,!1,null,"1d116342",null);t["a"]=u.exports},"3dd8":function(e,t,o){"use strict";var l=o("4d5e"),n=o.n(l);n.a},"4d5e":function(e,t,o){},"7fbe":function(e,t,o){"use strict";var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"section-title"},[e._v("员工信息:")]),o("el-form-item",{attrs:{prop:"num"}},[o("el-input",{attrs:{disabled:"add"!==e.infoType,size:"small",placeholder:e.constants.NUMBER},on:{input:e.searchME},model:{value:e.infoForm.num,callback:function(t){e.$set(e.infoForm,"num",t)},expression:"infoForm.num"}})],1),o("el-form-item",{attrs:{prop:"name"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.NAME},model:{value:e.infoForm.name,callback:function(t){e.$set(e.infoForm,"name",t)},expression:"infoForm.name"}})],1),o("el-form-item",{attrs:{prop:"BU"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.BASE_OR_BU},model:{value:e.infoForm.BU,callback:function(t){e.$set(e.infoForm,"BU",t)},expression:"infoForm.BU"}})],1),o("el-form-item",{attrs:{prop:"dep"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.DEP_OR_SUB},model:{value:e.infoForm.dep,callback:function(t){e.$set(e.infoForm,"dep",t)},expression:"infoForm.dep"}})],1),o("el-form-item",{attrs:{prop:"level"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.WORK_LEVEL},model:{value:e.infoForm.level,callback:function(t){e.$set(e.infoForm,"level",t)},expression:"infoForm.level"}})],1),o("el-form-item",{attrs:{prop:"email"}},[o("el-input",{attrs:{size:"small",placeholder:e.constants.EMAIL},model:{value:e.infoForm.email,callback:function(t){e.$set(e.infoForm,"email",t)},expression:"infoForm.email"}})],1)],1)},n=[],i=(o("7f7f"),o("38fb")),r=o("fea5"),a={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"}},data:function(){return{constants:{NUMBER:i["sd"],NAME:i["md"],BASE_OR_BU:i["l"],DEP_OR_SUB:i["V"],WORK_LEVEL:i["Fe"],EMAIL:i["eb"]}}},methods:{searchME:function(e){var t=this;""!=e&&e.length>=6?Object(r["mb"])({empID:e}).then(function(e){e?(t.infoForm.name=e.name,t.infoForm.BU=e.department,t.infoForm.dep=e.first_department,t.infoForm.level=e.level,t.infoForm.email=e.email):(t.infoForm.name="",t.infoForm.BU="",t.infoForm.dep="",t.infoForm.level="",t.infoForm.email="")}).catch(function(e){}):(this.infoForm.name="",this.infoForm.BU="",this.infoForm.dep="",this.infoForm.level="",this.infoForm.email="")}}},s=a,m=(o("124b"),o("2877")),u=Object(m["a"])(s,l,n,!1,null,"5c6390f7",null);t["a"]=u.exports},"95fe":function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"dialogInfo",attrs:{width:"650px","close-on-click-modal":!1,visible:e.dialogInfo},on:{close:e.close}},[o("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?e.constants.ADD:e.constants.MODIFY)+"\n  ")]),o("el-form",{ref:"infoForm",staticClass:"infoForm",attrs:{inline:!0,rules:e.infoRules,model:e.infoForm}},[o("emp-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}}),o("leader-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}}),o("plusuplevel-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}})],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-row",{attrs:{type:"flex",justify:"center"}},[o("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:function(t){return e.infoSubmit("infoForm")}}},[e._v(e._s(e.constants.CONFIRM))]),o("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},n=[],i=(o("7f7f"),o("38fb")),r=o("fea5"),a=o("7fbe"),s=o("248c"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"section-title"},[e._v("隔级信息:")]),o("el-form-item",{attrs:{prop:"plusuplevelNum"}},[o("el-input",{attrs:{disabled:!e.canBeEdit,size:"small",placeholder:e.constants.PLUS_LEADER_NUMBER},on:{input:e.searchLeader},model:{value:e.infoForm.plusuplevelNum,callback:function(t){e.$set(e.infoForm,"plusuplevelNum",t)},expression:"infoForm.plusuplevelNum"}})],1),o("el-form-item",{attrs:{prop:"plusuplevelName"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.PLUS_LEADER_NAME},model:{value:e.infoForm.plusuplevelName,callback:function(t){e.$set(e.infoForm,"plusuplevelName",t)},expression:"infoForm.plusuplevelName"}})],1),o("el-form-item",{attrs:{prop:"plusuplevelBU"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.PLUS_UP_LEVEL+e.constants.BASE_OR_BU},model:{value:e.infoForm.plusuplevelBU,callback:function(t){e.$set(e.infoForm,"plusuplevelBU",t)},expression:"infoForm.plusuplevelBU"}})],1),o("el-form-item",{attrs:{prop:"plusuplevelEmail"}},[o("el-input",{attrs:{size:"small",placeholder:e.constants.PLUS_UP_LEVEL+e.constants.EMAIL},model:{value:e.infoForm.plusuplevelEmail,callback:function(t){e.$set(e.infoForm,"plusuplevelEmail",t)},expression:"infoForm.plusuplevelEmail"}})],1)],1)},u=[],f={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"},canEdit:{type:Boolean,default:!0}},data:function(){return{constants:{PLUS_LEADER_NUMBER:i["Ld"],PLUS_LEADER_NAME:i["Kd"],BASE_OR_BU:i["l"],PLUS_UP_LEVEL:i["Nd"],EMAIL:i["eb"]}}},methods:{searchLeader:function(e){var t=this;""!=e&&e.length>=6?Object(r["mb"])({empID:e}).then(function(e){e?(t.infoForm.plusuplevelName=e.name,t.infoForm.plusuplevelBU=e.department_name||e.department,t.infoForm.plusuplevelEmail=e.email):(t.infoForm.plusuplevelName="",t.infoForm.plusuplevelBU="",t.infoForm.plusuplevelEmail="")}).catch(function(e){}):(this.infoForm.plusuplevelName="",this.infoForm.plusuplevelBU="",this.infoForm.plusuplevelEmail="")}},computed:{canBeEdit:function(){return"modify"!=this.infoType||this.canEdit}}},c=f,p=(o("3dd8"),o("2877")),d=Object(p["a"])(c,m,u,!1,null,"ecfcfcd8",null),h=d.exports,F={props:{dialogInfo:{type:Boolean,default:!1},infoType:{type:String,default:"add"},currentInfo:{type:Object,default:function(){return{}}}},data:function(){return{constants:{ADD:i["c"],MODIFY:i["Xc"],CONFIRM:i["C"],CANCEL:i["x"]},infoRules:{num:{type:"string",required:!0,message:i["td"],trigger:"change"},email:[{type:"email",message:i["fb"],trigger:["blur","change"]}],leaderNum:[{type:"string",required:!0,message:i["Mc"],trigger:"change"}],leaderEmail:[{type:"email",message:i["fb"],trigger:["blur","change"]}],plusuplevelNum:[{type:"string",required:!0,message:i["Od"],trigger:"change"}],plusuplevelEmail:[{type:"email",message:i["fb"],trigger:["blur","change"]}]},infoForm:{num:"",name:"",BU:"",dep:"",level:"",email:"",leaderNum:"",leaderName:"",leaderBU:"",leaderEmail:"",plusuplevelNum:"",plusuplevelName:"",plusuplevelBU:"",plusuplevelEmail:""}}},created:function(){this.infoForm.num=this.currentInfo.workcode,this.infoForm.name=this.currentInfo.name,this.infoForm.BU=this.currentInfo.department,this.infoForm.dep=this.currentInfo.syb_department,this.infoForm.level=this.currentInfo.level,this.infoForm.email=this.currentInfo.email,this.infoForm.leaderNum=this.currentInfo.superior_workcode,this.infoForm.leaderName=this.currentInfo.superior_name,this.infoForm.leaderBU=this.currentInfo.superior_syb,this.infoForm.leaderEmail=this.currentInfo.superior_email,this.infoForm.plusuplevelNum=this.currentInfo.high_level_workcode,this.infoForm.plusuplevelName=this.currentInfo.high_level_name,this.infoForm.plusuplevelBU=this.currentInfo.high_level_syb,this.infoForm.plusuplevelEmail=this.currentInfo.high_level_email},methods:{resetFilter:function(e){this.$refs[e].resetFields()},close:function(){this.$emit("close")},infoSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(e){if("add"===t.infoType){var o=t.infoForm,l=o.num,n=o.email,i=o.leaderNum,a=o.leaderEmail,s=o.plusuplevelNum,m=o.plusuplevelEmail,u={workcode:l,email:n,superior_workcode:i,superior_email:a,high_level_workcode:s,high_level_email:m};return Object(r["Ob"])(t.$route.params.orgID,u).then(function(e){t.close()}).catch(function(e){})}var f=t.infoForm,c=f.email,p=f.leaderNum,d=f.leaderEmail,h=f.plusuplevelNum,F=f.plusuplevelEmail;return Object(r["wb"])(t.$route.params.orgID,t.currentInfo.id,{email:c,superior_workcode:p,superior_email:d,high_level_workcode:h,high_level_email:F}).then(function(e){t.close()}).catch(function(e){})}return!1})}},beforeDestroy:function(){this.resetFilter("infoForm")},components:{"emp-info":a["a"],"leader-info":s["a"],"plusuplevel-info":h}},v=F,E=(o("b9a0"),Object(p["a"])(v,l,n,!1,null,"857c3146",null));t["default"]=E.exports},"99f7":function(e,t,o){},b9a0:function(e,t,o){"use strict";var l=o("99f7"),n=o.n(l);n.a},e24b:function(e,t,o){"use strict";var l=o("1dc4"),n=o.n(l);n.a},f04e:function(e,t,o){}}]);