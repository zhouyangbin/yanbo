
<template>
  <div class="member-grade-details">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container">
      <basic-info :forMember="true"></basic-info>
      <br>
      <hr>
      <br>
      <rule-text :text="constants.MY_MEMBER_RULE"></rule-text>
      <br>
      <br>
      <case-area v-model="case1"></case-area>
      <br>
      <case-area v-model="case1"></case-area>
      <br>
      <section class="mark">
        <el-row align="middle" type="flex">
          <el-col style="padding:20px;border-right: 1px solid #979797;">
            <div class="mark-label">
              自评分数
            </div>
            <grade-items :items="gradeItems" v-model="selectGradeItem"></grade-items>

          </el-col>
          <el-col style="padding-left:50px;">
            <div v-for="n in 3" :key="n" class="mark-reason">
              <div>
                3分理由:
              </div>
              <div>
                3分理由 3分理由 3分理由 3分理由
              </div>
            </div>
          </el-col>
        </el-row>
      </section>
      <br>
      <el-row class="mark">
        <el-col :span="12">
          <div class="mark-label">
            为甄凯欣的成就客户项目评分
          </div>
          <br>
          <grade-slider v-model="grade"></grade-slider>
        </el-col>
        <el-col :span="6">
          xxxx
        </el-col>
      </el-row>
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
  PATH_MEMBER_CULTURE_LIST
} from "@/constants/URL";

export default {
  data() {
    return {
      case1: "",
      nav: [
        {
          label: MEMBERS_GRADE_LIST,
          href: PATH_MEMEBER_CULTURE_GRADE
        },
        {
          label: MY_MEMBERS,
          href: PATH_MEMBER_CULTURE_LIST(this.$route.params.id)
        },
        {
          label: "下级详情",
          active: true
        }
      ],
      grade: "",
      selectGradeItem: 0,
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
      ],
      constants: {
        MY_MEMBER_RULE
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "basic-info": () =>
      import("@/components/modules/myculture/basicinfo/index.vue"),
    "rule-text": () =>
      import("@/components/modules/myculture/ruletext/index.vue"),
    "case-area": () => import("@/components/common/CaseArea/index.vue"),
    "grade-items": () => import("@/components/common/GradeItem/index.vue"),
    "grade-slider": () => import("@/components/common/GradeSlider/index.vue")
  }
};
</script>
<style lang="scss" scoped>
.member-grade-details {
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

  & .mark-reason {
    font-size: 14px;
    color: #9b9b9b;
    line-height: 30px;
  }
}
</style>
