(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60df403a"],{"303b":function(e,t,a){},"372d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},r=[],o={},l=o,s=(a("ee47"),a("2877")),i=Object(s["a"])(l,n,r,!1,null,"6c517b7e",null),c=i.exports;a.d(t,"a",function(){return u});var u=function(e){return function(){return{component:e,loading:c,delay:0}}}},"9c4d":function(e,t,a){"use strict";var n=a("303b"),r=a.n(n);r.a},"9f9e":function(e,t,a){},ee3b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lower-level"},[a("section",[a("div",{staticClass:"filter-title"},[a("span",[e._v("考核人员明细")]),a("span",{staticClass:"filter-number"},[e._v("共"+e._s(e.total)+"人")])]),a("el-form",{ref:"filterForm",staticClass:"demo-form-inline filter-form",attrs:{inline:!0,model:e.filterForm}},[a("el-form-item",{attrs:{prop:"name"}},[a("common-select",{attrs:{code:e.filterForm.name,isDisabled:!1},on:{selectedUser:e.selectWorkCode}})],1),a("el-form-item",{attrs:{prop:"stage"}},[a("el-select",{attrs:{placeholder:"请选择状态"},on:{change:e.changeStage},model:{value:e.filterForm.stage,callback:function(t){e.$set(e.filterForm,"stage",t)},expression:"filterForm.stage"}},e._l(e.stageOptions,function(e,t){return a("el-option",{key:e,attrs:{label:e,value:t}})}),1)],1),a("el-form-item",{attrs:{prop:"score_tag"}},[a("el-select",{attrs:{placeholder:"请选择标签"},on:{change:e.changeScoreTag},model:{value:e.filterForm.score_tag,callback:function(t){e.$set(e.filterForm,"score_tag",t)},expression:"filterForm.score_tag"}},e._l(e.tagOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.display_name,value:e.id}})}),1)],1),a("el-form-item",[a("el-button",{on:{click:function(t){return e.resetForm()}}},[e._v("清空")])],1)],1),a("el-table",{staticClass:"lower-list",staticStyle:{width:"100%"},attrs:{data:e.lowerList}},[a("el-table-column",{attrs:{prop:"workcode",label:"工号",width:"100"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",{staticStyle:{height:"44px"},attrs:{type:"flex",align:"middle"}},[a("span",[e._v(e._s(t.row.name))]),100===t.row.stage?a("span",{staticClass:"appeal-tag"},[e._v("\n              申述中\n            ")]):e._e()])]}}])}),a("el-table-column",{attrs:{prop:"sub_department_name","show-overflow-tooltip":!0,label:"大部门/分校"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.sub_department_name?a("div",[e._v("\n            "+e._s(t.row.sub_department_name)+"\n          ")]):a("div",[e._v("\n            — —\n          ")])]}}])}),a("el-table-column",{attrs:{prop:"hrbp_name",label:"HRBP"}}),a("el-table-column",{attrs:{prop:"isolation_name",label:"隔级"}}),a("el-table-column",{attrs:{prop:"self_score",label:"自评分"}}),a("el-table-column",{attrs:{prop:"superior_score",label:"复评分"}}),a("el-table-column",{attrs:{prop:"culture",label:"文化评分"}}),a("el-table-column",{attrs:{prop:"final",label:"最终成绩"}}),a("el-table-column",{attrs:{prop:"score_tag",label:"标签分布"}}),a("el-table-column",{attrs:{prop:"stage_text",label:"状态"}}),a("el-table-column",{attrs:{prop:"hrbp_name",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"grade-operation",on:{click:function(a){return e.viewDetail(t.row)}}},[e._v("\n            详情\n          ")])]}}])})],1)],1),a("br"),a("el-row",{attrs:{type:"flex",justify:"end"}},[e.total?a("el-pagination",{attrs:{background:"","current-page":e.page,"page-sizes":[10,20,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)],1)},r=[],o=(a("7f7f"),a("fea5")),l=a("c9f1"),s=(a("38fb"),a("372d")),i={props:{performanceId:{type:String,default:""},performance_user_id:{type:String,default:""}},components:{"common-select":Object(s["a"])(a.e("chunk-2d21647e").then(a.bind(null,"c292")))},data:function(){return{constants:{},nav:[{label:"团队评分",href:l["m"]},{label:"评分详情",active:!0}],page:1,perPage:10,total:0,filterForm:{name:"",stage:"",score_tag:""},tagOptions:[],lowerList:[],stageOptions:{}}},methods:{selectWorkCode:function(e){this.filterForm.name=e,this.getMyLowerList()},handleCurrentChange:function(e){this.page=e,this.getMyLowerList()},handleSizeChange:function(e){this.perPage=e,this.getMyLowerList()},changeStage:function(){this.getMyLowerList()},changeScoreTag:function(){this.getMyLowerList()},resetForm:function(){this.filterForm={name:"",stage:"",score_tag:""},this.getMyLowerList()},viewDetail:function(e){this.$router.push(Object(l["nb"])(this.performanceId,e.performance_user_id,"subteam"))},getMyLowerList:function(){var e=this,t={performance_id:parseInt(this.performanceId),page:this.page,perPage:this.perPage,name:this.filterForm.name||"",stage:this.filterForm.stage||"",score_tag:this.filterForm.score_tag||""};Object(o["G"])(t).then(function(t){var a=t.data,n=t.total;e.total=n,e.lowerList=a})}},created:function(){var e=this;Object(o["Q"])(this.performanceId).then(function(t){e.stageOptions=t}).catch(function(e){}),Object(o["O"])(this.performanceId).then(function(t){e.tagOptions=t}).catch(function(e){}),this.getMyLowerList()}},c=i,u=(a("9c4d"),a("2877")),p=Object(u["a"])(c,n,r,!1,null,"18730476",null);t["default"]=p.exports},ee47:function(e,t,a){"use strict";var n=a("9f9e"),r=a.n(n);r.a}}]);