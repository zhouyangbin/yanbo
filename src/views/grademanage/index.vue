<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row align="middle" type="flex" justify="space-between">
        <span>
          {{constants.GRADE_LIST}}
        </span>
        <el-button type="primary" @click="createGradeDialog=true" round>{{constants.CREATE_GRADE}}</el-button>
      </el-row>

      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px;">
        <el-table-column prop="date" :label="constants.GRADE_NAME" width="180">
        </el-table-column>
        <el-table-column prop="name" :label="constants.BU" width="180">
        </el-table-column>
        <el-table-column prop="address" :label="constants.FINISHED_DATE">
        </el-table-column>
        <el-table-column prop="address1" :label="constants.CREATED_DATE">
        </el-table-column>
        <el-table-column prop="address2" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
            <el-button type="text" size="small">{{constants.EXPORT_DETAILS}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-row type="flex" justify="end">
        <pagination @current-change="handleCurrentChange" :total="100"></pagination>
      </el-row>
    </section>
    <el-dialog width="30%" :visible.sync="createGradeDialog">
      <span slot="title">
        <el-row type="flex" justify="center" class="dialog-title">
          {{constants.CREATE_GRADE}}
        </el-row>
      </span>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="create-form-dialog">
        <el-form-item :label="constants.GRADE_NAME" prop="name">
          <el-input size="medium" :maxlength="20" style="width:250px;" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item :label="constants.BU" prop="dep">
          <el-checkbox-group v-model="ruleForm.dep">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item :label="constants.FINISHED_DATE" prop="time">
          <el-date-picker style="width:250px;" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="ruleForm.time" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
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
  GRADE_LIST,
  CREATE_GRADE,
  GRADE_NAME,
  CREATED_DATE,
  BU,
  FINISHED_DATE,
  OPERATIONS,
  DETAILS,
  EXPORT_DETAILS,
  CANCEL,
  CONFIRM,
  MSG_FILL_GRADE_NAME,
  MSG_SELECT_BU,
  MSG_SELECT_FINISHED_DATE
} from "@/constants/TEXT";
import { PATH_GRADE_PROGRESS } from "@/constants/URL";
export default {
  data() {
    return {
      constants: {
        GRADE_LIST,
        CREATE_GRADE,
        GRADE_NAME,
        BU,
        FINISHED_DATE,
        CREATED_DATE,
        OPERATIONS,
        DETAILS,
        EXPORT_DETAILS,
        CANCEL,
        CONFIRM
      },
      createGradeDialog: false,
      ruleForm: {
        name: "",
        dep: [],
        time: ""
      },
      rules: {
        name: [
          { required: true, message: MSG_FILL_GRADE_NAME, trigger: "blur" }
        ],
        dep: [
          {
            type: "array",
            required: true,
            message: MSG_SELECT_BU,
            trigger: "change"
          }
        ],
        time: [
          { required: true, message: MSG_SELECT_FINISHED_DATE, trigger: "blur" }
        ]
      },
      nav: [
        {
          label: GRADE_MANAGE,
          active: true
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    goDetail(row) {
      this.$router.push(PATH_GRADE_PROGRESS("123"));
    },
    closeDia(formName) {
      this.createGradeDialog = false;
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
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
</style>
