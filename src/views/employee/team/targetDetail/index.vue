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
        <el-button @click="returnGradeList">返回下属评分列表</el-button>
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
  PATH_EMPLOYY_TEAM_GRADE_DETAIL,
  PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL
} from "@/constants/URL";
import {
  getExecutiveUserInfo,
  getExecutiveUniqueTemplate
} from "@/constants/API";
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
          href: PATH_PERFORMANCE_MY_DETAIL(this.$route.params.id,this.$route.params.uid) 
          // href: PATH_EMPLOYY_TEAM_GRADE_DETAIL(this.$route.params.gradeID)
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
      isRejectDialog: false
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
        performance_id: this.$route.params.id,
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
     * 得到当前下级的指标
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
    },
    /**
     * 点击返回下属评分列表，回到下属列表页
     */
    returnGradeList() {
      this.$router.push(
        PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL(
          this.$route.params.id,
          this.$route.params.uid
        )
      );
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
