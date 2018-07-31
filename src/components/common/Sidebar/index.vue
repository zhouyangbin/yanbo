<template>
  <el-menu class="menu-list" :default-active="$route.path" background-color="#242a36" text-color="#969798" active-text-color="#969798" unique-opened router>
    <el-menu-item :index="constants.PATH_GRADE_REPORT">
      <i class="el-icon-printer"></i>
      <span slot="title">{{constants.GRADE_REPORT}}</span>
    </el-menu-item>
    <el-menu-item :class="{'is-active':[constants.PATH_GRADE_PROGRESS($route.params.id),constants.PATH_GRADE_ORG_LIST($route.params.id,$route.params.orgID),constants.PATH_GRADE_EMP_DETAIL($route.params.id,$route.params.orgID,$route.params.uid)].includes($route.path)}" :index="constants.PATH_GRADE_MANAGE">
      <i class="el-icon-edit-outline"></i>
      <span slot="title">{{constants.GRADE_MANAGE}}</span>
    </el-menu-item>
    <el-submenu :index="constants.PATH_PERFORMANCE_REPORT">
      <template slot="title">
        <i class="el-icon-view"></i>
        <span>{{constants.PERFORMANCE_GRADE}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :class="{'is-active':[constants.PATH_PERFORMANCE_REPORT].includes($route.path)}" :index="constants.PATH_PERFORMANCE_REPORT">{{constants.GRADE_REPORT}}</el-menu-item>
        <el-menu-item :class="{'is-active':[constants.PATH_PERFORMANCE_MANAGER].includes($route.path)}" :index="constants.PATH_PERFORMANCE_MANAGER">{{constants.GRADE_MANAGE}}</el-menu-item>
        <el-menu-item :class="{'is-active':[constants.PATH_PERFORMANCE_TPL].includes($route.path)}" :index="constants.PATH_PERFORMANCE_TPL">{{constants.TPL_SETTING}}</el-menu-item>
        <el-menu-item index="1-2">规则设置</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item :index="constants.PATH_USER_MANAGE" v-show="level==1">
      <i class="el-icon-setting"></i>
      <span slot="title">{{constants.USER_MANAGE}}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
// FIXME: 导航设置
import {
  GRADE_REPORT,
  GRADE_MANAGE,
  USER_MANAGE,
  PERFORMANCE_GRADE,
  TPL_SETTING
} from "@/constants/TEXT";
import {
  PATH_GRADE_REPORT,
  PATH_GRADE_MANAGE,
  PATH_USER_MANAGE,
  PATH_GRADE_PROGRESS,
  PATH_GRADE_ORG_LIST,
  PATH_GRADE_EMP_DETAIL,
  PATH_PERFORMANCE_REPORT,
  PATH_PERFORMANCE_MANAGER,
  PATH_PERFORMANCE_TPL
} from "@/constants/URL";

export default {
  data() {
    return {
      constants: {
        GRADE_REPORT,
        GRADE_MANAGE,
        USER_MANAGE,
        PATH_GRADE_REPORT,
        PATH_GRADE_MANAGE,
        PATH_USER_MANAGE,
        PATH_GRADE_PROGRESS,
        PATH_GRADE_ORG_LIST,
        PATH_GRADE_EMP_DETAIL,
        PATH_PERFORMANCE_REPORT,
        PERFORMANCE_GRADE,
        PATH_PERFORMANCE_MANAGER,
        TPL_SETTING,
        PATH_PERFORMANCE_TPL
      },
      level: 0
    };
  },
  created() {
    this.level = localStorage.getItem("talLevel");
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
