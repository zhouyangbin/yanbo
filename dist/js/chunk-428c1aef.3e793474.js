(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-428c1aef"],{"214f":function(e,t,s){"use strict";var a=s("32e9"),n=s("2aba"),r=s("79e5"),i=s("be13"),c=s("2b4c");e.exports=function(e,t,s){var o=c(e),l=s(i,o,""[e]),u=l[0],d=l[1];r(function(){var t={};return t[o]=function(){return 7},7!=""[e](t)})&&(n(String.prototype,e,u),a(RegExp.prototype,o,2==t?function(e,t){return d.call(e,this,t)}:function(e){return d.call(e,this)}))}},"616f":function(e,t,s){"use strict";var a=s("daa2"),n=s.n(a);n.a},9425:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"member-grade-details"},[s("nav-bar",{attrs:{list:e.nav}}),s("br"),s("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[s("basic-info",{attrs:{data:e.basicInfo}}),s("br"),s("hr"),s("br"),s("el-row",{attrs:{type:"flex",justify:"space-between"}},[s("rule-text",{attrs:{text:e.constants.MY_MEMBER_RULE}}),e.has_history?s("el-button",{staticStyle:{"align-self":"flex-start"},attrs:{type:"primary"},on:{click:e.goHistory}},[e._v(e._s(e.constants.CHANGE_RECORDS))]):e._e()],1),s("br"),e.feedback_feeling?s("div",{staticClass:"feeback-container"},[s("div",[s("span",{staticClass:"label"},[e._v(e._s(e.constants.IMPRESSIONS)+":")]),s("span",{staticClass:"content"},[e._v(e._s(e.feedback_feeling.content))]),s("span",{staticClass:"time"},[e._v(e._s(e.feedback_feeling.time))])]),s("br")]):e._e(),s("div",[s("h3",[e._v(e._s(e.constants.ADVANTAGE)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.advantage,callback:function(t){e.advantage=t},expression:"advantage"}})],1),s("br"),s("div",[s("h3",[e._v(e._s(e.constants.PROMOTION)+":")]),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.promotion,callback:function(t){e.promotion=t},expression:"promotion"}})],1),s("br"),s("section",{staticClass:"mark"},[s("el-row",{attrs:{align:"middle",type:"flex"}},[s("el-col",{staticStyle:{padding:"0.3rem","border-right":"1px solid #979797"}},[s("div",{staticClass:"mark-label"},[e._v(e._s(e.constants.SELF_SCORE))]),s("grade-items",{attrs:{items:e.scores},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}})],1),s("el-col",{staticStyle:{"padding-left":"0.75rem"}},e._l(e.reasons,function(t,a){return s("div",{key:a,staticClass:"mark-reason"},[s("div",[e._v(e._s(a+3)+"分理由:")]),s("div",[e._v(e._s(t))])])}))],1)],1),s("br"),e._l(e.rejectReason,function(e,t){return s("div",{key:t},[s("reject-reason",{attrs:{data:e.reason}}),s("br")],1)}),s("div",{staticClass:"mark-flag-container"},[s("div",{staticClass:"mark-section"},[s("div",{staticClass:"mark-label"},[e._v("为"+e._s(e.employee_name)+"的"+e._s(e.scores[e.selectGradeItem].question_name)+"项目评分")]),s("br"),s("grade-slider",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_score,callback:function(t){e.$set(e.scores[e.selectGradeItem],"superior_score",t)},expression:"scores[selectGradeItem].superior_score"}})],1),s("div",{staticStyle:{width:"0.3rem"}}),s("div",{staticClass:"flag-section"},[s("div",{staticClass:"mark-label"},[e._v("为"+e._s(e.employee_name)+"设置等级标签")]),s("br"),s("level-selector",{attrs:{disabled:e.readOnly,pre:e.hasRejectReasons?e.preLv:""},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}})],1)]),s("br"),e.scores[e.selectGradeItem].superior_score!=e.scores[e.selectGradeItem].score?s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_case,callback:function(t){e.$set(e.scores[e.selectGradeItem],"superior_case",t)},expression:"scores[selectGradeItem].superior_case"}}):e._e(),s("br"),e._l(e.appealReason,function(e,t){return s("div",{key:""+t+e.time},[s("appeal-reaosn",{attrs:{data:e}})],1)}),s("br"),s("br"),e.readOnly?e._e():s("el-row",{attrs:{type:"flex",justify:"end"}},[e.submited||e.hasRejectReasons?e._e():s("el-button",{attrs:{type:"primary"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]),s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.constants.SUBMIT))])],1)],2)],1)},n=[],r=(s("a481"),s("c93e")),i=(s("ac6a"),s("cadf"),s("551c"),s("097d"),s("38fb")),c=s("c9f1"),o=s("fea5"),l={data:function(){return{employee_name:"",rejectReason:"",appealReason:[],basicInfo:{},nav:[{label:i["Mc"],href:c["K"]},{label:i["Xc"],href:Object(c["J"])(this.$route.params.id)},{label:"下级详情",active:!0}],level:"",preLv:"",advantage:"",promotion:"",selectGradeItem:0,submited:!1,readOnly:!1,scores:[{cases:[]}],constants:{MY_MEMBER_RULE:i["Yc"],SELF_SCORE:i["Od"],SAVE_DRAFT:i["Jd"],SUBMIT:i["Ud"],ADVANTAGE:i["e"],PROMOTION:i["yd"],IMPRESSIONS:i["Sb"],CHANGE_RECORDS:i["x"]},feedback_feeling:null,has_history:!1}},components:{"nav-bar":function(){return s.e("chunk-55b2b05e").then(s.bind(null,"3208"))},"basic-info":function(){return s.e("chunk-e842d39e").then(s.bind(null,"eb39"))},"rule-text":function(){return s.e("chunk-4ddead72").then(s.bind(null,"6c37"))},"case-area":function(){return s.e("chunk-314b5405").then(s.bind(null,"b5ec"))},"grade-items":function(){return s.e("chunk-011f0809").then(s.bind(null,"da3f"))},"grade-slider":function(){return s.e("chunk-6a62dc0d").then(s.bind(null,"aa29"))},"level-selector":function(){return s.e("chunk-269c96fe").then(s.bind(null,"7f4e"))},"reject-reason":function(){return s.e("chunk-2e11b360").then(s.bind(null,"f269"))},"appeal-reaosn":function(){return s.e("chunk-289a21f4").then(s.bind(null,"f7ec"))}},methods:{getMemberDetail:function(){var e=this;Object(o["H"])(this.$route.params.uid).then(function(t){var s=t.status,a=s>=20;e.submited=a,a?e.handleResponse(t):Object(o["I"])(e.$route.params.uid).then(function(t){e.handleResponse(t)})})},handleResponse:function(e){var t,s=e.advantage,a=e.promotion,n=e.scores,r=e.employee_name,c=e.employee_workcode,o=e.end_time,l=e._271_level,u=(e.status,e.reject_record),d=e.appeal_record,f=e.break_status,p=e.superior_start_time,m=e.feedback_feeling,_=e.has_history;this.has_history=1==_,this.feedback_feeling=m,this.rejectReason=u,this.advantage=s,this.promotion=a,this.employee_name=r,this.readOnly=0==e.can_submit,this.appealReason=d||[],this._271_is_necessary=!!e._271_is_necessary,t=0==f?new Date<=new Date(p)?"未开始":"":i["q"][f],this.basicInfo={name:r,workcode:c,breakStatus:t,finishedTime:"上级评截止时间: ".concat(o)},this.preLv=this.level=i["Kc"][l].toLowerCase(),this.scores=n.map(function(e){return e.score=e.self_score,delete e.self_score,e})},composePostData:function(){var e={};return this.scores.forEach(function(t){e[t.question_id]={score:t.superior_score,cases:[t.superior_case].filter(function(e){return!!e})}}),e.promotion=this.promotion,e.advantage=this.advantage,e._271_level=i["Jc"][this.level]||"",e},goHistory:function(){this.$router.push(Object(c["I"])(this.$route.params.id,this.$route.params.uid))},validateData:function(){if(this.advantage&&this.promotion){if(this.level||!this._271_is_necessary)return this.checkReason();this.$message({message:"请选择等级!",type:"warning"})}else this.$message({message:"请填写优点和待提升部分",type:"warning"})},checkReason:function(){var e=this;return!this.scores.some(function(t){var s=t.score!=t.superior_score&&!t.superior_case;return s&&e.$message.error("".concat(t.question_name,"评分理由未填写，请填写后提交!")),s})},saveDraft:function(){var e=this;Object(o["Kb"])(this.$route.params.uid,Object(r["a"])({},this.composePostData(),{type:2})).then(function(t){e.$message({message:i["V"],type:"success"})})},submit:function(){var e=this,t=this.validateData();t&&this.$confirm("是否确定提交, 是否继续?","提示",{confirmButtonText:i["z"],cancelButtonText:i["u"],type:"warning"}).then(function(){Object(o["nb"])(e.$route.params.uid,e.composePostData()).then(function(t){e.$message({message:i["A"],type:"success"}),e.$router.replace(Object(c["J"])(e.$route.params.id))}).catch(function(e){})}).catch(function(){})}},created:function(){this.getMemberDetail()},computed:{reasons:function(){return this.scores[this.selectGradeItem].self_cases},hasRejectReasons:function(){return this.rejectReason.length>0}}},u=l,d=(s("616f"),s("2877")),f=Object(d["a"])(u,a,n,!1,null,"7f187602",null);f.options.__file="index.vue";t["default"]=f.exports},a481:function(e,t,s){s("214f")("replace",2,function(e,t,s){return[function(a,n){"use strict";var r=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,r,n):s.call(String(r),a,n)},s]})},daa2:function(e,t,s){}}]);