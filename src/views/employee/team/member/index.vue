<template>
  <div class="my-grade-page">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="basic-info">
        <span class="label">基本信息:</span>
        <span>
          <span class="greycolor">员工工号</span> / {{basicInfo.workcode}} &nbsp;&nbsp;
          <span class="greycolor">员工姓名</span> / {{basicInfo.name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <!-- <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span> -->
      </div>
      <br>
      <card class="card" :config="cardConfig" v-for="(v,i) of targets" :data="v" :index="i" v-model="targets[i].mark" :key="i"></card>
      <br>
      <div v-if="myAdditionMark.evaluation">
        <addition-mark :prefixTitle="constants.LABEL_SELF" :readOnly="true" :desc.sync="myAdditionMark.evaluation" :mark.sync="myAdditionMark.score"></addition-mark>
        <br>
      </div>
      <div v-if="hasLeaderAdditionMark">
        <addition-mark :prefixTitle="constants.LABEL_SUP" :desc.sync="leaderAdditionMark.evaluation" :mark.sync="leaderAdditionMark.score"></addition-mark>
        <br>
      </div>
      <comments :comments.sync="comments"></comments>
      <br>
      <total-mark :total="total"></total-mark>
      <br>
      <level :readOnly="shouldMapping" v-model="level"></level>
      <br>
      <el-row v-if="canEdit" type="flex" justify="center">
        <el-button round size="medium" @click="saveDraft" class="btn-reset">{{constants.SAVE_DRAFT}}</el-button>
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
  ATTENTION
} from "@/constants/TEXT";
import {
  getEmployeeDetail,
  postUserPerformance,
  postUserPerformanceDraft
} from "@/constants/API";

export default {
  data() {
    return {
      myAdditionMark: {},
      leaderAdditionMark: {},
      comments: "",
      canEdit: false,
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
          active: true
        }
      ],
      constants: {
        SUBMIT,
        SAVE_DRAFT,
        LABEL_SELF,
        LABEL_SUP
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
      // if (this.hasWeight) {
      // }
      return parseFloat(
        this.targets
          .map(v => v.weights * (v.mark || 0))
          .reduce((pre, next) => pre + next, 0) +
          (parseFloat(this.leaderAdditionMark.score) || 0)
      ).toFixed(2);
      // return parseFloat(
      //   this.targets.map(v => v.mark).reduce((pre, next) => pre + next, 0) /
      //     this.targets.length +
      //     this.leaderAdditionMark.mark
      // ).toFixed(2)
    },

    shouldMapping() {
      return this.rules && this.rules.length > 0;
    }
  },
  methods: {
    normalizeTargets(arr) {
      return arr.map(v => {
        v.mark =
          (v.target_superior_score &&
            parseFloat(v.target_superior_score.score)) ||
          0;
        delete v.target_superior_score;
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
            message: "草稿保存成功"
          });
          this.getDetailInfo();
        })
        .catch(e => {});
    },
    getDetailInfo() {
      return getEmployeeDetail(
        this.$route.params.gradeID,
        this.$route.params.uid
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
            stage
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
          this.level = superior_score && superior_score.score_level;
          this.hasLeaderAdditionMark = need_attach_score == 1;
          this.rules = score_rule;
          this.canEdit = stage == 30 || stage == 40;
        })
        .catch(e => {});
    },
    submit() {
      // 若模版选择了加减分，需要填写加减分理由，必填上限200
      // 自评分不能超过5分
      if (this.checkTotal()) {
        return this.$notify.error({
          title: ERROR,
          message: "总分已经超过5分"
        });
      }
      if (this.shouldMapping && !this.level) {
        return this.$notify.error({
          title: ERROR,
          message: "需要选择等级"
        });
      }
      if (!this.comments) {
        return this.$notify.error({
          title: ERROR,
          message: "请填写评价"
        });
      }
      this.$confirm("请确认无误再提交, 是否继续?", ATTENTION, {
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
              this.getDetailInfo();
            })
            .catch(e => {});
        })
        .catch(() => {});
    },
    findLevel() {
      let i = -1;
      for (let index = 0; index < this.rules.length; index++) {
        const element = parseFloat(this.rules[index]);
        if (element > this.total) {
          i = index;
          break;
        }
      }
      let level = "S";
      if (i == -1) {
        return level;
      }

      switch (i) {
        case 0:
          level = "D";
          break;
        case 1:
          level = "C";
          break;
        case 2:
          level = "B";
          break;
        case 3:
          level = "A";
          break;
      }
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
        if (this.shouldMapping) {
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
