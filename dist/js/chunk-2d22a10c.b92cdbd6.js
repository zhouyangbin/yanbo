(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22a10c"],{dfb6:function(e,o,t){"use strict";t.r(o);var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("el-dialog",{attrs:{title:"待共识",visible:e.isRejectDialog,"close-on-click-modal":!1,width:"700px"},on:{close:e.close}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{prop:"reason"}},[t("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入理由"},model:{value:e.form.reason,callback:function(o){e.$set(e.form,"reason",o)},expression:"form.reason"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submitRejectReason}},[e._v("确定")])],1)],1)],1)},s=[],a=t("fea5"),n={props:{isRejectDialog:{type:Boolean,default:!1}},data:function(){return{form:{reason:""},rules:{reason:[{required:!0,message:"请输入理由",blur:"blur"}]}}},methods:{close:function(){this.$emit("close")},submitRejectReason:function(){var e=this;this.$refs.form.validate(function(o){if(o){var t={performance_user_id:e.$route.params.uid,type:1,reason:e.form.reason};Object(a["Nc"])(t).then(function(o){e.$message.success("提交成功"),e.close()}).catch(function(){})}})}}},l=n,c=t("2877"),i=Object(c["a"])(l,r,s,!1,null,"0e45153a",null);o["default"]=i.exports}}]);