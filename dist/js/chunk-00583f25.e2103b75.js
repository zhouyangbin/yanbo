(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00583f25"],{"0224":function(e,o,t){},"248c":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"section-title"},[e._v("上级信息:")]),t("el-form-item",{attrs:{prop:"leaderNum"}},[t("el-input",{attrs:{disabled:!e.canBeEdit,size:"small",placeholder:e.constants.LEADER_NUMBER},on:{input:e.searchLeader},model:{value:e.infoForm.leaderNum,callback:function(o){e.$set(e.infoForm,"leaderNum",o)},expression:"infoForm.leaderNum"}})],1),t("el-form-item",{attrs:{prop:"leaderName"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.LEADER_NAME},model:{value:e.infoForm.leaderName,callback:function(o){e.$set(e.infoForm,"leaderName",o)},expression:"infoForm.leaderName"}})],1),t("el-form-item",{attrs:{prop:"leaderBU"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.UP_LEVEL+e.constants.BASE_OR_BU},model:{value:e.infoForm.leaderBU,callback:function(o){e.$set(e.infoForm,"leaderBU",o)},expression:"infoForm.leaderBU"}})],1),t("el-form-item",{attrs:{prop:"leaderEmail"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.UP_LEVEL+e.constants.EMAIL},model:{value:e.infoForm.leaderEmail,callback:function(o){e.$set(e.infoForm,"leaderEmail",o)},expression:"infoForm.leaderEmail"}})],1)],1)},r=[],i=t("38fb"),a=t("fea5"),l={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"},canEdit:{type:Boolean,default:!0}},data:function(){return{constants:{LEADER_NUMBER:i["pc"],LEADER_NAME:i["oc"],BASE_OR_BU:i["h"],UP_LEVEL:i["Jd"],EMAIL:i["O"]}}},methods:{searchLeader:function(e){var o=this;""!=e?Object(a["S"])({empID:e}).then(function(e){e?(o.infoForm.leaderName=e.name,o.infoForm.leaderBU=e.department,o.infoForm.leaderEmail=e.email):(o.infoForm.leaderName="",o.infoForm.leaderBU="",o.infoForm.leaderEmail="")}).catch(function(e){}):(this.infoForm.leaderName="",this.infoForm.leaderBU="",this.infoForm.leaderEmail="")}},computed:{canBeEdit:function(){return"modify"!=this.infoType||this.canEdit}}},s=l,m=(t("d338"),t("2877")),f=Object(m["a"])(s,n,r,!1,null,"d77455ca",null);f.options.__file="index.vue";o["a"]=f.exports},"33f0":function(e,o,t){},"3c37":function(e,o,t){},"7fbe":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"section-title"},[e._v("员工信息:")]),t("el-form-item",{attrs:{prop:"num"}},[t("el-input",{attrs:{disabled:"add"!==e.infoType,size:"small",placeholder:e.constants.NUMBER},on:{input:e.searchME},model:{value:e.infoForm.num,callback:function(o){e.$set(e.infoForm,"num",o)},expression:"infoForm.num"}})],1),t("el-form-item",{attrs:{prop:"name"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.NAME},model:{value:e.infoForm.name,callback:function(o){e.$set(e.infoForm,"name",o)},expression:"infoForm.name"}})],1),t("el-form-item",{attrs:{prop:"BU"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.BASE_OR_BU},model:{value:e.infoForm.BU,callback:function(o){e.$set(e.infoForm,"BU",o)},expression:"infoForm.BU"}})],1),t("el-form-item",{attrs:{prop:"dep"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.DEP_OR_SUB},model:{value:e.infoForm.dep,callback:function(o){e.$set(e.infoForm,"dep",o)},expression:"infoForm.dep"}})],1),t("el-form-item",{attrs:{prop:"level"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.WORK_LEVEL},model:{value:e.infoForm.level,callback:function(o){e.$set(e.infoForm,"level",o)},expression:"infoForm.level"}})],1),t("el-form-item",{attrs:{prop:"email"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.EMAIL},model:{value:e.infoForm.email,callback:function(o){e.$set(e.infoForm,"email",o)},expression:"infoForm.email"}})],1)],1)},r=[],i=t("38fb"),a=t("fea5"),l={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"}},data:function(){return{constants:{NUMBER:i["Qc"],NAME:i["Lc"],BASE_OR_BU:i["h"],DEP_OR_SUB:i["G"],WORK_LEVEL:i["Ld"],EMAIL:i["O"]}}},methods:{searchME:function(e){var o=this;""!=e?Object(a["S"])({empID:e}).then(function(e){e?(o.infoForm.name=e.name,o.infoForm.BU=e.department,o.infoForm.dep=e.first_department,o.infoForm.level=e.level,o.infoForm.email=e.email):(o.infoForm.name="",o.infoForm.BU="",o.infoForm.dep="",o.infoForm.level="",o.infoForm.email="")}).catch(function(e){}):(this.infoForm.name="",this.infoForm.BU="",this.infoForm.dep="",this.infoForm.level="",this.infoForm.email="")}}},s=l,m=(t("9d8d"),t("2877")),f=Object(m["a"])(s,n,r,!1,null,"336dd654",null);f.options.__file="index.vue";o["a"]=f.exports},"93f5":function(e,o,t){},"9b62":function(e,o,t){"use strict";var n=t("3c37"),r=t.n(n);r.a},"9d8d":function(e,o,t){"use strict";var n=t("93f5"),r=t.n(n);r.a},d338:function(e,o,t){"use strict";var n=t("0224"),r=t.n(n);r.a},e5f3:function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-dialog",{staticClass:"dialogInfo",attrs:{width:"650px",visible:e.dialogInfo},on:{close:e.close}},[t("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?e.constants.ADD:e.constants.MODIFY)+"\n  ")]),t("el-form",{ref:"infoForm",staticClass:"infoForm",attrs:{inline:!0,rules:e.infoRules,model:e.infoForm}},[t("emp-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}}),t("leader-info",{attrs:{canEdit:e.currentInfo.canEditLeaderInfo,infoForm:e.infoForm,infoType:e.infoType}}),t("up-leader-info",{attrs:{canEdit:e.currentInfo.canEdit,infoForm:e.infoForm,infoType:e.infoType}})],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:function(o){e.infoSubmit("infoForm")}}},[e._v(e._s(e.constants.CONFIRM))]),t("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v(e._s(e.constants.CANCEL))])],1)],1)],1)},r=[],i=t("38fb"),a=t("fea5"),l=t("7fbe"),s=t("248c"),m=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"section-title"},[e._v("隔级信息:")]),t("el-form-item",{attrs:{prop:"upLeaderNum"}},[t("el-input",{attrs:{disabled:!e.canBeEdit,size:"small",placeholder:e.constants.PLUS_UP_LEVEL+e.constants.NUMBER},on:{input:e.searchUpLeader},model:{value:e.infoForm.upLeaderNum,callback:function(o){e.$set(e.infoForm,"upLeaderNum",o)},expression:"infoForm.upLeaderNum"}})],1),t("el-form-item",{attrs:{prop:"upLeaderName"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.PLUS_UP_LEVEL+e.constants.NAME},model:{value:e.infoForm.upLeaderName,callback:function(o){e.$set(e.infoForm,"upLeaderName",o)},expression:"infoForm.upLeaderName"}})],1),t("el-form-item",{attrs:{prop:"upLeaderBU"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.PLUS_UP_LEVEL+e.constants.BASE_OR_BU},model:{value:e.infoForm.upLeaderBU,callback:function(o){e.$set(e.infoForm,"upLeaderBU",o)},expression:"infoForm.upLeaderBU"}})],1),t("el-form-item",{attrs:{prop:"upLeaderEmail"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.PLUS_UP_LEVEL+e.constants.EMAIL},model:{value:e.infoForm.upLeaderEmail,callback:function(o){e.$set(e.infoForm,"upLeaderEmail",o)},expression:"infoForm.upLeaderEmail"}})],1)],1)},f=[],c={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"},canEdit:{type:Boolean,default:!0}},data:function(){return{constants:{PLUS_UP_LEVEL:i["fd"],NUMBER:i["Qc"],NAME:i["Lc"],BASE_OR_BU:i["h"],EMAIL:i["O"]}}},methods:{searchUpLeader:function(e){var o=this;""!=e?Object(a["S"])({empID:e}).then(function(e){e?(o.infoForm.upLeaderName=e.name,o.infoForm.upLeaderBU=e.department,o.infoForm.upLeaderEmail=e.email):(o.infoForm.upLeaderName="",o.infoForm.upLeaderBU="",o.infoForm.upLeaderEmail="")}).catch(function(e){}):(this.infoForm.upLeaderName="",this.infoForm.upLeaderBU="",this.infoForm.upLeaderEmail="")}},computed:{canBeEdit:function(){return"modify"!=this.infoType||this.canEdit}}},u=c,d=(t("f868"),t("2877")),p=Object(d["a"])(u,m,f,!1,null,"f9cc81d8",null);p.options.__file="index.vue";var F=p.exports,h={props:{dialogInfo:{type:Boolean,default:!1},infoType:{type:String,default:"add"},currentInfo:{type:Object,default:function(){return{}}}},data:function(){var e=this,o=function(o,t,n){e.infoForm.upLeaderNum&&!t?n(i["Q"]):n()};return{constants:{ADD:i["c"],MODIFY:i["yc"],CONFIRM:i["q"],CANCEL:i["n"]},infoRules:{num:{type:"string",required:!0,message:i["Rc"],trigger:"change"},email:[{required:!0,message:i["Q"],trigger:"blur"},{type:"email",message:i["P"],trigger:["blur","change"]}],leaderNum:[{type:"string",required:!0,message:i["qc"],trigger:"change"}],leaderEmail:[{required:!0,message:i["Q"],trigger:"blur"},{type:"email",message:i["P"],trigger:["blur","change"]}],upLeaderEmail:[{type:"email",message:i["P"],trigger:["blur","change"]},{validator:o,trigger:"change"}]},infoForm:{num:"",name:"",BU:"",dep:"",level:"",email:"",leaderNum:"",leaderName:"",leaderBU:"",leaderEmail:"",upLeaderNum:"",upLeaderName:"",upLeaderBU:"",upLeaderEmail:""}}},created:function(){this.infoForm.num=this.currentInfo.workcode,this.infoForm.name=this.currentInfo.name,this.infoForm.BU=this.currentInfo.department,this.infoForm.dep=this.currentInfo.first_department,this.infoForm.level=this.currentInfo.level,this.infoForm.email=this.currentInfo.email,this.infoForm.leaderNum=this.currentInfo.superior_workcode,this.infoForm.leaderName=this.currentInfo.superior_name,this.infoForm.leaderBU=this.currentInfo.superior_department,this.infoForm.leaderEmail=this.currentInfo.superior_email,this.infoForm.upLeaderNum=this.currentInfo.highlevel_workcode,this.infoForm.upLeaderName=this.currentInfo.highlevel_name,this.infoForm.upLeaderBU=this.currentInfo.highlevel_department,this.infoForm.upLeaderEmail=this.currentInfo.highlevel_email},methods:{resetFilter:function(e){this.$refs[e].resetFields()},close:function(){this.$emit("close")},infoSubmit:function(e){var o=this;this.$refs[e].validate(function(e){if(!e)return!1;if("add"===o.infoType){var t={ev_user_workcode:o.infoForm.num,ev_user_email:o.infoForm.email,evaluator_workcode:o.infoForm.leaderNum,evaluator_email:o.infoForm.leaderEmail,highlevel_workcode:o.infoForm.upLeaderNum,highlevel_email:o.infoForm.upLeaderEmail};Object(a["gb"])(o.$route.params.orgID,t).then(function(e){o.$message({message:"添加成功",type:"success"}),o.close()}).catch(function(e){})}else Object(a["pb"])(o.$route.params.orgID,o.currentInfo.id,{ev_user_email:o.infoForm.email,evaluator_workcode:o.infoForm.leaderNum,evaluator_email:o.infoForm.leaderEmail,highlevel_workcode:o.infoForm.upLeaderNum,highlevel_email:o.infoForm.upLeaderEmail}).then(function(e){o.$message({message:"修改成功",type:"success"}),o.close()}).catch(function(e){})})}},beforeDestroy:function(){this.resetFilter("infoForm")},components:{"emp-info":l["a"],"leader-info":s["a"],"up-leader-info":F}},E=h,L=(t("9b62"),Object(d["a"])(E,n,r,!1,null,"9b2b6052",null));L.options.__file="Dialog.vue";o["default"]=L.exports},f868:function(e,o,t){"use strict";var n=t("33f0"),r=t.n(n);r.a}}]);