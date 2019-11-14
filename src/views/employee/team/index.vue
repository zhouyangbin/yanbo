<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="progress-header" align="center">
      <el-row>
        <el-col :span="12" :offset="6">
          <p>{{ name }}</p>
        </el-col>
        <el-col :span="6">
          <el-button
            :disabled="!Allsubmit_action"
            type="primary"
            @click="Allsubmit_step1"
            >整体提交</el-button
          >
          <el-popover placement="bottom" width="270" trigger="click">
            <p>提交记录</p>
            <template>
              <el-table :data="reviewData" height="250">
                <el-table-column
                  width="100"
                  property="created_at"
                  label="日期"
                ></el-table-column>
                <el-table-column
                  width="100"
                  property="name"
                  label="姓名"
                ></el-table-column>
                <el-table-column
                  width="80"
                  property="type_text"
                  label="状态"
                ></el-table-column>
              </el-table>
            </template>
            <el-button style="margin-left:10px" slot="reference"
              >查看审批记录</el-button
            >
          </el-popover>
        </el-col>
      </el-row>
      <el-row v-if="reject_msg" class="overview_tip_color">
        <el-col :span="2" align="center">
          <p>上级意见:</p>
        </el-col>
        <el-col :span="22" align="left">
          <p>{{ reject_msg }}</p>
        </el-col>
      </el-row>
    </section>
    <section class="content-container">
      <team-tabel :overview="overview"></team-tabel>
      <section class="progress-header">
        <el-row :gutter="20" class="table-title">
          <el-col class="table-title-desc" :span="2.5">考核人员明细</el-col>
          <el-col class="table-title-num" :span="15">共{{ total }}人</el-col>
        </el-row>
        <el-form :inline="true" :model="filterForm" ref="filterForm">
          <el-form-item prop="name">
            <el-input
              placeholder="请输入姓名"
              v-model="filterForm.name"
            ></el-input>
          </el-form-item>
          <el-form-item prop="status">
            <el-select v-model="filterForm.status" placeholder="请选择状态">
              <el-option
                v-for="v of constants.ENUM_PERFORMANCE_FINISH"
                :key="v.key"
                :label="v.value"
                :value="v.key"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-button @click="resetForm('filterForm')">{{
            constants.LABEL_EMPTY
          }}</el-button>
        </el-form>
      </section>
      <section style="min-height:400px">
        <el-row type="flex" :gutter="20" align="top">
          <el-col>
            <el-table
              :data="tableData"
              stripe
              style="width: 100%"
              :header-cell-style="{ background: '#eef1f6' }"
            >
              <el-table-column prop="workcode" label="工号"></el-table-column>
              <el-table-column prop="name" :label="constants.LABEL_NAME">
                <template slot-scope="scope">
                  <el-row type="flex" align="middle">
                    <span>{{ scope.row.name }}</span>
                    <span class="appeal-tag" v-if="scope.row.has_appeal">
                      {{ constants.APPEAL }}
                    </span>
                  </el-row>
                </template>
              </el-table-column>
              <el-table-column prop="hr_name" label="HRBP"></el-table-column>
              <el-table-column
                prop="high_level_name"
                label="隔级"
              ></el-table-column>
              <el-table-column
                prop="self_score"
                label="自评分"
              ></el-table-column>
              <el-table-column
                prop="superior_score"
                label="上级评分"
              ></el-table-column>
              <el-table-column
                prop="score_level"
                label="绩效等级"
              ></el-table-column>
              <el-table-column label="标签分布" align="center">
                <template slot-scope="scope">
                  <el-tag
                    v-if="
                      scope.row.score_level == 'A' ||
                        scope.row.score_level == 'S'
                    "
                    class="status-tag top-style"
                  >
                    <span class="top-style-text">{{
                      scope.row.label_name
                    }}</span>
                  </el-tag>
                  <el-tag
                    v-if="scope.row.score_level == 'B'"
                    class="status-tag bplus-style"
                  >
                    <span class="bplus-style-text">{{
                      scope.row.label_name
                    }}</span>
                  </el-tag>
                  <el-tag
                    v-if="scope.row.score_level == 'C'"
                    class="status-tag other-style"
                  >
                    <span class="other-style-text">{{
                      scope.row.label_name
                    }}</span>
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="stage_status" label="状态" align="center">
              </el-table-column>
              <el-table-column prop="ops" label="操作">
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row.operate_status == 1"
                    @click="goDetail(scope.row)"
                    type="text"
                    size="small"
                    >详情</el-button
                  >
                  <el-button
                    v-if="scope.row.operate_status == 2"
                    @click="goDetail(scope.row)"
                    type="text"
                    size="small"
                    >评分</el-button
                  >
                  <el-button
                    v-if="scope.row.operate_status == 3"
                    @click="goDetail(scope.row)"
                    type="text"
                    size="small"
                    >修改评分</el-button
                  >
                  <el-button
                    v-if="scope.row.operate_status == 4"
                    @click="goDetail(scope.row)"
                    type="text"
                    size="small"
                    >处理申诉</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <br />
            <el-row type="flex" justify="end">
              <pagination
                @current-change="handleCurrentChange"
                :currentPage="currentPage"
                :total="total"
              ></pagination>
            </el-row>
          </el-col>
        </el-row>
      </section>
    </section>
  </div>
</template>
<script>
import {
  TEAM_GRADE,
  DETAILS,
  SELF_EVALUATION,
  LABEL_NAME,
  LABEL_SUP,
  OPERATIONS,
  APPEAL,
  LABEL_EMPTY,
  GRADE_MANAGE,
  PLS_SELECT,
  ENUM_PERFORMANCE_FINISH
} from "@/constants/TEXT";
import {
  PATH_EMPLOYEE_TEAM_MEMEBER,
  PATH_EMPLOYEE_TEAM
} from "@/constants/URL";
import { AsyncComp } from "@/utils/asyncCom";
import {
  getTeamList,
  highLevelAllSubmit,
  highLevelReview
} from "@/constants/API";

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      filterForm: {
        status: "",
        name: ""
      },
      overview: [],
      nav: [
        {
          label: TEAM_GRADE,
          href: PATH_EMPLOYEE_TEAM
        },
        {
          label: GRADE_MANAGE,
          active: true
        }
      ],
      tableData: [],
      constants: {
        DETAILS,
        SELF_EVALUATION,
        LABEL_NAME,
        LABEL_SUP,
        OPERATIONS,
        APPEAL,
        LABEL_EMPTY,
        PLS_SELECT,
        ENUM_PERFORMANCE_FINISH
      },
      name: "",
      Allsubmit_action: false,
      reject_msg: "",
      content: "",
      reviewData: []
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "team-tabel": AsyncComp(
      import("@/components/modules/employee/teamTabel/index.vue")
    ),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  created() {
    this.reviewList();
  },
  methods: {
    getUserInfo(data) {
      let users = [];
      data.map(item => {
        users.push(
          item.name + "(" + item.score_level + " " + item.superior_score + ")"
        );
      });
      return users.join(",") ? users.join(",") : "--";
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goDetail(row) {
      this.$router.push(
        PATH_EMPLOYEE_TEAM_MEMEBER(this.$route.params.id, row.id)
      );
    },
    refreshList(data) {
      return getTeamList(this.$route.params.id, data)
        .then(res => {
          const { user, overview, performanceInfo } = res;
          this.tableData = user.data || [];
          this.total = user.total || [];
          this.overview = overview || [];
          this.name = performanceInfo.name || "";
          this.Allsubmit_action = performanceInfo.submit;
          this.reject_msg = performanceInfo.reject_msg;
        })
        .catch(e => {});
    },
    reviewList() {
      return highLevelReview(this.$route.params.id)
        .then(res => {
          //const { user, overview, performanceInfo } = res;
          this.reviewData = res;
        })
        .catch(e => {});
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList({
        page: val,
        name: this.filterForm.name,
        stage: this.filterForm.status
      });
    },
    Allsubmit_step1() {
      const h = this.$createElement;
      this.$confirm(
        "您已评完完成所有直属下级的评分, 请整体检查分布情况，并提交至隔级审核 ",
        "提示",
        {
          confirmButtonText: "提交",
          callback: action => {
            if (action == "cancel") {
              return false;
            }
            let overview = this.overview;
            let top_Diff = overview[0].expected - overview[0].count,
              b_plus_diff =
                overview[1].child[0].expected - overview[1].child[0].count,
              b_diff =
                overview[1].child[1].expected - overview[1].child[1].count,
              b_minus_diff =
                overview[2].child[0].count - overview[2].child[0].expected,
              cd_diff =
                overview[2].child[1].count - overview[2].child[1].expected;
            if (
              top_Diff >= 0 &&
              b_plus_diff >= 0 &&
              b_diff >= 0 &&
              b_minus_diff >= 0 &&
              cd_diff >= 0
            ) {
              //可以直接提交
              this.Allsubmit_step3();
            } else {
              let tip_html = `<p>不符合标签分布要求，如继续提交，将处罚邮件至一级部门负责人和HRBP，是否确认继续</p>\
                       <p>分布结果检查 :</p>\
                       <p style='${
                         top_Diff >= 0 ? "display:none" : null
                       }'> <span style='color: #EB0C00;margin-left:90px'>\
                        ${overview[0].name}总人数超出${Math.abs(
                top_Diff
              )}人</span></p>\
                       <p style='${
                         b_plus_diff >= 0 ? "display:none" : null
                       }'> <span style='color: #EB0C00;margin-left:90px'>\
                         ${overview[1].child[0].name}总人数超出${Math.abs(
                b_plus_diff
              )}人</span></p>\
                       <p style='${
                         b_diff >= 0 ? "display:none" : null
                       }'> <span style='color: #EB0C00;margin-left:90px'>\
                        ${overview[1].child[1].name}总人数超出${Math.abs(
                b_diff
              )}人</span></p>\
                       <p style='${
                         b_minus_diff >= 0 ? "display:none" : null
                       }'> <span style='color: #EB0C00;margin-left:90px'>\
                        ${overview[2].child[0].name}总人数超出${Math.abs(
                b_minus_diff
              )}人</span></p>\
                       <p style='${
                         cd_diff >= 0 ? "display:none" : null
                       }'> <span style='color: #EB0C00;margin-left:90px'>\
                        ${overview[2].child[1].name}总人数超出${Math.abs(
                cd_diff
              )}人</span></p>`;
              this.Allsubmit_step2(tip_html);
            }
          },
          cancelButtonText: "暂不提交"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {});
    },
    Allsubmit_step2(tip_html) {
      let taht = this;
      this.$prompt(tip_html, "提示", {
        dangerouslyUseHTMLString: true,
        confirmButtonText: "提交",
        inputPlaceholder: "请输入理由",
        cancelButtonText: "暂不提交"
      })
        .then(({ value }) => {
          //console.log(value);
          this.Allsubmit_send(value);
        })
        .catch(() => {});
    },
    Allsubmit_step3() {
      const h = this.$createElement;
      this.$confirm(
        "<p>是否确认提交至隔级审核</p>\
                        <p>分布结果检查 : <span style='color: #EB0C00'> 全部符合23221分布比例要求</span></p>",
        "提示",
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: "提交",
          callback: action => {
            //console.log(123);
          },
          cancelButtonText: "暂不提交"
        }
      )
        .then(() => {
          this.Allsubmit_send();
        })
        .catch(() => {});
    },
    Allsubmit_send(input_content) {
      let data = {
        content: input_content
      };
      return highLevelAllSubmit(this.$route.params.id, data)
        .then(res => {
          this.$message({
            message: res,
            type: "success"
          });
        })
        .catch(e => {});
    }
  },
  computed: {},
  watch: {
    filterForm: {
      handler: function(v) {
        const postData = {
          name: v.name,
          stage: v.status,
          page: 1
        };
        this.refreshList(postData);
        this.currentPage = 1;
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped>
.progress-header {
  background-color: white;
  padding: 20px 10px 10px 10px;
}
.table-title {
  line-height: 40px;
}
.table-title-desc {
  font-weight: 500;
  color: #303133;
  font-size: 16px;
}
.table-title-num {
  font-size: 14px;
  line-height: 40px;
  color: #909399;
}
.appeal-tag {
  width: 32px;
  height: 18px;
  text-align: center;
  background: rgba(244, 63, 2, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: rgba(244, 63, 2, 1);
  font-size: 12px;
  position: absolute;
  top: 10px;
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
.team-pie {
  position: absolute;
  top: 0;
}
.status-tag {
  width: ;
  height: 28px;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  border-radius: 4px;
  border: none;
  font-weight: 500;
}
.top-style {
  background: rgba(0, 140, 36, 0.1);
  color: rgba(0, 177, 45, 1) !important;
}
.bplus-style {
  background: rgba(255, 160, 77, 0.1);
  color: rgba(255, 104, 0, 1);
}
.other-style {
  background: rgba(213, 217, 226, 0.1);
  color: rgba(92, 108, 139, 1);
}
.overview_tip_color {
  color: #eb0c00;
}
</style>
