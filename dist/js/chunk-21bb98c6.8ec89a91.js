(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21bb98c6"],{"627f":function(t,e,a){},"7fab":function(t,e,a){"use strict";var s=a("627f"),n=a.n(s);n.a},a52e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-detail-page"},[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"content-container"},[a("div",{staticClass:"basic-info"},[a("span",{staticClass:"label"},[t._v(t._s(t.constants.BASIC_INFO)+":")]),a("span",[a("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.LEADER_NAME))]),t._v("\n        / "+t._s(t.basicInfo.leaderName)+" ")]),t._v("    \n      "),a("span",{staticClass:"tip"},[t._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),a("br"),t._l(t.targets,function(t,e){return a("card",{key:e,staticClass:"card",attrs:{maxlength:1e3,readOnly:!0,index:e,data:t}})}),a("br"),t.myAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SELF,readOnly:!0,desc:t.myAdditionMark.evaluation,mark:t.myAdditionMark.score},on:{"update:desc":function(e){return t.$set(t.myAdditionMark,"evaluation",e)},"update:mark":function(e){return t.$set(t.myAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.leaderAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SUP,readOnly:!0,desc:t.leaderAdditionMark.evaluation,mark:t.leaderAdditionMark.score},on:{"update:desc":function(e){return t.$set(t.leaderAdditionMark,"evaluation",e)},"update:mark":function(e){return t.$set(t.leaderAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.comments?a("div",[a("comments",{attrs:{readOnly:!0,comments:t.comments},on:{"update:comments":function(e){t.comments=e}}}),a("br")],1):t._e(),t.progressArr.length>1?a("div",{staticClass:"summary-section"},[a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("进度:")]),a("el-steps",{staticStyle:{width:"60%"},attrs:{active:t.progressArr.length}},t._l(t.progressArr,function(e,s){return a("el-step",{key:s},[a("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e.text))]),a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.value))])])}),1)],1),t.appeal.reason?a("div",[a("br"),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("申诉理由:")]),a("span",{domProps:{innerHTML:t._f("linebreak")(t.appeal.reason)}})]),a("br")]):t._e(),t.total?a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("评分结果 : ")]),a("span",{staticClass:"label",staticStyle:{"padding-left":"0"}},[t._v(t._s(t.total))])]):t._e(),t.total?a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("标签 : ")]),a("span",{staticClass:"label",staticStyle:{"padding-left":"0"}},[t._v(t._s(t.label_name))])]):t._e(),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"}),a("el-steps",{staticStyle:{width:"60%"},attrs:{active:t.resultArr.length}},t._l(t.resultArr,function(e,s){return a("el-step",{key:s},[a("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e.text))]),a("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n              "+t._s(e.value)+"\n            ")])])}),1)],1)]):t._e(),a("br"),a("br"),t.canEdit?a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.changeMarks}},[t._v("\n        "+t._s(t.constants.LABEL_MODIFY)+"\n      ")]),a("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v("确认结果")])],1):t._e()],2),t.showChangeMarkDia?a("change-mark",{attrs:{label_id:t.label_id,mark:t.total,visible:t.showChangeMarkDia},on:{close:t.afterChangeGrade,"update:visible":function(e){t.showChangeMarkDia=e}}}):t._e()],1)},n=[],r=a("38fb"),i=a("fea5"),o=a("c9f1"),l={data:function(){return{basicInfo:{},total:"",targets:[],myAdditionMark:{},leaderAdditionMark:{},comments:"",appeal:{},nav:[{label:r["dc"],href:o["pb"]},{label:r["fc"],href:Object(o["rb"])(this.$route.params.id)},{label:r["Ud"],href:Object(o["qb"])(this.$route.params.id,this.$route.params.orgID)},{label:r["pb"],active:!0}],resultArr:[],progressArr:[],canEdit:!1,showChangeMarkDia:!1,constants:{LABEL_MODIFY:r["Gc"],LEADER_NAME:r["ed"],LABEL_SELF:r["Tc"],LABEL_SUP:r["Xc"],BASIC_INFO:r["p"]},label_id:"",label_name:""}},components:{"nav-bar":function(){return a.e("chunk-6f993239").then(a.bind(null,"3208"))},card:function(){return a.e("chunk-5c490880").then(a.bind(null,"4e80"))},"addition-mark":function(){return a.e("chunk-99af4336").then(a.bind(null,"5923"))},"change-mark":function(){return a.e("chunk-5878d71e").then(a.bind(null,"ff66"))},comments:function(){return a.e("chunk-38427ed5").then(a.bind(null,"f160"))}},methods:{changeMarks:function(){this.showChangeMarkDia=!0},afterChangeGrade:function(){this.getInfo()},submit:function(){var t=this;this.$confirm("请确认无误再提交，一经提交无法修改, 是否继续?",r["n"],{confirmButtonText:r["G"],cancelButtonText:r["A"],type:"warning"}).then(function(){var e={action:1};Object(i["c"])(t.$route.params.orgID,t.$route.params.uid,e).then(function(e){t.getInfo()}).catch(function(t){})}).catch(function(){})},composeResultArr:function(t,e,a){this.resultArr=[],t&&null!=t.score&&this.resultArr.push({text:r["Tc"],value:t.score}),e&&e.score_level&&this.resultArr.push({text:r["Xc"],value:e.score_level}),a&&a.hr_score_level&&this.resultArr.push({text:1==a.action?"BP确认":"BP修改",value:a.hr_score_level})},composeProgressArr:function(t,e,a,s,n){this.progressArr=[],t&&this.progressArr.push({text:"目标导入",value:t}),e&&this.progressArr.push({text:r["Tc"],value:e}),a&&this.progressArr.push({text:r["Xc"],value:a}),s&&this.progressArr.push({text:r["i"],value:s}),n&&this.progressArr.push({text:"结束",value:n})},getInfo:function(){var t=this;return Object(i["Fb"])(this.$route.params.orgID,this.$route.params.uid).then(function(e){var a=e.superior_name,s=e.targets,n=e.self_attach_score,r=e.superior_attach_score,i=e.superior_score,o=e.appeal,l=e.self_score,c=e.target_time,u=e.self_time,d=e.superior_time,p=e.appeal_time,_=(e.end_time,e.confirm_end_time),h=e.can_edit,m=e.score_level,f=e.label_id,v=e.label_name;t.basicInfo={leaderName:a},t.total=m,t.comments=i&&i.evaluation,t.composeResultArr(l,i,o),t.composeProgressArr(c,u,d,p,_),t.targets=s,t.myAdditionMark=n||{},t.leaderAdditionMark=r||{},t.appeal=o||{},t.canEdit=1==h,t.label_id=f,t.label_name=v}).catch(function(t){})}},created:function(){this.getInfo()}},c=l,u=(a("7fab"),a("2877")),d=Object(u["a"])(c,s,n,!1,null,"015794aa",null);e["default"]=d.exports}}]);