webpackJsonp([16],{"5W2b":function(t,e){},FjKI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("OE2U"),r=a("BHhq"),s=a("xwzc"),i={data:function(){return{myAdditionMark:{},leaderAdditionMark:{},comments:"",stage:0,hasLeaderAdditionMark:!1,rules:[],basicInfo:{},targets:[],level:"",cardConfig:{min:0,max:5,step:.1},nav:[{label:n["_117"],href:s["c"]},{label:n["_15"],href:Object(s["e"])(this.$route.params.gradeID)},{label:n["_13"],active:!0}],constants:{SUBMIT:n["_114"],SAVE_DRAFT:n["_104"],LABEL_SELF:n["_52"],LABEL_SUP:n["_55"],BASIC_INFO:n["i"]}}},components:{"nav-bar":function(){return a.e(25).then(a.bind(null,"PI/7"))},pagination:function(){return a.e(26).then(a.bind(null,"734F"))},card:function(){return a.e(27).then(a.bind(null,"ql5Z"))},"addition-mark":function(){return a.e(28).then(a.bind(null,"rkMF"))},"total-mark":function(){return a.e(29).then(a.bind(null,"Zb0a"))},comments:function(){return a.e(31).then(a.bind(null,"eL6J"))},level:function(){return a.e(30).then(a.bind(null,"4D1/"))}},computed:{total:function(){return parseFloat(this.targets.map(function(t){return t.weights*(t.mark||0)}).reduce(function(t,e){return t+e},0)+(parseFloat(this.leaderAdditionMark.score)||0)).toFixed(2)},shouldMapping:function(){return this.rules&&this.rules.length>0},canEdit:function(){return 30==this.stage||40==this.stage}},methods:{normalizeTargets:function(t){return t.map(function(t){return t.mark=t.target_superior_score&&parseFloat(t.target_superior_score.score)||0,t})},checkTotal:function(){return parseFloat(this.total)>5},saveDraft:function(){var t=this,e=this.getPostData();return Object(r["_2"])(this.$route.params.gradeID,this.$route.params.uid,e).then(function(e){t.$message({type:"success",message:"草稿保存成功"}),t.getDetailInfo()}).catch(function(t){})},getDetailInfo:function(){var t=this;return Object(r["l"])(this.$route.params.gradeID,this.$route.params.uid,"superior").then(function(e){var a=e.name,n=e.targets,r=e.workcode,s=e.self_attach_score,i=e.superior_attach_score,o=e.superior_score,c=e.need_attach_score,l=e.score_rule,d=e.stage,u=e.score_level;t.basicInfo={name:a,workcode:r,self_attach_score:s},t.targets=t.normalizeTargets(n),t.myAdditionMark=s||{},t.leaderAdditionMark=i||{},t.comments=o&&o.evaluation,t.level=u||o&&o.score_level,t.hasLeaderAdditionMark=1==c,t.rules=l,t.stage=d}).catch(function(t){})},submit:function(){var t=this;return this.leaderAdditionMark.score&&!this.leaderAdditionMark.evaluation?this.$notify.error({title:n["_2"],message:"请填写加减分原因"}):this.checkTotal()?this.$notify.error({title:n["_2"],message:"总分已经超过5分"}):this.shouldMapping&&!this.level?this.$notify.error({title:n["_2"],message:"需要选择等级"}):this.comments?void this.$confirm("请确认无误再提交, 是否继续?",n["g"],{confirmButtonText:n["p"],cancelButtonText:n["m"],type:"warning"}).then(function(){var e=t.getPostData();return Object(r["_1"])(t.$route.params.uid,e).then(function(e){t.$message({type:"success",message:n["q"]}),t.$router.replace(Object(s["e"])(t.$route.params.gradeID))}).catch(function(t){})}).catch(function(){}):this.$notify.error({title:n["_2"],message:"请填写评价"})},findLevel:function(){for(var t=-1,e=0;e<this.rules.length;e++){var a=parseFloat(this.rules[e]);if(a>=this.total){t=e;break}}var n="S";if(-1==t)return n;switch(t){case 0:n="D";break;case 1:n="C";break;case 2:n="B";break;case 3:n="A";break}return n},getPostData:function(){return{score:this.targets.map(function(t){var e=t.id,a=t.mark;return{target_id:e,score:a}}),attach_score:{score:this.leaderAdditionMark.score||0,reason:this.leaderAdditionMark.evaluation||""},total_score:this.total,score_level:this.level,evaluation:this.comments}}},created:function(){this.getDetailInfo()},watch:{targets:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0},leaderAdditionMark:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0}}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-grade-page"},[a("nav-bar",{attrs:{list:t.nav}}),a("section",{staticClass:"content-container"},[a("div",{staticClass:"basic-info"},[a("span",{staticClass:"label"},[t._v(t._s(t.constants.BASIC_INFO)+":")]),a("span",[a("span",{staticClass:"greycolor"},[t._v("员工工号")]),t._v(" / "+t._s(t.basicInfo.workcode)+"   \n        "),a("span",{staticClass:"greycolor"},[t._v("员工姓名")]),t._v(" / "+t._s(t.basicInfo.name))]),t._v("    \n      ")]),a("br"),t._l(t.targets,function(e,n){return a("card",{key:n,staticClass:"card",attrs:{readOnly:!t.canEdit,config:t.cardConfig,data:e,index:n},model:{value:t.targets[n].mark,callback:function(e){t.$set(t.targets[n],"mark",e)},expression:"targets[i].mark"}})}),a("br"),t.myAdditionMark.evaluation?a("div",[a("addition-mark",{attrs:{prefixTitle:t.constants.LABEL_SELF,readOnly:!0,desc:t.myAdditionMark.evaluation,mark:t.myAdditionMark.score},on:{"update:desc":function(e){t.$set(t.myAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.myAdditionMark,"score",e)}}}),a("br")],1):t._e(),t.hasLeaderAdditionMark?a("div",[a("addition-mark",{attrs:{readOnly:!t.canEdit,prefixTitle:t.constants.LABEL_SUP,desc:t.leaderAdditionMark.evaluation,mark:t.leaderAdditionMark.score},on:{"update:desc":function(e){t.$set(t.leaderAdditionMark,"evaluation",e)},"update:mark":function(e){t.$set(t.leaderAdditionMark,"score",e)}}}),a("br")],1):t._e(),a("comments",{attrs:{readOnly:!t.canEdit,comments:t.comments},on:{"update:comments":function(e){t.comments=e}}}),a("br"),a("total-mark",{attrs:{total:t.total}}),a("br"),a("level",{attrs:{readOnly:t.shouldMapping},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}}),a("br"),t.canEdit?a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:t.saveDraft}},[t._v(t._s(t.constants.SAVE_DRAFT))]),a("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:t.submit}},[t._v(t._s(t.constants.SUBMIT))])],1):t._e()],2)],1)},c=[],l=a("XyMi");function d(t){a("5W2b")}var u=!1,h=d,m="data-v-53595b54",f=null,p=Object(l["a"])(i,o,c,u,h,m,f);e["default"]=p.exports}});
//# sourceMappingURL=16.a8b1fd8c.js.map