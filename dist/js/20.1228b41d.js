webpackJsonp([20],{"43ll":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("n12u"),n("EuXz");var a=n("OE2U"),s=n("BHhq"),o={data:function(){return{constants:{LABEL_NAME:a["_26"],LABEL_TAL_EMAIL:a["_43"],LABEL_DEPARTMENT:a["_13"],LABEL_CONFIRM:a["_10"],LABEL_CANCEL:a["_9"]}}},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"用户信息"},userForm:{type:Object,default:function(){return{email:"",name:"",department_id:"",empID:""}}},disabled:{type:Boolean,default:!1},submit:{type:Function,default:function(){return function(){}}},departments:{type:Array,default:function(){return[]}},department:{type:Array,default:function(){return[]}}},methods:{closeDialog:function(){this.$emit("update:visible",!1)},handelSubmit:function(){var e=this;this.userForm.email&&this.userForm.name&&this.userForm.department_id?this.submit().then(function(t){e.closeDialog()}):this.$message({message:"企业邮箱、姓名、部门都是必填项哦！",type:"warning"})},querySearchAsync:function(e,t){this.$emit("update:userForm",Object.assign({},this.userForm,{name:""})),e?Object(s["y"])({email:e}).then(function(e){if(e){for(var n=e.length-1;n>=0;n--)e[n].value=e[n].name+" - "+e[n].workcode+" - "+e[n].department;t(e)}}).catch(function(e){t([])}):t([])},handleSelect:function(e){this.$emit("update:userForm",Object.assign({},this.userForm,{email:e.email,name:e.name,empID:e.workcode}))},changeDepartment:function(e){this.$emit("update:userForm",Object.assign({},this.userForm,{department_id:e[e.length-1]}))}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.title,visible:e.visible,width:"25%",center:"","before-close":e.closeDialog},on:{"update:visible":function(t){e.visible=t}}},[n("el-form",{staticClass:"user-form"},[n("el-form-item",[n("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:e.constants.LABEL_TAL_EMAIL,disabled:e.disabled,autofocus:!0},on:{select:e.handleSelect},model:{value:e.userForm.email,callback:function(t){e.$set(e.userForm,"email",t)},expression:"userForm.email"}})],1),n("el-form-item",[n("el-input",{attrs:{type:"text",placeholder:e.constants.LABEL_NAME,"auto-complete":"off",disabled:""},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),n("el-form-item",[n("el-cascader",{staticStyle:{width:"100%"},attrs:{value:e.department,options:e.departments,"change-on-select":"",placeholder:e.constants.LABEL_DEPARTMENT,separator:"-"},on:{change:e.changeDepartment}})],1)],1),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",round:""},on:{click:e.handelSubmit}},[e._v(e._s(e.constants.LABEL_CONFIRM))]),n("el-button",{attrs:{round:""},on:{click:e.closeDialog}},[e._v(e._s(e.constants.LABEL_CANCEL))])],1)],1)},i=[],l=n("XyMi");function u(e){n("P+tL")}var c=!1,m=u,d=null,f=null,p=Object(l["a"])(o,r,i,c,m,d,f);t["default"]=p.exports},"P+tL":function(e,t){}});
//# sourceMappingURL=20.1228b41d.js.map