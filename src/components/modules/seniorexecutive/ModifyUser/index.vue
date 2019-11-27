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
        <common-select
          :code="userForm.workcode"
          :isDisabled="userType !== 'add'"
          @selectedUser="selectWorkCode"
        ></common-select>
      </el-form-item>
      <el-form-item label="直接上级:" prop="superior_workcode">
        <common-select
          :code="userForm.superior_workcode"
          :isDisabled="false"
          @selectedUser="selectSubCode"
        ></common-select>
      </el-form-item>
      <el-form-item label="隔级:" prop="isolation_workcode">
        <common-select
          :code="userForm.isolation_workcode"
          :isDisabled="false"
          @selectedUser="selectIsoCode"
        ></common-select>
      </el-form-item>
      <el-form-item label="总裁:" prop="president_workcode">
        <common-select
          :code="userForm.president_workcode"
          :isDisabled="false"
          @selectedUser="selectPreCode"
        ></common-select>
      </el-form-item>
      <el-form-item label="HRBP:" prop="hrbp_workcode">
        <common-select
          :code="userForm.hrbp_workcode"
          :isDisabled="false"
          @selectedUser="selectHrbpCode"
        ></common-select>
      </el-form-item>
      <el-form-item label="HRD:" prop="hrd_workcode">
        <common-select
          :code="userForm.hrd_workcode"
          :isDisabled="false"
          @selectedUser="selectHrdCode"
        ></common-select>
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
  postExecutiveAddUser,
  putExecutiveEmployeeInfo,
  getExecutiveTplTypes
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
  components: {
    "common-select": AsyncComp(
      import("@/components/modules/seniorexecutive/CommonSelect/index.vue")
    )
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
      userParams: {
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
    selectWorkCode(data) {
      this.userForm.workcode = data;
      this.userParams.workcode = data;
    },
    selectSubCode(data) {
      this.userForm.superior_workcode = data;
      this.userParams.superior_workcode = data;
    },
    selectIsoCode(data) {
      this.userForm.isolation_workcode = data;
      this.userParams.isolation_workcode = data;
    },
    selectPreCode(data) {
      this.userForm.president_workcode = data;
      this.userParams.president_workcode = data;
    },
    selectHrbpCode(data) {
      this.userForm.hrbp_workcode = data;
      this.userParams.hrbp_workcode = data;
    },
    selectHrdCode(data) {
      this.userForm.hrd_workcode = data;
      this.userParams.hrd_workcode = data;
    },
    close() {
      this.$emit("close");
    },
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.userType != "add") {
            putExecutiveEmployeeInfo(
              this.performanceId,
              this.userId,
              this.userParams
            )
              .then(res => {
                this.$emit("update");
              })
              .catch(e => {});
          } else {
            postExecutiveAddUser(this.performanceId, this.userForm)
              .then(res => {
                this.$emit("update");
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
    getExecutiveTplTypes(this.performanceId)
      .then(res => {
        this.executiveTypes = res;
      })
      .catch(e => {});
    if (this.userType != "add") {
      this.userParams = {
        workcode: this.userInfo.workcode,
        superior_workcode: this.userInfo.superior_workcode,
        isolation_workcode: this.userInfo.isolation_workcode,
        president_workcode: this.userInfo.president_workcode,
        hrbp_workcode: this.userInfo.hrbp_workcode,
        hrd_workcode: this.userInfo.hrd_workcode,
        executive_type: this.userInfo.executive_type
      };
      this.userForm = {
        workcode: this.userInfo.workcode + "-" + this.userInfo.name,
        superior_workcode:
          this.userInfo.superior_workcode + "-" + this.userInfo.superior_name,
        isolation_workcode:
          this.userInfo.isolation_workcode + "-" + this.userInfo.isolation_name,
        president_workcode:
          this.userInfo.president_workcode + "-" + this.userInfo.president_name,
        hrbp_workcode:
          this.userInfo.hrbp_workcode + "-" + this.userInfo.hrbp_name,
        hrd_workcode: this.userInfo.hrd_workcode + "-" + this.userInfo.hrd_name,
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
