(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ab3d145"],{"08ba":function(t,e,r){"use strict";r.r(e);var l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{staticClass:"tplDialog",attrs:{width:"650px",visible:t.visible},on:{close:t.close}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("\n    "+t._s("add"===t.infoType?t.constants.ADD:t.constants.MODIFY)+"\n  ")]),r("el-form",{ref:"tplForm",staticClass:"tplForm",attrs:{rules:t.rules,"label-width":"100px",model:t.tplForm}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},model:{value:t.tplForm.name,callback:function(e){t.$set(t.tplForm,"name",e)},expression:"tplForm.name"}})],1),r("el-form-item",{attrs:{label:"事业部",prop:"dp"}},[r("el-select",{attrs:{placeholder:"请选择事业部"},model:{value:t.tplForm.dp,callback:function(e){t.$set(t.tplForm,"dp",e)},expression:"tplForm.dp"}},t._l(t.departmentsOps,function(t){return r("el-option",{key:t.department_id,attrs:{label:t.name,value:t.department_id}})}))],1),r("el-form-item",{attrs:{label:"绩效类型",prop:"types"}},[r("el-select",{attrs:{placeholder:"请选择绩效类型 "},model:{value:t.tplForm.types,callback:function(e){t.$set(t.tplForm,"types",e)},expression:"tplForm.types"}},t._l(t.constants.ENUM_PERFORMANCE_TYPE,function(t){return r("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}))],1),r("el-form-item",{attrs:{label:"模板字段"}},[r("el-checkbox-group",{model:{value:t.tplForm.property,callback:function(e){t.$set(t.tplForm,"property",e)},expression:"tplForm.property"}},t._l(t.constants.ENUM_PERFORMANCE_CONFIG_PROPERTY,function(e){return r("el-checkbox",{key:e.key,attrs:{value:e.value,label:e.key,name:"property"}},[t._v(t._s(e.value))])}))],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v(t._s(t.constants.CONFIRM))]),r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.close}},[t._v(t._s(t.constants.CANCEL))])],1)],1)],1)},n=[],o=r("38fb"),s=r("fea5"),a={props:{visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},initData:{type:Object,default:function(){return{}}},departmentsOps:{type:Array,default:function(){return[]}}},data:function(){return{rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],dp:[{required:!0,message:"请选择事业部",trigger:"blur"}],types:[{required:!0,message:"请选择绩效类型",trigger:"blur"}]},property:[],tplForm:{name:"",dp:"",types:"",property:[]},constants:{ADD:o["c"],MODIFY:o["yc"],CONFIRM:o["q"],CANCEL:o["n"],ENUM_PERFORMANCE_TYPE:o["eb"],ENUM_PERFORMANCE_CONFIG_PROPERTY:o["cb"]}}},methods:{close:function(){this.$emit("close")},submit:function(){var t=this;this.$refs["tplForm"].validate(function(e){if(e){var r={name:t.tplForm.name,department_id:t.tplForm.dp,type_id:t.tplForm.types,template_columns:t.tplForm.property};return"add"==t.infoType?Object(s["ob"])(r).then(function(e){t.close()}):Object(s["tb"])(t.initData.id,r).then(function(e){t.close()})}})}},beforeDestroy:function(){this.$refs["tplForm"].resetFields()},created:function(){var t=this;"add"!=this.infoType&&this.initData.id&&Object(s["P"])(this.initData.id).then(function(e){var r=e.name,l=e.department_id,n=e.type_id,o=e.template_columns;t.tplForm={name:r,dp:l,types:n.toString(),property:o.map(function(t){return String(t.id)})}})}},i=a,p=(r("9dfa"),r("2877")),c=Object(p["a"])(i,l,n,!1,null,"41c9f156",null);c.options.__file="index.vue";e["default"]=c.exports},"2d87":function(t,e,r){},"9dfa":function(t,e,r){"use strict";var l=r("2d87"),n=r.n(l);n.a}}]);