<template>
  <div>
    <el-dialog
      title="退回"
      :visible="visible"
      @close="close"
      :close-on-click-modal="false"
      width="650px"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="reason">
          <el-input
            type="textarea"
            v-model="form.reason"
            :rows="4"
            placeholder="请输入理由"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button
          :loading="isLoading"
          type="primary"
          @click="submitRejectReason"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { postSuperConfirmTarget } from "@/constants/API";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        reason: ""
      },
      rules: {
        reason: [{ required: true, message: "请输入理由", blur: "blur" }]
      },
      isLoading: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submitRejectReason() {
      this.$refs.form.validate(valid => {
        if (valid) {
          let postData = {
            performance_user_id: this.$route.params.uid,
            type: 1,
            reason: this.form.reason
          };
          this.isLoading = true;
          postSuperConfirmTarget(postData)
            .then(res => {
              this.isLoading = false;
              this.$message.success("提交成功");
              this.$emit("update");
            })
            .catch(e => {
              this.isLoading = false;
            });
        }
      });
    }
  }
};
</script>
<style scoped></style>
