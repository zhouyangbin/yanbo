<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row align="middle" type="flex" justify="space-between">
        <div>
          <span>
            {{actionType == "copy"?"复制评分":constants.PERFORMANCE_GRADE_LIST}}
          </span>
          <!-- <el-select style="margin-left:30px" v-model="filterForm.dp" :placeholder="constants.LABEL_SELECT_DIVISION">
            <el-option v-for="item in dpArr" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select> -->
          <el-cascader v-model="filterForm.dp" :placeholder="constants.LABEL_SELECT_DIVISION" :props="filterProps" style="margin-left:30px" :options="dpArr" :show-all-levels="false"></el-cascader>
          <el-select style="margin-left:30px" v-model="filterForm.type" placeholder="请选择周期类型">
            <el-option v-for="item in constants.ENUM_PERFORMANCE_TYPE" :key="item.key" :label="item.value" :value="item.key">
            </el-option>
          </el-select>
          <el-button style="margin-left:30px" round @click="resetFilter">{{constants.LABEL_EMPTY}}</el-button>
        </div>
        <el-button type="primary" @click="createGrade" round>{{constants.CREATE_GRADE}}</el-button>
      </el-row>

      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
        <el-table-column prop="name" :label="constants.GRADE_NAME" width="180">
          <template slot-scope="scope">
            {{scope.row.name}}
            <span class="newTag" v-if="scope.row.index===0">
              NEW!
            </span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="department" :label="constants.DEPARTMENT" min-width="180">
        </el-table-column>
        <el-table-column prop="type" :label="constants.DURATION_TYPE">
        </el-table-column>
        <el-table-column prop="end_time" :label="constants.FINISHED_DATE">
        </el-table-column>
        <el-table-column prop="start_time" :label="constants.CREATED_DATE">
        </el-table-column>
        <el-table-column prop="address" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goSubList(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
            <el-button @click="gradeExport(scope.row)" type="text" size="small">{{constants.EXPORT_DETAILS}}</el-button>
            <el-button @click="copyGrade(scope.row)" type="text" size="small">{{constants.COPY_GRADE}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-row type="flex" justify="end">
        <pagination @current-change="handleCurrentChange" :currentPage="currentPage" :total="total"></pagination>
      </el-row>
    </section>
    <el-dialog v-if="createGradeDialog" @close="closeDia('ruleForm')" width="650px" :visible.sync="createGradeDialog">
      <span slot="title">
        <el-row type="flex" justify="center" class="dialog-title">
          {{constants.CREATE_GRADE}}
        </el-row>
      </span>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="create-form-dialog">
        <el-form-item :label="constants.GRADE_NAME" prop="name">
          <el-input size="medium" :maxlength="20" style="width:400px;" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item class="is-required" v-if="actionType != 'copy'" :label="constants.LABEL_SCOPE" prop="scope">
          <el-input style="width:400px" :placeholder="constants.LABEL_SELECT_DIVISION" v-model="scopeSelectedNames" icon="caret-bottom" readonly="readonly" @click.native="showScopeTree = !showScopeTree">
          </el-input>
        </el-form-item>
        <el-form-item label="绩效属性" prop="property">
          <el-select style="width:400px;" v-model="ruleForm.property" :placeholder="constants.PLS_SELECT">
            <el-option v-for="item in constants.ENUM_PERFORMANCE_TYPE" :key="item.key" :label="item.value" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="is-required" label="绩效周期" prop="endTime">
          <div>
            <el-date-picker @change="calculateEndDate" :disabled="ruleForm.property==''" :clearable="false" :picker-options="startPickerOptions" value-format="yyyy-MM-dd HH:mm" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="ruleForm.startTime" type="datetime" placeholder="选择开始时间">
            </el-date-picker>
            <span>&nbsp; 至 &nbsp; </span>
            <el-date-picker :disabled="ruleForm.property==''" :clearable="false" :picker-options="endPickerOptions" value-format="yyyy-MM-dd HH:mm" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="ruleForm.endTime" type="datetime" placeholder="选择结束时间">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item :label="constants.TPL" prop="tpl">
          <el-select style="width:400px;" v-model="ruleForm.tpl" :placeholder="constants.PLS_SELECT">
            <el-option v-for="item in tplOptions" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分数对应关系" prop="mapping">
          <el-select style="width:400px;" v-model="ruleForm.mapping" :placeholder="constants.PLS_SELECT">
            <el-option v-for="item in ruleArr" :key="item.id" :label="item.type" :value="item.id">
            </el-option>
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
      <dp-panel :exclusive="true" v-if="showScopeTree" :checkedNodes.sync="checkedNodes" :visible.sync="showScopeTree" :data="departmentTree"></dp-panel>
    </el-dialog>
  </div>
</template>
<script>
import {
  GRADE_MANAGE,
  PERFORMANCE_GRADE_LIST,
  CREATE_GRADE,
  MSG_FILL_GRADE_NAME,
  GRADE_NAME,
  CONFIRM,
  CANCEL,
  DETAILS,
  EXPORT_DETAILS,
  ENUM_PERFORMANCE_TYPE,
  LABEL_SELECT_DIVISION,
  DEPARTMENT,
  DURATION_TYPE,
  FINISHED_DATE,
  CREATED_DATE,
  OPERATIONS,
  LABEL_SCOPE,
  TPL,
  COPY_GRADE,
  PLS_SELECT_TPL,
  PLS_SELECT_SCOPE,
  PLS_SELECT_START_TIME,
  END_TIME_NOT_LESS_THAN_START_TIME,
  PLS_SELECT_MAPPING,
  PLS_SELECT,
  LABEL_EMPTY
} from "@/constants/TEXT";
import { formatTime } from "@/utils/timeFormat";
import TreeSelectPanel from "@/components/common/TreeSelectPanel/index.vue";
import {
  getOrgTree,
  getTplRuleByDep,
  postAddPerformanceGrade,
  getPerformanceList,
  postClonePerformanceGrade
} from "@/constants/API";
import {
  PATH_PERFORMANCE_PROGRESS,
  PATH_EXPORT_PERFORMANCE_GRADE
} from "@/constants/URL";
const debounce = require("lodash.debounce");
export default {
  data() {
    const endTimeValidator = (rule, value, callback) => {
      // console.log(value)
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
      // tree panel
      checkedNodes: [],
      showScopeTree: false,
      departmentTree: [],
      actionType: "",
      copyID: "",
      filterProps: {
        value: "id",
        label: "name",
        children: "children"
      },

      // filter form
      filterForm: {
        type: "",
        dp: []
      },
      createGradeDialog: false,
      constants: {
        PERFORMANCE_GRADE_LIST,
        CREATE_GRADE,
        GRADE_NAME,
        CONFIRM,
        CANCEL,
        DETAILS,
        EXPORT_DETAILS,
        ENUM_PERFORMANCE_TYPE,
        LABEL_SELECT_DIVISION,
        DEPARTMENT,
        DURATION_TYPE,
        FINISHED_DATE,
        CREATED_DATE,
        OPERATIONS,
        LABEL_SCOPE,
        TPL,
        COPY_GRADE,
        PLS_SELECT,
        LABEL_EMPTY
      },
      nav: [
        {
          label: GRADE_MANAGE,
          active: true
        }
      ],
      tableData: [],
      currentPage: 1,
      total: 0,
      // form in dialog
      ruleForm: {
        name: "",
        property: "",
        tpl: "",
        mapping: "",
        startTime: "",
        endTime: ""
      },
      // form validator
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
      ruleArr: [],
      tplArr: [],
      dpArr: [],
      tplOptions: []
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    "dp-panel": TreeSelectPanel
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList({
        page: val,
        department_id: this.selectedDep,
        type_id: this.filterForm.type
      });
    },
    refreshList(data) {
      return getPerformanceList(data).then(res => {
        // console.log(res)
        const { total, data } = res;
        this.total = total;
        // this.currentPage = 1
        this.tableData = data.map((v, i) => {
          v.index = i;
          return v;
        });
      });
    },
    closeDia(formName) {
      this.ruleForm = {
        name: "",
        property: "",
        tpl: "",
        mapping: "",
        startTime: "",
        endTime: ""
      };
      this.checkedNodes = [];
      this.tplOptions = [];
      this.ruleArr = [];
      this.tplArr = [];
      this.actionType = "";
      this.copyID = "";

      this.$refs[formName].resetFields();

      this.createGradeDialog = false;
      this.refreshList({
        page: this.currentPage,
        department_id: this.selectedDep,
        type_id: this.filterForm.type
      });
    },
    createGrade() {
      this.getOrgList(() => {
        this.createGradeDialog = true;
      });
    },
    copyGrade(row) {
      this.actionType = "copy";
      this.copyID = row.id;

      const id = row.template_id;
      this.ruleForm = {
        tpl: id,
        mapping: row.rule_id,
        name: "",
        property: row.type_id.toString(),
        startTime: "",
        endTime: ""
      };

      const depArr = row.department.split(",");
      this.checkedNodes = row.department_ids.map((id, i) => {
        return {
          department_id: id,
          name: depArr[i]
        };
      });
      this.createGrade();
    },
    gradeExport(row) {
      window.open(PATH_EXPORT_PERFORMANCE_GRADE(row.id), "_blank");
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
          // console.log(this.ruleForm)
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
              // console.log(res)
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
      dateObj = this.add7Days(dateObj);
    },
    calculateEndDate(date) {
      if (!this.ruleForm.endTime) {
        let dateObj = new Date(date);
        switch (this.ruleForm.property) {
          case "1":
            dateObj.setFullYear(dateObj.getFullYear() + 1);
            dateObj = this.add7Days(dateObj);
            break;
          case "2":
            this.addMonth(dateObj, 6);
            break;
          case "3":
            this.addMonth(dateObj, 3);
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
    },
    getOrgList(cb) {
      return getOrgTree()
        .then(res => {
          this.departmentTree = res;
          if (cb) {
            cb();
          }
        })
        .catch(e => {});
    },
    getTplList: debounce(function(ids) {
      getTplRuleByDep({
        department_ids: ids
      })
        .then(res => {
          // console.log(res)
          const { rules, templates } = res;
          this.ruleArr = rules;
          this.tplArr = templates;
        })
        .catch(e => {
          this.checkedNodes = [];
        });
    }, 500),
    getDepartments() {
      return getOrgTree()
        .then(res => {
          this.dpArr = res;
        })
        .catch(err => {});
    },
    goSubList(row) {
      this.$router.push(PATH_PERFORMANCE_PROGRESS(row.id));
    },
    resetFilter() {
      this.filterForm = {
        type: "",
        dp: []
      };
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
    },

    selectedDep() {
      return this.filterForm.dp.length > 0
        ? this.filterForm.dp[this.filterForm.dp.length - 1]
        : "";
    }
  },
  watch: {
    checkedNodes: {
      handler: function(v, o) {
        if (v.length > 0 && v.join(",") != o.join(",")) {
          this.getTplList(v.map(v => v.department_id));
        }
      },
      deep: true
    },
    filterForm: {
      handler: function(v) {
        const filterData = {
          page: 1,
          department_id: v.dp.length > 0 ? v.dp[v.dp.length - 1] : "",
          type_id: v.type
        };
        this.currentPage = 1;
        this.refreshList(filterData);
      },
      deep: true,
      immediate: true
    },
    tplArr: function(arr) {
      const filterArr = arr.filter(v => v.type_id == this.ruleForm.property);
      this.tplOptions = filterArr;
      if (filterArr.length == 0) {
        // console.log("will clear in tplArr")
        this.ruleForm.tpl = "";
      }
    },
    ruleForm: {
      handler: function(f) {
        const filterArr = this.tplArr.filter(
          v => v.type_id == this.ruleForm.property
        );
        this.tplOptions = filterArr;
        if (filterArr.length == 0 && this.tplArr.length != 0) {
          // console.log(filterArr, this.tplArr, "will clear in ruleForm")
          this.ruleForm.tpl = "";
        }

        if (
          filterArr.length > 0 &&
          filterArr.filter(v => v.id == this.ruleForm.tpl).length == 0
        ) {
          this.ruleForm.tpl = "";
        }
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.getDepartments();
  }
};
</script>
<style scoped>
.dialog-title {
  font-weight: 700;
}
.create-form-dialog {
  padding: 15px;
}
.create-form-dialog >>> .el-form-item__label {
  font-size: 13px;
  color: gray;
}
.create-form-dialog >>> .el-checkbox__label {
  font-size: 13px;
  color: gray;
}

.create-form-dialog >>> .el-checkbox-group,
.create-form-dialog >>> .el-checkbox-group + .el-checkbox {
  margin-left: -30px !important;
}
.newTag {
  color: rgb(62, 170, 255);
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
}
</style>
