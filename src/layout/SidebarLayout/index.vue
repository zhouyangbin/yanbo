<template>
  <el-container class="container">
    <el-aside class="sidebar-container" width="230">
      <img src="@assets/img/bg_logo.png" alt="">
      <router-view name="sidebar"></router-view>
    </el-aside>
    <el-main class="main-container">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .sidebar-container {
    background-color: #242a36;
  }
  .sidebar-container>>>ul {
    height: calc(100% - 78px);
  }
  .sidebar-container>>>.el-menu {
    border-right-width: 0px;
  }
  .container {
    height: 100%;
  }
  .main-container {
    background-color: #f2f7f9;
    padding: 0;
  }
</style>
