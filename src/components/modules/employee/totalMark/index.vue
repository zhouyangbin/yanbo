<template>
  <el-row type="flex" justify="end" class="total-section">
    <el-col :span="4">
      <span>自评总分/</span>
      <span class="total-mark">{{ score }}</span>
    </el-col>
    <el-col :span="4" v-if="high_level_show">
      <span>上级评总分/</span>
      <span :class="over ? 'beat' : ''" class="total-mark">{{ total }}</span>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    total: {
      type: [String, Number],
      default: ""
    },
    score: {
      type: [String, Number],
      default: ""
    },
    high_level_show: {
      type: Number,
      default: 1
    }
  },
  computed: {
    over() {
      return parseFloat(this.total) > 5;
    }
  }
};
</script>
<style scoped>
@keyframes beat {
  from,
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.25);
  }
  to,
  50% {
    transform: scale(1.5);
  }
  75% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.total-section {
  font-size: 18px;
  color: #6c7a92;
}
.total-section .total-mark {
  font-size: 22px;
  color: #f18d23;
  display: inline-block;
}
.total-section .beat {
  color: orangered;
  animation: beat 1s infinite;
}
</style>
<style></style>
