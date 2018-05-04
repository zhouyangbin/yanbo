<template>
  <span v-if="total<=page-size" class="paging-style">
    <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :background="true" prev-text="" layout="prev, pager, next" :total="total">
    </el-pagination>
  </span>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    "page-size": {
      type: Number,
      default: 20
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit("current-change", val);
    }
  }
};
</script>
<style scoped>
.paging-style >>> .el-pagination .btn-prev {
  background-color: white;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  min-width: 28px;
  padding: 0;
  border-left-width: 1px !important;
}
.paging-style >>> .el-pagination .btn-next {
  background-color: white;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  min-width: 28px;
}
.paging-style >>> .el-pagination.is-background .btn-prev,
.paging-style >>> .el-pagination.is-background .btn-next,
.paging-style >>> .el-pagination.is-background .el-pager li {
  margin: 0;
  background-color: white;
  border: #d1dbe5 solid;
  border-width: 1px 1px 1px 0px;
  color: #97a8be;
}
.paging-style >>> .el-pagination.is-background .el-pager li {
  border-radius: 0;
}
.paging-style >>> .el-pagination.is-background .el-pager li.active {
  background-color: rgb(9, 201, 129);
  color: white;
}
</style>
