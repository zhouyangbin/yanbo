(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abb34230"],{2908:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"culture-hr-details-modify-page"},[t("nav-bar",{attrs:{list:e.nav}}),t("br"),t("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[t("basic-info",{attrs:{data:e.basicInfo}}),t("br"),t("hr"),t("br"),t("rule-text",{attrs:{text:e.constants.MY_MEMBER_RULE}}),t("br"),t("br"),t("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.advantage,callback:function(s){e.advantage=s},expression:"advantage"}}),t("br"),t("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.promotion,callback:function(s){e.promotion=s},expression:"promotion"}}),t("br"),t("section",{staticClass:"mark"},[t("el-row",{attrs:{align:"middle",type:"flex"}},[t("el-col",{staticStyle:{padding:"20px","border-right":"1px solid #979797"}},[t("div",{staticClass:"mark-label"},[e._v("\n            自评分数\n          ")]),t("grade-items",{attrs:{items:e.scores},model:{value:e.selectGradeItem,callback:function(s){e.selectGradeItem=s},expression:"selectGradeItem"}})],1),t("el-col",{staticStyle:{"padding-left":"50px"}},e._l(e.reasons,function(s,a){return t("div",{key:a,staticClass:"mark-reason"},[t("div",[e._v("\n              "+e._s(a+3)+"分理由:\n            ")]),t("div",[e._v("\n              "+e._s(s)+"\n            ")])])}))],1)],1),t("br"),t("div",{staticClass:"mark-flag-container"},[t("div",{staticClass:"mark-section"},[t("div",{staticClass:"mark-label"},[e._v("\n          为"+e._s(e.employee_name)+"的成就客户项目评分\n        ")]),t("br"),t("grade-slider",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_score,callback:function(s){e.$set(e.scores[e.selectGradeItem],"superior_score",s)},expression:"scores[selectGradeItem].superior_score"}})],1),t("div",{staticStyle:{width:"20px"}}),t("div",{staticClass:"flag-section"},[t("div",{staticClass:"mark-label"},[e._v("\n          为"+e._s(e.employee_name)+"设置等级标签\n        ")]),t("br"),t("level-selector",{attrs:{pre:e.preLv,disabled:e.readOnly},model:{value:e.level,callback:function(s){e.level=s},expression:"level"}})],1)]),t("br"),e.scores[e.selectGradeItem].superior_cases?t("div",[t("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_cases,callback:function(s){e.$set(e.scores[e.selectGradeItem],"superior_cases",s)},expression:"scores[selectGradeItem].superior_cases"}}),t("br")],1):e._e(),e.forReject?e._e():t("div",[t("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写修改理由"},model:{value:e.reason,callback:function(s){e.reason=s},expression:"reason"}}),t("br")],1),e.readOnly?e._e():t("el-row",{attrs:{type:"flex",justify:"end"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},r=[],n=t("c9f1"),o=t("38fb"),c=t("fea5"),i={data:function(){return{basicInfo:{name:"",workcode:""},employee_name:"",readOnly:!1,advantage:"",promotion:"",selectGradeItem:0,level:"",preLv:"",reason:"",forReject:!0,lv_necessary:!0,scores:[{cases:[]}],nav:[{label:o["Ab"],href:n["x"]},{label:o["Cb"],href:Object(n["z"])(this.$route.params.id)},{label:o["dd"],href:Object(n["y"])(this.$route.params.id,this.$route.params.orgID)},{label:o["yb"],href:Object(n["u"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid)},{label:"评分修改",active:!0}],constants:{MY_MEMBER_RULE:o["Sc"]}}},components:{"nav-bar":function(){return t.e("chunk-5a85c387").then(t.bind(null,"3208"))},"basic-info":function(){return t.e("chunk-8e8d666a").then(t.bind(null,"eb39"))},"rule-text":function(){return t.e("chunk-f91b1ecc").then(t.bind(null,"6c37"))},"grade-items":function(){return t.e("chunk-66fcb243").then(t.bind(null,"da3f"))},"grade-slider":function(){return t.e("chunk-13bc931f").then(t.bind(null,"aa29"))},"level-selector":function(){return t.e("chunk-e951dbf0").then(t.bind(null,"7f4e"))},"case-area":function(){return t.e("chunk-463f71be").then(t.bind(null,"b5ec"))}},computed:{reasons:function(){return this.scores[this.selectGradeItem].self_cases}},methods:{getMemberDetail:function(){var e=this;Object(c["V"])(this.$route.params.uid).then(function(s){var t=s.advantage,a=s.promotion,r=s.scores,n=s.employee_name,c=s.employee_workcode,i=(s.end_time,s._271_level),l=(s.status,s._271_is_necessary);e.advantage=t,e.promotion=a,e.employee_name=n,e.basicInfo={name:n,workcode:c},e.lv_necessary=1==l,e.preLv=e.level=o["Fc"][i].toLowerCase(),e.scores=r.map(function(e){return e.score=e.self_score,delete e.self_score,e})})},submit:function(){var e=this,s=this.validate();if(s){var t=this.composePostData();this.forReject?Object(c["yb"])(this.$route.params.uid,t).then(function(s){e.$message({message:"修改成功",type:"success"}),e.$router.go(-1)}).catch(function(e){}):(t.reason=this.reason,Object(c["fb"])(this.$route.params.uid,t).then(function(s){e.$message({message:"修改成功",type:"success"}),e.$router.go(-1)}).catch(function(e){}))}else this.$message({message:"请填写完整理由!",type:"warning"})},validate:function(){if(this.advantage&&this.promotion)if(this.level||!this.lv_necessary){if(this.forReject||this.reason)return this.checkReason();this.$message({message:"请填写修改理由!",type:"warning"})}else this.$message({message:"请选择等级!",type:"warning"});else this.$message({message:"请填写优点和待提升部分",type:"warning"})},checkReason:function(){return!this.scores.some(function(e){return e.score!=e.superior_score&&!e.superior_case})},composePostData:function(){var e={};return this.scores.forEach(function(s){e[s.question_id]={score:s.superior_score,cases:[s.superior_case]}}),e.promotion=this.promotion,e.advantage=this.advantage,e._271_level=o["Ec"][this.level],e}},created:function(){this.getMemberDetail(),this.forReject=1==this.$route.query.complain}},l=i,u=(t("c1dd"),t("2877")),d=Object(u["a"])(l,a,r,!1,null,"6cb9912e",null);d.options.__file="index.vue";s["default"]=d.exports},"88ec":function(e,s,t){},c1dd:function(e,s,t){"use strict";var a=t("88ec"),r=t.n(a);r.a}}]);