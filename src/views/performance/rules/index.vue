<template>
  <div class="rules-setting">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row type="flex">
        <el-select v-model="dp" :placeholder="constants.LABEL_SELECT_DIVISION">
          <el-option v-for="item in options" :key="item.department_id" :label="item.name" :value="item.department_id">
          </el-option>
        </el-select>
        <el-button style="margin-left:30px" round @click="resetForm">重置</el-button>
      </el-row>
      <br>
      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
        <el-table-column prop="department" label="事业部">
        </el-table-column>
        <el-table-column prop="type" :label="constants.LABEL_STATUS">
        </el-table-column>
        <el-table-column prop="address" :label="constants.LABEL_OPERATIONS">
          <template slot-scope="scope">
            <el-button type="text" @click="updateRule(scope.row)" size="small">{{constants.LABEL_MODIFY}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-row type="flex" justify="end">
        <pagination @current-change="handleCurrentChange" :currentPage="currentPage" :total="total"></pagination>
      </el-row>
      <br>
    </section>
    <edit-rule :data="selectedData" v-if="showRuleDialog" @close="closeDialog" :visible="showRuleDialog"></edit-rule>
  </div>
</template>
<script>
import {
  RULES_SETTING,
  LABEL_SELECT_DIVISION,
  LABEL_STATUS,
  LABEL_OPERATIONS,
  LABEL_MODIFY
} from "@/constants/TEXT";
import { getDepartments, getRuleList } from "@/constants/API";

export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      tableData: [],
      showRuleDialog: false,
      selectedData: {},
      selectedRuleID: "",
      options: [],
      dp: "",
      nav: [
        {
          label: RULES_SETTING,
          active: true
        }
      ],
      constants: {
        LABEL_SELECT_DIVISION,
        LABEL_STATUS,
        LABEL_OPERATIONS,
        LABEL_MODIFY
      }
    };
  },
  methods: {
    updateRule(row) {
      row.fraction = (row.fraction || []).map(v => parseFloat(v) * 100);
      this.selectedData = row;
      this.showRuleDialog = true;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      const data = {
        page: val,
        department_id: this.dp
      };
      this.refreshList(data);
    },
    refreshList(data) {
      return getRuleList(data).then(res => {
        const { total, data } = res;
        // this.currentPage = 1;
        this.total = total;
        this.tableData = data;
      });
    },
    closeDialog() {
      this.showRuleDialog = false;
      this.refreshList({
        page: this.currentPage,
        department_id: this.dp
      });
    },
    getDepartment() {
      getDepartments().then(res => {
        this.options = res;
      });
    },
    resetForm() {
      this.dp = "";
    }
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    "edit-rule": () =>
      import("@/components/modules/performance/EditRule/index.vue")
  },
  watch: {
    // 筛选watch
    dp: {
      handler: function(v) {
        const postData = {
          page: 1,
          department_id: v
        };
        this.refreshList(postData);
        this.currentPage = 1;
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
</style>
