(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0db18c2d"],{"11e9":function(t,n,r){var i=r("52a7"),a=r("4630"),s=r("6821"),o=r("6a99"),c=r("69a8"),l=r("c69a"),u=Object.getOwnPropertyDescriptor;n.f=r("9e1e")?u:function(t,n){if(t=s(t),n=o(n,!0),l)try{return u(t,n)}catch(e){}if(c(t,n))return a(!i.f.call(t,n),t[n])}},"1b28":function(e,t,n){},"28a5":function(e,t,n){"use strict";var r=n("aae3"),i=n("cb7c"),a=n("ebd6"),s=n("0390"),o=n("9def"),c=n("5f1b"),l=n("520a"),u=n("79e5"),d=Math.min,f=[].push,p="split",h="length",m="lastIndex",g=4294967295,_=!u(function(){RegExp(g,"y")});n("214f")("split",2,function(e,t,n,u){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(i,e,t);var a,s,o,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,p=void 0===t?g:t>>>0,_=new RegExp(e.source,u+"g");while(a=l.call(_,i)){if(s=_[m],s>d&&(c.push(i.slice(d,a.index)),a[h]>1&&a.index<i[h]&&f.apply(c,a.slice(1)),o=a[0][h],d=s,c[h]>=p))break;_[m]===a.index&&_[m]++}return d===i[h]?!o&&_.test("")||c.push(""):c.push(i.slice(d)),c[h]>p?c.slice(0,p):c}:"0"[p](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):v.call(String(i),n,r)},function(e,t){var r=u(v,e,this,t,v!==n);if(r.done)return r.value;var l=i(e),f=String(this),p=a(l,RegExp),h=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(_?"y":"g"),b=new p(_?l:"^(?:"+l.source+")",m),x=void 0===t?g:t>>>0;if(0===x)return[];if(0===f.length)return null===c(b,f)?[f]:[];var T=0,w=0,y=[];while(w<f.length){b.lastIndex=_?w:0;var k,I=c(b,_?f:f.slice(w));if(null===I||(k=d(o(b.lastIndex+(_?0:w)),f.length))===T)w=s(f,w,h);else{if(y.push(f.slice(T,w)),y.length===x)return y;for(var E=1;E<=I.length-1;E++)if(y.push(I[E]),y.length===x)return y;w=T=k}}return y.push(f.slice(T)),y}]})},"2a18":function(e,t,n){"use strict";var r=n("84bd"),i=n.n(r);i.a},"2f21":function(e,t,n){"use strict";var r=n("79e5");e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},"372d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},i=[],a={},s=a,o=(n("ee47"),n("2877")),c=Object(o["a"])(s,r,i,!1,null,"6c517b7e",null),l=c.exports;n.d(t,"a",function(){return u});var u=function(e){return function(){return{component:e,loading:l,delay:0}}}},"55dd":function(e,t,n){"use strict";var r=n("5ca1"),i=n("d8e8"),a=n("4bf8"),s=n("79e5"),o=[].sort,c=[1,2,3];r(r.P+r.F*(s(function(){c.sort(void 0)})||!s(function(){c.sort(null)})||!n("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(a(this)):o.call(a(this),i(e))}})},"5dbc":function(e,t,n){var r=n("d3f4"),i=n("8b97").set;e.exports=function(e,t,n){var a,s=t.constructor;return s!==n&&"function"==typeof s&&(a=s.prototype)!==n.prototype&&r(a)&&i&&i(e,a),e}},"6bf3":function(t,n,r){"use strict";r.r(n);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-detail"},[n("nav-bar",{attrs:{list:e.nav}}),n("index-header",{attrs:{"user-info":e.userInfo,isShowUpload:!0},on:{update:e.updatePage}}),n("section",{staticClass:"target-detail-box"},[e._l(e.indexTpl,function(t,r){return n("el-row",{key:r,staticClass:"target-detail"},[n("el-row",{staticClass:"target-detail-title"},[n("span",{staticClass:"target-title"},[e._v(e._s(t.name))]),n("span",{staticClass:"target-weight"},[e._v("权重"+e._s(e._f("filterWeight")(t.weight)))])]),n("el-form",{ref:"form"+r,refInFor:!0,attrs:{model:t}},[n("el-table",{attrs:{data:t.targets,border:"","header-cell-style":{backgroundColor:"#F5F6F7",color:"#303133"}}},[t.template_columns.weight?n("el-table-column",{attrs:{label:"权重",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return["finance"===t.key?n("div",[e._v("\n                "+e._s(e._f("filterWeight")(r.row.weights))+"\n              ")]):n("el-form-item",{attrs:{prop:"targets."+r.$index+".weights",rules:e.rules.weights}},[n("el-input",{directives:[{name:"enter-number",rawName:"v-enter-number"}],attrs:{size:"small",type:"number",oninput:"if(value > 100)value = 100;if(value < 0)value = 0"},model:{value:r.row.weights,callback:function(t){e.$set(r.row,"weights",e._n(t))},expression:"scope.row.weights"}},[n("template",{slot:"append"},[e._v("%")])],2)],1)]}}],null,!0)}):e._e(),"finance"===t.key&&t.template_columns.indicator_name?n("el-table-column",{attrs:{label:"指标名称","min-width":"240",align:"center",prop:"target"}}):e._e(),"finance"!==t.key&&t.template_columns.indicator_name?n("el-table-column",{attrs:{label:"指标名称","min-width":"240",align:"center","render-header":e.changeLabel,prop:"target"},scopedSlots:e._u([{key:"default",fn:function(i){return[n("el-form-item",{attrs:{prop:"targets."+i.$index+".target",rules:e.rules.target}},[n("div",{staticClass:"flex"},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:12}},model:{value:i.row.target,callback:function(t){e.$set(i.row,"target",t)},expression:"scope.row.target"}}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.targets.length>1,expression:"targetItem.targets.length > 1"}],staticClass:"el-icon-delete delete-target",on:{click:function(t){return e.deleteTarget(r,""+i.$index)}}})],1)])]}}],null,!0)}):e._e(),t.template_columns.specific_job?n("el-table-column",{attrs:{label:"具体工作/任务描述","min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(r){return["finance"===t.key?n("div",[e._v("\n                "+e._s(r.row.content)+"\n              ")]):n("el-form-item",{attrs:{prop:"targets."+r.$index+".content",rules:e.rules.content}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:12}},model:{value:r.row.content,callback:function(t){e.$set(r.row,"content",t)},expression:"scope.row.content"}})],1)]}}],null,!0)}):e._e(),t.template_columns.metrics?n("el-table-column",{attrs:{label:"衡量标准","min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(r){return["finance"===t.key?n("ul",e._l(t.template_columns.metrics,function(t,i){return n("li",{key:i,staticClass:"flex"},[n("el-col",{staticClass:"measure-title"},[Number(t.is_required)?n("span",{staticClass:"is-required"},[e._v("*")]):e._e(),n("span",[e._v(" "+e._s(t.name))])]),n("el-col",[e._v(e._s(r.row[t.key]))])],1)}),0):e._e(),e._l(t.template_columns.metrics,function(i,a){return n("el-row",{key:a},["finance"!==t.key?n("el-form-item",{attrs:{label:i.name,"label-width":"130px",prop:"targets."+r.$index+"."+i.key,rules:Number(i.is_required)?[{required:!0,message:"必填字段不能为空",trigger:"blur"}]:[]}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:r.row[i.key],callback:function(t){e.$set(r.row,i.key,t)},expression:"scope.row[item.key]"}})],1):e._e()],1)})]}}],null,!0)}):e._e()],1),"finance"!==t.key&&e.getTableLen(r)<=4?n("el-button",{staticClass:"add-target",attrs:{icon:"el-icon-plus"},on:{click:function(t){return e.addTarget(r)}}},[e._v(e._s(e.constants.ADD_TARGET_LINE))]):e._e()],1)],1)}),n("ul",{staticClass:"sub-total"},[e.isFinance?n("li",[e._v("\n        "+e._s(e.constants.FINANCE_DIMENSIONALITY_SUBTOTAL)+"   "+e._s(this.handleSubTotal("finance"))+"%\n      ")]):e._e(),e.isWork?n("li",[e._v("\n        工作维度小计   "+e._s(this.handleSubTotal("work"))+"%\n      ")]):e._e(),e.isTeam?n("li",[e._v("\n        团队维度小计   "+e._s(this.handleSubTotal("team"))+"%\n      ")]):e._e(),n("li",{staticClass:"performance-total"},[e._v("\n        业绩维度合计   "+e._s(this.handleSubTotal("finance")+this.handleSubTotal("work")+this.handleSubTotal("team"))+"%\n      ")])]),n("div",{staticClass:"footer-button"},[n("el-button",{staticClass:"submit-button",on:{click:e.submitForm}},[e._v("提交")]),n("el-button",{staticClass:"tempeorary-memory",on:{click:e.temporaryMemory}},[e._v("暂存")]),e.showApprovalBtn?n("el-button",{on:{click:e.checkExamine}},[e._v("\n        "+e._s(e.constants.CHECK_EXAMINE_LOG)+"\n      ")]):e._e()],1)],2),n("approval-records",{attrs:{"is-examine-dialog":e.isExamineDialog,approvalData:e.approvalData},on:{close:e.closeExamine}})],1)},a=[],s=(r("55dd"),r("c5f6"),r("7f7f"),r("28a5"),r("ac6a"),r("456d"),r("372d")),o=r("38fb"),c=r("c9f1"),l=r("fea5"),u={components:{"nav-bar":Object(s["a"])(r.e("chunk-6f993239").then(r.bind(null,"3208"))),"index-header":Object(s["a"])(r.e("chunk-5bb4e863").then(r.bind(null,"5007"))),"approval-records":Object(s["a"])(r.e("chunk-1fb56f62").then(r.bind(null,"5a52")))},data:function(){return{constants:{TARGET_WEIGH:o["We"],TARGET_NAME:o["Te"],TASK_DESCRIPTION:o["Xe"],YARD_STICK:o["pf"],ADD_TARGET_LINE:o["g"],FINANCE_DIMENSIONALITY_SUBTOTAL:o["Vb"],CHECK_EXAMINE_LOG:o["E"]},nav:[{label:o["zd"],href:c["l"]},{label:o["Se"],active:!0}],userId:this.$route.params.uid,userInfo:{avatar:"",cycle:"",department_name:"",executive_type:"",indicator_setting_end_time:"",isolation_name:"",isolation_workcode:"",name:"",opinion:"",performance_name:"",stage:"",stage_text:"",superior_name:"",superior_workcode:"",workcode:"",perforamnce_user_id:this.$route.params.uid},isExamineDialog:!1,indexTpl:[],indexDraftTpl:null,rules:{weights:[{required:!0,message:"权重不能为空",trigger:"blur"}],target:[{required:!0,message:"指标名称不能为空",trigger:"blur"}],content:[{required:!0,message:"具体工作/任务描述不能为空",trigger:"blur"}]},isTeam:!1,isWork:!1,isFinance:!1,isGetInitData:!0,approvalData:[],showApprovalBtn:!1,isSubmit:!1}},filters:{filterWeight:function(e){if(e)return e+"%"},filterObject:function(e){}},directives:{enterNumber:{inserted:function(e){e.addEventListener("keypress",function(e){e=e||window.event;var t="number"==typeof e.charCode?e.charCode:e.keyCode,n=/\d/;!n.test(String.fromCharCode(t))&&t>9&&!e.ctrlKey&&(e.preventDefault?e.preventDefault():e.returnValue=!1)})}}},methods:{temporaryMemory:function(){var e=this;Object(l["uc"])(this.userId,this.indexTpl).then(function(t){e.$message({type:"success",message:"暂存成功"}),e.isGetInitData=!1,e.getUserDraft()}).catch(function(e){})},submitForm:function(){for(var t=this,n=Object.keys(this.$refs),r=0,i="",a=0;a<n.length;a++){var s=0;if(this.$refs[n[a]][0].validate(function(e,t){e?r++:(i=Object.keys(t),s=1)}),s){var o=i[0].split("."),u=0,d="";return 3===o.length?"weights"===o[2]?d="权重":"target"===o[2]?d="指标名称":"content"===o[2]&&(d="具体工作/任务描述"):5===o.length&&(d=this.indexTpl[a].table[u].metrics[o[3]].name),u=parseInt(o[1]),this.$message.error("".concat(this.indexTpl[a].name,"第").concat(u+1,"行").concat(d,"不能为空")),!1}}for(var f=0;f<this.indexTpl.length;f++)if(this.indexTpl[f].weight!=this.handleSubTotal(this.indexTpl[f].key))return this.$message.error("".concat(this.indexTpl[f].name,"权重之和不等于").concat(this.indexTpl[f].weight,"%, 请检查")),!1;if(r===n.length){for(var p={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid},h=0;h<this.indexTpl.length;h++)p[this.indexTpl[h].key]=this.indexTpl[h];this.$confirm("是否确认提交指标?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){Object(l["qc"])(t.$route.params.uid,p).then(function(e){t.isSubmit=!0,t.$router.push(Object(c["nb"])(t.$route.params.id,t.$route.params.uid,"my"))}).catch(e={})}).catch(function(e){})}},handleSubTotal:function(e){for(var t=0,n=0;n<this.indexTpl.length;n++)e===this.indexTpl[n].key&&(t=Number(this.indexTpl[n].weight));return t},addTarget:function(e){var t=this.indexTpl[e].targets[0]||{},n={id:t.id||0,content:"",disqualification:"",excellence:"",good:"",outstanding:"",performance_id:t.performance_id||this.$route.params.id,performance_user_id:t.performance_user_id||this.$route.params.uid,target:"",to_be_improved:"",type:t.type||this.indexTpl[e].key,weights:""};this.indexTpl[e].targets.push(n)},getTableLen:function(e){return this.indexTpl[e].targets||(this.indexTpl[e].targets=[]),this.indexTpl[e].targets.length},changeLabel:function(e,t){var n=t.column;return e("div",[e("span",n.label),e("br"),e("span","（最多可填写"),e("span",{style:{color:"red"}},5),e("span","项）")])},deleteTarget:function(e,t){this.indexTpl[e].targets.splice(t,1)},updatePage:function(e){this.indexDraftTpl=null,this.handleIndexData(e)},getUserInfo:function(){var e=this,t={performance_user_id:this.$route.params.uid};Object(l["Z"])(t).then(function(t){var n=t.avatar,r=t.cycle,i=t.department_name,a=t.executive_type,s=t.indicator_setting_end_time,o=t.isolation_name,c=t.isolation_workcode,l=t.name,u=t.opinion,d=t.performance_name,f=t.stage,p=t.stage_text,h=t.superior_name,m=t.superior_workcode,g=t.workcode;e.userInfo={avatar:n,cycle:r,department_name:i,executive_type:a,indicator_setting_end_time:s,isolation_name:o,isolation_workcode:c,name:l,opinion:u,performance_name:d,stage:f,stage_text:p,superior_name:h,superior_workcode:m,workcode:g,perforamnce_user_id:e.$route.params.uid}}).catch(function(e){})},closeExamine:function(){this.isExamineDialog=!1},checkExamine:function(){this.isExamineDialog=!0},getUserDraft:function(){var e=this;Object(l["D"])(this.userId).then(function(t){e.indexDraftTpl=t,e.isGetInitData?e.getWrokAndTeamTarget():e.handleData(t)}).catch(function(e){})},getWrokAndTeamTarget:function(){var e=this,t={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid};Object(l["Y"])(t).then(function(t){e.handleIndexData(t)}).catch(function(e){})},handleIndexData:function(e){this.isTeam=void 0!==e.team,this.isWork=void 0!==e.work,this.isFinance=void 0!==e.finance,this.indexTpl=[];var t=[];this.isTeam&&(t[e.team.sort-1]=e.team),this.isWork&&(t[e.work.sort-1]=e.work),this.isFinance&&(t[e.finance.sort-1]=e.finance);for(var n=0;n<t.length;n++)t[n]&&this.indexTpl.push(t[n]);this.handleData(this.indexTpl)},handleData:function(e){for(var t=0;t<e.length;t++)null!==this.indexDraftTpl&&"finance"!==e[t].name&&this.indexDraftTpl[t].targets&&0!==this.indexDraftTpl[t].targets.length&&(e[t].targets=this.indexDraftTpl[t].targets);this.indexTpl=e}},created:function(){var e=this;this.getUserInfo(),this.getUserDraft();var t={performance_user_id:this.$route.params.uid};Object(l["C"])(t).then(function(t){t.records.forEach(function(e){"green"===e.sign?(e["icon"]="el-icon-check",e["color"]="rgb(41, 197, 80)"):"red"===e.sign?(e["icon"]="my-icon",e["color"]=""):"blue"===e.sign&&(e["icon"]="my-affriming",e["color"]="")}),e.approvalData=t.records||[],e.showApprovalBtn=!!e.approvalData.length}).catch(function(e){})},beforeDestroy:function(){this.isSubmit||Object(l["uc"])(this.$route.params.uid,this.indexTpl).then(function(e){}).catch(function(e){})}},d=u,f=(r("2a18"),r("b9d8"),r("2877")),p=Object(f["a"])(d,i,a,!1,null,"cf471ccc",null);n["default"]=p.exports},"84bd":function(e,t,n){},"8b97":function(t,n,r){var i=r("d3f4"),a=r("cb7c"),s=function(e,t){if(a(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,i){try{i=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),n=!(t instanceof Array)}catch(e){n=!0}return function(e,t){return s(e,t),n?e.__proto__=t:i(e,t),e}}({},!1):void 0),check:s}},9093:function(e,t,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"9f9e":function(e,t,n){},aa77:function(e,t,n){var r=n("5ca1"),i=n("be13"),a=n("79e5"),s=n("fdef"),o="["+s+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(e,t,n){var i={},o=a(function(){return!!s[e]()||c[e]()!=c}),l=i[e]=o?t(f):s[e];n&&(i[n]=l),r(r.P+r.F*o,"String",i)},f=d.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},aae3:function(e,t,n){var r=n("d3f4"),i=n("2d95"),a=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},b9d8:function(e,t,n){"use strict";var r=n("1b28"),i=n.n(r);i.a},c5f6:function(e,t,n){"use strict";var r=n("7726"),i=n("69a8"),a=n("2d95"),s=n("5dbc"),o=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,d=n("86cc").f,f=n("aa77").trim,p="Number",h=r[p],m=h,g=h.prototype,_=a(n("2aeb")(g))==p,v="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():f(t,3);var n,r,i,a=t.charCodeAt(0);if(43===a||45===a){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var s,c=t.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>i)return NaN;return parseInt(c,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(_?c(function(){g.valueOf.call(n)}):a(n)!=p)?s(new m(b(t)),n,h):b(t)};for(var x,T=n("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;T.length>w;w++)i(m,x=T[w])&&!i(h,x)&&d(h,x,u(m,x));h.prototype=g,g.constructor=h,n("2aba")(r,p,h)}},ee47:function(e,t,n){"use strict";var r=n("9f9e"),i=n.n(r);i.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);