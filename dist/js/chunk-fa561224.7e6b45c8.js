(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa561224"],{9425:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"member-grade-details"},[s("nav-bar",{attrs:{list:e.nav}}),s("br"),s("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[s("basic-info",{attrs:{data:e.basicInfo}}),s("br"),s("hr"),s("br"),s("rule-text",{attrs:{text:e.constants.MY_MEMBER_RULE}}),s("br"),s("br"),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.advantage,callback:function(t){e.advantage=t},expression:"advantage"}}),s("br"),s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.promotion,callback:function(t){e.promotion=t},expression:"promotion"}}),s("br"),s("section",{staticClass:"mark"},[s("el-row",{attrs:{align:"middle",type:"flex"}},[s("el-col",{staticStyle:{padding:"20px","border-right":"1px solid #979797"}},[s("div",{staticClass:"mark-label"},[e._v("\n            "+e._s(e.constants.SELF_SCORE)+"\n          ")]),s("grade-items",{attrs:{items:e.scores},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}})],1),s("el-col",{staticStyle:{"padding-left":"50px"}},e._l(e.reasons,function(t,a){return s("div",{key:a,staticClass:"mark-reason"},[s("div",[e._v("\n              "+e._s(a+3)+"分理由:\n            ")]),s("div",[e._v("\n              "+e._s(t)+"\n            ")])])}))],1)],1),s("br"),e._l(e.rejectReason,function(e,t){return s("div",{key:t},[s("reject-reason",{attrs:{data:e.reason}}),s("br")],1)}),s("div",{staticClass:"mark-flag-container"},[s("div",{staticClass:"mark-section"},[s("div",{staticClass:"mark-label"},[e._v("\n          为"+e._s(e.employee_name)+"的成就客户项目评分\n        ")]),s("br"),s("grade-slider",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_score,callback:function(t){e.$set(e.scores[e.selectGradeItem],"superior_score",t)},expression:"scores[selectGradeItem].superior_score"}})],1),s("div",{staticStyle:{width:"20px"}}),s("div",{staticClass:"flag-section"},[s("div",{staticClass:"mark-label"},[e._v("\n          为"+e._s(e.employee_name)+"设计等级标签\n        ")]),s("br"),s("level-selector",{attrs:{disabled:e.readOnly},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}})],1)]),s("br"),e.scores[e.selectGradeItem].superior_score!=e.scores[e.selectGradeItem].score?s("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_case,callback:function(t){e.$set(e.scores[e.selectGradeItem],"superior_case",t)},expression:"scores[selectGradeItem].superior_case"}}):e._e(),s("br"),e.readOnly?e._e():s("el-row",{attrs:{type:"flex",justify:"end"}},[e.submited?e._e():s("el-button",{attrs:{type:"primary"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]),s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.constants.SUBMIT))])],1)],2)],1)},n=[],r=s("38fb"),o=s("c9f1"),c=s("fea5"),i={data:function(){return{employee_name:"",rejectReason:"",basicInfo:{},nav:[{label:r["Fc"],href:o["F"]},{label:r["Pc"],href:Object(o["E"])(this.$route.params.id)},{label:"下级详情",active:!0}],level:"",advantage:"",promotion:"",selectGradeItem:0,submited:!1,readOnly:!1,scores:[{cases:[]}],constants:{MY_MEMBER_RULE:r["Qc"],SELF_SCORE:r["Dd"],SAVE_DRAFT:r["yd"],SUBMIT:r["Jd"]}}},components:{"nav-bar":function(){return s.e("chunk-5a85c387").then(s.bind(null,"3208"))},"basic-info":function(){return s.e("chunk-8e8d666a").then(s.bind(null,"eb39"))},"rule-text":function(){return s.e("chunk-f91b1ecc").then(s.bind(null,"6c37"))},"case-area":function(){return s.e("chunk-463f71be").then(s.bind(null,"b5ec"))},"grade-items":function(){return s.e("chunk-66fcb243").then(s.bind(null,"da3f"))},"grade-slider":function(){return s.e("chunk-13bc931f").then(s.bind(null,"aa29"))},"level-selector":function(){return s.e("chunk-e951dbf0").then(s.bind(null,"7f4e"))},"reject-reason":function(){return s.e("chunk-aefb10aa").then(s.bind(null,"f269"))}},methods:{getMemberDetail:function(){var e=this;Object(c["D"])(this.$route.params.uid).then(function(t){var s=t.advantage,a=t.promotion,n=t.scores,o=t.employee_name,c=t.employee_workcode,i=t.end_time,l=t._271_level,u=t.status,d=t.reject_record;e.rejectReason=d,e.advantage=s,e.promotion=a,e.employee_name=o,e.readOnly=0==t.can_submit,e._271_is_necessary=!!t._271_is_necessary,e.basicInfo={name:o,workcode:c,finishedTime:"上级评截止时间: ".concat(i)},e.level=r["Dc"][l].toLowerCase();var m=20==u;e.submited=m;var f="culture_member_draft_".concat(e.$route.params.uid),b=window.localStorage.getItem(f);if(m||!b)e.scores=n.map(function(e){return e.score=e.self_score,delete e.self_score,e});else{var p=JSON.parse(b);e.initFromLocal(p)}})},initFromLocal:function(e){this.scores=e.scores,this.level=e.level,this.advantage=e.advantage,this.promotion=e.promotion},composePostData:function(){var e={};return this.scores.forEach(function(t){e[t.question_id]={score:t.superior_score,cases:[t.superior_case]}}),e.promotion=this.promotion,e.advantage=this.advantage,e._271_level=r["Cc"][this.level],e},validateData:function(){if(this.advantage&&this.promotion){if(this.level||!this._271_is_necessary)return this.checkReason();this.$message({message:"请选择等级!",type:"warning"})}else this.$message({message:"请填写优点和待提升部分",type:"warning"})},checkReason:function(){return!this.scores.some(function(e){return e.score!=e.superior_score&&!e.superior_case})},saveDraft:function(){var e="culture_member_draft_".concat(this.$route.params.uid);window.localStorage.setItem(e,JSON.stringify({scores:this.scores,level:this.level,advantage:this.advantage,promotion:this.promotion})),this.$message({message:r["P"],type:"success"})},submit:function(){var e=this,t=this.validateData();t?this.$confirm("是否确定提交, 是否继续?","提示",{confirmButtonText:r["t"],cancelButtonText:r["q"],type:"warning"}).then(function(){Object(c["gb"])(e.$route.params.uid,e.composePostData()).then(function(t){e.$message({message:r["u"],type:"success"}),e.getMemberDetail()}).catch(function(e){})}).catch(function(){}):this.$message({message:"请填写完整理由!",type:"warning"})}},created:function(){this.getMemberDetail()},computed:{reasons:function(){return this.scores[this.selectGradeItem].self_cases}}},l=i,u=(s("a7e2"),s("2877")),d=Object(u["a"])(l,a,n,!1,null,"69ebdf2b",null);d.options.__file="index.vue";t["default"]=d.exports},a7e2:function(e,t,s){"use strict";var a=s("e032"),n=s.n(a);n.a},e032:function(e,t,s){}}]);