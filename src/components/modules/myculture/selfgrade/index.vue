<template>
  <div class="self-grade-component">
    <section class="mark">
      <el-row align="middle" type="flex">
        <el-col style="padding:20px;border-right: 1px solid #979797;">
          <div class="mark-label">
            请选择评分项目
          </div>
          <grade-items :items="questions" v-model="selectGradeItem"></grade-items>
          <br>
          <br>
          <div class="mark-label">
            请评分
          </div>
          <br>
          <grade-slider :readOnly="readOnly" :step="1" :max="5" v-model="questions[selectGradeItem].score"></grade-slider>
        </el-col>
        <el-col style="padding-left:50px;">
          <div class="mark-score">
            {{questions[selectGradeItem].score}}分
          </div>
          <div class="mark-desc">
            {{contentForCurScore}}
          </div>
        </el-col>
      </el-row>
    </section>
    <br>
    <div v-show="questions[selectGradeItem].score>=3">
      <case-area :readOnly="readOnly" placeholder="请填写我的3分案例" v-model="questions[selectGradeItem].cases[0]"></case-area>
      <br>
      <div v-show="questions[selectGradeItem].score>=4">
        <case-area :readOnly="readOnly" placeholder="请填写我的4分案例" v-model="questions[selectGradeItem].cases[1]"></case-area>
        <br>
        <div v-show="questions[selectGradeItem].score>=5">
          <case-area :readOnly="readOnly" placeholder="请填写我的5分案例" v-model="questions[selectGradeItem].cases[2]"></case-area>
          <br>
        </div>
      </div>
    </div>

    <el-row v-show="!readOnly" type="flex" justify="end">
      <el-button type="primary">保存草稿</el-button>
      <el-button @click="submitGrade" type="primary">提交</el-button>
    </el-row>

  </div>
</template>
<script>
import { getMyEvaluation, selfMarking } from "@/constants/API";
export default {
  data() {
    return {
      selectGradeItem: 0,
      questions: [
        {
          cases: []
        }
      ],
      readOnly: false
    };
  },
  components: {
    "grade-items": () => import("@/components/common/GradeItem/index.vue"),
    "grade-slider": () => import("@/components/common/GradeSlider/index.vue"),
    "case-area": () => import("@/components/common/CaseArea/index.vue")
  },
  methods: {
    getGradeInfo() {
      const id = this.$route.params.id;
      getMyEvaluation(id).then(res => {
        console.log(res);
        this.questions = res.questions;
        this.readOnly = res.can_edit == 0 ? true : false;
      });
    },
    validateGrade() {
      return this.questions.some(i => {
        if (i.score === 3) {
          // return i.cases[0] == undefined || i.cases[0].length == 0
          return this.caseValidate(i, 3);
        }
        if (i.score === 4) {
          return this.caseValidate(i, 4);
        }
        if (i.score === 5) {
          return this.caseValidate(i, 5);
        }
        return false;
      });
    },
    caseValidate(item, score) {
      const max = score - 3;
      for (let index = 0; index <= max; index++) {
        if (item.cases[index] == undefined || item.cases[index].length == 0) {
          return true;
        }
      }
      return false;
    },
    composeData() {
      let result = {};
      this.questions.forEach(v => {
        // console.log(v)
        result[v.question_id] = {
          score: v.score
        };
        if (v.cases && v.cases.length != 0) {
          result[v.question_id].cases = v.cases.slice(0, 3 - v.score);
        }
      });
      return result;
    },
    submitGrade() {
      const isInValid = this.validateGrade();
      if (isInValid) {
        return this.$message.error("请填写完整案例信息");
      }
      const postData = this.composeData();
      selfMarking(postData, this.$route.params.id).then(res => {
        this.getGradeInfo();
      });
    }
  },
  computed: {
    contentForCurScore() {
      return (
        (this.questions[this.selectGradeItem].topics || []).filter(t => {
          return t.score == this.questions[this.selectGradeItem].score;
        })[0] || {}
      ).content;
    }
  },

  created() {
    this.getGradeInfo();
  }
};
</script>
<style lang="scss" scoped>
.self-grade-component {
  .mark {
    padding: 20px;
    background: white;
  }
  .mark-label {
    font-size: 24px;
    color: #4a4a4a;
    margin-bottom: 15px;
  }
  .mark-score {
    font-size: 64px;
    color: #f18d23;
    line-height: 48px;
    margin-bottom: 30px;
  }
  .mark-desc {
    font-size: 16px;
    color: #f18d23;
  }
}
</style>
