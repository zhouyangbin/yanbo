(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cfcdf5c"],{"372d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},n=[],l={},o=l,s=(a("ee47"),a("2877")),i=Object(s["a"])(o,r,n,!1,null,"6c517b7e",null),c=i.exports;a.d(t,"a",function(){return u});var u=function(e){return function(){return{component:e,loading:c,delay:0}}}},"919b":function(e,t,a){},"989a":function(e,t,a){"use strict";var r=a("919b"),n=a.n(r);n.a},"9f9e":function(e,t,a){},ee3b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lower-level"},[a("section",[a("div",{staticClass:"filter-title"},[a("span",[e._v("考核人员明细")]),a("span",{staticClass:"filter-number"},[e._v("共"+e._s(e.total)+"人")])]),a("el-form",{ref:"filterForm",staticClass:"demo-form-inline filter-form",attrs:{inline:!0,model:e.filterForm}},[a("el-form-item",{attrs:{prop:"name"}},[a("common-select",{attrs:{code:e.filterForm.name,isDisabled:!1},on:{selectedUser:e.selectWorkCode}})],1),a("el-form-item",{attrs:{prop:"stage"}},[a("el-select",{attrs:{placeholder:"请选择状态"},on:{change:e.changeStage},model:{value:e.filterForm.stage,callback:function(t){e.$set(e.filterForm,"stage",t)},expression:"filterForm.stage"}},e._l(e.constants.STAGEOPTIONS,function(e){return a("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1),a("el-form-item",{attrs:{prop:"score_tag"}},[a("el-select",{attrs:{placeholder:"请选择标签"},on:{change:e.changeScoreTag},model:{value:e.filterForm.score_tag,callback:function(t){e.$set(e.filterForm,"score_tag",t)},expression:"filterForm.score_tag"}},e._l(e.tagOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.display_name,value:e.id}})}),1)],1),a("el-form-item",[a("el-button",{on:{click:function(t){return e.resetForm("filterForm")}}},[e._v("清空")])],1)],1),a("el-table",{staticClass:"lower-list",staticStyle:{width:"100%"},attrs:{data:e.lowerList}},[a("el-table-column",{attrs:{prop:"workcode",label:"工号",width:"100"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",{staticStyle:{height:"44px"},attrs:{type:"flex",align:"middle"}},[a("span",[e._v(e._s(t.row.name))]),100===t.row.stage?a("span",{staticClass:"appeal-tag"},[e._v("\n              申述中\n            ")]):e._e()])]}}])}),a("el-table-column",{attrs:{prop:"sub_department_name","show-overflow-tooltip":!0,label:"大部门/分校"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.sub_department_name?a("div",[e._v("\n            "+e._s(t.row.sub_department_name)+"\n          ")]):a("div",[e._v("\n            — —\n          ")])]}}])}),a("el-table-column",{attrs:{prop:"hrbp_name",label:"HRBP"}}),a("el-table-column",{attrs:{prop:"isolation_name",label:"隔级"}}),a("el-table-column",{attrs:{prop:"self_score",label:"自评分"}}),a("el-table-column",{attrs:{prop:"superior_score",label:"复评分"}}),a("el-table-column",{attrs:{prop:"culture",label:"文化评分"}}),a("el-table-column",{attrs:{prop:"final",label:"最终成绩"}}),a("el-table-column",{attrs:{prop:"score_tag",label:"标签分布"}}),a("el-table-column",{attrs:{prop:"stage_text",label:"状态"}}),a("el-table-column",{attrs:{prop:"hrbp_name",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"grade-operation",on:{click:function(a){return e.viewDetail(t.row)}}},[e._v("\n            详情\n          ")])]}}])})],1)],1),a("br"),a("el-row",{attrs:{type:"flex",justify:"end"}},[e.total?a("el-pagination",{attrs:{background:"","current-page":e.page,"page-sizes":[10,20,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)],1)},n=[],l=(a("7f7f"),a("fea5")),o=a("c9f1"),s=a("38fb"),i=a("372d"),c={props:{performanceId:{type:String,default:""},performance_user_id:{type:String,default:""}},components:{"common-select":Object(i["a"])(a.e("chunk-2d21647e").then(a.bind(null,"c292")))},data:function(){return{constants:{STAGEOPTIONS:s["Le"]},nav:[{label:"团队评分",href:o["m"]},{label:"评分详情",active:!0}],page:1,perPage:10,total:0,filterForm:{name:"",stage:"",score_tag:""},tagOptions:[],lowerList:[]}},methods:{selectWorkCode:function(e){this.filterForm.name=e,this.getMyLowerList()},handleCurrentChange:function(e){this.page=e,this.getMyLowerList()},handleSizeChange:function(e){this.perPage=e,this.getMyLowerList()},changeStage:function(){this.getMyLowerList()},changeScoreTag:function(){this.getMyLowerList()},resetForm:function(e){this.$refs[e].resetFields(),this.getMyLowerList()},viewDetail:function(e){this.$router.push(Object(o["nb"])(this.performanceId,e.performance_user_id,"subteam"))},getMyLowerList:function(){var e=this,t={performance_id:parseInt(this.performanceId),page:this.page,perPage:this.perPage,name:this.filterForm.name,stage:this.filterForm.stage,score_tag:this.filterForm.score_tag};Object(l["F"])(t).then(function(t){var a=t.data,r=t.total;e.total=r,e.lowerList=a})}},created:function(){var e=this;Object(l["N"])(this.performanceId).then(function(t){e.tagOptions=t}).catch(function(e){}),this.getMyLowerList()}},u=c,p=(a("989a"),a("2877")),f=Object(p["a"])(u,r,n,!1,null,"77c53d69",null);t["default"]=f.exports},ee47:function(e,t,a){"use strict";var r=a("9f9e"),n=a.n(r);n.a}}]);