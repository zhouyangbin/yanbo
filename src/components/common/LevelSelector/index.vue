<template>
  <div class="LevelSelector-page">
    <el-button
      @click="disabled ? undefined : $emit('input', 'top')"
      :class="{
        selected: value == 'top',
        disabled: disabled,
        pre: pre == 'top'
      }"
      class="selector"
      >Top</el-button
    >
    <el-button
      @click="disabled ? undefined : $emit('input', 'middle')"
      :class="{
        selected: value == 'middle',
        disabled: disabled,
        pre: pre == 'middle'
      }"
      class="selector"
      >Middle</el-button
    >
    <el-button
      @click="disabled ? undefined : $emit('input', 'bottom')"
      :class="{
        selected: value == 'bottom',
        disabled: disabled,
        pre: pre == 'bottom'
      }"
      class="selector"
      >Bottom</el-button
    >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pre: {
      type: [Number, String],
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
    height: 36px;
    padding: 8px 12px;
    overflow: visible;
    &.pre {
      &::after {
        position: absolute;
        content: "";
        width: 48px;
        height: 40px;
        z-index: 2;
        right: -5px;

        background-image: url("../../../assets/img/pre_lv.png");
      }
    }
    &.disabled {
      cursor: not-allowed;
      color: #dcdfe6;
      &:hover,
      &:focus {
        color: #dcdfe6;
        border: 1px solid #dcdfe6;
      }
      &.selected {
        cursor: not-allowed;
        // color: #dcdfe6;
        // &:hover,
        // &:focus {
        //   color: #f18d23;
        //   border: 1px solid #f18d23;
        // }
      }
    }
    &.selected {
      // cursor: not-allowed;
      // color: #dcdfe6;
      &:hover,
      &:focus {
        color: #f18d23;
        border: 1px solid #f18d23;
      }
    }
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
      background-position: center center;
      background-size: contain;
      background-image: url("../../../assets/img/level_flag.png");
    }
  }
  .el-button:focus {
    border-color: #dcdfe6;
    color: #606266;
    background-color: white;
  }
}
</style>
