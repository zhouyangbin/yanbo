<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <!-- <br> -->
    <section class="content-container">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column
          prop="name"
          :label="constants.GRADE_NAME"
        ></el-table-column>
        <el-table-column
          prop="department"
          :label="constants.LABEL_DEPARTMENT"
        ></el-table-column>
        <el-table-column
          prop="type"
          :label="constants.DURATION_TYPE"
        ></el-table-column>
        <el-table-column
          prop="end_time"
          :label="constants.FINISHED_DATE"
        ></el-table-column>
        <el-table-column prop="address" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{
              constants.DETAILS
            }}</el-button>
            <el-button
              @click="exportDetail(scope.row)"
              type="text"
              size="small"
              >{{ constants.EXPORT_DETAILS }}</el-button
            >
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
    </section>
  </div>
</template>

<script>
import {
  TEAM_GRADE,
  DETAILS,
  OPERATIONS,
  FINISHED_DATE,
  DURATION_TYPE,
  GRADE_NAME,
  EXPORT_DETAILS,
  LABEL_DEPARTMENT
} from "@/constants/TEXT";
import {
  PATH_EMPLOYY_TEAM_GRADE_DETAIL,
  PATH_PERFORMANCE_TEAM_GRADE_DETAIL
} from "@/constants/URL";
import { getTeamGradeList } from "@/constants/API";
import { PATH_EXPORT_TEAM_PERFORMANCE } from "@/constants/URL";

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
      constants: {
        DETAILS,
        OPERATIONS,
        FINISHED_DATE,
        DURATION_TYPE,
        GRADE_NAME,
        EXPORT_DETAILS,
        LABEL_DEPARTMENT
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    goDetail(row) {
      // 组织部绩效 团队评分 详情
      this.$router.push(PATH_PERFORMANCE_TEAM_GRADE_DETAIL(row.id));
      // this.$router.push(PATH_EMPLOYY_TEAM_GRADE_DETAIL(row.id));
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
    },
    exportDetail(row) {
      window.open(PATH_EXPORT_TEAM_PERFORMANCE(row.id), "_blank", "noopener");
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
