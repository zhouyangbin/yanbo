webpackJsonp([22],{UZtV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("OE2U"),r=n("xwzc"),s=n("BHhq"),o={data:function(){return{tableColumns:[{prop:"department",label:a["D"]},{prop:"user_status",label:a["_109"]},{prop:"target_status",label:a["_129"]},{prop:"self_status",label:a["_120"]},{prop:"superior_status",label:a["_65"]},{prop:"appeal_status",label:a["e"]}],currentPage:1,total:0,performance_info:{},constants:{FINISHED_DATE:a["_17"],OPERATIONS:a["_95"],DETAILS:a["G"],EXPORT_DETAILS:a["_10"]},nav:[{label:a["_20"],href:r["H"]},{label:a["_22"],active:!0}],gradeName:"",finishedDate:"",listData:[]}},components:{"nav-bar":function(){return n.e(33).then(n.bind(null,"PI/7"))},pagination:function(){return n.e(34).then(n.bind(null,"734F"))}},methods:{goDetail:function(t){this.$router.push(Object(r["I"])(this.$route.params.id,t.id))},exportFile:function(t){window.open(Object(r["l"])(this.$route.params.id,t.id),"_blank","noopener")},handleCurrentChange:function(t){this.currentPage=t,this.getList(t)},getList:function(t){var e=this;return Object(s["u"])(this.$route.params.id,t).then(function(t){var n=t.total,a=t.data,r=t.performance_info;e.total=n,e.listData=a,e.performance_info=r}).catch(function(t){})}},created:function(){this.getList(1)}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container"},[n("div",{staticClass:"progress-header"},[n("span",[t._v(t._s(t.performance_info.name))]),t._v(" \n      "),n("span",{staticClass:"tips"},[t._v(t._s(t.constants.FINISHED_DATE)+" "+t._s(t.performance_info.end_time))]),n("hr")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listData,stripe:""}},[t._l(t.tableColumns,function(t,e){return n("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label,"min-width":0==e?180:""}})}),n("el-table-column",{attrs:{prop:"4",label:t.constants.OPERATIONS},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.goDetail(e.row)}}},[t._v(t._s(t.constants.DETAILS))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.exportFile(e.row)}}},[t._v(t._s(t.constants.EXPORT_DETAILS))])]}}])})],2),n("br"),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},l=[],c=n("XyMi");function u(t){n("YRVs")}var p=!1,_=u,f="data-v-3ac4f84a",d=null,b=Object(c["a"])(o,i,l,p,_,f,d);e["default"]=b.exports},YRVs:function(t,e){}});