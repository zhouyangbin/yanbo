(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-061c6f2b"],{1043:function(e,o,t){},"124b":function(e,o,t){"use strict";var n=t("cb72"),r=t.n(n);r.a},"248c":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"section-title"},[e._v("上级信息:")]),t("el-form-item",{attrs:{prop:"leaderNum"}},[t("el-input",{attrs:{disabled:!e.canBeEdit,size:"small",placeholder:e.constants.LEADER_NUMBER},on:{input:e.searchLeader},model:{value:e.infoForm.leaderNum,callback:function(o){e.$set(e.infoForm,"leaderNum",o)},expression:"infoForm.leaderNum"}})],1),t("el-form-item",{attrs:{prop:"leaderName"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.LEADER_NAME},model:{value:e.infoForm.leaderName,callback:function(o){e.$set(e.infoForm,"leaderName",o)},expression:"infoForm.leaderName"}})],1),t("el-form-item",{attrs:{prop:"leaderBU"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.UP_LEVEL+e.constants.BASE_OR_BU},model:{value:e.infoForm.leaderBU,callback:function(o){e.$set(e.infoForm,"leaderBU",o)},expression:"infoForm.leaderBU"}})],1),t("el-form-item",{attrs:{prop:"leaderEmail"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.UP_LEVEL+e.constants.EMAIL},model:{value:e.infoForm.leaderEmail,callback:function(o){e.$set(e.infoForm,"leaderEmail",o)},expression:"infoForm.leaderEmail"}})],1)],1)},r=[],i=(t("7cfd"),t("38fb")),a=t("fea5"),l={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"},canEdit:{type:Boolean,default:!0}},data:function(){return{constants:{LEADER_NUMBER:i["Fc"],LEADER_NAME:i["Ec"],BASE_OR_BU:i["k"],UP_LEVEL:i["pe"],EMAIL:i["ab"]}}},methods:{searchLeader:function(e){var o=this;""!=e&&e.length>=6?Object(a["eb"])({empID:e}).then((function(e){e?(o.infoForm.leaderName=e.name,o.infoForm.leaderBU=e.department,o.infoForm.leaderEmail=e.email):(o.infoForm.leaderName="",o.infoForm.leaderBU="",o.infoForm.leaderEmail="")})).catch((function(e){})):(this.infoForm.leaderName="",this.infoForm.leaderBU="",this.infoForm.leaderEmail="")}},computed:{canBeEdit:function(){return"modify"!=this.infoType||this.canEdit}}},s=l,m=(t("e24b"),t("4e82")),f=Object(m["a"])(s,n,r,!1,null,"1d116342",null);o["a"]=f.exports},"2c31":function(e,o,t){},"530e":function(e,o,t){},5793:function(e,o,t){"use strict";var n=t("530e"),r=t.n(n);r.a},"7fbe":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"section-title"},[e._v("员工信息:")]),t("el-form-item",{attrs:{prop:"num"}},[t("el-input",{attrs:{disabled:"add"!==e.infoType,size:"small",placeholder:e.constants.NUMBER},on:{input:e.searchME},model:{value:e.infoForm.num,callback:function(o){e.$set(e.infoForm,"num",o)},expression:"infoForm.num"}})],1),t("el-form-item",{attrs:{prop:"name"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.NAME},model:{value:e.infoForm.name,callback:function(o){e.$set(e.infoForm,"name",o)},expression:"infoForm.name"}})],1),t("el-form-item",{attrs:{prop:"BU"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.BASE_OR_BU},model:{value:e.infoForm.BU,callback:function(o){e.$set(e.infoForm,"BU",o)},expression:"infoForm.BU"}})],1),t("el-form-item",{attrs:{prop:"dep"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.DEP_OR_SUB},model:{value:e.infoForm.dep,callback:function(o){e.$set(e.infoForm,"dep",o)},expression:"infoForm.dep"}})],1),t("el-form-item",{attrs:{prop:"level"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.WORK_LEVEL},model:{value:e.infoForm.level,callback:function(o){e.$set(e.infoForm,"level",o)},expression:"infoForm.level"}})],1),t("el-form-item",{attrs:{prop:"email"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.EMAIL},model:{value:e.infoForm.email,callback:function(o){e.$set(e.infoForm,"email",o)},expression:"infoForm.email"}})],1)],1)},r=[],i=(t("7cfd"),t("38fb")),a=t("fea5"),l={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"}},data:function(){return{constants:{NUMBER:i["kd"],NAME:i["fd"],BASE_OR_BU:i["k"],DEP_OR_SUB:i["R"],WORK_LEVEL:i["se"],EMAIL:i["ab"]}}},methods:{searchME:function(e){var o=this;""!=e&&e.length>=6?Object(a["eb"])({empID:e}).then((function(e){e?(o.infoForm.name=e.name,o.infoForm.BU=e.department,o.infoForm.dep=e.first_department,o.infoForm.level=e.level,o.infoForm.email=e.email):(o.infoForm.name="",o.infoForm.BU="",o.infoForm.dep="",o.infoForm.level="",o.infoForm.email="")})).catch((function(e){})):(this.infoForm.name="",this.infoForm.BU="",this.infoForm.dep="",this.infoForm.level="",this.infoForm.email="")}}},s=l,m=(t("124b"),t("4e82")),f=Object(m["a"])(s,n,r,!1,null,"5c6390f7",null);o["a"]=f.exports},cb72:function(e,o,t){},e24b:function(e,o,t){"use strict";var n=t("2c31"),r=t.n(n);r.a},e5f3:function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-dialog",{staticClass:"dialogInfo",attrs:{width:"650px",visible:e.dialogInfo,"close-on-click-modal":!1},on:{close:e.close}},[t("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?e.constants.ADD:e.constants.MODIFY)+"\n  ")]),t("el-form",{ref:"infoForm",staticClass:"infoForm",attrs:{inline:!0,rules:e.infoRules,model:e.infoForm}},[t("emp-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}}),t("leader-info",{attrs:{canEdit:e.currentInfo.canEditLeaderInfo,infoForm:e.infoForm,infoType:e.infoType}}),t("up-leader-info",{attrs:{canEdit:e.currentInfo.canEdit,infoForm:e.infoForm,infoType:e.infoType}})],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:function(o){return e.infoSubmit("infoForm")}}},[e._v(e._s(e.constants.CONFIRM))]),t("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},r=[],i=(t("7cfd"),t("38fb")),a=t("fea5"),l=t("7fbe"),s=t("248c"),m=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"section-title"},[e._v("隔级信息:")]),t("el-form-item",{attrs:{prop:"upLeaderNum"}},[t("el-input",{attrs:{disabled:!e.canBeEdit,size:"small",placeholder:e.constants.PLUS_UP_LEVEL+e.constants.NUMBER},on:{input:e.searchUpLeader},model:{value:e.infoForm.upLeaderNum,callback:function(o){e.$set(e.infoForm,"upLeaderNum",o)},expression:"infoForm.upLeaderNum"}})],1),t("el-form-item",{attrs:{prop:"upLeaderName"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.PLUS_UP_LEVEL+e.constants.NAME},model:{value:e.infoForm.upLeaderName,callback:function(o){e.$set(e.infoForm,"upLeaderName",o)},expression:"infoForm.upLeaderName"}})],1),t("el-form-item",{attrs:{prop:"upLeaderBU"}},[t("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.PLUS_UP_LEVEL+e.constants.BASE_OR_BU},model:{value:e.infoForm.upLeaderBU,callback:function(o){e.$set(e.infoForm,"upLeaderBU",o)},expression:"infoForm.upLeaderBU"}})],1),t("el-form-item",{attrs:{prop:"upLeaderEmail"}},[t("el-input",{attrs:{size:"small",placeholder:e.constants.PLUS_UP_LEVEL+e.constants.EMAIL},model:{value:e.infoForm.upLeaderEmail,callback:function(o){e.$set(e.infoForm,"upLeaderEmail",o)},expression:"infoForm.upLeaderEmail"}})],1)],1)},f=[],c={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"},canEdit:{type:Boolean,default:!0}},data:function(){return{constants:{PLUS_UP_LEVEL:i["Ed"],NUMBER:i["kd"],NAME:i["fd"],BASE_OR_BU:i["k"],EMAIL:i["ab"]}}},methods:{searchUpLeader:function(e){var o=this;""!=e&&e.length>=6?Object(a["eb"])({empID:e}).then((function(e){e?(o.infoForm.upLeaderName=e.name,o.infoForm.upLeaderBU=e.department,o.infoForm.upLeaderEmail=e.email):(o.infoForm.upLeaderName="",o.infoForm.upLeaderBU="",o.infoForm.upLeaderEmail="")})).catch((function(e){})):(this.infoForm.upLeaderName="",this.infoForm.upLeaderBU="",this.infoForm.upLeaderEmail="")}},computed:{canBeEdit:function(){return"modify"!=this.infoType||this.canEdit}}},u=c,d=(t("5793"),t("4e82")),p=Object(d["a"])(u,m,f,!1,null,"508ec171",null),F=p.exports,h={props:{dialogInfo:{type:Boolean,default:!1},infoType:{type:String,default:"add"},currentInfo:{type:Object,default:function(){return{}}}},data:function(){var e=this,o=function(o,t,n){e.infoForm.upLeaderNum&&!t?n(i["cb"]):n()};return{constants:{ADD:i["c"],MODIFY:i["Qc"],CONFIRM:i["A"],CANCEL:i["v"]},infoRules:{num:{type:"string",required:!0,message:i["ld"],trigger:"change"},email:[{required:!0,message:i["cb"],trigger:"blur"},{type:"email",message:i["bb"],trigger:["blur","change"]}],leaderNum:[{type:"string",required:!0,message:i["Gc"],trigger:"change"}],leaderEmail:[{required:!0,message:i["cb"],trigger:"blur"},{type:"email",message:i["bb"],trigger:["blur","change"]}],upLeaderEmail:[{type:"email",message:i["bb"],trigger:["blur","change"]},{validator:o,trigger:"change"}]},infoForm:{num:"",name:"",BU:"",dep:"",level:"",email:"",leaderNum:"",leaderName:"",leaderBU:"",leaderEmail:"",upLeaderNum:"",upLeaderName:"",upLeaderBU:"",upLeaderEmail:""}}},created:function(){this.infoForm.num=this.currentInfo.workcode,this.infoForm.name=this.currentInfo.name,this.infoForm.BU=this.currentInfo.department,this.infoForm.dep=this.currentInfo.first_department,this.infoForm.level=this.currentInfo.level,this.infoForm.email=this.currentInfo.email,this.infoForm.leaderNum=this.currentInfo.superior_workcode,this.infoForm.leaderName=this.currentInfo.superior_name,this.infoForm.leaderBU=this.currentInfo.superior_department,this.infoForm.leaderEmail=this.currentInfo.superior_email,this.infoForm.upLeaderNum=this.currentInfo.highlevel_workcode,this.infoForm.upLeaderName=this.currentInfo.highlevel_name,this.infoForm.upLeaderBU=this.currentInfo.highlevel_department,this.infoForm.upLeaderEmail=this.currentInfo.highlevel_email},methods:{resetFilter:function(e){this.$refs[e].resetFields()},close:function(){this.$emit("close")},infoSubmit:function(e){var o=this;this.$refs[e].validate((function(e){if(!e)return!1;if("add"===o.infoType){var t={ev_user_workcode:o.infoForm.num,ev_user_email:o.infoForm.email,evaluator_workcode:o.infoForm.leaderNum,evaluator_email:o.infoForm.leaderEmail,highlevel_workcode:o.infoForm.upLeaderNum,highlevel_email:o.infoForm.upLeaderEmail};Object(a["vb"])(o.$route.params.orgID,t).then((function(e){o.$message({message:"添加成功",type:"success"}),o.close()})).catch((function(e){}))}else Object(a["Jb"])(o.$route.params.orgID,o.currentInfo.id,{ev_user_email:o.infoForm.email,evaluator_workcode:o.infoForm.leaderNum,evaluator_email:o.infoForm.leaderEmail,highlevel_workcode:o.infoForm.upLeaderNum,highlevel_email:o.infoForm.upLeaderEmail}).then((function(e){o.$message({message:"修改成功",type:"success"}),o.close()})).catch((function(e){}))}))}},beforeDestroy:function(){this.resetFilter("infoForm")},components:{"emp-info":l["a"],"leader-info":s["a"],"up-leader-info":F}},E=h,b=(t("f6d7"),Object(d["a"])(E,n,r,!1,null,"ca333a44",null));o["default"]=b.exports},f6d7:function(e,o,t){"use strict";var n=t("1043"),r=t.n(n);r.a}}]);