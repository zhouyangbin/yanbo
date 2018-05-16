<template>
  <el-dialog @close="close" width="770px" :visible="dialogTimes" class="dialogTimes">
    <el-form label-width="120px" :rules="timesRules" ref="timesForm" :model="timesForm" class="timesForm">
      <el-form-item :label="constants.SELF_EVALUATION_TIME" required>
        <el-row type="flex">
          <el-col :span="8">
            <el-form-item prop="self_start">
              <el-date-picker :disabled="self_start_disable" type="datetime" :clearable="false" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" v-model="timesForm.self_start" placeholder="开始日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2"> - </el-col>
          <el-col :span="8">
            <el-form-item prop="self_end">
              <el-date-picker :disabled="self_end_disable" type="datetime" :clearable="false" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" v-model="timesForm.self_end" placeholder="结束日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item :label="constants.LEADER_EVALUATION_TIME" required>
        <el-row type="flex">
          <el-col :span="8">
            <el-form-item prop="leader_start">
              <el-date-picker :disabled="leader_start_disable" type="datetime" :clearable="false" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" v-model="timesForm.leader_start" placeholder="开始日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2"> - </el-col>
          <el-col :span="8">
            <el-form-item prop="leader_end">
              <el-date-picker :disabled="leader_end_disable" type="datetime" :clearable="false" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" v-model="timesForm.leader_end" placeholder="结束日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="" prop="levelRequired">
        <el-checkbox :disabled="leader_start_disable" :true-label="1" :false-label="0" v-model="timesForm.levelRequired">{{constants.REQUIRE_271}}</el-checkbox>
      </el-form-item>
      <el-form-item :label="constants.LEADER_PLUS_EVALUATION_TIME" required>
        <el-row type="flex">
          <el-col :span="8">
            <el-form-item prop="upLeader_start">
              <el-date-picker :disabled="upLeader_start_disable" type="datetime" :clearable="false" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" v-model="timesForm.upLeader_start" placeholder="开始日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2"> - </el-col>
          <el-col :span="8">
            <el-form-item prop="upLeader_end">
              <el-date-picker :disabled="upLeader_end_disable" type="datetime" :clearable="false" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" v-model="timesForm.upLeader_end" placeholder="结束日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item :label="constants.FACE_EVALUATION_TIME">
        <el-row type="flex">
          <el-col :span="8">
            <el-form-item prop="face_start">
              <el-date-picker :disabled="face_start_disable" type="datetime" :clearable="false" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" v-model="timesForm.face_start" placeholder="开始日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2"> - </el-col>
          <el-col :span="8">
            <el-form-item prop="face_end">
              <el-date-picker :disabled="face_end_disable" type="datetime" :clearable="false" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" v-model="timesForm.face_end" placeholder="结束日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" type="primary" @click="timeSet">{{constants.CONFIRM}}</el-button>
        <el-button round size="medium" @click="close" class="btn-reset">{{constants.CANCEL}}</el-button>
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import {
  SELF_EVALUATION_TIME,
  LEADER_EVALUATION_TIME,
  REQUIRE_271,
  LEADER_PLUS_EVALUATION_TIME,
  FACE_EVALUATION_TIME,
  SELF_TIME_REQUIRE_MSG,
  LEADER_TIME_VALIDATE_MSG,
  UP_LEADER_TIME_VALIDATE_MSG,
  FACE_TIME_VALIDATE_MSG,
  LEADER_TIME_REQUIRE_MSG,
  FACE_TIME_REQUIRE_MSG,
  UP_LEADER_TIME_REQUIRE_MSG,
  CONFIRM,
  CANCEL,
  START_TIME,
  END_TIME,
  SELF_START_TIME_VALIDATE_MSG,
  START_END_VALIDATE_MSG,
  FACE_TIME_OVER_GRADE_MSG
} from "@/constants/TEXT";
import { formatTime } from "@/utils/timeFormat";
import { postTimeSettings } from "@/constants/API";
export default {
  props: {
    dialogTimes: {
      type: Boolean,
      default: false
    },
    status: {
      type: Object,
      default: () => ({
        self_status: 0,
        superior_status: 0,
        highlevel_status: 0,
        feedback_status: 0
      })
    },
    timeData: {
      type: Object,
      default: () => ({
        self_start_time: "",
        self_end_time: "",
        superior_start_time: "",
        superior_end_time: "",
        highlevel_start_time: "",
        highlevel_end_time: "",
        feedback_start_time: "",
        feedback_end_time: "",
        checked_271: 0
      })
    }
  },
  data() {
    //
    const selfStartTimeValidator = (rule, value, callback) => {
      if (value <= formatTime(new Date()) && !this.self_start_disable) {
        callback(new Error(SELF_START_TIME_VALIDATE_MSG));
      } else {
        // else if (
        //   this.timesForm.self_end &&
        //   this.timesForm.self_start <= value
        // ) {
        //   this.$refs.timesForm.validateField("self_end")
        // }
        callback();
      }
    };
    const selfEndTimeValidator = (rule, value, callback) => {
      if (value <= this.timesForm.self_start) {
        callback(new Error(START_END_VALIDATE_MSG));
      } else {
        // else if (
        //   this.timesForm.leader_start &&
        //   value >= this.timesForm.leader_start
        // ) {
        //   this.$refs.timesForm.validateField("leader_start")
        // }
        callback();
      }
    };

    const leaderStartTimeValidator = (rule, value, callback) => {
      if (this.timesForm.self_end && value <= this.timesForm.self_end) {
        callback(new Error(LEADER_TIME_VALIDATE_MSG));
      } else {
        //  else if (
        //   this.timesForm.leader_end &&
        //   value >= this.timesForm.leader_end
        // ) {
        //   this.$refs.timesForm.validateField("leader_end")
        // }
        callback();
        // this.$refs.timesForm.validateField("self_end")
      }
    };
    const leaderEndTimeValidator = (rule, value, callback) => {
      if (this.timesForm.leader_start && value <= this.timesForm.leader_start) {
        callback(new Error(START_END_VALIDATE_MSG));
      } else {
        // else if (
        //   this.timesForm.upLeader_start &&
        //   value >= this.timesForm.upLeader_start
        // ) {
        //   this.$refs.timesForm.validateField("upLeader_start")
        // }
        callback();
      }
    };
    const upLeaderStartTimeValidator = (rule, value, callback) => {
      if (this.timesForm.leader_end && value <= this.timesForm.leader_end) {
        callback(new Error(UP_LEADER_TIME_VALIDATE_MSG));
      } else {
        // else if (
        //   this.timesForm.upLeader_end &&
        //   value >= this.timesForm.upLeader_end
        // ) {
        //   this.$refs.timesForm.validateField("upLeader_end")
        // }
        callback();
      }
    };
    const upLeaderEndTimeValidator = (rule, value, callback) => {
      if (
        this.timesForm.upLeader_start &&
        value <= this.timesForm.upLeader_start
      ) {
        callback(new Error(START_END_VALIDATE_MSG));
      } else {
        // else if (
        //   this.timesForm.face_start &&
        //   value >= this.timesForm.face_start
        // ) {
        //   this.$refs.timesForm.validateField("face_start")
        // }
        callback();
      }
    };
    const faceStartTimeValidator = (rule, value, callback) => {
      if (this.timesForm.upLeader_end && value <= this.timesForm.upLeader_end) {
        callback(new Error(FACE_TIME_VALIDATE_MSG));
      } else {
        // else if (this.timesForm.face_end) {
        //   this.$refs.timesForm.validateField("face_end")
        // }
        callback();
      }
    };
    const faceEndTimeValidator = (rule, value, callback) => {
      if (value >= this.timesForm.finishedDate) {
        callback(new Error(FACE_TIME_OVER_GRADE_MSG));
      }
      if (this.timesForm.face_start && value <= this.timesForm.face_start) {
        callback(new Error(START_END_VALIDATE_MSG));
      } else {
        callback();
      }
    };

    return {
      constants: {
        SELF_EVALUATION_TIME,
        LEADER_EVALUATION_TIME,
        REQUIRE_271,
        LEADER_PLUS_EVALUATION_TIME,
        FACE_EVALUATION_TIME,
        CONFIRM,
        CANCEL
      },
      timesForm: {
        self_start: "",
        self_end: "",
        leader_start: "",
        leader_end: "",
        upLeader_start: "",
        upLeader_end: "",
        face_start: "",
        face_end: "",
        levelRequired: 0,
        finishedDate: ""
      },
      timesRules: {
        self_start: [
          {
            required: true,
            message: SELF_TIME_REQUIRE_MSG + START_TIME,
            trigger: "change"
          },
          { validator: selfStartTimeValidator, trigger: "change" }
        ],
        self_end: [
          {
            required: true,
            message: SELF_TIME_REQUIRE_MSG + END_TIME,
            trigger: "change"
          },
          { validator: selfEndTimeValidator, trigger: "change" }
        ],
        leader_start: [
          {
            required: true,
            message: LEADER_TIME_REQUIRE_MSG + START_TIME,
            trigger: "change"
          },
          { validator: leaderStartTimeValidator, trigger: "change" }
        ],
        leader_end: [
          {
            // type: "array",
            required: true,
            message: LEADER_TIME_REQUIRE_MSG + END_TIME,
            trigger: "change"
          },
          { validator: leaderEndTimeValidator, trigger: "change" }
        ],
        upLeader_start: [
          {
            // type: "array",
            required: true,
            message: UP_LEADER_TIME_REQUIRE_MSG + START_TIME,
            trigger: "change"
          },
          { validator: upLeaderStartTimeValidator, trigger: "change" }
        ],
        upLeader_end: [
          {
            // type: "array",
            required: true,
            message: UP_LEADER_TIME_REQUIRE_MSG + END_TIME,
            trigger: "change"
          },
          { validator: upLeaderEndTimeValidator, trigger: "change" }
        ],
        face_start: [
          {
            // type: "array",
            required: true,
            message: FACE_TIME_REQUIRE_MSG + START_TIME,
            trigger: "change"
          },
          { validator: faceStartTimeValidator, trigger: "change" }
        ],
        face_end: [
          {
            // type: "array",
            required: true,
            message: FACE_TIME_REQUIRE_MSG + END_TIME,
            trigger: "change"
          },
          { validator: faceEndTimeValidator, trigger: "change" }
        ]
      }
    };
  },
  methods: {
    // 重置form
    resetFilter(formName) {
      this.$refs[formName].resetFields();
    },
    close() {
      this.$emit("close");
    },
    // 时间设置提交
    timeSet() {
      this.$refs["timesForm"].validate(valid => {
        if (valid) {
          // alert("submit!")
          postTimeSettings(this.$route.params.orgID, {
            self_start_time: this.timesForm.self_start,
            self_end_time: this.timesForm.self_end,
            superior_start_time: this.timesForm.leader_start,
            superior_end_time: this.timesForm.leader_end,
            highlevel_start_time: this.timesForm.upLeader_start,
            highlevel_end_time: this.timesForm.upLeader_end,
            feedback_start_time: this.timesForm.face_start,
            feedback_end_time: this.timesForm.face_end,
            _271_is_necessary: this.timesForm.levelRequired
          })
            .then(res => {
              this.close();
            })
            .catch(e => {});
          // console.log("valid")
        } else {
          // console.log("error submit!!")
          return false;
        }
      });
    }
  },
  created() {
    this.timesForm.self_start = this.timeData.self_start_time;
    this.timesForm.self_end = this.timeData.self_end_time;
    this.timesForm.leader_start = this.timeData.superior_start_time;
    this.timesForm.leader_end = this.timeData.superior_end_time;
    this.timesForm.upLeader_start = this.timeData.highlevel_start_time;
    this.timesForm.upLeader_end = this.timeData.highlevel_end_time;
    this.timesForm.face_start = this.timeData.feedback_start_time;
    this.timesForm.face_end = this.timeData.feedback_end_time;
    this.timesForm.levelRequired = this.timeData.checked_271;
    this.timesForm.finishedDate = this.timeData.finishedDate;
  },
  beforeDestroy() {
    this.resetFilter("timesForm");
  },
  computed: {
    self_start_disable() {
      return this.status.self_status > 0;
    },
    self_end_disable() {
      return this.status.self_status === 2;
    },
    leader_start_disable() {
      return this.status.superior_status > 0;
    },
    leader_end_disable() {
      return this.status.superior_status === 2;
    },
    upLeader_start_disable() {
      return this.status.highlevel_status > 0;
    },
    upLeader_end_disable() {
      return this.status.highlevel_status === 2;
    },
    face_start_disable() {
      return this.status.feedback_status > 0;
    },
    face_end_disable() {
      return this.status.feedback_status === 2;
    }
  }
};
</script>
<style scoped>
</style>
