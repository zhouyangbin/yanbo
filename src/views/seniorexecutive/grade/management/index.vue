<template>
  <div class="grade-management">
    <nav-bar :list="nav"></nav-bar>
    <div class="create-btn">
      <el-button type="primary" @click="createTpl">创建高管绩效考核</el-button>
    </div>
    <section class="content-container">
      <el-row align="middle" type="flex" justify="space-between">
        <div>
          <span>高管绩效考核列表：</span>
          <el-cascader
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
          <el-radio-group v-model="statuses" size="medium">
            <el-radio-button label="1">全部</el-radio-button>
            <el-radio-button label="2">草稿</el-radio-button>
            <el-radio-button label="3">进行中</el-radio-button>
            <el-radio-button label="4">已结束</el-radio-button>
          </el-radio-group>
        </div>
      </el-row>
      <div class="grade-management-list">
        <div class="list-top">
          <span class="state doing">进行中</span>
          <div class="bread-crumb">
            <span>2019组织部绩效考核</span>
            <span class="dividing-line">|</span>
            <span>集团中台</span>
            <span class="dividing-line">|</span>
            <span>年度</span>
          </div>
          <div class="operate-btns">
            <el-tooltip
              class="item"
              effect="dark"
              content="考核详情"
              placement="top"
            >
              <i class="view-details" @click="linkToDetail"></i>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="删除"
              placement="top"
            >
              <i class="delete" @click="deleteAssessment"></i>
            </el-tooltip>
            <el-button @click="openAssessment" type="primary"
              >开启考核</el-button
            >
          </div>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="考核周期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="起止时间" width="180">
          </el-table-column>
          <el-table-column prop="num" label="考核人数"> </el-table-column>
          <el-table-column prop="writting" label="指标填写中">
          </el-table-column>
          <el-table-column prop="determing" label="指标确认中">
          </el-table-column>
          <el-table-column prop="num" label="自评中"> </el-table-column>
          <el-table-column prop="num" label="复评中"> </el-table-column>
          <el-table-column prop="num" label="隔级审核中"> </el-table-column>
          <el-table-column prop="num" label="总裁审核中"> </el-table-column>
          <el-table-column prop="num" label="确认中"> </el-table-column>
          <el-table-column prop="num" label="已确认"> </el-table-column>
        </el-table>
        <div class="list-timeline">
          <div class="time-line">指标设定</div>
          <div class="time-line-sign active" data="11月15日"></div>
          <div class="time-line-circle">。。。。。。</div>
          <div class="time-line-sign" data="11月18日"></div>
          <div class="time-line">自评</div>
          <div class="time-line-sign" data="11月23日"></div>
          <div class="time-line">上级评分</div>
          <div class="time-line-sign active" data="11月30日"></div>
          <div class="time-line">隔级审核</div>
          <div class="time-line-sign" data="12月1日"></div>
          <div class="time-line">总裁审核</div>
          <div class="time-line-sign" data="12月18日"></div>
          <div class="time-line">结果确认</div>
          <div class="time-line-sign" data="12月30日"></div>
        </div>
      </div>
      <pagination
        @current-change="handleCurrentChange"
        :currentPage="currentPage"
        :total="total"
      ></pagination>
    </section>
    <assessment-dialog
      v-if="showDialog"
      :performanceTypes="performanceTypes"
      @close="tplDialogClose"
      :visible="showDialog"
      :infoType="infoType"
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
    ),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  data() {
    return {
      filterProps: {
        value: "department_id",
        label: "department_name",
        children: "children"
      },
      currentPage: 1,
      total: 0,
      showDialog: false,
      infoType: "add",
      showConfirmDialog: false,
      tipsText: "",
      type: "",
      requestLink: "",
      requestType: "",
      id: 0,
      tableData: [],
      orgTree: [],
      nav: [
        {
          label: "高管绩效考核列表",
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
      statuses: "1"
    };
  },
  watch: {
    filterForm: {
      handler: function(v) {
        const filterData = {
          page: 1,
          statuses: this.statuses,
          department_ids: v.dp.length > 0 ? v.dp[v.dp.length - 1] : ""
        };
        this.currentPage = 1;
        // 获取绩效考核列表
        this.getPerformanceList(filterData);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    getPerformanceList(getData) {
      getAdminPerformancesList(getData)
        .then(res => {
          const { total, data } = res;
          this.tableData = data;
          this.total = total;
        })
        .catch(e => {});
    },
    createTpl() {
      // 创建模板
      this.infoType = "add";
      this.showDialog = true;
    },
    tplDialogClose() {
      this.showDialog = false;
      // 关闭弹框
    },
    updateTpl(row) {
      // 修改
      this.infoType = "modify";
      this.showDialog = true;
    },
    resetFilter() {
      this.filterForm = {
        dp: []
      };
    },
    handleCurrentChange() {
      this.currentPage = val;
    },
    linkToDetail() {
      this.$router.replace("/performance/assessment/details");
    },
    deleteAssessment() {
      this.showConfirmDialog = true;
      this.tipsText = "是否确认删除考核？";
    },
    closeDialog() {
      this.showConfirmDialog = false;
    },
    confirmDialog() {
      console.log("确定");
      // this.showConfirmDialog = false;
      // 确定按钮
    },
    openAssessment() {
      this.showConfirmDialog = true;
      this.tipsText = "是否确认启动考核？";
    }
  },
  created() {
    this.getPerformanceList({
      statuses: this.statuses,
      page: this.currentPage
    });
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
  position: relative;
  .create-btn {
    position: absolute;
    right: 20px;
    top: 10px;
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
    .list-timeline {
      display: flex;
      padding: 22px 30px;
      padding: 22px 30px 40px 30px;
      .time-line {
        width: 15%;
        padding: 6px 0;
        text-align: center;
        border-bottom: 4px solid #38d0afff;
      }
      .time-line-sign {
        position: relative;
        top: 28px;
        width: 12px;
        height: 12px;
        margin: 0 4px;
        box-sizing: border-box;
        border: 3px solid #e6e9f0ff;
        border-radius: 50%;
        &::after {
          position: absolute;
          left: -24px;
          top: 11px;
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
        position: relative;
        top: 16px;
        font-size: 18px;
        margin-right: -10px;
      }
    }
  }
}
</style>
