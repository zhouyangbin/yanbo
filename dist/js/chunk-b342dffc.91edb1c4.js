(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b342dffc"],{"08d2":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-grade-page"},[r("section",{staticClass:"content-container"},[r("div",{staticClass:"basic-info"},[r("span",{staticClass:"label"},[e._v(e._s(e.constants.BASIC_INFO)+":")]),r("span",[r("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.LEADER_NUMBER))]),e._v("\n        / "+e._s(e.basicInfo.superior_workcode)+"   \n        "),r("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.LEADER_NAME))]),e._v("\n        / "+e._s(e.basicInfo.superior_name)+" ")]),e._v("    \n      "),r("span",{staticClass:"tip"},[e._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),r("br"),e._l(e.cardData,function(t,s){return r("card",{key:s,staticClass:"card",attrs:{readOnly:e.readOnly,placeholder:"请描述该项目标的实际完成情况",desc:e.targets[s].desc,config:e.cardConfig,data:t,index:s},on:{"update:desc":function(t){return e.$set(e.targets[s],"desc",t)}},model:{value:e.targets[s].mark,callback:function(t){e.$set(e.targets[s],"mark",t)},expression:"targets[i].mark"}})}),r("br"),e.showComments&&e.superior_score&&e.superior_score.evaluation&&e.published?r("div",[r("comments",{attrs:{readOnly:!0,comments:e.superior_score&&e.superior_score.evaluation},on:{"update:comments":function(t){return e.$set(e.superior_score&&e.superior_score,"evaluation",t)}}}),r("br")],1):e._e(),e.showMyAdditional?r("div",[r("addition-mark",{attrs:{prefixTitle:e.constants.LABEL_SELF,readOnly:e.readOnly,desc:e.myAdditionMark.evaluation,mark:e.myAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.myAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.myAdditionMark,"score",t)}}}),r("br")],1):e._e(),e.leaderAdditionMark.evaluation&&e.published?r("div",[r("addition-mark",{attrs:{readOnly:!0,prefixTitle:e.constants.LABEL_SUP,desc:e.leaderAdditionMark.evaluation,mark:e.leaderAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.leaderAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.leaderAdditionMark,"score",t)}}}),r("br")],1):e._e(),e.showTotal&&e.canEdit?r("div",[r("total-mark",{attrs:{total:e.total}}),r("br")],1):e._e(),r("div",[e.level&&e.published?r("level",{attrs:{readOnly:!0},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}}):e._e(),r("br")],1),e.canEdit?r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]),r("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v(e._s(e.constants.SUBMIT))])],1):e._e(),e.canReject&&e.published?r("el-row",{attrs:{type:"flex",justify:"center"}},[r("div",[e._v("\n        到期将默认确认结果, 如有问题可\n        "),r("el-button",{attrs:{type:"text"},on:{click:function(t){e.visible=!0}}},[e._v(e._s(e.constants.APPEAL))])],1)]):e._e(),e.cancelReject&&e.published?r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{type:"primary",round:"",size:"medium"},on:{click:e.cancel}},[e._v(e._s(e.constants.CANCEL_APPEAL))])],1):e._e(),r("reject-dialog",{attrs:{visible:e.visible},on:{close:e.getInfo,"update:visible":function(t){e.visible=t}}})],2)])},a=[],n=(r("a481"),r("cebc")),o=r("38fb"),i=r("fea5"),c=r("c9f1"),l={data:function(){return{basicInfo:{},readOnly:!1,canEdit:!1,canReject:!1,showTotal:!1,showComments:!1,cancelReject:!1,myAdditionMark:{},leaderAdditionMark:{},superior_score:{},need_attach_score:"",visible:!1,published:!1,level:"",targets:[],cardConfig:{min:0,max:5,step:.1},constants:{SUBMIT:o["Be"],SAVE_DRAFT:o["le"],APPEAL:o["i"],CANCEL_APPEAL:o["A"],LABEL_SELF:o["Oc"],LABEL_SUP:o["Sc"],LEADER_NUMBER:o["ad"],LEADER_NAME:o["Zc"],BASIC_INFO:o["p"]}}},components:{card:function(){return r.e("chunk-4b70dc2b").then(r.bind(null,"4e80"))},"addition-mark":function(){return r.e("chunk-082e0c5e").then(r.bind(null,"5923"))},"total-mark":function(){return r.e("chunk-11f6092e").then(r.bind(null,"5ea4"))},level:function(){return r.e("chunk-3bd107da").then(r.bind(null,"7bb4"))},"reject-dialog":function(){return r.e("chunk-ac2fa90c").then(r.bind(null,"4853"))},comments:function(){return r.e("chunk-38427ed5").then(r.bind(null,"f160"))}},computed:{showMyAdditional:function(){return 1==this.need_attach_score&&(this.readOnly&&this.myAdditionMark.evaluation||!this.readOnly)},total:function(){return this.superior_score&&null!=this.superior_score.score?parseFloat(this.superior_score.score):parseFloat(this.targets.map(function(e){return e.weights*(e.mark||0)}).reduce(function(e,t){return e+t},0)+(parseFloat(this.myAdditionMark.score)||0)).toFixed(2)},cardData:function(){return this.published?this.targets:this.hideLeaderInfo(this.targets)}},methods:{hideLeaderInfo:function(e){return e.map(function(e){var t=Object(n["a"])({},e);return delete t.target_superior_score,t})},saveDraft:function(){var e=this,t=this.getPostData();return Object(i["vc"])(this.$route.params.orgID,this.$route.params.id,t).then(function(t){e.$message({type:"success",message:"草稿保存成功"}),e.getDetailInfo()}).catch(function(e){})},getPostData:function(){return{score:this.targets.map(function(e){var t=e.id,r=e.mark,s=e.desc;return{target_id:t,score:r,description:s}}),attach_score:{score:this.myAdditionMark.score||0,reason:this.myAdditionMark.evaluation||""},total_score:this.total}},checkTotal:function(){return parseFloat(this.total)>5},getInfo:function(){var e=this;return Object(i["x"])(this.$route.params.orgID,this.$route.params.id,"self").then(function(t){var r=t.targets,s=t.superior_workcode,a=t.need_attach_score,n=t.stage,o=t.self_attach_score,i=t.superior_attach_score,c=t.superior_score,l=t.superior_name,u=t.score_level,d=t.score,_=t.publish_status;e.basicInfo={superior_workcode:s,superior_name:l};var f=1==_;e.published=f,e.need_attach_score=a,e.myAdditionMark=o||{},e.leaderAdditionMark=i||{},e.level=u||c&&c.score_level,e.superior_score=c,e.showComments=n>=40,e.composeData(r,n),60!=n||d||(e.showTotal=!1),f&&(e.readOnly=!0,e.canEdit=!1)}).catch(function(e){})},beforeSubmitCheck:function(){var e=this;return new Promise(function(t,r){return e.targets.some(function(e){return!e.desc})?(e.$notify.error({title:o["Db"],message:"请填写自评理由!"}),r(!0)):e.showMyAdditional&&e.myAdditionMark.score&&!e.myAdditionMark.evaluation?(e.$notify.error({title:o["Db"],message:"请填写加减分原因"}),r(!0)):e.checkTotal()?(e.$notify.error({title:o["Db"],message:"总分已经超过5分"}),r(!0)):t(!0)})},submit:function(){var e=this;return this.beforeSubmitCheck().then(function(){e.$confirm("自评分为".concat(e.total,"分，请确认无误再提交，一经提交无法修改, 是否继续?"),"提示",{confirmButtonText:o["F"],cancelButtonText:o["z"],type:"warning"}).then(function(){var t=e.getPostData();return delete t.total_score,Object(i["kc"])(e.$route.params.id,t).then(function(t){e.$message({type:"success",message:o["G"]}),e.$router.replace(c["l"])}).catch(function(e){})}).catch(function(){})}).catch(function(){})},composeData:function(e,t){switch(t){case 10:this.readOnly=!0,this.targets=e.map(function(e){return delete e.target_self_score,delete e.target_superior_score,e}),this.need_attach_score="",this.canEdit=!1,this.showTotal=!1;break;case 20:this.readOnly=!1,this.canEdit=!0,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_self_score&&e.target_self_score.score||0,e.desc=e.target_self_score&&e.target_self_score.description||"",delete e.target_self_score,delete e.target_superior_score,e});break;case 30:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_self_score&&e.target_self_score.score||0,e.desc=e.target_self_score&&e.target_self_score.description||"",e});break;case 40:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_self_score&&e.target_self_score.score||0,e.desc=e.target_self_score&&e.target_self_score.description||"",e}),this.canReject=!0,this.cancelReject=!1;break;case 50:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_self_score&&e.target_self_score.score||0,e.desc=e.target_self_score&&e.target_self_score.description||"",e}),this.canReject=!1,this.cancelReject=!0;break;default:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_self_score&&e.target_self_score.score||0,e.desc=e.target_self_score&&e.target_self_score.description||"",e}),this.canReject=!1,this.cancelReject=!1}},cancel:function(){var e=this;return Object(i["e"])({performance_user_id:this.$route.params.id}).then(function(t){e.$message({type:"success",message:"取消成功!"}),e.getInfo()}).catch(function(e){})}},created:function(){this.getInfo()}},u=l,d=(r("2e46"),r("2877")),_=Object(d["a"])(u,s,a,!1,null,"a09723d2",null);t["default"]=_.exports},"2e46":function(e,t,r){"use strict";var s=r("f9f7"),a=r.n(s);a.a},f9f7:function(e,t,r){}}]);