(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-157b5060"],{"1c7e":function(t,e,a){},"52ca":function(t,e,a){},"58f8":function(t,e,a){},6226:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-upload",{staticClass:"uploader",attrs:{"on-success":t.uploadSuccess,"on-error":t.uploadErr,headers:t.uploadHeader,data:t.uploadData,drag:"",action:t.actionURL}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v("\n      "+t._s(t.constants.DRAG_FILE)+"\n      "),a("em",[t._v(t._s(t.constants.CLICK_TO_UPLOAD))])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a("a",{staticStyle:{cursor:"pointer"},on:{click:t.downloadTpl}},[t._v(t._s(t.constants.DOWNLOAD_EXCEL_TEMPLATE))])])]),a("err-table",{attrs:{errorData:t.errorData}})],1)},r=[],s=a("38fb"),n=a("ddc4"),l={props:{downloadURL:{type:String,default:""},uploadSuccess:{type:Function,default:function(){}},uploadErr:{type:Function,default:function(){}},actionURL:{type:String,default:""},uploadData:{type:Object,default:function(){return{}}},errorData:{type:Array,default:function(){return[]}}},data:function(){return{showTable:!1,constants:{DRAG_FILE:s["bb"],CLICK_TO_UPLOAD:s["B"],DOWNLOAD_EXCEL_TEMPLATE:s["X"]}}},computed:{uploadHeader:function(){return{Authorization:"Bearer ".concat(localStorage.getItem("talToken"))}}},methods:{downloadTpl:function(){this.downloadURL&&window.open(this.downloadURL,"_blank","noopener")}},components:{"err-table":n["a"]}},i=l,c=(a("cedb"),a("2877")),u=Object(c["a"])(i,o,r,!1,null,"20cc4a03",null);e["a"]=u.exports},"63b0":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"dialogImport",attrs:{width:"500px",visible:t.dialogImport,"close-on-click-modal":!1},on:{close:t.close}},[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.constants.IMPORT_RECORDS))]),a("div",{staticClass:"importTab"},[a("el-tabs",{model:{value:t.importTab,callback:function(e){t.importTab=e},expression:"importTab"}},[a("el-tab-pane",{attrs:{label:t.constants.EHR_IMPORT,name:"first"}},[a("el-form",{ref:"importForm",staticClass:"importForm",attrs:{"label-width":"80px",rules:t.importRules,model:t.importForm}},[a("el-form-item",{attrs:{label:t.constants.WORK_LEVEL,prop:"levels"}},[a("el-checkbox-group",{model:{value:t.importForm.levels,callback:function(e){t.$set(t.importForm,"levels",e)},expression:"importForm.levels"}},t._l(t.levels,function(t){return a("el-checkbox",{key:t.key,attrs:{label:t.value,name:"levels"}})}),1)],1)],1),a("err-table",{attrs:{errorData:t.eHRError}})],1),a("el-tab-pane",{attrs:{label:t.constants.EXCEL_IMPORT,name:"second"}},[a("import-excel",{attrs:{uploadSuccess:t.uploadSuccess,uploadErr:t.uploadErr,errorData:t.tableData,uploadHeader:t.uploadHeader,uploadData:t.uploadData,actionURL:t.constants.PATH_IMPORT_BY_EXCEL,downloadURL:t.constants.PATH_EXCEL_TPL}})],1)],1),a("span",{staticClass:"tips"},[t._v(t._s(t.constants.IMPORT_TIPS))])],1),"first"===t.importTab?a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:function(e){return t.importFiles("importForm")}}},[t._v(t._s(t.constants.CONFIRM))]),a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.close}},[t._v("\n        "+t._s(t.constants.CANCEL)+"\n      ")])],1)],1):t._e()])},r=[],s=(a("7f7f"),a("38fb")),n=a("fea5"),l=a("c9f1"),i=a("6226"),c=a("ddc4"),u={props:{dialogImport:{type:Boolean,default:!1},isManagerGrade:{type:Boolean,default:!1}},data:function(){return{importTab:"first",importForm:{levels:[]},importRules:{levels:[{type:"array",required:!0,message:"请至少选择一个级别",trigger:"change"}]},constants:{IMPORT_TIPS:s["Zb"],IMPORT_RECORDS:s["Xb"],EHR_IMPORT:s["db"],WORK_LEVEL:s["Ee"],ENUM_LEVELS:s["rb"],EXCEL_IMPORT:s["Ab"],CONFIRM:s["C"],CANCEL:s["x"],PATH_IMPORT_BY_EXCEL:l["E"],PATH_EXCEL_TPL:l["o"]},tableData:[],showTable:!1,eHRError:[],showTableEHR:!1}},methods:{initImportLevels:function(){this.isManagerGrade?this.importForm.levels=s["rb"].map(function(t){return t.value}):this.importForm.levels=s["rb"].filter(function(t){return parseFloat(t.value)<=3.3}).map(function(t){return t.value})},importFiles:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var a={evaluation_id:e.$route.params.orgID,levels:e.importForm.levels};Object(n["sb"])(a).then(function(t){e.$message({message:s["Yb"],type:"success"}),e.close()}).catch(function(t){e.eHRError=t.data.data,e.showTableEHR=!0})})},close:function(){this.$emit("close")},uploadErr:function(t,e,a){var o=JSON.parse(t.message);this.tableData=o.data,this.showTable=!0,this.$notify.error({title:s["zb"],message:"".concat(e.name).concat(s["we"],": ").concat(o.message)})},uploadSuccess:function(t,e,a){this.$notify({title:s["me"],message:s["xe"],type:"success"}),this.close()}},computed:{uploadData:function(){return{evaluation_id:this.$route.params.orgID}},uploadHeader:function(){return{Authorization:"Bearer ".concat(localStorage.getItem("talToken"))}},levels:function(){return this.isManagerGrade?this.constants.ENUM_LEVELS:this.constants.ENUM_LEVELS.filter(function(t){return t.value<=3.3})}},created:function(){this.initImportLevels()},components:{"import-excel":i["a"],"err-table":c["a"]}},p=u,d=(a("e2e3"),a("2877")),m=Object(d["a"])(p,o,r,!1,null,"0176c3d0",null);e["default"]=m.exports},a4e4:function(t,e,a){"use strict";var o=a("52ca"),r=a.n(o);r.a},cedb:function(t,e,a){"use strict";var o=a("1c7e"),r=a.n(o);r.a},ddc4:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.errorData.length>0?a("el-table",{staticClass:"err-table",staticStyle:{width:"100%"},attrs:{"max-height":"250",data:t.errorData}},[a("el-table-column",{attrs:{prop:"workcode",label:"工号"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"reason",label:"原因"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.reason.join(" "))+"\n    ")]}}],null,!1,1569412116)})],1):t._e()},r=[],s={props:{errorData:{type:Array,default:function(){return[]}}}},n=s,l=(a("a4e4"),a("2877")),i=Object(l["a"])(n,o,r,!1,null,"69272058",null);e["a"]=i.exports},e2e3:function(t,e,a){"use strict";var o=a("58f8"),r=a.n(o);r.a}}]);