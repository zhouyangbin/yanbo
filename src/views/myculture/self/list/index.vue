<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <br>
    <section class="content-container">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column v-for="(v,i) of columns" :prop="v.prop" :key="i" :label="v.label">
        </el-table-column>
        <el-table-column prop="address" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-row type="flex" justify="end">
        <pagination @current-change="handleCurrentChange" :currentPage="currentPage" :total="total"></pagination>
      </el-row>
      <br>
    </section>
  </div>
</template>


<script>
import {
  MY_GRADE,
  DETAILS,
  GRADE_NAME,
  FINISHED_DATE,
  OPERATIONS,
  GRADE_STATUS
} from "@/constants/TEXT";
import { getMyCultureList } from "@/constants/API";
import { PATH_MY_CULTURE_GRADE_DETAILS } from "@/constants/URL";

export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      tableData: [],
      nav: [
        {
          label: MY_GRADE,
          active: true
        }
      ],
      constants: {
        DETAILS,
        OPERATIONS
      },
      columns: [
        {
          prop: "name",
          label: GRADE_NAME
        },
        {
          prop: "end_time",
          label: FINISHED_DATE
        },
        {
          prop: "stage_name",
          label: GRADE_STATUS
        }
      ]
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    goDetail(row) {
      this.$router.push(PATH_MY_CULTURE_GRADE_DETAILS(row.id));
    },
    handleCurrentChange() {
      this.currentPage = val;
      this.refreshList({
        page: val
      });
    },
    refreshList(data) {
      return getMyCultureList(data)
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
