<template>
  <div class="employee-target-detail">
    <nav-bar :list="nav"></nav-bar>
    <detail-header :user-info="userInfo" :self="true"></detail-header>
    <target-content :all-target="allTarget"></target-content>
    <el-row class="footer-button">
      <el-button @click="checkExamine">
        <!-- 查看审批记录 -->
        {{ constants.CHECK_EXAMINE_LOG }}
      </el-button>
      <!-- 返回 -->
      <el-button @click="returnList">{{ constants.TARGET_RETURN }}</el-button>
    </el-row>
    <examine-detail
      :is-examine-dialog="isExamineDialog"
      :perforamnce_user_id="userInfo.perforamnce_user_id"
      @close="closeExamine"
    ></examine-detail>
  </div>
</template>
<script>
import {
  MY_GRADE,
  TARGET_DETAIL,
  CHECK_EXAMINE_LOG,
  TARGET_RETURN
} from "@/constants/TEXT";
import { PATH_EMPLOYEE_MY } from "@/constants/URL";
import { getPerformanceUserInfo, getTeamtetails } from "@/constants/API";
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
    /**
     * 得到当前用户信息，用于展示在页面头部
     */
    getUserInfo() {
      let data = {
        performance_user_id: this.$route.params.uid
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
      getTeamtetails(data)
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
     * 查看审批记录
     */
    checkExamine() {
      this.isExamineDialog = true;
    },
    /**
     * 关闭审批记录弹窗
     */
    closeExamine() {
      this.isExamineDialog = false;
    },
    /**
     * 返回到我的评分列表页
     */
    returnList() {
      this.$router.push("/employee/my");
    },
    // 返回下属评分列表
    ratingList() {}
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
