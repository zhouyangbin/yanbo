<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <section class="progress-header">
        <el-row  :gutter="20" class="table-title">
          <el-col class="table-title-desc" :span="2.5">考核人员明细</el-col>
          <el-col class="table-title-num" :span="15">共{{total}}人</el-col>
        </el-row>
        <el-form :inline="true" :model="filterForm" ref="filterForm">
          <el-form-item prop="name">
            <el-input
              placeholder="请输入姓名"
              v-model="filterForm.name"
            ></el-input>
          </el-form-item>
          <el-form-item prop="status">
            <el-select
              v-model="filterForm.status"
              :placeholder="constants.PLS_SELECT"
            >
              <el-option label="未完成" value="0"></el-option>
              <el-option label="已完成" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-button
            style="margin-left:30px"
            round
            @click="resetForm('filterForm')"
            >{{ constants.LABEL_EMPTY }}</el-button
          >
        </el-form>
      </section>
      <section style="min-height:400px">
        <el-row type="flex" :gutter="20" align="top">
          <el-col>
            <el-table :data="tableData" stripe style="width: 100%" :header-cell-style="{background:'#eef1f6'}">
              <el-table-column
                prop="id"
                label="id"
              ></el-table-column>
              <el-table-column
                prop="name"
                :label="constants.LABEL_NAME"
              >
                <template slot-scope="scope">
                  <el-row type="flex" align="middle">
                    <span>{{ scope.row.name }}</span>
                    <span class="appeal-tag" v-if="scope.row.has_appeal">
                      {{ constants.APPEAL }}
                    </span>
                  </el-row>
                </template>
              </el-table-column>
              <el-table-column
                prop="hr_name"
                label="HRBP"
              ></el-table-column>
              <el-table-column
                prop="high_level_name"
                label="隔级"
              ></el-table-column>
              <el-table-column
                prop="self_score"
                label="自评分"
              ></el-table-column>
              <el-table-column
                prop="superior_score"
                label="上级评分"
              ></el-table-column>
              <el-table-column
                prop="score_level"
                label="绩效等级"
              ></el-table-column>
              <el-table-column
                label="标签分布"
              >
                <template slot-scope="scope">
                  <el-tag v-if="scope.row.score_level==S || scope.row.score_level==A" class="status-tag top-style">
                    <span class="top-style-text">{{scope.row.label_name}}</span>
                  </el-tag>
                  <el-tag v-if="scope.row.score_level==B" class="status-tag bplus-style">
                    <span class="bplus-style-text">{{scope.row.label_name}}</span>
                  </el-tag>
                  <el-tag v-else class="status-tag other-style">
                    <span class="other-style-text">{{scope.row.label_name}}</span>
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column
                prop="stage_status"
                label="状态"
                align='center'
              >
              </el-table-column>
              <el-table-column prop="ops" label="操作">
                <template slot-scope="scope">
                  <el-button v-if="scope.row.operate_status == 1"
                    @click="goDetail(scope.row)"
                    type="text"
                    size="small"
                    >详情</el-button>
                    <el-button v-if="scope.row.operate_status == 2"
                    @click="goDetail(scope.row)"
                    type="text"
                    size="small"
                    >评分</el-button>
                    <el-button v-if="scope.row.operate_status == 3"
                    @click="goDetail(scope.row)"
                    type="text"
                    size="small"
                    >修改评分</el-button>
                    <el-button v-if="scope.row.operate_status == 1"
                    @click="goDetail(scope.row)"
                    type="text"
                    size="small"
                    >处理申诉</el-button>
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
  LABEL_EMPTY,
  GRADE_MANAGE,
  PLS_SELECT
} from "@/constants/TEXT";
import {
  PATH_EMPLOYEE_TEAM_MEMEBER,
  PATH_EMPLOYEE_TEAM
} from "@/constants/URL";
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
          href: PATH_EMPLOYEE_TEAM
        },
        {
          label: GRADE_MANAGE,
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
        LABEL_EMPTY,
        PLS_SELECT
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
          this.tableData = user.data || [];
          this.total = user.total || [];
          //this.chartData = overview ||[];
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
.progress-header {
  background-color: white;
  padding: 20px 10px 10px 10px;
}
.table-title{
  line-height: 40px;
}
.table-title-desc{
  font-weight:500;
  color:#303133;
  font-size:16px;
}
.table-title-num{
  font-size:14px;
  line-height:40px;
  color:#909399;
}
.appeal-tag {
  padding: 5px;
  background: lightcoral;
  color: white;
  border-radius: 10px;
  margin-left: 10px;
}
.stringAvatar {
  width: 30px;
  height: 30px;
  background-color: cornflowerblue;
  color: white;
  border-radius: 50%;
  line-height: 30px;
  margin-right: 15px;
  font-size: 12px;
  text-align: center;
}
.team-pie {
  position: absolute;
  top: 0;
}
.status-tag{
  width:56px;
  height:28px;
  padding: 0;
  margin: 0;
  text-align: center;
  border-radius:4px;
  border: none;
  font-size:14px;
  font-weight:500;
}
.top-style{
  background:rgba(0,140,36,0.1);
  
  color:rgba(0,177,45,1) !important;
}
.bplus-style{
  background:rgba(255,160,77,0.1);
  color:rgba(255,104,0,1);
}
.other-style{
  background:rgba(213,217,226,0.1);
  color:rgba(92,108,139,1);
}
</style>
