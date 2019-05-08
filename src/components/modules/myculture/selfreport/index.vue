<template>
  <div class="self-report-page">
    <div class="nav">
      <div class="nav-left">
        <div>
          <span>{{ basicInfo.name }}</span>
          <span class="code">{{ basicInfo.workcode }}</span>
        </div>
        <div>/</div>
        <div>
          <span>{{ basicInfo.superior_name }}</span>
          <span class="code">{{ basicInfo.superior_workcode }}</span>
        </div>

        <div>/</div>
        <div>
          <span>{{ basicInfo.highlevel_name }}</span>
          <span class="code">{{ basicInfo.highlevel_workcode }}</span>
        </div>
      </div>
      <div class="grade-name">{{ gradeName }}</div>
    </div>

    <br />
    <br />
    <el-row :gutter="20" type="flex">
      <el-col>
        <section class="plane-chart">
          <div class="total-section">
            <div>
              您的总分:
              <span class="score">{{ total }}分</span>
            </div>
            <div style="margin-left:20%" v-if="true || (visible_271 && level)">
              {{ constants.LEVEL_TAG }}:
              <el-button class="selector selected">
                {{ constants.LEVEL_ALIAS[level] }}
              </el-button>
            </div>
          </div>
          <plane :planeScore="planeScore"></plane>
        </section>
      </el-col>
      <el-col>
        <div class="summary-right-container">
          <span class="sub-title">{{ constants.ADVANTAGE }}: &nbsp;</span>
          <span class="content">{{ advantage }}</span>
        </div>
        <div class="summary-right-container">
          <span class="sub-title">{{ constants.PROMOTION }}: &nbsp;</span>
          <span class="content">{{ promotion }}</span>
        </div>
      </el-col>
    </el-row>
    <br />

    <br />
    <section class="detail-info">
      <div class="sub-title title">{{ constants.GRADE_DETAIL }}</div>
      <case-item
        class="small"
        :data="v"
        v-for="(v, i) in scores"
        :key="i"
      ></case-item>
    </section>

    <!-- <div class="detail-header" @click="detailHide = !detailHide">
      <i :class="detailHide ? 'el-icon-caret-bottom' : 'el-icon-caret-top'"></i>
    </div>
    <br>-->
  </div>
</template>
<script>
import { getMyCultureReport } from "@/constants/API";
import {
  LEVEL_ALIAS,
  LEVEL_TAG,
  ADVANTAGE,
  PROMOTION,
  GRADE_DETAIL
} from "@/constants/TEXT";

export default {
  data() {
    return {
      advantage: "",
      promotion: "",
      total: "",
      scores: [],
      gradeName: "",
      visible_271: false,
      level: "",
      basicInfo: {},
      constants: {
        LEVEL_ALIAS,
        LEVEL_TAG,
        ADVANTAGE,
        PROMOTION,
        GRADE_DETAIL
      }
    };
  },
  components: {
    plane: () => import("@/components/modules/myculture/plane/index.vue"),
    "case-item": () => import("../selfunconfirm/caseitem/index.vue")
  },
  methods: {
    getReportInfo() {
      getMyCultureReport(this.$route.params.id).then(res => {
        // console.log(res);
        const {
          employee_name,
          employee_workcode,
          highlevel_workcode,
          highlevel_name,
          superior_name,
          superior_workcode,
          advantage,
          promotion,
          total_score,
          scores,
          name,
          visible_271,
          _271_level
        } = res;
        this.level = _271_level;
        this.gradeName = name;
        this.visible_271 = visible_271 == 1;
        const basicInfo = {
          name: employee_name,
          workcode: employee_workcode,
          highlevel_workcode,
          highlevel_name,
          superior_name,
          superior_workcode
        };
        this.basicInfo = basicInfo;
        this.advantage = advantage;
        this.promotion = promotion;
        this.total = total_score;
        this.scores = scores;
      });
    }
  },
  created() {
    this.getReportInfo();
  },
  computed: {
    wsScore() {
      return (
        this.scores.find(function(o) {
          return o.question_name == "务实";
        }) || {}
      ).superior_score;
    },
    hzScore() {
      return (
        this.scores.find(function(o) {
          return o.question_name == "合作";
        }) || {}
      ).superior_score;
    },
    cxScore() {
      return (
        this.scores.find(function(o) {
          return o.question_name == "创新";
        }) || {}
      ).superior_score;
    },
    cjkhScore() {
      return (
        this.scores.find(function(o) {
          return o.question_name == "成就客户";
        }) || {}
      ).superior_score;
    },
    planeScore() {
      return {
        wsScore: this.wsScore,
        hzScore: this.hzScore,
        cxScore: this.cxScore,
        cjkhScore: this.cjkhScore
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.self-report-page {
  .nav {
    background: white;
    padding: 20px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #373030;
    letter-spacing: 0.19px;
    font-weight: 400;
    .nav-left {
      display: flex;
      & > div {
        margin-right: 20px;
      }
      .code {
        font-size: 12px;
        color: #878787;
        letter-spacing: 0.14px;
        margin-left: 5px;
      }
    }
  }
  .plane-chart {
    background: white;
    display: flex;
    flex-direction: column;
    padding: 24px;
    .total-section {
      font-size: 16px;
      color: #60cba5;
      letter-spacing: 0.19px;
      display: flex;
      align-items: center;
      .score {
        font-size: 20px;
        margin-left: 10px;
        letter-spacing: 0.24px;
      }
      .selector {
        position: relative;
        width: 80px;
        margin-left: 20px;
        height: 30px;
        line-height: 30px;
        padding: 0;
        &.selected,
        &:hover,
        &:focus {
          color: #f18d23;
          background: white;
          border: 1px solid #f18d23;
        }
        &.selected::after {
          position: absolute;
          content: "";
          width: 30px;
          height: 25px;
          z-index: 2;
          right: -5px;
          background-position: center center;
          background-size: contain;
          background-image: url("../../../../assets/img/level_flag.png");
        }
      }
    }
  }
  .summary-right-container {
    background: white;
    height: 48%;
    overflow: auto;
    padding: 15px;
    box-sizing: border-box;
    & + .summary-right-container {
      margin-top: 4%;
    }
    .sub-title {
      line-height: 30px;
      font-weight: 400;
      font-size: 16px;
      color: #60cba5;
      letter-spacing: 0.19px;
    }
    .content {
      display: block;
      font-size: 14px;
      color: #4c4c4c;
      letter-spacing: 0.17px;
      line-height: 30px;
    }
  }
  .detail-info {
    background: white;
    padding: 20px;
    .title {
      text-align: center;
      color: #60cba5;
    }
  }
}
</style>
