<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <!-- <br> -->
    <br>
    <section class="content-container">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column v-for="(v,i) of columns" :key="i" :prop="v.prop" :label="v.label"></el-table-column>
        <el-table-column prop="address" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
            <el-button
              @click="exportMore(scope.row)"
              type="text"
              size="small"
            >{{constants.EXPORT_DETAILS}}</el-button>
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
  DETAILS,
  GRADE_NAME,
  FINISHED_DATE,
  OPERATIONS,
  EXPORT_DETAILS,
  DOWN_MEMBERS_GRADE_LIST
} from "@/constants/TEXT";
import { getMyDownMembersCultureList } from "@/constants/API";

import {
  PATH_DOWN_MEMBER_CULTURE_LIST,
  PATH_EXPORT_CULTURE_GRADE
} from "@/constants/URL";

export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      tableData: [],
      nav: [
        {
          label: DOWN_MEMBERS_GRADE_LIST,
          active: true
        }
      ],
      constants: {
        DETAILS,
        OPERATIONS,
        EXPORT_DETAILS
      },
      columns: [
        {
          prop: "name",
          label: GRADE_NAME
        },
        {
          prop: "end_time",
          label: FINISHED_DATE
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
      this.$router.push(PATH_DOWN_MEMBER_CULTURE_LIST(row.id));
    },
    handleCurrentChange() {
      this.currentPage = val;
      this.refreshList({
        page: val
      });
    },
    refreshList(data) {
      return getMyDownMembersCultureList(data).then(res => {
        const { total, data } = res;
        this.total = total;
        this.tableData = data;
      });
    },
    exportMore(row) {
      window.open(PATH_EXPORT_CULTURE_GRADE(row.id, 2), "_blank", "noopener");
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
