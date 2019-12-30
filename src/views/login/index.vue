<template>
  <div class="login">
    <el-row class="row-bg">
      <!--  FE-PC-TDC logo and title-->
      <el-col :span="12" class="login-logo">
        <img src="@assets/img/login_logo.png" alt="好文来文化评分" />
      </el-col>

      <!-- login form -->
      <el-col :span="12" class="col-bg">
        <el-row type="flex" justify="center" align="middle" class="row-bg">
          <el-col style="width:310px">
            <el-container class="login-form">
              <div id="qr_scan"></div>
            </el-container>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  PATH_MY_CULTURE_GRADE,
  PATH_EMPLYEE_MY_DETAIL,
  PATH_PERFORMANCE_USER_DETAIL,
  PATH_EMPLOYEE_TEAM,
  PATH_EMPLOYY_TEAM_GRADE_DETAIL,
  PATH_EMPLOYY_LEVEL_TEAM_GRADE_DETAIL,
  PATH_EMPLOYY_LEVEL_TEAM_GRADE_ORG_DETAIL,
  PATH_MSG_MOBILE,
  PATH_MY_CULTURE_GRADE_DETAILS,
  PATH_MEMBER_CULTURE_LIST,
  PATH_DOWN_MEMBER_CULTURE_LIST,
  PATH_MEMBER_CULTURE_DETAILS,
  PATH_DOWN_MEMBER_CULTURE_DETAILS,
  PATH_GRADE_EMP_DETAIL,
  PATH_EMPLOYEE_TEAM_MEMEBER,
  PATH_PERFORMANCE_ORG_LIST,
  PATH_EMPLOYEE_MY,
  PATH_GRADE_ORG_LIST,
  PATH_PERFORMANCE_FILL_IN_INDEX,
  PATH_PERFORMANCE_INDEX_DETAIL,
  PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL,
  PATH_EXECUTIVE_ASSESSMENT_DATAILS
} from "@/constants/URL";
import { qrLogin, fzLogin } from "@/constants/API";
import qs from "qs";
export default {
  data() {
    return {};
  },
  created() {
    const querys = qs.parse(window.location.search, {
      ignoreQueryPrefix: true
    });
    if (this.$device.mobile) {
      this.$router.replace({ path: PATH_MSG_MOBILE });
      return;
    }
    let dst;
    if (querys.project == "performance") {
      // 目标通知跳转
      dst = this.getPerformancePath(querys);
    } else if (querys.project == "culture") {
      dst = this.getCulturePath(querys);
    } else if (querys.project == "executive") {
      dst = this.getExecutivePath(querys);
    } else {
      dst = PATH_MY_CULTURE_GRADE;
    }
    if (querys.token) {
      // 仿真
      if (process.env.NODE_ENV == "development") {
        fzLogin({ workcode: "150848" }) //13681126412
          // 094203
          // 076533
          // 17600297195
          // 074036
          // 077640
          // TODO
          // 108321
          // 147463 高管
          // 142182
          // 105523
          // 000003   liuyacha
          // 150848   shiyanxia

          // 18310787064
          // 076344
          .then(res => {
            this.callback(res, dst, querys);
          })
          .catch(e => {});
      } else {
        qrLogin({ token: querys.token })
          .then(res => {
            this.callback(res, dst, querys);
          })
          .catch(e => {});
      }
    } else {
      tinfo.init({
        //!!FIX
        appid: process.env.VUE_APP_APP_ID,
        appname: "评分系统"
      });
      tinfo.sso.show("embed", "qr_scan", {
        style: {
          ".login-bottom-pc": "display:none",
          ".ding-login-title":
            "margin-top:0px;margin-bottom:0px;background:#f5f6f7;"
        },
        title: "钉钉登录评分系统"
      });
    }
  },
  methods: {
  },
  beforeDestroy() {
    const ele = document.querySelector("#qr_scan");
    if (ele) {
      ele.style.display = "none";
    }
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
