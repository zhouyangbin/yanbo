<template>
  <div class="rules-setting">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row type="flex" justify="space-between">
        <el-select v-model="dp" placeholder="请选择事业部">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-row>
      <br>
      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
        <el-table-column prop="date" label="事业部">
        </el-table-column>
        <el-table-column prop="name" label="状态">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="updateRule(scope.row)" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <pagination @current-change="handleCurrentChange" :total="total"></pagination>
    </section>
    <edit-rule v-if="showRuleDialog" @close="closeDialog" :visible="showRuleDialog"></edit-rule>
  </div>
</template>
<script>
import { RULES_SETTING } from "@/constants/TEXT";
export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      tableData: [{}],
      showRuleDialog: false,
      selectedData: {},
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      dp: "",
      nav: [
        {
          label: RULES_SETTING,
          active: true
        }
      ]
    };
  },
  methods: {
    updateRule(row) {
      // TODO: update
      // console.log(row)
      this.selectedData = row;
      this.showRuleDialog = true;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList();
    },
    refreshList(data) {
      this.currentPage = 1;
      // TODO: ajax list
    },
    closeDialog() {
      this.showRuleDialog = false;
      this.refreshList();
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
        // TODO: refresh list
        this.refreshList();
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped>
</style>
