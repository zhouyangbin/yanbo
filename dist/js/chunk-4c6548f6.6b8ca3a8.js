(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c6548f6"],{"2f21":function(e,t,a){"use strict";var n=a("79e5");e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}},"55dd":function(e,t,a){"use strict";var n=a("5ca1"),r=a("d8e8"),i=a("4bf8"),o=a("79e5"),s=[].sort,c=[1,2,3];n(n.P+n.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!a("2f21")(s)),"Array",{sort:function(e){return void 0===e?s.call(i(this)):s.call(i(this),r(e))}})},"6f21":function(e,t,a){},9945:function(e,t,a){"use strict";var n=a("6f21"),r=a.n(n);r.a},dba7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"team-target-detail"},[a("nav-bar",{attrs:{list:e.nav}}),a("div",[a("detail-header",{attrs:{"user-info":e.userInfo,self:!1}}),a("target-content",{attrs:{"all-target":e.allTarget}}),a("el-row",{staticClass:"footer-button"},[a("el-button",{staticClass:"agree-button",on:{click:e.agreeTarget}},[e._v("同意")]),a("el-button",{staticClass:"wait-consensus",on:{click:e.rejectTarget}},[e._v("待共识")]),a("el-button",{on:{click:e.returnGradeList}},[e._v("返回下属评分列表")])],1)],1),a("agree-dialog",{attrs:{"is-agree-dialog":e.isAgreeDialog},on:{close:e.closeAgreeDialog}}),a("reject-dialog",{attrs:{"is-reject-dialog":e.isRejectDialog},on:{close:e.closeRejectDialog}})],1)},r=[],i=(a("55dd"),a("ac6a"),a("7f7f"),a("38fb")),o=a("c9f1"),s=a("fea5"),c={data:function(){return{nav:[{label:i["Ye"],href:o["m"]},{label:i["dc"],href:PATH_PERFORMANCE_MY_DETAIL(this.$route.params.id,this.$route.params.uid)},{label:"指标详情",active:!0}],userInfo:{avatar:"",cycle:"",department_name:"",executive_type:"",indicator_setting_end_time:"",isolation_name:"",isolation_workcode:"",name:"",opinion:"",performance_name:"",stage:"",stage_text:"",superior_name:"",superior_workcode:"",workcode:"",perforamnce_user_id:this.$route.params.uid},allTarget:[],isAgreeDialog:!1,isRejectDialog:!1}},components:{"nav-bar":function(){return a.e("chunk-6f993239").then(a.bind(null,"3208"))},"detail-header":function(){return a.e("chunk-0f2b260a").then(a.bind(null,"5007"))},"target-content":function(){return a.e("chunk-59877df9").then(a.bind(null,"bfd8"))},"agree-dialog":function(){return a.e("chunk-2d0aba7b").then(a.bind(null,"15cd"))},"reject-dialog":function(){return a.e("chunk-2d22a10c").then(a.bind(null,"dfb6"))}},methods:{getUserInfo:function(){var e=this,t={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid};Object(s["Z"])(t).then(function(t){var a=t.avatar,n=t.cycle,r=t.department_name,i=t.executive_type,o=t.indicator_setting_end_time,s=t.isolation_name,c=t.isolation_workcode,l=t.name,u=t.opinion,g=t.performance_name,d=t.stage,f=t.stage_text,m=t.superior_name,_=t.superior_workcode,h=t.workcode;e.userInfo={avatar:a,cycle:n,department_name:r,executive_type:i,indicator_setting_end_time:o,isolation_name:s,isolation_workcode:c,name:l,opinion:u,performance_name:g,stage:d,stage_text:f,superior_name:m,superior_workcode:_,workcode:h,perforamnce_user_id:e.$route.params.uid}}).catch(function(){})},changeData:function(e){return e.forEach(function(e){e.table.forEach(function(e){e.targets.forEach(function(t){e.target=t.target,e.metrics.forEach(function(e){e.content=t[e.key]})})})}),e},getWrokAndTeamTarget:function(){var e=this,t={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid};Object(s["Y"])(t).then(function(t){var a=[{content:"",disqualification:"",excellence:"",good:"",id:"",outstanding:"",performance_id:"",performance_user_id:"",target:"",to_be_improved:"",type:"",weights:""}],n=void 0!==t.team,r=void 0!==t.work,i=void 0!==t.finance;if(e.allTarget=[],n){var o=t.team;void 0==o.targets[0]&&(o.targets=a),o.template_columns={content:o.targets[0].content,weights:o.targets[0].weights,metrics:o.template_columns.metrics,targets:o.targets};var s=[{basicType:"team",isMoney:0,sort:o.sort,type:o.name,weight:o.weight,table:[o.template_columns]}];e.changeData(s),e.$set(e.allTarget,o.sort-1,s[0])}if(r){var c=t.work;void 0==c.targets[0]&&(c.targets=a),c.template_columns={content:c.targets[0].content,weights:c.targets[0].weights,metrics:c.template_columns.metrics,targets:c.targets};var l=[{basicType:"work",isMoney:0,sort:c.sort,type:c.name,weight:c.weight,table:[c.template_columns]}];e.changeData(l),e.$set(e.allTarget,c.sort-1,l[0])}if(i){var u=t.finance;void 0==u.targets[0]&&(u.targets=a),u.template_columns={content:u.targets[0].content,weights:u.targets[0].weights,metrics:u.template_columns.metrics,targets:u.targets};var g=[{basicType:"finance",isMoney:1,sort:u.sort,type:u.name,weight:u.weight,table:[u.template_columns]}];e.changeData(g),e.$set(e.allTarget,u.sort-1,g[0])}}).catch(function(){})},agreeTarget:function(){this.isAgreeDialog=!0},closeAgreeDialog:function(){this.isAgreeDialog=!1},rejectTarget:function(){this.isRejectDialog=!0},closeRejectDialog:function(){this.isRejectDialog=!1},returnGradeList:function(){this.$router.push(Object(o["B"])(this.$route.params.id,this.$route.params.uid))}},created:function(){this.getUserInfo(),this.getWrokAndTeamTarget()}},l=c,u=(a("9945"),a("2877")),g=Object(u["a"])(l,n,r,!1,null,"2da906e6",null);t["default"]=g.exports}}]);