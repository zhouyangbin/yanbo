(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66ef0ad3"],{"19bb":function(t,e,n){"use strict";var a=n("2e65"),r=n.n(a);r.a},"2e65":function(t,e,n){},"5da2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-grade-list"},[n("nav-bar",{attrs:{list:t.nav}}),n("br"),n("section",{staticClass:"content-container"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{label:"类型",prop:"p_type"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(t._f("handleType")(e.row.p_type)))])]}}])}),n("el-table-column",{attrs:{prop:"name",label:t.constants.GRADE_NAME}}),n("el-table-column",{attrs:{prop:"department_name",label:t.constants.LABEL_DEPARTMENT}}),n("el-table-column",{attrs:{prop:"type",label:t.constants.DURATION_TYPE}}),n("el-table-column",{attrs:{prop:"end_time",label:t.constants.FINISHED_DATE}}),n("el-table-column",{attrs:{prop:"stage",label:t.constants.OPERATIONS},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.goDetail(e.row)}}},[t._v(t._s(t.constants.DETAILS))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.exportDetail(e.row)}}},[t._v(t._s(t.constants.EXPORT_DETAILS))])]}}])})],1),n("br"),n("el-row",{attrs:{type:"flex",justify:"end"}},[t.total?n("el-pagination",{attrs:{background:"","current-page":t.page,"page-sizes":[10,20,50],layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)],1)],1)},r=[],o=n("38fb"),l=n("c9f1"),s=n("fea5"),i={data:function(){return{page:1,perPage:10,total:0,tableData:[],nav:[{label:o["Le"],active:!0}],constants:{DETAILS:o["cb"],OPERATIONS:o["Hd"],FINISHED_DATE:o["Rb"],DURATION_TYPE:o["ib"],GRADE_NAME:o["Zb"],EXPORT_DETAILS:o["Jb"],LABEL_DEPARTMENT:o["vc"]}}},components:{"nav-bar":function(){return n.e("chunk-d5094d72").then(n.bind(null,"3208"))}},filters:{handleType:function(t){var e="";return"normal"===t?e="员工绩效":"executive"===t&&(e="组织部绩效"),e}},methods:{goDetail:function(t){"executive"==t.p_type?this.$router.push(Object(l["Y"])(t.performance_id,t.performance_user_id)):this.$router.push(Object(l["o"])(t.performance_id))},getList:function(){var t=this,e={page:this.page,perPage:this.perPage};Object(s["zb"])(e).then(function(e){var n=e.total,a=e.data;t.tableData=a,t.total=n}).catch(function(t){})},handleSizeChange:function(t){this.perPage=t,this.getList()},handleCurrentChange:function(t){this.page=t,this.getList()},exportDetail:function(t){window.open(Object(l["x"])(t.id),"_blank","noopener")}},created:function(){this.getList()}},c=i,u=(n("19bb"),n("2877")),p=Object(u["a"])(c,a,r,!1,null,"5e0199d6",null);e["default"]=p.exports}}]);