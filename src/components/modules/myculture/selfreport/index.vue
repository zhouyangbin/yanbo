
<template>
  <div class="self-report-page">
    <div class="grade-name">
      {{gradeName}}
    </div>
    <br>
    <hr>
    <br>
    <br>
    <br>
    <section class="plane-chart">
      <div class="total-section">
        <div>
          您的总分 <span class="score">{{total}}分</span>
        </div>
        <br>
        <div v-if="visible_271">
          {{constants.LEVEL_TAG}} <el-button class="selector selected">{{constants.LEVELMAP[level]}}</el-button>
        </div>
      </div>
      <plane :planeScore="planeScore"></plane>
    </section>
    <br>
    <div>
      <span class="sub-title">
        {{constants.ADVANTAGE}}: &nbsp;
      </span>
      <span class="content">
        {{advantage}}
      </span>
    </div>
    <br>
    <div>
      <span class="sub-title">
        {{constants.PROMOTION}}: &nbsp;
      </span>
      <span class="content">
        {{promotion}}
      </span>
    </div>
    <br>
    <hr>
    <br>
    <div class="detail-header" @click="detailHide =!detailHide">
      {{constants.GRADE_DETAIL}} <i :class="detailHide?'el-icon-caret-bottom':'el-icon-caret-top'"></i>
    </div>
    <br>
    <case-item v-show="!detailHide" :data="v" v-for="(v,i) in scores" :key="i"></case-item>
  </div>
</template>
<script>
import { getMyCultureReport } from "@/constants/API";
import {
  LEVELMAP,
  LEVEL_TAG,
  ADVANTAGE,
  PROMOTION,
  GRADE_DETAIL
} from "@/constants/TEXT";

export default {
  data() {
    return {
      detailHide: true,
      advantage: "",
      promotion: "",
      total: "",
      scores: [],
      gradeName: "",
      visible_271: false,
      level: "",
      constants: {
        LEVELMAP,
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
        this.$parent.basicInfo = basicInfo;
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
      ).self_score;
    },
    hzScore() {
      return (
        this.scores.find(function(o) {
          return o.question_name == "合作";
        }) || {}
      ).self_score;
    },
    cxScore() {
      return (
        this.scores.find(function(o) {
          return o.question_name == "创新";
        }) || {}
      ).self_score;
    },
    cjkhScore() {
      return (
        this.scores.find(function(o) {
          return o.question_name == "成就客户";
        }) || {}
      ).self_score;
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
  .grade-name {
    font-size: 36px;
    color: #4a4a4a;
  }
  .selector {
    position: relative;
    width: 120px;
    margin-left: 50px;
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
      width: 48px;
      height: 40px;
      z-index: 2;
      right: -5px;
      background-image: url("../../../../assets/img/level_flag.png");
    }
  }
  .plane-chart {
    display: flex;
    .total-section {
      font-size: 24px;
      color: #4bc8aa;
      line-height: 48px;
      margin-right: 50px;
      .score {
        font-size: 64px;
        color: #000000;
        color: #4bc8aa;
        margin-left: 20px;
      }
    }
  }
  .sub-title {
    font-size: 24px;
    color: #4bc8aa;
    line-height: 30px;
    font-weight: bold;
  }
  .content {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 30px;
  }
  .detail-header {
    font-size: 36px;
    color: #4bc8aa;
    text-align: center;
  }
}
</style>
