<template>
  <el-dialog
    :close-on-click-modal="false"
    @close="close"
    width="650px"
    :visible="visible"
    class="timeDialog"
  >
    <div slot="title" class="title">设置时间</div>
    <el-form
      label-width="100px"
      :rules="timeFormRules"
      ref="timeForm"
      :model="timeForm"
      class="timeForm"
    >
      <el-form-item label="绩效周期" label-width="120px" prop="targetEndTime">
        <div>
          <el-date-picker
            :disabled="startTargetDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.startTime"
            type="datetime"
            placeholder="选择开始时间"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :disabled="endTargetDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.endTime"
            type="datetime"
            placeholder="选择结束时间"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="*指标设定" label-width="120px" prop="endTime">
        <div>
          <el-date-picker
            :disabled="startDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.start_time"
            type="datetime"
            placeholder="选择开始时间"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :disabled="endDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.end_time"
            type="datetime"
            placeholder="选择结束时间"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="*评分时间" label-width="120px" prop="endTime">
        <div>
          <el-date-picker
            :disabled="startDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.target_start_time"
            type="datetime"
            placeholder="选择开始时间"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :disabled="endDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.target_end_time"
            type="datetime"
            placeholder="选择结束时间"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="*隔级评时间" label-width="120px" prop="endTime">
        <div>
          <el-date-picker
            :disabled="startDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.high_level_start_time"
            type="datetime"
            placeholder="选择开始时间"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :disabled="endDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.high_level_end_time"
            type="datetime"
            placeholder="选择结束时间"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="*结果确认时间" label-width="120px" prop="endTime">
        <div>
          <el-date-picker
            :disabled="startDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.confirm_start_time"
            type="datetime"
            placeholder="选择开始时间"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :disabled="endDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.confirm_end_time"
            type="datetime"
            placeholder="选择结束时间"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="*可申述时间段" label-width="120px" prop="endTime">
        <div>
          <el-date-picker
            :disabled="startDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.appeal_start_time"
            type="datetime"
            placeholder="选择开始时间"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :disabled="endDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.appeal_end_time"
            type="datetime"
            placeholder="选择结束时间"
          ></el-date-picker>
        </div>
      </el-form-item>
      <br />
      <el-form-item label-width="0px">
        <el-row type="flex" justify="center">
          <el-button
            :disabled="endDisable"
            round
            type="primary"
            @click="submitForm('timeForm')"
            >{{ constants.CONFIRM }}</el-button
          >
          <el-button @click="close" round>{{ constants.CANCEL }}</el-button>
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
              start_time,
              end_time,
              target_start_time,
              target_end_time,
              high_level_start_time,
              high_level_end_time,
              confirm_start_time,
              confirm_end_time,
              appeal_start_time,
              appeal_end_time,
            } = this.timeForm;
            return postPerformanceTime(this.$route.params.orgID, {
              start_time: start_time,
              end_time: end_time,
              target_start_time: target_start_time,
              target_end_time: target_end_time,
              high_level_start_time: high_level_start_time,
              high_level_end_time: high_level_end_time,
              confirm_start_time: confirm_start_time,
              confirm_end_time: confirm_end_time,
              appeal_start_time: appeal_start_time,
              appeal_end_time: appeal_end_time,
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
      if (!this.timeForm.start_time) {
        this.$notify({
          title: "警告",
          message: "指标设定开始时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.end_time) {
        this.$notify({
          title: "警告",
          message: "指标设定结束时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.target_start_time) {
        this.$notify({
          title: "警告",
          message: "评分开始时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.target_end_time) {
        this.$notify({
          title: "警告",
          message: "评分结束时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.high_level_start_time) {
        this.$notify({
          title: "警告",
          message: "隔级评开始时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.high_level_end_time) {
        this.$notify({
          title: "警告",
          message: "隔级评结束时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.confirm_start_time) {
        this.$notify({
          title: "警告",
          message: "结果确认开始时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.confirm_start_time) {
        this.$notify({
          title: "警告",
          message: "结果确认结束时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.appeal_start_time) {
        this.$notify({
          title: "警告",
          message: "可申述开始时间不能为空!",
          type: "warning"
        });
        return false;
      }
      if (!this.timeForm.appeal_end_time) {
        this.$notify({
          title: "警告",
          message: "可申述结束时间不能为空!",
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
              formatTime(
                new Date(this.initTime.finalEnd.replace(/-/gi, "/"))
              ).split(" ")[0] +
                " 00:00"
          );
        }
      };
    },
    startTargetDisable() {
      return (
        this.initTime.targetStartTime &&
        formatTime(
          new Date(this.initTime.targetStartTime.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    },
    startDisable() {
      return (
        this.initTime.startTime &&
        formatTime(new Date(this.initTime.startTime.replace(/-/gi, "/"))) <
          formatTime(new Date())
      );
    },
    endDisable() {
      return (
        this.initTime.endTime &&
        formatTime(new Date(this.initTime.endTime.replace(/-/gi, "/"))) <
          formatTime(new Date())
      );
    },
    endTargetDisable() {
      return (
        this.initTime.targetEndTime &&
        formatTime(new Date(this.initTime.targetEndTime.replace(/-/gi, "/"))) <
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
