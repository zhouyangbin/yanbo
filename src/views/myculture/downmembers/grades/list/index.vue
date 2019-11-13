<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <section class="content-container">
      <!-- <rule-text :text="constants.MY_DOWN_MEMBER_RULE"></rule-text>
      <br>-->
      <section class="content-container bg-white">
        <header class="member-grade-info">
          <div class="name">&nbsp;&nbsp;&nbsp; {{ evaluation_name }}</div>
          <div class="finish_time">
            {{ constants.FINISHED_DATE }}: {{ end_time }}
          </div>
        </header>
        <br />
        <hr />
        <br />
        <div class="members-list-filter">
          <el-form
            :inline="true"
            class="list-filter-form"
            :model="memberForm"
            ref="ruleForm"
          >
            <el-form-item prop="employee_name">
              <el-input
                placeholder="请输入姓名"
                v-model="memberForm.employee_name"
              ></el-input>
            </el-form-item>
            <el-form-item prop="superior_name">
              <el-input
                placeholder="请输入上级姓名"
                v-model="memberForm.superior_name"
              ></el-input>
            </el-form-item>
            <el-form-item prop="highlevel_status">
              <el-select
                v-model="memberForm.highlevel_status"
                :placeholder="constants.HIGHLV_STATUS"
              >
                <el-option
                  v-for="v of constants.BREF_HIGH_LEVEL_STATUS"
                  :label="v.value"
                  :key="v.key"
                  :value="v.key"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('ruleForm')">{{
                constants.RESET
              }}</el-button>
            </el-form-item>
          </el-form>
          <div>
            <el-popover
              @hide="reason = ''"
              placement="top"
              width="160"
              v-model="showReasonPop"
            >
              <case-area
                v-model="reason"
                placeholder="请填写驳回理由"
              ></case-area>
              <br />
              <el-row type="flex" justify="center">
                <el-button @click="batchReject" type="primary" round>{{
                  constants.SUBMIT
                }}</el-button>
              </el-row>
              <el-button
                style="margin-right:20px"
                slot="reference"
                type="primary"
                :disabled="!hasSelectedItem"
                round
                >{{ constants.BATCH_REJECT }}</el-button
              >
            </el-popover>

            <el-button
              style="margin-right:20px"
              @click="batchPass"
              :disabled="!hasSelectedItem"
              type="primary"
              round
              >{{ constants.BATCH_PASS }}</el-button
            >
          </div>
        </div>
        <br />
        <distribute-summary :data="summary"></distribute-summary>
        <br />
        <hr class="dash" />
        <br />
        <el-alert
          class="alert-tip"
          effect="light"
          :closable="false"
          type="info"
          show-icon
        >
          <template v-slot:title>
            <div>
              温馨提示:
              <span class="green">绿色</span> 为自评,
              <span class="blue">蓝色</span> 为上级评价
            </div>
          </template>
        </el-alert>
        <br />
        <br />
        <el-table
          ref="tableData"
          @selection-change="selectionChange"
          :data="tableData"
          stripe
          style="width: 100%"
        >
          <el-table-column type="selection"></el-table-column>
          <el-table-column
            prop="name"
            width="100"
            :label="constants.LABEL_NAME"
          >
            <template slot-scope="scope">
              <el-tooltip v-if="isBigDiff(scope.row)" placement="top">
                <div slot="content">
                  自评和上级评总分差4分及以上或单项差2分及以上
                </div>
                <img width="15" src="@/assets/img/large_diff.png" alt />
              </el-tooltip>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column
            prop="superior_name"
            label="上级姓名"
          ></el-table-column>
          <el-table-column min-width="150" label="自评分数/上级分数">
            <template slot-scope="scope">
              <span class="self-text">
                {{
                  scope.row
                    | path(["scores", "self", "total"])
                    | placeholder("-")
                }}
              </span>
              <span class="self-superior">/</span>
              <span class="superior-text">
                {{
                  scope.row
                    | path(["scores", "superior", "total"])
                    | placeholder("-")
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column min-width="180" label="自评平均分/上级平均分">
            <template slot-scope="scope">
              <span class="self-text">
                {{
                  scope.row
                    | path(["scores", "self", "average"])
                    | placeholder("-")
                }}
              </span>
              <span class="self-superior">/</span>
              <span class="superior-text">
                {{
                  scope.row
                    | path(["scores", "superior", "average"])
                    | placeholder("-")
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column min-width="80" label="成就客户">
            <template slot-scope="scope">
              <span class="self-text">
                {{
                  scope.row
                    | path(["scores", "self", "questions", "1"])
                    | placeholder("-")
                }}
              </span>
              <span class="self-superior">/</span>
              <span class="superior-text">
                {{
                  scope.row
                    | path(["scores", "superior", "questions", "1"])
                    | placeholder("-")
                }}
              </span>
            </template>
          </el-table-column>

          <el-table-column min-width="80" label="创新">
            <template slot-scope="scope">
              <span class="self-text">
                {{
                  scope.row
                    | path(["scores", "self", "questions", "3"])
                    | placeholder("-")
                }}
              </span>
              <span class="self-superior">/</span>
              <span class="superior-text">
                {{
                  scope.row
                    | path(["scores", "superior", "questions", "3"])
                    | placeholder("-")
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column min-width="80" label="合作">
            <template slot-scope="scope">
              <span class="self-text">
                {{
                  scope.row
                    | path(["scores", "self", "questions", "4"])
                    | placeholder("-")
                }}
              </span>
              <span class="self-superior">/</span>
              <span class="superior-text">
                {{
                  scope.row
                    | path(["scores", "superior", "questions", "4"])
                    | placeholder("-")
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column min-width="80" label="务实">
            <template slot-scope="scope">
              <span class="self-text">
                {{
                  scope.row
                    | path(["scores", "self", "questions", "2"])
                    | placeholder("-")
                }}
              </span>
              <span class="self-superior">/</span>
              <span class="superior-text">
                {{
                  scope.row
                    | path(["scores", "superior", "questions", "2"])
                    | placeholder("-")
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            style="text-algin: left"
            prop="_271_level"
            width="100"
            label="271等级"
          >
            <template slot-scope="scope">
              {{
                scope.row._271_level ? getLevelText(scope.row._271_level) : "无"
              }}
              <el-tooltip v-if="scope.row.special_recommended" placement="top">
                <div slot="content">上级特殊推荐top</div>
                <img width="15" src="@/assets/img/recommend.png" alt />
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column
            min-width="120"
            prop="highlevel_status_name"
            :label="constants.HIGHLV_STATUS"
          ></el-table-column>
          <el-table-column prop="stage_name" :label="constants.LABEL_STATUS">
            <template slot-scope="scope">
              <div class="reject_status" v-if="scope.row.reject_status == 1">
                <div>{{ constants.REJECT }}</div>
              </div>
              <div class="complain_status" v-if="scope.row.reject_status == 2">
                <div>{{ constants.APPEAL }}</div>
              </div>
              <div v-if="scope.row.reject_status == 0">
                {{ scope.row.stage_name }}
              </div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" :label="constants.OPERATIONS">
            <template slot-scope="scope">
              <el-button
                @click="goDetail(scope.row)"
                type="text"
                size="small"
                >{{ constants.VIEW_DETAILS }}</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <br />
        <el-row type="flex" justify="end">
          <pagination
            @current-change="currentChange"
            :currentPage="currentPage"
            :total="total"
          ></pagination>
        </el-row>
      </section>
    </section>
  </div>
</template>
<script>
import {
  MY_DOWN_MEMBER,
  DOWN_MEMBERS_GRADE_LIST,
  LEVEL_ALIAS,
  BREF_HIGH_LEVEL_STATUS,
  FINISHED_DATE,
  CONST_OPERATIONS_SUCCESS,
  SUBMIT,
  BATCH_REJECT,
  BATCH_PASS,
  LABEL_NAME,
  LEADER_EVALUATION_STATUS,
  SELF_SCORE,
  NAME,
  VIEW_DETAILS,
  CONFIRM,
  CANCEL,
  RESET,
  LEADER_NAME,
  LEADER_SOCRE,
  LABEL_STATUS,
  OPERATIONS,
  HIGHLV_STATUS,
  REJECT,
  APPEAL
} from "@/constants/TEXT";
import {
  PATH_DOWN_MEMBER_CULTURE_LIST,
  PATH_DOWN_MEMBER_CULTURE_DETAILS,
  PATH_DOWN_MEMEBER_CULTURE_GRADE
} from "@/constants/URL";
import { getDownMembersList, postReject } from "@/constants/API";
import { formatTime } from "@/utils/timeFormat";
import Vue from "vue";

export default {
  data() {
    return {
      editStatus: 0,
      total: 0,
      currentPage: 1,
      evaluation_name: "",
      end_time: "",
      selectedArr: [],
      reason: "",
      showReasonPop: false,
      tableData: [],
      summary: {
        top: {
          count: 0,
          expected: 0
        },
        middle: {
          count: 0,
          expected: 0
        },
        bottom: {
          count: 0,
          expected: 0
        }
      },
      memberForm: {
        superior_name: "",
        employee_name: "",
        highlevel_status: "",
        type: 0
      },
      nav: [
        {
          label: DOWN_MEMBERS_GRADE_LIST,
          href: PATH_DOWN_MEMEBER_CULTURE_GRADE
        },
        {
          label: MY_DOWN_MEMBER,
          active: true
        }
      ],
      constants: {
        BREF_HIGH_LEVEL_STATUS,
        FINISHED_DATE,
        SUBMIT,
        BATCH_REJECT,
        BATCH_PASS,
        LABEL_NAME,
        LEADER_EVALUATION_STATUS,
        SELF_SCORE,
        NAME,
        VIEW_DETAILS,
        RESET,
        LEADER_NAME,
        LEADER_SOCRE,
        LABEL_STATUS,
        OPERATIONS,
        HIGHLV_STATUS,
        REJECT,
        APPEAL
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    "distribute-summary": () =>
      import("@/components/modules/myculture/membersdistribute/index.vue"),
    "case-area": () => import("@/components/common/CaseArea/index.vue")
  },
  created() {
    const type = JSON.parse(localStorage.getItem("type"));
  },
  watch: {
    memberForm: {
      handler: function(v) {
        this.currentPage = 1;
        this.refreshData({ page: 1, ...v });
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    selectionChange(s) {
      // console.log(formatTime(new Date()))
      // this.selectedArr = s;

      for (let i = 0; i < s.length; i++) {
        if (s[i].stage != 50) {
          console.log(s[i]);
          this.$alert("所选隔级中存在未在当前阶段的员工！");
          this.$refs.tableData.clearSelection();
        } else {
          this.selectedArr.push(s[i]);
        }
      }
    },
    batchPass() {
      this.$confirm("是否批量通过, 是否继续?", "提示", {
        confirmButtonText: CONFIRM,
        cancelButtonText: CANCEL,
        type: "warning"
      })
        .then(() => {
          postReject({
            ids: this.selectedArr.map(v => v.id),
            type: 2
          })
            .then(res => {
              const count = res.count;
              this.$message({
                message: `除${count}人处于驳回中，其他批量操作成功!`,
                type: "success"
              });
              this.refreshData({ page: 1, ...this.memberForm });
              this.page = 1;
              this.selectedArr = [];
            })
            .catch(e => {});
        })
        .catch(() => {});
    },
    batchReject() {
      if (!this.reason) {
        this.$message({
          message: "请填写驳回理由!",
          type: "warning"
        });
        return;
      }
      postReject({
        ids: this.selectedArr.map(v => v.id),
        type: 1,
        reason: this.reason
      })
        .then(res => {
          this.$message({
            message: "操作成功!",
            type: "success"
          });
          this.refreshData({ page: 1, ...this.memberForm });
          this.page = 1;
          this.showReasonPop = false;
          this.selectedArr = [];
        })
        .catch(e => {});
    },
    currentChange(v) {
      this.currentPage = v;
      this.refreshData({ page: v, ...this.memberForm });
    },
    refreshData(data) {
      getDownMembersList(this.$route.params.id, {
        highlevel_status: this.memberForm.highlevel_status,
        superior_name: this.memberForm.superior_name,
        employee_name: this.memberForm.employee_name,
        type: this.$route.params.type
      }).then(res => {
        const {
          total,
          data,
          overview,
          evaluation_name,
          end_time,
          edit_status
        } = res;
        this.total = total;
        this.tableData = data;
        this.evaluation_name = evaluation_name;
        this.end_time = end_time;
        this.editStatus = edit_status;
        this.postSummary(overview);
      });
    },
    goDetail(row) {
      this.$router.push(
        PATH_DOWN_MEMBER_CULTURE_DETAILS(
          this.$route.params.id,
          this.$route.params.type,
          row.id
        )
      );
    },
    postSummary(data) {
      let obj = {};
      for (const i of data) {
        obj[i.key] = {
          count: parseInt(i.count),
          expected: i.expected_value
        };
      }
      this.summary = { ...obj };
    },
    getLevelText(num) {
      return LEVEL_ALIAS[num];
    },
    isBigDiff(row) {
      const isTotalDiff =
        Vue.filter("path")(row, ["scores", "self", "total"]) != null &&
        Vue.filter("path")(row, ["scores", "superior", "total"]) != null &&
        Math.abs(
          Vue.filter("path")(row, ["scores", "self", "total"]) -
            Vue.filter("path")(row, ["scores", "superior", "total"])
        ) >= 4;

      const keys = Object.keys(
        Vue.filter("path")(row, ["scores", "self", "questions"]) || {}
      );

      const itemDiff = keys.some(k => {
        return (
          Vue.filter("path")(row, ["scores", "self", "questions", k]) != null &&
          Vue.filter("path")(row, ["scores", "superior", "questions", k]) !=
            null &&
          Math.abs(
            Vue.filter("path")(row, ["scores", "self", "questions", k]) -
              Vue.filter("path")(row, ["scores", "superior", "questions", k])
          ) >= 2
        );
      });

      return isTotalDiff || itemDiff;
    }
  },
  computed: {
    hasSelectedItem() {
      return this.selectedArr.length > 0 && this.editStatus == 0;
    }
    // notAllowedBatch() {
    //   return this.selectedArr.some(
    //     i =>
    //       i.stage != 50 ||
    //       (i.status == 100 || i.status == 30) ||
    //       (i.stage == 50 && formatTime(new Date()) >= i.highlevel_end_time)
    //   );
    // }
  }
};
</script>
<style lang="scss" scoped>
@mixin target-metro {
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    @content;
  }
}
.my-grade-list .content-container {
  padding: 20px;
}
.my-grade-list .bg-white {
  background-color: white;
}

.member-grade-info {
  display: flex;
  align-content: center;
  align-items: center;
}
.member-grade-info .name {
  margin-right: 15px;
}
.member-grade-info .finish_time {
  font-size: 10px;
  color: grey;
}
.members-list-filter {
  margin-left: 20px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.list-filter-form {
  display: inline-block;
  margin-right: 40px;
}
.list-filter-form >>> .el-form-item {
  margin-bottom: 0;
}
/* .avatar-style {
  margin-right: 15px;
  max-height: 30px;
  max-width: 30px;
  height: 30px;
  width: 30px;
} */
hr.dash {
  border-style: dashed;
  border-color: grey;
}
.stringAvatar {
  width: 30px;
  height: 30px;
  background-color: cornflowerblue;
  color: white;
  border-radius: 50%;
  line-height: 30px;
  margin-right: 15px;
  font-size: 12px;
  text-align: center;
}
.alert-tip {
  background: #f9f8ec;
  display: inline-flex;
  width: auto;
  font-size: 12px;
  letter-spacing: 0.13px;
  line-height: 17px;
  .green {
    color: #5dc5b2;
  }
  .blue {
    color: #518feb;
  }
}
.self-text {
  font-size: 14px;
  color: #5dc5b2;
  letter-spacing: 0.17px;
}
.superior-text {
  font-size: 14px;
  color: #518feb;
  letter-spacing: 0.17px;
}
.self-superior {
  font-size: 14px;
  color: #adadad;
  letter-spacing: 0.17px;
  padding: 0 5px;
}
.reject_status div {
  border-radius: 20px;
  border: solid 2px #e94a2d;
  color: #e94a2d;
  width: 60px;
  transform: rotateZ(-12deg);
}
.complain_status,
.reject_status {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  position: absolute;
  height: 100%;
  left: 32%;
  transform: translate(-50%, -50%);
  top: 50%;
}
@include target-metro {
  .complain_status,
  .reject_status {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
    position: absolute;
    height: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 100%;
  }
}
.complain_status div {
  border-radius: 20px;
  border: solid 2px #46beeb;
  color: #46beeb;
  width: 60px;
  transform: rotateZ(-12deg);
}
</style>
