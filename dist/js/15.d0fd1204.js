webpackJsonp([15],{Kq26:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("OE2U"),o=n("diSO"),i=n("BHhq"),l={data:function(){return{currentPage:1,total:0,delVisible:!1,tableData:[],initData:{},tplForm:{name:"",dp:""},infoType:"add",showDialog:!1,options:[],nav:[{label:a["_107"],active:!0}],treeProps:{value:"id",label:"name"},constants:{TPL_NAME:a["_108"],LABEL_SELECT_DIVISION:a["_45"],LABEL_ADD:a["_23"],OPERATIONS:a["_77"],MODIFY:a["_64"],DEL:a["y"],PERFORMANCE_TYPE:a["_81"],APPLIED_DEPARTMENTS:a["e"]}}},components:{"nav-bar":function(){return n.e(25).then(n.bind(null,"PI/7"))},"tpl-dialog":Object(o["a"])(n.e(48).then(n.bind(null,"C5WO"))),pagination:function(){return n.e(26).then(n.bind(null,"734F"))}},methods:{addTpl:function(){this.infoType="add",this.showDialog=!0},tplDialogClose:function(){this.showDialog=!1;var t={department_id:this.tplForm.dp||"",name:this.tplForm.name,page:this.currentPage};this.refreshList(t)},updateTpl:function(t){this.infoType="modify",this.initData={id:t.id},this.showDialog=!0},delTpl:function(t){var e=this;return this.$confirm(a["z"],a["f"],{roundButton:!0,confirmButtonText:a["_26"],cancelButtonText:a["_25"],type:"warning",center:!0}).then(function(){Object(i["d"])(t.id).then(function(t){e.refreshList({department_id:e.tplForm.dp||"",name:e.tplForm.name,page:e.currentPage}),e.delVisible=!1}).catch(function(t){})}).catch(function(){})},handleCurrentChange:function(t){this.currentPage=t,this.refreshList({department_id:this.tplForm.dp||"",name:this.tplForm.name,page:t})},refreshList:function(t){var e=this;return Object(i["D"])(t).then(function(t){var n=t.total,a=t.data;e.total=n,e.tableData=a}).catch(function(t){})},getDepartment:function(){var t=this;Object(i["j"])().then(function(e){t.options=e})},resetForm:function(){this.tplForm={name:"",dp:""}}},watch:{tplForm:{handler:function(t){var e={department_id:t.dp||"",name:t.name,page:1};this.currentPage=1,this.refreshList(e)},deep:!0,immediate:!0}},created:function(){this.getDepartment()}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tpl-setting"},[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container"},[n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("el-form",{ref:"tplForm",attrs:{inline:!0,model:t.tplForm}},[n("el-form-item",[n("el-input",{attrs:{placeholder:t.constants.TPL_NAME},model:{value:t.tplForm.name,callback:function(e){t.$set(t.tplForm,"name",e)},expression:"tplForm.name"}})],1),n("el-form-item",[n("el-select",{attrs:{placeholder:t.constants.LABEL_SELECT_DIVISION},model:{value:t.tplForm.dp,callback:function(e){t.$set(t.tplForm,"dp",e)},expression:"tplForm.dp"}},t._l(t.options,function(t){return n("el-option",{key:t.department_id,attrs:{label:t.name,value:t.department_id}})}))],1),n("el-form-item",[n("el-button",{attrs:{round:""},on:{click:t.resetForm}},[t._v("重置")])],1)],1),n("el-button",{attrs:{type:"primary",round:""},on:{click:t.addTpl}},[t._v(t._s(t.constants.LABEL_ADD))])],1),n("br"),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{prop:"name",label:t.constants.TPL_NAME}}),n("el-table-column",{attrs:{prop:"department",label:t.constants.APPLIED_DEPARTMENTS}}),n("el-table-column",{attrs:{prop:"type",label:t.constants.PERFORMANCE_TYPE}}),n("el-table-column",{attrs:{label:t.constants.OPERATIONS},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.updateTpl(e.row)}}},[t._v(t._s(t.constants.MODIFY))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.delTpl(e.row)}}},[t._v(t._s(t.constants.DEL))])]}}])})],1),n("br"),n("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t.showDialog?n("tpl-dialog",{attrs:{initData:t.initData,departmentsOps:t.options,visible:t.showDialog,infoType:t.infoType},on:{close:t.tplDialogClose}}):t._e()],1)},s=[],c=n("XyMi");function p(t){n("PHQJ")}var u=!1,d=p,m="data-v-43c3fc40",f=null,h=Object(c["a"])(l,r,s,u,d,m,f);e["default"]=h.exports},PHQJ:function(t,e){}});
//# sourceMappingURL=15.d0fd1204.js.map