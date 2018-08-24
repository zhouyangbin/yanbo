<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <br>
    <section class="content-container">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="评分名称" min-width="180">
        </el-table-column>
        <el-table-column prop="department" label="目标状态">
        </el-table-column>
        <el-table-column prop="type" label="周期类型">
        </el-table-column>
        <el-table-column prop="end_time" label="截止时间">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-row type="flex" justify="end">
        <pagination @current-change="handleCurrentChange" :currentPage="currentPage" :total="total"></pagination>
      </el-row>
    </section>
  </div>

</template>


<script>
import { TEAM_GRADE, DETAILS } from "@/constants/TEXT";
import { PATH_EMPLOYY_TEAM_GRADE_DETAIL } from "@/constants/URL";
import { getTeamGradeList } from "@/constants/API";

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      tableData: [],
      nav: [
        {
          label: TEAM_GRADE,
          active: true
        }
      ],
      constants: { DETAILS }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    goDetail(row) {
      this.$router.push(PATH_EMPLOYY_TEAM_GRADE_DETAIL(row.id));
    },
    getList(data) {
      return getTeamGradeList(data)
        .then(res => {
          // console.log(res)
          const { total, data } = res;
          this.tableData = data;
          this.total = total;
        })
        .catch(e => {});
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList({
        page: val
      });
    }
  },
  created() {
    this.getList({ page: 1 });
  }
};
</script>
<style scoped>
.my-grade-list .content-container {
  padding: 20px;
}
</style>
