<template>
  <div class="feedback-dialog">
    <h3>问题反馈</h3>
    <br />
    <br />
    <div style="margin-bottom:0" class="el-form-item is-required">
      <label class="el-form-item__label">反馈:</label>
    </div>
    <div class="el-textarea">
      <textarea
        class="el-textarea__inner"
        v-on:keyup.enter="newLine"
        placeholder="请详细描述您的问题, 我们将尽快为您解决"
        :rows="6"
        v-model="feedback"
        :maxlength="2000"
      ></textarea>
    </div>
    <br />
    <br />
    <span slot="footer" class="dialog-footer">
      <el-button v-waves @click="close">取消</el-button>
      <el-button v-waves type="primary" @click="submitForm('feedbackForm')"
        >确认</el-button
      >
    </span>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    onSubmit: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      feedback: ""
    };
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
    newLine() {
      this.feedback += `\n`;
    },
    validate() {
      if (!this.feedback) {
        this.$message.error("请输入反馈内容");
        return;
      }
      return true;
    },
    submitForm(formName) {
      if (this.validate()) {
        this.onSubmit(this.feedback);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.feedback-dialog {
  width: 30%;
  min-width: 400px;
  text-align: center;
  max-width: 700px;
  & ::v-deep .el-form-item__label,
  & ::v-deep .el-checkbox__label {
    color: white;
  }
}
</style>
