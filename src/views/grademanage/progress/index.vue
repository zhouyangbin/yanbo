<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="progress-header">
        <span>{{gradeName}}</span>&nbsp;
        <span class="tips">{{constants.FINISHED_DATE}} {{finishedDate}}</span>
        <hr>
        <el-form :inline="true" ref="filter-form" :model="searchForm" class="form-search">
          <el-form-item prop="recordStatus">
            <el-select v-model="searchForm.recordStatus" :placeholder="constants.RECORD_STATUS">
              <el-option v-for="v of constants.ENUM_RECORD_STATUS" :key="v.key" :label="v.value" :value="v.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="selfStatus">
            <el-select v-model="searchForm.selfStatus" :placeholder="constants.SELF_EVALUATION_STATUS">
              <el-option v-for="v of constants.ENUM_SELF_EVALUATION_STATUS" :key="v.key" :label="v.value" :value="v.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="leaderStatus">
            <el-select v-model="searchForm.leaderStatus" :placeholder="constants.LEADER_EVALUATION_STATUS">
              <el-option v-for="v of constants.ENUM_LEADER_EVALUATION_STATUS" :key="v.key" :label="v.value" :value="v.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="upLeaderStatus">
            <el-select v-model="searchForm.upLeaderStatus" :placeholder="constants.LEADER_PLUS_EVALUATION_STATUS">
              <el-option v-for="v of constants.ENUM_LEADER_PLUS_EVALUATION_STATUS" :key="v.key" :label="v.value" :value="v.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="faceStatus">
            <el-select v-model="searchForm.faceStatus" :placeholder="constants.FACE_EVALUATION_STATUS">
              <el-option v-for="v of constants.ENUM_FACE_EVALUATION_STATUS" :key="v.key" :label="v.value" :value="v.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button round size="medium" @click="resetFilter('filter-form')" class="btn-reset">{{constants.RESET}}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="listData" stripe style="width: 100%">
        <el-table-column prop="department_name" :label="constants.DEPARTMENT" width="180">
        </el-table-column>
        <el-table-column prop="import_status" :label="constants.RECORD_STATUS" width="180">
          <template slot-scope="scope">
            {{(constants.ENUM_RECORD_STATUS.filter(v=>v.key===String(scope.row.import_status))[0]||{}).value}}
          </template>
        </el-table-column>
        <el-table-column prop="self_status" :label="constants.SELF_EVALUATION_STATUS">
          <template slot-scope="scope">
            {{(constants.ENUM_SELF_EVALUATION_STATUS.filter(v=>v.key===String(scope.row.self_status))[0]||{}).value}}
          </template>
        </el-table-column>
        <el-table-column prop="superior_status" :label="constants.LEADER_EVALUATION_STATUS">
          <template slot-scope="scope">
            {{(constants.ENUM_LEADER_EVALUATION_STATUS.filter(v=>v.key===String(scope.row.superior_status))[0]||{}).value}}
          </template>
        </el-table-column>
        <el-table-column prop="highlevel_status" :label="constants.LEADER_PLUS_EVALUATION_STATUS">
          <template slot-scope="scope">
            {{(constants.ENUM_LEADER_PLUS_EVALUATION_STATUS.filter(v=>v.key===String(scope.row.highlevel_status))[0]||{}).value}}
          </template>
        </el-table-column>
        <el-table-column prop="3" :label="constants.FACE_EVALUATION_STATUS">
          <template slot-scope="scope">
            {{(constants.ENUM_FACE_EVALUATION_STATUS.filter(v=>v.key===String(scope.row.feedback_status))[0]||{}).value}}
          </template>
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
        <pagination @current-change="handleCurrentChange" :total="total"></pagination>
      </el-row>
    </section>
  </div>
</template>
<script>
import {
  GRADE_PROGRESS,
  GRADE_MANAGE,
  FINISHED_DATE,
  RECORD_STATUS,
  SELF_EVALUATION_STATUS,
  LEADER_EVALUATION_STATUS,
  LEADER_PLUS_EVALUATION_STATUS,
  FACE_EVALUATION_STATUS,
  ENUM_RECORD_STATUS,
  ENUM_SELF_EVALUATION_STATUS,
  ENUM_LEADER_EVALUATION_STATUS,
  ENUM_LEADER_PLUS_EVALUATION_STATUS,
  ENUM_FACE_EVALUATION_STATUS,
  DEPARTMENT,
  OPERATIONS,
  DETAILS,
  EXPORT_DETAILS,
  RESET
} from "@/constants/TEXT";
import {
  PATH_GRADE_MANAGE,
  PATH_GRADE_ORG_LIST,
  PATH_EXPORT_DEP_GRADE
} from "@/constants/URL";
import { getProgressList } from "@/constants/API";
import { compact } from "@/utils/obj";
export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      constants: {
        FINISHED_DATE,
        RECORD_STATUS,
        SELF_EVALUATION_STATUS,
        LEADER_EVALUATION_STATUS,
        LEADER_PLUS_EVALUATION_STATUS,
        FACE_EVALUATION_STATUS,
        ENUM_RECORD_STATUS,
        ENUM_SELF_EVALUATION_STATUS,
        ENUM_LEADER_EVALUATION_STATUS,
        ENUM_LEADER_PLUS_EVALUATION_STATUS,
        ENUM_FACE_EVALUATION_STATUS,
        DEPARTMENT,
        OPERATIONS,
        DETAILS,
        EXPORT_DETAILS,
        RESET
      },
      searchForm: {
        recordStatus: "",
        selfStatus: "",
        leaderStatus: "",
        upLeaderStatus: "",
        faceStatus: ""
      },
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_GRADE_MANAGE
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
    resetFilter(formName) {
      this.$refs[formName].resetFields();
    },
    goDetail(row) {
      this.$router.push(PATH_GRADE_ORG_LIST(this.$route.params.id, row.id));
    },
    exportFile(row) {
      // window.location.href = ;
      window.open(PATH_EXPORT_DEP_GRADE(row.id), "_blank");
    },
    refreshList(params) {
      // console.log(this.$route.params.id)
      getProgressList(this.$route.params.id, compact(params)).then(res => {
        if (res) {
          // console.log(res)
          this.gradeName = res.info.evaluation_name;
          this.listData = res.list;
          this.finishedDate = res.info.end_time;
        }
      });
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val;
      const postData = {
        import_status: this.searchForm.recordStatus,
        self_status: this.searchForm.selfStatus,
        superior_status: this.searchForm.leaderStatus,
        highlevel_status: this.searchForm.upLeaderStatus,
        feedback_status: this.searchForm.faceStatus,
        page: val
      };
      this.refreshList(postData);
    }
  },
  watch: {
    searchForm: {
      handler: function(v) {
        const postData = {
          import_status: this.searchForm.recordStatus,
          self_status: this.searchForm.selfStatus,
          superior_status: this.searchForm.leaderStatus,
          highlevel_status: this.searchForm.upLeaderStatus,
          feedback_status: this.searchForm.faceStatus,
          page: this.currentPage
        };
        this.refreshList(postData);
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
.tips {
  font-size: 10px;
  color: grey;
}
hr {
  margin-top: 20px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
.form-search {
  background-color: #f8f8f8;
  padding: 20px;
  padding-bottom: 0px;
}

.btn-reset {
  color: #09c981;
  border-color: #09c981;
}
</style>
