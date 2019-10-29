<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <div class="progress-header">
        <span>{{ gradeName }}</span
        >&nbsp;
        <span class="tips"
          >{{ constants.FINISHED_DATE }} {{ finishedDate }}</span
        >
        <hr />
        <el-form
          :inline="true"
          ref="filter-form"
          :model="searchForm"
          class="form-search"
        >
          <el-form-item prop="name">
            <el-input
              v-model="searchForm.name"
              :placeholder="constants.DEP_NAME"
            ></el-input>
          </el-form-item>
          <el-form-item prop="recordStatus">
            <el-select
              v-model="searchForm.recordStatus"
              :placeholder="constants.RECORD_STATUS"
            >
              <el-option
                v-for="v of constants.ENUM_RECORD_STATUS"
                :key="v.key"
                :label="v.value"
                :value="v.key"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="selfStatus">
            <el-select
              v-model="searchForm.selfStatus"
              :placeholder="constants.SELF_EVALUATION_STATUS"
            >
              <el-option
                v-for="v of constants.ENUM_SELF_EVALUATION_STATUS"
                :key="v.key"
                :label="v.value"
                :value="v.key"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="leaderStatus">
            <el-select
              v-model="searchForm.leaderStatus"
              :placeholder="constants.LEADER_EVALUATION_STATUS"
            >
              <el-option
                v-for="v of constants.ENUM_LEADER_EVALUATION_STATUS"
                :key="v.key"
                :label="v.value"
                :value="v.key"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="upLeaderStatus">
            <el-select
              v-model="searchForm.upLeaderStatus"
              :placeholder="constants.LEADER_PLUS_EVALUATION_STATUS"
            >
              <el-option
                v-for="v of constants.ENUM_LEADER_PLUS_EVALUATION_STATUS"
                :key="v.key"
                :label="v.value"
                :value="v.key"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="offLineTalkStatus">
            <el-select
              v-model="searchForm.offLineTalkStatus"
              :placeholder="constants.OFFLINE_STATUS"
            >
              <el-option
                v-for="v of constants.ENUM_OFFLINE_STATUS"
                :key="v.key"
                :label="v.value"
                :value="v.key"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="faceStatus">
            <el-select
              v-model="searchForm.faceStatus"
              :placeholder="constants.FACE_EVALUATION_STATUS"
            >
              <el-option
                v-for="v of constants.ENUM_FACE_EVALUATION_STATUS"
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
              >{{ constants.RESET }}</el-button
            >
          </el-form-item>
          <el-button
            v-if="isShow"
            class="batch-set-time"
            type="text"
            @click="setTime('', 'batch')"
            >{{ constants.BATCH_SET_TIMES }}</el-button
          >
        </el-form>
      </div>
      <el-table :data="listData" stripe style="width: 100%">
        <el-table-column
          prop="department_name"
          :label="constants.DEPARTMENT"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="import_status"
          :label="constants.RECORD_STATUS"
          width="180"
        >
          <template slot-scope="scope">
            {{
              (
                constants.ENUM_RECORD_STATUS.filter(
                  v => v.key === String(scope.row.import_status)
                )[0] || {}
              ).value
            }}
            <span class="list-count"
              >&nbsp;&nbsp;&nbsp;({{ scope.row.import_count }})</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="self_status"
          :label="constants.SELF_EVALUATION_STATUS"
        >
          <template slot-scope="scope">
            {{
              (
                constants.ENUM_SELF_EVALUATION_STATUS.filter(
                  v => v.key === String(scope.row.self_status)
                )[0] || {}
              ).value
            }}
            <span v-if="scope.row.self_status" class="list-count"
              >&nbsp;&nbsp;&nbsp;({{ scope.row.self_finish_count }}/{{
                scope.row.import_count
              }})</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="superior_status"
          :label="constants.LEADER_EVALUATION_STATUS"
        >
          <template slot-scope="scope">
            {{
              (
                constants.ENUM_LEADER_EVALUATION_STATUS.filter(
                  v => v.key === String(scope.row.superior_status)
                )[0] || {}
              ).value
            }}
            <span v-if="scope.row.superior_status" class="list-count"
              >&nbsp;&nbsp;&nbsp;({{ scope.row.superior_finish_count }}/{{
                scope.row.superior_count
              }})</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="highlevel_status"
          :label="constants.LEADER_PLUS_EVALUATION_STATUS"
        >
          <template slot-scope="scope">
            {{
              (
                constants.ENUM_LEADER_PLUS_EVALUATION_STATUS.filter(
                  v => v.key === String(scope.row.highlevel_status)
                )[0] || {}
              ).value
            }}
            <span v-if="scope.row.highlevel_status" class="list-count"
              >&nbsp;&nbsp;&nbsp;({{ scope.row.highlevel_count }}/{{
                scope.row.highlevel_finish_count
              }})</span
            >
          </template>
        </el-table-column>

        <el-table-column
          prop="offlinetalk_status"
          :label="constants.OFFLINE_STATUS"
        >
          <template slot-scope="scope">
            {{
              (
                constants.ENUM_OFFLINE_STATUS.filter(
                  v => v.key === String(scope.row.offlinetalk_status)
                )[0] || {}
              ).value
            }}
          </template>
        </el-table-column>

        <el-table-column prop="3" :label="constants.FACE_EVALUATION_STATUS">
          <template slot-scope="scope">
            {{
              (
                constants.ENUM_FACE_EVALUATION_STATUS.filter(
                  v => v.key === String(scope.row.feedback_status)
                )[0] || {}
              ).value
            }}
          </template>
        </el-table-column>
        <el-table-column prop="4" :label="constants.OPERATIONS" width="200">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">{{
              constants.DETAILS
            }}</el-button>
            <el-button
              @click="exportFile(scope.row)"
              type="text"
              size="small"
              >{{ constants.EXPORT_DETAILS }}</el-button
            >
            <el-button
              v-if="isShow"
              :disabled="scope.row.feedback_status == 2"
              type="text"
              size="small"
              @click="setTime(scope.row, 'only')"
              >{{ scope.row | hasSchedule }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <br />
      <el-row type="flex" justify="end">
        <pagination
          :currentPage="currentPage"
          @current-change="handleCurrentChange"
          :total="total"
        ></pagination>
      </el-row>
    </section>

    <time-setting
      :isManagerGrade="isManagerGrade"
      :timeData="timeData"
      :status="status"
      @close="closeTimeSettingDia"
      v-if="dialogTimes"
      :dialogTimes="dialogTimes"
      :orgId="orgId"
      :isBatchSetTime="isBatchSetTime"
    ></time-setting>
  </div>
</template>
<script>
import {
  GRADE_PROGRESS,
  GRADE_MANAGE,
  FINISHED_DATE,
  RECORD_STATUS,
  SELF_EVALUATION_STATUS,
  LEADER_EVALUATION_STATUS,
  LEADER_PLUS_EVALUATION_STATUS,
  FACE_EVALUATION_STATUS,
  ENUM_RECORD_STATUS,
  ENUM_SELF_EVALUATION_STATUS,
  ENUM_LEADER_EVALUATION_STATUS,
  ENUM_LEADER_PLUS_EVALUATION_STATUS,
  ENUM_FACE_EVALUATION_STATUS,
  DEPARTMENT,
  OPERATIONS,
  DETAILS,
  EXPORT_DETAILS,
  RESET,
  DEP_NAME,
  BATCH_SET_TIMES,
  ENUM_OFFLINE_STATUS,
  OFFLINE_STATUS
} from "@/constants/TEXT";

import {
  PATH_GRADE_MANAGE,
  PATH_GRADE_ORG_LIST,
  PATH_EXPORT_DEP_GRADE
} from "@/constants/URL";
import { getProgressList } from "@/constants/API";
import { compact } from "@/utils/obj";
import { AsyncComp } from "../../../../../FE-DINGDING-TDC/src/utils/asyncCom";

export default {
  created() {
    this.permissions = JSON.parse(localStorage.getItem("permissions") || "[]");
    if (this.permissions.indexOf(201) > -1) {
      this.isShow = true;
    }
  },
  data() {
    return {
      permissions: [],
      isShow: false,

      currentPage: 1,
      total: 0,
      constants: {
        FINISHED_DATE,
        RECORD_STATUS,
        SELF_EVALUATION_STATUS,
        LEADER_EVALUATION_STATUS,
        LEADER_PLUS_EVALUATION_STATUS,
        FACE_EVALUATION_STATUS,
        ENUM_RECORD_STATUS,
        ENUM_SELF_EVALUATION_STATUS,
        ENUM_LEADER_EVALUATION_STATUS,
        ENUM_LEADER_PLUS_EVALUATION_STATUS,
        ENUM_FACE_EVALUATION_STATUS,
        ENUM_OFFLINE_STATUS,
        OFFLINE_STATUS,
        DEPARTMENT,
        OPERATIONS,
        DETAILS,
        EXPORT_DETAILS,
        RESET,
        DEP_NAME,
        BATCH_SET_TIMES
      },
      searchForm: {
        recordStatus: "",
        selfStatus: "",
        leaderStatus: "",
        upLeaderStatus: "",
        offLineTalkStatus: "",
        faceStatus: "",
        name: ""
      },
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_GRADE_MANAGE
        },
        {
          label: GRADE_PROGRESS,
          active: true
        }
      ],
      gradeName: "",
      finishedDate: "",
      listData: [],
      isManagerGrade: false,
      timeData: {
        self_start_time: "",
        self_end_time: "",
        superior_start_time: "",
        superior_end_time: "",
        highlevel_start_time: "",
        highlevel_end_time: "",
        offlinetalk_start_time: "",
        offlinetalk_end_time: "",
        feedback_start_time: "",
        feedback_end_time: "",
        checked_271: 0,
        visible_271: 0,
        feeling_is_necessary: 0
      },
      status: {},
      dialogTimes: false,
      orgId: 0,
      isBatchSetTime: false
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    "time-setting": AsyncComp(
      import(
        "@/components/modules/grademanage/progress/org/settings/TimeDialog.vue"
      )
    )
  },
  methods: {
    resetFilter(formName) {
      this.$refs[formName].resetFields();
    },
    goDetail(row) {
      window.open(PATH_GRADE_ORG_LIST(this.$route.params.id, row.id), "_blank");
      // this.$router.push();
    },
    exportFile(row) {
      window.open(PATH_EXPORT_DEP_GRADE(row.id), "_blank", "noopener");
    },
    refreshList(params) {
      getProgressList(this.$route.params.id, compact(params))
        .then(res => {
          this.gradeName = res.info.evaluation_name;
          this.listData = res.list.data;
          this.finishedDate = res.info.end_time;
          this.total = res.list.total;
          this.timeData = {
            self_start_time: res.info.self_start_time,
            self_end_time: res.info.self_end_time,
            superior_start_time: res.info.superior_start_time,
            superior_end_time: res.info.superior_end_time,
            highlevel_start_time: res.info.highlevel_start_time,
            highlevel_end_time: res.info.highlevel_end_time,
            offlinetalk_start_time: res.info.offlinetalk_start_time,
            offlinetalk_end_time: res.info.offlinetalk_end_time,
            feedback_start_time: res.info.feedback_start_time,
            feedback_end_time: res.info.feedback_end_time,
            checked_271: 0,
            visible_271: 0,
            feeling_is_necessary: 2
          };
          this.isManagerGrade = res.info.type == 2;
          this.orgId = res.info.id;
        })
        .catch(e => {});
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      const postData = {
        import_status: this.searchForm.recordStatus,
        self_status: this.searchForm.selfStatus,
        superior_status: this.searchForm.leaderStatus,
        highlevel_status: this.searchForm.upLeaderStatus,
        offlinetalk_status: this.searchForm.offLineTalkStatus,
        feedback_status: this.searchForm.faceStatus,
        name: this.searchForm.name,
        page: val
      };
      this.refreshList(postData);
    },
    setTime(row, num) {
      this.dialogTimes = true;
      if (num == "only") {
        this.isBatchSetTime = false;
        this.orgId = row.id;
        this.isManagerGrade = row.type == 2;
        this.timeData = {
          self_start_time: row.self_start_time,
          self_end_time: row.self_end_time,
          superior_start_time: row.superior_start_time,
          superior_end_time: row.superior_end_time,
          highlevel_start_time: row.highlevel_start_time,
          highlevel_end_time: row.highlevel_end_time,
          offlinetalk_start_time: row.offlinetalk_start_time,
          offlinetalk_end_time: row.offlinetalk_end_time,
          feedback_start_time: row.feedback_start_time,
          feedback_end_time: row.feedback_end_time,
          checked_271: row._271_is_necessary,
          visible_271: row.visible_271,
          feeling_is_necessary: row.feeling_is_necessary
        };
        this.status = {
          self_status: row.self_status,
          superior_status: row.superior_status,
          highlevel_status: row.highlevel_status,
          offlinetalk_status: row.offlinetalk_status,
          feedback_status: row.feedback_status
        };
      } else if (num == "batch") {
        this.isBatchSetTime = true;
      }
    },
    closeTimeSettingDia() {
      this.dialogTimes = false;
      this.resetFilter("filter-form");
      const postData = {
        import_status: "",
        self_status: "",
        superior_status: "",
        highlevel_status: "",
        feedback_status: "",
        name: "",
        page: 1
      };
      this.refreshList(postData);
    }
  },
  watch: {
    searchForm: {
      handler: function(v) {
        const postData = {
          import_status: v.recordStatus,
          self_status: v.selfStatus,
          superior_status: v.leaderStatus,
          highlevel_status: v.upLeaderStatus,
          offlinetalk_status: v.offLineTalkStatus,
          feedback_status: v.faceStatus,
          name: v.name,
          page: 1
        };
        this.currentPage = 1;
        this.refreshList(postData);
      },
      deep: true,
      immediate: true
    }
  },
  filters: {
    hasSchedule(val) {
      if (
        val.self_start_time &&
        val.self_end_time &&
        val.superior_start_time &&
        val.superior_end_time &&
        val.highlevel_start_time &&
        val.highlevel_end_time &&
        val.offlinetalk_start_time &&
        val.offlinetalk_end_time &&
        val.feedback_start_time &&
        val.feedback_end_time
      ) {
        return "修改时间";
      } else {
        return "设置时间";
      }
    }
  }
};
</script>
<style scoped>
.progress-header {
  background-color: white;
  padding: 20px 10px 10px 10px;
}
.tips {
  font-size: 10px;
  color: grey;
}
hr {
  margin-top: 20px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
.form-search {
  background-color: #f8f8f8;
  padding: 20px;
  padding-bottom: 0px;
  position: relative;
}
.batch-set-time {
  position: absolute;
  bottom: 0;
  right: 20px;
}
.btn-reset {
  color: #09c981;
  border-color: #09c981;
}
.list-count {
  color: #000000;
}
</style>
