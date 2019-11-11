<template>
  <div class="employee-target-detail">
    <nav-bar :list="nav"></nav-bar>
    <detail-header :user-info="userInfo" :self="true"></detail-header>
    <target-content :all-target="allTarget"></target-content>
    <el-row class="footer-button">
      <el-button @click="checkExamine">查看审批记录</el-button>
      <el-button @click="returnList">返回</el-button>
    </el-row>
    <examine-detail
      :is-examine-dialog="isExamineDialog"
      :work-code="userInfo.workcode"
      @close="closeExamine"
    ></examine-detail>
  </div>
</template>
<script>
import { MY_GRADE } from "@/constants/TEXT";
import { PATH_EMPLOYEE_MY } from "@/constants/URL";
import { getPerformanceUserInfo, getUniqueTemplate } from "@/constants/API";
export default {
  data() {
    return {
      nav: [
        {
          label: MY_GRADE,
          href: PATH_EMPLOYEE_MY
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
        workcode: "",
        superior_name: "",
        superior_workcode: "",
        executive_type: "",
        department_name: "",
        cycle: "",
        indicator_setting_end_time: ""
      },
      allTarget: [],
      isExamineDialog: false
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "detail-header": () =>
      import("@/components/modules/employee/targetDetailsHeader/Index"),
    "target-content": () =>
      import("@/components/modules/employee/targetDetailContent/index"),
    "examine-detail": () =>
      import("@/components/modules/employee/checkExamineDetail/index")
  },
  methods: {
    getUserInfo() {
      let data = {
        performance_id: this.$route.params.id,
        performance_user_id: this.$route.params.uid,
        workcode: ""
      };
      getPerformanceUserInfo(data)
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
            indicator_setting_end_time
          };
        })
        .catch(() => {});
    },
    getWrokAndTeamTarget() {
      let data = {
        performance_id: this.$route.params.id,
        performance_user_id: this.$route.params.uid,
        workcode: ""
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
    checkExamine() {
      this.isExamineDialog = true;
    },
    closeExamine() {
      this.isExamineDialog = false;
    },
    returnList() {
      this.$router.push("/employee/my");
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
</style>
