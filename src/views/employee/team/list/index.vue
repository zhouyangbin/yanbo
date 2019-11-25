<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <section class="content-container">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="类型" prop="p_type">
          <template slot-scope="scope">
            <div>{{ scope.row.p_type | handleType }}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          :label="constants.GRADE_NAME"
        ></el-table-column>
        <el-table-column
          prop="department_name"
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
        <el-table-column prop="stage" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{
              constants.DETAILS
            }}</el-button>
            <el-button
              v-if="scope.row.p_type !== 'executive'"
              @click="exportDetail(scope.row)"
              type="text"
              size="small"
              >{{ constants.EXPORT_DETAILS }}</el-button >
              <!-- 导出明细 -->
          </template>
        </el-table-column>
      </el-table>
      <br />
      <el-row type="flex" justify="end">
        <el-pagination
          v-if="total"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[10, 20, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
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
  PATH_PERFORMANCE_MY_DETAIL
} from "@/constants/URL";
import { getTeamScore } from "@/constants/API";
import { PATH_EXPORT_TEAM_PERFORMANCE } from "@/constants/URL";

export default {
  data() {
    return {
      page: 1,
      perPage: 10,
      total: 0,
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
    "nav-bar": () => import("@/components/common/Navbar/index.vue")
  },
  filters: {
    handleType(val) {
      let type = "";
      if (val === "normal") {
        type = "员工绩效";
      } else if (val === "executive") {
        type = "组织部绩效";
      }
      return type;
    }
  },
  methods: {
    goDetail(row) {
      // to do
      if (row.p_type == "executive") {
        this.$router.push(
          PATH_PERFORMANCE_MY_DETAIL(
            row.performance_id,
            row.performance_user_id
          )
        );
      } else {
        this.$router.push(PATH_EMPLOYY_TEAM_GRADE_DETAIL(row.performance_id));
      }
    },
    getList() {
      let data = {
        page: this.page,
        perPage: this.perPage
      };
      getTeamScore(data)
        .then(res => {
          const { total, data } = res;
          this.tableData = data;
          this.total = total;
        })
        .catch(e => {});
    },
    handleSizeChange(val) {
      this.perPage = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
    exportDetail(row) {
      // to do
      window.open(PATH_EXPORT_TEAM_PERFORMANCE(row.id), "_blank", "noopener");
    }
  },
  created() {
    this.getList();
  }
};
</script>
<style scoped>
.my-grade-list .content-container {
  padding: 20px;
}
</style>
