<template>
  <div class="assessment-detail">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <section class="content-container bg-white">
      <div class="content-title">
        <div>{{ performanceDetail.name }}</div>
        <div class="create-btn">
          <el-button type="primary" @click="openAssessment">开启考核</el-button>
        </div>
      </div>
      <div class="list-timeline">
        <div class="time-line active" data="填写中100/确认中300">指标设定</div>
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
        <div class="time-line">上级评分</div>
        <div class="time-line-sign" data="11月30日"></div>
        <div class="time-line">隔级审核</div>
        <div class="time-line-sign" data="12月1日"></div>
        <div class="time-line">总裁审核</div>
        <div class="time-line-sign" data="12月18日"></div>
        <div class="time-line">结果确认</div>
        <div class="time-line-sign" data="12月30日"></div>
      </div>
    </section>
    <section class="content-container">
      <div class="setting-list-box">
        <div class="setting-title">
          <div>基本设置</div>
          <div class="update-settin" @click="modifySettings">修改设置</div>
        </div>
        <div class="basic-setting">
          <div class="setting-detail">
            <div class="setting-key">考核名称:</div>
            <div class="setting-value">{{ performanceDetail.name }}</div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">适用范围:</div>
            <div class="setting-value">学习事业部</div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">考核类型:</div>
            <div class="setting-value">年度</div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">考核周期:</div>
            <div class="setting-value">2019年3月-2019年12月</div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">绩效模板:</div>
            <div class="setting-value">
              学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板学习部门的绩效模板模板
            </div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">是否允许申诉:</div>
            <div class="setting-value">是</div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">标签规则:</div>
            <div class="setting-value">23221</div>
          </div>
        </div>
      </div>
      <div class="setting-list-box">
        <div class="setting-title">
          <div>时间设置</div>
          <div class="update-settin" @click="modifyTimes">修改时间</div>
        </div>
        <div class="time-setting">
          <div class="time-setting-box">
            <div class="setting-key">整体起止时间:</div>
            <div class="setting-value">2019年-11-01至2019年12-31</div>
          </div>
          <div class="time-setting-box">
            <div class="setting-key">各阶段起止时间:</div>
            <div class="setting-detail">
              <div class="setting-value" data="2019-11-15">
                指标设定截止时间
              </div>
              <div class="setting-value" data="2019-11-15">自评时间</div>
              <div class="setting-value" data="2019-11-15">上级评时间</div>
              <div class="setting-value" data="2019-11-15">隔级审核开始</div>
              <div class="setting-value" data="2019-11-15">
                总裁审核时间开始
              </div>
              <div class="setting-value" data="2019-11-15">
                结果确认截止时间
              </div>
            </div>
          </div>
          <div class="time-setting-box">
            <div class="setting-key">可申诉时间段:</div>
            <div class="setting-value">2019年-11-01至2019年12-31</div>
          </div>
        </div>
      </div>
      <div class="setting-list-box">
        <div class="setting-title">考核人员名单</div>
        <el-form
          ref="personalForm"
          class="form-list"
          :model="personalForm"
          label-width="110px"
        >
          <el-form-item label="姓名(工号):">
            <el-input
              v-model="personalForm.name_or_workcode"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item label="事业部:">
            <el-cascader
              v-model="personalForm.department_ids"
              placeholder="请选择事业部"
              :props="filterProps"
              :options="orgTree"
              :show-all-levels="false"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="状态:">
            <el-input
              v-model="personalForm.status"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item label="高管类别:">
            <el-input
              v-model="personalForm.executive_type"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item label="直接上级:">
            <el-input
              v-model="personalForm.superior_name"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item label="隔级:">
            <el-input
              v-model="personalForm.isolation_name"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item label="HRD:">
            <el-input
              v-model="personalForm.hrd_name"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item label="总裁:">
            <el-input
              v-model="personalForm.president_name"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item label="HRBP:">
            <el-input
              v-model="personalForm.hrbp_name"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm('personalForm')">重置</el-button>
            <el-button type="primary" @click="onQuery">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="table-header"></div>
        <el-table :data="userList" stripe style="width: 100%;margin-top:20px">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="workcode" label="工号"> </el-table-column>
          <el-table-column prop="department" label="总部/事业部">
          </el-table-column>
          <el-table-column prop="business" label="大部门/分校">
          </el-table-column>
          <el-table-column prop="email" label="邮箱"> </el-table-column>
          <el-table-column prop="executive_type_text" label="高管类别">
          </el-table-column>
          <el-table-column prop="superior_name" label="直接上级">
          </el-table-column>
          <el-table-column prop="isolation_name" label="隔级">
          </el-table-column>
          <el-table-column prop="president_name" label="总裁">
          </el-table-column>
          <el-table-column prop="hrbp_name" label="HRBP"> </el-table-column>
          <el-table-column prop="hrd_name" label="HRD"> </el-table-column>
          <el-table-column prop="state" fixed="right" width="80" label="状态">
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="180">
            <template slot-scope="scope">
              <el-button @click="modify(scope.row)" type="text" size="small"
                >修改</el-button
              >
              <el-button @click="remove(scope.row)" type="text" size="small"
                >移除</el-button
              >
              <el-button
                @click="viewIndicators(scope.row)"
                type="text"
                size="small"
                >查看指标</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <br />
        <el-row type="flex" justify="end">
          <pagination
            @current-change="handleCurrentChange"
            :currentPage="currentPage"
            :total="total"
          ></pagination>
        </el-row>
      </div>
    </section>
    <assessment-dialog
      v-if="showDialog"
      :visible="showDialog"
      @close="tplDialogClose"
      :infoType="infoType"
      :performanceId="performanceId"
      :performanceTypes="performanceTypes"
      :orgTree="orgTree"
    ></assessment-dialog>
    <setup-time
      v-if="showSetupTime"
      :visible="showSetupTime"
      @close="setupTimeClose"
      :performanceId="performanceId"
      :initTime="initTime"
    ></setup-time>
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
  putOpenAssessment,
  getOrganization,
  getPerformanceTypes,
  getPerformanceDetail,
  getPerformanceUser
} from "@/constants/API";
import { LABEL_EMPTY, LABEL_SELECT_DIVISION } from "@/constants/TEXT";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "confirm-dialog": AsyncComp(
      import("@/components/modules/seniorexecutive/ConfirmDialog/index.vue")
    ),
    "assessment-dialog": AsyncComp(
      import("@/components/modules/seniorexecutive/AssessmentDialog/index.vue")
    ),
    "setup-time": AsyncComp(
      import("@/components/modules/seniorexecutive/SetupTime/index.vue")
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
      performanceDetail: {},
      performanceId: this.$route.params.id,
      currentPage: 1,
      total: 0,
      showConfirmDialog: false,
      showDialog: false,
      showSetupTime: false,
      infoType: "add",
      performanceTypes: [],
      orgTree: [],
      tipsText: "",
      nav: [
        {
          label: "高管绩效考核列表",
          active: false
        },
        {
          label: "考核详情",
          active: true
        }
      ],
      personalForm: {
        name_or_workcode: "",
        department_ids: [],
        status: "",
        executive_type: "",
        superior_name: "",
        isolation_name: "",
        president_name: "",
        hrbp_name: "",
        hrd_name: ""
      },
      userList: []
    };
  },
  computed: {
    initTime() {
      return {
        entirety_start_time: this.performanceDetail.entirety_start_time,
        entirety_end_time: this.performanceDetail.entirety_end_time,
        indicator_setting_end_time: this.performanceDetail
          .indicator_setting_end_time,
        self_evaluation_begin_time: this.performanceDetail
          .self_evaluation_begin_time,
        superior_begin_time: this.performanceDetail.superior_begin_time,
        isolation_begin_time: this.performanceDetail.isolation_begin_time,
        president_audit_begin_time: this.performanceDetail
          .president_audit_begin_time,
        result_comfirm_end_time: this.performanceDetail.result_comfirm_end_time,
        appeal_begin_time: this.performanceDetail.appeal_begin_time,
        appeal_end_time: this.performanceDetail.appeal_end_time
      };
    }
  },
  methods: {
    modifySettings() {
      this.infoType = "modify";
      this.showDialog = true;
    },
    modifyTimes() {
      this.showSetupTime = true;
    },
    setupTimeClose() {
      this.showSetupTime = false;
    },
    tplDialogClose() {
      this.showDialog = false;
    },
    openAssessment() {
      this.showConfirmDialog = true;
      this.tipsText = "是否确认启动考核？";
    },
    confirmDialog() {
      // 确定按钮
      // this.showConfirmDialog = false;
      // putOpenAssessment(this.performanceId).then(res => {
      //   console.log(res)
      // }).catch(e => {});
    },
    closeDialog() {
      this.showConfirmDialog = false;
    },
    handleCurrentChange() {
      this.currentPage = val;
    },
    onQuery() {
      this.getUserList();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    viewIndicators(data) {
      // 查看指标
    },
    remove(data) {
      // 移除
    },
    modify(data) {
      // 修改
    },
    getUserList() {
      getPerformanceUser(this.performanceId, this.personalForm)
        .then(res => {
          this.userList = res;
        })
        .catch(e => {});
    }
  },
  created() {
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
    getPerformanceDetail()
      .then(res => {
        this.performanceDetail = res;
      })
      .catch(e => {});
    this.getUserList();
  }
};
</script>
<style lang="scss" scoped>
.assessment-detail {
  color: #303133;
  .bg-white {
    background-color: white;
  }
  .content-title {
    position: relative;
    font-size: 22px;
    text-align: center;
    .create-btn {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .list-timeline {
    display: flex;
    padding: 40px 30px;
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
  .setting-list-box {
    margin-bottom: 8px;
    background-color: #fff;
    .setting-title {
      display: flex;
      justify-content: space-between;
      padding: 14px 24px;
      font-size: 16px;
      border-bottom: 1px solid #e9ebf2;
      .update-settin {
        font-size: 14px;
        color: #38d0af;
        cursor: pointer;
      }
    }
    .basic-setting {
      padding: 20px 24px;
      overflow: hidden;
      .setting-detail {
        float: left;
        box-sizing: border-box;
        padding: 0 10px;
        width: 33.33%;
        margin-bottom: 16px;
        &:nth-child(7n) {
          margin-bottom: 0;
        }
        .setting-key {
          float: left;
          width: 90px;
          text-align: right;
          color: #909399;
        }
        .setting-value {
          float: left;
          margin-left: 8px;
          width: calc(100% - 98px);
          line-height: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .time-setting {
      padding: 20px 24px;
      .time-setting-box {
        display: flex;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        .setting-key {
          width: 110px;
          text-align: right;
          color: #909399;
          margin-right: 8px;
        }
        .setting-detail {
          width: calc(100% - 118px);
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .setting-value {
            position: relative;
            min-width: 110px;
            &::after {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              top: 22px;
              width: 100%;
              content: attr(data);
            }
          }
        }
      }
    }
    .form-list {
      padding: 20px 24px;
      overflow: hidden;
      .el-form-item {
        float: left;
        width: 33.33%;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
