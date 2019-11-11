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
      label-width="110px"
      ref="userForm"
      :model="userForm"
      class="user-form"
    >
      <el-form-item label="姓名/工号:" prop="workcdoe">
        <el-input
          v-model="userForm.workcdoe"
          @input="searchME"
          :disabled="infoType !== 'add'"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱:" prop="email">
        <el-input
          v-model="userForm.email"
          :disabled="infoType !== 'add'"
        ></el-input>
      </el-form-item>
      <el-form-item label="直接上级:" prop="superior_workcode">
        <el-input v-model="userForm.superior_workcode"></el-input>
      </el-form-item>
      <el-form-item label="隔级:" prop="isolation_workcode">
        <el-input v-model="userForm.isolation_workcode"></el-input>
      </el-form-item>
      <el-form-item label="总裁:" prop="president_workcode">
        <el-input v-model="userForm.president_workcode"></el-input>
      </el-form-item>
      <el-form-item label="HRBP:" prop="hrbp_workcode">
        <el-input v-model="userForm.hrbp_workcode"></el-input>
      </el-form-item>
      <el-form-item label="HRD:" prop="hrd_workcode">
        <el-input v-model="userForm.hrd_workcode"></el-input>
      </el-form-item>
      <el-form-item label="高管类别:" prop="executive_type">
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
      <el-form-item label="上传指标:">
        <el-upload
          class="upload-demo"
          action="actionURL"
          :uploadSuccess="uploadSuccess"
        >
          <el-button size="small" type="primary">选择文件</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="提示信息:">
        <span class="tip-info">上传成功！共1人。</span>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button
          round
          size="medium"
          @click="submit('userForm')"
          type="primary"
          >确定</el-button
        >
        <el-button round size="medium" @click="close">取消</el-button>
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import {} from "@/constants/TEXT";
import { postAddStaff, putEmployeeInfo, getUserDetail } from "@/constants/API";
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
    userId: {
      type: String,
      default: ""
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
      userRules: {
        workcdoe: [
          { required: true, message: "请输入姓名或工号", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入姓名或工号", trigger: "blur" }
        ],
        superior_workcode: [
          { required: true, message: "请输入姓名或工号", trigger: "blur" }
        ],
        isolation_workcode: [
          { required: true, message: "请输入姓名或工号", trigger: "blur" }
        ],
        president_workcode: [
          { required: true, message: "请输入姓名或工号", trigger: "blur" }
        ],
        hrbp_workcode: [
          { required: true, message: "请输入姓名或工号", trigger: "blur" }
        ],
        hrd_workcode: [
          { required: true, message: "请输入姓名或工号", trigger: "blur" }
        ],
        executive_type: [
          { required: true, message: "请输入姓名或工号", trigger: "change" }
        ]
      },
      actionURL: ""
    };
  },
  components: {},
  watch: {},
  methods: {
    searchME(value) {
      if (value != "") {
        getUserDetail({
          empID: value,
          email: value
        })
          .then(res => {
            if (res) {
              this.userForm.email = res.email;
            } else {
              this.userForm.email = "";
            }
          })
          .catch(e => {});
      } else {
        this.infoForm.email = "";
      }
    },
    close() {
      this.$emit("close");
    },
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.userType != "add") {
            putEmployeeInfo(this.performanceId, this.userId, this.userForm)
              .then(res => {
                console.log(res);
              })
              .catch(e => {});
          } else {
            postAddStaff(this.performanceId, this.userForm)
              .then(res => {
                console.log(res);
              })
              .catch(e => {});
          }
        } else {
          return false;
        }
      });
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
.modify-user >>> .el-form-item__content {
  width: 294px;
}
.modify-user >>> .el-form-item__content .el-select {
  width: 100%;
}
.modify-user .tip-info {
  color: #eb0c00;
}
</style>
