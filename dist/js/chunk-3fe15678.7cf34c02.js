(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fe15678"],{"00a8":function(t,e,a){"use strict";var r=a("3e61"),s=a.n(r);s.a},"3e61":function(t,e,a){},a52e:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-detail-page"},[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"content-container"},[a("div",{staticClass:"basic-info"},[a("span",{staticClass:"label"},[t._v(t._s(t.constants.BASIC_INFO)+":")]),a("span",[a("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.LEADER_NAME))]),t._v("\n        / "+t._s(t.basicInfo.leaderName)+" ")]),t._v("    \n      "),a("span",{staticClass:"tip"},[t._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),a("br"),t._l(t.targets,function(t,e){return a("card",{key:e,staticClass:"card",attrs:{maxlength:1e3,readOnly:!0,index:e,data:t}})}),a("br"),t.myAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SELF,readOnly:!0,desc:t.myAdditionMark.evaluation,mark:t.myAdditionMark.score},on:{"update:desc":function(e){return t.$set(t.myAdditionMark,"evaluation",e)},"update:mark":function(e){return t.$set(t.myAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.leaderAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SUP,readOnly:!0,desc:t.leaderAdditionMark.evaluation,mark:t.leaderAdditionMark.score},on:{"update:desc":function(e){return t.$set(t.leaderAdditionMark,"evaluation",e)},"update:mark":function(e){return t.$set(t.leaderAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.comments?a("div",[a("comments",{attrs:{readOnly:!0,comments:t.comments},on:{"update:comments":function(e){t.comments=e}}}),a("br")],1):t._e(),t.progressArr.length>1?a("div",{staticClass:"summary-section"},[a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("进度:")]),a("el-steps",{staticStyle:{width:"60%"},attrs:{active:t.progressArr.length}},t._l(t.progressArr,function(e,r){return a("el-step",{key:r},[a("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e.text))]),a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.value))])])}),1)],1),t.appeal.reason?a("div",[a("br"),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("申诉理由:")]),a("span",{domProps:{innerHTML:t._f("linebreak")(t.appeal.reason)}})]),a("br")]):t._e(),t.total?a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("评分结果:")]),a("span",[t._v(t._s(t.total))])]):t._e(),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"}),a("el-steps",{staticStyle:{width:"60%"},attrs:{active:t.resultArr.length}},t._l(t.resultArr,function(e,r){return a("el-step",{key:r},[a("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e.text))]),a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.value))])])}),1)],1)]):t._e(),a("br"),a("br"),t.canEdit?a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.changeMarks}},[t._v("\n        "+t._s(t.constants.LABEL_MODIFY)+"\n      ")]),a("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v("确认结果")])],1):t._e()],2),t.showChangeMarkDia?a("change-mark",{attrs:{mark:t.total,visible:t.showChangeMarkDia},on:{close:t.afterChangeGrade,"update:visible":function(e){t.showChangeMarkDia=e}}}):t._e()],1)},s=[],n=a("38fb"),i=a("fea5"),o=a("c9f1"),c={data:function(){return{basicInfo:{},total:"",targets:[],myAdditionMark:{},leaderAdditionMark:{},comments:"",appeal:{},nav:[{label:n["dc"],href:o["lb"]},{label:n["fc"],href:Object(o["nb"])(this.$route.params.id)},{label:n["Td"],href:Object(o["mb"])(this.$route.params.id,this.$route.params.orgID)},{label:n["pb"],active:!0}],resultArr:[],progressArr:[],canEdit:!1,showChangeMarkDia:!1,constants:{LABEL_MODIFY:n["Gc"],LEADER_NAME:n["ed"],LABEL_SELF:n["Tc"],LABEL_SUP:n["Xc"],BASIC_INFO:n["p"]}}},components:{"nav-bar":function(){return a.e("chunk-d5094d72").then(a.bind(null,"3208"))},card:function(){return a.e("chunk-c7bbe622").then(a.bind(null,"4e80"))},"addition-mark":function(){return a.e("chunk-99af4336").then(a.bind(null,"5923"))},"change-mark":function(){return a.e("chunk-6dc33a67").then(a.bind(null,"ff66"))},comments:function(){return a.e("chunk-38427ed5").then(a.bind(null,"f160"))}},methods:{changeMarks:function(){this.showChangeMarkDia=!0},afterChangeGrade:function(){this.getInfo()},submit:function(){var t=this;this.$confirm("请确认无误再提交，一经提交无法修改, 是否继续?",n["n"],{confirmButtonText:n["G"],cancelButtonText:n["A"],type:"warning"}).then(function(){var e={action:1};Object(i["c"])(t.$route.params.orgID,t.$route.params.uid,e).then(function(e){t.getInfo()}).catch(function(t){})}).catch(function(){})},composeResultArr:function(t,e,a){this.resultArr=[],t&&null!=t.score&&this.resultArr.push({text:n["Tc"],value:t.score}),e&&e.score_level&&this.resultArr.push({text:n["Xc"],value:e.score_level}),a&&a.hr_score_level&&this.resultArr.push({text:1==a.action?"BP确认":"BP修改",value:a.hr_score_level})},composeProgressArr:function(t,e,a,r,s){this.progressArr=[],t&&this.progressArr.push({text:"目标导入",value:t}),e&&this.progressArr.push({text:n["Tc"],value:e}),a&&this.progressArr.push({text:n["Xc"],value:a}),r&&this.progressArr.push({text:n["i"],value:r}),s&&this.progressArr.push({text:"结束",value:s})},getInfo:function(){var t=this;return Object(i["zb"])(this.$route.params.orgID,this.$route.params.uid).then(function(e){var a=e.superior_name,r=e.targets,s=e.self_attach_score,n=e.superior_attach_score,i=e.superior_score,o=e.appeal,c=e.self_score,l=e.target_time,u=e.self_time,d=e.superior_time,p=e.appeal_time,h=(e.end_time,e.confirm_end_time),m=e.can_edit,_=e.score_level;t.basicInfo={leaderName:a},t.total=_,t.comments=i&&i.evaluation,t.composeResultArr(c,i,o),t.composeProgressArr(l,u,d,p,h),t.targets=r,t.myAdditionMark=s||{},t.leaderAdditionMark=n||{},t.appeal=o||{},t.canEdit=1==m}).catch(function(t){})}},created:function(){this.getInfo()}},l=c,u=(a("00a8"),a("2877")),d=Object(u["a"])(l,r,s,!1,null,"445b2074",null);e["default"]=d.exports}}]);