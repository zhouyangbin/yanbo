webpackJsonp([9],{JHaW:function(t,e){},"dyQ/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("OE2U"),n=a("BHhq"),s={data:function(){return{basicInfo:{},total:"",targets:[],myAdditionMark:{},leaderAdditionMark:{},appeal:{},nav:[{label:r["H"],active:!0}],resultArr:[],progressArr:[],canEdit:!1,showChangeMarkDia:!1}},components:{"nav-bar":function(){return a.e(25).then(a.bind(null,"PI/7"))},pagination:function(){return a.e(26).then(a.bind(null,"734F"))},card:function(){return a.e(28).then(a.bind(null,"ql5Z"))},"addition-mark":function(){return a.e(27).then(a.bind(null,"rkMF"))},"change-mark":function(){return a.e(49).then(a.bind(null,"u+qQ"))}},methods:{changeMarks:function(){this.showChangeMarkDia=!0},afterChangeGrade:function(){this.getInfo()},submit:function(){var t=this;this.$confirm("请确认无误再提交，一经提交无法修改, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={action:1};Object(n["b"])(t.$route.params.orgID,t.$route.params.id,e).then(function(e){t.getInfo()}).catch(function(t){})}).catch(function(){})},getInfo:function(){var t=this;return Object(n["t"])(this.$route.params.orgID,this.$route.params.id).then(function(e){var a=e.superior_name,r=e.targets,n=e.self_attach_score,s=e.superior_attach_score,i=e.superior_score,o=e.appeal,l=e.self_score,c=e.target_time,u=e.self_time,d=e.superior_time,p=e.appeal_time,v=e.end_time,_=e.can_edit,h=e.score_level;t.basicInfo={leaderName:a},t.total=h,l&&l.score&&t.resultArr.push({text:"自评",value:l.score}),i&&i.score_level&&t.resultArr.push({text:"上级评",value:i.score_level}),o&&o.hr_score_level&&t.resultArr.push({text:"BP修改",value:o.hr_score_level}),c&&t.progressArr.push({text:"目标导入",value:c}),u&&t.progressArr.push({text:"自评",value:u}),d&&t.progressArr.push({text:"上级评",value:d}),p&&t.progressArr.push({text:"申诉",value:p}),v&&t.progressArr.push({text:"结束",value:v}),t.targets=r,t.myAdditionMark=n||{},t.leaderAdditionMark=s||{},t.appeal=o||{},t.canEdit=1==_}).catch(function(t){})}},created:function(){this.getInfo()}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-detail-page"},[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"content-container"},[a("div",{staticClass:"basic-info"},[a("span",{staticClass:"label"},[t._v("基本信息:")]),a("span",[a("span",{staticClass:"greycolor"},[t._v("上级姓名")]),t._v(" / "+t._s(t.basicInfo.leaderName))]),t._v("    \n      "),a("span",{staticClass:"tip"},[t._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),a("br"),t._l(t.targets,function(t,e){return a("card",{key:e,staticClass:"card",attrs:{readOnly:!0,index:e,data:t}})}),a("br"),t.myAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:"自评",readOnly:!0,desc:t.myAdditionMark.evaluation,mark:t.myAdditionMark.score},on:{"update:desc":function(e){t.$set(t.myAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.myAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.leaderAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:"上级评",readOnly:!0,desc:t.leaderAdditionMark.evaluation,mark:t.leaderAdditionMark.score},on:{"update:desc":function(e){t.$set(t.leaderAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.leaderAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.progressArr.length>1?a("div",{staticClass:"summary-section"},[a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("进度:")]),a("el-steps",{staticStyle:{width:"80%"},attrs:{active:t.progressArr.length}},t._l(t.progressArr,function(e,r){return a("el-step",{key:r},[a("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e.text))]),a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.value))])])}))],1),t.appeal.reason?a("div",[a("br"),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("申诉理由:")]),a("span",[t._v(t._s(t.appeal.reason))])]),a("br")]):t._e(),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("评分结果:")]),a("span",[t._v(" "+t._s(t.total)+" ")])]),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"}),a("el-steps",{staticStyle:{width:"80%"},attrs:{active:t.resultArr.length}},t._l(t.resultArr,function(e,r){return a("el-step",{key:r},[a("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e.text))]),a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.value))])])}))],1)]):t._e(),a("br"),a("br"),t.canEdit?a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.changeMarks}},[t._v("修改")]),a("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v("确认结果")])],1):t._e()],2),t.showChangeMarkDia?a("change-mark",{attrs:{mark:t.total,visible:t.showChangeMarkDia},on:{close:t.afterChangeGrade,"update:visible":function(e){t.showChangeMarkDia=e}}}):t._e()],1)},o=[],l=a("XyMi");function c(t){a("JHaW")}var u=!1,d=c,p="data-v-b78e7cfa",v=null,_=Object(l["a"])(s,i,o,u,d,p,v);e["default"]=_.exports}});
//# sourceMappingURL=9.a608b835.js.map