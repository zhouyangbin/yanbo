(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85626c20"],{"372d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},r=[],l={},s=l,o=(a("ee47"),a("2877")),i=Object(o["a"])(s,n,r,!1,null,"6c517b7e",null),c=i.exports;a.d(t,"a",function(){return m});var m=function(e){return function(){return{component:e,loading:c,delay:0}}}},"54ec":function(e,t,a){"use strict";var n=a("76da"),r=a.n(n);r.a},"605b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"isolation-level"},[a("section",{staticStyle:{"min-height":"400px"}},[a("div",{staticClass:"filter-title"},[a("span",[e._v("考核人员明细")]),a("span",{staticClass:"filter-number"},[e._v("共"+e._s(e.total)+"人")])]),a("el-form",{ref:"filterForm",staticClass:"demo-form-inline filter-form",attrs:{inline:!0,model:e.filterForm}},[a("el-form-item",{attrs:{prop:"name"}},[a("common-select",{attrs:{code:e.filterForm.name,isDisabled:!1},on:{selectedUser:e.selectWorkCode}})],1),a("el-form-item",{attrs:{prop:"stage"}},[a("el-select",{attrs:{placeholder:"请选择状态"},on:{change:e.changeStage},model:{value:e.filterForm.stage,callback:function(t){e.$set(e.filterForm,"stage",t)},expression:"filterForm.stage"}},e._l(e.constants.STAGEOPTIONS,function(e){return a("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1),a("el-form-item",{attrs:{prop:"score_tag"}},[a("el-select",{attrs:{placeholder:"请选择标签"},on:{change:e.changeScoreTag},model:{value:e.filterForm.score_tag,callback:function(t){e.$set(e.filterForm,"score_tag",t)},expression:"filterForm.score_tag"}},e._l(e.tagOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.display_name,value:e.id}})}),1)],1),a("el-form-item",[a("el-button",{on:{click:function(t){return e.resetForm("filterForm")}}},[e._v("清空")])],1)],1),a("el-row",{attrs:{type:"flex",gutter:20,align:"top"}},[a("el-col",{staticStyle:{"border-right":"solid 1px rgba(233,235,242,1)","min-height":"400px"},attrs:{span:3}},[a("el-radio-group",{on:{change:e.changeTeam},model:{value:e.team_leader,callback:function(t){e.team_leader=t},expression:"team_leader"}},[a("el-radio",{staticClass:"check-tag",attrs:{label:""}},[e._v("全部下属")]),e._l(e.teamList,function(t){return a("el-radio",{key:t.workcode,staticClass:"check-tag",attrs:{label:t.workcode}},[e._v(e._s(t.name))])})],2)],1),a("el-col",{staticStyle:{"min-height":"400px"},attrs:{span:21}},[a("div",{staticClass:"display-data"},[e.teamDetail.name?a("div",{staticClass:"display-team"},[a("span",{staticClass:"team-name"},[e._v(e._s(e.teamDetail.name))]),a("span",{staticClass:"team-nums"},[e._v("共"+e._s(e.teamDetail.total)+"人")]),a("span",{staticClass:"team-warning"},[e._v(e._s(e.teamDetail.notice_text))]),a("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover"}},[e._l(e.teamDetail.submit_reasons,function(t){return a("div",{key:t},[e._v("\n                "+e._s(t)+"\n              ")])}),e.teamDetail.submit_reasons&&e.teamDetail.submit_reasons.length>0?a("span",{staticClass:"view-response",attrs:{slot:"reference"},slot:"reference"},[e._v("查看提交理由")]):e._e()],2)],1):e._e()]),a("el-table",{staticClass:"lower-list",staticStyle:{width:"100%"},attrs:{data:e.lowerList}},[a("el-table-column",{attrs:{prop:"workcode",label:"工号",width:"100"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",{staticStyle:{height:"44px"},attrs:{type:"flex",align:"middle"}},[a("span",[e._v(e._s(t.row.name))]),100===t.row.stage?a("span",{staticClass:"appeal-tag"},[e._v("\n                  申述中\n                ")]):e._e()])]}}])}),a("el-table-column",{attrs:{prop:"sub_department_name","show-overflow-tooltip":!0,label:"大部门/分校"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.sub_department_name?a("div",[e._v("\n                "+e._s(t.row.sub_department_name)+"\n              ")]):a("div",[e._v("\n                — —\n              ")])]}}])}),a("el-table-column",{attrs:{prop:"hrbp_name",label:"HRBP"}}),a("el-table-column",{attrs:{prop:"isolation_name",label:"隔级"}}),a("el-table-column",{attrs:{prop:"self_score",label:"自评分"}}),a("el-table-column",{attrs:{prop:"superior_score",label:"复评分"}}),a("el-table-column",{attrs:{prop:"culture",label:"文化评分"}}),a("el-table-column",{attrs:{prop:"final",label:"最终成绩"}}),a("el-table-column",{attrs:{prop:"score_tag",label:"标签分布"}}),a("el-table-column",{attrs:{prop:"stage_text",label:"状态"}}),a("el-table-column",{attrs:{prop:"hrbp_name",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"grade-operation",on:{click:function(a){return e.viewDetail(t.row)}}},[e._v("\n                详情\n              ")])]}}])})],1)],1)],1)],1),a("br"),a("el-row",{attrs:{type:"flex",justify:"end"}},[e.total?a("el-pagination",{attrs:{background:"","current-page":e.page,"page-sizes":[10,20,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)],1)},r=[],l=(a("7f7f"),a("372d")),s=a("fea5"),o=a("c9f1"),i=a("38fb"),c={components:{"common-select":Object(l["a"])(a.e("chunk-2d21647e").then(a.bind(null,"c292")))},props:{performanceId:{type:String,default:""}},data:function(){return{constants:{STAGEOPTIONS:i["Ke"]},nav:[{label:"团队评分",href:o["k"]},{label:"评分详情",active:!0}],page:1,perPage:10,total:0,filterForm:{name:"",stage:"",score_tag:""},tagOptions:[],lowerList:[],teamList:[],team_leader:"",teamDetail:{}}},methods:{changeTeam:function(){this.getMyLowerList()},rejectTeam:function(e){},selectWorkCode:function(e){this.filterForm.name=e,this.getMyLowerList()},changeStage:function(){this.getMyLowerList()},changeScoreTag:function(){this.getMyLowerList()},resetForm:function(e){this.$refs[e].resetFields(),this.getMyLowerList()},handleCurrentChange:function(e){this.page=e,this.getMyLowerList()},handleSizeChange:function(e){this.perPage=e,this.getMyLowerList()},viewDetail:function(e){this.$router.push(Object(o["ib"])(this.performanceId,e.performance_user_id,"team"))},getMyLowerList:function(){var e=this,t={performance_id:parseInt(this.performanceId),page:this.page,name:this.filterForm.name,stage:this.filterForm.stage,score_tag:this.filterForm.score_tag,team_leader:this.team_leader};Object(s["D"])(t).then(function(t){var a=t.total,n=t.data,r=t.team;e.total=a,e.lowerList=n,e.teamList=r}).catch(function(e){})}},created:function(){var e=this;Object(s["M"])(this.performanceId).then(function(t){e.tagOptions=t}).catch(function(e){}),this.getMyLowerList()}},m=c,u=(a("54ec"),a("a111"),a("2877")),p=Object(u["a"])(m,n,r,!1,null,"8c58acfc",null);t["default"]=p.exports},"76da":function(e,t,a){},"9f9e":function(e,t,a){},a111:function(e,t,a){"use strict";var n=a("bb68"),r=a.n(n);r.a},bb68:function(e,t,a){},ee47:function(e,t,a){"use strict";var n=a("9f9e"),r=a.n(n);r.a}}]);