(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e05d243"],{"11e9":function(t,n,a){var r=a("52a7"),i=a("4630"),s=a("6821"),o=a("6a99"),c=a("69a8"),l=a("c69a"),u=Object.getOwnPropertyDescriptor;n.f=a("9e1e")?u:function(t,n){if(t=s(t),n=o(n,!0),l)try{return u(t,n)}catch(e){}if(c(t,n))return i(!r.f.call(t,n),t[n])}},"28a5":function(e,t,n){"use strict";var a=n("aae3"),r=n("cb7c"),i=n("ebd6"),s=n("0390"),o=n("9def"),c=n("5f1b"),l=n("520a"),u=n("79e5"),f=Math.min,d=[].push,p="split",h="length",m="lastIndex",g=4294967295,_=!u(function(){RegExp(g,"y")});n("214f")("split",2,function(e,t,n,u){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(r,e,t);var i,s,o,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,p=void 0===t?g:t>>>0,_=new RegExp(e.source,u+"g");while(i=l.call(_,r)){if(s=_[m],s>f&&(c.push(r.slice(f,i.index)),i[h]>1&&i.index<r[h]&&d.apply(c,i.slice(1)),o=i[0][h],f=s,c[h]>=p))break;_[m]===i.index&&_[m]++}return f===r[h]?!o&&_.test("")||c.push(""):c.push(r.slice(f)),c[h]>p?c.slice(0,p):c}:"0"[p](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,a){var r=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,a):v.call(String(r),n,a)},function(e,t){var a=u(v,e,this,t,v!==n);if(a.done)return a.value;var l=r(e),d=String(this),p=i(l,RegExp),h=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(_?"y":"g"),b=new p(_?l:"^(?:"+l.source+")",m),x=void 0===t?g:t>>>0;if(0===x)return[];if(0===d.length)return null===c(b,d)?[d]:[];var w=0,y=0,T=[];while(y<d.length){b.lastIndex=_?y:0;var k,I=c(b,_?d:d.slice(y));if(null===I||(k=f(o(b.lastIndex+(_?0:y)),d.length))===w)y=s(d,y,h);else{if(T.push(d.slice(w,y)),T.length===x)return T;for(var E=1;E<=I.length-1;E++)if(T.push(I[E]),T.length===x)return T;y=w=k}}return T.push(d.slice(w)),T}]})},"2f21":function(e,t,n){"use strict";var a=n("79e5");e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},"372d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},r=[],i={},s=i,o=(n("ee47"),n("2877")),c=Object(o["a"])(s,a,r,!1,null,"6c517b7e",null),l=c.exports;n.d(t,"a",function(){return u});var u=function(e){return function(){return{component:e,loading:l,delay:0}}}},"3a67":function(e,t,n){},"55dd":function(e,t,n){"use strict";var a=n("5ca1"),r=n("d8e8"),i=n("4bf8"),s=n("79e5"),o=[].sort,c=[1,2,3];a(a.P+a.F*(s(function(){c.sort(void 0)})||!s(function(){c.sort(null)})||!n("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(i(this)):o.call(i(this),r(e))}})},"5dbc":function(e,t,n){var a=n("d3f4"),r=n("8b97").set;e.exports=function(e,t,n){var i,s=t.constructor;return s!==n&&"function"==typeof s&&(i=s.prototype)!==n.prototype&&a(i)&&r&&r(e,i),e}},"6bf3":function(t,n,a){"use strict";a.r(n);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-detail"},[n("nav-bar",{attrs:{list:e.nav}}),n("index-header",{attrs:{"user-info":e.userInfo,isShowUpload:!0},on:{update:e.updatePage}}),n("section",{staticClass:"target-detail-box"},[e._l(e.indexTpl,function(t,a){return n("el-row",{key:a,staticClass:"target-detail"},[n("el-row",{staticClass:"target-detail-title"},[n("span",{staticClass:"target-title"},[e._v(e._s(t.name))]),n("span",{staticClass:"target-weight"},[e._v("权重"+e._s(e._f("filterWeight")(t.weight)))])]),n("el-form",{ref:"form"+a,refInFor:!0,attrs:{model:t}},[n("el-table",{attrs:{data:t.targets,border:"","header-cell-style":{backgroundColor:"#F5F6F7",color:"#303133"}}},[t.template_columns.weight?n("el-table-column",{attrs:{label:"权重",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["finance"===t.key?n("div",[e._v("\n                "+e._s(e._f("filterWeight")(a.row.weights))+"\n              ")]):n("el-form-item",{attrs:{prop:"targets."+a.$index+".weights",rules:e.rules.weights}},[n("el-input",{directives:[{name:"enter-number",rawName:"v-enter-number"}],attrs:{size:"small",type:"number",oninput:"if(value > 100)value = 100;if(value < 0)value = 0"},model:{value:a.row.weights,callback:function(t){e.$set(a.row,"weights",e._n(t))},expression:"scope.row.weights"}},[n("template",{slot:"append"},[e._v("%")])],2)],1)]}}],null,!0)}):e._e(),"finance"===t.key&&t.template_columns.indicator_name?n("el-table-column",{attrs:{label:"指标名称","min-width":"240",align:"center",prop:"target"}}):e._e(),"finance"!==t.key&&t.template_columns.indicator_name?n("el-table-column",{attrs:{label:"指标名称","min-width":"240",align:"center","render-header":e.changeLabel,prop:"target"},scopedSlots:e._u([{key:"default",fn:function(r){return[n("el-form-item",{attrs:{prop:"targets."+r.$index+".target",rules:e.rules.target}},[n("div",{staticClass:"flex"},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:12}},model:{value:r.row.target,callback:function(t){e.$set(r.row,"target",t)},expression:"scope.row.target"}}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.targets.length>1,expression:"targetItem.targets.length > 1"}],staticClass:"el-icon-delete delete-target",on:{click:function(t){return e.deleteTarget(a,""+r.$index)}}})],1)])]}}],null,!0)}):e._e(),t.template_columns.specific_job?n("el-table-column",{attrs:{label:"具体工作/任务描述","min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["finance"===t.key?n("div",[e._v("\n                "+e._s(a.row.content)+"\n              ")]):n("el-form-item",{attrs:{prop:"targets."+a.$index+".content",rules:e.rules.content}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:12}},model:{value:a.row.content,callback:function(t){e.$set(a.row,"content",t)},expression:"scope.row.content"}})],1)]}}],null,!0)}):e._e(),t.template_columns.metrics?n("el-table-column",{attrs:{label:"衡量标准","min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["finance"===t.key?n("ul",e._l(t.template_columns.metrics,function(t,r){return n("li",{key:r,staticClass:"flex"},[n("el-col",{staticClass:"measure-title"},[Number(t.is_required)?n("span",{staticClass:"is-required"},[e._v("*")]):e._e(),n("span",[e._v(" "+e._s(t.name))])]),n("el-col",[e._v(e._s(a.row[t.key]))])],1)}),0):e._e(),e._l(t.template_columns.metrics,function(r,i){return n("el-row",{key:i},["finance"!==t.key?n("el-form-item",{attrs:{label:r.name,"label-width":"130px",prop:"targets."+a.$index+"."+r.key,rules:Number(r.is_required)?[{required:!0,message:"必填字段不能为空",trigger:"blur"}]:[]}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:a.row[r.key],callback:function(t){e.$set(a.row,r.key,t)},expression:"scope.row[item.key]"}})],1):e._e()],1)})]}}],null,!0)}):e._e()],1),"finance"!==t.key&&e.getTableLen(a)<=4?n("el-button",{staticClass:"add-target",attrs:{icon:"el-icon-plus"},on:{click:function(t){return e.addTarget(a)}}},[e._v(e._s(e.constants.ADD_TARGET_LINE))]):e._e()],1)],1)}),n("ul",{staticClass:"sub-total"},[e.isFinance?n("li",[e._v("\n        "+e._s(e.constants.FINANCE_DIMENSIONALITY_SUBTOTAL)+"   "+e._s(this.handleSubTotal("finance"))+"%\n      ")]):e._e(),e.isWork?n("li",[e._v("\n        工作维度小计   "+e._s(this.handleSubTotal("work"))+"%\n      ")]):e._e(),e.isTeam?n("li",[e._v("\n        团队维度小计   "+e._s(this.handleSubTotal("team"))+"%\n      ")]):e._e(),n("li",{staticClass:"performance-total"},[e._v("\n        业绩维度合计   "+e._s(this.handleSubTotal("finance")+this.handleSubTotal("work")+this.handleSubTotal("team"))+"%\n      ")])]),n("div",{staticClass:"footer-button"},[n("el-button",{staticClass:"submit-button",on:{click:e.submitForm}},[e._v("提交")]),n("el-button",{staticClass:"tempeorary-memory",on:{click:e.temporaryMemory}},[e._v("暂存")]),e.showApprovalBtn?n("el-button",{on:{click:e.checkExamine}},[e._v("\n        "+e._s(e.constants.CHECK_EXAMINE_LOG)+"\n      ")]):e._e()],1)],2),n("approval-records",{attrs:{"is-examine-dialog":e.isExamineDialog,approvalData:e.approvalData},on:{close:e.closeExamine}})],1)},i=[],s=(a("55dd"),a("c5f6"),a("7f7f"),a("28a5"),a("ac6a"),a("456d"),a("372d")),o=a("38fb"),c=a("c9f1"),l=a("fea5"),u={components:{"nav-bar":Object(s["a"])(a.e("chunk-6f993239").then(a.bind(null,"3208"))),"index-header":Object(s["a"])(a.e("chunk-944cd112").then(a.bind(null,"5007"))),"approval-records":Object(s["a"])(a.e("chunk-2bba306f").then(a.bind(null,"5a52")))},data:function(){return{constants:{TARGET_WEIGH:o["We"],TARGET_NAME:o["Te"],TASK_DESCRIPTION:o["Xe"],YARD_STICK:o["pf"],ADD_TARGET_LINE:o["g"],FINANCE_DIMENSIONALITY_SUBTOTAL:o["Vb"],CHECK_EXAMINE_LOG:o["E"]},nav:[{label:o["zd"],href:c["l"]},{label:o["Se"],active:!0}],userId:this.$route.params.uid,userInfo:{avatar:"",cycle:"",department_name:"",executive_type:"",indicator_setting_end_time:"",isolation_name:"",isolation_workcode:"",name:"",opinion:"",performance_name:"",stage:"",stage_text:"",superior_name:"",superior_workcode:"",workcode:"",perforamnce_user_id:this.$route.params.uid},isExamineDialog:!1,indexTpl:[],indexDraftTpl:null,handelIndexDetail:[],rules:{weights:[{required:!0,message:"权重不能为空",trigger:"blur"}],target:[{required:!0,message:"指标名称不能为空",trigget:"blur"}],content:[{required:!0,message:"具体工作/任务描述不能为空",trigger:"blur"}]},isTeam:!1,isWork:!1,isFinance:!1,isGetInitData:!0,approvalData:[],showApprovalBtn:!1,isSubmit:!1}},filters:{filterWeight:function(e){if(e)return e+"%"},filterObject:function(e){}},directives:{enterNumber:{inserted:function(e){e.addEventListener("keypress",function(e){e=e||window.event;var t="number"==typeof e.charCode?e.charCode:e.keyCode,n=/\d/;!n.test(String.fromCharCode(t))&&t>9&&!e.ctrlKey&&(e.preventDefault?e.preventDefault():e.returnValue=!1)})}}},methods:{temporaryMemory:function(){var e=this;Object(l["tc"])(this.userId,this.indexTpl).then(function(t){e.$message({type:"success",message:"暂存成功"}),e.isGetInitData=!1,e.getUserDraft()}).catch(function(e){})},submitForm:function(){for(var t=this,n=Object.keys(this.$refs),a=0,r="",i=0;i<n.length;i++){var s=0;if(this.$refs[n[i]][0].validate(function(e,t){e?a++:(r=Object.keys(t),s=1)}),s){var o=r[0].split("."),u=0,f="";return 3===o.length?"weights"===o[2]?f="权重":"target"===o[2]?f="指标名称":"content"===o[2]&&(f="具体工作/任务描述"):5===o.length&&(f=this.indexTpl[i].table[u].metrics[o[3]].name),u=parseInt(o[1]),this.$message.error("".concat(this.indexTpl[i].name,"第").concat(u+1,"行").concat(f,"不能为空")),!1}}for(var d=0;d<this.indexTpl.length;d++)if(this.indexTpl[d].weight!=this.handleSubTotal(this.indexTpl[d].key))return this.$message.error("".concat(this.indexTpl[d].name,"权重之和不等于").concat(this.indexTpl[d].weight,"%, 请检查")),!1;if(a===n.length){for(var p={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid},h=0;h<this.indexTpl.length;h++)p[this.indexTpl[h].key]=this.indexTpl[h];this.$confirm("是否确认提交指标?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){Object(l["pc"])(t.$route.params.uid,p).then(function(e){t.isSubmit=!0,t.$router.push(Object(c["nb"])(t.$route.params.id,t.$route.params.uid,"my"))}).catch(e={})}).catch(function(e){})}},handleSubTotal:function(e){for(var t=0,n=0;n<this.indexTpl.length;n++)e===this.indexTpl[n].key&&(t=Number(this.indexTpl[n].weight));return t},addTarget:function(e){var t=this.indexTpl[e].targets[0]||{},n={id:t.id||0,content:"",disqualification:"",excellence:"",good:"",outstanding:"",performance_id:t.performance_id||this.$route.params.id,performance_user_id:t.performance_user_id||this.$route.params.uid,target:"",to_be_improved:"",type:t.type||this.indexTpl[e].key,weights:""};this.indexTpl[e].targets.push(n)},getTableLen:function(e){return this.indexTpl[e].targets.length},changeLabel:function(e,t){var n=t.column;return e("div",[e("span",n.label),e("br"),e("span","（最多可填写"),e("span",{style:{color:"red"}},5),e("span","项）")])},deleteTarget:function(e,t){this.indexTpl[e].targets.splice(t,1)},updatePage:function(e){this.indexDraftTpl=null,this.handleIndexData(e)},getUserInfo:function(){var e=this,t={performance_user_id:this.$route.params.uid};Object(l["Y"])(t).then(function(t){var n=t.avatar,a=t.cycle,r=t.department_name,i=t.executive_type,s=t.indicator_setting_end_time,o=t.isolation_name,c=t.isolation_workcode,l=t.name,u=t.opinion,f=t.performance_name,d=t.stage,p=t.stage_text,h=t.superior_name,m=t.superior_workcode,g=t.workcode;e.userInfo={avatar:n,cycle:a,department_name:r,executive_type:i,indicator_setting_end_time:s,isolation_name:o,isolation_workcode:c,name:l,opinion:u,performance_name:f,stage:d,stage_text:p,superior_name:h,superior_workcode:m,workcode:g,perforamnce_user_id:e.$route.params.uid}}).catch(function(e){})},closeExamine:function(){this.isExamineDialog=!1},checkExamine:function(){this.isExamineDialog=!0},getUserDraft:function(){var e=this;Object(l["C"])(this.userId).then(function(t){e.indexDraftTpl=t,e.isGetInitData?e.getWrokAndTeamTarget():e.handleData(t)}).catch(function(e){})},getWrokAndTeamTarget:function(){var e=this,t={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid};Object(l["X"])(t).then(function(t){e.handleIndexData(t)}).catch(function(e){})},handleIndexData:function(e){this.isTeam=void 0!==e.team,this.isWork=void 0!==e.work,this.isFinance=void 0!==e.finance,this.indexTpl=[];var t=[];if(this.isTeam){var n=e.team;this.$set(t,n.sort-1,{key:n.key,sort:n.sort,name:n.name,weight:n.weight,targets:n.targets||[],template_columns:n.template_columns})}if(this.isWork){var a=e.work;this.$set(t,a.sort-1,{key:a.key,sort:a.sort,name:a.name,weight:a.weight,targets:a.targets||[],template_columns:a.template_columns})}if(this.isFinance){var r=e.finance;this.$set(t,r.sort-1,{key:r.key,sort:r.sort,name:r.name,weight:r.weight,targets:r.targets||[],template_columns:r.template_columns})}for(var i=0;i<t.length;i++)t[i]&&this.indexTpl.push(t[i]);this.handleData(this.indexTpl)},handleData:function(e){null!==this.indexDraftTpl&&(e=this.indexDraftTpl);for(var t=0;t<e.length;t++)if(0===e[t].targets.length&&e[t].metrics){var n={outstanding:""};e[t].targets.push(n)}this.indexTpl=e}},created:function(){var e=this;this.getUserInfo(),this.getUserDraft();var t={performance_user_id:this.$route.params.uid};Object(l["B"])(t).then(function(t){t.records.forEach(function(e){"green"===e.sign?(e["icon"]="el-icon-check",e["color"]="rgb(41, 197, 80)"):"red"===e.sign?(e["icon"]="my-icon",e["color"]=""):"blue"===e.sign&&(e["icon"]="my-affriming",e["color"]="")}),e.approvalData=t.records||[],e.showApprovalBtn=!!e.approvalData.length}).catch(function(e){})},beforeDestroy:function(){this.isSubmit||Object(l["tc"])(this.$route.params.uid,this.indexTpl).then(function(e){}).catch(function(e){})}},f=u,d=(a("9956"),a("f68c"),a("2877")),p=Object(d["a"])(f,r,i,!1,null,"3cac8062",null);n["default"]=p.exports},"6eb6":function(e,t,n){},"8b97":function(t,n,a){var r=a("d3f4"),i=a("cb7c"),s=function(e,t){if(i(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(e){n=!0}return function(e,t){return s(e,t),n?e.__proto__=t:r(e,t),e}}({},!1):void 0),check:s}},9093:function(e,t,n){var a=n("ce10"),r=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,r)}},9956:function(e,t,n){"use strict";var a=n("3a67"),r=n.n(a);r.a},"9f9e":function(e,t,n){},aa77:function(e,t,n){var a=n("5ca1"),r=n("be13"),i=n("79e5"),s=n("fdef"),o="["+s+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(e,t,n){var r={},o=i(function(){return!!s[e]()||c[e]()!=c}),l=r[e]=o?t(d):s[e];n&&(r[n]=l),a(a.P+a.F*o,"String",r)},d=f.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},aae3:function(e,t,n){var a=n("d3f4"),r=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},c5f6:function(e,t,n){"use strict";var a=n("7726"),r=n("69a8"),i=n("2d95"),s=n("5dbc"),o=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",h=a[p],m=h,g=h.prototype,_=i(n("2aeb")(g))==p,v="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():d(t,3);var n,a,r,i=t.charCodeAt(0);if(43===i||45===i){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var s,c=t.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>r)return NaN;return parseInt(c,a)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(_?c(function(){g.valueOf.call(n)}):i(n)!=p)?s(new m(b(t)),n,h):b(t)};for(var x,w=n("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;w.length>y;y++)r(m,x=w[y])&&!r(h,x)&&f(h,x,u(m,x));h.prototype=g,g.constructor=h,n("2aba")(a,p,h)}},ee47:function(e,t,n){"use strict";var a=n("9f9e"),r=n.n(a);r.a},f68c:function(e,t,n){"use strict";var a=n("6eb6"),r=n.n(a);r.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);