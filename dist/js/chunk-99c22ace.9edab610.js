(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99c22ace"],{3325:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-grade-page"},[n("nav-bar",{attrs:{list:e.nav}}),n("section",{staticClass:"content-container"},[n("div",{staticClass:"basic-info"},[n("div",[n("span",{staticClass:"label"},[e._v(e._s(e.constants.BASIC_INFO)+":")]),n("span",[n("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.EMPLOYEE_WORKCODE))]),e._v("\n          / "+e._s(e.basicInfo.workcode)+"   \n          "),n("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.EMPYEE_NAME))]),e._v("\n          / "+e._s(e.basicInfo.name)+" ")]),e._v("    \n      ")]),e.needsReview?n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.passReview}},[e._v(e._s(e.constants.LABEL_CONFIRM))]),n("el-button",{on:{click:function(t){e.showReviewDia=!0}}},[e._v("返回修改")])],1):e._e()]),n("br"),e._l(e.targets,function(t,a){return n("card",{key:a,staticClass:"card",attrs:{readOnly:!e.canEdit,desc:e.targets[a].desc,placeholder:"请评价该项目的完成情况（非必填)",config:e.cardConfig,data:t,index:a},on:{"update:desc":function(t){return e.$set(e.targets[a],"desc",t)}},model:{value:e.targets[a].mark,callback:function(t){e.$set(e.targets[a],"mark",t)},expression:"targets[i].mark"}})}),n("br"),e.myAdditionMark.evaluation?n("div",[n("addition-mark",{attrs:{prefixTitle:e.constants.LABEL_SELF,readOnly:!0,desc:e.myAdditionMark.evaluation,mark:e.myAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.myAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.myAdditionMark,"score",t)}}}),n("br")],1):e._e(),e.hasLeaderAdditionMark&&!e.inReviewStage&&(!e.canEdit&&e.leaderAdditionMark.evaluation||e.canEdit)?n("div",[n("addition-mark",{attrs:{readOnly:!e.canEdit,prefixTitle:e.constants.LABEL_SUP,desc:e.leaderAdditionMark.evaluation,mark:e.leaderAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.leaderAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.leaderAdditionMark,"score",t)}}}),n("br")],1):e._e(),!e.inReviewStage&&(!e.canEdit&&e.comments||e.canEdit)?n("comments",{attrs:{readOnly:!e.canEdit,comments:e.comments},on:{"update:comments":function(t){e.comments=t}}}):e._e(),n("br"),e.inReviewStage?e._e():n("total-mark",{attrs:{total:e.total}}),n("br"),e.inReviewStage?e._e():n("level",{attrs:{readOnly:e.shouldMapping||e.stage>=50},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}}),n("br"),e.canEdit?n("el-row",{attrs:{type:"flex",justify:"center"}},[40!=e.stage?n("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]):e._e(),n("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v(e._s(e.constants.SUBMIT))])],1):e._e()],2),e.showReviewDia?n("review-dialog",{attrs:{callback:e.postReviewResult,visible:e.showReviewDia},on:{"update:visible":function(t){e.showReviewDia=t}}}):e._e()],1)},r=[],i=(n("a481"),n("7f7f"),n("38fb")),s=n("fea5"),o=n("c9f1"),c={data:function(){return{myAdditionMark:{},leaderAdditionMark:{},comments:"",stage:0,hasLeaderAdditionMark:!1,rules:[],basicInfo:{},targets:[],level:"",cardConfig:{min:0,max:5,step:.1},nav:[{label:i["Le"],href:o["m"]},{label:i["Yb"],href:Object(o["o"])(this.$route.params.gradeID)},{label:i["Wb"],active:!0}],constants:{SUBMIT:i["Be"],SAVE_DRAFT:i["le"],LABEL_SELF:i["Oc"],LABEL_SUP:i["Sc"],BASIC_INFO:i["p"],EMPLOYEE_WORKCODE:i["ob"],EMPYEE_NAME:i["pb"],LABEL_CONFIRM:i["sc"]},showReviewDia:!1}},components:{"nav-bar":function(){return n.e("chunk-d5094d72").then(n.bind(null,"3208"))},card:function(){return n.e("chunk-4b70dc2b").then(n.bind(null,"4e80"))},"addition-mark":function(){return n.e("chunk-082e0c5e").then(n.bind(null,"5923"))},"total-mark":function(){return n.e("chunk-11f6092e").then(n.bind(null,"5ea4"))},comments:function(){return n.e("chunk-38427ed5").then(n.bind(null,"f160"))},level:function(){return n.e("chunk-3bd107da").then(n.bind(null,"7bb4"))},"review-dialog":function(){return n.e("chunk-2d0dd770").then(n.bind(null,"8200"))}},computed:{total:function(){return parseFloat(this.targets.map(function(e){return e.weights*(e.mark||0)}).reduce(function(e,t){return e+t},0)+(parseFloat(this.leaderAdditionMark.score)||0)).toFixed(2)},shouldMapping:function(){return this.rules&&this.rules.length>0},canEdit:function(){return 30==this.stage||40==this.stage},needsReview:function(){return 5==this.stage},inReviewStage:function(){return this.stage<=20}},methods:{normalizeTargets:function(e){return e.map(function(e){return e.mark=e.target_superior_score&&parseFloat(e.target_superior_score.score)||0,e.desc=e.target_superior_score&&e.target_superior_score.description||"",e})},checkTotal:function(){return parseFloat(this.total)>5},passReview:function(){this.postReviewResult(2)},postReviewResult:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a={performance_user_id:this.$route.params.uid,type:e};return 1==e&&(a.reason=n),Object(s["qc"])(a).then(function(e){return t.showReviewDia=!1,t.getDetailInfo()}).catch(function(e){})},saveDraft:function(){var e=this,t=this.getPostData();return Object(s["wc"])(this.$route.params.gradeID,this.$route.params.uid,t).then(function(t){e.$message({type:"success",message:i["gb"]}),e.getDetailInfo()}).catch(function(e){})},getDetailInfo:function(){var e=this;return Object(s["x"])(this.$route.params.gradeID,this.$route.params.uid,"superior").then(function(t){var n=t.name,a=t.targets,r=t.workcode,i=t.self_attach_score,s=t.superior_attach_score,o=t.superior_score,c=t.need_attach_score,u=t.score_rule,d=t.stage,l=t.score_level;e.basicInfo={name:n,workcode:r,self_attach_score:i},e.targets=e.normalizeTargets(a),e.myAdditionMark=i||{},e.leaderAdditionMark=s||{},e.comments=o&&o.evaluation,e.level=l||o&&o.score_level,e.hasLeaderAdditionMark=1==c,e.rules=u,e.stage=d}).catch(function(e){})},beforeSubmitCheck:function(){var e=this;return new Promise(function(t,n){return e.hasLeaderAdditionMark&&e.leaderAdditionMark.score&&!e.leaderAdditionMark.evaluation?(e.$notify.error({title:i["Db"],message:"请填写加减分原因"}),n(!1)):e.checkTotal()?(e.$notify.error({title:i["Db"],message:"总分已经超过5分"}),n(!1)):e.shouldMapping||e.level?e.comments?t(!0):(e.$notify.error({title:i["Db"],message:"请填写评价"}),n(!1)):(e.$notify.error({title:i["Db"],message:"需要选择等级"}),n(!1))})},submit:function(){var e=this;return this.beforeSubmitCheck().then(function(){return e.$confirm("请确认无误再提交, 是否继续?",i["n"],{confirmButtonText:i["F"],cancelButtonText:i["z"],type:"warning"}).then(function(){var t=e.getPostData();return Object(s["vc"])(e.$route.params.uid,t).then(function(t){e.$message({type:"success",message:i["G"]}),e.$router.replace(Object(o["o"])(e.$route.params.gradeID))}).catch(function(e){})}).catch(function(){})}).catch(function(){})},findLevel:function(){for(var e=-1,t=0;t<this.rules.length;t++){var n=parseFloat(this.rules[t]);if(n>=this.total){e=t;break}}var a="S";if(-1==e)return a;var r=["D","C","B","A"];return a=r[e]||a,a},getPostData:function(){return{score:this.targets.map(function(e){var t=e.id,n=e.mark,a=e.desc;return{target_id:t,score:n,description:a}}),attach_score:{score:this.leaderAdditionMark.score||0,reason:this.leaderAdditionMark.evaluation||""},total_score:this.total,score_level:this.level,evaluation:this.comments}}},created:function(){this.getDetailInfo()},watch:{targets:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0},leaderAdditionMark:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0}}},u=c,d=(n("8160"),n("2877")),l=Object(d["a"])(u,a,r,!1,null,"cab27a92",null);t["default"]=l.exports},8160:function(e,t,n){"use strict";var a=n("e60e"),r=n.n(a);r.a},e60e:function(e,t,n){}}]);