(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-621b93a8"],{"74a6":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"culture-hr-details-history-page"},[s("nav-bar",{attrs:{list:e.nav}}),s("br"),s("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[s("basic-info",{attrs:{data:e.basicInfo}}),s("br"),s("hr"),s("br"),s("history-cards",{attrs:{selectedIndex:e.selectedIndex,data:e.list},on:{"update:selectedIndex":function(t){e.selectedIndex=t},"update:selected-index":function(t){e.selectedIndex=t}}}),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.CHANGE_REASON)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].change_reason,callback:function(t){e.$set(e.list[e.selectedIndex],"change_reason",t)},expression:"list[selectedIndex].change_reason"}})],1),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.ADVANTAGE)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].advantage,callback:function(t){e.$set(e.list[e.selectedIndex],"advantage",t)},expression:"list[selectedIndex].advantage"}})],1),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.PROMOTION)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].promotion,callback:function(t){e.$set(e.list[e.selectedIndex],"promotion",t)},expression:"list[selectedIndex].promotion"}})],1),s("br"),s("section",{staticClass:"mark"},[s("el-row",{attrs:{align:"middle",type:"flex"}},[s("el-col",{staticStyle:{padding:"20px","border-right":"1px solid #979797"},attrs:{span:14}},[s("div",{staticClass:"mark-label"},[e._v("自评分数")]),s("grade-items",{attrs:{items:e.gradeItems},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}})],1),s("el-col",{staticStyle:{"padding-left":"50px"},attrs:{span:10}},[s("div",{staticClass:"mark-reason"},e._l(e.reasons,(function(t,n){return s("div",{key:n},[s("div",[e._v(e._s(n+3)+"分理由:")]),s("div",{staticClass:"reason",domProps:{innerHTML:e._f("placeholder")(e._f("linebreak")(t),"无")}})])})),0)])],1)],1),s("br"),s("div",{staticClass:"mark-flag-container"},[s("div",{staticClass:"mark-section"},[s("div",{staticClass:"mark-label"},[e._v("\n          为"+e._s(e.basicInfo.name)+"的"+e._s(e.gradeItems[e.selectGradeItem].question_name)+"项目评分\n        ")]),s("br"),s("grade-slider",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].scores[e.selectGradeItem].superior_score,callback:function(t){e.$set(e.list[e.selectedIndex].scores[e.selectGradeItem],"superior_score",t)},expression:"list[selectedIndex].scores[selectGradeItem].superior_score"}})],1),s("div",{staticStyle:{width:"20px"}}),s("div",{staticClass:"flag-section"},[s("div",{staticClass:"mark-label"},[e._v("为"+e._s(e.basicInfo.name)+"设置等级标签")]),s("br"),s("level-selector",{attrs:{disabled:e.readOnly},model:{value:e.currentLv,callback:function(t){e.currentLv=t},expression:"currentLv"}})],1)]),s("br"),e.list[e.selectedIndex].scores[e.selectGradeItem].self_score!=e.list[e.selectedIndex].scores[e.selectGradeItem].superior_score?s("div",[s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].scores[e.selectGradeItem].superior_case,callback:function(t){e.$set(e.list[e.selectedIndex].scores[e.selectGradeItem],"superior_case",t)},expression:"list[selectedIndex].scores[selectGradeItem].superior_case"}}),s("br")],1):e._e(),s("br"),s("br"),e.hasChanges?s("div",{staticClass:"detail-header",on:{click:function(t){e.detailHide=!e.detailHide}}},[e._v("\n      "+e._s(e.constants.CHANGE_RECORDS)+"\n      "),s("i",{class:e.detailHide?"el-icon-caret-bottom":"el-icon-caret-top"}),e.detailHide?e._e():s("div",e._l(e.changes,(function(t,n){return s("li",{key:n,staticClass:"change-item"},[e._v("\n          "+e._s(t)+"\n        ")])})),0)]):e._e()],1)],1)},a=[],r=(s("2338"),s("f763"),s("fb37"),s("97a3")),c=s("c9f1"),l=s("38fb"),i=s("fea5");function d(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?d(s,!0).forEach((function(t){Object(r["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):d(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u={data:function(){return{basicInfo:{},selectedIndex:0,selectGradeItem:0,readOnly:!0,nav:[{label:"事业部271",href:c["b"]},{label:l["Gb"],href:Object(c["c"])(this.$route.params.uid)},{label:l["y"],active:!0}],list:[{scores:[{}]}],constants:{LEVEL_ALIAS:l["Nc"],ADVANTAGE:l["e"],PROMOTION:l["Fd"],CHANGE_REASON:l["x"],CHANGE_RECORDS:l["y"]},changes:[],detailHide:!0}},components:{"nav-bar":function(){return s.e("chunk-1ee63f72").then(s.bind(null,"3208"))},"basic-info":function(){return s.e("chunk-32b41ace").then(s.bind(null,"eb39"))},"history-cards":function(){return s.e("chunk-5d951538").then(s.bind(null,"81a6"))},"case-area":function(){return s.e("chunk-18a5333c").then(s.bind(null,"b5ec"))},"grade-items":function(){return s.e("chunk-54f65ae0").then(s.bind(null,"da3f"))},"grade-slider":function(){return s.e("chunk-af1166aa").then(s.bind(null,"aa29"))},"level-selector":function(){return s.e("chunk-0f27707e").then(s.bind(null,"7f4e"))}},methods:{getHistory:function(){var e=this;Object(i["x"])(this.$route.params.uid).then((function(t){var s=t.records,n=t.info;e.changes=n.changes||[],e.list=s,e.basicInfo=o({},n,{leaderLabel:"上级",hightlevelLabel:"隔级上级"})}))}},created:function(){this.getHistory()},computed:{reasons:function(){return this.list[this.selectedIndex].scores[this.selectGradeItem].self_cases},currentLv:function(){return(this.constants.LEVEL_ALIAS[this.list[this.selectedIndex]._271_level]||"").toLowerCase()},gradeItems:function(){return(this.list[this.selectedIndex].scores||[]).map((function(e){return e.score=e.self_score,e}))},hasChanges:function(){return this.changes.length>0}}},f=u,b=(s("a37c"),s("6691")),h=Object(b["a"])(f,n,a,!1,null,"258526f6",null);t["default"]=h.exports},a37c:function(e,t,s){"use strict";var n=s("f0af"),a=s.n(n);a.a},f0af:function(e,t,s){}}]);