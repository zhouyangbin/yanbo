<template>
  <div class="lower-level">
    <section>
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
            v-model="filterForm.stage"
            @change="changeStage"
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
            v-model="filterForm.score_tag"
            @change="changeScoreTag"
            placeholder="请选择标签"
          >
            <el-option
              v-for="item in tagOptions"
              :key="item.id"
              :label="item.display_name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('filterForm')">清空</el-button>
        </el-form-item>
      </el-form>
      <el-table class="lower-list" :data="lowerList" style="width: 100%">
        <el-table-column prop="workcode" label="工号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
          <template slot-scope="scope">
            <div v-if="scope.row.stage === 100">
              {{ scope.row.name
              }}<img class="stage-img" src="@/assets/img/stage.png" alt="" />
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
        <el-table-column prop="isolation_name" label="隔级"> </el-table-column>
        <el-table-column prop="self_score" label="自评分"> </el-table-column>
        <el-table-column prop="superior_score" label="复评分">
        </el-table-column>
        <el-table-column prop="culture" label="文化评分"> </el-table-column>
        <el-table-column prop="final" label="最终成绩"> </el-table-column>
        <el-table-column prop="score_tag" label="标签分布"> </el-table-column>
        <el-table-column prop="stage_text" label="状态"></el-table-column>
        <el-table-column prop="hrbp_name" label="操作">
          <template slot-scope="scope">
            <div class="grade-operation" @click="viewDetail(scope.row)">
              详情
            </div>
          </template>
        </el-table-column>
      </el-table>
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
import { getMyUnderLower, getPerformanceTagTypes } from "@/constants/API";
import {
  PATH_EMPLOYEE_TEAM,
  PATH_PERFORMANCE_TEAM_TARGET_AFFRIM
} from "@/constants/URL";
import { STAGEOPTIONS } from "@/constants/TEXT";
import { AsyncComp } from "@/utils/asyncCom";
export default {
  props: {
    performanceId: {
      type: String,
      default: ""
    },
    performance_user_id: {
      type: String,
      default: ""
    }
  },
  components: {
    "common-select": AsyncComp(
      import("@/components/modules/seniorexecutive/CommonSelect/index.vue")
    )
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
      lowerList: []
    };
  },
  methods: {
    selectWorkCode(data) {
      this.filterForm.name = data;
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
    viewDetail(data) {
      this.$router.push(
        PATH_PERFORMANCE_TEAM_TARGET_AFFRIM(
          this.performanceId,
          this.performance_user_id,
          data.workcode
        )
      );
      // 查看详情
    },
    getMyLowerList() {
      let data = {
        performance_id: parseInt(this.performanceId),
        page: this.page,
        perPage: this.perPage,
        name: this.filterForm.name,
        stage: this.filterForm.stage,
        score_tag: this.filterForm.score_tag
      };
      getMyUnderLower(data).then(res => {
        let { data, total } = res;
        this.total = total;
        this.lowerList = data;
      });
    }
  },
  created() {
    getPerformanceTagTypes(this.performanceId)
      .then(res => {
        this.tagOptions = res;
      })
      .catch(e => {});
    this.getMyLowerList();
  }
};
</script>
<style lang="scss" scoped>
.lower-level {
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
  .lower-list {
    margin-bottom: 20px;
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
