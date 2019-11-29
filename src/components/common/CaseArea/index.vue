<template>
  <div class="CaseArea-page">
    <el-input
      style="white-space:normal;word-wrap:break-word;word-break:break-all"
      :maxlength="maxlength"
      :readonly="readOnly"
      type="textarea"
      :resize="'none'"
      @input="onChange"
      :rows="rows"
      :placeholder="placeholder"
      :value="value"
    ></el-input>
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
      default: 8
    },
    maxlength: {
      type: Number,
      default: 2000
    }
  },
  methods: {
    onChange(e) {
      this.$emit("input", e);
    }
  }
};
</script>
<style scoped></style>
