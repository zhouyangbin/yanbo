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
    // if (querys.from_mobile) {//参数判断
    //   //判断手机跳转
    //   this.$router.push({ path: PATH_MSG_MOBILE });
    //   return;
    // }
    if (this.$device.mobile) {
      //navigator.userAgent终端判断
      //判断手机跳转
      this.$router.push({ path: PATH_MSG_MOBILE });
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
        fzLogin({ workcode: "074036" }) //13681126412
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
    getPerformancePath(querys) {
      let dst = PATH_EMPLOYEE_MY;
      switch (querys.path) {
        case "self":
        case "confirm":
          dst = PATH_EMPLYEE_MY_DETAIL(
            //我的业绩 我的评分 详情
            querys.performance_id,
            querys.performance_user_id
          );
          break;
        case "team_list": //我的业绩 团队评分
          dst = PATH_EMPLOYEE_TEAM;
          break;
        case "superior_list": //我的业绩 团队评分 评分管理
          dst = PATH_EMPLOYY_TEAM_GRADE_DETAIL(querys.performance_id);
          break;
        case "appeal_hr":
          dst = PATH_PERFORMANCE_USER_DETAIL(
            querys.performance_name_id,
            querys.performance_id,
            querys.performance_user_id
          );
          break;
        case "review": //团队  个人详情
          dst = PATH_EMPLOYEE_TEAM_MEMEBER(
            querys.performance_id,
            querys.performance_user_id
          );
          break;
        case "performance_detail": //业绩评分 评分管理 评分进度 事业部详情
          dst = PATH_PERFORMANCE_ORG_LIST(
            querys.performance_name_id,
            querys.performance_id
          );
          break;
        case "levelteam_detail": //我的业绩 隔级评分 评分管理 as 隔级审核页面
          dst = PATH_EMPLOYY_LEVEL_TEAM_GRADE_DETAIL(
            querys.performance_name_id
          );
          break;
      }
      return dst;
    },
    getExecutivePath(querys) {
      let performance_id = querys.performance_id;
      let performance_user_id = querys.performance_user_id;
      let dst = "";
      switch (querys.path) {
        case "self":
          dst = PATH_PERFORMANCE_FILL_IN_INDEX(
            performance_id,
            performance_user_id
          );
          break;
        case "self_view":
          dst = PATH_PERFORMANCE_INDEX_DETAIL(
            performance_id,
            performance_user_id,
            "my"
          );
          break;
        case "performance_detail":
          dst = PATH_PERFORMANCE_INDEX_DETAIL(
            performance_id,
            performance_user_id,
            "employee"
          );
          break;
        case "team_list":
          dst = PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL(
            performance_id,
            performance_user_id
          );
          break;
        case "target_adjusted":
          dst = PATH_PERFORMANCE_INDEX_DETAIL(
            performance_id,
            performance_user_id,
            "subteam"
          );
          break;
        case "assessment":
          dst = PATH_EXECUTIVE_ASSESSMENT_DATAILS(
            performance_id
          );
          break;
      }
      return dst;
    },
    getCulturePath(querys) {
      let dst = PATH_MY_CULTURE_GRADE_DETAILS(querys.evaluation_name_id);
      switch (querys.url) {
        case "self":
        case "detail":
        case "interview":
          dst = PATH_MY_CULTURE_GRADE_DETAILS(querys.evaluation_name_id);
          break;
        //! fix
        case "superior":
          dst = PATH_MEMBER_CULTURE_LIST(
            querys.evaluation_name_id,
            querys.evaluation_type
          );
          break;
        case "highlevel":
          dst = PATH_DOWN_MEMBER_CULTURE_LIST(
            querys.evaluation_name_id,
            querys.evaluation_type
          );
          break;
        case "reject":
        case "superior_detail":
          dst = PATH_MEMBER_CULTURE_DETAILS(
            querys.evaluation_name_id,
            querys.evaluation_type,
            querys.user_id
          );
          break;
        case "highlevel_detail":
          dst = PATH_DOWN_MEMBER_CULTURE_DETAILS(
            querys.evaluation_name_id,
            querys.evaluation_type,
            querys.user_id
          );
          break;
        case "hr_detail":
          dst = PATH_GRADE_EMP_DETAIL(
            querys.evaluation_name_id,
            querys.evaluation_id,
            querys.user_id
          );
          break;
        //  PATH_GRADE_PROGRESS\PATH_GRADE_ORG_LIST
        case "grade_manage":
          dst = PATH_GRADE_PROGRESS(querys.evaluation_name_id);
          break;
        case "mg_sub_grademanage":
          dst = PATH_GRADE_ORG_LIST(
            querys.evaluation_name_id,
            querys.evaluation_id
          );
          break;
        case "feedback":
          dst = PATH_MEMBER_CULTURE_LIST(
            querys.evaluation_name_id,
            querys.evaluation_type
          );
          break;
      }
      return dst;
    },
    callback(res, dst, querys) {
      localStorage.setItem("talEmail", res.admin.email);
      localStorage.setItem("workcode", res.admin.workcode);
      localStorage.setItem("talToken", res.token);
      localStorage.setItem(
        "permissions",
        JSON.stringify(res.admin.permissions)
      );
      // console.log(res);

      // this.$router.push({ path: dst });
      if (
        querys.fromDingDing &&
        window.DingTalkPC &&
        window.DingTalkPC.ua &&
        window.DingTalkPC.ua.isInDingTalk
      ) {
        // window.DingTalkPC.biz.util.openLink({
        //   url: `${window.location.origin}${dst}`, //要打开链接的地址
        //   onSuccess: function (result) {
        //     /**/
        //     localStorage.setItem("talEmail", res.admin.email);
        //     localStorage.setItem("talToken", res.token);
        //     localStorage.setItem(
        //       "permissions",
        //       JSON.stringify(res.admin.permissions)
        //     );
        //   },
        //   onFail: function () { }
        // });
      } else {
        this.$router.push({ path: dst });
      }
    }
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
