<template>
    <div>
        <el-dialog @close="$emit('update:visible',false)" :visible="visible" width="30%">
            <el-input type="textarea" :rows="2" placeholder="请输入心得体会" v-model="textarea">
            </el-input>
            <br>
            <br>
            <el-row type="flex" justify="center">
                <el-button type="primary" @click="submit" round>确定</el-button>
            </el-row>
        </el-dialog>
    </div>
</template>
<script>
import { postConfirm } from "@/constants/API";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      textarea: ""
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
            message: "操作成功!",
            type: "success"
          });
          this.$emit("update:visible", false);
          this.$parent.getInfo();
        });
      }
    },
    validate() {
      if (!this.textarea) {
        this.$message({
          message: "请填写心得体会!",
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
<style lang="scss" scoped>
</style>
