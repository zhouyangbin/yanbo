(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47814660"],{6040:function(t,e,a){},a52e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-detail-page"},[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"content-container"},[a("div",{staticClass:"basic-info"},[a("span",{staticClass:"label"},[t._v(t._s(t.constants.BASIC_INFO)+":")]),a("span",[a("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.LEADER_NAME))]),t._v("\n        / "+t._s(t.basicInfo.leaderName)+"\n      ")]),t._v("    \n      "),a("span",{staticClass:"tip"},[t._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),a("br"),t._l(t.targets,function(t,e){return a("card",{key:e,staticClass:"card",attrs:{maxlength:1e3,readOnly:!0,index:e,data:t}})}),a("br"),t.myAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SELF,readOnly:!0,desc:t.myAdditionMark.evaluation,mark:t.myAdditionMark.score},on:{"update:desc":function(e){t.$set(t.myAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.myAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.leaderAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SUP,readOnly:!0,desc:t.leaderAdditionMark.evaluation,mark:t.leaderAdditionMark.score},on:{"update:desc":function(e){t.$set(t.leaderAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.leaderAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.comments?a("div",[a("comments",{attrs:{readOnly:!0,comments:t.comments},on:{"update:comments":function(e){t.comments=e}}}),a("br")],1):t._e(),t.progressArr.length>1?a("div",{staticClass:"summary-section"},[a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("进度:")]),a("el-steps",{staticStyle:{width:"60%"},attrs:{active:t.progressArr.length}},t._l(t.progressArr,function(e,s){return a("el-step",{key:s},[a("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e.text))]),a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.value))])])}))],1),t.appeal.reason?a("div",[a("br"),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("申诉理由:")]),a("span",{domProps:{innerHTML:t._s(t.appeal.reason.replace(/\n/g,"<br/>"))}})]),a("br")]):t._e(),t.total?a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"},[t._v("评分结果:")]),a("span",[t._v(t._s(t.total))])]):t._e(),a("div",{staticClass:"inner-container"},[a("span",{staticClass:"label"}),a("el-steps",{staticStyle:{width:"60%"},attrs:{active:t.resultArr.length}},t._l(t.resultArr,function(e,s){return a("el-step",{key:s},[a("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e.text))]),a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.value))])])}))],1)]):t._e(),a("br"),a("br"),t.canEdit?a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.changeMarks}},[t._v(t._s(t.constants.LABEL_MODIFY))]),a("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v("确认结果")])],1):t._e()],2),t.showChangeMarkDia?a("change-mark",{attrs:{mark:t.total,visible:t.showChangeMarkDia},on:{close:t.afterChangeGrade,"update:visible":function(e){t.showChangeMarkDia=e}}}):t._e()],1)},n=[],r=(a("cadf"),a("551c"),a("097d"),a("38fb")),i=a("fea5"),o=a("c9f1"),c={data:function(){return{basicInfo:{},total:"",targets:[],myAdditionMark:{},leaderAdditionMark:{},comments:"",appeal:{},nav:[{label:r["Fb"],href:o["S"]},{label:r["Hb"],href:Object(o["U"])(this.$route.params.id)},{label:r["kd"],href:Object(o["T"])(this.$route.params.id,this.$route.params.orgID)},{label:r["cb"],active:!0}],resultArr:[],progressArr:[],canEdit:!1,showChangeMarkDia:!1,constants:{LABEL_MODIFY:r["fc"],LEADER_NAME:r["Bc"],LABEL_SELF:r["sc"],LABEL_SUP:r["vc"],BASIC_INFO:r["l"]}}},components:{"nav-bar":function(){return a.e("chunk-55b2b05e").then(a.bind(null,"3208"))},pagination:function(){return a.e("chunk-54b4afe0").then(a.bind(null,"486f"))},card:function(){return a.e("chunk-35bee474").then(a.bind(null,"4e80"))},"addition-mark":function(){return a.e("chunk-5767f7aa").then(a.bind(null,"5923"))},"change-mark":function(){return a.e("chunk-e35cd63c").then(a.bind(null,"ff66"))},comments:function(){return a.e("chunk-44f52e45").then(a.bind(null,"f160"))}},methods:{changeMarks:function(){this.showChangeMarkDia=!0},afterChangeGrade:function(){this.getInfo()},submit:function(){var t=this;this.$confirm("请确认无误再提交，一经提交无法修改, 是否继续?",r["j"],{confirmButtonText:r["z"],cancelButtonText:r["u"],type:"warning"}).then(function(){var e={action:1};Object(i["c"])(t.$route.params.orgID,t.$route.params.uid,e).then(function(e){t.getInfo()}).catch(function(t){})}).catch(function(){})},composeResultArr:function(t,e,a){this.resultArr=[],t&&null!=t.score&&this.resultArr.push({text:r["sc"],value:t.score}),e&&e.score_level&&this.resultArr.push({text:r["vc"],value:e.score_level}),a&&a.hr_score_level&&this.resultArr.push({text:1==a.action?"BP确认":"BP修改",value:a.hr_score_level})},composeProgressArr:function(t,e,a,s,n){this.progressArr=[],t&&this.progressArr.push({text:"目标导入",value:t}),e&&this.progressArr.push({text:r["sc"],value:e}),a&&this.progressArr.push({text:r["vc"],value:a}),s&&this.progressArr.push({text:r["f"],value:s}),n&&this.progressArr.push({text:"结束",value:n})},getInfo:function(){var t=this;return Object(i["M"])(this.$route.params.orgID,this.$route.params.uid).then(function(e){var a=e.superior_name,s=e.targets,n=e.self_attach_score,r=e.superior_attach_score,i=e.superior_score,o=e.appeal,c=e.self_score,l=e.target_time,u=e.self_time,d=e.superior_time,p=e.appeal_time,h=e.end_time,f=e.can_edit,v=e.score_level;t.basicInfo={leaderName:a},t.total=v,t.comments=i&&i.evaluation,t.composeResultArr(c,i,o),t.composeProgressArr(l,u,d,p,h),t.targets=s,t.myAdditionMark=n||{},t.leaderAdditionMark=r||{},t.appeal=o||{},t.canEdit=1==f}).catch(function(t){})}},created:function(){this.getInfo()}},l=c,u=(a("af47"),a("2877")),d=Object(u["a"])(l,s,n,!1,null,"5a573361",null);d.options.__file="index.vue";e["default"]=d.exports},af47:function(t,e,a){"use strict";var s=a("6040"),n=a.n(s);n.a}}]);