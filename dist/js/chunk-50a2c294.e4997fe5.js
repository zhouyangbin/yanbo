(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50a2c294"],{1311:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"self-grade-component"},[t("section",{staticClass:"mark"},[t("el-row",{attrs:{align:"middle",type:"flex"}},[t("el-col",{staticStyle:{padding:"0.3rem","border-right":"1px solid #979797"}},[t("div",{staticClass:"mark-label"},[e._v("请选择评分项目")]),t("grade-items",{attrs:{items:e.questions},model:{value:e.selectGradeItem,callback:function(s){e.selectGradeItem=s},expression:"selectGradeItem"}}),t("br"),t("br"),t("div",{staticClass:"mark-label"},[e._v("请评分")]),t("br"),t("grade-slider",{attrs:{min:1,readOnly:e.readOnly,step:1,max:5},model:{value:e.questions[e.selectGradeItem].score,callback:function(s){e.$set(e.questions[e.selectGradeItem],"score",s)},expression:"questions[selectGradeItem].score"}})],1),t("el-col",{staticStyle:{"padding-left":"0.75rem"}},[t("div",{staticClass:"mark-score"},[e._v(e._s(e.questions[e.selectGradeItem].score)+"分")]),t("div",{staticClass:"mark-desc"},[e._v(e._s(e.contentForCurScore))])])],1)],1),t("br"),t("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=3,expression:"questions[selectGradeItem].score>=3"}]},[t("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写我的3分案例"},model:{value:e.questions[e.selectGradeItem].cases[0],callback:function(s){e.$set(e.questions[e.selectGradeItem].cases,0,s)},expression:"questions[selectGradeItem].cases[0]"}}),t("br"),t("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=4,expression:"questions[selectGradeItem].score>=4"}]},[t("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写我的4分案例"},model:{value:e.questions[e.selectGradeItem].cases[1],callback:function(s){e.$set(e.questions[e.selectGradeItem].cases,1,s)},expression:"questions[selectGradeItem].cases[1]"}}),t("br"),t("div",{directives:[{name:"show",rawName:"v-show",value:e.questions[e.selectGradeItem].score>=5,expression:"questions[selectGradeItem].score>=5"}]},[t("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写我的5分案例"},model:{value:e.questions[e.selectGradeItem].cases[2],callback:function(s){e.$set(e.questions[e.selectGradeItem].cases,2,s)},expression:"questions[selectGradeItem].cases[2]"}}),t("br")],1)],1)],1),t("el-row",{directives:[{name:"show",rawName:"v-show",value:!e.readOnly,expression:"!readOnly"}],attrs:{type:"flex",justify:"end"}},[e.neverSubmit?t("el-button",{attrs:{type:"primary"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]):e._e(),t("el-button",{attrs:{type:"primary"},on:{click:e.submitGrade}},[e._v(e._s(e.constants.SUBMIT))])],1)],1)},a=[],n=(t("ac6a"),t("6762"),t("2fdb"),t("c93e")),c=(t("6c7b"),t("fea5")),o=t("38fb"),l={data:function(){return{selectGradeItem:0,neverSubmit:!0,questions:[{cases:["","",""]},{cases:["","",""]},{cases:["","",""]},{cases:["","",""]}],readOnly:!1,constants:{SUBMIT:o["Ud"],SAVE_DRAFT:o["Jd"]}}},components:{"grade-items":function(){return t.e("chunk-588be260").then(t.bind(null,"da3f"))},"grade-slider":function(){return t.e("chunk-6a62dc0d").then(t.bind(null,"aa29"))},"case-area":function(){return t.e("chunk-314b5405").then(t.bind(null,"b5ec"))}},methods:{getGradeInfo:function(){var e=this,s=this.$route.params.id;Object(c["F"])(s).then(function(t){var r=1==t.is_new_record;e.neverSubmit=r,r?Object(c["G"])(s).then(function(s){e.preProcessQuestions(s.questions)}):e.preProcessQuestions(t.questions);var a=t.employee_name,n=t.employee_workcode,i=t.highlevel_name,o=t.highlevel_workcode,l=t.self_end_time,u=t.superior_name,d=t.superior_workcode;e.$parent.basicInfo={name:a,workcode:n,leaderLabel:"我的上级",superior_name:u,highlevel_name:i,superior_workcode:d,hightlevelLabel:"隔级上级",highlevel_workcode:o,finishedTime:"自评截止时间: ".concat(l)},e.readOnly=0==t.can_edit,e.$forceUpdate()})},preProcessQuestions:function(e){var s=this;e.map(function(e,t){if(!e.cases)return e.cases=new Array(3).fill(""),void s.$set(s.questions,t,Object(n["a"])({},e));if(3!=e.cases.length)for(var r=0;r<=3-e.cases.length;r++)e.cases[e.cases.length+r]="";s.$set(s.questions,t,Object(n["a"])({},e))})},scoreCheck:function(e,s){if(e.score==s){var t=this.caseValidate(i,s);if(-1!=t)return this.$message.error("".concat(i.question_name).concat(t+3,"分理由未填写，请填写后提交!")),!0}return!1},validateGrade:function(){var e=this;return this.questions.some(function(s){return s.score?!(![3,4,5].includes(parseInt(s.score))||!e.scoreCheck(s)):(e.$message.error("".concat(s.question_name,"评分未选择!")),!0)})},caseValidate:function(e,s){for(var t=s-3,r=0;r<=t;r++)if(void 0==e.cases[r]||0==e.cases[r].length)return r;return-1},composeData:function(){var e={};return this.filterCases(this.questions).forEach(function(s){e[s.question_id]={score:s.score,cases:s.cases}}),e},filterCases:function(e){return e.map(function(e){return e.cases&&0!=e.cases.length&&(e.cases=e.cases.slice(0,e.score-2)),e})},submitGrade:function(){var e=this,s=this.validateGrade();if(!s){var t=this.composeData();Object(c["Mb"])(t,this.$route.params.id).then(function(s){e.$notify({title:o["Vd"],message:o["A"],type:"success"}),e.getGradeInfo()})}},saveDraft:function(){var e=this;Object(c["Kb"])(this.$route.params.id,this.composeData()).then(function(s){e.$notify({title:o["Vd"],message:o["V"],type:"success"})})}},computed:{contentForCurScore:function(){var e=this;return((this.questions[this.selectGradeItem].topics||[]).filter(function(s){return s.score==e.questions[e.selectGradeItem].score})[0]||{}).content}},created:function(){this.getGradeInfo()}},u=l,d=(t("3dfe"),t("2877")),f=Object(d["a"])(u,r,a,!1,null,"8543bd80",null);f.options.__file="index.vue";s["default"]=f.exports},"2fdb":function(e,s,t){"use strict";var r=t("5ca1"),a=t("d2c8"),n="includes";r(r.P+r.F*t("5147")(n),"String",{includes:function(e){return!!~a(this,e,n).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"36bd":function(e,s,t){"use strict";var r=t("4bf8"),a=t("77f1"),n=t("9def");e.exports=function(e){var s=r(this),t=n(s.length),c=arguments.length,i=a(c>1?arguments[1]:void 0,t),o=c>2?arguments[2]:void 0,l=void 0===o?t:a(o,t);while(l>i)s[i++]=e;return s}},"3dfe":function(e,s,t){"use strict";var r=t("ed1f"),a=t.n(r);a.a},5147:function(e,s,t){var r=t("2b4c")("match");e.exports=function(e){var s=/./;try{"/./"[e](s)}catch(t){try{return s[r]=!1,!"/./"[e](s)}catch(e){}}return!0}},6762:function(e,s,t){"use strict";var r=t("5ca1"),a=t("c366")(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")("includes")},"6c7b":function(e,s,t){var r=t("5ca1");r(r.P,"Array",{fill:t("36bd")}),t("9c6c")("fill")},aae3:function(e,s,t){var r=t("d3f4"),a=t("2d95"),n=t("2b4c")("match");e.exports=function(e){var s;return r(e)&&(void 0!==(s=e[n])?!!s:"RegExp"==a(e))}},d2c8:function(e,s,t){var r=t("aae3"),a=t("be13");e.exports=function(e,s,t){if(r(s))throw TypeError("String#"+t+" doesn't accept regex!");return String(a(e))}},ed1f:function(e,s,t){}}]);