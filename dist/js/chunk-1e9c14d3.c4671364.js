(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e9c14d3"],{3745:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("section",{staticClass:"progress-header",staticStyle:{"min-height":"400px"}},[l("el-row",{attrs:{type:"flex",gutter:20,align:"top"}},[l("el-col",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list_data,stripe:"","header-cell-style":{background:"#eef1f6"}}},[l("el-table-column",{attrs:{prop:"workcode",label:"工号"}}),l("el-table-column",{attrs:{prop:"name",label:t.constants.LABEL_NAME},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-row",{staticStyle:{height:"44px"},attrs:{type:"flex",align:"middle"}},[l("span",[t._v(t._s(e.row.name))]),e.row.has_appeal?l("span",{staticClass:"appeal-tag"},[t._v("\n                  申诉中\n                ")]):t._e()])]}}])}),t._e(),l("el-table-column",{attrs:{prop:"high_level_name",label:"隔级"}}),l("el-table-column",{attrs:{prop:"self_score",label:"自评分"}}),l("el-table-column",{attrs:{prop:"superior_score",label:"上级评分"}}),l("el-table-column",{attrs:{prop:"score_level",label:"绩效等级"}}),l("el-table-column",{attrs:{label:"标签分布",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return["A"==e.row.score_level||"S"==e.row.score_level?l("el-tag",{staticClass:"status-tag top-style"},[l("span",{staticClass:"top-style-text"},[t._v(t._s(e.row.label_name))])]):t._e(),"B"==e.row.score_level?l("el-tag",{staticClass:"status-tag bplus-style"},[l("span",{staticClass:"bplus-style-text"},[t._v(t._s(e.row.label_name))])]):t._e(),"C"==e.row.score_level||"D"==e.row.score_level?l("el-tag",{staticClass:"status-tag other-style"},[l("span",{staticClass:"other-style-text"},[t._v(t._s(e.row.label_name))])]):t._e()]}}])}),l("el-table-column",{attrs:{prop:"stage_status",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v("\n                "+t._s(t.get_stage_status(e.row.stage))+"\n              ")])]}}])}),l("el-table-column",{attrs:{prop:"ops",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.operate_status?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.goDetail(e.row)}}},[t._v("详情")]):t._e(),2==e.row.operate_status?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.goDetail(e.row)}}},[t._v("评分")]):t._e(),3==e.row.operate_status?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.goDetail(e.row)}}},[t._v("修改评分")]):t._e(),4==e.row.operate_status?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.goDetail(e.row)}}},[t._v("处理申诉")]):t._e()]}}])})],1)],1)],1)],1)])},s=[],o=l("38fb"),n=l("c9f1"),r={props:{list_data:{type:null,default:function(){return{}}}},data:function(){return{constants:{LABEL_NAME:o["oc"],APPEAL:o["g"],ENUM_PERFORMANCE_FINISH:o["ub"]}}},components:{},created:function(){},methods:{goDetail:function(t){this.$router.push(Object(n["n"])(this.$route.params.id,t.id))},get_stage_status:function(t){var e=this.constants.ENUM_PERFORMANCE_FINISH.filter(function(e){return e.key==t})[0].value;return e}},computed:{},watch:{}},c=r,u=(l("e991"),l("2877")),i=Object(u["a"])(c,a,s,!1,null,"7e9a0352",null);e["default"]=i.exports},b0d1:function(t,e,l){},e991:function(t,e,l){"use strict";var a=l("b0d1"),s=l.n(a);s.a}}]);