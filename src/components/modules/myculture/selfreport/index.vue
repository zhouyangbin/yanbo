
<template>
  <div class="self-report-page">
    <div class="grade-name">
      2018年第二次文化评分报告
    </div>
    <br>
    <hr>
    <br>
    <br>
    <br>
    <section class="plane-chart">
      <div class="total-section">
        <div>
          您的总分 <span class="score">12.5分</span>
        </div>
        <br>
        <div>
          等级标签 <el-button class="selector selected">Top</el-button>
        </div>
      </div>
      <plane></plane>
    </section>
    <br>
    <div>
      <span class="sub-title">
        优势: &nbsp;
      </span>
      <span class="content">
        评价人的优势评价人的优势评价人的优势评价人的优势评价人的
      </span>
    </div>
    <br>
    <div>
      <span class="sub-title">
        待提升: &nbsp;
      </span>
      <span class="content">
        评价人的优势评价人的优势评价人的优势评价人的优势评价人的
      </span>
    </div>
    <br>
    <hr>
    <br>
    <div class="detail-header" @click="detailHide =!detailHide">
      评分详情 <i :class="detailHide?'el-icon-caret-bottom':'el-icon-caret-top'"></i>
    </div>
    <br>
    <case-item v-show="!detailHide" v-for="n in 3" :key="n"></case-item>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detailHide: true
    };
  },
  components: {
    plane: () => import("@/components/modules/myculture/plane/index.vue"),
    "case-item": () => import("../selfunconfirm/caseitem/index.vue")
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
