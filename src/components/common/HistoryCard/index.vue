<template>
  <div class="history-card-component">
    <div
      v-for="(v, i) of data"
      @click="$emit('update:selectedIndex', i)"
      :key="i"
      class="card"
      :class="{ selected: selectedIndex == i }"
    >
      <div class="name">修改人: {{ v.modifier_name }}</div>
      <div class="time">修改时间: {{ v.created_at }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    selectedIndex: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style lang="scss" scoped>
.history-card-component {
  display: flex;
  flex-wrap: wrap;
  & .card {
    width: 500px;
    min-width: 500px;
    height: 80px;
    background: white;
    padding: 23px 26px 18px 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    box-sizing: border-box;
    color: #4bc8aa;
    border-radius: 5px;
    margin-bottom: 8px;
    cursor: pointer;
    &.selected {
      background: #4bc8aa;
      color: white;
    }
    & .name {
      font-size: 24px;
    }
    & .time {
      font-size: 14px;
    }
  }
}
</style>
