(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-410d66b8"],{3855:function(e,t,r){},"47af":function(e,t,r){"use strict";r.d(t,"a",function(){return n});r("6b54");var n=function(e){var t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),a=e.getHours(),o=e.getMinutes();e.getSeconds();return[t,r,n].map(i).join("-")+" "+[a,o].map(i).join(":")},i=function(e){return e=e.toString(),e[1]?e:"0"+e}},"4ad8":function(e,t,r){"use strict";var n=r("3855"),i=r.n(n);i.a},"57c6":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"},on:{"before-leave":e.beforeLeave,"after-enter":e.afterEnter}},[e.visible?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.outside,expression:"outside"}],staticClass:"objectTree-container"},[r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),r("el-tree",{ref:"tree",attrs:{"empty-text":"努力加载中...",props:e.defaultProps,"default-checked-keys":e.checkedKeys,"node-key":"id","filter-node-method":e.filterNode,"show-checkbox":"",data:e.treeOps},on:{"check-change":e.treeChange}})],1):e._e()])},i=[],a=r("cebc"),o=(r("7f7f"),r("f7fe")),s={props:{visible:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}},checkedNodes:{type:Array,default:function(){return[]}},exclusive:{type:Boolean,default:!1}},data:function(){return{defaultProps:{label:"name"},filterText:"",tree:this.data}},methods:{filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},afterEnter:function(e){e.style.width="30%"},beforeLeave:function(e){e.style.width="0px",e.style.padding="0px"},treeChange:o(function(e,t,r){var n=this.$refs.tree.getCheckedNodes();if(this.exclusive){if(t){var i=this.findRoot(e.id).id;this.disabledOtherBranch(i)}0==n.length&&this.enableAll()}this.$emit("update:checkedNodes",n.map(function(e){var t=e.name,r=e.id;return{name:t,department_id:r}}))},500),findRoot:function(e){for(var t={},r=0;r<this.data.length;r++)if(t=this.data[r],this.findNode(e,this.data[r]))return t},findNode:function(e,t){if(t.id==e)return!0;var r=t.children;if(r&&r.length>0)for(var n=0;n<r.length;n++)if(this.findNode(e,r[n]))return!0;return!1},disabledOtherBranch:function(e){for(var t=this.tree,r=0;r<t.length;r++)t[r].id!=e&&(t[r]=this.disableNode(t[r],!0),this.$set(t,r,Object(a["a"])({},t[r])))},disableNode:function(e,t){var r=this;e.disabled=t;var n=e.children;return n&&n.length>0&&(e.children=n.map(function(e){return r.disableNode(e,t)})),e},enableAll:function(){for(var e=this.tree,t=0;t<e.length;t++)e[t]=this.disableNode(e[t],!1),this.$set(e,t,Object(a["a"])({},e[t]))},outside:function(){this.$emit("update:visible",!1)}},watch:{filterText:function(e){this.$refs.tree.filter(e)},data:function(e){this.tree=e}},computed:{checkedKeys:function(){return this.checkedNodes.map(function(e){var t=e.department_id;return t})},treeOps:function(){return this.tree||this.data}},directives:{"click-outside":{bind:function(e,t,r){if("function"!==typeof t.value){var n=r.context.name;"[Vue-click-outside:] provided expression '".concat(t.expression,"' is not a function, but has to be");n&&"Found in component '".concat(n,"'")}var i=t.modifiers.bubble,a=function(r){(i||!e.contains(r.target)&&e!==r.target)&&t.value(r)};e.__vueClickOutside__=a,document.addEventListener("click",a)},unbind:function(e,t){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}}},l=s,c=(r("4ad8"),r("2877")),u=Object(c["a"])(l,n,i,!1,null,"9761c9f8",null);t["a"]=u.exports},a481:function(e,t,r){"use strict";var n=r("cb7c"),i=r("4bf8"),a=r("9def"),o=r("4588"),s=r("0390"),l=r("5f1b"),c=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,function(e,t,r,h){return[function(n,i){var a=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,a,i):r.call(String(a),n,i)},function(e,t){var i=h(r,e,this,t);if(i.done)return i.value;var d=n(e),p=String(this),f="function"===typeof t;f||(t=String(t));var b=d.global;if(b){var y=d.unicode;d.lastIndex=0}var g=[];while(1){var k=l(d,p);if(null===k)break;if(g.push(k),!b)break;var F=String(k[0]);""===F&&(d.lastIndex=s(p,a(d.lastIndex),y))}for(var _="",T=0,E=0;E<g.length;E++){k=g[E];for(var O=String(k[0]),x=c(u(o(k.index),p.length),0),w=[],N=1;N<k.length;N++)w.push(m(k[N]));var S=k.groups;if(f){var A=[O].concat(w,x,p);void 0!==S&&A.push(S);var M=String(t.apply(void 0,A))}else M=v(O,p,x,w,S,t);x>=T&&(_+=p.slice(T,x)+M,T=x+O.length)}return _+p.slice(T)}];function v(e,t,n,a,o,s){var l=n+e.length,c=a.length,u=f;return void 0!==o&&(o=i(o),u=p),r.call(s,u,function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(l);case"<":s=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return r;if(u>c){var p=d(u/10);return 0===p?r:p<=c?void 0===a[p-1]?i.charAt(1):a[p-1]+i.charAt(1):r}s=a[u-1]}return void 0===s?"":s})}})},f7fe:function(e,t,r){(function(t){var r="Expected a function",n=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),f=Object.prototype,m=f.toString,h=Math.max,v=Math.min,b=function(){return p.Date.now()};function y(e,t,n){var i,a,o,s,l,c,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var r=i,n=a;return i=a=void 0,u=t,s=e.apply(n,r),s}function y(e){return u=e,l=setTimeout(T,t),d?m(e):s}function k(e){var r=e-c,n=e-u,i=t-r;return p?v(i,o-n):i}function F(e){var r=e-c,n=e-u;return void 0===c||r>=t||r<0||p&&n>=o}function T(){var e=b();if(F(e))return E(e);l=setTimeout(T,k(e))}function E(e){return l=void 0,f&&i?m(e):(i=a=void 0,s)}function O(){void 0!==l&&clearTimeout(l),u=0,i=c=a=l=void 0}function x(){return void 0===l?s:E(b())}function w(){var e=b(),r=F(e);if(i=arguments,a=this,c=e,r){if(void 0===l)return y(c);if(p)return l=setTimeout(T,t),m(c)}return void 0===l&&(l=setTimeout(T,t)),s}return t=_(t)||0,g(n)&&(d=!!n.leading,p="maxWait"in n,o=p?h(_(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),w.cancel=O,w.flush=x,w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function k(e){return!!e&&"object"==typeof e}function F(e){return"symbol"==typeof e||k(e)&&m.call(e)==i}function _(e){if("number"==typeof e)return e;if(F(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=s.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):o.test(e)?n:+e}e.exports=y}).call(this,r("c8ba"))},fada:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{width:"650px",visible:e.visible},on:{close:function(t){return e.closeDia("ruleForm")}}},[r("span",{attrs:{slot:"title"},slot:"title"},[r("el-row",{staticClass:"dialog-title",attrs:{type:"flex",justify:"center"}},[e._v(e._s("copy"==e.actionType?e.constants.COPY_GRADE:e.constants.CREATE_GRADE))])],1),r("el-form",{ref:"ruleForm",staticClass:"create-form-dialog",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:e.constants.GRADE_NAME,prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{size:"medium",maxlength:20},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),"copy"!=e.actionType?r("el-form-item",{staticClass:"is-required",attrs:{label:e.constants.LABEL_SCOPE,prop:"scope"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.LABEL_SELECT_DIVISION,icon:"caret-bottom",readonly:"readonly"},nativeOn:{click:function(t){e.showScopeTree=!e.showScopeTree}},model:{value:e.scopeSelectedNames,callback:function(t){e.scopeSelectedNames=t},expression:"scopeSelectedNames"}})],1):e._e(),r("el-form-item",{attrs:{label:"绩效属性",prop:"property"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.PLS_SELECT},model:{value:e.ruleForm.property,callback:function(t){e.$set(e.ruleForm,"property",t)},expression:"ruleForm.property"}},e._l(e.constants.ENUM_PERFORMANCE_TYPE,function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"绩效周期",prop:"endTime"}},[r("div",[r("el-date-picker",{attrs:{disabled:""==e.ruleForm.property,clearable:!1,"picker-options":e.startPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择开始时间"},on:{change:e.calculateEndDate},model:{value:e.ruleForm.startTime,callback:function(t){e.$set(e.ruleForm,"startTime",t)},expression:"ruleForm.startTime"}}),r("span",[e._v("  至  ")]),r("el-date-picker",{attrs:{disabled:""==e.ruleForm.property,clearable:!1,"picker-options":e.endPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择结束时间"},model:{value:e.ruleForm.endTime,callback:function(t){e.$set(e.ruleForm,"endTime",t)},expression:"ruleForm.endTime"}})],1)]),r("el-form-item",{attrs:{label:e.constants.TPL,prop:"tpl"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.PLS_SELECT},model:{value:e.ruleForm.tpl,callback:function(t){e.$set(e.ruleForm,"tpl",t)},expression:"ruleForm.tpl"}},e._l(e.tplOptions,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),r("el-form-item",{attrs:{label:"分数对应关系",prop:"mapping"}},[r("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:e.constants.PLS_SELECT},model:{value:e.ruleForm.mapping,callback:function(t){e.$set(e.ruleForm,"mapping",t)},expression:"ruleForm.mapping"}},e._l(e.ruleArr,function(e){return r("el-option",{key:e.id,attrs:{label:e.type,value:e.id}})}),1)],1),r("br"),r("el-form-item",{attrs:{"label-width":"0px"}},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.constants.CONFIRM))]),r("el-button",{attrs:{round:""},on:{click:function(t){return e.closeDia("ruleForm")}}},[e._v(e._s(e.constants.CANCEL))])],1)],1)],1),e.showScopeTree?r("dp-panel",{attrs:{exclusive:!0,checkedNodes:e.checkedNodes,visible:e.showScopeTree,data:e.departmentTree},on:{"update:checkedNodes":function(t){e.checkedNodes=t},"update:checked-nodes":function(t){e.checkedNodes=t},"update:visible":function(t){e.showScopeTree=t}}}):e._e()],1)},i=[],a=r("cebc"),o=(r("28a5"),r("a481"),r("7f7f"),r("57c6")),s=r("47af"),l=r("38fb"),c=r("fea5"),u=r("f7fe"),d={props:{copyID:{type:String,default:""},visible:{type:Boolean,default:!1},actionType:{type:String,default:"add"},departmentTree:{type:Array,default:function(){return[]}},defaultChecked:{type:Array,default:function(){return[]}},initForm:{type:Object},initData:{type:Object}},components:{"dp-panel":o["a"]},data:function(){var e=this,t=function(t,r,n){e.ruleForm.startTime?r&&r<=e.ruleForm.startTime?n(new Error(l["gb"])):n():n(new Error(l["td"]))},r=function(t,r,n){0==e.checkedNodes.length?n(new Error(l["sd"])):n()};return{loading:!0,showScopeTree:!1,checkedNodes:this.defaultChecked,ruleForm:{name:"",property:"",tpl:"",mapping:"",startTime:"",endTime:""},rules:{name:[{required:!0,message:l["Pc"],trigger:"blur"}],scope:[{validator:r,trigger:"change"}],property:[{required:!0,message:"请选择绩效属性",trigger:"blur"}],tpl:[{required:!0,message:l["ud"],trigger:"blur"}],mapping:[{required:!0,message:l["rd"],trigger:"blur"}],endTime:[{validator:t,trigger:"change"}]},ruleArr:this.initData.rulesArr||[],tplArr:[],tplOptions:this.initData.tplArr||[],constants:{COPY_GRADE:l["H"],CREATE_GRADE:l["J"],GRADE_NAME:l["Gb"],LABEL_SCOPE:l["oc"],LABEL_SELECT_DIVISION:l["qc"],ENUM_PERFORMANCE_TYPE:l["ob"],PLS_SELECT:l["qd"],CANCEL:l["u"],CONFIRM:l["z"],TPL:l["ae"]}}},methods:{closeDia:function(e){this.$refs[e].resetFields(),this.$emit("update:visible",!1)},submitForm:function(e){var t=this;0!=this.tplOptions.length?0!=this.ruleArr.length?this.$refs[e].validate(function(e){if(e){var r=t.ruleForm,n=r.name,i=r.mapping,a=r.endTime,o=r.property,s=r.startTime,l=r.tpl,u={name:n,department_ids:t.checkedNodes.map(function(e){return e.department_id}),start_time:s,end_time:a,template_id:l,rule_id:i,type_id:o};return"copy"==t.actionType?Object(c["jb"])(t.copyID,u).then(function(e){t.closeDia("ruleForm")}).catch(function(e){}):Object(c["hb"])(u).then(function(e){t.closeDia("ruleForm")}).catch(function(e){})}return!1}):this.$message({message:"当前事业部无分数对应规则，请联系总管理员!",type:"warning"}):this.$message({message:"当前事业部该绩效属性无模版，请联系总管理员!",type:"warning"})},add7Days:function(e){return new Date(e.getTime()+6048e5)},addMonth:function(e,t){return e.getMonth()>12-t-1?(e.setFullYear(e.getFullYear()+1),e.setMonth(e.getMonth()-(12-t))):e.setMonth(e.getMonth()+t),this.add7Days(e)},calculateEndDate:u(function(e){if(!this.ruleForm.endTime){var t=new Date(e.replace(/-/gi,"/"));switch(this.ruleForm.property){case"1":t.setFullYear(t.getFullYear()+1),t=this.add7Days(t);break;case"2":t=this.addMonth(t,6);break;case"3":t=this.addMonth(t,3);break;case"4":t.getMonth()>10?(t.setFullYear(t.getFullYear()+1),t.setMonth(0)):t.setMonth(t.getMonth()+1);break;case"5":case"6":return}this.ruleForm.endTime=Object(s["a"])(t)}},500),getTplList:u(function(e){var t=this;Object(c["ab"])({department_ids:e}).then(function(e){var r=e.rules,n=e.templates;t.ruleArr=r,t.tplArr=n,1==r.length&&(t.ruleForm.mapping=r[0].id),t.loading=!1}).catch(function(e){t.checkedNodes=[]})},500)},watch:{checkedNodes:{handler:function(e,t){this.loading||(this.ruleForm.tpl="",this.ruleForm.mapping=""),e.length>0&&(e||[]).join(",")!=(t||[]).join(",")&&this.getTplList(e.map(function(e){return e.department_id}))},deep:!0,immediate:!0},tplArr:function(e){var t=this,r=e.filter(function(e){return e.type_id==t.ruleForm.property});this.tplOptions=r},"ruleForm.property":{handler:function(e){var t=this;if(!this.loading){this.ruleForm.tpl="";var r=this.tplArr.filter(function(e){return e.type_id==t.ruleForm.property});this.tplOptions=r}},deep:!0,immediate:!0}},computed:{startPickerOptions:function(){return{disabledDate:function(e){var t=Object(s["a"])(new Date(e)),r=Object(s["a"])(new Date).split(" ")[0]+" 00:00";return t<r}}},endPickerOptions:function(){var e=this;return{disabledDate:function(t){var r=Object(s["a"])(new Date(t)),n=Object(s["a"])(new Date).split(" ")[0]+" 00:00";return e.ruleForm.startTime&&(n=e.ruleForm.startTime),r<n}}},scopeSelectedNames:function(){return this.checkedNodes.map(function(e){return e.name}).join(", ")}},created:function(){this.ruleForm=Object(a["a"])({},this.ruleForm,this.initForm)}},p=d,f=r("2877"),m=Object(f["a"])(p,n,i,!1,null,"6940989f",null);t["default"]=m.exports}}]);