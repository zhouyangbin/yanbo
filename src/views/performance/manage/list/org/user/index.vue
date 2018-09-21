<template>
  <div class="user-detail-page">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="basic-info">
        <span class="label">{{constants.BASIC_INFO}}:</span>
        <span>
          <!-- <span class="greycolor">上级工号</span> / 00002 &nbsp;&nbsp; -->
          <span class="greycolor">{{constants.LEADER_NAME}}</span> / {{basicInfo.leaderName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span>
      </div>
      <br>
      <card :readOnly="true" class="card" :index="i" :data="v" v-for="(v,i) of targets" :key="i"></card>
      <br>
      <div v-if="myAdditionMark.evaluation">
        <addition-mark :prefixTitle="constants.LABEL_SELF" :readOnly="true" :desc.sync="myAdditionMark.evaluation" :mark.sync="myAdditionMark.score"></addition-mark>
        <br>
      </div>
      <div v-if="leaderAdditionMark.evaluation">
        <addition-mark :prefixTitle="constants.LABEL_SUP" :readOnly="true" :desc.sync="leaderAdditionMark.evaluation" :mark.sync="leaderAdditionMark.score"></addition-mark>
        <br>
      </div>
      <div v-if="progressArr.length>1" class="summary-section">
        <div class="inner-container">
          <span class="label">进度:</span>
          <el-steps style="width:60%" :active="progressArr.length">
            <el-step v-for="(v,i) of progressArr" :key="i">
              <div slot="icon">{{v.text}}</div>
              <div slot="title">{{v.value}}</div>
            </el-step>
          </el-steps>
        </div>
        <div v-if="appeal.reason">
          <br>
          <div class="inner-container">
            <span class="label">申诉理由:</span>
            <span>{{appeal.reason}}</span>
          </div>
          <br>
        </div>
        <div v-if="total" class="inner-container">
          <span class="label">评分结果:</span>
          <span> {{total}} </span>
        </div>
        <div class="inner-container">
          <span class="label"></span>
          <el-steps style="width:60%" :active="resultArr.length">
            <el-step v-for="(v,i) of resultArr" :key="i">
              <div slot="icon">{{v.text}}</div>
              <div slot="title">{{v.value}}</div>
            </el-step>
          </el-steps>
        </div>
      </div>
      <br>
      <br>
      <el-row v-if="canEdit" type="flex" justify="center">
        <el-button round size="medium" @click="changeMarks" class="btn-reset">{{constants.LABEL_MODIFY}}</el-button>
        <el-button round size="medium" @click="submit" type="primary">确认结果</el-button>
      </el-row>
    </section>
    <change-mark @close="afterChangeGrade" v-if="showChangeMarkDia" :mark="total" :visible.sync="showChangeMarkDia"></change-mark>
  </div>
</template>
<script>
import {
  EMPLOYEE_DETAIL,
  LABEL_MODIFY,
  LEADER_NAME,
  LABEL_SELF,
  LABEL_SUP,
  CONFIRM,
  CANCEL,
  APPEAL,
  ATTENTION,
  GRADE_MANAGE,
  GRADE_PROGRESS,
  ORG_DETAIL,
  BASIC_INFO
} from "@/constants/TEXT";
import {
  getPerformanceUserDetail,
  changePerformanceGrade
} from "@/constants/API";
import {
  PATH_PERFORMANCE_MANAGER,
  PATH_PERFORMANCE_PROGRESS,
  PATH_PERFORMANCE_ORG_LIST
} from "@/constants/URL";

export default {
  data() {
    return {
      basicInfo: {},
      total: "",
      targets: [],
      myAdditionMark: {},
      leaderAdditionMark: {},
      appeal: {},
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_PERFORMANCE_MANAGER
        },
        {
          label: GRADE_PROGRESS,
          href: PATH_PERFORMANCE_PROGRESS(this.$route.params.id)
        },
        {
          label: ORG_DETAIL,
          href: PATH_PERFORMANCE_ORG_LIST(
            this.$route.params.id,
            this.$route.params.orgID
          )
        },
        {
          label: EMPLOYEE_DETAIL,
          active: true
        }
      ],
      resultArr: [],
      progressArr: [],
      canEdit: false,
      showChangeMarkDia: false,
      constants: {
        LABEL_MODIFY,
        LEADER_NAME,
        LABEL_SELF,
        LABEL_SUP,
        BASIC_INFO
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    card: () => import("@/components/modules/employee/gradeCard/index.vue"),
    "addition-mark": () =>
      import("@/components/modules/employee/additionalMark/index.vue"),
    "change-mark": () =>
      import("@/components/modules/performance/ChangeGrade/index.vue")
  },
  methods: {
    changeMarks() {
      this.showChangeMarkDia = true;
    },
    afterChangeGrade() {
      this.getInfo();
    },
    submit() {
      this.$confirm(
        "请确认无误再提交，一经提交无法修改, 是否继续?",
        ATTENTION,
        {
          confirmButtonText: CONFIRM,
          cancelButtonText: CANCEL,
          type: "warning"
        }
      )
        .then(() => {
          const postData = {
            action: 1
          };
          changePerformanceGrade(
            this.$route.params.orgID,
            this.$route.params.uid,
            postData
          )
            .then(res => {
              this.getInfo();
            })
            .catch(e => {});
        })
        .catch(() => {});
    },
    composeResultArr(self_score, superior_score, appeal) {
      this.resultArr = [];
      if (self_score && self_score.score != null) {
        this.resultArr.push({
          text: LABEL_SELF,
          value: self_score.score
        });
      }
      if (superior_score && superior_score.score_level) {
        this.resultArr.push({
          text: LABEL_SUP,
          value: superior_score.score_level
        });
      }
      if (appeal && appeal.hr_score_level) {
        this.resultArr.push({
          text: appeal.action == 1 ? "BP确认" : "BP修改",
          value: appeal.hr_score_level
        });
      }
    },
    composeProgressArr(
      target_time,
      self_time,
      superior_time,
      appeal_time,
      end_time
    ) {
      this.progressArr = [];
      if (target_time) {
        this.progressArr.push({
          text: "目标导入",
          value: target_time
        });
      }

      if (self_time) {
        this.progressArr.push({
          text: LABEL_SELF,
          value: self_time
        });
      }

      if (superior_time) {
        this.progressArr.push({
          text: LABEL_SUP,
          value: superior_time
        });
      }
      if (appeal_time) {
        this.progressArr.push({
          text: APPEAL,
          value: appeal_time
        });
      }
      if (end_time) {
        this.progressArr.push({
          text: "结束",
          value: end_time
        });
      }
    },
    getInfo() {
      return getPerformanceUserDetail(
        this.$route.params.orgID,
        this.$route.params.uid
      )
        .then(res => {
          // console.log(res)
          const {
            superior_name,
            targets,
            self_attach_score,
            superior_attach_score,
            superior_score,
            appeal,
            self_score,
            target_time,
            self_time,
            superior_time,
            appeal_time,
            end_time,
            can_edit,
            score_level
          } = res;
          this.basicInfo = {
            leaderName: superior_name
          };

          this.total = score_level;
          this.composeResultArr(self_score, superior_score, appeal);
          this.composeProgressArr(
            target_time,
            self_time,
            superior_time,
            appeal_time,
            end_time
          );
          this.targets = targets;
          this.myAdditionMark = self_attach_score || {};
          this.leaderAdditionMark = superior_attach_score || {};
          this.appeal = appeal || {};
          this.canEdit = can_edit == 1;
        })
        .catch(e => {
          // console.log(e)
        });
    }
  },
  created() {
    this.getInfo();
  }
};
</script>
<style scoped>
.user-detail-page .card {
  margin-bottom: 20px;
}
.user-detail-page .basic-info {
  background: white;
  padding: 20px;
}
.user-detail-page .summary-section {
  background: white;
  padding: 20px 20px 20px 0;
}
.user-detail-page .summary-section >>> .el-step__icon.is-text {
  border: none;
}
.user-detail-page .summary-section >>> .el-step__icon {
  width: auto;
}
.user-detail-page .label {
  margin-right: 20px;
  color: #778294;
  width: 100px;
  min-width: 100px;
  height: 26px;
  box-sizing: border-box;
  line-height: 26px;
  padding: 0 10px;
}
.user-detail-page .label.title {
  background-color: #52ddab;
  color: white;
  border-radius: 0 13px 13px 0;
}
.user-detail-page .tip {
  color: #ea7754;
}
.user-detail-page .greycolor {
  color: #778294;
}

.user-detail-page .inner-container {
  display: flex;
  color: grey;
}
</style>
