(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2668bb17"],{2908:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"culture-hr-details-modify-page"},[a("nav-bar",{attrs:{list:e.nav}}),a("br"),a("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[a("basic-info",{attrs:{data:e.basicInfo}}),a("br"),a("hr"),a("br"),a("rule-text",{attrs:{text:e.constants.MY_MEMBER_RULE}}),a("br"),a("br"),a("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.advantage,callback:function(t){e.advantage=t},expression:"advantage"}}),a("br"),a("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.promotion,callback:function(t){e.promotion=t},expression:"promotion"}}),a("br"),a("section",{staticClass:"mark"},[a("el-row",{attrs:{align:"middle",type:"flex"}},[a("el-col",{staticStyle:{padding:"20px","border-right":"1px solid #979797"}},[a("div",{staticClass:"mark-label"},[e._v("\n                        自评分数\n                    ")]),a("grade-items",{attrs:{items:e.scores},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}})],1),a("el-col",{staticStyle:{"padding-left":"50px"}},e._l(e.reasons,function(t,s){return a("div",{key:s,staticClass:"mark-reason"},[a("div",[e._v("\n                            "+e._s(s+3)+"分理由:\n                        ")]),a("div",[e._v("\n                            "+e._s(t)+"\n                        ")])])}))],1)],1),a("br"),a("div",{staticClass:"mark-flag-container"},[a("div",{staticClass:"mark-section"},[a("div",{staticClass:"mark-label"},[e._v("\n                    为"+e._s(e.employee_name)+"的成就客户项目评分\n                ")]),a("br"),a("grade-slider",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_score,callback:function(t){e.$set(e.scores[e.selectGradeItem],"superior_score",t)},expression:"scores[selectGradeItem].superior_score"}})],1),a("div",{staticStyle:{width:"20px"}}),a("div",{staticClass:"flag-section"},[a("div",{staticClass:"mark-label"},[e._v("\n                    为"+e._s(e.employee_name)+"设计等级标签\n                ")]),a("br"),a("level-selector",{attrs:{disabled:e.readOnly},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}})],1)]),a("br"),a("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_case,callback:function(t){e.$set(e.scores[e.selectGradeItem],"superior_case",t)},expression:"scores[selectGradeItem].superior_case"}}),a("br"),e.forReject?e._e():a("div",[a("case-area",{attrs:{readOnly:e.readOnly,placeholder:"请填写修改理由"},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}}),a("br")],1),e.readOnly?e._e():a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},r=[],n=a("c9f1"),o=a("38fb"),c=a("fea5"),i={data:function(){return{basicInfo:{name:"xx",workcode:"xxx"},employee_name:"",readOnly:!1,advantage:"",promotion:"",selectGradeItem:0,level:"",reason:"",forReject:!0,scores:[{cases:[]}],nav:[{label:o["ub"],href:n["w"]},{label:o["wb"],href:Object(n["y"])(this.$route.params.id)},{label:o["Tc"],href:Object(n["x"])(this.$route.params.id,this.$route.params.orgID)},{label:o["sb"],href:Object(n["t"])(this.$route.params.id,this.$route.params.orgID,this.$route.params.uid)},{label:"评分修改",active:!0}],constants:{MY_MEMBER_RULE:o["Ic"]}}},components:{"nav-bar":function(){return a.e("chunk-5a85c387").then(a.bind(null,"3208"))},"basic-info":function(){return a.e("chunk-8e8d666a").then(a.bind(null,"eb39"))},"rule-text":function(){return a.e("chunk-f91b1ecc").then(a.bind(null,"6c37"))},"grade-items":function(){return a.e("chunk-66fcb243").then(a.bind(null,"da3f"))},"grade-slider":function(){return a.e("chunk-3af41547").then(a.bind(null,"aa29"))},"level-selector":function(){return a.e("chunk-3fe11798").then(a.bind(null,"7f4e"))},"case-area":function(){return a.e("chunk-463f71be").then(a.bind(null,"b5ec"))}},computed:{reasons:function(){return this.scores[this.selectGradeItem].self_cases}},methods:{getMemberDetail:function(){var e=this;Object(c["B"])(this.$route.params.uid).then(function(t){var a=t.advantage,s=t.promotion,r=t.scores,n=t.employee_name,c=t.employee_workcode,i=t.end_time,l=t._271_level;t.status;e.advantage=a,e.promotion=s,e.employee_name=n,e.basicInfo={name:n,workcode:c,finishedTime:i},e.level=o["wc"][l].toLowerCase(),e.scores=r.map(function(e){return e.score=e.self_score,delete e.self_score,e})})},submit:function(){var e=this,t=this.composePostData();this.forReject||(t.reason=this.reasons,Object(c["db"])(this.$route.params.uid,t).then(function(t){e.$message({message:"修改成功",type:"success"}),e.$router.go(-1)}))},composePostData:function(){var e={};return this.scores.forEach(function(t){e[t.question_id]={score:t.superior_score,cases:[t.superior_case]}}),e.promotion=this.promotion,e.advantage=this.advantage,e._271_level=o["vc"][this.level],e}},created:function(){this.getMemberDetail(),this.forReject=1==this.$route.query.complain}},l=i,d=(a("4d60"),a("2877")),u=Object(d["a"])(l,s,r,!1,null,"44d8e68e",null);u.options.__file="index.vue";t["default"]=u.exports},"4d60":function(e,t,a){"use strict";var s=a("804e"),r=a.n(s);r.a},"804e":function(e,t,a){}}]);