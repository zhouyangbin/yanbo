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
        <el-col align="center" :span="6">
          <el-button
            :disabled="!Allsubmit_action"
            type="primary"
            @click="Allsubmit_step1"
            >同意</el-button
          >
          <el-popover placement="bottom" width="488" trigger="click">
            <p>提交记录</p>
            <template>
              <el-table :data="reviewData" height="400">
                <el-table-column
                  width="150"
                  property="created_at"
                  label="日期"
                ></el-table-column>
                <el-table-column
                  width="238"
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
            <el-button style="margin-left:10px" slot="reference" @click="hight_level_team_reviewList()"
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
          <el-form-item prop="tags">
            <el-select v-model="filterForm.tags" placeholder="请选择标签">
              <el-option
                v-for="v of ENUM_PERFORMANCE_TAGS"
                :key="v.id"
                :label="v.name"
                :value="v.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-button @click="resetForm('filterForm')">{{
            constants.LABEL_EMPTY
          }}</el-button>
        </el-form>
      </section>
      <high-level-list
      :list_data="tableData"
      :department_id="department_id"
      @get_workcode="get_workcode"
      :total="total"
      :team_overview="team_overview"
      >
      </high-level-list>
      <br/>
       <pagination
      @current-change="handleCurrentChange"
      :currentPage="currentPage"
      :total="total"
      ></pagination>
      <br/>
    </section>
    <!-- </section> -->
  </div>
</template>
<script>
import {
  LEVEL_TEAM_GRADE,
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
  PATH_EMPLOYEE_LEVEL_TEAM,
  PATH_EMPLOYEE_TEAM_MEMEBER
} from "@/constants/URL";
import { AsyncComp } from "@/utils/asyncCom";
import {
  getLevelTeamList,
  highLevelteamAllsure,
  highLevelTeamReview,
  getLevelTeamReview,
  getLevelTags
} from "@/constants/API";

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      filterForm: {
        status: "",
        name: "",
        tags: "",
      },
      overview: [],
      nav: [
        {
          label: LEVEL_TEAM_GRADE,
          href: PATH_EMPLOYEE_LEVEL_TEAM
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
      ENUM_PERFORMANCE_TAGS: [],
      name: "",
      department: "",
      Allsubmit_action: false,
      reject_msg: "",
      content: "",
      reviewData: [],
      tab_check:1,
      department_id:this.$route.params.id,
      team_overview:[],//团队的评分判断
      workcode:'',//隔级团队workcode
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "team-tabel": AsyncComp(
      import("@/components/modules/employee/teamTabel/index.vue")
    ),
    "high-level-list": AsyncComp(
      import("@/components/modules/employee/highLevelList/index.vue")
    ),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  created() {
    this.overReviewList();
    this.get_LevelTags();
    this.refreshList({
        page: this.currentPage,
        name: this.filterForm.name,
        stage: this.filterForm.status,
        label_id: this.filterForm.tags,
      });
  },
  methods: {
    get_workcode(workcode){
      this.currentPage = 1;
      this.workcode = workcode;
      this.refreshList({
        page: this.currentPage,
        name: this.filterForm.name,
        stage: this.filterForm.status,
        label_id: this.filterForm.tags,
        workcode: this.workcode
      });
    },
    get_LevelTags(){//根据隔级获取标签
      return getLevelTags(1)
        .then(res => {
          // console.log(res);
          this.ENUM_PERFORMANCE_TAGS = res;
        })
        .catch(e => {

        })
      //this.reviewList();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goDetail(row) {   //跳转到详情
      this.$router.push(
        PATH_EMPLOYEE_TEAM_MEMEBER(this.$route.params.id, row.id)
      );
    },
    refreshList(data) {//请求tabel 列表
      return getLevelTeamList(this.$route.params.id, data)
        .then(res => {
          const { overview, list } = res;
          this.tableData = list.data || [];
          this.total = list.total;
          this.team_overview = overview;
          performanceInfo.submit ? this.Allsubmit_step_load() : null;
        })
        .catch(e => {});
    },
    overReviewList(data) {//请求 分布汇总
      return getLevelTeamReview(this.$route.params.id, data)
        .then(res => {
          const { overview, performanceInfo } = res;
          this.overview = overview || [];
          this.name = performanceInfo.name || "";
          this.department = performanceInfo.department || "";
          this.Allsubmit_action = performanceInfo.submit;
          this.reject_msg = performanceInfo.reject_msg;
          //performanceInfo.submit ? this.Allsubmit_step_load() : null;
        })
        .catch(e => {});
    },
    hight_level_team_reviewList() {//请求。审批记录
      return highLevelTeamReview(this.$route.params.id)
        .then(res => {
          this.reviewData = res;
        })
        .catch(e => {});
    },
    handleCurrentChange(val) {//切换上下页
      this.currentPage = val;
      this.refreshList({
        page: val,
        name: this.filterForm.name,
        stage: this.filterForm.status,
        label_id: this.filterForm.tags,
      });
    },
    Allsubmit_step_load() {//页面进来调用方法
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
    Allsubmit_step1() {//判断隔级同意到走到哪一步
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
                                          ${overview[0].name}总人数超出${Math.abs(
                            top_Diff
                          )}人</span></p>\
                                         <p style='${
                                           b_plus_diff >= 0 ? "display:none" : null
                                         }'> <span style='color: #EB0C00;'>\
                                           ${overview[1].child[0].name}总人数超出${Math.abs(
                            b_plus_diff
                          )}人</span></p>\
                                         <p style='${
                                           b_diff >= 0 ? "display:none" : null
                                         }'> <span style='color: #EB0C00;'>\
                                          ${overview[1].child[1].name}总人数超出${Math.abs(
                            b_diff
                          )}人</span></p>\
                                         <p style='${
                                           b_minus_diff >= 0 ? "display:none" : null
                                         }'> <span style='color: #EB0C00;'>\
                                          ${overview[2].child[0].name}总人数缺少${Math.abs(
                            b_minus_diff
                          )}人</span></p>\
                                         <p style='${
                                           cd_diff >= 0 ? "display:none" : null
                                         }'> <span style='color: #EB0C00;'>\
                                          ${overview[2].child[1].name}总人数缺少${Math.abs(
                            cd_diff
                          )}人</span></p>\
                        </div>\
                        </div>`;
        this.Allsubmit_step2(tip_html);
      }
    },
    Allsubmit_step2(tip_html) {//隔级同意要输入理由
      this.$prompt(tip_html, "提示", {
        dangerouslyUseHTMLString: true,
        confirmButtonText: "提交",
        inputPlaceholder: "请输入理由",
        cancelButtonText: "暂不提交",
        inputPattern: /\S/,//判断是否为空
        inputErrorMessage: '提交理由不能为空'
      })
        .then(({ value }) => {
          this.Allsubmit_send(value);
      })
      .catch(() => {});
    },
    Allsubmit_step3() {//可以直接 隔级同意
      this.$prompt(
        "<p>是否同意提交本次隔级评分</p>\
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
    Allsubmit_send(input_content) {//发送隔级同意
      let that = this;
      let data = {
        content: input_content
      };
      // console.log(123)
      return highLevelteamAllsure(this.$route.params.id, data)
        .then(res => {
          let postData = {
            page: this.currentPage,
            name: this.filterForm.name,
            stage: this.filterForm.status,
          };
          this.refreshList(postData); //再次请求接口
        })
        .catch(e => {});
    },
  },
  computed: {},
  watch: {
    filterForm: {
      handler: function(v) {
        const postData = {
          name: v.name,
          stage: v.status,
          label_id: v.tags,
          page: 1
        };
        this.refreshList(postData);
        this.currentPage = 1;
      },
      deep: true,
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
.top-style {
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
