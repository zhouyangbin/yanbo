(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11ca4532"],{"85c4":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-grade-list"},[e("nav-bar",{attrs:{list:t.nav}}),e("br"),e("br"),e("section",{staticClass:"content-container"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[t._l(t.columns,function(t,n){return e("el-table-column",{key:n,attrs:{prop:t.prop,label:t.label}})}),e("el-table-column",{attrs:{prop:"address",label:t.constants.OPERATIONS},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.goDetail(n.row)}}},[t._v(t._s(t.constants.DETAILS))])]}}])})],2),e("br"),e("el-row",{attrs:{type:"flex",justify:"end"}},[e("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),e("br")],1)],1)},r=[],l=e("38fb"),c=e("fea5"),s=e("c9f1"),o={data:function(){return{currentPage:1,total:0,tableData:[],nav:[{label:l["Vc"],active:!0}],constants:{DETAILS:l["R"],OPERATIONS:l["jd"]},columns:[{prop:"name",label:l["Gb"]},{prop:"end_time",label:l["Bb"]},{prop:"stage_name",label:l["Jb"]}]}},components:{"nav-bar":function(){return e.e("chunk-22c37006").then(e.bind(null,"3208"))},pagination:function(){return e.e("chunk-28d9b0e5").then(e.bind(null,"486f"))}},methods:{goDetail:function(t){this.$router.push(Object(s["N"])(t.id))},handleCurrentChange:function(){this.currentPage=val,this.refreshList({page:val})},refreshList:function(t){var n=this;return Object(c["z"])(t).then(function(t){var e=t.total,a=t.data;n.total=e,n.tableData=a}).catch(function(t){})}},created:function(){this.refreshList({page:1})}},i=o,u=(e("c756"),e("2877")),b=Object(u["a"])(i,a,r,!1,null,"2d043d51",null);n["default"]=b.exports},"87f3":function(t,n,e){},c756:function(t,n,e){"use strict";var a=e("87f3"),r=e.n(a);r.a}}]);