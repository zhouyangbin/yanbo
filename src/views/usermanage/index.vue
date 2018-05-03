<template>
    <div>
        <nav-bar :list="nav"></nav-bar>
        <section class="content-container">
          <!-- screening condition -->
          <el-row>
            <el-col :span="16">
              <el-form :inline="true" :model="conditionForm" ref="conditionForm">
                <el-form-item>
                  <el-input v-model="conditionForm.name" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-select v-model="conditionForm.department" placeholder="选择事业部">
                    <el-option v-for="item in departments" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button round @click="resetForm('conditionForm')">清空</el-button>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="8">
              <el-row type="flex" justify="end">
                <el-button type="primary" round @click="addDialogVisible = true">新增用户</el-button>
              </el-row>
            </el-col>
          </el-row>

          <!-- addUser dialog -->
          <user-dialog :visible.sync="addDialogVisible" title="新增" :userForm="userForm" :disabled="false"></user-dialog>

          <!-- user tableList -->
          <el-table :data="userTable" stripe style="width: 100%">
            <el-table-column v-for="item in tableColumn" :key="item.prop" :prop="item.prop" :label="item.label"></el-table-column>
            <el-table-column fixed="right" label="操作" align="center">
              <template slot-scope="scope">
                <el-button @click="updateUser(scope.row)" type="text" size="small">修改</el-button>
                <el-button @click="enabledUser(scope.row)" type="text" size="small">{{scope.row.state}}</el-button>
                <el-button @click="deleteUser(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- update dialog -->
          <user-dialog :visible.sync="updateDialogVisible" title="修改" :userForm="userForm" :disabled="true"></user-dialog>
          <br>
          
          <!-- pagination -->
          <el-row type="flex" justify="end">
            <pagination @current-change="handleCurrentChange" :total="100"></pagination>
          </el-row>
        </section>
    </div>
</template>
<script>
import { USER_MANAGE } from "@/constants/TEXT";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "user-dialog": () => import("./modules/UserDialog.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  data() {
    return {
      nav: [
        {
          label: USER_MANAGE,
          active: true
        }
      ],
      // 筛选条件
      conditionForm: { name: "", department: "" },
      // 事业部-分校列表
      departments: [
        { label: "集团总部", value: "id001" },
        { label: "培优", value: "id002" }
      ],
      // dialog
      addDialogVisible: false,
      updateDialogVisible: false,
      // user form
      userForm: { email: "", name: "", department: "" },
      // table头部
      tableColumn: [
        { prop: "name", label: "姓名" },
        { prop: "email", label: "企业邮箱" },
        { prop: "scope", label: "事业部" },
        { prop: "state", label: "状态" },
        { prop: "createTime", label: "创建时间" }
      ],
      // table数据
      userTable: [
        {
          name: "章三",
          email: "zhenkaixin@100tal.com",
          scope: "集团总部",
          state: "启用",
          createTime: "2018-08-23"
        },
        {
          name: "真开心",
          email: "zhenkaixin@100tal.com",
          scope: "集团总部",
          state: "启用",
          createTime: "2018-08-23"
        },
        {
          name: "莉丝",
          email: "zhenkaixin@100tal.com",
          scope: "集团总部",
          state: "启用",
          createTime: "2018-08-23"
        },
        {
          name: "狗子",
          email: "zhenkaixin@100tal.com",
          scope: "培优事业部-哈分校",
          state: "启用",
          createTime: "2018-08-23"
        }
      ]
    };
  },
  methods: {
    // 清空
    resetForm(formName) {
      console.log(this.$refs[formName], this.userForm);
      this.$refs[formName].resetFields();
    },
    // 修改用户
    updateUser(user) {
      console.log("修改用户", user.name);
      this.updateDialogVisible = true;
      this.userForm = {
        email: user.email,
        name: user.name,
        department: user.scope
      };
    },
    // 启用/禁用用户
    enabledUser(user) {
      console.log("启用/禁用用户", user.name);
      this.$message({
        type: "success",
        message: "启用成功!"
      });
    },
    // 删除用户
    deleteUser(user) {
      console.log("删除用户", user.name);
      this.$confirm("确定删除此用户?", "提示", {
        roundButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 分页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
