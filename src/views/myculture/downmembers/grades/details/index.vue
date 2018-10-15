<template>
    <div class="down-member-details-page">
        <nav-bar :list="nav"></nav-bar>
        <br>
        <section class="content-container" style="padding:40px">
            <basic-info :downMember="true"></basic-info>
            <br>
            <hr>
            <br>
            <rule-text :text="constants.MY_DOWN_MEMBER_RULE"></rule-text>
            <br>
            <br>
            <case-area :readOnly="true" v-model="value1"></case-area>
            <br>
            <case-area :readOnly="true" v-model="value1"></case-area>
            <br>
            <el-row class="mark-section" align="middle" type="flex">
                <el-col style="border-right: 1px solid #979797;">
                    <div class="mark-label">
                        上级评分数: <span class="score">15.5分</span>
                    </div>
                    <grade-items :items="gradeItems" v-model="selectGradeItem"></grade-items>
                    <br>
                    <br>
                    <div class="mark-label">
                        等级标签
                    </div>
                    <level-selector :disabled="true" v-model="level">
                        <el-button style="margin-left:20px" type="primary" round>修改</el-button>
                    </level-selector>
                    <br>
                </el-col>
                <br>
                <el-col style="padding-left:50px;">
                    <div class="mark-reason">
                        <div>
                            上级评理由:
                        </div>
                        <div>
                            由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由
                            理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由理由
                        </div>
                    </div>
                    <br>
                    <div>
                        员工自评分数: 15分, 创新: 5分
                    </div>
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
            <br>
            <case-area :readOnly="true" v-model="value1"></case-area>
            <br>
            <el-row type="flex" justify="end">
                <el-button type="primary">保存草稿</el-button>
                <el-button type="primary">提交</el-button>
            </el-row>
        </section>
    </div>
</template>
<script>
import {
  MY_DOWN_MEMBER,
  DOWN_MEMBERS_GRADE_LIST,
  MY_DOWN_MEMBER_RULE
} from "@/constants/TEXT";

import {
  PATH_DOWN_MEMEBER_CULTURE_GRADE,
  PATH_DOWN_MEMBER_CULTURE_LIST
} from "@/constants/URL";

export default {
  data() {
    return {
      value1: "hhaha",
      nav: [
        {
          label: DOWN_MEMBERS_GRADE_LIST,
          href: PATH_DOWN_MEMEBER_CULTURE_GRADE
        },
        {
          label: MY_DOWN_MEMBER,
          href: PATH_DOWN_MEMBER_CULTURE_LIST(this.$route.params.id)
        },
        {
          label: "隔级详情",
          active: true
        }
      ],
      level: "top",
      selectGradeItem: "",
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
        MY_DOWN_MEMBER_RULE
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
    "level-selector": () =>
      import("@/components/common/LevelSelector/index.vue")
  }
};
</script>
<style lang="scss" scoped>
.down-member-details-page {
  .mark-section {
    padding: 20px;
    background: white;
  }
  .mark-label {
    font-size: 24px;
    color: #4a4a4a;
    margin-bottom: 15px;
    .score {
      font-size: 36px;
    }
  }
  .mark-reason {
    font-size: 14px;
    color: #9b9b9b;
    line-height: 30px;
  }
}
</style>
