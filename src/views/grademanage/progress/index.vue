<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="progress-header">
        <span>{{gradeName}}</span>&nbsp;
        <span class="tips">{{constants.FINISHED_DATE}} 2018-04-26 23:55˝</span>
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
            <el-button round size="medium" @click="resetFilter('filter-form')" class="btn-reset">清除</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="listData" stripe style="width: 100%">
        <el-table-column prop="date" :label="constants.DEPARTMENT" width="180">
        </el-table-column>
        <el-table-column prop="name" :label="constants.RECORD_STATUS" width="180">
        </el-table-column>
        <el-table-column prop="address" :label="constants.SELF_EVALUATION_STATUS">
        </el-table-column>
        <el-table-column prop="1" :label="constants.LEADER_EVALUATION_STATUS">
        </el-table-column>
        <el-table-column prop="2" :label="constants.LEADER_PLUS_EVALUATION_STATUS">
        </el-table-column>
        <el-table-column prop="3" :label="constants.FACE_EVALUATION_STATUS">
        </el-table-column>
        <el-table-column prop="4" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
            <el-button type="text" size="small">{{constants.EXPORT_DETAILS}}</el-button>
          </template>
        </el-table-column>
      </el-table>
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
    EXPORT_DETAILS
  } from "@/constants/TEXT"
  import { PATH_GRADE_MANAGE, PATH_GRADE_ORG_LIST } from "@/constants/URL"
  export default {
    data() {
      return {
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
          EXPORT_DETAILS
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
        gradeName: "testestst",
        listData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          }
        ]
      }
    },
    components: {
      "nav-bar": () => import("@/components/common/Navbar/index.vue")
    },
    methods: {
      resetFilter(formName) {
        this.$refs[formName].resetFields()
      },
      goDetail(row) {
        // FIXME: get id from row
        this.$router.push(PATH_GRADE_ORG_LIST(this.$route.params.id, "sdfa"))
      }
    },
    watch: {
      searchForm: {
        handler: function(v) {
          // TODO: request data
          console.log(v)
          console.log("request  data here")
        },
        deep: true,
        immediate: true
      }
    }
  }
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
    padding: 10px;
  }
  .form-search .el-form-item {
    margin-bottom: 0px;
  }
  .btn-reset {
    color: #09c981;
    border-color: #09c981;
  }
</style>
