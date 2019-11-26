<template>
  <div>
    <el-dialog
      title="同意"
      :visible="isAgreeDialog"
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
import { postSuperAffirmTarget } from "@/constants/API";
import { PATH_PERFORMANCE_MY_DETAIL }from "@/constants/URL"
export default {
  props: {
    isAgreeDialog: {
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
      this.$emit("close")
    },
    /**
     * 同意该指标
     */
    submitAgreeContent() {
      let postData = {
        performance_user_id: this.$route.params.uid,
        type: 2,
        reason: this.reason
      };
      postSuperAffirmTarget(postData)
        .then(res => {
          this.$message.success("审批成功");
          this.close();
          // 返回下属列表
         this.$router.push(
            PATH_PERFORMANCE_MY_DETAIL(
              this.$route.params.id,
              this.$route.params.uid
            )
          );
        })
        .catch(() => {
          this.close();
        });
    }
  }
};
</script>
<style scoped></style>
