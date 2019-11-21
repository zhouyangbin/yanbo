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
      label-width="160px"
      ref="userForm"
      :model="userForm"
      class="user-form"
    >
      <el-form-item label="姓名/工号:" prop="workcode">
        <el-select
          v-model="userForm.workcode"
          filterable
          remote
          clearable
          reserve-keyword
          placeholder="请输入姓名或工号"
          :remote-method="searchME"
          :disabled="userType !== 'add'"
          :loading="loading"
        >
          <el-option
            v-for="item in userOptions"
            :key="item.workcode"
            :label="item.workcode + item.name + item.email"
            :value="item.workcode"
          >
          </el-option>
        </el-select>
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
      <el-form-item label="组织部成员类别:" prop="executive_type">
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
import {
  postAddStaff,
  putEmployeeInfo,
  getSearchEmployees,
  getTplExecutiveTypes
} from "@/constants/API";
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
    userInfo: {
      type: Object,
      default: () => ({})
    },
    userId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      userForm: {
        workcode: "",
        superior_workcode: "",
        isolation_workcode: "",
        president_workcode: "",
        hrbp_workcode: "",
        hrd_workcode: "",
        executive_type: ""
      },
      userRules: {
        workcode: [
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
          { required: true, message: "请选择高管类别", trigger: "change" }
        ]
      },
      userOptions: [],
      loading: false,
      executiveTypes: []
    };
  },
  methods: {
    searchME(query) {
      if (query !== "") {
        this.loading = true;
        getSearchEmployees({
          name_or_workcode: query
        })
          .then(res => {
            this.loading = false;
            this.userOptions = res;
          })
          .catch(e => {});
      } else {
        this.userOptions = [];
      }
    },
    close() {
      this.$emit("close");
    },
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.userType != "add") {
            if (
              JSON.stringify(this.userInfo) !== JSON.stringify(this.userForm)
            ) {
              this.$message({
                showClose: true,
                message: "您还没有修改员工信息",
                type: "error"
              });
              return false;
            }
            putEmployeeInfo(this.performanceId, this.userId, this.userForm)
              .then(res => {
                this.$emit("define");
              })
              .catch(e => {});
          } else {
            postAddStaff(this.performanceId, this.userForm)
              .then(res => {
                this.$emit("define");
              })
              .catch(e => {});
          }
        } else {
          return false;
        }
      });
    }
  },
  beforeDestroy() {
    this.$refs["userForm"].resetFields();
  },
  created() {
    getTplExecutiveTypes(this.performanceId)
      .then(res => {
        this.executiveTypes = res;
      })
      .catch(e => {});
    if (this.userType != "add") {
      this.userForm = {
        workcode: this.userInfo.workcode,
        superior_workcode: this.userInfo.superior_workcode,
        isolation_workcode: this.userInfo.isolation_workcode,
        president_workcode: this.userInfo.president_workcode,
        hrbp_workcode: this.userInfo.hrbp_workcode,
        hrd_workcode: this.userInfo.hrd_workcode,
        executive_type: this.userInfo.executive_type
      };
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
</style>
