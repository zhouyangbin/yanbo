
<template>
  <div class="CaseArea-page">
    <el-input :readonly="readOnly" type="textarea" :resize="'none'" @change="$emit('input',$event)" :rows="4" :placeholder="placeholder" :value="value">
    </el-input>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
</style>
