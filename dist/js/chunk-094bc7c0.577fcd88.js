(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-094bc7c0","chunk-4b4cc61f"],{"3e73":function(e,t,s){"use strict";var a=s("855a"),n=s.n(a);n.a},"460d":function(e,t,s){},"4df7":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"culture-hr-details-history-page"},[s("nav-bar",{attrs:{list:e.nav}}),s("br"),s("section",{staticClass:"content-container",staticStyle:{padding:"0.6rem"}},[s("basic-info",{attrs:{data:e.basicInfo}}),s("br"),s("hr"),s("br"),s("history-cards",{attrs:{selectedIndex:e.selectedIndex,data:e.list},on:{"update:selectedIndex":function(t){e.selectedIndex=t}}}),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.CHANGE_REASON)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].change_reason,callback:function(t){e.$set(e.list[e.selectedIndex],"change_reason",t)},expression:"list[selectedIndex].change_reason"}})],1),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.ADVANTAGE)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].advantage,callback:function(t){e.$set(e.list[e.selectedIndex],"advantage",t)},expression:"list[selectedIndex].advantage"}})],1),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.PROMOTION)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].promotion,callback:function(t){e.$set(e.list[e.selectedIndex],"promotion",t)},expression:"list[selectedIndex].promotion"}})],1),s("br"),s("section",{staticClass:"mark"},[s("el-row",{attrs:{align:"middle",type:"flex"}},[s("el-col",{staticStyle:{padding:"0.3rem","border-right":"1px solid #979797"}},[s("div",{staticClass:"mark-label"},[e._v("自评分数")]),s("grade-items",{attrs:{items:e.gradeItems},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}})],1),s("el-col",{staticStyle:{"padding-left":"0.75rem"}},e._l(e.reasons,function(t,a){return s("div",{key:a,staticClass:"mark-reason"},[s("div",[e._v(e._s(a+3)+"分理由:")]),s("div",[e._v(e._s(t))])])}))],1)],1),s("br"),s("div",{staticClass:"mark-flag-container"},[s("div",{staticClass:"mark-section"},[s("div",{staticClass:"mark-label"},[e._v("为"+e._s(e.basicInfo.name)+"的"+e._s(e.gradeItems[e.selectGradeItem].question_name)+"项目评分")]),s("br"),s("grade-slider",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].scores[e.selectGradeItem].superior_score,callback:function(t){e.$set(e.list[e.selectedIndex].scores[e.selectGradeItem],"superior_score",t)},expression:"list[selectedIndex].scores[selectGradeItem].superior_score"}})],1),s("div",{staticStyle:{width:"0.3rem"}}),s("div",{staticClass:"flag-section"},[s("div",{staticClass:"mark-label"},[e._v("为"+e._s(e.basicInfo.name)+"设置等级标签")]),s("br"),s("level-selector",{attrs:{disabled:e.readOnly},model:{value:e.currentLv,callback:function(t){e.currentLv=t},expression:"currentLv"}})],1)]),s("br"),e.list[e.selectedIndex].scores[e.selectGradeItem].self_score!=e.list[e.selectedIndex].scores[e.selectGradeItem].superior_score?s("div",[s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.list[e.selectedIndex].scores[e.selectGradeItem].superior_case,callback:function(t){e.$set(e.list[e.selectedIndex].scores[e.selectGradeItem],"superior_case",t)},expression:"list[selectedIndex].scores[selectGradeItem].superior_case"}}),s("br")],1):e._e(),s("br"),s("br"),e.hasChanges?s("div",{staticClass:"detail-header",on:{click:function(t){e.detailHide=!e.detailHide}}},[e._v("\n      修改日志\n      "),s("i",{class:e.detailHide?"el-icon-caret-bottom":"el-icon-caret-top"}),e._l(e.changes,function(t,a){return e.detailHide?e._e():s("li",{key:a,staticClass:"change-item"},[e._v(e._s(t))])})],2):e._e()],1)],1)},n=[],r=s("c93e"),c=(s("cadf"),s("551c"),s("097d"),s("c9f1")),i=s("38fb"),l=s("fea5"),d={data:function(){return{basicInfo:{},selectedIndex:0,selectGradeItem:0,readOnly:!0,nav:[{label:i["Fb"],href:c["y"]},{label:i["Hb"],href:Object(c["A"])(this.$route.params.id)},{label:i["kd"],href:Object(c["z"])(this.$route.params.id,this.$route.params.orgID)},{label:i["Db"],href:Object(c["v"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid)},{label:"修改日志",active:!0}],list:[{scores:[{}]}],constants:{LEVEL_ALIAS:i["Kc"],ADVANTAGE:i["e"],PROMOTION:i["yd"],CHANGE_REASON:i["w"]},changes:[],detailHide:!0}},components:{"nav-bar":function(){return s.e("chunk-55b2b05e").then(s.bind(null,"3208"))},"basic-info":function(){return s.e("chunk-e842d39e").then(s.bind(null,"eb39"))},"history-cards":function(){return s.e("chunk-54629adf").then(s.bind(null,"81a6"))},"case-area":function(){return s.e("chunk-314b5405").then(s.bind(null,"b5ec"))},"grade-items":function(){return s.e("chunk-588be260").then(s.bind(null,"da3f"))},"grade-slider":function(){return s.e("chunk-6a62dc0d").then(s.bind(null,"aa29"))},"level-selector":function(){return s.e("chunk-269c96fe").then(s.bind(null,"7f4e"))}},methods:{getHistory:function(){var e=this;Object(l["s"])(this.$route.params.uid).then(function(t){var s=t.records,a=t.info;e.changes=a.changes||[],e.list=s,e.basicInfo=Object(r["a"])({},a,{leaderLabel:"上级",hightlevelLabel:"隔级上级"})})}},created:function(){this.getHistory()},computed:{reasons:function(){return this.list[this.selectedIndex].scores[this.selectGradeItem].self_cases},currentLv:function(){return(this.constants.LEVEL_ALIAS[this.list[this.selectedIndex]._271_level]||"").toLowerCase()},gradeItems:function(){return(this.list[this.selectedIndex].scores||[]).map(function(e){return e.score=e.self_score,e})},hasChanges:function(){return this.changes.length>0}}},o=d,u=(s("3e73"),s("2877")),f=Object(u["a"])(o,a,n,!1,null,"4dd484db",null);f.options.__file="index.vue";t["default"]=f.exports},"855a":function(e,t,s){},a44e:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("history-page",{ref:"history"})],1)},n=[],r=s("38fb"),c=s("c9f1"),i=s("4df7"),l={data:function(){return{nav:[{label:r["Mc"],href:c["I"]},{label:r["Xc"],href:Object(c["H"])(this.$route.params.id)},{label:"下级详情",href:Object(c["F"])(this.$route.params.id,this.$route.params.uid)},{label:r["x"],active:!0}]}},components:{"history-page":i["default"]},mounted:function(){this.$refs["history"].nav=this.nav}},d=l,o=(s("f3fd"),s("2877")),u=Object(o["a"])(d,a,n,!1,null,"5d542f48",null);u.options.__file="index.vue";t["default"]=u.exports},f3fd:function(e,t,s){"use strict";var a=s("460d"),n=s.n(a);n.a}}]);