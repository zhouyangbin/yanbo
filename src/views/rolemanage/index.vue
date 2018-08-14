<template>
  <div class="roles-setting">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <br>
      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
        <el-table-column prop="name" :label="constants.ROLE">
        </el-table-column>
        <el-table-column prop="permissions" :label="constants.ACCESS">
          <template slot-scope="scope">
            {{scope.row.permissions.join(", ")}}
          </template>
        </el-table-column>
      </el-table>
      <br>
      <pagination :currentPage="currentPage" @current-change="handleCurrentChange" :total="total"></pagination>
    </section>
  </div>
</template>
<script>
import { ROLE_SETTING, ROLE, ACCESS } from "@/constants/TEXT";
import { getRoleListByPage } from "@/constants/API";
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
      ],
      constants: {
        ROLE,
        ACCESS
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList(val);
    },
    refreshList(page) {
      return getRoleListByPage({ page }).then(res => {
        const { total, data } = res;
        this.total = total;
        this.tableData = data;
        // this.currentPage = 1
      });
    }
  },
  created() {
    this.refreshList(1);
  }
};
</script>
<style scoped>
</style>
