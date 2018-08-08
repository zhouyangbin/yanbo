<template>
  <div class="grade-card-container">
    <div class="info">
      <section>
        <span class="label title">绩效目标1:</span>
        <div>人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug</div>
      </section>
      <br>

      <section>
        <span class="label">权重:</span>
        <span>10%</span>
      </section>
      <br>
      <section>
        <span class="label">衡量标准:</span> &nbsp;
        <span>人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug</span>
      </section>
      <br>
      <section>
        <span class="label">完成期限:</span>
        <span>2019-10-8</span>
      </section>
      <br>
      <section>
        <span class="label">自评分:</span> &nbsp;
        <span>5分</span>
      </section>
      <br>
    </div>
    <div class="marks">
      <el-input-number size="large" class="numbers" @change="markChange" v-model="defaultValue" :min="this.config.min" :max="this.config.max" :step="this.config.step" label="描述文字"></el-input-number>
      <span>您的打分/5</span>
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
  padding: 20px;
}
.grade-card-container .info {
  color: grey;
}
.grade-card-container .info section {
  display: flex;
}
.grade-card-container .marks {
  margin-left: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.grade-card-container .marks .numbers {
  margin-right: 20px;
}
.grade-card-container .label {
  margin-right: 20px;
  color: black;
  width: 100px;
  min-width: 100px;
  height: 26px;
  box-sizing: border-box;
  line-height: 26px;
  padding: 0 10px;
}
.grade-card-container .label.title {
  background-color: #52ddab;
  color: white;
  border-radius: 0 13px 13px 0;
}
</style>
