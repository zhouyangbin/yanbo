<template>
  <div class="lower-level">
    <section>
      <div class="filter-box" v-show="grade === 'sub'">
        <div class="filter-title">
          <span>考核人员明细</span><span class="filter-number">共10人</span>
        </div>
        <el-form
          :inline="true"
          ref="filterForm"
          :model="filterForm"
          class="demo-form-inline screening-form"
        >
          <el-form-item prop="name">
            <el-input
              v-model="filterForm.name"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="stage">
            <el-select v-model="filterForm.stage" placeholder="请选择状态">
              <el-option
                v-for="item in constants.STAGEOPTIONS"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="score_tag">
            <el-select v-model="filterForm.score_tag" placeholder="请选择标签">
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
        <el-table :data="lowerList" style="width: 100%">
          <el-table-column prop="workcode" label="工号" width="100">
          </el-table-column>
          <el-table-column prop="name" label="姓名">
            <template slot-scope="scope">
              <span class="grade-name">{{ scope.row.name }}</span>
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
          <el-table-column prop="self_score" label="自评分"> </el-table-column>
          <el-table-column prop="superior_score" label="复评分">
          </el-table-column>
          <el-table-column prop="culture" label="文化评分"> </el-table-column>
          <el-table-column prop="final" label="最终成绩"> </el-table-column>
          <el-table-column prop="score_tag" label="标签分布"> </el-table-column>
          <el-table-column prop="stage" label="状态">
            <template slot-scope="scope">
              <span class="grade-stage">{{ scope.row.stage }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="hrbp_name" label="操作">
            <template slot-scope="scope">
              <div class="grade-operation" @click="viewDetail(scope.row)">
                详情
              </div>
              <div class="grade-operation" @click="viewDetail(scope.row)">
                处理申述
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>
    <el-row type="flex" justify="end">
      <pagination
        @current-change="handleCurrentChange"
        :currentPage="page"
        :total="total"
      ></pagination>
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
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  props: {
    performanceId: {
      type: String,
      default: ""
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
      grade: "sub",
      page: 1,
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
    viewDetail(data) {
      console.log(row);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCurrentChange() {
      this.page = val;
    },
    getMyLowerList() {
      let data = {
        performance_id: parseInt(this.performanceId),
        page: this.page,
        name: this.filterForm.name,
        stage: this.filterForm.stage,
        score_tag: this.filterForm.score_tag
      };
      getMyIsolationUnderLower(data).then(res => {
        debugger;
        this.total = res.total;
        this.lowerList = res.data;
      });
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
<style lang="scss" scoped>
.lower-level {
  background-color: #fff;
  .filter-box {
    padding: 24px;
    .filter-title {
      color: #303133;
      .filter-number {
        margin-left: 6px;
        font-size: 14px;
        color: #909399;
      }
    }
    .screening-form {
      margin-top: 24px;
      .el-form-item {
        margin-bottom: 16px;
        .el-form-item__content {
          line-height: 32px;
        }
      }
    }
  }
}
</style>
