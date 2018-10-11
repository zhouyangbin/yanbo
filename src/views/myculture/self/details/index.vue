
<template>
  <div class="self-details-page">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container">
      <basic-info></basic-info>
      <br>
      <hr>
      <br>
      <rule-text :text="constants.MY_RULE"></rule-text>
      <br>
      <section class="mark">
        <el-row align="middle" type="flex">
          <el-col style="padding:20px;border-right: 1px solid #979797;">
            <div class="mark-label">
              请选择评分项目
            </div>
            <grade-items :items="gradeItems" v-model="selectGradeItem"></grade-items>
            <br>
            <br>
            <div class="mark-label">
              请评分
            </div>
            <grade-slider v-model="grade"></grade-slider>
          </el-col>
          <el-col style="padding-left:50px;">
            <div class="mark-score">
              5分
            </div>
            <div class="mark-desc">
              在工作汇总有签好字那一世
            </div>
          </el-col>
        </el-row>
      </section>
      <br>
      <case-area v-model="case1"></case-area>
      <br>

      <el-row type="flex" justify="end">
        <el-button type="primary">保存草稿</el-button>
        <el-button type="primary">提交</el-button>
      </el-row>
    </section>
  </div>
</template>
<script>
import { MY_GRADE, GRADE_DETAIL, MY_RULE } from "@/constants/TEXT";
import { PATH_MY_CULTURE_GRADE } from "@/constants/URL";

export default {
  data() {
    return {
      constants: {
        MY_RULE
      },
      nav: [
        {
          label: MY_GRADE,
          href: PATH_MY_CULTURE_GRADE
        },
        {
          label: GRADE_DETAIL,
          active: true
        }
      ],
      selectGradeItem: "",
      grade: "",
      case1: "",
      gradeItems: [
        {
          text: "成就客户",
          total: 12
        },
        {
          text: "务实",
          total: 12
        },
        {
          text: "创新",
          total: 12
        },
        {
          text: "合作",
          total: 12
        }
      ]
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "basic-info": () =>
      import("@/components/modules/myculture/basicinfo/index.vue"),
    "rule-text": () =>
      import("@/components/modules/myculture/ruletext/index.vue"),
    "grade-items": () => import("@/components/common/GradeItem/index.vue"),
    "grade-slider": () => import("@/components/common/GradeSlider/index.vue"),
    "case-area": () => import("@/components/common/CaseArea/index.vue")
  }
};
</script>
<style lang="scss" scoped>
.self-details-page {
  &.content-container {
    padding: 20px;
  }
  & .mark {
    padding: 20px;
    background: white;
  }
  & .mark-label {
    font-size: 24px;
    color: #4a4a4a;
    margin-bottom: 15px;
  }
  & .mark-score {
    font-size: 64px;
    color: #f18d23;
    line-height: 48px;
    margin-bottom: 30px;
  }
  & .mark-desc {
    font-size: 16px;
    color: #f18d23;
  }
}
</style>
