<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <section>
        <el-form :inline="true" :model="filterForm" ref="filterForm">
          <el-form-item prop="name">
            <el-input placeholder="请输入姓名" v-model="filterForm.name"></el-input>
          </el-form-item>
          <el-form-item prop="status">
            <el-select v-model="filterForm.status" placeholder="请选择">
              <el-option label="未完成" value="0"></el-option>
              <el-option label="已完成" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-button style="margin-left:30px" round @click="resetForm('filterForm')">{{constants.LABEL_EMPTY}}</el-button>
        </el-form>
      </section>
      <section>
        <el-row type="flex" :gutter="20" align="top">
          <el-col :span="18">
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="name" :label="constants.LABEL_NAME" min-width="180">
                <template slot-scope="scope">
                  <el-row type="flex" align="middle">
                    <img width="30px" height="30px" style="margin-right:15px" :src="`${scope.row.avatar}_30x30q100.jpg`" alt="">
                    <span>{{scope.row.name}}</span>
                    <span class="appeal-tag" v-if="scope.row.has_appeal">{{constants.APPEAL}}</span>
                  </el-row>
                </template>
              </el-table-column>
              <el-table-column prop="self_score" :label="constants.SELF_EVALUATION" width="180">
              </el-table-column>
              <el-table-column prop="superior_score" :label="constants.LABEL_SUP">
              </el-table-column>
              <el-table-column prop="score_level" label="对应等级">
              </el-table-column>
              <el-table-column prop="ops" :label="constants.OPERATIONS">
                <template slot-scope="scope">
                  <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
                </template>
              </el-table-column>
            </el-table>
            <br>
            <el-row type="flex" justify="end">
              <pagination @current-change="handleCurrentChange" :currentPage="currentPage" :total="total"></pagination>
            </el-row>
          </el-col>
          <el-col :span="6">
            <peformance-pie :data="chartData"></peformance-pie>
          </el-col>
        </el-row>
      </section>
    </section>
  </div>
</template>
<script>
import {
  TEAM_GRADE,
  DETAILS,
  SELF_EVALUATION,
  LABEL_NAME,
  LABEL_SUP,
  OPERATIONS,
  APPEAL,
  LABEL_EMPTY
} from "@/constants/TEXT";
import { PATH_EMPLOYEE_TEAM_MEMEBER } from "@/constants/URL";
import { AsyncComp } from "@/utils/asyncCom";
import { getTeamList } from "@/constants/API";

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      filterForm: {
        status: "",
        name: ""
      },
      chartData: [],
      nav: [
        {
          label: TEAM_GRADE,
          active: true
        }
      ],
      tableData: [],
      constants: {
        DETAILS,
        SELF_EVALUATION,
        LABEL_NAME,
        LABEL_SUP,
        OPERATIONS,
        APPEAL,
        LABEL_EMPTY
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "peformance-pie": AsyncComp(
      import("@/components/modules/performance/GradePie/index.vue")
    ),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goDetail(row) {
      this.$router.push(
        PATH_EMPLOYEE_TEAM_MEMEBER(this.$route.params.id, row.id)
      );
    },
    refreshList(data) {
      return getTeamList(this.$route.params.id, data)
        .then(res => {
          const { user, overview } = res;
          this.tableData = user.data;
          this.total = user.total;
          this.chartData = overview;
        })
        .catch(e => {});
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList({
        page: val,
        name: this.filterForm.name,
        superior_status: this.filterForm.status
      });
    }
  },
  watch: {
    filterForm: {
      handler: function(v) {
        const postData = {
          name: v.name,
          superior_status: v.status,
          page: 1
        };
        this.refreshList(postData);
        this.currentPage = 1;
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped>
.appeal-tag {
  padding: 5px;
  background: lightcoral;
  color: white;
  border-radius: 10px;
  margin-left: 10px;
}
</style>
