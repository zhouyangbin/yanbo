<template>
  <div class="culture-hr-details-history-page">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container" style="padding:40px">
      <basic-info :data="basicInfo"></basic-info>
      <br>
      <hr>
      <br>
      <history-cards :selectedIndex.sync="selectedIndex" :data="list"></history-cards>
      <br>
      <case-area :readOnly="readOnly" v-model="list[selectedIndex].change_reason"></case-area>
      <br>
      <case-area :readOnly="readOnly" v-model="list[selectedIndex].advantage"></case-area>
      <br>
      <case-area :readOnly="readOnly" v-model="list[selectedIndex].promotion"></case-area>
      <br>
      <section class="mark">
        <el-row align="middle" type="flex">
          <el-col style="padding:20px;border-right: 1px solid #979797;">
            <div class="mark-label">
              自评分数
            </div>
            <grade-items :items="gradeItems" v-model="selectGradeItem"></grade-items>
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
            为{{basicInfo.name}}的成就客户项目评分
          </div>
          <br>
          <grade-slider :readOnly="readOnly" v-model="list[selectedIndex].scores[selectGradeItem].superior_score"></grade-slider>
        </div>
        <div style="width:20px;"></div>
        <div class="flag-section">
          <div class="mark-label">
            为{{basicInfo.name}}设置等级标签
          </div>
          <br>
          <level-selector :disabled="readOnly" v-model="currentLv"></level-selector>
        </div>
      </div>
      <br>
      <case-area :readOnly="readOnly" v-model="list[selectedIndex].scores[selectGradeItem].superior_case"></case-area>
      <br>
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
  LEVEL_ALIAS
} from "@/constants/TEXT";
import { getHistoryModifyList } from "@/constants/API";

export default {
  data() {
    return {
      basicInfo: {},
      selectedIndex: 0,
      selectGradeItem: 0,
      readOnly: true,
      level: "",
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
          label: "修改历史",
          active: true
        }
      ],
      list: [
        {
          scores: [{}]
        }
      ],
      constants: {
        LEVEL_ALIAS
      }
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
        .self_case;
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
