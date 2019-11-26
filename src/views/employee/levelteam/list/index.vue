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
          v-if="false"
          prop="department"
          :label="constants.LABEL_DEPARTMENT"
        ></el-table-column>
        <el-table-column
          prop="type_text"
          :label="constants.DURATION_TYPE"
        ></el-table-column>
        <el-table-column prop="type_text" label="状态"></el-table-column>
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
  LEVEL_TEAM_GRADE,
  DETAILS,
  OPERATIONS,
  FINISHED_DATE,
  DURATION_TYPE,
  GRADE_NAME,
  EXPORT_DETAILS,
  LABEL_DEPARTMENT
} from "@/constants/TEXT";
import { PATH_EMPLOYY_LEVEL_TEAM_GRADE_DETAIL } from "@/constants/URL";
import { getLevelTeamGradeList } from "@/constants/API";
import { PATH_EXPORT_HIGHT_LEVEL_PERFORMANCE } from "@/constants/URL";

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      tableData: [],
      nav: [
        {
          label: LEVEL_TEAM_GRADE,
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
      this.$router.push(PATH_EMPLOYY_LEVEL_TEAM_GRADE_DETAIL(row.id));
    },
    getList(data) {
      return getLevelTeamGradeList(data)
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
      var link = document.createElement("a");
      link.setAttribute("download", "");
      link.href = PATH_EXPORT_HIGHT_LEVEL_PERFORMANCE(row.id);
      link.click();
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
