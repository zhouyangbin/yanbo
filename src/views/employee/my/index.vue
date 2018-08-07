<template>
  <div class="my-grade-page">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div>
        <span class="label">基本信息:</span>
        <span>上级工号:&nbsp; 00002 &nbsp;&nbsp; 上级姓名: &nbsp;开心</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span>
      </div>
      <br>
      <card class="card" v-for="(v,i) of cards" v-model="cards[i].mark" :key="i"></card>
      <br>
      <div class="inner-container moreMarksSection">
        <div class="inner-container">
          <span class="label">加减分:</span> &nbsp;
          <div>
            <el-input :maxlength="200" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
            </el-input>
          </div>
        </div>
        <div class="marks">
          <el-input-number v-model="moreMark" :min="-0.5" :max="0.5" :step="0.1" label="描述文字"></el-input-number>
        </div>
      </div>
      <br>
      <el-row type="flex" justify="end" class="total-section">
        <el-col :span="4">
          <span>
            总分:
          </span>
          <span>{{total}}</span>
        </el-col>
      </el-row>
      <br>
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="saveDraft" class="btn-reset">保存草稿</el-button>
        <el-button round size="medium" @click="submit" type="primary">提交</el-button>
      </el-row>
    </section>
  </div>
</template>
<script>
import { MY_GRADE } from "@/constants/TEXT";
export default {
  data() {
    return {
      textarea: "",
      moreMark: "",
      cards: [
        { weight: 33, mark: 1 },
        { weight: 33, mark: 1 },
        { weight: 33, mark: 1 }
      ],
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
    card: () => import("@/components/modules/employee/gradeCard/index.vue")
  },
  computed: {
    total() {
      if (this.hasWeight) {
        return parseFloat(
          this.cards
            .map(v => v.weight * v.mark / 100)
            .reduce((pre, next) => pre + next, 0) + this.moreMark
        ).toFixed(2);
      }
      return parseFloat(
        this.cards.map(v => v.mark).reduce((pre, next) => pre + next, 0) /
          this.cards.length +
          this.moreMark
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
.my-grade-page .label {
  font-weight: 500;
  margin-right: 20px;
  font-size: 1.1em;
}
.my-grade-page .tip {
  color: red;
}
.inner-container {
  display: flex;
}

.inner-container > div {
  flex: 5;
}
.inner-container .marks {
  flex: 1;
  margin-left: 40px;
}
.moreMarksSection {
  background: white;
  padding: 20px;
}
.total-section {
  font-size: 20px;
}
</style>
