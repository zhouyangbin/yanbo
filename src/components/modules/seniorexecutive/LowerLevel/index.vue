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
              v-for="(value, name) in stageOptions"
              :key="value"
              :label="value"
              :value="name"
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
          <el-button @click="resetForm()">清空</el-button>
        </el-form-item>
      </el-form>
      <el-table class="lower-list" :data="lowerList" style="width: 100%">
        <el-table-column prop="workcode" label="工号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
          <template slot-scope="scope">
            <el-row type="flex" align="middle" style="height:44px">
              <span>{{ scope.row.name }}</span>
              <span class="appeal-tag" v-if="scope.row.stage === 100">
                申述中
              </span>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column
          prop="sub_department_name"
          :show-overflow-tooltip="true"
          label="大部门/分校"
        >
          <template slot-scope="scope">
            <div v-if="scope.row.sub_department_name">
              {{ scope.row.sub_department_name }}
            </div>
            <div v-else>
              — —
            </div>
          </template>
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
import {
  getExecutiveMyUnderLower,
  getExecutivePerformanceWebTagTypes,
  getExecutiveStageList
} from "@/constants/API";
import {
  PATH_EMPLOYEE_TEAM,
  PATH_PERFORMANCE_INDEX_DETAIL
} from "@/constants/URL";
import {} from "@/constants/TEXT";
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
      constants: {},
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
      stageOptions: {}
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
    resetForm() {
      this.filterForm = {
        name: "",
        stage: "",
        score_tag: ""
      };
      this.getMyLowerList();
    },
    viewDetail(data) {
      // to do stage 为 10 待共识    同意
      this.$router.push(
        PATH_PERFORMANCE_INDEX_DETAIL(
          this.performanceId,
          data.performance_user_id,
          "subteam"
        )
      );
    },
    getMyLowerList() {
      let data = {
        performance_id: parseInt(this.performanceId),
        page: this.page,
        perPage: this.perPage,
        name: this.filterForm.name || "",
        stage: this.filterForm.stage || "",
        score_tag: this.filterForm.score_tag || ""
      };
      getExecutiveMyUnderLower(data).then(res => {
        let { data, total } = res;
        this.total = total;
        this.lowerList = data;
      });
    }
  },
  created() {
    getExecutiveStageList(this.performanceId)
      .then(res => {
        this.stageOptions = res;
      })
      .catch(e => {});
    getExecutivePerformanceWebTagTypes(this.performanceId)
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
    .appeal-tag {
      width: 44px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      background: rgba(244, 63, 2, 0.11);
      border-radius: 10px 10px 10px 0px;
      color: rgba(244, 63, 2, 1);
      font-size: 12px;
      position: relative;
      top: -13px;
      right: -5px;
    }
    .grade-operation {
      color: #38d0af;
      cursor: pointer;
    }
  }
}
</style>
