(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bfbd4c3"],{"2f21":function(e,t,n){"use strict";var a=n("79e5");e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},"55dd":function(e,t,n){"use strict";var a=n("5ca1"),r=n("d8e8"),i=n("4bf8"),o=n("79e5"),s=[].sort,c=[1,2,3];a(a.P+a.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!n("2f21")(s)),"Array",{sort:function(e){return void 0===e?s.call(i(this)):s.call(i(this),r(e))}})},"5e67":function(e,t,n){},"9ba9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"employee-target-detail"},[n("nav-bar",{attrs:{list:e.nav}}),n("detail-header",{attrs:{"user-info":e.userInfo,self:!0}}),n("target-content",{attrs:{"all-target":e.allTarget}}),n("el-row",{staticClass:"footer-button"},[n("el-button",{on:{click:e.checkExamine}},[e._v("\n      "+e._s(e.constants.CHECK_EXAMINE_LOG)+"\n    ")]),n("el-button",{on:{click:e.returnList}},[e._v(e._s(e.constants.TARGET_RETURN))])],1),n("examine-detail",{attrs:{"is-examine-dialog":e.isExamineDialog,perforamnce_user_id:e.userInfo.perforamnce_user_id},on:{close:e.closeExamine}})],1)},r=[],i=(n("ac6a"),n("55dd"),n("7f7f"),n("38fb")),o=n("c9f1"),s=n("fea5"),c={data:function(){return{constants:{CHECK_EXAMINE_LOG:i["E"],TARGET_RETURN:i["Se"]},nav:[{label:i["wd"],href:o["l"]},{label:i["Qe"],active:!0}],userInfo:{performance_name:"",stage:0,current_user_identity:"",opinion:"",avatar:"",name:"",workcode:"",superior_name:"",superior_workcode:"",executive_type:"",department_name:"",cycle:"",indicator_setting_end_time:"",perforamnce_user_id:this.$route.params.uid},allTarget:[],isExamineDialog:!1}},components:{"nav-bar":function(){return n.e("chunk-d5094d72").then(n.bind(null,"3208"))},"detail-header":function(){return n.e("chunk-745d1c87").then(n.bind(null,"58f1"))},"target-content":function(){return n.e("chunk-4011b8f2").then(n.bind(null,"bfd8"))},"examine-detail":function(){return n.e("chunk-50f9fdaa").then(n.bind(null,"1622"))}},methods:{getUserInfo:function(){var e=this,t={performance_user_id:this.$route.params.uid};Object(s["ob"])(t).then(function(t){var n=t.performance_name,a=t.stage,r=t.opinion,i=t.avatar,o=t.name,s=t.workcode,c=t.superior_name,u=t.superior_workcode,l=t.executive_type,m=t.department_name,f=t.cycle,d=t.indicator_setting_end_time;e.userInfo={performance_name:n,stage:a,opinion:r,avatar:i,name:o,workcode:s,superior_name:c,superior_workcode:u,executive_type:l,department_name:m,cycle:f,indicator_setting_end_time:d,perforamnce_user_id:e.$route.params.uid}}).catch(function(){})},getWrokAndTeamTarget:function(){var e=this,t={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid};Object(s["Jb"])(t).then(function(t){var n=[{content:"",disqualification:"",excellence:"",good:"",id:"",outstanding:"",performance_id:"",performance_user_id:"",target:"",to_be_improved:"",type:"",weights:""}],a=void 0!==t.team,r=void 0!==t.work,i=void 0!==t.finance;if(e.allTarget=[],a){var o=t.team;void 0==o.targets[0]&&(o.targets=n),o.template_columns={content:o.targets[0].content,weights:o.targets[0].weights,metrics:o.template_columns.metrics,targets:o.targets};var s=[{basicType:"team",isMoney:0,sort:o.sort,type:o.name,weight:o.weight,table:[o.template_columns]}];e.changeData(s),e.$set(e.allTarget,o.sort-1,s[0])}if(r){var c=t.work;void 0==c.targets[0]&&(c.targets=n),c.template_columns={content:c.targets[0].content,weights:c.targets[0].weights,metrics:c.template_columns.metrics,targets:c.targets};var u=[{basicType:"work",isMoney:0,sort:c.sort,type:c.name,weight:c.weight,table:[c.template_columns]}];e.changeData(u),e.$set(e.allTarget,c.sort-1,u[0])}if(i){var l=t.finance;void 0==l.targets[0]&&(l.targets=n),l.template_columns={content:l.targets[0].content,weights:l.targets[0].weights,metrics:l.template_columns.metrics,targets:l.targets};var m=[{basicType:"finance",isMoney:1,sort:l.sort,type:l.name,weight:l.weight,table:[l.template_columns]}];e.changeData(m),e.$set(e.allTarget,l.sort-1,m[0])}}).catch(function(){})},changeData:function(e){return e.forEach(function(e){e.table.forEach(function(e){e.targets.forEach(function(t){e.target=t.target,e.metrics.forEach(function(e){e.content=t[e.key]})})})}),e},checkExamine:function(){this.isExamineDialog=!0},closeExamine:function(){this.isExamineDialog=!1},returnList:function(){this.$router.push("/employee/my")},ratingList:function(){}},created:function(){this.getUserInfo(),this.getWrokAndTeamTarget()}},u=c,l=(n("c073"),n("2877")),m=Object(l["a"])(u,a,r,!1,null,"b4f95268",null);t["default"]=m.exports},c073:function(e,t,n){"use strict";var a=n("5e67"),r=n.n(a);r.a}}]);