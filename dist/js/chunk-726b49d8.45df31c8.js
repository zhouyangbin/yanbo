(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-726b49d8"],{"08d2":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"my-grade-page"},[s("section",{staticClass:"content-container"},[s("div",{staticClass:"basic-info"},[s("span",{staticClass:"label"},[e._v(e._s(e.constants.BASIC_INFO)+":")]),s("span",[s("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.LEADER_NUMBER))]),e._v("\n        / "+e._s(e.basicInfo.superior_workcode)+"   \n        "),s("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.LEADER_NAME))]),e._v("\n        / "+e._s(e.basicInfo.superior_name)+" ")]),e._v("    \n      "),s("span",{staticClass:"tip"},[e._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),s("br"),e._l(e.cardData,function(t,r){return s("card",{key:r,staticClass:"card",attrs:{readOnly:e.readOnly,placeholder:"请描述该项目标的实际完成情况",desc:e.targets[r].desc,config:e.cardConfig,data:t,index:r},on:{"update:desc":function(t){return e.$set(e.targets[r],"desc",t)}},model:{value:e.targets[r].mark,callback:function(t){e.$set(e.targets[r],"mark",t)},expression:"targets[i].mark"}})}),s("br"),e.showComments&&e.superior_score&&e.superior_score.evaluation&&e.published?s("div",[s("comments",{attrs:{readOnly:!0,comments:e.superior_score&&e.superior_score.evaluation},on:{"update:comments":function(t){return e.$set(e.superior_score&&e.superior_score,"evaluation",t)}}}),s("br")],1):e._e(),e.showMyAdditional?s("div",[s("addition-mark",{attrs:{prefixTitle:e.constants.LABEL_SELF,readOnly:e.readOnly,desc:e.myAdditionMark.evaluation,mark:e.myAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.myAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.myAdditionMark,"score",t)}}}),s("br")],1):e._e(),e.leaderAdditionMark.evaluation&&e.published?s("div",[s("addition-mark",{attrs:{readOnly:!0,prefixTitle:e.constants.LABEL_SUP,desc:e.leaderAdditionMark.evaluation,mark:e.leaderAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.leaderAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.leaderAdditionMark,"score",t)}}}),s("br")],1):e._e(),e.showTotal&&e.canEdit?s("div",[s("total-mark",{attrs:{total:e.total,score:e.total,high_level_show:e.high_level_show}}),s("br")],1):e._e(),e.showTotal&&!e.canEdit?s("div",[s("total-mark",{attrs:{total:e.total,score:e.self_score,high_level_show:e.high_level_show}}),s("br")],1):e._e(),s("div",[e.level&&e.published?s("level",{attrs:{readOnly:!0},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}}):e._e(),s("br")],1),e.canEdit?s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]),s("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v(e._s(e.constants.SUBMIT))])],1):e._e(),e.canReject&&e.published?s("el-row",{attrs:{type:"flex",justify:"center"}},[s("div",[e._v("\n        到期将默认确认结果, 如有问题可\n        "),s("el-button",{attrs:{type:"text"},on:{click:function(t){e.visible=!0}}},[e._v(e._s(e.constants.APPEAL))])],1)]):e._e(),e.cancelReject&&e.published?s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-button",{attrs:{type:"primary",round:"",size:"medium"},on:{click:e.cancel}},[e._v(e._s(e.constants.CANCEL_APPEAL))])],1):e._e(),s("reject-dialog",{attrs:{visible:e.visible},on:{close:e.getInfo,"update:visible":function(t){e.visible=t}}})],2)])},a=[],n=(s("a481"),s("cebc")),o=s("38fb"),i=s("fea5"),c=s("c9f1"),l={data:function(){return{basicInfo:{},readOnly:!1,canEdit:!1,canReject:!1,showTotal:!1,showComments:!1,cancelReject:!1,myAdditionMark:{},leaderAdditionMark:{},superior_score:{},need_attach_score:"",visible:!1,published:!1,level:"",targets:[],cardConfig:{min:0,max:5,step:.1},constants:{SUBMIT:o["ee"],SAVE_DRAFT:o["Sd"],APPEAL:o["g"],CANCEL_APPEAL:o["x"],LABEL_SELF:o["xc"],LABEL_SUP:o["Bc"],LEADER_NUMBER:o["Ic"],LEADER_NAME:o["Hc"],BASIC_INFO:o["m"]},high_level_show:0,self_score:0}},components:{card:function(){return s.e("chunk-e37e8ec6").then(s.bind(null,"4e80"))},"addition-mark":function(){return s.e("chunk-99af4336").then(s.bind(null,"5923"))},"total-mark":function(){return s.e("chunk-4d4a5936").then(s.bind(null,"5ea4"))},level:function(){return s.e("chunk-202ff10a").then(s.bind(null,"7bb4"))},"reject-dialog":function(){return s.e("chunk-ac2fa90c").then(s.bind(null,"4853"))},comments:function(){return s.e("chunk-38427ed5").then(s.bind(null,"f160"))}},computed:{showMyAdditional:function(){return 1==this.need_attach_score&&(this.readOnly&&this.myAdditionMark.evaluation||!this.readOnly)},total:function(){return this.superior_score&&null!=this.superior_score.score?parseFloat(this.superior_score.score):parseFloat(this.targets.map(function(e){return e.weights*(e.mark||0)}).reduce(function(e,t){return e+t},0)+(parseFloat(this.myAdditionMark.score)||0)).toFixed(2)},score:function(){return(parseFloat(this.myAdditionMark.score)||0).toFixed(2)},cardData:function(){return this.published?this.targets:this.hideLeaderInfo(this.targets)}},methods:{hideLeaderInfo:function(e){return e.map(function(e){var t=Object(n["a"])({},e);return delete t.target_superior_score,t})},saveDraft:function(){var e=this,t=this.getPostData();return Object(i["Lb"])(this.$route.params.orgID,this.$route.params.id,t).then(function(t){e.$message({type:"success",message:"草稿保存成功"}),e.getDetailInfo()}).catch(function(e){})},getPostData:function(){return{score:this.targets.map(function(e){var t=e.id,s=e.mark,r=e.desc;return{target_id:t,score:s,description:r}}),attach_score:{score:this.myAdditionMark.score||0,reason:this.myAdditionMark.evaluation||""},total_score:this.total}},checkTotal:function(){return parseFloat(this.total)>5},getInfo:function(){var e=this;return Object(i["p"])(this.$route.params.orgID,this.$route.params.id,"self").then(function(t){var s=t.targets,r=t.superior_workcode,a=t.need_attach_score,n=t.stage,o=t.self_attach_score,i=t.superior_attach_score,c=t.superior_score,l=t.superior_name,u=t.score_level,d=t.score,_=t.publish_status,h=t.self_score;e.basicInfo={superior_workcode:r,superior_name:l};var f=1==_;e.published=f,e.need_attach_score=a,e.myAdditionMark=o||{},e.leaderAdditionMark=i||{},e.level=u||c&&c.score_level,e.superior_score=c,e.showComments=n>=40,e.self_score=h.score||0,e.composeData(s,n),60!=n||d||(e.showTotal=!1),f&&(e.readOnly=!0,e.canEdit=!1)}).catch(function(e){})},beforeSubmitCheck:function(){var e=this;return new Promise(function(t,s){return e.targets.some(function(e){return!e.desc})?(e.$notify.error({title:o["wb"],message:"请填写目标的实际完成情况!"}),s(!0)):e.showMyAdditional&&e.myAdditionMark.score&&!e.myAdditionMark.evaluation?(e.$notify.error({title:o["wb"],message:"请填写加减分原因"}),s(!0)):e.checkTotal()?(e.$notify.error({title:o["wb"],message:"总分已经超过5分"}),s(!0)):t(!0)})},submit:function(){var e=this;return this.beforeSubmitCheck().then(function(){e.$confirm("自评分为".concat(e.total,"分，请确认无误再提交，一经提交无法修改, 是否继续?"),"提示",{confirmButtonText:o["B"],cancelButtonText:o["w"],type:"warning"}).then(function(){var t=e.getPostData();return delete t.total_score,Object(i["Db"])(e.$route.params.id,t).then(function(t){e.$message({type:"success",message:o["C"]}),e.$router.replace(c["j"])}).catch(function(e){})}).catch(function(){})}).catch(function(){})},composeData:function(e,t){switch(t){case 10:this.readOnly=!0,this.targets=e.map(function(e){return delete e.target_self_score,delete e.target_superior_score,e}),this.need_attach_score="",this.canEdit=!1,this.showTotal=!1;break;case 20:this.readOnly=!1,this.canEdit=!0,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_self_score&&e.target_self_score.score||0,e.desc=e.target_self_score&&e.target_self_score.description||"",delete e.target_self_score,delete e.target_superior_score,e});break;case 30:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_self_score&&e.target_self_score.score||0,e.desc=e.target_self_score&&e.target_self_score.description||"",e});break;case 40:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_self_score&&e.target_self_score.score||0,e.desc=e.target_self_score&&e.target_self_score.description||"",e}),this.canReject=!0,this.cancelReject=!1;break;case 50:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_self_score&&e.target_self_score.score||0,e.desc=e.target_self_score&&e.target_self_score.description||"",e}),this.canReject=!1,this.cancelReject=!0;break;default:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=e.map(function(e){return e.mark=e.target_self_score&&e.target_self_score.score||0,e.desc=e.target_self_score&&e.target_self_score.description||"",e}),this.canReject=!1,this.cancelReject=!1}},cancel:function(){var e=this;return Object(i["d"])({performance_user_id:this.$route.params.id}).then(function(t){e.$message({type:"success",message:"取消成功!"}),e.getInfo()}).catch(function(e){})}},created:function(){this.getInfo()}},u=l,d=(s("6864"),s("2877")),_=Object(d["a"])(u,r,a,!1,null,"552d92c2",null);t["default"]=_.exports},3565:function(e,t,s){},6864:function(e,t,s){"use strict";var r=s("3565"),a=s.n(r);a.a}}]);