webpackJsonp([21],{"2ivt":function(e,t){},qI90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Biqn"),a=n.n(r),s=n("OE2U"),o=n("xwzc"),l=n("BHhq"),i={data:function(){return{currentPage:1,total:0,constants:{GRADE_LIST:s["_11"],CREATE_GRADE:s["x"],GRADE_NAME:s["_13"],BU:s["j"],FINISHED_DATE:s["_9"],CREATED_DATE:s["w"],OPERATIONS:s["_78"],DETAILS:s["D"],EXPORT_DETAILS:s["_2"],CANCEL:s["k"],CONFIRM:s["n"]},depList:[],createGradeDialog:!1,ruleForm:{name:"",dep:[],time:""},permissions:[],rules:{name:[{required:!0,message:s["_67"],trigger:"blur"}],dep:[{type:"array",required:!0,message:s["_68"],trigger:"change"}],time:[{required:!0,message:s["_69"],trigger:"blur"}]},nav:[{label:s["_12"],active:!0}],tableData:[]}},components:{"nav-bar":function(){return n.e(25).then(n.bind(null,"PI/7"))},pagination:function(){return n.e(26).then(n.bind(null,"734F"))}},methods:{goDetail:function(e){this.$router.push(Object(o["q"])(e.id))},exportGrade:function(e){window.open(Object(o["i"])(e.id),"_blank")},closeDia:function(e){this.createGradeDialog=!1,this.$refs[e].resetFields()},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var n={name:t.ruleForm.name,department_ids:t.ruleForm.dep,end_time:t.ruleForm.time};Object(l["O"])(n).then(function(e){t.createGradeDialog=!1,t.refreshList(t.currentPage)}).catch(function(e){})})},handleCurrentChange:function(e){this.currentPage=e,this.refreshList(e)},createGrade:function(){var e=this;Object(l["h"])().then(function(t){t&&(e.depList=t,e.createGradeDialog=!0)}).catch(function(e){})},refreshList:function(e){var t=this;Object(l["l"])(e).then(function(e){t.tableData=e.data.map(function(e,t){return a()({},e,{index:t})}),t.total=e.total}).catch(function(e){})}},computed:{canCreateCultureGrade:function(){return this.permissions.includes(201)}},created:function(){this.refreshList(this.currentPage),this.permissions=JSON.parse(localStorage.getItem("permissions")||"[]")}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav-bar",{attrs:{list:e.nav}}),n("section",{staticClass:"content-container"},[n("el-row",{attrs:{align:"middle",type:"flex",justify:"space-between"}},[n("span",[e._v("\n        "+e._s(e.constants.GRADE_LIST)+"\n      ")]),e.canCreateCultureGrade?n("el-button",{attrs:{type:"primary",round:""},on:{click:e.createGrade}},[e._v(e._s(e.constants.CREATE_GRADE))]):e._e()],1),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,stripe:""}},[n("el-table-column",{attrs:{prop:"name",label:e.constants.GRADE_NAME},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.name)+"\n          "),0===t.row.index?n("span",{staticClass:"newTag"},[e._v("\n            NEW!\n          ")]):e._e()]}}])}),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"department_names",label:e.constants.BU},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n            "+e._s((t.row.department_names||[]).map(function(e){return e.department_name}).join("、 "))+"\n          ")])]}}])}),n("el-table-column",{attrs:{prop:"end_time",label:e.constants.FINISHED_DATE}}),n("el-table-column",{attrs:{prop:"create_at",label:e.constants.CREATED_DATE}}),n("el-table-column",{attrs:{prop:"operation",label:e.constants.OPERATIONS},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.goDetail(t.row)}}},[e._v(e._s(e.constants.DETAILS))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.exportGrade(t.row)}}},[e._v(e._s(e.constants.EXPORT_DETAILS))])]}}])})],1),n("br"),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("pagination",{attrs:{currentPage:e.currentPage,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1),n("el-dialog",{attrs:{width:"650px",visible:e.createGradeDialog},on:{close:function(t){e.closeDia("ruleForm")},"update:visible":function(t){e.createGradeDialog=t}}},[n("span",{attrs:{slot:"title"},slot:"title"},[n("el-row",{staticClass:"dialog-title",attrs:{type:"flex",justify:"center"}},[e._v("\n        "+e._s(e.constants.CREATE_GRADE)+"\n      ")])],1),n("el-form",{ref:"ruleForm",staticClass:"create-form-dialog",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:e.constants.GRADE_NAME,prop:"name"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{size:"medium",maxlength:20},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),n("el-form-item",{attrs:{label:e.constants.BU,prop:"dep"}},[n("el-checkbox-group",{model:{value:e.ruleForm.dep,callback:function(t){e.$set(e.ruleForm,"dep",t)},expression:"ruleForm.dep"}},e._l(e.depList,function(t){return n("el-checkbox",{key:t.department_id,attrs:{label:t.department_id,name:"dep"}},[e._v(" "+e._s(t.name))])}))],1),n("el-form-item",{attrs:{label:e.constants.FINISHED_DATE,prop:"time"}},[n("el-date-picker",{staticStyle:{width:"400px"},attrs:{"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择日期时间"},model:{value:e.ruleForm.time,callback:function(t){e.$set(e.ruleForm,"time",t)},expression:"ruleForm.time"}})],1),n("br"),n("el-form-item",{attrs:{"label-width":"0px"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{attrs:{round:"",type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v(e._s(e.constants.CONFIRM))]),n("el-button",{attrs:{round:""},on:{click:function(t){e.closeDia("ruleForm")}}},[e._v(e._s(e.constants.CANCEL))])],1)],1)],1)],1)],1)},u=[],m=n("XyMi");function d(e){n("2ivt")}var p=!1,f=d,_="data-v-0b2dfa64",b=null,h=Object(m["a"])(i,c,u,p,f,_,b);t["default"]=h.exports}});
//# sourceMappingURL=21.f36cdd05.js.map