<template>
  <el-menu :default-openeds="defaultOpeneds" class="menu-list" :default-active="$route.path" background-color="#242a36" text-color="#969798" active-text-color="#969798" unique-opened router>
    <el-submenu :index="constants.PATH_EMPLOYEE_MY">
      <template slot="title">
        <i class="el-icon-star-off"></i>
        <span>{{constants.EMPLOYEE_GRADE}}</span>
      </template>
      <el-menu-item :index="constants.PATH_EMPLOYEE_MY">{{constants.MY_GRADE}}</el-menu-item>
      <el-menu-item :class="{'is-active':[constants.PATH_EMPLOYEE_TEAM].includes($route.path)}" :index="constants.PATH_EMPLOYEE_TEAM">{{constants.TEAM_GRADE}}</el-menu-item>
    </el-submenu>
    <el-submenu v-if="canManageCultureGrade" :index="constants.PATH_GRADE_REPORT">
      <template slot="title">
        <i class="el-icon-edit-outline"></i>
        <span>{{constants.CULTURE_GRADE}}</span>
      </template>
      <el-menu-item :index="constants.PATH_GRADE_REPORT">{{constants.GRADE_REPORT}}</el-menu-item>
      <el-menu-item :class="{'is-active':[constants.PATH_GRADE_PROGRESS($route.params.id),constants.PATH_GRADE_ORG_LIST($route.params.id,$route.params.orgID),constants.PATH_GRADE_EMP_DETAIL($route.params.id,$route.params.orgID,$route.params.uid)].includes($route.path)}" :index="constants.PATH_GRADE_MANAGE">{{constants.GRADE_MANAGE}} </el-menu-item>
    </el-submenu>
    <el-submenu v-if="canManagePerformanceGrade" :index="constants.PATH_PERFORMANCE_MANAGER">
      <template slot="title">
        <i class="el-icon-view"></i>
        <span>{{constants.PERFORMANCE_GRADE}}</span>
      </template>
      <!-- <el-menu-item :class="{'is-active':[constants.PATH_PERFORMANCE_REPORT].includes($route.path)}" :index="constants.PATH_PERFORMANCE_REPORT">{{constants.GRADE_REPORT}}</el-menu-item> -->
      <el-menu-item :class="{'is-active':[constants.PATH_PERFORMANCE_MANAGER].includes($route.path)}" :index="constants.PATH_PERFORMANCE_MANAGER">{{constants.GRADE_MANAGE}}</el-menu-item>
      <el-menu-item v-if="canSetTpl" :class="{'is-active':[constants.PATH_PERFORMANCE_TPL].includes($route.path)}" :index="constants.PATH_PERFORMANCE_TPL">{{constants.TPL_SETTING}}</el-menu-item>
      <el-menu-item v-if="canSetRules" :class="{'is-active':[constants.PATH_PERFORMANCE_RULES].includes($route.path)}" :index="constants.PATH_PERFORMANCE_RULES">{{constants.RULES_SETTING}}</el-menu-item>
    </el-submenu>
    <el-submenu v-if="showRole || showUser" :index="constants.PATH_ACCESS_ROLES">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>{{constants.ACCESS_SETTING}}</span>
      </template>
      <el-menu-item v-if="showRole" :class="{'is-active':[constants.PATH_ACCESS_ROLES].includes($route.path)}" :index="constants.PATH_ACCESS_ROLES">{{constants.ROLE_SETTING}}</el-menu-item>
      <el-menu-item v-if="showUser" :class="{'is-active':[constants.PATH_USER_MANAGE].includes($route.path)}" :index="constants.PATH_USER_MANAGE">{{constants.USER_MANAGE}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
import {
  GRADE_REPORT,
  GRADE_MANAGE,
  USER_MANAGE,
  PERFORMANCE_GRADE,
  TPL_SETTING,
  RULES_SETTING,
  ACCESS_SETTING,
  ROLE_SETTING,
  CULTURE_GRADE,
  EMPLOYEE_GRADE,
  MY_GRADE,
  TEAM_GRADE
} from "@/constants/TEXT";
import {
  PATH_GRADE_REPORT,
  PATH_GRADE_MANAGE,
  PATH_USER_MANAGE,
  PATH_GRADE_PROGRESS,
  PATH_GRADE_ORG_LIST,
  PATH_GRADE_EMP_DETAIL,
  // PATH_PERFORMANCE_REPORT,
  PATH_PERFORMANCE_MANAGER,
  PATH_PERFORMANCE_TPL,
  PATH_PERFORMANCE_RULES,
  PATH_ACCESS_ROLES,
  PATH_EMPLOYEE_MY,
  PATH_EMPLOYEE_TEAM
} from "@/constants/URL";

export default {
  data() {
    return {
      defaultOpeneds: [PATH_EMPLOYEE_MY],
      constants: {
        MY_GRADE,
        TEAM_GRADE,
        EMPLOYEE_GRADE,
        GRADE_REPORT,
        GRADE_MANAGE,
        USER_MANAGE,
        PATH_GRADE_REPORT,
        PATH_GRADE_MANAGE,
        PATH_USER_MANAGE,
        PATH_GRADE_PROGRESS,
        PATH_GRADE_ORG_LIST,
        PATH_GRADE_EMP_DETAIL,
        // PATH_PERFORMANCE_REPORT,
        PERFORMANCE_GRADE,
        PATH_PERFORMANCE_MANAGER,
        TPL_SETTING,
        PATH_PERFORMANCE_TPL,
        PATH_PERFORMANCE_RULES,
        RULES_SETTING,
        ACCESS_SETTING,
        ROLE_SETTING,
        PATH_ACCESS_ROLES,
        CULTURE_GRADE,
        PATH_EMPLOYEE_MY,
        PATH_EMPLOYEE_TEAM
      }
    };
  },
  created() {
    this.permissions = JSON.parse(localStorage.getItem("permissions") || "[]");
  },
  computed: {
    showRole() {
      return this.permissions.includes(101);
    },
    showUser() {
      return this.permissions.includes(102);
    },
    // canCreateCultureGrade() {
    //   return this.permissions.includes(201)
    // },
    canManageCultureGrade() {
      return this.permissions.includes(202);
    },
    canManagePerformanceGrade() {
      return this.permissions.includes(302);
    },
    canSetTpl() {
      return this.permissions.includes(303);
    },
    canSetRules() {
      return this.permissions.includes(304);
    }
  }
};
</script>

<style scoped>
.menu-list >>> .el-menu-item {
  position: relative;
}
.menu-list >>> .el-menu-item:hover::after,
.menu-list >>> .el-menu-item.is-active::after {
  position: absolute;
  content: "";
  width: 4px;
  left: 0;
  top: 0px;
  background-color: rgb(76, 233, 195);
  height: 100%;
}
</style>
