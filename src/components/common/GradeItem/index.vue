
<template>
  <div class="GradeItem-page">
    <div v-for="(v,i) of items" :key="i">
      <el-badge :value="totalMark(v)" :class="value===Number(i) ? 'selected':''">
        <el-button @click="select(i)">{{v.question_name}}</el-button>
      </el-badge>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    value: {
      type: String | Number,
      default: ""
    }
  },
  methods: {
    totalMark(v) {
      return v.score == undefined ? "" : `${v.score}分`;
    },
    select(i) {
      this.$emit("input", i);
    }
  }
};
</script>
<style lang="scss" scoped>
.GradeItem-page {
  display: flex;
  // justify-content: space-between;
  & > div {
    margin-right: 30px;
  }
  .selected {
    background: #f18d23;
    color: white;
    // border: 1px solid #f18d23;
    &.el-badge {
      border-radius: 5px;
      & .el-button {
        background: #f18d23;
        color: white;
        border-radius: 5px;
        border: 1px solid #f18d23;
      }
    }
  }
  & .el-button {
    border: 1px solid #9b9b9b;
    border-radius: 5px;
    font-size: 16px;
    color: #9b9b9b;
    width: 120px;

    &:hover {
      background: #f18d23;
      color: white;
      border: 1px solid #f18d23;
    }
  }
  & /deep/.el-badge__content {
    background-color: #f18d23;
  }
}
</style>
