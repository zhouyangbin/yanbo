<template>
  <el-menu
    :default-openeds="defaultOpeneds"
    v-resize="calWidth"
    :collapse="isCollapse"
    class="menu-list"
    :default-active="$route.path"
    background-color="#242a36"
    text-color="#969798"
    active-text-color="#969798"
    unique-opened
    router
  >
    <el-submenu :show-timeout="100" :index="constants.PATH_MY_CULTURE_GRADE">
      <template slot="title">
        <i class="el-icon-star-off"></i>
        <span>{{ constants.MY_CULTURE }}</span>
      </template>
      <el-menu-item
        :class="{
          'is-active': [constants.PATH_MY_CULTURE_GRADE].includes($route.path)
        }"
        :index="constants.PATH_MY_CULTURE_GRADE"
        >我的评分</el-menu-item
      >
      <el-menu-item
        :class="{
          'is-active': [
            constants.PATH_MEMEBER_CULTURE_GRADE,
            constants.PATH_MEMBER_CULTURE_LIST($route.params.id)
          ].includes($route.path)
        }"
        :index="constants.PATH_MEMEBER_CULTURE_GRADE"
        >我的下级</el-menu-item
      >
      <el-menu-item
        :class="{
          'is-active': [
            constants.PATH_DOWN_MEMEBER_CULTURE_GRADE,
            constants.PATH_DOWN_MEMBER_CULTURE_LIST($route.params.id)
          ].includes($route.path)
        }"
        :index="constants.PATH_DOWN_MEMEBER_CULTURE_GRADE"
        >我的隔级</el-menu-item
      >
      <el-menu-item
        v-if="show271"
        :class="{
          'is-active': [constants.PATH_CULTURE_LEVEL].includes($route.path)
        }"
        :index="constants.PATH_CULTURE_LEVEL"
        >事业部271</el-menu-item
      >
    </el-submenu>
    <el-submenu :show-timeout="100" :index="constants.PATH_EMPLOYEE_MY">
      <template slot="title">
        <i class="el-icon-aim"></i>
        <span>{{ constants.MY_PERFORMANCE }}</span>
      </template>
      <el-menu-item :index="constants.PATH_EMPLOYEE_MY">{{
        constants.MY_GRADE
      }}</el-menu-item>
      <el-menu-item
        :class="{
          'is-active': [constants.PATH_EMPLOYEE_TEAM].includes($route.path)
        }"
        :index="constants.PATH_EMPLOYEE_TEAM"
        >{{ constants.TEAM_GRADE }}</el-menu-item
      >
    </el-submenu>
    <el-submenu
      v-if="showExecutiveScoreUserManagement || showExecutiveScoreManagement"
      :show-timeout="100"
      :index="constants.PATH_PERFORMANCE_GRADE_MANAGEMENT"
    >
      <template slot="title">
        <i class="el-icon-star-off"></i>
        <span>{{ constants.EXECUTIVE_PERFORMANCE }}</span>
      </template>
      <el-menu-item
        v-if="showExecutiveScoreUserManagement"
        :index="constants.PATH_PERFORMANCE_GRADE_MANAGEMENT"
        >{{ constants.GRADE_MANAGE }}</el-menu-item
      >
      <el-menu-item
        v-if="showExecutiveScoreManagement"
        :class="{
          'is-active': [constants.PATH_PERFORMANCE_TPL_SETTINGS].includes(
            $route.path
          )
        }"
        :index="constants.PATH_PERFORMANCE_TPL_SETTINGS"
        >{{ constants.TPL_SETTING }}</el-menu-item
      >
      <el-menu-item
        v-if="showExecutiveScoreManagement"
        :class="{
          'is-active': [constants.PATH_PERFORMANCE_LABEL_SETTINGS].includes(
            $route.path
          )
        }"
        :index="constants.PATH_PERFORMANCE_LABEL_SETTINGS"
        >{{ constants.LABEL_SETTING }}</el-menu-item
      >
    </el-submenu>
    <el-submenu
      :show-timeout="100"
      v-if="canManageCultureGrade"
      :index="constants.PATH_GRADE_REPORT"
    >
      <template slot="title">
        <i class="el-icon-edit-outline"></i>
        <span>{{ constants.CULTURE_GRADE }}</span>
      </template>
      <el-menu-item :index="constants.PATH_GRADE_REPORT">{{
        constants.GRADE_REPORT
      }}</el-menu-item>
      <el-menu-item
        :class="{
          'is-active': [
            constants.PATH_GRADE_PROGRESS($route.params.id),
            constants.PATH_GRADE_ORG_LIST(
              $route.params.id,
              $route.params.orgID
            ),
            constants.PATH_GRADE_EMP_DETAIL(
              $route.params.id,
              $route.params.orgID,
              $route.params.uid
            )
          ].includes($route.path)
        }"
        :index="constants.PATH_GRADE_MANAGE"
        >{{ constants.GRADE_MANAGE }}</el-menu-item
      >
    </el-submenu>
    <el-submenu
      :show-timeout="100"
      v-if="canManagePerformanceGrade"
      :index="constants.PATH_PERFORMANCE_MANAGER"
    >
      <template slot="title">
        <i class="el-icon-view"></i>
        <span>{{ constants.PERFORMANCE_GRADE }}</span>
      </template>
      <!-- <el-menu-item :class="{'is-active':[constants.PATH_PERFORMANCE_REPORT].includes($route.path)}" :index="constants.PATH_PERFORMANCE_REPORT">{{constants.GRADE_REPORT}}</el-menu-item> -->
      <el-menu-item
        :class="{
          'is-active': [
            constants.PATH_PERFORMANCE_MANAGER,
            constants.PATH_PERFORMANCE_PROGRESS($route.params.id),
            constants.PATH_PERFORMANCE_ORG_LIST(
              $route.params.id,
              $route.params.orgID
            )
          ].includes($route.path)
        }"
        :index="constants.PATH_PERFORMANCE_MANAGER"
        >{{ constants.GRADE_MANAGE }}</el-menu-item
      >
      <el-menu-item
        v-if="canSetTpl"
        :class="{
          'is-active': [constants.PATH_PERFORMANCE_TPL].includes($route.path)
        }"
        :index="constants.PATH_PERFORMANCE_TPL"
        >{{ constants.TPL_SETTING }}</el-menu-item
      >
      <el-menu-item
        v-if="canSetRules"
        :class="{
          'is-active': [constants.PATH_PERFORMANCE_RULES].includes($route.path)
        }"
        :index="constants.PATH_PERFORMANCE_RULES"
        >{{ constants.RULES_SETTING }}</el-menu-item
      >
      <el-menu-item
        v-if="canSetTags"
        :class="{
          'is-active': [constants.PATH_PERFORMANCE_TAGS].includes($route.path)
        }"
        :index="constants.PATH_PERFORMANCE_TAGS"
        >标签设置</el-menu-item
      >
    </el-submenu>
    <el-submenu
      :show-timeout="100"
      v-if="showRole || showUser"
      :index="constants.PATH_ACCESS_ROLES"
    >
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>{{ constants.ACCESS_SETTING }}</span>
      </template>
      <el-menu-item
        v-if="showRole"
        :class="{
          'is-active': [constants.PATH_ACCESS_ROLES].includes($route.path)
        }"
        :index="constants.PATH_ACCESS_ROLES"
        >{{ constants.ROLE_SETTING }}</el-menu-item
      >
      <el-menu-item
        v-if="showUser"
        :class="{
          'is-active': [constants.PATH_USER_MANAGE].includes($route.path)
        }"
        :index="constants.PATH_USER_MANAGE"
        >{{ constants.USER_MANAGE }}</el-menu-item
      >
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
  MY_GRADE,
  TEAM_GRADE,
  MY_CULTURE,
  MY_PERFORMANCE,
  EXECUTIVE_PERFORMANCE,
  LABEL_SETTING
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
  PATH_PERFORMANCE_TAGS,
  PATH_ACCESS_ROLES,
  PATH_EMPLOYEE_MY,
  PATH_EMPLOYEE_TEAM,
  PATH_MY_CULTURE_GRADE,
  PATH_MEMEBER_CULTURE_GRADE,
  PATH_DOWN_MEMEBER_CULTURE_GRADE,
  PATH_PERFORMANCE_PROGRESS,
  PATH_PERFORMANCE_ORG_LIST,
  PATH_MEMBER_CULTURE_LIST,
  PATH_DOWN_MEMBER_CULTURE_LIST,
  PATH_CULTURE_LEVEL,
  PATH_PERFORMANCE_GRADE_MANAGEMENT,
  PATH_PERFORMANCE_TPL_SETTINGS,
  PATH_PERFORMANCE_LABEL_SETTINGS
} from "@/constants/URL";
import resize from "@/directives/resize";
export default {
  data() {
    return {
      defaultOpeneds: [PATH_MY_CULTURE_GRADE],
      constants: {
        MY_GRADE,
        TEAM_GRADE,
        GRADE_REPORT,
        GRADE_MANAGE,
        USER_MANAGE,
        PATH_GRADE_REPORT,
        PATH_GRADE_MANAGE,
        PATH_USER_MANAGE,
        PATH_GRADE_PROGRESS,
        PATH_GRADE_ORG_LIST,
        PATH_GRADE_EMP_DETAIL,
        PERFORMANCE_GRADE,
        PATH_PERFORMANCE_MANAGER,
        TPL_SETTING,
        PATH_PERFORMANCE_TPL,
        PATH_PERFORMANCE_RULES,
        PATH_PERFORMANCE_TAGS,
        RULES_SETTING,
        ACCESS_SETTING,
        ROLE_SETTING,
        PATH_ACCESS_ROLES,
        CULTURE_GRADE,
        PATH_EMPLOYEE_MY,
        PATH_EMPLOYEE_TEAM,
        PATH_MY_CULTURE_GRADE,
        MY_CULTURE,
        PATH_MEMEBER_CULTURE_GRADE,
        PATH_DOWN_MEMEBER_CULTURE_GRADE,
        PATH_PERFORMANCE_PROGRESS,
        PATH_PERFORMANCE_ORG_LIST,
        PATH_MEMBER_CULTURE_LIST,
        PATH_DOWN_MEMBER_CULTURE_LIST,
        PATH_CULTURE_LEVEL,
        MY_PERFORMANCE,
        EXECUTIVE_PERFORMANCE,
        PATH_PERFORMANCE_GRADE_MANAGEMENT,
        PATH_PERFORMANCE_TPL_SETTINGS,
        PATH_PERFORMANCE_LABEL_SETTINGS,
        LABEL_SETTING
      },
      isCollapse: false
    };
  },
  created() {
    this.permissions = JSON.parse(localStorage.getItem("permissions") || "[]");
  },
  computed: {
    show271() {
      return this.permissions.includes(220);
    },
    showRole() {
      return this.permissions.includes(101);
    },
    showUser() {
      return this.permissions.includes(102);
    },
    showExecutiveScoreManagement() {
      return this.permissions.includes(400);
    },
    showExecutiveScoreUserManagement() {
      return this.permissions.includes(410);
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
    },
    canSetTags() {
      return this.permissions.includes(305);
    }
  },
  directives: {
    resize
  },
  methods: {
    calWidth() {
      const width = window.innerWidth || 0;
      if (width <= 1280) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
    }
  },
  mounted() {
    this.calWidth();
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
.el-submenu .el-menu-item {
  padding-left: 48px !important;
}
.el-menu--collapse .el-menu-item {
  color: transparent !important;
}
.menu-icon {
  vertical-align: middle;
  margin-right: 8px;
  /* width: 24px; */
  text-align: center;
  font-size: 18px;
  width: 16px;
}
</style>
