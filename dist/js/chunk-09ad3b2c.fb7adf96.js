(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09ad3b2c"],{"11e9":function(e,t,n){var i=n("52a7"),a=n("4630"),r=n("6821"),s=n("6a99"),o=n("69a8"),l=n("c69a"),c=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?c:function(e,t){if(e=r(e),t=s(t,!0),l)try{return c(e,t)}catch(n){}if(o(e,t))return a(!i.f.call(e,t),e[t])}},"18f3":function(e,t,n){},"28a5":function(e,t,n){"use strict";var i=n("aae3"),a=n("cb7c"),r=n("ebd6"),s=n("0390"),o=n("9def"),l=n("5f1b"),c=n("520a"),u=n("79e5"),f=Math.min,d=[].push,p="split",h="length",m="lastIndex",g=4294967295,_=!u(function(){RegExp(g,"y")});n("214f")("split",2,function(e,t,n,u){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!i(e))return n.call(a,e,t);var r,s,o,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,p=void 0===t?g:t>>>0,_=new RegExp(e.source,u+"g");while(r=c.call(_,a)){if(s=_[m],s>f&&(l.push(a.slice(f,r.index)),r[h]>1&&r.index<a[h]&&d.apply(l,r.slice(1)),o=r[0][h],f=s,l[h]>=p))break;_[m]===r.index&&_[m]++}return f===a[h]?!o&&_.test("")||l.push(""):l.push(a.slice(f)),l[h]>p?l.slice(0,p):l}:"0"[p](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,i){var a=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,a,i):v.call(String(a),n,i)},function(e,t){var i=u(v,e,this,t,v!==n);if(i.done)return i.value;var c=a(e),d=String(this),p=r(c,RegExp),h=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(_?"y":"g"),b=new p(_?c:"^(?:"+c.source+")",m),x=void 0===t?g:t>>>0;if(0===x)return[];if(0===d.length)return null===l(b,d)?[d]:[];var w=0,T=0,y=[];while(T<d.length){b.lastIndex=_?T:0;var k,I=l(b,_?d:d.slice(T));if(null===I||(k=f(o(b.lastIndex+(_?0:T)),d.length))===w)T=s(d,T,h);else{if(y.push(d.slice(w,T)),y.length===x)return y;for(var E=1;E<=I.length-1;E++)if(y.push(I[E]),y.length===x)return y;T=w=k}}return y.push(d.slice(w)),y}]})},"2f21":function(e,t,n){"use strict";var i=n("79e5");e.exports=function(e,t){return!!e&&i(function(){t?e.call(null,function(){},1):e.call(null)})}},"372d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:!0,expression:"true",modifiers:{lock:!0}}],staticClass:"my-loading",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})},a=[],r={},s=r,o=(n("ee47"),n("2877")),l=Object(o["a"])(s,i,a,!1,null,"6c517b7e",null),c=l.exports;n.d(t,"a",function(){return u});var u=function(e){return function(){return{component:e,loading:c,delay:0}}}},"3b3d":function(e,t,n){},"55dd":function(e,t,n){"use strict";var i=n("5ca1"),a=n("d8e8"),r=n("4bf8"),s=n("79e5"),o=[].sort,l=[1,2,3];i(i.P+i.F*(s(function(){l.sort(void 0)})||!s(function(){l.sort(null)})||!n("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(r(this)):o.call(r(this),a(e))}})},"5dbc":function(e,t,n){var i=n("d3f4"),a=n("8b97").set;e.exports=function(e,t,n){var r,s=t.constructor;return s!==n&&"function"==typeof s&&(r=s.prototype)!==n.prototype&&i(r)&&a&&a(e,r),e}},"6bf3":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-detail"},[n("nav-bar",{attrs:{list:e.nav}}),n("index-header",{attrs:{"user-info":e.userInfo,isShowUpload:!0},on:{update:e.updatePage}}),n("section",{staticClass:"target-detail-box"},[e._l(e.indexTpl,function(t,i){return n("el-row",{key:i,staticClass:"target-detail"},[n("el-row",{staticClass:"target-detail-title"},[n("span",{staticClass:"target-title"},[e._v(e._s(t.name))]),n("span",{staticClass:"target-weight"},[e._v("权重"+e._s(e._f("filterWeight")(t.weight)))])]),n("el-form",{ref:"form"+i,refInFor:!0,attrs:{model:t}},[n("el-table",{attrs:{data:t.targets,border:"","header-cell-style":{backgroundColor:"#F5F6F7",color:"#303133"}}},[t.template_columns.weight?n("el-table-column",{attrs:{label:"权重",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return["true"===t.isFinancial?n("div",[e._v("\n                "+e._s(e._f("filterWeight")(i.row.weights))+"\n              ")]):n("el-form-item",{attrs:{prop:"targets."+i.$index+".weights",rules:e.rules.weights}},[n("el-input",{attrs:{type:"number",size:"small",oninput:"if(value > 100)value = 100;if(value < 0)value = 0"},model:{value:i.row.weights,callback:function(t){e.$set(i.row,"weights",e._n(t))},expression:"scope.row.weights"}},[n("template",{slot:"append"},[e._v("%")])],2)],1)]}}],null,!0)}):e._e(),"true"===t.isFinancial&&t.template_columns.indicator_name?n("el-table-column",{attrs:{label:"指标名称","min-width":"240",align:"center",prop:"target"}}):e._e(),"false"===t.isFinancial&&t.template_columns.indicator_name?n("el-table-column",{attrs:{label:"指标名称","min-width":"240",align:"center","render-header":e.changeLabel,prop:"target"},scopedSlots:e._u([{key:"default",fn:function(a){return[n("el-form-item",{attrs:{prop:"targets."+a.$index+".target",rules:e.rules.target}},[n("div",{staticClass:"flex"},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:12}},model:{value:a.row.target,callback:function(t){e.$set(a.row,"target",t)},expression:"scope.row.target"}}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.targets.length>1,expression:"targetItem.targets.length > 1"}],staticClass:"el-icon-delete delete-target",on:{click:function(t){return e.deleteTarget(i,""+a.$index)}}})],1)])]}}],null,!0)}):e._e(),t.template_columns.specific_job?n("el-table-column",{attrs:{label:"具体工作/任务描述","min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(i){return["true"===t.isFinancial?n("div",[e._v("\n                "+e._s(i.row.content)+"\n              ")]):n("el-form-item",{attrs:{prop:"targets."+i.$index+".content",rules:e.rules.content}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:12}},model:{value:i.row.content,callback:function(t){e.$set(i.row,"content",t)},expression:"scope.row.content"}})],1)]}}],null,!0)}):e._e(),t.template_columns.metrics?n("el-table-column",{attrs:{label:"衡量标准","min-width":"300","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(i){return["true"===t.isFinancial?n("ul",e._l(t.template_columns.metrics,function(t,a){return n("li",{key:a,staticClass:"flex"},[n("el-col",{staticClass:"measure-title"},[Number(t.is_required)?n("span",{staticClass:"is-required"},[e._v("*")]):e._e(),n("span",[e._v(" "+e._s(t.name))])]),n("el-col",[e._v(e._s(i.row[t.key]))])],1)}),0):e._e(),e._l(t.template_columns.metrics,function(a,r){return n("el-row",{key:r},["false"===t.isFinancial?n("el-form-item",{attrs:{label:a.name,"label-width":"130px",prop:"targets."+i.$index+"."+a.key,rules:Number(a.is_required)?[{required:!0,message:"必填字段不能为空",trigger:"blur"}]:[]}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:i.row[a.key],callback:function(t){e.$set(i.row,a.key,t)},expression:"scope.row[item.key]"}})],1):e._e()],1)})]}}],null,!0)}):e._e()],1),"false"===t.isFinancial&&e.getTableLen(i)<=4?n("el-button",{staticClass:"add-target",attrs:{icon:"el-icon-plus"},on:{click:function(t){return e.addTarget(i)}}},[e._v(e._s(e.constants.ADD_TARGET_LINE))]):e._e()],1)],1)}),n("ul",{staticClass:"sub-total"},[e.isFinance?n("li",[e._v("\n        "+e._s(e.constants.FINANCE_DIMENSIONALITY_SUBTOTAL)+"   "+e._s(this.handleSubTotal("finance"))+"%\n      ")]):e._e(),e.isWork?n("li",[e._v("\n        工作维度小计   "+e._s(this.handleSubTotal("work"))+"%\n      ")]):e._e(),e.isTeam?n("li",[e._v("\n        团队维度小计   "+e._s(this.handleSubTotal("team"))+"%\n      ")]):e._e(),n("li",{staticClass:"performance-total"},[e._v("\n        业绩维度合计   "+e._s(this.handleSubTotal("finance")+this.handleSubTotal("work")+this.handleSubTotal("team"))+"%\n      ")])]),n("el-row",{staticClass:"footer-button"},[n("el-button",{staticClass:"submit-button",on:{click:e.submitForm}},[e._v("提交")]),n("el-button",{staticClass:"tempeorary-memory",on:{click:e.temporaryMemory}},[e._v("暂存")]),n("el-button",{on:{click:e.checkExamine}},[e._v("\n        "+e._s(e.constants.CHECK_EXAMINE_LOG)+"\n      ")]),n("el-button",{on:{click:e.returnList}},[e._v("返回")])],1)],2),n("examine-detail",{attrs:{"is-examine-dialog":e.isExamineDialog,perforamnce_user_id:e.userInfo.perforamnce_user_id},on:{close:e.closeExamine}})],1)},a=[],r=(n("55dd"),n("c5f6"),n("7f7f"),n("28a5"),n("ac6a"),n("456d"),n("372d")),s=n("38fb"),o=n("c9f1"),l=n("fea5"),c={components:{"nav-bar":Object(r["a"])(n.e("chunk-d5094d72").then(n.bind(null,"3208"))),"index-header":Object(r["a"])(n.e("chunk-fdc02764").then(n.bind(null,"e48a"))),"examine-detail":Object(r["a"])(n.e("chunk-6b2f4dcc").then(n.bind(null,"1622")))},data:function(){return{constants:{TARGET_WEIGH:s["We"],TARGET_NAME:s["Te"],TASK_DESCRIPTION:s["Xe"],YARD_STICK:s["qf"],ADD_TARGET_LINE:s["g"],FINANCE_DIMENSIONALITY_SUBTOTAL:s["Vb"],CHECK_EXAMINE_LOG:s["E"]},nav:[{label:s["yd"],href:o["j"]},{label:s["Se"],active:!0}],userId:this.$route.params.uid,userInfo:{avatar:"",cycle:"",department_name:"",executive_type:"",indicator_setting_end_time:"",isolation_name:"",isolation_workcode:"",name:"",opinion:"",performance_name:"",stage:"",stage_text:"",superior_name:"",superior_workcode:"",workcode:"",perforamnce_user_id:this.$route.params.uid},isExamineDialog:!1,indexTpl:[],indexDraftTpl:null,handelIndexDetail:[],rules:{weights:[{required:!0,message:"权重不能为空",trigger:"blur"}],target:[{required:!0,message:"指标名称不能为空",trigget:"blur"}],content:[{required:!0,message:"具体工作/任务描述不能为空",trigger:"blur"}]},isTeam:!1,isWork:!1,isFinance:!1,isGetInitData:!0}},filters:{filterWeight:function(e){if(e)return e+"%"},filterObject:function(e){}},methods:{temporaryMemory:function(){var e=this;Object(l["ic"])(this.userId,this.indexTpl).then(function(t){e.$message({type:"success",message:"暂存成功"}),e.isGetInitData=!1,e.getUserDraft()}).catch(function(e){})},submitForm:function(){for(var e=this,t=Object.keys(this.$refs),n=0,i="",a=0;a<t.length;a++){var r=0;if(this.$refs[t[a]][0].validate(function(e,t){e?n++:(i=Object.keys(t),r=1)}),r){var s=i[0].split("."),c=0,u="";return 3===s.length?"weights"===s[2]?u="权重":"target"===s[2]?u="指标名称":"content"===s[2]&&(u="具体工作/任务描述"):5===s.length&&(u=this.indexTpl[a].table[c].metrics[s[3]].name),c=parseInt(s[1]),this.$message.error("".concat(this.indexTpl[a].name,"第").concat(c+1,"行").concat(u,"不能为空")),!1}}for(var f=0;f<this.indexTpl.length;f++)if(this.indexTpl[f].weight!=this.handleSubTotal(this.indexTpl[f].key))return this.$message.error("".concat(this.indexTpl[f].name,"权重之和不等于").concat(this.indexTpl[f].weight,"%, 请检查")),!1;if(n===t.length){for(var d={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid},p=0;p<this.indexTpl.length;p++)delete this.indexTpl[p].isFinancial,d[this.indexTpl[p].key]=this.indexTpl[p];this.$confirm("是否确认提交指标?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){Object(l["fc"])(e.$route.params.uid,JSON.stringify(d)).then(function(t){localStorage.clearItem(e.userId),e.$router.push(Object(o["ib"])(e.$route.params.id,e.$route.params.uid,"my"))}).catch(function(e){})}).catch(function(e){})}},returnList:function(){var e=this;Object(l["ic"])(this.$route.params.uid,this.indexTpl).then(function(t){e.$router.go(-1)}).catch(function(e){})},handleSubTotal:function(e){for(var t=0,n=0;n<this.indexTpl.length;n++)e===this.indexTpl[n].key&&(t=Number(this.indexTpl[n].weight));return t},addTarget:function(e){this.indexTpl[e].targets.push(this.indexTpl[e].template_columns)},getTableLen:function(e){return this.indexTpl[e].targets.length},changeLabel:function(e,t){var n=t.column;return e("div",[e("span",n.label),e("br"),e("span","（最多可填写"),e("span",{style:{color:"red"}},5),e("span","项）")])},deleteTarget:function(e,t){this.indexTpl[e].targets.splice(t,1)},updatePage:function(e){this.indexDraftTpl=null,this.handleIndexData(e)},getUserInfo:function(){var e=this,t={performance_user_id:this.$route.params.uid};Object(l["W"])(t).then(function(t){var n=t.avatar,i=t.cycle,a=t.department_name,r=t.executive_type,s=t.indicator_setting_end_time,o=t.isolation_name,l=t.isolation_workcode,c=t.name,u=t.opinion,f=t.performance_name,d=t.stage,p=t.stage_text,h=t.superior_name,m=t.superior_workcode,g=t.workcode;e.userInfo={avatar:n,cycle:i,department_name:a,executive_type:r,indicator_setting_end_time:s,isolation_name:o,isolation_workcode:l,name:c,opinion:u,performance_name:f,stage:d,stage_text:p,superior_name:h,superior_workcode:m,workcode:g,perforamnce_user_id:e.$route.params.uid}}).catch(function(e){})},closeExamine:function(){this.isExamineDialog=!1},checkExamine:function(){this.isExamineDialog=!0},getUserDraft:function(){var e=this;Object(l["A"])(this.userId).then(function(t){e.indexDraftTpl=t,e.isGetInitData?e.getWrokAndTeamTarget():e.handleData(t)}).catch(function(e){})},getWrokAndTeamTarget:function(){var e=this,t={performance_id:this.$route.params.id,performance_user_id:this.$route.params.uid};Object(l["V"])(t).then(function(t){e.handleIndexData(t)}).catch(function(e){})},handleIndexData:function(e){this.isTeam=void 0!==e.team,this.isWork=void 0!==e.work,this.isFinance=void 0!==e.finance,this.indexTpl=[];var t=[];if(this.isTeam){var n=e.team;this.$set(t,n.sort-1,{key:n.key,isFinancial:"false",sort:n.sort,name:n.name,weight:n.weight,targets:n.targets||[],template_columns:n.template_columns})}if(this.isWork){var i=e.work;this.$set(t,i.sort-1,{key:i.key,isFinancial:"false",sort:i.sort,name:i.name,weight:i.weight,targets:i.targets||[],template_columns:i.template_columns})}if(this.isFinance){var a=e.finance;this.$set(t,a.sort-1,{key:a.key,isFinancial:"true",sort:a.sort,name:a.name,weight:a.weight,targets:a.targets||[],template_columns:a.template_columns})}for(var r=0;r<t.length;r++)t[r]&&this.indexTpl.push(t[r]);this.handleData(this.indexTpl)},handleData:function(e){null!==this.indexDraftTpl&&(e=this.indexDraftTpl);for(var t=0;t<e.length;t++)if(0===e[t].targets.length&&e[t].metrics){var n={outstanding:""};e[t].targets.push(n)}this.indexTpl=e}},created:function(){this.getUserInfo(),this.getUserDraft()}},u=c,f=(n("b105"),n("9679"),n("2877")),d=Object(f["a"])(u,i,a,!1,null,"002c9d9c",null);t["default"]=d.exports},"8b97":function(e,t,n){var i=n("d3f4"),a=n("cb7c"),r=function(e,t){if(a(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,n){return r(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:r}},9093:function(e,t,n){var i=n("ce10"),a=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,a)}},9679:function(e,t,n){"use strict";var i=n("3b3d"),a=n.n(i);a.a},"9f9e":function(e,t,n){},aa77:function(e,t,n){var i=n("5ca1"),a=n("be13"),r=n("79e5"),s=n("fdef"),o="["+s+"]",l="​",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(e,t,n){var a={},o=r(function(){return!!s[e]()||l[e]()!=l}),c=a[e]=o?t(d):s[e];n&&(a[n]=c),i(i.P+i.F*o,"String",a)},d=f.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},aae3:function(e,t,n){var i=n("d3f4"),a=n("2d95"),r=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==a(e))}},b105:function(e,t,n){"use strict";var i=n("18f3"),a=n.n(i);a.a},c5f6:function(e,t,n){"use strict";var i=n("7726"),a=n("69a8"),r=n("2d95"),s=n("5dbc"),o=n("6a99"),l=n("79e5"),c=n("9093").f,u=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",h=i[p],m=h,g=h.prototype,_=r(n("2aeb")(g))==p,v="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():d(t,3);var n,i,a,r=t.charCodeAt(0);if(43===r||45===r){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+t}for(var s,l=t.slice(2),c=0,u=l.length;c<u;c++)if(s=l.charCodeAt(c),s<48||s>a)return NaN;return parseInt(l,i)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(_?l(function(){g.valueOf.call(n)}):r(n)!=p)?s(new m(b(t)),n,h):b(t)};for(var x,w=n("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;w.length>T;T++)a(m,x=w[T])&&!a(h,x)&&f(h,x,u(m,x));h.prototype=g,g.constructor=h,n("2aba")(i,p,h)}},ee47:function(e,t,n){"use strict";var i=n("9f9e"),a=n.n(i);a.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);