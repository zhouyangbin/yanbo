<template>
  <div class="login">
    <el-row class="row-bg">
      <!--  FE-PC-TDC logo and title-->
      <el-col :span="12" class="login-logo">
        <img src="@assets/img/login_logo.png" alt="好文来文化评分">
      </el-col>

      <!-- login form -->

      <el-col :span="12" class="col-bg">

        <el-row type="flex" justify="center" align="middle" class="row-bg">
          <el-col style="width:310px">
            <el-container class="login-form">

              <div id="qr_scan">

              </div>

            </el-container>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import { PATH_GRADE_REPORT } from "@/constants/URL";
import { qrLogin } from "@/constants/API";
import qs from "qs";

export default {
  data() {
    return {};
  },
  created() {
    const querys = qs.parse(window.location.search, {
      ignoreQueryPrefix: true
    });

    if (querys.token) {
      qrLogin({ token: querys.token }).then(res => {
        localStorage.setItem("talEmail", res.admin.email);
        localStorage.setItem("talToken", res.token);
        localStorage.setItem("talLevel", res.admin.level);
        this.$router.push({ path: PATH_GRADE_REPORT });
      });
    }
    tinfo.init({
      appid: process.env.VUE_APP_APP_ID,
      appname: "评分系统"
    });
    tinfo.sso.show("embed", "qr_scan", {
      style: {
        //  '.login-form-title':'display:none'
      },
      title: "钉钉登录评分系统"
    });
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/login_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.row-bg,
.col-bg {
  height: 100%;
}
.login-logo {
  padding: 40px 35px;
}
.login-form {
  background-color: #fff;
  border-radius: 5px;
}
</style>
