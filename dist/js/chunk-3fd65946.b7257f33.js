(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fd65946","chunk-79708512"],{"28a5":function(e,t,r){"use strict";var a=r("aae3"),n=r("cb7c"),i=r("ebd6"),l=r("0390"),o=r("9def"),s=r("5f1b"),u=r("520a"),c=r("79e5"),m=Math.min,d=[].push,p="split",f="length",_="lastIndex",y=4294967295,b=!c(function(){RegExp(y,"y")});r("214f")("split",2,function(e,t,r,c){var h;return h="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!a(e))return r.call(n,e,t);var i,l,o,s=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,p=void 0===t?y:t>>>0,b=new RegExp(e.source,c+"g");while(i=u.call(b,n)){if(l=b[_],l>m&&(s.push(n.slice(m,i.index)),i[f]>1&&i.index<n[f]&&d.apply(s,i.slice(1)),o=i[0][f],m=l,s[f]>=p))break;b[_]===i.index&&b[_]++}return m===n[f]?!o&&b.test("")||s.push(""):s.push(n.slice(m)),s[f]>p?s.slice(0,p):s}:"0"[p](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,a){var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n,a):h.call(String(n),r,a)},function(e,t){var a=c(h,e,this,t,h!==r);if(a.done)return a.value;var u=n(e),d=String(this),p=i(u,RegExp),f=u.unicode,_=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),v=new p(b?u:"^(?:"+u.source+")",_),g=void 0===t?y:t>>>0;if(0===g)return[];if(0===d.length)return null===s(v,d)?[d]:[];var F=0,k=0,w=[];while(k<d.length){v.lastIndex=b?k:0;var T,E=s(v,b?d:d.slice(k));if(null===E||(T=m(o(v.lastIndex+(b?0:k)),d.length))===F)k=l(d,k,f);else{if(w.push(d.slice(F,k)),w.length===g)return w;for(var x=1;x<=E.length-1;x++)if(w.push(E[x]),w.length===g)return w;k=F=T}}return w.push(d.slice(F)),w}]})},"47af":function(e,t,r){"use strict";r.d(t,"a",function(){return a});r("6b54");var a=function(e){var t=e.getFullYear(),r=e.getMonth()+1,a=e.getDate(),i=e.getHours(),l=e.getMinutes();e.getSeconds();return[t,r,a].map(n).join("-")+" "+[i,l].map(n).join(":")},n=function(e){return e=e.toString(),e[1]?e:"0"+e}},"4abf":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"tpl-dialog",attrs:{"close-on-click-modal":!1,width:"650px",visible:e.visible},on:{close:e.close}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?"创建组织部绩效考核":"修改组织部绩效考核")+"\n  ")]),r("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{rules:e.rules,"label-width":"140px",model:e.ruleForm}},[r("el-form-item",{attrs:{label:"考核名称",prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"适用范围"}},[r("common-tree",{attrs:{orgTree:e.orgTree,department_ids:e.ruleForm.department_ids},on:{selectedIds:e.selectedOrg}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"绩效类型",prop:"performance_type"}},[r("el-select",{attrs:{placeholder:e.constants.PLEASE_SELECT_PERFORMANCE_TYPE},model:{value:e.ruleForm.performance_type,callback:function(t){e.$set(e.ruleForm,"performance_type",t)},expression:"ruleForm.performance_type"}},e._l(e.performanceTypes,function(e){return r("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),r("el-form-item",{attrs:{label:"考核年份",prop:"year"}},[r("el-date-picker",{attrs:{"value-format":"yyyy",type:"year",placeholder:"请选择考核年份"},model:{value:e.ruleForm.year,callback:function(t){e.$set(e.ruleForm,"year",t)},expression:"ruleForm.year"}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"考核周期",prop:"period_end_time"}},[r("div",[r("el-date-picker",{attrs:{clearable:!1,"picker-options":e.startPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"请选择"},model:{value:e.ruleForm.period_start_time,callback:function(t){e.$set(e.ruleForm,"period_start_time",t)},expression:"ruleForm.period_start_time"}}),r("span",[e._v("  至  ")]),r("el-date-picker",{attrs:{clearable:!1,"picker-options":e.endPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"请选择"},model:{value:e.ruleForm.period_end_time,callback:function(t){e.$set(e.ruleForm,"period_end_time",t)},expression:"ruleForm.period_end_time"}})],1)]),r("el-form-item",{attrs:{label:"绩效模板"}},e._l(e.ruleForm.templates,function(t){return r("div",{key:t.id,staticClass:"rule-name"},[e._v("\n        "+e._s(t.name)+"\n      ")])}),0),r("el-form-item",{attrs:{label:"标签规则"}},e._l(e.ruleForm.tag,function(t){return r("div",{key:t.id,staticClass:"rule-name"},[e._v("\n        "+e._s(t.tag_type)+"\n      ")])}),0),r("el-form-item",{attrs:{label:"是否允许申诉",prop:"allow_appeal"}},[r("el-radio-group",{model:{value:e.ruleForm.allow_appeal,callback:function(t){e.$set(e.ruleForm,"allow_appeal",t)},expression:"ruleForm.allow_appeal"}},[r("el-radio",{attrs:{label:1}},[e._v("是")]),r("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v("\n        "+e._s(e.constants.CONFIRM)+"\n      ")]),r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},n=[],i=(r("7f7f"),r("28a5"),r("38fb")),l=r("fea5"),o=r("47af"),s=r("372d"),u={components:{"common-tree":Object(s["a"])(r.e("chunk-69cbffb4").then(r.bind(null,"30da")))},props:{visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},initTime:{type:Object,default:function(){return{}}},performanceId:{type:String,default:""},performanceTypes:{type:Array,default:function(){return[]}},orgTree:{type:Array,default:function(){return[]}}},data:function(){var e=this,t=function(t,r,a){e.ruleForm.period_start_time?r&&r<=e.ruleForm.period_start_time?a(new Error(i["rb"])):a():a(new Error(i["Vd"]))};return{rules:{name:[{required:!0,message:i["nd"],trigger:"blur"}],year:[{required:!0,message:"考核周期不能为空",trigger:"blur"}],period_end_time:[{validator:t,trigger:"change"}]},ruleForm:{name:"",department_ids:[],performance_type:"annual",year:"",period_start_time:this.initTime.period_start_time||"",period_end_time:this.initTime.period_end_time||"",tag:[],templates:[],allow_appeal:1},tagType:[],performanceTpl:[],constants:{CONFIRM:i["F"],CANCEL:i["z"],PLS_SELECT_START_TIME:i["Vd"],MSG_FILL_GRADE_NAME:i["nd"],END_TIME_NOT_LESS_THAN_START_TIME:i["rb"]}}},computed:{startPickerOptions:function(){return{disabledDate:function(e){var t=Object(o["a"])(new Date(e)),r=Object(o["a"])(new Date).split(" ")[0]+" 00:00";return t<r}}},endPickerOptions:function(){var e=this;return{disabledDate:function(t){var r=Object(o["a"])(new Date(t)),a=Object(o["a"])(new Date).split(" ")[0]+" 00:00";return e.ruleForm.period_start_time&&(a=e.ruleForm.period_start_time),r<a}}}},created:function(){var e=this;"add"!=this.infoType&&this.performanceId&&Object(l["cb"])(this.performanceId).then(function(t){var r=t.name,a=t.department_ids,n=t.performance_type,i=t.year,l=t.period_start_time,o=t.period_end_time,s=t.templates,u=t.allow_appeal;e.ruleForm={name:r,department_ids:a,performance_type:n,year:i,period_start_time:l,period_end_time:o,templates:s,allow_appeal:u}}).catch(function(e){})},methods:{selectedOrg:function(e){var t=this;if(0===e.length)return this.ruleForm.templates=[],this.ruleForm.tag=[],!1;if("add"!==this.infoType)return!1;this.ruleForm.department_ids=e;var r={department_ids:e};Object(l["sb"])(r).then(function(e){e?t.ruleForm.tag=e:(t.ruleForm.department_ids=[],t.ruleForm.tag=[])}).catch(function(e){t.ruleForm.department_ids=[]}),Object(l["yb"])(r).then(function(e){e?t.ruleForm.templates=e:(t.ruleForm.department_ids=[],t.ruleForm.templates=[])}).catch(function(e){t.ruleForm.department_ids=[]})},close:function(){this.$emit("close")},submit:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(t)return 0==e.ruleForm.templates.length||0==e.ruleForm.tag.length?(e.$alert("请至少选择一个有效业务单元/职能单元!"),!1):"add"==e.infoType?Object(l["Lb"])(e.ruleForm).then(function(t){e.$emit("define")}):Object(l["wc"])(e.performanceId,e.ruleForm).then(function(t){e.$emit("define")})})}},beforeDestroy:function(){this.$refs["ruleForm"].resetFields()}},c=u,m=(r("a231"),r("2877")),d=Object(m["a"])(c,a,n,!1,null,"4cd3554c",null);t["default"]=d.exports},"8db8":function(e,t,r){},a231:function(e,t,r){"use strict";var a=r("8db8"),n=r.n(a);n.a},aae3:function(e,t,r){var a=r("d3f4"),n=r("2d95"),i=r("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}}}]);