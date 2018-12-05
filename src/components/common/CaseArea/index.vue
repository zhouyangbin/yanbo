
<template>
  <div class="CaseArea-page">
    <el-input
      :maxlength="1000"
      :readonly="readOnly"
      type="textarea"
      :resize="'none'"
      @change="$emit('input',$event)"
      :rows="rows"
      :placeholder="placeholder"
      :value="value"
    >
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
    },
    rows: {
      type: Number,
      default: 4
    }
  }
};
</script>
<style scoped>
</style>
