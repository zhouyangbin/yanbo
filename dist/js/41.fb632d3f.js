webpackJsonp([41],{B16X:function(e,o){},BfW8:function(e,o,t){"use strict";var r=t("OE2U"),n=t("BHhq"),i={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"}},data:function(){return{constants:{LEADER_NUMBER:r["_61"],LEADER_NAME:r["_60"],BASE_OR_BU:r["h"],UP_LEVEL:r["_123"],EMAIL:r["J"]}}},methods:{searchLeader:function(e){var o=this;""!=e?Object(n["F"])({empID:e}).then(function(e){e?(o.infoForm.leaderName=e.name,o.infoForm.leaderBU=e.department,o.infoForm.leaderEmail=e.email):(o.infoForm.leaderName="",o.infoForm.leaderBU="",o.infoForm.leaderEmail="")}).catch(function(e){}):(this.infoForm.leaderName="",this.infoForm.leaderBU="",this.infoForm.leaderEmail="")}}},a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"section-title"},[e._v("上级信息:")]),t("el-form-item",{attrs:{prop:"leaderNum"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.LEADER_NUMBER},on:{input:e.searchLeader},model:{value:e.infoForm.leaderNum,callback:function(o){e.$set(e.infoForm,"leaderNum",o)},expression:"infoForm.leaderNum"}})],1),t("el-form-item",{attrs:{prop:"leaderName"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.LEADER_NAME},model:{value:e.infoForm.leaderName,callback:function(o){e.$set(e.infoForm,"leaderName",o)},expression:"infoForm.leaderName"}})],1),t("el-form-item",{attrs:{prop:"leaderBU"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.UP_LEVEL+e.constants.BASE_OR_BU},model:{value:e.infoForm.leaderBU,callback:function(o){e.$set(e.infoForm,"leaderBU",o)},expression:"infoForm.leaderBU"}})],1),t("el-form-item",{attrs:{prop:"leaderEmail"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.UP_LEVEL+e.constants.EMAIL},model:{value:e.infoForm.leaderEmail,callback:function(o){e.$set(e.infoForm,"leaderEmail",o)},expression:"infoForm.leaderEmail"}})],1)],1)},l=[],s=t("XyMi");function m(e){t("KWwz")}var f=!1,c=m,d="data-v-68399ca4",u=null,p=Object(s["a"])(i,a,l,f,c,d,u);o["a"]=p.exports},KWwz:function(e,o){},SXE8:function(e,o){},hYY4:function(e,o,t){"use strict";var r=t("OE2U"),n=t("BHhq"),i={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"}},data:function(){return{constants:{NUMBER:r["_78"],NAME:r["_73"],BASE_OR_BU:r["h"],DEP_OR_SUB:r["D"],WORK_LEVEL:r["_125"],EMAIL:r["J"]}}},methods:{searchME:function(e){var o=this;""!=e?Object(n["F"])({empID:e}).then(function(e){e?(o.infoForm.name=e.name,o.infoForm.BU=e.department,o.infoForm.dep=e.first_department,o.infoForm.level=e.level,o.infoForm.email=e.email):(o.infoForm.name="",o.infoForm.BU="",o.infoForm.dep="",o.infoForm.level="",o.infoForm.email="")}).catch(function(e){}):(this.infoForm.name="",this.infoForm.BU="",this.infoForm.dep="",this.infoForm.level="",this.infoForm.email="")}}},a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"section-title"},[e._v("员工信息:")]),t("el-form-item",{attrs:{prop:"num"}},[t("el-input",{attrs:{disabled:"add"!==e.infoType,size:"small",placeholder:e.constants.NUMBER},on:{input:e.searchME},model:{value:e.infoForm.num,callback:function(o){e.$set(e.infoForm,"num",o)},expression:"infoForm.num"}})],1),t("el-form-item",{attrs:{prop:"name"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.NAME},model:{value:e.infoForm.name,callback:function(o){e.$set(e.infoForm,"name",o)},expression:"infoForm.name"}})],1),t("el-form-item",{attrs:{prop:"BU"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.BASE_OR_BU},model:{value:e.infoForm.BU,callback:function(o){e.$set(e.infoForm,"BU",o)},expression:"infoForm.BU"}})],1),t("el-form-item",{attrs:{prop:"dep"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.DEP_OR_SUB},model:{value:e.infoForm.dep,callback:function(o){e.$set(e.infoForm,"dep",o)},expression:"infoForm.dep"}})],1),t("el-form-item",{attrs:{prop:"level"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.WORK_LEVEL},model:{value:e.infoForm.level,callback:function(o){e.$set(e.infoForm,"level",o)},expression:"infoForm.level"}})],1),t("el-form-item",{attrs:{prop:"email"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.EMAIL},model:{value:e.infoForm.email,callback:function(o){e.$set(e.infoForm,"email",o)},expression:"infoForm.email"}})],1)],1)},l=[],s=t("XyMi");function m(e){t("SXE8")}var f=!1,c=m,d="data-v-336dd654",u=null,p=Object(s["a"])(i,a,l,f,c,d,u);o["a"]=p.exports},wibU:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t("OE2U"),n=t("BHhq"),i=t("hYY4"),a=t("BfW8"),l={props:{dialogInfo:{type:Boolean,default:!1},infoType:{type:String,default:"add"},currentInfo:{type:Object,default:function(){return{}}}},data:function(){return{constants:{ADD:r["c"],MODIFY:r["_67"],CONFIRM:r["o"],CANCEL:r["l"]},infoRules:{num:{type:"string",required:!0,message:r["_79"],trigger:"change"},email:[{required:!0,message:r["L"],trigger:"blur"},{type:"email",message:r["K"],trigger:["blur","change"]}],leaderNum:[{type:"string",required:!0,message:r["_62"],trigger:"change"}],leaderEmail:[{required:!0,message:r["L"],trigger:"blur"},{type:"email",message:r["K"],trigger:["blur","change"]}]},infoForm:{num:"",name:"",BU:"",dep:"",level:"",email:"",leaderNum:"",leaderName:"",leaderBU:"",leaderEmail:""}}},created:function(){this.infoForm.num=this.currentInfo.workcode,this.infoForm.name=this.currentInfo.name,this.infoForm.BU=this.currentInfo.department,this.infoForm.dep=this.currentInfo.syb_department,this.infoForm.level=this.currentInfo.level,this.infoForm.email=this.currentInfo.email,this.infoForm.leaderNum=this.currentInfo.superior_workcode,this.infoForm.leaderName=this.currentInfo.superior_name,this.infoForm.leaderBU=this.currentInfo.superior_department,this.infoForm.leaderEmail=this.currentInfo.superior_email},methods:{resetFilter:function(e){this.$refs[e].resetFields()},close:function(){this.$emit("close")},infoSubmit:function(e){var o=this;this.$refs[e].validate(function(e){if(e){if("add"===o.infoType){var t=o.infoForm,r=t.num,i=t.email,a=t.leaderNum,l=t.leaderEmail,s={workcode:r,email:i,superior_workcode:a,superior_email:l};return Object(n["U"])(o.$route.params.orgID,s).then(function(e){o.close()}).catch(function(e){})}var m=o.infoForm,f=m.email,c=m.leaderNum,d=m.leaderEmail;return Object(n["K"])(o.$route.params.orgID,o.currentInfo.id,{email:f,superior_workcode:c,superior_email:d}).then(function(e){o.close()}).catch(function(e){})}return!1})}},beforeDestroy:function(){this.resetFilter("infoForm")},components:{"emp-info":i["a"],"leader-info":a["a"]}},s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-dialog",{staticClass:"dialogInfo",attrs:{width:"650px",visible:e.dialogInfo},on:{close:e.close}},[t("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?e.constants.ADD:e.constants.MODIFY)+"\n  ")]),t("el-form",{ref:"infoForm",staticClass:"infoForm",attrs:{inline:!0,rules:e.infoRules,model:e.infoForm}},[t("emp-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}}),t("leader-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}})],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:function(o){e.infoSubmit("infoForm")}}},[e._v(e._s(e.constants.CONFIRM))]),t("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v(e._s(e.constants.CANCEL))])],1)],1)],1)},m=[],f=t("XyMi");function c(e){t("B16X")}var d=!1,u=c,p="data-v-1a498157",F=null,h=Object(f["a"])(l,s,m,d,u,p,F);o["default"]=h.exports}});
//# sourceMappingURL=41.fb632d3f.js.map