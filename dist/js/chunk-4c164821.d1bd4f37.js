(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c164821"],{"3c8a":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{staticClass:"uploadTargetDialog",attrs:{title:"上传工作指标",visible:t.isUpload,"close-on-click-modal":!1,width:"700px"},on:{close:t.close}},[o("el-form",{attrs:{"label-width":"150px"}},[o("el-form-item",{attrs:{label:"模版下载"}},[o("el-button",{attrs:{type:"text"},on:{click:t.downloadTemplate}},[t._v("下载")])],1),o("el-form-item",{attrs:{label:"上传文件"}},[o("el-upload",{staticClass:"upload-demo",attrs:{action:t.constants.PATH_UPLOAD_FILE(this.$route.params.uid),headers:t.uploadHeader,"on-success":t.uploadSuccess,"on-error":t.uploadError},on:{"before-upload":t.beforeUpload}},[o("el-button",{attrs:{type:"text"}},[t._v("选择文件")])],1)],1),o("el-form-item",{attrs:{label:"提示信息"}})],1),o("div",{staticClass:"notice"},[t._v("\n    请注意：如页面已有工作指标内容，上传将覆盖所有工作指标内容。\n  ")]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.close}},[t._v("取消")]),o("el-button",{attrs:{type:"primary"}},[t._v("确定")])],1)],1)},s=[],r=(o("7f7f"),o("ac6a"),o("456d"),o("fea5")),l=o("c9f1"),n={props:{isUpload:{type:Boolean,default:!1}},data:function(){return{constants:{PATH_UPLOAD_FILE:l["gb"]}}},created:function(){console.log(this.$route.params.uid)},computed:{uploadHeader:function(){return{Authorization:"Bearer ".concat(localStorage.getItem("talToken"))}}},methods:{close:function(){this.$emit("close")},downloadTemplate:function(){var t=this;Object(r["sb"])(this.$route.params.uid).then(function(e){t.$message.success("下载成功")}).catch(function(){})},uploadSuccess:function(t,e,o){t&&t.data&&t.data.errors&&t.data.errors.length>0?this.$notify.error({title:ERROR,message:"上传内容有部分错误!"}):this.$notify({title:SUCCESS,message:UPLOAD_SUCCESS,type:"success"}),console.log(t,e,o)},uploadError:function(t,e,o){var a,s=JSON.parse(t.message);a=435==s.status&&s.data&&s.data.errors?s.data.errors[Object.keys(s.data.errors)[0]].join("/"):s.message,this.$notify.error({title:"ERROR",message:a||"".concat(e.name).concat(UPLOAD_FAIL)})},beforeUpload:function(t){console.log(t)}}},c=n,i=(o("7634"),o("2877")),u=Object(i["a"])(c,a,s,!1,null,"6b2c1752",null);e["default"]=u.exports},7634:function(t,e,o){"use strict";var a=o("98b4"),s=o.n(a);s.a},"98b4":function(t,e,o){}}]);