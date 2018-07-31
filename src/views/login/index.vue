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
              <!-- <el-header class="login-form-title">
                <el-row type="flex" justify="center" align="middle" class="row-bg">
                  <el-col>
                    HR{{label_login}}
                  </el-col>
                </el-row>
              </el-header> -->
              <div id="qr_scan">

              </div>
              <!-- <el-main class="login-form-main">

                <el-form v-show="false" :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px" label-position="top" :inline-message="true">
                  <el-form-item label="Email" prop="email">
                    <el-input type="text" v-model="loginForm.email" :placeholder="label_login_email" auto-complete="off" :autofocus="true"></el-input>
                  </el-form-item>

                  <el-form-item label="Password" prop="password">
                    <el-input type="password" v-model="loginForm.password" :placeholder="label_login_password" auto-complete="off" :autofocus="true"></el-input>
                  </el-form-item>

                  <el-form-item>
                    <el-checkbox v-model="loginRemember">{{lebel_login_remember_user}}</el-checkbox>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" round @click="submitForm('loginForm')">{{label_login}}</el-button>
                  </el-form-item>
                </el-form>
              </el-main> -->
            </el-container>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import { PATH_GRADE_REPORT } from "@/constants/URL"
// import {
//   LABEL_LOGIN,
//   LABEL_LOGIN_EMAIL,
//   LABEL_LOGIN_EMAIL_MSG,
//   LABEL_LOGIN_PASSWORD,
//   LABEL_LOGIN_PASSWORD_MSG,
//   LABEL_LOGIN_REMEMBER_USER
// } from "@/constants/TEXT"
import { qrLogin } from "@/constants/API"
import qs from "qs"

export default {
  data() {
    return {
      // 常量文字
      // label_login: LABEL_LOGIN,
      // label_login_email: LABEL_LOGIN_EMAIL,
      // label_login_password: LABEL_LOGIN_PASSWORD,
      // lebel_login_remember_user: LABEL_LOGIN_REMEMBER_USER,
      // 登录Form
      // loginForm: { email: "", password: "" },
      // 校验规则
      // loginRules: {
      //   email: [
      //     { required: true, message: LABEL_LOGIN_EMAIL_MSG, trigger: "change" }
      //   ],
      //   password: [
      //     {
      //       required: true,
      //       message: LABEL_LOGIN_PASSWORD_MSG,
      //       trigger: "change"
      //     }
      //   ]
      // },
      // 记录用户名
      // loginRemember: false
    }
  },
  created() {
    // console.log(window.location.search)
    const querys = qs.parse(window.location.search, {
      ignoreQueryPrefix: true
    })

    if (querys.token) {
      // FIXME: get the our token && router && save to localStorage
      // console.log(querys.token)
      qrLogin({ token: querys.token }).then(res => {
        localStorage.setItem("talEmail", res.admin.email)
        localStorage.setItem("talToken", res.token)
        localStorage.setItem("talLevel", res.admin.level)
        this.$router.push({ path: PATH_GRADE_REPORT })
      })
    }
    tinfo.init({
      appid: process.env.VUE_APP_APP_ID,
      appname: "评分系统"
    })
    tinfo.sso.show("embed", "qr_scan", {
      style: {
        //  '.login-form-title':'display:none'
      },
      title: "钉钉登录评分系统"
    })

    // this.loginForm = Object.assign({}, this.loginForm, {
    //   email: localStorage.getItem("loginEmail")
    // })
  },
  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       login(this.loginForm)
    //         .then(res => {
    //           if (res) {
    //             const loginEmail = this.loginRemember
    //               ? this.loginForm.email
    //               : ""
    //             localStorage.setItem("loginEmail", loginEmail)
    //             localStorage.setItem("talEmail", this.loginForm.email)
    //             localStorage.setItem("talToken", res.token)
    //             localStorage.setItem("talLevel", res.admin.level)
    //             this.$router.push({ path: PATH_GRADE_REPORT })
    //           }
    //         })
    //         .catch(e => {})
    //     } else {
    //       // console.log("error submit!!");
    //       return false
    //     }
    //   })
    // }
  }
}
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
  .login-form-title {
    background-color: #f9f9f9;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
  }
  .login-form-main {
    padding-left: 25px;
    padding-right: 25px;
  }
  .el-button {
    width: 100%;
  }
</style>
