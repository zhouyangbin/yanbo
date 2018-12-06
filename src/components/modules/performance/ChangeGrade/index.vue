<template>
  <el-dialog
    class="gradeForm"
    @close="close"
    title="修改分数"
    :visible="visible"
    width="30%"
  >
    <el-form
      :model="gradeForm"
      :rules="gradeFormRules"
      ref="gradeForm"
      label-width="100px"
    >
      <el-form-item
        label="分数"
        prop="mark"
      >
        <el-select
          style="width:100%"
          v-model="gradeForm.mark"
        >
          <el-option
            v-for="v of marks"
            :label="v"
            :value="v"
            :key="v"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="原因"
        prop="reason"
      >
        <el-input
          type="textarea"
          :maxlength="1000"
          v-model="gradeForm.reason"
        ></el-input>
      </el-form-item>
    </el-form>
    <span
      class="gradeForm-footer"
      slot="footer"
    >
      <el-button @click="close">{{constants.CANCEL}}</el-button>
      <el-button
        type="primary"
        @click="submit"
      >{{constants.CONFIRM}}</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { changePerformanceGrade } from "@/constants/API";
import { CANCEL, CONFIRM } from "@/constants/TEXT";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    mark: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      gradeForm: {
        mark: this.mark,
        reason: ""
      },
      gradeFormRules: {
        mark: [{ required: true, message: "请选择分数", trigger: "change" }],
        reason: [{ required: true, message: "请填写修改原因", trigger: "blur" }]
      },
      marks: ["A", "B", "C", "D", "S"],
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
      this.$refs["gradeForm"].validate(valid => {
        if (valid) {
          //   alert("submit!")
          const { mark, reason } = this.gradeForm;
          const postData = {
            score_level: mark,
            reason,
            action: 2
          };
          changePerformanceGrade(
            this.$route.params.orgID,
            this.$route.params.uid,
            postData
          )
            .then(res => {
              this.close();
            })
            .catch(e => {});
        } else {
          //   console.log("error submit!!")
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.gradeForm >>> .el-dialog__footer {
  text-align: center;
}
</style>
