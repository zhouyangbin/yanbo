<template>
  <div class="down-member-details-page">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container" style="padding:40px">
      <basic-info :data="basicInfo" :downMember="true"></basic-info>
      <br>
      <hr>
      <br>
      <rule-text :text="constants.MY_DOWN_MEMBER_RULE"></rule-text>
      <br>
      <br>
      <case-area :readOnly="true" v-model="advantage"></case-area>
      <br>
      <case-area :readOnly="true" v-model="promotion"></case-area>
      <br>
      <el-row class="mark-section" align="middle" type="flex">
        <el-col style="border-right: 1px solid #979797;">
          <div class="mark-label">
            上级评分数: <span class="score">15.5分</span>
          </div>
          <grade-items :items="scores" v-model="selectGradeItem"></grade-items>
          <br>
          <br>
          <div class="mark-label">
            等级标签
          </div>
          <level-selector :disabled="true" v-model="level">
            <el-button style="margin-left:20px" type="primary" round>修改</el-button>
          </level-selector>
          <br>
        </el-col>
        <br>
        <el-col style="padding-left:50px;">
          <div class="mark-reason">
            <div>
              上级评理由:
            </div>
            <div>
              {{leaderReason}}
            </div>
          </div>
          <br>
          <div>
            员工自评分数: {{total}}分, {{curItemName}}: {{selfScore}}分
          </div>
          <div v-for="(n,i) in selfCases" :key="i" class="mark-reason">
            <div>
              {{i+3}}分理由:
            </div>
            <div>
              {{n}}
            </div>
          </div>
        </el-col>
      </el-row>
      <br>
      <case-area placeholder="请您填写驳回理由" v-model="rejectReason"></case-area>
      <br>
      <el-row v-if="!readOnly" type="flex" justify="end">
        <el-button type="primary">驳回</el-button>
        <el-button type="primary">确认</el-button>
      </el-row>
    </section>
  </div>
</template>
<script>
import {
  MY_DOWN_MEMBER,
  DOWN_MEMBERS_GRADE_LIST,
  MY_DOWN_MEMBER_RULE,
  LEVEL_ALIAS
} from "@/constants/TEXT";

import {
  PATH_DOWN_MEMEBER_CULTURE_GRADE,
  PATH_DOWN_MEMBER_CULTURE_LIST
} from "@/constants/URL";

import { getMyDownMemberCultureDetails } from "@/constants/API";

export default {
  data() {
    return {
      advantage: "",
      promotion: "",
      rejectReason: "",
      basicInfo: {},
      scores: [
        {
          cases: []
        }
      ],
      total: "",
      nav: [
        {
          label: DOWN_MEMBERS_GRADE_LIST,
          href: PATH_DOWN_MEMEBER_CULTURE_GRADE
        },
        {
          label: MY_DOWN_MEMBER,
          href: PATH_DOWN_MEMBER_CULTURE_LIST(this.$route.params.id)
        },
        {
          label: "隔级详情",
          active: true
        }
      ],
      level: "",
      readOnly: false,
      selectGradeItem: 0,
      gradeItems: [
        {
          text: "成就客户",
          total: 12
        },
        {
          text: "务实",
          total: 12
        },
        {
          text: "创新",
          total: 12
        },
        {
          text: "合作",
          total: 12
        }
      ],
      constants: {
        MY_DOWN_MEMBER_RULE
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
    "level-selector": () =>
      import("@/components/common/LevelSelector/index.vue")
  },
  methods: {
    getDetailInfo() {
      getMyDownMemberCultureDetails(this.$route.params.uid).then(res => {
        // console.log(res)
        const {
          advantage,
          promotion,
          superior_name,
          superior_workcode,
          end_time,
          scores,
          _271_level,
          total_score
        } = res;
        this.advantage = advantage;
        this.promotion = promotion;
        this.basicInfo = {
          superior_workcode,
          superior_name,
          finishedTime: end_time
        };
        this.scores = scores.map(s => {
          s.score = s.superior_score;
          delete s.superior_score;
          return s;
        });
        this.total = total_score;
        this.level = LEVEL_ALIAS[_271_level].toLowerCase();
        this.readOnly = res.can_submit == 0;
      });
    }
  },
  created() {
    this.getDetailInfo();
  },
  computed: {
    leaderReason() {
      return this.scores[this.selectGradeItem].superior_case;
    },
    selfCases() {
      return this.scores[this.selectGradeItem].self_cases;
    },
    selfScore() {
      return this.scores[this.selectGradeItem].self_score;
    },
    curItemName() {
      return this.scores[this.selectGradeItem].question_name;
    }
  }
};
</script>
<style lang="scss" scoped>
.down-member-details-page {
  .mark-section {
    padding: 20px;
    background: white;
  }
  .mark-label {
    font-size: 24px;
    color: #4a4a4a;
    margin-bottom: 15px;
    .score {
      font-size: 36px;
    }
  }
  .mark-reason {
    font-size: 14px;
    color: #9b9b9b;
    line-height: 30px;
  }
}
</style>
