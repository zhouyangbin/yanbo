<template>
  <el-dialog
    :title="title"
    :close-on-click-modal="false"
    :visible.sync="visible"
    width="25%"
    center
    :before-close="closeDialog"
  >
    <el-form class="user-form">
      <el-form-item>
        <el-autocomplete
          v-model="userForm.email"
          :fetch-suggestions="querySearchAsync"
          :placeholder="constants.LABEL_TAL_EMAIL"
          @select="handleSelect"
          style="width:100%"
          :disabled="disabled"
          :autofocus="true"
        ></el-autocomplete>
      </el-form-item>

      <el-form-item>
        <el-input
          type="text"
          v-model="userForm.name"
          :placeholder="constants.LABEL_NAME"
          auto-complete="off"
          disabled
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-select
          style="display:block"
          @change="roleChange"
          value-key="id"
          :value="userForm.roles"
          multiple
          :placeholder="constants.ROLE"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button type="primary" round @click="handelSubmit">
        {{ constants.LABEL_CONFIRM }}
      </el-button>
      <el-button round @click="closeDialog">
        {{ constants.LABEL_CANCEL }}
      </el-button>
    </span>
  </el-dialog>
</template>
<script>
import {
  LABEL_NAME,
  LABEL_TAL_EMAIL,
  ROLE,
  LABEL_CONFIRM,
  LABEL_CANCEL
} from "@/constants/TEXT";
import { searchManager, getRoleList } from "@/constants/API";

export default {
  data() {
    return {
      options: [],
      constants: {
        LABEL_NAME,
        LABEL_TAL_EMAIL,
        ROLE,
        LABEL_CONFIRM,
        LABEL_CANCEL
      }
    };
  },
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
      default: () => ({ email: "", name: "", roles: [], empID: "" })
    },
    disabled: {
      type: Boolean,
      default: false
    },
    submit: {
      type: Function,
      default: () => function() {}
    }
  },
  methods: {
    closeDialog() {
      this.$emit("update:visible", false);
    },
    handelSubmit() {
      if (
        !this.userForm.email ||
        !this.userForm.name ||
        this.userForm.roles.length == 0
      ) {
        this.$message({
          message: "企业邮箱、姓名、角色都是必填项哦！",
          type: "warning"
        });
        return;
      }
      this.submit().then(res => {
        // this.closeDialog();
      });
    },
    querySearchAsync(queryString, cb) {
      // 内容输入变更就清楚name
      this.$emit(
        "update:userForm",
        Object.assign({}, this.userForm, { name: "" })
      );
      if (queryString.trim()) {
        searchManager({ email: queryString })
          .then(res => {
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
        // 从有内容删减到无内容时不要搜索
        cb([]);
      }
    },
    handleSelect(item) {
      // console.log(item);
      this.$emit(
        "update:userForm",
        Object.assign({}, this.userForm, {
          email: item.email,
          name: item.name,
          empID: item.workcode
        })
      );
    },
    roleChange(v) {
      // console.log(v);
      this.$emit("update:userForm", { ...this.userForm, roles: v });
    },
    getRoleList() {
      return getRoleList().then(res => {
        // console.log(res)
        this.options = res;
      });
    }
  },
  computed: {
    selectedRoles() {
      return this.userForm.roles.map(v => v.id);
    }
  },
  created() {
    this.getRoleList();
  }
};
</script>

<style>
.user-form {
  padding: 0 20px;
}
</style>
