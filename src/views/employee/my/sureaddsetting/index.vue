<template>
  <div class="team-target-detail">
    <nav-bar :list="nav"></nav-bar>
    <div>
      <detail-header :user-info="userInfo" :self="false"></detail-header>
      <target-content :all-target="allTarget"></target-content>
      <el-row class="footer-button">
        <el-button class="agree-button" @click="agreeTarget">同意</el-button>
        <el-button class="wait-consensus" @click="rejectTarget"
          >待共识</el-button
        >
      </el-row>
    </div>
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
import { TEAM_GRADE, GRADE_MANAGE } from "@/constants/TEXT";
import {
  PATH_EMPLOYEE_TEAM,
  PATH_EMPLOYY_TEAM_GRADE_DETAIL
} from "@/constants/URL";
import { getPerformanceUserInfo, getUniqueTemplate } from "@/constants/API";
export default {
  data() {
    return {
      nav: [
        {
          label: TEAM_GRADE,
          href: PATH_EMPLOYEE_TEAM
        },
        {
          label: GRADE_MANAGE,
          href: PATH_EMPLOYY_TEAM_GRADE_DETAIL(this.$route.params.gradeID)
        },
        {
          label: "指标详情",
          active: true
        }
      ],
      userInfo: {
        performance_name: "",
        stage: 0,
        opinion: "",
        avatar: "",
        name: "",
        superior_name: "",
        superior_workcode: "",
        executive_type: "",
        department_name: "",
        cycle: "",
        indicator_setting_end_time: "",
        perforamnce_user_id: this.$route.params.uid
      },
      allTarget: [],
      isAgreeDialog: false,
      isRejectDialog: false,
      isExamineDialog: false
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index"),
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
     * 得到当前下级用户的信息
     */
    getUserInfo() {
      let data = {
        performance_user_id: this.$route.params.id,
        workcode: this.$route.params.workcode
      };
      getPerformanceUserInfo(data)
        .then(res => {
          const {
            performance_name,
            stage,
            opinion,
            avatar,
            name,
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
     * 得到当前下级的指标
     */
    getWrokAndTeamTarget() {
      let data = {
        performance_id: "",
        performance_user_id: this.$route.params.id,
        workcode: this.$route.params.workcode
      };
      getUniqueTemplate(data)
        .then(res => {
          const isTeam = res.team !== undefined;
          const isWork = res.work !== undefined;
          const isFinance = res.finance !== undefined;
          this.allTarget = [];
          if (isTeam) {
            let team = res.team;
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
            let work = res.work;
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
            let finance = res.finance;
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
    }
  },
  created() {
    this.getUserInfo();
    this.getWrokAndTeamTarget();
  }
};
</script>
<style scoped>
.team-target-detail .footer-button {
  text-align: center;
  margin: 20px 0;
}
.team-target-detail .footer-button .agree-button {
  background-color: #38d0af;
  color: #ffffff;
  border: 1px solid #38d0af;
}
.team-target-detail .footer-button .wait-consensus {
  background-color: #66a8ff;
  color: #ffffff;
  border: 1px solid #66a8ff;
}
</style>
