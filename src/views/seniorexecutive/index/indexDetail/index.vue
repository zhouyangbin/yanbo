<template>
  <div class="index-detail">
    <nav-bar :list="nav"></nav-bar>
    <index-header :user-info="userInfo" :isShowUpload="false"></index-header>
    <section class="target-detail-box">
      <el-row
        class="target-detail"
        v-for="(targetItem, index) in indexTpl"
        :key="index"
      >
        <el-row class="target-detail-title">
          <span class="target-title">{{ targetItem.name }}</span>
          <span class="target-weight"
            >{{ constants.TARGET_WEIGH
            }}{{ targetItem.weight | filterWeight }}</span
          >
        </el-row>
        <el-form :ref="`form${index}`" :model="targetItem">
          <el-table
            :data="targetItem.targets"
            border
            :header-cell-style="{
              backgroundColor: '#F5F6F7',
              color: '#303133'
            }"
          >
            <el-table-column
              v-if="targetItem.template_columns.weight"
              :label="constants.TARGET_WEIGH"
              width="180"
              align="center"
              prop="weights"
            >
              <template slot-scope="scope">
                <div>{{ Number(scope.row.weights) | filterWeight }}</div>
              </template>
            </el-table-column>
            <el-table-column
              v-if="
                targetItem.key === 'finance' &&
                  targetItem.template_columns.indicator_name
              "
              :label="constants.TARGET_NAME"
              min-width="240"
              align="center"
              prop="target"
            ></el-table-column>
            <el-table-column
              v-if="
                targetItem.key !== 'finance' &&
                  targetItem.template_columns.indicator_name
              "
              :label="constants.TARGET_NAME"
              min-width="240"
              align="center"
              :render-header="changeLabel"
              prop="target"
            >
            </el-table-column>
            <el-table-column
              v-if="targetItem.template_columns.specific_job"
              :label="constants.TASK_DESCRIPTION"
              min-width="300"
              header-align="center"
              prop="content"
            >
            </el-table-column>
            <el-table-column
              v-if="targetItem.template_columns.metrics"
              :label="constants.YARD_STICK"
              min-width="300"
              header-align="center"
            >
              <template slot-scope="scope">
                <ul>
                  <li
                    class="flex"
                    v-for="(item, index) in targetItem.template_columns.metrics"
                    :key="index"
                  >
                    <el-col class="measure-title">
                      <span v-if="Number(item.is_required)" class="is-required"
                        >*</span
                      >
                      <span>&nbsp;{{ item.name }}</span>
                    </el-col>
                    <el-col>{{ scope.row[item.key] }}</el-col>
                  </li>
                </ul>
              </template>
            </el-table-column>
          </el-table>
        </el-form>
      </el-row>
      <ul class="sub-total">
        <!-- 财务维度小计 -->
        <li v-if="isFinance">
          {{ constants.FINANCE_DIMENSIONALITY_SUBTOTAL }}&nbsp;&nbsp;&nbsp;{{
            this.handleSubTotal("finance")
          }}%
        </li>
        <li v-if="isWork">
          工作维度小计&nbsp;&nbsp;&nbsp;{{ this.handleSubTotal("work") }}%
        </li>
        <li v-if="isTeam">
          团队维度小计&nbsp;&nbsp;&nbsp;{{ this.handleSubTotal("team") }}%
        </li>
        <li class="performance-total">
          业绩维度合计&nbsp;&nbsp;&nbsp;{{
            this.handleSubTotal("finance") +
              this.handleSubTotal("work") +
              this.handleSubTotal("team")
          }}%
        </li>
      </ul>
    </section>
    <div class="footer-button">
      <el-button v-if="showApplay" @click="changeIndex">申请指标调整</el-button>
      <el-button
        class="tempeorary-memory"
        v-if="showAgree"
        @click="rejectTarget"
        >待共识</el-button
      >
      <el-button class="submit-button" v-if="showAgree" @click="agreeTarget"
        >同意</el-button
      >
      <el-button v-if="showApprovalBtn" @click="checkExamine">{{
        constants.CHECK_EXAMINE_LOG
      }}</el-button>
    </div>
    <reject-dialog
      v-if="isRejectDialog"
      :visible="isRejectDialog"
      @close="closeRejectDialog"
      @update="jumpPage"
    ></reject-dialog>
    <agree-dialog
      v-if="isAgreeDialog"
      :visible="isAgreeDialog"
      @close="closeAgreeDialog"
    ></agree-dialog>
    <approval-records
      :is-examine-dialog="isExamineDialog"
      :approvalData="approvalData"
      @close="closeExamine"
    ></approval-records>
  </div>
</template>
<script>
import { AsyncComp } from "@/utils/asyncCom";
import {
  MY_GRADE,
  TARGET_WEIGH,
  TARGET_NAME,
  TARGET_DETAIL,
  TASK_DESCRIPTION,
  YARD_STICK,
  ADD_TARGET_LINE,
  FINANCE_DIMENSIONALITY_SUBTOTAL,
  CHECK_EXAMINE_LOG
} from "@/constants/TEXT";
import {
  PATH_EMPLOYEE_MY,
  PATH_PERFORMANCE_GRADE_MANAGEMENT,
  PATH_EXECUTIVE_ASSESSMENT_DATAILS,
  PATH_EMPLOYEE_TEAM,
  PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL,
  PATH_PERFORMANCE_FILL_IN_INDEX
} from "@/constants/URL";
import {
  getExecutiveUserInfo,
  getExecutiveUniqueTemplate,
  getExecutiveApprovalRecords
} from "@/constants/API";
export default {
  components: {
    "nav-bar": AsyncComp(import("@/components/common/Navbar/index.vue")),
    "index-header": AsyncComp(
      import("@/components/modules/seniorexecutive/IndexHeader/index")
    ),
    "reject-dialog": AsyncComp(
      import("@/components/modules/seniorexecutive/RejectDialog/index")
    ),
    "agree-dialog": AsyncComp(
      import("@/components/modules/seniorexecutive/AgreeDialog/index")
    ),
    "approval-records": AsyncComp(
      import("@/components/modules/seniorexecutive/ApprovalRecords/index")
    )
  },
  data() {
    return {
      constants: {
        TARGET_WEIGH,
        TARGET_NAME,
        TASK_DESCRIPTION,
        YARD_STICK,
        ADD_TARGET_LINE,
        FINANCE_DIMENSIONALITY_SUBTOTAL,
        CHECK_EXAMINE_LOG
      },
      nav: [],
      userId: this.$route.params.uid,
      userInfo: {
        avatar: "",
        cycle: "",
        department_name: "",
        executive_type: "",
        indicator_setting_end_time: "",
        isolation_name: "",
        isolation_workcode: "",
        name: "",
        opinion: "",
        performance_name: "",
        stage: "",
        stage_text: "",
        superior_name: "",
        superior_workcode: "",
        workcode: "",
        perforamnce_user_id: this.$route.params.uid
      },
      indexTpl: [],
      isTeam: false,
      isWork: false,
      isFinance: false,
      currentType: this.$route.params.type,
      nowTime: "",
      showApplay: false,
      showAgree: false,
      isRejectDialog: false,
      isAgreeDialog: false,
      isExamineDialog: false,
      approvalData: [],
      showApprovalBtn: false
    };
  },
  filters: {
    filterWeight(val) {
      if (val === 0 || val) {
        return val + "%";
      }
    },
    filterObject(val) {}
  },
  methods: {
    jumpPage() {
      this.$router.push(PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL);
    },
    checkExamine() {
      this.isExamineDialog = true;
    },
    closeExamine() {
      this.isExamineDialog = false;
    },
    rejectTarget() {
      this.isRejectDialog = true;
    },
    closeRejectDialog() {
      this.isRejectDialog = false;
    },
    agreeTarget() {
      this.isAgreeDialog = true;
    },
    closeAgreeDialog() {
      this.isAgreeDialog = false;
    },
    changeIndex() {
      this.$router.push(
        PATH_PERFORMANCE_FILL_IN_INDEX(
          this.$route.params.id,
          this.$route.params.uid
        )
      );
    },
    handleSubTotal(key) {
      let subTotal = 0;
      for (let i = 0; i < this.indexTpl.length; i++) {
        if (key === this.indexTpl[i].key) {
          subTotal = Number(this.indexTpl[i].weight);
        }
      }
      return subTotal;
    },
    changeLabel(h, { column }) {
      return h("div", [
        h("span", column.label),
        h("br"),
        h("span", "（最多可填写"),
        h("span", { style: { color: "red" } }, 5),
        h("span", "项）")
      ]);
    },
    getUserInfo() {
      let data = {
        performance_user_id: this.$route.params.uid
      };
      getExecutiveUserInfo(data)
        .then(res => {
          const {
            avatar,
            cycle,
            department_name,
            executive_type,
            indicator_setting_end_time,
            isolation_name,
            isolation_workcode,
            name,
            opinion,
            performance_name,
            stage,
            stage_text,
            superior_name,
            superior_workcode,
            workcode
          } = res;
          this.userInfo = {
            avatar,
            cycle,
            department_name,
            executive_type,
            indicator_setting_end_time,
            isolation_name,
            isolation_workcode,
            name,
            opinion,
            performance_name,
            stage,
            stage_text,
            superior_name,
            superior_workcode,
            workcode,
            perforamnce_user_id: this.$route.params.uid
          };
          this.nowTime = new Date();
          let indicatorTime = new Date(
            this.userInfo.indicator_setting_end_time
          );
          if (
            this.nowTime.getTime() < indicatorTime.getTime() &&
            this.userInfo.stage === 20 &&
            this.currentType === "my"
          ) {
            this.showApplay = true;
          } else {
            this.showApplay = false;
          }
          if (this.userInfo.stage === 10 && this.currentType === "subteam") {
            this.showAgree = true;
          } else {
            this.showAgree = false;
          }
        })
        .catch(e => {});
    },
    getWrokAndTeamTarget() {
      let data = {
        performance_id: this.$route.params.id,
        performance_user_id: this.$route.params.uid
      };
      getExecutiveUniqueTemplate(data)
        .then(res => {
          this.handleIndexData(res);
        })
        .catch(e => {});
    },
    handleIndexData(indexTpl) {
      // 根据后端返回的字段判断显示哪个维度， isFinancial为是否为财务指标  0:非财务  1:财务
      this.isTeam = indexTpl.team !== undefined;
      this.isWork = indexTpl.work !== undefined;
      this.isFinance = indexTpl.finance !== undefined;
      this.indexTpl = [];
      let newIndexTpl = [];
      if (this.isTeam) {
        let team = indexTpl.team;
        this.$set(newIndexTpl, team.sort - 1, {
          key: team.key,
          sort: team.sort,
          name: team.name,
          weight: team.weight,
          targets: team.targets || [],
          template_columns: team.template_columns
        });
      }
      if (this.isWork) {
        let work = indexTpl.work;
        this.$set(newIndexTpl, work.sort - 1, {
          key: work.key,
          sort: work.sort,
          name: work.name,
          weight: work.weight,
          targets: work.targets || [],
          template_columns: work.template_columns
        });
      }
      if (this.isFinance) {
        let finance = indexTpl.finance;
        this.$set(newIndexTpl, finance.sort - 1, {
          key: finance.key,
          sort: finance.sort,
          name: finance.name,
          weight: finance.weight,
          targets: finance.targets || [],
          template_columns: finance.template_columns
        });
      }
      for (let i = 0; i < newIndexTpl.length; i++) {
        if (newIndexTpl[i]) {
          this.indexTpl.push(newIndexTpl[i]);
        }
      }
    }
  },
  created() {
    if (this.currentType === "my") {
      this.nav = [
        {
          label: "我的评分",
          href: PATH_EMPLOYEE_MY
        },
        {
          label: "指标详情",
          active: true
        }
      ];
    } else if (this.currentType === "team" || this.currentType === "subteam") {
      this.nav = [
        {
          label: "团队评分",
          href: PATH_EMPLOYEE_TEAM
        },
        {
          label: "评分详情",
          href: PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL(
            this.$route.params.id,
            this.$route.params.uid
          )
        },
        {
          label: "指标详情",
          active: true
        }
      ];
    } else {
      this.nav = [
        {
          label: "组织部绩效考核列表",
          href: PATH_PERFORMANCE_GRADE_MANAGEMENT
        },
        {
          label: "考核详情",
          href: PATH_EXECUTIVE_ASSESSMENT_DATAILS(this.$route.params.id)
        },
        {
          label: "指标详情",
          active: true
        }
      ];
    }
    this.getUserInfo();
    this.getWrokAndTeamTarget();
    let data = {
      performance_user_id: this.$route.params.uid
    };
    getExecutiveApprovalRecords(data)
      .then(res => {
        res.records.forEach(v => {
          if (v.sign === "green") {
            v["icon"] = "el-icon-check";
            v["color"] = "rgb(41, 197, 80)";
          } else if (v.sign === "red") {
            v["icon"] = "my-icon";
            v["color"] = "";
          } else if (v.sign === "blue") {
            v["icon"] = "my-affriming";
            v["color"] = "";
          }
        });
        this.approvalData = res.records || [];
        this.showApprovalBtn = this.approvalData.length ? true : false;
      })
      .catch(e => {});
  }
};
</script>
<style scoped>
.index-detail .target-detail >>> .el-table th div {
  line-height: 20px;
}
.index-detail .target-detail .el-form-item {
  margin-bottom: 16px;
}
.index-detail .target-detail >>> .el-form-item__content {
  line-height: normal;
}
.index-detail .target-detail .measure-standard >>> .el-form-item {
  margin-bottom: 16px;
}
</style>
<style lang="scss" scoped>
.index-detail {
  .target-detail-box {
    background-color: #ffffff;
    margin: 8px 30px;
    padding: 20px;
    border-radius: 3px;
    .target-detail {
      margin-bottom: 8px;
      border-radius: 3px;
      background-color: #fff;
      &:last-child {
        margin-bottom: 0;
      }
      .target-detail-title {
        margin-bottom: 10px;
        .target-title {
          font-size: 16px;
          font-weight: bold;
        }
        .target-weight {
          margin-left: 10px;
          color: #909399;
        }
      }
      .flex {
        display: flex;
      }
      .measure-title {
        width: 180px;
        text-align: right;
        flex-shrink: 1;
        .is-required {
          color: #f56c6c;
        }
      }
      ul {
        padding: 0;
        margin: 0;
      }
      .add-target {
        width: 100%;
        margin-top: 10px;
        border: 1px dashed #dcdfe6;
      }
      .delete-target {
        font-size: 18px;
        cursor: pointer;
        margin: auto 0;
        margin-left: 6px;
        &:hover {
          color: #55dbbb;
        }
      }
    }
    .sub-total {
      background-color: #ffffff;
      margin: 0 30px;
      padding: 5px 0;
      border-radius: 3px;
      list-style: none;
      li {
        padding: 5px 20px;
      }
      .performance-total {
        font-weight: bold;
      }
    }
  }
  .footer-button {
    text-align: center;
    margin: 20px 0;
    .submit-button {
      background-color: #38d0af;
      color: #ffffff;
      border: 1px solid #38d0af;
    }
    .tempeorary-memory {
      background-color: #66a8ff;
      color: #ffffff;
      border: 1px solid #66a8ff;
    }
  }
}
</style>
