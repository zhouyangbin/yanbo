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
      <el-button @click="saveDraft" v-if="neverSubmit" type="primary">保存草稿</el-button>
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
      // 从没提交过
      neverSubmit: true,
      questions: [
        {
          cases: ["", "", ""]
        },
        {
          cases: ["", "", ""]
        },
        {
          cases: ["", "", ""]
        },
        {
          cases: ["", "", ""]
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
        this.neverSubmit = res.status == 10;
        const key = `uid_self_${this.$route.params.id}_draft_culture`;
        const savedDraft = window.localStorage.getItem(key);
        if (res.status == 10 && savedDraft) {
          const id = `uid_self_${this.$route.params.id}_draft_culture`;
          this.preProcessQuestions(JSON.parse(savedDraft));
        } else {
          this.preProcessQuestions(res.questions);
        }
        const {
          employee_name,
          employee_workcode,
          highlevel_name,
          highlevel_workcode
        } = res;
        this.$parent.basicInfo = {
          name: employee_name,
          workcode: employee_workcode,
          highlevel_name,
          highlevel_workcode
        };
        this.readOnly = res.can_edit == 0;
        this.$forceUpdate();
      });
    },
    preProcessQuestions(arr) {
      // console.log(arr)
      arr.map((a, i) => {
        if (!a.cases) {
          a.cases = new Array(3).fill("");
          this.$set(this.questions, i, { ...a });
          return;
        }
        if (a.cases.length != 3) {
          for (let index = 0; index <= 3 - a.cases.length; index++) {
            a.cases[a.cases.length + index] = "";
          }
        }
        this.$set(this.questions, i, { ...a });
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
      this.filterCases(this.questions).forEach(v => {
        result[v.question_id] = {
          score: v.score,
          cases: v.cases
        };
      });
      // console.log(result)
      return result;
    },
    filterCases(arr) {
      // 根据分数, 干掉多余的case
      return arr.map(q => {
        if (q.cases && q.cases.length != 0) {
          // console.log(q.cases, 4 - q.score)
          q.cases = q.cases.slice(0, q.score - 2);
        }
        return q;
      });
    },
    submitGrade() {
      const isInValid = this.validateGrade();
      if (isInValid) {
        return this.$message.error("请填写完整案例信息");
      }
      const postData = this.composeData();
      selfMarking(postData, this.$route.params.id).then(res => {
        this.clearDraft();
        this.$notify({
          title: "成功",
          message: "提交成功",
          type: "success"
        });
        this.getGradeInfo();
      });
    },
    saveDraft() {
      const id = `uid_self_${this.$route.params.id}_draft_culture`;
      window.localStorage.setItem(
        id,
        JSON.stringify(this.filterCases(this.questions))
      );
      this.$notify({
        title: "成功",
        message: "草稿保存成功",
        type: "success"
      });
    },
    clearDraft() {
      const id = `uid_self_${this.$route.params.id}_draft_culture`;
      window.localStorage.removeItem(id);
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
