<template>
  <div class="employee-target-detail">
    <nav-bar :list="nav"></nav-bar>
    <detail-header :user-info="userInfo" :self="true"></detail-header>
    <target-content :all-target="allTarget"></target-content>
    <el-row class="footer-button">
      <el-button class="agree-button" @click="agreeTarget">同意</el-button>
      <el-button class="wait-consensus" @click="rejectTarget">待共识</el-button>
      <el-button @click="sureAdd">同意并加签</el-button>
      <el-button @click="returnGradeList">返回下属评分列表</el-button>
    </el-row>
    <agree-dialog
      :is-agree-dialog="isAgreeDialog"
      @close="closeAgreeDialog"
    ></agree-dialog>
    <reject-dialog
      :is-reject-dialog="isRejectDialog"
      @close="closeRejectDialog"
    ></reject-dialog>
  </div>
</template>
<script>
import {
  MY_GRADE,
  TARGET_DETAIL,
  CHECK_EXAMINE_LOG,
  TARGET_RETURN
} from "@/constants/TEXT";
import { PATH_EMPLOYEE_MY, PATH_EXECUTIVE_SURE_ADD } from "@/constants/URL";
import {
  getExecutiveUserInfo,
  getExecutiveUniqueTemplate
} from "@/constants/API";
export default {
  data() {
    return {
      constants: {
        CHECK_EXAMINE_LOG,
        TARGET_RETURN
      },
      nav: [
        {
          label: MY_GRADE,
          href: PATH_EMPLOYEE_MY
        },
        {
          label: TARGET_DETAIL,
          active: true
        }
      ],
      userInfo: {
        performance_name: "",
        stage: 0,
        current_user_identity: "",
        opinion: "",
        avatar: "",
        name: "",
        workcode: "",
        superior_name: "",
        superior_workcode: "",
        executive_type: "",
        department_name: "",
        cycle: "",
        indicator_setting_end_time: "",
        perforamnce_user_id: this.$route.params.uid
      },
      allTarget: [],
      isExamineDialog: false,
      isRejectDialog: false,
      isAgreeDialog: false
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "detail-header": () =>
      import("@/components/modules/employee/targetDetailsHeader/Index"),
    "target-content": () =>
      import("@/components/modules/employee/targetDetailContent/index"),
    "agree-dialog": () =>
      import("@/components/modules/employee/superiorAgreeTarget/index"),
    "reject-dialog": () =>
      import("@/components/modules/employee/superiorRejectTarget/index")
  },
  methods: {
    /**
     * 得到当前用户信息，用于展示在页面头部
     */
    getUserInfo() {
      let data = {
        performance_user_id: this.$route.params.uid
      };
      getExecutiveUserInfo(data)
        .then(res => {
          const {
            performance_name,
            stage,
            opinion,
            avatar,
            name,
            workcode,
            superior_name,
            superior_workcode,
            executive_type,
            department_name,
            cycle,
            indicator_setting_end_time
          } = res;
          this.userInfo = {
            performance_name,
            stage,
            opinion,
            avatar,
            name,
            workcode,
            superior_name,
            superior_workcode,
            executive_type,
            department_name,
            cycle,
            indicator_setting_end_time,
            perforamnce_user_id: this.$route.params.uid
          };
        })
        .catch(() => {});
    },
    /**
     * 得到模版设置中配置的信息，以及用户暂存的信息
     */
    getWrokAndTeamTarget() {
      let data = {
        performance_id: this.$route.params.id,
        performance_user_id: this.$route.params.uid
      };
      getExecutiveUniqueTemplate(data)
        .then(res => {
          const isTeam = res.data.team !== undefined;
          const isWork = res.data.work !== undefined;
          const isFinance = res.data.finance !== undefined;
          this.allTarget = [];
          if (isTeam) {
            let team = res.data.team;
            this.$set(this.allTarget, team.sort - 1, {
              basicType: "team",
              isMoney: 0,
              sort: team.sort,
              type: team.type,
              weight: team.weight,
              table: team.template_columns
            });
          }
          if (isWork) {
            let work = res.data.work;
            this.$set(this.allTarget, work.sort - 1, {
              basicType: "work",
              isMoney: 0,
              sort: work.sort,
              type: work.type,
              weight: work.weight,
              table: work.template_columns
            });
          }
          if (isFinance) {
            let finance = res.data.finance;
            this.$set(this.allTarget, finance.sort - 1, {
              basicType: "finance",
              isMoney: 1,
              sort: finance.sort,
              type: finance.type,
              weight: finance.weight,
              table: finance.template_columns
            });
          }
        })
        .catch(() => {});
    },
    // 返回下属评分列表
    returnGradeList() {
      this.$router.push(
        PATH_EMPLOYY_TEAM_GRADE_DETAIL(this.$route.params.gradeID)
      );
    },
    // 同意并加签
    sureAdd() {
      this.$router.push(
        PATH_EXECUTIVE_SURE_ADD(this.$route.params.id, this.$route.params.uid)
      );
    },
    /**
     * 点击待共识
     */
    rejectTarget() {
      this.isRejectDialog = true;
    },
    /**
     * 关闭待共识弹窗
     */
    closeRejectDialog() {
      this.isRejectDialog = false;
    },
    /**
     * 点击同意
     */
    agreeTarget() {
      this.isAgreeDialog = true;
    },
    /**
     * 关闭同意弹窗
     */
    closeAgreeDialog() {
      this.isAgreeDialog = false;
    }
  },
  created() {
    this.getUserInfo();
    this.getWrokAndTeamTarget();
  }
};
</script>
<style scoped>
.employee-target-detail .footer-button {
  text-align: center;
  margin: 20px 0;
}
.footer-button .agree-button {
  background-color: #38d0af;
  color: #ffffff;
  border: 1px solid #38d0af;
}
.footer-button .wait-consensus {
  background-color: #66a8ff;
  color: #ffffff;
  border: 1px solid #66a8ff;
}
</style>
