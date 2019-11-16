<template>
  <el-dialog
    :close-on-click-modal="false"
    @close="close"
    width="650px"
    :visible="visible"
    class="tpl-dialog"
  >
    <div slot="title" class="title">
      {{ infoType === "add" ? "创建组织部绩效考核" : "修改组织部绩效考核" }}
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
      <el-form-item label="考核年份" prop="year">
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
            :clearable="false"
            :picker-options="startPickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="ruleForm.start_time"
            type="datetime"
            placeholder="请选择"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :clearable="false"
            :picker-options="endPickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="ruleForm.end_time"
            type="datetime"
            placeholder="请选择"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="绩效模板">
        <div class="rule-name" v-for="item in ruleForm.tag" :key="item.id">
          {{ item.name }}
        </div>
      </el-form-item>
      <el-form-item label="标签规则">
        <div
          class="rule-name"
          v-for="item in ruleForm.templates"
          :key="item.id"
        >
          {{ item.tag_type }}
        </div>
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
  getTplDepartments,
  getTagDepartments,
  getPerformanceDetail
} from "@/constants/API";
import { formatTime } from "@/utils/timeFormat";
import { AsyncComp } from "@/utils/asyncCom";
export default {
  components: {
    "common-tree": AsyncComp(
      import("@/components/modules/seniorexecutive/CommonTree/index.vue")
    )
  },
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
    performanceId: {
      type: String,
      default: ""
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
      isWatch: true,
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
        tag: [],
        templates: [],
        allow_appeal: 1
      },
      tagType: [],
      performanceTpl: [],
      constants: {
        CONFIRM,
        CANCEL,
        PLS_SELECT_START_TIME,
        MSG_FILL_GRADE_NAME,
        END_TIME_NOT_LESS_THAN_START_TIME
      }
    };
  },
  computed: {
    startPickerOptions() {
      return {
        disabledDate: date => {
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
            now = this.ruleForm.start_time;
          }
          return dt < now;
        }
      };
    }
  },
  created() {
    if (this.infoType != "add" && this.performanceId) {
      // 获取弹框信息
      getPerformanceDetail(this.performanceId)
        .then(res => {
          this.isWatch = false;
          const {
            name,
            department_ids,
            performance_type,
            year,
            start_time,
            end_time,
            templates,
            allow_appeal
          } = res;
          this.ruleForm = {
            name,
            department_ids,
            performance_type,
            year,
            start_time,
            end_time,
            templates,
            allow_appeal
          };
        })
        .catch(e => {});
    }
  },
  methods: {
    selectedOrg(data) {
      console.log(data);
      this.ruleForm.department_ids = data;
      let getData = {
        department_ids: data
      };
      getTagDepartments(getData)
        .then(res => {
          this.ruleForm.tag = res;
        })
        .catch(e => {});
      getTplDepartments(getData)
        .then(res => {
          this.ruleForm.templates = res;
        })
        .catch(e => {});
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
            return putPerformanceAssessment(
              this.performanceId,
              this.ruleForm
            ).then(res => {
              this.close();
            });
          }
        }
      });
    }
  },
  beforeDestroy() {
    this.$refs["ruleForm"].resetFields();
  }
};
</script>
<style scoped>
.tpl-dialog >>> .el-dialog__header {
  border-bottom: 1px solid #e4e7ed;
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
