(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06109186"],{"141c":function(t,n,e){},"1db3":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-grade-list"},[e("nav-bar",{attrs:{list:t.nav}}),e("br"),e("br"),e("section",{staticClass:"content-container"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[t._l(t.columns,function(t,n){return e("el-table-column",{key:n,attrs:{prop:t.prop,label:t.label}})}),e("el-table-column",{attrs:{prop:"address",label:t.constants.OPERATIONS},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.goDetail(n.row)}}},[t._v(t._s(t.constants.DETAILS))]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.exportMore(n.row)}}},[t._v(t._s(t.constants.EXPORT_DETAILS))])]}}])})],2),e("br"),e("el-row",{attrs:{type:"flex",justify:"end"}},[e("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),e("br")],1)],1)},r=[],o=e("38fb"),c=e("fea5"),l=e("c9f1"),s={data:function(){return{currentPage:1,total:0,tableData:[],nav:[{label:o["Ic"],active:!0}],constants:{DETAILS:o["O"],OPERATIONS:o["fd"],EXPORT_DETAILS:o["rb"]},columns:[{prop:"name",label:o["Cb"]},{prop:"end_time",label:o["yb"]}]}},components:{"nav-bar":function(){return e.e("chunk-5a85c387").then(e.bind(null,"3208"))},pagination:function(){return e.e("chunk-5db148a8").then(e.bind(null,"486f"))}},methods:{goDetail:function(t){this.$router.push(Object(l["E"])(t.id))},handleCurrentChange:function(){this.currentPage=val,this.refreshList({page:val})},refreshList:function(t){var n=this;return Object(c["E"])(t).then(function(t){var e=t.total,a=t.data;n.total=e,n.tableData=a}).catch(function(t){})},exportMore:function(t){window.open(Object(l["m"])(t.id,1),"_blank","noopener")}},created:function(){this.refreshList({page:1})}},i=s,u=(e("fc6e"),e("2877")),b=Object(u["a"])(i,a,r,!1,null,"20eb957c",null);b.options.__file="index.vue";n["default"]=b.exports},fc6e:function(t,n,e){"use strict";var a=e("141c"),r=e.n(a);r.a}}]);