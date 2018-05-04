<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container dep-page">
      <div class="bg-white">
        <el-row type="flex" justify="space-between" class="header">
          <span>{{gradeInfo.name}}</span>
          <span class="tip">
            {{constants.FINISHED_DATE}} {{gradeInfo.finishedDate}}
          </span>
        </el-row>
        <hr>
        <div class="time-line-panel bg-white">
          <el-row type="flex" justify="space-between">
            <span class="dep-name">
              {{depInfo.name}}
            </span>
            <el-button @click="dialogTimes=true" size="mini" type="primary" round style="margin-right:20px">
              {{constants.SET_TIMES}}
            </el-button>
          </el-row>
          <br>
          <br>
          <el-row type="flex" justify="center">
            <el-col :span="20">
              <el-steps align-center :active="depInfo.step" finish-status="success">
                <el-step>
                  <template slot="title">
                    <el-button @click="dialogImport =true" size="mini" round type="primary">{{constants.IMPORT_RECORDS}}</el-button>
                  </template>
                </el-step>
                <el-step title="自评未开始"></el-step>
                <el-step title="上级评进行中"></el-step>
                <el-step title="隔级上级评未开始"></el-step>
                <el-step title="面谈未开始"></el-step>
              </el-steps>
            </el-col>
          </el-row>
        </div>
      </div>
      <br>
      <div class="bg-white">
        <el-row align="middle" class="action-bar" type="flex" justify="space-between">
          <span>
            {{constants.SELECTION_TIPS(10,selection.length)}}
          </span>
          <span>
            <el-button :disabled="selection.length===0" class="action-btn" icon="el-icon-download" type="medium">{{constants.EXPORT_DETAILS}}</el-button>
            <el-button @click="reminder" class="action-btn" icon="el-icon-bell" type="medium">{{constants.REMINDER}}</el-button>
            <el-button class="action-btn" icon="el-icon-plus" type="medium" @click="dialogInfo=true">{{constants.ADD}}</el-button>
            <el-button :disabled="selection.length===0" class="action-btn" icon="el-icon-delete" type="medium">{{constants.BATCH_DEL}}</el-button>
          </span>
        </el-row>
        <el-form :inline="true" :model="formFilter" ref="filter-form" class="filter-form">
          <el-form-item prop="number">
            <el-input v-model="formFilter.number" :placeholder="constants.NUMBER"></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="formFilter.name" :placeholder="constants.NAME"></el-input>
          </el-form-item>
          <el-form-item prop="leaderNum">
            <el-input v-model="formFilter.leaderNum" :placeholder="constants.LEADER_NUMBER"></el-input>
          </el-form-item>
          <el-form-item prop="leaderName">
            <el-input v-model="formFilter.leaderName" :placeholder="constants.LEADER_NAME"></el-input>
          </el-form-item>
          <el-form-item prop="upLeaderNum">
            <el-input v-model="formFilter.upLeaderNum" :placeholder="constants.PLUS_LEADER_NUMBER"></el-input>
          </el-form-item>
          <el-form-item prop="upLeaderName">
            <el-input v-model="formFilter.upLeaderName" :placeholder="constants.PLUS_LEADER_NAME"></el-input>
          </el-form-item>
          <el-form-item prop="selfEvaluation">
            <el-select v-model="formFilter.selfEvaluation" :placeholder="constants.SELF_EVALUATION_STATUS">
              <el-option v-for="v of constants.ENUM_GENERIC_COMPLETE_STATUS" :key="v.key" :label="v.value" :value="v.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="leaderEvaluation">
            <el-select v-model="formFilter.leaderEvaluation" :placeholder="constants.LEADER_EVALUATION_STATUS">
              <el-option v-for="v of constants.ENUM_GENERIC_COMPLETE_STATUS" :key="v.key" :label="v.value" :value="v.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="plusLeaderEvaluation">
            <el-select v-model="formFilter.plusLeaderEvaluation" :placeholder="constants.LEADER_PLUS_EVALUATION_STATUS">
              <el-option v-for="v of constants.ENUM_GENERIC_COMPLETE_STATUS" :key="v.key" :label="v.value" :value="v.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="result">
            <el-select v-model="formFilter.result" :placeholder="constants.RESULT_CONFIRM">
              <el-option v-for="v of constants.ENUM_WAIT_CONFIRM" :key="v.key" :label="v.value" :value="v.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button round size="medium" @click="resetFilter('filter-form')" class="btn-reset">{{constants.RESET}}</el-button>
          </el-form-item>
        </el-form>
        <el-table @selection-change="handleSelectionChange" ref="multipleTable" height="250" :data="tableData" stripe style="width: 100%">
          <el-table-column fixed="left" type="selection" width="55">
          </el-table-column>
          <el-table-column prop="date" :label="constants.NUMBER" width="80">
          </el-table-column>
          <el-table-column prop="name" :label="constants.NAME" width="100">
          </el-table-column>
          <el-table-column prop="address" :label="constants.BASE_OR_BU" width="100">
          </el-table-column>
          <el-table-column prop="address1" :label="constants.DEP_OR_SUB" width="100">
          </el-table-column>
          <el-table-column prop="address2" :label="constants.WORK_LEVEL" width="100">
          </el-table-column>
          <el-table-column prop="address3" :label="constants.EMAIL" width="100">
          </el-table-column>
          <el-table-column prop="address4" :label="constants.LEADER_NUMBER" width="80">
          </el-table-column>
          <el-table-column prop="address5" :label="constants.LEADER_NAME" width="100">
          </el-table-column>
          <el-table-column prop="address6" :label="constants.UP_LEVEL+constants.BASE_OR_BU" width="150">
          </el-table-column>
          <el-table-column prop="address7" :label="constants.UP_LEVEL+constants.EMAIL" width="100">
          </el-table-column>
          <el-table-column prop="address8" :label="constants.SELF_EVALUATION_STATUS" width="80">
          </el-table-column>
          <el-table-column prop="address9" :label="constants.LEADER_EVALUATION_STATUS" width="100">
          </el-table-column>
          <el-table-column prop="address10" :label="constants.PLUS_UP_LEVEL+constants.NUMBER" width="80">
          </el-table-column>
          <el-table-column prop="address11" :label="constants.PLUS_UP_LEVEL+constants.NAME" width="100">
          </el-table-column>
          <el-table-column prop="address12" :label="constants.PLUS_UP_LEVEL+constants.BASE_OR_BU" width="150">
          </el-table-column>
          <el-table-column prop="address13" :label="constants.PLUS_UP_LEVEL+constants.EMAIL" width="100">
          </el-table-column>
          <el-table-column prop="address14" :label="constants.FACE_FEEDBACK">
          </el-table-column>
          <el-table-column prop="address14" :label="constants.RESULT_CONFIRM">
          </el-table-column>
          <el-table-column fixed="right" :label="constants.OPERATIONS" width="150">
            <template slot-scope="scope">
              <el-button type="text" size="small">{{constants.MODIFY}}</el-button>
              <el-button type="text" @click="delInfo(scope.row)" size="small">{{constants.DEL}}</el-button>
              <el-button type="text" size="small">{{constants.DETAILS}}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <el-row type="flex" justify="end">
          <pagination @current-change="handleCurrentChange" :total="100"></pagination>
        </el-row>
        <br>
      </div>
    </section>

    <import-dialog @close="closeImportDia" v-if="dialogImport" :dialogImport="dialogImport" class="dialogImport"></import-dialog>
    <time-setting @close="closeTimeSettingDia" v-if="dialogTimes" :dialogTimes="dialogTimes"></time-setting>
    <info-dialog @close="closeInfoDia" v-if="dialogInfo" :infoType="infoType" :dialogInfo="dialogInfo"></info-dialog>
  </div>
</template>
<script>
import {
  GRADE_PROGRESS,
  GRADE_MANAGE,
  ORG_DETAIL,
  FINISHED_DATE,
  ENUM_GENERIC_COMPLETE_STATUS,
  SELF_EVALUATION_STATUS,
  LEADER_EVALUATION_STATUS,
  LEADER_PLUS_EVALUATION_STATUS,
  RESULT_CONFIRM,
  ENUM_WAIT_CONFIRM,
  SELECTION_TIPS,
  RESET,
  EXPORT_DETAILS,
  REMINDER,
  ADD,
  BATCH_DEL,
  NUMBER,
  NAME,
  LEADER_NUMBER,
  LEADER_NAME,
  PLUS_LEADER_NUMBER,
  PLUS_LEADER_NAME,
  BASE_OR_BU,
  DEP_OR_SUB,
  WORK_LEVEL,
  EMAIL,
  UP_LEVEL,
  PLUS_UP_LEVEL,
  FACE_FEEDBACK,
  OPERATIONS,
  MODIFY,
  DEL,
  DETAILS,
  SET_TIMES,
  IMPORT_RECORDS
} from "@/constants/TEXT";
import { PATH_GRADE_MANAGE, PATH_GRADE_PROGRESS } from "@/constants/URL";
import { AsyncComp } from "@/utils/asyncCom";
export default {
  data() {
    return {
      // 导入的弹框
      dialogImport: false,
      // 时间设置弹框
      dialogTimes: false,
      // 员工信息弹框
      dialogInfo: false,

      // 添加为add,修改为modify,根据type不同改变title和赋值还有请求
      infoType: "add",

      // 评测信息
      gradeInfo: {
        name: "评测的名字这里",
        finishedDate: new Date()
      },
      // 事业部信息
      depInfo: {
        name: "是业务的的等部门的名字",
        step: 2
      },
      // 选择集合
      selection: [],
      // 搜索项form
      formFilter: {
        number: "",
        name: "",
        leaderNum: "",
        leaderName: "",
        upLeaderNum: "",
        upLeaderName: "",
        selfEvaluation: "",
        leaderEvaluation: "",
        plusLeaderEvaluation: "",
        result: ""
      },
      constants: {
        FINISHED_DATE,
        ENUM_GENERIC_COMPLETE_STATUS,
        SELF_EVALUATION_STATUS,
        LEADER_EVALUATION_STATUS,
        LEADER_PLUS_EVALUATION_STATUS,
        RESULT_CONFIRM,
        ENUM_WAIT_CONFIRM,
        SELECTION_TIPS,
        RESET,
        OPERATIONS,
        EXPORT_DETAILS,
        REMINDER,
        ADD,
        BATCH_DEL,
        NUMBER,
        NAME,
        LEADER_NUMBER,
        LEADER_NAME,
        PLUS_LEADER_NUMBER,
        PLUS_LEADER_NAME,
        BASE_OR_BU,
        DEP_OR_SUB,
        EMAIL,
        UP_LEVEL,
        PLUS_UP_LEVEL,
        FACE_FEEDBACK,
        MODIFY,
        DEL,
        DETAILS,
        SET_TIMES,
        IMPORT_RECORDS,
        WORK_LEVEL
      },
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
      ],
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_GRADE_MANAGE
        },
        {
          label: GRADE_PROGRESS,
          href: PATH_GRADE_PROGRESS(this.$route.params.id)
        },
        {
          label: ORG_DETAIL,
          active: true
        }
      ]
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    "import-dialog": AsyncComp(
      import("@/components/modules/grademanage/progress/org/import/Dialog.vue")
    ),
    "time-setting": AsyncComp(
      import("@/components/modules/grademanage/progress/org/settings/TimeDialog.vue")
    ),
    "info-dialog": AsyncComp(
      import("@/components/modules/grademanage/progress/org/info/Dialog.vue")
    )
  },
  methods: {
    resetFilter(formName) {
      this.$refs[formName].resetFields();
    },
    // 选择列表项
    handleSelectionChange(arr) {
      this.selection = arr;
    },
    // 翻页
    handleCurrentChange(val) {
      // TODO:翻页
      console.log(`当前页: ${val}`);
    },
    closeImportDia() {
      this.dialogImport = false;
    },
    closeTimeSettingDia() {
      this.dialogTimes = false;
    },
    closeInfoDia() {
      this.dialogInfo = false;
    },
    // 发出提醒
    reminder() {
      let msg = "是否要发出提醒?";
      console.log(this.selection.length);
      if (this.selection.length == 0) {
        msg = "是否提醒全部?";
      }
      this.$confirm(msg, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "提醒成功!"
          });
        })
        .catch(() => {});
    },
    // 删除某条记录
    delInfo(row) {
      this.$confirm("确定删除此用户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
.dep-page {
  padding: 20px;
}
.bg-white {
  background-color: white;
}
.header {
  padding: 20px;
}
.tip {
  font-size: 10px;
  color: #afafaf;
}
hr {
  border: 0;
  border-top: 1px solid #eee;
}
.time-line-panel {
  padding: 20px 0 40px;
}
.time-line-panel >>> .el-step__icon {
  width: 34px;
  height: 34px;
  background-color: #ececec;
  color: #d5d5d5;
  border: 2px solid #ececec;
}
.time-line-panel >>> .is-success .el-step__icon {
  color: white;
  background-color: #52ddab;
  border-color: #52ddab;
}
.time-line-panel >>> .el-step.is-horizontal .el-step__line {
  top: 15px;
}
.time-line-panel >>> .el-step .el-step__title {
  font-size: 14px;
  margin-top: 10px;
}
.time-line-panel >>> .el-step__head.is-success {
  color: #52ddab;
  border-color: #52ddab;
}
.time-line-panel >>> .el-step__title.is-success {
  color: #52ddab;
}
.dep-name {
  padding: 8px 20px;
  background-color: #fff4f4;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.action-bar {
  padding: 10px;
}

.action-btn:not(.is-disabled) {
  color: #52ddab;
  border: none;
}
.el-button.is-disabled {
  border: none;
}
.filter-form {
  padding: 20px;
  background-color: #f8f8f8;
}
.btn-reset {
  color: #09c981;
  border-color: #09c981;
}
</style>
