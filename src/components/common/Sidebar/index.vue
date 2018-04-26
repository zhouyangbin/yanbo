<template>
    <el-menu class="menu-list" :default-active="$route.path" background-color="#242a36" text-color="#969798" active-text-color="#969798" unique-opened router>
        <el-menu-item :index="constants.PATH_GRADE_REPORT">
            <i class="el-icon-setting"></i>
            <span slot="title">{{constants.GRADE_REPORT}}</span>
        </el-menu-item>
        <el-menu-item :index="constants.PATH_GRADE_MANAGE">
            <i class="el-icon-setting"></i>
            <span slot="title">{{constants.GRADE_MANAGE}}</span>
        </el-menu-item>
        <el-menu-item :index="constants.PATH_USER_MANAGE">
            <i class="el-icon-setting"></i>
            <span slot="title">{{constants.USER_MANAGE}}</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
    import { GRADE_REPORT, GRADE_MANAGE, USER_MANAGE } from "@/constants/TEXT"
    import {
      PATH_GRADE_REPORT,
      PATH_GRADE_MANAGE,
      PATH_USER_MANAGE
    } from "@/constants/URL"

    export default {
      data() {
        return {
          constants: {
            GRADE_REPORT,
            GRADE_MANAGE,
            USER_MANAGE,
            PATH_GRADE_REPORT,
            PATH_GRADE_MANAGE,
            PATH_USER_MANAGE
          }
        }
      }
    }
</script>

<style scoped>
    .menu-list>>>.el-menu-item {
      position: relative;
    }
    .menu-list>>>.el-menu-item:hover::after,
    .menu-list>>>.el-menu-item.is-active::after {
      position: absolute;
      content: "";
      width: 4px;
      left: 0;
      top: 0px;
      background-color: rgb(76, 233, 195);
      height: 100%;
    }
</style>
