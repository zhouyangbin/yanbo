<template>
  <el-dialog
    :close-on-click-modal="false"
    @close="close"
    width="650px"
    :visible="visible"
    class="modify-user"
  >
    <div slot="title" class="title">
      {{ userType === "add" ? "添加人员" : "修改人员" }}
    </div>
    <el-form
      :rules="userRules"
      label-width="140px"
      ref="userForm"
      :model="userForm"
      class="user-form"
    >
      <el-form-item label="姓名/工号" prop="workcdoe">
        <el-input v-model="userForm.workcdoe"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <span>{{ userForm.email }}</span>
      </el-form-item>
      <el-form-item label="直接上级" prop="superior_workcode">
        <el-input v-model="userForm.superior_workcode"></el-input>
      </el-form-item>
      <el-form-item label="隔级" prop="isolation_workcode">
        <el-input v-model="userForm.isolation_workcode"></el-input>
      </el-form-item>
      <el-form-item label="总裁" prop="president_workcode">
        <el-input v-model="userForm.president_workcode"></el-input>
      </el-form-item>
      <el-form-item label="HRBP" prop="hrbp_workcode">
        <el-input v-model="userForm.hrbp_workcode"></el-input>
      </el-form-item>
      <el-form-item label="HRD" prop="hrd_workcode">
        <el-input v-model="userForm.hrd_workcode"></el-input>
      </el-form-item>
      <el-form-item label="HRD" prop="executive_type">
        <el-select
          v-model="userForm.executive_type"
          clearable
          placeholder="请选择"
        >
          <el-option
            v-for="item in executiveTypes"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上传指标">
        <el-upload
          class="upload-demo"
          :action="actionURL"
          drag
          :uploadSuccess="uploadSuccess"
        >
          选择文件
        </el-upload>
      </el-form-item>
      <el-form-item label="提示信息"> </el-form-item>
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
import { postAddPerson } from "@/constants/API";
import { AsyncComp } from "@/utils/asyncCom";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    userType: {
      type: String,
      default: "add"
    },
    performanceId: {
      type: String,
      default: ""
    },
    executiveTypes: {
      type: Array,
      default: () => []
    },
    userInfo: {
      type: Object,
      default: () => ({})
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
      },
      userRules: {},
      actionURL: ""
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
    },
    uploadSuccess(response, file, fileList) {
      if (
        response &&
        response.data &&
        response.data.errors &&
        response.data.errors.length > 0
      ) {
        this.tableData = response.data.errors.slice();
        this.$notify.error({
          title: ERROR,
          message: `上传内容有部分错误!`
        });
      } else {
        this.tableData = [];
        this.$notify({
          title: SUCCESS,
          message: UPLOAD_SUCCESS,
          type: "success"
        });
        this.close();
      }
    }
  },
  beforeDestroy() {
    this.$refs["userForm"].resetFields();
  },
  created() {
    if (this.userType != "add") {
      // 修改
    }
  }
};
</script>
<style scoped>
.modify-user >>> .el-dialog__header {
  border-bottom: 1px solid #e4e7ed;
}
</style>
