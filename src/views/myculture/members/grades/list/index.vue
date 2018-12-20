<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container">
      <!-- <rule-text :text="constants.MY_MEMBER_RULE"></rule-text> -->
      <br>
      <section class="content-container bg-white">
        <header class="member-grade-info">
          <div class="name">&nbsp;&nbsp;&nbsp; {{evaluation_name}}</div>
          <div class="finish_time">{{constants.FINISHED_DATE}}: {{end_time}}</div>
        </header>
        <br>
        <hr>
        <br>
        <div class="members-list-filter">
          <el-form :inline="true" class="list-filter-form" :model="memberForm" ref="ruleForm">
            <el-form-item prop="employee_name">
              <el-input placeholder="请输入姓名" v-model="memberForm.employee_name"></el-input>
            </el-form-item>
            <el-form-item prop="superior_status">
              <el-select
                v-model="memberForm.superior_status"
                :placeholder="constants.LEADER_EVALUATION_STATUS"
              >
                <el-option
                  v-for="v of constants.BREF_LEADER_STATUS"
                  :label="v.value"
                  :key="v.key"
                  :value="v.key"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('ruleForm')">{{constants.RESET}}</el-button>
            </el-form-item>
          </el-form>
          <distribute-summary :data="overview"></distribute-summary>
        </div>
        <br>
        <hr class="dash">
        <br>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="name" :label="constants.NAME">
            <template slot-scope="scope">
              <el-row type="flex" align="middle">
                <img
                  width="30px"
                  v-if="scope.row.avatar"
                  height="30px"
                  style="margin-right:0.225rem"
                  :src="`${scope.row.avatar}_30x30q100.jpg`"
                  alt
                >
                <span class="stringAvatar" v-else>{{scope.row.name.substr(scope.row.name.length-2)}}</span>
                {{scope.row.name}}
              </el-row>
            </template>
          </el-table-column>
          <el-table-column prop="score" :label="constants.SELF_SCORE"></el-table-column>
          <el-table-column prop="superior_score" :label="constants.LEADER_SOCRE"></el-table-column>
          <el-table-column prop="self" label="271等级">
            <template
              slot-scope="scope"
            >{{scope.row._271_level ? getLevelText(scope.row._271_level):'无'}}</template>
          </el-table-column>
          <el-table-column prop="superior_status" :label="constants.LEADER_EVALUATION_STATUS"></el-table-column>
          <el-table-column prop="stage_name" :label="constants.LABEL_STATUS">
            <template slot-scope="scope">
              <div class="reject_status" v-if="scope.row.reject_status ==1">
                <div>{{constants.REJECT}}</div>
              </div>
              <div class="complain_status" v-if="scope.row.reject_status ==2">
                <div>{{constants.APPEAL}}</div>
              </div>
              <div v-if="scope.row.reject_status ==0">{{ scope.row.stage_name}}</div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" :label="constants.LABEL_OPERATIONS">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="goDetail(scope.row)"
                size="small"
              >{{constants.VIEW_DETAILS}}</el-button>
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
  FINISHED_DATE,
  BREF_LEADER_STATUS,
  LEVEL_ALIAS,
  LEADER_EVALUATION_STATUS,
  LABEL_STATUS,
  NAME,
  SELF_SCORE,
  LEADER_SOCRE,
  LABEL_OPERATIONS,
  VIEW_DETAILS,
  REJECT,
  APPEAL,
  RESET
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
      evaluation_name: "",
      end_time: "",
      total: 0,
      currentPage: 1,
      tableData: [],

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
        BREF_LEADER_STATUS,
        FINISHED_DATE,
        LEADER_EVALUATION_STATUS,
        LABEL_STATUS,
        NAME,
        SELF_SCORE,
        LEADER_SOCRE,
        LABEL_OPERATIONS,
        VIEW_DETAILS,
        REJECT,
        APPEAL,
        RESET
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getData(data) {
      getMembersList(this.$route.params.id, data).then(res => {
        // console.log(res);
        const { total, data, overview, evaluation_name, end_time } = res;
        this.tableData = data;
        this.total = total;
        this.evaluation_name = evaluation_name;
        this.end_time = end_time;
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
  align-items: center;
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
  /* font-size: 16px; */
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
/* .reject_status {
                border-radius: 20px;
                border: solid 2px #e94a2d;
                color: #e94a2d;
                text-align: center;
                width: 60px;
                z-index: 2;
                position: absolute;
                top: 50%;

                -webkit-transform: translateY(-50%) rotateZ(-12deg);
                -moz-transform: translateY(-50%) rotateZ(-12deg);
                -ms-transform: translateY(-50%) rotateZ(-12deg);
                -o-transform: translateY(-50%) rotateZ(-12deg);
                transform: translateY(-50%) rotateZ(-12deg);
                left: 0;
              } */
.reject_status div {
  border-radius: 20px;
  border: solid 2px #e94a2d;
  color: #e94a2d;
  width: 60px;
  transform: rotateZ(-12deg);
}
.complain_status,
.reject_status {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
}
.complain_status div {
  border-radius: 20px;
  border: solid 2px #46beeb;
  color: #46beeb;
  width: 60px;
  transform: rotateZ(-12deg);
}
</style>
