<template>
  <div class="self-grade-component">
    <section class="mark">
      <el-row align="middle" type="flex">
        <el-col style="padding:20px;border-right: 1px solid #979797;">
          <div class="mark-label">请选择评分项目</div>
          <grade-items
            :items="questions"
            v-model="selectGradeItem"
          ></grade-items>
          <br />
          <br />
          <div class="mark-label">请评分</div>
          <br />
          <grade-slider
            :min="1"
            :readOnly="readOnly"
            :step="1"
            :max="5"
            v-model="questions[selectGradeItem].score"
          ></grade-slider>
        </el-col>
        <el-col style="padding-left:50px;">
          <div class="mark-score">
            {{
              questions[selectGradeItem].score &&
              questions[selectGradeItem].score >= 0
                ? questions[selectGradeItem].score
                : ""
            }}分
          </div>
          <div class="mark-desc">{{ contentForCurScore }}</div>
        </el-col>
      </el-row>
    </section>
    <br />
    <div v-show="questions[selectGradeItem].score >= 3">
      <case-area
        :readOnly="readOnly"
        placeholder="请填写我的3分案例"
        v-model="questions[selectGradeItem].cases[0]"
      ></case-area>
      <br />
      <div v-show="questions[selectGradeItem].score >= 4">
        <case-area
          :readOnly="readOnly"
          placeholder="请填写我的4分案例"
          v-model="questions[selectGradeItem].cases[1]"
        ></case-area>
        <br />
        <div v-show="questions[selectGradeItem].score >= 5">
          <case-area
            :readOnly="readOnly"
            placeholder="请填写我的5分案例"
            v-model="questions[selectGradeItem].cases[2]"
          ></case-area>
          <br />
        </div>
      </div>
    </div>

    <el-row v-show="!readOnly" type="flex" justify="end">
      <el-button @click="saveDraft" v-if="neverSubmit" type="primary">
        {{ constants.SAVE_DRAFT }}
      </el-button>
      <el-button @click="submitGrade" type="primary">
        {{ constants.SUBMIT }}
      </el-button>
    </el-row>
  </div>
</template>
<script>
import {
  getMyEvaluation,
  selfMarking,
  getMyGradeDraft,
  saveMyGradeDraft
} from "@/constants/API";
import {
  SUBMIT,
  SAVE_DRAFT,
  SUCCESS,
  CONST_ADD_SUCCESS,
  DRAFT_SAVE_SUCCESSFULLY
} from "@/constants/TEXT";
import { PATH_MY_CULTURE_GRADE } from "@/constants/URL";

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
      readOnly: false,
      constants: {
        SUBMIT,
        SAVE_DRAFT
      }
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
        const neverSubmit = res.is_new_record == 1;
        this.neverSubmit = neverSubmit;
        if (neverSubmit) {
          getMyGradeDraft(id).then(res => {
            this.preProcessQuestions(res.questions);
          });
        } else {
          this.preProcessQuestions(res.questions);
        }
        const {
          employee_name,
          employee_workcode,
          highlevel_name,
          highlevel_workcode,
          self_end_time,
          superior_name,
          superior_workcode
        } = res;
        this.$parent.basicInfo = {
          name: employee_name,
          workcode: employee_workcode,
          leaderLabel: "我的上级",
          superior_name,
          highlevel_name,
          superior_workcode,
          hightlevelLabel: "隔级上级",
          highlevel_workcode,
          finishedTime: `自评截止时间: ${self_end_time}`
        };
        this.readOnly = res.can_edit == 0;
        this.$forceUpdate();
      });
    },
    preProcessQuestions(arr) {
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
    scoreCheck(item, score) {
      if (item.score == score) {
        const index = this.caseValidate(i, score);
        if (index != -1) {
          this.$message.error(
            `${i.question_name}${index + 3}分理由未填写，请填写后提交!`
          );
          return true;
        }
      }
      return false;
    },
    validateGrade() {
      return this.questions.some(i => {
        if (!i.score) {
          this.$message.error(`${i.question_name}评分未选择!`);
          return true;
        }

        if ([3, 4, 5].includes(parseInt(i.score))) {
          if (this.scoreCheck(i)) return true;
        }

        return false;
      });
    },
    caseValidate(item, score) {
      const max = score - 3;
      for (let index = 0; index <= max; index++) {
        if (item.cases[index] == undefined || item.cases[index].length == 0) {
          return index;
        }
      }
      return -1;
    },
    composeData() {
      let result = {};
      this.filterCases(this.questions).forEach(v => {
        result[v.question_id] = {
          score: v.score,
          cases: v.cases.filter(i => !!i)
        };
      });
      return result;
    },
    filterCases(arr) {
      // 根据分数, 干掉多余的case
      return arr.map(q => {
        if (q.cases && q.cases.length != 0) {
          q.cases = q.cases.slice(0, q.score - 2);
        }
        return q;
      });
    },
    submitGrade() {
      const isInValid = this.validateGrade();
      if (isInValid) {
        return;
      }
      const postData = this.composeData();
      selfMarking(postData, this.$route.params.id).then(res => {
        this.$notify({
          title: SUCCESS,
          message: CONST_ADD_SUCCESS,
          type: "success"
        });
        // this.getGradeInfo();
        this.$router.replace(PATH_MY_CULTURE_GRADE);
      });
    },
    saveDraft() {
      saveMyGradeDraft(this.$route.params.id, {
        ...this.composeData(),
        type: 1
      }).then(res => {
        this.$notify({
          title: SUCCESS,
          message: DRAFT_SAVE_SUCCESSFULLY,
          type: "success"
        });
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
