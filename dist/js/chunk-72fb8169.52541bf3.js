(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72fb8169"],{"41ed":function(e,t,a){},a062:function(e,t,a){"use strict";var s=a("41ed"),n=a.n(s);n.a},f3bf:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"culture-hr-details-page"},[a("nav-bar",{attrs:{list:e.nav}}),a("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[a("basic-info",{attrs:{data:e.basicInfo}}),a("br"),a("hr"),a("br"),a("div",{staticClass:"grade-name"},[e._v(e._s(e.evaluation_name))]),a("br"),a("br"),a("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("div",[a("span",{staticClass:"label"},[e._v(e._s(e.constants.TOTAL_SCORES))]),a("span",{staticClass:"total-score"},[e._v(e._s(e.total_score)+"分")]),a("br"),a("br"),a("br"),a("grade-items",{attrs:{items:e.scores}}),a("br"),a("br"),a("br"),e.level?a("div",[a("span",{staticClass:"label"},[e._v(e._s(e.constants.LEVEL_TAG))]),a("el-button",{staticClass:"selected selector",staticStyle:{"margin-left":"50px"}},[e._v("\n            "+e._s(e.level)+"\n          ")])],1):e._e()],1),a("div",[e.has_history?a("div",[a("el-button",{staticStyle:{"margin-bottom":"30px"},attrs:{type:"primary"},on:{click:e.goHistory}},[e._v(e._s(e.constants.CHANGE_RECORDS))])],1):e._e()])]),a("br"),a("br"),a("div",[e.showAppealAndRefuse?a("div",{staticClass:"appeal-and-refuse"},[e._l(e.appeal_record,(function(t,s){return a("div",{key:s},[a("span",{staticClass:"label"},[e._v(e._s(e.constants.APPEAL_REASON)+":")]),a("span",{staticClass:"content"},[e._v(e._s(t.reason))]),a("span",{staticClass:"time"},[e._v(e._s(t.time))])])})),e._l(e.reject_record,(function(t,s){return a("div",{key:s},[a("span",{staticClass:"label"},[e._v(e._s(e.constants.REJECT_REASON)+":")]),a("span",{staticClass:"content"},[e._v(e._s(t.reason))]),a("span",{staticClass:"time"},[e._v(e._s(t.time))])])})),e.feedback_feeling?a("div",[a("span",{staticClass:"label"},[e._v(e._s(e.constants.IMPRESSIONS)+":")]),a("span",{staticClass:"content"},[e._v(e._s(e.feedback_feeling.content))]),a("span",{staticClass:"time"},[e._v(e._s(e.feedback_feeling.time))])]):e._e()],2):e._e(),a("br"),a("br")]),a("div",{staticStyle:{"white-space":"normal","word-wrap":"break-word","word-break":"break-all"}},[a("span",{staticClass:"sub-title"},[e._v(e._s(e.constants.ADVANTAGE)+":  ")]),a("span",{staticClass:"content",domProps:{innerHTML:e._f("linebreak")(e.advantage)}})]),a("br"),a("div",{staticStyle:{"white-space":"normal","word-wrap":"break-word","word-break":"break-all"}},[a("span",{staticClass:"sub-title"},[e._v(e._s(e.constants.PROMOTION)+":  ")]),a("span",{staticClass:"content",domProps:{innerHTML:e._f("linebreak")(e.promotion)}})]),a("div"),a("br"),a("hr"),a("br"),a("div",{staticClass:"detail-header",on:{click:function(t){e.detailHide=!e.detailHide}}},[e._v("\n      "+e._s(e.constants.GRADE_DETAIL)+"\n      "),a("i",{class:e.detailHide?"el-icon-caret-bottom":"el-icon-caret-top"})]),a("br"),e._l(e.scores,(function(t,s){return a("case-item",{directives:[{name:"show",rawName:"v-show",value:!e.detailHide,expression:"!detailHide"}],key:s,attrs:{data:t}})}))],2)],1)},n=[],r=(a("7cfd"),a("c9f1")),i=a("38fb"),o=a("fea5"),c={data:function(){return{status:0,isManager:!1,detailHide:!0,appeal_record:[],reject_record:[],advantage:"",promotion:"",has_history:1,total_score:"",feedback_feeling:null,level:"",scores:[],nav:[{label:"事业部271",href:r["b"]},{label:i["Gb"],active:!0}],basicInfo:{name:"",workcode:"",leaderLabel:"上级",superior_name:"",superior_workcode:"",hightlevelLabel:"隔级上级",highlevel_name:"",highlevel_workcode:""},evaluation_name:"",constants:{LEVEL_TAG:i["Oc"],ADVANTAGE:i["e"],PROMOTION:i["Fd"],IMPRESSIONS:i["Vb"],GRADE_DETAIL:i["Gb"],APPEAL_REASON:i["g"],REJECT_REASON:i["Id"],TOTAL_SCORES:i["ge"],CHANGE_RECORDS:i["y"]}}},components:{"nav-bar":function(){return a.e("chunk-7f5a78f4").then(a.bind(null,"3208"))},"basic-info":function(){return a.e("chunk-03c827dc").then(a.bind(null,"eb39"))},"grade-items":function(){return a.e("chunk-5332020c").then(a.bind(null,"da3f"))},"case-item":function(){return a.e("chunk-9d815bfa").then(a.bind(null,"5b6c"))}},methods:{goHistory:function(){this.$router.push(Object(r["d"])(this.$route.params.uid))},getInfo:function(){var e=this;Object(o["w"])(this.$route.params.uid).then((function(t){var a=t.advantage,s=t.promotion,n=t.scores,r=t.has_history,o=t._271_level,c=t.evaluation_name,l=t.name,d=t.workcode,_=t.superior_name,u=t.superior_workcode,b=t.highlevel_name,p=t.highlevel_workcode,v=t.evaluation_type,f=t.total_score,h=t.status,m=t.appeal_record,g=t.reject_record,k=t.feedback_feeling;e.promotion=s,e.appeal_record=m||[],e.reject_record=g||[],e.advantage=a,e.has_history=r,e.feedback_feeling=k,e.isManager=2==v,e.status=h,e.level=i["Nc"][o],e.evaluation_name=c,e.total_score=f,e.basicInfo={name:l,workcode:d,leaderLabel:"上级",superior_name:_,superior_workcode:u,hightlevelLabel:"隔级上级",highlevel_name:b,highlevel_workcode:p},e.scores=n.map((function(e){return e.score=e.superior_score,e}))}))}},created:function(){this.getInfo()},computed:{showAppealAndRefuse:function(){return this.appeal_record.length>0||this.reject_record.length>0||this.feedback_feeling}}},l=c,d=(a("a062"),a("4e82")),_=Object(d["a"])(l,s,n,!1,null,"78367126",null);t["default"]=_.exports}}]);