<template>
    <div class="grade-card-container">
        <div class="info">
            <div>
                <span class="label">目标1:</span> &nbsp;
                <span>人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug</span>
            </div>
            <br>
            <div class="inner-container">
                <div>
                    <span class="label">权重:</span> &nbsp;
                    <span>10%</span>
                </div>
                <div>
                    <span class="label">完成期限:</span> &nbsp;
                    <span>2019-10-8</span>
                </div>
                <div>
                    <span class="label">自评分:</span> &nbsp;
                    <span>5分</span>
                </div>
            </div>
            <br>
            <div>
                <span class="label">衡量标准:</span> &nbsp;
                <span>人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug人才盘点准时上线, 线上无严重bug</span>
            </div>

        </div>
        <div class="marks">
            <el-input-number @change="markChange" v-model="defaultValue" :min="this.config.min" :max="this.config.max" :step="this.config.step" label="描述文字"></el-input-number>
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
  display: flex;
  background-color: white;
  padding: 20px;
}
.grade-card-container .info {
  flex: 5;
  color: grey;
}
.grade-card-container .marks {
  flex: 1;
  margin-left: 40px;
}
.grade-card-container .label {
  font-weight: 500;
  margin-right: 20px;
  font-size: 1.1em;
  color: black;
}
.grade-card-container .inner-container {
  display: flex;
}
.grade-card-container .inner-container > div {
  flex: 1;
}
</style>
