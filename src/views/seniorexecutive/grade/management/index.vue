<template>
  <div class="grade-management">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row align="middle" type="flex" justify="space-between">
        <div>
          <span>组织部绩效考核列表：</span>
          <el-cascader
            @change="handleChange"
            v-model="filterForm.dp"
            :placeholder="constants.LABEL_SELECT_DIVISION"
            :props="filterProps"
            :options="orgTree"
            :show-all-levels="false"
          ></el-cascader>
          <el-button style="margin-left:30px" round @click="resetFilter">
            {{ constants.LABEL_EMPTY }}
          </el-button>
        </div>
        <div>
          <el-radio-group
            v-model="status"
            @change="changeStatuses"
            size="medium"
          >
            <el-radio-button v-if="showExecutiveScoreManagement" label=""
              >全部</el-radio-button
            >
            <el-radio-button v-if="showExecutiveScoreManagement" label="1"
              >草稿</el-radio-button
            >
            <el-radio-button
              v-if="
                showExecutiveScoreManagement || showExecutiveScoreUserManagement
              "
              label="2"
              >进行中</el-radio-button
            >
            <el-radio-button
              v-if="
                showExecutiveScoreManagement || showExecutiveScoreUserManagement
              "
              label="3"
              >已结束</el-radio-button
            >
          </el-radio-group>
          <el-button
            v-if="showExecutiveScoreManagement"
            class="create-btn"
            type="primary"
            @click="createTpl"
            >创建组织部绩效考核</el-button
          >
        </div>
      </el-row>
      <div
        class="grade-management-list"
        v-for="item in performancesList"
        :key="item.id"
      >
        <div class="list-top">
          <span v-if="item.stage === 0" class="state draft">草稿</span>
          <span v-else-if="item.stage === 600" class="state ending"
            >已结束</span
          >
          <span v-else class="state doing">进行中</span>
          <div class="bread-crumb">
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.name"
              placement="top"
            >
              <div class="bread-crumb-name">{{ item.name }}</div>
            </el-tooltip>
            <div class="bread-crumb-separator">|</div>
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.departments_text"
              placement="top"
            >
              <div class="bread-crumb-name">{{ item.departments_text }}</div>
            </el-tooltip>
            <div class="bread-crumb-separator">|</div>
            <div class="bread-crumb-name">
              {{ item.performance_type | filterType }}
            </div>
          </div>
          <div class="operate-btns">
            <el-tooltip
              class="item"
              effect="dark"
              content="考核详情"
              placement="top"
            >
              <i class="view-details" @click="linkToDetail(item.id)"></i>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="删除"
              placement="top"
            >
              <i
                class="delete"
                v-if="item.stage === 0 && showExecutiveScoreManagement"
                @click="deleteAssessment(item.id)"
              ></i>
            </el-tooltip>
            <el-button
              :disabled="!item.can_start"
              v-if="item.stage === 0 && showExecutiveScoreManagement"
              @click="openAssessment(item.id)"
              type="primary"
              >开启考核</el-button
            >
          </div>
        </div>
        <div class="list-middle">
          <div class="list-middle-left">
            <div class="list-middle-items">
              <div>考核周期</div>
              <div class="list-middle-item">
                {{ item.year }}
              </div>
            </div>
            <div class="list-middle-items">
              <div>起止时间</div>
              <div class="list-middle-item">
                {{ item.start_time | filterDate }}至{{
                  item.end_time | filterDate
                }}
              </div>
            </div>
          </div>
          <div class="list-middle-right">
            <div class="list-middle-items">
              <div>考核人数</div>
              <div class="list-middle-item">{{ item.users_count }}</div>
            </div>
            <div class="list-middle-items">
              <div>指标填写中</div>
              <div class="list-middle-item">{{ item.indicator_fill_in }}</div>
            </div>
            <div class="list-middle-items">
              <div>指标确认中</div>
              <div class="list-middle-item">{{ item.indicator_confirm }}</div>
            </div>
            <div class="list-middle-items">
              <div>自评中</div>
              <div class="list-middle-item">{{ item.self_evaluation }}</div>
            </div>
            <div class="list-middle-items">
              <div>复评中</div>
              <div class="list-middle-item">{{ item.re_evaluation }}</div>
            </div>
            <div class="list-middle-items">
              <div>隔级审核中</div>
              <div class="list-middle-item">{{ item.isolation_adult }}</div>
            </div>
            <div class="list-middle-items">
              <div>总裁审核中</div>
              <div class="list-middle-item">{{ item.president_audit }}</div>
            </div>
            <div class="list-middle-items">
              <div>确认中</div>
              <div class="list-middle-item">{{ item.confirm }}</div>
            </div>
            <div class="list-middle-items">
              <div>已确认</div>
              <div class="list-middle-item">{{ item.confirmed }}</div>
            </div>
          </div>
        </div>
        <div class="list-timeline">
          <div class="time-line" :class="item.stage === 0 ? '' : 'active'">
            指标设定
          </div>
          <div
            class="time-line-sign"
            :class="item.stage === 0 ? '' : 'active'"
            :data="item.indicator_setting_end_time | filterDate"
          ></div>
          <div
            class="time-line-circle"
            :class="item.self_evaluation_begin_time > nowTime ? 'active' : ''"
          >
            <div class="circle-list"></div>
            <div class="circle-list"></div>
            <div class="circle-list"></div>
            <div class="circle-list"></div>
            <div class="circle-list"></div>
            <div class="circle-list"></div>
          </div>
          <div
            class="time-line-sign"
            :class="item.self_evaluation_begin_time > nowTime ? 'active' : ''"
            :data="item.self_evaluation_begin_time | filterDate"
          ></div>
          <div
            class="time-line"
            :class="item.self_evaluation_begin_time > nowTime ? 'active' : ''"
          >
            自评
          </div>
          <div
            class="time-line-sign"
            :class="item.superior_begin_time > nowTime ? 'active' : ''"
            :data="item.superior_begin_time | filterDate"
          ></div>
          <div
            class="time-line"
            :class="item.superior_begin_time > nowTime ? 'active' : ''"
          >
            上级评分
          </div>
          <div
            class="time-line-sign"
            :class="item.isolation_begin_time > nowTime ? 'active' : ''"
            :data="item.isolation_begin_time | filterDate"
          ></div>
          <div
            class="time-line"
            :class="item.isolation_begin_time > nowTime ? 'active' : ''"
          >
            隔级审核
          </div>
          <div
            class="time-line-sign"
            :class="item.president_audit_begin_time > nowTime ? 'active' : ''"
          ></div>
          <div
            class="time-line"
            :class="item.president_audit_begin_time > nowTime ? 'active' : ''"
          >
            总裁审核
          </div>
          <div
            class="time-line-sign"
            :class="item.stage === 600 ? 'active' : ''"
            :data="item.result_confirm_end_time | filterDate"
          ></div>
          <div class="time-line" :class="item.stage === 600 ? 'active' : ''">
            结果确认
          </div>
          <div
            class="time-line-sign"
            :class="item.stage === 600 ? 'active' : ''"
            :data="item.president_audit_begin_time | filterDate"
          ></div>
        </div>
      </div>
      <br />
      <el-row type="flex" justify="end">
        <el-pagination
          background
          v-if="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[10, 20, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </el-row>
    </section>
    <assessment-dialog
      v-if="showDialog"
      :visible="showDialog"
      @close="tplDialogClose"
      :infoType="infoType"
      :performanceTypes="performanceTypes"
      :orgTree="orgTree"
      @update="tplDefine"
    ></assessment-dialog>
    <confirm-dialog
      v-if="showConfirmDialog"
      :visible="showConfirmDialog"
      :tipsText="tipsText"
      :confirmType="confirmType"
      @update="confirmDialog"
      @close="closeDialog"
    ></confirm-dialog>
  </div>
</template>
<script>
import { AsyncComp } from "@/utils/asyncCom";
import { PATH_EXECUTIVE_ASSESSMENT_DATAILS } from "@/constants/URL";
import {
  putExecutiveOpenAssessment,
  deleteExecutiveAssessment,
  getExecutiveOrganization,
  getExecutivePerformanceTypes,
  getExecutiveAdminPerformances
} from "@/constants/API";
import { LABEL_EMPTY, LABEL_SELECT_DIVISION } from "@/constants/TEXT";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "assessment-dialog": AsyncComp(
      import("@/components/modules/seniorexecutive/AssessmentDialog/index.vue")
    ),
    "confirm-dialog": AsyncComp(
      import("@/components/modules/seniorexecutive/ConfirmDialog/index.vue")
    )
  },
  data() {
    return {
      filterProps: {
        value: "id",
        label: "name",
        children: "children"
      },
      page: 1,
      perPage: 10,
      total: 0,
      department_ids: "",
      showDialog: false,
      infoType: "add",
      showConfirmDialog: false,
      tipsText: "",
      confirmType: "open",
      id: 0,
      performancesList: [],
      orgTree: [],
      nav: [
        {
          label: "组织部绩效考核列表",
          active: true
        }
      ],
      filterForm: {
        dp: []
      },
      options: [],
      constants: {
        LABEL_EMPTY,
        LABEL_SELECT_DIVISION
      },
      status: "",
      nowTime: "",
      permissions: []
    };
  },
  computed: {
    showExecutiveScoreManagement() {
      return this.permissions.includes(400);
    },
    showExecutiveScoreUserManagement() {
      return this.permissions.includes(410);
    }
  },
  filters: {
    filterDate(val) {
      let newVal = "";
      if (val) {
        newVal = /\d{4}-\d{1,2}-\d{1,2}/g.exec(val);
        newVal = newVal[0];
      }
      return newVal;
    },
    filterType(val) {
      let type = "";
      if (val === "annual") {
        type = "年度";
      } else if (val === "semi-annual") {
        type = "半年度";
      } else if (val === "quarter") {
        type = "季度";
      } else if (val === "monthly") {
        type = "月度";
      }
      return type;
    }
  },
  methods: {
    tplDefine(id) {
      this.showDialog = false;
      this.$router.push(PATH_EXECUTIVE_ASSESSMENT_DATAILS(id));
    },
    handleChange(value) {
      this.department_ids = value.length > 0 ? value[value.length - 1] : "";
      this.page = 1;
      this.getPerformanceList();
    },
    handleSizeChange(val) {
      this.perPage = val;
      this.getPerformanceList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getPerformanceList();
    },
    changeStatuses() {
      this.getPerformanceList();
    },
    getPerformanceList() {
      let data = {
        status: this.status,
        page: this.page,
        perPage: this.perPage,
        department_ids: this.department_ids.split(",")
      };
      getExecutiveAdminPerformances(data)
        .then(res => {
          const { total, data } = res;
          this.performancesList = data;
          this.total = total;
        })
        .catch(e => {});
    },
    createTpl() {
      this.infoType = "add";
      this.showDialog = true;
    },
    tplDialogClose() {
      this.showDialog = false;
    },
    updateTpl(row) {
      this.infoType = "modify";
      this.showDialog = true;
    },
    resetFilter() {
      this.filterForm = {
        dp: []
      };
      this.page = 1;
      this.department_ids = "";
      this.getPerformanceList();
    },
    linkToDetail(id) {
      this.$router.replace(`/performance/assessment/details/${id}`);
    },
    deleteAssessment(id) {
      this.performanceId = id;
      this.showConfirmDialog = true;
      this.tipsText = "是否确认删除考核？";
      this.confirmType = "delete";
    },
    closeDialog() {
      this.showConfirmDialog = false;
    },
    confirmDialog(data) {
      if (data === "open") {
        putExecutiveOpenAssessment(this.performanceId)
          .then(res => {
            this.showConfirmDialog = false;
            this.getPerformanceList();
          })
          .catch(e => {});
      } else if (data === "delete") {
        deleteExecutiveAssessment(this.performanceId)
          .then(res => {
            this.showConfirmDialog = false;
            this.getPerformanceList();
          })
          .catch(e => {});
      } else {
        this.showConfirmDialog = false;
      }
    },
    openAssessment(id) {
      this.performanceId = id;
      this.showConfirmDialog = true;
      this.tipsText = "是否确认启动考核？";
      this.confirmType = "open";
    }
  },
  created() {
    this.permissions = JSON.parse(localStorage.getItem("permissions") || "[]");
    if (this.showExecutiveScoreUserManagement) {
      this.status = "2";
    }
    if (this.showExecutiveScoreManagement) {
      this.status = "";
    }
    this.nowTime = new Date();
    this.getPerformanceList();
    getExecutiveOrganization()
      .then(res => {
        this.orgTree = res;
      })
      .catch(e => {});
    getExecutivePerformanceTypes()
      .then(res => {
        this.performanceTypes = res;
      })
      .catch(e => {});
  }
};
</script>
<style lang="scss" scoped>
.grade-management {
  .create-btn {
    margin-left: 24px;
  }
  .grade-management-list {
    background-color: #fff;
    margin-top: 20px;
    .list-top {
      padding: 16px 16px 16px 0;
      overflow: hidden;
      .state {
        float: left;
        margin-right: 20px;
        padding: 6px 20px 6px 16px;
        color: #fff;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
      }
      .state.draft {
        background-color: #fcbf3c;
      }
      .state.doing {
        background-color: #24afd7;
      }
      .state.ending {
        background-color: #cdd0d6ff;
      }
      .bread-crumb {
        float: left;
        font-size: 16px;
        font-weight: bold;
        color: #303133ff;
        overflow: hidden;
        .bread-crumb-name {
          float: left;
          max-width: 240px;
          height: 32px;
          line-height: 32px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .bread-crumb-separator {
          float: left;
          margin: 0 12px;
          height: 32px;
          line-height: 32px;
          color: #dcdfe6;
        }
      }
      .operate-btns {
        float: right;
        .view-details,
        .delete {
          display: inline-block;
          margin-right: 16px;
          width: 16px;
          height: 16px;
          vertical-align: middle;
          cursor: pointer;
        }
        .view-details {
          background: url("../../../../assets/img/view.png") no-repeat center
            center;
          background-size: 100% 100%;
          &:hover {
            background: url("../../../../assets/img/view-hover.png") no-repeat
              center center;
            background-size: 100% 100%;
          }
        }
        .delete {
          background: url("../../../../assets/img/delete.png") no-repeat center
            center;
          background-size: 100% 100%;
          &:hover {
            background: url("../../../../assets/img/delete-hover.png") no-repeat
              center center;
            background-size: 100% 100%;
          }
        }
        .el-button {
          padding: 8px 16px;
        }
      }
    }
    .list-middle {
      padding: 16px;
      text-align: center;
      overflow: hidden;
      .list-middle-left,
      .list-middle-right {
        display: flex;
        color: #909399;
        background-color: #fafafa;
        .list-middle-items {
          box-sizing: border-box;
          padding: 14px 16px;
          .list-middle-item {
            margin-top: 8px;
            color: #303133;
          }
        }
      }
      .list-middle-left {
        float: left;
        .list-middle-items {
          width: 140px;
          .list-middle-item {
            line-height: 20px;
          }
        }
      }
      .list-middle-right {
        margin-left: 284px;
        .list-middle-items {
          flex: 1;
          .list-middle-item {
            line-height: 40px;
          }
        }
      }
    }
    .list-timeline {
      display: flex;
      padding: 0 30px 40px 30px;
      .time-line {
        width: 15%;
        padding: 6px 0;
        text-align: center;
        border-bottom: 4px solid #e6e9f0;
      }
      .time-line.active {
        border-bottom: 4px solid #38d0afff;
      }
      .time-line-sign {
        position: relative;
        top: 26px;
        width: 12px;
        height: 12px;
        margin: 0 4px;
        box-sizing: border-box;
        border: 3px solid #e6e9f0ff;
        border-radius: 50%;
        &::after {
          position: absolute;
          left: -24px;
          top: 14px;
          width: 66px;
          content: attr(data);
          color: #909399ff;
          font-size: 12px;
        }
      }
      .time-line-sign.active {
        border: 3px solid #38d0afff;
        &::before {
          position: absolute;
          left: -6px;
          top: -26px;
          content: "\E79E";
          font-family: "element-icons" !important;
          font-size: 18px;
          color: #38d0afff;
        }
      }
      .time-line-circle {
        min-width: 45px;
        position: relative;
        top: 22px;
        left: 0;
        .circle-list {
          display: inline-block;
          margin-right: 4px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #e6e9f0;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .time-line-circle.active {
        .circle-list {
          background-color: #38d0afff;
        }
      }
    }
  }
}
</style>
