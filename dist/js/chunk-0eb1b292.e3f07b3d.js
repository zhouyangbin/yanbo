(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eb1b292"],{"0224":function(e,o,t){},"248c":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"section-title"},[e._v("上级信息:")]),t("el-form-item",{attrs:{prop:"leaderNum"}},[t("el-input",{attrs:{disabled:!e.canBeEdit,size:"small",placeholder:e.constants.LEADER_NUMBER},on:{input:e.searchLeader},model:{value:e.infoForm.leaderNum,callback:function(o){e.$set(e.infoForm,"leaderNum",o)},expression:"infoForm.leaderNum"}})],1),t("el-form-item",{attrs:{prop:"leaderName"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.LEADER_NAME},model:{value:e.infoForm.leaderName,callback:function(o){e.$set(e.infoForm,"leaderName",o)},expression:"infoForm.leaderName"}})],1),t("el-form-item",{attrs:{prop:"leaderBU"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.UP_LEVEL+e.constants.BASE_OR_BU},model:{value:e.infoForm.leaderBU,callback:function(o){e.$set(e.infoForm,"leaderBU",o)},expression:"infoForm.leaderBU"}})],1),t("el-form-item",{attrs:{prop:"leaderEmail"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.UP_LEVEL+e.constants.EMAIL},model:{value:e.infoForm.leaderEmail,callback:function(o){e.$set(e.infoForm,"leaderEmail",o)},expression:"infoForm.leaderEmail"}})],1)],1)},i=[],r=t("38fb"),a=t("fea5"),l={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"},canEdit:{type:Boolean,default:!0}},data:function(){return{constants:{LEADER_NUMBER:r["pc"],LEADER_NAME:r["oc"],BASE_OR_BU:r["h"],UP_LEVEL:r["Jd"],EMAIL:r["O"]}}},methods:{searchLeader:function(e){var o=this;""!=e?Object(a["S"])({empID:e}).then(function(e){e?(o.infoForm.leaderName=e.name,o.infoForm.leaderBU=e.department,o.infoForm.leaderEmail=e.email):(o.infoForm.leaderName="",o.infoForm.leaderBU="",o.infoForm.leaderEmail="")}).catch(function(e){}):(this.infoForm.leaderName="",this.infoForm.leaderBU="",this.infoForm.leaderEmail="")}},computed:{canBeEdit:function(){return"modify"!=this.infoType||this.canEdit}}},s=l,m=(t("d338"),t("2877")),f=Object(m["a"])(s,n,i,!1,null,"d77455ca",null);f.options.__file="index.vue";o["a"]=f.exports},"7fbe":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"section-title"},[e._v("员工信息:")]),t("el-form-item",{attrs:{prop:"num"}},[t("el-input",{attrs:{disabled:"add"!==e.infoType,size:"small",placeholder:e.constants.NUMBER},on:{input:e.searchME},model:{value:e.infoForm.num,callback:function(o){e.$set(e.infoForm,"num",o)},expression:"infoForm.num"}})],1),t("el-form-item",{attrs:{prop:"name"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.NAME},model:{value:e.infoForm.name,callback:function(o){e.$set(e.infoForm,"name",o)},expression:"infoForm.name"}})],1),t("el-form-item",{attrs:{prop:"BU"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.BASE_OR_BU},model:{value:e.infoForm.BU,callback:function(o){e.$set(e.infoForm,"BU",o)},expression:"infoForm.BU"}})],1),t("el-form-item",{attrs:{prop:"dep"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.DEP_OR_SUB},model:{value:e.infoForm.dep,callback:function(o){e.$set(e.infoForm,"dep",o)},expression:"infoForm.dep"}})],1),t("el-form-item",{attrs:{prop:"level"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.WORK_LEVEL},model:{value:e.infoForm.level,callback:function(o){e.$set(e.infoForm,"level",o)},expression:"infoForm.level"}})],1),t("el-form-item",{attrs:{prop:"email"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.EMAIL},model:{value:e.infoForm.email,callback:function(o){e.$set(e.infoForm,"email",o)},expression:"infoForm.email"}})],1)],1)},i=[],r=t("38fb"),a=t("fea5"),l={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"}},data:function(){return{constants:{NUMBER:r["Qc"],NAME:r["Lc"],BASE_OR_BU:r["h"],DEP_OR_SUB:r["G"],WORK_LEVEL:r["Ld"],EMAIL:r["O"]}}},methods:{searchME:function(e){var o=this;""!=e?Object(a["S"])({empID:e}).then(function(e){e?(o.infoForm.name=e.name,o.infoForm.BU=e.department,o.infoForm.dep=e.first_department,o.infoForm.level=e.level,o.infoForm.email=e.email):(o.infoForm.name="",o.infoForm.BU="",o.infoForm.dep="",o.infoForm.level="",o.infoForm.email="")}).catch(function(e){}):(this.infoForm.name="",this.infoForm.BU="",this.infoForm.dep="",this.infoForm.level="",this.infoForm.email="")}}},s=l,m=(t("9d8d"),t("2877")),f=Object(m["a"])(s,n,i,!1,null,"336dd654",null);f.options.__file="index.vue";o["a"]=f.exports},"93f5":function(e,o,t){},"95fe":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-dialog",{staticClass:"dialogInfo",attrs:{width:"650px",visible:e.dialogInfo},on:{close:e.close}},[t("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?e.constants.ADD:e.constants.MODIFY)+"\n  ")]),t("el-form",{ref:"infoForm",staticClass:"infoForm",attrs:{inline:!0,rules:e.infoRules,model:e.infoForm}},[t("emp-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}}),t("leader-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}})],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:function(o){e.infoSubmit("infoForm")}}},[e._v(e._s(e.constants.CONFIRM))]),t("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v(e._s(e.constants.CANCEL))])],1)],1)],1)},i=[],r=t("38fb"),a=t("fea5"),l=t("7fbe"),s=t("248c"),m={props:{dialogInfo:{type:Boolean,default:!1},infoType:{type:String,default:"add"},currentInfo:{type:Object,default:function(){return{}}}},data:function(){return{constants:{ADD:r["c"],MODIFY:r["yc"],CONFIRM:r["q"],CANCEL:r["n"]},infoRules:{num:{type:"string",required:!0,message:r["Rc"],trigger:"change"},email:[{type:"email",message:r["P"],trigger:["blur","change"]}],leaderNum:[{type:"string",required:!0,message:r["qc"],trigger:"change"}],leaderEmail:[{type:"email",message:r["P"],trigger:["blur","change"]}]},infoForm:{num:"",name:"",BU:"",dep:"",level:"",email:"",leaderNum:"",leaderName:"",leaderBU:"",leaderEmail:""}}},created:function(){this.infoForm.num=this.currentInfo.workcode,this.infoForm.name=this.currentInfo.name,this.infoForm.BU=this.currentInfo.department,this.infoForm.dep=this.currentInfo.syb_department,this.infoForm.level=this.currentInfo.level,this.infoForm.email=this.currentInfo.email,this.infoForm.leaderNum=this.currentInfo.superior_workcode,this.infoForm.leaderName=this.currentInfo.superior_name,this.infoForm.leaderBU=this.currentInfo.superior_department,this.infoForm.leaderEmail=this.currentInfo.superior_email},methods:{resetFilter:function(e){this.$refs[e].resetFields()},close:function(){this.$emit("close")},infoSubmit:function(e){var o=this;this.$refs[e].validate(function(e){if(e){if("add"===o.infoType){var t=o.infoForm,n=t.num,i=t.email,r=t.leaderNum,l=t.leaderEmail,s={workcode:n,email:i,superior_workcode:r,superior_email:l};return Object(a["kb"])(o.$route.params.orgID,s).then(function(e){o.close()}).catch(function(e){})}var m=o.infoForm,f=m.email,c=m.leaderNum,d=m.leaderEmail;return Object(a["X"])(o.$route.params.orgID,o.currentInfo.id,{email:f,superior_workcode:c,superior_email:d}).then(function(e){o.close()}).catch(function(e){})}return!1})}},beforeDestroy:function(){this.resetFilter("infoForm")},components:{"emp-info":l["a"],"leader-info":s["a"]}},f=m,c=(t("e870"),t("2877")),d=Object(c["a"])(f,n,i,!1,null,"48a3e365",null);d.options.__file="index.vue";o["default"]=d.exports},"9d8d":function(e,o,t){"use strict";var n=t("93f5"),i=t.n(n);i.a},b230:function(e,o,t){},d338:function(e,o,t){"use strict";var n=t("0224"),i=t.n(n);i.a},e870:function(e,o,t){"use strict";var n=t("b230"),i=t.n(n);i.a}}]);