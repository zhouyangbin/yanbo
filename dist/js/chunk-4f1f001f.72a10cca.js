(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f1f001f"],{"36c6":function(e,t,a){},"617c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-grade-page"},[a("nav-bar",{attrs:{list:e.nav}}),a("section",{staticClass:"content-container"},[a("div",{staticClass:"basic-info"},[a("div",[a("span",{staticClass:"label"},[e._v(e._s(e.constants.BASIC_INFO)+":")]),a("span",[a("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.EMPLOYEE_WORKCODE))]),e._v("\n          / "+e._s(e.basicInfo.workcode)+"   \n          "),a("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.EMPYEE_NAME))]),e._v("\n          / "+e._s(e.basicInfo.name)+" ")]),e._v("    \n      ")]),e.needsReview?a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.passReview}},[e._v(e._s(e.constants.LABEL_CONFIRM))]),a("el-button",{on:{click:function(t){e.showReviewDia=!0}}},[e._v("返回修改")])],1):e._e()]),a("br"),e._l(e.targets,function(t,n){return a("card",{key:n,staticClass:"card",attrs:{readOnly:!e.canEdit,desc:e.targets[n].desc,placeholder:"请评价该项目的完成情况（非必填)",config:e.cardConfig,data:t,index:n},on:{"update:desc":function(t){return e.$set(e.targets[n],"desc",t)}},model:{value:e.targets[n].mark,callback:function(t){e.$set(e.targets[n],"mark",t)},expression:"targets[i].mark"}})}),a("br"),e.myAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:e.constants.LABEL_SELF,readOnly:!0,desc:e.myAdditionMark.evaluation,mark:e.myAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.myAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.myAdditionMark,"score",t)}}}),a("br")],1):e._e(),e.hasLeaderAdditionMark&&!e.inReviewStage&&(!e.canEdit&&e.leaderAdditionMark.evaluation||e.canEdit)?a("div",[a("addition-mark",{attrs:{readOnly:!e.canEdit,prefixTitle:e.constants.LABEL_SUP,desc:e.leaderAdditionMark.evaluation,mark:e.leaderAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.leaderAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.leaderAdditionMark,"score",t)}}}),a("br")],1):e._e(),!e.inReviewStage&&(!e.canEdit&&e.comments||e.canEdit)?a("comments",{attrs:{readOnly:!e.canEdit,comments:e.comments},on:{"update:comments":function(t){e.comments=t}}}):e._e(),a("br"),e.inReviewStage?e._e():a("total-mark",{attrs:{score:this.score,total:e.total}}),a("br"),e.inReviewStage?e._e():a("level",{attrs:{canEdit:e.canEdit,readOnly:e.shouldMapping||e.stage>=50,operate_status:e.operate_status,label_id:e.label_id,old_s:e.old_s},on:{update_label_id:e.set_label_id},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}}),a("br"),e.canEdit?a("el-row",{attrs:{type:"flex",justify:"center"}},[40!=e.stage?a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]):e._e(),a("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v(e._s(e.constants.SUBMIT))])],1):e._e()],2),e.showReviewDia?a("review-dialog",{attrs:{callback:e.postReviewResult,visible:e.showReviewDia},on:{"update:visible":function(t){e.showReviewDia=t}}}):e._e()],1)},r=[],i=(a("a481"),a("7f7f"),a("38fb")),s=a("fea5"),o=a("c9f1"),c={data:function(){return{myAdditionMark:{},leaderAdditionMark:{},comments:"",stage:0,hasLeaderAdditionMark:!1,rules:[],basicInfo:{},targets:[],level:"",score:"",label_id:null,cardConfig:{min:0,max:5,step:.1},nav:[{label:i["Vc"],href:o["j"]},{label:i["Nb"],href:Object(o["o"])(this.$route.params.gradeID)},{label:i["Lb"],active:!0}],constants:{SUBMIT:i["me"],SAVE_DRAFT:i["ae"],LABEL_SELF:i["Ac"],LABEL_SUP:i["Ec"],BASIC_INFO:i["m"],EMPLOYEE_WORKCODE:i["ib"],EMPYEE_NAME:i["jb"],LABEL_CONFIRM:i["ec"]},showReviewDia:!1,operate_status:!0,old_s:""}},components:{"nav-bar":function(){return a.e("chunk-6f993239").then(a.bind(null,"3208"))},card:function(){return a.e("chunk-d0cb3630").then(a.bind(null,"4e80"))},"addition-mark":function(){return a.e("chunk-99af4336").then(a.bind(null,"5923"))},"total-mark":function(){return a.e("chunk-38a3521f").then(a.bind(null,"5ea4"))},comments:function(){return a.e("chunk-38427ed5").then(a.bind(null,"f160"))},level:function(){return a.e("chunk-21512657").then(a.bind(null,"7bb4"))},"review-dialog":function(){return a.e("chunk-2d0dd770").then(a.bind(null,"8200"))}},computed:{total:function(){return parseFloat(this.targets.map(function(e){return e.weights*(e.mark||0)}).reduce(function(e,t){return e+t},0)+(parseFloat(this.leaderAdditionMark.score)||0)).toFixed(2)},shouldMapping:function(){return this.rules&&this.rules.length>0},canEdit:function(){return 30==this.stage||40==this.stage},needsReview:function(){return 5==this.stage},inReviewStage:function(){return this.stage<=20}},methods:{set_label_id:function(e){this.label_id=e},normalizeTargets:function(e){return e.map(function(e){return e.mark=e.target_superior_score&&parseFloat(e.target_superior_score.score)||0,e.desc=e.target_superior_score&&e.target_superior_score.description||"",e})},checkTotal:function(){return parseFloat(this.total)>5},passReview:function(){this.postReviewResult(2)},postReviewResult:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={performance_user_id:this.$route.params.uid,type:e};return 1==e&&(n.reason=a),Object(s["Tb"])(n).then(function(e){return t.showReviewDia=!1,t.getDetailInfo()}).catch(function(e){})},saveDraft:function(){var e=this,t=this.getPostData();return Object(s["Yb"])(this.$route.params.gradeID,this.$route.params.uid,t).then(function(t){e.$message({type:"success",message:i["ab"]}),e.getDetailInfo()}).catch(function(e){})},getDetailInfo:function(){var e=this;return Object(s["p"])(this.$route.params.gradeID,this.$route.params.uid,"superior").then(function(t){var a=t.name,n=t.targets,r=t.workcode,i=t.self_attach_score,s=t.self_score,o=t.superior_attach_score,c=t.superior_score,l=t.need_attach_score,u=t.score_rule,d=t.stage,f=t.score_level,h=t.operate_status,_=t._s;e.basicInfo={name:a,workcode:r,self_attach_score:i},e.old_s=_,e.targets=e.normalizeTargets(n),e.operate_status=h,e.myAdditionMark=i||{},e.leaderAdditionMark=o||{},e.comments=c&&c.evaluation,e.level=f||c&&c.score_level,e.hasLeaderAdditionMark=1==l,e.rules=u,e.stage=d,e.score=s.score,e.label_id=parseInt(c.label_id)||null}).catch(function(e){})},beforeSubmitCheck:function(){var e=this;return new Promise(function(t,a){return e.hasLeaderAdditionMark&&e.leaderAdditionMark.score&&!e.leaderAdditionMark.evaluation?(e.$notify.error({title:i["zb"],message:"请填写加减分原因"}),a(!1)):e.checkTotal()?(e.$notify.error({title:i["zb"],message:"总分已经超过5分"}),a(!1)):e.shouldMapping||e.level?e.comments?e.label_id||e.level?t(!0):(e.$notify.error({title:i["zb"],message:"请选择标签"}),a(!1)):(e.$notify.error({title:i["zb"],message:"请填写评价"}),a(!1)):(e.$notify.error({title:i["zb"],message:"需要选择等级"}),a(!1))})},submit:function(){var e=this;return this.beforeSubmitCheck().then(function(){return e.$confirm("提交后仍可修改评分，是否继续？",i["k"],{confirmButtonText:i["C"],cancelButtonText:i["x"],type:"warning"}).then(function(){var t=e.getPostData();return Object(s["Xb"])(e.$route.params.uid,t).then(function(t){e.$message({type:"success",message:i["D"]}),e.$router.replace(Object(o["q"])(e.$route.params.gradeID))}).catch(function(e){})}).catch(function(){})}).catch(function(){})},findLevel:function(){for(var e=-1,t=0;t<this.rules.length;t++){var a=parseFloat(this.rules[t]);if(a>=this.total){e=t;break}}var n="S";if(-1==e)return n;var r=["D","C","B","A"];return n=r[e]||n,n},getPostData:function(){return{score:this.targets.map(function(e){var t=e.id,a=e.mark,n=e.desc;return{target_id:t,score:a,description:n}}),attach_score:{score:this.leaderAdditionMark.score||0,reason:this.leaderAdditionMark.evaluation||""},total_score:this.total,score_level:this.level,evaluation:this.comments,label_id:this.label_id}}},created:function(){this.getDetailInfo()},watch:{targets:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0},leaderAdditionMark:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0}}},l=c,u=(a("d915"),a("2877")),d=Object(u["a"])(l,n,r,!1,null,"7394b35e",null);t["default"]=d.exports},d915:function(e,t,a){"use strict";var n=a("36c6"),r=a.n(n);r.a}}]);