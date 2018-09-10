<template>
  <div class="my-grade-page">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="basic-info">
        <span class="label">{{constants.BASIC_INFO}}:</span>
        <span>
          <span class="greycolor">{{constants.EMPLOYEE_WORKCODE}}</span> / {{basicInfo.workcode}} &nbsp;&nbsp;
          <span class="greycolor">{{constants.EMPYEE_NAME}}</span> / {{basicInfo.name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <!-- <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span> -->
      </div>
      <br>
      <card class="card" :readOnly="!canEdit" :config="cardConfig" v-for="(v,i) of targets" :data="v" :index="i" v-model="targets[i].mark" :key="i"></card>
      <br>
      <div v-if="myAdditionMark.evaluation">
        <addition-mark :prefixTitle="constants.LABEL_SELF" :readOnly="true" :desc.sync="myAdditionMark.evaluation" :mark.sync="myAdditionMark.score"></addition-mark>
        <br>
      </div>
      <div v-if="hasLeaderAdditionMark">
        <addition-mark :readOnly="!canEdit" :prefixTitle="constants.LABEL_SUP" :desc.sync="leaderAdditionMark.evaluation" :mark.sync="leaderAdditionMark.score"></addition-mark>
        <br>
      </div>
      <comments :readOnly="!canEdit" :comments.sync="comments"></comments>
      <br>
      <total-mark :total="total"></total-mark>
      <br>
      <level :readOnly="shouldMapping||stage==60" v-model="level"></level>
      <br>
      <el-row v-if="canEdit" type="flex" justify="center">
        <el-button v-if="stage!=40" round size="medium" @click="saveDraft" class="btn-reset">{{constants.SAVE_DRAFT}}</el-button>
        <el-button round size="medium" @click="submit" type="primary">{{constants.SUBMIT}}</el-button>
      </el-row>
    </section>
  </div>
</template>
<script>
import {
  TEAM_GRADE,
  SUBMIT,
  SAVE_DRAFT,
  LABEL_SELF,
  LABEL_SUP,
  ERROR,
  CONST_ADD_SUCCESS,
  CONFIRM,
  CANCEL,
  ATTENTION,
  GRADE_DETAIL,
  GRADE_MANAGE,
  BASIC_INFO,
  EMPLOYEE_WORKCODE,
  EMPYEE_NAME,
  DRAFT_SAVE_SUCCESSFULLY
} from "@/constants/TEXT";
import {
  getEmployeeDetail,
  postUserPerformance,
  postUserPerformanceDraft
} from "@/constants/API";

import {
  PATH_EMPLOYY_TEAM_GRADE_DETAIL,
  PATH_EMPLOYEE_TEAM
} from "@/constants/URL";

export default {
  data() {
    return {
      myAdditionMark: {},
      leaderAdditionMark: {},
      comments: "",
      stage: 0,
      hasLeaderAdditionMark: false,
      rules: [],
      basicInfo: {},
      targets: [],
      level: "",
      cardConfig: {
        min: 0,
        max: 5,
        step: 0.1
      },
      nav: [
        {
          label: TEAM_GRADE,
          href: PATH_EMPLOYEE_TEAM
        },
        {
          label: GRADE_MANAGE,
          href: PATH_EMPLOYY_TEAM_GRADE_DETAIL(this.$route.params.gradeID)
        },
        {
          label: GRADE_DETAIL,
          active: true
        }
      ],
      constants: {
        SUBMIT,
        SAVE_DRAFT,
        LABEL_SELF,
        LABEL_SUP,
        BASIC_INFO,
        EMPLOYEE_WORKCODE,
        EMPYEE_NAME
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    card: () => import("@/components/modules/employee/gradeCard/index.vue"),
    "addition-mark": () =>
      import("@/components/modules/employee/additionalMark/index.vue"),
    "total-mark": () =>
      import("@/components/modules/employee/totalMark/index.vue"),
    comments: () =>
      import("@/components/modules/employee/leaderComments/index.vue"),
    level: () => import("@/components/modules/employee/finalLevel/index.vue")
  },
  computed: {
    total() {
      // sum(目标分数*权重) + 上级加减分
      return parseFloat(
        this.targets
          .map(v => v.weights * (v.mark || 0))
          .reduce((pre, next) => pre + next, 0) +
          (parseFloat(this.leaderAdditionMark.score) || 0)
      ).toFixed(2);
    },

    shouldMapping() {
      return this.rules && this.rules.length > 0;
    },
    canEdit() {
      return this.stage == 30 || this.stage == 40;
    }
  },
  methods: {
    normalizeTargets(arr) {
      return arr.map(v => {
        v.mark =
          (v.target_superior_score &&
            parseFloat(v.target_superior_score.score)) ||
          0;
        // delete v.target_superior_score
        return v;
      });
    },
    checkTotal() {
      return parseFloat(this.total) > 5;
    },
    saveDraft() {
      const postData = this.getPostData();

      return postUserPerformanceDraft(
        this.$route.params.gradeID,
        this.$route.params.uid,
        postData
      )
        .then(res => {
          this.$message({
            type: "success",
            message: DRAFT_SAVE_SUCCESSFULLY
          });
          this.getDetailInfo();
        })
        .catch(e => {});
    },
    getDetailInfo() {
      return getEmployeeDetail(
        this.$route.params.gradeID,
        this.$route.params.uid,
        "superior"
      )
        .then(res => {
          const {
            name,
            targets,
            workcode,
            self_attach_score,
            superior_attach_score,
            superior_score,
            need_attach_score,
            score_rule,
            stage,
            score_level
          } = res;

          this.basicInfo = {
            name,
            workcode,
            self_attach_score
          };
          this.targets = this.normalizeTargets(targets);

          this.myAdditionMark = self_attach_score || {};
          this.leaderAdditionMark = superior_attach_score || {};
          this.comments = superior_score && superior_score.evaluation;
          this.level =
            score_level || (superior_score && superior_score.score_level);
          this.hasLeaderAdditionMark = need_attach_score == 1;
          this.rules = score_rule;
          this.stage = stage;
        })
        .catch(e => {});
    },
    beforeSubmitCheck() {
      // 若模版选择了加减分，需要填写加减分理由，必填上限200
      // 自评分不能超过5分
      return new Promise((resolve, reject) => {
        if (
          this.hasLeaderAdditionMark &&
          this.leaderAdditionMark.score &&
          !this.leaderAdditionMark.evaluation
        ) {
          this.$notify.error({
            title: ERROR,
            message: "请填写加减分原因"
          });
          return reject(false);
        }
        if (this.checkTotal()) {
          this.$notify.error({
            title: ERROR,
            message: "总分已经超过5分"
          });
          return reject(false);
        }
        if (!this.shouldMapping && !this.level) {
          this.$notify.error({
            title: ERROR,
            message: "需要选择等级"
          });
          return reject(false);
        }
        if (!this.comments) {
          this.$notify.error({
            title: ERROR,
            message: "请填写评价"
          });
          return reject(false);
        }
        return resolve(true);
      });
    },
    submit() {
      return this.beforeSubmitCheck()
        .then(() => {
          return this.$confirm("请确认无误再提交, 是否继续?", ATTENTION, {
            confirmButtonText: CONFIRM,
            cancelButtonText: CANCEL,
            type: "warning"
          })
            .then(() => {
              const postData = this.getPostData();

              return postUserPerformance(this.$route.params.uid, postData)
                .then(res => {
                  this.$message({
                    type: "success",
                    message: CONST_ADD_SUCCESS
                  });
                  // this.getDetailInfo();
                  this.$router.replace(
                    PATH_EMPLOYY_TEAM_GRADE_DETAIL(this.$route.params.gradeID)
                  );
                })
                .catch(e => {});
            })
            .catch(() => {});
        })
        .catch(() => {});
    },
    findLevel() {
      let i = -1;
      for (let index = 0; index < this.rules.length; index++) {
        const element = parseFloat(this.rules[index]);
        if (element >= this.total) {
          i = index;
          break;
        }
      }
      let level = "S";
      if (i == -1) {
        return level;
      }
      const levelArr = ["D", "C", "B", "A"];
      level = levelArr[i] || level;
      return level;
    },
    getPostData() {
      return {
        score: this.targets.map(({ id, mark }) => ({
          target_id: id,
          score: mark
        })),
        attach_score: {
          score: this.leaderAdditionMark.score || 0,
          reason: this.leaderAdditionMark.evaluation || ""
        },
        total_score: this.total,
        score_level: this.level,
        evaluation: this.comments
      };
    }
  },
  created() {
    this.getDetailInfo();
  },
  watch: {
    targets: {
      handler: function() {
        if (this.shouldMapping && this.stage < 50) {
          this.level = this.findLevel();
        }
      },
      deep: true
    },
    leaderAdditionMark: {
      handler: function() {
        if (this.shouldMapping && this.stage < 50) {
          this.level = this.findLevel();
        }
      },
      deep: true
    }
  }
};
</script>
<style scoped>
.my-grade-page .card {
  margin-bottom: 20px;
}
.my-grade-page .basic-info {
  background: white;
  padding: 20px;
}
.my-grade-page .summary-section {
  background: white;
  padding: 20px 20px 20px 0;
}
.my-grade-page .summary-section >>> .el-step__icon.is-text {
  border: none;
}
.my-grade-page .summary-section >>> .el-step__icon {
  width: 56px;
}
.my-grade-page .label {
  margin-right: 20px;
  color: #778294;
  width: 100px;
  min-width: 100px;
  height: 26px;
  box-sizing: border-box;
  line-height: 26px;
  padding: 0 10px;
}
.my-grade-page .label.title {
  background-color: #52ddab;
  color: white;
  border-radius: 0 13px 13px 0;
}
.my-grade-page .tip {
  color: #ea7754;
}
.my-grade-page .greycolor {
  color: #778294;
}

.my-grade-page .inner-container {
  display: flex;
  color: grey;
}
</style>
