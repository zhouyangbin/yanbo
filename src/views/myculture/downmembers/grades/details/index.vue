<template>
  <div class="down-member-details-page">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <section class="content-container" style="padding:40px">
      <basic-info :data="basicInfo"></basic-info>
      <br />
      <hr />
      <br />
      <el-row type="flex" justify="space-between">
        <rule-text :text="constants.MY_DOWN_MEMBER_RULE"></rule-text>
        <el-button
          v-if="has_history"
          @click="goHistory"
          style="align-self:flex-start"
          type="primary"
          >{{ constants.CHANGE_RECORDS }}</el-button
        >
      </el-row>
      <br />
      <div class="feeback-container" v-if="feedback_feeling">
        <div>
          <span class="label">{{ constants.IMPRESSIONS }}:</span>
          <span class="content">{{ feedback_feeling.content }}</span>
          <span class="time">{{ feedback_feeling.time }}</span>
        </div>
      </div>
      <br />
      <div>
        <h3>{{ constants.ADVANTAGE }}:</h3>
        <case-area :readOnly="true" v-model="advantage"></case-area>
      </div>
      <br />
      <div>
        <h3>{{ constants.PROMOTION }}:</h3>
        <case-area :readOnly="true" v-model="promotion"></case-area>
      </div>
      <br />
      <div v-for="(v, i) of rejectReasons" :key="i">
        <reject-reason :data="v.reason"></reject-reason>
        <br />
      </div>
      <el-row class="mark-section" align="middle" type="flex">
        <el-col style="border-right: 1px solid #979797;">
          <div class="mark-label">
            {{ constants.LEADER_SOCRE }}:
            <span class="score">{{ total }}分</span>
          </div>
          <grade-items :items="scores" v-model="selectGradeItem"></grade-items>
          <br />
          <br />
          <div class="mark-label">等级标签</div>
          <level-selector :disabled="!levelEditable" v-model="level">
            <span v-if="!readOnly">
              <el-button
                v-if="!levelEditable"
                @click="levelEditable = true"
                style="margin-left:20px"
                type="primary"
                round
                >{{ constants.LABEL_MODIFY }}</el-button
              >
              <el-button
                @click="levelChange"
                v-else
                style="margin-left:20px"
                type="primary"
                round
                >{{ constants.CONFIRM }}</el-button
              >
            </span>
          </level-selector>
          <br />
        </el-col>
        <br />
        <el-col style="padding-left:50px;">
          <div class="mark-reason">
            <div>上级评理由:</div>
            <div>{{ leaderReason }}</div>
          </div>
          <br />
          <div>
            员工自评分数: {{ selfTotal }}分, {{ curItemName }}:
            {{ selfScore }}分
          </div>
          <div class="mark-reason">
            <div v-for="(n, i) in selfCases" :key="i">
              <div>{{ i + 3 }}分理由:</div>
              <div
                :inner-html.prop="n | linebreak | placeholder('无')"
                class="reason"
              ></div>
            </div>
          </div>
        </el-col>
      </el-row>
      <br />
      <br />
      <div v-for="(item, index) in appealReason" :key="`${index}${item.time}`">
        <appeal-reaosn :data="item"></appeal-reaosn>
      </div>
      <br />
      <br />
      <el-row v-if="!readOnly && !isRejected" type="flex" justify="end">
        <el-button @click="showRejectDialog = true" type="primary">{{
          constants.REJECT
        }}</el-button>
        <el-button style="margin-left:20px;" @click="pass" type="primary">{{
          constants.CONFIRM
        }}</el-button>
      </el-row>
    </section>
    <reject-dialog
      :callback="afterReject"
      v-if="showRejectDialog"
      :visible.sync="showRejectDialog"
    ></reject-dialog>
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
  BREAK_STATUS,
  CHANGE_RECORDS,
  IMPRESSIONS
} from "@/constants/TEXT";

import {
  PATH_DOWN_MEMEBER_CULTURE_GRADE,
  PATH_DOWN_MEMBER_CULTURE_LIST,
  PATH_DOWN_MEMBER_CULTURE_DETAILS_HISTORY
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
      showRejectDialog: false,
      advantage: "",
      promotion: "",
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
      feedback_feeling: null,
      has_history: false,
      gradeItems: [],
      constants: {
        MY_DOWN_MEMBER_RULE,
        LABEL_MODIFY,
        CONFIRM,
        SUBMIT,
        REJECT,
        LEADER_SOCRE,
        ADVANTAGE,
        PROMOTION,
        CHANGE_RECORDS,
        IMPRESSIONS
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
      import("@/components/modules/myculture/rejectreason/index.vue"),
    "reject-dialog": () =>
      import("@/components/modules/myculture/rejectDialog/index.vue")
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
          break_status,
          highlevel_start_time,
          has_history,
          feedback_feeling
        } = res;
        this.advantage = advantage;
        this.promotion = promotion;
        this.levelNecessary = !!_271_is_necessary;
        this.appealReason = appeal_record || [];
        this.rejectReasons = reject_record || [];
        let breakStatus;
        this.has_history = has_history == 1;
        this.feedback_feeling = feedback_feeling;
        if (break_status == 0) {
          breakStatus =
            new Date() <= new Date(highlevel_start_time) ? "未开始" : "";
        } else {
          breakStatus = BREAK_STATUS[break_status];
        }
        this.basicInfo = {
          name: employee_name,
          superior_workcode,
          breakStatus,
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
    afterReject() {
      this.$router.push(PATH_DOWN_MEMBER_CULTURE_LIST(this.$route.params.id));
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
          this.getDetailInfo();
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
          // this.reqPass();
          this.$router.replace(
            PATH_DOWN_MEMBER_CULTURE_LIST(this.$route.params.id)
          );
        })
        .catch(() => {});
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
          this.afterReject();
        })
        .catch(e => {});
    },
    goHistory() {
      this.$router.push(
        PATH_DOWN_MEMBER_CULTURE_DETAILS_HISTORY(
          this.$route.params.id,
          this.$route.params.uid
        )
      );
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
    max-height: 150px !important;
    overflow: auto;
  }
  .feeback-container {
    padding: 20px;
    background: white;
    position: relative;
    & > div {
      position: relative;
    }
    & .label {
      font-size: 24px;
      color: #f18d23;
      line-height: 30px;
    }
    & .content {
      font-size: 14px;
      color: #000000;
    }
    & .time {
      position: absolute;
      right: 0;
    }
  }
}
</style>
