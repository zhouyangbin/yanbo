<template>
  <div class="culture-hr-details-history-page">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container" style="padding:0.6rem">
      <basic-info :data="basicInfo"></basic-info>
      <br>
      <hr>
      <br>
      <history-cards :selectedIndex.sync="selectedIndex" :data="list"></history-cards>
      <br>
      <div>
        <h3>{{constants.CHANGE_REASON}}:</h3>
        <case-area :readOnly="readOnly" v-model="list[selectedIndex].change_reason"></case-area>
      </div>
      <br>
      <div>
        <h3>{{constants.ADVANTAGE}}:</h3>
        <case-area :readOnly="readOnly" v-model="list[selectedIndex].advantage"></case-area>
      </div>
      <br>
      <div>
        <h3>{{constants.PROMOTION}}:</h3>
        <case-area :readOnly="readOnly" v-model="list[selectedIndex].promotion"></case-area>
      </div>
      <br>
      <section class="mark">
        <el-row align="middle" type="flex">
          <el-col style="padding:0.3rem;border-right: 1px solid #979797;">
            <div class="mark-label">自评分数</div>
            <grade-items :items="gradeItems" v-model="selectGradeItem"></grade-items>
          </el-col>
          <el-col style="padding-left:0.75rem;">
            <div v-for="(n,i) in reasons" :key="i" class="mark-reason">
              <div>{{i+3}}分理由:</div>
              <div>{{n}}</div>
            </div>
          </el-col>
        </el-row>
      </section>
      <br>
      <div class="mark-flag-container">
        <div class="mark-section">
          <div
            class="mark-label"
          >为{{basicInfo.name}}的{{gradeItems[selectGradeItem].question_name}}项目评分</div>
          <br>
          <grade-slider
            :readOnly="readOnly"
            v-model="list[selectedIndex].scores[selectGradeItem].superior_score"
          ></grade-slider>
        </div>
        <div style="width:0.3rem;"></div>
        <div class="flag-section">
          <div class="mark-label">为{{basicInfo.name}}设置等级标签</div>
          <br>
          <level-selector :disabled="readOnly" v-model="currentLv"></level-selector>
        </div>
      </div>
      <br>
      <div
        v-if="list[selectedIndex].scores[selectGradeItem].self_score!=list[selectedIndex].scores[selectGradeItem].superior_score"
      >
        <case-area
          :readOnly="readOnly"
          v-model="list[selectedIndex].scores[selectGradeItem].superior_case"
        ></case-area>
        <br>
      </div>
      <br>
      <br>
      <div v-if="hasChanges" class="detail-header" @click="detailHide =!detailHide">
        {{constants.CHANGE_RECORDS}}
        <i
          :class="detailHide?'el-icon-caret-bottom':'el-icon-caret-top'"
        ></i>
        <li class="change-item" v-if="!detailHide" v-for="(v,i) of changes" :key="i">{{v}}</li>
      </div>
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
  LEVEL_ALIAS,
  ADVANTAGE,
  PROMOTION,
  CHANGE_REASON,
  CHANGE_RECORDS
} from "@/constants/TEXT";
import { getHistoryModifyList } from "@/constants/API";

export default {
  data() {
    return {
      basicInfo: {},
      selectedIndex: 0,
      selectGradeItem: 0,
      readOnly: true,
      // level: "",
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
          label: CHANGE_RECORDS,
          active: true
        }
      ],
      list: [
        {
          scores: [{}]
        }
      ],
      constants: {
        LEVEL_ALIAS,
        ADVANTAGE,
        PROMOTION,
        CHANGE_REASON,
        CHANGE_RECORDS
      },
      changes: [],
      detailHide: true
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "basic-info": () =>
      import("@/components/modules/myculture/basicinfo/index.vue"),
    "history-cards": () => import("@/components/common/HistoryCard/index.vue"),
    "case-area": () => import("@/components/common/CaseArea/index.vue"),
    "grade-items": () => import("@/components/common/GradeItem/index.vue"),
    "grade-slider": () => import("@/components/common/GradeSlider/index.vue"),
    "level-selector": () =>
      import("@/components/common/LevelSelector/index.vue")
  },
  methods: {
    getHistory() {
      getHistoryModifyList(this.$route.params.uid).then(res => {
        const { records, info } = res;
        this.changes = info.changes || [];
        this.list = records;
        this.basicInfo = {
          ...info,
          leaderLabel: "上级",
          hightlevelLabel: "隔级上级"
        };
      });
    }
  },
  created() {
    this.getHistory();
  },
  computed: {
    reasons() {
      return this.list[this.selectedIndex].scores[this.selectGradeItem]
        .self_cases;
    },
    currentLv() {
      return (
        this.constants.LEVEL_ALIAS[this.list[this.selectedIndex]._271_level] ||
        ""
      ).toLowerCase();
    },
    gradeItems() {
      return (this.list[this.selectedIndex].scores || []).map(v => {
        v.score = v.self_score;
        return v;
      });
    },
    hasChanges() {
      return this.changes.length > 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.culture-hr-details-history-page {
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
      flex: 15;
      padding: 20px;
      background: white;
    }
    & .flag-section {
      flex: 8;
      padding: 20px;
      background: white;
    }
  }
  .detail-header {
    color: #4bc8aa;
    font-size: 36px;
    text-align: center;
    .change-item {
      color: #4a4a4a;
      font-size: 18px;
      text-align: left;
    }
  }
}
</style>
