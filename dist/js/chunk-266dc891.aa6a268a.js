(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-266dc891"],{"0a60":function(t,e,n){},"372d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},i=[],o={},l=o,r=(n("cdb1"),n("2877")),s=Object(r["a"])(l,a,i,!1,null,"11474e22",null),c=s.exports;n.d(e,"a",function(){return u});var u=function(t){return function(){return{component:t,loading:c,delay:0}}}},"5f05":function(t,e,n){},b8a0:function(t,e,n){"use strict";var a=n("0a60"),i=n.n(a);i.a},c902:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"label-settings"},[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container"},[n("section",[n("el-form",{ref:"conditionForm",attrs:{inline:!0,model:t.conditionForm}},[n("el-form-item",[n("el-cascader",{attrs:{props:t.filterProps,placeholder:t.constants.LABEL_SELECT_DIVISION,options:t.orgTree,"show-all-levels":!1},on:{change:t.checkCascader},model:{value:t.evaluation_id,callback:function(e){t.evaluation_id=e},expression:"evaluation_id"}})],1),n("el-form-item",[n("el-button",{attrs:{round:""},on:{click:function(e){return t.resetForm("conditionForm")}}},[t._v(t._s(t.constants.RESET))])],1),n("el-form-item",[t.canCreateTpl?n("el-button",{attrs:{type:"primary",round:""},on:{click:t.createTpl}},[t._v(t._s(t.constants.ADD_NEW_LABEL))]):t._e()],1)],1),n("br"),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{type:"index",label:t.constants.SERIAL_NUMBER,width:"50"}}),n("el-table-column",{attrs:{prop:"tag_type",label:t.constants.TAG_NAME,width:"80"}}),n("el-table-column",{attrs:{prop:"departments_text",label:t.constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,width:"250","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"rule_text",label:t.constants.CORRESPONDING_GRADE_AND_PROPORTION,"min-width":"200"}}),n("el-table-column",{attrs:{prop:"force_distribution",label:t.constants.FORCED_DISTRIBUTION_OR_NOT,width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s((t.constants.FORCED_DISTRIBUTION_VALUE.filter(function(t){return t.key===e.row.force_distribution})[0]||{}).value)+"\n          ")]}}])}),n("el-table-column",{attrs:{label:t.constants.LABEL_OPERATIONS,width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.updateTpl(e.row)}}},[t._v(t._s(t.constants.LABEL_MODIFY))])]}}])})],1),n("br"),n("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[10,20,50],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),t.showDialog?n("label-dialog",{attrs:{initData:t.initData,departmentsOps:t.options,visible:t.showDialog,infoType:t.infoType,orgTree:t.orgTree},on:{close:t.tplDialogClose,getList:t.getAdminTagsList}}):t._e()],1)},i=[],o=(n("ac6a"),n("38fb")),l=n("fea5"),r=n("372d"),s={components:{"nav-bar":function(){return n.e("chunk-5d596fe7").then(n.bind(null,"3208"))},"label-dialog":Object(r["a"])(n.e("chunk-419557f7").then(n.bind(null,"d6d9")))},data:function(){return{filterProps:{value:"department_id",label:"department_name",children:"children"},currentPage:1,pageSize:10,total:0,infoType:"add",showDialog:!1,options:[],conditionForm:{evaluation_name_id:"",evaluation_id:""},departments:[],canCreateTpl:!0,tableData:[],initData:{},orgTree:[],constants:{LABEL_SELECT_DIVISION:o["Mc"],ADD_NEW_LABEL:o["d"],SERIAL_NUMBER:o["ue"],BUSINESS_UNIT_AND_FUNCTIONAL_UNIT:o["y"],FORCED_DISTRIBUTION_OR_NOT:o["Ub"],TAG_NAME:o["Ee"],CORRESPONDING_GRADE_AND_PROPORTION:o["O"],LABEL_OPERATIONS:o["Dc"],LABEL_MODIFY:o["Bc"],RESET:o["ge"],FORCED_DISTRIBUTION_VALUE:o["Vb"]},nav:[{label:o["Qc"],active:!0}],evaluation_id:[]}},methods:{checkCascader:function(){this.getAdminTagsList()},handleTagRulesDataStructure:function(t){var e=[];return t.forEach(function(t,n){void 0===t.children&&e.push(t),void 0!==t.children&&(e.push(t),t.children.forEach(function(t,n){t["isChildren"]=!0,e.push(t)}),delete t.children)}),e},resetForm:function(t){this.evaluation_id=[],this.getAdminTagsList()},changeDepartment:function(t){this.conditionForm=Object.assign({},this.conditionForm,{evaluation_id:t.value})},createTpl:function(){this.infoType="add",this.showDialog=!0},tplDialogClose:function(){this.showDialog=!1},handleSizeChange:function(t){this.pageSize=t},handleCurrentChange:function(t){this.currentPage=t,this.getAdminTagsList()},updateTpl:function(t){this.infoType="modify",this.initData={id:t.id},this.showDialog=!0},getAdminTagsList:function(){var t=this,e={department_ids:this.evaluation_id};Object(l["o"])(e).then(function(e){var n=e.data,a=e.total;t.total=a,t.tableData=n}).catch(function(){})}},created:function(){var t=this;this.getAdminTagsList(),Object(l["Y"])().then(function(e){t.orgTree=e}).catch(function(t){})}},c=s,u=(n("b8a0"),n("2877")),d=Object(u["a"])(c,a,i,!1,null,"e6f5e39a",null);e["default"]=d.exports},cdb1:function(t,e,n){"use strict";var a=n("5f05"),i=n.n(a);i.a}}]);