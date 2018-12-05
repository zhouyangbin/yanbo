<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container dep-page">
      <div class="bg-white">
        <el-row
          type="flex"
          justify="space-between"
          class="header"
        >
          <span>{{depInfo.name}}</span>
          <span class="tip">
            {{constants.FINISHED_DATE}} {{depInfo.performance_name_end_time}}
          </span>
        </el-row>
        <hr>
        <div class="time-line-panel bg-white">
          <el-row
            type="flex"
            justify="space-between"
          >
            <span class="dep-name">
              {{depInfo.department_path}}
            </span>
            <el-button
              :disabled="!isImported"
              @click="dialogTimes =true"
              size="mini"
              type="primary"
              round
              style="margin-right:20px"
            >
              {{hasSchedule?constants.MODIFY_TIMES:constants.SET_TIMES}}
            </el-button>
          </el-row>
          <br>
          <br>
          <el-row
            type="flex"
            justify="center"
          >
            <el-col :span="20">
              <el-steps
                align-center
                :active="step"
              >
                <el-step>
                  <template slot="title">
                    <el-button
                      :disabled="isStarted"
                      @click="dialogImport =true"
                      size="mini"
                      round
                      type="primary"
                    >{{constants.IMPORT_RECORDS}}</el-button>
                  </template>
                </el-step>
                <el-step>
                  <template slot="title">
                    {{constants.LABEL_SELF}}
                    <span>({{depInfo.self_status}})</span>
                  </template>
                </el-step>
                <el-step>
                  <template slot="title">
                    {{constants.LABEL_SUP}}
                    <span>({{depInfo.superior_status}})</span>
                  </template>
                </el-step>
                <el-step>
                  <template slot="title">
                    {{constants.APPEAL}}
                    <span>({{depInfo.appeal_status}})</span>
                  </template>
                </el-step>
              </el-steps>
            </el-col>
          </el-row>
        </div>
      </div>
      <br>
      <div class="bg-white">
        <el-row
          align="middle"
          class="action-bar"
          type="flex"
          justify="space-between"
        >
          <span>
            {{constants.SELECTION_TIPS(total,selection.length)}}
          </span>
          <span>
            <el-button
              :disabled="afterEnd || tableData.length==0"
              @click="uploadTarget"
              class="action-btn"
              icon="el-icon-upload2"
              type="medium"
            >{{constants.UPLOAD_TARGET}}</el-button>
            <el-button
              @click="exportData"
              :disabled="selection.length===0"
              class="action-btn"
              icon="el-icon-download"
              type="medium"
            >{{constants.EXPORT_DETAILS}}</el-button>
            <el-button
              :disabled="!canReminder||afterEnd"
              @click="reminder"
              class="action-btn"
              icon="el-icon-bell"
              type="medium"
            >{{constants.REMINDER}}</el-button>
            <el-button
              class="action-btn"
              :disabled="afterEnd"
              icon="el-icon-plus"
              type="medium"
              @click="infoType='add';dialogInfo=true;currentInfo={}"
            >{{constants.ADD}}</el-button>
            <el-button
              @click="batchDel"
              :disabled="selection.length===0||afterEnd"
              class="action-btn"
              icon="el-icon-delete"
              type="medium"
            >{{constants.BATCH_DEL}}</el-button>
          </span>
        </el-row>
        <el-form
          :inline="true"
          :model="formFilter"
          ref="filter-form"
          class="filter-form"
        >
          <el-form-item prop="number">
            <el-input
              v-model="formFilter.number"
              :placeholder="constants.NUMBER"
            ></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input
              v-model="formFilter.name"
              :placeholder="constants.NAME"
            ></el-input>
          </el-form-item>
          <el-form-item prop="leaderNum">
            <el-input
              v-model="formFilter.leaderNum"
              :placeholder="constants.LEADER_NUMBER"
            ></el-input>
          </el-form-item>
          <el-form-item prop="leaderName">
            <el-input
              v-model="formFilter.leaderName"
              :placeholder="constants.LEADER_NAME"
            ></el-input>
          </el-form-item>
          <el-form-item prop="targetStatus">
            <el-select
              v-model="formFilter.targetStatus"
              placeholder="阶段"
            >
              <el-option
                v-for="v of constants.ENUM_PERFORMANCE_FINISH"
                :key="v.key"
                :label="v.value"
                :value="v.key"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button
              round
              size="medium"
              @click="resetFilter('filter-form')"
              class="btn-reset"
            >{{constants.RESET}}</el-button>
          </el-form-item>
        </el-form>
        <el-table
          @selection-change="handleSelectionChange"
          ref="multipleTable"
          height="400"
          :data="tableData"
          stripe
          style="width: 100%"
        >
          <el-table-column
            fixed="left"
            type="selection"
            width="55"
          >
          </el-table-column>
          <el-table-column
            prop="workcode"
            :label="constants.NUMBER"
            width="80"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            :label="constants.NAME"
            width="100"
          >
          </el-table-column>
          <el-table-column
            prop="department"
            :label="constants.BASE_OR_BU"
            width="100"
          >
          </el-table-column>
          <el-table-column
            prop="syb_department"
            :label="constants.DEP_OR_SUB"
            width="200"
          >
          </el-table-column>

          <el-table-column
            prop="email"
            :label="constants.EMAIL"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="superior_workcode"
            label="上级工号"
          >
          </el-table-column>
          <el-table-column
            prop="superior_name"
            label="上级姓名"
          >
          </el-table-column>
          <el-table-column
            prop="syb_department"
            label="上级事业部"
          >
          </el-table-column>
          <el-table-column
            prop="superior_email"
            label="上级邮箱"
          >
          </el-table-column>
          <el-table-column
            prop="target"
            :label="constants.TARGET_STATUS"
          >

          </el-table-column>
          <el-table-column
            prop="self"
            :label="constants.SELF_EVALUATION_STATUS"
          >

          </el-table-column>
          <el-table-column
            prop="superior"
            :label="constants.LEADER_EVALUATION_STATUS"
          >

          </el-table-column>

          <el-table-column
            prop="confirm"
            label="员工确认"
          >
          </el-table-column>
          <el-table-column
            fixed="right"
            :label="constants.OPERATIONS"
            width="150"
          >
            <template slot-scope="scope">
              <el-button
                :disabled="afterEnd"
                @click="modifyInfo(scope.row)"
                type="text"
                size="small"
              >{{constants.MODIFY}}</el-button>
              <el-button
                :disabled="afterEnd"
                type="text"
                @click="delInfo(scope.row)"
                size="small"
              >{{constants.DEL}}</el-button>
              <el-button
                @click="$router.push(constants.PATH_PERFORMANCE_USER_DETAIL($route.params.id,$route.params.orgID,scope.row.id))"
                type="text"
                size="small"
              >{{constants.DETAILS}}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <el-row
          type="flex"
          justify="end"
        >
          <pagination
            @current-change="handleCurrentChange"
            :currentPage="currentPage"
            :total="total"
          ></pagination>
        </el-row>
        <br>
      </div>
    </section>
    <target-dialog
      @close="dialogTarget=false"
      v-if="dialogTarget"
      :visible="dialogTarget"
    ></target-dialog>
    <import-dialog
      @close="closeImportDia"
      v-if="dialogImport"
      :dialogImport="dialogImport"
      class="dialogImport"
    ></import-dialog>
    <time-set
      v-if="dialogTimes"
      @close="closeTimeSettingDia"
      :initTime="initTime"
      :visible="dialogTimes"
    ></time-set>
    <info-dialog
      :currentInfo="currentInfo"
      @close="closeInfoDia"
      v-if="dialogInfo"
      :infoType="infoType"
      :dialogInfo="dialogInfo"
    ></info-dialog>
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
  BASE_OR_BU,
  DEP_OR_SUB,
  WORK_LEVEL,
  EMAIL,
  UP_LEVEL,
  OPERATIONS,
  MODIFY,
  DEL,
  DETAILS,
  SET_TIMES,
  IMPORT_RECORDS,
  MODIFY_TIMES,
  CONFIRM,
  CANCEL,
  ENUM_PERFORMANCE_FINISH,
  CONST_DELETE_SUCCESS,
  LABEL_USER_DEL_MSG,
  LABEL_SELF,
  LABEL_SUP,
  APPEAL,
  TARGET_STATUS,
  ATTENTION,
  UPLOAD_TARGET
} from "@/constants/TEXT";
import { PATH_PERFORMANCE_USER_DETAIL } from "@/constants/URL";
import {
  PATH_PERFORMANCE_MANAGER,
  PATH_PERFORMANCE_PROGRESS,
  PATH_EXPORT_PERFORMANCE_MEMBERS
} from "@/constants/URL";
import { AsyncComp } from "@/utils/asyncCom";
import {
  getPerormanceDepartmentDetails,
  delPerformanceUser,
  postPerformanceReminder
} from "@/constants/API";
import { formatTime } from "@/utils/timeFormat";

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
      dialogTarget: false,

      // 添加为add,修改为modify,根据type不同改变title和赋值还有请求
      infoType: "add",
      // 事业部信息
      depInfo: {},
      // 选择集合
      selection: [],
      // 搜索项form
      formFilter: {
        number: "",
        name: "",
        leaderNum: "",
        leaderName: "",
        targetStatus: ""
      },
      constants: {
        FINISHED_DATE,
        ENUM_GENERIC_COMPLETE_STATUS,
        ENUM_PERFORMANCE_FINISH,
        SELF_EVALUATION_STATUS,
        LEADER_EVALUATION_STATUS,
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
        BASE_OR_BU,
        DEP_OR_SUB,
        EMAIL,
        UP_LEVEL,
        PATH_PERFORMANCE_USER_DETAIL,
        MODIFY,
        DEL,
        DETAILS,
        SET_TIMES,
        IMPORT_RECORDS,
        WORK_LEVEL,
        MODIFY_TIMES,
        LABEL_SELF,
        LABEL_SUP,
        APPEAL,
        TARGET_STATUS,
        UPLOAD_TARGET
      },
      tableData: [],
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_PERFORMANCE_MANAGER
        },
        {
          label: GRADE_PROGRESS,
          href: PATH_PERFORMANCE_PROGRESS(this.$route.params.id)
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
      import("@/components/modules/performance/ImportDialog/index.vue")
    ),
    "info-dialog": AsyncComp(
      import("@/components/modules/performance/UserInfo/index.vue")
    ),
    "target-dialog": AsyncComp(
      import("@/components/modules/performance/ImportTarget/index.vue")
    ),
    "time-set": AsyncComp(
      import("@/components/modules/performance/TimeSet/index.vue")
    )
  },
  methods: {
    resetFilter(formName) {
      this.$refs[formName].resetFields();
    },
    uploadTarget() {
      this.dialogTarget = true;
    },
    exportData() {
      const url = PATH_EXPORT_PERFORMANCE_MEMBERS(
        this.$route.params.id,
        this.selection.map(v => v.id)
      );
      window.open(url, "_blank", "noopener");
      // window.location.href = url
    },
    batchDel() {
      // 批量删除
      this.$confirm("确定删除这些用户?", ATTENTION, {
        confirmButtonText: CONFIRM,
        cancelButtonText: CANCEL,
        type: "warning",
        center: true
      })
        .then(() => {
          delPerformanceUser(this.$route.params.orgID, {
            performance_user_ids: this.selection.map(v => v.id)
          }).then(res => {
            this.$message({
              type: "success",
              message: CONST_DELETE_SUCCESS
            });
            this.refreshList(this.getCurrentPostData());
          });
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
        ...this.getCurrentPostData(),
        page: val
      };
      this.refreshList(postData);
    },
    // 导入
    closeImportDia() {
      this.dialogImport = false;
      this.refreshList(this.getCurrentPostData());
    },
    closeTimeSettingDia() {
      // 设置修改时间后需要刷新
      this.dialogTimes = false;
      this.refreshList(this.getCurrentPostData());
    },
    closeInfoDia() {
      // 添加修改信息后
      this.dialogInfo = false;

      this.refreshList(this.getCurrentPostData());
    },
    // 发出提醒
    reminder() {
      let msg = "是否要发出提醒?";
      // console.log(this.selection.length)
      if (this.selection.length == 0) {
        msg = "是否提醒全部?";
      }
      this.$confirm(msg, ATTENTION, {
        confirmButtonText: CONFIRM,
        cancelButtonText: CANCEL,
        type: "warning",
        center: true
      })
        .then(() => {
          const postData = {};
          postData.performance_id = this.$route.params.orgID;
          if (this.selection.length != 0) {
            postData.performance_user_ids = this.selection.map(v => v.id);
          }
          postPerformanceReminder(postData)
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
      this.$confirm(LABEL_USER_DEL_MSG, ATTENTION, {
        confirmButtonText: CONFIRM,
        cancelButtonText: CANCEL,
        type: "warning",
        center: true
      })
        .then(() => {
          delPerformanceUser(this.$route.params.orgID, {
            performance_user_ids: [row.id]
          })
            .then(res => {
              this.$message({
                type: "success",
                message: CONST_DELETE_SUCCESS
              });
              this.refreshList(this.getCurrentPostData());
            })
            .catch(e => {});
        })
        .catch(() => {});
    },
    modifyInfo(row) {
      // 修改某个人的信息
      this.infoType = "modify";
      this.currentInfo = row;
      this.dialogInfo = true;
    },
    // 拉取列表数据
    refreshList(data) {
      return getPerormanceDepartmentDetails(this.$route.params.orgID, data)
        .then(res => {
          const { data, total, performance_info } = res;
          this.tableData = data;
          this.total = total;
          //  console.log(performance_info);
          this.depInfo = performance_info;
        })
        .catch(e => {});
    },
    getCurrentPostData() {
      return {
        page: this.currentPage,
        workcode: this.formFilter.number,
        name: this.formFilter.name,
        superior_workcode: this.formFilter.leaderNum,
        superior_name: this.formFilter.leaderName,
        stage: this.formFilter.targetStatus
        // self_status: this.formFilter.selfEvaluation,
        // superior_status: this.formFilter.leaderEvaluation,
        // confirm_status: this.formFilter.confirm
      };
    }
  },
  watch: {
    // 筛选watch
    formFilter: {
      handler: function(v) {
        const postData = {
          page: 1,
          workcode: v.number,
          name: v.name,
          superior_workcode: v.leaderNum,
          superior_name: v.leaderName,
          stage: v.targetStatus
          // self_status: v.selfEvaluation,
          // superior_status: v.leaderEvaluation,
          // confirm_status: v.confirm
        };
        this.currentPage = 1;
        this.refreshList(postData);
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    hasSchedule() {
      return this.depInfo.start_time && this.depInfo.end_time;
    },
    isImported() {
      return !!this.depInfo.user_status;
    },
    initTime() {
      return {
        startTime: this.depInfo.start_time,
        endTime: this.depInfo.end_time,
        targetStartTime: this.depInfo.target_start_time,
        targetEndTime: this.depInfo.target_end_time,
        finalEnd: this.depInfo.performance_name_end_time
      };
    },
    step() {
      return 4;
    },
    canReminder() {
      return this.isImported && this.isStarted;
    },
    isStarted() {
      return (
        this.initTime.targetStartTime &&
        formatTime(new Date(this.initTime.targetStartTime)) <=
          formatTime(new Date())
      );
    },
    afterEnd() {
      return (
        this.initTime.endTime &&
        formatTime(new Date(this.initTime.endTime)) <= formatTime(new Date())
      );
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
.time-line-panel >>> .el-step .el-step__title div {
  font-size: 12px;
  padding: 10px;
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
