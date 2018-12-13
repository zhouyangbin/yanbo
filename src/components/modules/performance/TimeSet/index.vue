<template>
  <el-dialog
    @close="close"
    width="650px"
    :visible="visible"
    class="timeDialog"
  >
    <div
      slot="title"
      class="title"
    >
      设置时间
    </div>
    <el-form
      label-width="100px"
      :rules="timeFormRules"
      ref="timeForm"
      :model="timeForm"
      class="timeForm"
    >
      <el-form-item
        label="目标设定"
        prop="targetEndTime"
      >
        <div>
          <el-date-picker
            :disabled="startTargetDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.targetStartTime"
            type="datetime"
            placeholder="选择开始时间"
          >
          </el-date-picker>
          <span>&nbsp; 至 &nbsp; </span>
          <el-date-picker
            :disabled="endTargetDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.targetEndTime"
            type="datetime"
            placeholder="选择结束时间"
          >
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item
        label="评分时间"
        prop="endTime"
      >
        <div>
          <el-date-picker
            :disabled="startDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.startTime"
            type="datetime"
            placeholder="选择开始时间"
          >
          </el-date-picker>
          <span>&nbsp; 至 &nbsp; </span>
          <el-date-picker
            :disabled="endDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.endTime"
            type="datetime"
            placeholder="选择结束时间"
          >
          </el-date-picker>
        </div>
      </el-form-item>
      <br>
      <el-form-item label-width="0px">
        <el-row
          type="flex"
          justify="center"
        >
          <el-button
            :disabled="endDisable"
            round
            type="primary"
            @click="submitForm('timeForm')"
          >{{constants.CONFIRM}}</el-button>
          <el-button
            @click="close"
            round
          >{{constants.CANCEL}}</el-button>
        </el-row>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { formatTime } from "@/utils/timeFormat";
import { CANCEL, CONFIRM } from "@/constants/TEXT";
import { postPerformanceTime } from "@/constants/API";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    initTime: {
      type: Object,
      default: () => ({})
    },
    isManagerGrade: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const endTimeValidator = (rule, value, callback) => {
      // console.log(value)
      if (
        this.timeForm.startTime &&
        value &&
        value <= this.timeForm.startTime
      ) {
        callback(new Error("结束时间不能小于开始时间"));
      } else {
        callback();
      }
    };
    const targetEndTimeValidator = (rule, value, callback) => {
      if (
        this.timeForm.targetStartTime &&
        value &&
        value <= this.timeForm.targetStartTime
      ) {
        callback(new Error("结束时间不能小于开始时间"));
      } else {
        callback();
      }
    };
    return {
      timeForm: {
        targetStartTime: this.initTime.targetStartTime || "",
        targetEndTime: this.initTime.targetEndTime || "",
        startTime: this.initTime.startTime || "",
        endTime: this.initTime.endTime || ""
      },
      timeFormRules: {
        endTime: [{ validator: endTimeValidator, trigger: "change" }],
        targetEndTime: [
          { validator: targetEndTimeValidator, trigger: "change" }
        ]
      },
      constants: {
        CANCEL,
        CONFIRM
      }
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //   console.log(this.timeForm)
          if (this.formCheck()) {
            const {
              startTime,
              endTime,
              targetStartTime,
              targetEndTime
            } = this.timeForm;
            return postPerformanceTime(this.$route.params.orgID, {
              start_time: startTime,
              end_time: endTime,
              target_start_time: targetStartTime,
              target_end_time: targetEndTime
            })
              .then(res => {
                //   console.log(res)
                this.close();
              })
              .catch(e => {});
          }
        } else {
          return false;
        }
      });
    },
    formCheck() {
      if (!this.timeForm.targetStartTime) {
        this.$notify({
          title: "警告",
          message: "目标设定开始时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.targetEndTime) {
        this.$notify({
          title: "警告",
          message: "目标设定结束时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.startTime) {
        this.$notify({
          title: "警告",
          message: "评分开始时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.endTime) {
        this.$notify({
          title: "警告",
          message: "评分结束时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (this.timeForm.startTime < this.timeForm.targetEndTime) {
        this.$notify({
          title: "警告",
          message: "目标设定结束时间不能大于评分开始!",
          type: "warning"
        });
        return false;
      }
      return true;
    }
  },
  computed: {
    pickerOptions() {
      return {
        disabledDate: date => {
          // 小于当前日期的disable
          const dt = formatTime(new Date(date));
          const now = formatTime(new Date()).split(" ")[0] + " 00:00";

          return (
            dt < now ||
            dt >
              formatTime(new Date(this.initTime.finalEnd)).split(" ")[0] +
                " 00:00"
          );
        }
      };
    },
    startTargetDisable() {
      return (
        this.initTime.targetStartTime &&
        formatTime(new Date(this.initTime.targetStartTime)) <
          formatTime(new Date())
      );
    },
    startDisable() {
      return (
        this.initTime.startTime &&
        formatTime(new Date(this.initTime.startTime)) < formatTime(new Date())
      );
    },
    endDisable() {
      return (
        this.initTime.endTime &&
        formatTime(new Date(this.initTime.endTime)) < formatTime(new Date())
      );
    },
    endTargetDisable() {
      return (
        this.initTime.targetEndTime &&
        formatTime(new Date(this.initTime.targetEndTime)) <
          formatTime(new Date())
      );
    }
  }
};
</script>
<style scoped>
.timeDialog .title {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  padding: 15px;
}
</style>
