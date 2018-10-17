
<template>
  <div class="self-report-case-item-component">
    <hr>
    <br>
    <div class="case-container">
      <div class="sub-title">
        {{data.question_name}}
      </div>
      <div class="case-info">
        <div class="grade-info">
          <span class="self">
            自评分数: {{data.self_score}}分
          </span>
          <span class="leader">
            上级评分数: {{data.superior_score}}分
          </span>
        </div>
        <br>
        <div class="leader-reason">
          <div class="label">
            上级评理由：
          </div>
          <div class="reason">
            {{data.superior_case||'无'}}
          </div>
        </div>
        <br>
        <div v-for="(v,i) in (data.self_case||[])" :key="i" class="my-case">
          <div class="label">
            我的{{i+3}}分理由：
          </div>
          <div class="reason">
            {{v}}
          </div>
        </div>
        <br>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
<style lang="scss" scoped>
.self-report-case-item-component {
  .case-container {
    display: flex;
    .sub-title {
      font-size: 24px;
      color: #4bc8aa;
      margin-right: 50px;
      font-weight: bold;
      flex-shrink: 0;
    }
    .case-info {
      font-size: 14px;
      color: #9b9b9b;
      line-height: 30px;

      .grade-info {
        font-size: 20px;
        font-weight: bold;
        .self {
          color: #4a4a4a;
          margin-right: 90px;
        }
        .leader {
          color: #f18d23;
        }
      }
      .leader-reason,
      .my-case {
        font-size: 14px;
        .label {
          color: #4a4a4a;
        }
      }
    }
  }
}
</style>
