(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e811cc8a"],{"11e9":function(e,t,n){var a=n("52a7"),r=n("4630"),i=n("6821"),o=n("6a99"),s=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?l:function(e,t){if(e=i(e),t=o(t,!0),c)try{return l(e,t)}catch(n){}if(s(e,t))return r(!a.f.call(e,t),e[t])}},"2f21":function(e,t,n){"use strict";var a=n("79e5");e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},"372d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},r=[],i={},o=i,s=(n("ee47"),n("2877")),c=Object(s["a"])(o,a,r,!1,null,"6c517b7e",null),l=c.exports;n.d(t,"a",function(){return u});var u=function(e){return function(){return{component:e,loading:l,delay:0}}}},"4cbd":function(e,t,n){"use strict";var a=n("f4b6"),r=n.n(a);r.a},"55dd":function(e,t,n){"use strict";var a=n("5ca1"),r=n("d8e8"),i=n("4bf8"),o=n("79e5"),s=[].sort,c=[1,2,3];a(a.P+a.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!n("2f21")(s)),"Array",{sort:function(e){return void 0===e?s.call(i(this)):s.call(i(this),r(e))}})},"5dbc":function(e,t,n){var a=n("d3f4"),r=n("8b97").set;e.exports=function(e,t,n){var i,o=t.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&a(i)&&r&&r(e,i),e}},"8b97":function(e,t,n){var a=n("d3f4"),r=n("cb7c"),i=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:i}},9093:function(e,t,n){var a=n("ce10"),r=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,r)}},"9f9e":function(e,t,n){},a975:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-detail"},[n("nav-bar",{attrs:{list:e.nav}}),n("index-header",{attrs:{"user-info":e.userInfo,isShowUpload:!1}}),n("section",{staticClass:"target-detail-box"},[e._l(e.indexTpl,function(t,a){return n("el-row",{key:a,staticClass:"target-detail"},[n("el-row",{staticClass:"target-detail-title"},[n("span",{staticClass:"target-title"},[e._v(e._s(t.name))]),n("span",{staticClass:"target-weight"},[e._v(e._s(e.constants.TARGET_WEIGH)+e._s(e._f("filterWeight")(t.weight)))])]),n("el-form",{ref:"form"+a,refInFor:!0,attrs:{model:t}},[n("el-table",{attrs:{data:t.targets,border:"","header-cell-style":{backgroundColor:"#F5F6F7",color:"#303133"}}},[t.template_columns.weight?n("el-table-column",{attrs:{label:e.constants.TARGET_WEIGH,width:"180",align:"center",prop:"weights"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[e._v(e._s(e._f("filterWeight")(Number(t.row.weights))))])]}}],null,!0)}):e._e(),"finance"===t.key&&t.template_columns.indicator_name?n("el-table-column",{attrs:{label:e.constants.TARGET_NAME,"min-width":"240",align:"center",prop:"target"}}):e._e(),"finance"!==t.key&&t.template_columns.indicator_name?n("el-table-column",{attrs:{label:e.constants.TARGET_NAME,"min-width":"240",align:"center","render-header":e.changeLabel,prop:"target"}}):e._e(),t.template_columns.specific_job?n("el-table-column",{attrs:{label:e.constants.TASK_DESCRIPTION,"min-width":"300","header-align":"center",prop:"content"}}):e._e(),t.template_columns.metrics?n("el-table-column",{attrs:{label:e.constants.YARD_STICK,"min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[n("ul",e._l(t.template_columns.metrics,function(t,r){return n("li",{key:r,staticClass:"flex"},[n("el-col",{staticClass:"measure-title"},[Number(t.is_required)?n("span",{staticClass:"is-required"},[e._v("*")]):e._e(),n("span",[e._v(" "+e._s(t.name))])]),n("el-col",[e._v(e._s(a.row[t.key]))])],1)}),0)]}}],null,!0)}):e._e()],1)],1)],1)}),n("ul",{staticClass:"sub-total"},[e.isFinance?n("li",[e._v("\n        "+e._s(e.constants.FINANCE_DIMENSIONALITY_SUBTOTAL)+"   "+e._s(this.handleSubTotal("finance"))+"%\n      ")]):e._e(),e.isWork?n("li",[e._v("\n        工作维度小计   "+e._s(this.handleSubTotal("work"))+"%\n      ")]):e._e(),e.isTeam?n("li",[e._v("\n        团队维度小计   "+e._s(this.handleSubTotal("team"))+"%\n      ")]):e._e(),n("li",{staticClass:"performance-total"},[e._v("\n        业绩维度合计   "+e._s(this.handleSubTotal("finance")+this.handleSubTotal("work")+this.handleSubTotal("team"))+"%\n      ")])])],2),n("div",{staticClass:"footer-button"},[e.showApplay?n("el-button",{on:{click:e.changeIndex}},[e._v("申请指标调整")]):e._e(),e.showAgree?n("el-button",{staticClass:"tempeorary-memory",on:{click:e.rejectTarget}},[e._v("待共识")]):e._e(),e.showAgree?n("el-button",{staticClass:"submit-button",on:{click:e.agreeTarget}},[e._v("同意")]):e._e(),e.showApprovalBtn?n("el-button",{on:{click:e.checkExamine}},[e._v(e._s(e.constants.CHECK_EXAMINE_LOG))]):e._e()],1),e.isRejectDialog?n("reject-dialog",{attrs:{visible:e.isRejectDialog},on:{close:e.closeRejectDialog,update:e.jumpPage}}):e._e(),e.isAgreeDialog?n("agree-dialog",{attrs:{visible:e.isAgreeDialog},on:{close:e.closeAgreeDialog}}):e._e(),n("approval-records",{attrs:{"is-examine-dialog":e.isExamineDialog,approvalData:e.approvalData},on:{close:e.closeExamine}})],1)},r=[],i=(n("ac6a"),n("55dd"),n("7f7f"),n("c5f6"),n("372d")),o=n("38fb"),s=n("c9f1"),c=n("fea5"),l={components:{"nav-bar":Object(i["a"])(n.e("chunk-6f993239").then(n.bind(null,"3208"))),"index-header":Object(i["a"])(n.e("chunk-944cd112").then(n.bind(null,"5007"))),"reject-dialog":Object(i["a"])(n.e("chunk-2d0ddc50").then(n.bind(null,"8398"))),"agree-dialog":Object(i["a"])(n.e("chunk-2d0c02ed").then(n.bind(null,"4160"))),"approval-records":Object(i["a"])(n.e("chunk-2bba306f").then(n.bind(null,"5a52")))},data:function(){return{constants:{TARGET_WEIGH:o["Xe"],TARGET_NAME:o["Ue"],TASK_DESCRIPTION:o["Ye"],YARD_STICK:o["rf"],ADD_TARGET_LINE:o["g"],FINANCE_DIMENSIONALITY_SUBTOTAL:o["Vb"],CHECK_EXAMINE_LOG:o["E"]},nav:[],userId:this.$route.params.uid,userInfo:{avatar:"",cycle:"",department_name:"",executive_type:"",indicator_setting_end_time:"",isolation_name:"",isolation_workcode:"",name:"",opinion:"",performance_name:"",stage:"",stage_text:"",superior_name:"",superior_workcode:"",workcode:"",perforamnce_user_id:this.$route.params.uid},indexTpl:[],isTeam:!1,isWork:!1,isFinance:!1,currentType:this.$route.params.type,nowTime:"",showApplay:!1,showAgree:!1,isRejectDialog:!1,isAgreeDialog:!1,isExamineDialog:!1,approvalData:[],showApprovalBtn:!1}},filters:{filterWeight:function(e){if(0===e||e)return e+"%"},filterObject:function(e){}},methods:{jumpPage:function(){this.$router.push(s["m"])},checkExamine:function(){this.isExamineDialog=!0},closeExamine:function(){this.isExamineDialog=!1},rejectTarget:function(){this.isRejectDialog=!0},closeRejectDialog:function(){this.isRejectDialog=!1},agreeTarget:function(){this.isAgreeDialog=!0},closeAgreeDialog:function(){this.isAgreeDialog=!1},changeIndex:function(){this.$router.push(Object(s["jb"])(this.$route.params.id,this.$route.params.uid))},handleSubTotal:function(e){for(var t=0,n=0;n<this.indexTpl.length;n++)e===this.indexTpl[n].key&&(t=Number(this.indexTpl[n].weight));return t},changeLabel:function(e,t){var n=t.column;return e("div",[e("span",n.label),e("br"),e("span","（最多可填写"),e("span",{style:{color:"red"}},5),e("span","项）")])},getUserInfo:function(){var e=this,t={performance_user_id:this.$route.params.uid};Object(c["X"])(t).then(function(t){var n=t.avatar,a=t.cycle,r=t.department_name,i=t.executive_type,o=t.indicator_setting_end_time,s=t.isolation_name,c=t.isolation_workcode,l=t.name,u=t.opinion,f=t.performance_name,p=t.stage,d=t.stage_text,h=t.superior_name,m=t.superior_workcode,_=t.workcode;e.userInfo={avatar:n,cycle:a,department_name:r,executive_type:i,indicator_setting_end_time:o,isolation_name:s,isolation_workcode:c,name:l,opinion:u,performance_name:f,stage:p,stage_text:d,superior_name:h,superior_workcode:m,workcode:_,perforamnce_user_id:e.$route.params.uid},e.nowTime=new Date;var g=new Date(e.userInfo.indicator_setting_end_time);e.nowTime.getTime()<g.getTime()&&20===e.userInfo.stage&&"my"===e.currentType?e.showApplay=!0:e.showApplay=!1,10===e.userInfo.stage&&"subteam"===e.currentType?e.showAgree=!0:e.showAgree=!1}).catch(function(e){})},getWrokAndTeamTarget:function(){var e=this,t={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid};Object(c["W"])(t).then(function(t){e.handleIndexData(t)}).catch(function(e){})},handleIndexData:function(e){this.isTeam=void 0!==e.team,this.isWork=void 0!==e.work,this.isFinance=void 0!==e.finance,this.indexTpl=[];var t=[];if(this.isTeam){var n=e.team;this.$set(t,n.sort-1,{key:n.key,sort:n.sort,name:n.name,weight:n.weight,targets:n.targets||[],template_columns:n.template_columns})}if(this.isWork){var a=e.work;this.$set(t,a.sort-1,{key:a.key,sort:a.sort,name:a.name,weight:a.weight,targets:a.targets||[],template_columns:a.template_columns})}if(this.isFinance){var r=e.finance;this.$set(t,r.sort-1,{key:r.key,sort:r.sort,name:r.name,weight:r.weight,targets:r.targets||[],template_columns:r.template_columns})}for(var i=0;i<t.length;i++)t[i]&&this.indexTpl.push(t[i])}},created:function(){var e=this;"my"===this.currentType?this.nav=[{label:"我的评分",href:s["l"]},{label:"指标详情",active:!0}]:"team"===this.currentType||"subteam"===this.currentType?this.nav=[{label:"团队评分",href:s["m"]},{label:"评分详情",href:Object(s["B"])(this.$route.params.id,this.$route.params.uid)},{label:"指标详情",active:!0}]:this.nav=[{label:"组织部绩效考核列表",href:s["kb"]},{label:"考核详情",href:Object(s["t"])(this.$route.params.id)},{label:"指标详情",active:!0}],this.getUserInfo(),this.getWrokAndTeamTarget();var t={performance_user_id:this.$route.params.uid};Object(c["B"])(t).then(function(t){t.records.forEach(function(e){"green"===e.sign?(e["icon"]="el-icon-check",e["color"]="rgb(41, 197, 80)"):"red"===e.sign?(e["icon"]="my-icon",e["color"]=""):"blue"===e.sign&&(e["icon"]="my-affriming",e["color"]="")}),e.approvalData=t.records||[],e.showApprovalBtn=!!e.approvalData.length}).catch(function(e){})}},u=l,f=(n("ab7b"),n("4cbd"),n("2877")),p=Object(f["a"])(u,a,r,!1,null,"c85442d8",null);t["default"]=p.exports},aa77:function(e,t,n){var a=n("5ca1"),r=n("be13"),i=n("79e5"),o=n("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(e,t,n){var r={},s=i(function(){return!!o[e]()||c[e]()!=c}),l=r[e]=s?t(p):o[e];n&&(r[n]=l),a(a.P+a.F*s,"String",r)},p=f.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},ab7b:function(e,t,n){"use strict";var a=n("ffe1"),r=n.n(a);r.a},c5f6:function(e,t,n){"use strict";var a=n("7726"),r=n("69a8"),i=n("2d95"),o=n("5dbc"),s=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,f=n("86cc").f,p=n("aa77").trim,d="Number",h=a[d],m=h,_=h.prototype,g=i(n("2aeb")(_))==d,b="trim"in String.prototype,v=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():p(t,3);var n,a,r,i=t.charCodeAt(0);if(43===i||45===i){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var o,c=t.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>r)return NaN;return parseInt(c,a)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(g?c(function(){_.valueOf.call(n)}):i(n)!=d)?o(new m(v(t)),n,h):v(t)};for(var T,w=n("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;w.length>y;y++)r(m,T=w[y])&&!r(h,T)&&f(h,T,u(m,T));h.prototype=_,_.constructor=h,n("2aba")(a,d,h)}},ee47:function(e,t,n){"use strict";var a=n("9f9e"),r=n.n(a);r.a},f4b6:function(e,t,n){},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ffe1:function(e,t,n){}}]);