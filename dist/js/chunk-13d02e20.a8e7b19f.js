(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13d02e20"],{"10fe":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-grade-list"},[e("nav-bar",{attrs:{list:t.nav}}),e("br"),e("section",{staticClass:"content-container"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[t._l(t.columns,function(t,n){return e("el-table-column",{key:n,attrs:{prop:t.prop,label:t.label}})}),e("el-table-column",{attrs:{prop:"address",label:t.constants.OPERATIONS},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.goDetail(n.row)}}},[t._v(t._s(t.constants.DETAILS))]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.exportMore(n.row)}}},[t._v(t._s(t.constants.EXPORT_DETAILS))])]}}])})],2),e("br"),e("el-row",{attrs:{type:"flex",justify:"end"}},[e("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),e("br")],1)],1)},r=[],o=e("38fb"),l=e("fea5"),s=e("c9f1"),c={data:function(){return{currentPage:1,total:0,tableData:[],nav:[{label:o["T"],active:!0}],constants:{DETAILS:o["R"],OPERATIONS:o["jd"],EXPORT_DETAILS:o["ub"]},columns:[{prop:"name",label:o["Gb"]},{prop:"end_time",label:o["Bb"]}]}},components:{"nav-bar":function(){return e.e("chunk-d5094d72").then(e.bind(null,"3208"))},pagination:function(){return e.e("chunk-28d9b0e5").then(e.bind(null,"486f"))}},methods:{goDetail:function(t){this.$router.push(Object(s["h"])(t.id))},handleCurrentChange:function(){this.currentPage=val,this.refreshList({page:val})},refreshList:function(t){var n=this;return Object(l["E"])(t).then(function(t){var e=t.total,a=t.data;n.total=e,n.tableData=a})},exportMore:function(t){window.open(Object(s["p"])(t.id,2),"_blank","noopener")}},created:function(){this.refreshList({page:1})}},i=c,u=(e("d919"),e("2877")),b=Object(u["a"])(i,a,r,!1,null,"8b2f3362",null);n["default"]=b.exports},d919:function(t,n,e){"use strict";var a=e("fc16"),r=e.n(a);r.a},fc16:function(t,n,e){}}]);