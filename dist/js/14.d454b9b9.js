webpackJsonp([14],{"+Puz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("OE2U"),l=n("xwzc"),r=n("BHhq"),o={data:function(){return{total:0,currentPage:1,tableData:[],nav:[{label:a["_120"],active:!0}],constants:{DETAILS:a["F"],OPERATIONS:a["_85"],FINISHED_DATE:a["_15"],DURATION_TYPE:a["J"],GRADE_NAME:a["_19"],EXPORT_DETAILS:a["_8"],LABEL_DEPARTMENT:a["_36"]}}},components:{"nav-bar":function(){return n.e(26).then(n.bind(null,"PI/7"))},pagination:function(){return n.e(27).then(n.bind(null,"734F"))}},methods:{goDetail:function(t){this.$router.push(Object(l["e"])(t.id))},getList:function(t){var e=this;return Object(r["B"])(t).then(function(t){var n=t.total,a=t.data;e.tableData=a,e.total=n}).catch(function(t){})},handleCurrentChange:function(t){this.currentPage=t,this.getList({page:t})},exportDetail:function(t){window.open(Object(l["m"])(t.id),"_blank")}},created:function(){this.getList({page:1})}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-grade-list"},[n("nav-bar",{attrs:{list:t.nav}}),n("br"),n("br"),n("section",{staticClass:"content-container"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{prop:"name",label:t.constants.GRADE_NAME}}),n("el-table-column",{attrs:{prop:"department",label:t.constants.LABEL_DEPARTMENT}}),n("el-table-column",{attrs:{prop:"type",label:t.constants.DURATION_TYPE}}),n("el-table-column",{attrs:{prop:"end_time",label:t.constants.FINISHED_DATE}}),n("el-table-column",{attrs:{prop:"address",label:t.constants.OPERATIONS},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.goDetail(e.row)}}},[t._v(t._s(t.constants.DETAILS))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.exportDetail(e.row)}}},[t._v(t._s(t.constants.EXPORT_DETAILS))])]}}])})],1),n("br"),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},c=[],i=n("XyMi");function u(t){n("BYZT")}var b=!1,p=u,d="data-v-63218d25",_=null,E=Object(i["a"])(o,s,c,b,p,d,_);e["default"]=E.exports},BYZT:function(t,e){}});
//# sourceMappingURL=14.d454b9b9.js.map