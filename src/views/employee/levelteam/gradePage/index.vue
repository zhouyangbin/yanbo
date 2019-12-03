<template>
  <div class="my-grade-page">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <!-- <nav-bar :list="nav"></nav-bar> -->
    <section class="content-container">
      <div class="basic-info">
        <span class="label">{{ constants.BASIC_INFO }}:</span>
        <span>
          <span class="greycolor">{{ constants.LEADER_NUMBER }}</span>
          / {{ basicInfo.superior_workcode }} &nbsp;&nbsp;
          <span class="greycolor">{{ constants.LEADER_NAME }}</span>
          / {{ basicInfo.superior_name }} </span
        >&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span>
      </div>
      <br />
      <card
        class="card"
        :readOnly="readOnly"
        placeholder="请描述该项目标的实际完成情况"
        :desc.sync="targets[i].desc"
        :config="cardConfig"
        v-for="(v, i) of cardData"
        v-model="targets[i].mark"
        :data="v"
        :index="i"
        :key="i"
      ></card>
      <br />
      <!--<div v-if="superior_score && superior_score.evaluation">
        <comments
          :readOnly="true"
          :comments.sync="superior_score && superior_score.evaluation"
        ></comments>
        <br />
      </div>-->
      <div v-if="disabled">
        <comments
          :readOnly="true"
          :comments.sync="superior_score && superior_score.evaluation"
        ></comments>
        <br />
      </div>
      <div v-if="showMyAdditional">
        <addition-mark
          :prefixTitle="constants.LABEL_SELF"
          :readOnly="readOnly"
          :desc.sync="myAdditionMark.evaluation"
          :mark.sync="myAdditionMark.score"
        ></addition-mark>
        <br />
      </div>
      <!-- 隔级阶段不需要判断是否发布成绩 -->
      <!--<div v-if="leaderAdditionMark.evaluation">
         <div v-if="leaderAdditionMark.evaluation" && published">
        <addition-mark
          :readOnly="true"
          :prefixTitle="constants.LABEL_SUP"
          :desc.sync="leaderAdditionMark.evaluation"
          :mark.sync="leaderAdditionMark.score"
        ></addition-mark>
        <br />
      </div> -->
      <div v-if="disabled">
        <!-- <div v-if="leaderAdditionMark.evaluation" && published"> -->
        <addition-mark
          :readOnly="true"
          :prefixTitle="constants.LABEL_SUP"
          :desc.sync="leaderAdditionMark.evaluation"
          :mark.sync="leaderAdditionMark.score"
        ></addition-mark>
        <br />
      </div>
      <div v-if="disabled">
        <total-mark
          :total="total"
          :score="self_score"
          :high_level_show="high_level_show"
        ></total-mark>
        <br />
      </div>
      <div>
        <!-- v-if="level" && published" -->
        <level
          v-if="disabled"
          :readOnly="true"
          v-model="level"
          :old_s="true"
          :label_id="label_id"
        ></level>
        <br />
      </div>
      <!-- <el-row v-if="canEdit" type="flex" justify="center">
        <el-button round size="medium" @click="saveDraft" class="btn-reset">
          {{ constants.SAVE_DRAFT }}
        </el-button>
        <el-button round size="medium" @click="submit" type="primary">
          {{ constants.SUBMIT }}
        </el-button>
      </el-row>
      <el-row v-if="canReject && published" type="flex" justify="center">
        <div>
          到期将默认确认结果, 如有问题可
          <el-button @click="visible = true" type="text">
            {{ constants.APPEAL }}
          </el-button>
        </div>
      </el-row>
      <el-row v-if="cancelReject && published" type="flex" justify="center">
        <el-button @click="cancel" type="primary" round size="medium">
          {{ constants.CANCEL_APPEAL }}
        </el-button>
      </el-row>
      <reject-dialog @close="getInfo" :visible.sync="visible"></reject-dialog> -->
    </section>
  </div>
</template>
<script>
import {
  LEVEL_TEAM_GRADE,
  GRADE_MANAGE,
  SUBMIT,
  SAVE_DRAFT,
  APPEAL,
  CANCEL_APPEAL,
  LABEL_SELF,
  LABEL_SUP,
  LEADER_NUMBER,
  LEADER_NAME,
  ERROR,
  CONFIRM,
  CANCEL,
  CONST_ADD_SUCCESS,
  BASIC_INFO
} from "@/constants/TEXT";
import {
  getEmployeeDetail,
  getEmployeeLevelTeamDetail,
  postUserPerformanceDraft,
  postSelfPerformance,
  delCancelAppeal
} from "@/constants/API";

import {
  PATH_EMPLOYEE_MY,
  PATH_EMPLOYEE_LEVEL_TEAM,
  PATH_EMPLOYY_LEVEL_TEAM_GRADE_DETAIL
} from "@/constants/URL";

export default {
  data() {
    return {
      label_id: null,
      nav: [
        {
          label: LEVEL_TEAM_GRADE,
          href: PATH_EMPLOYEE_LEVEL_TEAM
        },
        {
          label: GRADE_MANAGE,
          href: PATH_EMPLOYY_LEVEL_TEAM_GRADE_DETAIL(this.$route.params.orgID)
        },
        {
          label: "隔级详情",
          active: true
        }
      ],
      basicInfo: {},
      readOnly: false,
      canEdit: false,
      canReject: false,
      showTotal: false,
      showComments: false,
      cancelReject: false,
      myAdditionMark: {},
      leaderAdditionMark: {},
      superior_score: {},
      need_attach_score: "",
      visible: false,
      published: false,
      level: "",
      targets: [],
      cardConfig: {
        min: 0,
        max: 5,
        step: 0.1
      },
      constants: {
        SUBMIT,
        SAVE_DRAFT,
        APPEAL,
        CANCEL_APPEAL,
        LABEL_SELF,
        LABEL_SUP,
        LEADER_NUMBER,
        LEADER_NAME,
        BASIC_INFO
      },
      high_level_show: 0,
      self_score: 0,
      disabled: false
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    card: () => import("@/components/modules/employee/gradeCard/index.vue"),
    "addition-mark": () =>
      import("@/components/modules/employee/additionalMark/index.vue"),
    "total-mark": () =>
      import("@/components/modules/employee/totalMark/index.vue"),
    level: () => import("@/components/modules/employee/finalLevel/index.vue"),
    // "reject-dialog": () =>
    //   import("@/components/modules/employee/appealConfirm/index.vue"),
    comments: () =>
      import("@/components/modules/employee/leaderComments/index.vue")
  },
  computed: {
    showMyAdditional() {
      return (
        this.need_attach_score == 1 &&
        ((this.readOnly && this.myAdditionMark.evaluation) || !this.readOnly)
      );
    },
    total() {
      return this.superior_score && this.superior_score.score != null
        ? parseFloat(this.superior_score.score)
        : parseFloat(
            this.targets
              .map(v => v.weights * (v.mark || 0))
              .reduce((pre, next) => pre + next, 0) +
              (parseFloat(this.myAdditionMark.score) || 0)
          ).toFixed(2);
    },
    score() {
      return (parseFloat(this.myAdditionMark.score) || 0).toFixed(2);
    },
    cardData() {
      return this.published ? this.targets : this.hideLeaderInfo(this.targets);
    }
  },
  methods: {
    set_label_id(id) {
      this.label_id = id;
    },
    hideLeaderInfo(cards) {
      return cards.map(v => {
        let m = { ...v };
        // delete m.target_submit_self_score;
        return m;
      });
    },
    saveDraft() {
      const postData = this.getPostData();

      return postUserPerformanceDraft(
        this.$route.params.orgID,
        this.$route.params.id,
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
    getPostData() {
      return {
        score: this.targets.map(({ id, mark, desc }) => ({
          target_id: id,
          score: mark,
          description: desc
        })),
        attach_score: {
          score: this.myAdditionMark.score || 0,
          reason: this.myAdditionMark.evaluation || ""
        },
        total_score: this.total,
        score_level: this.level,
        evaluation: this.comments
      };
    },
    checkTotal() {
      return parseFloat(this.total) > 5;
    },
    getInfo() {
      return getEmployeeLevelTeamDetail(
        this.$route.params.performanceId,
        this.$route.params.id
      )
        .then(res => {
          const {
            submit_targets,
            superior_workcode,
            need_attach_score,
            stage,
            self_attach_score,
            superior_attach_score,
            superior_score,
            superior_name,
            score_level,
            score,
            publish_status,
            self_submit_score,
            disabled
          } = res;
          this.basicInfo = {
            superior_workcode,
            superior_name
          };
          const published = publish_status == 1;
          this.published = published;
          this.need_attach_score = need_attach_score;
          this.myAdditionMark = self_attach_score || {};
          this.disabled = disabled;
          this.high_level_show =
            superior_attach_score != null ? superior_attach_score.score : null; //如果有上级评分，就展示评分
          this.leaderAdditionMark = superior_attach_score || {};
          this.level =
            score_level || (superior_score && superior_score.score_level);
          this.superior_score = superior_score;
          this.showComments = stage >= 40;
          this.self_score =
            self_submit_score != null ? self_submit_score.score : 0;
          this.composeData(submit_targets, stage);
          if (stage == 60 && !score) {
            this.showTotal = false;
          }
          if (published) {
            this.readOnly = true;
            this.canEdit = true;
          }
          this.label_id = parseInt(superior_score.label_id) || null;
        })
        .catch(e => {});
    },
    beforeSubmitCheck() {
      return new Promise((resolve, reject) => {
        // 若模版选择了加减分，需要填写加减分理由，必填上限200
        // 自评分不能超过5分
        // 自评理由必填
        if (this.targets.some(v => !v.desc)) {
          this.$notify.error({
            title: ERROR,
            message: "请填写目标的实际完成情况!"
          });
          return reject(true);
        }
        if (
          this.showMyAdditional &&
          this.myAdditionMark.score &&
          !this.myAdditionMark.evaluation
        ) {
          this.$notify.error({
            title: ERROR,
            message: "请填写加减分原因"
          });
          return reject(true);
        }
        if (this.checkTotal()) {
          this.$notify.error({
            title: ERROR,
            message: "总分已经超过5分"
          });
          return reject(true);
        }
        return resolve(true);
      });
    },
    submit() {
      return this.beforeSubmitCheck()
        .then(() => {
          this.$confirm(
            `自评分为${
              this.total
            }分，请确认无误再提交，一经提交无法修改, 是否继续?`,
            "提示",
            {
              confirmButtonText: CONFIRM,
              cancelButtonText: CANCEL,
              type: "warning"
            }
          )
            .then(() => {
              let postData = this.getPostData();
              delete postData.total_score;
              return postSelfPerformance(this.$route.params.id, postData)
                .then(res => {
                  this.$message({
                    type: "success",
                    message: CONST_ADD_SUCCESS
                  });
                  this.$router.replace(PATH_EMPLOYEE_MY);
                })
                .catch(e => {});
            })
            .catch(() => {});
        })
        .catch(() => {});
    },
    composeData(targets, stage) {
      switch (stage) {
        case 10:
          // 已导入
          this.readOnly = true;
          this.targets = targets.map(v => {
            delete v.target_submit_self_score;
            delete v.target_submit_superior_score;
            return v;
          });
          this.need_attach_score = "";
          this.canEdit = false;
          this.showTotal = false;
          break;
        case 20:
          this.readOnly = true;
          this.canEdit = true;
          this.showTotal = true;
          this.targets = targets.map(v => {
            v.mark =
              (v.target_submit_self_score &&
                v.target_submit_self_score.score) ||
              0;
            v.desc =
              (v.target_submit_self_score &&
                v.target_submit_self_score.description) ||
              "";
            delete v.target_submit_self_score;
            delete v.target_submit_superior_score;
            return v;
          });
          break;
        case 30:
          this.readOnly = true;
          this.canEdit = false;
          this.showTotal = true;
          // this.targets = targets
          this.targets = targets.map(v => {
            v.mark =
              (v.target_submit_self_score &&
                v.target_submit_self_score.score) ||
              0;
            v.desc =
              (v.target_submit_self_score &&
                v.target_submit_self_score.description) ||
              "";
            return v;
          });
          break;
        case 40:
          this.readOnly = true;
          this.canEdit = false;
          this.showTotal = true;
          // this.targets = targets
          this.targets = targets.map(v => {
            v.mark =
              (v.target_submit_self_score &&
                v.target_submit_self_score.score) ||
              0;
            v.desc =
              (v.target_submit_self_score &&
                v.target_submit_self_score.description) ||
              "";
            return v;
          });
          this.canReject = true;
          this.cancelReject = false;
          break;
        case 50:
          this.readOnly = true;
          this.canEdit = false;
          this.showTotal = true;
          // this.targets = targets
          this.targets = targets.map(v => {
            v.mark =
              (v.target_submit_self_score &&
                v.target_submit_self_score.score) ||
              0;
            v.desc =
              (v.target_submit_self_score &&
                v.target_submit_self_score.description) ||
              "";
            return v;
          });
          this.canReject = false;
          this.cancelReject = true;
          break;
        default:
          this.readOnly = true;
          this.canEdit = false;
          this.showTotal = true;
          this.targets = targets.map(v => {
            v.mark =
              (v.target_submit_self_score &&
                v.target_submit_self_score.score) ||
              0;
            v.desc =
              (v.target_submit_self_score &&
                v.target_submit_self_score.description) ||
              "";
            return v;
          });
          this.canReject = false;
          this.cancelReject = false;
      }
    },
    cancel() {
      return delCancelAppeal({
        performance_user_id: this.$route.params.id
      })
        .then(res => {
          this.$message({
            type: "success",
            message: "取消成功!"
          });
          this.getInfo();
        })
        .catch(e => {});
    }
  },
  created() {
    this.getInfo();
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
