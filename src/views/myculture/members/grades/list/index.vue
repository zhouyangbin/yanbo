<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container">
      <rule-text :text="constants.MY_MEMBER_RULE"></rule-text>
      <br>
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
            <el-form-item prop="name">
              <el-input placeholder="请输入姓名" v-model="memberForm.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select v-model="memberForm.status" placeholder="上级评状态">
                <el-option label="区域一" value="shanghai"></el-option>
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
          <el-table-column prop="self" label="自评分数"></el-table-column>
          <el-table-column prop="self" label="上级评分数"></el-table-column>
          <el-table-column prop="self" label="271等级"></el-table-column>
          <el-table-column prop="self" label="上级评状态"></el-table-column>
          <el-table-column prop="self" label="状态"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="goDetail(scope.row)" size="small">查看详情</el-button>
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
  MY_MEMBERS,
  MEMBERS_GRADE_LIST,
  MY_MEMBER_RULE
} from "@/constants/TEXT";
import {
  PATH_MEMEBER_CULTURE_GRADE,
  PATH_MEMBER_CULTURE_DETAILS
} from "@/constants/URL";

export default {
  data() {
    return {
      total: 50,
      currentPage: 1,
      tableData: [
        {
          id: 2
        }
      ],
      summary: {
        top: 2,
        medium: 13,
        bottom: 2
      },
      memberForm: {
        name: "",
        memberForm: "",
        status: ""
      },
      nav: [
        {
          label: MEMBERS_GRADE_LIST,
          href: PATH_MEMEBER_CULTURE_GRADE
        },
        {
          label: MY_MEMBERS,
          active: true
        }
      ],
      constants: {
        MY_MEMBER_RULE
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    "rule-text": () =>
      import("@/components/modules/myculture/ruletext/index.vue"),
    "distribute-summary": () =>
      import("@/components/modules/myculture/membersdistribute/index.vue")
  },
  watch: {
    memberForm: {
      handler: function(v) {
        this.currentPage = 1;
        this.getData();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    getData() {
      console.log("get data");
    },
    currentChange(v) {
      console.log(v);
    },
    goDetail(row) {
      this.$router.push(
        PATH_MEMBER_CULTURE_DETAILS(this.$route.params.id, row.id)
      );
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
.my-grade-list .rules-text {
  color: rgb(109, 110, 111);
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
.members-distribute-number {
  display: flex;
  align-items: center;
  flex: 1;
  color: white;
}
.members-distribute-number div {
  display: inline-block;
  text-align: center;
  padding: 10px 5px;
}
.members-distribute-number .top {
  flex: 2;
  background: rgb(248, 205, 85);
}
.members-distribute-number .medium {
  flex: 6;
  background: rgb(89, 202, 250);
}
.members-distribute-number .bottom {
  background: rgb(236, 72, 38);
  flex: 2;
}
hr.dash {
  border-style: dashed;
  border-color: grey;
}
</style>
