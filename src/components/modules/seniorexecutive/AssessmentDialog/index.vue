<template>
  <el-dialog
    :close-on-click-modal="false"
    @close="close"
    width="650px"
    :visible="visible"
    class="tpl-dialog"
  >
    <div slot="title" class="title">
      {{ infoType === "add" ? "创建高管绩效考核" : "修改高管绩效考核" }}
    </div>
    <el-form
      :rules="rules"
      label-width="140px"
      ref="ruleForm"
      :model="ruleForm"
      class="ruleForm"
    >
      <el-form-item label="考核名称" prop="name">
        <el-input style="width:400px" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="适用范围" prop="department_ids">
        <common-tree
          :orgTree="orgTree"
          @selectedIds="selectedOrg"
          :department_ids="ruleForm.department_ids"
        ></common-tree>
      </el-form-item>
      <el-form-item
        class="is-required"
        label="绩效类型"
        prop="performance_type"
      >
        <el-select
          v-model="ruleForm.performance_type"
          :placeholder="constants.PLEASE_SELECT_PERFORMANCE_TYPE"
        >
          <el-option
            v-for="item in performanceTypes"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考核周期" prop="year">
        <el-date-picker
          v-model="ruleForm.year"
          value-format="yyyy"
          type="year"
          placeholder="请选择考核年份"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item class="is-required" label="考核周期" prop="end_time">
        <div>
          <el-date-picker
            @change="calculateEndDate"
            :disabled="ruleForm.property == ''"
            :clearable="false"
            :picker-options="startPickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="ruleForm.start_time"
            type="datetime"
            placeholder="选择开始时间"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :disabled="ruleForm.property == ''"
            :clearable="false"
            :picker-options="endPickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="ruleForm.end_time"
            type="datetime"
            placeholder="选择结束时间"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="绩效模板" prop="tpl">
        <div class="rule-name">{{ ruleForm.tpl }}</div>
      </el-form-item>
      <el-form-item label="标签规则" prop="rules">
        <div class="rule-name">{{ ruleForm.rules }}</div>
      </el-form-item>
      <el-form-item label="是否允许申诉" prop="allow_appeal">
        <el-radio-group v-model="ruleForm.allow_appeal">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
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
import {
  EXECUTIVE_PERFORMANCE_TYPE,
  CONFIRM,
  CANCEL,
  PLS_SELECT_START_TIME,
  MSG_FILL_GRADE_NAME,
  END_TIME_NOT_LESS_THAN_START_TIME
} from "@/constants/TEXT";
import {
  postAddPerformanceAssessment,
  putPerformanceAssessment,
  getPerformanceTypes,
  postTplDepartments,
  postTagDepartments
} from "@/constants/API";
import { formatTime } from "@/utils/timeFormat";
import { AsyncComp } from "@/utils/asyncCom";
const debounce = require("lodash.debounce");
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    infoType: {
      type: String,
      default: "add"
    },
    initTime: {
      type: Object,
      default: () => ({})
    },
    initData: {
      type: Object,
      default: () => ({})
    },
    performanceTypes: {
      type: Array,
      default: () => []
    },
    orgTree: {
      type: Array,
      default: () => []
    }
  },
  components: {
    "common-tree": AsyncComp(
      import("@/components/modules/seniorexecutive/CommonTree/index.vue")
    )
  },
  data() {
    const endTimeValidator = (rule, value, callback) => {
      if (!this.ruleForm.start_time) {
        callback(new Error(PLS_SELECT_START_TIME));
      } else if (!!value && value <= this.ruleForm.start_time) {
        callback(new Error(END_TIME_NOT_LESS_THAN_START_TIME));
      } else {
        callback();
      }
    };
    return {
      departmentIds: [],
      rules: {
        name: [
          { required: true, message: MSG_FILL_GRADE_NAME, trigger: "blur" }
        ],
        department_ids: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个业务单元/职能单元",
            trigger: "change"
          }
        ],
        year: [
          { required: true, message: "考核周期不能为空", trigger: "blur" }
        ],
        end_time: [{ validator: endTimeValidator, trigger: "change" }]
      },
      ruleForm: {
        name: "",
        department_ids: [],
        performance_type: "annual",
        year: "",
        start_time: this.initTime.start_time || "",
        end_time: this.initTime.end_time || "",
        tpl: "",
        rules: "",
        allow_appeal: 1
      },
      constants: {
        EXECUTIVE_PERFORMANCE_TYPE,
        CONFIRM,
        CANCEL,
        PLS_SELECT_START_TIME,
        MSG_FILL_GRADE_NAME,
        END_TIME_NOT_LESS_THAN_START_TIME
      }
    };
  },
  watch: {
    departmentIds: {
      handler: function(val, oldVal) {
        if (val.length > 0) {
          let postData = {
            department_ids: val
          };
          // 获取选中事业部的绩效模板和标签规则
          postTagDepartments(postData).then(res => {
            this.ruleForm.rules = res;
          });
          postTplDepartments(postData).then(res => {
            this.ruleForm.tpl = res;
          });
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    selectedOrg(data) {
      this.departmentIds = data;
      this.ruleForm.department_ids = data;
    },
    close() {
      this.$emit("close");
    },
    submit() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          if (this.infoType == "add") {
            return postAddPerformanceAssessment(this.ruleForm).then(res => {
              this.close();
            });
          } else {
            return putPerformanceAssessment(this.tplId, this.ruleForm).then(
              res => {
                this.close();
              }
            );
          }
        }
      });
    },
    calculateEndDate: debounce(function(date) {
      if (!this.ruleForm.end_time) {
        let dateObj = new Date(date.replace(/-/gi, "/"));
        switch (this.ruleForm.property) {
          case "1":
            dateObj.setFullYear(dateObj.getFullYear() + 1);
            dateObj = this.add7Days(dateObj);
            break;
          case "2":
            dateObj = this.addMonth(dateObj, 6);
            break;
          case "3":
            dateObj = this.addMonth(dateObj, 3);
            break;
          case "4":
            if (dateObj.getMonth() > 10) {
              dateObj.setFullYear(dateObj.getFullYear() + 1);
              dateObj.setMonth(0);
            } else {
              dateObj.setMonth(dateObj.getMonth() + 1);
            }
            break;
          case "5":
          case "6":
            return;
        }
        this.ruleForm.end_time = formatTime(dateObj);
      }
    }, 500)
  },
  beforeDestroy() {
    this.$refs["ruleForm"].resetFields();
  },
  created() {
    if (this.infoType != "add" && this.initData.id) {
      getTpl(this.initData.id).then(res => {
        const { labelName, department_id, type_id, template_columns } = res;
        // console.log(template_columns)
        this.ruleForm = {
          labelName,
          dp: department_id
        };
      });
    }
  },
  computed: {
    startPickerOptions() {
      return {
        disabledDate(date) {
          // 小于当前日期的disable
          const dt = formatTime(new Date(date));
          const now = formatTime(new Date()).split(" ")[0] + " 00:00";
          return dt < now;
        }
      };
    },
    endPickerOptions() {
      return {
        disabledDate: date => {
          const dt = formatTime(new Date(date));
          let now = formatTime(new Date()).split(" ")[0] + " 00:00";
          if (this.ruleForm.start_time) {
            // 小于开始时间的disable
            now = this.ruleForm.start_time;
          }
          // 默认小于当期日期
          return dt < now;
        }
      };
    }
  }
};
</script>
<style scoped>
.tpl-dialog .title {
  text-align: left;
}
.tpl-dialog >>> .el-dialog__header {
  border-bottom: 1px solid #e4e7ed;
}
.tpl-dialog >>> .el-form-item {
  margin-bottom: 22px;
}
.tpl-dialog >>> .el-form-item .el-input-group__prepend,
.tpl-dialog >>> .el-form-item .el-input-group__append {
  padding: 0 10px !important;
  background-color: #fff !important;
  border: none !important;
}
.tpl-dialog .rule-name {
  color: #52ddab;
}
</style>
