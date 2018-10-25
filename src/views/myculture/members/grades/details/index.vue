
<template>
  <div class="member-grade-details">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container" style="padding:40px">
      <basic-info :data="basicInfo"></basic-info>
      <br>
      <hr>
      <br>
      <rule-text :text="constants.MY_MEMBER_RULE"></rule-text>
      <br>
      <br>
      <div>
        <h3>{{constants.ADVANTAGE}}:</h3>
        <case-area :readOnly="readOnly" v-model="advantage"></case-area>
      </div>
      <br>
      <div>
        <h3>{{constants.PROMOTION}}:</h3>
        <case-area :readOnly="readOnly" v-model="promotion"></case-area>
      </div>
      <br>
      <section class="mark">
        <el-row align="middle" type="flex">
          <el-col style="padding:20px;border-right: 1px solid #979797;">
            <div class="mark-label">
              {{constants.SELF_SCORE}}
            </div>
            <grade-items :items="scores" v-model="selectGradeItem"></grade-items>

          </el-col>
          <el-col style="padding-left:50px;">
            <div v-for="(n,i) in reasons" :key="i" class="mark-reason">
              <div>
                {{i+3}}分理由:
              </div>
              <div>
                {{n}}
              </div>
            </div>
          </el-col>
        </el-row>
      </section>
      <br>
      <div v-for="(v,i) of rejectReason" :key="i">
        <reject-reason :data="v.reason"></reject-reason>
        <br>
      </div>
      <div class="mark-flag-container">
        <div class="mark-section">
          <div class="mark-label">
            为{{employee_name}}的成就客户项目评分
          </div>
          <br>
          <grade-slider :readOnly="readOnly" v-model="scores[selectGradeItem].superior_score"></grade-slider>
        </div>
        <div style="width:20px;"></div>
        <div class="flag-section">
          <div class="mark-label">
            为{{employee_name}}设置等级标签
          </div>
          <br>
          <level-selector :disabled="readOnly" :pre="hasRejectReasons?preLv:''" v-model="level"></level-selector>
        </div>
      </div>
      <br>
      <case-area v-if="scores[selectGradeItem].superior_score!=scores[selectGradeItem].score" :readOnly="readOnly" v-model="scores[selectGradeItem].superior_case"></case-area>
      <br>
      <el-row v-if="!readOnly" type="flex" justify="end">
        <el-button v-if="!submited && !hasRejectReasons" @click="saveDraft" type="primary">{{constants.SAVE_DRAFT}}</el-button>
        <el-button @click="submit" type="primary">{{constants.SUBMIT}}</el-button>
      </el-row>
    </section>
  </div>
</template>
<script>
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
  PROMOTION
} from "@/constants/TEXT";
import {
  PATH_MEMEBER_CULTURE_GRADE,
  PATH_MEMBER_CULTURE_LIST
} from "@/constants/URL";
import { getMyMemberCultureDetails, postMemberGrade } from "@/constants/API";

export default {
  data() {
    return {
      employee_name: "",
      rejectReason: "",
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
        PROMOTION
      }
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
      import("@/components/modules/myculture/rejectreason/index.vue")
  },
  methods: {
    getMemberDetail() {
      getMyMemberCultureDetails(this.$route.params.uid).then(res => {
        const {
          advantage,
          promotion,
          scores,
          employee_name,
          employee_workcode,
          end_time,
          _271_level,
          status,
          reject_record
        } = res;
        this.rejectReason = reject_record;
        this.advantage = advantage;
        this.promotion = promotion;
        this.employee_name = employee_name;
        this.readOnly = res.can_submit == 0;
        this._271_is_necessary = !!res._271_is_necessary;
        this.basicInfo = {
          name: employee_name,
          workcode: employee_workcode,
          finishedTime: `上级评截止时间: ${end_time}`
        };
        this.preLv = this.level = LEVEL_ALIAS[_271_level].toLowerCase();
        // console.log(LEVEL_ALIAS[_271_level])
        const submited = status == 20;
        this.submited = submited;
        const key = `culture_member_draft_${this.$route.params.uid}`;
        const s = window.localStorage.getItem(key);
        if (submited || !s) {
          this.scores = scores.map(s => {
            s.score = s.self_score;
            delete s.self_score;
            return s;
          });
        } else {
          const draft = JSON.parse(s);
          // console.log(draft)
          this.initFromLocal(draft);
        }
      });
    },
    initFromLocal(data) {
      // 读取草稿
      this.scores = data.scores;
      this.level = data.level;
      this.advantage = data.advantage;
      this.promotion = data.promotion;
    },
    composePostData() {
      let result = {};
      this.scores.forEach(v => {
        result[v.question_id] = {
          score: v.superior_score,
          cases: [v.superior_case]
        };
      });
      result.promotion = this.promotion;
      result.advantage = this.advantage;
      result._271_level = LEVELMAP[this.level];
      return result;
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
      const key = `culture_member_draft_${this.$route.params.uid}`;
      window.localStorage.setItem(
        key,
        JSON.stringify({
          scores: this.scores,
          level: this.level,
          advantage: this.advantage,
          promotion: this.promotion
        })
      );
      this.$message({
        message: DRAFT_SAVE_SUCCESSFULLY,
        type: "success"
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
              this.getMemberDetail();
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
    font-size: 24px;
    color: #4a4a4a;
    margin-bottom: 15px;
  }

  & .mark-reason {
    font-size: 14px;
    color: #9b9b9b;
    line-height: 30px;
  }
  & .mark-flag-container {
    display: flex;
    & .mark-section {
      flex: 15;
      background: white;
      padding: 20px;
    }
    & .flag-section {
      flex: 8;
      background: white;
      padding: 20px;
    }
  }
}
</style>
