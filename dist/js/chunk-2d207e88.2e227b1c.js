(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207e88"],{a311:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"roles-setting"},[e("nav-bar",{attrs:{list:t.nav}}),e("section",{staticClass:"content-container"},[e("br"),e("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,stripe:""}},[e("el-table-column",{attrs:{prop:"name",label:t.constants.ROLE}}),e("el-table-column",{attrs:{prop:"permissions",label:t.constants.ACCESS},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v(t._s(n.row.permissions.join(", ")))]}}])})],1),e("br"),e("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},r=[],s=e("38fb"),i=e("fea5"),o={data:function(){return{tableData:[],total:0,currentPage:1,nav:[{label:s["Od"],active:!0}],constants:{ROLE:s["Nd"],ACCESS:s["a"]}}},components:{"nav-bar":function(){return e.e("chunk-7f5a78f4").then(e.bind(null,"3208"))},pagination:function(){return e.e("chunk-5e56fd6b").then(e.bind(null,"486f"))}},methods:{handleCurrentChange:function(t){this.currentPage=t,this.refreshList(t)},refreshList:function(t){var n=this;return Object(i["W"])({page:t}).then((function(t){var e=t.total,a=t.data;n.total=e,n.tableData=a}))}},created:function(){this.refreshList(1)}},l=o,c=e("4e82"),u=Object(c["a"])(l,a,r,!1,null,"71f815b1",null);n["default"]=u.exports}}]);