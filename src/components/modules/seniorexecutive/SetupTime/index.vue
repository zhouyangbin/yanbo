<template>
  <el-dialog
    :close-on-click-modal="false"
    @close="close"
    width="650px"
    :visible="visible"
    class="setup-time"
  >
    <div slot="title" class="title">修改时间</div>
    <el-form
      :rules="timeFormRules"
      label-width="140px"
      ref="timeForm"
      :model="timeForm"
      class="time-form"
    >
      <el-form-item label="整体考核起止时间">
        <div>
          <el-date-picker
            :disabled="startDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.entirety_start_time"
            type="datetime"
            placeholder="请选择"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :disabled="endDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.entirety_end_time"
            type="datetime"
            placeholder="请选择"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="指标设定截止时间" prop="indicator_setting_end_time">
        <el-date-picker
          :disabled="indicatorDisable"
          :clearable="false"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd HH:mm"
          popper-class="date-picker-container"
          format="yyyy-MM-dd HH:mm"
          v-model="timeForm.indicator_setting_end_time"
          type="datetime"
          placeholder="请选择"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="自评开始时间" prop="self_evaluation_begin_time">
        <el-date-picker
          :disabled="selfDisable"
          :clearable="false"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd HH:mm"
          popper-class="date-picker-container"
          format="yyyy-MM-dd HH:mm"
          v-model="timeForm.self_evaluation_begin_time"
          type="datetime"
          placeholder="请选择"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="上级评分开始时间" prop="superior_begin_time">
        <el-date-picker
          :disabled="superiorDisable"
          :clearable="false"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd HH:mm"
          popper-class="date-picker-container"
          format="yyyy-MM-dd HH:mm"
          v-model="timeForm.superior_begin_time"
          type="datetime"
          placeholder="请选择"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="隔级审核开始时间" prop="isolation_begin_time">
        <el-date-picker
          :disabled="isolationDisable"
          :clearable="false"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd HH:mm"
          popper-class="date-picker-container"
          format="yyyy-MM-dd HH:mm"
          v-model="timeForm.isolation_begin_time"
          type="datetime"
          placeholder="请选择"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="总裁审核开始时间" prop="president_audit_begin_time">
        <el-date-picker
          :disabled="presidentDisable"
          :clearable="false"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd HH:mm"
          popper-class="date-picker-container"
          format="yyyy-MM-dd HH:mm"
          v-model="timeForm.president_audit_begin_time"
          type="datetime"
          placeholder="请选择"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="结果确认开始时间" prop="result_comfirm_end_time">
        <el-date-picker
          :disabled="resultDisable"
          :clearable="false"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd HH:mm"
          popper-class="date-picker-container"
          format="yyyy-MM-dd HH:mm"
          v-model="timeForm.result_comfirm_end_time"
          type="datetime"
          placeholder="请选择"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="可申诉时间段">
        <div>
          <el-date-picker
            :disabled="appealBeginDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.appeal_begin_time"
            type="datetime"
            placeholder="请选择"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :disabled="appealEndDisable"
            :clearable="false"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="timeForm.appeal_end_time"
            type="datetime"
            placeholder="请选择"
          ></el-date-picker>
        </div>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="submit" type="primary">
          {{ constants.CONFIRM }}
        </el-button>
        <el-button round size="medium" @click="close" class="btn-reset">
          {{ constants.CANCEL }}
        </el-button>
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import {} from "@/constants/TEXT";
import {} from "@/constants/API";
import { AsyncComp } from "@/utils/asyncCom";
import { formatTime } from "@/utils/timeFormat";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    performanceId: {
      type: String,
      default: ""
    },
    initTime: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    const endTimeValidator = (rule, value, callback) => {
      if (
        this.timeForm.entirety_start_time &&
        value &&
        value <= this.timeForm.entirety_start_time
      ) {
        callback(new Error("考核结束时间不能小于开始时间"));
      } else {
        callback();
      }
    };
    const indicatorTimeValidator = (rule, value, callback) => {
      if (
        this.timeForm.entirety_start_time &&
        value &&
        value <= this.timeForm.entirety_start_time
      ) {
        callback(new Error("指标设定截止时间不能小于考核开始时间"));
      } else if (
        this.timeForm.entirety_end_time &&
        value &&
        this.timeForm.entirety_end_time <= value
      ) {
        callback(new Error("指标设定截止时间不能大于考核结束时间"));
      } else {
        callback();
      }
    };
    const selfTimeValidator = (rule, value, callback) => {
      if (
        this.timeForm.entirety_start_time &&
        value &&
        value <= this.timeForm.entirety_start_time
      ) {
        callback(new Error("自评开始时间不能小于考核开始时间"));
      } else if (
        this.timeForm.entirety_end_time &&
        value &&
        this.timeForm.entirety_end_time <= value
      ) {
        callback(new Error("自评开始时间不能大于考核结束时间"));
      } else {
        callback();
      }
    };
    const superiorTimeValidator = (rule, value, callback) => {
      if (
        this.timeForm.entirety_start_time &&
        value &&
        value <= this.timeForm.entirety_start_time
      ) {
        callback(new Error("上级评开始时间不能小于考核开始时间"));
      } else if (
        this.timeForm.entirety_end_time &&
        value &&
        this.timeForm.entirety_end_time <= value
      ) {
        callback(new Error("上级评开始时间不能大于考核结束时间"));
      } else {
        callback();
      }
    };
    const isolationTimeValidator = (rule, value, callback) => {
      if (
        this.timeForm.entirety_start_time &&
        value &&
        value <= this.timeForm.entirety_start_time
      ) {
        callback(new Error("隔级审核开始时间不能小于考核开始时间"));
      } else if (
        this.timeForm.entirety_end_time &&
        value &&
        this.timeForm.entirety_end_time <= value
      ) {
        callback(new Error("隔级审核开始时间不能大于考核结束时间"));
      } else {
        callback();
      }
    };
    const presidentTimeValidator = (rule, value, callback) => {
      if (
        this.timeForm.entirety_start_time &&
        value &&
        value <= this.timeForm.entirety_start_time
      ) {
        callback(new Error("总裁审核开始时间不能小于考核开始时间"));
      } else if (
        this.timeForm.entirety_end_time &&
        value &&
        this.timeForm.entirety_end_time <= value
      ) {
        callback(new Error("总裁审核开始时间不能大于考核结束时间"));
      } else {
        callback();
      }
    };
    const resultTimeValidator = (rule, value, callback) => {
      if (
        this.timeForm.entirety_start_time &&
        value &&
        value <= this.timeForm.entirety_start_time
      ) {
        callback(new Error("结果确认截止时间不能小于考核开始时间"));
      } else if (
        this.timeForm.entirety_end_time &&
        value &&
        this.timeForm.entirety_end_time <= value
      ) {
        callback(new Error("结果确认截止时间不能大于考核结束时间"));
      } else {
        callback();
      }
    };
    const appealBeginTimeValidator = (rule, value, callback) => {
      if (
        this.timeForm.entirety_start_time &&
        value &&
        value <= this.timeForm.entirety_start_time
      ) {
        callback(new Error("申诉开始时间不能小于考核开始时间"));
      } else if (
        this.timeForm.entirety_end_time &&
        value &&
        this.timeForm.entirety_end_time <= value
      ) {
        callback(new Error("申诉开始时间不能大于考核结束时间"));
      } else {
        callback();
      }
    };
    const appealEndTimeValidator = (rule, value, callback) => {
      if (
        this.timeForm.entirety_start_time &&
        value &&
        value <= this.timeForm.entirety_start_time
      ) {
        callback(new Error("申诉结束时间不能小于考核开始时间"));
      } else if (
        this.timeForm.entirety_end_time &&
        value &&
        this.timeForm.entirety_end_time <= value
      ) {
        callback(new Error("申诉结束时间不能大于考核结束时间"));
      } else if (
        this.timeForm.appeal_begin_time &&
        value &&
        value <= this.timeForm.appeal_begin_time
      ) {
        callback(new Error("申诉结束时间不能小于开始时间"));
      } else {
        callback();
      }
    };
    return {
      timeFormRules: {
        entirety_end_time: [{ validator: endTimeValidator, trigger: "change" }],
        indicator_setting_end_time: [
          { validator: indicatorTimeValidator, trigger: "change" }
        ],
        self_evaluation_begin_time: [
          { validator: selfTimeValidator, trigger: "change" }
        ],
        superior_begin_time: [
          { validator: superiorTimeValidator, trigger: "change" }
        ],
        isolation_begin_time: [
          { validator: isolationTimeValidator, trigger: "change" }
        ],
        president_audit_begin_time: [
          { validator: presidentTimeValidator, trigger: "change" }
        ],
        result_comfirm_end_time: [
          { validator: resultTimeValidator, trigger: "change" }
        ],
        appeal_begin_time: [
          { validator: appealBeginTimeValidator, trigger: "change" }
        ],
        appeal_end_time: [
          { validator: appealEndTimeValidator, trigger: "change" }
        ]
      },
      timeForm: {
        entirety_start_time: initTime.entirety_start_time || "",
        entirety_end_time: initTime.entirety_end_time || "",
        indicator_setting_end_time: initTime.indicator_setting_end_time || "",
        self_evaluation_begin_time: initTime.self_evaluation_begin_time || "",
        superior_begin_time: initTime.superior_begin_time || "",
        isolation_begin_time: initTime.isolation_begin_time || "",
        president_audit_begin_time: initTime.president_audit_begin_time || "",
        result_comfirm_end_time: initTime.result_comfirm_end_time || "",
        appeal_begin_time: initTime.appeal_begin_time || "",
        appeal_end_time: initTime.appeal_end_time || ""
      },
      constants: {}
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      this.$refs["timeForm"].validate(valid => {
        if (valid) {
          // if (this.infoType == "add") {
          //   return postPerformanceTpl(this.timeForm).then(res => {
          //     this.close();
          //   });
          // } else {
          //   return putPerformanceTpls(this.performanceId, this.timeForm).then(
          //     res => {
          //       this.close();
          //     }
          //   );
          // }
        }
      });
    }
  },
  created() {
    console.log(this.initTime);
  },
  beforeDestroy() {
    this.$refs["timeForm"].resetFields();
  },
  computed: {
    pickerOptions() {
      return {
        disabledDate: date => {
          const dt = formatTime(new Date(date));
          const now = formatTime(new Date()).split(" ")[0] + " 00:00";
          return (
            dt < now ||
            dt >
              formatTime(
                new Date(this.initTime.entirety_end_time.replace(/-/gi, "/"))
              ).split(" ")[0] +
                " 00:00"
          );
        }
      };
    },
    startDisable() {
      return (
        this.initTime.entirety_start_time &&
        formatTime(
          new Date(this.initTime.entirety_start_time.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    },
    endDisable() {
      return (
        this.initTime.entirety_end_time &&
        formatTime(
          new Date(this.initTime.entirety_end_time.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    },
    indicatorDisable() {
      return (
        this.initTime.indicator_setting_end_time &&
        formatTime(
          new Date(this.initTime.indicator_setting_end_time.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    },
    selfDisable() {
      return (
        this.initTime.self_evaluation_begin_time &&
        formatTime(
          new Date(this.initTime.self_evaluation_begin_time.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    },
    superiorDisable() {
      return (
        this.initTime.superior_begin_time &&
        formatTime(
          new Date(this.initTime.superior_begin_time.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    },
    isolationDisable() {
      return (
        this.initTime.isolation_begin_time &&
        formatTime(
          new Date(this.initTime.isolation_begin_time.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    },
    presidentDisable() {
      return (
        this.initTime.president_audit_begin_time &&
        formatTime(
          new Date(this.initTime.president_audit_begin_time.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    },
    resultDisable() {
      return (
        this.initTime.result_comfirm_end_time &&
        formatTime(
          new Date(this.initTime.result_comfirm_end_time.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    },
    appealBeginDisable() {
      return (
        this.initTime.appeal_begin_time &&
        formatTime(
          new Date(this.initTime.appeal_begin_time.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    },
    appealEndDisable() {
      return (
        this.initTime.appeal_end_time &&
        formatTime(
          new Date(this.initTime.appeal_end_time.replace(/-/gi, "/"))
        ) < formatTime(new Date())
      );
    }
  }
};
</script>
<style scoped>
.setup-time .title {
  text-align: left;
}
.setup-time >>> .el-dialog__header {
  border-bottom: 1px solid #e4e7ed;
}
.setup-time >>> .el-form-item {
  margin-bottom: 22px;
}
.setup-time >>> .el-form-item .el-input-group__prepend,
.setup-time >>> .el-form-item .el-input-group__append {
  padding: 0 10px !important;
  background-color: #fff !important;
  border: none !important;
}
.tpl-form >>> .el-form-item {
  margin-bottom: 16px !important;
}
.tpl-form .input-type {
  float: left;
  width: 33.33%;
}
</style>
