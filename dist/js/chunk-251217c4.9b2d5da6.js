(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-251217c4"],{"199c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-manage"},[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container"},[n("el-row",[n("el-col",{attrs:{span:16}},[n("el-form",{ref:"conditionForm",attrs:{inline:!0,model:t.conditionForm}},[n("el-form-item",[n("el-input",{attrs:{placeholder:t.constants.LABEL_NAME},on:{input:t.changeCondition},model:{value:t.conditionForm.name,callback:function(e){t.$set(t.conditionForm,"name",e)},expression:"conditionForm.name"}})],1),n("el-form-item",[n("el-select",{attrs:{placeholder:t.constants.LABEL_SELECT_DIVISION},on:{change:t.changeCondition},model:{value:t.conditionForm.department_id,callback:function(e){t.$set(t.conditionForm,"department_id",e)},expression:"conditionForm.department_id"}},t._l(t.departments,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),n("el-form-item",[n("el-button",{attrs:{round:""},on:{click:function(e){t.resetForm("conditionForm")}}},[t._v(t._s(t.constants.LABEL_EMPTY))])],1)],1)],1),n("el-col",{attrs:{span:8}},[n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-button",{attrs:{type:"primary",round:""},on:{click:t.submitUser}},[t._v(t._s(t.constants.LABEL_ADD_USER))])],1)],1)],1),t.addDialogVisible?n("user-dialog",{attrs:{visible:t.addDialogVisible,title:t.constants.LABEL_ADD,userForm:t.userForm,disabled:!1,submit:t.addSubmit},on:{"update:visible":function(e){t.addDialogVisible=e},"update:userForm":function(e){t.userForm=e}}}):t._e(),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:t.userTable,stripe:"",height:t.tableHeight}},[t._l(t.tableColumn,function(t){return n("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label,width:t.width,"show-overflow-tooltip":!0,align:"center"}})}),n("el-table-column",{attrs:{label:t.constants.ROLE,"show-overflow-tooltip":!0,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.roles.map(function(t){return t.name}).join(", "))+"\n        ")]}}])}),n("el-table-column",{attrs:{label:t.constants.LABEL_STATUS,width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s("1"==e.row.active?t.constants.LABEL_ENABLED:t.constants.LABEL_FORBIDDEN)+"\n        ")]}}])}),n("el-table-column",{attrs:{prop:"created_at",label:t.constants.LABEL_CREATED_DATE,width:"180",align:"center"}}),n("el-table-column",{attrs:{fixed:"right",label:t.constants.LABEL_OPERATIONS,align:"center",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.updateUser(e.row)}}},[t._v(t._s(t.constants.LABEL_MODIFY))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.enabledUser(e.row)}}},[t._v(t._s(1==e.row.active?t.constants.LABEL_FORBIDDEN:t.constants.LABEL_ENABLED))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.deleteUser(e.row)}}},[t._v(t._s(t.constants.LABEL_DEL))]),n("el-button",{class:{disable:!e.row.has_achievement_permission&&!e.row.has_culture_permission},attrs:{type:"text",size:"small"},on:{click:function(n){t.bind(e.row)}}},[t._v(t._s(t.constants.BIND_DEPARTMENT))])]}}])})],2),t.updateDialogVisible?n("user-dialog",{attrs:{visible:t.updateDialogVisible,title:t.constants.LABEL_MODIFY,userForm:t.userForm,disabled:!0,submit:t.updateSubmit},on:{"update:visible":function(e){t.updateDialogVisible=e},"update:userForm":function(e){t.userForm=e}}}):t._e(),n("br"),t.bindDialogVisible?n("bind-dialog",{attrs:{currentInfo:t.selectedUser,visible:t.bindDialogVisible},on:{"update:visible":function(e){t.bindDialogVisible=e}}}):t._e(),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("pagination",{attrs:{currentPage:t.conditionForm.page,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},a=[],o=(n("f751"),n("7f7f"),n("c93e")),s=n("38fb"),r=n("fea5"),c={components:{"nav-bar":function(){return n.e("chunk-55b2b05e").then(n.bind(null,"3208"))},"user-dialog":function(){return n.e("chunk-5e43e529").then(n.bind(null,"6dbc"))},pagination:function(){return n.e("chunk-62020762").then(n.bind(null,"486f"))},"bind-dialog":function(){return n.e("chunk-f376a612").then(n.bind(null,"eb23"))}},data:function(){return{nav:[{label:s["je"],active:!0}],constants:{LABEL_NAME:s["gc"],ROLE:s["Gd"],LABEL_STATUS:s["uc"],LABEL_CREATED_DATE:s["Xb"],LABEL_OPERATIONS:s["hc"],LABEL_MODIFY:s["fc"],LABEL_FORBIDDEN:s["cc"],LABEL_ENABLED:s["bc"],LABEL_DEL:s["Yb"],LABEL_ADD:s["Tb"],LABEL_ADD_USER:s["Ub"],LABEL_EMPTY:s["ac"],LABEL_SELECT_DIVISION:s["qc"],BIND_DEPARTMENT:s["p"]},conditionForm:{name:"",department_id:"",page:1},total:0,departments:[],bindDialogVisible:!1,addDialogVisible:!1,updateDialogVisible:!1,userForm:{email:"",name:"",roles:[],empID:""},userId:"",tableColumn:[{prop:"name",label:s["gc"],width:"150"},{prop:"email",label:s["xc"],width:""}],userTable:[],tableLoading:!0,tableHeight:"calc(100% - 61px - 40px)",selectedUser:{}}},created:function(){this.getManagers(),this.getDepartments()},methods:{getManagers:function(){var t=this,e=Object(o["a"])({},this.conditionForm);Object(r["w"])(e).then(function(e){t.tableLoading=!1,e&&(t.total=e.total,t.userTable=e.data)}).catch(function(e){t.tableLoading=!1})},getDepartments:function(){var t=this;Object(r["l"])().then(function(e){e.map(function(t){t.label=t.name,t.value=t.department_id}),t.departments=e}).catch(function(t){})},changeCondition:function(){this.conditionForm=Object.assign({},this.conditionForm,{page:1}),this.getManagers()},resetForm:function(t){this.conditionForm={name:"",department_id:"",page:1},this.getManagers()},submitUser:function(){this.addDialogVisible=!0,this.userForm={email:"",name:"",roles:[],empID:""}},addSubmit:function(){var t=this,e=this.userForm,n=e.email,i=e.roles;return Object(r["a"])({email:n,role_ids:i.map(function(t){return t.id})}).then(function(e){t.addDialogVisible=!1,t.getManagers()}).catch(function(t){})},updateUser:function(t){this.updateDialogVisible=!0,this.userForm={email:t.email,name:t.name,empID:t.empID,roles:t.roles||[]},this.userId=t.id},updateSubmit:function(){var t=this,e=this.userForm.roles;return Object(r["Kb"])(this.userId,{role_ids:e.map(function(t){return t.id})}).then(function(e){t.$message({type:"success",message:s["E"]}),t.userId="",t.updateDialogVisible=!1,t.getManagers()}).catch(function(t){})},enabledUser:function(t){var e=this,n=1^t.active;Object(r["Kb"])(t.id,{active:n}).then(function(n){e.$message({type:"success",message:1==t.active?"禁用成功":"启用成功"}),e.getManagers()}).catch(function(t){})},deleteUser:function(t){var e=this;this.$confirm(s["yc"],s["j"],{roundButton:!0,confirmButtonText:s["Wb"],cancelButtonText:s["Vb"],type:"warning",center:!0}).then(function(){Object(r["h"])(t.id).then(function(t){e.getManagers(),e.$message({type:"success",message:s["C"]})}).catch(function(t){})}).catch(function(){e.$message({type:"info",message:s["G"]})})},handleCurrentChange:function(t){this.conditionForm=Object.assign({},this.conditionForm,{page:t}),this.getManagers()},bind:function(t){this.selectedUser=t,this.bindDialogVisible=!0}},watch:{bindDialogVisible:function(t){t||this.getManagers()}}},l=c,u=(n("99c9"),n("2877")),d=Object(u["a"])(l,i,a,!1,null,"3cc0aa09",null);d.options.__file="index.vue";e["default"]=d.exports},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"52a7":function(t,e){e.f={}.propertyIsEnumerable},7333:function(t,e,n){"use strict";var i=n("0d58"),a=n("2621"),o=n("52a7"),s=n("4bf8"),r=n("626a"),c=Object.assign;t.exports=!c||n("79e5")(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=i})?function(t,e){var n=s(t),c=arguments.length,l=1,u=a.f,d=o.f;while(c>l){var b,m=r(arguments[l++]),f=u?i(m).concat(u(m)):i(m),p=f.length,g=0;while(p>g)d.call(m,b=f[g++])&&(n[b]=m[b])}return n}:c},"7f7f":function(t,e,n){var i=n("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in a||n("9e1e")&&i(a,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"99c9":function(t,e,n){"use strict";var i=n("df5d"),a=n.n(i);a.a},df5d:function(t,e,n){},f751:function(t,e,n){var i=n("5ca1");i(i.S+i.F,"Object",{assign:n("7333")})}}]);