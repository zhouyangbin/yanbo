(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2117cbf8"],{"7b07":function(e,t,a){},"87eb":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"culture-hr-details-page"},[a("nav-bar",{attrs:{list:e.nav}}),a("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[a("basic-info",{attrs:{data:e.basicInfo}}),a("br"),a("hr"),a("br"),a("div",{staticClass:"grade-name"},[e._v(e._s(e.evaluation_name))]),a("br"),a("br"),a("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("div",[a("span",{staticClass:"label"},[e._v(e._s(e.constants.TOTAL_SCORES))]),a("span",{staticClass:"total-score"},[e._v(e._s(e.total_score)+"分")]),a("br"),a("br"),a("br"),a("grade-items",{attrs:{items:e.scores}}),a("br"),a("br"),a("br"),e.level?a("div",[a("span",{staticClass:"label"},[e._v(e._s(e.constants.LEVEL_TAG))]),a("el-button",{staticClass:"selected selector",staticStyle:{"margin-left":"50px"}},[e._v(e._s(e.level))])],1):e._e()],1),a("div",[e.has_history?a("div",[a("el-button",{staticStyle:{"margin-bottom":"30px"},attrs:{type:"primary"},on:{click:e.goHistory}},[e._v(e._s(e.constants.CHANGE_RECORDS))])],1):e._e(),e.isEditable?a("div",[a("el-button",{staticStyle:{"margin-bottom":"30px"},attrs:{type:"primary"},on:{click:e.goModify}},[e._v("修改评分")])],1):e._e(),e.isRejectOrComplian?a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.goComplain}},[e._v("申诉处理")])],1):e._e()])]),a("br"),a("br"),a("div",[e.showAppealAndRefuse?a("div",{staticClass:"appeal-and-refuse"},[e._l(e.appeal_record,function(t,s){return a("div",{key:s},[a("span",{staticClass:"label"},[e._v(e._s(e.constants.APPEAL_REASON)+":")]),a("span",{staticClass:"content"},[e._v(e._s(t.reason))]),a("span",{staticClass:"time"},[e._v(e._s(t.time))])])}),e._l(e.reject_record,function(t,s){return a("div",{key:s},[a("span",{staticClass:"label"},[e._v(e._s(e.constants.REJECT_REASON)+":")]),a("span",{staticClass:"content"},[e._v(e._s(t.reason))]),a("span",{staticClass:"time"},[e._v(e._s(t.time))])])}),e.feedback_feeling?a("div",[a("span",{staticClass:"label"},[e._v(e._s(e.constants.IMPRESSIONS)+":")]),a("span",{staticClass:"content"},[e._v(e._s(e.feedback_feeling.content))]),a("span",{staticClass:"time"},[e._v(e._s(e.feedback_feeling.time))])]):e._e()],2):e._e(),a("br"),a("br")]),a("div",[a("span",{staticClass:"sub-title"},[e._v(e._s(e.constants.ADVANTAGE)+":  ")]),a("span",{staticClass:"content",domProps:{innerHTML:e._f("linebreak")(e.advantage)}})]),a("br"),a("div",[a("span",{staticClass:"sub-title"},[e._v(e._s(e.constants.PROMOTION)+":  ")]),a("span",{staticClass:"content",domProps:{innerHTML:e._f("linebreak")(e.promotion)}})]),a("div"),a("br"),a("hr"),a("br"),a("div",{staticClass:"detail-header",on:{click:function(t){e.detailHide=!e.detailHide}}},[e._v("\n      "+e._s(e.constants.GRADE_DETAIL)+"\n      "),a("i",{class:e.detailHide?"el-icon-caret-bottom":"el-icon-caret-top"})]),a("br"),e._l(e.scores,function(t,s){return a("case-item",{directives:[{name:"show",rawName:"v-show",value:!e.detailHide,expression:"!detailHide"}],key:s,attrs:{data:t}})})],2)],1)},n=[],i=(a("7f7f"),a("c9f1")),r=a("38fb"),o=a("fea5"),c={data:function(){return{status:0,isManager:!1,detailHide:!0,appeal_record:[],reject_record:[],advantage:"",promotion:"",has_history:1,total_score:"",feedback_feeling:null,level:"",scores:[],nav:[{label:r["Yb"],href:i["C"]},{label:r["ac"],href:Object(i["E"])(this.$route.params.id)},{label:r["Jd"],href:Object(i["D"])(this.$route.params.id,this.$route.params.orgID)},{label:r["Wb"],active:!0}],basicInfo:{name:"",workcode:"",leaderLabel:"上级",superior_name:"",superior_workcode:"",hightlevelLabel:"隔级上级",highlevel_name:"",highlevel_workcode:""},evaluation_name:"",constants:{LEVEL_TAG:r["jd"],ADVANTAGE:r["h"],PROMOTION:r["ae"],IMPRESSIONS:r["mc"],GRADE_DETAIL:r["Wb"],APPEAL_REASON:r["j"],REJECT_REASON:r["de"],TOTAL_SCORES:r["Ne"],CHANGE_RECORDS:r["C"]}}},components:{"nav-bar":function(){return a.e("chunk-d5094d72").then(a.bind(null,"3208"))},"basic-info":function(){return a.e("chunk-d65d553e").then(a.bind(null,"eb39"))},"grade-items":function(){return a.e("chunk-51b546f8").then(a.bind(null,"da3f"))},"case-item":function(){return a.e("chunk-50673718").then(a.bind(null,"5b6c"))}},methods:{goModify:function(){this.$router.push(Object(i["A"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid))},goComplain:function(){this.$router.push({path:Object(i["A"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid),query:{complain:1}})},goHistory:function(){this.$router.push(Object(i["B"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid))},getInfo:function(){var e=this;Object(o["Hb"])(this.$route.params.uid).then(function(t){var a=t.advantage,s=t.promotion,n=t.scores,i=t.has_history,o=t._271_level,c=t.evaluation_name,l=t.name,d=t.workcode,u=t.superior_name,_=t.superior_workcode,p=t.highlevel_name,b=t.highlevel_workcode,h=t.evaluation_type,v=t.total_score,f=t.status,m=t.appeal_record,g=t.reject_record,C=t.feedback_feeling;e.promotion=s,e.appeal_record=m||[],e.reject_record=g||[],e.advantage=a,e.has_history=i,e.feedback_feeling=C,e.isManager=2==h,e.status=f,e.level=r["id"][o],e.evaluation_name=c,e.total_score=v,e.basicInfo={name:l,workcode:d,leaderLabel:"上级",superior_name:u,superior_workcode:_,hightlevelLabel:"隔级上级",highlevel_name:p,highlevel_workcode:b},e.scores=n.map(function(e){return e.score=e.superior_score,e})})}},created:function(){this.getInfo()},computed:{isRejectOrComplian:function(){return 70==this.status},isEditable:function(){return this.isManager&&this.status>=20&&this.status<100},showAppealAndRefuse:function(){return this.appeal_record.length>0||this.reject_record.length>0||this.feedback_feeling}}},l=c,d=(a("9224"),a("2877")),u=Object(d["a"])(l,s,n,!1,null,"3104bbd2",null);t["default"]=u.exports},9224:function(e,t,a){"use strict";var s=a("7b07"),n=a.n(s);n.a}}]);