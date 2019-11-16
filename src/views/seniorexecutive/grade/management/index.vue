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
            v-model="statuses"
            @change="changeStatuses"
            size="medium"
          >
            <el-radio-button label="">全部</el-radio-button>
            <el-radio-button label="1">草稿</el-radio-button>
            <el-radio-button label="2">进行中</el-radio-button>
            <el-radio-button label="3">已结束</el-radio-button>
          </el-radio-group>
          <el-button class="create-btn" type="primary" @click="createTpl"
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
          <span v-if="item.status === 1" class="state draft">草稿</span>
          <span v-if="item.status === 2" class="state doing">进行中</span>
          <span v-if="item.status === 3" class="state ending">已结束</span>
          <div class="bread-crumb">
            <span>{{ item.name }}</span>
            <span class="dividing-line">|</span>
            <span class="list-top-range"
              >{{ item.range }}{{ item.range }}{{ item.range }}{{ item.range
              }}{{ item.range }}{{ item.range }}</span
            >
            <span class="dividing-line">|</span>
            <span v-if="item.performance_type === 'annual'">年度</span>
            <span v-if="item.performance_type === 'semi-annual'">半年度</span>
            <span v-if="item.performance_type === 'quarter'">季度</span>
            <span v-if="item.performance_type === 'monthly'">月度</span>
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
              <i class="delete" @click="deleteAssessment"></i>
            </el-tooltip>
            <el-button
              v-if="item.status === 1"
              @click="openAssessment"
              type="primary"
              >开启考核</el-button
            >
          </div>
        </div>
        <div class="list-middle">
          <div class="list-middle-left">
            <div class="list-middle-items">
              <div>考核周期</div>
              <div class="list-middle-item">{{ item.year }}</div>
            </div>
            <div class="list-middle-items">
              <div>起止时间</div>
              <div class="list-middle-item">{{ item.year }}</div>
            </div>
          </div>
          <div class="list-middle-right">
            <div class="list-middle-items">
              <div>考核人数</div>
              <div class="list-middle-item">{{ item.is_draft }}</div>
            </div>
            <div class="list-middle-items">
              <div>指标填写中</div>
              <div class="list-middle-item">{{ item.is_draft }}</div>
            </div>
            <div class="list-middle-items">
              <div>指标确认中</div>
              <div class="list-middle-item">{{ item.is_draft }}</div>
            </div>
            <div class="list-middle-items">
              <div>自评中</div>
              <div class="list-middle-item">{{ item.is_draft }}</div>
            </div>
            <div class="list-middle-items">
              <div>复评中</div>
              <div class="list-middle-item">{{ item.is_draft }}</div>
            </div>
            <div class="list-middle-items">
              <div>隔级审核中</div>
              <div class="list-middle-item">{{ item.is_draft }}</div>
            </div>
            <div class="list-middle-items">
              <div>总裁审核中</div>
              <div class="list-middle-item">{{ item.is_draft }}</div>
            </div>
            <div class="list-middle-items">
              <div>确认中</div>
              <div class="list-middle-item">{{ item.is_draft }}</div>
            </div>
            <div class="list-middle-items">
              <div>已确认</div>
              <div class="list-middle-item">{{ item.is_draft }}</div>
            </div>
          </div>
        </div>
        <div class="list-timeline">
          <div class="time-line active">指标设定</div>
          <div class="time-line-sign active" data="11月15日"></div>
          <div class="time-line-circle active">
            <div class="circle-list"></div>
            <div class="circle-list"></div>
            <div class="circle-list"></div>
            <div class="circle-list"></div>
            <div class="circle-list"></div>
            <div class="circle-list"></div>
          </div>
          <div class="time-line-sign active" data="11月18日"></div>
          <div class="time-line active">自评</div>
          <div class="time-line-sign active" data="11月23日"></div>
          <div class="time-line active">上级评分</div>
          <div class="time-line-sign active" data="11月30日"></div>
          <div class="time-line">隔级审核</div>
          <div class="time-line-sign" data="12月1日"></div>
          <div class="time-line">总裁审核</div>
          <div class="time-line-sign" data="12月18日"></div>
          <div class="time-line">结果确认</div>
          <div class="time-line-sign" data="12月30日"></div>
        </div>
      </div>
      <el-row type="flex" justify="end">
        <el-pagination
          background
          v-if="total"
          class="paging-box"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[10, 20, 50]"
          :page-size="perPage"
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
    ></assessment-dialog>
    <confirm-dialog
      v-if="showConfirmDialog"
      :visible="showConfirmDialog"
      :tipsText="tipsText"
      @confirm="confirmDialog"
      @close="closeDialog"
    ></confirm-dialog>
  </div>
</template>
<script>
import { AsyncComp } from "@/utils/asyncCom";
import { putOpenAssessment, delAssessment } from "@/constants/API";
import {
  getOrganization,
  getPerformanceTypes,
  getAdminPerformancesList
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
      type: "",
      requestLink: "",
      requestType: "",
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
      statuses: ""
    };
  },
  methods: {
    handleChange(value) {
      this.department_ids = value.length > 0 ? value[value.length - 1] : "";
      this.page = 1;
      this.getPerformanceList();
    },
    handleSizeChange(val) {
      this.perPage = val;
    },
    changeStatuses() {
      this.getPerformanceList();
    },
    getPerformanceList() {
      let data = {
        statuses: this.statuses,
        page: this.page,
        perPage: this.perPage,
        department_ids: this.department_ids.split(",")
      };
      getAdminPerformancesList(data)
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
    handleCurrentChange() {
      this.page = val;
    },
    linkToDetail(id) {
      this.$router.replace(`/performance/assessment/details/${id}`);
    },
    deleteAssessment() {
      this.showConfirmDialog = true;
      this.tipsText = "是否确认删除考核？";
    },
    closeDialog() {
      this.showConfirmDialog = false;
    },
    confirmDialog() {
      // 确定按钮 判断是开启还是删除的框
      console.log("确定");
      // this.showConfirmDialog = false;
      // putOpenAssessment(id).then(res => {
      //   console.log(res)
      // }).catch(e => {});
      // delAssessment(id).then(res => {
      //   console.log(res)
      // }).catch(e => {});
    },
    openAssessment() {
      this.showConfirmDialog = true;
      this.tipsText = "是否确认启动考核？";
    }
  },
  created() {
    this.getPerformanceList();
    getOrganization()
      .then(res => {
        this.orgTree = res;
      })
      .catch(e => {});
    getPerformanceTypes()
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
        line-height: 32px;
        font-size: 16px;
        font-weight: bold;
        color: #303133ff;
        .dividing-line {
          margin: 0 12px;
          color: #dcdfe6ff;
        }
        .list-top-range {
          display: inline-block;
          max-width: 200px;
          vertical-align: middle;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
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
            background: url("../../../../assets/img/view.png") no-repeat center
              center;
          }
        }
        .delete {
          background: url("../../../../assets/img/delete.png") no-repeat center
            center;
          background-size: 100% 100%;
          &:hover {
            background: url("../../../../assets/img/delete.png") no-repeat
              center center;
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
  .paging-box {
    margin-top: 25px;
  }
}
</style>
