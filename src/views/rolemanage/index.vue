<template>
  <div class="roles-setting">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <br>
      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
        <el-table-column prop="date" label="角色">
        </el-table-column>
        <el-table-column prop="name" label="权限">
        </el-table-column>
      </el-table>
      <br>
      <pagination :currentPage="currentPage" @current-change="handleCurrentChange" :total="total"></pagination>
    </section>
  </div>
</template>
<script>
import { ROLE_SETTING } from "@/constants/TEXT";
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      currentPage: 1,
      nav: [
        {
          label: ROLE_SETTING,
          active: true
        }
      ]
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList();
    },
    refreshList(page) {
      // TODO: ajax
    }
  },
  created() {
    this.refreshList(1);
  }
};
</script>
<style scoped>
</style>
