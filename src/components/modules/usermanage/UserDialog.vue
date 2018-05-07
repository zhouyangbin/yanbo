<template>
  <el-dialog :title="title" :visible.sync="visible" width="25%" center :before-close="closeDialog">
    <el-form class="user-form">
      <el-form-item>
        <el-autocomplete v-model="userForm.email" :fetch-suggestions="querySearchAsync" placeholder="企业邮箱" @select="handleSelect" style="width:100%" :disabled="disabled"></el-autocomplete>
      </el-form-item>

      <el-form-item>
        <el-input type="text" v-model="userForm.name" placeholder="姓名" auto-complete="off" disabled></el-input>
      </el-form-item>

      <el-form-item>
        <el-cascader :value="department" @change="changeDepartment" :options="departments" change-on-select placeholder="部门" separator="-" style="width:100%"></el-cascader>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button type="primary" round @click="handelSubmit">确 定</el-button>
      <el-button round @click="closeDialog">取 消</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { searchManager } from "@/constants/API";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "用户信息"
    },
    userForm: {
      type: Object,
      default: () => ({ email: "", name: "", department_id: "", empID: "" })
    },
    disabled: {
      type: Boolean,
      default: false
    },
    submit: {
      type: Function,
      default: () => function() {}
    },
    departments: {
      type: Array,
      default: () => []
    },
    department: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    closeDialog() {
      this.$emit("update:visible", false);
    },
    handelSubmit() {
      this.submit().then(res => {
        this.closeDialog();
      });
    },
    querySearchAsync(queryString, cb) {
      if (queryString) {
        searchManager({ email: queryString })
          .then(res => {
            console.log(res);
            if (res) {
              for (var i = res.length - 1; i >= 0; i--) {
                res[i].value =
                  res[i].name +
                  " - " +
                  res[i].workcode +
                  " - " +
                  res[i].department;
              }
              cb(res);
            }
          })
          .catch(err => {
            cb([]);
          });
      } else {
        this.$emit(
          "update:userForm",
          Object.assign({}, this.userForm, { name: "" })
        );
        cb([]);
      }
    },
    handleSelect(item) {
      this.$emit(
        "update:userForm",
        Object.assign({}, this.userForm, {
          email: item.email,
          name: item.name,
          empID: item.empID
        })
      );
    },
    changeDepartment(departmentArr) {
      this.$emit(
        "update:userForm",
        Object.assign({}, this.userForm, {
          department_id: departmentArr[departmentArr.length - 1]
        })
      );
    }
  }
};
</script>

<style>
.user-form {
  padding: 0 20px;
}
</style>
