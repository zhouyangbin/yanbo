
<template>
  <div class="self-report-component">
    <div class="title">
      {{name}}
    </div>
    <hr>
    <br>
    <div>
      <span class="sub-title">
        {{constants.ADVANTAGE}}: &nbsp;
      </span>
      <span class="content">
        {{advantage}}
      </span>
    </div>
    <br>
    <div>
      <span class="sub-title">
        {{constants.PROMOTION}}: &nbsp;
      </span>
      <span class="content">
        {{promotion}}
      </span>
    </div>
    <br>
    <case-item :data="v" v-for="(v,i) in scores" :key="i"></case-item>
    <el-row v-if="canSubmit" type="flex" justify="end">
      <el-popover @hide="reason=''" placement="top" trigger="click">
        <el-input type="textarea" :rows="2" placeholder="请输入申诉理由" v-model="reason">
        </el-input>
        <br>
        <br>
        <el-button style="margin-left:50%;transform:translateX(-50%)" @click="complain" type="primary">{{constants.CONFIRM}}</el-button>
        <el-button style="margin-right:20px" slot="reference" type="primary">{{constants.APPEAL}}</el-button>
      </el-popover>
      <el-button @click="confirm" type="primary">{{constants.CONFIRM}}</el-button>
    </el-row>
    <impression-dialog v-if="showImpressionDialog" :visible.sync="showImpressionDialog"></impression-dialog>
  </div>
</template>
<script>
import { getMyCultureUnConfirmedDetail, postConfirm } from "@/constants/API";
import {
  ADVANTAGE,
  PROMOTION,
  CONFIRM,
  APPEAL,
  CONST_OPERATIONS_SUCCESS,
  CANCEL
} from "@/constants/TEXT";

export default {
  props: {
    stage: {
      type: Number
    }
  },
  data() {
    return {
      showImpressionDialog: false,
      reason: "",
      name: "",
      advantage: "",
      promotion: "",
      canSubmit: false,
      scores: [],
      isManager: false,
      constants: {
        ADVANTAGE,
        PROMOTION,
        CONFIRM,
        APPEAL
      }
    };
  },
  components: {
    "case-item": () => import("./caseitem/index.vue"),
    "impression-dialog": () => import("../impressiondialog/index.vue")
  },
  methods: {
    complain() {
      if (!this.reason) {
        this.$message({
          message: "请填写申诉理由",
          type: "warning"
        });
        return;
      }
      const postData = {
        evaluation_name_id: this.$route.params.id,
        action: 1,
        reason: this.reason
      };
      postConfirm(postData).then(res => {
        this.$message({
          message: CONST_OPERATIONS_SUCCESS,
          type: "success"
        });
        this.$parent.getStatus();
      });
    },
    confirm() {
      if (this.isManager) {
        this.showImpressionDialog = true;
      } else {
        this.$confirm("是否确认提交, 是否继续?", "提示", {
          confirmButtonText: CONFIRM,
          cancelButtonText: CANCEL,
          type: "warning"
        })
          .then(() => {
            const postData = {
              evaluation_name_id: this.$route.params.id,
              action: 2
            };
            postConfirm(postData).then(res => {
              this.$message({
                message: CONST_OPERATIONS_SUCCESS,
                type: "success"
              });
              this.$parent.getStatus();
            });
          })
          .catch(() => {});
      }
    },
    getInfo() {
      getMyCultureUnConfirmedDetail(this.$route.params.id).then(res => {
        const {
          employee_name,
          employee_workcode,
          highlevel_name,
          highlevel_workcode,
          superior_name,
          superior_workcode,
          advantage,
          promotion,
          scores,
          name,
          end_time,
          evaluation_type,
          can_submit
        } = res;
        this.promotion = promotion;
        this.advantage = advantage;
        this.scores = scores;
        this.canSubmit = can_submit == 1;
        this.name = name;
        this.isManager = evaluation_type == 2;
        this.$parent.basicInfo = {
          name: employee_name,
          workcode: employee_workcode,
          leaderLabel: "我的上级",
          superior_name: superior_name,
          superior_workcode: superior_workcode,
          highlevel_name,
          highlevel_workcode,
          finishedTime: `待确认截止时间 :${end_time}`
        };
      });
    }
  },
  created() {
    this.getInfo();
  }
};
</script>
<style lang='scss' scoped>
.self-report-component {
  .title {
    font-size: 36px;
    font-weight: bold;
    color: #4a4a4a;
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
}
</style>
