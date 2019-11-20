<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <section class="content-container">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="类型" prop="p_type">
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
          prop="target_status_text"
          :label="constants.TARGET_STATUS"
        ></el-table-column>
        <el-table-column
          prop="stage_text"
          :label="constants.GRADE_STATUS"
        ></el-table-column>
        <el-table-column prop="stage" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.stage === 51"
              type="text"
              @click="confirmationScore(scope.row)"
              >确认成绩</el-button
            >
            <el-button
              v-else-if="scope.row.stage === 53"
              type="text"
              @click="applytChangeIndicator(scope.row)"
              >申请调整指标</el-button
            >
            <el-button
              v-else-if="scope.row.stage === 31"
              type="text"
              @click="fillInSelfEvaluation(scope.row)"
              >填写自评</el-button
            >
            <!-- <el-button
              v-else-if="scope.row.stage === 11"
              type="text"
              @click="fillInIndicator(scope.row)"
              >填写指标</el-button
            >-->
            <template slot-scope="scope" v-else-if="scope.row.stage == 20">
              <el-button
                type="text"
                @click="applytChangeIndicator(scope.row)"
                >申请调整指标</el-button
              >
              <el-button @click="goDetail(scope.row)" type="text" size="small">详情</el-button>
            </template>
            <el-button v-else @click="goDetail(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br />
      <el-pagination
        v-if="tableData != []"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 50]"
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
      page: 1,
      perPage: 10,
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
    "nav-bar": () => import("@/components/common/Navbar/index.vue")
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
        row.p_type === "normal" &&
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
    // 确认成绩
    confirmationScore(row) {
      this.$router.push(
        PATH_PERFORMANCE_TARGET_DETAIL(
            row.performance_id,
            row.performance_user_id
          )
        )
    },
    // 填写自评
    fillInSelfEvaluation(row) {
      this.$router.push(
        PATH_PERFORMANCE_TARGET_SET(row.performance_id, row.performance_user_id)
      );
    },
    /**
     * 点击跳转到指标填写
     */
    fillInIndicator(row) {
      this.$router.push(
        PATH_PERFORMANCE_TARGET_SET(row.performance_id, row.performance_user_id)
      );
    },
    applytChangeIndicator(row) {
      // 申请调整指标
    },
    /**
     * 跳转到指标详情页面
     */
    goDetail(row) {
      if (row.p_type == "executive") {
        this.$router.push(
          PATH_PERFORMANCE_TARGET_DETAIL(
            row.performance_id,
            row.performance_user_id
          )
        );
      } else if (row.p_type == "normal") {
        this.$router.push(
          PATH_EMPLYEE_MY_DETAIL(row.performance_id, row.performance_user_id)
        );
      }
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
