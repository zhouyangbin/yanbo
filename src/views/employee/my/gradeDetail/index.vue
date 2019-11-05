<template>
  <div class="target-settings">
    <nav-bar :list="nav"></nav-bar>
    <div>
      <el-row class="target-header">
        <el-row class="title">2019组织部绩效考核</el-row>
        <el-row class="img">
          <!-- <img src="" alt=""> -->
          <span>我是图片</span>
          <el-col>
            <span>我是什么</span>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
import { MY_GRADE } from "@/constants/TEXT";
import { PATH_EMPLOYEE_MY } from "@/constants/URL";

export default {
  data() {
    return {
      nav: [
        {
          label: MY_GRADE,
          href: PATH_EMPLOYEE_MY
        },
        {
          label: "指标设定",
          active: true
        }
      ]
    }
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue")
  }
}
</script>
<style scoped>
.target-settings .target-header {
  background-color: #ffffff;
}
.target-settings .target-header .title {
  text-align: center;
  color: #303133;
  font-size: 22px;
  font-weight: 500;
  padding: 23px 0;
}
</style>
