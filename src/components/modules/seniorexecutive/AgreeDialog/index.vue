<template>
  <div>
    <el-dialog
      title="同意"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
      width="650px"
    >
      <el-form>
        <el-form-item>
          <el-input
            type="textarea"
            v-model="reason"
            :rows="4"
            placeholder="同意"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button
          :loading="isLoading"
          type="primary"
          @click="submitAgreeContent"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { postSuperConfirmTarget } from "@/constants/API";
import { PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL } from "@/constants/URL";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      reason: "",
      isLoading: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submitAgreeContent() {
      let postData = {
        performance_user_id: this.$route.params.uid,
        type: 2,
        reason: this.reason ? this.reason : "同意"
      };
      this.isLoading = true;
      postSuperConfirmTarget(postData)
        .then(res => {
          this.$message.success("提交成功");
          this.isLoading = false;
          this.close();
          this.$router.push(
            PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL(
              this.$route.params.id,
              this.$route.params.uid
            )
          );
        })
        .catch(e => {
          this.isLoading = false;
        });
    }
  }
};
</script>
<style scoped></style>
