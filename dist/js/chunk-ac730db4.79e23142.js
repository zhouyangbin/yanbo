(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac730db4"],{"6dbc":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.title,"close-on-click-modal":!1,visible:e.visible,width:"25%",center:"","before-close":e.closeDialog},on:{"update:visible":function(t){e.visible=t}}},[n("el-form",{staticClass:"user-form"},[n("el-form-item",[n("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:e.constants.LABEL_TAL_EMAIL,disabled:e.disabled,autofocus:!0},on:{select:e.handleSelect},model:{value:e.userForm.email,callback:function(t){e.$set(e.userForm,"email",t)},expression:"userForm.email"}})],1),n("el-form-item",[n("el-input",{attrs:{type:"text",placeholder:e.constants.LABEL_NAME,"auto-complete":"off",disabled:""},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),n("el-form-item",[n("el-select",{staticStyle:{display:"block"},attrs:{"value-key":"id",value:e.userForm.roles,multiple:"",placeholder:e.constants.ROLE},on:{change:e.roleChange}},e._l(e.options,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e}})})),1)],1)],1),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",round:""},on:{click:e.handelSubmit}},[e._v("\n      "+e._s(e.constants.LABEL_CONFIRM)+"\n    ")]),n("el-button",{attrs:{round:""},on:{click:e.closeDialog}},[e._v("\n      "+e._s(e.constants.LABEL_CANCEL)+"\n    ")])],1)],1)},r=[],s=(n("2338"),n("f763"),n("fb37"),n("97a3")),i=(n("7364"),n("38fb")),a=n("fea5");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={data:function(){return{options:[],constants:{LABEL_NAME:i["jc"],LABEL_TAL_EMAIL:i["Ac"],ROLE:i["Nd"],LABEL_CONFIRM:i["Zb"],LABEL_CANCEL:i["Yb"]}}},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"用户信息"},userForm:{type:Object,default:function(){return{email:"",name:"",roles:[],empID:""}}},disabled:{type:Boolean,default:!1},submit:{type:Function,default:function(){return function(){}}}},methods:{closeDialog:function(){this.$emit("update:visible",!1)},handelSubmit:function(){this.userForm.email&&this.userForm.name&&0!=this.userForm.roles.length?this.submit().then((function(e){})):this.$message({message:"企业邮箱、姓名、角色都是必填项哦！",type:"warning"})},querySearchAsync:function(e,t){this.$emit("update:userForm",Object.assign({},this.userForm,{name:""})),e.trim()?Object(a["Rb"])({email:e}).then((function(e){if(e){for(var n=e.length-1;n>=0;n--)e[n].value=e[n].name+" - "+e[n].workcode+" - "+e[n].department;t(e)}})).catch((function(e){t([])})):t([])},handleSelect:function(e){this.$emit("update:userForm",Object.assign({},this.userForm,{email:e.email,name:e.name,empID:e.workcode}))},roleChange:function(e){this.$emit("update:userForm",c({},this.userForm,{roles:e}))},getRoleList:function(){var e=this;return Object(a["V"])().then((function(t){e.options=t}))}},computed:{selectedRoles:function(){return this.userForm.roles.map((function(e){return e.id}))}},created:function(){this.getRoleList()}},m=u,f=(n("a0e1"),n("6691")),p=Object(f["a"])(m,o,r,!1,null,null,null);t["default"]=p.exports},a0e1:function(e,t,n){"use strict";var o=n("c2a9"),r=n.n(o);r.a},c2a9:function(e,t,n){}}]);