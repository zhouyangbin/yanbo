(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-990bbb36"],{"26fa":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-grade-page"},[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container"},[n("div",{staticClass:"basic-info"},[n("span",{staticClass:"label"},[t._v(t._s(t.constants.BASIC_INFO)+":")]),n("span",[n("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.LEADER_NUMBER))]),t._v(" / "+t._s(t.basicInfo.superior_workcode)+"   \n        "),n("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.LEADER_NAME))]),t._v(" / "+t._s(t.basicInfo.superior_name))]),t._v("    \n      "),n("span",{staticClass:"tip"},[t._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),n("br"),t._l(t.targets,function(e,a){return n("card",{key:a,staticClass:"card",attrs:{readOnly:t.readOnly,config:t.cardConfig,data:e,index:a},model:{value:t.targets[a].mark,callback:function(e){t.$set(t.targets[a],"mark",e)},expression:"targets[i].mark"}})}),n("br"),t.showComments?n("div",[n("comments",{attrs:{readOnly:!0,comments:t.superior_score&&t.superior_score.evaluation},on:{"update:comments":function(e){t.$set(t.superior_score&&t.superior_score,"evaluation",e)}}}),n("br")],1):t._e(),t.showMyAdditional?n("div",[n("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SELF,readOnly:t.readOnly,desc:t.myAdditionMark.evaluation,mark:t.myAdditionMark.score},on:{"update:desc":function(e){t.$set(t.myAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.myAdditionMark,"score",e)}}}),n("br")],1):t._e(),t.leaderAdditionMark.evaluation?n("div",[n("addition-mark",{attrs:{readOnly:!0,prefixTitle:t.constants.LABEL_SUP,desc:t.leaderAdditionMark.evaluation,mark:t.leaderAdditionMark.score},on:{"update:desc":function(e){t.$set(t.leaderAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.leaderAdditionMark,"score",e)}}}),n("br")],1):t._e(),t.showTotal?n("div",[n("total-mark",{attrs:{total:t.total}}),n("br")],1):t._e(),n("div",[t.level?n("level",{attrs:{readOnly:!0},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}}):t._e(),n("br")],1),t.canEdit?n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.saveDraft}},[t._v(t._s(t.constants.SAVE_DRAFT))]),n("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v(t._s(t.constants.SUBMIT))])],1):t._e(),t.canReject?n("el-row",{attrs:{type:"flex",justify:"center"}},[n("div",[t._v("\n        到期将默认确认结果, 如有问题可\n        "),n("el-button",{attrs:{type:"text"},on:{click:function(e){t.visible=!0}}},[t._v(t._s(t.constants.APPEAL))])],1)]):t._e(),t.cancelReject?n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{attrs:{type:"primary",round:"",size:"medium"},on:{click:t.cancel}},[t._v(t._s(t.constants.CANCEL_APPEAL))])],1):t._e(),n("reject-dialog",{attrs:{visible:t.visible},on:{close:t.getInfo,"update:visible":function(e){t.visible=e}}})],2)],1)},r=[],s=n("38fb"),o=n("fea5"),i=n("c9f1"),c={data:function(){return{basicInfo:{},readOnly:!1,canEdit:!1,canReject:!1,showTotal:!1,showComments:!1,cancelReject:!1,myAdditionMark:{},leaderAdditionMark:{},superior_score:{},need_attach_score:"",visible:!1,level:"",targets:[],cardConfig:{min:0,max:5,step:.1},nav:[{label:s["Fc"],href:i["d"]},{label:"评分详情",active:!0}],constants:{SUBMIT:s["xd"],SAVE_DRAFT:s["nd"],APPEAL:s["d"],CANCEL_APPEAL:s["n"],LABEL_SELF:s["fc"],LABEL_SUP:s["ic"],LEADER_NUMBER:s["qc"],LEADER_NAME:s["pc"],BASIC_INFO:s["i"]}}},components:{"nav-bar":function(){return n.e("chunk-5a85c387").then(n.bind(null,"3208"))},pagination:function(){return n.e("chunk-84bbef5e").then(n.bind(null,"486f"))},card:function(){return n.e("chunk-7dbdc3c2").then(n.bind(null,"4e80"))},"addition-mark":function(){return n.e("chunk-3b2c2f9e").then(n.bind(null,"5923"))},"total-mark":function(){return n.e("chunk-2c44f33b").then(n.bind(null,"5ea4"))},level:function(){return n.e("chunk-011ae294").then(n.bind(null,"7bb4"))},"reject-dialog":function(){return n.e("chunk-8bc141e6").then(n.bind(null,"4853"))},comments:function(){return n.e("chunk-088f9380").then(n.bind(null,"f160"))}},computed:{showMyAdditional:function(){return 1==this.need_attach_score},total:function(){return this.superior_score&&null!=this.superior_score.score?parseFloat(this.superior_score.score):parseFloat(this.targets.map(function(t){return t.weights*(t.mark||0)}).reduce(function(t,e){return t+e},0)+(parseFloat(this.myAdditionMark.score)||0)).toFixed(2)}},methods:{saveDraft:function(){var t=this,e=this.getPostData();return Object(o["db"])(this.$route.params.orgID,this.$route.params.id,e).then(function(e){t.$message({type:"success",message:"草稿保存成功"}),t.getDetailInfo()}).catch(function(t){})},getPostData:function(){return{score:this.targets.map(function(t){var e=t.id,n=t.mark;return{target_id:e,score:n}}),attach_score:{score:this.myAdditionMark.score||0,reason:this.myAdditionMark.evaluation||""},total_score:this.total}},checkTotal:function(){return parseFloat(this.total)>5},getInfo:function(){var t=this;return Object(o["l"])(this.$route.params.orgID,this.$route.params.id,"self").then(function(e){var n=e.targets,a=e.superior_workcode,r=e.need_attach_score,s=e.stage,o=e.self_attach_score,i=e.superior_attach_score,c=e.superior_score,l=e.superior_name,u=e.score_level,d=e.score;t.basicInfo={superior_workcode:a,superior_name:l},t.need_attach_score=r,t.myAdditionMark=o||{},t.leaderAdditionMark=i||{},t.level=u||c&&c.score_level,t.superior_score=c,t.showComments=s>=40,t.composeData(n,s),60!=s||d||(t.showTotal=!1)}).catch(function(t){})},beforeSubmitCheck:function(){var t=this;return new Promise(function(e,n){return t.showMyAdditional&&t.myAdditionMark.score&&!t.myAdditionMark.evaluation?(t.$notify.error({title:s["hb"],message:"请填写加减分原因"}),n(!0)):t.checkTotal()?(t.$notify.error({title:s["hb"],message:"总分已经超过5分"}),n(!0)):e(!0)})},submit:function(){var t=this;return this.beforeSubmitCheck().then(function(){t.$confirm("自评分为".concat(t.total,"分，请确认无误再提交，一经提交无法修改, 是否继续?"),"提示",{confirmButtonText:s["p"],cancelButtonText:s["m"],type:"warning"}).then(function(){var e=t.getPostData();return delete e.total_score,Object(o["Y"])(t.$route.params.id,e).then(function(e){t.$message({type:"success",message:s["q"]}),t.$router.replace(i["d"])}).catch(function(t){})}).catch(function(){})}).catch(function(){})},composeData:function(t,e){switch(e){case 10:this.readOnly=!0,this.targets=t.map(function(t){return delete t.target_self_score,delete t.target_superior_score,t}),this.need_attach_score="",this.canEdit=!1,this.showTotal=!1;break;case 20:this.readOnly=!1,this.canEdit=!0,this.showTotal=!0,this.targets=t.map(function(t){return t.mark=t.target_self_score&&t.target_self_score.score||0,delete t.target_self_score,delete t.target_superior_score,t});break;case 30:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=t.map(function(t){return t.mark=t.target_self_score&&t.target_self_score.score||0,t});break;case 40:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=t.map(function(t){return t.mark=t.target_self_score&&t.target_self_score.score||0,t}),this.canReject=!0,this.cancelReject=!1;break;case 50:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=t.map(function(t){return t.mark=t.target_self_score&&t.target_self_score.score||0,t}),this.canReject=!1,this.cancelReject=!0;break;default:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=t.map(function(t){return t.mark=t.target_self_score&&t.target_self_score.score||0,t}),this.canReject=!1,this.cancelReject=!1}},cancel:function(){var t=this;return Object(o["c"])({performance_user_id:this.$route.params.id}).then(function(e){t.$message({type:"success",message:"取消成功!"}),t.getInfo()}).catch(function(t){})}},created:function(){this.getInfo()}},l=c,u=(n("7e3e"),n("2877")),d=Object(u["a"])(l,a,r,!1,null,"d251dde4",null);d.options.__file="index.vue";e["default"]=d.exports},"7e3e":function(t,e,n){"use strict";var a=n("cf71"),r=n.n(a);r.a},cf71:function(t,e,n){}}]);