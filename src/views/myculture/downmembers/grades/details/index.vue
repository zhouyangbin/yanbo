<template>
  <div class="down-member-details-page">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container" style="padding:40px">
      <basic-info :data="basicInfo"></basic-info>
      <br>
      <hr>
      <br>
      <rule-text :text="constants.MY_DOWN_MEMBER_RULE"></rule-text>
      <br>
      <br>
      <div>
        <h3>{{constants.ADVANTAGE}}:</h3>
        <case-area :readOnly="true" v-model="advantage"></case-area>
      </div>
      <br>
      <div>
        <h3>{{constants.PROMOTION}}:</h3>
        <case-area :readOnly="true" v-model="promotion"></case-area>
      </div>
      <br>
      <div v-for="(v,i) of rejectReasons" :key="i">
        <reject-reason :data="v.reason"></reject-reason>
        <br>
      </div>
      <el-row class="mark-section" align="middle" type="flex">
        <el-col style="border-right: 1px solid #979797;">
          <div class="mark-label">
            {{constants.LEADER_SOCRE}}: <span class="score">{{total}}分</span>
          </div>
          <grade-items :items="scores" v-model="selectGradeItem"></grade-items>
          <br>
          <br>
          <div class="mark-label">
            等级标签
          </div>
          <level-selector :disabled="!levelEditable" v-model="level">
            <span v-if="!readOnly">
              <el-button v-if="!levelEditable" @click="levelEditable=true" style="margin-left:20px" type="primary" round>{{constants.LABEL_MODIFY}}</el-button>
              <el-button @click="levelChange" v-else style="margin-left:20px" type="primary" round>{{constants.CONFIRM}}</el-button>
            </span>
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
              {{leaderReason}}
            </div>
          </div>
          <br>
          <div>
            员工自评分数: {{selfTotal}}分, {{curItemName}}: {{selfScore}}分
          </div>
          <div v-for="(n,i) in selfCases" :key="i" class="mark-reason">
            <div>
              {{i+3}}分理由:
            </div>
            <div>
              {{n}}
            </div>
          </div>
        </el-col>
      </el-row>
      <br>
      <br>
      <div v-for="(item, index) in appealReason" :key="`${index}${item.time}`">
        <appeal-reaosn :data="item"></appeal-reaosn>
      </div>
      <br>
      <br>
      <el-row v-if="!readOnly && !isRejected" type="flex" justify="end">
        <el-popover @hide="rejectReason=''" placement="top" width="400" trigger="click">
          <case-area placeholder="请您填写驳回理由" v-model="rejectReason"></case-area>
          <br>
          <el-row type="flex" justify="center">
            <el-button @click="reject" type="primary">{{constants.SUBMIT}}</el-button>
          </el-row>
          <el-button slot="reference" type="primary">{{constants.REJECT}}</el-button>
        </el-popover>
        <el-button style="margin-left:20px;" @click="pass" type="primary">{{constants.CONFIRM}}</el-button>
      </el-row>
    </section>
  </div>
</template>
<script>
import {
  MY_DOWN_MEMBER,
  DOWN_MEMBERS_GRADE_LIST,
  MY_DOWN_MEMBER_RULE,
  LEVEL_ALIAS,
  LEVELMAP,
  LABEL_MODIFY,
  CONFIRM,
  SUBMIT,
  REJECT,
  LEADER_SOCRE,
  ADVANTAGE,
  PROMOTION,
  BREAK_STATUS
} from "@/constants/TEXT";

import {
  PATH_DOWN_MEMEBER_CULTURE_GRADE,
  PATH_DOWN_MEMBER_CULTURE_LIST
} from "@/constants/URL";

import {
  getMyDownMemberCultureDetails,
  postReject,
  setLvFromHighLv
} from "@/constants/API";

export default {
  data() {
    return {
      levelEditable: false,
      advantage: "",
      promotion: "",
      rejectReason: "",
      rejectReasons: [],
      levelNecessary: false,
      basicInfo: {},
      reject_reason: [],
      appealReason: [],
      audit_status: 0,
      scores: [
        {
          cases: []
        }
      ],
      total: "",
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
      level: "",
      readOnly: false,
      selectGradeItem: 0,
      gradeItems: [],
      constants: {
        MY_DOWN_MEMBER_RULE,
        LABEL_MODIFY,
        CONFIRM,
        SUBMIT,
        REJECT,
        LEADER_SOCRE,
        ADVANTAGE,
        PROMOTION
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
      import("@/components/common/LevelSelector/index.vue"),
    "appeal-reaosn": () =>
      import("@/components/modules/myculture/appealreason/index.vue"),
    "reject-reason": () =>
      import("@/components/modules/myculture/rejectreason/index.vue")
  },
  methods: {
    getDetailInfo() {
      getMyDownMemberCultureDetails(this.$route.params.uid).then(res => {
        // console.log(res)
        const {
          advantage,
          promotion,
          superior_name,
          superior_workcode,
          employee_workcode,
          employee_name,
          end_time,
          scores,
          _271_level,
          total_score,
          audit_status,
          _271_is_necessary,
          stage,
          appeal_record,
          reject_record,
          break_status
        } = res;
        this.advantage = advantage;
        this.promotion = promotion;
        this.levelNecessary = !!_271_is_necessary;
        this.appealReason = appeal_record || [];
        this.rejectReasons = reject_record || [];

        this.basicInfo = {
          name: employee_name,
          superior_workcode,
          breakStatus: BREAK_STATUS[break_status],
          workcode: employee_workcode,
          leaderLabel: "他的上级",
          superior_name,
          finishedTime: `隔级评截止时间: ${end_time}`
        };
        this.scores = scores.map(s => {
          s.score = s.superior_score;
          delete s.superior_score;
          return s;
        });
        this.total = total_score;
        this.audit_status = audit_status;
        this.level = LEVEL_ALIAS[_271_level].toLowerCase();
        this.readOnly = res.can_submit == 0;
      });
    },
    levelChange() {
      if (this.levelNecessary && !this.level) {
        this.$message({
          message: "请选择等级!",
          type: "warning"
        });
        return;
      }
      setLvFromHighLv({
        id: this.$route.params.uid,
        level: LEVELMAP[this.level]
      })
        .then(res => {
          this.$message({
            message: "等级设置成功!",
            type: "success"
          });
          this.levelEditable = false;
        })
        .catch(e => {});
    },
    pass() {
      this.$confirm("确认通过此评分么, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.reqPass();
        })
        .catch(() => {});
    },
    reject() {
      if (!this.rejectReason.trim()) {
        this.$message({
          message: "请填写理由!",
          type: "warning"
        });
        return;
      }
      postReject({
        ids: [this.$route.params.uid],
        type: 1,
        reason: this.rejectReason
      })
        .then(res => {
          this.$message({
            message: "操作成功!",
            type: "success"
          });
          this.getDetailInfo();
        })
        .catch(e => {});
    },
    reqPass() {
      postReject({
        ids: [this.$route.params.uid],
        type: 2
      })
        .then(res => {
          this.$message({
            message: "操作成功!",
            type: "success"
          });
          this.getDetailInfo();
        })
        .catch(e => {});
    }
  },
  created() {
    this.getDetailInfo();
  },
  computed: {
    leaderReason() {
      return this.scores[this.selectGradeItem].superior_case;
    },
    selfCases() {
      return this.scores[this.selectGradeItem].self_cases;
    },
    selfScore() {
      return this.scores[this.selectGradeItem].self_score;
    },
    curItemName() {
      return this.scores[this.selectGradeItem].question_name;
    },
    isRejected() {
      return this.audit_status == 1;
    },
    isPassed() {
      return this.audit_status == 2;
    },
    isUnTouched() {
      return this.audit_status == 0;
    },
    selfTotal() {
      return this.scores
        .map(s => (s.self_score ? parseFloat(s.self_score) : 0))
        .reduce((pre, cur) => pre + cur, 0);
    }
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
