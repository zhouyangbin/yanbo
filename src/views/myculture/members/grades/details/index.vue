
<template>
  <div class="member-grade-details">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container" style="padding:40px">
      <basic-info :data="basicInfo" :forMember="true"></basic-info>
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
          <level-selector :disabled="readOnly" v-model="level"></level-selector>
        </div>
      </div>
      <br>
      <case-area :readOnly="readOnly" v-model="scores[selectGradeItem].superior_case"></case-area>
      <br>
      <el-row v-if="!readOnly" type="flex" justify="end">
        <el-button type="primary">保存草稿</el-button>
        <el-button type="primary">提交</el-button>
      </el-row>
    </section>
  </div>
</template>
<script>
import {
  MY_MEMBERS,
  MEMBERS_GRADE_LIST,
  MY_MEMBER_RULE,
  LEVEL_ALIAS
} from "@/constants/TEXT";
import {
  PATH_MEMEBER_CULTURE_GRADE,
  PATH_MEMBER_CULTURE_LIST
} from "@/constants/URL";
import { getMyMemberCultureDetails } from "@/constants/API";

export default {
  data() {
    return {
      employee_name: "",
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
      advantage: "",
      promotion: "",
      selectGradeItem: 0,
      readOnly: false,
      scores: [
        {
          cases: []
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
    "case-area": () => import("@/components/common/CaseArea/index.vue"),
    "grade-items": () => import("@/components/common/GradeItem/index.vue"),
    "grade-slider": () => import("@/components/common/GradeSlider/index.vue"),
    "level-selector": () =>
      import("@/components/common/LevelSelector/index.vue")
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
          _271_level
        } = res;
        this.advantage = advantage;
        this.promotion = promotion;
        this.employee_name = employee_name;
        this.readOnly = res.can_submit == 0;
        this.basicInfo = {
          name: employee_name,
          workcode: employee_workcode,
          finishedTime: end_time
        };
        this.level = LEVEL_ALIAS[_271_level].toLowerCase();
        this.scores = scores.map(s => {
          s.score = s.self_score;
          delete s.self_score;
          return s;
        });
      });
    }
  },
  created() {
    this.getMemberDetail();
  },
  computed: {
    reasons() {
      return this.scores[this.selectGradeItem].self_cases;
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
