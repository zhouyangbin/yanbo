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
        <el-input
          type="text"
          style="width:400px;line-height:38px"
          v-model="ruleForm.name"
          maxlength="20"
          show-word-limit
          ref="count"
        ></el-input>
      </el-form-item>
      <el-form-item label="适用范围">
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
      <el-form-item class="is-required" label="考核周期" prop="period_end_time">
        <div>
          <el-date-picker
            :clearable="false"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="ruleForm.period_start_time"
            type="datetime"
            placeholder="请选择"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :clearable="false"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="ruleForm.period_end_time"
            type="datetime"
            placeholder="请选择"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="绩效模板">
        <div v-for="item in ruleForm.templates" :key="item.id" class="rule-name tpl-name">
          <el-tooltip
              effect="dark"
              :content="item.name"
              placement="top"
            >
              <div class="bread-crumb-name">{{ item.name }}</div>
            </el-tooltip>
          <!-- <span v-for="item in ruleForm.templates" :key="item.id">{{
            item.name
          }}</span> -->
        </div>
      </el-form-item>
      <el-form-item label="标签规则">
        <div class="rule-name" v-if="ruleForm.tag">
          <span v-if="ruleForm.tag">{{ ruleForm.tag.tag_type }}</span>
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
        <el-button
          round
          size="medium"
          :disabled="disabledBtn"
          @click="submit"
          type="primary"
        >
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
  postExecutiveAddAssessment,
  putExecutiveAssessment,
  getExecutiveTplDepartments,
  getExecutiveTagDepartments,
  getExecutivePerformanceDetail
  // getExecutiveTagTplDepartments
} from "@/constants/API";
import { formatTime } from "@/utils/timeFormat";
import { AsyncComp } from "@/utils/asyncCom";
const debounce = require("lodash.debounce");
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
      if (!this.ruleForm.period_start_time) {
        callback(new Error(PLS_SELECT_START_TIME));
      } else if (!!value && value <= this.ruleForm.period_start_time) {
        callback(new Error(END_TIME_NOT_LESS_THAN_START_TIME));
      } else {
        callback();
      }
    };
    return {
      rules: {
        name: [
          { required: true, message: MSG_FILL_GRADE_NAME, trigger: "blur" },
          { max: 50, message: "考核名称最多不能超过50字", trigger: "blur" }
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
        period_end_time: [{ validator: endTimeValidator, trigger: "change" }]
      },
      ruleForm: {
        name: "",
        department_ids: [],
        performance_type: "annual",
        year: "",
        period_start_time: this.initTime.period_start_time || "",
        period_end_time: this.initTime.period_end_time || "",
        tag: {
          tag_type: ""
        },
        templates: [],
        allow_appeal: 1
      },
      tagType: [],
      performanceTpl: [],
      optionalOrgTree: [],
      optionalIds: [],
      disabledBtn: false,
      constants: {
        CONFIRM,
        CANCEL,
        PLS_SELECT_START_TIME,
        MSG_FILL_GRADE_NAME,
        END_TIME_NOT_LESS_THAN_START_TIME
      }
    };
  },
  created() {
    // getExecutiveTagTplDepartments().then(res => {
    // this.optionalIds = res;
    if (this.infoType != "add" && this.performanceId) {
      this.orgTree = this.disabledOrgTree(this.orgTree);
      getExecutivePerformanceDetail(this.performanceId)
        .then(res => {
          const {
            name,
            department_ids,
            performance_type,
            year,
            period_start_time,
            period_end_time,
            tag,
            templates,
            allow_appeal
          } = res;
          this.ruleForm = {
            name,
            department_ids,
            performance_type,
            year,
            period_start_time,
            period_end_time,
            templates,
            tag,
            allow_appeal
          };
        })
        .catch(e => {});
    } else {
      // this.orgTree = this.handleOrgTree(this.orgTree);
    }
    // });
  },
  methods: {
    selectedOrg: debounce(function(data) {
      if (data.length === 0) {
        this.ruleForm.templates = [];
        this.ruleForm.tag = {
          tag_type: ""
        };
        return false;
      }
      if (this.infoType !== "add") {
        return false;
      }
      this.ruleForm.department_ids = data;
      let getData = {
        department_ids: data
      };
      getExecutiveTagDepartments(getData)
        .then(res => {
          this.ruleForm.tag = res;
        })
        .catch(e => {});
      getExecutiveTplDepartments(getData)
        .then(res => {
          this.ruleForm.templates = res;
        })
        .catch(e => {});
    }, 500),
    close() {
      this.$emit("close");
    },
    submit() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          if (
            this.ruleForm.templates.length == 0 ||
            this.ruleForm.tag.tag_type === ""
          ) {
            this.$message({
              showClose: true,
              message: "请至少选择一个有效业务单元/职能单元!",
              type: "error"
            });
            return false;
          }
          this.disabledBtn = true;
          if (this.infoType == "add") {
            return postExecutiveAddAssessment(this.ruleForm).then(res => {
              this.$emit("update", res.id);
              this.disabledBtn = false;
            });
          } else {
            return putExecutiveAssessment(
              this.performanceId,
              this.ruleForm
            ).then(res => {
              this.$emit("update");
              this.disabledBtn = false;
            });
          }
        }
      });
    },
    handleOrgTree(arr) {
      for (var i in arr) {
        if ("object" === typeof arr[i]) {
          if (0 <= this.optionalIds.indexOf(arr[i].department_id)) {
            arr[i].disabled = false;
          } else {
            arr[i].disabled = true;
          }
          if (undefined !== arr[i].children) {
            this.handleOrgTree(arr[i].children);
          }
        }
      }
      return arr;
    },
    disabledOrgTree(arr) {
      for (var i in arr) {
        if ("object" === typeof arr[i]) {
          arr[i].disabled = true;
          if (undefined !== arr[i].children) {
            this.disabledOrgTree(arr[i].children);
          }
        }
      }
      return arr;
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
</style>
<style lang="scss" scoped>
.bread-crumb-name{
  float: left;
  max-width: 300px;
  height: 32px;
  line-height: 42px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tpl-dialog {
  .rule-name {
    color: #52ddab;
  }
  .tpl-name {
    span {
      margin-right: 8px;
      position: relative;
      &::after {
        content: "、";
        position: absolute;
        right: -14px;
        top: 50%;
        transform: translateY(-50%);
      }
      &:last-child {
        &::after {
          content: "";
        }
      }
    }
  }
}
</style>
