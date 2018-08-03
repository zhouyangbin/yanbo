<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row align="middle" type="flex" justify="space-between">
        <span>
          {{constants.PERFORMANCE_GRADE_LIST}}
        </span>
        <el-button type="primary" @click="createGrade" round>{{constants.CREATE_GRADE}}</el-button>
      </el-row>

      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
        <el-table-column prop="date" label="评分名称" width="180">
        </el-table-column>
        <el-table-column prop="name" label="部门" width="180">
        </el-table-column>
        <el-table-column prop="address" label="周期类型">
        </el-table-column>
        <el-table-column prop="address" label="截止时间">
        </el-table-column>
        <el-table-column prop="address" label="创建时间">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">{{constants.DETAILS}}</el-button>
            <el-button type="text" size="small">{{constants.EXPORT_DETAILS}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-row type="flex" justify="end">
        <pagination @current-change="handleCurrentChange" :currentPage="currentPage" :total="total"></pagination>
      </el-row>
    </section>
    <el-dialog @close="closeDia('ruleForm')" width="650px" :visible.sync="createGradeDialog">
      <span slot="title">
        <el-row type="flex" justify="center" class="dialog-title">
          {{constants.CREATE_GRADE}}
        </el-row>
      </span>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="create-form-dialog">
        <el-form-item :label="constants.GRADE_NAME" prop="name">
          <el-input size="medium" :maxlength="20" style="width:400px;" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="范围" prop="scope">
          <el-cascader :options="options" style="width:400px;" v-model="ruleForm.scope" change-on-select></el-cascader>
        </el-form-item>
        <el-form-item label="绩效属性" prop="property">
          <el-select style="width:400px;" v-model="ruleForm.property" placeholder="请选择">
            <el-option v-for="item in constants.ENUM_PERFORMANCE_TYPE" :key="item.key" :label="item.value" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="绩效周期" prop="endTime">
          <div>
            <el-date-picker @change="calculateEndDate" :disabled="ruleForm.property==''" :clearable="false" :picker-options="startPickerOptions" value-format="yyyy-MM-dd HH:mm" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="ruleForm.startTime" type="datetime" placeholder="选择开始时间">
            </el-date-picker>
            <span>&nbsp; 至 &nbsp; </span>
            <el-date-picker :disabled="ruleForm.property==''" :clearable="false" :picker-options="endPickerOptions" value-format="yyyy-MM-dd HH:mm" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="ruleForm.endTime" type="datetime" placeholder="选择结束时间">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="模板" prop="tpl">
          <el-select style="width:400px;" v-model="ruleForm.tpl" placeholder="请选择">
            <el-option v-for="item in propertyArr" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分数对应关系" prop="tpl">
          <el-select style="width:400px;" v-model="ruleForm.mapping" placeholder="请选择">
            <el-option v-for="item in propertyArr" :key="item.value" :label="item.label" :value="item.value">
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
  ENUM_PERFORMANCE_TYPE
} from "@/constants/TEXT";
import { formatTime } from "@/utils/timeFormat";
export default {
  data() {
    const endTimeValidator = (rule, value, callback) => {
      // console.log(value)
      if (!this.ruleForm.startTime) {
        callback(new Error("请先选择开始时间"));
      } else if (!!value && value <= this.ruleForm.startTime) {
        callback(new Error("结束时间不能小于开始时间"));
      } else {
        callback();
      }
    };
    return {
      createGradeDialog: false,
      constants: {
        PERFORMANCE_GRADE_LIST,
        CREATE_GRADE,
        GRADE_NAME,
        CONFIRM,
        CANCEL,
        DETAILS,
        EXPORT_DETAILS,
        ENUM_PERFORMANCE_TYPE
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
      ruleForm: {
        name: "",
        scope: [],
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
        scope: [{ required: true, message: "请选择评分范围", trigger: "blur" }],
        property: [
          { required: true, message: "请选择绩效属性", trigger: "blur" }
        ],
        tpl: [{ required: true, message: "请选择模板", trigger: "blur" }],
        mapping: [
          { required: true, message: "请选择对应关系", trigger: "blur" }
        ],
        endTime: [
          // {
          //   required: true,
          //   message: "请选择评分周期",
          //   trigger: "change"
          // },
          { validator: endTimeValidator, trigger: "change" }
        ]
      },
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        }
      ],
      propertyArr: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ]
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList(val);
    },
    refreshList(page) {},
    closeDia(formName) {
      this.createGradeDialog = false;
      this.ruleForm.startTime = "";
      this.$refs[formName].resetFields();
    },
    createGrade() {
      // TODO: get data for the dialog
      this.createGradeDialog = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // TODO: post data
        } else {
          return false;
        }
      });
    },
    calculateEndDate(date) {
      // FIXME: 根据属性 不同计算.当 结束时间没有值的时候
      if (!this.ruleForm.endTime) {
        this.ruleForm.endTime = formatTime(new Date(date));
      }
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
    }
  },
  created() {}
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
