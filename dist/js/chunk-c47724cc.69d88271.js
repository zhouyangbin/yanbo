(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c47724cc"],{"0a1f":function(e,t,s){},1311:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"self-grade-component"},[s("section",{staticClass:"mark"},[s("el-row",{attrs:{align:"middle",type:"flex"}},[s("el-col",{staticStyle:{padding:"20px","border-right":"1px solid #979797"}},[s("div",{staticClass:"mark-label"},[e._v("\n          请选择评分项目\n        ")]),s("grade-items",{attrs:{items:e.questions},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}}),s("br"),s("br"),s("div",{staticClass:"mark-label"},[e._v("\n          请评分\n        ")]),s("br"),s("grade-slider",{attrs:{min:1,readOnly:e.readOnly,step:1,max:5},model:{value:e.questions[e.selectGradeItem].score,callback:function(t){e.$set(e.questions[e.selectGradeItem],"score",t)},expression:"questions[selectGradeItem].score"}})],1),s("el-col",{staticStyle:{"padding-left":"50px"}},[s("div",{staticClass:"mark-score"},[e._v("\n          "+e._s(e.questions[e.selectGradeItem].score)+"分\n        ")]),s("div",{staticClass:"mark-desc"},[e._v("\n          "+e._s(e.contentForCurScore)+"\n        ")])])],1)],1),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=3,expression:"questions[selectGradeItem].score>=3"}]},[s("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写我的3分案例"},model:{value:e.questions[e.selectGradeItem].cases[0],callback:function(t){e.$set(e.questions[e.selectGradeItem].cases,0,t)},expression:"questions[selectGradeItem].cases[0]"}}),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=4,expression:"questions[selectGradeItem].score>=4"}]},[s("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写我的4分案例"},model:{value:e.questions[e.selectGradeItem].cases[1],callback:function(t){e.$set(e.questions[e.selectGradeItem].cases,1,t)},expression:"questions[selectGradeItem].cases[1]"}}),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=5,expression:"questions[selectGradeItem].score>=5"}]},[s("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写我的5分案例"},model:{value:e.questions[e.selectGradeItem].cases[2],callback:function(t){e.$set(e.questions[e.selectGradeItem].cases,2,t)},expression:"questions[selectGradeItem].cases[2]"}}),s("br")],1)],1)],1),s("el-row",{directives:[{name:"show",rawName:"v-show",value:!e.readOnly,expression:"!readOnly"}],attrs:{type:"flex",justify:"end"}},[e.neverSubmit?s("el-button",{attrs:{type:"primary"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]):e._e(),s("el-button",{attrs:{type:"primary"},on:{click:e.submitGrade}},[e._v(e._s(e.constants.SUBMIT))])],1)],1)},r=[],n=(s("ac6a"),s("c93e")),c=(s("6c7b"),s("fea5")),o=s("38fb"),i={data:function(){return{selectGradeItem:0,neverSubmit:!0,questions:[{cases:["","",""]},{cases:["","",""]},{cases:["","",""]},{cases:["","",""]}],readOnly:!1,constants:{SUBMIT:o["Qd"],SAVE_DRAFT:o["Fd"]}}},components:{"grade-items":function(){return s.e("chunk-10dfbf8c").then(s.bind(null,"da3f"))},"grade-slider":function(){return s.e("chunk-617cc2fc").then(s.bind(null,"aa29"))},"case-area":function(){return s.e("chunk-463f71be").then(s.bind(null,"b5ec"))}},methods:{getGradeInfo:function(){var e=this,t=this.$route.params.id;Object(c["C"])(t).then(function(t){e.neverSubmit=0==t.status;var s="uid_self_".concat(e.$route.params.id,"_draft_culture"),a=window.localStorage.getItem(s);if(0==t.status&&a){"uid_self_".concat(e.$route.params.id,"_draft_culture");e.preProcessQuestions(JSON.parse(a))}else e.preProcessQuestions(t.questions);var r=t.employee_name,n=t.employee_workcode,c=t.highlevel_name,o=t.highlevel_workcode,i=t.self_end_time,l=t.superior_name,u=t.superior_workcode;e.$parent.basicInfo={name:r,workcode:n,leaderLabel:"我的上级",superior_name:l,highlevel_name:c,superior_workcode:u,hightlevelLabel:"隔级上级",highlevel_workcode:o,finishedTime:"自评截止时间: ".concat(i)},e.readOnly=0==t.can_edit,e.$forceUpdate()})},preProcessQuestions:function(e){var t=this;e.map(function(e,s){if(!e.cases)return e.cases=new Array(3).fill(""),void t.$set(t.questions,s,Object(n["a"])({},e));if(3!=e.cases.length)for(var a=0;a<=3-e.cases.length;a++)e.cases[e.cases.length+a]="";t.$set(t.questions,s,Object(n["a"])({},e))})},validateGrade:function(){var e=this;return this.questions.some(function(t){if(!t.score)return e.$message.error("".concat(t.question_name,"评分未选择!")),!0;if(3==t.score){var s=e.caseValidate(t,3);if(-1!=s)return e.$message.error("".concat(t.question_name).concat(s+3,"分理由未填写，请填写后提交!")),!0}if(4==t.score){var a=e.caseValidate(t,4);if(-1!=a)return e.$message.error("".concat(t.question_name).concat(a+3,"分理由未填写，请填写后提交!")),!0}if(5==t.score){var r=e.caseValidate(t,5);if(-1!=r)return e.$message.error("".concat(t.question_name).concat(r+3,"分理由未填写，请填写后提交!")),!0}return!1})},caseValidate:function(e,t){for(var s=t-3,a=0;a<=s;a++)if(void 0==e.cases[a]||0==e.cases[a].length)return a;return-1},composeData:function(){var e={};return this.filterCases(this.questions).forEach(function(t){e[t.question_id]={score:t.score,cases:t.cases}}),e},filterCases:function(e){return e.map(function(e){return e.cases&&0!=e.cases.length&&(e.cases=e.cases.slice(0,e.score-2)),e})},submitGrade:function(){var e=this,t=this.validateGrade();if(!t){var s=this.composeData();Object(c["Ab"])(s,this.$route.params.id).then(function(t){e.clearDraft(),e.$notify({title:o["Rd"],message:o["y"],type:"success"}),e.getGradeInfo()})}},saveDraft:function(){var e="uid_self_".concat(this.$route.params.id,"_draft_culture");window.localStorage.setItem(e,JSON.stringify(this.filterCases(this.questions))),this.$notify({title:o["Rd"],message:o["T"],type:"success"})},clearDraft:function(){var e="uid_self_".concat(this.$route.params.id,"_draft_culture");window.localStorage.removeItem(e)}},computed:{contentForCurScore:function(){var e=this;return((this.questions[this.selectGradeItem].topics||[]).filter(function(t){return t.score==e.questions[e.selectGradeItem].score})[0]||{}).content}},created:function(){this.getGradeInfo()}},l=i,u=(s("f5b0"),s("2877")),d=Object(u["a"])(l,a,r,!1,null,"6dfa59d0",null);d.options.__file="index.vue";t["default"]=d.exports},"36bd":function(e,t,s){"use strict";var a=s("4bf8"),r=s("77f1"),n=s("9def");e.exports=function(e){var t=a(this),s=n(t.length),c=arguments.length,o=r(c>1?arguments[1]:void 0,s),i=c>2?arguments[2]:void 0,l=void 0===i?s:r(i,s);while(l>o)t[o++]=e;return t}},"6c7b":function(e,t,s){var a=s("5ca1");a(a.P,"Array",{fill:s("36bd")}),s("9c6c")("fill")},c93e:function(e,t,s){"use strict";function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},r=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),r.forEach(function(t){a(e,t,s[t])})}return e}s.d(t,"a",function(){return r})},f5b0:function(e,t,s){"use strict";var a=s("0a1f"),r=s.n(a);r.a}}]);