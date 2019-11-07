<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <!-- <br> -->
    <br />
    <section class="content-container">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column
          prop="name"
          :label="constants.GRADE_NAME"
        ></el-table-column>
        <el-table-column
          prop="type"
          :label="constants.DURATION_TYPE"
        ></el-table-column>
        <el-table-column
          prop="end_time"
          :label="constants.FINISHED_DATE"
        ></el-table-column>
        <el-table-column
          prop="target_status"
          :label="constants.TARGET_STATUS"
        ></el-table-column>
        <el-table-column
          prop="stage"
          :label="constants.GRADE_STATUS"
        ></el-table-column>
        <el-table-column prop="address" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{
              constants.DETAILS
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br />
      <el-row type="flex" justify="end">
        <pagination
          @current-change="handleCurrentChange"
          :currentPage="currentPage"
          :total="total"
        ></pagination>
      </el-row>
      <br />
    </section>
  </div>
</template>

<script>
import {
  MY_GRADE,
  DETAILS,
  GRADE_NAME,
  DURATION_TYPE,
  FINISHED_DATE,
  OPERATIONS,
  GRADE_STATUS,
  TARGET_STATUS
} from "@/constants/TEXT";
import { PATH_EMPLYEE_MY_DETAIL, PATH_PERFORMANCE_TARGET_SET } from "@/constants/URL";
import { getMyPerformanceList } from "@/constants/API";

export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      tableData: [],
      nav: [
        {
          label:  MY_GRADE,
          active: true
        }
      ],
      constants: {
        DETAILS,
        GRADE_NAME,
        DURATION_TYPE,
        FINISHED_DATE,
        OPERATIONS,
        GRADE_STATUS,
        TARGET_STATUS
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    goDetail(row) {
      // TODO 需要区分是否为高管 
      // 非高管
      // this.$router.push(
      //   PATH_EMPLYEE_MY_DETAIL(row.performance_id, row.performance_user_id)
      // );
      // 高管
      this.$router.push(
        PATH_PERFORMANCE_TARGET_SET(row.name, row.performance_id, row.performance_user_id)
      );
    },
    handleCurrentChange() {
      this.currentPage = val;
      this.refreshList({
        page: val
      });
    },
    refreshList(data) {
      return getMyPerformanceList(data)
        .then(res => {
          const { total, data } = res;
          this.total = total;
          this.tableData = data;
        })
        .catch(e => {});
    }
  },
  created() {
    this.refreshList({ page: 1 });
  }
};
</script>
<style scoped>
.my-grade-list .content-container {
  padding: 20px;
}
</style>
