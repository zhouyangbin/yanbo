<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container">
      <!-- <rule-text :text="constants.MY_DOWN_MEMBER_RULE"></rule-text>
      <br> -->
      <section class="content-container bg-white">
        <header class="member-grade-info">
          <div class="name">
            &nbsp;&nbsp;&nbsp; {{evaluation_name}}
          </div>
          <div class="finish_time">
            {{constants.FINISHED_DATE}}: {{end_time}}
          </div>
        </header>
        <br>
        <hr>
        <br>
        <div class="members-list-filter">
          <el-form :inline="true" class="list-filter-form" :model="memberForm" ref="ruleForm">
            <el-form-item prop="superior_name">
              <el-input placeholder="请输入下级姓名" v-model="memberForm.superior_name"></el-input>
            </el-form-item>
            <el-form-item prop="employee_name">
              <el-input placeholder="隔级姓名" v-model="memberForm.employee_name"></el-input>
            </el-form-item>
            <el-form-item prop="highlevel_status">
              <el-select v-model="memberForm.highlevel_status" :placeholder="constants.HIGHLV_STATUS">
                <el-option v-for="v of constants.BREF_HIGH_LEVEL_STATUS" :label="v.value" :key="v.key" :value="v.key"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('ruleForm')">{{constants.RESET}}</el-button>
            </el-form-item>
          </el-form>
          <div>
            <el-popover @hide="reason=''" placement="top" width="160" v-model="showReasonPop">
              <case-area v-model="reason" placeholder="请填写驳回理由"></case-area>
              <br>
              <el-row type="flex" justify="center">
                <el-button @click="batchReject" type="primary" round>{{constants.SUBMIT}}</el-button>
              </el-row>
              <el-button style="margin-right:20px" slot="reference" type="primary" :disabled="!hasSelectedItem || notAllowedBatch" round>{{constants.BATCH_REJECT}}</el-button>
            </el-popover>

            <el-button style="margin-right:20px" @click="batchPass" :disabled="!hasSelectedItem || notAllowedBatch" type="primary" round>{{constants.BATCH_PASS}}</el-button>
          </div>
          <distribute-summary :data="summary"></distribute-summary>
        </div>
        <br>
        <hr class="dash">
        <br>
        <el-table @selection-change="selectionChange" :data="tableData" stripe style="width: 100%">
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="name" :label="constants.LABEL_NAME">
            <template slot-scope="scope">
              <el-row type="flex" align="middle">
                <img width="30px" v-if="scope.row.avatar" height="30px" style="margin-right:15px" :src="`${scope.row.avatar}_30x30q100.jpg`" alt="">
                <span class="stringAvatar" v-else>{{scope.row.name.substr(scope.row.name.length-2)}}</span>
                {{scope.row.name}}
              </el-row>
            </template>
          </el-table-column>
          <el-table-column prop="superior_name" :label="constants.LEADER_NAME"></el-table-column>
          <el-table-column prop="score" :label="constants.SELF_SCORE"></el-table-column>
          <el-table-column prop="superior_score" :label="constants.LEADER_SOCRE"></el-table-column>
          <el-table-column prop="_271_level" label="271等级">
            <template slot-scope="scope">
              {{scope.row._271_level ? getLevelText(scope.row._271_level):'无'}}
            </template>
          </el-table-column>
          <el-table-column prop="highlevel_status_name" :label="constants.HIGHLV_STATUS">
          </el-table-column>
          <el-table-column prop="stage_name" :label="constants.LABEL_STATUS"></el-table-column>
          <el-table-column fixed="right" :label="constants.OPERATIONS">
            <template slot-scope="scope">
              <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.VIEW_DETAILS}}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <el-row type="flex" justify="end">
          <pagination @current-change="currentChange" :currentPage="currentPage" :total="total"></pagination>
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
  HIGHLV_STATUS
} from "@/constants/TEXT";
import {
  PATH_DOWN_MEMEBER_CULTURE_GRADE,
  PATH_DOWN_MEMBER_CULTURE_DETAILS
} from "@/constants/URL";
import { getDownMembersList, postReject } from "@/constants/API";
import { formatTime } from "@/utils/timeFormat";

export default {
  data() {
    return {
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
        highlevel_status: ""
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
        HIGHLV_STATUS
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
      this.selectedArr = s;
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
              this.$message({
                message: CONST_OPERATIONS_SUCCESS,
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
            message: CONST_OPERATIONS_SUCCESS,
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
      this.refreshData({ page: v, ...this.memberForm });
    },
    refreshData(data) {
      getDownMembersList(this.$route.params.id, data).then(res => {
        const { total, data, overview, evaluation_name, end_time } = res;
        this.total = total;
        this.tableData = data;
        this.evaluation_name = evaluation_name;
        this.end_time = end_time;
        this.postSummary(overview);
      });
    },
    goDetail(row) {
      this.$router.push(
        PATH_DOWN_MEMBER_CULTURE_DETAILS(this.$route.params.id, row.id)
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
    }
  },
  computed: {
    hasSelectedItem() {
      return this.selectedArr.length > 0;
    },
    notAllowedBatch() {
      return this.selectedArr.some(
        i =>
          i.stage != 50 ||
          (i.status == 100 || i.status == 30) ||
          (i.stage == 50 && formatTime(new Date()) >= i.highlevel_end_time)
      );
    }
  }
};
</script>
<style scoped>
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
</style>
