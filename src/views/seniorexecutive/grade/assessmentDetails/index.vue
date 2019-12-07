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
            v-if="performanceDetail.stage === 0 && showExecutiveScoreManagement"
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
            performanceDetail.stage === 0
              ? ''
              : '填写中' +
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
            performanceDetail.self_evaluation_begin_time | filterCompareDate
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
            performanceDetail.self_evaluation_begin_time | filterCompareDate
          "
          :data="performanceDetail.self_evaluation_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="
            performanceDetail.self_evaluation_begin_time | filterCompareDate
          "
          :data="
            performanceDetail.stage === 0
              ? ''
              : '自评中' + performanceDetail.self_evaluation
          "
        >
          自评
        </div>
        <div
          class="time-line-sign"
          :class="performanceDetail.superior_begin_time | filterCompareDate"
          :data="performanceDetail.superior_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="performanceDetail.superior_begin_time | filterCompareDate"
          :data="
            performanceDetail.stage === 0
              ? ''
              : '复评中' + performanceDetail.re_evaluation
          "
        >
          上级评分
        </div>
        <div
          class="time-line-sign"
          :class="performanceDetail.isolation_begin_time | filterCompareDate"
          :data="performanceDetail.isolation_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="performanceDetail.isolation_begin_time | filterCompareDate"
          :data="
            performanceDetail.stage === 0
              ? ''
              : '隔级审核中' + performanceDetail.isolation_adult
          "
        >
          隔级审核
        </div>
        <div
          class="time-line-sign"
          :class="
            performanceDetail.president_audit_begin_time | filterCompareDate
          "
          :data="performanceDetail.president_audit_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="
            performanceDetail.president_audit_begin_time | filterCompareDate
          "
          :data="
            performanceDetail.stage === 0
              ? ''
              : '总裁审核中' + performanceDetail.president_audit
          "
        >
          总裁审核
        </div>
        <div
          class="time-line-sign"
          :class="performanceDetail.stage >= 530 ? 'active' : ''"
          :data="performanceDetail.result_comfirm_end_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="performanceDetail.stage >= 530 ? 'active' : ''"
          :data="
            performanceDetail.stage === 0
              ? ''
              : '确认中' +
                performanceDetail.confirm +
                '/已确认' +
                performanceDetail.confirmed
          "
        >
          结果确认
        </div>
        <div
          class="time-line-sign"
          :class="performanceDetail.stage >= 530 ? 'active' : ''"
          :data="performanceDetail.result_confirm_end_time | filterDate"
        ></div>
      </div>
    </section>
    <section class="content-container">
      <div class="setting-list-box">
        <div class="setting-title">
          <div>基本设置</div>
          <div
            v-if="showExecutiveScoreManagement"
            class="update-settin"
            @click="modifySettings"
          >
            修改设置
          </div>
        </div>
        <div class="basic-setting">
          <div class="setting-detail">
            <div class="setting-key">考核名称:</div>
            <div class="setting-value">{{ performanceDetail.name }}</div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">适用范围:</div>
            <el-tooltip
              class="item"
              effect="dark"
              :content="performanceDetail.departments_text"
              placement="top"
            >
              <div class="setting-value">
                {{ performanceDetail.departments_text }}
              </div>
            </el-tooltip>
          </div>
          <div class="setting-detail">
            <div class="setting-key">绩效类型:</div>
            <div class="setting-value">
              {{ performanceDetail.performance_type | filterType }}
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
              v-for="item in performanceDetail.templates"
              :key="item.id"
              class="setting-value performance-tpl"
            >
              <el-tooltip
                class="item"
                effect="dark"
                :content="item.name"
                placement="top"
              >
                <div class="setting-value">
                  {{ item.name }}
                </div>
              </el-tooltip>
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
            <div class="setting-value">
              <span v-if="performanceDetail.tag">{{
                performanceDetail.tag.tag_type
              }}</span>
            </div>
          </div>
          <div class="setting-detail">
            <div class="setting-key">考核年份:</div>
            <div class="setting-value">{{ performanceDetail.year }}</div>
          </div>
        </div>
      </div>
      <div class="setting-list-box">
        <div class="setting-title">
          <div>时间设置</div>
          <div
            v-if="showExecutiveScoreManagement"
            class="update-settin"
            @click="modifyTimes"
          >
            修改时间
          </div>
        </div>
        <div class="time-setting">
          <div class="time-setting-box">
            <div class="setting-key">整体考核起止时间:</div>
            <div class="setting-value">
              {{ initTime.start_time | filterDate }} 至
              {{ initTime.end_time | filterDate }}
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
                自评开始时间
              </div>
              <div
                class="setting-value"
                :data="initTime.superior_begin_time | filterDate"
              >
                上级评开始时间
              </div>
              <div
                class="setting-value"
                :data="initTime.isolation_begin_time | filterDate"
              >
                隔级审核开始时间
              </div>
              <div
                class="setting-value"
                :data="initTime.president_audit_begin_time | filterDate"
              >
                总裁审核开始时间
              </div>
              <div
                class="setting-value"
                :data="initTime.result_confirm_end_time | filterDate"
              >
                结果确认截止时间
              </div>
            </div>
          </div>
          <div v-if="initTime.allow_appeal" class="time-setting-box">
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
          label-width="120px"
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
                v-for="(value, name) in stageOptions"
                :key="value"
                :label="value"
                :value="name"
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
            prop="tag_rule_id"
            label="规则分布:"
          >
            <el-select
              v-model="personalForm.tag_rule_id"
              clearable
              placeholder="请选择"
            >
              <el-option
                v-for="item in tagOptions"
                :key="item.id"
                :label="item.display_name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            class="limit-width"
            prop="executive_type"
            label="组织部成员类别:"
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
          <el-button-group class="btn-group">
            <el-button
              icon="el-icon-upload2"
              @click="importList"
              v-if="showExecutiveScoreUserManagement"
              >导入名单</el-button
            >
            <el-button
              icon="el-icon-download"
              v-if="showExecutiveScoreUserManagement"
              ><a class="down-load" download :href="exportUrl">导出名单</a>
            </el-button>
            <el-button
              icon="el-icon-bell"
              v-if="showExecutiveScoreUserManagement"
              :disabled="currentStage < 100"
              @click="reminder"
              >提醒</el-button
            >
            <el-button
              v-if="showExecutiveScoreUserManagement"
              icon="el-icon-plus"
              @click="addPerson"
              >添加人员</el-button
            >
            <el-button
              icon="el-icon-download"
              v-if="showExecutiveScoreUserManagement"
              ><a class="down-load" download :href="exportDetailUrl"
                >导出明细</a
              >
            </el-button>
            <el-popover placement="bottom" width="120" trigger="hover">
              <div
                class="more-btn"
                v-if="showExecutiveScoreManagement"
                @click="showUploadWork('finance')"
              >
                <i class="el-icon-upload2"></i><span>上传财务指标</span>
              </div>
              <div
                class="more-btn"
                v-if="showExecutiveScoreUserManagement"
                @click="showUploadWork('work')"
              >
                <i class="el-icon-upload2"></i><span>上传工作指标</span>
              </div>
              <div
                class="more-btn"
                v-if="showExecutiveScoreUserManagement"
                @click="removeList"
              >
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
          <el-table-column
            width="100"
            prop="name"
            label="姓名"
          ></el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            prop="business_unit_name"
            width="200"
            label="总部/事业部"
          ></el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            prop="sub_department_name"
            label="大部门/分校"
            width="200"
          >
            <template slot-scope="scope">
              <div v-if="scope.row.sub_department_name">
                {{ scope.row.sub_department_name }}
              </div>
              <div v-else>
                — —
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            prop="email"
            label="邮箱"
            width="120"
          ></el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            prop="executive_type_text"
            label="组织部成员类别"
            width="200"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="hrbp_name"
            label="HRBP"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="hrd_name"
            label="HRD"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="superior_name"
            label="直接上级"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="isolation_name"
            label="隔级"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="president_name"
            label="总裁"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="self_evaluation_score"
            label="自评分"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="re_evaluation_score"
            label="复评分"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="culture_score"
            label="文化评分"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="final_score"
            label="最终成绩"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="tag_rule_id"
            label="规则分布"
          ></el-table-column>
          <el-table-column
            prop="stage_text"
            fixed="right"
            width="120"
            label="状态"
          ></el-table-column>
          <el-table-column label="操作" fixed="right" width="180">
            <template slot-scope="scope">
              <el-button
                v-if="showExecutiveScoreUserManagement"
                @click="modifyUser(scope.row)"
                type="text"
                size="small"
                >修改</el-button
              >
              <el-button
                v-if="showExecutiveScoreUserManagement"
                @click="remove(scope.row.id)"
                type="text"
                size="small"
                >移除</el-button
              >
              <el-button
                @click="viewIndicators(scope.row)"
                type="text"
                size="small"
                >查看详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <br />
        <el-row type="flex" justify="end">
          <el-pagination
            background
            v-if="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="personalForm.page"
            :page-sizes="[10, 20, 50]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
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
      @update="tplDefine"
    ></assessment-dialog>
    <setup-time
      v-if="showSetupTime"
      :visible="showSetupTime"
      @close="setupTimeClose"
      :performanceId="performanceId"
      :initTime="initTime"
      @update="confirmTime"
    ></setup-time>
    <modify-user
      v-if="showModifyUser"
      :visible="showModifyUser"
      @close="modifyUserClose"
      :userType="userType"
      :performanceId="performanceId"
      :userId="userId"
      :userInfo="userInfo"
      @update="confirmUser"
    ></modify-user>
    <confirm-dialog
      v-if="showConfirmDialog"
      :visible="showConfirmDialog"
      :tipsText="tipsText"
      :confirmType="confirmType"
      @update="confirmDialog"
      @close="closeDialog"
    ></confirm-dialog>
    <import-list
      v-if="showImportList"
      :visible="showImportList"
      :uploadTplUrl="uploadTplUrl"
      :importTplUrl="importTplUrl"
      :performanceId="performanceId"
      @close="closeImportList"
      @update="confirmImportUser"
    >
    </import-list>
    <common-upload
      v-if="showUpload"
      :visible="showUpload"
      :uploadTitle="uploadTitle"
      :uploadActionUrl="uploadActionUrl"
      :downloadUrl="downloadUrl"
      @close="uploadClose"
      @update="confirmUpload"
    >
    </common-upload>
  </div>
</template>
<script>
import { AsyncComp } from "@/utils/asyncCom";
import {
  putExecutiveOpenAssessment,
  getExecutiveOrganization,
  getExecutivePerformanceTypes,
  getExecutivePerformanceDetail,
  getExecutivePerformanceUser,
  getCurrentExecutiveTypes,
  getUserDetail,
  postExecutivePerformanceNotice,
  deleteExecutivePerformanceUser,
  getExecutivePerformanceTagTypes,
  getExecutiveStageList
} from "@/constants/API";
import {
  PATH_PERFORMANCE_GRADE_MANAGEMENT,
  PATH_EXECUTIVE_EXPORT_USER_LIST,
  PATH_EXECUTIVE_EXPORT_DETAIL,
  PATH_EXECUTIVE_UPLOAD_FINANCIAL_INDICATORS,
  PATH_EXECUTIVE_UPLOAD_WORK_INDICATORS,
  PATH_EXECUTIVE_IMPORT_FINANCIAL_INDICATORS,
  PATH_EXECUTIVE_IMPORT_WORK_INDICATORS,
  PATH_EXECUTIVE_IMPORT_USER_LIST,
  PATH_EXECUTIVE_PERFORMANCE_IMPORT_USER,
  PATH_PERFORMANCE_INDEX_DETAIL
} from "@/constants/URL";

import { LABEL_EMPTY, LABEL_SELECT_DIVISION } from "@/constants/TEXT";
export default {
  components: {
    "nav-bar": AsyncComp(import("@/components/common/Navbar/index.vue")),
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
    "common-upload": AsyncComp(
      import("@/components/modules/seniorexecutive/CommonUpload/index.vue")
    ),
    "import-list": AsyncComp(
      import("@/components/modules/seniorexecutive/ImportList/index.vue")
    )
  },
  data() {
    return {
      filterProps: {
        value: "id",
        label: "name",
        children: "children"
      },
      executiveTypes: [],
      tagOptions: [],
      performanceDetail: {
        name: "",
        stage: 0,
        indicator_fill_in: 0,
        indicator_confirm: 0,
        indicator_setting_end_time: null,
        self_evaluation_begin_time: null,
        self_evaluation: null,
        superior_begin_time: null,
        re_evaluation: 0,
        isolation_begin_time: null,
        isolation_adult: 0,
        president_audit_begin_time: null,
        president_audit: 0,
        result_comfirm_end_time: null,
        confirm: 0,
        confirmed: 0,
        result_confirm_end_time: null
      },
      performanceId: this.$route.params.id,
      total: 0,
      selectedNumber: 0,
      showConfirmDialog: false,
      showDialog: false,
      showSetupTime: false,
      infoType: "add",
      performanceTypes: [],
      orgTree: [],
      tipsText: "",
      confirmType: "",
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
        tag_rule_id: "",
        hrd_name: "",
        page: 1,
        perPage: 10
      },
      userList: [],
      performance_user_ids: [],
      showModifyUser: false,
      userInfo: {},
      userId: 0,
      userType: "add",
      currentStage: 0,
      showUpload: false,
      uploadTitle: "",
      uploadActionUrl: "",
      downloadUrl: "",
      showImportList: false,
      uploadTplUrl: "",
      importTplUrl: "",
      exportUrl: "",
      exportDetailUrl: "",
      constants: {
        PATH_EXECUTIVE_UPLOAD_FINANCIAL_INDICATORS,
        PATH_EXECUTIVE_UPLOAD_WORK_INDICATORS,
        PATH_EXECUTIVE_IMPORT_FINANCIAL_INDICATORS,
        PATH_EXECUTIVE_IMPORT_WORK_INDICATORS
      },
      permissions: [],
      stageOptions: {}
    };
  },
  computed: {
    showExecutiveScoreManagement() {
      return this.permissions.includes(400);
    },
    showExecutiveScoreUserManagement() {
      return this.permissions.includes(410);
    },
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
        appeal_end_time: this.performanceDetail.appeal_end_time,
        allow_appeal: this.performanceDetail.allow_appeal
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
    },
    filterCompareDate(val) {
      if (val) {
        let time = new Date(val);
        let nowTime = new Date();
        if (time.getTime() < nowTime.getTime()) {
          return "active";
        } else {
          return "";
        }
      } else {
        return "";
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.personalForm.perPage = val;
      this.getUserList();
    },
    handleCurrentChange(val) {
      this.personalForm.page = val;
      this.getUserList();
    },
    confirmUpload() {
      this.showUpload = false;
      this.getUserList();
    },
    confirmImportUser() {
      this.showImportList = false;
      this.getUserList();
    },
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
    handleSelectionChange(data) {
      this.selectedNumber = data.length;
      this.performance_user_ids = [];
      for (let i = 0; i < data.length; i++) {
        this.performance_user_ids.push(data[i].id);
      }
      this.exportUrl = PATH_EXECUTIVE_EXPORT_USER_LIST(
        this.performanceId,
        this.performance_user_ids
      );
      this.exportDetailUrl = PATH_EXECUTIVE_EXPORT_DETAIL(
        this.performanceId,
        this.performance_user_ids
      );
    },
    reminder() {
      let data = {
        performance_id: this.performanceId,
        performance_user_ids: this.performance_user_ids
      };
      postExecutivePerformanceNotice(data)
        .then(res => {
          this.$message({
            message: "提醒成功",
            type: "success"
          });
        })
        .catch(e => {});
    },
    addPerson() {
      this.userType = "add";
      this.showModifyUser = true;
    },
    importList() {
      this.showImportList = true;
      this.importTplUrl = PATH_EXECUTIVE_IMPORT_USER_LIST(this.performanceId);
      this.uploadTplUrl = PATH_EXECUTIVE_PERFORMANCE_IMPORT_USER(
        this.performanceId
      );
    },
    closeImportList() {
      this.showImportList = false;
    },
    removeList() {
      this.showConfirmDialog = true;
      this.tipsText = "是否确认移除？";
      this.confirmType = "delete";
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
      this.confirmType = "open";
      this.tipsText = "是否确认启动考核？";
    },
    confirmDialog(data) {
      if (data === "open") {
        putExecutiveOpenAssessment(this.performanceId)
          .then(res => {
            this.showConfirmDialog = false;
            this.getPerformanceDetailData();
          })
          .catch(e => {});
      } else if (data === "delete") {
        this.showConfirmDialog = false;
        this.delPerformanceUser();
      } else {
        this.showConfirmDialog = false;
      }
    },
    closeDialog() {
      this.showConfirmDialog = false;
    },
    onQuery() {
      this.getUserList();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.getUserList();
    },
    viewIndicators(data) {
      this.$router.push(
        PATH_PERFORMANCE_INDEX_DETAIL(this.performanceId, data.id, "employee")
      );
    },
    delPerformanceUser() {
      if (this.performance_user_ids.length === 0) {
        this.$message({
          showClose: true,
          message: "请至少选择一个人员",
          type: "error"
        });
        return false;
      }
      let delData = {
        performance_user_ids: this.performance_user_ids
      };
      deleteExecutivePerformanceUser(this.performanceId, delData)
        .then(res => {
          this.performance_user_ids = [];
          this.getUserList();
        })
        .catch(e => {});
    },
    remove(id) {
      this.performance_user_ids = [id];
      this.showConfirmDialog = true;
      this.tipsText = "是否确认移除？";
      this.confirmType = "delete";
    },
    modifyUser(data) {
      this.userId = data.id;
      let {
        name,
        workcode,
        email,
        superior_workcode,
        superior_name,
        isolation_workcode,
        isolation_name,
        president_workcode,
        president_name,
        hrbp_workcode,
        hrbp_name,
        hrd_workcode,
        hrd_name,
        executive_type
      } = data;
      this.userInfo = {
        name,
        workcode,
        email,
        superior_workcode,
        superior_name,
        isolation_workcode,
        isolation_name,
        president_workcode,
        president_name,
        hrbp_workcode,
        hrbp_name,
        hrd_workcode,
        hrd_name,
        executive_type
      };
      this.userType = "modify";
      this.showModifyUser = true;
    },
    getUserList() {
      getExecutivePerformanceUser(this.performanceId, this.personalForm)
        .then(res => {
          let { data, total } = res;
          this.total = total;
          this.userList = data;
        })
        .catch(e => {});
    },
    getPerformanceDetailData() {
      getExecutivePerformanceDetail(this.performanceId)
        .then(res => {
          this.currentStage = res.stage;
          this.performanceDetail = res;
        })
        .catch(e => {});
    },
    showUploadWork(type) {
      this.showUpload = true;
      if (type == "finance") {
        this.uploadTitle = "财务指标";
        this.uploadActionUrl = this.constants.PATH_EXECUTIVE_UPLOAD_FINANCIAL_INDICATORS(
          this.performanceId
        );
        this.downloadUrl = this.constants.PATH_EXECUTIVE_IMPORT_FINANCIAL_INDICATORS(
          this.performanceId
        );
      } else {
        this.uploadTitle = "工作指标";
        this.uploadActionUrl = this.constants.PATH_EXECUTIVE_UPLOAD_WORK_INDICATORS(
          this.performanceId
        );
        this.downloadUrl = this.constants.PATH_EXECUTIVE_IMPORT_WORK_INDICATORS(
          this.performanceId
        );
      }
    },
    uploadClose() {
      this.showUpload = false;
    }
  },
  created() {
    this.permissions = JSON.parse(localStorage.getItem("permissions") || "[]");
    this.exportUrl = PATH_EXECUTIVE_EXPORT_USER_LIST(
      this.performanceId,
      this.performance_user_ids
    );
    this.exportDetailUrl = PATH_EXECUTIVE_EXPORT_DETAIL(
      this.performanceId,
      this.performance_user_ids
    );
    this.getPerformanceDetailData();
    getExecutiveStageList(this.performanceId)
      .then(res => {
        this.stageOptions = res;
      })
      .catch(e => {});
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
    getCurrentExecutiveTypes(this.performanceId)
      .then(res => {
        this.executiveTypes = res;
      })
      .catch(e => {});
    getExecutivePerformanceTagTypes(this.performanceId)
      .then(res => {
        this.tagOptions = res;
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
          width: 116px;
          text-align: right;
          color: #909399;
        }
        .setting-value {
          float: left;
          margin-left: 8px;
          width: calc(100% - 124px);
          line-height: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .performance-tpl {
          span {
            margin-right: 8px;
            position: relative;
            &::after {
              content: "、";
              position: absolute;
              right: -14px;
              bottom: 0;
            }
            &:last-child {
              &::after {
                content: "";
              }
            }
          }
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
          width: 116px;
          text-align: right;
          color: #909399;
          margin-right: 8px;
        }
        .setting-detail {
          width: calc(100% - 124px);
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
        .el-button {
          &:hover {
            .down-load {
              color: #52ddab;
            }
          }
        }
        .down-load {
          color: #606266;
          text-decoration: none;
          &:hover {
            color: #52ddab;
          }
        }
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
