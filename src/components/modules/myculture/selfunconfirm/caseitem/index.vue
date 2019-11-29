<template>
  <div class="self-report-case-item-component">
    <div class="case-container">
      <div class="sub-title">{{ data.question_name }}</div>
      <div class="case-info">
        <div class="grade-info">
          <span class="self">自评分数: {{ data.self_score }}分</span>
          <span class="leader">上级评分数: {{ data.superior_score }}分</span>
        </div>
        <br />
        <div class="leader-reason">
          <div class="label">上级评理由：</div>
          <div
            style="white-space:normal;word-wrap:break-word;word-break:break-all"
            :inner-html.prop="
              data.superior_case | linebreak | placeholder('无')
            "
            class="reason"
          ></div>
        </div>
        <br />
        <div v-for="(v, i) in data.self_cases || []" :key="i" class="my-case">
          <div class="label">我的{{ i + 3 }}分理由：</div>
          <div
            style="white-space:normal;word-wrap:break-word;word-break:break-all"
            :inner-html.prop="v | linebreak | placeholder('无')"
            class="reason"
          ></div>
        </div>
      </div>
    </div>
    <hr />
    <br />
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
  &.small {
    br {
      margin: 0;
      height: 0;
      padding: 0;
      line-height: 0;
    }
    .case-container {
      .sub-title {
        font-size: 16px;
        color: #60cba5;
        letter-spacing: 0.19px;
        font-weight: 400;
      }
      .case-info {
        .grade-info {
          font-weight: 500;
          .self {
            font-size: 16px;
            color: #4a4a4a;
            // margin-right: 90px;
          }
          .leader {
            font-size: 16px;
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
  .case-container {
    display: flex;
    .sub-title {
      font-size: 24px;
      color: #4bc8aa;
      margin-right: 50px;
      font-weight: bold;
      flex-shrink: 0;
      flex-basis: 96px;
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
  hr {
    border: 1px solid #d4d4d4;
  }
}
</style>
