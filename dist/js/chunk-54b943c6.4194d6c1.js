(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54b943c6"],{"11e9":function(e,t,n){var a=n("52a7"),i=n("4630"),r=n("6821"),s=n("6a99"),o=n("69a8"),l=n("c69a"),c=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?c:function(e,t){if(e=r(e),t=s(t,!0),l)try{return c(e,t)}catch(n){}if(o(e,t))return i(!a.f.call(e,t),e[t])}},"28a5":function(e,t,n){"use strict";var a=n("aae3"),i=n("cb7c"),r=n("ebd6"),s=n("0390"),o=n("9def"),l=n("5f1b"),c=n("520a"),u=n("79e5"),f=Math.min,d=[].push,p="split",m="length",h="lastIndex",g=4294967295,_=!u(function(){RegExp(g,"y")});n("214f")("split",2,function(e,t,n,u){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[m]||2!="ab"[p](/(?:ab)*/)[m]||4!="."[p](/(.?)(.?)/)[m]||"."[p](/()()/)[m]>1||""[p](/.?/)[m]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(i,e,t);var r,s,o,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,p=void 0===t?g:t>>>0,_=new RegExp(e.source,u+"g");while(r=c.call(_,i)){if(s=_[h],s>f&&(l.push(i.slice(f,r.index)),r[m]>1&&r.index<i[m]&&d.apply(l,r.slice(1)),o=r[0][m],f=s,l[m]>=p))break;_[h]===r.index&&_[h]++}return f===i[m]?!o&&_.test("")||l.push(""):l.push(i.slice(f)),l[m]>p?l.slice(0,p):l}:"0"[p](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,a){var i=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,i,a):v.call(String(i),n,a)},function(e,t){var a=u(v,e,this,t,v!==n);if(a.done)return a.value;var c=i(e),d=String(this),p=r(c,RegExp),m=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(_?"y":"g"),b=new p(_?c:"^(?:"+c.source+")",h),x=void 0===t?g:t>>>0;if(0===x)return[];if(0===d.length)return null===l(b,d)?[d]:[];var T=0,w=0,y=[];while(w<d.length){b.lastIndex=_?w:0;var k,I=l(b,_?d:d.slice(w));if(null===I||(k=f(o(b.lastIndex+(_?0:w)),d.length))===T)w=s(d,w,m);else{if(y.push(d.slice(T,w)),y.length===x)return y;for(var E=1;E<=I.length-1;E++)if(y.push(I[E]),y.length===x)return y;w=T=k}}return y.push(d.slice(T)),y}]})},"2f21":function(e,t,n){"use strict";var a=n("79e5");e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},"372d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},i=[],r={},s=r,o=(n("ee47"),n("2877")),l=Object(o["a"])(s,a,i,!1,null,"6c517b7e",null),c=l.exports;n.d(t,"a",function(){return u});var u=function(e){return function(){return{component:e,loading:c,delay:0}}}},"55dd":function(e,t,n){"use strict";var a=n("5ca1"),i=n("d8e8"),r=n("4bf8"),s=n("79e5"),o=[].sort,l=[1,2,3];a(a.P+a.F*(s(function(){l.sort(void 0)})||!s(function(){l.sort(null)})||!n("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(r(this)):o.call(r(this),i(e))}})},"5daa":function(e,t,n){},"5dbc":function(e,t,n){var a=n("d3f4"),i=n("8b97").set;e.exports=function(e,t,n){var r,s=t.constructor;return s!==n&&"function"==typeof s&&(r=s.prototype)!==n.prototype&&a(r)&&i&&i(e,r),e}},"6bf3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-detail"},[n("nav-bar",{attrs:{list:e.nav}}),n("index-header",{attrs:{"user-info":e.userInfo,isShowUpload:!0},on:{update:e.updatePage}}),n("section",{staticClass:"target-detail-box"},[e._l(e.indexTpl,function(t,a){return n("el-row",{key:a,staticClass:"target-detail"},[n("el-row",{staticClass:"target-detail-title"},[n("span",{staticClass:"target-title"},[e._v(e._s(t.name))]),n("span",{staticClass:"target-weight"},[e._v(e._s(e.constants.TARGET_WEIGH)+e._s(e._f("filterWeight")(t.weight)))])]),n("el-form",{ref:"form"+a,refInFor:!0,attrs:{model:t}},[n("el-table",{attrs:{data:t.targets,border:"","header-cell-style":{backgroundColor:"#F5F6F7",color:"#303133"}}},[n("el-table-column",{attrs:{label:e.constants.TARGET_WEIGH,width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["true"===t.isFinancial?n("div",[e._v("\n                "+e._s(a.row.weights)+"%\n              ")]):n("el-form-item",{attrs:{prop:"targets."+a.$index+".weights",rules:e.rules.weights}},[n("el-input",{attrs:{type:"number",size:"small",oninput:"if(value > 100)value = 100;if(value < 0)value = 0"},model:{value:a.row.weights,callback:function(t){e.$set(a.row,"weights",e._n(t))},expression:"scope.row.weights"}},[n("template",{slot:"append"},[e._v("%")])],2)],1)]}}],null,!0)}),"true"===t.isFinancial?n("el-table-column",{attrs:{label:e.constants.TARGET_NAME,"min-width":"240",align:"center",prop:"target"}}):e._e(),"false"===t.isFinancial?n("el-table-column",{attrs:{label:e.constants.TARGET_NAME,"min-width":"240",align:"center","render-header":e.changeLabel,prop:"target"},scopedSlots:e._u([{key:"default",fn:function(i){return[n("el-form-item",{attrs:{prop:"targets."+i.$index+".target",rules:e.rules.target}},[n("div",{staticClass:"flex"},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:12}},model:{value:i.row.target,callback:function(t){e.$set(i.row,"target",t)},expression:"scope.row.target"}}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.targets.length>1,expression:"targetItem.targets.length > 1"}],staticClass:"el-icon-delete delete-target",on:{click:function(t){return e.deleteTarget(a,""+i.$index)}}})],1)])]}}],null,!0)}):e._e(),n("el-table-column",{attrs:{label:e.constants.TASK_DESCRIPTION,"min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["true"===t.isFinancial?n("div",[e._v("\n                "+e._s(a.row.content)+"\n              ")]):n("el-form-item",{attrs:{prop:"targets."+a.$index+".content",rules:e.rules.content}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:12}},model:{value:a.row.content,callback:function(t){e.$set(a.row,"content",t)},expression:"scope.row.content"}})],1)]}}],null,!0)}),n("el-table-column",{attrs:{label:e.constants.YARD_STICK,"min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["true"===t.isFinancial?n("ul",e._l(a.row.metrics,function(t,i){return n("li",{key:i,staticClass:"flex"},[n("el-col",{staticClass:"measure-title"},[t.is_required?n("span",{staticClass:"is-required"},[e._v("*")]):e._e(),n("span",[e._v(" "+e._s(t.name))])]),n("el-col",[e._v(e._s(a.row[t.key]))])],1)}),0):e._e(),e._l(a.row.metrics,function(i,r){return n("el-row",{key:r},["false"===t.isFinancial?n("el-form-item",{attrs:{label:i.name,"label-width":"130px",prop:"targets."+a.$index+"."+i.key,rules:i.is_required?[{required:!0,message:"必填字段不能为空",trigger:"blur"}]:[]}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:a.row[i.key],callback:function(t){e.$set(a.row,i.key,t)},expression:"scope.row[item.key]"}})],1):e._e()],1)})]}}],null,!0)})],1),!t.isFinancial&&e.getTableLen(a)<=4?n("el-button",{staticClass:"add-target",attrs:{icon:"el-icon-plus"},on:{click:function(t){return e.addTarget(a)}}},[e._v(e._s(e.constants.ADD_TARGET_LINE))]):e._e()],1)],1)}),n("ul",{staticClass:"sub-total"},[e.isFinance?n("li",[e._v("\n        "+e._s(e.constants.FINANCE_DIMENSIONALITY_SUBTOTAL)+"   "+e._s(this.handleSubTotal("finance"))+"%\n      ")]):e._e(),e.isWork?n("li",[e._v("\n        工作维度小计   "+e._s(this.handleSubTotal("work"))+"%\n      ")]):e._e(),e.isTeam?n("li",[e._v("\n        团队维度小计   "+e._s(this.handleSubTotal("team"))+"%\n      ")]):e._e(),n("li",{staticClass:"performance-total"},[e._v("\n        业绩维度合计   "+e._s(this.handleSubTotal("finance")+this.handleSubTotal("work")+this.handleSubTotal("team"))+"%\n      ")])]),n("el-row",{staticClass:"footer-button"},[n("el-button",{staticClass:"submit-button",on:{click:e.submitForm}},[e._v("提交")]),n("el-button",{staticClass:"tempeorary-memory",on:{click:e.temporaryMemory}},[e._v("暂存")]),n("el-button",{on:{click:e.checkExamine}},[e._v("\n        "+e._s(e.constants.CHECK_EXAMINE_LOG)+"\n      ")]),n("el-button",{on:{click:e.returnList}},[e._v("返回")])],1)],2),n("examine-detail",{attrs:{"is-examine-dialog":e.isExamineDialog,perforamnce_user_id:e.userInfo.perforamnce_user_id},on:{close:e.closeExamine}})],1)},i=[],r=(n("55dd"),n("c5f6"),n("7f7f"),n("28a5"),n("ac6a"),n("456d"),n("372d")),s=n("38fb"),o=n("c9f1"),l=n("fea5"),c={components:{"nav-bar":Object(r["a"])(n.e("chunk-d5094d72").then(n.bind(null,"3208"))),"index-header":Object(r["a"])(n.e("chunk-dae9d09a").then(n.bind(null,"e48a"))),"examine-detail":Object(r["a"])(n.e("chunk-6b2f4dcc").then(n.bind(null,"1622")))},data:function(){return{constants:{TARGET_WEIGH:s["We"],TARGET_NAME:s["Te"],TASK_DESCRIPTION:s["Xe"],YARD_STICK:s["qf"],ADD_TARGET_LINE:s["g"],FINANCE_DIMENSIONALITY_SUBTOTAL:s["Vb"],CHECK_EXAMINE_LOG:s["E"]},nav:[{label:s["yd"],href:o["j"]},{label:s["Se"],active:!0}],userId:this.$route.params.uid,userInfo:{performance_name:"",stage:0,opinion:"",avatar:"",name:"",workcode:"",superior_name:"",superior_workcode:"",executive_type:"",department_name:"",cycle:"",indicator_setting_end_time:"",perforamnce_user_id:this.$route.params.uid},isExamineDialog:!1,indexTpl:[],indexDraftTpl:[],handelIndexDetail:[],rules:{weights:[{required:!0,message:"权重不能为空",trigger:"blur"}],target:[{required:!0,message:"指标名称不能为空",trigget:"blur"}],content:[{required:!0,message:"具体工作/任务描述不能为空",trigger:"blur"}]},metricsRules:{content:[{required:!0,message:"必填字段不能为空",trigger:"blur"}]},isTeam:!1,isWork:!1,isFinance:!1}},filters:{filterWeight:function(e){return e+"%"},filterObject:function(e){}},methods:{temporaryMemory:function(){var e=this;Object(l["ic"])(this.userId,this.indexTpl).then(function(t){e.$message({type:"success",message:"暂存成功"}),e.getUserDraft()}).catch(function(e){})},submitForm:function(){for(var e=this,t=Object.keys(this.$refs),n=0,a="",i=0;i<t.length;i++){var r=0;if(this.$refs[t[i]][0].validate(function(e,t){e?n++:(a=Object.keys(t),r=1)}),r){var s=a[0].split("."),c=0,u="";return 3===s.length?"weights"===s[2]?u="权重":"target"===s[2]?u="指标名称":"content"===s[2]&&(u="具体工作/任务描述"):5===s.length&&(u=this.indexTpl[i].table[c].metrics[s[3]].name),c=parseInt(s[1]),this.$message.error("".concat(this.indexTpl[i].name,"第").concat(c+1,"行").concat(u,"不能为空")),!1}}for(var f=0;f<this.indexTpl.length;f++)if(this.indexTpl[f].weight!=this.handleSubTotal(this.indexTpl[f].type))return this.$message.error("".concat(this.indexTpl[f].name,"权重之和不等于").concat(this.indexTpl[f].weight,"%, 请检查")),!1;n===t.length&&this.$confirm("是否确认提交指标?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){Object(l["fc"])(e.$route.params.uid,e.indexTpl).then(function(t){localStorage.clearItem(e.userId),e.$router.push(Object(o["ib"])(e.$route.params.id,e.$route.params.uid,"my"))}).catch(function(e){})}).catch(function(e){})},returnList:function(){var e=this;Object(l["ic"])(this.$route.params.uid,this.indexTpl).then(function(t){e.$router.go(-1)}).catch(function(e){})},handleSubTotal:function(e){for(var t=0,n=0;n<this.indexTpl.length;n++)e===this.indexTpl[n].key&&(t=Number(this.indexTpl[n].weight));return t},addTarget:function(e){this.indexTpl[e].targets.push(this.indexTpl[e].template_columns)},getTableLen:function(e){return this.indexTpl[e].targets.length},changeLabel:function(e,t){var n=t.column;return e("div",[e("span",n.label),e("br"),e("span","（最多可填写"),e("span",{style:{color:"red"}},5),e("span","项）")])},deleteTarget:function(e,t){this.indexTpl[e].targets.splice(t,1)},updatePage:function(){this.getWrokAndTeamTarget()},getUserInfo:function(){var e=this,t={performance_user_id:this.$route.params.uid};Object(l["W"])(t).then(function(t){var n=t.avatar,a=t.cycle,i=t.department_name,r=t.executive_type,s=t.indicator_setting_end_time,o=t.isolation_name,l=t.isolation_workcode,c=t.name,u=t.opinion,f=t.performance_name,d=t.stage,p=t.stage_text,m=t.superior_name,h=t.superior_workcode,g=t.workcode;e.userInfo={avatar:n,cycle:a,department_name:i,executive_type:r,indicator_setting_end_time:s,isolation_name:o,isolation_workcode:l,name:c,opinion:u,performance_name:f,stage:d,stage_text:p,superior_name:m,superior_workcode:h,workcode:g,perforamnce_user_id:e.$route.params.uid}}).catch(function(e){})},closeExamine:function(){this.isExamineDialog=!1},checkExamine:function(){this.isExamineDialog=!0},getUserDraft:function(){var e=this;Object(l["A"])(this.userId).then(function(t){e.indexDraftTpl=t,e.getWrokAndTeamTarget()}).catch(function(e){})},getWrokAndTeamTarget:function(){var e=this,t={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid};Object(l["V"])(t).then(function(t){if(e.isTeam=void 0!==t.team,e.isWork=void 0!==t.work,e.isFinance=void 0!==t.finance,e.indexTpl=[],e.isTeam){var n=t.team;e.$set(e.indexTpl,n.sort-1,{key:n.key,isFinancial:"false",sort:n.sort,name:n.name,weight:n.weight,targets:n.targets||[],template_columns:n.template_columns})}if(e.isWork){var a=t.work;e.$set(e.indexTpl,a.sort-1,{key:a.key,isFinancial:"false",sort:a.sort,type:a.key,name:a.name,weight:a.weight,targets:a.targets||[],template_columns:a.template_columns})}if(e.isFinance){var i=t.finance;e.$set(e.indexTpl,i.sort-1,{key:i.key,isFinancial:"true",sort:i.sort,type:i.key,name:i.name,weight:i.weight,targets:i.targets||[],template_columns:i.template_columns})}e.handleIndexData(e.indexTpl)}).catch(function(e){})},handleIndexData:function(e){this.indexDraftTpl;if(null!==this.indexDraftTpl)this.indexTpl=this.indexDraftTpl;else{for(var t=0;t<e.length;t++)if(0===e[t].targets.length)e[t].targets[0].metrics=e[t].template_columns.metrics;else for(var n=0;n<e[t].targets.length;n++)e[t].targets[n].metrics=e[t].template_columns.metrics;this.indexTpl=e}}},created:function(){this.getUserInfo(),this.getUserDraft()}},u=c,f=(n("eae1"),n("af82"),n("2877")),d=Object(f["a"])(u,a,i,!1,null,"dadfc12a",null);t["default"]=d.exports},"7f0d":function(e,t,n){},"8b97":function(e,t,n){var a=n("d3f4"),i=n("cb7c"),r=function(e,t){if(i(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,n){return r(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:r}},9093:function(e,t,n){var a=n("ce10"),i=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,i)}},"9f9e":function(e,t,n){},aa77:function(e,t,n){var a=n("5ca1"),i=n("be13"),r=n("79e5"),s=n("fdef"),o="["+s+"]",l="​",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(e,t,n){var i={},o=r(function(){return!!s[e]()||l[e]()!=l}),c=i[e]=o?t(d):s[e];n&&(i[n]=c),a(a.P+a.F*o,"String",i)},d=f.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},aae3:function(e,t,n){var a=n("d3f4"),i=n("2d95"),r=n("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==i(e))}},af82:function(e,t,n){"use strict";var a=n("7f0d"),i=n.n(a);i.a},c5f6:function(e,t,n){"use strict";var a=n("7726"),i=n("69a8"),r=n("2d95"),s=n("5dbc"),o=n("6a99"),l=n("79e5"),c=n("9093").f,u=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",m=a[p],h=m,g=m.prototype,_=r(n("2aeb")(g))==p,v="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():d(t,3);var n,a,i,r=t.charCodeAt(0);if(43===r||45===r){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+t}for(var s,l=t.slice(2),c=0,u=l.length;c<u;c++)if(s=l.charCodeAt(c),s<48||s>i)return NaN;return parseInt(l,a)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(_?l(function(){g.valueOf.call(n)}):r(n)!=p)?s(new h(b(t)),n,m):b(t)};for(var x,T=n("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;T.length>w;w++)i(h,x=T[w])&&!i(m,x)&&f(m,x,u(h,x));m.prototype=g,g.constructor=m,n("2aba")(a,p,m)}},eae1:function(e,t,n){"use strict";var a=n("5daa"),i=n.n(a);i.a},ee47:function(e,t,n){"use strict";var a=n("9f9e"),i=n.n(a);i.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);