(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41d12d5a"],{"0b32":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"employee-target-detail"},[n("nav-bar",{attrs:{list:t.nav}}),n("detail-header",{attrs:{"user-info":t.userInfo,self:!0,isDisable:!0}}),n("target-content",{attrs:{"all-target":t.allTarget}}),n("el-row",{staticClass:"footer-button"},[n("el-button",{on:{click:t.checkExamine}},[t._v("\n      "+t._s(t.constants.CHECK_EXAMINE_LOG)+"\n    ")]),n("el-button",{on:{click:t.returnList}},[t._v(t._s(t.constants.TARGET_RETURN))])],1),n("examine-detail",{attrs:{"is-examine-dialog":t.isExamineDialog,perforamnce_user_id:t.userInfo.perforamnce_user_id},on:{close:t.closeExamine}})],1)},r=[],i=(n("ac6a"),n("55dd"),n("7f7f"),n("38fb")),o=n("c9f1"),s=n("fea5"),c={data:function(){return{constants:{CHECK_EXAMINE_LOG:i["E"],TARGET_RETURN:i["Ve"]},nav:[{label:"组织部绩效考核列表",href:o["kb"]},{label:"考核详情",href:Object(o["t"])(this.$route.params.id)},{label:i["Te"],active:!0}],userInfo:{avatar:"",cycle:"",department_name:"",executive_type:"",indicator_setting_end_time:"",isolation_name:"",isolation_workcode:"",name:"",opinion:"",performance_name:"",stage:"",stage_text:"",superior_name:"",superior_workcode:"",workcode:"",perforamnce_user_id:this.$route.params.uid},allTarget:[],isExamineDialog:!1}},components:{"nav-bar":function(){return n.e("chunk-6f993239").then(n.bind(null,"3208"))},"detail-header":function(){return n.e("chunk-43c64c17").then(n.bind(null,"5007"))},"target-content":function(){return n.e("chunk-59877df9").then(n.bind(null,"bfd8"))},"examine-detail":function(){return n.e("chunk-2bba306f").then(n.bind(null,"5a52"))}},methods:{getUserInfo:function(){var t=this,e={performance_user_id:this.$route.params.uid};Object(s["X"])(e).then(function(e){var n=e.avatar,a=e.cycle,r=e.department_name,i=e.executive_type,o=e.indicator_setting_end_time,s=e.isolation_name,c=e.isolation_workcode,u=e.name,l=e.opinion,m=e.performance_name,f=e.stage,d=e.stage_text,g=e.superior_name,_=e.superior_workcode,p=e.workcode;t.userInfo={avatar:n,cycle:a,department_name:r,executive_type:i,indicator_setting_end_time:o,isolation_name:s,isolation_workcode:c,name:u,opinion:l,performance_name:m,stage:f,stage_text:d,superior_name:g,superior_workcode:_,workcode:p,perforamnce_user_id:t.$route.params.uid}}).catch(function(){})},getWrokAndTeamTarget:function(){var t=this,e={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid};Object(s["W"])(e).then(function(e){var n=[{content:"",disqualification:"",excellence:"",good:"",id:"",outstanding:"",performance_id:"",performance_user_id:"",target:"",to_be_improved:"",type:"",weights:""}],a=void 0!==e.team,r=void 0!==e.work,i=void 0!==e.finance;if(t.allTarget=[],a){var o=e.team;void 0==o.targets[0]&&(o.targets=n),o.template_columns={content:o.targets[0].content,weights:o.targets[0].weights,metrics:o.template_columns.metrics,targets:o.targets};var s=[{basicType:"team",isMoney:0,sort:o.sort,type:o.name,weight:o.weight,table:[o.template_columns]}];t.changeData(s),t.$set(t.allTarget,o.sort-1,s[0])}if(r){var c=e.work;void 0==c.targets[0]&&(c.targets=n),c.template_columns={content:c.targets[0].content,weights:c.targets[0].weights,metrics:c.template_columns.metrics,targets:c.targets};var u=[{basicType:"work",isMoney:0,sort:c.sort,type:c.name,weight:c.weight,table:[c.template_columns]}];t.changeData(u),t.$set(t.allTarget,c.sort-1,u[0])}if(i){var l=e.finance;void 0==l.targets[0]&&(l.targets=n),l.template_columns={content:l.targets[0].content,weights:l.targets[0].weights,metrics:l.template_columns.metrics,targets:l.targets};var m=[{basicType:"finance",isMoney:1,sort:l.sort,type:l.name,weight:l.weight,table:[l.template_columns]}];t.changeData(m),t.$set(t.allTarget,l.sort-1,m[0])}}).catch(function(){})},changeData:function(t){return t.forEach(function(t){t.table.forEach(function(t){t.targets.forEach(function(e){t.target=e.target,t.metrics.forEach(function(t){t.content=e[t.key]})})})}),t},checkExamine:function(){this.isExamineDialog=!0},closeExamine:function(){this.isExamineDialog=!1},returnList:function(){this.$router.push(Object(o["t"])(this.$route.params.id))},ratingList:function(){}},created:function(){this.getUserInfo(),this.getWrokAndTeamTarget()}},u=c,l=(n("b66f"),n("2877")),m=Object(l["a"])(u,a,r,!1,null,"13e41c06",null);e["default"]=m.exports},"2f21":function(t,e,n){"use strict";var a=n("79e5");t.exports=function(t,e){return!!t&&a(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,n){"use strict";var a=n("5ca1"),r=n("d8e8"),i=n("4bf8"),o=n("79e5"),s=[].sort,c=[1,2,3];a(a.P+a.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!n("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),r(t))}})},9381:function(t,e,n){},b66f:function(t,e,n){"use strict";var a=n("9381"),r=n.n(a);r.a}}]);