(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aba7b"],{"15cd":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-dialog",{attrs:{title:"同意",visible:e.isAgreeDialog,"close-on-click-modal":!1,width:"700px"},on:{close:e.close}},[o("el-form",[o("el-form-item",[o("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请录入审批意见"},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}})],1)],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.close}},[e._v("取消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.submitAgreeContent}},[e._v("确定")])],1)],1)],1)},a=[],n=o("fea5"),r=o("c9f1"),c={props:{isAgreeDialog:{type:Boolean,default:!1}},data:function(){return{reason:"同意"}},methods:{close:function(){this.$emit("close")},submitAgreeContent:function(){var e=this,t={performance_user_id:this.$route.params.uid,type:2,reason:this.reason};Object(n["Ic"])(t).then(function(t){e.$message.success("审批成功"),e.close(),e.$router.push(Object(r["B"])(e.$route.params.id,e.$route.params.uid))}).catch(function(){e.close()})}}},i=c,l=o("2877"),u=Object(l["a"])(i,s,a,!1,null,"4a486a24",null);t["default"]=u.exports}}]);