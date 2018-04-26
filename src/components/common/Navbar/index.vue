<template>
  <el-menu class="nav-container" active-text-color="#42cfaf" :default-active="activeIndex" mode="horizontal">
    <el-menu-item v-for="v of list" :key="v.label" :index="v.label">{{v.label}}</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    data() {
      return {}
    },
    computed: {
      activeIndex() {
        return (this.list.filter(v => v.active)[0] || {}).label
      }
    }
  }
</script>
<style scoped>
  .nav-container {
    padding: 0 20px;
  }
  .nav-container>>>.el-menu--horizontal > .el-menu-item {
    height: 74px;
    line-height: 74px;
  }
</style>
