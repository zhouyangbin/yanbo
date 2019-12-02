<template>
  <div class="target-settings">
    <nav-bar :list="nav"></nav-bar>
    <div>
      <detail-header :user-info="userInfo" :self="true"></detail-header>
      <el-row>
        <el-row
          v-for="(targetItem, index) in allTarget"
          :key="index"
          class="target-detail"
        >
          <el-row class="target-detail-title">
            <span class="target-title">{{ targetItem.type }}</span>
            <span class="target-weight"
              >{{ constants.TARGET_WEIGH }}{{ targetItem.weight }}%</span
            >
          </el-row>
          <el-form :ref="`form${index}`" :model="targetItem">
            <el-table
              :data="targetItem.table"
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
                  <div v-if="targetItem.isMoney">{{ scope.row.weights }}%</div>
                  <el-form-item
                    v-if="!targetItem.isMoney"
                    :prop="`table.${scope.$index}.weights`"
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
                v-if="targetItem.isMoney"
                :label="constants.TARGET_NAME"
                min-width="240"
                align="center"
                prop="target"
              ></el-table-column>
              <el-table-column
                v-if="!targetItem.isMoney"
                :label="constants.TARGET_NAME"
                min-width="240"
                align="center"
                :render-header="changeLabel"
                prop="target"
              >
                <template slot-scope="scope">
                  <el-form-item
                    :prop="`table.${scope.$index}.target`"
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
                        v-show="targetItem.table.length > 1"
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
                v-if="targetItem.table[0].content !== undefined"
              >
                <template slot-scope="scope">
                  <div v-if="targetItem.isMoney">{{ scope.row.content }}</div>
                  <el-form-item
                    v-if="!targetItem.isMoney"
                    :prop="`table.${scope.$index}.content`"
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
                  <ul v-if="targetItem.isMoney">
                    <li
                      class="flex"
                      v-for="(item, index) in scope.row.metrics"
                      :key="index"
                    >
                      <el-col class="measure-title">
                        <span v-if="item.is_required" class="is-required"
                          >*</span
                        >
                        <span>&nbsp;{{ item.name }}</span>
                      </el-col>
                      <el-col>{{ item.content }}</el-col>
                    </li>
                  </ul>
                  <el-row
                    v-for="(item, index) in scope.row.metrics"
                    :key="index"
                  >
                    <el-form-item
                      v-if="!targetItem.isMoney"
                      :label="item.name"
                      label-width="130px"
                      :prop="`table.${scope.$index}.metrics.${index}.content`"
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
              v-if="!targetItem.isMoney && getTableLen(index) <= 4"
              @click="addTarget(index)"
              >{{ constants.ADD_TARGET_LINE }}</el-button
            >
          </el-form>
        </el-row>
        <ul class="sub-total">
          <li>
            {{ constants.FINANCE_DIMENSIONALITY_SUBTOTAL }}&nbsp;&nbsp;&nbsp;{{
              this.handleSubTotal("finance")
            }}%
          </li>
          <li>
            工作维度小计&nbsp;&nbsp;&nbsp;{{ this.handleSubTotal("work") }}%
          </li>
          <li>
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
      </el-row>
      <el-row class="footer-button">
        <el-button @click="submitForm" class="submit-button">提交</el-button>
        <el-button @click="temporaryMemory" class="tempeorary-memory"
          >暂存</el-button
        >
        <el-button @click="returnList">返回</el-button>
        <el-button @click="checkExamine">查看审批记录</el-button>
      </el-row>
    </div>
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
  TARGET_WEIGH,
  TARGET_NAME,
  TARGET_DETAIL,
  TASK_DESCRIPTION,
  YARD_STICK,
  ADD_TARGET_LINE,
  FINANCE_DIMENSIONALITY_SUBTOTAL
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
  postExecutiveIndexSetting
} from "@/constants/API";
import { Divider } from "element-ui";

export default {
  data() {
    return {
      constants: {
        TARGET_WEIGH,
        TARGET_NAME,
        TASK_DESCRIPTION,
        YARD_STICK,
        ADD_TARGET_LINE,
        FINANCE_DIMENSIONALITY_SUBTOTAL
      },
      isExamineDialog: false,
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
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "detail-header": () =>
      import("@/components/modules/seniorexecutive/indexHeader/index"),
    "examine-detail": () =>
      import("@/components/modules/employee/checkExamineDetail/index")
  },
  methods: {
    /**
     * 计算当前table的长度
     */
    getTableLen(index) {
      return this.allTarget[index].table.length;
    },
    /**
     * 小计，计算出每个维度用户输入的总权重
     * @param type 计算的维度
     */
    handleSubTotal(type) {
      let subTotal = 0;
      this.allTarget.forEach(v => {
        if (v.basicType === type) {
          v.table.forEach(value => {
            if (value.weights !== "") {
              subTotal += value.weights;
            }
          });
        }
      });
      return subTotal;
    },
    /**
     * 改变table的表头
     */
    changeLabel(h, { column }) {
      return h("div", [
        h("span", column.label),
        h("br"),
        h("span", "（最多可填写"),
        h("span", { style: { color: "red" } }, 5),
        h("span", "项）")
      ]);
    },
    /**
     * 得到页面头部的用户信息
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
     * 得到设定的维度信息
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
    /**
     * 点击确认、暂存、返回时向后端传递参数
     * @returns postData 向后端传递的参数对象
     */
    handleSubmitData() {
      let init = this.allTarget;
      let team = [];
      let work = [];

      for (var i = 0; i < init.length - 1; i++) {
        let tableLen = init[i].table;
        for (var r = 0; r < tableLen.length; r++) {
          let metrics = tableLen[r].metrics;
          let n = {};
          for (var l = 0; l < metrics.length; l++) {
            n[metrics[l].key] = metrics[l].content;
          }
          n.type = init[i].type;
          n.weight = init[i].weight;
          if (init[i].basicType == "team") {
            team.push(n);
          } else if (init[i].basicType == "work") {
            work.push(n);
          }
        }
      }
      let post = {
        team: team,
        work: work
      };
      return post;
    },
    /**
     * 点击提交按钮
     */
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
            content = this.allTarget[i].table[line].metrics[location[3]].name;
          }
          line = parseInt(location[1]);
          this.$message.error(
            `${this.allTarget[i].type}第${line + 1}行${content}不能为空`
          );
          return false;
        }
      }
      // 验证每个维度填写的权重之和是否等于该维度模版中的总权重
      for (let i = 0; i < this.allTarget.length; i++) {
        if (
          this.allTarget[i].weight !==
          this.handleSubTotal(this.allTarget[i].basicType)
        ) {
          this.$message.error(
            `${this.allTarget[i].type}权重之和不等于${
              this.allTarget[i].weight
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
            postExecutiveIndexSetting(
              this.$route.params.uid,
              this.handleSubmitData()
            )
              .then(res => {
                this.$router.push(
                  PATH_PERFORMANCE_INDEX_DETAIL(
                    this.$route.params.id,
                    this.$route.params.uid
                  )
                );
              })
              .catch(() => {});
          })
          .catch(() => {});
      }
    },
    /**
     * 点击暂存按钮，不需要进行验证，只需要把数据发送给后端，成功时提示暂存成功
     */
    temporaryMemory() {
      postExecutiveSaveDraft(this.$route.params.uid, this.handleSubmitData())
        .then(res => {
          this.$message({ type: "success", message: "暂存成功" });
        })
        .catch(() => {});
    },
    /**
     * 点击返回按钮，不需要进行验证，成功时回到我的评分列表页
     */
    returnList() {
      postExecutiveSaveDraft(this.$route.params.uid, this.handleSubmitData())
        .then(res => {
          this.$router.push("/employee/my");
        })
        .catch(() => {});
    },
    /**
     * 点击添加考核项按钮
     */
    addTarget(index) {
      let data = {
        performance_id: this.$route.params.id,
        performance_user_id: this.$route.params.uid
      };
      getExecutiveTargetContent(data).then(res => {
        this.allTarget[index].table.push(res[0]);
      });
    },
    /**
     * 删除考核项按钮
     */
    deleteTarget(index, rowIndex) {
      this.allTarget[index].table.splice(rowIndex, 1);
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
    }
  },
  created() {
    this.getUserInfo();
    this.getWrokAndTeamTarget();
  }
};
</script>
<style scoped>
.target-settings .text-over {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.target-settings .flex {
  display: flex;
}
.target-settings .target-detail >>> .el-table th div {
  line-height: 20px;
}
.target-settings .target-detail .el-form-item {
  margin-bottom: 16px;
}
.target-settings .target-detail >>> .el-form-item__content {
  line-height: normal;
}
.target-settings .target-detail .measure-standard >>> .el-form-item {
  margin-bottom: 16px;
}
.target-settings .target-detail {
  background-color: #ffffff;
  margin: 8px 30px;
  padding: 20px;
  border-radius: 3px;
}
.target-settings .target-detail .target-detail-title {
  margin-bottom: 10px;
}
.target-settings .target-detail .target-title {
  font-size: 16px;
  font-weight: 500;
}
.target-settings .target-detail .target-weight {
  color: #909399;
  margin-left: 10px;
}
.target-settings .target-detail .measure-title {
  width: 180px;
  text-align: right;
  flex-shrink: 1;
}
.target-settings .target-detail .measure-title .is-required {
  color: #f56c6c;
}
.target-settings .target-detail ul {
  padding: 0;
  margin: 0;
}
.target-settings .target-detail .add-target {
  width: 100%;
  margin-top: 10px;
  border: 1px dashed #dcdfe6;
}
.target-settings .target-detail .delete-target {
  font-size: 18px;
  cursor: pointer;
  margin: auto 0;
  margin-left: 6px;
}
.target-settings .target-detail .delete-target:hover {
  color: #55dbbb;
}
.target-settings .sub-total {
  background-color: #ffffff;
  margin: 0 30px;
  padding: 5px 0;
  border-radius: 3px;
  list-style: none;
}
.target-settings .sub-total li {
  padding: 5px 20px;
}
.target-settings .sub-total .performance-total {
  font-weight: bold;
}
.target-settings .footer-button {
  text-align: center;
  margin: 20px 0;
}
.target-settings .footer-button .submit-button {
  background-color: #38d0af;
  color: #ffffff;
  border: 1px solid #38d0af;
}
.target-settings .footer-button .tempeorary-memory {
  background-color: #66a8ff;
  color: #ffffff;
  border: 1px solid #66a8ff;
}
.has-gutter .el-table_1_column_2 .cell div:nth-last-child(3) {
  color: red !important;
}
</style>
