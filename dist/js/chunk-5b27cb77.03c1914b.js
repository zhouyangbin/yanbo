(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b27cb77"],{"11e9":function(e,r,t){var o=t("52a7"),s=t("4630"),c=t("6821"),i=t("6a99"),n=t("69a8"),u=t("c69a"),a=Object.getOwnPropertyDescriptor;r.f=t("9e1e")?a:function(e,r){if(e=c(e),r=i(r,!0),u)try{return a(e,r)}catch(t){}if(n(e,r))return s(!o.f.call(e,r),e[r])}},"1cd6":function(e,r,t){"use strict";var o=t("88cf"),s=t.n(o);s.a},"5dbc":function(e,r,t){var o=t("d3f4"),s=t("8b97").set;e.exports=function(e,r,t){var c,i=r.constructor;return i!==t&&"function"==typeof i&&(c=i.prototype)!==t.prototype&&o(c)&&s&&s(e,c),e}},"88cf":function(e,r,t){},"8b97":function(e,r,t){var o=t("d3f4"),s=t("cb7c"),c=function(e,r){if(s(e),!o(r)&&null!==r)throw TypeError(r+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,r,o){try{o=t("9b43")(Function.call,t("11e9").f(Object.prototype,"__proto__").set,2),o(e,[]),r=!(e instanceof Array)}catch(s){r=!0}return function(e,t){return c(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:c}},9093:function(e,r,t){var o=t("ce10"),s=t("e11e").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return o(e,s)}},"94a0":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-dialog",{staticClass:"modify-user",attrs:{"close-on-click-modal":!1,width:"650px",visible:e.visible},on:{close:e.close}},[t("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s("add"===e.userType?"添加人员":"修改人员")+"\n  ")]),t("el-form",{ref:"userForm",staticClass:"user-form",attrs:{rules:e.userRules,"label-width":"160px",model:e.userForm}},[t("el-form-item",{attrs:{label:"姓名/工号:",prop:"workcode"}},[t("common-select",{attrs:{code:e.userForm.workcode,isDisabled:"add"!==e.userType},on:{selectedUser:e.selectWorkCode}})],1),t("el-form-item",{attrs:{label:"直接上级:",prop:"superior_workcode"}},[t("common-select",{attrs:{code:e.userForm.superior_workcode,isDisabled:!1},on:{selectedUser:e.selectSubCode}})],1),t("el-form-item",{attrs:{label:"隔级:",prop:"isolation_workcode"}},[t("common-select",{attrs:{code:e.userForm.isolation_workcode,isDisabled:!1},on:{selectedUser:e.selectIsoCode}})],1),t("el-form-item",{attrs:{label:"总裁:",prop:"president_workcode"}},[t("common-select",{attrs:{code:e.userForm.president_workcode,isDisabled:!1},on:{selectedUser:e.selectPreCode}})],1),t("el-form-item",{attrs:{label:"HRBP:",prop:"hrbp_workcode"}},[t("common-select",{attrs:{code:e.userForm.hrbp_workcode,isDisabled:!1},on:{selectedUser:e.selectHrbpCode}})],1),t("el-form-item",{attrs:{label:"HRD:",prop:"hrd_workcode"}},[t("common-select",{attrs:{code:e.userForm.hrd_workcode,isDisabled:!1},on:{selectedUser:e.selectHrdCode}})],1),t("el-form-item",{attrs:{label:"组织部成员类别:",prop:"executive_type"}},[t("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.userForm.executive_type,callback:function(r){e.$set(e.userForm,"executive_type",r)},expression:"userForm.executive_type"}},e._l(e.executiveTypes,function(e){return t("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:function(r){return e.submit("userForm")}}},[e._v("确定")]),t("el-button",{attrs:{round:"",size:"medium"},on:{click:e.close}},[e._v("取消")])],1)],1)],1)},s=[],c=(t("c5f6"),t("38fb"),t("fea5")),i=t("372d"),n={props:{visible:{type:Boolean,default:!1},userType:{type:String,default:"add"},performanceId:{type:String,default:""},userInfo:{type:Object,default:function(){return{}}},userId:{type:Number,default:0}},components:{"common-select":Object(i["a"])(t.e("chunk-2d21647e").then(t.bind(null,"c292")))},data:function(){return{userForm:{workcode:"",superior_workcode:"",isolation_workcode:"",president_workcode:"",hrbp_workcode:"",hrd_workcode:"",executive_type:""},userRules:{workcode:[{required:!0,message:"请输入姓名或工号",trigger:"blur"}],superior_workcode:[{required:!0,message:"请输入姓名或工号",trigger:"blur"}],isolation_workcode:[{required:!0,message:"请输入姓名或工号",trigger:"blur"}],president_workcode:[{required:!0,message:"请输入姓名或工号",trigger:"blur"}],hrbp_workcode:[{required:!0,message:"请输入姓名或工号",trigger:"blur"}],hrd_workcode:[{required:!0,message:"请输入姓名或工号",trigger:"blur"}],executive_type:[{required:!0,message:"请选择高管类别",trigger:"change"}]},userOptions:[],loading:!1,executiveTypes:[]}},methods:{selectWorkCode:function(e){this.userForm.workcode=e},selectSubCode:function(e){this.userForm.superior_workcode=e},selectIsoCode:function(e){this.userForm.isolation_workcode=e},selectPreCode:function(e){this.userForm.president_workcode=e},selectHrbpCode:function(e){this.userForm.hrbp_workcode=e},selectHrdCode:function(e){this.userForm.hrd_workcode=e},close:function(){this.$emit("close")},submit:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;"add"!=r.userType?Object(c["vc"])(r.performanceId,r.userId,r.userForm).then(function(e){r.$emit("define")}).catch(function(e){}):Object(c["Ob"])(r.performanceId,r.userForm).then(function(e){r.$emit("define")}).catch(function(e){})})}},beforeDestroy:function(){this.$refs["userForm"].resetFields()},created:function(){var e=this;Object(c["Ab"])(this.performanceId).then(function(r){e.executiveTypes=r}).catch(function(e){}),"add"!=this.userType&&(this.userForm={workcode:this.userInfo.workcode,superior_workcode:this.userInfo.superior_workcode,isolation_workcode:this.userInfo.isolation_workcode,president_workcode:this.userInfo.president_workcode,hrbp_workcode:this.userInfo.hrbp_workcode,hrd_workcode:this.userInfo.hrd_workcode,executive_type:this.userInfo.executive_type})}},u=n,a=(t("1cd6"),t("2877")),d=Object(a["a"])(u,o,s,!1,null,"b9fabeac",null);r["default"]=d.exports},aa77:function(e,r,t){var o=t("5ca1"),s=t("be13"),c=t("79e5"),i=t("fdef"),n="["+i+"]",u="​",a=RegExp("^"+n+n+"*"),d=RegExp(n+n+"*$"),l=function(e,r,t){var s={},n=c(function(){return!!i[e]()||u[e]()!=u}),a=s[e]=n?r(f):i[e];t&&(s[t]=a),o(o.P+o.F*n,"String",s)},f=l.trim=function(e,r){return e=String(s(e)),1&r&&(e=e.replace(a,"")),2&r&&(e=e.replace(d,"")),e};e.exports=l},c5f6:function(e,r,t){"use strict";var o=t("7726"),s=t("69a8"),c=t("2d95"),i=t("5dbc"),n=t("6a99"),u=t("79e5"),a=t("9093").f,d=t("11e9").f,l=t("86cc").f,f=t("aa77").trim,p="Number",m=o[p],b=m,_=m.prototype,h=c(t("2aeb")(_))==p,k="trim"in String.prototype,w=function(e){var r=n(e,!1);if("string"==typeof r&&r.length>2){r=k?r.trim():f(r,3);var t,o,s,c=r.charCodeAt(0);if(43===c||45===c){if(t=r.charCodeAt(2),88===t||120===t)return NaN}else if(48===c){switch(r.charCodeAt(1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+r}for(var i,u=r.slice(2),a=0,d=u.length;a<d;a++)if(i=u.charCodeAt(a),i<48||i>s)return NaN;return parseInt(u,o)}}return+r};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var r=arguments.length<1?0:e,t=this;return t instanceof m&&(h?u(function(){_.valueOf.call(t)}):c(t)!=p)?i(new b(w(r)),t,m):w(r)};for(var y,v=t("9e1e")?a(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;v.length>g;g++)s(b,y=v[g])&&!s(m,y)&&l(m,y,d(b,y));m.prototype=_,_.constructor=m,t("2aba")(o,p,m)}},fdef:function(e,r){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);