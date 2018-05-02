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
          <el-table-column prop="date" :label="constants.NUMBER" width="180">
          </el-table-column>
          <el-table-column prop="name" :label="constants.NAME" width="180">
          </el-table-column>
          <el-table-column prop="address" :label="constants.BASE_OR_BU">
          </el-table-column>
          <el-table-column prop="address1" :label="constants.DEP_OR_SUB">
          </el-table-column>
          <el-table-column prop="address2" :label="constants.WORK_LEVEL">
          </el-table-column>
          <el-table-column prop="address3" :label="constants.EMAIL">
          </el-table-column>
          <el-table-column prop="address4" :label="constants.LEADER_NUMBER">
          </el-table-column>
          <el-table-column prop="address5" :label="constants.LEADER_NAME">
          </el-table-column>
          <el-table-column prop="address6" :label="constants.UP_LEVEL+constants.BASE_OR_BU">
          </el-table-column>
          <el-table-column prop="address7" :label="constants.UP_LEVEL+constants.EMAIL">
          </el-table-column>
          <el-table-column prop="address8" :label="constants.SELF_EVALUATION_STATUS">
          </el-table-column>
          <el-table-column prop="address9" :label="constants.LEADER_EVALUATION_STATUS">
          </el-table-column>
          <el-table-column prop="address10" :label="constants.PLUS_UP_LEVEL+constants.NUMBER">
          </el-table-column>
          <el-table-column prop="address11" :label="constants.PLUS_UP_LEVEL+constants.NAME">
          </el-table-column>
          <el-table-column prop="address12" :label="constants.PLUS_UP_LEVEL+constants.BASE_OR_BU">
          </el-table-column>
          <el-table-column prop="address13" :label="constants.PLUS_UP_LEVEL+constants.EMAIL">
          </el-table-column>
          <el-table-column prop="address14" :label="constants.FACE_FEEDBACK">
          </el-table-column>
          <el-table-column prop="address14" :label="constants.RESULT_CONFIRM">
          </el-table-column>
          <el-table-column fixed="right" :label="constants.OPERATIONS" width="100">
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
    <el-dialog @close="initImportLevels" width="500px" v-if="dialogImport" :visible.sync="dialogImport" class="dialogImport">
      <div slot="title" class="title">
        {{constants.IMPORT_RECORDS}}
      </div>
      <div class="importTab">
        <el-tabs v-model="importTab">
          <el-tab-pane :label="constants.EHR_IMPORT" name="first">
            <el-form label-width="80px" :rules="importRules" ref="importForm" :model="importForm" class="importForm">
              <el-form-item :label="constants.WORK_LEVEL" prop="levels">
                <el-checkbox-group v-model="importForm.levels">
                  <el-checkbox v-for="v of constants.ENUM_LEVELS" :key="v.key" :label="v.value" name="levels"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane :label="constants.EXCEL_IMPORT" name="second">
            <el-upload class="uploader" drag action="https://jsonplaceholder.typicode.com/posts/">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">{{constants.DRAG_FILE}}
                <em>{{constants.CLICK_TO_UPLOAD}}</em>
              </div>
              <div class="el-upload__tip" slot="tip">
                <a href="https://www.baidu.com">{{constants.DOWNLOAD_EXCEL_TEMPLATE}}</a>
              </div>

            </el-upload>
          </el-tab-pane>
        </el-tabs>
        <span class="tips">
          {{constants.IMPORT_TIPS}}
        </span>
      </div>

      <div v-if="importTab==='first'" slot="footer" class="dialog-footer">
        <el-row type="flex" justify="center">
          <el-button round size="medium" type="primary" @click="importFiles('importForm')">{{constants.CONFIRM}}</el-button>
          <el-button round size="medium" @click="dialogImport = false" class="btn-reset">{{constants.CANCEL}}</el-button>
        </el-row>
      </div>
    </el-dialog>
    <el-dialog @close="resetFilter('timesForm')" width="570px" v-if="dialogTimes" :visible.sync="dialogTimes" class="dialogTimes">
      <el-form label-width="120px" :rules="timesRules" ref="timesForm" :model="timesForm" class="timesForm">
        <el-form-item :label="constants.SELF_EVALUATION_TIME" prop="self">
          <el-date-picker :clearable="false" value-format="timestamp" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="timesForm.self" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="constants.LEADER_EVALUATION_TIME" prop="leader">
          <el-date-picker :clearable="false" value-format="timestamp" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="timesForm.leader" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="" prop="levelRequired">
          <el-checkbox v-model="timesForm.levelRequired">{{constants.REQUIRE_271}}</el-checkbox>
        </el-form-item>
        <el-form-item :label="constants.LEADER_PLUS_EVALUATION_TIME" prop="upLeader">
          <el-date-picker :clearable="false" value-format="timestamp" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="timesForm.upLeader" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="constants.FACE_EVALUATION_TIME" prop="face">
          <el-date-picker :clearable="false" value-format="timestamp" popper-class="date-picker-container" format="yyyy-MM-dd HH:mm" v-model="timesForm.face" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-row type="flex" justify="center">
          <el-button round size="medium" type="primary" @click="timeSet('timesForm')">{{constants.CONFIRM}}</el-button>
          <el-button round size="medium" @click="resetFilter('timesForm');dialogTimes = false" class="btn-reset">{{constants.CANCEL}}</el-button>
        </el-row>
      </div>
    </el-dialog>

    <el-dialog @close="resetFilter('infoForm')" width="650px" v-if="dialogInfo" :visible.sync="dialogInfo" class="dialogInfo">
      <div slot="title" class="title">
        {{infoType ==='add' ? constants.ADD: constants.MODIFY}}
      </div>
      <el-form :inline="true" :rules="infoRules" ref="infoForm" :model="infoForm" class="infoForm">
        <el-form-item prop="num">
          <el-input size="small" :placeholder="constants.NUMBER" v-model="infoForm.num"></el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input size="small" :disabled="true" :placeholder="constants.NAME" v-model="infoForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="BU">
          <el-input size="small" :disabled="true" :placeholder="constants.BASE_OR_BU" v-model="infoForm.BU"></el-input>
        </el-form-item>
        <el-form-item prop="dep">
          <el-input size="small" :disabled="true" :placeholder="constants.DEP_OR_SUB" v-model="infoForm.dep"></el-input>
        </el-form-item>
        <el-form-item prop="level">
          <el-input size="small" :disabled="true" :placeholder="constants.WORK_LEVEL" v-model="infoForm.level"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input size="small" :placeholder="constants.EMAIL" v-model="infoForm.email"></el-input>
        </el-form-item>
        <el-form-item prop="leaderNum">
          <el-input size="small" :placeholder="constants.LEADER_NUMBER" v-model="infoForm.leaderNum"></el-input>
        </el-form-item>
        <el-form-item prop="leaderName">
          <el-input size="small" :disabled="true" :placeholder="constants.LEADER_NAME" v-model="infoForm.leaderName"></el-input>
        </el-form-item>
        <el-form-item prop="leaderBU">
          <el-input size="small" :disabled="true" :placeholder="constants.UP_LEVEL+constants.BASE_OR_BU" v-model="infoForm.leaderBU"></el-input>
        </el-form-item>
        <el-form-item prop="leaderEmail">
          <el-input size="small" :placeholder="constants.UP_LEVEL+constants.EMAIL" v-model="infoForm.leaderEmail"></el-input>
        </el-form-item>
        <div>
          <el-form-item prop="upLeaderNum">
            <el-input size="small" :placeholder="constants.PLUS_UP_LEVEL+constants.NUMBER" v-model="infoForm.upLeaderNum"></el-input>
          </el-form-item>
          <el-form-item prop="upLeaderName">
            <el-input size="small" :disabled="true" :placeholder="constants.PLUS_UP_LEVEL+constants.NAME" v-model="infoForm.upLeaderName"></el-input>
          </el-form-item>
          <el-form-item prop="upLeaderBU">
            <el-input size="small" :disabled="true" :placeholder="constants.PLUS_UP_LEVEL+constants.BASE_OR_BU" v-model="infoForm.upLeaderBU"></el-input>
          </el-form-item>
          <el-form-item prop="upLeaderEmail">
            <el-input size="small" :placeholder="constants.PLUS_UP_LEVEL+constants.EMAIL" v-model="infoForm.upLeaderEmail"></el-input>
          </el-form-item>
        </div>

      </el-form>
      <div slot="footer">
        <el-row type="flex" justify="center">
          <el-button round size="medium" @click="infoSubmit('infoForm')" type="primary">{{constants.CONFIRM}}</el-button>
          <el-button round size="medium" @click="resetFilter('infoForm');dialogInfo = false" class="btn-reset">{{constants.CANCEL}}</el-button>
        </el-row>
      </div>
    </el-dialog>
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
    CONFIRM,
    CANCEL,
    SELF_EVALUATION_TIME,
    LEADER_EVALUATION_TIME,
    LEADER_PLUS_EVALUATION_TIME,
    FACE_EVALUATION_TIME,
    REQUIRE_271,
    EHR_IMPORT,
    EXCEL_IMPORT,
    DRAG_FILE,
    CLICK_TO_UPLOAD,
    DOWNLOAD_EXCEL_TEMPLATE,
    IMPORT_TIPS,
    LEADER_TIME_VALIDATE_MSG,
    UP_LEADER_TIME_VALIDATE_MSG,
    FACE_TIME_VALIDATE_MSG,
    EMAIL_VALIATE_MSG,
    SELF_TIME_REQUIRE_MSG,
    LEADER_TIME_REQUIRE_MSG,
    FACE_TIME_REQUIRE_MSG,
    UP_LEADER_TIME_REQUIRE_MSG,
    NUMBER_REQUIRE_MSG,
    LEADER_NUMBER_REQUIRE_MSG,
    EMAIL_FORMAT_MSG,
    ENUM_LEVELS
  } from "@/constants/TEXT"
  import { PATH_GRADE_MANAGE, PATH_GRADE_PROGRESS } from "@/constants/URL"
  export default {
    data() {
      // 时间顺序验证
      const selfTimeValidator = (rule, value, callback) => {
        if (this.timesForm.leader && !this.timesForm.leader[0]) {
          // 隔级没填
          callback()
        } else {
          const leaderStart = new Date(this.timesForm.leader[0])
          const end = new Date(value[1])
          if (leaderStart <= end) {
            this.$refs.timesForm.validateField("leader")
          } else {
            callback()
          }
        }
      }
      const leaderTimeValidator = (rule, value, callback) => {
        if (value && value[0]) {
          // 有值的情况下
          if (this.timesForm.self && !this.timesForm.self[0]) {
            // 自评没填
            this.$refs.timesForm.validateField("self")
          } else {
            const selfEnd = new Date(this.timesForm.self[1])
            const leaderStart = new Date(value[0])
            if (leaderStart <= selfEnd) {
              callback(new Error(LEADER_TIME_VALIDATE_MSG))
            } else {
              callback()
            }

            if (this.timesForm.upLeader && !this.timesForm.upLeader[0]) {
              // 隔级没填
              callback()
            } else {
              const leaderStart = new Date(this.timesForm.upLeader[0])
              const end = new Date(value[1])
              if (leaderStart <= end) {
                this.$refs.timesForm.validateField("upLeader")
              } else {
                callback()
              }
            }
          }
        }
        callback()
      }
      const upLeaderTimeValidator = (rule, value, callback) => {
        if (value && value[0]) {
          // 有值的情况下
          if (this.timesForm.leader && !this.timesForm.leader[0]) {
            // 上级评没填
            this.$refs.timesForm.validateField("leader")
          } else {
            const leaderEnd = new Date(this.timesForm.leader[1])
            const start = new Date(value[0])
            if (start <= leaderEnd) {
              callback(new Error(UP_LEADER_TIME_VALIDATE_MSG))
            } else {
              callback()
            }
          }

          if (this.timesForm.face && !this.timesForm.face[0]) {
            // 面谈没填
            callback()
          } else {
            const faceStart = new Date(this.timesForm.face[0])
            const end = new Date(value[1])
            if (faceStart <= end) {
              this.$refs.timesForm.validateField("face")
            } else {
              callback()
            }
          }
        }
        callback()
      }
      const faceTimeValidator = (rule, value, callback) => {
        if (value && value[0]) {
          // 有值的情况下
          if (this.timesForm.upLeader && !this.timesForm.upLeader[0]) {
            // 上级评没填
            this.$refs.timesForm.validateField("upLeader")
          } else {
            const leaderEnd = new Date(this.timesForm.upLeader[1])
            const start = new Date(value[0])
            if (start <= leaderEnd) {
              callback(new Error(FACE_TIME_VALIDATE_MSG))
            } else {
              callback()
            }
          }
        }
        callback()
      }
      const upLeaderEmailValidator = (rule, value, callback) => {
        if (this.infoForm.upLeaderNum && !value) {
          callback(EMAIL_VALIATE_MSG)
        } else {
          callback()
        }
      }
      return {
        // 导入的tab选项
        importTab: "first",
        // 导入的弹框
        dialogImport: false,
        // 时间设置弹框
        dialogTimes: false,
        // 员工信息弹框
        dialogInfo: false,
        importForm: {
          levels: []
        },
        // 时间设置form
        timesForm: {
          self: [],
          leader: [],
          upLeader: [],
          face: [],
          levelRequired: false
        },
        // 导入form验证
        importRules: {
          levels: [
            {
              type: "array",
              required: true,
              message: "请至少选择一个活动性质",
              trigger: "change"
            }
          ]
        },
        // 时间form验证规则
        timesRules: {
          self: [
            {
              type: "array",
              required: true,
              message: SELF_TIME_REQUIRE_MSG,
              trigger: "change"
            },
            { validator: selfTimeValidator, trigger: "change" }
          ],
          leader: [
            {
              type: "array",
              required: true,
              message: LEADER_TIME_REQUIRE_MSG,
              trigger: "change"
            },
            { validator: leaderTimeValidator, trigger: "change" }
          ],
          upLeader: [
            {
              type: "array",
              required: true,
              message: UP_LEADER_TIME_REQUIRE_MSG,
              trigger: "change"
            },
            { validator: upLeaderTimeValidator, trigger: "change" }
          ],
          face: [
            {
              type: "array",
              required: true,
              message: FACE_TIME_REQUIRE_MSG,
              trigger: "change"
            },
            { validator: faceTimeValidator, trigger: "change" }
          ]
        },
        infoRules: {
          number: {
            type: "string",
            required: true,
            message: NUMBER_REQUIRE_MSG,
            trigger: "change"
          },
          email: [
            { required: true, message: EMAIL_VALIATE_MSG, trigger: "blur" },
            {
              type: "email",
              message: EMAIL_FORMAT_MSG,
              trigger: ["blur", "change"]
            }
          ],
          leaderNum: [
            {
              type: "string",
              required: true,
              message: LEADER_NUMBER_REQUIRE_MSG,
              trigger: "change"
            }
          ],
          leaderEmail: [
            { required: true, message: EMAIL_VALIATE_MSG, trigger: "blur" },
            {
              type: "email",
              message: EMAIL_FORMAT_MSG,
              trigger: ["blur", "change"]
            }
          ],
          upLeaderEmail: [
            {
              type: "email",
              message: EMAIL_FORMAT_MSG,
              trigger: ["blur", "change"]
            },
            { validator: upLeaderEmailValidator, trigger: "change" }
          ]
        },
        // 添加为add,修改为modify,根据type不同改变title和赋值还有请求
        infoType: "add",
        // 添加修改form里的值
        infoForm: {
          num: "",
          name: "",
          BU: "",
          dep: "",
          level: "",
          email: "",
          leaderNum: "",
          leaderName: "",
          leaderBU: "",
          leaderEmail: "",
          upLeaderNum: "",
          upLeaderName: "",
          upLeaderBU: "",
          upLeaderEmail: ""
        },
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
          WORK_LEVEL,
          EMAIL,
          UP_LEVEL,
          PLUS_UP_LEVEL,
          FACE_FEEDBACK,
          MODIFY,
          DEL,
          DETAILS,
          SET_TIMES,
          IMPORT_RECORDS,
          CONFIRM,
          CANCEL,
          SELF_EVALUATION_TIME,
          LEADER_EVALUATION_TIME,
          LEADER_PLUS_EVALUATION_TIME,
          FACE_EVALUATION_TIME,
          EHR_IMPORT,
          REQUIRE_271,
          EXCEL_IMPORT,
          DRAG_FILE,
          CLICK_TO_UPLOAD,
          DOWNLOAD_EXCEL_TEMPLATE,
          IMPORT_TIPS,
          ENUM_LEVELS
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
      }
    },
    components: {
      "nav-bar": () => import("@/components/common/Navbar/index.vue"),
      pagination: () => import("@/components/common/Pagination/index.vue")
    },
    methods: {
      // 重置form
      resetFilter(formName) {
        this.$refs[formName].resetFields()
      },
      // 选择列表项
      handleSelectionChange(arr) {
        this.selection = arr
      },
      // 翻页
      handleCurrentChange(val) {
        // TODO:翻页
        console.log(`当前页: ${val}`)
      },
      // 导入操作提交
      importFiles(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert("submit!")
          } else {
            console.log("error submit!!")
            return false
          }
        })
      },
      // 时间设置提交
      timeSet(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert("submit!")
          } else {
            console.log("error submit!!")
            return false
          }
        })
      },
      // 添加或修改用户信息提交
      infoSubmit(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert("submit!")
          } else {
            console.log("error submit!!")
            return false
          }
        })
      },
      // 发出提醒
      reminder() {
        let msg = "是否要发出提醒?"
        console.log(this.selection.length)
        if (this.selection.length == 0) {
          msg = "是否提醒全部?"
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
            })
          })
          .catch(() => {})
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
            })
          })
          .catch(() => {})
      },
      initImportLevels() {
        this.importForm.levels = ENUM_LEVELS.filter(
          v => parseFloat(v.value) > 3.0
        ).map(v => v.value)
      }
    },
    created() {
      this.initImportLevels()
    }
  }
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
  .time-line-panel>>>.el-step__icon {
    width: 34px;
    height: 34px;
    background-color: #ececec;
    color: #d5d5d5;
    border: 2px solid #ececec;
  }
  .time-line-panel>>>.is-success .el-step__icon {
    color: white;
    background-color: #52ddab;
    border-color: #52ddab;
  }
  .time-line-panel>>>.el-step.is-horizontal .el-step__line {
    top: 15px;
  }
  .time-line-panel>>>.el-step .el-step__title {
    font-size: 14px;
    margin-top: 10px;
  }
  .time-line-panel>>>.el-step__head.is-success {
    color: #52ddab;
    border-color: #52ddab;
  }
  .time-line-panel>>>.el-step__title.is-success {
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
  .importForm>>>.el-checkbox {
    margin-left: 30px;
  }
  .dialogImport .title,
  .dialogInfo .title {
    text-align: center;
    font-weight: 700;
    font-size: 18px;
  }
  .dialogImport>>>.el-dialog {
    padding: 20px 40px;
  }
  .importTab {
    position: relative;
  }
  .importTab .tips {
    position: absolute;
    right: 0;
    top: 5px;
    font-size: 12px;
    color: grey;
  }
  .el-upload__tip>>>a {
    color: #1e90ff;
    text-decoration: none;
  }
  .el-upload__tip {
    text-align: center;
    font-size: 14px;
  }
  .uploader {
    margin-top: 10px;
  }
</style>
