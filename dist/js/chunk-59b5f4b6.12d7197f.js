(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59b5f4b6"],{"0e9e":function(e,t,a){"use strict";var s=a("90e3"),n=a.n(s);n.a},"90e3":function(e,t,a){},f3bf:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"culture-hr-details-page"},[a("nav-bar",{attrs:{list:e.nav}}),a("section",{staticClass:"content-container",staticStyle:{padding:"0.6rem"}},[a("basic-info",{attrs:{data:e.basicInfo}}),a("br"),a("hr"),a("br"),a("div",{staticClass:"grade-name"},[e._v(e._s(e.evaluation_name))]),a("br"),a("br"),a("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("div",[a("span",{staticClass:"label"},[e._v(e._s(e.constants.TOTAL_SCORES))]),a("span",{staticClass:"total-score"},[e._v(e._s(e.total_score)+"分")]),a("br"),a("br"),a("br"),a("grade-items",{attrs:{items:e.scores}}),a("br"),a("br"),a("br"),e.level?a("div",[a("span",{staticClass:"label"},[e._v(e._s(e.constants.LEVEL_TAG))]),a("el-button",{staticClass:"selected selector",staticStyle:{"margin-left":"0.75rem"}},[e._v(e._s(e.level))])],1):e._e()],1),a("div",[e.has_history?a("div",[a("el-button",{staticStyle:{"margin-bottom":"0.45rem"},attrs:{type:"primary"},on:{click:e.goHistory}},[e._v(e._s(e.constants.CHANGE_RECORDS))])],1):e._e()])]),a("br"),a("br"),a("div",[e.showAppealAndRefuse?a("div",{staticClass:"appeal-and-refuse"},[e._l(e.appeal_record,function(t,s){return a("div",{key:s},[a("span",{staticClass:"label"},[e._v(e._s(e.constants.APPEAL_REASON)+":")]),a("span",{staticClass:"content"},[e._v(e._s(t.reason))]),a("span",{staticClass:"time"},[e._v(e._s(t.time))])])}),e._l(e.reject_record,function(t,s){return a("div",{key:s},[a("span",{staticClass:"label"},[e._v(e._s(e.constants.REJECT_REASON)+":")]),a("span",{staticClass:"content"},[e._v(e._s(t.reason))]),a("span",{staticClass:"time"},[e._v(e._s(t.time))])])}),e.feedback_feeling?a("div",[a("span",{staticClass:"label"},[e._v(e._s(e.constants.IMPRESSIONS)+":")]),a("span",{staticClass:"content"},[e._v(e._s(e.feedback_feeling.content))]),a("span",{staticClass:"time"},[e._v(e._s(e.feedback_feeling.time))])]):e._e()],2):e._e(),a("br"),a("br")]),a("div",[a("span",{staticClass:"sub-title"},[e._v(e._s(e.constants.ADVANTAGE)+":  ")]),a("span",{staticClass:"content"},[e._v(e._s(e.advantage))])]),a("br"),a("div",[a("span",{staticClass:"sub-title"},[e._v(e._s(e.constants.PROMOTION)+":  ")]),a("span",{staticClass:"content"},[e._v(e._s(e.promotion))])]),a("div"),a("br"),a("hr"),a("br"),a("div",{staticClass:"detail-header",on:{click:function(t){e.detailHide=!e.detailHide}}},[e._v("\n      "+e._s(e.constants.GRADE_DETAIL)+"\n      "),a("i",{class:e.detailHide?"el-icon-caret-bottom":"el-icon-caret-top"})]),a("br"),e._l(e.scores,function(t,s){return a("case-item",{directives:[{name:"show",rawName:"v-show",value:!e.detailHide,expression:"!detailHide"}],key:s,attrs:{data:t}})})],2)],1)},n=[],i=(a("7f7f"),a("cadf"),a("551c"),a("097d"),a("c9f1")),r=a("38fb"),o=a("fea5"),c={data:function(){return{status:0,isManager:!1,detailHide:!0,appeal_record:[],reject_record:[],advantage:"",promotion:"",has_history:1,total_score:"",feedback_feeling:null,level:"",scores:[],nav:[{label:"事业部271",href:i["b"]},{label:r["Db"],active:!0}],basicInfo:{name:"",workcode:"",leaderLabel:"上级",superior_name:"",superior_workcode:"",hightlevelLabel:"隔级上级",highlevel_name:"",highlevel_workcode:""},evaluation_name:"",constants:{LEVEL_TAG:r["Lc"],ADVANTAGE:r["e"],PROMOTION:r["yd"],IMPRESSIONS:r["Sb"],GRADE_DETAIL:r["Db"],APPEAL_REASON:r["g"],REJECT_REASON:r["Bd"],TOTAL_SCORES:r["Zd"],CHANGE_RECORDS:r["x"]}}},components:{"nav-bar":function(){return a.e("chunk-55b2b05e").then(a.bind(null,"3208"))},"basic-info":function(){return a.e("chunk-e842d39e").then(a.bind(null,"eb39"))},"grade-items":function(){return a.e("chunk-011f0809").then(a.bind(null,"da3f"))},"case-item":function(){return a.e("chunk-2a25871c").then(a.bind(null,"5b6c"))}},methods:{goHistory:function(){this.$router.push(Object(i["d"])(this.$route.params.uid))},getInfo:function(){var e=this;Object(o["u"])(this.$route.params.uid).then(function(t){var a=t.advantage,s=t.promotion,n=t.scores,i=t.has_history,o=t._271_level,c=t.evaluation_name,l=t.name,_=t.workcode,d=t.superior_name,u=t.superior_workcode,b=t.highlevel_name,v=t.highlevel_workcode,p=t.evaluation_type,f=t.total_score,h=t.status,m=t.appeal_record,g=t.reject_record,C=t.feedback_feeling;e.promotion=s,e.appeal_record=m||[],e.reject_record=g||[],e.advantage=a,e.has_history=i,e.feedback_feeling=C,e.isManager=2==p,e.status=h,e.level=r["Kc"][o],e.evaluation_name=c,e.total_score=f,e.basicInfo={name:l,workcode:_,leaderLabel:"上级",superior_name:d,superior_workcode:u,hightlevelLabel:"隔级上级",highlevel_name:b,highlevel_workcode:v},e.scores=n.map(function(e){return e.score=e.superior_score,e})})}},created:function(){this.getInfo()},computed:{showAppealAndRefuse:function(){return this.appeal_record.length>0||this.reject_record.length>0||this.feedback_feeling}}},l=c,_=(a("0e9e"),a("2877")),d=Object(_["a"])(l,s,n,!1,null,"bf1653f2",null);d.options.__file="index.vue";t["default"]=d.exports}}]);