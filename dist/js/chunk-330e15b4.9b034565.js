(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-330e15b4"],{9425:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"member-grade-details"},[a("nav-bar",{attrs:{list:e.nav}}),a("br"),a("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[a("basic-info",{attrs:{data:e.basicInfo}}),a("br"),a("hr"),a("br"),a("rule-text",{attrs:{text:e.constants.MY_MEMBER_RULE}}),a("br"),a("br"),a("div",[a("h3",[e._v(e._s(e.constants.ADVANTAGE)+":")]),a("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.advantage,callback:function(t){e.advantage=t},expression:"advantage"}})],1),a("br"),a("div",[a("h3",[e._v(e._s(e.constants.PROMOTION)+":")]),a("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.promotion,callback:function(t){e.promotion=t},expression:"promotion"}})],1),a("br"),a("section",{staticClass:"mark"},[a("el-row",{attrs:{align:"middle",type:"flex"}},[a("el-col",{staticStyle:{padding:"20px","border-right":"1px solid #979797"}},[a("div",{staticClass:"mark-label"},[e._v("\n            "+e._s(e.constants.SELF_SCORE)+"\n          ")]),a("grade-items",{attrs:{items:e.scores},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}})],1),a("el-col",{staticStyle:{"padding-left":"50px"}},e._l(e.reasons,function(t,s){return a("div",{key:s,staticClass:"mark-reason"},[a("div",[e._v("\n              "+e._s(s+3)+"分理由:\n            ")]),a("div",[e._v("\n              "+e._s(t)+"\n            ")])])}))],1)],1),a("br"),e._l(e.rejectReason,function(e,t){return a("div",{key:t},[a("reject-reason",{attrs:{data:e.reason}}),a("br")],1)}),a("div",{staticClass:"mark-flag-container"},[a("div",{staticClass:"mark-section"},[a("div",{staticClass:"mark-label"},[e._v("\n          为"+e._s(e.employee_name)+"的成就客户项目评分\n        ")]),a("br"),a("grade-slider",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_score,callback:function(t){e.$set(e.scores[e.selectGradeItem],"superior_score",t)},expression:"scores[selectGradeItem].superior_score"}})],1),a("div",{staticStyle:{width:"20px"}}),a("div",{staticClass:"flag-section"},[a("div",{staticClass:"mark-label"},[e._v("\n          为"+e._s(e.employee_name)+"设置等级标签\n        ")]),a("br"),a("level-selector",{attrs:{disabled:e.readOnly,pre:e.hasRejectReasons?e.preLv:""},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}})],1)]),a("br"),e.scores[e.selectGradeItem].superior_score!=e.scores[e.selectGradeItem].score?a("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_case,callback:function(t){e.$set(e.scores[e.selectGradeItem],"superior_case",t)},expression:"scores[selectGradeItem].superior_case"}}):e._e(),a("br"),e._l(e.appealReason,function(e,t){return a("div",{key:""+t+e.time},[a("appeal-reaosn",{attrs:{data:e}})],1)}),a("br"),a("br"),e.readOnly?e._e():a("el-row",{attrs:{type:"flex",justify:"end"}},[e.submited||e.hasRejectReasons?e._e():a("el-button",{attrs:{type:"primary"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.constants.SUBMIT))])],1)],2)],1)},n=[],r=(a("ac6a"),a("cadf"),a("551c"),a("097d"),a("38fb")),c=a("c9f1"),o=a("fea5"),i={data:function(){return{employee_name:"",rejectReason:"",appealReason:[],basicInfo:{},nav:[{label:r["Jc"],href:c["F"]},{label:r["Uc"],href:Object(c["E"])(this.$route.params.id)},{label:"下级详情",active:!0}],level:"",preLv:"",advantage:"",promotion:"",selectGradeItem:0,submited:!1,readOnly:!1,scores:[{cases:[]}],constants:{MY_MEMBER_RULE:r["Vc"],SELF_SCORE:r["Kd"],SAVE_DRAFT:r["Fd"],SUBMIT:r["Qd"],ADVANTAGE:r["d"],PROMOTION:r["ud"]}}},components:{"nav-bar":function(){return a.e("chunk-5a85c387").then(a.bind(null,"3208"))},"basic-info":function(){return a.e("chunk-09165fb0").then(a.bind(null,"eb39"))},"rule-text":function(){return a.e("chunk-f91b1ecc").then(a.bind(null,"6c37"))},"case-area":function(){return a.e("chunk-463f71be").then(a.bind(null,"b5ec"))},"grade-items":function(){return a.e("chunk-10dfbf8c").then(a.bind(null,"da3f"))},"grade-slider":function(){return a.e("chunk-617cc2fc").then(a.bind(null,"aa29"))},"level-selector":function(){return a.e("chunk-04bd9d4f").then(a.bind(null,"7f4e"))},"reject-reason":function(){return a.e("chunk-4cbe6273").then(a.bind(null,"f269"))},"appeal-reaosn":function(){return a.e("chunk-6c870a38").then(a.bind(null,"f7ec"))}},methods:{getMemberDetail:function(){var e=this;Object(o["D"])(this.$route.params.uid).then(function(t){var a=t.advantage,s=t.promotion,n=t.scores,c=t.employee_name,o=t.employee_workcode,i=t.end_time,l=t._271_level,u=t.status,d=t.reject_record,m=t.appeal_record,p=t.break_status;e.rejectReason=d,e.advantage=a,e.promotion=s,e.employee_name=c,e.readOnly=0==t.can_submit,e.appealReason=m||[],e._271_is_necessary=!!t._271_is_necessary,e.basicInfo={name:c,workcode:o,breakStatus:r["p"][p],finishedTime:"上级评截止时间: ".concat(i)},e.preLv=e.level=r["Hc"][l].toLowerCase();var f=u>=20;e.submited=f;var v="culture_member_draft_".concat(e.$route.params.uid),_=window.localStorage.getItem(v);if(f||!_)e.scores=n.map(function(e){return e.score=e.self_score,delete e.self_score,e});else{var b=JSON.parse(_);e.initFromLocal(b)}})},initFromLocal:function(e){this.scores=e.scores,this.level=e.level,this.advantage=e.advantage,this.promotion=e.promotion},composePostData:function(){var e={};return this.scores.forEach(function(t){e[t.question_id]={score:t.superior_score,cases:[t.superior_case]}}),e.promotion=this.promotion,e.advantage=this.advantage,e._271_level=r["Gc"][this.level],e},validateData:function(){if(this.advantage&&this.promotion){if(this.level||!this._271_is_necessary)return this.checkReason();this.$message({message:"请选择等级!",type:"warning"})}else this.$message({message:"请填写优点和待提升部分",type:"warning"})},checkReason:function(){var e=this;return!this.scores.some(function(t){var a=t.score!=t.superior_score&&!t.superior_case;return a&&e.$message.error("".concat(t.question_name,"评分理由未填写，请填写后提交!")),a})},saveDraft:function(){var e="culture_member_draft_".concat(this.$route.params.uid);window.localStorage.setItem(e,JSON.stringify({scores:this.scores,level:this.level,advantage:this.advantage,promotion:this.promotion})),this.$message({message:r["T"],type:"success"})},submit:function(){var e=this,t=this.validateData();t&&this.$confirm("是否确定提交, 是否继续?","提示",{confirmButtonText:r["x"],cancelButtonText:r["t"],type:"warning"}).then(function(){Object(o["gb"])(e.$route.params.uid,e.composePostData()).then(function(t){e.$message({message:r["y"],type:"success"}),e.getMemberDetail()}).catch(function(e){})}).catch(function(){})}},created:function(){this.getMemberDetail()},computed:{reasons:function(){return this.scores[this.selectGradeItem].self_cases},hasRejectReasons:function(){return this.rejectReason.length>0}}},l=i,u=(a("ed3c"),a("2877")),d=Object(u["a"])(l,s,n,!1,null,"1ae4d33a",null);d.options.__file="index.vue";t["default"]=d.exports},dfc1:function(e,t,a){},ed3c:function(e,t,a){"use strict";var s=a("dfc1"),n=a.n(s);n.a}}]);