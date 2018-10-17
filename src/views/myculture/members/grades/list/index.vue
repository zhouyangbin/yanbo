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
            <el-form-item prop="nemployee_nameame">
              <el-input placeholder="请输入姓名" v-model="memberForm.employee_name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select v-model="memberForm.superior_status" placeholder="上级评状态">
                <el-option v-for="v of constants.BREF_HIGH_LEVEL_STATUS" :label="v.value" :key="v.key" :value="v.key"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <distribute-summary :data="overview"></distribute-summary>
        </div>
        <br>
        <hr class="dash">
        <br>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="name" label="姓名">
            <template slot-scope="scope">
              <el-row type="flex" align="middle">
                <img width="30px" v-if="scope.row.avatar" height="30px" style="margin-right:15px" :src="`${scope.row.avatar}_30x30q100.jpg`" alt="">
                <span class="stringAvatar" v-else>{{scope.row.name.substr(scope.row.name.length-2)}}</span>
                {{scope.row.name}}
              </el-row>
            </template>
          </el-table-column>
          <el-table-column prop="score" label="自评分数"></el-table-column>
          <el-table-column prop="superior_score" label="上级评分数"></el-table-column>
          <el-table-column prop="self" label="271等级">
            <template slot-scope="scope">
              {{scope.row._271_level ? getLevelText(scope.row._271_level):'无'}}
            </template>
          </el-table-column>
          <el-table-column prop="superior_status" label="上级评状态"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
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
  MY_MEMBER_RULE,
  BREF_HIGH_LEVEL_STATUS,
  LEVEL_ALIAS
} from "@/constants/TEXT";
import {
  PATH_MEMEBER_CULTURE_GRADE,
  PATH_MEMBER_CULTURE_DETAILS
} from "@/constants/URL";
import { getMembersList } from "@/constants/API";

export default {
  data() {
    return {
      overview: {
        top: {
          count: 0,
          expected: 0
        },
        middle: {
          count: 0,
          expected: 0
        },
        bottom: {
          count: 0,
          expected: 0
        }
      },
      total: 0,
      currentPage: 1,
      tableData: [],
      // summary: {
      //   top: 2,
      //   medium: 13,
      //   bottom: 2
      // },
      memberForm: {
        employee_name: "",
        superior_status: ""
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
        MY_MEMBER_RULE,
        BREF_HIGH_LEVEL_STATUS
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
        this.getData({ page: 1, ...v });
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    getData(data) {
      getMembersList(this.$route.params.id, data).then(res => {
        // console.log(res);
        const { total, data, overview } = res;
        this.tableData = data;
        this.total = total;
        this.postOverview(overview);
      });
    },
    postOverview(data) {
      let obj = {};
      for (const i of data) {
        obj[i.key] = {
          count: parseInt(i.count),
          expected: i.expected_value
        };
      }
      this.overview = { ...obj };
    },
    currentChange(v) {
      this.getData({ page: v, ...this.memberForm });
    },
    goDetail(row) {
      this.$router.push(
        PATH_MEMBER_CULTURE_DETAILS(this.$route.params.id, row.id)
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
</style>
