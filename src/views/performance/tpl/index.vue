<template>
  <div class="tpl-setting">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row type="flex" justify="space-between">
        <el-form :inline="true" :model="tplForm" ref="tplForm">
          <el-form-item>
            <el-input v-model="tplForm.name" placeholder="模板名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-cascader :props="treeProps" placeholder="选择事业部" :options="options" style="width:400px;" v-model="tplForm.dp" change-on-select></el-cascader>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="addTpl" round>新增</el-button>
      </el-row>
      <br>
      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
        <el-table-column prop="name" label="模板名称">
        </el-table-column>
        <el-table-column prop="department" label="适用事业部">
          <template slot-scope="scope">
            {{scope.row.department.join(", ")}}
          </template>
        </el-table-column>
        <el-table-column prop="type" label="绩效类型">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="updateTpl(scope.row)" size="small">修改</el-button>
            <el-button type="text" size="small" @click="delTpl(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <pagination :currentPage="currentPage" @current-change="handleCurrentChange" :total="total"></pagination>
    </section>
    <tpl-dialog v-if="showDialog" :initData="initData" :departmentTree="options" @close="tplDialogClose" :visible="showDialog" :infoType="infoType"></tpl-dialog>
  </div>
</template>
<script>
import { TPL, ATTENTION, LABEL_CONFIRM, LABEL_CANCEL } from "@/constants/TEXT";
import { AsyncComp } from "@/utils/asyncCom";
import { getTplList, delTpl, getOrgTree } from "@/constants/API";
export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      delVisible: false,
      tableData: [],
      initData: {},
      tplForm: { name: "", dp: [] },
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
        department_id: this.tplForm.dp[this.tplForm.dp - 1] || "",
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
      return this.$confirm("确定要删除这个模板么?", ATTENTION, {
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
                department_id: this.tplForm.dp[this.tplForm.dp - 1] || "",
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
        department_id: this.tplForm.dp[this.tplForm.dp - 1] || "",
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
    getOrgList() {
      return getOrgTree().then(res => {
        // console.log(res)
        this.options = res;
      });
    }
  },
  watch: {
    // 筛选watch
    tplForm: {
      handler: function(v) {
        const postData = {
          department_id: v.dp[v.dp.length - 1] || "",
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
    this.getOrgList();
  }
};
</script>
<style scoped>
.tpl-setting >>> .el-form-item {
  margin-bottom: 0;
}
</style>
