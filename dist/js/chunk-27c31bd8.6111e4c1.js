(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27c31bd8"],{"0b53":function(e,t,r){},"28a5":function(e,t,r){"use strict";var a=r("aae3"),n=r("cb7c"),i=r("ebd6"),l=r("0390"),o=r("9def"),s=r("5f1b"),c=r("520a"),u=r("79e5"),m=Math.min,p=[].push,d="split",f="length",_="lastIndex",y=4294967295,b=!u(function(){RegExp(y,"y")});r("214f")("split",2,function(e,t,r,u){var h;return h="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[f]||2!="ab"[d](/(?:ab)*/)[f]||4!="."[d](/(.?)(.?)/)[f]||"."[d](/()()/)[f]>1||""[d](/.?/)[f]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!a(e))return r.call(n,e,t);var i,l,o,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,d=void 0===t?y:t>>>0,b=new RegExp(e.source,u+"g");while(i=c.call(b,n)){if(l=b[_],l>m&&(s.push(n.slice(m,i.index)),i[f]>1&&i.index<n[f]&&p.apply(s,i.slice(1)),o=i[0][f],m=l,s[f]>=d))break;b[_]===i.index&&b[_]++}return m===n[f]?!o&&b.test("")||s.push(""):s.push(n.slice(m)),s[f]>d?s.slice(0,d):s}:"0"[d](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,a){var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n,a):h.call(String(n),r,a)},function(e,t){var a=u(h,e,this,t,h!==r);if(a.done)return a.value;var c=n(e),p=String(this),d=i(c,RegExp),f=c.unicode,_=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),v=new d(b?c:"^(?:"+c.source+")",_),g=void 0===t?y:t>>>0;if(0===g)return[];if(0===p.length)return null===s(v,p)?[p]:[];var F=0,k=0,w=[];while(k<p.length){v.lastIndex=b?k:0;var E,T=s(v,b?p:p.slice(k));if(null===T||(E=m(o(v.lastIndex+(b?0:k)),p.length))===F)k=l(p,k,f);else{if(w.push(p.slice(F,k)),w.length===g)return w;for(var x=1;x<=T.length-1;x++)if(w.push(T[x]),w.length===g)return w;k=F=E}}return w.push(p.slice(F)),w}]})},"47af":function(e,t,r){"use strict";r.d(t,"a",function(){return a});r("6b54");var a=function(e){var t=e.getFullYear(),r=e.getMonth()+1,a=e.getDate(),i=e.getHours(),l=e.getMinutes();e.getSeconds();return[t,r,a].map(n).join("-")+" "+[i,l].map(n).join(":")},n=function(e){return e=e.toString(),e[1]?e:"0"+e}},"4abf":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"tpl-dialog",attrs:{"close-on-click-modal":!1,width:"650px",visible:e.visible},on:{close:e.close}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.infoType?"创建组织部绩效考核":"修改组织部绩效考核")+"\n  ")]),r("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{rules:e.rules,"label-width":"140px",model:e.ruleForm}},[r("el-form-item",{attrs:{label:"考核名称",prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"适用范围",prop:"department_ids"}},[r("common-tree",{attrs:{orgTree:e.orgTree,department_ids:e.ruleForm.department_ids},on:{selectedIds:e.selectedOrg}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"绩效类型",prop:"performance_type"}},[r("el-select",{attrs:{placeholder:e.constants.PLEASE_SELECT_PERFORMANCE_TYPE},model:{value:e.ruleForm.performance_type,callback:function(t){e.$set(e.ruleForm,"performance_type",t)},expression:"ruleForm.performance_type"}},e._l(e.performanceTypes,function(e){return r("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),r("el-form-item",{attrs:{label:"考核年份",prop:"year"}},[r("el-date-picker",{attrs:{"value-format":"yyyy",type:"year",placeholder:"请选择考核年份"},model:{value:e.ruleForm.year,callback:function(t){e.$set(e.ruleForm,"year",t)},expression:"ruleForm.year"}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"考核周期",prop:"end_time"}},[r("div",[r("el-date-picker",{attrs:{clearable:!1,"picker-options":e.startPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"请选择"},model:{value:e.ruleForm.start_time,callback:function(t){e.$set(e.ruleForm,"start_time",t)},expression:"ruleForm.start_time"}}),r("span",[e._v("  至  ")]),r("el-date-picker",{attrs:{clearable:!1,"picker-options":e.endPickerOptions,"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"请选择"},model:{value:e.ruleForm.end_time,callback:function(t){e.$set(e.ruleForm,"end_time",t)},expression:"ruleForm.end_time"}})],1)]),r("el-form-item",{attrs:{label:"绩效模板",prop:"tpl"}},[r("div",{staticClass:"rule-name"},[e._v(e._s(e.ruleForm.tpl))])]),r("el-form-item",{attrs:{label:"标签规则",prop:"tag_type"}},[r("div",{staticClass:"rule-name"},[e._v(e._s(e.ruleForm.tag_type))])]),r("el-form-item",{attrs:{label:"是否允许申诉",prop:"allow_appeal"}},[r("el-radio-group",{model:{value:e.ruleForm.allow_appeal,callback:function(t){e.$set(e.ruleForm,"allow_appeal",t)},expression:"ruleForm.allow_appeal"}},[r("el-radio",{attrs:{label:1}},[e._v("是")]),r("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:e.submit}},[e._v("\n        "+e._s(e.constants.CONFIRM)+"\n      ")]),r("el-button",{staticClass:"btn-reset",attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("\n        "+e._s(e.constants.CANCEL)+"\n      ")])],1)],1)],1)},n=[],i=(r("7f7f"),r("28a5"),r("38fb")),l=r("fea5"),o=r("47af"),s=r("372d"),c={components:{"common-tree":Object(s["a"])(r.e("chunk-ead8eec2").then(r.bind(null,"30da")))},props:{visible:{type:Boolean,default:!1},infoType:{type:String,default:"add"},initTime:{type:Object,default:function(){return{}}},performanceId:{type:String,default:""},performanceTypes:{type:Array,default:function(){return[]}},orgTree:{type:Array,default:function(){return[]}}},data:function(){var e=this,t=function(t,r,a){e.ruleForm.start_time?r&&r<=e.ruleForm.start_time?a(new Error(i["rb"])):a():a(new Error(i["Vd"]))};return{isWatch:!0,departmentIds:[],rules:{name:[{required:!0,message:i["nd"],trigger:"blur"}],department_ids:[{type:"array",required:!0,message:"请至少选择一个业务单元/职能单元",trigger:"change"}],year:[{required:!0,message:"考核周期不能为空",trigger:"blur"}],end_time:[{validator:t,trigger:"change"}]},ruleForm:{name:"",department_ids:[],performance_type:"annual",year:"",start_time:this.initTime.start_time||"",end_time:this.initTime.end_time||"",tpl:"",tag_type:"",allow_appeal:1},constants:{CONFIRM:i["F"],CANCEL:i["z"],PLS_SELECT_START_TIME:i["Vd"],MSG_FILL_GRADE_NAME:i["nd"],END_TIME_NOT_LESS_THAN_START_TIME:i["rb"]}}},computed:{startPickerOptions:function(){return{disabledDate:function(e){var t=Object(o["a"])(new Date(e)),r=Object(o["a"])(new Date).split(" ")[0]+" 00:00";return t<r}}},endPickerOptions:function(){var e=this;return{disabledDate:function(t){var r=Object(o["a"])(new Date(t)),a=Object(o["a"])(new Date).split(" ")[0]+" 00:00";return e.ruleForm.start_time&&(a=e.ruleForm.start_time),r<a}}}},watch:{departmentIds:{handler:function(e,t){var r=this;if(e.length>0&&this.isWatch){var a={department_ids:e};Object(l["nb"])(a).then(function(e){r.ruleForm.tag_type=e.tag_type}),Object(l["tb"])(a).then(function(e){r.ruleForm.tpl=e})}},deep:!0,immediate:!0}},created:function(){var e=this;"add"!=this.infoType&&this.performanceId&&Object(l["Y"])(this.performanceId).then(function(t){e.isWatch=!1;var r=t.name,a=t.department_ids,n=t.performance_type,i=t.year,l=t.start_time,o=t.end_time,s=t.tag_type,c=t.allow_appeal;e.ruleForm={name:r,department_ids:a,performance_type:n,year:i,start_time:l,end_time:o,tag_type:s,allow_appeal:c}}).catch(function(e){})},methods:{selectedOrg:function(e){this.departmentIds=e,this.ruleForm.department_ids=e},close:function(){this.$emit("close")},submit:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(t)return"add"==e.infoType?Object(l["Fb"])(e.ruleForm).then(function(t){e.close()}):Object(l["pc"])(e.performanceId,e.ruleForm).then(function(t){e.close()})})}},beforeDestroy:function(){this.$refs["ruleForm"].resetFields()}},u=c,m=(r("8caa"),r("2877")),p=Object(m["a"])(u,a,n,!1,null,"1cdb329e",null);t["default"]=p.exports},"8caa":function(e,t,r){"use strict";var a=r("0b53"),n=r.n(a);n.a},aae3:function(e,t,r){var a=r("d3f4"),n=r("2d95"),i=r("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}}}]);