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
            <el-button :disabled="total==0" @click="dialogTimes=true" size="mini" type="primary" round style="margin-right:20px">
              {{hasSchedule?constants.MODIFY_TIMES:constants.SET_TIMES}}
            </el-button>
          </el-row>
          <br>
          <br>
          <el-row type="flex" justify="center">
            <el-col :span="20">
              <el-steps align-center :active="step" finish-status="success">
                <el-step>
                  <template slot="title">
                    <el-button @click="dialogImport =true" :disabled="!canbeImport" size="mini" round type="primary">{{constants.IMPORT_RECORDS}}</el-button>
                  </template>
                </el-step>
                <el-step>
                  <template slot="title">
                    自评{{(constants.ENUM_SELF_EVALUATION_STATUS.filter(v=>v.key===String(depInfo.self_status))[0]||{}).value}}
                    <span v-if="depInfo.self_status>0">({{depInfo.self}}/{{depInfo.count}})</span>
                    <div v-if="gradeInfo.self_start_time">{{gradeInfo.self_start_time}} - {{gradeInfo.self_end_time}}</div>
                  </template>
                </el-step>
                <el-step>
                  <template slot="title">
                    上级评{{(constants.ENUM_LEADER_EVALUATION_STATUS.filter(v=>v.key===String(depInfo.superior_status))[0]||{}).value}}
                    <span v-if="depInfo.superior_status>0">({{depInfo.superior}}/{{depInfo.count}})</span>
                    <div v-if="gradeInfo.superior_start_time">{{gradeInfo.superior_start_time}} - {{gradeInfo.superior_end_time}}</div>
                  </template>
                </el-step>
                <el-step>
                  <template slot="title">
                    隔级上级评{{(constants.ENUM_LEADER_PLUS_EVALUATION_STATUS.filter(v=>v.key===String(depInfo.highlevel_status))[0]||{}).value}}
                    <span v-if="depInfo.highlevel_status>0">({{(depInfo.highlevel-depInfo.refuse)}}/{{depInfo.count}})</span>
                    <div v-if="gradeInfo.highlevel_start_time">{{gradeInfo.highlevel_start_time}} - {{gradeInfo.highlevel_end_time}}</div>
                  </template>
                </el-step>
                <el-step title="未开始">
                  <template slot="title">
                    面谈{{(constants.ENUM_FACE_EVALUATION_STATUS.filter(v=>v.key===String(depInfo.feedback_status))[0]||{}).value}}
                  </template>
                </el-step>
              </el-steps>
            </el-col>
          </el-row>
        </div>
      </div>
      <br>
      <div class="bg-white">
        <el-row align="middle" class="action-bar" type="flex" justify="space-between">
          <span>
            {{constants.SELECTION_TIPS(total,selection.length)}}
          </span>
          <span>
            <el-button @click="exportData" :disabled="selection.length===0" class="action-btn" icon="el-icon-download" type="medium">{{constants.EXPORT_DETAILS}}</el-button>
            <el-button @click="reminder" :disabled="!canbeReminder" class="action-btn" icon="el-icon-bell" type="medium">{{constants.REMINDER}}</el-button>
            <el-button class="action-btn" :disabled="!canbeEdit" icon="el-icon-plus" type="medium" @click="infoType='add';dialogInfo=true;currentInfo={}">{{constants.ADD}}</el-button>
            <el-button @click="batchDel" :disabled="selection.length===0||!canbeEdit" class="action-btn" icon="el-icon-delete" type="medium">{{constants.BATCH_DEL}}</el-button>
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
        <el-table @selection-change="handleSelectionChange" ref="multipleTable" height="400" :data="tableData" stripe style="width: 100%">
          <el-table-column fixed="left" type="selection" width="55">
          </el-table-column>
          <el-table-column prop="workcode" :label="constants.NUMBER" width="80">
          </el-table-column>
          <el-table-column prop="name" :label="constants.NAME" width="100">
          </el-table-column>
          <el-table-column prop="department" :label="constants.BASE_OR_BU" width="100">
          </el-table-column>
          <el-table-column prop="first_department" :label="constants.DEP_OR_SUB" width="200">
          </el-table-column>
          <el-table-column prop="level" :label="constants.WORK_LEVEL" width="100">
          </el-table-column>
          <el-table-column prop="email" :label="constants.EMAIL" width="180">
          </el-table-column>
          <el-table-column prop="superior_workcode" :label="constants.LEADER_NUMBER" width="80">
          </el-table-column>
          <el-table-column prop="superior_name" :label="constants.LEADER_NAME" width="100">
          </el-table-column>
          <el-table-column prop="superior_department" :label="constants.UP_LEVEL+constants.BASE_OR_BU" width="150">
          </el-table-column>
          <el-table-column prop="superior_email" :label="constants.UP_LEVEL+constants.EMAIL" width="150">
          </el-table-column>
          <el-table-column prop="highlevel_workcode" :label="constants.PLUS_UP_LEVEL+constants.NUMBER" width="80">
          </el-table-column>
          <el-table-column prop="highlevel_name" :label="constants.PLUS_UP_LEVEL+constants.NAME" width="100">
          </el-table-column>
          <el-table-column prop="highlevel_department" :label="constants.PLUS_UP_LEVEL+constants.BASE_OR_BU" width="150">
          </el-table-column>
          <el-table-column prop="highlevel_email" :label="constants.PLUS_UP_LEVEL+constants.EMAIL" width="150">
          </el-table-column>
          <el-table-column prop="_271_level" label="271等级" width="150">
          </el-table-column>
          <el-table-column prop="self_status" :label="constants.SELF_EVALUATION_STATUS" width="80">
            <template slot-scope="scope">
              {{(constants.ENUM_SELF_EVALUATION_STATUS.filter(v=>v.key===String(scope.row.self_status))[0]||{}).value}}
            </template>
          </el-table-column>
          <el-table-column prop="superior_status" :label="constants.LEADER_EVALUATION_STATUS" width="100">
            <template slot-scope="scope">
              {{(constants.ENUM_LEADER_EVALUATION_STATUS.filter(v=>v.key===String(scope.row.superior_status))[0]||{}).value}}
            </template>
          </el-table-column>
          <el-table-column prop="highlevel_status" :label="constants.LEADER_PLUS_EVALUATION_STATUS" width="120">
            <template slot-scope="scope">
              {{(constants.ENUM_LEADER_EVALUATION_STATUS.filter(v=>v.key===String(scope.row.highlevel_status))[0]||{}).value}}
            </template>
          </el-table-column>
          <el-table-column prop="feedback_status" :label="constants.FACE_FEEDBACK">
            <template slot-scope="scope">
              {{(constants.ENUM_FACE_EVALUATION_STATUS.filter(v=>v.key===String(scope.row.feedback_status))[0]||{}).value}}
            </template>
          </el-table-column>
          <el-table-column prop="feedback_is_agree" :label="constants.RESULT_CONFIRM">
            <template slot-scope="scope">
              {{(constants.ENUM_WAIT_CONFIRM.filter(v=>v.key===String(scope.row.feedback_is_agree))[0]||{}).value}}
            </template>
          </el-table-column>
          <el-table-column fixed="right" :label="constants.OPERATIONS" width="150">
            <template slot-scope="scope">
              <el-button v-if="canbeEdit" @click="modifyInfo(scope.row)" type="text" size="small">{{constants.MODIFY}}</el-button>
              <el-button v-if="canbeEdit" type="text" @click="delInfo(scope.row)" size="small">{{constants.DEL}}</el-button>
              <el-button @click="$router.push(constants.PATH_GRADE_EMP_DETAIL($route.params.id,$route.params.orgID,scope.row.id))" type="text" size="small">{{constants.DETAILS}}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <el-row type="flex" justify="end">
          <pagination @current-change="handleCurrentChange" :total="total"></pagination>
        </el-row>
        <br>
      </div>
    </section>

    <import-dialog @close="closeImportDia" v-if="dialogImport" :dialogImport="dialogImport" class="dialogImport"></import-dialog>
    <time-setting :timeData="timeData" :status="status" @close="closeTimeSettingDia" v-if="dialogTimes" :dialogTimes="dialogTimes"></time-setting>
    <info-dialog :currentInfo="currentInfo" @close="closeInfoDia" v-if="dialogInfo" :infoType="infoType" :dialogInfo="dialogInfo"></info-dialog>
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
  IMPORT_RECORDS,
  ENUM_SELF_EVALUATION_STATUS,
  ENUM_LEADER_EVALUATION_STATUS,
  ENUM_FACE_EVALUATION_STATUS,
  ENUM_LEADER_PLUS_EVALUATION_STATUS,
  MODIFY_TIMES,
  CONFIRM,
  CANCEL
} from "@/constants/TEXT";
import {
  PATH_GRADE_EMP_DETAIL,
  PATH_EXPORT_USERS_GRADE
} from "@/constants/URL";
import { PATH_GRADE_MANAGE, PATH_GRADE_PROGRESS } from "@/constants/URL";
import { AsyncComp } from "@/utils/asyncCom";
import { delUser, getUserList, postReminder } from "@/constants/API";
import { defaultCoreCipherList } from "constants";
import { compact } from "@/utils/obj";

export default {
  data() {
    return {
      currentPage: 1,
      stage: 10,
      //导入状态
      import_status: 0,
      total: 0,
      // info框内的数据
      currentInfo: {},
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
        name: "",
        finishedDate: "",
        self_start_time: "",
        self_end_time: "",
        superior_start_time: "",
        superior_end_time: "",
        highlevel_start_time: "",
        highlevel_end_time: "",
        feedback_start_time: "",
        feedback_end_time: "",
        checked_271: 0
      },
      // 事业部信息
      depInfo: {
        name: "",
        self_status: 0,
        superior_status: 0,
        highlevel_status: 0,
        feedback_status: 0,
        count: "",
        self: "",
        superior: "",
        highlevel: "",
        refuse: ""
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
        WORK_LEVEL,
        ENUM_SELF_EVALUATION_STATUS,
        ENUM_LEADER_EVALUATION_STATUS,
        ENUM_FACE_EVALUATION_STATUS,
        ENUM_LEADER_PLUS_EVALUATION_STATUS,
        MODIFY_TIMES,
        PATH_GRADE_EMP_DETAIL
      },
      tableData: [],
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
    exportData() {
      const url = PATH_EXPORT_USERS_GRADE(this.selection.map(v => v.id));
      window.open(url, "_blank");
      // window.location.href = url
    },
    batchDel() {
      // 批量删除
      delUser({ evaluation_user_ids: this.selection.map(v => v.id) })
        .then(res => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.refreshList();
        })
        .catch(() => {});
    },
    // 选择列表项
    handleSelectionChange(arr) {
      this.selection = arr;
    },
    // 翻页
    handleCurrentChange(val) {
      this.currentPage = val;
      const postData = {
        page: val
      };
      this.refreshList(postData);
    },
    // 导入
    closeImportDia() {
      this.dialogImport = false;
      this.refreshList();
    },
    closeTimeSettingDia() {
      // 设置修改时间后需要刷新
      this.dialogTimes = false;
      this.refreshList();
    },
    closeInfoDia() {
      // 添加修改信息后
      this.dialogInfo = false;
      this.refreshList();
    },
    // 发出提醒
    reminder() {
      let msg = "是否要发出提醒?";
      // console.log(this.selection.length)
      if (this.selection.length == 0) {
        msg = "是否提醒全部?";
      }
      this.$confirm(msg, "提示", {
        confirmButtonText: CONFIRM,
        cancelButtonText: CANCEL,
        type: "warning",
        center: true
      })
        .then(() => {
          const postData = {};
          postData.evaluation_id = this.$route.params.orgID;
          if (this.selection.length != 0) {
            postData.ids = this.selection.map(v => v.id);
          }
          postReminder(postData)
            .then(res => {
              this.$message({
                type: "success",
                message: "提醒成功!"
              });
            })
            .catch(e => {});
        })
        .catch(() => {});
    },
    // 删除某条记录
    delInfo(row) {
      this.$confirm("确定删除此用户?", "提示", {
        confirmButtonText: CONFIRM,
        cancelButtonText: CANCEL,
        type: "warning",
        center: true
      })
        .then(() => {
          delUser({ evaluation_user_ids: [row.id] }).then(res => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.refreshList();
          });
        })
        .catch(() => {});
    },
    modifyInfo(row) {
      // console.log(row)
      // 修改某个人的信息
      this.infoType = "modify";
      this.currentInfo = row;
      this.dialogInfo = true;
    },
    // 拉取列表数据
    refreshList(data) {
      let postData = data || {};
      postData = {
        ...{
          name: this.formFilter.name,
          workcode: this.formFilter.number,
          superior_workcode: this.formFilter.leaderNum,
          superior_name: this.formFilter.leaderName,
          highlevel_workcode: this.formFilter.upLeaderNum,
          highlevel_name: this.formFilter.upLeaderName,
          self_status: this.formFilter.selfEvaluation,
          superior_status: this.formFilter.leaderEvaluation,
          highlevel_status: this.formFilter.plusLeaderEvaluation,
          feedback_is_agree: this.formFilter.result,
          page: this.currentPage,
          perPage: 20
        },
        ...postData
      };
      getUserList(this.$route.params.orgID, compact(postData))
        .then(res => {
          this.tableData = res.list.data;
          this.total = res.list.total;
          this.depInfo.name = res.info.department_name;
          this.depInfo.self_status = res.info.self_status;
          this.depInfo.superior_status = res.info.superior_status;
          this.depInfo.highlevel_status = res.info.highlevel_status;
          this.depInfo.feedback_status = res.info.feedback_status;
          this.depInfo.count = res.info.stat[0].count;
          this.depInfo.self = res.info.stat[0].self;
          this.depInfo.superior = res.info.stat[0].superior;
          this.depInfo.highlevel = res.info.stat[0].highlevel;
          this.depInfo.refuse = res.info.stat[0].refuse;
          this.gradeInfo.name = res.info.evaluation_name.evaluation_name;
          this.gradeInfo.finishedDate = res.info.evaluation_name.end_time;
          this.gradeInfo.self_start_time = res.info.self_start_time;
          this.gradeInfo.self_end_time = res.info.self_end_time;
          this.gradeInfo.superior_start_time = res.info.superior_start_time;
          this.gradeInfo.superior_end_time = res.info.superior_end_time;
          this.gradeInfo.highlevel_start_time = res.info.highlevel_start_time;
          this.gradeInfo.highlevel_end_time = res.info.highlevel_end_time;
          this.gradeInfo.feedback_start_time = res.info.feedback_start_time;
          this.gradeInfo.feedback_end_time = res.info.feedback_end_time;
          this.gradeInfo.checked_271 = res.info._271_is_necessary;
          this.stage = parseInt(res.info.stage);
          this.import_status = parseInt(res.info.import_status);
        })
        .catch(e => {});
    }
  },
  watch: {
    // 筛选watch
    formFilter: {
      handler: function(v) {
        const postData = {
          name: v.name,
          workcode: v.number,
          superior_workcode: v.leaderNum,
          superior_name: v.leaderName,
          highlevel_workcode: v.upLeaderNum,
          highlevel_name: v.upLeaderName,
          self_status: v.selfEvaluation,
          superior_status: v.leaderEvaluation,
          highlevel_status: v.plusLeaderEvaluation,
          feedback_is_agree: v.result
        };
        this.refreshList(postData);
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    canbeImport() {
      return !this.depInfo.self_status;
    },
    canbeReminder() {
      return (
        (this.stage == 30 && this.canbeEdit) ||
        (this.stage == 40 && this.depInfo.superior_status !== 2) ||
        (this.stage == 60 && this.depInfo.feedback_status !== 2)
      );
    },
    canbeEdit() {
      return this.depInfo.self_status != 2;
    },
    step() {
      // return 5
      let stage = this.stage;
      if (stage == 10 && this.import_status == 0) {
        return 0;
      }
      if (stage == 20 || stage == 30) {
        if (this.depInfo.self_status === 2) {
          return 2;
        }
        return 1;
      }
      if (stage == 40) {
        if (this.depInfo.superior_status === 2) {
          return 3;
        }
        return 2;
      }
      if (stage == 50) {
        if (this.depInfo.highlevel_status === 2) {
          return 4;
        }
        return 3;
      }
      if (stage == 60) {
        if (this.depInfo.feedback_status === 2) {
          return 5;
        }
        return 4;
      }
      if (stage == 70) {
        return 5;
      }
    },
    hasSchedule() {
      // 是否设置了时间
      return (
        this.gradeInfo.self_start_time &&
        this.gradeInfo.self_end_time &&
        this.gradeInfo.superior_start_time &&
        this.gradeInfo.superior_end_time &&
        this.gradeInfo.highlevel_start_time &&
        this.gradeInfo.highlevel_end_time &&
        this.gradeInfo.feedback_start_time &&
        this.gradeInfo.feedback_end_time
      );
    },
    status() {
      return {
        self_status: this.depInfo.self_status,
        superior_status: this.depInfo.superior_status,
        highlevel_status: this.depInfo.highlevel_status,
        feedback_status: this.depInfo.feedback_status
      };
    },
    timeData() {
      return {
        self_start_time: this.gradeInfo.self_start_time,
        self_end_time: this.gradeInfo.self_end_time,
        superior_start_time: this.gradeInfo.superior_start_time,
        superior_end_time: this.gradeInfo.superior_end_time,
        highlevel_start_time: this.gradeInfo.highlevel_start_time,
        highlevel_end_time: this.gradeInfo.highlevel_end_time,
        feedback_start_time: this.gradeInfo.feedback_start_time,
        feedback_end_time: this.gradeInfo.feedback_end_time,
        checked_271: this.gradeInfo.checked_271,
        finishedDate: this.gradeInfo.finishedDate
      };
    }
  }
};
</script>
<style scoped>
.dep-page {
  padding: 20px;
  /* height: calc(100% - 40px); */
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
