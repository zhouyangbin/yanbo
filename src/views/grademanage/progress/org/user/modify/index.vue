<template>
  <div class="culture-hr-details-modify-page">
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
      <case-area :readOnly="readOnly" v-model="advantage"></case-area>
      <br>
      <case-area :readOnly="readOnly" v-model="promotion"></case-area>
      <br>
      <section class="mark">
        <el-row align="middle" type="flex">
          <el-col style="padding:20px;border-right: 1px solid #979797;">
            <div class="mark-label">
              自评分数
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
            为{{employee_name}}设计等级标签
          </div>
          <br>
          <level-selector :pre="preLv" :disabled="readOnly" v-model="level"></level-selector>
        </div>
      </div>
      <br>
      <case-area :readOnly="readOnly" v-model="scores[selectGradeItem].superior_case"></case-area>
      <br>
      <div v-if="!forReject">
        <case-area :readOnly="readOnly" placeholder="请填写修改理由" v-model="reason"></case-area>
        <br>
      </div>
      <el-row v-if="!readOnly" type="flex" justify="end">
        <!-- <el-button v-if="!submited" @click="saveDraft" type="primary">保存草稿</el-button> -->
        <el-button @click="submit" type="primary">提交</el-button>
      </el-row>
    </section>
  </div>
</template>
<script>
import {
  PATH_GRADE_MANAGE,
  PATH_GRADE_PROGRESS,
  PATH_GRADE_ORG_LIST,
  PATH_GRADE_EMP_DETAIL
} from "@/constants/URL";
import {
  GRADE_PROGRESS,
  GRADE_MANAGE,
  ORG_DETAIL,
  GRADE_DETAIL,
  MY_MEMBER_RULE,
  LEVEL_ALIAS,
  LEVELMAP
} from "@/constants/TEXT";
import {
  getMyMemberCultureDetails,
  postManagerModify,
  reevaluate
} from "@/constants/API";

export default {
  data() {
    return {
      basicInfo: {
        name: "",
        workcode: ""
      },
      employee_name: "",
      readOnly: false,
      advantage: "",
      promotion: "",
      selectGradeItem: 0,
      level: "",
      preLv: "",
      reason: "",
      forReject: true,
      lv_necessary: true,
      scores: [
        {
          cases: []
        }
      ],
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_GRADE_MANAGE
        },
        {
          label: GRADE_PROGRESS,
          href: PATH_GRADE_PROGRESS(this.$route.params.id)
        },
        {
          label: ORG_DETAIL,
          href: PATH_GRADE_ORG_LIST(
            this.$route.params.id,
            this.$route.params.orgID
          )
        },
        {
          label: GRADE_DETAIL,
          href: PATH_GRADE_EMP_DETAIL(
            this.$route.params.id,
            this.$route.params.orgID,
            this.$route.params.uid
          )
        },
        {
          label: "评分修改",
          active: true
        }
      ],
      constants: {
        MY_MEMBER_RULE
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "basic-info": () =>
      import("@/components/modules/myculture/basicinfo/index.vue"),
    "rule-text": () =>
      import("@/components/modules/myculture/ruletext/index.vue"),
    "grade-items": () => import("@/components/common/GradeItem/index.vue"),
    "grade-slider": () => import("@/components/common/GradeSlider/index.vue"),
    "level-selector": () =>
      import("@/components/common/LevelSelector/index.vue"),
    "case-area": () => import("@/components/common/CaseArea/index.vue")
  },
  computed: {
    reasons() {
      return this.scores[this.selectGradeItem].self_cases;
    }
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
          _271_is_necessary
        } = res;
        this.advantage = advantage;
        this.promotion = promotion;
        this.employee_name = employee_name;
        this.basicInfo = {
          name: employee_name,
          workcode: employee_workcode
          // finishedTime: end_time
        };
        this.lv_necessary = _271_is_necessary == 1;
        this.preLv = this.level = LEVEL_ALIAS[_271_level].toLowerCase();

        this.scores = scores.map(s => {
          s.score = s.self_score;
          delete s.self_score;
          return s;
        });
      });
    },
    submit() {
      const valid = this.validate();
      if (!valid) {
        this.$message({
          message: "请填写完整理由!",
          type: "warning"
        });
        return;
      }
      let postData = this.composePostData();
      if (this.forReject) {
        reevaluate(this.$route.params.uid, postData)
          .then(res => {
            this.$message({
              message: "修改成功",
              type: "success"
            });

            this.$router.go(-1);
          })
          .catch(e => {});
      } else {
        postData.reason = this.reason;
        postManagerModify(this.$route.params.uid, postData)
          .then(res => {
            this.$message({
              message: "修改成功",
              type: "success"
            });

            this.$router.go(-1);
          })
          .catch(e => {});
      }
    },
    validate() {
      if (!this.advantage || !this.promotion) {
        this.$message({
          message: "请填写优点和待提升部分",
          type: "warning"
        });
        return;
      }
      if (!this.level && this.lv_necessary) {
        this.$message({
          message: "请选择等级!",
          type: "warning"
        });
        return;
      }
      if (!this.forReject && !this.reason) {
        this.$message({
          message: "请填写修改理由!",
          type: "warning"
        });
        return;
      }
      return this.checkReason();
    },
    checkReason() {
      // console.log(this.scores)
      // 自评和上级评分数不一样,必须有原因
      return !this.scores.some(v => {
        return v.score != v.superior_score && !v.superior_case;
      });
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
    }
  },
  created() {
    this.getMemberDetail();
    // console.log(this.$route)
    this.forReject = this.$route.query.complain == 1;
  }
};
</script>
<style lang="scss" scoped>
.culture-hr-details-modify-page {
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
