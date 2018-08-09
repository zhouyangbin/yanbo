<template>
  <div class="grade-card-container">
    <div class="info">
      <section>
        <span class="label title">绩效目标{{index+1}}:</span>
        <div>{{data.target}}</div>
      </section>
      <br>
      <section>
        <span class="label">权重:</span>
        <span>{{data.weights*100}}%</span>
      </section>
      <br>
      <div v-if="data.metrics">
        <section>
          <span class="label">衡量标准:</span> &nbsp;
          <span>{{data.metrics}}</span>
        </section>
        <br>
      </div>
      <div v-if="data.deadlines">
        <section>
          <span class="label">完成期限:</span>
          <span>{{data.deadlines}}</span>
        </section>
        <br>
      </div>
      <div v-if="data.target_self_score && data.target_self_score.score">
        <section>
          <span class="label">自评分:</span> &nbsp;
          <span>{{data.target_self_score && data.target_self_score.score}}分</span>
        </section>
        <br>
      </div>
      <div v-if="data.target_superior_score && data.target_superior_score.score">
        <section>
          <span class="label">上级评分:</span> &nbsp;
          <span>{{data.target_superior_score && data.target_superior_score.score}}分</span>
        </section>
        <br>
      </div>
    </div>
    <div v-if="!readOnly" class="marks">
      <el-input-number size="large" class="numbers" @change="markChange" v-model="defaultValue" :min="this.config.min" :max="this.config.max" :step="this.config.step" label="描述文字"></el-input-number>
      <span class="greyText">您的打分 /
        <span class="hightlight-mark">{{value}}分</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number | String,
      default: ""
    },
    config: {
      type: Object,
      default: () => ({
        min: 1,
        max: 5,
        step: 1
      })
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      defaultValue: this.value || ""
    };
  },
  methods: {
    markChange(v) {
      this.$emit("input", v);
    }
  }
};
</script>
<style scoped>
.grade-card-container {
  background-color: white;
  padding: 20px 20px 20px 0;
}
.grade-card-container .info {
  color: grey;
}
.grade-card-container .info section {
  display: flex;
}
.grade-card-container .marks {
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.grade-card-container .marks .numbers {
  margin-right: 30px;
}
.grade-card-container .label {
  margin-right: 20px;
  color: #778294;
  width: 100px;
  min-width: 100px;
  height: 26px;
  box-sizing: border-box;
  line-height: 26px;
  padding: 0 10px;
}
.greyText {
  color: #778294;
}
.grade-card-container .label.title {
  background-color: #52ddab;
  color: white;
  border-radius: 0 13px 13px 0;
}
.hightlight-mark {
  font-size: 1.3em;
  color: #52ddab;
}
</style>
