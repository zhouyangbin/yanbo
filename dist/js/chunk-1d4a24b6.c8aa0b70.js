(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d4a24b6"],{2908:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"culture-hr-details-modify-page"},[t("nav-bar",{attrs:{list:e.nav}}),t("br"),t("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[t("basic-info",{attrs:{data:e.basicInfo}}),t("br"),t("hr"),t("br"),t("rule-text",{attrs:{text:e.constants.MY_MEMBER_RULE}}),t("br"),t("br"),t("div",[t("h3",[e._v(e._s(e.constants.ADVANTAGE)+":")]),t("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.advantage,callback:function(s){e.advantage=s},expression:"advantage"}})],1),t("br"),t("div",[t("h3",[e._v(e._s(e.constants.PROMOTION)+":")]),t("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.promotion,callback:function(s){e.promotion=s},expression:"promotion"}})],1),t("br"),t("section",{staticClass:"mark"},[t("el-row",{attrs:{align:"middle",type:"flex"}},[t("el-col",{staticStyle:{padding:"20px","border-right":"1px solid #979797"},attrs:{span:14}},[t("div",{staticClass:"mark-label"},[e._v("自评分数")]),t("grade-items",{attrs:{items:e.scores},model:{value:e.selectGradeItem,callback:function(s){e.selectGradeItem=s},expression:"selectGradeItem"}})],1),t("el-col",{staticStyle:{"padding-left":"50px"},attrs:{span:10}},[t("div",{staticClass:"mark-reason"},e._l(e.reasons,(function(s,a){return t("div",{key:a},[t("div",[e._v(e._s(a+3)+"分理由:")]),t("div",{staticClass:"reason",domProps:{innerHTML:e._f("placeholder")(e._f("linebreak")(s),"无")}})])})),0)])],1)],1),t("br"),t("div",{staticClass:"mark-flag-container"},[t("div",{staticClass:"mark-section"},[t("div",{staticClass:"mark-label"},[e._v("\n          为"+e._s(e.employee_name)+"的"+e._s(e.scores[e.selectGradeItem].question_name)+"项目评分\n        ")]),t("br"),t("grade-slider",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_score,callback:function(s){e.$set(e.scores[e.selectGradeItem],"superior_score",s)},expression:"scores[selectGradeItem].superior_score"}})],1),t("div",{staticStyle:{width:"20px"}}),t("div",{staticClass:"flag-section"},[t("div",{staticClass:"mark-label"},[e._v("为"+e._s(e.employee_name)+"设置等级标签")]),t("br"),t("level-selector",{attrs:{pre:e.preLv,disabled:e.readOnly},model:{value:e.level,callback:function(s){e.level=s},expression:"level"}})],1)]),t("br"),e.scores[e.selectGradeItem].superior_score!=e.scores[e.selectGradeItem].score?t("div",[t("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_case,callback:function(s){e.$set(e.scores[e.selectGradeItem],"superior_case",s)},expression:"scores[selectGradeItem].superior_case"}}),t("br")],1):e._e(),e.forReject?e._e():t("div",[t("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写修改理由"},model:{value:e.reason,callback:function(s){e.reason=s},expression:"reason"}}),t("br")],1),e.readOnly?e._e():t("el-row",{attrs:{type:"flex",justify:"end"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},r=[],n=(t("f763"),t("7364"),t("c9f1")),o=t("38fb"),i=t("fea5"),c={data:function(){return{isManager:!1,basicInfo:{name:"",workcode:""},employee_name:"",readOnly:!1,advantage:"",promotion:"",selectGradeItem:0,level:"",preLv:"",reason:"",forReject:!0,lv_necessary:!0,scores:[{cases:[]}],nav:[{label:o["Ib"],href:n["A"]},{label:o["Kb"],href:Object(n["C"])(this.$route.params.id)},{label:o["rd"],href:Object(n["B"])(this.$route.params.id,this.$route.params.orgID)},{label:o["Gb"],href:Object(n["x"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid)},{label:"评分修改",active:!0}],constants:{MY_MEMBER_RULE:o["bd"],ADVANTAGE:o["e"],PROMOTION:o["Fd"]}}},components:{"nav-bar":function(){return t.e("chunk-1ee63f72").then(t.bind(null,"3208"))},"basic-info":function(){return t.e("chunk-32b41ace").then(t.bind(null,"eb39"))},"rule-text":function(){return t.e("chunk-afa7a21e").then(t.bind(null,"6c37"))},"grade-items":function(){return t.e("chunk-54f65ae0").then(t.bind(null,"da3f"))},"grade-slider":function(){return t.e("chunk-af1166aa").then(t.bind(null,"aa29"))},"level-selector":function(){return t.e("chunk-0f27707e").then(t.bind(null,"7f4e"))},"case-area":function(){return t.e("chunk-18a5333c").then(t.bind(null,"b5ec"))}},computed:{reasons:function(){return this.scores[this.selectGradeItem].self_cases}},methods:{getMemberDetail:function(){var e=this;Object(i["fb"])(this.$route.params.uid).then((function(s){var t=s.evaluation_type,a=s.advantage,r=s.promotion,n=s.scores,i=s.name,c=s.workcode,l=s._271_level,u=s._271_is_necessary;e.isManager=2==t,e.advantage=a,e.promotion=r,e.employee_name=i,e.basicInfo={name:i,workcode:c},e.lv_necessary=1==u,e.preLv=e.level=o["Nc"][l].toLowerCase(),e.scores=n.map((function(e){return e.score=e.self_score,delete e.self_score,e}))}))},submit:function(){var e=this,s=this.composePostData();if(this.isManager){var t=this.validate();if(!t)return;this.forReject?Object(i["Pb"])(this.$route.params.uid,s).then((function(s){e.$message({message:"修改成功",type:"success"}),e.$router.go(-1)})).catch((function(e){})):(s.reason=this.reason,Object(i["sb"])(this.$route.params.uid,s).then((function(s){e.$message({message:"修改成功",type:"success"}),e.$router.go(-1)})).catch((function(e){})))}else s.reason=this.reason,Object(i["nb"])(this.$route.params.uid,s).then((function(s){e.$message({message:"修改成功",type:"success"}),e.$router.go(-1)}))},validate:function(){if(this.advantage&&this.promotion)if(this.level||!this.lv_necessary){if(this.forReject||this.reason)return this.checkReason();this.$message({message:"请填写修改理由!",type:"warning"})}else this.$message({message:"请选择等级!",type:"warning"});else this.$message({message:"请填写优点和待提升部分",type:"warning"})},checkReason:function(){var e=this;return!this.scores.some((function(s){var t=s.score!=s.superior_score&&!s.superior_case;return t&&e.$message.error("".concat(s.question_name,"评分理由未填写，请填写后提交!")),t}))},composePostData:function(){var e={};return this.scores.forEach((function(s){e[s.question_id]={score:s.superior_score,cases:[s.superior_case]}})),e.promotion=this.promotion,e.advantage=this.advantage,e._271_level=o["Mc"][this.level],e}},created:function(){this.getMemberDetail(),this.forReject=1==this.$route.query.complain}},l=c,u=(t("d534"),t("6691")),d=Object(u["a"])(l,a,r,!1,null,"ee7680da",null);s["default"]=d.exports},"32ec":function(e,s,t){},d534:function(e,s,t){"use strict";var a=t("32ec"),r=t.n(a);r.a}}]);