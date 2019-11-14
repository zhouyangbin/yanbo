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
          class="demo-form-inline"
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
import { postMyUnderLower, getAdminTagTypes } from "@/constants/API";
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
      tagOptions: []
    };
  },
  methods: {
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
      postMyUnderLower(data).then(res => {
        this.lowerList = res;
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
<style lang="scss" scoped></style>
