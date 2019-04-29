<template>
  <el-dialog
    custom-class="ReviewReasonDialog-Dialog"
    :close-on-click-modal="false"
    :show-close="false"
    :close-on-press-escape="false"
    :visible="visible"
    width="30%"
  >
    <span>请输入理由: </span>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model.trim="reason"
    ></el-input>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible', false)">{{
        constants.LABEL_CANCEL
      }}</el-button>
      <el-button type="primary" @click="submit">{{
        constants.LABEL_CONFIRM
      }}</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { LABEL_CONFIRM, LABEL_CANCEL } from "@/constants/TEXT";
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    callback: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      reason: "",
      constants: {
        LABEL_CONFIRM,
        LABEL_CANCEL
      }
    };
  },
  methods: {
    submit() {
      // submit some data
      if (!this.reason) {
        return this.$message({
          message: "请填写理由!",
          type: "warning"
        });
      }

      this.callback(1, this.reason);
    }
  },
  beforeDestroy() {
    this.reason = "";
  }
};
</script>
<style scoped lang="scss"></style>
