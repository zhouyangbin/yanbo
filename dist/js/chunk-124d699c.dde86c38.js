(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-124d699c"],{"6dbc":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.title,"close-on-click-modal":!1,visible:e.visible,width:"25%",center:"","before-close":e.closeDialog},on:{"update:visible":function(t){e.visible=t}}},[n("el-form",{staticClass:"user-form"},[n("el-form-item",[n("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:e.constants.LABEL_TAL_EMAIL,disabled:e.disabled,autofocus:!0},on:{select:e.handleSelect},model:{value:e.userForm.email,callback:function(t){e.$set(e.userForm,"email",t)},expression:"userForm.email"}})],1),n("el-form-item",[n("el-input",{attrs:{type:"text",placeholder:e.constants.LABEL_NAME,"auto-complete":"off",disabled:""},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),n("el-form-item",[n("el-select",{staticStyle:{display:"block"},attrs:{"value-key":"id",value:e.userForm.roles,multiple:"",placeholder:e.constants.ROLE},on:{change:e.roleChange}},e._l(e.options,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e}})}),1)],1)],1),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",round:""},on:{click:e.handelSubmit}},[e._v("\n      "+e._s(e.constants.LABEL_CONFIRM)+"\n    ")]),n("el-button",{attrs:{round:""},on:{click:e.closeDialog}},[e._v("\n      "+e._s(e.constants.LABEL_CANCEL)+"\n    ")])],1)],1)},s=[],i=n("cebc"),l=(n("7f7f"),n("38fb")),a=n("fea5"),r={data:function(){return{options:[],constants:{LABEL_NAME:l["oc"],LABEL_TAL_EMAIL:l["Gc"],ROLE:l["Wd"],LABEL_CONFIRM:l["ec"],LABEL_CANCEL:l["dc"]}}},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"用户信息"},userForm:{type:Object,default:function(){return{email:"",name:"",roles:[],empID:""}}},disabled:{type:Boolean,default:!1},submit:{type:Function,default:function(){return function(){}}}},methods:{closeDialog:function(){this.$emit("update:visible",!1)},handelSubmit:function(){this.userForm.email&&this.userForm.name&&0!=this.userForm.roles.length?this.submit().then(function(e){}):this.$message({message:"企业邮箱、姓名、角色都是必填项哦！",type:"warning"})},querySearchAsync:function(e,t){this.$emit("update:userForm",Object.assign({},this.userForm,{name:""})),e.trim()?Object(a["Ub"])({email:e}).then(function(e){if(e){for(var n=e.length-1;n>=0;n--)e[n].value=e[n].name+" - "+e[n].workcode+" - "+e[n].department;t(e)}}).catch(function(e){t([])}):t([])},handleSelect:function(e){this.$emit("update:userForm",Object.assign({},this.userForm,{email:e.email,name:e.name,empID:e.workcode}))},roleChange:function(e){this.$emit("update:userForm",Object(i["a"])({},this.userForm,{roles:e}))},getRoleList:function(){var e=this;return Object(a["W"])().then(function(t){e.options=t})}},computed:{selectedRoles:function(){return this.userForm.roles.map(function(e){return e.id})}},created:function(){this.getRoleList()}},c=r,u=(n("a0e1"),n("2877")),m=Object(u["a"])(c,o,s,!1,null,null,null);t["default"]=m.exports},"6ebf":function(e,t,n){},a0e1:function(e,t,n){"use strict";var o=n("6ebf"),s=n.n(o);s.a}}]);