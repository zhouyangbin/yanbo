webpackJsonp([17],{FjKI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("OE2U"),n=a("BHhq"),s=a("xwzc"),i={data:function(){return{myAdditionMark:{},leaderAdditionMark:{},comments:"",stage:0,hasLeaderAdditionMark:!1,rules:[],basicInfo:{},targets:[],level:"",cardConfig:{min:0,max:5,step:.1},nav:[{label:r["_117"],href:s["c"]},{label:r["_15"],href:Object(s["e"])(this.$route.params.gradeID)},{label:r["_13"],active:!0}],constants:{SUBMIT:r["_114"],SAVE_DRAFT:r["_104"],LABEL_SELF:r["_52"],LABEL_SUP:r["_55"],BASIC_INFO:r["i"]}}},components:{"nav-bar":function(){return a.e(25).then(a.bind(null,"PI/7"))},pagination:function(){return a.e(26).then(a.bind(null,"734F"))},card:function(){return a.e(28).then(a.bind(null,"ql5Z"))},"addition-mark":function(){return a.e(27).then(a.bind(null,"rkMF"))},"total-mark":function(){return a.e(29).then(a.bind(null,"Zb0a"))},comments:function(){return a.e(31).then(a.bind(null,"eL6J"))},level:function(){return a.e(30).then(a.bind(null,"4D1/"))}},computed:{total:function(){return parseFloat(this.targets.map(function(t){return t.weights*(t.mark||0)}).reduce(function(t,e){return t+e},0)+(parseFloat(this.leaderAdditionMark.score)||0)).toFixed(2)},shouldMapping:function(){return this.rules&&this.rules.length>0},canEdit:function(){return 30==this.stage||40==this.stage}},methods:{normalizeTargets:function(t){return t.map(function(t){return t.mark=t.target_superior_score&&parseFloat(t.target_superior_score.score)||0,delete t.target_superior_score,t})},checkTotal:function(){return parseFloat(this.total)>5},saveDraft:function(){var t=this,e=this.getPostData();return Object(n["_2"])(this.$route.params.gradeID,this.$route.params.uid,e).then(function(e){t.$message({type:"success",message:"草稿保存成功"}),t.getDetailInfo()}).catch(function(t){})},getDetailInfo:function(){var t=this;return Object(n["l"])(this.$route.params.gradeID,this.$route.params.uid,"superior").then(function(e){var a=e.name,r=e.targets,n=e.workcode,s=e.self_attach_score,i=e.superior_attach_score,o=e.superior_score,c=e.need_attach_score,l=e.score_rule,u=e.stage,d=e.score_level;t.basicInfo={name:a,workcode:n,self_attach_score:s},t.targets=t.normalizeTargets(r),t.myAdditionMark=s||{},t.leaderAdditionMark=i||{},t.comments=o&&o.evaluation,t.level=d||o&&o.score_level,t.hasLeaderAdditionMark=1==c,t.rules=l,t.stage=u}).catch(function(t){})},submit:function(){var t=this;return this.checkTotal()?this.$notify.error({title:r["_2"],message:"总分已经超过5分"}):this.shouldMapping&&!this.level?this.$notify.error({title:r["_2"],message:"需要选择等级"}):this.comments?void this.$confirm("请确认无误再提交, 是否继续?",r["g"],{confirmButtonText:r["p"],cancelButtonText:r["m"],type:"warning"}).then(function(){var e=t.getPostData();return Object(n["_1"])(t.$route.params.uid,e).then(function(e){t.$message({type:"success",message:r["q"]}),t.$router.replace(Object(s["e"])(t.$route.params.gradeID))}).catch(function(t){})}).catch(function(){}):this.$notify.error({title:r["_2"],message:"请填写评价"})},findLevel:function(){for(var t=-1,e=0;e<this.rules.length;e++){var a=parseFloat(this.rules[e]);if(a>this.total){t=e;break}}var r="S";if(-1==t)return r;switch(t){case 0:r="D";break;case 1:r="C";break;case 2:r="B";break;case 3:r="A";break}return r},getPostData:function(){return{score:this.targets.map(function(t){var e=t.id,a=t.mark;return{target_id:e,score:a}}),attach_score:{score:this.leaderAdditionMark.score||0,reason:this.leaderAdditionMark.evaluation||""},total_score:this.total,score_level:this.level,evaluation:this.comments}}},created:function(){this.getDetailInfo()},watch:{targets:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0}}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-grade-page"},[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"content-container"},[a("div",{staticClass:"basic-info"},[a("span",{staticClass:"label"},[t._v(t._s(t.constants.BASIC_INFO)+":")]),a("span",[a("span",{staticClass:"greycolor"},[t._v("员工工号")]),t._v(" / "+t._s(t.basicInfo.workcode)+"   \n        "),a("span",{staticClass:"greycolor"},[t._v("员工姓名")]),t._v(" / "+t._s(t.basicInfo.name))]),t._v("    \n      ")]),a("br"),t._l(t.targets,function(e,r){return a("card",{key:r,staticClass:"card",attrs:{readOnly:!t.canEdit,config:t.cardConfig,data:e,index:r},model:{value:t.targets[r].mark,callback:function(e){t.$set(t.targets[r],"mark",e)},expression:"targets[i].mark"}})}),a("br"),t.myAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SELF,readOnly:!0,desc:t.myAdditionMark.evaluation,mark:t.myAdditionMark.score},on:{"update:desc":function(e){t.$set(t.myAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.myAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.hasLeaderAdditionMark?a("div",[a("addition-mark",{attrs:{readOnly:!t.canEdit,prefixTitle:t.constants.LABEL_SUP,desc:t.leaderAdditionMark.evaluation,mark:t.leaderAdditionMark.score},on:{"update:desc":function(e){t.$set(t.leaderAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.leaderAdditionMark,"score",e)}}}),a("br")],1):t._e(),a("comments",{attrs:{readOnly:!t.canEdit,comments:t.comments},on:{"update:comments":function(e){t.comments=e}}}),a("br"),a("total-mark",{attrs:{total:t.total}}),a("br"),a("level",{attrs:{readOnly:t.shouldMapping},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}}),a("br"),t.canEdit?a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.saveDraft}},[t._v(t._s(t.constants.SAVE_DRAFT))]),a("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v(t._s(t.constants.SUBMIT))])],1):t._e()],2)],1)},c=[],l=a("XyMi");function u(t){a("hGtm")}var d=!1,m=u,h="data-v-3f1ba722",f=null,_=Object(l["a"])(i,o,c,d,m,h,f);e["default"]=_.exports},hGtm:function(t,e){}});
//# sourceMappingURL=17.f0efbc87.js.map