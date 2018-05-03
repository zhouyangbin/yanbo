<template>
  <el-dialog :title="title" :visible.sync="visible" width="25%" center :before-close="closeDialog">
    <el-form class="user-form">
      <el-form-item>
        <el-input type="text" v-model="userForm.email" placeholder="企业邮箱" auto-complete="off" :autofocus="true" :disabled="disabled"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input type="text" v-model="userForm.name" placeholder="姓名" auto-complete="off" disabled></el-input>
      </el-form-item>

      <el-form-item>
        <el-cascader :options="departments" change-on-select placeholder="部门" separator="-" style="width:100%"></el-cascader>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button type="primary" round @click="closeDialog">确 定</el-button>
      <el-button round @click="closeDialog">取 消</el-button>
    </span>
  </el-dialog>
</template>
<script>
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
      default: () => ({ email: "", name: "", department: "" })
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      department: "",
      departments: [
        {
          label: "培优事业部",
          value: "id001",
          children: [
            { label: "哈分校", value: "id009" },
            { label: "嘿分校", value: "id0010" }
          ]
        },
        { label: "集团总部", value: "id002" }
      ]
    };
  },
  methods: {
    closeDialog() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style>
.user-form {
  padding: 0 20px;
}
</style>
