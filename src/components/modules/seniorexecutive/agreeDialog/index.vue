<template>
  <div>
    <el-dialog
      title="同意"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
      width="700px"
    >
      <el-form>
        <el-form-item>
          <el-input
            type="textarea"
            v-model="reason"
            :rows="4"
            placeholder="请录入审批意见"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="submitAgreeContent">确定</el-button>
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
      reason: "同意"
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
        reason: this.reason
      };
      postSuperConfirmTarget(postData)
        .then(res => {
          this.$message.success("审批成功");
          this.close();
          this.$router.push(
            PATH_EXECUTIVE_PERFORMANCE_MY_DETAIL(
              this.$route.params.id,
              this.$route.params.uid
            )
          );
        })
        .catch(e => {});
    }
  }
};
</script>
<style scoped></style>
