(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c47291e2"],{1311:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"self-grade-component"},[s("section",{staticClass:"mark"},[s("el-row",{attrs:{align:"middle",type:"flex"}},[s("el-col",{staticStyle:{padding:"20px","border-right":"1px solid #979797"},attrs:{span:14}},[s("div",{staticClass:"mark-label"},[e._v("请选择评分项目")]),s("grade-items",{attrs:{items:e.questions},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}}),s("br"),s("br"),s("div",{staticClass:"mark-label"},[e._v("请评分")]),s("br"),s("grade-slider",{attrs:{min:1,readOnly:e.readOnly,step:1,max:5,labels:e.constants.markLabels},model:{value:e.questions[e.selectGradeItem].score,callback:function(t){e.$set(e.questions[e.selectGradeItem],"score",t)},expression:"questions[selectGradeItem].score"}})],1),s("el-col",{staticStyle:{"padding-left":"50px"},attrs:{span:10}},[s("div",{staticClass:"mark-score"},[e._v("\n          "+e._s(e.questions[e.selectGradeItem].score&&e.questions[e.selectGradeItem].score>=0?e.questions[e.selectGradeItem].score:"")+"分\n        ")]),s("div",{staticClass:"mark-desc"},[e._v(e._s(e.contentForCurScore))])])],1)],1),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=3,expression:"questions[selectGradeItem].score >= 3"}]},[s("case-area",{attrs:{readOnly:e.readOnly,placeholder:e.casePlaceholders[0]},model:{value:e.questions[e.selectGradeItem].cases[0],callback:function(t){e.$set(e.questions[e.selectGradeItem].cases,0,t)},expression:"questions[selectGradeItem].cases[0]"}}),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=4,expression:"questions[selectGradeItem].score >= 4"}]},[s("case-area",{attrs:{readOnly:e.readOnly,placeholder:e.casePlaceholders[1]},model:{value:e.questions[e.selectGradeItem].cases[1],callback:function(t){e.$set(e.questions[e.selectGradeItem].cases,1,t)},expression:"questions[selectGradeItem].cases[1]"}}),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=5,expression:"questions[selectGradeItem].score >= 5"}]},[s("case-area",{attrs:{readOnly:e.readOnly,placeholder:e.casePlaceholders[2]},model:{value:e.questions[e.selectGradeItem].cases[2],callback:function(t){e.$set(e.questions[e.selectGradeItem].cases,2,t)},expression:"questions[selectGradeItem].cases[2]"}}),s("br")],1)],1)],1),s("el-row",{directives:[{name:"show",rawName:"v-show",value:!e.readOnly,expression:"!readOnly"}],attrs:{type:"flex",justify:"end"}},[e.neverSubmit?s("el-button",{attrs:{type:"primary"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]):e._e(),s("el-button",{attrs:{type:"primary"},on:{click:e.submitGrade}},[e._v(e._s(e.constants.SUBMIT))])],1)],1)},n=[],a=(s("2338"),s("fb37"),s("34a3"),s("f763"),s("f301"),s("df99"),s("97a3")),c=(s("1c74"),s("fea5")),o=s("38fb"),l=s("c9f1");function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function d(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(s,!0).forEach((function(t){Object(a["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var f={props:{isManager:{type:Boolean,default:!1}},data:function(){return{selectGradeItem:0,neverSubmit:!0,questions:[{cases:["","",""]},{cases:["","",""]},{cases:["","",""]},{cases:["","",""]}],readOnly:!1,constants:{SUBMIT:o["be"],SAVE_DRAFT:o["Qd"],markLabels:["红线","胜任","优秀","超预期","卓越"]}}},components:{"grade-items":function(){return s.e("chunk-54f65ae0").then(s.bind(null,"da3f"))},"grade-slider":function(){return s.e("chunk-af1166aa").then(s.bind(null,"aa29"))},"case-area":function(){return s.e("chunk-18a5333c").then(s.bind(null,"b5ec"))}},methods:{getGradeInfo:function(){var e=this,t=this.$route.params.id;Object(c["H"])(t).then((function(s){var r=1==s.is_new_record;e.neverSubmit=r,r?Object(c["I"])(t).then((function(t){e.preProcessQuestions(t.questions)})):e.preProcessQuestions(s.questions);var n=s.employee_name,a=s.employee_workcode,o=s.highlevel_name,i=s.highlevel_workcode,l=s.self_end_time,u=s.superior_name,d=s.superior_workcode;e.$parent.basicInfo={name:n,workcode:a,leaderLabel:"我的上级",superior_name:u,highlevel_name:o,superior_workcode:d,hightlevelLabel:"隔级上级",highlevel_workcode:i,finishedTime:"自评截止时间: ".concat(l)},e.readOnly=0==s.can_edit,e.$forceUpdate()}))},preProcessQuestions:function(e){var t=this;e.map((function(e,s){if(!e.cases)return e.cases=new Array(3).fill(""),void t.$set(t.questions,s,d({},e));if(3!=e.cases.length)for(var r=0;r<=3-e.cases.length;r++)e.cases[e.cases.length+r]="";t.$set(t.questions,s,d({},e))}))},scoreCheck:function(e,t){if(e.score==t){var s=this.caseValidate(i,t);if(-1!=s)return this.$message.error("".concat(i.question_name).concat(s+3,"分理由未填写，请填写后提交!")),!0}return!1},validateGrade:function(){var e=this;return this.questions.some((function(t){return t.score?!(![3,4,5].includes(parseInt(t.score))||!e.scoreCheck(t)):(e.$message.error("".concat(t.question_name,"评分未选择!")),!0)}))},caseValidate:function(e,t){for(var s=t-3,r=0;r<=s;r++)if(void 0==e.cases[r]||0==e.cases[r].length)return r;return-1},composeData:function(){var e={};return this.filterCases(this.questions).forEach((function(t){e[t.question_id]={score:t.score,cases:t.cases.filter((function(e){return!!e}))}})),e},filterCases:function(e){return e.map((function(e){return e.cases&&0!=e.cases.length&&(e.cases=e.cases.slice(0,e.score-2)),e}))},submitGrade:function(){var e=this,t=this.validateGrade();if(!t){var s=this.composeData();Object(c["Sb"])(s,this.$route.params.id).then((function(t){e.$notify({title:o["ce"],message:o["B"],type:"success"}),e.$router.replace(l["M"])}))}},saveDraft:function(){var e=this;Object(c["Qb"])(this.$route.params.id,d({},this.composeData(),{type:1})).then((function(t){e.$notify({title:o["ce"],message:o["W"],type:"success"})}))}},computed:{contentForCurScore:function(){var e=this;return((this.questions[this.selectGradeItem].topics||[]).filter((function(t){return t.score==e.questions[e.selectGradeItem].score}))[0]||{}).content},casePlaceholders:function(){var e=["要求为近半年的案例，需体现有主动意识，个人行为产生的正面影响，需列举1个案例；","要求为近半年的案例，需体现有影响力，有进取心并不断突破，行为由己到人，能够带动和影响他人，需列举1个案例；","要求为近半年的案例，需体现对组织有贡献，有高度也有落地的方法，能够系统的解决问题并产生深远的影响，需列举1个案例；"],t=["要求为近半年的案例，要求有影响力，要体现对团队，组织的影响力，需列举1个案例","要求为近半年的案例，要求建立机制，要体现通过建立机制从根本上解决问题，需列举1个案例；","要求为近半年的案例，要求要有战功，要体现给业务或工作带来的突破性贡献和价值，需列举1个案例；"];return this.isManager?t:e}},created:function(){this.getGradeInfo()}},m=f,h=(s("4205"),s("6691")),p=Object(h["a"])(m,r,n,!1,null,"b7322356",null);t["default"]=p.exports},"15c2":function(e,t,s){"use strict";var r=s("db4b"),n=s("5fe5"),a=s("b146");e.exports=function(e){var t=r(this),s=a(t.length),c=arguments.length,o=n(c>1?arguments[1]:void 0,s),i=c>2?arguments[2]:void 0,l=void 0===i?s:n(i,s);while(l>o)t[o++]=e;return t}},"1c74":function(e,t,s){var r=s("b2f5");r(r.P,"Array",{fill:s("15c2")}),s("644a")("fill")},"22e9":function(e,t,s){var r=s("88dd"),n=s("94ac"),a=s("8b37")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==n(e))}},4205:function(e,t,s){"use strict";var r=s("6878"),n=s.n(r);n.a},6878:function(e,t,s){},"91a1":function(e,t,s){var r=s("22e9"),n=s("f01a");e.exports=function(e,t,s){if(r(t))throw TypeError("String#"+s+" doesn't accept regex!");return String(n(e))}},"984f":function(e,t,s){var r=s("8b37")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[r]=!1,!"/./"[e](t)}catch(n){}}return!0}},df99:function(e,t,s){"use strict";var r=s("b2f5"),n=s("91a1"),a="includes";r(r.P+r.F*s("984f")(a),"String",{includes:function(e){return!!~n(this,e,a).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},f301:function(e,t,s){"use strict";var r=s("b2f5"),n=s("9f58")(!0);r(r.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),s("644a")("includes")}}]);