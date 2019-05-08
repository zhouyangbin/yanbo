<template>
  <el-container class="container">
    <el-aside class="sidebar-container">
      <div class="logo"></div>
      <router-view name="sidebar"></router-view>
      <section class="sidebar-logout">
        <el-button type="text" icon="el-icon-d-arrow-right" @click="logout">{{
          labe_logout
        }}</el-button>
        <p>{{ talEmail }}</p>
      </section>
    </el-aside>
    <el-main class="main-container">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { PATH_LOGIN } from "@/constants/URL";
import {
  LABEL_LOGOUT,
  ATTENTION,
  LABEL_LOGOUT_MSG,
  LABEL_CONFIRM,
  LABEL_CANCEL,
  CONST_LOGOUT_SUCCESS,
  CONST_CANCEL_LOGOUT_SUCCESS
} from "@/constants/TEXT";
import { logout } from "@/constants/API";
export default {
  data() {
    return {
      labe_logout: LABEL_LOGOUT,
      talEmail: localStorage.talEmail
    };
  },
  methods: {
    // 退出
    logout() {
      this.$confirm(LABEL_LOGOUT_MSG, ATTENTION, {
        roundButton: true,
        confirmButtonText: LABEL_CONFIRM,
        cancelButtonText: LABEL_CANCEL,
        type: "warning",
        center: true
      })
        .then(() => {
          logout()
            .then(res => {
              localStorage.setItem("talToken", "");
              localStorage.setItem("talEmail", "");

              this.$router.push({ path: PATH_LOGIN });
              this.$message({
                type: "success",
                message: CONST_LOGOUT_SUCCESS
              });
            })
            .catch(e => {});
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: CONST_CANCEL_LOGOUT_SUCCESS
          });
        });
    }
  }
};
</script>
<style scoped>
.sidebar-container {
  background-color: #242a36;
  height: 100%;
  max-width: 160px !important;
  overflow: hidden;
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
.logo {
  width: 160px;
  height: 52px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../assets/img/bg_logo.png");
}
@media only screen and (max-width: 1280px) {
  .sidebar-container {
    background-color: #242a36;
    height: 100%;
    width: 60px !important;
  }
  .sidebar-container .logo {
    background-color: #242a36;
    width: 60px !important;
    background-image: url("../../assets/img/small_logo.png");
  }
  .sidebar-logout p {
    margin: 0;
    display: none;
  }
  .sidebar-logout {
    height: 60px;
    /* margin-bottom: 30px; */
    padding: 0;
    /* color: #969798; */
  }
  /* .main-container {
    width: 960px;
    min-width: 960px;
    overflow: scroll;
  } */
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
  background-color: rgb(245, 245, 245);
  padding: 0;
  height: 100%;
}
</style>
