<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="progress-header">
        <span>{{ performance_info.name }}</span
        >&nbsp;
        <span class="tips"
          >{{ constants.FINISHED_DATE }} {{ performance_info.end_time }}</span
        >
        <hr />
      </div>
      <el-table :data="listData" stripe style="width: 100%">
        <el-table-column
          v-for="(v, i) of tableColumns"
          :key="i"
          :prop="v.prop"
          :label="v.label"
          :min-width="i == 0 ? 180 : ''"
        >
        </el-table-column>
        <el-table-column prop="4" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{
              constants.DETAILS
            }}</el-button>
            <el-button
              @click="exportFile(scope.row)"
              type="text"
              size="small"
              >{{ constants.EXPORT_DETAILS }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <br />
      <el-row type="flex">
        <pagination
          :currentPage="currentPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :total="total"
          :pageSize="perPage"
        ></pagination>
      </el-row>
    </section>
  </div>
</template>
<script>
import {
  GRADE_PROGRESS,
  GRADE_MANAGE,
  FINISHED_DATE,
  DEPARTMENT,
  OPERATIONS,
  DETAILS,
  EXPORT_DETAILS,
  RECORD_STATUS,
  SELF_EVALUATION_STATUS,
  LEADER_EVALUATION_STATUS,
  TARGET_STATUS,
  APPEAL_STATUS
} from "@/constants/TEXT";
import {
  PATH_PERFORMANCE_MANAGER,
  PATH_PERFORMANCE_ORG_LIST,
  PATH_EXPORT_PERFORMANCE_DEPARTMENT
} from "@/constants/URL";

import { getPerformanceDepartmentsList } from "@/constants/API";

export default {
  data() {
    return {
      tableColumns: [
        {
          prop: "department",
          label: DEPARTMENT
        },
        {
          prop: "user_status",
          label: RECORD_STATUS
        },
        {
          prop: "target_status",
          label: TARGET_STATUS
        },
        {
          prop: "self_status",
          label: SELF_EVALUATION_STATUS
        },
        {
          prop: "superior_status",
          label: LEADER_EVALUATION_STATUS
        },
        {
          prop: "appeal_status",
          label: APPEAL_STATUS
        }
      ],
      currentPage: 1,
      total: 0,
      performance_info: {},
      constants: {
        FINISHED_DATE,
        OPERATIONS,
        DETAILS,
        EXPORT_DETAILS
      },
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_PERFORMANCE_MANAGER
        },
        {
          label: GRADE_PROGRESS,
          active: true
        }
      ],
      gradeName: "",
      finishedDate: "",
      listData: [],
      perPage: 10
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    goDetail(row) {
      this.$router.push(
        PATH_PERFORMANCE_ORG_LIST(this.$route.params.id, row.id)
      );
    },
    exportFile(row) {
      window.open(
        PATH_EXPORT_PERFORMANCE_DEPARTMENT(this.$route.params.id, row.id),
        "_blank",
        "noopener"
      );
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      const data = {
        page: this.currentPage
      };
      this.getList(data);
    },
    handleSizeChange(val) {
      //切换条数
      this.perPage = val;
      this.currentPage = 1;
      const data = {
        page: this.currentPage
      };
      this.getList(data);
    },
    getList(data) {
      data["perPage"] = this.perPage;
      return getPerformanceDepartmentsList(this.$route.params.id, data)
        .then(res => {
          const { total, data, performance_info } = res;
          this.total = total;
          this.listData = data;
          this.performance_info = performance_info;
        })
        .catch(e => {});
    }
  },
  created() {
    const data = {
      page: this.currentPage
    };
    this.getList(data);
  }
};
</script>
<style scoped>
.progress-header {
  background-color: white;
  padding: 20px 10px 10px 10px;
}
.tips {
  font-size: 10px;
  color: grey;
}
hr {
  margin-top: 20px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
</style>
