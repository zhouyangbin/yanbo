<template>
  <div class="user-detail-page">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="basic-info">
        <span class="label">{{ constants.BASIC_INFO }}:</span>
        <span>
          <!-- <span class="greycolor">上级工号</span> / 00002 &nbsp;&nbsp; -->
          <span class="greycolor">{{ constants.LEADER_NAME }}</span>
          / {{ basicInfo.leaderName }} </span
        >&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span>
      </div>
      <br />
      <card
        :maxlength="1000"
        :readOnly="true"
        class="card"
        :index="i"
        :data="v"
        v-for="(v, i) of targets"
        :key="i"
      ></card>
      <br />
      <div v-if="myAdditionMark.evaluation">
        <addition-mark
          :prefixTitle="constants.LABEL_SELF"
          :readOnly="true"
          :desc.sync="myAdditionMark.evaluation"
          :mark.sync="myAdditionMark.score"
        ></addition-mark>
        <br />
      </div>
      <div v-if="leaderAdditionMark.evaluation">
        <addition-mark
          :prefixTitle="constants.LABEL_SUP"
          :readOnly="true"
          :desc.sync="leaderAdditionMark.evaluation"
          :mark.sync="leaderAdditionMark.score"
        ></addition-mark>
        <br />
      </div>
      <div v-if="comments">
        <comments :readOnly="true" :comments.sync="comments"></comments>
        <br />
      </div>
      <div v-if="processor.length > 1" class="summary-section">
        <div class="inner-container">
          <span class="label">进度:</span>
          <el-steps :style="{width:(processor.length * 12)+'%'}" :active="processor.length">
            <el-step v-for="(v, i) of processor" :key="i">
              <div slot="icon">{{ v.name }}</div>
              <div slot="title">{{ v.time }}</div>
            </el-step>
          </el-steps>
        </div>
        <div v-if="appeal_length">
          <div style=" width: 100%; word-break: break-all;display: flex;" v-for="(item,index) in apple_reasons" :key="index">
              <span class="label" style=" line-height: 20px;padding-right: 0;">第{{index+1}}次申诉理由：</span>
              <span  style=" line-height: 20px; padding-left: 0; ">{{item}} </span><br/>             
          </div>
        </div>
        <div v-if="total" class="inner-container">
          <span class="label">评分结果 : </span>
          <span  style=" line-height: 20px; padding-left: 0; color: #000;">{{ total }}</span>
        </div>
        <div v-if="total" class="inner-container">
          <span class="label">标签 : </span>
          <span  style=" line-height: 20px; padding-left: 0; color: #000;">{{ label_name }}</span>
        </div>
        <div class="inner-container">
          <span class="label"></span>
          <el-steps style="width:60%" :active="Object.keys(scores).length">
            <el-step v-for="(value, key, index) in scores" :key="index">
              <div slot="icon">{{ value.name }}</div>
              <div slot="title" v-if=" key == 'self' ">
                {{ value.score }}分
              </div>
              <div slot="title" v-if=" key == 'superior' ">
                <span>总分: {{ value.total_score }}分 </span>
                <span>等级: {{ value.score_level }} </span>
                <span>标签: {{ value.label_name }} </span>
              </div>
              <div slot="title" v-if=" key == 'bp_first' ">
                <span>等级: {{ value.score_level }} </span>
                <span>标签: {{ value.label_name }} </span>
              </div>
              <div slot="title" v-if=" key == 'bp_last' ">
                <span>等级: {{ value.score_level }} </span>
                <span>标签: {{ value.label_name }} </span>
              </div>
            </el-step>
          </el-steps>
        </div>
      </div>
      <br />
      <br />
      <el-row type="flex" justify="center">
        <el-button v-if="appeal_length && stage != 60" @click="changeMarks" class="btn-reset">
          {{ constants.LABEL_MODIFY }}
        </el-button>
        <el-button  v-if="appeal_length && stage != 60" @click="submit" type="primary">
          {{appeal_length == 1 ? "维持原成绩" : null}}
          {{appeal_length == 2 ? "确认成绩" : null}}
        </el-button>
      </el-row>
    </section>
    <change-mark
      @close="afterChangeGrade"
      v-if="showChangeMarkDia"
      :label_id="label_id"
      :mark="total"
      :visible.sync="showChangeMarkDia"
    ></change-mark>
  </div>
</template>
<script>
import {
  EMPLOYEE_DETAIL,
  LABEL_MODIFY,
  LEADER_NAME,
  LABEL_SELF,
  LABEL_SUP,
  CONFIRM,
  CANCEL,
  APPEAL,
  ATTENTION,
  GRADE_MANAGE,
  GRADE_PROGRESS,
  ORG_DETAIL,
  BASIC_INFO
} from "@/constants/TEXT";
import {
  getPerformanceUserDetail,
  changePerformanceGrade
} from "@/constants/API";
import {
  PATH_PERFORMANCE_MANAGER,
  PATH_PERFORMANCE_PROGRESS,
  PATH_PERFORMANCE_ORG_LIST
} from "@/constants/URL";

export default {
  data() {
    return {
      basicInfo: {},
      total: "",
      targets: [],
      myAdditionMark: {},
      leaderAdditionMark: {},
      comments: "",
      apple_reasons: [],
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_PERFORMANCE_MANAGER
        },
        {
          label: GRADE_PROGRESS,
          href: PATH_PERFORMANCE_PROGRESS(this.$route.params.id)
        },
        {
          label: ORG_DETAIL,
          href: PATH_PERFORMANCE_ORG_LIST(
            this.$route.params.id,
            this.$route.params.orgID
          )
        },
        {
          label: EMPLOYEE_DETAIL,
          active: true
        }
      ],
      resultArr: [],
      scores:{},
      progressArr: [],
      processor:[],
      canEdit: false,
      showChangeMarkDia: false,
      constants: {
        LABEL_MODIFY,
        LEADER_NAME,
        LABEL_SELF,
        LABEL_SUP,
        BASIC_INFO
      },
      label_id: "",
      label_name: "",
      appeal_length:0,
      stage:0,
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    // pagination: () => import("@/components/common/Pagination/index.vue"),
    card: () => import("@/components/modules/employee/gradeCard/index.vue"),
    "addition-mark": () =>
      import("@/components/modules/employee/additionalMark/index.vue"),
    "change-mark": () =>
      import("@/components/modules/performance/ChangeGrade/index.vue"),
    comments: () =>
      import("@/components/modules/employee/leaderComments/index.vue")
  },
  methods: {
    changeMarks() {
      this.showChangeMarkDia = true;
    },
    afterChangeGrade() {
      this.getInfo();
    },
    submit() {
      let submit_text= "<p style='height:100px;line-height: 100px;text-align:center'>";
      if(this.appeal_length ==1){
        submit_text+="提交后将由员工再次确认成绩,是否继续?</p>";
      }
      if(this.appeal_length ==2){
        submit_text+="请确认无误再提交，一经提交无法修改, 是否继续?</p>";
      }
      this.$confirm(
        submit_text,
        ATTENTION,
        {
          confirmButtonText: CONFIRM,
          cancelButtonText: CANCEL,
          dangerouslyUseHTMLString: true
        }
      )
        .then(() => {
          const postData = {
            action: this.appeal_length,//申诉数组长度为1  action = 1 确认提交。 申诉数组长度为2 action = 2 维持原成绩
          };
          changePerformanceGrade(
            this.$route.params.orgID,
            this.$route.params.uid,
            postData
          ).then(res => {
              this.getInfo();
            })
            .catch(e => {});
        })
        .catch(() => {});
    },
    composeResultArr(self_score, superior_score, appeal) {
      this.resultArr = [];
      if (self_score && self_score.score != null) {
        this.resultArr.push({
          text: LABEL_SELF,
          value: self_score.score
        });
      }
      if (superior_score && superior_score.score_level) {
        this.resultArr.push({
          text: LABEL_SUP,
          value: superior_score.score_level
        });
      }
      if (appeal && appeal.hr_score_level) {
        this.resultArr.push({
          text: appeal.action == 1 ? "BP确认" : "BP修改",
          value: appeal.hr_score_level
        });
      }
    },
    composeProgressArr(
      target_time,
      self_time,
      superior_time,
      appeal_time,
      confirm_end_time
    ) {
      this.progressArr = [];
      if (target_time) {
        this.progressArr.push({
          text: "目标导入",
          value: target_time
        });
      }

      if (self_time) {
        this.progressArr.push({
          text: LABEL_SELF,
          value: self_time
        });
      }

      if (superior_time) {
        this.progressArr.push({
          text: LABEL_SUP,
          value: superior_time
        });
      }
      if (appeal_time) {
        this.progressArr.push({
          text: APPEAL,
          value: appeal_time
        });
      }
      if (confirm_end_time) {
        this.progressArr.push({
          text: "结束",
          value: confirm_end_time
        });
      }
    },
    getInfo() {
      return getPerformanceUserDetail(
        this.$route.params.orgID,
        this.$route.params.uid
      )
        .then(res => {
          // console.log(res)
          const {
            superior_name,
            targets,
            self_attach_score,
            superior_attach_score,
            superior_score,
            apple_reasons,
            self_score,
            target_time,
            self_time,
            superior_time,
            end_time,
            confirm_end_time,
            can_edit,
            score_level,
            label_id,
            label_name,
            processor,
            scores,
            stage
          } = res;
          this.basicInfo = {
            leaderName: superior_name
          };

          this.total = scores.superior.score_level;
          this.comments = superior_score && superior_score.evaluation;
          this.processor = processor;
          this.scores =scores;
          // this.composeResultArr(self_score, superior_score, appeal);
          // this.composeProgressArr(
          //   target_time,
          //   self_time,
          //   superior_time,
          //   appeal_time,
          //   confirm_end_time
          // );
          this.targets = targets;
          this.myAdditionMark = self_attach_score || {};
          this.leaderAdditionMark = superior_attach_score || {};
          this.apple_reasons = apple_reasons || [];
          this.appeal_length = apple_reasons.length;
          this.canEdit = can_edit == 1;
          this.label_id = scores.superior.label_id;
          this.label_name = scores.superior.label_name;
          this.stage = stage;
        })
        .catch(e => {
          // console.log(e)
        });
    }
  },
  created() {
    this.getInfo();
  }
};
</script>
<style scoped>
.user-detail-page .card {
  margin-bottom: 20px;
}
.user-detail-page .basic-info {
  background: white;
  padding: 20px;
}
.user-detail-page .summary-section {
  background: white;
  padding: 20px 20px 20px 0;
}
.user-detail-page .summary-section >>> .el-step__icon.is-text {
  border: none;
}
.user-detail-page .summary-section >>> .el-step__icon {
  width: auto;
}
.user-detail-page .label {
  margin-right: 20px;
  color: #778294;
  width: 116px;
  min-width: 116px;
  height: 26px;
  box-sizing: border-box;
  line-height: 26px;
  padding: 0 10px;
}
.user-detail-page .label.title {
  background-color: #52ddab;
  color: white;
  border-radius: 0 13px 13px 0;
}
.user-detail-page .tip {
  color: #ea7754;
}
.user-detail-page .greycolor {
  color: #778294;
}

.user-detail-page .inner-container {
  display: flex;
  color: grey;
}
</style>
