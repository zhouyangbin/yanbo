<template>
    <el-dialog @close="close" width="570px" :visible="dialogTimes" class="dialogTimes">
        <el-form label-width="120px" :rules="timesRules" ref="timesForm" :model="timesForm" class="timesForm">
            <el-form-item :label="constants.SELF_EVALUATION_TIME" prop="self">
                <el-date-picker :clearable="false" value-format="timestamp" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="timesForm.self" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item :label="constants.LEADER_EVALUATION_TIME" prop="leader">
                <el-date-picker :clearable="false" value-format="timestamp" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="timesForm.leader" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="" prop="levelRequired">
                <el-checkbox v-model="timesForm.levelRequired">{{constants.REQUIRE_271}}</el-checkbox>
            </el-form-item>
            <el-form-item :label="constants.LEADER_PLUS_EVALUATION_TIME" prop="upLeader">
                <el-date-picker :clearable="false" value-format="timestamp" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="timesForm.upLeader" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item :label="constants.FACE_EVALUATION_TIME" prop="face">
                <el-date-picker :clearable="false" value-format="timestamp" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="timesForm.face" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
        </el-form>
        <div slot="footer">
            <el-row type="flex" justify="center">
                <el-button round size="medium" type="primary" @click="timeSet('timesForm')">{{constants.CONFIRM}}</el-button>
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
  CANCEL
} from "@/constants/TEXT";
export default {
  props: {
    dialogTimes: {
      type: Boolean,
      default: false
    }
  },
  data() {
    // 时间顺序验证
    const selfTimeValidator = (rule, value, callback) => {
      if (this.timesForm.leader && !this.timesForm.leader[0]) {
        // 隔级没填
        callback();
      } else {
        const leaderStart = new Date(this.timesForm.leader[0]);
        const end = new Date(value[1]);
        if (leaderStart <= end) {
          this.$refs.timesForm.validateField("leader");
        } else {
          callback();
        }
      }
    };
    const leaderTimeValidator = (rule, value, callback) => {
      if (value && value[0]) {
        // 有值的情况下
        if (this.timesForm.self && !this.timesForm.self[0]) {
          // 自评没填
          this.$refs.timesForm.validateField("self");
        } else {
          const selfEnd = new Date(this.timesForm.self[1]);
          const leaderStart = new Date(value[0]);
          if (leaderStart <= selfEnd) {
            callback(new Error(LEADER_TIME_VALIDATE_MSG));
          } else {
            callback();
          }

          if (this.timesForm.upLeader && !this.timesForm.upLeader[0]) {
            // 隔级没填
            callback();
          } else {
            const leaderStart = new Date(this.timesForm.upLeader[0]);
            const end = new Date(value[1]);
            if (leaderStart <= end) {
              this.$refs.timesForm.validateField("upLeader");
            } else {
              callback();
            }
          }
        }
      }
      callback();
    };
    const upLeaderTimeValidator = (rule, value, callback) => {
      if (value && value[0]) {
        // 有值的情况下
        if (this.timesForm.leader && !this.timesForm.leader[0]) {
          // 上级评没填
          this.$refs.timesForm.validateField("leader");
        } else {
          const leaderEnd = new Date(this.timesForm.leader[1]);
          const start = new Date(value[0]);
          if (start <= leaderEnd) {
            callback(new Error(UP_LEADER_TIME_VALIDATE_MSG));
          } else {
            callback();
          }
        }

        if (this.timesForm.face && !this.timesForm.face[0]) {
          // 面谈没填
          callback();
        } else {
          const faceStart = new Date(this.timesForm.face[0]);
          const end = new Date(value[1]);
          if (faceStart <= end) {
            this.$refs.timesForm.validateField("face");
          } else {
            callback();
          }
        }
      }
      callback();
    };
    const faceTimeValidator = (rule, value, callback) => {
      if (value && value[0]) {
        // 有值的情况下
        if (this.timesForm.upLeader && !this.timesForm.upLeader[0]) {
          // 上级评没填
          this.$refs.timesForm.validateField("upLeader");
        } else {
          const leaderEnd = new Date(this.timesForm.upLeader[1]);
          const start = new Date(value[0]);
          if (start <= leaderEnd) {
            callback(new Error(FACE_TIME_VALIDATE_MSG));
          } else {
            callback();
          }
        }
      }
      callback();
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
        self: [],
        leader: [],
        upLeader: [],
        face: [],
        levelRequired: false
      },
      timesRules: {
        self: [
          {
            type: "array",
            required: true,
            message: SELF_TIME_REQUIRE_MSG,
            trigger: "change"
          },
          { validator: selfTimeValidator, trigger: "change" }
        ],
        leader: [
          {
            type: "array",
            required: true,
            message: LEADER_TIME_REQUIRE_MSG,
            trigger: "change"
          },
          { validator: leaderTimeValidator, trigger: "change" }
        ],
        upLeader: [
          {
            type: "array",
            required: true,
            message: UP_LEADER_TIME_REQUIRE_MSG,
            trigger: "change"
          },
          { validator: upLeaderTimeValidator, trigger: "change" }
        ],
        face: [
          {
            type: "array",
            required: true,
            message: FACE_TIME_REQUIRE_MSG,
            trigger: "change"
          },
          { validator: faceTimeValidator, trigger: "change" }
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
    timeSet(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  beforeDestroy() {
    this.resetFilter("timesForm");
  }
};
</script>
<style scoped>
</style>
