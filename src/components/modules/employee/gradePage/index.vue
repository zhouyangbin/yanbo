<template>
  <div class="my-grade-page">
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
        :readOnly="readOnly"
        placeholder="请描述该项目标的实际完成情况"
        :desc.sync="targets[i].desc"
        :config="cardConfig"
        class="card"
        v-for="(v, i) of cardData"
        v-model="targets[i].mark"
        :data="v"
        :index="i"
        :key="i"
      ></card>
      <br />
      <div
        v-if="
          showComments &&
            superior_score &&
            superior_score.evaluation &&
            published
        "
      >
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
      <div v-if="leaderAdditionMark.evaluation && published">
        <addition-mark
          :readOnly="true"
          :prefixTitle="constants.LABEL_SUP"
          :desc.sync="leaderAdditionMark.evaluation"
          :mark.sync="leaderAdditionMark.score"
        ></addition-mark>
        <br />
      </div>
      <div v-if="showTotal && canEdit">
        <total-mark
          :total="total"
          :score="total"
          :high_level_show="published"
        ></total-mark>
        <br />
      </div>
      <div v-if="showTotal && !canEdit">
        <total-mark
          :total="total"
          :score="self_score"
          :high_level_show="published"
        ></total-mark>
        <br />
      </div>
      <div>
        <!--level
          v-if="level && published"
          :old_s="old_s"
          v-model="level"
          :label_id="label_id"
          :tip_A_show="false"
        ></level-->
        <br />
        <el-row
          v-if="level && published"
          type="flex"
          justify="end"
          class="level-section"
        >
          <el-col :span="4">
            <el-row justify="center">
              <el-col :span="6">
                <span style="line-height: 40px;">结果/</span>
              </el-col>
              <el-col :span="18">
                <span class="level">
                  {{ level }}
                </span>
              </el-col>
            </el-row>
            <br />
            <el-row>
              <el-col :span="6">标签/</el-col>
              <el-tag
                :class="
                  level == 'A' || level == 'S'
                    ? 'status-tag top-style'
                    : 'status-tag other-style'
                "
                >{{ label_name }}</el-tag
              >
            </el-row>
          </el-col>
        </el-row>
      </div>
      <el-row v-if="canEdit" type="flex" justify="center">
        <el-button round size="medium" @click="saveDraft" class="btn-reset">
          {{ constants.SAVE_DRAFT }}
        </el-button>
        <el-button round size="medium" @click="submit" type="primary">
          {{ constants.SUBMIT }}
        </el-button>
      </el-row>
      <p
        v-if="is_confirm || is_appeal || is_cancel_appeal"
        style="color: #eb0c00;"
      >
        请注意：到期将默认确认结果, 如有问题可点击申诉
      </p>
      <p style=" width: 100%; word-break: break-all; color: #ff8519;">
        <span v-for="(item, index) in appeal" :key="index">
          申诉理由：{{ item.reason }} <br />
        </span>
      </p>
      <el-row type="flex" justify="center">
        <el-button
          v-if="is_confirm"
          @click="confirm_box_show = true"
          type="primary"
        >
          确认
        </el-button>
        <el-button
          v-if="is_appeal"
          @click="appeal_box_show = true"
          type="warning"
        >
          申诉
        </el-button>
        <el-button
          v-if="is_cancel_appeal"
          @click="cancel_appeal_box_show = true"
          type="warning"
        >
          取消申诉
        </el-button>
      </el-row>
      <el-dialog
        title="提示"
        :visible.sync="confirm_box_show"
        class="dialog"
        width="30%"
      >
        <p class="text-center">是否确认成绩</p>
        <span class="text-center" slot="footer">
          <el-button @click="confirm_box_show = false">
            取消
          </el-button>
          <el-button type="primary" @click="confirm_submit">
            确认
          </el-button>
        </span>
      </el-dialog>
      <reject-dialog
        @close="getInfo"
        :visible.sync="appeal_box_show"
      ></reject-dialog>
      <el-dialog
        title="提示"
        :visible.sync="cancel_appeal_box_show"
        class="dialog"
        width="30%"
      >
        <p class="text-center">
          取消申诉将默认认为自动确认当前成绩，是否继续？
        </p>
        <span class="text-center" slot="footer">
          <el-button @click="cancel_appeal_box_show = false">
            取消
          </el-button>
          <el-button type="primary" @click="cancel_appeal_submit">
            确认
          </el-button>
        </span>
      </el-dialog>
    </section>
  </div>
</template>
<script>
import {
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
  postUserPerformanceDraft,
  postSelfPerformance,
  ConfirmSelf,
  delCancelAppeal
} from "@/constants/API";

import { PATH_EMPLOYEE_MY } from "@/constants/URL";

export default {
  data() {
    return {
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
      self_score: 0,
      is_state: false,
      old_s: false,
      label_id: null,
      user_confirm: false,
      is_appeal: false, //是否申诉
      appeal_box_show: false,
      appeal: [],
      is_cancel_appeal: false, //是否取消申诉
      cancel_appeal_box_show: false,
      is_confirm: false, //是否确认
      confirm_box_show: false,
      label_name: "" //标签名称
    };
  },
  components: {
    card: () => import("@/components/modules/employee/gradeCard/index.vue"),
    "addition-mark": () =>
      import("@/components/modules/employee/additionalMark/index.vue"),
    "total-mark": () =>
      import("@/components/modules/employee/totalMark/index.vue"),
    //level: () => import("@/components/modules/employee/finalLevel/index.vue"),
    "reject-dialog": () =>
      import("@/components/modules/employee/appealConfirm/index.vue"),
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
      let total = parseFloat(
        this.targets
          .map(v => v.weights * (v.mark || 0))
          .reduce((pre, next) => pre + next, 0) +
          (parseFloat(this.myAdditionMark.score) || 0)
      ).toFixed(8);
      return this.superior_score && this.superior_score.score != null
        ? parseFloat(this.superior_score.score)
        : (Math.round(total * 100) / 100).toFixed(2);
      // return this.superior_score && this.superior_score.score != null
      //   ? parseFloat(this.superior_score.score)
      //   : parseFloat(
      //       this.targets
      //         .map(v => v.weights * (v.mark || 0))
      //         .reduce((pre, next) => pre + next, 0) +
      //         (parseFloat(this.myAdditionMark.score) || 0)
      //     ).toFixed(2);
    },
    score() {
      return (parseFloat(this.myAdditionMark.score) || 0).toFixed(2);
    },
    cardData() {
      return this.published ? this.targets : this.hideLeaderInfo(this.targets);
    }
  },
  methods: {
    hideLeaderInfo(cards) {
      return cards.map(v => {
        let m = { ...v };
        delete m.target_superior_score;
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
        total_score: this.total
        // score_level: this.level,
        // evaluation: this.comments
      };
    },
    checkTotal() {
      return parseFloat(this.total) > 5;
    },
    getInfo() {
      return getEmployeeDetail(
        this.$route.params.orgID,
        this.$route.params.id,
        "self"
      )
        .then(res => {
          const {
            targets,
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
            self_score,
            appeal,
            is_appeal, //是否申诉
            is_cancel_appeal, //是否取消申诉
            is_confirm, //是否确认
            is_state,
            _s,
            label_id,
            label_name,
            label_show
          } = res;
          this.basicInfo = {
            superior_workcode,
            superior_name
          };
          const published = publish_status == 1;
          this.is_appeal = is_appeal; //是否申诉
          this.appeal = appeal;
          this.is_cancel_appeal = is_cancel_appeal; //是否取消申诉
          this.is_confirm = is_confirm; //是否确认
          this.is_state = is_state;
          this.old_s = _s == 1 && label_show == 1 ? true : false;
          this.label_id = label_id;
          this.label_name = label_name;
          this.published = published;
          this.need_attach_score = need_attach_score;
          this.myAdditionMark = self_attach_score || {};
          this.leaderAdditionMark = superior_attach_score || {};
          this.level =
            score_level || (superior_score && superior_score.score_level);
          this.superior_score = superior_score;
          this.showComments = stage >= 40;
          this.self_score = self_score != null ? self_score.score : 0;
          this.composeData(targets, stage);
          if (stage == 60 && !score) {
            this.showTotal = false;
          }
          if (published) {
            this.readOnly = true;
            this.canEdit = false;
          }
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
            delete v.target_self_score;
            delete v.target_superior_score;
            return v;
          });
          this.need_attach_score = "";
          this.canEdit = false;
          this.showTotal = false;
          break;
        case 20:
          this.readOnly = false;
          this.canEdit = true;
          this.showTotal = true;
          this.targets = targets.map(v => {
            v.mark = (v.target_self_score && v.target_self_score.score) || 0;
            v.desc =
              (v.target_self_score && v.target_self_score.description) || "";
            delete v.target_self_score;
            delete v.target_superior_score;
            return v;
          });
          break;
        case 30:
          this.readOnly = true;
          this.canEdit = false;
          this.showTotal = true;
          // this.targets = targets
          this.targets = targets.map(v => {
            v.mark = (v.target_self_score && v.target_self_score.score) || 0;
            v.desc =
              (v.target_self_score && v.target_self_score.description) || "";
            return v;
          });
          break;
        case 40:
          this.readOnly = true;
          this.canEdit = false;
          this.showTotal = true;
          // this.targets = targets
          this.targets = targets.map(v => {
            v.mark = (v.target_self_score && v.target_self_score.score) || 0;
            v.desc =
              (v.target_self_score && v.target_self_score.description) || "";
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
            v.mark = (v.target_self_score && v.target_self_score.score) || 0;
            v.desc =
              (v.target_self_score && v.target_self_score.description) || "";
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
            v.mark = (v.target_self_score && v.target_self_score.score) || 0;
            v.desc =
              (v.target_self_score && v.target_self_score.description) || "";
            return v;
          });
          this.canReject = false;
          this.cancelReject = false;
      }
    },
    confirm_submit() {
      //绩效确认
      return ConfirmSelf({
        performance_user_id: this.$route.params.id
      })
        .then(res => {
          this.$message({
            type: "success",
            message: "确认成功!"
          });
          this.getInfo();
        })
        .catch(e => {});
    },
    cancel_appeal_submit() {
      //取消申诉
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
.dialog >>> .el-dialog__footer {
  text-align: center;
}
.level-section {
  font-size: 18px;
  color: #6c7a92;
}
.level-section .level {
  font-size: 26px;
  color: orange;
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
.status-tag {
  min-width: 60px;
  height: 28px;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  border-radius: 4px;
  border: none;
  font-weight: 500;
}
</style>
