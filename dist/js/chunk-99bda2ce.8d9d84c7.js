(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99bda2ce"],{"214f":function(t,e,n){"use strict";var a=n("32e9"),r=n("2aba"),i=n("79e5"),s=n("be13"),o=n("2b4c");t.exports=function(t,e,n){var c=o(t),u=n(s,c,""[t]),l=u[0],d=u[1];i(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,l),a(RegExp.prototype,c,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},3325:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-grade-page"},[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container"},[n("div",{staticClass:"basic-info"},[n("span",{staticClass:"label"},[t._v(t._s(t.constants.BASIC_INFO)+":")]),n("span",[n("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.EMPLOYEE_WORKCODE))]),t._v(" / "+t._s(t.basicInfo.workcode)+"   \n        "),n("span",{staticClass:"greycolor"},[t._v(t._s(t.constants.EMPYEE_NAME))]),t._v(" / "+t._s(t.basicInfo.name))]),t._v("    \n      ")]),n("br"),t._l(t.targets,function(e,a){return n("card",{key:a,staticClass:"card",attrs:{maxlength:1e3,readOnly:!t.canEdit,desc:t.targets[a].desc,placeholder:"请评价该项目的完成情况（非必填)",config:t.cardConfig,data:e,index:a},on:{"update:desc":function(e){t.$set(t.targets[a],"desc",e)}},model:{value:t.targets[a].mark,callback:function(e){t.$set(t.targets[a],"mark",e)},expression:"targets[i].mark"}})}),n("br"),t.myAdditionMark.evaluation?n("div",[n("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SELF,readOnly:!0,desc:t.myAdditionMark.evaluation,mark:t.myAdditionMark.score},on:{"update:desc":function(e){t.$set(t.myAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.myAdditionMark,"score",e)}}}),n("br")],1):t._e(),t.hasLeaderAdditionMark?n("div",[n("addition-mark",{attrs:{readOnly:!t.canEdit,prefixTitle:t.constants.LABEL_SUP,desc:t.leaderAdditionMark.evaluation,mark:t.leaderAdditionMark.score},on:{"update:desc":function(e){t.$set(t.leaderAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.leaderAdditionMark,"score",e)}}}),n("br")],1):t._e(),n("comments",{attrs:{readOnly:!t.canEdit,comments:t.comments},on:{"update:comments":function(e){t.comments=e}}}),n("br"),n("total-mark",{attrs:{total:t.total}}),n("br"),n("level",{attrs:{readOnly:t.shouldMapping||t.stage>=50},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}}),n("br"),t.canEdit?n("el-row",{attrs:{type:"flex",justify:"center"}},[40!=t.stage?n("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.saveDraft}},[t._v(t._s(t.constants.SAVE_DRAFT))]):t._e(),n("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v(t._s(t.constants.SUBMIT))])],1):t._e()],2)],1)},r=[],i=(n("a481"),n("7f7f"),n("cadf"),n("551c"),n("097d"),n("38fb")),s=n("fea5"),o=n("c9f1"),c={data:function(){return{myAdditionMark:{},leaderAdditionMark:{},comments:"",stage:0,hasLeaderAdditionMark:!1,rules:[],basicInfo:{},targets:[],level:"",cardConfig:{min:0,max:5,step:.1},nav:[{label:i["Ud"],href:o["i"]},{label:i["Db"],href:Object(o["k"])(this.$route.params.gradeID)},{label:i["Bb"],active:!0}],constants:{SUBMIT:i["Rd"],SAVE_DRAFT:i["Gd"],LABEL_SELF:i["qc"],LABEL_SUP:i["tc"],BASIC_INFO:i["k"],EMPLOYEE_WORKCODE:i["cb"],EMPYEE_NAME:i["db"]}}},components:{"nav-bar":function(){return n.e("chunk-5a85c387").then(n.bind(null,"3208"))},pagination:function(){return n.e("chunk-5db148a8").then(n.bind(null,"486f"))},card:function(){return n.e("chunk-44ecf9bf").then(n.bind(null,"4e80"))},"addition-mark":function(){return n.e("chunk-aae955b0").then(n.bind(null,"5923"))},"total-mark":function(){return n.e("chunk-6118e916").then(n.bind(null,"5ea4"))},comments:function(){return n.e("chunk-012a30fc").then(n.bind(null,"f160"))},level:function(){return n.e("chunk-011ae294").then(n.bind(null,"7bb4"))}},computed:{total:function(){return parseFloat(this.targets.map(function(t){return t.weights*(t.mark||0)}).reduce(function(t,e){return t+e},0)+(parseFloat(this.leaderAdditionMark.score)||0)).toFixed(2)},shouldMapping:function(){return this.rules&&this.rules.length>0},canEdit:function(){return 30==this.stage||40==this.stage}},methods:{normalizeTargets:function(t){return t.map(function(t){return t.mark=t.target_superior_score&&parseFloat(t.target_superior_score.score)||0,t.desc=t.target_superior_score&&t.target_superior_score.description||"",t})},checkTotal:function(){return parseFloat(this.total)>5},saveDraft:function(){var t=this,e=this.getPostData();return Object(s["ub"])(this.$route.params.gradeID,this.$route.params.uid,e).then(function(e){t.$message({type:"success",message:i["U"]}),t.getDetailInfo()}).catch(function(t){})},getDetailInfo:function(){var t=this;return Object(s["n"])(this.$route.params.gradeID,this.$route.params.uid,"superior").then(function(e){var n=e.name,a=e.targets,r=e.workcode,i=e.self_attach_score,s=e.superior_attach_score,o=e.superior_score,c=e.need_attach_score,u=e.score_rule,l=e.stage,d=e.score_level;t.basicInfo={name:n,workcode:r,self_attach_score:i},t.targets=t.normalizeTargets(a),t.myAdditionMark=i||{},t.leaderAdditionMark=s||{},t.comments=o&&o.evaluation,t.level=d||o&&o.score_level,t.hasLeaderAdditionMark=1==c,t.rules=u,t.stage=l}).catch(function(t){})},beforeSubmitCheck:function(){var t=this;return new Promise(function(e,n){return t.hasLeaderAdditionMark&&t.leaderAdditionMark.score&&!t.leaderAdditionMark.evaluation?(t.$notify.error({title:i["rb"],message:"请填写加减分原因"}),n(!1)):t.checkTotal()?(t.$notify.error({title:i["rb"],message:"总分已经超过5分"}),n(!1)):t.shouldMapping||t.level?t.comments?e(!0):(t.$notify.error({title:i["rb"],message:"请填写评价"}),n(!1)):(t.$notify.error({title:i["rb"],message:"需要选择等级"}),n(!1))})},submit:function(){var t=this;return this.beforeSubmitCheck().then(function(){return t.$confirm("请确认无误再提交, 是否继续?",i["i"],{confirmButtonText:i["y"],cancelButtonText:i["t"],type:"warning"}).then(function(){var e=t.getPostData();return Object(s["tb"])(t.$route.params.uid,e).then(function(e){t.$message({type:"success",message:i["z"]}),t.$router.replace(Object(o["k"])(t.$route.params.gradeID))}).catch(function(t){})}).catch(function(){})}).catch(function(){})},findLevel:function(){for(var t=-1,e=0;e<this.rules.length;e++){var n=parseFloat(this.rules[e]);if(n>=this.total){t=e;break}}var a="S";if(-1==t)return a;var r=["D","C","B","A"];return a=r[t]||a,a},getPostData:function(){return{score:this.targets.map(function(t){var e=t.id,n=t.mark,a=t.desc;return{target_id:e,score:n,description:a}}),attach_score:{score:this.leaderAdditionMark.score||0,reason:this.leaderAdditionMark.evaluation||""},total_score:this.total,score_level:this.level,evaluation:this.comments}}},created:function(){this.getDetailInfo()},watch:{targets:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0},leaderAdditionMark:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0}}},u=c,l=(n("aee5"),n("2877")),d=Object(l["a"])(u,a,r,!1,null,"18193e2a",null);d.options.__file="index.vue";e["default"]=d.exports},7293:function(t,e,n){},"7f7f":function(t,e,n){var a=n("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in r||n("9e1e")&&a(r,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},a481:function(t,e,n){n("214f")("replace",2,function(t,e,n){return[function(a,r){"use strict";var i=t(this),s=void 0==a?void 0:a[e];return void 0!==s?s.call(a,i,r):n.call(String(i),a,r)},n]})},aee5:function(t,e,n){"use strict";var a=n("7293"),r=n.n(a);r.a}}]);