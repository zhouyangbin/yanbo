webpackJsonp([15],{Pszm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("OE2U"),n=a("xwzc"),s=a("diSO"),l=a("BHhq"),o={data:function(){return{total:0,currentPage:1,filterForm:{status:"",name:""},chartData:[],nav:[{label:r["_117"],href:n["c"]},{label:r["_15"],active:!0}],tableData:[],constants:{DETAILS:r["F"],SELF_EVALUATION:r["_106"],LABEL_NAME:r["_40"],LABEL_SUP:r["_55"],OPERATIONS:r["_82"],APPEAL:r["d"],LABEL_EMPTY:r["_34"]}}},components:{"nav-bar":function(){return a.e(25).then(a.bind(null,"PI/7"))},"peformance-pie":Object(s["a"])(a.e(37).then(a.bind(null,"HXsH"))),pagination:function(){return a.e(26).then(a.bind(null,"734F"))}},methods:{resetForm:function(t){this.$refs[t].resetFields()},goDetail:function(t){this.$router.push(Object(n["d"])(this.$route.params.id,t.id))},refreshList:function(t){var e=this;return Object(l["D"])(this.$route.params.id,t).then(function(t){var a=t.user,r=t.overview;e.tableData=a.data,e.total=a.total,e.chartData=r}).catch(function(t){})},handleCurrentChange:function(t){this.currentPage=t,this.refreshList({page:t,name:this.filterForm.name,superior_status:this.filterForm.status})}},watch:{filterForm:{handler:function(t){var e={name:t.name,superior_status:t.status,page:1};this.refreshList(e),this.currentPage=1},deep:!0,immediate:!0}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"content-container"},[a("section",[a("el-form",{ref:"filterForm",attrs:{inline:!0,model:t.filterForm}},[a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.filterForm.name,callback:function(e){t.$set(t.filterForm,"name",e)},expression:"filterForm.name"}})],1),a("el-form-item",{attrs:{prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.filterForm.status,callback:function(e){t.$set(t.filterForm,"status",e)},expression:"filterForm.status"}},[a("el-option",{attrs:{label:"未完成",value:"0"}}),a("el-option",{attrs:{label:"已完成",value:"1"}})],1)],1),a("el-button",{staticStyle:{"margin-left":"30px"},attrs:{round:""},on:{click:function(e){t.resetForm("filterForm")}}},[t._v(t._s(t.constants.LABEL_EMPTY))])],1)],1),a("section",[a("el-row",{attrs:{type:"flex",gutter:20,align:"top"}},[a("el-col",{attrs:{span:18}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:t.constants.LABEL_NAME,"min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-row",{attrs:{type:"flex",align:"middle"}},[e.row.avatar?a("img",{staticStyle:{"margin-right":"15px"},attrs:{width:"30px",height:"30px",src:e.row.avatar+"_30x30q100.jpg",alt:""}}):a("span",{staticClass:"stringAvatar"},[t._v(t._s(e.row.name.substr(e.row.name.length-2)))]),a("span",[t._v(t._s(e.row.name))]),e.row.has_appeal?a("span",{staticClass:"appeal-tag"},[t._v(t._s(t.constants.APPEAL))]):t._e()])]}}])}),a("el-table-column",{attrs:{prop:"self_score",label:t.constants.SELF_EVALUATION,width:"180"}}),a("el-table-column",{attrs:{prop:"superior_score",label:t.constants.LABEL_SUP}}),a("el-table-column",{attrs:{prop:"score_level",label:"对应等级"}}),a("el-table-column",{attrs:{prop:"ops",label:t.constants.OPERATIONS},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.goDetail(e.row)}}},[t._v(t._s(t.constants.DETAILS))])]}}])})],1),a("br"),a("el-row",{attrs:{type:"flex",justify:"end"}},[a("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1),a("el-col",{attrs:{span:6}},[a("peformance-pie",{attrs:{data:t.chartData}})],1)],1)],1)])],1)},c=[],u=a("XyMi");function p(t){a("qELu")}var f=!1,m=p,h="data-v-559b70d3",d=null,_=Object(u["a"])(o,i,c,f,m,h,d);e["default"]=_.exports},qELu:function(t,e){}});
//# sourceMappingURL=15.f84fca72.js.map