(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95be869a"],{"03c0":function(e,t,n){"use strict";var r=n("a630"),a=n.n(r);a.a},"11e9":function(e,t,n){var r=n("52a7"),a=n("4630"),i=n("6821"),o=n("6a99"),s=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?u:function(e,t){if(e=i(e),t=o(t,!0),c)try{return u(e,t)}catch(n){}if(s(e,t))return a(!r.f.call(e,t),e[t])}},3325:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-grade-page"},[n("nav-bar",{attrs:{list:e.nav}}),n("section",{staticClass:"content-container"},[n("div",{staticClass:"basic-info"},[n("div",[n("span",{staticClass:"label"},[e._v(e._s(e.constants.BASIC_INFO)+":")]),n("span",[n("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.EMPLOYEE_WORKCODE))]),e._v("\n          / "+e._s(e.basicInfo.workcode)+"   \n          "),n("span",{staticClass:"greycolor"},[e._v(e._s(e.constants.EMPYEE_NAME))]),e._v("\n          / "+e._s(e.basicInfo.name)+" ")]),e._v("    \n      ")]),e.needsReview?n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.passReview}},[e._v(e._s(e.constants.LABEL_CONFIRM))]),n("el-button",{on:{click:function(t){e.showReviewDia=!0}}},[e._v("返回修改")])],1):e._e()]),n("br"),e._l(e.targets,function(t,r){return n("card",{key:r,staticClass:"card",attrs:{readOnly:!e.canEdit,desc:e.targets[r].desc,placeholder:"请评价该项目的完成情况（非必填)",config:e.cardConfig,data:t,index:r},on:{"update:desc":function(t){return e.$set(e.targets[r],"desc",t)}},model:{value:e.targets[r].mark,callback:function(t){e.$set(e.targets[r],"mark",t)},expression:"targets[i].mark"}})}),n("br"),e.myAdditionMark.evaluation?n("div",[n("addition-mark",{attrs:{prefixTitle:e.constants.LABEL_SELF,readOnly:!0,desc:e.myAdditionMark.evaluation,mark:e.myAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.myAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.myAdditionMark,"score",t)}}}),n("br")],1):e._e(),e.hasLeaderAdditionMark&&!e.inReviewStage&&(!e.canEdit&&e.leaderAdditionMark.evaluation||e.canEdit)?n("div",[n("addition-mark",{attrs:{readOnly:!e.canEdit,prefixTitle:e.constants.LABEL_SUP,desc:e.leaderAdditionMark.evaluation,mark:e.leaderAdditionMark.score},on:{"update:desc":function(t){return e.$set(e.leaderAdditionMark,"evaluation",t)},"update:mark":function(t){return e.$set(e.leaderAdditionMark,"score",t)}}}),n("br")],1):e._e(),!e.inReviewStage&&(!e.canEdit&&e.comments||e.canEdit)?n("comments",{attrs:{readOnly:!e.canEdit,comments:e.comments},on:{"update:comments":function(t){e.comments=t}}}):e._e(),n("br"),e.inReviewStage?e._e():n("total-mark",{attrs:{score:this.score,total:e.total}}),n("br"),e.inReviewStage?e._e():n("level",{attrs:{canEdit:e.canEdit,readOnly:e.shouldMapping||e.stage>=50,label_id:e.label_id},on:{update:function(t){e.label_id=t}},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}}),n("br"),e.canEdit?n("el-row",{attrs:{type:"flex",justify:"center"}},[40!=e.stage?n("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]):e._e(),n("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v(e._s(e.constants.SUBMIT))])],1):e._e()],2),e.showReviewDia?n("review-dialog",{attrs:{callback:e.postReviewResult,visible:e.showReviewDia},on:{"update:visible":function(t){e.showReviewDia=t}}}):e._e()],1)},a=[],i=(n("a481"),n("7f7f"),n("c5f6"),n("38fb")),o=n("fea5"),s=n("c9f1"),c={data:function(){return{myAdditionMark:{},leaderAdditionMark:{},comments:"",stage:0,hasLeaderAdditionMark:!1,rules:[],basicInfo:{},targets:[],level:"",score:"",label_id:Number,cardConfig:{min:0,max:5,step:.1},nav:[{label:i["je"],href:s["k"]},{label:i["Kb"],href:Object(s["m"])(this.$route.params.gradeID)},{label:i["Ib"],active:!0}],constants:{SUBMIT:i["ee"],SAVE_DRAFT:i["Sd"],LABEL_SELF:i["xc"],LABEL_SUP:i["Bc"],BASIC_INFO:i["m"],EMPLOYEE_WORKCODE:i["hb"],EMPYEE_NAME:i["ib"],LABEL_CONFIRM:i["bc"]},showReviewDia:!1}},components:{"nav-bar":function(){return n.e("chunk-d5094d72").then(n.bind(null,"3208"))},card:function(){return n.e("chunk-06f9a9f4").then(n.bind(null,"4e80"))},"addition-mark":function(){return n.e("chunk-727e354f").then(n.bind(null,"5923"))},"total-mark":function(){return n.e("chunk-b0e1ec64").then(n.bind(null,"5ea4"))},comments:function(){return n.e("chunk-38427ed5").then(n.bind(null,"f160"))},level:function(){return n.e("chunk-65db9e94").then(n.bind(null,"7bb4"))},"review-dialog":function(){return n.e("chunk-2d0dd770").then(n.bind(null,"8200"))}},computed:{total:function(){return parseFloat(this.targets.map(function(e){return e.weights*(e.mark||0)}).reduce(function(e,t){return e+t},0)+(parseFloat(this.leaderAdditionMark.score)||0)).toFixed(2)},shouldMapping:function(){return this.rules&&this.rules.length>0},canEdit:function(){return 30==this.stage||40==this.stage},needsReview:function(){return 5==this.stage},inReviewStage:function(){return this.stage<=20}},methods:{normalizeTargets:function(e){return e.map(function(e){return e.mark=e.target_superior_score&&parseFloat(e.target_superior_score.score)||0,e.desc=e.target_superior_score&&e.target_superior_score.description||"",e})},checkTotal:function(){return parseFloat(this.total)>5},passReview:function(){this.postReviewResult(2)},postReviewResult:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r={performance_user_id:this.$route.params.uid,type:e};return 1==e&&(r.reason=n),Object(o["Gb"])(r).then(function(e){return t.showReviewDia=!1,t.getDetailInfo()}).catch(function(e){})},saveDraft:function(){var e=this,t=this.getPostData();return Object(o["Lb"])(this.$route.params.gradeID,this.$route.params.uid,t).then(function(t){e.$message({type:"success",message:i["Z"]}),e.getDetailInfo()}).catch(function(e){})},getDetailInfo:function(){var e=this;return Object(o["p"])(this.$route.params.gradeID,this.$route.params.uid,"superior").then(function(t){var n=t.name,r=t.targets,a=t.workcode,i=t.self_attach_score,o=t.superior_attach_score,s=t.superior_score,c=t.need_attach_score,u=t.score_rule,l=t.stage,d=t.score_level;e.basicInfo={name:n,workcode:a,self_attach_score:i},e.targets=e.normalizeTargets(r),e.myAdditionMark=i||{},e.leaderAdditionMark=o||{},e.comments=s&&s.evaluation,e.level=d||s&&s.score_level,e.hasLeaderAdditionMark=1==c,e.rules=u,e.stage=l,e.score=i.score,e.label_id=t.superior_score.label_id||null}).catch(function(e){})},beforeSubmitCheck:function(){var e=this;return new Promise(function(t,n){return e.hasLeaderAdditionMark&&e.leaderAdditionMark.score&&!e.leaderAdditionMark.evaluation?(e.$notify.error({title:i["wb"],message:"请填写加减分原因"}),n(!1)):e.checkTotal()?(e.$notify.error({title:i["wb"],message:"总分已经超过5分"}),n(!1)):e.shouldMapping||e.level?e.comments?t(!0):(e.$notify.error({title:i["wb"],message:"请填写评价"}),n(!1)):(e.$notify.error({title:i["wb"],message:"需要选择等级"}),n(!1))})},submit:function(){var e=this;return this.beforeSubmitCheck().then(function(){return e.$confirm("请确认无误再提交, 是否继续?",i["k"],{confirmButtonText:i["B"],cancelButtonText:i["w"],type:"warning"}).then(function(){var t=e.getPostData();return console.log(t),Object(o["Kb"])(e.$route.params.uid,t).then(function(t){e.$message({type:"success",message:i["C"]}),e.$router.replace(Object(s["m"])(e.$route.params.gradeID))}).catch(function(e){})}).catch(function(){})}).catch(function(){})},findLevel:function(){for(var e=-1,t=0;t<this.rules.length;t++){var n=parseFloat(this.rules[t]);if(n>=this.total){e=t;break}}var r="S";if(-1==e)return r;var a=["D","C","B","A"];return r=a[e]||r,r},getPostData:function(){return{score:this.targets.map(function(e){var t=e.id,n=e.mark,r=e.desc;return{target_id:t,score:n,description:r}}),attach_score:{score:this.leaderAdditionMark.score||0,reason:this.leaderAdditionMark.evaluation||""},total_score:this.total,score_level:this.level,evaluation:this.comments,label_id:this.label_id}}},created:function(){this.getDetailInfo()},watch:{targets:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0},leaderAdditionMark:{handler:function(){this.shouldMapping&&this.stage<50&&(this.level=this.findLevel())},deep:!0}}},u=c,l=(n("03c0"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,"488233a1",null);t["default"]=d.exports},"5dbc":function(e,t,n){var r=n("d3f4"),a=n("8b97").set;e.exports=function(e,t,n){var i,o=t.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&a&&a(e,i),e}},"8b97":function(e,t,n){var r=n("d3f4"),a=n("cb7c"),i=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},9093:function(e,t,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},a630:function(e,t,n){},aa77:function(e,t,n){var r=n("5ca1"),a=n("be13"),i=n("79e5"),o=n("fdef"),s="["+o+"]",c="​",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),d=function(e,t,n){var a={},s=i(function(){return!!o[e]()||c[e]()!=c}),u=a[e]=s?t(f):o[e];n&&(a[n]=u),r(r.P+r.F*s,"String",a)},f=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=d},c5f6:function(e,t,n){"use strict";var r=n("7726"),a=n("69a8"),i=n("2d95"),o=n("5dbc"),s=n("6a99"),c=n("79e5"),u=n("9093").f,l=n("11e9").f,d=n("86cc").f,f=n("aa77").trim,h="Number",p=r[h],v=p,m=p.prototype,_=i(n("2aeb")(m))==h,b="trim"in String.prototype,g=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():f(t,3);var n,r,a,i=t.charCodeAt(0);if(43===i||45===i){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,c=t.slice(2),u=0,l=c.length;u<l;u++)if(o=c.charCodeAt(u),o<48||o>a)return NaN;return parseInt(c,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(_?c(function(){m.valueOf.call(n)}):i(n)!=h)?o(new v(g(t)),n,p):g(t)};for(var k,E=n("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;E.length>A;A++)a(v,k=E[A])&&!a(p,k)&&d(p,k,l(v,k));p.prototype=m,m.constructor=p,n("2aba")(r,h,p)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);