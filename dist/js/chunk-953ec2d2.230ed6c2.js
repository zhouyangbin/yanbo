(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-953ec2d2"],{1194:function(e,t,s){},"5ef7":function(e,t,s){"use strict";var n=s("1194"),a=s.n(n);a.a},"67f9":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"down-member-details-page"},[s("nav-bar",{attrs:{list:e.nav}}),s("br"),s("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[s("basic-info",{attrs:{data:e.basicInfo}}),s("br"),s("hr"),s("br"),s("rule-text",{attrs:{text:e.constants.MY_DOWN_MEMBER_RULE}}),s("br"),s("br"),s("case-area",{attrs:{readOnly:!0},model:{value:e.advantage,callback:function(t){e.advantage=t},expression:"advantage"}}),s("br"),s("case-area",{attrs:{readOnly:!0},model:{value:e.promotion,callback:function(t){e.promotion=t},expression:"promotion"}}),s("br"),s("el-row",{staticClass:"mark-section",attrs:{align:"middle",type:"flex"}},[s("el-col",{staticStyle:{"border-right":"1px solid #979797"}},[s("div",{staticClass:"mark-label"},[e._v("\n          上级评分数: "),s("span",{staticClass:"score"},[e._v(e._s(e.total)+"分")])]),s("grade-items",{attrs:{items:e.scores},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}}),s("br"),s("br"),s("div",{staticClass:"mark-label"},[e._v("\n          等级标签\n        ")]),s("level-selector",{attrs:{disabled:!e.levelEditable},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}},[e.readOnly?e._e():s("span",[e.levelEditable?s("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",round:""},on:{click:e.levelChange}},[e._v("确定")]):s("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",round:""},on:{click:function(t){e.levelEditable=!0}}},[e._v("修改")])],1)]),s("br")],1),s("br"),s("el-col",{staticStyle:{"padding-left":"50px"}},[s("div",{staticClass:"mark-reason"},[s("div",[e._v("\n            上级评理由:\n          ")]),s("div",[e._v("\n            "+e._s(e.leaderReason)+"\n          ")])]),s("br"),s("div",[e._v("\n          员工自评分数: "+e._s(e.total)+"分, "+e._s(e.curItemName)+": "+e._s(e.selfScore)+"分\n        ")]),e._l(e.selfCases,function(t,n){return s("div",{key:n,staticClass:"mark-reason"},[s("div",[e._v("\n            "+e._s(n+3)+"分理由:\n          ")]),s("div",[e._v("\n            "+e._s(t)+"\n          ")])])})],2)],1),s("br"),s("br"),e.readOnly||e.isRejected?e._e():s("el-row",{attrs:{type:"flex",justify:"end"}},[s("el-popover",{attrs:{placement:"top",width:"400",trigger:"click"},on:{hide:function(t){e.rejectReason=""}}},[s("case-area",{attrs:{placeholder:"请您填写驳回理由"},model:{value:e.rejectReason,callback:function(t){e.rejectReason=t},expression:"rejectReason"}}),s("br"),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.reject}},[e._v("提交")])],1),s("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v("驳回")])],1),s("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:e.pass}},[e._v("确认")])],1)],1)],1)},a=[],r=s("38fb"),i=s("c9f1"),c=s("fea5"),o={data:function(){return{levelEditable:!1,advantage:"",promotion:"",rejectReason:"",levelNecessary:!1,basicInfo:{},audit_status:0,scores:[{cases:[]}],total:"",nav:[{label:r["J"],href:i["f"]},{label:r["Ec"],href:Object(i["e"])(this.$route.params.id)},{label:"隔级详情",active:!0}],level:"",readOnly:!1,selectGradeItem:0,gradeItems:[],constants:{MY_DOWN_MEMBER_RULE:r["Fc"]}}},components:{"nav-bar":function(){return s.e("chunk-5a85c387").then(s.bind(null,"3208"))},"basic-info":function(){return s.e("chunk-8e8d666a").then(s.bind(null,"eb39"))},"rule-text":function(){return s.e("chunk-f91b1ecc").then(s.bind(null,"6c37"))},"case-area":function(){return s.e("chunk-463f71be").then(s.bind(null,"b5ec"))},"grade-items":function(){return s.e("chunk-66fcb243").then(s.bind(null,"da3f"))},"level-selector":function(){return s.e("chunk-3fe11798").then(s.bind(null,"7f4e"))}},methods:{getDetailInfo:function(){var e=this;Object(c["A"])(this.$route.params.uid).then(function(t){var s=t.advantage,n=t.promotion,a=t.superior_name,i=t.superior_workcode,c=t.end_time,o=t.scores,l=t._271_level,u=t.total_score,d=t.audit_status,f=t._271_is_necessary;t.stage;e.advantage=s,e.promotion=n,e.levelNecessary=!!f,e.basicInfo={superior_workcode:i,superior_name:a,finishedTime:"隔级评截止时间: ".concat(c)},e.scores=o.map(function(e){return e.score=e.superior_score,delete e.superior_score,e}),e.total=u,e.audit_status=d,e.level=r["wc"][l].toLowerCase(),e.readOnly=0==t.can_submit})},levelChange:function(){var e=this;!this.levelNecessary||this.leve?Object(c["Ab"])({id:this.$route.params.uid,level:r["vc"][this.level]}).then(function(t){e.$message({message:"等级设置成功!",type:"success"})}).catch(function(e){}):this.$message({message:"请选择等级!",type:"warning"})},pass:function(){var e=this;this.$confirm("确认通过此评分么, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.reqPass()}).catch(function(){})},reject:function(){var e=this;this.rejectReason?Object(c["nb"])({ids:[this.$route.params.uid],type:1,reason:this.rejectReason}).then(function(t){e.$message({message:"操作成功!",type:"success"}),e.getDetailInfo()}).catch(function(e){}):this.$message({message:"请填写理由!",type:"warning"})},reqPass:function(){var e=this;Object(c["nb"])({ids:[this.$route.params.uid],type:2}).then(function(t){e.$message({message:"操作成功!",type:"success"}),e.getDetailInfo()}).catch(function(e){})}},created:function(){this.getDetailInfo()},computed:{leaderReason:function(){return this.scores[this.selectGradeItem].superior_case},selfCases:function(){return this.scores[this.selectGradeItem].self_cases},selfScore:function(){return this.scores[this.selectGradeItem].self_score},curItemName:function(){return this.scores[this.selectGradeItem].question_name},isRejected:function(){return 1==this.audit_status},isPassed:function(){return 2==this.audit_status},isUnTouched:function(){return 0==this.audit_status}}},l=o,u=(s("5ef7"),s("2877")),d=Object(u["a"])(l,n,a,!1,null,"09196544",null);d.options.__file="index.vue";t["default"]=d.exports}}]);