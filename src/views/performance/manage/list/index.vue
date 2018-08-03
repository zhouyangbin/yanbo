<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="progress-header">
        <span>{{gradeName||"mock grade name"}}</span>&nbsp;
        <span class="tips">{{constants.FINISHED_DATE}} {{finishedDate||"测试结束的时间 mock"}}</span>
        <hr>
      </div>
      <el-table :data="listData" stripe style="width: 100%">
        <el-table-column prop="department_name" :label="constants.DEPARTMENT" width="180">
        </el-table-column>
        <el-table-column prop="department_name" label="名单状态" width="180">
        </el-table-column>
        <el-table-column prop="department_name" label="目标状态" width="180">
        </el-table-column>
        <el-table-column prop="department_name" label="自评状态" width="180">
        </el-table-column>
        <el-table-column prop="department_name" label="上级评状态" width="180">
        </el-table-column>
        <el-table-column prop="department_name" label="申诉状态" width="180">
        </el-table-column>
        <el-table-column prop="4" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
            <el-button @click="exportFile(scope.row)" type="text" size="small">{{constants.EXPORT_DETAILS}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-row type="flex" justify="end">
        <pagination :currentPage="currentPage" @current-change="handleCurrentChange" :total="total"></pagination>
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
  EXPORT_DETAILS
} from "@/constants/TEXT";
import {
  PATH_PERFORMANCE_MANAGER,
  PATH_PERFORMANCE_ORG_LIST
} from "@/constants/URL";

export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      constants: {
        FINISHED_DATE,
        DEPARTMENT,
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
      listData: []
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
      //   window.open(PATH_EXPORT_DEP_GRADE(row.id), "_blank")
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList(val);
    },
    getList(page) {
      return getPerformanceDepartmentsList(this.$route.params.id, page)
        .then(res => {
          // console.log(res)
          // TODO: need other data
          const { total, data } = res;
          this.total = total;
          this.listData = data;
        })
        .catch(e => {});
    }
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
