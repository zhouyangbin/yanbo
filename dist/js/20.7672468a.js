webpackJsonp([20],{FE5e:function(t,n){},TSbI:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("OE2U"),r=e("BHhq"),s={data:function(){return{tableData:[],total:0,currentPage:1,nav:[{label:a["_101"],active:!0}],constants:{ROLE:a["_100"],ACCESS:a["a"]}}},components:{"nav-bar":function(){return e.e(25).then(e.bind(null,"PI/7"))},pagination:function(){return e.e(26).then(e.bind(null,"734F"))}},methods:{handleCurrentChange:function(t){this.currentPage=t,this.refreshList(t)},refreshList:function(t){var n=this;return Object(r["A"])({page:t}).then(function(t){var e=t.total,a=t.data;n.total=e,n.tableData=a})}},created:function(){this.refreshList(1)}},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"roles-setting"},[e("nav-bar",{attrs:{list:t.nav}}),e("section",{staticClass:"content-container"},[e("br"),e("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,stripe:""}},[e("el-table-column",{attrs:{prop:"name",label:t.constants.ROLE}}),e("el-table-column",{attrs:{prop:"permissions",label:t.constants.ACCESS},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n          "+t._s(n.row.permissions.join(", "))+"\n        ")]}}])})],1),e("br"),e("pagination",{attrs:{currentPage:t.currentPage,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},o=[],l=e("XyMi");function c(t){e("FE5e")}var u=!1,b=c,f="data-v-07b38be6",h=null,p=Object(l["a"])(s,i,o,u,b,f,h);n["default"]=p.exports}});
//# sourceMappingURL=20.7672468a.js.map