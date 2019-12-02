<template>
  <div class="index-detail">
    <nav-bar :list="nav"></nav-bar>
    <index-header
      :user-info="userInfo"
      @update="updatePage"
      :self="true"
    ></index-header>
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
              :label="constants.TARGET_WEIGH"
              width="180"
              align="center"
            >
              <template slot-scope="scope">
                <div v-if="targetItem.isFinancial">
                  {{ scope.row.weights }}%
                </div>
                <el-form-item
                  v-if="!targetItem.isFinancial"
                  :prop="`targets.${scope.$index}.weights`"
                  :rules="rules.weights"
                >
                  <el-input
                    v-model.number="scope.row.weights"
                    type="number"
                    size="small"
                    oninput="if(value > 100)value = 100;if(value < 0)value = 0"
                  >
                    <template slot="append"
                      >%</template
                    >
                  </el-input>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              v-if="targetItem.isFinancial"
              :label="constants.TARGET_NAME"
              min-width="240"
              align="center"
              prop="target"
            ></el-table-column>
            <el-table-column
              v-if="!targetItem.isFinancial"
              :label="constants.TARGET_NAME"
              min-width="240"
              align="center"
              :render-header="changeLabel"
              prop="target"
            >
              <template slot-scope="scope">
                <el-form-item
                  :prop="`targets.${scope.$index}.target`"
                  :rules="rules.target"
                >
                  <div class="flex">
                    <el-input
                      type="textarea"
                      v-model="scope.row.target"
                      :autosize="{ minRows: 12 }"
                    ></el-input>
                    <i
                      class="el-icon-delete delete-target"
                      v-show="targetItem.targets.length > 1"
                      @click="deleteTarget(index, `${scope.$index}`)"
                    ></i>
                  </div>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              :label="constants.TASK_DESCRIPTION"
              min-width="300"
              header-align="center"
              v-if="
                targetItem.targets[0] &&
                  targetItem.targets[0].content !== undefined
              "
            >
              <template slot-scope="scope">
                <div v-if="targetItem.isFinancial">{{ scope.row.content }}</div>
                <el-form-item
                  v-if="!targetItem.isFinancial"
                  :prop="`targets.${scope.$index}.content`"
                  :rules="rules.content"
                >
                  <el-input
                    type="textarea"
                    v-model="scope.row.content"
                    :autosize="{ minRows: 12 }"
                  ></el-input>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              :label="constants.YARD_STICK"
              min-width="300"
              header-align="center"
            >
              <template slot-scope="scope">
                <ul v-if="targetItem.isFinancial">
                  <li
                    class="flex"
                    v-for="(item, index) in scope.row.metrics"
                    :key="index"
                  >
                    <el-col class="measure-title">
                      <span v-if="item.is_required" class="is-required">*</span>
                      <span>&nbsp;{{ item.name }}</span>
                    </el-col>
                    <el-col>{{ item.content }}</el-col>
                  </li>
                </ul>
                <el-row v-for="(item, index) in scope.row.metrics" :key="index">
                  <el-form-item
                    v-if="!targetItem.isFinancial"
                    :label="item.name"
                    label-width="130px"
                    :prop="`targets.${scope.$index}.metrics.${index}.content`"
                    :rules="item.is_required ? metricsRules.content : {}"
                  >
                    <el-input
                      type="textarea"
                      autosize
                      v-model="item.content"
                    ></el-input>
                  </el-form-item>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
          <el-button
            icon="el-icon-plus"
            class="add-target"
            v-if="!targetItem.isFinancial && getTableLen(index) <= 4"
            @click="addTarget(index)"
            >{{ constants.ADD_TARGET_LINE }}</el-button
          >
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
      <el-row class="footer-button">
        <el-button @click="submitForm" class="submit-button">提交</el-button>
        <el-button @click="temporaryMemory" class="tempeorary-memory"
          >暂存</el-button
        >
        <el-button @click="returnList">返回</el-button>
      </el-row>
      <el-row
        class="footer-button"
        v-if="userInfo.opinion && (userInfo.stage === 1) & self"
      >
        <el-button @click="submitForm" class="submit-button">提交</el-button>
        <el-button @click="temporaryMemory" class="tempeorary-memory"
          >暂存</el-button
        >
        <el-button @click="checkExamine">
          {{ constants.CHECK_EXAMINE_LOG }}
        </el-button>
        <el-button @click="returnList">返回</el-button>
      </el-row>
    </section>
    <examine-detail
      :is-examine-dialog="isExamineDialog"
      :perforamnce_user_id="userInfo.perforamnce_user_id"
      @close="closeExamine"
    ></examine-detail>
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
  PATH_PERFORMANCE_INDEX_DETAIL
} from "@/constants/URL";
import {
  getExecutiveUserInfo,
  getExecutiveUniqueTemplate,
  getExecutiveTargetContent,
  postExecutiveSaveDraft,
  postExecutiveIndexSetting,
  getExecutiveDraft
} from "@/constants/API";
export default {
  components: {
    "nav-bar": AsyncComp(import("@/components/common/Navbar/index.vue")),
    "index-header": AsyncComp(
      import("@/components/modules/seniorexecutive/indexHeader/index")
    ),
    "examine-detail": AsyncComp(
      import("@/components/modules/employee/checkExamineDetail/index")
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
      isExamineDialog: false,
      indexTpl: [],
      handelIndexDetail: [],
      rules: {
        weights: [{ required: true, message: "权重不能为空", trigger: "blur" }],
        target: [
          { required: true, message: "指标名称不能为空", trigget: "blur" }
        ],
        content: [
          {
            required: true,
            message: "具体工作/任务描述不能为空",
            trigger: "blur"
          }
        ]
      },
      metricsRules: {
        content: [
          { required: true, message: "请输入衡量标准", trigger: "blur" }
        ]
      },
      isTeam: false,
      isWork: false,
      isFinance: false
    };
  },
  filters: {
    filterWeight(val) {
      return val + "%";
    },
    filterObject(val) {}
  },
  methods: {
    temporaryMemory() {
      postExecutiveSaveDraft(this.userId, this.indexTpl)
        .then(res => {
          // to do 暂存之后干什么
          this.$message({ type: "success", message: "暂存成功" });
        })
        .catch(e => {});
    },
    submitForm() {
      // 用于表单验证，由于是循环的内容，所以需要对每个表单都进行验证，所有表单全部通过才会发送请求
      // refs 取到每个表单的ref
      // total 验证通过的表单数量
      // err validate返回的错误信息
      // flag 验证通过flag为0，验证未通过flag为1
      let refs = Object.keys(this.$refs);
      let total = 0;
      let err = "";
      for (let i = 0; i < refs.length; i++) {
        let flag = 0;
        this.$refs[refs[i]][0].validate((valid, errObj) => {
          if (valid) {
            total++;
          } else {
            err = Object.keys(errObj);
            flag = 1;
          }
        });
        if (flag) {
          let location = err[0].split(".");
          let line = 0;
          let content = "";
          // 长度 === 3：未填项为权重、指标名称、具体工作中的一项
          // 长度 === 5: 为填项为衡量标准中的某一项
          if (location.length === 3) {
            if (location[2] === "weights") {
              content = "权重";
            } else if (location[2] === "target") {
              content = "指标名称";
            } else if (location[2] === "content") {
              content = "具体工作/任务描述";
            }
          } else if (location.length === 5) {
            content = this.indexTpl[i].table[line].metrics[location[3]].name;
          }
          line = parseInt(location[1]);
          this.$message.error(
            `${this.indexTpl[i].type}第${line + 1}行${content}不能为空`
          );
          return false;
        }
      }
      // 验证每个维度填写的权重之和是否等于该维度模版中的总权重
      for (let i = 0; i < this.indexTpl.length; i++) {
        if (
          this.indexTpl[i].weight != this.handleSubTotal(this.indexTpl[i].type)
        ) {
          this.$message.error(
            `${this.indexTpl[i].name}权重之和不等于${
              this.indexTpl[i].weight
            }%, 请检查`
          );
          return false;
        }
      }
      // 表单及权重验证通过进行二次弹窗，点击确定才会发送请求
      if (total === refs.length) {
        this.$confirm("是否确认提交指标?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
          .then(() => {
            postExecutiveIndexSetting(this.$route.params.uid, this.indexTpl)
              .then(res => {
                localStorage.clearItem(this.userId);
                this.$router.push(
                  PATH_PERFORMANCE_INDEX_DETAIL(
                    this.$route.params.id,
                    this.$route.params.uid
                  )
                );
              })
              .catch(e => {});
          })
          .catch(e => {});
      }
    },
    returnList() {
      postExecutiveSaveDraft(this.$route.params.uid, this.indexTpl)
        .then(res => {
          // to do 返回，返回哪里？？？
          this.$router.go(-1);
          // this.$router.push("/employee/my");
        })
        .catch(e => {});
    },
    handleSubTotal(type) {
      let subTotal = 0;
      this.indexTpl.forEach(v => {
        if (v.type === type) {
          v.targets.forEach(value => {
            if (value.weights !== "") {
              subTotal += Number(value.weights);
            }
          });
        }
      });
      return subTotal;
    },
    addTarget(index) {
      this.indexTpl[index].targets.push(this.indexTpl[index].template_columns);
    },
    getTableLen(index) {
      return this.indexTpl[index].targets.length;
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
    deleteTarget(index, rowIndex) {
      this.indexTpl[index].targets.splice(rowIndex, 1);
    },
    updatePage() {
      this.getWrokAndTeamTarget();
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
    closeExamine() {
      this.isExamineDialog = false;
    },
    checkExamine() {
      this.isExamineDialog = true;
    },
    getUserMsg() {
      let id = this.$route.params.uid;
      getExecutiveDraft(id)
        .then(res => {
          for (let i = 0; i < res.length; i++) {
            res[i].isFinancial = Number(res[i].isFinancial);
          }
          this.indexTpl = res;
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
              isFinancial: false,
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
              isFinancial: false,
              sort: work.sort,
              type: work.key,
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
              isFinancial: true,
              sort: finance.sort,
              type: finance.key,
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
    this.getUserInfo();
    this.getWrokAndTeamTarget();
    // to do 判断是显示还是填写指标
    // if (localStorage.getItem(this.userId) == undefined) {
    //   this.getWrokAndTeamTarget();
    // } else {
    //   this.getUserMsg();
    // }
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
}
</style>
