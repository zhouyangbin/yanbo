(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc3e253c"],{"08d2":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-grade-page"},[r("section",{staticClass:"content-container"},[r("div",{staticClass:"basic-info"},[r("span",{staticClass:"label"},[t._v(t._s(t.constants.BASIC_INFO)+":")]),r("span",[r("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.LEADER_NUMBER))]),t._v(" / "+t._s(t.basicInfo.superior_workcode)+"   \n        "),r("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.LEADER_NAME))]),t._v(" / "+t._s(t.basicInfo.superior_name))]),t._v("    \n      "),r("span",{staticClass:"tip"},[t._v("注: 若上级姓名工号与实际不符, 请联系HR")])]),r("br"),t._l(t.targets,function(e,s){return r("card",{key:s,staticClass:"card",attrs:{readOnly:t.readOnly,placeholder:"请描述该项目标的实际完成情况",desc:t.targets[s].desc,config:t.cardConfig,data:e,index:s},on:{"update:desc":function(e){t.$set(t.targets[s],"desc",e)}},model:{value:t.targets[s].mark,callback:function(e){t.$set(t.targets[s],"mark",e)},expression:"targets[i].mark"}})}),r("br"),t.showComments?r("div",[r("comments",{attrs:{readOnly:!0,comments:t.superior_score&&t.superior_score.evaluation},on:{"update:comments":function(e){t.$set(t.superior_score&&t.superior_score,"evaluation",e)}}}),r("br")],1):t._e(),t.showMyAdditional?r("div",[r("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SELF,readOnly:t.readOnly,desc:t.myAdditionMark.evaluation,mark:t.myAdditionMark.score},on:{"update:desc":function(e){t.$set(t.myAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.myAdditionMark,"score",e)}}}),r("br")],1):t._e(),t.leaderAdditionMark.evaluation?r("div",[r("addition-mark",{attrs:{readOnly:!0,prefixTitle:t.constants.LABEL_SUP,desc:t.leaderAdditionMark.evaluation,mark:t.leaderAdditionMark.score},on:{"update:desc":function(e){t.$set(t.leaderAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.leaderAdditionMark,"score",e)}}}),r("br")],1):t._e(),t.showTotal?r("div",[r("total-mark",{attrs:{total:t.total}}),r("br")],1):t._e(),r("div",[t.level?r("level",{attrs:{readOnly:!0},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}}):t._e(),r("br")],1),t.canEdit?r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.saveDraft}},[t._v(t._s(t.constants.SAVE_DRAFT))]),r("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v(t._s(t.constants.SUBMIT))])],1):t._e(),t.canReject?r("el-row",{attrs:{type:"flex",justify:"center"}},[r("div",[t._v("\n        到期将默认确认结果, 如有问题可\n        "),r("el-button",{attrs:{type:"text"},on:{click:function(e){t.visible=!0}}},[t._v(t._s(t.constants.APPEAL))])],1)]):t._e(),t.cancelReject?r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{type:"primary",round:"",size:"medium"},on:{click:t.cancel}},[t._v(t._s(t.constants.CANCEL_APPEAL))])],1):t._e(),r("reject-dialog",{attrs:{visible:t.visible},on:{close:t.getInfo,"update:visible":function(e){t.visible=e}}})],2)])},n=[],a=(r("a481"),r("38fb")),o=r("fea5"),c=r("c9f1"),i={data:function(){return{basicInfo:{},readOnly:!1,canEdit:!1,canReject:!1,showTotal:!1,showComments:!1,cancelReject:!1,myAdditionMark:{},leaderAdditionMark:{},superior_score:{},need_attach_score:"",visible:!1,level:"",targets:[],cardConfig:{min:0,max:5,step:.1},constants:{SUBMIT:a["Td"],SAVE_DRAFT:a["Id"],APPEAL:a["f"],CANCEL_APPEAL:a["v"],LABEL_SELF:a["rc"],LABEL_SUP:a["uc"],LEADER_NUMBER:a["Bc"],LEADER_NAME:a["Ac"],BASIC_INFO:a["l"]}}},components:{card:function(){return r.e("chunk-b475d89a").then(r.bind(null,"4e80"))},"addition-mark":function(){return r.e("chunk-6edce374").then(r.bind(null,"5923"))},"total-mark":function(){return r.e("chunk-aa59bd64").then(r.bind(null,"5ea4"))},level:function(){return r.e("chunk-011ae294").then(r.bind(null,"7bb4"))},"reject-dialog":function(){return r.e("chunk-84ddb0ec").then(r.bind(null,"4853"))},comments:function(){return r.e("chunk-65cc5e70").then(r.bind(null,"f160"))}},computed:{showMyAdditional:function(){return 1==this.need_attach_score},total:function(){return this.superior_score&&null!=this.superior_score.score?parseFloat(this.superior_score.score):parseFloat(this.targets.map(function(t){return t.weights*(t.mark||0)}).reduce(function(t,e){return t+e},0)+(parseFloat(this.myAdditionMark.score)||0)).toFixed(2)}},methods:{saveDraft:function(){var t=this,e=this.getPostData();return Object(o["yb"])(this.$route.params.orgID,this.$route.params.id,e).then(function(e){t.$message({type:"success",message:"草稿保存成功"}),t.getDetailInfo()}).catch(function(t){})},getPostData:function(){return{score:this.targets.map(function(t){var e=t.id,r=t.mark,s=t.desc;return{target_id:e,score:r,description:s}}),attach_score:{score:this.myAdditionMark.score||0,reason:this.myAdditionMark.evaluation||""},total_score:this.total}},checkTotal:function(){return parseFloat(this.total)>5},getInfo:function(){var t=this;return Object(o["n"])(this.$route.params.orgID,this.$route.params.id,"self").then(function(e){var r=e.targets,s=e.superior_workcode,n=e.need_attach_score,a=e.stage,o=e.self_attach_score,c=e.superior_attach_score,i=e.superior_score,l=e.superior_name,u=e.score_level,d=e.score;t.basicInfo={superior_workcode:s,superior_name:l},t.need_attach_score=n,t.myAdditionMark=o||{},t.leaderAdditionMark=c||{},t.level=u||i&&i.score_level,t.superior_score=i,t.showComments=a>=40,t.composeData(r,a),60!=a||d||(t.showTotal=!1)}).catch(function(t){})},beforeSubmitCheck:function(){var t=this;return new Promise(function(e,r){return t.targets.some(function(t){return!t.desc})?(t.$notify.error({title:a["sb"],message:"请填写自评理由!"}),r(!0)):t.showMyAdditional&&t.myAdditionMark.score&&!t.myAdditionMark.evaluation?(t.$notify.error({title:a["sb"],message:"请填写加减分原因"}),r(!0)):t.checkTotal()?(t.$notify.error({title:a["sb"],message:"总分已经超过5分"}),r(!0)):e(!0)})},submit:function(){var t=this;return this.beforeSubmitCheck().then(function(){t.$confirm("自评分为".concat(t.total,"分，请确认无误再提交，一经提交无法修改, 是否继续?"),"提示",{confirmButtonText:a["z"],cancelButtonText:a["u"],type:"warning"}).then(function(){var e=t.getPostData();return delete e.total_score,Object(o["qb"])(t.$route.params.id,e).then(function(e){t.$message({type:"success",message:a["A"]}),t.$router.replace(c["h"])}).catch(function(t){})}).catch(function(){})}).catch(function(){})},composeData:function(t,e){switch(e){case 10:this.readOnly=!0,this.targets=t.map(function(t){return delete t.target_self_score,delete t.target_superior_score,t}),this.need_attach_score="",this.canEdit=!1,this.showTotal=!1;break;case 20:this.readOnly=!1,this.canEdit=!0,this.showTotal=!0,this.targets=t.map(function(t){return t.mark=t.target_self_score&&t.target_self_score.score||0,t.desc=t.target_self_score&&t.target_self_score.description||"",delete t.target_self_score,delete t.target_superior_score,t});break;case 30:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=t.map(function(t){return t.mark=t.target_self_score&&t.target_self_score.score||0,t.desc=t.target_self_score&&t.target_self_score.description||"",t});break;case 40:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=t.map(function(t){return t.mark=t.target_self_score&&t.target_self_score.score||0,t.desc=t.target_self_score&&t.target_self_score.description||"",t}),this.canReject=!0,this.cancelReject=!1;break;case 50:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=t.map(function(t){return t.mark=t.target_self_score&&t.target_self_score.score||0,t.desc=t.target_self_score&&t.target_self_score.description||"",t}),this.canReject=!1,this.cancelReject=!0;break;default:this.readOnly=!0,this.canEdit=!1,this.showTotal=!0,this.targets=t.map(function(t){return t.mark=t.target_self_score&&t.target_self_score.score||0,t.desc=t.target_self_score&&t.target_self_score.description||"",t}),this.canReject=!1,this.cancelReject=!1}},cancel:function(){var t=this;return Object(o["d"])({performance_user_id:this.$route.params.id}).then(function(e){t.$message({type:"success",message:"取消成功!"}),t.getInfo()}).catch(function(t){})}},created:function(){this.getInfo()}},l=i,u=(r("1e6e"),r("2877")),d=Object(u["a"])(l,s,n,!1,null,"056c1d0c",null);d.options.__file="index.vue";e["default"]=d.exports},"1e6e":function(t,e,r){"use strict";var s=r("3c18"),n=r.n(s);n.a},"214f":function(t,e,r){"use strict";var s=r("32e9"),n=r("2aba"),a=r("79e5"),o=r("be13"),c=r("2b4c");t.exports=function(t,e,r){var i=c(t),l=r(o,i,""[t]),u=l[0],d=l[1];a(function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})&&(n(String.prototype,t,u),s(RegExp.prototype,i,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},"3c18":function(t,e,r){},a481:function(t,e,r){r("214f")("replace",2,function(t,e,r){return[function(s,n){"use strict";var a=t(this),o=void 0==s?void 0:s[e];return void 0!==o?o.call(s,a,n):r.call(String(a),s,n)},r]})}}]);