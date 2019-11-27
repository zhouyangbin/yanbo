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
import { PATH_EMPLOYEE_MY,PATH_EXECUTIVE_ASSESSMENT_DATAILS, PATH_PERFORMANCE_GRADE_MANAGEMENT } from "@/constants/URL";
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
          label: "组织部绩效考核列表",
          href: PATH_PERFORMANCE_GRADE_MANAGEMENT
        },
        {
            label: "考核详情",
            href: PATH_EXECUTIVE_ASSESSMENT_DATAILS(this.$route.params.id)
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
          /**
           * 根据后端返回的字段判断显示哪个维度， isMoney为是否为财务指标  0:非财务  1:财务
           */
          let arrData = [
            {
              content: "",
              disqualification: "",
              excellence: "",
              good: "",
              id: "",
              outstanding: "",
              performance_id: "",
              performance_user_id: "",
              target: "",
              to_be_improved: "",
              type: "",
              weights: ""
            }
          ];
          const isTeam = res.team !== undefined;
          const isWork = res.work !== undefined;
          const isFinance = res.finance !== undefined;
          this.allTarget = [];
          if (isTeam) {
            let team = res.team;
            if (team.targets[0] == undefined) {
              team.targets = arrData;
            }
            team.template_columns = {
              content: team.targets[0].content,
              weights: team.targets[0].weights,
              metrics: team.template_columns.metrics,
              targets: team.targets
            };
            let arr = [
              {
                basicType: "team",
                isMoney: 0,
                sort: team.sort,
                type: team.name,
                weight: team.weight,
                table: [team.template_columns]
              }
            ];
            this.changeData(arr);
            this.$set(this.allTarget, team.sort - 1, arr[0]);
          }
          if (isWork) {
            let work = res.work;
            if (work.targets[0] == undefined) {
              work.targets = arrData;
            }
            work.template_columns = {
              content: work.targets[0].content,
              weights: work.targets[0].weights,
              metrics: work.template_columns.metrics,
              targets: work.targets
            };
            let arr = [
              {
                basicType: "work",
                isMoney: 0,
                sort: work.sort,
                type: work.name,
                weight: work.weight,
                table: [work.template_columns]
              }
            ];
            this.changeData(arr);
            this.$set(this.allTarget, work.sort - 1, arr[0]);
          }
          if (isFinance) {
            let finance = res.finance;
            if (finance.targets[0] == undefined) {
              finance.targets = arrData;
            }
            finance.template_columns = {
              content: finance.targets[0].content,
              weights: finance.targets[0].weights,
              metrics: finance.template_columns.metrics,
              targets: finance.targets
            };
            let arr = [
              {
                basicType: "finance",
                isMoney: 1,
                sort: finance.sort,
                type: finance.name,
                weight: finance.weight,
                table: [finance.template_columns]
              }
            ];
            this.changeData(arr);
            this.$set(this.allTarget, finance.sort - 1, arr[0]);
          }
        })
        .catch(() => {});
    },
    // 改变接口传递数据
    changeData(data) {
      data.forEach(items => {
        items.table.forEach(item => {
          item.targets.forEach(text => {
            item.target = text.target;
            item.metrics.forEach(ite => {
              ite.content = text[ite.key];
            });
          });
        });
      });
      return data;
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
