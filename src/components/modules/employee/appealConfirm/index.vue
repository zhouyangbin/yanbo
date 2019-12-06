<template>
  <el-dialog
    class="rejectForm"
    @close="close"
    title="申诉理由"
    :visible="visible"
    :close-on-click-modal="false"
    width="30%"
  >
    <el-form
      :model="rejectForm"
      :rules="rejectFormRules"
      ref="rejectForm"
    >
      <el-form-item prop="reason">
        <el-input
          type="textarea"
          :maxlength="1000"
          v-model="rejectForm.reason"
          placeholder="请填写申诉理由"
          row="5"
        ></el-input>
      </el-form-item>
    </el-form>
    <span class="reject-footer" slot="footer">
      <el-button @click="$emit('update:visible', false)">
        {{ constants.CANCEL }}
      </el-button>
      <el-button type="primary" @click="submit">
        {{ constants.CONFIRM }}
      </el-button>
    </span>
  </el-dialog>
</template>
<script>
import { CANCEL, CONFIRM } from "@/constants/TEXT";
import { postAppealPerformance } from "@/constants/API";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rejectForm: {
        reason: ""
      },
      rejectFormRules: {
        reason: [{ required: true, message: "请填写申诉理由", trigger: "blur" }]
      },
      constants: {
        CANCEL,
        CONFIRM
      }
    };
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
      this.$emit("close");
    },
    submit() {
      this.$refs["rejectForm"].validate(valid => {
        if (valid) {
          const { reason } = this.rejectForm;
          const postData = {
            performance_user_id: this.$route.params.id,
            reason
          };
          postAppealPerformance(postData)
            .then(res => {
              this.close();
            })
            .catch(e => {});
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.rejectForm >>> .el-dialog__footer {
  text-align: center;
}
</style>
