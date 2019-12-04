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
                targetItem.isFinancial === 'true' &&
                  targetItem.template_columns.indicator_name
              "
              :label="constants.TARGET_NAME"
              min-width="240"
              align="center"
              prop="target"
            ></el-table-column>
            <el-table-column
              v-if="
                targetItem.isFinancial === 'false' &&
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
                    v-for="(item, index) in scope.row.metrics"
                    :key="index"
                  >
                    <el-col class="measure-title">
                      <span v-if="item.is_required" class="is-required">*</span>
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
    <el-row class="footer-button">
      <el-button @click="returnList">返回</el-button>
    </el-row>
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
  PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL
} from "@/constants/URL";
import {
  getExecutiveUserInfo,
  getExecutiveUniqueTemplate
} from "@/constants/API";
export default {
  components: {
    "nav-bar": AsyncComp(import("@/components/common/Navbar/index.vue")),
    "index-header": AsyncComp(
      import("@/components/modules/seniorexecutive/indexHeader/index")
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
        indicator_setting_end_time: "",
        perforamnce_user_id: this.$route.params.uid
      },
      indexTpl: [],
      isTeam: false,
      isWork: false,
      isFinance: false
    };
  },
  filters: {
    filterWeight(val) {
      if (val) {
        return val + "%";
      }
    },
    filterObject(val) {}
  },
  methods: {
    returnList() {
      this.$router.go(-1);
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
          // 根据后端返回的字段判断显示哪个维度， isFinancial为是否为财务指标  0:非财务  1:财务
          this.isTeam = res.team !== undefined;
          this.isWork = res.work !== undefined;
          this.isFinance = res.finance !== undefined;
          this.indexTpl = [];
          if (this.isTeam) {
            let team = res.team;
            this.$set(this.indexTpl, team.sort - 1, {
              key: team.key,
              isFinancial: "false",
              sort: team.sort,
              name: team.name,
              weight: team.weight,
              targets: team.targets || [],
              template_columns: team.template_columns
            });
          }
          if (this.isWork) {
            let work = res.work;
            this.$set(this.indexTpl, work.sort - 1, {
              key: work.key,
              isFinancial: "false",
              sort: work.sort,
              name: work.name,
              weight: work.weight,
              targets: work.targets || [],
              template_columns: work.template_columns
            });
          }
          if (this.isFinance) {
            let finance = res.finance;
            this.$set(this.indexTpl, finance.sort - 1, {
              key: finance.key,
              isFinancial: "true",
              sort: finance.sort,
              name: finance.name,
              weight: finance.weight,
              targets: finance.targets || [],
              template_columns: finance.template_columns
            });
          }
          this.handleIndexData(this.indexTpl);
        })
        .catch(e => {});
    },
    handleIndexData(indexTpl) {
      for (let i = 0; i < indexTpl.length; i++) {
        if (indexTpl[i].targets.length === 0) {
          indexTpl[i].targets[0].metrics = indexTpl[i].template_columns.metrics;
        } else {
          for (let j = 0; j < indexTpl[i].targets.length; j++) {
            indexTpl[i].targets[j].metrics =
              indexTpl[i].template_columns.metrics;
          }
        }
      }
      this.indexTpl = indexTpl;
    }
  },
  created() {
    if (this.$route.params.type === "my") {
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
    } else if (this.$route.params.type === "team") {
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
  }
}
</style>
