(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e871868a"],{"11e9":function(e,t,r){var n=r("52a7"),a=r("4630"),o=r("6821"),s=r("6a99"),i=r("69a8"),c=r("c69a"),l=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?l:function(e,t){if(e=o(e),t=s(t,!0),c)try{return l(e,t)}catch(r){}if(i(e,t))return a(!n.f.call(e,t),e[t])}},"2f21":function(e,t,r){"use strict";var n=r("79e5");e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}},"2fdb":function(e,t,r){"use strict";var n=r("5ca1"),a=r("d2c8"),o="includes";n(n.P+n.F*r("5147")(o),"String",{includes:function(e){return!!~a(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5026:function(e,t,r){},5147:function(e,t,r){var n=r("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}},"55dd":function(e,t,r){"use strict";var n=r("5ca1"),a=r("d8e8"),o=r("4bf8"),s=r("79e5"),i=[].sort,c=[1,2,3];n(n.P+n.F*(s(function(){c.sort(void 0)})||!s(function(){c.sort(null)})||!r("2f21")(i)),"Array",{sort:function(e){return void 0===e?i.call(o(this)):i.call(o(this),a(e))}})},"5dbc":function(e,t,r){var n=r("d3f4"),a=r("8b97").set;e.exports=function(e,t,r){var o,s=t.constructor;return s!==r&&"function"==typeof s&&(o=s.prototype)!==r.prototype&&n(o)&&a&&a(e,o),e}},6762:function(e,t,r){"use strict";var n=r("5ca1"),a=r("c366")(!0);n(n.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"7b0c":function(e,t,r){"use strict";var n=r("5026"),a=r.n(n);a.a},"8b97":function(e,t,r){var n=r("d3f4"),a=r("cb7c"),o=function(e,t){if(a(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:o}},9093:function(e,t,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},9212:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"tpl-dialog",attrs:{"close-on-click-modal":!1,width:"650px",visible:e.visible},on:{close:e.close}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?e.constants.ADD_NEW_TPL:e.constants.UPDATE_TPL)+"\n  ")]),r("el-form",{ref:"tplForm",staticClass:"tpl-form",attrs:{rules:e.rules,"label-width":"140px",model:e.tplForm}},[r("el-form-item",{attrs:{label:e.constants.TPL_NAME,prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},model:{value:e.tplForm.name,callback:function(t){e.$set(e.tplForm,"name",t)},expression:"tplForm.name"}})],1),r("el-form-item",{attrs:{label:e.constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,prop:"department_ids"}},[r("common-tree",{attrs:{orgTree:e.orgTree,department_ids:e.tplForm.department_ids},on:{selectedIds:e.selectedOrg}})],1),r("el-form-item",{attrs:{label:e.constants.EXECUTIVE_TYPE_TEXT,prop:"executive_types"}},[r("el-checkbox-group",{model:{value:e.tplForm.executive_types,callback:function(t){e.$set(e.tplForm,"executive_types",t)},expression:"tplForm.executive_types"}},e._l(e.executiveTypes,function(t){return r("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v(e._s(t.name))])}),1)],1),r("el-form-item",{staticClass:"is-required no-margin-bottom",attrs:{label:e.constants.PERFORMANCE_TYPE,prop:"performance_type"}},[r("el-select",{attrs:{placeholder:e.constants.PLEASE_SELECT_PERFORMANCE_TYPE},model:{value:e.tplForm.performance_type,callback:function(t){e.$set(e.tplForm,"performance_type",t)},expression:"tplForm.performance_type"}},e._l(e.performanceTypes,function(e){return r("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),r("el-form-item",{attrs:{label:e.constants.TEMPLATE_FIELD,prop:"template_fields"}},[r("el-checkbox-group",{model:{value:e.tplForm.template_fields,callback:function(t){e.$set(e.tplForm,"template_fields",t)},expression:"tplForm.template_fields"}},e._l(e.tplFields,function(t){return r("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v(e._s(t.name))])}),1)],1),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showMeasurementRequired,expression:"showMeasurementRequired"}],staticClass:"no-margin-bottom",attrs:{label:e.constants.IS_THE_MEASUREMENT_REQUIRED,prop:"measures"}},[r("el-checkbox-group",{model:{value:e.tplForm.measures,callback:function(t){e.$set(e.tplForm,"measures",t)},expression:"tplForm.measures"}},e._l(e.tplMeasures,function(t){return r("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v(e._s(t.name))])}),1)],1),e._l(e.tplForm.performance_indicator_types,function(t){return r("el-form-item",{key:t.key,class:"team"===t.key?"":"is-required",attrs:{label:t.label}},[r("el-input",{staticClass:"input-type",attrs:{placeholder:"请输入业绩指标"},model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}}),r("el-input",{staticClass:"input-type",attrs:{placeholder:e.constants.TARGET_WEIGH},on:{blur:function(r){return e.louseFouce(t)}},model:{value:t.weight,callback:function(r){e.$set(t,"weight",r)},expression:"item.weight"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(e.constants.TARGET_WEIGH))]),r("span",{attrs:{slot:"append"},slot:"append"},[e._v("%")])]),r("el-input",{staticClass:"input-type",attrs:{placeholder:e.constants.SORT},on:{blur:function(r){return e.louseFouce(t)}},model:{value:t.sort,callback:function(r){e.$set(t,"sort",r)},expression:"item.sort"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(e.constants.SORT))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.name&&"team"!==t.key,expression:"!item.name && item.key !== 'team'"}],staticClass:"el-form-item__error"},[e._v("\n        请输入"+e._s(t.label)+"\n      ")])],1)})],2),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v("\n        "+e._s(e.constants.CONFIRM)+"\n      ")]),r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},a=[],o=(r("7f7f"),r("55dd"),r("6762"),r("2fdb"),r("c5f6"),r("38fb")),s=r("fea5"),i=r("372d"),c={props:{visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},performanceId:{type:Number,default:0},performanceTypes:{type:Array,default:function(){return[]}},executiveTypes:{type:Array,default:function(){return[]}},tplFields:{type:Array,default:function(){return[]}},tplMeasures:{type:Array,default:function(){return[]}},orgTree:{type:Array,default:function(){return[]}},indicatorTypes:{type:Array,default:function(){return[]}}},data:function(){return{showMeasurementRequired:!1,defaultProps:{label:"department_name",children:"children"},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],department_ids:[{type:"array",required:!0,message:"请至少选择一个业务单元/职能单元",trigger:"change"}],executive_types:[{type:"array",required:!0,message:"请至少选择一个组织部类型",trigger:"change"}],template_fields:[{type:"array",required:!0,message:"请至少选择一个模板字段",trigger:"change"}]},tplForm:{name:"",department_ids:[],executive_types:[],performance_type:"annual",template_fields:["weight","indicator_name"],measures:[],performance_indicator_types:this.indicatorTypes},constants:{ADD_NEW_TPL:o["e"],UPDATE_TPL:o["Se"],CONFIRM:o["F"],CANCEL:o["z"],TPL_NAME:o["Pe"],BUSINESS_UNIT_AND_FUNCTIONAL_UNIT:o["y"],PLEASE_SELECT_MULTIPLE:o["Qd"],EXECUTIVE_TYPE_TEXT:o["Ib"],PERFORMANCE_TYPE:o["Od"],PLEASE_SELECT_PERFORMANCE_TYPE:o["Rd"],TEMPLATE_FIELD:o["Me"],IS_THE_MEASUREMENT_REQUIRED:o["oc"],TARGET_WEIGH:o["Je"],SORT:o["xe"]}}},components:{"common-tree":Object(i["a"])(r.e("chunk-69cbffb4").then(r.bind(null,"30da")))},watch:{tplForm:{handler:function(e,t){this.showMeasurementRequired=!!e.template_fields.includes("measure")},deep:!0}},methods:{selectedOrg:function(e){this.tplForm.department_ids=e},louseFouce:function(e){e.sort=e.sort||0,e.weight=e.weight||0},close:function(){this.$emit("close")},submit:function(){var e=this;this.$refs["tplForm"].validate(function(t){if(t){for(var r=e.tplForm.performance_indicator_types,n=0;n<r.length;n++)if(""===r[n].name&&"team"!==r[n].key)return!1;return"add"==e.infoType?Object(s["cc"])(e.tplForm).then(function(t){e.$emit("define")}):Object(s["xc"])(e.performanceId,e.tplForm).then(function(t){e.$emit("define")})}})}},beforeDestroy:function(){this.$refs["tplForm"].resetFields()},created:function(){var e=this;"add"!=this.infoType&&this.performanceId&&Object(s["fb"])(this.performanceId).then(function(t){var r=t.name,n=t.department_ids,a=t.executive_types,o=t.performance_type,s=t.template_fields,i=t.measures,c=t.performance_indicator_types;e.tplForm={name:r,department_ids:n,executive_types:a,performance_type:o,template_fields:s,measures:i,performance_indicator_types:c}})}},l=c,u=(r("7b0c"),r("2877")),p=Object(u["a"])(l,n,a,!1,null,"aca08d5c",null);t["default"]=p.exports},aa77:function(e,t,r){var n=r("5ca1"),a=r("be13"),o=r("79e5"),s=r("fdef"),i="["+s+"]",c="​",l=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),p=function(e,t,r){var a={},i=o(function(){return!!s[e]()||c[e]()!=c}),l=a[e]=i?t(f):s[e];r&&(a[r]=l),n(n.P+n.F*i,"String",a)},f=p.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},c5f6:function(e,t,r){"use strict";var n=r("7726"),a=r("69a8"),o=r("2d95"),s=r("5dbc"),i=r("6a99"),c=r("79e5"),l=r("9093").f,u=r("11e9").f,p=r("86cc").f,f=r("aa77").trim,m="Number",d=n[m],_=d,y=d.prototype,E=o(r("2aeb")(y))==m,b="trim"in String.prototype,h=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():f(t,3);var r,n,a,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var s,c=t.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>a)return NaN;return parseInt(c,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof d&&(E?c(function(){y.valueOf.call(r)}):o(r)!=m)?s(new _(h(t)),r,d):h(t)};for(var v,T=r("9e1e")?l(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;T.length>g;g++)a(_,v=T[g])&&!a(d,v)&&p(d,v,u(_,v));d.prototype=y,y.constructor=d,r("2aba")(n,m,d)}},d2c8:function(e,t,r){var n=r("aae3"),a=r("be13");e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);