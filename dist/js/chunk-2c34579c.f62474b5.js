(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c34579c"],{"5cf3":function(e,t,s){"use strict";var r=s("60e4"),a=s.n(r);a.a},"60e4":function(e,t,s){},df36:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"my-grade-page"},[s("nav-bar",{attrs:{list:e.nav}}),s("br"),s("section",{staticClass:"content-container"},[s("div",{staticClass:"basic-info"},[s("span",{staticClass:"label"},[e._v(e._s(e.constants.BASIC_INFO)+":")]),s("span",[s("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.LEADER_NUMBER))]),e._v("\n        / "+e._s(e.basicInfo.superior_workcode)+"   \n        "),s("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.LEADER_NAME))]),e._v("\n        / "+e._s(e.basicInfo.superior_name)+" ")]),e._v("    \n      "),s("span",{staticClass:"tip"},[e._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),s("br"),e._l(e.cardData,function(t,r){return s("card",{key:r,staticClass:"card",attrs:{readOnly:e.readOnly,placeholder:"请描述该项目标的实际完成情况",desc:e.targets[r].desc,config:e.cardConfig,data:t,index:r},on:{"update:desc":function(t){return e.$set(e.targets[r],"desc",t)}},model:{value:e.targets[r].mark,callback:function(t){e.$set(e.targets[r],"mark",t)},expression:"targets[i].mark"}})}),s("br"),e.superior_score&&e.superior_score.evaluation?s("div",[s("comments",{attrs:{readOnly:!0,comments:e.superior_score&&e.superior_score.evaluation},on:{"update:comments":function(t){return e.$set(e.superior_score&&e.superior_score,"evaluation",t)}}}),s("br")],1):e._e(),e.showMyAdditional?s("div",[s("addition-mark",{attrs:{prefixTitle:e.constants.LABEL_SELF,readOnly:e.readOnly,desc:e.myAdditionMark.evaluation,mark:e.myAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.myAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.myAdditionMark,"score",t)}}}),s("br")],1):e._e(),e.leaderAdditionMark.evaluation?s("div",[s("addition-mark",{attrs:{readOnly:!0,prefixTitle:e.constants.LABEL_SUP,desc:e.leaderAdditionMark.evaluation,mark:e.leaderAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.leaderAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.leaderAdditionMark,"score",t)}}}),s("br")],1):e._e(),e.showTotal&&!e.canEdit?s("div",[s("total-mark",{attrs:{total:e.total,score:e.self_score,high_level_show:e.high_level_show}}),s("br")],1):e._e(),s("div",[e.level?s("level",{attrs:{readOnly:!0,old_s:!0,label_id:e.label_id},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}}):e._e(),s("br")],1)],2)],1)},a=[],n=(s("a481"),s("cebc")),i=s("38fb"),o=s("fea5"),c=s("c9f1"),l={data:function(){return{label_id:null,nav:[{label:i["Vc"],href:c["j"]},{label:i["Nb"],href:Object(c["o"])(this.$route.params.orgID)},{label:"隔级详情",active:!0}],basicInfo:{},readOnly:!1,canEdit:!1,canReject:!1,showTotal:!1,showComments:!1,cancelReject:!1,myAdditionMark:{},leaderAdditionMark:{},superior_score:{},need_attach_score:"",visible:!1,published:!1,level:"",targets:[],cardConfig:{min:0,max:5,step:.1},constants:{SUBMIT:i["me"],SAVE_DRAFT:i["ae"],APPEAL:i["g"],CANCEL_APPEAL:i["y"],LABEL_SELF:i["Ac"],LABEL_SUP:i["Ec"],LEADER_NUMBER:i["Lc"],LEADER_NAME:i["Kc"],BASIC_INFO:i["m"]},high_level_show:0,self_score:0}},components:{"nav-bar":function(){return s.e("chunk-d5094d72").then(s.bind(null,"3208"))},card:function(){return s.e("chunk-d0cb3630").then(s.bind(null,"4e80"))},"addition-mark":function(){return s.e("chunk-99af4336").then(s.bind(null,"5923"))},"total-mark":function(){return s.e("chunk-1ca1eee4").then(s.bind(null,"5ea4"))},level:function(){return s.e("chunk-21512657").then(s.bind(null,"7bb4"))},comments:function(){return s.e("chunk-38427ed5").then(s.bind(null,"f160"))}},computed:{showMyAdditional:function(){return 1==this.need_attach_score&&(this.readOnly&&this.myAdditionMark.evaluation||!this.readOnly)},total:function(){return this.superior_score&&null!=this.superior_score.score?parseFloat(this.superior_score.score):parseFloat(this.targets.map(function(e){return e.weights*(e.mark||0)}).reduce(function(e,t){return e+t},0)+(parseFloat(this.myAdditionMark.score)||0)).toFixed(2)},score:function(){return(parseFloat(this.myAdditionMark.score)||0).toFixed(2)},cardData:function(){return this.published?this.targets:this.hideLeaderInfo(this.targets)}},methods:{set_label_id:function(e){this.label_id=e},hideLeaderInfo:function(e){return e.map(function(e){var t=Object(n["a"])({},e);return t})},saveDraft:function(){var e=this,t=this.getPostData();return Object(o["Yb"])(this.$route.params.orgID,this.$route.params.id,t).then(function(t){e.$message({type:"success",message:"草稿保存成功"}),e.getDetailInfo()}).catch(function(e){})},getPostData:function(){return{score:this.targets.map(function(e){var t=e.id,s=e.mark,r=e.desc;return{target_id:t,score:s,description:r}}),attach_score:{score:this.myAdditionMark.score||0,reason:this.myAdditionMark.evaluation||""},total_score:this.total,score_level:this.level,evaluation:this.comments}},checkTotal:function(){return parseFloat(this.total)>5},getInfo:function(){var e=this;return Object(o["q"])(this.$route.params.performanceId,this.$route.params.id).then(function(t){var s=t.submit_targets,r=t.superior_workcode,a=t.need_attach_score,n=t.stage,i=t.self_attach_score,o=t.superior_attach_score,c=t.superior_score,l=t.superior_name,u=t.score_level,d=t.score,_=t.publish_status,h=t.self_submit_score;e.basicInfo={superior_workcode:r,superior_name:l};var f=1==_;e.published=f,e.need_attach_score=a,e.myAdditionMark=i||{},e.high_level_show=null!=o?o.score:null,e.leaderAdditionMark=o||{},e.level=u||c&&c.score_level,e.superior_score=c,e.showComments=n>=40,e.self_score=null!=h?h.score:0,e.composeData(s,n),60!=n||d||(e.showTotal=!1),f&&(e.readOnly=!0,e.canEdit=!0),e.label_id=parseInt(c.label_id)||null}).catch(function(e){})},beforeSubmitCheck:function(){var e=this;return new Promise(function(t,s){return e.targets.some(function(e){return!e.desc})?(e.$notify.error({title:i["zb"],message:"请填写目标的实际完成情况!"}),s(!0)):e.showMyAdditional&&e.myAdditionMark.score&&!e.myAdditionMark.evaluation?(e.$notify.error({title:i["zb"],message:"请填写加减分原因"}),s(!0)):e.checkTotal()?(e.$notify.error({title:i["zb"],message:"总分已经超过5分"}),s(!0)):t(!0)})},submit:function(){var e=this;return this.beforeSubmitCheck().then(function(){e.$confirm("自评分为".concat(e.total,"分，请确认无误再提交，一经提交无法修改, 是否继续?"),"提示",{confirmButtonText:i["C"],cancelButtonText:i["x"],type:"warning"}).then(function(){var t=e.getPostData();return delete t.total_score,Object(o["Qb"])(e.$route.params.id,t).then(function(t){e.$message({type:"success",message:i["D"]}),e.$router.replace(c["l"])}).catch(function(e){})}).catch(function(){})}).catch(function(){})},composeData:function(e,t){switch(t){case 10:this.readOnly=!0,this.targets=e.map(function(e){return delete e.target_submit_self_score,delete e.target_submit_superior_score,e}),this.need_attach_score="",this.canEdit=!1,this.showTotal=!1;break;case 20:this.readOnly=!0,this.canEdit=!0,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_submit_self_score&&e.target_submit_self_score.score||0,e.desc=e.target_submit_self_score&&e.target_submit_self_score.description||"",delete e.target_submit_self_score,delete e.target_submit_superior_score,e});break;case 30:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_submit_self_score&&e.target_submit_self_score.score||0,e.desc=e.target_submit_self_score&&e.target_submit_self_score.description||"",e});break;case 40:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_submit_self_score&&e.target_submit_self_score.score||0,e.desc=e.target_submit_self_score&&e.target_submit_self_score.description||"",e}),this.canReject=!0,this.cancelReject=!1;break;case 50:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_submit_self_score&&e.target_submit_self_score.score||0,e.desc=e.target_submit_self_score&&e.target_submit_self_score.description||"",e}),this.canReject=!1,this.cancelReject=!0;break;default:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_submit_self_score&&e.target_submit_self_score.score||0,e.desc=e.target_submit_self_score&&e.target_submit_self_score.description||"",e}),this.canReject=!1,this.cancelReject=!1}},cancel:function(){var e=this;return Object(o["d"])({performance_user_id:this.$route.params.id}).then(function(t){e.$message({type:"success",message:"取消成功!"}),e.getInfo()}).catch(function(e){})}},created:function(){this.getInfo()}},u=l,d=(s("5cf3"),s("2877")),_=Object(d["a"])(u,r,a,!1,null,"8ce7b284",null);t["default"]=_.exports}}]);