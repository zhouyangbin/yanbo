<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="progress-header">
      <el-row justify="center">
        <el-col align="center" :span="12" :offset="6">
          <span class="text_22_blod">{{ name }}</span
          ><br />
          <span class="text_16">{{ department }}</span>
        </el-col>
        <el-col :span="6">
          <el-button
            :disabled="!Allsubmit_action"
            type="primary"
            @click="Allsubmit_step1"
            >整体提交</el-button
          >
          <el-popover placement="bottom" width="370" trigger="click">
            <p>提交记录</p>
            <template>
              <el-table :data="reviewData" height="250">
                <el-table-column
                  width="170"
                  property="created_at"
                  label="日期"
                ></el-table-column>
                <el-table-column
                  width="100"
                  property="name"
                  label="姓名"
                ></el-table-column>
                <el-table-column
                  width="100"
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
          <p style="word-break: break-all;">{{ reject_msg }}</p>
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
      <senior-list :list_data="tableData"> </senior-list>
      <pagination
        :currentPage="currentPage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :total="total"
        :pageSize="perPage"
      ></pagination>
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
      department: "",
      Allsubmit_action: false,
      reject_msg: "",
      content: "",
      reviewData: [],
      perPage: 10
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "team-tabel": AsyncComp(
      import("@/components/modules/employee/teamTabel/index.vue")
    ),
    "senior-list": AsyncComp(
      import("@/components/modules/employee/seniorList/index.vue")
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
      data["perPage"] = this.perPage;
      return getTeamList(this.$route.params.id, data)
        .then(res => {
          const { user, overview, performanceInfo } = res;
          this.tableData = user.data || [];
          this.total = user.total;
          this.overview = overview || [];
          this.name = performanceInfo.name || "";
          this.department = performanceInfo.department || "";
          this.Allsubmit_action = performanceInfo.submit;
          this.reject_msg = performanceInfo.reject_msg;
          performanceInfo.submit ? this.Allsubmit_step_load() : null;
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
    handleSizeChange(val) {
      //切换条数
      this.perPage = val;
      this.currentPage = 1;
      this.refreshList({
        page: this.currentPage,
        name: this.filterForm.name,
        stage: this.filterForm.status
      });
    },
    Allsubmit_step_load() {
      //页面进来调用方法
      const h = this.$createElement;
      this.$confirm(
        "您已评完所有直属下级的评分, 请整体检查分布情况，并提交至隔级审核 ",
        "提示",
        {
          confirmButtonText: "提交",

          cancelButtonText: "暂不提交"
        }
      )
        .then(() => {
          setTimeout(() => {
            this.Allsubmit_step1();
          }, 500);
        })
        .catch(() => {});
    },
    Allsubmit_step1() {
      //判断整体提交到走到哪一步
      let overview = this.overview;
      let top_Diff = overview[0].expected - overview[0].count,
        b_plus_diff =
          overview[1].child[0].expected - overview[1].child[0].count,
        b_diff = overview[1].child[1].expected - overview[1].child[1].count,
        b_minus_diff =
          overview[2].child[0].count - overview[2].child[0].expected,
        cd_diff = overview[2].child[1].count - overview[2].child[1].expected;
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
        let tip_html = `<p>不符合标签分布要求，是否确认继续提交？</p>\
                      <div style='display:flex'>
                        <div style='width:100px;'>分布结果检查 :</div>\
                         <div style='width:300px;'>\
                            <p style='${
                              top_Diff >= 0 ? "display:none" : null
                            }'> <span style='color: #EB0C00;'>\
                                            ${
                                              overview[0].name
                                            }总人数超出${Math.abs(
          top_Diff
        )}人</span></p>\
                                           <p style='${
                                             b_plus_diff >= 0
                                               ? "display:none"
                                               : null
                                           }'> <span style='color: #EB0C00;'>\
                                             ${
                                               overview[1].child[0].name
                                             }总人数超出${Math.abs(
          b_plus_diff
        )}人</span></p>\
                                           <p style='${
                                             b_diff >= 0 ? "display:none" : null
                                           }'> <span style='color: #EB0C00;'>\
                                            ${
                                              overview[1].child[1].name
                                            }总人数超出${Math.abs(
          b_diff
        )}人</span></p>\
                                           <p style='${
                                             b_minus_diff >= 0
                                               ? "display:none"
                                               : null
                                           }'> <span style='color: #EB0C00;'>\
                                            ${
                                              overview[2].child[0].name
                                            }总人数缺少${Math.abs(
          b_minus_diff
        )}人</span></p>\
                                           <p style='${
                                             cd_diff >= 0
                                               ? "display:none"
                                               : null
                                           }'> <span style='color: #EB0C00;'>\
                                            ${
                                              overview[2].child[1].name
                                            }总人数缺少${Math.abs(
          cd_diff
        )}人</span></p>\
                          </div>\
                      </div>`;
        this.Allsubmit_step2(tip_html);
      }
    },
    Allsubmit_step2(tip_html) {
      this.$prompt(tip_html, "提示", {
        dangerouslyUseHTMLString: true,
        confirmButtonText: "提交",
        inputPlaceholder: "请输入理由",
        cancelButtonText: "暂不提交",
        inputPattern: /\S/, //判断是否为空
        inputErrorMessage: "提交理由不能为空"
      })
        .then(({ value }) => {
          this.Allsubmit_send(value);
        })
        .catch(() => {});
    },
    Allsubmit_step3() {
      this.$prompt(
        "<p>是否确认提交至隔级审核</p>\
         <p>分布结果检查 : <span style='color: #EB0C00'> 全部符合23221分布比例要求</span></p>",
        "提示",
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: "提交",
          cancelButtonText: "暂不提交"
        }
      )
        .then(({ value }) => {
          this.Allsubmit_send(value);
        })
        .catch(() => {});
    },
    Allsubmit_send(input_content) {
      let that = this;
      let data = {
        content: input_content
      };
      return highLevelAllSubmit(this.$route.params.id, data)
        .then(res => {
          let postData = {
            page: this.currentPage,
            name: this.filterForm.name,
            stage: this.filterForm.status
          };
          this.refreshList(postData); //再次请求接口
          this.reviewList(); //再次请求接口
          this.$message({
            message: "提交成功",
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
<<<<<<< head .status-tag {
  /* width: ; */
  height: 28px;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  border-radius: 4px;
  border: none;
  font-weight: 500;
}
=======>>>>>>>897d9c9182ce7de87e4d1691d24cf9d083f87106 .top-style {
  background: #e8f5eb;
  color: rgba(0, 177, 45, 1) !important;
}
.bplus-style {
  background: #fff0e3;
  color: rgba(255, 104, 0, 1);
}
.other-style {
  background: #f1f2f5;
  color: rgba(92, 108, 139, 1);
}
.overview_tip_color {
  color: #eb0c00;
}
.text_22_blod {
  font-size: 18px;
}
.text_16 {
  font-size: 16px;
}
</style>
