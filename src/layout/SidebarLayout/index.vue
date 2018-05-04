<template>
  <el-container class="container">
    <el-aside class="sidebar-container" width="230">
      <img src="@assets/img/bg_logo.png" alt="">
      <router-view name="sidebar"></router-view>
      <section class="sidebar-logout">
        <el-button type="text" icon="el-icon-d-arrow-right" @click="logout">{{labe_logout}}</el-button>
        <p>{{talEmail}}</p>
      </section>
    </el-aside>
    <el-main class="main-container">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { PATH_LOGIN } from "@/constants/URL";
import { LABEL_LOGOUT } from "@/constants/TEXT";
import { logout } from "@/constants/API";
export default {
  data() {
    return {
      labe_logout: LABEL_LOGOUT,
      talEmail: localStorage.talEmail
    };
  },
  methods: {
    logout() {
      this.$confirm("确定退出登录?", "提示", {
        roundButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          logout().then(res => {
            this.$router.push({ path: PATH_LOGIN });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};
</script>
<style scoped>
.sidebar-container {
  background-color: #242a36;
}
.sidebar-container >>> ul {
  height: calc(100% - 168px);
}
.sidebar-container >>> .el-menu {
  border-right-width: 0px;
}
.container {
  height: 100%;
}
.main-container {
  background-color: #f2f7f9;
  padding: 0;
}
.sidebar-logout {
  height: 60px;
  margin-bottom: 30px;
  padding: 0 30px;
  color: #969798;
}
.sidebar-logout p {
  margin: 0;
}
</style>
