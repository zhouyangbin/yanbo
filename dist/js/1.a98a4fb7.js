webpackJsonp([1],{"+UIO":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("OE2U"),a=e("xwzc"),_={data:function(){return{defaultOpeneds:[a["b"]],constants:{MY_GRADE:n["_77"],TEAM_GRADE:n["_120"],EMPLOYEE_GRADE:n["P"],GRADE_REPORT:n["_21"],GRADE_MANAGE:n["_18"],USER_MANAGE:n["_129"],PATH_GRADE_REPORT:a["s"],PATH_GRADE_MANAGE:a["p"],PATH_USER_MANAGE:a["G"],PATH_GRADE_PROGRESS:a["r"],PATH_GRADE_ORG_LIST:a["q"],PATH_GRADE_EMP_DETAIL:a["o"],PERFORMANCE_GRADE:n["_87"],PATH_PERFORMANCE_MANAGER:a["A"],TPL_SETTING:n["_123"],PATH_PERFORMANCE_TPL:a["E"],PATH_PERFORMANCE_RULES:a["D"],RULES_SETTING:n["_106"],ACCESS_SETTING:n["b"],ROLE_SETTING:n["_105"],PATH_ACCESS_ROLES:a["a"],CULTURE_GRADE:n["z"],PATH_EMPLOYEE_MY:a["b"],PATH_EMPLOYEE_TEAM:a["c"]}}},created:function(){this.permissions=JSON.parse(localStorage.getItem("permissions")||"[]")},computed:{showRole:function(){return this.permissions.includes(101)},showUser:function(){return this.permissions.includes(102)},canManageCultureGrade:function(){return this.permissions.includes(202)},canManagePerformanceGrade:function(){return this.permissions.includes(302)},canSetTpl:function(){return this.permissions.includes(303)},canSetRules:function(){return this.permissions.includes(304)}}},E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-menu",{staticClass:"menu-list",attrs:{"default-openeds":t.defaultOpeneds,"default-active":t.$route.path,"background-color":"#242a36","text-color":"#969798","active-text-color":"#969798","unique-opened":"",router:""}},[e("el-submenu",{attrs:{index:t.constants.PATH_EMPLOYEE_MY}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-star-off"}),e("span",[t._v(t._s(t.constants.EMPLOYEE_GRADE))])]),e("el-menu-item",{attrs:{index:t.constants.PATH_EMPLOYEE_MY}},[t._v(t._s(t.constants.MY_GRADE))]),e("el-menu-item",{class:{"is-active":[t.constants.PATH_EMPLOYEE_TEAM].includes(t.$route.path)},attrs:{index:t.constants.PATH_EMPLOYEE_TEAM}},[t._v(t._s(t.constants.TEAM_GRADE))])],2),t.canManageCultureGrade?e("el-submenu",{attrs:{index:t.constants.PATH_GRADE_REPORT}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-edit-outline"}),e("span",[t._v(t._s(t.constants.CULTURE_GRADE))])]),e("el-menu-item",{attrs:{index:t.constants.PATH_GRADE_REPORT}},[t._v(t._s(t.constants.GRADE_REPORT))]),e("el-menu-item",{class:{"is-active":[t.constants.PATH_GRADE_PROGRESS(t.$route.params.id),t.constants.PATH_GRADE_ORG_LIST(t.$route.params.id,t.$route.params.orgID),t.constants.PATH_GRADE_EMP_DETAIL(t.$route.params.id,t.$route.params.orgID,t.$route.params.uid)].includes(t.$route.path)},attrs:{index:t.constants.PATH_GRADE_MANAGE}},[t._v(t._s(t.constants.GRADE_MANAGE)+" ")])],2):t._e(),t.canManagePerformanceGrade?e("el-submenu",{attrs:{index:t.constants.PATH_PERFORMANCE_MANAGER}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-view"}),e("span",[t._v(t._s(t.constants.PERFORMANCE_GRADE))])]),e("el-menu-item",{class:{"is-active":[t.constants.PATH_PERFORMANCE_MANAGER].includes(t.$route.path)},attrs:{index:t.constants.PATH_PERFORMANCE_MANAGER}},[t._v(t._s(t.constants.GRADE_MANAGE))]),t.canSetTpl?e("el-menu-item",{class:{"is-active":[t.constants.PATH_PERFORMANCE_TPL].includes(t.$route.path)},attrs:{index:t.constants.PATH_PERFORMANCE_TPL}},[t._v(t._s(t.constants.TPL_SETTING))]):t._e(),t.canSetRules?e("el-menu-item",{class:{"is-active":[t.constants.PATH_PERFORMANCE_RULES].includes(t.$route.path)},attrs:{index:t.constants.PATH_PERFORMANCE_RULES}},[t._v(t._s(t.constants.RULES_SETTING))]):t._e()],2):t._e(),t.showRole||t.showUser?e("el-submenu",{attrs:{index:t.constants.PATH_ACCESS_ROLES}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-setting"}),e("span",[t._v(t._s(t.constants.ACCESS_SETTING))])]),t.showRole?e("el-menu-item",{class:{"is-active":[t.constants.PATH_ACCESS_ROLES].includes(t.$route.path)},attrs:{index:t.constants.PATH_ACCESS_ROLES}},[t._v(t._s(t.constants.ROLE_SETTING))]):t._e(),t.showUser?e("el-menu-item",{class:{"is-active":[t.constants.PATH_USER_MANAGE].includes(t.$route.path)},attrs:{index:t.constants.PATH_USER_MANAGE}},[t._v(t._s(t.constants.USER_MANAGE))]):t._e()],2):t._e()],1)},i=[],A=e("XyMi");function c(t){e("KmNl")}var o=!1,R=c,r="data-v-6adbde36",u=null,l=Object(A["a"])(_,E,i,o,R,r,u);s["default"]=l.exports},KmNl:function(t,s){}});
//# sourceMappingURL=1.a98a4fb7.js.map