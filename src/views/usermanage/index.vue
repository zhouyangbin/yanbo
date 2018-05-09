<template>
    <div class="user-manage">
        <nav-bar :list="nav"></nav-bar>
        <section class="content-container">
          <!-- screening condition -->
          <el-row>
            <el-col :span="16">
              <el-form :inline="true" :model="conditionForm" ref="conditionForm">
                <el-form-item>
                  <el-input v-model="conditionForm.name" placeholder="姓名" @change="changeCondition"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-select v-model="conditionForm.department_id" placeholder="选择事业部" @change="changeCondition">
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
                <el-button type="primary" round @click="submitUser">新增用户</el-button>
              </el-row>
            </el-col>
          </el-row>

          <!-- addUser dialog -->
          <user-dialog :visible.sync="addDialogVisible" title="新增" :userForm.sync="userForm" :disabled="false" :submit="addSubmit" :departments="adminsDepartments" :department="department"></user-dialog>

          <!-- user tableList -->
          <el-table :data="userTable" stripe style="width:100%" v-loading="tableLoading" :height="tableHeight">
            <el-table-column v-for="item in tableColumn" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column label="范围" :show-overflow-tooltip="true" align="center">
              <template slot-scope="scope">
                {{scope.row.department.name}}
              </template>
            </el-table-column>
            <el-table-column label="状态" width="80" align="center">
              <template slot-scope="scope">
                {{scope.row.active == '1'?'启用':'禁用'}}
              </template>
            </el-table-column>
            <el-table-column prop="created_at" label="创建时间" width="180" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" align="center" width="180">
              <template slot-scope="scope">
                <el-button @click="updateUser(scope.row)" type="text" size="small">修改</el-button>
                <el-button @click="enabledUser(scope.row)" type="text" size="small">{{scope.row.active==1?'禁用':'启用'}}</el-button>
                <el-button @click="deleteUser(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- update dialog -->
          <user-dialog :visible.sync="updateDialogVisible" title="修改" :userForm.sync="userForm" :disabled="true" :submit="updateSubmit" :departments="adminsDepartments" :department="department"></user-dialog>
          <br>
          
          <!-- pagination -->
          <el-row type="flex" justify="end">
            <pagination @current-change="handleCurrentChange" :total="total"></pagination>
          </el-row>
        </section>
    </div>
</template>
<script>
import { USER_MANAGE } from "@/constants/TEXT";
import {
  getManagers,
  addManager,
  getAdminsDepartments,
  getDepartments,
  enableManager,
  deleteManager,
  updateManager
} from "@/constants/API";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "user-dialog": () =>
      import("@/components/modules/usermanage/UserDialog.vue"),
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
      // 用户筛选条件
      conditionForm: { name: "", department_id: "", page: 1 },
      // 分页
      total: 0,
      // 事业部列表
      departments: [],
      // 事业部-分校列表
      adminsDepartments: [],
      // 编辑用户事业部-分校
      department: [],
      // dialog
      addDialogVisible: false,
      updateDialogVisible: false,
      // user form(add or update)
      userForm: { email: "", name: "", department_id: "", empID: "" },
      // 操作用户ID
      userId: "",
      // table头部
      tableColumn: [
        { prop: "name", label: "姓名", width: "150" },
        { prop: "email", label: "企业邮箱", width: "" }
      ],
      // table数据
      userTable: [],
      tableLoading: true,
      // nav-bar导航栏高度61px、预留pagination分页40px
      tableHeight: "calc(100% - 61px - 40px)"
    };
  },
  created() {
    this.getManagers();
    this.getDepartments();
    this.getAdminsDepartments();
  },
  methods: {
    // 用户列表
    getManagers() {
      const data = { ...this.conditionForm };
      data.name.length == 0 && delete data.name;
      data.department_id.length == 0 && delete data.department_id;
      getManagers(data)
        .then(res => {
          this.tableLoading = false;
          if (res) {
            this.total = res.total;
            this.userTable = res.data;
          }
        })
        .catch(err => {
          this.tableLoading = false;
        });
    },
    // 事业部-分校列表
    getDepartments() {
      getDepartments()
        .then(res => {
          res.map(function(item) {
            item.label = item.name;
            item.value = item.department_id;
          });
          this.departments = res;
        })
        .catch(err => {});
    },
    // 事业部-分校列表
    getAdminsDepartments() {
      getAdminsDepartments()
        .then(res => {
          const recursive = function f(arr) {
            arr.map(function(item) {
              item.label = item.name;
              item.value = item.department_id;
              if (item.children) {
                f(item.children);
              }
            });
          };
          recursive(res);
          this.adminsDepartments = res;
        })
        .catch(err => {});
    },
    // 更改筛选条件
    changeCondition() {
      this.conditionForm = Object.assign({}, this.conditionForm, { page: 0 });
      this.getManagers();
    },
    // 清空
    resetForm(formName) {
      this.conditionForm = { name: "", department_id: "", page: 1 };
      this.getManagers();
    },
    // 新增用户
    submitUser() {
      this.addDialogVisible = true;
      this.userForm = { email: "", name: "", department_id: "", empID: "" };
      this.department = [];
    },
    // 提交新增
    addSubmit() {
      return addManager(this.userForm)
        .then(res => {
          this.getManagers();
        })
        .catch(err => {});
    },
    // 修改用户
    updateUser(user) {
      this.updateDialogVisible = true;
      this.userForm = {
        email: user.email,
        name: user.name,
        department_id: user.department_id,
        empID: user.empID
      };
      this.department = [];
      this.userId = user.id;
      // 返回的数据集团总部层级parent_id是好未来教育，影响层级查找
      user.department.parent_id && user.department.department_id !== "D1000002"
        ? this.department.push(user.department.parent_id, user.department_id)
        : this.department.push(user.department_id);
    },
    // 提交修改
    updateSubmit() {
      return updateManager(this.userId, this.userForm)
        .then(res => {
          this.$message({
            type: "success",
            message: "修改成功!"
          });
          this.getManagers();
        })
        .catch(err => {});
    },
    // 启用/禁用用户
    enabledUser(user) {
      const active = user.active == 1 ? 0 : 1;
      enableManager(user.id, { active })
        .then(res => {
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          this.getManagers();
        })
        .catch(err => {});
    },
    // 删除用户
    deleteUser(user) {
      this.$confirm("确定删除此用户?", "提示", {
        roundButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          deleteManager(user.id)
            .then(res => {
              this.getManagers();
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            })
            .catch(err => {});
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
      this.conditionForm = Object.assign({}, this.conditionForm, { page: val });
      this.getManagers();
    }
  }
};
</script>
<style scoped>
.user-manage {
  height: 100%;
}
.content-container {
  height: calc(100% - 40px - 61px);
  overflow: hidden;
}
</style>
