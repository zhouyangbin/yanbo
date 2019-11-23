<template>
  <div class="isolation-level">
    <section style="min-height:400px">
      <div class="filter-title">
        <span>考核人员明细</span
        ><span class="filter-number">共{{ total }}人</span>
      </div>
      <el-form
        :inline="true"
        ref="filterForm"
        :model="filterForm"
        class="demo-form-inline filter-form"
      >
        <el-form-item prop="name">
          <common-select
            :code="filterForm.name"
            :isDisabled="false"
            @selectedUser="selectWorkCode"
          ></common-select>
        </el-form-item>
        <el-form-item prop="stage">
          <el-select
            @change="changeStage"
            v-model="filterForm.stage"
            placeholder="请选择状态"
          >
            <el-option
              v-for="item in constants.STAGEOPTIONS"
              :key="item.key"
              :label="item.value"
              :value="item.key"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="score_tag">
          <el-select
            @change="changeScoreTag"
            v-model="filterForm.score_tag"
            placeholder="请选择标签"
          >
            <el-option
              v-for="item in tagOptions"
              :key="item.key"
              :label="item.name"
              :value="item.key"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('filterForm')">清空</el-button>
        </el-form-item>
      </el-form>
      <el-row type="flex" :gutter="20" align="top">
        <el-col
          :span="3"
          style="border-right: solid 1px rgba(233,235,242,1); min-height: 400px"
        >
          <el-radio-group @change="changeTeam" v-model="team_leader">
            <el-radio class="check-tag" label="">全部下属</el-radio>
            <el-radio
              class="check-tag"
              v-for="item in teamList"
              :key="item.workcode"
              :label="item.workcode"
              >{{ item.name }}</el-radio
            >
          </el-radio-group>
        </el-col>
        <el-col :span="21" style="min-height: 400px">
          <div class="display-data">
            <div class="display-team">
              <span class="team-name">刘二团队</span>
              <span class="team-nums">共10人</span>
              <span class="team-warning">Top超出1人</span>
              <span class="view-response">查看提交理由</span>
            </div>
            <el-button class="reject-btn" type="warning"
              >驳回刘二团队</el-button
            >
          </div>
          <el-table :data="lowerList" class="lower-list" style="width: 100%">
            <el-table-column prop="workcode" label="工号" width="100">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
              <template slot-scope="scope">
                <div v-if="scope.row.stage === 50">
                  {{ scope.row.name
                  }}<img
                    class="stage-img"
                    src="@/assets/img/stage.png"
                    alt=""
                  />
                </div>
                <div v-else>{{ scope.row.name }}</div>
              </template>
            </el-table-column>
            <el-table-column
              prop="sub_department_name"
              :show-overflow-tooltip="true"
              label="大部门/分校"
            >
            </el-table-column>
            <el-table-column prop="hrbp_name" label="HRBP"> </el-table-column>
            <el-table-column prop="isolation_name" label="隔级">
            </el-table-column>
            <el-table-column prop="self_score" label="自评分">
            </el-table-column>
            <el-table-column prop="superior_score" label="复评分">
            </el-table-column>
            <el-table-column prop="culture" label="文化评分"> </el-table-column>
            <el-table-column prop="final" label="最终成绩"> </el-table-column>
            <el-table-column prop="score_tag" label="标签分布">
            </el-table-column>
            <el-table-column prop="stage_text" label="状态"></el-table-column>
            <el-table-column prop="hrbp_name" label="操作">
              <template slot-scope="scope">
                <div class="grade-operation" @click="viewDetail(scope.row)">
                  详情
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </section>
    <br />
    <el-row type="flex" justify="end">
      <el-pagination
        v-if="total"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
import { AsyncComp } from "@/utils/asyncCom";
import { getMyIsolationUnderLower, getAdminTagTypes } from "@/constants/API";
import { PATH_EMPLOYEE_TEAM } from "@/constants/URL";
import {
  LABEL_EMPTY,
  LABEL_SELECT_DIVISION,
  STAGEOPTIONS
} from "@/constants/TEXT";
export default {
  components: {
    "common-select": AsyncComp(
      import("@/components/modules/seniorexecutive/CommonSelect/index.vue")
    )
  },
  props: {
    performanceId: {
      type: String,
      default: ""
    }
  },
  watch: {
    level_team_model(newVal, oldVal) {
      if (!newVal) {
        this.team_leader = "";
      }
    }
  },
  data() {
    return {
      constants: {
        STAGEOPTIONS
      },
      nav: [
        {
          label: "团队评分",
          href: PATH_EMPLOYEE_TEAM
        },
        {
          label: "评分详情",
          active: true
        }
      ],
      page: 1,
      perPage: 10,
      total: 0,
      filterForm: {
        name: "",
        stage: "",
        score_tag: ""
      },
      tagOptions: [],
      lowerList: [],
      teamList: [],
      team_leader: "",
      level_team_model: false
    };
  },
  methods: {
    changeTeam() {
      this.getMyLowerList();
    },
    selectWorkCode(data) {
      this.filterForm.name = data;
      this.getMyLowerList();
    },
    changeStage() {
      this.getMyLowerList();
    },
    changeScoreTag() {
      this.getMyLowerList();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.getMyLowerList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getMyLowerList();
    },
    handleSizeChange(val) {
      this.perPage = val;
      this.getMyLowerList();
    },
    viewDetail(data) {
      // to do
    },
    getMyLowerList() {
      let getData = {
        performance_id: parseInt(this.performanceId),
        page: this.page,
        name: this.filterForm.name,
        stage: this.filterForm.stage,
        score_tag: this.filterForm.score_tag,
        team_leader: this.team_leader
      };
      getMyIsolationUnderLower(getData)
        .then(res => {
          let { total, data, team } = res;
          this.total = total;
          this.lowerList = data;
          this.teamList = team;
        })
        .catch(e => {});
    }
  },
  created() {
    getAdminTagTypes()
      .then(res => {
        this.tagOptions = res;
      })
      .catch(e => {});
    this.getMyLowerList();
  }
};
</script>
<style scoped>
.isolation-level .check-tag >>> .el-radio__inner {
  display: none;
}
</style>
<style lang="scss" scoped>
.isolation-level {
  padding: 24px;
  background-color: #fff;
  .filter-title {
    color: #303133;
    .filter-number {
      margin-left: 6px;
      font-size: 14px;
      color: #909399;
    }
  }
  .filter-form {
    margin-top: 24px;
    .el-form-item {
      margin-bottom: 16px;
      .el-form-item__content {
        line-height: 32px;
      }
    }
  }
  .check-tag {
    width: 100%;
    height: 22px;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    line-height: 22px;
    margin: 16px 0 0 0;
    &:not(:first-child) {
      padding-left: 20px;
      color: #606266;
    }
  }
  .display-data {
    display: flex;
    justify-content: space-between;
    .display-team {
      font-size: 14px;
      .team-name {
        margin-right: 6px;
        color: #606266;
      }
      .team-nums {
        color: #909399;
      }
      .team-warning {
        color: #eb0c00;
      }
      .view-response {
        margin-left: 24px;
        color: #38d0af;
        cursor: pointer;
      }
    }
  }
  .lower-list {
    .stage-img {
      display: inline-block;
      width: 44px;
      height: 18px;
    }
    .grade-operation {
      color: #38d0af;
      cursor: pointer;
    }
  }
}
</style>
