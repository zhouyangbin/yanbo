(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4759a10"],{"286f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"culture-hr-details-page"},[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[a("basic-info",{attrs:{data:t.basicInfo}}),a("br"),a("hr"),a("br"),a("div",{staticClass:"grade-name"},[t._v(t._s(t.evaluation_name))]),a("br"),a("br"),a("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("div",[a("span",{staticClass:"label"},[t._v("总分")]),a("span",{staticClass:"total-score"},[t._v("\n                    12.5分\n                ")]),a("br"),a("br"),a("br"),a("grade-items",{attrs:{items:t.scores}}),a("br"),a("br"),a("br"),a("span",{staticClass:"label"},[t._v("等级标签")]),a("el-button",{staticClass:"selected selector",staticStyle:{"margin-left":"50px"}},[t._v(t._s(t.level))])],1),a("div",[t.has_history?a("div",[a("el-button",{staticStyle:{"margin-bottom":"30px"},attrs:{type:"primary"},on:{click:t.goHistory}},[t._v("修改记录")])],1):t._e(),t.isEditable?a("div",[a("el-button",{staticStyle:{"margin-bottom":"30px"},attrs:{type:"primary"},on:{click:t.goModify}},[t._v("修改评分")])],1):t._e(),t.isRejectOrComplian?a("div",[a("el-button",{attrs:{type:"primary"},on:{click:t.goComplain}},[t._v("申诉处理")])],1):t._e()])]),a("br"),a("br"),a("br"),a("br"),a("div",[a("span",{staticClass:"sub-title"},[t._v("\n                优势:  \n            ")]),a("span",{staticClass:"content"},[t._v("\n                "+t._s(t.advantage)+"\n            ")])]),a("br"),a("div",[a("span",{staticClass:"sub-title"},[t._v("\n                待提升:  \n            ")]),a("span",{staticClass:"content"},[t._v("\n                "+t._s(t.promotion)+"\n            ")])]),a("div"),a("br"),a("hr"),a("br"),a("div",{staticClass:"detail-header",on:{click:function(e){t.detailHide=!t.detailHide}}},[t._v("\n            评分详情 "),a("i",{class:t.detailHide?"el-icon-caret-bottom":"el-icon-caret-top"})]),a("br"),t._l(t.scores,function(e,i){return a("case-item",{directives:[{name:"show",rawName:"v-show",value:!t.detailHide,expression:"!detailHide"}],key:i,attrs:{data:e}})})],2)],1)},s=[],n=a("c9f1"),r=a("38fb"),o=a("fea5"),l={data:function(){return{status:0,isManager:!1,detailHide:!0,advantage:"",promotion:"",has_history:1,level:"",scores:[],nav:[{label:r["ub"],href:n["w"]},{label:r["wb"],href:Object(n["y"])(this.$route.params.id)},{label:r["Tc"],href:Object(n["x"])(this.$route.params.id,this.$route.params.orgID)},{label:r["sb"],active:!0}],basicInfo:{name:"",workcode:"",leaderLabel:"上级",superior_name:"",superior_workcode:"",hightlevelLabel:"隔级上级",highlevel_name:"",highlevel_workcode:""},evaluation_name:""}},components:{"nav-bar":function(){return a.e("chunk-5a85c387").then(a.bind(null,"3208"))},"basic-info":function(){return a.e("chunk-8e8d666a").then(a.bind(null,"eb39"))},"grade-items":function(){return a.e("chunk-66fcb243").then(a.bind(null,"da3f"))},"case-item":function(){return a.e("chunk-b5722a66").then(a.bind(null,"5b6c"))}},methods:{goModify:function(){this.$router.push(Object(n["u"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid))},goComplain:function(){this.$router.push({path:Object(n["u"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid),query:{complain:1}})},goHistory:function(){this.$router.push(Object(n["v"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid))},getInfo:function(){var t=this;Object(o["T"])(this.$route.params.uid).then(function(e){console.log(e);var a=e.advantage,i=e.promotion,s=e.scores,n=e.has_history,o=e._271_level,l=e.evaluation_name,c=e.name,u=e.workcode,d=e.superior_name,h=e.superior_workcode,b=e.highlevel_name,p=e.highlevel_workcode,v=e.evaluation_type;t.promotion=i,t.advantage=a,t.has_history=n,t.scores=s.map(function(t){return t.score=t.self_score,t}),t.level=r["wc"][o],t.evaluation_name=l,t.basicInfo={name:c,workcode:u,leaderLabel:"上级",superior_name:d,superior_workcode:h,hightlevelLabel:"隔级上级",highlevel_name:b,highlevel_workcode:p},t.isManager=2==v})}},created:function(){this.getInfo()},computed:{isRejectOrComplian:function(){return 30==this.status||70==this.status},isEditable:function(){return this.isManager&&this.status>=20&&this.status<100}}},c=l,u=(a("8b4c"),a("2877")),d=Object(u["a"])(c,i,s,!1,null,"257b269e",null);d.options.__file="new.index.vue";e["default"]=d.exports},"8b4c":function(t,e,a){"use strict";var i=a("add3"),s=a.n(i);s.a},add3:function(t,e,a){}}]);