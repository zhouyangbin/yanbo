(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22b0b062","chunk-4dcc9cf5"],{3789:function(e,t,s){"use strict";var a=s("fe48"),n=s.n(a);n.a},"74a6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"culture-hr-details-history-page"},[s("nav-bar",{attrs:{list:e.nav}}),s("br"),s("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[s("basic-info",{attrs:{data:e.basicInfo}}),s("br"),s("hr"),s("br"),s("history-cards",{attrs:{selectedIndex:e.selectedIndex,data:e.list},on:{"update:selectedIndex":function(t){e.selectedIndex=t},"update:selected-index":function(t){e.selectedIndex=t}}}),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.CHANGE_REASON)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].change_reason,callback:function(t){e.$set(e.list[e.selectedIndex],"change_reason",t)},expression:"list[selectedIndex].change_reason"}})],1),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.ADVANTAGE)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].advantage,callback:function(t){e.$set(e.list[e.selectedIndex],"advantage",t)},expression:"list[selectedIndex].advantage"}})],1),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.PROMOTION)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].promotion,callback:function(t){e.$set(e.list[e.selectedIndex],"promotion",t)},expression:"list[selectedIndex].promotion"}})],1),s("br"),s("section",{staticClass:"mark"},[s("el-row",{attrs:{align:"middle",type:"flex"}},[s("el-col",{staticStyle:{padding:"20px","border-right":"1px solid #979797"}},[s("div",{staticClass:"mark-label"},[e._v("自评分数")]),s("grade-items",{attrs:{items:e.gradeItems},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}})],1),s("el-col",{staticStyle:{"padding-left":"50px"}},e._l(e.reasons,function(t,a){return s("div",{key:a,staticClass:"mark-reason"},[s("div",[e._v(e._s(a+3)+"分理由:")]),s("div",[e._v(e._s(t))])])}),0)],1)],1),s("br"),s("div",{staticClass:"mark-flag-container"},[s("div",{staticClass:"mark-section"},[s("div",{staticClass:"mark-label"},[e._v("\n          为"+e._s(e.basicInfo.name)+"的"+e._s(e.gradeItems[e.selectGradeItem].question_name)+"项目评分\n        ")]),s("br"),s("grade-slider",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].scores[e.selectGradeItem].superior_score,callback:function(t){e.$set(e.list[e.selectedIndex].scores[e.selectGradeItem],"superior_score",t)},expression:"list[selectedIndex].scores[selectGradeItem].superior_score"}})],1),s("div",{staticStyle:{width:"20px"}}),s("div",{staticClass:"flag-section"},[s("div",{staticClass:"mark-label"},[e._v("为"+e._s(e.basicInfo.name)+"设置等级标签")]),s("br"),s("level-selector",{attrs:{disabled:e.readOnly},model:{value:e.currentLv,callback:function(t){e.currentLv=t},expression:"currentLv"}})],1)]),s("br"),e.list[e.selectedIndex].scores[e.selectGradeItem].self_score!=e.list[e.selectedIndex].scores[e.selectGradeItem].superior_score?s("div",[s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].scores[e.selectGradeItem].superior_case,callback:function(t){e.$set(e.list[e.selectedIndex].scores[e.selectGradeItem],"superior_case",t)},expression:"list[selectedIndex].scores[selectGradeItem].superior_case"}}),s("br")],1):e._e(),s("br"),s("br"),e.hasChanges?s("div",{staticClass:"detail-header",on:{click:function(t){e.detailHide=!e.detailHide}}},[e._v("\n      "+e._s(e.constants.CHANGE_RECORDS)+"\n      "),s("i",{class:e.detailHide?"el-icon-caret-bottom":"el-icon-caret-top"}),e.detailHide?e._e():s("div",e._l(e.changes,function(t,a){return s("li",{key:a,staticClass:"change-item"},[e._v("\n          "+e._s(t)+"\n        ")])}),0)]):e._e()],1)],1)},n=[],c=s("cebc"),r=s("c9f1"),l=s("38fb"),i=s("fea5"),d={data:function(){return{basicInfo:{},selectedIndex:0,selectGradeItem:0,readOnly:!0,nav:[{label:"事业部271",href:r["b"]},{label:l["Db"],href:Object(r["c"])(this.$route.params.uid)},{label:l["x"],active:!0}],list:[{scores:[{}]}],constants:{LEVEL_ALIAS:l["Kc"],ADVANTAGE:l["e"],PROMOTION:l["yd"],CHANGE_REASON:l["w"],CHANGE_RECORDS:l["x"]},changes:[],detailHide:!0}},components:{"nav-bar":function(){return s.e("chunk-22c37006").then(s.bind(null,"3208"))},"basic-info":function(){return s.e("chunk-03b3c205").then(s.bind(null,"eb39"))},"history-cards":function(){return s.e("chunk-38adb43a").then(s.bind(null,"81a6"))},"case-area":function(){return s.e("chunk-502749a0").then(s.bind(null,"b5ec"))},"grade-items":function(){return s.e("chunk-51b546f8").then(s.bind(null,"da3f"))},"grade-slider":function(){return s.e("chunk-4743ba3a").then(s.bind(null,"aa29"))},"level-selector":function(){return s.e("chunk-140ccbf9").then(s.bind(null,"7f4e"))}},methods:{getHistory:function(){var e=this;Object(i["v"])(this.$route.params.uid).then(function(t){var s=t.records,a=t.info;e.changes=a.changes||[],e.list=s,e.basicInfo=Object(c["a"])({},a,{leaderLabel:"上级",hightlevelLabel:"隔级上级"})})}},created:function(){this.getHistory()},computed:{reasons:function(){return this.list[this.selectedIndex].scores[this.selectGradeItem].self_cases},currentLv:function(){return(this.constants.LEVEL_ALIAS[this.list[this.selectedIndex]._271_level]||"").toLowerCase()},gradeItems:function(){return(this.list[this.selectedIndex].scores||[]).map(function(e){return e.score=e.self_score,e})},hasChanges:function(){return this.changes.length>0}}},o=d,u=(s("3789"),s("2877")),b=Object(u["a"])(o,a,n,!1,null,"8b2d6c3a",null);t["default"]=b.exports},a44e:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("history-page",{ref:"history"})],1)},n=[],c=s("38fb"),r=s("c9f1"),l=s("74a6"),i={data:function(){return{nav:[{label:c["Mc"],href:r["K"]},{label:c["Xc"],href:Object(r["J"])(this.$route.params.id)},{label:"下级详情",href:Object(r["H"])(this.$route.params.id,this.$route.params.uid)},{label:c["x"],active:!0}]}},components:{"history-page":l["default"]},mounted:function(){this.$refs["history"].nav=this.nav}},d=i,o=s("2877"),u=Object(o["a"])(d,a,n,!1,null,"69be4ee7",null);t["default"]=u.exports},fe48:function(e,t,s){}}]);