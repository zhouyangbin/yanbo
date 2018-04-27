<template>
  <el-container class="container">
    <el-aside class="sidebar-container" width="230">
      <img src="@assets/img/bg_logo.png" alt="">
      <router-view name="sidebar"></router-view>
      <section class="sidebar-logout">
        <el-button type="text" icon="el-icon-d-arrow-right" @click="logout">{{labe_logout}}</el-button>
        <p>hemiao3@100tal.com</p>
      </section>
    </el-aside>
    <el-main class="main-container">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import { PATH_LOGIN } from '@/constants/URL'
  import { LABEL_LOGOUT } from '@/constants/TEXT'
  export default {
    data() {
      return {
        labe_logout: LABEL_LOGOUT
      }
    },
    methods: {
      logout(){
        // 退出操作
        this.$router.push({path:PATH_LOGIN})
      }
    }
  }
</script>
<style scoped>
  .sidebar-container {
    background-color: #242a36;
  }
  .sidebar-container>>>ul {
    height: calc(100% - 168px);
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
  .sidebar-logout{
    height: 60px;
    margin-bottom: 30px;
    padding: 0 30px;
    color: #969798;
  }
  .sidebar-logout p{
    margin: 0;
  }
</style>
