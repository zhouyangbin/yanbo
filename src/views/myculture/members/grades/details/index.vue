<template>
  <div class="member-grade-details">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <section class="content-container" style="padding:40px">
      <basic-info :data="basicInfo"></basic-info>
      <br />
      <hr />
      <br />
      <el-row type="flex" justify="space-between">
        <rule-text :text="constants.MY_MEMBER_RULE"></rule-text>
        <el-button
          style="align-self:flex-start"
          v-if="has_history"
          @click="goHistory"
          type="primary"
          >{{ constants.CHANGE_RECORDS }}</el-button
        >
      </el-row>
      <br />
      <div class="feeback-container" v-if="feedback_feeling">
        <div>
          <span class="label">{{ constants.IMPRESSIONS }}:</span>
          <span class="content">{{ feedback_feeling.content }}</span>
          <span class="time">{{ feedback_feeling.time }}</span>
        </div>
        <br />
      </div>
      <div>
        <h3>{{ constants.ADVANTAGE }}:</h3>
        <case-area :readOnly="readOnly" v-model="advantage"></case-area>
      </div>
      <br />
      <div>
        <h3>{{ constants.PROMOTION }}:</h3>
        <case-area :readOnly="readOnly" v-model="promotion"></case-area>
      </div>
      <br />
      <section class="mark">
        <el-row align="middle" type="flex">
          <el-col style="padding:20px;border-right: 1px solid #979797;">
            <div class="mark-label">{{ constants.SELF_SCORE }}</div>
            <grade-items
              :items="scores"
              v-model="selectGradeItem"
            ></grade-items>
          </el-col>
          <el-col style="padding-left:50px;">
            <div class="mark-reason">
              <div v-for="(n, i) in reasons" :key="i">
                <div>{{ i + 3 }}分理由:</div>
                <div :inner-html.prop="n | linebreak | placeholder('无')"></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </section>
      <br />
      <div v-for="(v, i) of rejectReason" :key="i">
        <reject-reason :data="v.reason"></reject-reason>
        <br />
      </div>
      <div class="mark-flag-container">
        <div class="mark-section">
          <div class="mark-label">
            为{{ employee_name }}的{{
              scores[selectGradeItem].question_name
            }}项目评分
          </div>
          <br />
          <grade-slider
            :readOnly="readOnly"
            v-model="scores[selectGradeItem].superior_score"
          ></grade-slider>
        </div>
        <div style="width:20px;"></div>
        <div class="flag-section">
          <div class="mark-label">为{{ employee_name }}设置等级标签</div>
          <br />
          <level-selector
            :disabled="readOnly"
            :pre="hasRejectReasons ? preLv : ''"
            v-model="level"
          ></level-selector>
        </div>
      </div>
      <br />
      <case-area
        v-if="
          scores[selectGradeItem].superior_score !=
            scores[selectGradeItem].score
        "
        :readOnly="readOnly"
        v-model="scores[selectGradeItem].superior_case"
      ></case-area>
      <br />
      <div v-for="(item, index) in appealReason" :key="`${index}${item.time}`">
        <appeal-reason :data="item"></appeal-reason>
      </div>
      <br />
      <div class="total-scores">
        总分:
        <span class="score">{{ totalSuperiorScore }}</span>
      </div>
      <br />
      <el-row v-if="!readOnly" type="flex" justify="end">
        <el-button
          v-if="!submited && !hasRejectReasons"
          @click="saveDraft"
          type="primary"
          >{{ constants.SAVE_DRAFT }}</el-button
        >
        <el-button @click="submit" type="primary">
          {{ constants.SUBMIT }}
        </el-button>
      </el-row>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import {
  MY_MEMBERS,
  MEMBERS_GRADE_LIST,
  MY_MEMBER_RULE,
  LEVEL_ALIAS,
  LEVELMAP,
  SELF_SCORE,
  SAVE_DRAFT,
  SUBMIT,
  DRAFT_SAVE_SUCCESSFULLY,
  CONFIRM,
  CANCEL,
  CONST_ADD_SUCCESS,
  ADVANTAGE,
  PROMOTION,
  BREAK_STATUS,
  IMPRESSIONS,
  CHANGE_RECORDS
} from "@/constants/TEXT";
import {
  PATH_MEMEBER_CULTURE_GRADE,
  PATH_MEMBER_CULTURE_LIST,
  PATH_MEMBER_CULTURE_DETAILS_HISTORY
} from "@/constants/URL";
import {
  getMyMemberCultureDetails,
  postMemberGrade,
  getMyMemberDetailDraft,
  saveMyGradeDraft
} from "@/constants/API";

export default {
  data() {
    return {
      employee_name: "",
      rejectReason: "",
      appealReason: [],
      basicInfo: {},
      nav: [
        {
          label: MEMBERS_GRADE_LIST,
          href: PATH_MEMEBER_CULTURE_GRADE
        },
        {
          label: MY_MEMBERS,
          href: PATH_MEMBER_CULTURE_LIST(this.$route.params.id)
        },
        {
          label: "下级详情",
          active: true
        }
      ],
      level: "",
      preLv: "",
      advantage: "",
      promotion: "",
      selectGradeItem: 0,
      submited: false,
      readOnly: false,
      scores: [
        {
          cases: []
        }
      ],
      constants: {
        MY_MEMBER_RULE,
        SELF_SCORE,
        SAVE_DRAFT,
        SUBMIT,
        ADVANTAGE,
        PROMOTION,
        IMPRESSIONS,
        CHANGE_RECORDS
      },
      feedback_feeling: null,
      has_history: false
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "basic-info": () =>
      import("@/components/modules/myculture/basicinfo/index.vue"),
    "rule-text": () =>
      import("@/components/modules/myculture/ruletext/index.vue"),
    "case-area": () => import("@/components/common/CaseArea/index.vue"),
    "grade-items": () => import("@/components/common/GradeItem/index.vue"),
    "grade-slider": () => import("@/components/common/GradeSlider/index.vue"),
    "level-selector": () =>
      import("@/components/common/LevelSelector/index.vue"),
    "reject-reason": () =>
      import("@/components/modules/myculture/rejectreason/index.vue"),
    "appeal-reason": () =>
      import("@/components/modules/myculture/appealreason/index.vue")
  },
  methods: {
    getMemberDetail() {
      getMyMemberCultureDetails(this.$route.params.uid).then(res => {
        const { status } = res;

        const submited = status >= 20;
        this.submited = submited;

        if (submited) {
          this.handleResponse(res);
        } else {
          getMyMemberDetailDraft(this.$route.params.uid).then(res => {
            this.handleResponse(res);
          });
        }
      });
    },
    handleResponse(res) {
      const {
        advantage,
        promotion,
        scores,
        employee_name,
        employee_workcode,
        end_time,
        _271_level,
        status,
        reject_record,
        appeal_record,
        break_status,
        superior_start_time,
        feedback_feeling,
        has_history
      } = res;
      this.has_history = has_history == 1;
      this.feedback_feeling = feedback_feeling;
      this.rejectReason = reject_record;
      this.advantage = advantage;
      this.promotion = promotion;
      this.employee_name = employee_name;
      this.readOnly = res.can_submit == 0;
      this.appealReason = appeal_record || [];
      this._271_is_necessary = !!res._271_is_necessary;
      let breakStatus;
      if (break_status == 0) {
        breakStatus =
          new Date() <= new Date(superior_start_time) ? "未开始" : "";
      } else {
        breakStatus = BREAK_STATUS[break_status];
      }

      this.basicInfo = {
        name: employee_name,
        workcode: employee_workcode,
        breakStatus,
        finishedTime: `上级评截止时间: ${end_time}`
      };
      this.preLv = this.level = LEVEL_ALIAS[_271_level].toLowerCase();
      this.scores = scores.map(s => {
        s.score = s.self_score;
        delete s.self_score;
        return s;
      });
    },
    composePostData() {
      let result = {};
      this.scores.forEach(v => {
        result[v.question_id] = {
          score: v.superior_score,
          cases: [v.superior_case].filter(v => !!v)
        };
      });
      result.promotion = this.promotion;
      result.advantage = this.advantage;
      result._271_level = LEVELMAP[this.level] || "";
      return result;
    },
    goHistory() {
      this.$router.push(
        PATH_MEMBER_CULTURE_DETAILS_HISTORY(
          this.$route.params.id,
          this.$route.params.uid
        )
      );
    },
    validateData() {
      if (!this.advantage || !this.promotion) {
        this.$message({
          message: "请填写优点和待提升部分",
          type: "warning"
        });
        return;
      }
      if (!this.level && this._271_is_necessary) {
        this.$message({
          message: "请选择等级!",
          type: "warning"
        });
        return;
      }
      return this.checkReason();
    },
    checkReason() {
      // 自评和上级评分数不一样,必须有原因
      return !this.scores.some(v => {
        const err = v.score != v.superior_score && !v.superior_case;
        if (err) {
          this.$message.error(
            `${v.question_name}评分理由未填写，请填写后提交!`
          );
        }
        return err;
      });
    },
    saveDraft() {
      saveMyGradeDraft(this.$route.params.uid, {
        ...this.composePostData(),
        type: 2
      }).then(res => {
        this.$message({
          message: DRAFT_SAVE_SUCCESSFULLY,
          type: "success"
        });
      });
    },
    submit() {
      const valid = this.validateData();
      if (!valid) {
        return;
      }
      this.$confirm("是否确定提交, 是否继续?", "提示", {
        confirmButtonText: CONFIRM,
        cancelButtonText: CANCEL,
        type: "warning"
      })
        .then(() => {
          postMemberGrade(this.$route.params.uid, this.composePostData())
            .then(res => {
              this.$message({
                message: CONST_ADD_SUCCESS,
                type: "success"
              });
              this.$router.replace(
                PATH_MEMBER_CULTURE_LIST(this.$route.params.id)
              );
            })
            .catch(e => {});
        })
        .catch(() => {});
    }
  },
  created() {
    this.getMemberDetail();
  },
  computed: {
    reasons() {
      return this.scores[this.selectGradeItem].self_cases;
    },
    hasRejectReasons() {
      return this.rejectReason.length > 0;
    },
    totalSuperiorScore() {
      const total = this.scores
        .map(s => s.superior_score)
        .reduce((p, n) => p + n, 0);
      return isNaN(total) || total < 0 ? "无" : total;
    }
  }
};
</script>
<style lang="scss" scoped>
.member-grade-details {
  &.content-container {
    padding: 20px;
  }

  & .mark {
    padding: 20px;
    background: white;
  }
  & .mark-label {
    margin-bottom: 15px;
    color: #4a4a4a;
    font-size: 24px;
  }

  & .mark-reason {
    overflow: auto;
    max-height: 150px !important;
    color: #9b9b9b;
    font-size: 14px;
    line-height: 30px;
  }
  & .mark-flag-container {
    display: flex;
    & .mark-section {
      flex: 14;
      padding: 20px;
      background: white;
    }
    & .flag-section {
      flex: 9;
      flex-basis: 80px;
      flex-shrink: 0;
      padding: 20px;
      background: white;
    }
  }
  .feeback-container {
    position: relative;
    padding: 20px;
    background: white;
    & > div {
      position: relative;
    }
    & .label {
      color: #f18d23;
      font-size: 24px;
      line-height: 30px;
    }
    & .content {
      color: #000;
      font-size: 14px;
    }
    & .time {
      position: absolute;
      right: 0;
    }
  }
}
</style>
