<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container">
      <!-- <rule-text :text="constants.MY_DOWN_MEMBER_RULE"></rule-text>
      <br> -->
      <section class="content-container bg-white">
        <header class="member-grade-info">
          <div class="name">
            &nbsp;&nbsp;&nbsp; 2018年文化评分
          </div>
          <div class="finish_time">
            截止时间: xxx年 xx 约xx 日 22:99
          </div>
        </header>
        <br>
        <hr>
        <br>
        <div class="members-list-filter">
          <el-form :inline="true" class="list-filter-form" :model="memberForm" ref="ruleForm">
            <el-form-item prop="superior_name">
              <el-input placeholder="请输入下级姓名" v-model="memberForm.superior_name"></el-input>
            </el-form-item>
            <el-form-item prop="employee_name">
              <el-input placeholder="隔级姓名" v-model="memberForm.employee_name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select v-model="memberForm.highlevel_status" placeholder="上级评状态">
                <el-option v-for="v of constants.BREF_HIGH_LEVEL_STATUS" :label="v.value" :key="v.key" :value="v.key"></el-option>
                <!-- <el-option label="区域一" value="shanghai"></el-option> -->
              </el-select>
            </el-form-item>
          </el-form>
          <distribute-summary :data="summary"></distribute-summary>
        </div>
        <br>
        <hr class="dash">
        <br>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="name" label="上级姓名"></el-table-column>
          <el-table-column prop="score" label="自评分数"></el-table-column>
          <el-table-column prop="leader_score" label="上级评分数"></el-table-column>
          <el-table-column prop="_271_level" label="271等级">
            <template slot-scope="scope">
              {{scope.row._271_level ? getLevelText(scope.row._271_level):'无'}}
            </template>
          </el-table-column>
          <el-table-column prop="superior_status" label="上级评状态">
            <template slot-scope="scope">
              {{scope.row.superior_status ? '未评':"已评"}}
            </template>
          </el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click="goDetail(scope.row)" type="text" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <el-row type="flex" justify="end">
          <pagination @current-change="currentChange" :currentPage="currentPage" :total="total"></pagination>
        </el-row>
      </section>
    </section>
  </div>
</template>
<script>
import {
  MY_DOWN_MEMBER,
  DOWN_MEMBERS_GRADE_LIST,
  LEVEL_ALIAS,
  BREF_HIGH_LEVEL_STATUS
} from "@/constants/TEXT";
import {
  PATH_DOWN_MEMEBER_CULTURE_GRADE,
  PATH_DOWN_MEMBER_CULTURE_DETAILS
} from "@/constants/URL";
import { getDownMembersList } from "@/constants/API";

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      tableData: [],
      summary: {
        top: 2,
        medium: 13,
        bottom: 2
      },
      memberForm: {
        superior_name: "",
        employee_name: "",
        highlevel_status: ""
      },
      nav: [
        {
          label: DOWN_MEMBERS_GRADE_LIST,
          href: PATH_DOWN_MEMEBER_CULTURE_GRADE
        },
        {
          label: MY_DOWN_MEMBER,
          active: true
        }
      ],
      constants: {
        BREF_HIGH_LEVEL_STATUS
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    "distribute-summary": () =>
      import("@/components/modules/myculture/membersdistribute/index.vue")
  },
  watch: {
    memberForm: {
      handler: function(v) {
        this.currentPage = 1;
        this.refreshData({ page: 1, ...v });
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    currentChange(v) {
      this.refreshData({ page: v, ...this.memberForm });
    },
    refreshData(data) {
      getDownMembersList(this.$route.params.id, data).then(res => {
        const { total, data } = res;
        this.total = total;
        this.tableData = data;
      });
    },
    goDetail(row) {
      this.$router.push(
        PATH_DOWN_MEMBER_CULTURE_DETAILS(this.$route.params.id, row.id)
      );
    },
    getLevelText(num) {
      return LEVEL_ALIAS[num];
    }
  }
};
</script>
<style scoped>
.my-grade-list .content-container {
  padding: 20px;
}
.my-grade-list .bg-white {
  background-color: white;
}

.member-grade-info {
  display: flex;
  align-content: center;
  align-items: center;
}
.member-grade-info .name {
  margin-right: 15px;
}
.member-grade-info .finish_time {
  font-size: 10px;
  color: grey;
}
.members-list-filter {
  margin-left: 20px;

  display: flex;
}
.list-filter-form {
  display: inline-block;
  margin-right: 40px;
}
.list-filter-form >>> .el-form-item {
  margin-bottom: 0;
}

hr.dash {
  border-style: dashed;
  border-color: grey;
}
</style>
