(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1831be2d"],{"3c8a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"uploadTargetDialog",attrs:{title:"上传工作指标",visible:t.isUpload,"close-on-click-modal":!1,width:"700px"},on:{close:t.close}},[a("el-form",{attrs:{"label-width":"150px"}},[a("el-form-item",{attrs:{label:"模版下载"}},[a("el-button",{attrs:{type:"text"},on:{click:t.downloadTemplate}},[t._v("下载")])],1),a("el-form-item",{attrs:{label:"上传文件"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.constants.PATH_UPLOAD_FILE(this.$route.params.uid),headers:t.uploadHeader,"on-success":t.uploadSuccess,"on-error":t.uploadError},on:{"before-upload":t.beforeUpload}},[a("el-button",{attrs:{type:"text"}},[t._v("选择文件")])],1)],1),a("el-form-item",{attrs:{label:"提示信息"}})],1),a("div",{staticClass:"notice"},[t._v("\n    请注意：如页面已有工作指标内容，上传将覆盖所有工作指标内容。\n  ")]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.close}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"}},[t._v("确定")])],1)],1)},s=[],r=(a("7f7f"),a("ac6a"),a("456d"),a("fea5")),n=a("c9f1"),l={props:{isUpload:{type:Boolean,default:!1}},data:function(){return{constants:{PATH_UPLOAD_FILE:n["hb"]}}},computed:{uploadHeader:function(){return{Authorization:"Bearer ".concat(localStorage.getItem("talToken"))}}},methods:{close:function(){this.$emit("close")},downloadTemplate:function(){var t=this;Object(r["ub"])(this.$route.params.uid).then(function(e){t.$message.success("下载成功")}).catch(function(){})},uploadSuccess:function(t,e,a){t&&t.data&&t.data.errors&&t.data.errors.length>0?this.$notify.error({title:ERROR,message:"上传内容有部分错误!"}):this.$notify({title:SUCCESS,message:UPLOAD_SUCCESS,type:"success"})},uploadError:function(t,e,a){var o,s=JSON.parse(t.message);o=435==s.status&&s.data&&s.data.errors?s.data.errors[Object.keys(s.data.errors)[0]].join("/"):s.message,this.$notify.error({title:"ERROR",message:o||"".concat(e.name).concat(UPLOAD_FAIL)})},beforeUpload:function(t){}}},c=l,i=(a("820f"),a("2877")),u=Object(i["a"])(c,o,s,!1,null,"2039edf0",null);e["default"]=u.exports},"5e74":function(t,e,a){},"820f":function(t,e,a){"use strict";var o=a("5e74"),s=a.n(o);s.a}}]);