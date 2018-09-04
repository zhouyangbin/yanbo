<template>
  <div class="my-grade-page">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="basic-info">
        <span class="label">基本信息:</span>
        <span>
          <span class="greycolor">{{constants.LEADER_NUMBER}}</span> / {{basicInfo.superior_workcode}} &nbsp;&nbsp;
          <span class="greycolor">{{constants.LEADER_NAME}}</span> / {{basicInfo.superior_name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span>
      </div>
      <br>
      <card :readOnly="readOnly" :config="cardConfig" class="card" v-for="(v,i) of targets" v-model="targets[i].mark" :data="v" :key="i"></card>
      <br>
      <div>
        <comments :readOnly="true" :comments.sync="superior_score.evaluation"></comments>
        <br>
      </div>
      <div v-if="showMyAdditional">
        <addition-mark :prefixTitle="constants.LABEL_SELF" :readOnly="readOnly" :desc.sync="myAdditionMark.evaluation" :mark.sync="myAdditionMark.score"></addition-mark>
        <br>
      </div>
      <div v-if="leaderAdditionMark.evaluation">
        <addition-mark :readOnly="true" :prefixTitle="constants.LABEL_SUP" :desc.sync="leaderAdditionMark.evaluation" :mark.sync="leaderAdditionMark.score"></addition-mark>
        <br>
      </div>
      <div v-if="showTotal">
        <total-mark :total="total"></total-mark>
        <br>
      </div>
      <div>
        <level v-if="level" :readOnly="true" v-model="level"></level>
        <br>
      </div>
      <el-row v-if="canEdit" type="flex" justify="center">
        <el-button round size="medium" @click="saveDraft" class="btn-reset">{{constants.SAVE_DRAFT}}</el-button>
        <el-button round size="medium" @click="submit" type="primary">{{constants.SUBMIT}}</el-button>
      </el-row>
      <el-row v-if="canReject" type="flex" justify="center">
        <div>
          到期讲默认确认结果, 如有问题可
          <el-button @click="visible=true" type="text">{{constants.APPEAL}}</el-button>
        </div>
      </el-row>
      <el-row v-if="cancelReject" type="flex" justify="center">
        <el-button @click="cancel" type="primary" round size="medium">{{constants.CANCEL_APPEAL}}</el-button>
      </el-row>
      <reject-dialog @close="getInfo" :visible.sync="visible"></reject-dialog>
    </section>
  </div>
</template>
<script>
import {
  MY_GRADE,
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
  CONST_ADD_SUCCESS
} from "@/constants/TEXT";
import {
  getEmployeeDetail,
  postUserPerformanceDraft,
  postSelfPerformance,
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
      cancelReject: false,
      myAdditionMark: {},
      leaderAdditionMark: {},
      superior_score: {},
      need_attach_score: "",
      visible: false,
      level: "",
      targets: [],
      cardConfig: {
        min: 0,
        max: 5,
        step: 0.1
      },
      nav: [
        {
          label: MY_GRADE,
          href: PATH_EMPLOYEE_MY
        },
        {
          label: "评分详情",
          active: true
        }
      ],
      constants: {
        SUBMIT,
        SAVE_DRAFT,
        APPEAL,
        CANCEL_APPEAL,
        LABEL_SELF,
        LABEL_SUP,
        LEADER_NUMBER,
        LEADER_NAME
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
    level: () => import("@/components/modules/employee/finalLevel/index.vue"),
    "reject-dialog": () =>
      import("@/components/modules/employee/appealConfirm/index.vue"),
    comments: () =>
      import("@/components/modules/employee/leaderComments/index.vue")
  },
  computed: {
    showMyAdditional() {
      return this.need_attach_score == 1;
    },
    total() {
      return this.superior_score.score != null
        ? parseFloat(this.superior_score.score)
        : parseFloat(
            this.targets
              .map(v => v.weights * (v.mark || 0))
              .reduce((pre, next) => pre + next, 0) +
              (this.myAdditionMark.score || 0)
          ).toFixed(2);
    }
  },
  methods: {
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
      // console.log(this.$route.params)
      return {
        score: this.targets.map(({ id, mark }) => ({
          target_id: id,
          score: mark
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
      return getEmployeeDetail(this.$route.params.orgID, this.$route.params.id)
        .then(res => {
          // console.log(res)
          const {
            targets,
            superior_workcode,
            need_attach_score,
            stage,
            self_attach_score,
            superior_attach_score,
            superior_score,
            superior_name,
            score_level
          } = res;
          this.basicInfo = {
            superior_workcode,
            superior_name
          };
          this.need_attach_score = need_attach_score;
          this.myAdditionMark = self_attach_score || {};
          this.leaderAdditionMark = superior_attach_score || {};
          this.level =
            score_level || (superior_score && superior_score.score_level);
          this.superior_score = superior_score;
          this.composeData(targets, stage);
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
              // this.getInfo();
            })
            .catch(e => {});
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
