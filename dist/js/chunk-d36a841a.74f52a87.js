(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d36a841a"],{"11e9":function(e,t,r){var n=r("52a7"),a=r("4630"),s=r("6821"),o=r("6a99"),i=r("69a8"),l=r("c69a"),c=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?c:function(e,t){if(e=s(e),t=o(t,!0),l)try{return c(e,t)}catch(r){}if(i(e,t))return a(!n.f.call(e,t),e[t])}},"13c6":function(e,t,r){"use strict";var n=r("bc6f"),a=r.n(n);a.a},"2f21":function(e,t,r){"use strict";var n=r("79e5");e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}},"55dd":function(e,t,r){"use strict";var n=r("5ca1"),a=r("d8e8"),s=r("4bf8"),o=r("79e5"),i=[].sort,l=[1,2,3];n(n.P+n.F*(o(function(){l.sort(void 0)})||!o(function(){l.sort(null)})||!r("2f21")(i)),"Array",{sort:function(e){return void 0===e?i.call(s(this)):i.call(s(this),a(e))}})},"5dbc":function(e,t,r){var n=r("d3f4"),a=r("8b97").set;e.exports=function(e,t,r){var s,o=t.constructor;return o!==r&&"function"==typeof o&&(s=o.prototype)!==r.prototype&&n(s)&&a&&a(e,s),e}},"8b97":function(e,t,r){var n=r("d3f4"),a=r("cb7c"),s=function(e,t){if(a(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return s(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:s}},9093:function(e,t,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},9212:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"tpl-dialog",attrs:{"close-on-click-modal":!1,width:"650px",visible:e.visible},on:{close:e.close}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?e.constants.ADD_NEW_TPL:e.constants.UPDATE_TPL)+"\n  ")]),r("el-form",{ref:"tplForm",staticClass:"tpl-form",attrs:{rules:e.rules,"label-width":"140px",model:e.tplForm}},[r("el-form-item",{attrs:{label:e.constants.TPL_NAME,prop:"name"}},[r("el-input",{staticStyle:{width:"400px","line-height":"38px"},attrs:{type:"textarea",autosize:{minRows:2},maxlength:"100","show-word-limit":""},model:{value:e.tplForm.name,callback:function(t){e.$set(e.tplForm,"name",t)},expression:"tplForm.name"}})],1),r("el-form-item",{attrs:{label:e.constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,prop:"department_ids"}},[r("common-tree",{attrs:{orgTree:e.orgTree,department_ids:e.tplForm.department_ids},on:{selectedIds:e.selectedOrg}})],1),r("el-form-item",{attrs:{label:e.constants.EXECUTIVE_TYPE_TEXT,prop:"executive_types"}},[r("el-checkbox-group",{model:{value:e.tplForm.executive_types,callback:function(t){e.$set(e.tplForm,"executive_types",t)},expression:"tplForm.executive_types"}},e._l(e.executiveTypes,function(t){return r("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v(e._s(t.name))])}),1)],1),r("el-form-item",{staticClass:"is-required no-margin-bottom",attrs:{label:e.constants.PERFORMANCE_TYPE,prop:"performance_type"}},[r("el-select",{attrs:{placeholder:e.constants.PLEASE_SELECT_PERFORMANCE_TYPE},model:{value:e.tplForm.performance_type,callback:function(t){e.$set(e.tplForm,"performance_type",t)},expression:"tplForm.performance_type"}},e._l(e.performanceTypes,function(e){return r("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),r("el-form-item",{attrs:{label:e.constants.TEMPLATE_FIELD,prop:"template_fields"}},[r("el-checkbox-group",{model:{value:e.tplForm.template_fields,callback:function(t){e.$set(e.tplForm,"template_fields",t)},expression:"tplForm.template_fields"}},e._l(e.tplFields,function(t){return r("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v(e._s(t.name))])}),1)],1),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showMeasurementRequired,expression:"showMeasurementRequired"}],staticClass:"no-margin-bottom",attrs:{label:e.constants.IS_THE_MEASUREMENT_REQUIRED,prop:"measures"}},[r("el-checkbox-group",{model:{value:e.tplForm.measures,callback:function(t){e.$set(e.tplForm,"measures",t)},expression:"tplForm.measures"}},e._l(e.tplMeasures,function(t){return r("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v(e._s(t.name))])}),1)],1),e._l(e.tplForm.performance_indicator_types,function(t){return r("el-form-item",{key:t.key,class:"team"===t.key?"":"is-required",attrs:{label:t.label}},[r("el-input",{staticClass:"input-type",attrs:{placeholder:"请输入业绩指标"},model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}}),r("el-input",{staticClass:"input-type",attrs:{placeholder:e.constants.TARGET_WEIGH},on:{blur:function(r){return e.louseFouce(t)}},model:{value:t.weight,callback:function(r){e.$set(t,"weight",r)},expression:"item.weight"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(e.constants.TARGET_WEIGH))]),r("span",{attrs:{slot:"append"},slot:"append"},[e._v("%")])]),r("el-input",{staticClass:"input-type",attrs:{placeholder:e.constants.SORT},on:{blur:function(r){return e.louseFouce(t)}},model:{value:t.sort,callback:function(r){e.$set(t,"sort",r)},expression:"item.sort"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(e.constants.SORT))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.name&&"team"!==t.key,expression:"!item.name && item.key !== 'team'"}],staticClass:"el-form-item__error"},[e._v("\n        请输入"+e._s(t.label)+"\n      ")])],1)})],2),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v("\n        "+e._s(e.constants.CONFIRM)+"\n      ")]),r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},a=[],s=(r("7f7f"),r("55dd"),r("6762"),r("2fdb"),r("c5f6"),r("38fb")),o=r("fea5"),i=r("372d"),l={props:{visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},performanceId:{type:Number,default:0},performanceTypes:{type:Array,default:function(){return[]}},executiveTypes:{type:Array,default:function(){return[]}},tplFields:{type:Array,default:function(){return[]}},tplMeasures:{type:Array,default:function(){return[]}},orgTree:{type:Array,default:function(){return[]}},indicatorTypes:{type:Array,default:function(){return[]}}},data:function(){return{showMeasurementRequired:!1,defaultProps:{label:"department_name",children:"children"},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],department_ids:[{type:"array",required:!0,message:"请至少选择一个业务单元/职能单元",trigger:"change"}],executive_types:[{type:"array",required:!0,message:"请至少选择一个组织部类型",trigger:"change"}],template_fields:[{type:"array",required:!0,message:"请至少选择一个模板字段",trigger:"change"}]},tplForm:{name:"",department_ids:[],executive_types:[],performance_type:"annual",template_fields:["weight","indicator_name"],measures:[],performance_indicator_types:this.indicatorTypes},constants:{ADD_NEW_TPL:s["e"],UPDATE_TPL:s["ff"],CONFIRM:s["G"],CANCEL:s["A"],TPL_NAME:s["cf"],BUSINESS_UNIT_AND_FUNCTIONAL_UNIT:s["z"],PLEASE_SELECT_MULTIPLE:s["ae"],EXECUTIVE_TYPE_TEXT:s["Nb"],PERFORMANCE_TYPE:s["Yd"],PLEASE_SELECT_PERFORMANCE_TYPE:s["be"],TEMPLATE_FIELD:s["Ze"],IS_THE_MEASUREMENT_REQUIRED:s["tc"],TARGET_WEIGH:s["We"],SORT:s["Je"]}}},components:{"common-tree":Object(i["a"])(r.e("chunk-25721bc4").then(r.bind(null,"30da")))},watch:{tplForm:{handler:function(e,t){this.showMeasurementRequired=!!e.template_fields.includes("measure")},deep:!0}},methods:{require:function(){var e=this;return"add"==this.infoType?Object(o["hc"])(this.tplForm).then(function(t){e.$emit("update")}):Object(o["Kc"])(this.performanceId,this.tplForm).then(function(t){e.$emit("update")})},alert:function(e){var t=this;this.$alert("业绩指标标型三：".concat(e,"未填写"),"提示",{cancelButtonText:"确定",type:"warning"}).then(function(e){}).catch(function(e){t.require()})},selectedOrg:function(e){this.tplForm.department_ids=e},louseFouce:function(e){e.sort=e.sort||0,e.weight=e.weight||0},close:function(){this.$emit("close")},submit:function(){var e=this;this.$refs["tplForm"].validate(function(t){if(t){for(var r=e.tplForm.performance_indicator_types,n=0;n<r.length;n++)if(""===r[n].name&&"team"!==r[n].key)return!1;r[r.length-1].name?"团队维度指标"==r[r.length-1].name?0!=r[r.length-1].weight?0==r[r.length-1].sort&&e.alert("排序"):0!=r[r.length-1].sort?e.$alert("业绩指标标型三：“权重”未填写！"):e.require():0!=r[r.length-1].weight?0!=r[r.length-1].sort?e.require():e.alert("排序"):0!=r[r.length-1].sort?e.alert("权重"):e.alert("权重、排序"):0!=r[r.length-1].weight?0!=r[r.length-1].sort?e.alert("指标"):e.alert("指标、排序"):0!=r[r.length-1].sort&&e.alert("指标、权重"),r[r.length-1].name&&"团队维度指标"!=r[r.length-1].name&&0!=r[r.length-1].weight&&0!=r[r.length-1].sort&&e.require(),r[r.length-1].name||"团队维度指标"==r[r.length-1].name||0!=r[r.length-1].weight||0!=r[r.length-1].sort||e.require()}})}},beforeDestroy:function(){this.$refs["tplForm"].resetFields()},created:function(){var e=this;"add"!=this.infoType&&this.performanceId&&Object(o["K"])(this.performanceId).then(function(t){var r=t.name,n=t.department_ids,a=t.executive_types,s=t.performance_type,o=t.template_fields,i=t.measures,l=t.performance_indicator_types;e.tplForm={name:r,department_ids:n,executive_types:a,performance_type:s,template_fields:o,measures:i,performance_indicator_types:l}})}},c=l,p=(r("13c6"),r("2877")),u=Object(p["a"])(c,n,a,!1,null,"770714a6",null);t["default"]=u.exports},aa77:function(e,t,r){var n=r("5ca1"),a=r("be13"),s=r("79e5"),o=r("fdef"),i="["+o+"]",l="​",c=RegExp("^"+i+i+"*"),p=RegExp(i+i+"*$"),u=function(e,t,r){var a={},i=s(function(){return!!o[e]()||l[e]()!=l}),c=a[e]=i?t(f):o[e];r&&(a[r]=c),n(n.P+n.F*i,"String",a)},f=u.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(p,"")),e};e.exports=u},bc6f:function(e,t,r){},c5f6:function(e,t,r){"use strict";var n=r("7726"),a=r("69a8"),s=r("2d95"),o=r("5dbc"),i=r("6a99"),l=r("79e5"),c=r("9093").f,p=r("11e9").f,u=r("86cc").f,f=r("aa77").trim,m="Number",d=n[m],_=d,h=d.prototype,y=s(r("2aeb")(h))==m,E="trim"in String.prototype,g=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=E?t.trim():f(t,3);var r,n,a,s=t.charCodeAt(0);if(43===s||45===s){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var o,l=t.slice(2),c=0,p=l.length;c<p;c++)if(o=l.charCodeAt(c),o<48||o>a)return NaN;return parseInt(l,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof d&&(y?l(function(){h.valueOf.call(r)}):s(r)!=m)?o(new _(g(t)),r,d):g(t)};for(var b,v=r("9e1e")?c(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;v.length>T;T++)a(_,b=v[T])&&!a(d,b)&&u(d,b,p(_,b));d.prototype=h,h.constructor=d,r("2aba")(n,m,d)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);