<template>
  <div class="user-manage">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <!-- screening condition -->
      <el-row>
        <el-col :span="16">
          <el-form :inline="true" :model="conditionForm" ref="conditionForm">
            <el-form-item>
              <el-input
                v-model="conditionForm.name"
                :placeholder="constants.LABEL_NAME"
                @input="changeCondition"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-select
                v-model="conditionForm.department_id"
                :placeholder="constants.LABEL_SELECT_DIVISION"
                @change="changeCondition"
              >
                <el-option
                  v-for="item in departments"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button round @click="resetForm('conditionForm')">
                {{ constants.LABEL_EMPTY }}
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <el-row type="flex" justify="end">
            <el-button type="primary" round @click="submitUser">
              {{ constants.LABEL_ADD_USER }}
            </el-button>
          </el-row>
        </el-col>
      </el-row>

      <!-- addUser dialog -->
      <user-dialog
        v-if="addDialogVisible"
        :visible.sync="addDialogVisible"
        :title="constants.LABEL_ADD"
        :userForm.sync="userForm"
        :disabled="false"
        :submit="addSubmit"
      ></user-dialog>

      <!-- user tableList -->
      <el-table
        :data="userTable"
        stripe
        style="width:100%"
        v-loading="tableLoading"
        :height="tableHeight"
      >
        <el-table-column
          v-for="item in tableColumn"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :show-overflow-tooltip="true"
          align="center"
        ></el-table-column>
        <el-table-column
          :label="constants.ROLE"
          :show-overflow-tooltip="true"
          align="center"
        >
          <template slot-scope="scope">{{
            scope.row.roles.map(v => v.name).join(", ")
          }}</template>
        </el-table-column>
        <el-table-column
          :label="constants.LABEL_STATUS"
          width="80"
          align="center"
        >
          <template slot-scope="scope">
            {{
              scope.row.active == "1"
                ? constants.LABEL_ENABLED
                : constants.LABEL_FORBIDDEN
            }}
          </template>
        </el-table-column>
        <el-table-column
          prop="created_at"
          :label="constants.LABEL_CREATED_DATE"
          width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          fixed="right"
          :label="constants.LABEL_OPERATIONS"
          align="center"
          width="250"
        >
          <template slot-scope="scope">
            <el-button
              @click="updateUser(scope.row)"
              type="text"
              size="small"
              >{{ constants.LABEL_MODIFY }}</el-button
            >
            <el-button @click="enabledUser(scope.row)" type="text" size="small">
              {{
                scope.row.active == 1
                  ? constants.LABEL_FORBIDDEN
                  : constants.LABEL_ENABLED
              }}
            </el-button>
            <el-button
              @click="deleteUser(scope.row)"
              type="text"
              size="small"
              >{{ constants.LABEL_DEL }}</el-button
            >
            <el-button
              :class="{
                disable:
                  !scope.row.has_achievement_permission &&
                  !scope.row.has_culture_permission &&
                  !scope.row.has_271_permission
              }"
              @click="bind(scope.row)"
              type="text"
              size="small"
              >{{ constants.BIND_DEPARTMENT }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- update dialog -->
      <user-dialog
        v-if="updateDialogVisible"
        :visible.sync="updateDialogVisible"
        :title="constants.LABEL_MODIFY"
        :userForm.sync="userForm"
        :disabled="true"
        :submit="updateSubmit"
      ></user-dialog>
      <br />
      <Drawer @close="bindDialogVisible = false" align="left">
        <bind-dialog
          :currentInfo="selectedUser"
          v-if="bindDialogVisible"
          :visible.sync="bindDialogVisible"
        ></bind-dialog>
      </Drawer>

      <!-- pagination -->
      <el-row type="flex" justify="end">
        <pagination
          :currentPage="conditionForm.page"
          @current-change="handleCurrentChange"
          :total="total"
        ></pagination>
      </el-row>
    </section>
  </div>
</template>
<script>
import {
  USER_MANAGE,
  ATTENTION,
  LABEL_CONFIRM,
  LABEL_CANCEL,
  LABEL_NAME,
  LABEL_TAL_EMAIL,
  // LABEL_SCOPE,
  ROLE,
  LABEL_STATUS,
  LABEL_CREATED_DATE,
  LABEL_OPERATIONS,
  LABEL_MODIFY,
  LABEL_FORBIDDEN,
  LABEL_ENABLED,
  LABEL_DEL,
  LABEL_ADD,
  LABEL_ADD_USER,
  LABEL_EMPTY,
  LABEL_SELECT_DIVISION,
  CONST_DELETE_SUCCESS,
  CONST_OPERATIONS_SUCCESS,
  CONST_MODIFY_SUCCESS,
  CONST_UNDELETE_SUCCESS,
  LABEL_USER_DEL_MSG,
  BIND_DEPARTMENT
} from "@/constants/TEXT";
import {
  getManagers,
  addManager,
  getDepartments,
  deleteManager,
  updateManager
} from "@/constants/API";

import Drawer from "vue-simple-drawer";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "user-dialog": () =>
      import("@/components/modules/usermanage/UserDialog.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    "bind-dialog": () =>
      import("@/components/modules/usermanage/BindDP/index.vue"),
    Drawer
  },
  data() {
    return {
      nav: [
        {
          label: USER_MANAGE,
          active: true
        }
      ],
      constants: {
        LABEL_NAME,
        ROLE,
        LABEL_STATUS,
        LABEL_CREATED_DATE,
        LABEL_OPERATIONS,
        LABEL_MODIFY,
        LABEL_FORBIDDEN,
        LABEL_ENABLED,
        LABEL_DEL,
        LABEL_ADD,
        LABEL_ADD_USER,
        LABEL_EMPTY,
        LABEL_SELECT_DIVISION,
        BIND_DEPARTMENT
      },
      // 用户筛选条件
      conditionForm: { name: "", department_id: "", page: 1 },
      // 分页
      total: 0,
      // 事业部列表
      departments: [],
      bindDialogVisible: false,
      // dialog
      addDialogVisible: false,
      updateDialogVisible: false,
      // user form(add or update)
      userForm: { email: "", name: "", roles: [], empID: "" },
      // 操作用户ID
      userId: "",
      // table头部
      tableColumn: [
        { prop: "name", label: LABEL_NAME, width: "150" },
        { prop: "email", label: LABEL_TAL_EMAIL, width: "" }
      ],
      // table数据
      userTable: [],
      tableLoading: true,
      // nav-bar导航栏高度61px、预留pagination分页40px
      tableHeight: "calc(100% - 61px - 40px)",
      selectedUser: {}
    };
  },
  created() {
    this.getManagers();
    this.getDepartments();
  },
  methods: {
    // 用户列表
    getManagers() {
      const data = { ...this.conditionForm };
      getManagers(data)
        .then(res => {
          // console.log(res)
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

    // 更改筛选条件
    changeCondition() {
      this.conditionForm = Object.assign({}, this.conditionForm, { page: 1 });
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
      this.userForm = { email: "", name: "", roles: [], empID: "" };
    },
    // 提交新增
    addSubmit() {
      const { email, roles } = this.userForm;
      return addManager({ email, role_ids: roles.map(v => v.id) })
        .then(res => {
          this.addDialogVisible = false;
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
        empID: user.empID,
        roles: user.roles || []
      };
      this.userId = user.id;
    },
    // 提交修改
    updateSubmit() {
      const { roles } = this.userForm;
      return updateManager(this.userId, { role_ids: roles.map(v => v.id) })
        .then(res => {
          this.$message({
            type: "success",
            message: CONST_MODIFY_SUCCESS
          });
          this.userId = "";
          this.updateDialogVisible = false;
          this.getManagers();
        })
        .catch(err => {});
    },
    // 启用/禁用用户
    enabledUser(user) {
      const active = user.active ^ 1;
      updateManager(user.id, { active })
        .then(res => {
          this.$message({
            type: "success",
            message: user.active == 1 ? "禁用成功" : "启用成功"
          });
          this.getManagers();
        })
        .catch(err => {});
    },
    // 删除用户
    deleteUser(user) {
      this.$confirm(LABEL_USER_DEL_MSG, ATTENTION, {
        roundButton: true,
        confirmButtonText: LABEL_CONFIRM,
        cancelButtonText: LABEL_CANCEL,
        type: "warning",
        center: true
      })
        .then(() => {
          deleteManager(user.id)
            .then(res => {
              this.getManagers();
              this.$message({
                type: "success",
                message: CONST_DELETE_SUCCESS
              });
            })
            .catch(err => {});
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: CONST_UNDELETE_SUCCESS
          });
        });
    },
    // 分页
    handleCurrentChange(val) {
      this.conditionForm = Object.assign({}, this.conditionForm, { page: val });
      this.getManagers();
    },
    bind(row) {
      this.selectedUser = row;
      this.bindDialogVisible = true;
    }
  },
  watch: {
    bindDialogVisible(v) {
      if (!v) {
        this.getManagers();
      }
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
.user-manage .disable {
  pointer-events: none;
  color: grey;
}
</style>
