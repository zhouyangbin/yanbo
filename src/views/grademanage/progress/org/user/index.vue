<template>
  <div class="culture-hr-details-page">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container" style="padding:40px">
      <basic-info :data="basicInfo"></basic-info>
      <br />
      <hr />
      <br />
      <div class="grade-name">{{ evaluation_name }}</div>
      <br />
      <br />
      <el-row type="flex" justify="space-between" align="middle">
        <div>
          <span class="label">{{ constants.TOTAL_SCORES }}</span>
          <span class="total-score">{{ total_score }}分</span>
          <br />
          <br />
          <br />
          <grade-items :items="scores"></grade-items>
          <br />
          <br />
          <br />
          <div v-if="level">
            <span class="label">{{ constants.LEVEL_TAG }}</span>
            <el-button style="margin-left:50px" class="selected selector">{{
              level
            }}</el-button>
          </div>
        </div>
        <div>
          <div v-if="has_history">
            <el-button
              @click="goHistory"
              style="margin-bottom:30px"
              type="primary"
              >{{ constants.CHANGE_RECORDS }}</el-button
            >
          </div>
          <div v-if="isEditable">
            <el-button
              style="margin-bottom:30px"
              @click="goModify"
              type="primary"
              >修改评分</el-button
            >
          </div>
          <div v-if="isRejectOrComplian">
            <el-button @click="goComplain" type="primary">申诉处理</el-button>
          </div>
        </div>
      </el-row>
      <br />
      <br />
      <div>
        <div v-if="showAppealAndRefuse" class="appeal-and-refuse">
          <div v-for="(v, i) of appeal_record" :key="i">
            <span class="label">{{ constants.APPEAL_REASON }}:</span>
            <span class="content">{{ v.reason }}</span>
            <span class="time">{{ v.time }}</span>
          </div>
          <div v-for="(v, i) of reject_record" :key="i">
            <span class="label">{{ constants.REJECT_REASON }}:</span>
            <span class="content">{{ v.reason }}</span>
            <span class="time">{{ v.time }}</span>
          </div>
          <div v-if="feedback_feeling">
            <span class="label">{{ constants.IMPRESSIONS }}:</span>
            <span class="content">{{ feedback_feeling.content }}</span>
            <span class="time">{{ feedback_feeling.time }}</span>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div style="white-space:normal;word-wrap:break-word;word-break:break-all">
        <span class="sub-title">{{ constants.ADVANTAGE }}: &nbsp;</span>
        <span class="content" :inner-html.prop="advantage | linebreak"></span>
      </div>
      <br />
      <div style="white-space:normal;word-wrap:break-word;word-break:break-all">
        <span class="sub-title">{{ constants.PROMOTION }}: &nbsp;</span>
        <span class="content" :inner-html.prop="promotion | linebreak"></span>
      </div>
      <div></div>
      <br />
      <hr />
      <br />
      <div class="detail-header" @click="detailHide = !detailHide">
        {{ constants.GRADE_DETAIL }}
        <i
          :class="detailHide ? 'el-icon-caret-bottom' : 'el-icon-caret-top'"
        ></i>
      </div>
      <br />
      <case-item
        v-show="!detailHide"
        :data="v"
        v-for="(v, i) in scores"
        :key="i"
      ></case-item>
    </section>
  </div>
</template>
<script>
import {
  PATH_GRADE_MANAGE,
  PATH_GRADE_PROGRESS,
  PATH_GRADE_ORG_LIST,
  PATH_GRADE_EMP_DETAIL_CHANGE,
  PATH_GRADE_EMP_DETAIL_HISTORY
} from "@/constants/URL";

import {
  GRADE_PROGRESS,
  GRADE_MANAGE,
  ORG_DETAIL,
  GRADE_DETAIL,
  LEVEL_ALIAS,
  LEVEL_TAG,
  ADVANTAGE,
  PROMOTION,
  IMPRESSIONS,
  APPEAL_REASON,
  REJECT_REASON,
  TOTAL_SCORES,
  CHANGE_RECORDS
} from "@/constants/TEXT";
import { getUserGradeContent } from "@/constants/API";

export default {
  data() {
    return {
      status: 0,
      isManager: false,
      detailHide: true,
      appeal_record: [],
      reject_record: [],
      advantage: "",
      promotion: "",
      has_history: 1,
      total_score: "",
      feedback_feeling: null,
      level: "",
      scores: [],
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
          active: true
        }
      ],
      basicInfo: {
        name: "",
        workcode: "",
        leaderLabel: "上级",
        superior_name: "",
        superior_workcode: "",
        hightlevelLabel: "隔级上级",
        highlevel_name: "",
        highlevel_workcode: ""
      },
      evaluation_name: "",
      constants: {
        LEVEL_TAG,
        ADVANTAGE,
        PROMOTION,
        IMPRESSIONS,
        GRADE_DETAIL,
        APPEAL_REASON,
        REJECT_REASON,
        TOTAL_SCORES,
        CHANGE_RECORDS
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "basic-info": () =>
      import("@/components/modules/myculture/basicinfo/index.vue"),
    "grade-items": () => import("@/components/common/GradeItem/index.vue"),
    "case-item": () =>
      import("@/components/modules/myculture/selfunconfirm/caseitem/index.vue")
  },
  methods: {
    goModify() {
      this.$router.push(
        PATH_GRADE_EMP_DETAIL_CHANGE(
          this.$route.params.id,
          this.$route.params.orgID,
          this.$route.params.uid
        )
      );
    },
    goComplain() {
      this.$router.push({
        path: PATH_GRADE_EMP_DETAIL_CHANGE(
          this.$route.params.id,
          this.$route.params.orgID,
          this.$route.params.uid
        ),
        query: {
          complain: 1
        }
      });
    },
    goHistory() {
      this.$router.push(
        PATH_GRADE_EMP_DETAIL_HISTORY(
          this.$route.params.id,
          this.$route.params.orgID,
          this.$route.params.uid
        )
      );
    },
    getInfo() {
      getUserGradeContent(this.$route.params.uid).then(res => {
        const {
          advantage,
          promotion,
          scores,
          has_history,
          _271_level,
          evaluation_name,
          name,
          workcode,
          superior_name,
          superior_workcode,
          highlevel_name,
          highlevel_workcode,
          evaluation_type,
          total_score,
          status,
          appeal_record,
          reject_record,
          feedback_feeling
        } = res;
        this.promotion = promotion;
        this.appeal_record = appeal_record || [];
        this.reject_record = reject_record || [];
        this.advantage = advantage;
        this.has_history = has_history;
        this.feedback_feeling = feedback_feeling;
        // console.log(superior_name)
        this.isManager = evaluation_type == 2;
        this.status = status;
        this.level = LEVEL_ALIAS[_271_level];
        this.evaluation_name = evaluation_name;
        this.total_score = total_score;
        this.basicInfo = {
          name,
          workcode,
          leaderLabel: "上级",
          superior_name,
          superior_workcode,
          hightlevelLabel: "隔级上级",
          highlevel_name,
          highlevel_workcode
        };
        this.scores = scores.map(s => {
          s.score = s.superior_score;
          return s;
        });
      });
    }
  },
  created() {
    this.getInfo();
  },
  computed: {
    isRejectOrComplian() {
      return this.status == 70;
    },
    isEditable() {
      return (
        (this.isManager &&
          this.status >= 20 &&
          this.status < 100 &&
          JSON.parse(localStorage.getItem("stage")).stage != 100) ||
        //bp 在线下合议开始之后，面谈开始之前，可修改
        (this.status >= 45 &&
          this.status < 50 &&
          JSON.parse(localStorage.getItem("stage")).stage != 100)
      );
    },
    showAppealAndRefuse() {
      return (
        this.appeal_record.length > 0 ||
        this.reject_record.length > 0 ||
        this.feedback_feeling
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.culture-hr-details-page {
  .grade-name {
    color: #4a4a4a;
    font-size: 36px;
    font-weight: bold;
  }
  .label {
    color: #4bc8aa;
    font-size: 24px;
    font-weight: bold;
  }
  .total-score {
    color: #f18d23;
    font-size: 64px;
    line-height: 48px;
  }
  .selector {
    position: relative;
    width: 120px;
    height: 36px;
    padding: 8px 12px;
    background: transparent;
    overflow: visible;
    &.selected,
    &:hover,
    &:focus {
      color: #f18d23;
      //   background: white;
      border: 1px solid #f18d23;
    }
    &.selected::after {
      content: "";
      position: absolute;
      right: -5px;
      z-index: 2;
      width: 48px;
      height: 40px;
      background-image: url("../../../../../assets/img/level_flag.png");
      background-position: center center;
      background-size: contain;
    }
  }
  .sub-title {
    color: #4bc8aa;
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
  }
  .content {
    color: #4a4a4a;
    font-size: 14px;
    line-height: 30px;
  }
  .detail-header {
    color: #4bc8aa;
    font-size: 36px;
    text-align: center;
  }
  & ::v-deep .GradeItem-page .el-button {
    background: transparent;
  }
  .appeal-and-refuse {
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
