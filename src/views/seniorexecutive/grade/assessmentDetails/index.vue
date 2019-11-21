<template>
  <div class="assessment-detail">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <section class="content-container bg-white">
      <div class="content-title">
        <div>{{ performanceDetail.name }}</div>
        <div class="create-btn">
          <el-button
            type="primary"
            :disabled="!performanceDetail.can_start"
            v-if="performanceDetail.stage === 0"
            @click="openAssessment"
            >开启考核</el-button
          >
        </div>
      </div>
      <div class="list-timeline">
        <div
          class="time-line"
          :class="performanceDetail.stage === 0 ? '' : 'active'"
          :data="
            '填写中' +
              performanceDetail.indicator_fill_in +
              '/确认中' +
              performanceDetail.indicator_confirm
          "
        >
          指标设定
        </div>
        <div
          class="time-line-sign"
          :class="performanceDetail.stage === 0 ? '' : 'active'"
          :data="performanceDetail.indicator_setting_end_time | filterDate"
        ></div>
        <div
          class="time-line-circle"
          :class="
            performanceDetail.self_evaluation_begin_time > nowTime
              ? 'active'
              : ''
          "
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
          :class="
            performanceDetail.self_evaluation_begin_time > nowTime
              ? 'active'
              : ''
          "
          :data="performanceDetail.self_evaluation_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="performanceDetail.self_evaluation > nowTime ? 'active' : ''"
          :data="'自评中' + performanceDetail.self_evaluation"
        >
          自评
        </div>
        <div
          class="time-line-sign"
          :class="
            performanceDetail.superior_begin_time > nowTime ? 'active' : ''
          "
          :data="performanceDetail.superior_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="
            performanceDetail.superior_begin_time > nowTime ? 'active' : ''
          "
          :data="'复评中' + performanceDetail.re_evaluation"
        >
          上级评分
        </div>
        <div
          class="time-line-sign"
          :class="
            performanceDetail.isolation_begin_time > nowTime ? 'active' : ''
          "
          :data="performanceDetail.isolation_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="
            performanceDetail.isolation_begin_time > nowTime ? 'active' : ''
          "
          :data="'隔级审核中' + performanceDetail.isolation_adult"
        >
          隔级审核
        </div>
        <div
          class="time-line-sign"
          :class="
            performanceDetail.president_audit_begin_time > nowTime
              ? 'active'
              : ''
          "
          :data="performanceDetail.president_audit_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="
            performanceDetail.president_audit_begin_time > nowTime
              ? 'active'
              : ''
          "
          :data="'总裁审核中' + performanceDetail.president_audit"
        >
          总裁审核
        </div>
        <div
          class="time-line-sign"
          :class="performanceDetail.stage === 60 ? 'active' : ''"
          :data="performanceDetail.result_comfirm_end_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="performanceDetail.stage === 60 ? 'active' : ''"
          :data="
            '确认中' +
              performanceDetail.confirm +
              '/已确认' +
              performanceDetail.confirmed
          "
        >
          结果确认
        </div>
        <div
          class="time-line-sign"
          :class="performanceDetail.stage === 60 ? 'active' : ''"
          :data="performanceDetail.result_confirm_end_time | filterDate"
        ></div>
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
            <div class="setting-value">
              {{ performanceDetail.departments_text }}
            </div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">绩效类型:</div>
            <div
              class="setting-value"
              v-if="performanceDetail.performance_type === 'annual'"
            >
              年度
            </div>
            <div
              class="setting-value"
              v-if="performanceDetail.performance_type === 'semi-annual'"
            >
              半年度
            </div>
            <div
              class="setting-value"
              v-if="performanceDetail.performance_type === 'quarter'"
            >
              季度
            </div>
            <div
              class="setting-value"
              v-if="performanceDetail.performance_type === 'monthly'"
            >
              月度
            </div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">考核周期:</div>
            <div class="setting-value">
              {{ performanceDetail.period_start_time | filterDate }}~{{
                performanceDetail.period_end_time | filterDate
              }}
            </div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">绩效模板:</div>
            <div
              class="setting-value"
              v-for="item in performanceDetail.templates"
              :key="item.id"
            >
              <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">是否允许申诉:</div>
            <div class="setting-value">
              {{ performanceDetail.allow_appeal === 1 ? "是" : "否" }}
            </div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">标签规则:</div>
            <div
              class="setting-value"
              v-for="item in performanceDetail.tag"
              :key="item.id"
            >
              <span>{{ item.tag_type }}</span>
            </div>
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
            <div class="setting-value">
              {{ initTime.entirety_start_time | filterDate }} 至
              {{ initTime.entirety_end_time | filterDate }}
            </div>
          </div>
          <div class="time-setting-box">
            <div class="setting-key">各阶段起止时间:</div>
            <div class="setting-detail">
              <div
                class="setting-value"
                :data="initTime.indicator_setting_end_time | filterDate"
              >
                指标设定截止时间
              </div>
              <div
                class="setting-value"
                :data="initTime.self_evaluation_begin_time | filterDate"
              >
                自评时间
              </div>
              <div
                class="setting-value"
                :data="initTime.superior_begin_time | filterDate"
              >
                上级评时间
              </div>
              <div
                class="setting-value"
                :data="initTime.isolation_begin_time | filterDate"
              >
                隔级审核开始
              </div>
              <div
                class="setting-value"
                :data="initTime.president_audit_begin_time | filterDate"
              >
                总裁审核时间开始
              </div>
              <div
                class="setting-value"
                :data="initTime.result_confirm_end_time | filterDate"
              >
                结果确认截止时间
              </div>
            </div>
          </div>
          <div class="time-setting-box">
            <div class="setting-key">可申诉时间段:</div>
            <div class="setting-value">
              {{ initTime.appeal_begin_time | filterDate }}至{{
                initTime.appeal_end_time | filterDate
              }}
            </div>
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
          <el-form-item
            class="limit-width"
            prop="name_or_workcode"
            label="姓名(工号):"
          >
            <el-input
              v-model="personalForm.name_or_workcode"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item
            class="limit-width"
            prop="department_ids"
            label="事业部:"
          >
            <el-cascader
              v-model="personalForm.department_ids"
              placeholder="请选择事业部"
              :props="filterProps"
              :options="orgTree"
              :show-all-levels="false"
            ></el-cascader>
          </el-form-item>
          <el-form-item class="limit-width" prop="stage" label="状态:">
            <el-select v-model="personalForm.stage" placeholder="请选择">
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="limit-width" prop="hrd_name" label="HRD:">
            <el-input
              v-model="personalForm.hrd_name"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item
            class="limit-width"
            prop="superior_name"
            label="直接上级:"
          >
            <el-input
              v-model="personalForm.superior_name"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item class="limit-width" prop="hrbp_name" label="HRBP:">
            <el-input
              v-model="personalForm.hrbp_name"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item
            class="limit-width"
            prop="distribution_253"
            label="253分布:"
          >
            <el-input
              v-model="personalForm.distribution_253"
              placeholder="请选择"
            ></el-input>
          </el-form-item>
          <el-form-item
            class="limit-width"
            prop="executive_type"
            label="组织部类别:"
          >
            <el-select
              v-model="personalForm.executive_type"
              clearable
              placeholder="请选择"
            >
              <el-option
                v-for="item in executiveTypes"
                :key="item.key"
                :label="item.name"
                :value="item.key"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="limit-width" prop="isolation_name" label="隔级:">
            <el-input
              v-model="personalForm.isolation_name"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item class="limit-width" prop="president_name" label="总裁:">
            <el-input
              v-model="personalForm.president_name"
              placeholder="请输入姓名或工号"
            ></el-input>
          </el-form-item>
          <el-form-item class="on-query">
            <el-button @click="resetForm('personalForm')">重置</el-button>
            <el-button type="primary" @click="onQuery">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="table-operate">
          <!-- <el-button
            type="primary"
            icon="el-icon-view"
            @click="viewDistribution"
            >查看分布</el-button
          > -->
          <el-button-group class="btn-group">
            <el-button
              icon="el-icon-bell"
              :disabled="currentStage < 10"
              @click="reminder"
              >提醒</el-button
            >
            <el-button icon="el-icon-plus" @click="addPerson"
              >添加人员</el-button
            >
            <el-button icon="el-icon-download" @click="exportList"
              >导出名单</el-button
            >
            <el-popover placement="bottom" width="120" trigger="hover">
              <div class="more-btn" @click="showUploadWork('finance')">
                <i class="el-icon-upload2"></i><span>上传财务指标</span>
              </div>
              <div class="more-btn" @click="showUploadWork('work')">
                <i class="el-icon-upload2"></i><span>上传工作目标</span>
              </div>
              <div class="more-btn" @click="removeList">
                <i class="el-icon-delete"></i><span>移除</span>
              </div>
              <el-button icon="el-icon-more" slot="reference"></el-button>
            </el-popover>
          </el-button-group>
          <div class="table-number">
            <i class="el-icon-info"></i> 共{{ total }}人，已选
            <span>{{ selectedNumber }}</span> 人
          </div>
        </div>
        <el-table
          :data="userList"
          stripe
          style="width: 100%;margin-top:20px"
          ref="multipleTable"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column
            prop="workcode"
            label="工号"
            width="80"
          ></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column
            prop="business_unit_name"
            width="200"
            label="总部/事业部"
          ></el-table-column>
          <el-table-column
            prop="sub_department_name"
            label="大部门/分校"
            width="200"
          ></el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="executive_type_text"
            label="组织部类别"
            width="200"
          ></el-table-column>
          <el-table-column prop="hrbp_name" label="HRBP"></el-table-column>
          <el-table-column prop="hrd_name" label="HRD"></el-table-column>
          <el-table-column
            prop="superior_name"
            label="直接上级"
          ></el-table-column>
          <el-table-column prop="isolation_name" label="隔级"></el-table-column>
          <el-table-column prop="president_name" label="总裁"></el-table-column>
          <el-table-column
            prop="self_evaluation_score"
            label="自评分"
          ></el-table-column>
          <el-table-column
            prop="re_evaluation_score"
            label="复评分"
          ></el-table-column>
          <el-table-column
            prop="culture_score"
            label="文化评分"
          ></el-table-column>
          <el-table-column
            prop="final_score"
            label="最终成绩"
          ></el-table-column>
          <el-table-column
            prop="distribution_253"
            label="规则分布"
          ></el-table-column>
          <el-table-column
            prop="stage_text"
            fixed="right"
            width="80"
            label="状态"
          ></el-table-column>
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
      @define="tplDefine"
    ></assessment-dialog>
    <setup-time
      v-if="showSetupTime"
      :visible="showSetupTime"
      @close="setupTimeClose"
      :performanceId="performanceId"
      :initTime="initTime"
      @define="confirmTime"
    ></setup-time>
    <modify-user
      v-if="showModifyUser"
      :visible="showModifyUser"
      @close="modifyUserClose"
      :userType="userType"
      :userId="userId"
      :performanceId="performanceId"
      :userInfo="userInfo"
      @define="confirmUser"
    ></modify-user>
    <confirm-dialog
      v-if="showConfirmDialog"
      :visible="showConfirmDialog"
      :tipsText="tipsText"
      @define="confirmDialog"
      @close="closeDialog"
    ></confirm-dialog>
    <common-upload-dialog
      v-if="showUploadWorkFile"
      :visible="showUploadWorkFile"
      :upload_title="upload_title"
      :upload_action_url="upload_action_url"
      :upload_type="upload_type"
      :download_url="download_url"
      @close="upload_close"
    >
    </common-upload-dialog>
  </div>
</template>
<script>
import { AsyncComp } from "@/utils/asyncCom";
import {
  putOpenAssessment,
  getOrganization,
  getPerformanceTypes,
  getPerformanceDetail,
  getPerformanceUser,
  getExecutiveTypes,
  getUserDetail,
  getPerformanceNotice,
  deletePerformanceUser
} from "@/constants/API";
import {
  PATH_PERFORMANCE_GRADE_MANAGEMENT,
  PATH_PERFORMANCE_USER_LIST,
  postUploadFinancialIndicators,
  postUploadWorkIndicators,
  getFinancialtpm, 
  getWorktpm
} from "@/constants/URL";

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
    "modify-user": AsyncComp(
      import("@/components/modules/seniorexecutive/ModifyUser/index.vue")
    ),
    "common-upload-dialog": AsyncComp(
      import("@/components/modules/seniorexecutive/CommonUpload/index.vue")
    ),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  data() {
    return {
      filterProps: {
        value: "id",
        label: "name",
        children: "children"
      },
      statusOptions: [
        {
          label: "全部",
          value: ""
        },
        {
          label: "草稿",
          value: "1"
        },
        {
          label: "进行中",
          value: "2"
        },
        {
          label: "已结束",
          value: "4"
        }
      ],
      executiveTypes: [],
      performanceDetail: {},
      performanceId: this.$route.params.id,
      currentPage: 1,
      total: 0,
      selectedNumber: 0,
      showConfirmDialog: false,
      showDialog: false,
      showSetupTime: false,
      infoType: "add",
      performanceTypes: [],
      orgTree: [],
      tipsText: "",
      nowTime: "",
      nav: [
        {
          label: "组织部绩效考核列表",
          href: PATH_PERFORMANCE_GRADE_MANAGEMENT
        },
        {
          label: "考核详情",
          active: true
        }
      ],
      personalForm: {
        name_or_workcode: "",
        department_ids: [],
        stage: "",
        executive_type: "",
        superior_name: "",
        isolation_name: "",
        president_name: "",
        hrbp_name: "",
        distribution_253: "",
        hrd_name: ""
      },
      userList: [],
      performance_user_ids: [],
      showModifyUser: false,
      userInfo: {},
      userType: "add",
      userId: "",
      currentStage: 0,
      showUploadWorkFile: false,
      upload_title: '',
      upload_action_url: '',
      upload_type:'',
      download_url: '',
      constants: {
        postUploadFinancialIndicators,
        postUploadWorkIndicators,
        getFinancialtpm, 
        getWorktpm
      }
    };
  },
  computed: {
    initTime() {
      return {
        start_time: this.performanceDetail.start_time,
        end_time: this.performanceDetail.end_time,
        indicator_setting_end_time: this.performanceDetail
          .indicator_setting_end_time,
        self_evaluation_begin_time: this.performanceDetail
          .self_evaluation_begin_time,
        superior_begin_time: this.performanceDetail.superior_begin_time,
        isolation_begin_time: this.performanceDetail.isolation_begin_time,
        president_audit_begin_time: this.performanceDetail
          .president_audit_begin_time,
        result_confirm_end_time: this.performanceDetail.result_confirm_end_time,
        appeal_begin_time: this.performanceDetail.appeal_begin_time,
        appeal_end_time: this.performanceDetail.appeal_end_time
      };
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
    }
  },
  methods: {
    confirmUser() {
      this.showModifyUser = false;
      this.getUserList();
    },
    tplDefine() {
      this.showDialog = false;
      this.getPerformanceDetailData();
    },
    confirmTime() {
      this.showSetupTime = false;
      this.getPerformanceDetailData();
    },
    modifyUserClose() {
      this.showModifyUser = false;
    },
    handleSelectionChange(val) {
      // performance_user_ids的id是哪一个字段
      // this.performance_user_ids
      console.log(val);
    },
    reminder() {
      getPerformanceNotice(this.performanceId)
        .then(res => {
          console.log(res);
        })
        .catch(e => {});
    },
    addPerson() {
      this.userType = "add";
      this.showModifyUser = true;
    },
    exportList() {
      window.open(
        PATH_PERFORMANCE_USER_LIST(this.performanceId),
        "_blank",
        "noopener"
      );
    },
    uploadFinancialIndicators() {
      console.log("uploadFinancialIndicators");
    },
    uploadWorkObjectives() {
      console.log("uploadWorkObjectives");
    },
    removeList() {
      if (this.performance_user_ids.length === 0) {
        return false;
      }
      deletePerformanceUser(this.performanceId, this.performance_user_ids)
        .then(res => {
          console.log(res);
        })
        .catch(e => {});
    },
    viewDistribution() {
      // 查看分布
    },
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
    confirmDialog(data) {
      if (data === "open") {
        putOpenAssessment(this.performanceId)
          .then(res => {
            this.showConfirmDialog = false;
            this.getPerformanceDetailData();
          })
          .catch(e => {});
      } else {
        this.showConfirmDialog = false;
      }
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
      this.getUserList();
    },
    viewIndicators(data) {
      // 查看指标
    },
    remove(data) {
      // 移除
    },
    modify(data) {
      // 修改
      // this.userInfo
      this.userType = "modify";
      this.showModifyUser = true;
    },
    getUserList() {
      getPerformanceUser(this.performanceId, this.personalForm)
        .then(res => {
          this.userList = res;
        })
        .catch(e => {});
    },
    getPerformanceDetailData() {
      getPerformanceDetail(this.performanceId)
        .then(res => {
          this.currentStage = res.stage;
          this.performanceDetail = res;
        })
        .catch(e => {});
    },
    showUploadWork(type) {
      this.showUploadWorkFile = true;
      if(type == 'finance'){
        this.upload_title =  '上传财务指标';
        this.upload_action_url = this.constants.postUploadFinancialIndicators(this.performanceId);
        this.download_url = this.constants.getFinancialtpm;
        this.upload_type = type;
      }else{
        this.upload_title =  '上传工作目标';
        this.upload_action_url = this.constants.postUploadWorkIndicators(this.performanceId);
        this.download_url = this.constants.getWorktpm(this.performanceId);
        this.upload_type = type
      }
    },
    upload_close() {
      this.showUploadWorkFile = false;
    }
  },
  created() {
    this.nowTime = new Date();
    this.getPerformanceDetailData();
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
    getExecutiveTypes()
      .then(res => {
        this.executiveTypes = res;
      })
      .catch(e => {});
    this.getUserList();
  }
};
</script>
<style scoped>
.limit-width >>> .el-form-item__content {
  width: 194px;
}
.more-btn {
  padding: 0 20px;
  line-height: 36px;
  cursor: pointer;
}
.more-btn i {
  margin-right: 5px;
}
.more-btn:hover {
  background-color: #eefcf7;
  color: #75e4bc;
}
</style>
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
      position: relative;
      width: 15%;
      padding: 6px 0 30px 0;
      text-align: center;
      border-bottom: 4px solid #e6e9f0;
      &::after {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 26px;
        width: 100%;
        content: attr(data);
        color: #ff8519;
        font-size: 12px;
      }
    }
    .time-line.active {
      border-bottom: 4px solid #38d0afff;
    }
    .time-line-sign {
      position: relative;
      top: 50px;
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
      top: 47px;
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
      .on-query {
        width: 66.66%;
        text-align: right;
      }
    }
    .table-operate {
      display: flex;
      .btn-group {
        margin: 0 10px;
      }
    }
    .table-number {
      line-height: 40px;
      i,
      span {
        color: #38d0af;
      }
    }
  }
}
</style>
