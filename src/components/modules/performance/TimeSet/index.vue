<template>
  <el-dialog @close="close" width="650px" :visible="visible" class="timeDialog">
    <div slot="title" class="title">
      设置时间
    </div>
    <el-form label-width="100px" :rules="timeFormRules" ref="timeForm" :model="timeForm" class="timeForm">
      <el-form-item label="评分时间" prop="endTime">
        <div>
          <el-date-picker :disabled="startDisable" :clearable="false" :picker-options="pickerOptions" value-format="yyyy-MM-dd HH:mm" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="timeForm.startTime" type="datetime" placeholder="选择开始时间">
          </el-date-picker>
          <span>&nbsp; 至 &nbsp; </span>
          <el-date-picker :disabled="endDisable" :clearable="false" :picker-options="pickerOptions" value-format="yyyy-MM-dd HH:mm" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="timeForm.endTime" type="datetime" placeholder="选择结束时间">
          </el-date-picker>
        </div>
      </el-form-item>
      <br>
      <el-form-item label-width="0px">
        <el-row type="flex" justify="center">
          <el-button :disabled="endDisable" round type="primary" @click="submitForm('timeForm')">{{constants.CONFIRM}}</el-button>
          <el-button @click="close" round>{{constants.CANCEL}}</el-button>
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
    }
  },
  data() {
    const endTimeValidator = (rule, value, callback) => {
      // console.log(value)
      if (!this.timeForm.startTime) {
        callback(new Error("请先选择开始时间"));
      } else if (!value) {
        callback(new Error("请先选择结束时间"));
      } else if (value <= this.timeForm.startTime) {
        callback(new Error("结束时间不能小于开始时间"));
      } else {
        callback();
      }
    };
    return {
      timeForm: {
        startTime: this.initTime.startTime || "",
        endTime: this.initTime.endTime || ""
      },
      timeFormRules: {
        endTime: [{ validator: endTimeValidator, trigger: "change" }]
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
          const { startTime, endTime } = this.timeForm;
          return postPerformanceTime(this.$route.params.orgID, {
            start_time: startTime,
            end_time: endTime
          })
            .then(res => {
              //   console.log(res)
              this.close();
            })
            .catch(e => {});
        } else {
          return false;
        }
      });
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
