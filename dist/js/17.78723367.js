webpackJsonp([17],{"4V7R":function(t,e){},"dyQ/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("OE2U"),s=a("BHhq"),n=a("xwzc"),i={data:function(){return{basicInfo:{},total:"",targets:[],myAdditionMark:{},leaderAdditionMark:{},appeal:{},nav:[{label:r["_14"],href:n["y"]},{label:r["_16"],href:Object(n["A"])(this.$route.params.orgID)},{label:r["_81"],href:Object(n["z"])(this.$route.params.id,this.$route.params.orgID)},{label:r["M"],active:!0}],resultArr:[],progressArr:[],canEdit:!1,showChangeMarkDia:!1,constants:{LABEL_MODIFY:r["_37"],LEADER_NAME:r["_60"],LABEL_SELF:r["_50"],LABEL_SUP:r["_53"]}}},components:{"nav-bar":function(){return a.e(25).then(a.bind(null,"PI/7"))},pagination:function(){return a.e(26).then(a.bind(null,"734F"))},card:function(){return a.e(28).then(a.bind(null,"ql5Z"))},"addition-mark":function(){return a.e(27).then(a.bind(null,"rkMF"))},"change-mark":function(){return a.e(49).then(a.bind(null,"u+qQ"))}},methods:{changeMarks:function(){this.showChangeMarkDia=!0},afterChangeGrade:function(){this.getInfo()},submit:function(){var t=this;this.$confirm("请确认无误再提交，一经提交无法修改, 是否继续?",r["g"],{confirmButtonText:r["o"],cancelButtonText:r["l"],type:"warning"}).then(function(){var e={action:1};Object(s["b"])(t.$route.params.orgID,t.$route.params.uid,e).then(function(e){t.getInfo()}).catch(function(t){})}).catch(function(){})},getInfo:function(){var t=this;return Object(s["u"])(this.$route.params.orgID,this.$route.params.uid).then(function(e){var a=e.superior_name,s=e.targets,n=e.self_attach_score,i=e.superior_attach_score,o=e.superior_score,l=e.appeal,c=e.self_score,u=e.target_time,d=e.self_time,_=e.superior_time,p=e.appeal_time,v=e.end_time,h=e.can_edit,f=e.score_level;t.basicInfo={leaderName:a},t.resultArr=[],t.total=f,c&&c.score&&t.resultArr.push({text:r["_50"],value:c.score}),o&&o.score_level&&t.resultArr.push({text:r["_53"],value:o.score_level}),l&&l.hr_score_level&&t.resultArr.push({text:"BP修改",value:l.hr_score_level}),t.progressArr=[],u&&t.progressArr.push({text:"目标导入",value:u}),d&&t.progressArr.push({text:r["_50"],value:d}),_&&t.progressArr.push({text:r["_53"],value:_}),p&&t.progressArr.push({text:r["d"],value:p}),v&&t.progressArr.push({text:"结束",value:v}),t.targets=s,t.myAdditionMark=n||{},t.leaderAdditionMark=i||{},t.appeal=l||{},t.canEdit=1==h}).catch(function(t){})}},created:function(){this.getInfo()}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-detail-page"},[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"content-container"},[a("div",{staticClass:"basic-info"},[a("span",{staticClass:"label"},[t._v("基本信息:")]),a("span",[a("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.LEADER_NAME))]),t._v(" / "+t._s(t.basicInfo.leaderName))]),t._v("    \n      "),a("span",{staticClass:"tip"},[t._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),a("br"),t._l(t.targets,function(t,e){return a("card",{key:e,staticClass:"card",attrs:{readOnly:!0,index:e,data:t}})}),a("br"),t.myAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SELF,readOnly:!0,desc:t.myAdditionMark.evaluation,mark:t.myAdditionMark.score},on:{"update:desc":function(e){t.$set(t.myAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.myAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.leaderAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SUP,readOnly:!0,desc:t.leaderAdditionMark.evaluation,mark:t.leaderAdditionMark.score},on:{"update:desc":function(e){t.$set(t.leaderAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.leaderAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.progressArr.length>1?a("div",{staticClass:"summary-section"},[a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("进度:")]),a("el-steps",{staticStyle:{width:"80%"},attrs:{active:t.progressArr.length}},t._l(t.progressArr,function(e,r){return a("el-step",{key:r},[a("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e.text))]),a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.value))])])}))],1),t.appeal.reason?a("div",[a("br"),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("申诉理由:")]),a("span",[t._v(t._s(t.appeal.reason))])]),a("br")]):t._e(),t.total?a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("评分结果:")]),a("span",[t._v(" "+t._s(t.total)+" ")])]):t._e(),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"}),a("el-steps",{staticStyle:{width:"80%"},attrs:{active:t.resultArr.length}},t._l(t.resultArr,function(e,r){return a("el-step",{key:r},[a("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e.text))]),a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.value))])])}))],1)]):t._e(),a("br"),a("br"),t.canEdit?a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.changeMarks}},[t._v(t._s(t.constants.LABEL_MODIFY))]),a("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v("确认结果")])],1):t._e()],2),t.showChangeMarkDia?a("change-mark",{attrs:{mark:t.total,visible:t.showChangeMarkDia},on:{close:t.afterChangeGrade,"update:visible":function(e){t.showChangeMarkDia=e}}}):t._e()],1)},l=[],c=a("XyMi");function u(t){a("4V7R")}var d=!1,_=u,p="data-v-2738a443",v=null,h=Object(c["a"])(i,o,l,d,_,p,v);e["default"]=h.exports}});
//# sourceMappingURL=17.78723367.js.map