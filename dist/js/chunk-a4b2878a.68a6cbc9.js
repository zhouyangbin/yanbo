(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4b2878a"],{"372d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},i=[],s={},l=s,o=(n("ee47"),n("2877")),r=Object(o["a"])(l,a,i,!1,null,"6c517b7e",null),c=r.exports;n.d(e,"a",function(){return d});var d=function(t){return function(){return{component:t,loading:c,delay:0}}}},"6a76":function(t,e,n){"use strict";var a=n("e050"),i=n.n(a);i.a},"9f9e":function(t,e,n){},c902:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"label-settings"},[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container"},[n("section",[n("el-form",{attrs:{inline:!0}},[n("el-form-item",[n("el-cascader",{attrs:{props:t.filterProps,placeholder:t.constants.LABEL_SELECT_DIVISION,options:t.orgTree,"show-all-levels":!1},on:{change:t.handleChange},model:{value:t.department_ids,callback:function(e){t.department_ids=e},expression:"department_ids"}})],1),n("el-form-item",[n("el-button",{attrs:{round:""},on:{click:t.resetForm}},[t._v(t._s(t.constants.RESET))])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",round:""},on:{click:t.createTpl}},[t._v(t._s(t.constants.ADD_NEW_LABEL))])],1)],1),n("br"),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{type:"index",label:t.constants.SERIAL_NUMBER,width:"50"}}),n("el-table-column",{attrs:{prop:"tag_type",label:t.constants.TAG_NAME,width:"80"}}),n("el-table-column",{attrs:{prop:"departments_text",label:t.constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,width:"250","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"rule_text",label:t.constants.CORRESPONDING_GRADE_AND_PROPORTION,"min-width":"200"}}),n("el-table-column",{attrs:{prop:"force_distribution",label:t.constants.FORCED_DISTRIBUTION_OR_NOT,width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.force_distribution?"是":"否")+"\n          ")]}}])}),n("el-table-column",{attrs:{label:t.constants.LABEL_OPERATIONS,width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"text"},on:{click:function(n){return t.updateTpl(e.row)}}},[t._v(t._s(t.constants.LABEL_MODIFY))]),n("el-button",{attrs:{size:"small",type:"text"},on:{click:function(n){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),n("br"),n("el-row",{attrs:{type:"flex",justify:"end"}},[t.total?n("el-pagination",{attrs:{background:"","current-page":t.page,"page-sizes":[10,20,50],layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)],1)]),t.showDialog?n("label-dialog",{attrs:{userId:t.userId,visible:t.showDialog,infoType:t.infoType,orgTree:t.orgTree},on:{close:t.tplDialogClose}}):t._e(),n("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"400px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("span",[t._v("是否确认删除标签？")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.deleteMsg}},[t._v("确定")])],1)])],1)},i=[],s=n("38fb"),l=n("fea5"),o=n("372d"),r={components:{"nav-bar":function(){return n.e("chunk-d5094d72").then(n.bind(null,"3208"))},"label-dialog":Object(o["a"])(n.e("chunk-4d6ca0d0").then(n.bind(null,"d6d9")))},data:function(){return{filterProps:{value:"id",label:"name",children:"children"},page:1,perPage:10,total:0,infoType:"add",showDialog:!1,tableData:[],userId:0,orgTree:[],constants:{LABEL_SELECT_DIVISION:s["Pc"],ADD_NEW_LABEL:s["d"],SERIAL_NUMBER:s["Ee"],BUSINESS_UNIT_AND_FUNCTIONAL_UNIT:s["z"],FORCED_DISTRIBUTION_OR_NOT:s["Xb"],TAG_NAME:s["Oe"],CORRESPONDING_GRADE_AND_PROPORTION:s["P"],LABEL_OPERATIONS:s["Gc"],LABEL_MODIFY:s["Ec"],RESET:s["qe"],FORCED_DISTRIBUTION_VALUE:s["Yb"]},nav:[{label:s["Tc"],active:!0}],department_ids:[],dialogVisible:!1,deleteId:0}},methods:{handleChange:function(){this.page=1,this.getAdminTagsList()},resetForm:function(){this.page=1,this.department_ids=[],this.getAdminTagsList()},createTpl:function(){this.infoType="add",this.showDialog=!0},tplDialogClose:function(){this.showDialog=!1},handleSizeChange:function(t){this.perPage=t,this.getAdminTagsList()},handleCurrentChange:function(t){this.page=t,this.getAdminTagsList()},updateTpl:function(t){this.infoType="modify",this.userId=t.id,this.showDialog=!0},getAdminTagsList:function(){var t=this,e={department_ids:this.department_ids,page:this.page,perPage:this.perPage};Object(l["q"])(e).then(function(e){var n=e.data,a=e.total;t.total=a,t.tableData=n}).catch(function(){})},handleDelete:function(t){this.dialogVisible=!0,this.deleteId=t.id},deleteMsg:function(){var t=this;this.dialogVisible=!1,Object(l["i"])(this.deleteId).then(function(e){t.getAdminTagsList()}).catch(function(t){})}},created:function(){var t=this;this.getAdminTagsList(),Object(l["db"])().then(function(e){t.orgTree=e}).catch(function(t){})}},c=r,d=(n("6a76"),n("2877")),u=Object(d["a"])(c,a,i,!1,null,"79ea4190",null);e["default"]=u.exports},e050:function(t,e,n){},ee47:function(t,e,n){"use strict";var a=n("9f9e"),i=n.n(a);i.a}}]);