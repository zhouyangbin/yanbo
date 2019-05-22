<template>
  <div>
    <el-dialog
      @close="$emit('update:visible', false)"
      :visible="visible"
      width="30%"
      :close-on-click-modal="false"
    >
      <el-input
        type="textarea"
        :maxlength="2000"
        :rows="6"
        :placeholder="`请输入${constants.IMPRESSIONS}`"
        v-model="textarea"
      ></el-input>
      <br />
      <br />
      <el-row type="flex" justify="center">
        <el-button type="primary" @click="submit" round>
          {{ constants.CONFIRM }}
        </el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { postConfirm } from "@/constants/API";
import {
  IMPRESSIONS,
  CONFIRM,
  CONST_OPERATIONS_SUCCESS
} from "@/constants/TEXT";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    isNecessary: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      textarea: "",
      constants: {
        IMPRESSIONS,
        CONFIRM
      }
    };
  },
  destroyed() {
    this.textarea = "";
  },
  methods: {
    submit() {
      if (this.validate()) {
        const postData = {
          evaluation_name_id: this.$route.params.id,
          action: 2,
          reason: this.textarea
        };
        postConfirm(postData).then(res => {
          this.$message({
            message: CONST_OPERATIONS_SUCCESS,
            type: "success"
          });
          this.$emit("update:visible", false);
          this.$parent.$parent.getStatus();
        });
      }
    },
    validate() {
      if (!this.isNecessary && !this.textarea) {
        return true;
      }
      if (!this.textarea) {
        this.$message({
          message: `请填写${IMPRESSIONS}!`,
          type: "warning"
        });
        return;
      }
      if (this.textarea.length < 20 || this.textarea.length > 2000) {
        this.$message({
          message: "字数不能少于20或者超过2000字符!",
          type: "warning"
        });
        return;
      }
      return true;
    }
  }
};
</script>
<style lang="scss" scoped></style>
