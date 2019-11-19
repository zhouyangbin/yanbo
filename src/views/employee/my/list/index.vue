<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <!-- <br> -->
    <br />
    <section class="content-container">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="类型">
          <template slot-scope="scope">
            <div>{{ scope.row.p_type | handlePType }}</div>
          </template>
        </el-table-column>
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
            <el-button
              v-if="handleWriteTargetButton(scope.row)"
              type="text"
              @click="goWriteTarget(scope.row)"
              >填写指标</el-button
            >
            <!-- <el-button
              v-if="handleCheckTargetButton(scope.row)"
              type="text"
              @click="goTargetDetail(scope.row)"
              >查看详情</el-button> -->
            <el-button @click="goDetail(scope.row)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br />
        <el-pagination
          v-if="tableData!=[]"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
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
import {
  PATH_EMPLYEE_MY_DETAIL,
  PATH_PERFORMANCE_TARGET_SET,
  PATH_PERFORMANCE_TARGET_DETAIL
} from "@/constants/URL";
import { getMyPerformanceList } from "@/constants/API";

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
        GRADE_NAME,
        DURATION_TYPE,
        FINISHED_DATE,
        OPERATIONS,
        GRADE_STATUS,
        TARGET_STATUS
      },
      pageSize: 10
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  filters: {
    handlePType(val) {
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
    /**
     * 显示填写指标按钮
     */
    handleWriteTargetButton(row) {
      return (
        row.p_type === "executive" &&
        row.stage_id === 1 &&
        row.target_status_id === 1
      );
    },
    /**
     * 显示查看详情按钮（指标）
     */
    handleCheckTargetButton(row) {
      return (
        row.p_type === "executive" &&
        (row.target_status_id === 1 || row.target_status_id === 0) &&
        (row.stage_id === 10 || row.stage_id === 20)
      );
    },
    /**
     * 点击跳转到指标填写
     */
    goWriteTarget(row) {
      this.$router.push(
        PATH_PERFORMANCE_TARGET_SET(row.performance_id, row.performance_user_id)
      );
    },
    /**
     * 跳转到指标详情页面
     */
    goTargetDetail(row) {
      
      
    },
    /**
     * 原有的跳转
     */
    goDetail(row) {
      if(row.p_type == "executive"){
          this.$router.push(
            PATH_PERFORMANCE_TARGET_DETAIL(
              row.performance_id,
              row.performance_user_id
            )
          )
      }else if(row.p_type == "normal"){
          this.$router.push(
            PATH_EMPLYEE_MY_DETAIL(row.performance_id, row.performance_user_id)
          );
      }    
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList({
        page: val,
        perPage:this.pageSize
      });
    },
    handleSizeChange(val){
      this.pageSize = val
      this.refreshList({ page: 1 ,perPage:val});
    },
    refreshList(data) {
      return getMyPerformanceList(data)
        .then(res => {
          this.total = res.data.length
          this.tableData = res.data;
        })
        .catch(e => {});
    }
  },
  created() {
    this.refreshList({ page: 1 ,perPage:10});
  }
};
</script>
<style scoped>
.my-grade-list .content-container {
  padding: 20px;
}
</style>
