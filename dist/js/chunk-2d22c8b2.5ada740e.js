(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c8b2"],{f44b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"finished"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[t._l(t.columns,function(t,e){return n("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label}})}),n("el-table-column",{attrs:{prop:"address",label:t.constants.OPERATIONS},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.goDetail(e.row)}}},[t._v(t._s(t.constants.DETAILS))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.exportMore(e.row)}}},[t._v(t._s(t.constants.EXPORT_DETAILS))])]}}])})],2),n("br")],1)},o=[],l=n("38fb"),s=n("c9f1"),r=n("fea5"),c={created:function(){this.getList()},data:function(){return{tableData:[],constants:{DETAILS:l["eb"],OPERATIONS:l["Rd"],EXPORT_DETAILS:l["Ob"]},columns:[{prop:"name",label:l["ec"]},{prop:"end_time",label:l["Wb"]}]}},methods:{getList:function(){var t=this;Object(r["u"])({page:1}).then(function(e){t.tableData=e.data})},goDetail:function(t){this.$router.push(Object(s["h"])(t.id,0))},exportMore:function(t){window.open(Object(s["F"])(t.id,1),"_blank","noopener")}}},i=c,u=n("2877"),b=Object(u["a"])(i,a,o,!1,null,"0aa300f1",null);e["default"]=b.exports}}]);