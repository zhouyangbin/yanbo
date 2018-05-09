<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row align="middle" type="flex" justify="space-between">
        <span>
          {{constants.GRADE_LIST}}
        </span>
        <el-button type="primary" @click="createGrade" round>{{constants.CREATE_GRADE}}</el-button>
      </el-row>

      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px;">
        <el-table-column prop="name" :label="constants.GRADE_NAME">
          <template slot-scope="scope">
            {{scope.row.name}}
            <span class="newTag" v-if="scope.row.index===0">
              NEW!
            </span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="department_names" :label="constants.BU">
          <template slot-scope="scope">
            <span slot="reference">
              {{(scope.row.department_names||[]).map(v=>v.department_name).join("、 ")}}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="end_time" :label="constants.FINISHED_DATE">
        </el-table-column>
        <el-table-column prop="create_at" :label="constants.CREATED_DATE">
        </el-table-column>
        <el-table-column prop="operation" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{constants.DETAILS}}</el-button>
            <el-button type="text" size="small">{{constants.EXPORT_DETAILS}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-row type="flex" justify="end">
        <pagination @current-change="handleCurrentChange" :total="total"></pagination>
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
        <el-form-item :label="constants.BU" prop="dep">
          <el-checkbox-group v-model="ruleForm.dep">
            <el-checkbox v-for="v of depList" :key="v.department_id" :label="v.department_id" name="dep"> {{v.name}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item :label="constants.FINISHED_DATE" prop="time">
          <el-date-picker value-format="yyyy-MM-dd HH:mm" style="width:400px;" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="ruleForm.time" type="datetime" placeholder="选择日期时间">
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
import { getDepList, postNewGrade, getGradeList } from "@/constants/API";

export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
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
      depList: [],
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
      tableData: []
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
    goDetail(row) {
      this.$router.push(PATH_GRADE_PROGRESS(row.id));
    },
    closeDia(formName) {
      this.createGradeDialog = false;
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const postData = {
            name: this.ruleForm.name,
            department_ids: this.ruleForm.dep,
            end_time: this.ruleForm.time
          };
          postNewGrade(postData).then(res => {
            this.createGradeDialog = false;
            this.refreshList(this.currentPage);
          });
        } else {
          return false;
        }
      });
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val;
      this.refreshList(val);
    },
    createGrade() {
      getDepList().then(res => {
        if (res) {
          this.depList = res;
          this.createGradeDialog = true;
        }
      });
    },
    refreshList(page) {
      getGradeList(page).then(res => {
        if (res) {
          // console.log(res)
          this.tableData = res.data.map((v, i) => ({ ...v, index: i }));
          this.total = res.total;
        }
      });
    }
  },
  created() {
    this.refreshList(this.currentPage);
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
