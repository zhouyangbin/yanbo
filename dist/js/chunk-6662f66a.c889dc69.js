(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6662f66a"],{"67f9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"down-member-details-page"},[s("nav-bar",{attrs:{list:e.nav}}),s("br"),s("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[s("basic-info",{attrs:{data:e.basicInfo}}),s("br"),s("hr"),s("br"),s("el-row",{attrs:{type:"flex",justify:"space-between"}},[s("rule-text",{attrs:{text:e.constants.MY_DOWN_MEMBER_RULE}}),e.has_history?s("el-button",{staticStyle:{"align-self":"flex-start","margin-right":"170px"},attrs:{type:"primary"},on:{click:e.goHistory}},[e._v(e._s(e.constants.CHANGE_RECORDS))]):e._e()],1),s("br"),e.feedback_feeling?s("div",{staticClass:"feeback-container"},[s("div",[s("span",{staticClass:"label"},[e._v(e._s(e.constants.IMPRESSIONS)+":")]),s("span",{staticClass:"content"},[e._v(e._s(e.feedback_feeling.content))]),s("span",{staticClass:"time"},[e._v(e._s(e.feedback_feeling.time))])])]):e._e(),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.ADVANTAGE)+":")]),s("case-area",{attrs:{readOnly:!0},model:{value:e.advantage,callback:function(t){e.advantage=t},expression:"advantage"}})],1),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.PROMOTION)+":")]),s("case-area",{attrs:{readOnly:!0},model:{value:e.promotion,callback:function(t){e.promotion=t},expression:"promotion"}})],1),s("br"),e._l(e.rejectReasons,function(e,t){return s("div",{key:t},[s("reject-reason",{attrs:{data:e.reason}}),s("br")],1)}),s("el-row",{staticClass:"mark-section",attrs:{align:"middle",type:"flex"}},[s("el-col",{staticStyle:{"border-right":"1px solid #979797"},attrs:{span:14}},[s("div",{staticClass:"mark-label"},[e._v("\n          "+e._s(e.constants.LEADER_SOCRE)+":\n          "),s("span",{staticClass:"score"},[e._v(e._s(e.total)+"分")])]),s("grade-items",{attrs:{items:e.scores},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}}),s("br"),s("br"),s("div",[s("div",{staticClass:"mark-label",staticStyle:{display:"inline-block","margin-right":"5px"}},[e._v("\n            等级标签\n          ")]),1==e.special_recommended?s("span",{staticClass:"level-recommmed-icon"},[s("img",{attrs:{width:"15",src:a("b9eb"),alt:""}})]):e._e()]),s("level-selector",{attrs:{disabled:!e.levelEditable},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}},[e.readOnly?e._e():s("span",[e.levelEditable?s("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",round:""},on:{click:e.levelChange}},[e._v(e._s(e.constants.CONFIRM))]):s("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",round:""},on:{click:function(t){e.levelEditable=!0}}},[e._v(e._s(e.constants.LABEL_MODIFY))])],1)]),s("br")],1),s("br"),s("el-col",{staticStyle:{"padding-left":"50px"},attrs:{span:10}},[s("div",{staticClass:"mark-reason"},[s("div",[e._v("上级评理由:")]),s("div",{domProps:{innerHTML:e._f("linebreak")(e.leaderReason)}})]),s("br"),s("div",[e._v("\n          员工自评分数: "+e._s(e.selfTotal)+"分, "+e._s(e.curItemName)+":\n          "+e._s(e.selfScore)+"分\n        ")]),s("div",{staticClass:"mark-reason"},e._l(e.selfCases,function(t,a){return s("div",{key:a},[s("div",[e._v(e._s(a+3)+"分理由:")]),s("div",{staticClass:"reason",domProps:{innerHTML:e._f("placeholder")(e._f("linebreak")(t),"无")}})])}),0)])],1),s("br"),s("br"),e._l(e.appealReason,function(e,t){return s("div",{key:""+t+e.time},[s("appeal-reaosn",{attrs:{data:e}})],1)}),s("br"),s("br"),e.readOnly||e.isRejected?e._e():s("el-row",{attrs:{type:"flex",justify:"end"}},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showRejectDialog=!0}}},[e._v(e._s(e.constants.REJECT))]),s("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:e.pass}},[e._v(e._s(e.constants.CONFIRM))])],1)],2),e.showRejectDialog?s("reject-dialog",{attrs:{callback:e.afterReject,visible:e.showRejectDialog},on:{"update:visible":function(t){e.showRejectDialog=t}}}):e._e()],1)},n=[],r=(a("a481"),a("38fb")),o=a("c9f1"),i=a("fea5"),c={data:function(){return{special_recommended:0,levelEditable:!1,showRejectDialog:!1,advantage:"",promotion:"",rejectReasons:[],levelNecessary:!1,basicInfo:{},reject_reason:[],appealReason:[],audit_status:0,scores:[{cases:[]}],total:"",nav:[{label:r["gb"],href:o["i"]},{label:r["xd"],href:Object(o["h"])(this.$route.params.id,this.$route.params.type)},{label:"隔级详情",active:!0}],level:"",readOnly:!1,selectGradeItem:0,feedback_feeling:null,has_history:!1,gradeItems:[],constants:{MY_DOWN_MEMBER_RULE:r["yd"],LABEL_MODIFY:r["Gc"],CONFIRM:r["G"],SUBMIT:r["Oe"],REJECT:r["pe"],LEADER_SOCRE:r["jd"],ADVANTAGE:r["h"],PROMOTION:r["ne"],CHANGE_RECORDS:r["D"],IMPRESSIONS:r["rc"]}}},components:{"nav-bar":function(){return a.e("chunk-6f993239").then(a.bind(null,"3208"))},"basic-info":function(){return a.e("chunk-055951e9").then(a.bind(null,"eb39"))},"rule-text":function(){return a.e("chunk-3cb2b669").then(a.bind(null,"6c37"))},"case-area":function(){return a.e("chunk-502749a0").then(a.bind(null,"b5ec"))},"grade-items":function(){return a.e("chunk-51b546f8").then(a.bind(null,"da3f"))},"level-selector":function(){return a.e("chunk-5f69625f").then(a.bind(null,"7f4e"))},"appeal-reaosn":function(){return a.e("chunk-6d5a6f09").then(a.bind(null,"f7ec"))},"reject-reason":function(){return a.e("chunk-453fc73f").then(a.bind(null,"f269"))},"reject-dialog":function(){return a.e("chunk-2d0afa2c").then(a.bind(null,"0ebc"))}},methods:{getDetailInfo:function(){var e=this;Object(i["rb"])(this.$route.params.uid).then(function(t){var a,s=t.advantage,n=t.promotion,o=t.superior_name,i=t.superior_workcode,c=t.employee_workcode,l=t.employee_name,u=t.end_time,d=t.scores,f=t._271_level,p=t.total_score,_=t.audit_status,b=t._271_is_necessary,m=t.appeal_record,h=t.reject_record,v=t.break_status,g=t.highlevel_start_time,y=t.has_history,A=t.feedback_feeling,k=t.special_recommended;e.special_recommended=k,e.advantage=s,e.promotion=n,e.levelNecessary=!!b,e.appealReason=m||[],e.rejectReasons=h||[],e.has_history=1==y,e.feedback_feeling=A,a=0==v?new Date<=new Date(g)?"未开始":"":r["v"][v],e.basicInfo={name:l,superior_workcode:i,breakStatus:a,workcode:c,leaderLabel:"他的上级",superior_name:o,finishedTime:"隔级评截止时间: ".concat(u)},e.scores=d.map(function(e){return e.score=e.superior_score,delete e.superior_score,e}),e.total=p,e.audit_status=_,e.level=r["nd"][f].toLowerCase(),e.readOnly=0==t.can_submit})},afterReject:function(){this.$router.replace(Object(o["h"])(this.$route.params.id))},levelChange:function(){var e=this;!this.levelNecessary||this.level?Object(i["dd"])({id:this.$route.params.uid,level:r["md"][this.level]}).then(function(t){e.$message({message:"等级设置成功!",type:"success"}),e.levelEditable=!1,e.getDetailInfo()}).catch(function(e){}):this.$message({message:"请选择等级!",type:"warning"})},pass:function(){var e=this;this.$confirm("确认通过此评分么, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.reqPass()}).catch(function(){})},reqPass:function(){var e=this;Object(i["Dc"])({ids:[this.$route.params.uid],type:2}).then(function(t){var a=t.count;e.$message({message:"除".concat(a,"人处于驳回中，其他批量操作成功!"),type:"success"}),e.afterReject()}).catch(function(e){})},goHistory:function(){this.$router.push(Object(o["g"])(this.$route.params.id,this.$route.params.type,this.$route.params.uid))}},created:function(){this.getDetailInfo()},computed:{leaderReason:function(){return this.scores[this.selectGradeItem].superior_case},selfCases:function(){return this.scores[this.selectGradeItem].self_cases},selfScore:function(){return this.scores[this.selectGradeItem].self_score},curItemName:function(){return this.scores[this.selectGradeItem].question_name},isRejected:function(){return 1==this.audit_status},isPassed:function(){return 2==this.audit_status},isUnTouched:function(){return 0==this.audit_status},selfTotal:function(){return this.scores.map(function(e){return e.self_score?parseFloat(e.self_score):0}).reduce(function(e,t){return e+t},0)}}},l=c,u=(a("7367"),a("2877")),d=Object(u["a"])(l,s,n,!1,null,"1bb1c560",null);t["default"]=d.exports},7367:function(e,t,a){"use strict";var s=a("fa84"),n=a.n(s);n.a},b9eb:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEUAAAD6oVj7pFr6oVf6oFj6oVj5oVj6oFj/qV/5oVj6oVf7oVj5oVj7o1n6oVf5oVf6oFj6oFf6oVj/pVr6oVj6oFj6oVf6oFf6oVf6oVf5oVn6olj5olr6olj5pFv/pln/pln5oFfp19XRAAAAIXRSTlMAyDr3uOfYzg/d031VSPKumYxvIu7CvqeYlYdjWDQtKBSkMb/WAAAAn0lEQVQoz3XRWQrEIBBF0Rdj1MxTz3Ptf5OdasGG4LtfhUcFEbtM7Z5gXUSqwNCKyMLQbTgSW2XLE2wVXd7CQbHI4ySazVonv+acmTLiI634dJEZJLYmjLvTpBWxU48qoeyrUXMs4Tk6HDmOsBxbnDn2mDgGzBQboKV4BRaKHXCn+AE6hh5Az/AGwDA0AF4Jm/1DgKB/Vun0tuXfBj34BdHUNaPNsx2dAAAAAElFTkSuQmCC"},fa84:function(e,t,a){}}]);