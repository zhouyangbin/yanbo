webpackJsonp([7],{qI90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Biqn"),r=n.n(a),o=n("OE2U"),l=n("xwzc"),s=n("BHhq"),i={data:function(){return{currentPage:1,total:0,constants:{GRADE_LIST:o["V"],CREATE_GRADE:o["p"],GRADE_NAME:o["X"],BU:o["e"],FINISHED_DATE:o["T"],CREATED_DATE:o["o"],OPERATIONS:o["_67"],DETAILS:o["t"],EXPORT_DETAILS:o["M"],CANCEL:o["f"],CONFIRM:o["h"]},depList:[],createGradeDialog:!1,ruleForm:{name:"",dep:[],time:""},rules:{name:[{required:!0,message:o["_57"],trigger:"blur"}],dep:[{type:"array",required:!0,message:o["_58"],trigger:"change"}],time:[{required:!0,message:o["_59"],trigger:"blur"}]},nav:[{label:o["W"],active:!0}],tableData:[]}},components:{"nav-bar":function(){return n.e(13).then(n.bind(null,"PI/7"))},pagination:function(){return n.e(14).then(n.bind(null,"734F"))}},methods:{goDetail:function(t){this.$router.push(Object(l["h"])(t.id))},exportGrade:function(t){window.open(Object(l["c"])(t.id),"_blank")},closeDia:function(t){this.createGradeDialog=!1,this.$refs[t].resetFields()},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var n={name:e.ruleForm.name,department_ids:e.ruleForm.dep,end_time:e.ruleForm.time};Object(s["t"])(n).then(function(t){e.createGradeDialog=!1,e.refreshList(e.currentPage)})})},handleCurrentChange:function(t){this.currentPage=t,this.refreshList(t)},createGrade:function(){var t=this;Object(s["f"])().then(function(e){e&&(t.depList=e,t.createGradeDialog=!0)})},refreshList:function(t){var e=this;Object(s["i"])(t).then(function(t){t&&(e.tableData=t.data.map(function(t,e){return r()({},t,{index:e})}),e.total=t.total)})}},computed:{isAdmin:function(){return 1===parseInt(window.localStorage.getItem("talLevel"),10)}},created:function(){this.refreshList(this.currentPage)}},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{list:t.nav}}),n("section",{staticClass:"content-container"},[n("el-row",{attrs:{align:"middle",type:"flex",justify:"space-between"}},[n("span",[t._v("\n        "+t._s(t.constants.GRADE_LIST)+"\n      ")]),t.isAdmin?n("el-button",{attrs:{type:"primary",round:""},on:{click:t.createGrade}},[t._v(t._s(t.constants.CREATE_GRADE))]):t._e()],1),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,stripe:""}},[n("el-table-column",{attrs:{prop:"name",label:t.constants.GRADE_NAME},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.name)+"\n          "),0===e.row.index?n("span",{staticClass:"newTag"},[t._v("\n            NEW!\n          ")]):t._e()]}}])}),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"department_names",label:t.constants.BU},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n            "+t._s((e.row.department_names||[]).map(function(t){return t.department_name}).join("、 "))+"\n          ")])]}}])}),n("el-table-column",{attrs:{prop:"end_time",label:t.constants.FINISHED_DATE}}),n("el-table-column",{attrs:{prop:"create_at",label:t.constants.CREATED_DATE}}),n("el-table-column",{attrs:{prop:"operation",label:t.constants.OPERATIONS},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.goDetail(e.row)}}},[t._v(t._s(t.constants.DETAILS))]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.exportGrade(e.row)}}},[t._v(t._s(t.constants.EXPORT_DETAILS))])]}}])})],1),n("br"),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("pagination",{attrs:{total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1),n("el-dialog",{attrs:{width:"650px",visible:t.createGradeDialog},on:{close:function(e){t.closeDia("ruleForm")},"update:visible":function(e){t.createGradeDialog=e}}},[n("span",{attrs:{slot:"title"},slot:"title"},[n("el-row",{staticClass:"dialog-title",attrs:{type:"flex",justify:"center"}},[t._v("\n        "+t._s(t.constants.CREATE_GRADE)+"\n      ")])],1),n("el-form",{ref:"ruleForm",staticClass:"create-form-dialog",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:t.constants.GRADE_NAME,prop:"name"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{size:"medium",maxlength:20},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),n("el-form-item",{attrs:{label:t.constants.BU,prop:"dep"}},[n("el-checkbox-group",{model:{value:t.ruleForm.dep,callback:function(e){t.$set(t.ruleForm,"dep",e)},expression:"ruleForm.dep"}},t._l(t.depList,function(e){return n("el-checkbox",{key:e.department_id,attrs:{label:e.department_id,name:"dep"}},[t._v(" "+t._s(e.name))])}))],1),n("el-form-item",{attrs:{label:t.constants.FINISHED_DATE,prop:"time"}},[n("el-date-picker",{staticStyle:{width:"400px"},attrs:{"value-format":"yyyy-MM-dd HH:mm","popper-class":"date-picker-container",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择日期时间"},model:{value:t.ruleForm.time,callback:function(e){t.$set(t.ruleForm,"time",e)},expression:"ruleForm.time"}})],1),n("br"),n("el-form-item",{attrs:{"label-width":"0px"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{attrs:{round:"",type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v(t._s(t.constants.CONFIRM))]),n("el-button",{attrs:{round:""},on:{click:function(e){t.closeDia("ruleForm")}}},[t._v(t._s(t.constants.CANCEL))])],1)],1)],1)],1)],1)},u=[],m=n("XyMi");function d(t){n("yBqU")}var p=!1,f=d,_="data-v-a193e7a2",b=null,h=Object(m["a"])(i,c,u,p,f,_,b);e["default"]=h.exports},yBqU:function(t,e){}});
//# sourceMappingURL=7.39b0df54.js.map