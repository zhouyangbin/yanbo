<template>
  <el-row type="flex" justify="end" class="total-section">
    <el-col :span="4">
      <span>
        总分/
      </span>
      <span class="total-mark">{{total}}</span>
    </el-col>
  </el-row>

</template>
<script>
export default {
  props: {
    total: {
      type: String | Number,
      default: ""
    }
  }
};
</script>
<style scoped>
.total-section {
  font-size: 18px;
  color: #6c7a92;
}
.total-section .total-mark {
  font-size: 22px;
  color: #0fbd90;
}
</style>
