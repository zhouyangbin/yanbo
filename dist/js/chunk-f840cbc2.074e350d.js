(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f840cbc2"],{"034c":function(e,s,t){"use strict";var a=t("4e06"),r=t.n(a);r.a},1311:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"self-grade-component"},[t("section",{staticClass:"mark"},[t("el-row",{attrs:{align:"middle",type:"flex"}},[t("el-col",{staticStyle:{padding:"0.3rem","border-right":"1px solid #979797"}},[t("div",{staticClass:"mark-label"},[e._v("请选择评分项目")]),t("grade-items",{attrs:{items:e.questions},model:{value:e.selectGradeItem,callback:function(s){e.selectGradeItem=s},expression:"selectGradeItem"}}),t("br"),t("br"),t("div",{staticClass:"mark-label"},[e._v("请评分")]),t("br"),t("grade-slider",{attrs:{min:1,readOnly:e.readOnly,step:1,max:5},model:{value:e.questions[e.selectGradeItem].score,callback:function(s){e.$set(e.questions[e.selectGradeItem],"score",s)},expression:"questions[selectGradeItem].score"}})],1),t("el-col",{staticStyle:{"padding-left":"0.75rem"}},[t("div",{staticClass:"mark-score"},[e._v(e._s(e.questions[e.selectGradeItem].score)+"分")]),t("div",{staticClass:"mark-desc"},[e._v(e._s(e.contentForCurScore))])])],1)],1),t("br"),t("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=3,expression:"questions[selectGradeItem].score>=3"}]},[t("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写我的3分案例"},model:{value:e.questions[e.selectGradeItem].cases[0],callback:function(s){e.$set(e.questions[e.selectGradeItem].cases,0,s)},expression:"questions[selectGradeItem].cases[0]"}}),t("br"),t("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=4,expression:"questions[selectGradeItem].score>=4"}]},[t("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写我的4分案例"},model:{value:e.questions[e.selectGradeItem].cases[1],callback:function(s){e.$set(e.questions[e.selectGradeItem].cases,1,s)},expression:"questions[selectGradeItem].cases[1]"}}),t("br"),t("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=5,expression:"questions[selectGradeItem].score>=5"}]},[t("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写我的5分案例"},model:{value:e.questions[e.selectGradeItem].cases[2],callback:function(s){e.$set(e.questions[e.selectGradeItem].cases,2,s)},expression:"questions[selectGradeItem].cases[2]"}}),t("br")],1)],1)],1),t("el-row",{directives:[{name:"show",rawName:"v-show",value:!e.readOnly,expression:"!readOnly"}],attrs:{type:"flex",justify:"end"}},[e.neverSubmit?t("el-button",{attrs:{type:"primary"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]):e._e(),t("el-button",{attrs:{type:"primary"},on:{click:e.submitGrade}},[e._v(e._s(e.constants.SUBMIT))])],1)],1)},r=[],n=(t("ac6a"),t("c93e")),c=(t("6c7b"),t("cadf"),t("551c"),t("097d"),t("fea5")),i=t("38fb"),o={data:function(){return{selectGradeItem:0,neverSubmit:!0,questions:[{cases:["","",""]},{cases:["","",""]},{cases:["","",""]},{cases:["","",""]}],readOnly:!1,constants:{SUBMIT:i["Ud"],SAVE_DRAFT:i["Jd"]}}},components:{"grade-items":function(){return t.e("chunk-588be260").then(t.bind(null,"da3f"))},"grade-slider":function(){return t.e("chunk-6a62dc0d").then(t.bind(null,"aa29"))},"case-area":function(){return t.e("chunk-314b5405").then(t.bind(null,"b5ec"))}},methods:{getGradeInfo:function(){var e=this,s=this.$route.params.id;Object(c["C"])(s).then(function(s){e.neverSubmit=0==s.status;var t="uid_self_".concat(e.$route.params.id,"_draft_culture"),a=window.localStorage.getItem(t);if(0==s.status&&a){"uid_self_".concat(e.$route.params.id,"_draft_culture");e.preProcessQuestions(JSON.parse(a))}else e.preProcessQuestions(s.questions);var r=s.employee_name,n=s.employee_workcode,c=s.highlevel_name,i=s.highlevel_workcode,o=s.self_end_time,l=s.superior_name,u=s.superior_workcode;e.$parent.basicInfo={name:r,workcode:n,leaderLabel:"我的上级",superior_name:l,highlevel_name:c,superior_workcode:u,hightlevelLabel:"隔级上级",highlevel_workcode:i,finishedTime:"自评截止时间: ".concat(o)},e.readOnly=0==s.can_edit,e.$forceUpdate()})},preProcessQuestions:function(e){var s=this;e.map(function(e,t){if(!e.cases)return e.cases=new Array(3).fill(""),void s.$set(s.questions,t,Object(n["a"])({},e));if(3!=e.cases.length)for(var a=0;a<=3-e.cases.length;a++)e.cases[e.cases.length+a]="";s.$set(s.questions,t,Object(n["a"])({},e))})},validateGrade:function(){var e=this;return this.questions.some(function(s){if(!s.score)return e.$message.error("".concat(s.question_name,"评分未选择!")),!0;if(3==s.score){var t=e.caseValidate(s,3);if(-1!=t)return e.$message.error("".concat(s.question_name).concat(t+3,"分理由未填写，请填写后提交!")),!0}if(4==s.score){var a=e.caseValidate(s,4);if(-1!=a)return e.$message.error("".concat(s.question_name).concat(a+3,"分理由未填写，请填写后提交!")),!0}if(5==s.score){var r=e.caseValidate(s,5);if(-1!=r)return e.$message.error("".concat(s.question_name).concat(r+3,"分理由未填写，请填写后提交!")),!0}return!1})},caseValidate:function(e,s){for(var t=s-3,a=0;a<=t;a++)if(void 0==e.cases[a]||0==e.cases[a].length)return a;return-1},composeData:function(){var e={};return this.filterCases(this.questions).forEach(function(s){e[s.question_id]={score:s.score,cases:s.cases}}),e},filterCases:function(e){return e.map(function(e){return e.cases&&0!=e.cases.length&&(e.cases=e.cases.slice(0,e.score-2)),e})},submitGrade:function(){var e=this,s=this.validateGrade();if(!s){var t=this.composeData();Object(c["Gb"])(t,this.$route.params.id).then(function(s){e.clearDraft(),e.$notify({title:i["Vd"],message:i["A"],type:"success"}),e.getGradeInfo()})}},saveDraft:function(){var e="uid_self_".concat(this.$route.params.id,"_draft_culture");window.localStorage.setItem(e,JSON.stringify(this.filterCases(this.questions))),this.$notify({title:i["Vd"],message:i["V"],type:"success"})},clearDraft:function(){var e="uid_self_".concat(this.$route.params.id,"_draft_culture");window.localStorage.removeItem(e)}},computed:{contentForCurScore:function(){var e=this;return((this.questions[this.selectGradeItem].topics||[]).filter(function(s){return s.score==e.questions[e.selectGradeItem].score})[0]||{}).content}},created:function(){this.getGradeInfo()}},l=o,u=(t("034c"),t("2877")),d=Object(u["a"])(l,a,r,!1,null,"d69bc818",null);d.options.__file="index.vue";s["default"]=d.exports},"36bd":function(e,s,t){"use strict";var a=t("4bf8"),r=t("77f1"),n=t("9def");e.exports=function(e){var s=a(this),t=n(s.length),c=arguments.length,i=r(c>1?arguments[1]:void 0,t),o=c>2?arguments[2]:void 0,l=void 0===o?t:r(o,t);while(l>i)s[i++]=e;return s}},"4e06":function(e,s,t){},"6c7b":function(e,s,t){var a=t("5ca1");a(a.P,"Array",{fill:t("36bd")}),t("9c6c")("fill")}}]);