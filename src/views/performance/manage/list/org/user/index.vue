<template>
    <div class="user-detail-page">
        <nav-bar :list="nav"></nav-bar>
        <section class="content-container">
            <div class="basic-info">
                <span class="label">基本信息:</span>
                <span>
                    <!-- <span class="greycolor">上级工号</span> / 00002 &nbsp;&nbsp; -->
                    <span class="greycolor">上级姓名</span> / {{basicInfo.leaderName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span> -->
            </div>
            <br>
            <card :readOnly="true" class="card" :index="i" :data="v" v-for="(v,i) of targets" :key="i"></card>
            <br>
            <addition-mark prefixTitle="自评" :readOnly="true" :desc.sync="myAdditionMark.evaluation" :mark.sync="myAdditionMark.score"></addition-mark>
            <br>
            <addition-mark prefixTitle="上级评" :readOnly="true" :desc.sync="leaderAdditionMark.evaluation" :mark.sync="leaderAdditionMark.score"></addition-mark>
            <br>
            <div class="summary-section">
                <div class="inner-container">
                    <span class="label">进度:</span>
                    <el-steps style="width:100%" :active="1">
                        <el-step>
                            <div slot="icon">目标导入</div>
                            <div slot="title">目标导入11</div>
                        </el-step>
                        <el-step>
                            <div slot="icon">自评</div>
                            <div slot="title">自评888</div>
                        </el-step>
                        <el-step>
                            <div slot="icon">上级评</div>
                            <div slot="title">自评888</div>
                        </el-step>
                        <el-step>
                            <div slot="icon">申诉</div>
                            <div slot="title">自评888</div>
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
                <div class="inner-container">
                    <span class="label">评分结果:</span>
                    <span> {{total}} </span>
                </div>
                <div class="inner-container">
                    <span class="label"></span>
                    <el-steps style="width:100%" :active="1">
                        <el-step>
                            <div slot="icon">自评</div>
                            <div slot="title">自评888</div>
                        </el-step>
                        <el-step>
                            <div slot="icon">上级评</div>
                            <div slot="title">自评888</div>
                        </el-step>
                        <el-step>
                            <div slot="icon">BP修改</div>
                            <div slot="title">自评888</div>
                        </el-step>
                    </el-steps>
                </div>
            </div>
            <br>
            <br>
            <el-row type="flex" justify="center">
                <el-button round size="medium" @click="changeMarks" class="btn-reset">修改</el-button>
                <el-button round size="medium" @click="submit" type="primary">确认结果</el-button>
            </el-row>
        </section>
    </div>
</template>
<script>
import { MY_GRADE } from "@/constants/TEXT";
import { getPerformanceUserDetail } from "@/constants/API";

export default {
  data() {
    return {
      basicInfo: {},
      total: "",
      //   desc: "",
      //   addtionalMark: "",
      targets: [],
      myAdditionMark: {},
      leaderAdditionMark: {},
      appeal: {},
      nav: [
        {
          label: MY_GRADE,
          active: true
        }
      ]
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    card: () => import("@/components/modules/employee/gradeCard/index.vue"),
    "addition-mark": () =>
      import("@/components/modules/employee/additionalMark/index.vue")
  },
  computed: {
    // total() {
    //   if (this.hasWeight) {
    //     return parseFloat(
    //       this.cards
    //         .map(v => v.weight * v.mark / 100)
    //         .reduce((pre, next) => pre + next, 0) + this.addtionalMark
    //     ).toFixed(2)
    //   }
    //   return parseFloat(
    //     this.cards.map(v => v.mark).reduce((pre, next) => pre + next, 0) /
    //       this.cards.length +
    //       this.addtionalMark
    //   ).toFixed(2)
    // },
    // hasWeight() {
    //   return false
    // }
  },
  methods: {
    // TODO:
    changeMarks() {},
    submit() {
      // 若模版选择了加减分，需要填写加减分理由，必填上限200
      // 自评分不能超过5分

      this.$confirm(
        "自评分为XX分，请确认无误再提交，一经提交无法修改, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getInfo() {
      return getPerformanceUserDetail(
        this.$route.params.orgID,
        this.$route.params.id
      )
        .then(res => {
          console.log(res);
          const {
            superior_name,
            targets,
            self_attach_score,
            superior_attach_score,
            score,
            appeal
          } = res;
          this.basicInfo = {
            leaderName: superior_name
          };
          this.total = score;
          this.targets = targets;
          this.myAdditionMark = self_attach_score || {};
          this.leaderAdditionMark = superior_attach_score || {};
          this.appeal = appeal || {};
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
  width: 56px;
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
