webpackJsonp([18],{Pszm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("OE2U"),n=a("xwzc"),l=a("diSO"),s=a("BHhq"),o={data:function(){return{total:0,currentPage:1,filterForm:{status:"",name:""},chartData:[],nav:[{label:r["_99"],active:!0}],tableData:[],constants:{DETAILS:r["z"]}}},components:{"nav-bar":function(){return a.e(25).then(a.bind(null,"PI/7"))},"peformance-pie":Object(l["a"])(a.e(35).then(a.bind(null,"HXsH"))),pagination:function(){return a.e(26).then(a.bind(null,"734F"))}},methods:{goDetail:function(t){this.$router.push(Object(n["d"])(this.$route.params.id,t.id))},refreshList:function(t){var e=this;return Object(s["y"])(this.$route.params.id,t).then(function(t){var a=t.user,r=t.overview;e.tableData=a.data,e.total=a.total,e.chartData=r}).catch(function(t){})},handleCurrentChange:function(t){this.currentPage=t,this.refreshList({page:t,name:this.filterForm.name,superior_status:this.filterForm.status})}},watch:{filterForm:{handler:function(t){var e={name:t.name,superior_status:t.status,page:1};this.refreshList(e),this.currentPage=1},deep:!0,immediate:!0}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"content-container"},[a("section",[a("el-form",{ref:"filterForm",attrs:{inline:!0,model:t.filterForm}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.filterForm.name,callback:function(e){t.$set(t.filterForm,"name",e)},expression:"filterForm.name"}})],1),a("el-form-item",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.filterForm.status,callback:function(e){t.$set(t.filterForm,"status",e)},expression:"filterForm.status"}},[a("el-option",{attrs:{label:"未完成",value:"0"}}),a("el-option",{attrs:{label:"已完成",value:"1"}})],1)],1)],1)],1),a("section",[a("el-row",{attrs:{type:"flex",gutter:20,align:"top"}},[a("el-col",{attrs:{span:18}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.avatar,alt:""}}),a("span",[t._v(t._s(e.row.name))]),e.row.has_appeal?a("span",{staticClass:"appeal-tag"},[t._v("申诉")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"self_score",label:"自评",width:"180"}}),a("el-table-column",{attrs:{prop:"superior_score",label:"上级评"}}),a("el-table-column",{attrs:{prop:"score_level",label:"对应等级"}}),a("el-table-column",{attrs:{prop:"ops",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.goDetail(e.row)}}},[t._v(t._s(t.constants.DETAILS))])]}}])})],1),a("br"),a("el-row",{attrs:{type:"flex",justify:"end"}},[a("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1),a("el-col",{attrs:{span:6}},[a("peformance-pie",{attrs:{data:t.chartData}})],1)],1)],1)])],1)},c=[],u=a("XyMi");function p(t){a("Qciq")}var f=!1,m=p,h="data-v-1b84ecb2",d=null,b=Object(u["a"])(o,i,c,f,m,h,d);e["default"]=b.exports},Qciq:function(t,e){}});
//# sourceMappingURL=18.e46015b3.js.map