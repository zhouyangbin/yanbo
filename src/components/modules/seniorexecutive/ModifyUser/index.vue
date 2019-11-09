<template>
  <el-dialog
    :close-on-click-modal="false"
    @close="close"
    width="650px"
    :visible="visible"
    class="modify-user"
  >
    <div slot="title" class="title">
      {{ infoType === "add" ? "" : constants.UPDATE_TPL }}
    </div>
    <el-form
      :rules="rules"
      label-width="140px"
      ref="userForm"
      :model="userForm"
      class="user-form"
    >
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="submit" type="primary"
          >确定</el-button
        >
        <el-button round size="medium" @click="close">取消</el-button>
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import {} from "@/constants/TEXT";
import {} from "@/constants/API";
import { AsyncComp } from "@/utils/asyncCom";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    infoType: {
      type: String,
      default: "add"
    }
  },
  data() {
    return {
      userForm: {
        workcdoe: "",
        email: "",
        superior_workcode: "",
        isolation_workcode: "",
        president_workcode: "",
        hrbp_workcode: "",
        hrd_workcode: "",
        executive_type: ""
      }
    };
  },
  components: {},
  watch: {},
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      // 确定按钮
    }
  },
  beforeDestroy() {
    this.$refs["userForm"].resetFields();
  },
  created() {
    if (this.infoType != "add") {
      // 修改
    }
  }
};
</script>
<style scoped></style>
