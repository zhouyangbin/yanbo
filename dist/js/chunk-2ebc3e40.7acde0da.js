(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ebc3e40"],{"1d64":function(e,t,s){"use strict";var n=s("2fe3"),a=s.n(n);a.a},"2fe3":function(e,t,s){},9425:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"member-grade-details"},[n("nav-bar",{attrs:{list:e.nav}}),n("br"),n("section",{staticClass:"content-container",staticStyle:{padding:"40px"}},[n("basic-info",{attrs:{data:e.basicInfo}}),n("br"),n("hr"),n("br"),n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("rule-text",{attrs:{text:e.constants.MY_MEMBER_RULE}}),e.has_history?n("el-button",{staticStyle:{"align-self":"flex-start"},attrs:{type:"primary"},on:{click:e.goHistory}},[e._v(e._s(e.constants.CHANGE_RECORDS))]):e._e()],1),n("br"),e.feedback_feeling?n("div",{staticClass:"feeback-container"},[n("div",[n("span",{staticClass:"label"},[e._v(e._s(e.constants.IMPRESSIONS)+":")]),n("span",{staticClass:"content"},[e._v(e._s(e.feedback_feeling.content))]),n("span",{staticClass:"time"},[e._v(e._s(e.feedback_feeling.time))])]),n("br")]):e._e(),e._l(e.appealReason,(function(e,t){return n("div",{key:""+t+e.time},[n("appeal-reason",{attrs:{data:e}})],1)})),n("br"),n("div",[n("h3",[e._v(e._s(e.constants.ADVANTAGE)+":")]),n("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.advantage,callback:function(t){e.advantage=t},expression:"advantage"}})],1),n("br"),n("div",[n("h3",[e._v(e._s(e.constants.PROMOTION)+":")]),n("case-area",{attrs:{readOnly:e.readOnly},model:{value:e.promotion,callback:function(t){e.promotion=t},expression:"promotion"}})],1),n("br"),n("section",{staticClass:"mark"},[n("el-row",{attrs:{align:"middle",type:"flex"}},[n("el-col",{staticStyle:{padding:"20px","border-right":"1px solid #979797"},attrs:{span:14}},[n("div",{staticClass:"mark-label"},[e._v(e._s(e.constants.SELF_SCORE))]),n("grade-items",{attrs:{items:e.scores},model:{value:e.selectGradeItem,callback:function(t){e.selectGradeItem=t},expression:"selectGradeItem"}})],1),n("el-col",{staticStyle:{"padding-left":"50px"},attrs:{span:10}},[n("div",{staticClass:"mark-reason"},e._l(e.reasons,(function(t,s){return n("div",{key:s},[n("div",[e._v(e._s(s+3)+"分理由:")]),n("div",{domProps:{innerHTML:e._f("placeholder")(e._f("linebreak")(t),"无")}})])})),0)])],1)],1),n("br"),e._l(e.rejectReason,(function(e,t){return n("div",{key:t},[n("reject-reason",{attrs:{data:e.reason}}),n("br")],1)})),n("div",{staticClass:"mark-flag-container"},[n("div",{staticClass:"mark-section"},[n("div",{staticClass:"mark-label"},[e._v("\n          请您为"+e._s(e.employee_name)+"的"+e._s(e.scores[e.selectGradeItem].question_name)+"项目评分\n        ")]),n("br"),n("grade-slider",{attrs:{readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_score,callback:function(t){e.$set(e.scores[e.selectGradeItem],"superior_score",t)},expression:"scores[selectGradeItem].superior_score"}})],1),n("div",{staticStyle:{width:"20px"}}),n("div",{staticClass:"flag-section"},[n("div",{staticClass:"mark-level-container"},[n("div",{staticClass:"mark-label",staticStyle:{display:"inline-block"}},[e._v("\n            请您为"+e._s(e.employee_name)+"设置等级标签\n          ")]),e.isRecommended?n("span",{staticClass:"level-recommmed-icon"},[n("img",{attrs:{width:"15",src:s("b9eb"),alt:""}}),e._v("\n            已特殊推荐\n          ")]):e._e()]),n("br"),n("level-selector",{attrs:{disabled:!e.canSelectLv,pre:e.hasRejectReasons?e.preLv:"",value:e.level},on:{input:e.levelChange}})],1)]),n("br"),e.scores[e.selectGradeItem].superior_score!=e.scores[e.selectGradeItem].score?n("case-area",{attrs:{placeholder:"您的评分与下级的自评分不一致，请您简述理由",readOnly:e.readOnly},model:{value:e.scores[e.selectGradeItem].superior_case,callback:function(t){e.$set(e.scores[e.selectGradeItem],"superior_case",t)},expression:"scores[selectGradeItem].superior_case"}}):e._e(),n("br"),n("div",{staticClass:"total-scores"},[e._v("\n      总分:\n      "),n("span",{staticClass:"score"},[e._v(e._s(e.totalSuperiorScore))])]),n("br"),e.readOnly?e._e():n("el-row",{attrs:{type:"flex",justify:"end"}},[e.submited||e.hasRejectReasons?e._e():n("el-button",{attrs:{type:"primary"},on:{click:e.saveDraft}},[e._v(e._s(e.constants.SAVE_DRAFT))]),n("div",{staticStyle:{"margin-left":"10px",position:"relative"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("\n          "+e._s(e.constants.SUBMIT)+"\n        ")]),n("img",{staticClass:"hand-guide",attrs:{src:s("c5cc"),width:"20"}})],1)],1)],2)],1)},a=[],r=(s("efce"),s("ed8b"),s("c041"),s("97a3")),c=(s("4634"),s("38fb")),o=s("c9f1"),i=s("fea5"),l={data:function(){return{can_special_recommend:!1,special_recommended:!1}},methods:{initRecommend:function(e){var t=e.can_special_recommend,s=e.special_recommended;this.special_recommended=s,this.can_special_recommend=t},showRecommend:function(e,t){var s=this;this.$confirm(this.getRecommendMsg(),"提示",{confirmButtonText:"推荐",cancelButtonText:"取消",type:"warning"}).then((function(){s.special_recommended=1,s.$message({type:"success",message:"员工当前等级为middel，但隔级将收到特殊推荐!"}),t()})).catch((function(){e()}))},getRecommendMsg:function(){var e="";return e=this.canRecommended&&2==this.can_special_recommend?"当前团队仅有一个跟隔级推荐的名额，且已推荐，是否修改为该员工? 提交后生效.":"当前团队仅有一个跟隔级推荐的名额，是否推荐? 提交后生效.",e},setSpecialRecommended:function(e){this.special_recommended=e},getSpecialRecommended:function(){return this.special_recommended}},computed:{isRecommended:function(){return 1==this.special_recommended},canRecommended:function(){return 0==!this.can_special_recommend}}};function d(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?d(s,!0).forEach((function(t){Object(r["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):d(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u={mixins:[l],data:function(){return{isHaveZero:!1,employee_name:"",rejectReason:"",appealReason:[],basicInfo:{},evaluation_stage:0,nav:[{label:c["Pc"],href:o["K"]},{label:c["ad"],href:Object(o["J"])(this.$route.params.id,this.$route.params.type)},{label:"下级详情",active:!0}],level:"",preLv:"",advantage:"",promotion:"",selectGradeItem:0,submited:!1,readOnly:!1,scores:[{cases:[]}],constants:{MY_MEMBER_RULE:c["bd"],SELF_SCORE:c["Vd"],SAVE_DRAFT:c["Qd"],SUBMIT:c["be"],ADVANTAGE:c["e"],PROMOTION:c["Fd"],IMPRESSIONS:c["Vb"],CHANGE_RECORDS:c["y"]},feedback_feeling:null,has_history:!1}},components:{"nav-bar":function(){return s.e("chunk-7f5a78f4").then(s.bind(null,"3208"))},"basic-info":function(){return s.e("chunk-03c827dc").then(s.bind(null,"eb39"))},"rule-text":function(){return s.e("chunk-0780825e").then(s.bind(null,"6c37"))},"case-area":function(){return s.e("chunk-4d129709").then(s.bind(null,"b5ec"))},"grade-items":function(){return s.e("chunk-5332020c").then(s.bind(null,"da3f"))},"grade-slider":function(){return s.e("chunk-8faa74f6").then(s.bind(null,"aa29"))},"level-selector":function(){return s.e("chunk-7688d472").then(s.bind(null,"7f4e"))},"reject-reason":function(){return s.e("chunk-bf6a4ef6").then(s.bind(null,"f269"))},"appeal-reason":function(){return s.e("chunk-2a1dd324").then(s.bind(null,"f7ec"))}},methods:{getMemberDetail:function(){var e=this;Object(i["J"])(this.$route.params.uid).then((function(t){var s=t.status,n=s>=20;e.submited=n,n?e.handleResponse(t):Object(i["K"])(e.$route.params.uid).then((function(t){e.handleResponse(t)}))}))},handleResponse:function(e){var t,s=e.advantage,n=e.promotion,a=e.scores,r=e.employee_name,o=e.employee_workcode,i=e.end_time,l=e._271_level,d=e.reject_record,m=e.appeal_record,u=e.break_status,p=e.superior_start_time,f=e.feedback_feeling,h=e.has_history,v=e.special_recommended,b=e.can_special_recommend,_=e.evaluation_stage;this.initRecommend({can_special_recommend:b,special_recommended:v}),this.evaluation_stage=_,this.has_history=1==h,this.feedback_feeling=f,this.rejectReason=d,this.advantage=s,this.promotion=n,this.employee_name=r,this.readOnly=0==e.can_submit,this.appealReason=m||[],this._271_is_necessary=!!e._271_is_necessary,t=0==u?new Date<=new Date(p)?"未开始":"":c["r"][u],this.basicInfo={name:r,workcode:o,breakStatus:t,finishedTime:"上级评截止时间: ".concat(i)},this.preLv=this.level=c["Nc"][l].toLowerCase(),this.scores=a.map((function(e){return e.score=e.self_score,delete e.self_score,e}))},composePostData:function(){var e={};return this.scores.forEach((function(t){e[t.question_id]={score:t.superior_score,cases:[t.superior_case].filter((function(e){return!!e}))}})),e.promotion=this.promotion,e.advantage=this.advantage,e._271_level=c["Mc"][this.level]||"",e.special_recommend=this.getSpecialRecommended(),e},goHistory:function(){this.$router.push(Object(o["I"])(this.$route.params.id,this.$route.params.type,this.$route.params.uid))},validateData:function(){if(this.advantage&&this.promotion){if(this.level||!this._271_is_necessary)return this.checkReason();this.$message({message:"请选择等级!",type:"warning"})}else this.$message({message:"请填写优点和待提升部分",type:"warning"})},checkReason:function(){var e=this;return!this.scores.some((function(t){var s=t.score!=t.superior_score&&!t.superior_case;return s&&e.$message.error("".concat(t.question_name,"评分理由未填写，请填写后提交!")),s}))},saveDraft:function(){var e=this;Object(i["Qb"])(this.$route.params.uid,m({},this.composePostData(),{type:2})).then((function(t){e.$message({message:c["W"],type:"success"})}))},submit:function(){var e=this,t=this.validateData();if(t){for(var s=1;s<=4;s++)0===this.composePostData()[s].score&&(this.isHaveZero=!0);this.isHaveZero?this.$confirm("当前有0分项，是否提交?","提示",{confirmButtonText:c["A"],cancelButtonText:c["v"],type:"warning"}).then((function(){Object(i["tb"])(e.$route.params.uid,e.composePostData()).then((function(t){e.$message({message:c["B"],type:"success"}),e.$router.replace(Object(o["J"])(e.$route.params.id))})).catch((function(e){}))})).catch((function(){e.isHaveZero=!1})):this.$confirm("是否确定提交, 是否继续?","提示",{confirmButtonText:c["A"],cancelButtonText:c["v"],type:"warning"}).then((function(){Object(i["tb"])(e.$route.params.uid,e.composePostData()).then((function(t){e.$message({message:c["B"],type:"success"}),e.$router.replace(Object(o["J"])(e.$route.params.id))})).catch((function(e){}))})).catch((function(){}))}},levelChange:function(e){var t=this;this.canRecommended&&"top"==e?this.showRecommend((function(){}),(function(){t.level="middle"})):(this.level=e,this.setSpecialRecommended(0))}},created:function(){this.getMemberDetail()},computed:{reasons:function(){return this.scores[this.selectGradeItem].self_cases},hasRejectReasons:function(){return this.rejectReason.length>0},totalSuperiorScore:function(){var e=this.scores.map((function(e){return e.superior_score})).reduce((function(e,t){return parseFloat(e)+parseFloat(t)}),0);return isNaN(e)||e<0?"无":e},canSelectLv:function(){return 40==this.evaluation_stage&&!this.readOnly}}},p=u,f=(s("1d64"),s("96d6"),s("4e82")),h=Object(f["a"])(p,n,a,!1,null,"4be07d9c",null);t["default"]=h.exports},"96d6":function(e,t,s){"use strict";var n=s("d49c"),a=s.n(n);a.a},b9eb:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEUAAAD6oVj7pFr6oVf6oFj6oVj5oVj6oFj/qV/5oVj6oVf7oVj5oVj7o1n6oVf5oVf6oFj6oFf6oVj/pVr6oVj6oFj6oVf6oFf6oVf6oVf5oVn6olj5olr6olj5pFv/pln/pln5oFfp19XRAAAAIXRSTlMAyDr3uOfYzg/d031VSPKumYxvIu7CvqeYlYdjWDQtKBSkMb/WAAAAn0lEQVQoz3XRWQrEIBBF0Rdj1MxTz3Ptf5OdasGG4LtfhUcFEbtM7Z5gXUSqwNCKyMLQbTgSW2XLE2wVXd7CQbHI4ySazVonv+acmTLiI634dJEZJLYmjLvTpBWxU48qoeyrUXMs4Tk6HDmOsBxbnDn2mDgGzBQboKV4BRaKHXCn+AE6hh5Az/AGwDA0AF4Jm/1DgKB/Vun0tuXfBj34BdHUNaPNsx2dAAAAAElFTkSuQmCC"},c5cc:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAARVBMVEUAAACZmZmZmZmZmZmZmZmfn5+YmJiXl5eZmZmYmJiZmZmZmZmampqXl5eYmJiZmZmXl5eXl5eYmJiZmZmYmJiampqZmZlylDoSAAAAFnRSTlMAwIDwfxCRQNB9n+AwILBwYKXFUORE/kZpFAAABFVJREFUeNrtnW2TmyAURi8SxCKire39/z+1m1RCjJpMN0p4Mvd8bGdWznJ8gdkYEgRBEARBEARBEISX8afvYzsqhM5pfonmZOj9GMevo9+vMmrehebNgdW8F9rT+zAN8yeYRI+d0PnrWnpoVX2PoPhKYygrS492oBcYNE/U9A4cR5zZ61cyUn4qjgz7Ta7OH5fdwSNh2ji5lBmjk8ceeJ6wlBeXPPahj9eNvHFZ3j2FeBkOlJOYdEOR/eLqKR/9EffiKv8N3uhDfnnxGqwoF9UxR/Q6b1xpQjqEYh/QH3bzUnnjag97nOiyxjXOJwQ3Lnd/hoDGZe4nBDWu8X7pgBrXVFZLB6HS08+x6GNXpSmuig7FH75u6HnC02Gkw2iagxeXW101AMbVZDjGkCOuLEvrcHRc6XZo6EjM0XGlxTody3h4XHZzzsHiGh4800HFVW2LYMX1UAQprmwiKa6aLsCK0DjfDsYVoTDbDgYWmccFLDKPC1lkFhe0iGlTXNAiZHnCgotQfY0LXCTFBS5yExe4yE1c4CIpLnCRm7jARVJc6CLXuAYQkf5ZXNpgiOjuWVwDhgirZw/0AUSE+yebNxpFRHdPNjgtiAirJyuTEUWEx8fHrWBEtPkQEQ6fIsLjoztJDySyHlcDdtXaiqvjf3RIIjxuHrZBuSHGuLYeUWosEW7M+hnCHkyEg1n9FFcgNBFuPF3pGp7o8ESYnaUL3nGkJkQR5la5WrU3s0SgIndonH0tfkTrCUykbXgFhbSJHX90zQsqIkAR6hzPcB0RIYoQdX3Q8QOOvaEzmCIXGfuFp0gGkUFd6HcUWZJD5AdfqEVERERERJBF4r+KyBwREZEnIrW68OfdIvZVkV98wRUioleGHP5H5Od7RdJusl8O+ReUCLXT+OBFXNycQRcZOQ1wPuTfWCKxLbboIsMkoq8mNaaI0TwxvW6t15MZmAiNHNHhdHKaI2giVPM6fk0kFCxCDa/Sr4n8KlnEBF6jWRNpSxbZqsuuiOiyRci2T6YkvRqibBGiIVzHP6i0+798LU/pIkTGDlVVWUM0Lt5S5Rvm1YG1BYrckIbtL4onvXHmEJct4vlKE2oVNZbXrapwEep5G3e7wCxdhNwjExMvELp8kU2T9GZNH5gBRJZ11Z4TSrXMGCLk1WwW7PqZU8h20GNsiCdBsI97q8oW+eJ8kxwsRWpYkXsG/SEi8z9j0FUDK0LU9Woa42BIAYuc8dZ29AW8yBkRKRIRKQ0RKQ0RKQ0RKQ0RKQ0RKQ0RKQ0RKQ0RKQ0RKY2w+cenHkuk2hyujYoYTCJMC+oYHQZ289P3bfwPEPRGW0OcKhTi5vyw/hKtQCjEtrTf8INBrZk4xrr43k4J6xNNWMUTloBwHGlrazs7NMyMdoasfWfq27809Nt0urgvpP0mvv0Mj3Nd+F1N9JpnaJRnrAWmuumrdZjTMeFrpbRWqgY8OQRBEARBEARBEARB+G/+AvjLPTg1VPHsAAAAAElFTkSuQmCC"},d49c:function(e,t,s){}}]);