webpackJsonp([69],{"6M2I":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("OE2U"),s=r("BHhq"),a={props:{visible:{type:Boolean,default:!1}},data:function(){return{rejectForm:{reason:""},rejectFormRules:{reason:[{required:!0,message:"请填写申诉理由",trigger:"blur"}]},constants:{CANCEL:o["m"],CONFIRM:o["p"]}}},methods:{close:function(){this.$emit("update:visible",!1),this.$emit("close")},submit:function(){var e=this;this.$refs["rejectForm"].validate(function(t){if(!t)return!1;var r=e.rejectForm.reason,o={performance_user_id:e.$route.params.id,reason:r};Object(s["O"])(o).then(function(t){e.close()}).catch(function(e){})})}}},n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"rejectForm",attrs:{title:"申诉理由",visible:e.visible,width:"30%"},on:{close:e.close}},[r("el-form",{ref:"rejectForm",attrs:{model:e.rejectForm,rules:e.rejectFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"理由",prop:"reason"}},[r("el-input",{attrs:{type:"textarea",maxlength:"200"},model:{value:e.rejectForm.reason,callback:function(t){e.$set(e.rejectForm,"reason",t)},expression:"rejectForm.reason"}})],1)],1),r("span",{staticClass:"reject-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.$emit("update:visible",!1)}}},[e._v(e._s(e.constants.CANCEL))]),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.constants.CONFIRM))])],1)],1)},i=[],c=r("XyMi");function l(e){r("lcio")}var u=!1,m=l,f="data-v-0c2b208a",p=null,b=Object(c["a"])(a,n,i,u,m,f,p);t["default"]=b.exports},lcio:function(e,t){}});