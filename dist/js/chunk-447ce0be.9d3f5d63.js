(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-447ce0be"],{"248c":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"section-title"},[e._v("上级信息:")]),o("el-form-item",{attrs:{prop:"leaderNum"}},[o("el-input",{attrs:{disabled:!e.canBeEdit,size:"small",placeholder:e.constants.LEADER_NUMBER},on:{input:e.searchLeader},model:{value:e.infoForm.leaderNum,callback:function(t){e.$set(e.infoForm,"leaderNum",t)},expression:"infoForm.leaderNum"}})],1),o("el-form-item",{attrs:{prop:"leaderName"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.LEADER_NAME},model:{value:e.infoForm.leaderName,callback:function(t){e.$set(e.infoForm,"leaderName",t)},expression:"infoForm.leaderName"}})],1),o("el-form-item",{attrs:{prop:"leaderBU"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.UP_LEVEL+e.constants.BASE_OR_BU},model:{value:e.infoForm.leaderBU,callback:function(t){e.$set(e.infoForm,"leaderBU",t)},expression:"infoForm.leaderBU"}})],1),o("el-form-item",{attrs:{prop:"leaderEmail"}},[o("el-input",{attrs:{size:"small",placeholder:e.constants.UP_LEVEL+e.constants.EMAIL},model:{value:e.infoForm.leaderEmail,callback:function(t){e.$set(e.infoForm,"leaderEmail",t)},expression:"infoForm.leaderEmail"}})],1)],1)},i=[],r=o("38fb"),a=o("fea5"),l={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"},canEdit:{type:Boolean,default:!0}},data:function(){return{constants:{LEADER_NUMBER:r["yc"],LEADER_NAME:r["xc"],BASE_OR_BU:r["j"],UP_LEVEL:r["be"],EMAIL:r["W"]}}},methods:{searchLeader:function(e){var t=this;""!=e&&e.length>=6?Object(a["U"])({empID:e}).then(function(e){e?(t.infoForm.leaderName=e.name,t.infoForm.leaderBU=e.department,t.infoForm.leaderEmail=e.email):(t.infoForm.leaderName="",t.infoForm.leaderBU="",t.infoForm.leaderEmail="")}).catch(function(e){}):(this.infoForm.leaderName="",this.infoForm.leaderBU="",this.infoForm.leaderEmail="")}},computed:{canBeEdit:function(){return"modify"!=this.infoType||this.canEdit}}},s=l,m=(o("6f5e"),o("2877")),f=Object(m["a"])(s,n,i,!1,null,"6b4f0042",null);f.options.__file="index.vue";t["a"]=f.exports},"58d9":function(e,t,o){},"6f5e":function(e,t,o){"use strict";var n=o("58d9"),i=o.n(n);i.a},"7fbe":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"section-title"},[e._v("员工信息:")]),o("el-form-item",{attrs:{prop:"num"}},[o("el-input",{attrs:{disabled:"add"!==e.infoType,size:"small",placeholder:e.constants.NUMBER},on:{input:e.searchME},model:{value:e.infoForm.num,callback:function(t){e.$set(e.infoForm,"num",t)},expression:"infoForm.num"}})],1),o("el-form-item",{attrs:{prop:"name"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.NAME},model:{value:e.infoForm.name,callback:function(t){e.$set(e.infoForm,"name",t)},expression:"infoForm.name"}})],1),o("el-form-item",{attrs:{prop:"BU"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.BASE_OR_BU},model:{value:e.infoForm.BU,callback:function(t){e.$set(e.infoForm,"BU",t)},expression:"infoForm.BU"}})],1),o("el-form-item",{attrs:{prop:"dep"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.DEP_OR_SUB},model:{value:e.infoForm.dep,callback:function(t){e.$set(e.infoForm,"dep",t)},expression:"infoForm.dep"}})],1),o("el-form-item",{attrs:{prop:"level"}},[o("el-input",{attrs:{size:"small",disabled:!0,placeholder:e.constants.WORK_LEVEL},model:{value:e.infoForm.level,callback:function(t){e.$set(e.infoForm,"level",t)},expression:"infoForm.level"}})],1),o("el-form-item",{attrs:{prop:"email"}},[o("el-input",{attrs:{size:"small",placeholder:e.constants.EMAIL},model:{value:e.infoForm.email,callback:function(t){e.$set(e.infoForm,"email",t)},expression:"infoForm.email"}})],1)],1)},i=[],r=o("38fb"),a=o("fea5"),l={props:{infoForm:{type:Object,default:function(){return{}}},infoType:{type:String,default:"add"}},data:function(){return{constants:{NUMBER:r["dd"],NAME:r["Yc"],BASE_OR_BU:r["j"],DEP_OR_SUB:r["N"],WORK_LEVEL:r["ee"],EMAIL:r["W"]}}},methods:{searchME:function(e){var t=this;""!=e&&e.length>=6?Object(a["U"])({empID:e}).then(function(e){e?(t.infoForm.name=e.name,t.infoForm.BU=e.department,t.infoForm.dep=e.first_department,t.infoForm.level=e.level,t.infoForm.email=e.email):(t.infoForm.name="",t.infoForm.BU="",t.infoForm.dep="",t.infoForm.level="",t.infoForm.email="")}).catch(function(e){}):(this.infoForm.name="",this.infoForm.BU="",this.infoForm.dep="",this.infoForm.level="",this.infoForm.email="")}}},s=l,m=(o("82ff"),o("2877")),f=Object(m["a"])(s,n,i,!1,null,"78552c82",null);f.options.__file="index.vue";t["a"]=f.exports},"82ff":function(e,t,o){"use strict";var n=o("d7b5"),i=o.n(n);i.a},"95fe":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"dialogInfo",attrs:{width:"650px",visible:e.dialogInfo},on:{close:e.close}},[o("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?e.constants.ADD:e.constants.MODIFY)+"\n  ")]),o("el-form",{ref:"infoForm",staticClass:"infoForm",attrs:{inline:!0,rules:e.infoRules,model:e.infoForm}},[o("emp-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}}),o("leader-info",{attrs:{infoForm:e.infoForm,infoType:e.infoType}})],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-row",{attrs:{type:"flex",justify:"center"}},[o("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:function(t){e.infoSubmit("infoForm")}}},[e._v(e._s(e.constants.CONFIRM))]),o("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v(e._s(e.constants.CANCEL))])],1)],1)],1)},i=[],r=o("38fb"),a=o("fea5"),l=o("7fbe"),s=o("248c"),m={props:{dialogInfo:{type:Boolean,default:!1},infoType:{type:String,default:"add"},currentInfo:{type:Object,default:function(){return{}}}},data:function(){return{constants:{ADD:r["c"],MODIFY:r["Jc"],CONFIRM:r["w"],CANCEL:r["s"]},infoRules:{num:{type:"string",required:!0,message:r["ed"],trigger:"change"},email:[{type:"email",message:r["X"],trigger:["blur","change"]}],leaderNum:[{type:"string",required:!0,message:r["zc"],trigger:"change"}],leaderEmail:[{type:"email",message:r["X"],trigger:["blur","change"]}]},infoForm:{num:"",name:"",BU:"",dep:"",level:"",email:"",leaderNum:"",leaderName:"",leaderBU:"",leaderEmail:""}}},created:function(){this.infoForm.num=this.currentInfo.workcode,this.infoForm.name=this.currentInfo.name,this.infoForm.BU=this.currentInfo.department,this.infoForm.dep=this.currentInfo.syb_department,this.infoForm.level=this.currentInfo.level,this.infoForm.email=this.currentInfo.email,this.infoForm.leaderNum=this.currentInfo.superior_workcode,this.infoForm.leaderName=this.currentInfo.superior_name,this.infoForm.leaderBU=this.currentInfo.superior_department,this.infoForm.leaderEmail=this.currentInfo.superior_email},methods:{resetFilter:function(e){this.$refs[e].resetFields()},close:function(){this.$emit("close")},infoSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(e){if("add"===t.infoType){var o=t.infoForm,n=o.num,i=o.email,r=o.leaderNum,l=o.leaderEmail,s={workcode:n,email:i,superior_workcode:r,superior_email:l};return Object(a["mb"])(t.$route.params.orgID,s).then(function(e){t.close()}).catch(function(e){})}var m=t.infoForm,f=m.email,c=m.leaderNum,d=m.leaderEmail;return Object(a["Z"])(t.$route.params.orgID,t.currentInfo.id,{email:f,superior_workcode:c,superior_email:d}).then(function(e){t.close()}).catch(function(e){})}return!1})}},beforeDestroy:function(){this.resetFilter("infoForm")},components:{"emp-info":l["a"],"leader-info":s["a"]}},f=m,c=(o("e870"),o("2877")),d=Object(c["a"])(f,n,i,!1,null,"48a3e365",null);d.options.__file="index.vue";t["default"]=d.exports},b230:function(e,t,o){},d7b5:function(e,t,o){},e870:function(e,t,o){"use strict";var n=o("b230"),i=o.n(n);i.a}}]);