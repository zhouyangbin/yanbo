(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d06ce00"],{f5d3:function(e,a,r){"use strict";var t=r("f9df"),l=r.n(t);l.a},f9df:function(e,a,r){},ff66:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("el-dialog",{staticClass:"gradeForm",attrs:{title:"修改成绩","close-on-click-modal":!1,visible:e.visible,width:"30%"},on:{close:e.close}},[r("el-form",{ref:"gradeForm",attrs:{model:e.gradeForm,rules:e.gradeFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"结果",prop:"mark"}},[r("el-select",{staticStyle:{width:"100%"},model:{value:e.gradeForm.mark,callback:function(a){e.$set(e.gradeForm,"mark",a)},expression:"gradeForm.mark"}},e._l(e.marks,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),"B"!=e.gradeForm.mark?r("el-form-item",{attrs:{label:"标签/",prop:"label_id"}},[e.levalLabelRules.length?r("el-tag",{class:"A"==e.gradeForm.mark||"S"==e.gradeForm.mark?"status-tag top-style":"status-tag other-style"},[e._v(e._s(e.getlevalLabelRules(e.levalLabelRules)))]):e._e()],1):e._e(),"B"==e.gradeForm.mark?r("el-form-item",{attrs:{label:"标签/",prop:"label_id"}},e._l(e.levalLabelRules,function(a){return r("el-radio",{key:a.id,staticStyle:{display:"block","margin-top":"5px"},attrs:{label:a.id},model:{value:e.gradeForm.label_id,callback:function(a){e.$set(e.gradeForm,"label_id",a)},expression:"gradeForm.label_id"}},[e._v("\n        "+e._s(a.name)+"\n      ")])}),1):e._e(),r("el-form-item",{attrs:{label:"原因",prop:"reason"}},[r("el-input",{attrs:{type:"textarea",maxlength:1e3},model:{value:e.gradeForm.reason,callback:function(a){e.$set(e.gradeForm,"reason",a)},expression:"gradeForm.reason"}})],1)],1),r("span",{staticClass:"gradeForm-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.close}},[e._v(e._s(e.constants.CANCEL))]),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("\n      "+e._s(e.constants.CONFIRM)+"\n    ")])],1)],1)},l=[],s=(r("7f7f"),r("fea5")),o=r("38fb"),i={props:{visible:{type:Boolean,default:!1},mark:{type:String,default:""},label_id:{type:null,default:""}},data:function(){return{gradeForm:{mark:this.mark,label_id:this.label_id,reason:""},gradeFormRules:{mark:[{required:!0,message:"请选择分数",trigger:"change"}],label_id:[{required:!0,message:"请选择标签",trigger:"change"}],reason:[{required:!0,message:"请填写修改原因",trigger:"blur"}]},marks:["A","B","C","D","S"],levalLabelRules:[],constants:{CANCEL:o["x"],CONFIRM:o["C"]},id:1}},created:function(){this.getTagsRules()},methods:{close:function(){this.$emit("update:visible",!1),this.$emit("close")},submit:function(){var e=this;this.$refs["gradeForm"].validate(function(a){if(!a)return!1;var r=e.gradeForm,t=r.mark,l=r.reason,o=r.label_id,i={score_level:t,reason:l,label_id:o,action:3};Object(s["d"])(e.$route.params.orgID,e.$route.params.uid,i).then(function(a){e.close()}).catch(function(e){})})},getTagsRules:function(){var e=this;return Object(s["zb"])(this.id,this.gradeForm.mark,"superior").then(function(a){e.levalLabelRules=a}).catch(function(e){})},getlevalLabelRules:function(e){return this.gradeForm.label_id=e[0].id,e[0].name}},computed:{gradeForm_mark:function(){return this.gradeForm.mark}},watch:{gradeForm_mark:function(e,a){"B"==this.gradeForm.mark&&(this.gradeForm.label_id=""),this.getTagsRules()}}},n=i,d=(r("f5d3"),r("2877")),m=Object(d["a"])(n,t,l,!1,null,"6eb09a41",null);a["default"]=m.exports}}]);