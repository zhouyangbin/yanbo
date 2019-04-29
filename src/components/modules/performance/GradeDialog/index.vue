
<template>
  <el-dialog @close="closeDia('ruleForm')" width="650px" :visible="visible">
    <span slot="title">
      <el-row
        type="flex"
        justify="center"
        class="dialog-title"
      >{{actionType == "copy"?constants.COPY_GRADE:constants.CREATE_GRADE}}</el-row>
    </span>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="create-form-dialog"
    >
      <el-form-item :label="constants.GRADE_NAME" prop="name">
        <el-input size="medium" :maxlength="20" style="width:400px;" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item
        class="is-required"
        v-if="actionType != 'copy'"
        :label="constants.LABEL_SCOPE"
        prop="scope"
      >
        <el-input
          style="width:400px;"
          :placeholder="constants.LABEL_SELECT_DIVISION"
          v-model="scopeSelectedNames"
          icon="caret-bottom"
          readonly="readonly"
          @click.native="showScopeTree = !showScopeTree"
        ></el-input>
      </el-form-item>
      <el-form-item label="绩效属性" prop="property">
        <el-select
          style="width:400px;"
          v-model="ruleForm.property"
          :placeholder="constants.PLS_SELECT"
        >
          <el-option
            v-for="item in constants.ENUM_PERFORMANCE_TYPE"
            :key="item.key"
            :label="item.value"
            :value="item.key"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="is-required" label="绩效周期" prop="endTime">
        <div>
          <el-date-picker
            @change="calculateEndDate"
            :disabled="ruleForm.property==''"
            :clearable="false"
            :picker-options="startPickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="ruleForm.startTime"
            type="datetime"
            placeholder="选择开始时间"
          ></el-date-picker>
          <span>&nbsp; 至 &nbsp;</span>
          <el-date-picker
            :disabled="ruleForm.property==''"
            :clearable="false"
            :picker-options="endPickerOptions"
            value-format="yyyy-MM-dd HH:mm"
            popper-class="date-picker-container"
            format="yyyy-MM-dd HH:mm"
            v-model="ruleForm.endTime"
            type="datetime"
            placeholder="选择结束时间"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item :label="constants.TPL" prop="tpl">
        <el-select style="width:400px;" v-model="ruleForm.tpl" :placeholder="constants.PLS_SELECT">
          <el-option v-for="item in tplOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分数对应关系" prop="mapping">
        <el-select
          style="width:400px;"
          v-model="ruleForm.mapping"
          :placeholder="constants.PLS_SELECT"
        >
          <el-option v-for="item in ruleArr" :key="item.id" :label="item.type" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <br>
      <el-form-item label-width="0px">
        <el-row type="flex" justify="center">
          <el-button round type="primary" @click="submitForm('ruleForm')">{{constants.CONFIRM}}</el-button>
          <el-button @click="closeDia('ruleForm')" round>{{constants.CANCEL}}</el-button>
        </el-row>
      </el-form-item>
    </el-form>
    <dp-panel
      :exclusive="true"
      v-if="showScopeTree"
      :checkedNodes.sync="checkedNodes"
      :visible.sync="showScopeTree"
      :data="departmentTree"
    ></dp-panel>
  </el-dialog>
</template>
<script>
import TreeSelectPanel from "@/components/common/TreeSelectPanel/index.vue";
import { formatTime } from "@/utils/timeFormat";
import {
  MSG_FILL_GRADE_NAME,
  PLS_SELECT_TPL,
  PLS_SELECT_MAPPING,
  COPY_GRADE,
  CREATE_GRADE,
  GRADE_NAME,
  LABEL_SCOPE,
  LABEL_SELECT_DIVISION,
  ENUM_PERFORMANCE_TYPE,
  PLS_SELECT,
  CANCEL,
  CONFIRM,
  PLS_SELECT_START_TIME,
  PLS_SELECT_SCOPE,
  END_TIME_NOT_LESS_THAN_START_TIME,
  TPL
} from "@/constants/TEXT";
import {
  getTplRuleByDep,
  postAddPerformanceGrade,
  postClonePerformanceGrade
} from "@/constants/API";

const debounce = require("lodash.debounce");

export default {
  props: {
    copyID: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    },
    actionType: {
      type: String,
      default: "add"
    },
    departmentTree: {
      type: Array,
      default: () => []
    },
    defaultChecked: {
      type: Array,
      default: () => []
    },
    initForm: {
      type: Object
    },
    initData: {
      type: Object
    }
  },
  components: {
    "dp-panel": TreeSelectPanel
  },
  data() {
    const endTimeValidator = (rule, value, callback) => {
      if (!this.ruleForm.startTime) {
        callback(new Error(PLS_SELECT_START_TIME));
      } else if (!!value && value <= this.ruleForm.startTime) {
        callback(new Error(END_TIME_NOT_LESS_THAN_START_TIME));
      } else {
        callback();
      }
    };

    const scopeValidator = (rule, value, callback) => {
      // console.log(value)
      if (this.checkedNodes.length == 0) {
        callback(new Error(PLS_SELECT_SCOPE));
      } else {
        callback();
      }
    };
    return {
      // form in dialog
      loading: true,
      showScopeTree: false,
      checkedNodes: this.defaultChecked,
      ruleForm: {
        name: "",
        property: "",
        tpl: "",
        mapping: "",
        startTime: "",
        endTime: ""
      },
      rules: {
        name: [
          { required: true, message: MSG_FILL_GRADE_NAME, trigger: "blur" }
        ],
        scope: [{ validator: scopeValidator, trigger: "change" }],
        property: [
          { required: true, message: "请选择绩效属性", trigger: "blur" }
        ],
        tpl: [{ required: true, message: PLS_SELECT_TPL, trigger: "blur" }],
        mapping: [
          { required: true, message: PLS_SELECT_MAPPING, trigger: "blur" }
        ],
        endTime: [{ validator: endTimeValidator, trigger: "change" }]
      },
      // select options
      ruleArr: this.initData.rulesArr || [],
      tplArr: [],
      tplOptions: this.initData.tplArr || [],
      constants: {
        COPY_GRADE,
        CREATE_GRADE,
        GRADE_NAME,
        LABEL_SCOPE,
        LABEL_SELECT_DIVISION,
        ENUM_PERFORMANCE_TYPE,
        PLS_SELECT,
        CANCEL,
        CONFIRM,
        TPL
      }
    };
  },
  methods: {
    closeDia(formName) {
      this.$refs[formName].resetFields();
      this.$emit("update:visible", false);
    },
    submitForm(formName) {
      if (this.tplOptions.length == 0) {
        this.$message({
          message: "当前事业部该绩效属性无模版，请联系总管理员!",
          type: "warning"
        });
        return;
      }
      if (this.ruleArr.length == 0) {
        this.$message({
          message: "当前事业部无分数对应规则，请联系总管理员!",
          type: "warning"
        });
        return;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          const {
            name,
            mapping,
            endTime,
            property,
            startTime,
            tpl
          } = this.ruleForm;
          const postData = {
            name,
            department_ids: this.checkedNodes.map(v => v.department_id),
            start_time: startTime,
            end_time: endTime,
            template_id: tpl,
            rule_id: mapping,
            type_id: property
          };
          if (this.actionType == "copy") {
            return postClonePerformanceGrade(this.copyID, postData)
              .then(res => {
                this.closeDia("ruleForm");
              })
              .catch(e => {});
          }
          return postAddPerformanceGrade(postData)
            .then(res => {
              this.closeDia("ruleForm");
            })
            .catch(e => {});
        } else {
          return false;
        }
      });
    },
    add7Days(dateObj) {
      return new Date(dateObj.getTime() + 60 * 1000 * 60 * 24 * 7);
    },
    addMonth(dateObj, num) {
      if (dateObj.getMonth() > 12 - num - 1) {
        dateObj.setFullYear(dateObj.getFullYear() + 1);
        dateObj.setMonth(dateObj.getMonth() - (12 - num));
      } else {
        dateObj.setMonth(dateObj.getMonth() + num);
      }
      return this.add7Days(dateObj);
    },
    calculateEndDate: debounce(function(date) {
      if (!this.ruleForm.endTime) {
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
        this.ruleForm.endTime = formatTime(dateObj);
      }
    }, 500),
    getTplList: debounce(function(ids) {
      getTplRuleByDep({
        department_ids: ids
      })
        .then(res => {
          // console.log(res)
          const { rules, templates } = res;
          this.ruleArr = rules;
          this.tplArr = templates;
          if (rules.length == 1) {
            this.ruleForm.mapping = rules[0].id;
          }
          this.loading = false;
        })
        .catch(e => {
          this.checkedNodes = [];
        });
    }, 500)
  },
  watch: {
    checkedNodes: {
      handler: function(v, o) {
        if (!this.loading) {
          this.ruleForm.tpl = "";
          this.ruleForm.mapping = "";
        }
        if (v.length > 0 && (v || []).join(",") != (o || []).join(",")) {
          this.getTplList(v.map(v => v.department_id));
        }
      },
      deep: true,
      immediate: true
    },
    tplArr: function(arr) {
      const filterArr = arr.filter(v => v.type_id == this.ruleForm.property);
      this.tplOptions = filterArr;
    },
    "ruleForm.property": {
      handler: function(f) {
        if (!this.loading) {
          this.ruleForm.tpl = "";
          const filterArr = this.tplArr.filter(
            v => v.type_id == this.ruleForm.property
          );
          this.tplOptions = filterArr;
        }
      },
      deep: true,
      immediate: true
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
          if (this.ruleForm.startTime) {
            // 小于开始时间的disable
            now = this.ruleForm.startTime;
          }
          // 默认小于当期日期
          return dt < now;
        }
      };
    },
    scopeSelectedNames() {
      return this.checkedNodes.map(v => v.name).join(", ");
    }
  },
  created() {
    this.ruleForm = { ...this.ruleForm, ...this.initForm };
  }
};
</script>
<style scoped>
</style>
