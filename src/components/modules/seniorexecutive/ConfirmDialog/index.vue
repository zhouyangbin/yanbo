<template>
  <el-dialog
    :close-on-click-modal="false"
    @close="close"
    title="提示"
    width="400px"
    :visible="visible"
    class="confirm-dialog"
  >
    <span>{{ tipsText }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="confirmBtn">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    tipsText: {
      type: String,
      default: ""
    },
    confirmType: {
      type: String,
      default: "open"
    }
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
    confirmBtn() {
      this.$emit("update", this.confirmType);
    }
  }
};
</script>
<style scoped>
.confirm-dialog >>> .el-dialog__header {
  border-bottom: 1px solid #e4e7ed;
}
</style>
