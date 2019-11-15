<template>
  <div class="tpl-setting">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row type="flex" justify="space-between">
        <el-form :inline="true" :model="tplForm" ref="tplForm">
          <el-form-item>
            <el-input
              v-model="tplForm.name"
              :placeholder="constants.TPL_NAME"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="tplForm.dp"
              :placeholder="constants.LABEL_SELECT_DIVISION"
            >
              <el-option
                v-for="item in options"
                :key="item.department_id"
                :label="item.name"
                :value="item.department_id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button round @click="resetForm">{{
              constants.LABEL_EMPTY
            }}</el-button>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="addTpl" round>{{
          constants.LABEL_ADD
        }}</el-button>
      </el-row>
      <br />
      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
        <el-table-column
          prop="name"
          :label="constants.TPL_NAME"
        ></el-table-column>
        <el-table-column
          prop="department"
          :label="constants.APPLIED_DEPARTMENTS"
        >
          <!-- <template slot-scope="scope">
            {{scope.row.department.join(", ")}}
          </template>-->
        </el-table-column>
        <el-table-column
          prop="type"
          :label="constants.PERFORMANCE_TYPE"
        ></el-table-column>
        <el-table-column :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button type="text" @click="updateTpl(scope.row)" size="small">{{
              constants.MODIFY
            }}</el-button>
            <el-button type="text" size="small" @click="delTpl(scope.row)">{{
              constants.DEL
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br />
      <pagination
        :currentPage="currentPage"
        @current-change="handleCurrentChange"
        :total="total"
      ></pagination>
    </section>
    <tpl-dialog
      v-if="showDialog"
      :initData="initData"
      :departmentsOps="options"
      @close="tplDialogClose"
      :visible="showDialog"
      :infoType="infoType"
    ></tpl-dialog>
  </div>
</template>
<script>
import {
  TPL,
  ATTENTION,
  LABEL_CONFIRM,
  LABEL_CANCEL,
  TPL_NAME,
  LABEL_SELECT_DIVISION,
  LABEL_ADD,
  OPERATIONS,
  MODIFY,
  DEL,
  PERFORMANCE_TYPE,
  APPLIED_DEPARTMENTS,
  DEL_TPL_CONFIRM,
  LABEL_EMPTY
} from "@/constants/TEXT";
import { AsyncComp } from "@/utils/asyncCom";
import { getTplList, delTpl, getDepartments } from "@/constants/API";
export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      delVisible: false,
      tableData: [],
      initData: {},
      tplForm: { name: "", dp: "" },
      infoType: "add",
      showDialog: false,
      options: [],
      nav: [
        {
          label: TPL,
          active: true
        }
      ],
      treeProps: {
        value: "id",
        label: "name"
      },
      constants: {
        TPL_NAME,
        LABEL_SELECT_DIVISION,
        LABEL_ADD,
        OPERATIONS,
        MODIFY,
        DEL,
        PERFORMANCE_TYPE,
        APPLIED_DEPARTMENTS,
        LABEL_EMPTY
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "tpl-dialog": AsyncComp(
      import("@/components/modules/performance/TplDialog/index.vue")
    ),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    addTpl() {
      this.infoType = "add";
      this.showDialog = true;
    },
    tplDialogClose() {
      this.showDialog = false;
      const postData = {
        department_id: this.tplForm.dp || "",
        name: this.tplForm.name,
        page: this.currentPage
      };
      this.refreshList(postData);
    },
    updateTpl(row) {
      this.infoType = "modify";
      this.initData = { id: row.id };
      this.showDialog = true;
    },
    delTpl(row) {
      return this.$confirm(DEL_TPL_CONFIRM, ATTENTION, {
        roundButton: true,
        confirmButtonText: LABEL_CONFIRM,
        cancelButtonText: LABEL_CANCEL,
        type: "warning",
        center: true
      })
        .then(() => {
          delTpl(row.id)
            .then(res => {
              this.refreshList({
                department_id: this.tplForm.dp || "",
                name: this.tplForm.name,
                page: this.currentPage
              });
              this.delVisible = false;
            })
            .catch(e => {});
        })
        .catch(() => {});
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList({
        department_id: this.tplForm.dp || "",
        name: this.tplForm.name,
        page: val
      });
    },
    refreshList(data) {
      return getTplList(data)
        .then(res => {
          const { total, data } = res;
          this.total = total;
          // this.currentPage = 1
          this.tableData = data;
        })
        .catch(e => {});
    },
    getDepartment() {
      getDepartments().then(res => {
        this.options = res;
      });
    },
    resetForm() {
      console.log(1)
      this.tplForm = { name: "", dp: "" };
    }
  },
  watch: {
    // 筛选watch
    tplForm: {
      handler: function(v) {
        const postData = {
          department_id: v.dp || "",
          name: v.name,
          page: 1
        };
        this.currentPage = 1;
        this.refreshList(postData);
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.getDepartment();
  }
};
</script>
<style scoped>
.tpl-setting >>> .el-form-item {
  margin-bottom: 0;
}
</style>
