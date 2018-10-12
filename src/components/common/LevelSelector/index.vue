
<template>
  <div class="LevelSelector-page">
    <el-button @click="$emit('input','top')" :class="{'selected':value=='top'}" class="selector">Top</el-button>
    <el-button @click="$emit('input','middle')" :class="{'selected':value=='middle'}" class="selector">Middle</el-button>
    <el-button @click="$emit('input','bottom')" :class="{'selected':value=='bottom'}" class="selector">Bottom</el-button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number | String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
.LevelSelector-page {
  .selector {
    position: relative;
    width: 120px;
    &.selected,
    &:hover {
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
      background-image: url("../../../assets/img/level_flag.png");
    }
  }
}
</style>
