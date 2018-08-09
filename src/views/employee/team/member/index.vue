<template>
  <div class="my-grade-page">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="basic-info">
        <span class="label">基本信息:</span>
        <span>
          <span class="greycolor">员工工号</span> / 00002 &nbsp;&nbsp;
          <span class="greycolor">员工姓名</span> / 开心</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <!-- <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span> -->
      </div>
      <br>
      <card class="card" v-for="(v,i) of cards" v-model="cards[i].mark" :key="i"></card>
      <br>
      <addition-mark prefixTitle="自评" :readOnly="true" :desc.sync="myAdditionMark.desc" :mark.sync="myAdditionMark.mark"></addition-mark>
      <br>
      <addition-mark :mark.sync="myAdditionMark.mark"></addition-mark>
      <br>
      <comments></comments>
      <br>
      <total-mark :total="total"></total-mark>
      <br>
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="saveDraft" class="btn-reset">保存草稿</el-button>
        <el-button round size="medium" @click="submit" type="primary">提交</el-button>
      </el-row>
    </section>
  </div>
</template>
<script>
import { TEAM_GRADE } from "@/constants/TEXT";
export default {
  data() {
    return {
      myAdditionMark: { desc: "xxxx", mark: "9" },
      cards: [
        { weight: 33, mark: 1 },
        { weight: 33, mark: 1 },
        { weight: 33, mark: 1 }
      ],
      nav: [
        {
          label: TEAM_GRADE,
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
      import("@/components/modules/employee/additionalMark/index.vue"),
    "total-mark": () =>
      import("@/components/modules/employee/totalMark/index.vue"),
    comments: () =>
      import("@/components/modules/employee/leaderComments/index.vue")
  },
  computed: {
    total() {
      if (this.hasWeight) {
        return parseFloat(
          this.cards
            .map(v => v.weight * v.mark / 100)
            .reduce((pre, next) => pre + next, 0) + this.myAdditionMark.mark
        ).toFixed(2);
      }
      return parseFloat(
        this.cards.map(v => v.mark).reduce((pre, next) => pre + next, 0) /
          this.cards.length +
          this.myAdditionMark.mark
      ).toFixed(2);
    },
    hasWeight() {
      return false;
    }
  },
  methods: {
    // TODO:
    saveDraft() {},
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
