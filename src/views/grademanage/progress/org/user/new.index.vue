<template>
    <div class="culture-hr-details-page">
        <nav-bar :list="nav"></nav-bar>
        <section class="content-container" style="padding:40px">
            <basic-info :data="basicInfo"></basic-info>
            <br>
            <hr>
            <br>
            <div class="grade-name">{{evaluation_name}}</div>
            <br>
            <br>
            <el-row type="flex" justify="space-between" align="middle">
                <div>
                    <span class="label">总分</span>
                    <span class="total-score">
                        12.5分
                    </span>
                    <br>
                    <br>
                    <br>
                    <grade-items :items="scores"></grade-items>
                    <br>
                    <br>
                    <br>
                    <span class="label">等级标签</span>
                    <el-button style="margin-left:50px" class="selected selector">{{level}}</el-button>
                </div>
                <div>
                    <div v-if="has_history">
                        <el-button @click="goHistory" style="margin-bottom:30px" type="primary">修改记录</el-button>
                    </div>
                    <div v-if="isEditable">
                        <el-button style="margin-bottom:30px" @click="goModify" type="primary">修改评分</el-button>
                    </div>
                    <div v-if="isRejectOrComplian">
                        <el-button @click="goComplain" type="primary">申诉处理</el-button>
                    </div>
                </div>
            </el-row>
            <br>
            <br>
            <br>
            <br>
            <div>
                <span class="sub-title">
                    优势: &nbsp;
                </span>
                <span class="content">
                    {{advantage}}
                </span>
            </div>
            <br>
            <div>
                <span class="sub-title">
                    待提升: &nbsp;
                </span>
                <span class="content">
                    {{promotion}}
                </span>
            </div>
            <div>

            </div>
            <br>
            <hr>
            <br>
            <div class="detail-header" @click="detailHide =!detailHide">
                评分详情 <i :class="detailHide?'el-icon-caret-bottom':'el-icon-caret-top'"></i>
            </div>
            <br>
            <case-item v-show="!detailHide" :data="v" v-for="(v,i) in scores" :key="i"></case-item>
        </section>

    </div>
</template>
<script>
import {
  PATH_GRADE_MANAGE,
  PATH_GRADE_PROGRESS,
  PATH_GRADE_ORG_LIST,
  PATH_GRADE_EMP_DETAIL_CHANGE,
  PATH_GRADE_EMP_DETAIL_HISTORY
} from "@/constants/URL";

import {
  GRADE_PROGRESS,
  GRADE_MANAGE,
  ORG_DETAIL,
  GRADE_DETAIL,
  LEVEL_ALIAS
} from "@/constants/TEXT";
import { getUserGradeContent } from "@/constants/API";

export default {
  data() {
    return {
      status: 0,
      isManager: false,
      detailHide: true,
      advantage: "",
      promotion: "",
      has_history: 1,
      level: "",
      scores: [],
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_GRADE_MANAGE
        },
        {
          label: GRADE_PROGRESS,
          href: PATH_GRADE_PROGRESS(this.$route.params.id)
        },
        {
          label: ORG_DETAIL,
          href: PATH_GRADE_ORG_LIST(
            this.$route.params.id,
            this.$route.params.orgID
          )
        },
        {
          label: GRADE_DETAIL,
          active: true
        }
      ],
      basicInfo: {
        name: "",
        workcode: "",
        leaderLabel: "上级",
        superior_name: "",
        superior_workcode: "",
        hightlevelLabel: "隔级上级",
        highlevel_name: "",
        highlevel_workcode: ""
      },
      evaluation_name: ""
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "basic-info": () =>
      import("@/components/modules/myculture/basicinfo/index.vue"),
    "grade-items": () => import("@/components/common/GradeItem/index.vue"),
    "case-item": () =>
      import("@/components/modules/myculture/selfunconfirm/caseitem/index.vue")
  },
  methods: {
    goModify() {
      this.$router.push(
        PATH_GRADE_EMP_DETAIL_CHANGE(
          this.$route.params.id,
          this.$route.params.orgID,
          this.$route.params.uid
        )
      );
    },
    goComplain() {
      this.$router.push({
        path: PATH_GRADE_EMP_DETAIL_CHANGE(
          this.$route.params.id,
          this.$route.params.orgID,
          this.$route.params.uid
        ),
        query: {
          complain: 1
        }
      });
    },
    goHistory() {
      this.$router.push(
        PATH_GRADE_EMP_DETAIL_HISTORY(
          this.$route.params.id,
          this.$route.params.orgID,
          this.$route.params.uid
        )
      );
    },
    getInfo() {
      getUserGradeContent(this.$route.params.uid).then(res => {
        console.log(res);
        const {
          advantage,
          promotion,
          scores,
          has_history,
          _271_level,
          evaluation_name,
          name,
          workcode,
          superior_name,
          superior_workcode,
          highlevel_name,
          highlevel_workcode,
          evaluation_type
        } = res;
        this.promotion = promotion;
        this.advantage = advantage;
        this.has_history = has_history;
        this.scores = scores.map(s => {
          s.score = s.self_score;
          return s;
        });
        this.level = LEVEL_ALIAS[_271_level];
        this.evaluation_name = evaluation_name;
        this.basicInfo = {
          name,
          workcode,
          leaderLabel: "上级",
          superior_name,
          superior_workcode,
          hightlevelLabel: "隔级上级",
          highlevel_name,
          highlevel_workcode
        };
        this.isManager = evaluation_type == 2;
      });
    }
  },
  created() {
    this.getInfo();
  },
  computed: {
    isRejectOrComplian() {
      return this.status == 30 || this.status == 70;
    },
    isEditable() {
      return this.isManager && this.status >= 20 && this.status < 100;
    }
  }
};
</script>
<style lang="scss" scoped>
.culture-hr-details-page {
  .grade-name {
    font-size: 36px;
    color: #4a4a4a;
    font-weight: bold;
  }
  .label {
    font-size: 24px;
    color: #4bc8aa;
    font-weight: bold;
  }
  .total-score {
    font-size: 64px;
    color: #f18d23;
    line-height: 48px;
  }
  .selector {
    position: relative;
    width: 120px;
    height: 36px;
    padding: 8px 12px;
    background: transparent;
    &.selected,
    &:hover,
    &:focus {
      color: #f18d23;
      //   background: white;
      border: 1px solid #f18d23;
    }
    &.selected::after {
      position: absolute;
      content: "";
      width: 48px;
      height: 40px;
      z-index: 2;
      right: -5px;
      background-image: url("../../../../../assets/img/level_flag.png");
    }
  }
  .sub-title {
    font-size: 24px;
    color: #4bc8aa;
    line-height: 30px;
    font-weight: bold;
  }
  .content {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 30px;
  }
  .detail-header {
    font-size: 36px;
    color: #4bc8aa;
    text-align: center;
  }
  & /deep/ .GradeItem-page .el-button {
    background: transparent;
  }
}
</style>
