(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e07d128"],{"1c1d":function(e,t,a){},"286f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"culture-hr-details-page"},[a("nav-bar",{attrs:{list:e.nav}}),a("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[a("basic-info",{attrs:{data:e.basicInfo}}),a("br"),a("hr"),a("br"),a("div",{staticClass:"grade-name"},[e._v(e._s(e.evaluation_name))]),a("br"),a("br"),a("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("div",[a("span",{staticClass:"label"},[e._v("总分")]),a("span",{staticClass:"total-score"},[e._v("\n          "+e._s(e.total_score)+"分\n        ")]),a("br"),a("br"),a("br"),a("grade-items",{attrs:{items:e.scores}}),a("br"),a("br"),a("br"),e.level?a("div",[a("span",{staticClass:"label"},[e._v("等级标签")]),a("el-button",{staticClass:"selected selector",staticStyle:{"margin-left":"50px"}},[e._v(e._s(e.level))])],1):e._e()],1),a("div",[e.has_history?a("div",[a("el-button",{staticStyle:{"margin-bottom":"30px"},attrs:{type:"primary"},on:{click:e.goHistory}},[e._v("修改记录")])],1):e._e(),e.isEditable?a("div",[a("el-button",{staticStyle:{"margin-bottom":"30px"},attrs:{type:"primary"},on:{click:e.goModify}},[e._v("修改评分")])],1):e._e(),e.isRejectOrComplian?a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.goComplain}},[e._v("申诉处理")])],1):e._e()])]),a("br"),a("br"),a("br"),a("br"),a("div",[a("span",{staticClass:"sub-title"},[e._v("\n        优势:  \n      ")]),a("span",{staticClass:"content"},[e._v("\n        "+e._s(e.advantage)+"\n      ")])]),a("br"),a("div",[a("span",{staticClass:"sub-title"},[e._v("\n        待提升:  \n      ")]),a("span",{staticClass:"content"},[e._v("\n        "+e._s(e.promotion)+"\n      ")])]),a("div"),a("br"),a("hr"),a("br"),a("div",{staticClass:"detail-header",on:{click:function(t){e.detailHide=!e.detailHide}}},[e._v("\n      评分详情 "),a("i",{class:e.detailHide?"el-icon-caret-bottom":"el-icon-caret-top"})]),a("br"),e._l(e.scores,function(t,s){return a("case-item",{directives:[{name:"show",rawName:"v-show",value:!e.detailHide,expression:"!detailHide"}],key:s,attrs:{data:t}})})],2)],1)},i=[],r=a("c9f1"),n=a("38fb"),o=a("fea5"),l={data:function(){return{status:0,isManager:!1,detailHide:!0,advantage:"",promotion:"",has_history:1,total_score:"",level:"",scores:[],nav:[{label:n["ub"],href:r["x"]},{label:n["wb"],href:Object(r["z"])(this.$route.params.id)},{label:n["Tc"],href:Object(r["y"])(this.$route.params.id,this.$route.params.orgID)},{label:n["sb"],active:!0}],basicInfo:{name:"",workcode:"",leaderLabel:"上级",superior_name:"",superior_workcode:"",hightlevelLabel:"隔级上级",highlevel_name:"",highlevel_workcode:""},evaluation_name:""}},components:{"nav-bar":function(){return a.e("chunk-5a85c387").then(a.bind(null,"3208"))},"basic-info":function(){return a.e("chunk-8e8d666a").then(a.bind(null,"eb39"))},"grade-items":function(){return a.e("chunk-66fcb243").then(a.bind(null,"da3f"))},"case-item":function(){return a.e("chunk-34897bef").then(a.bind(null,"5b6c"))}},methods:{goModify:function(){this.$router.push(Object(r["v"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid))},goComplain:function(){this.$router.push({path:Object(r["v"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid),query:{complain:1}})},goHistory:function(){this.$router.push(Object(r["w"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid))},getInfo:function(){var e=this;Object(o["V"])(this.$route.params.uid).then(function(t){console.log(t);var a=t.advantage,s=t.promotion,i=t.scores,r=t.has_history,o=t._271_level,l=t.evaluation_name,c=t.name,u=t.workcode,d=t.superior_name,h=t.superior_workcode,b=t.highlevel_name,p=t.highlevel_workcode,v=t.evaluation_type,m=t.total_score;e.promotion=s,e.advantage=a,e.has_history=r,e.isManager=2==v,e.level=n["wc"][o],e.evaluation_name=l,e.total_score=m,e.basicInfo={name:c,workcode:u,leaderLabel:"上级",superior_name:d,superior_workcode:h,hightlevelLabel:"隔级上级",highlevel_name:b,highlevel_workcode:p},e.scores=i.map(function(e){return e.score=e.self_score,e})})}},created:function(){this.getInfo()},computed:{isRejectOrComplian:function(){return 30==this.status||70==this.status},isEditable:function(){return this.isManager&&this.status>=20&&this.status<100}}},c=l,u=(a("ce3a"),a("2877")),d=Object(u["a"])(c,s,i,!1,null,"183cc9cc",null);d.options.__file="new.index.vue";t["default"]=d.exports},ce3a:function(e,t,a){"use strict";var s=a("1c1d"),i=a.n(s);i.a}}]);