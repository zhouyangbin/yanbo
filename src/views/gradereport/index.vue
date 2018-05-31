<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <!-- select form -->
    <section class="content-container">
      <section>
        <el-form :inline="true" :model="conditionForm" ref="conditionForm">
          <el-form-item>
            <el-select v-model="conditionForm.evaluation_name_id" :placeholder="constants.LABEL_SELECT_GRAGE" @change="changeName">
              <el-option v-for="item in names" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="level==1">
            <el-select v-model="evaluation_id" :placeholder="constants.LABEL_SELECT_DEPARTMENT" @change="changeDepartment">
              <el-option v-for="item in departments" :key="item.value" :label="item.label" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item>
            <p class="des">参与人数共计<span class="des-num"> 3 </span>人，好未来集团总平均分：自评<span class="des-num"> 4分 </span>，上级评<span class="des-num"> 5分 </span></p>
          </el-form-item>   -->
        </el-form>
      </section>

      <section class="report-echart">
        <el-row>
          <el-col :span="12">
            <!-- 某部门文化评分进度 pie -->
            <h1>
              <span>{{currentDepartment}}</span>{{constants.LABEL_REPORT_PROGRESS}}</h1>
            <el-row>
              <el-col :span="12" class="loading-container">
                <echart-pie :title="constants.LABEL_SELF_PROGRESS" :data="progressPieSelf" :width="width"></echart-pie>
              </el-col>
              <el-col :span="12" class="loading-container">
                <echart-pie :title="constants.LABEL_SUP_PROGRESS" :data="progressPieSuperior" :width="width"></echart-pie>
              </el-col>
            </el-row>
          </el-col>

          <el-col :span="12">
            <!-- 某部门文化平均分 bar -->
            <el-row type="flex" justify="space-between">
              <el-col :span="12">
                <h1>
                  <span>{{currentDepartment}}</span>{{constants.LABEL_REPORT_AVERAGE}}</h1>
              </el-col>
              <el-col :span="12">
                <el-row type="flex" justify="end">
                  <span style="color:#21c1a5">● {{constants.LABEL_SELF}}&nbsp;&nbsp;&nbsp;</span>
                  <span style="color:#5399e1">● {{constants.LABEL_SUP}}</span>
                </el-row>
              </el-col>
            </el-row>
            <section class="loading-container">
              <echart-bar-average-single :selfRates="selfRates" :supRates="supRates" :width="width" id="echart-bar1"></echart-bar-average-single>
            </section>
          </el-col>
        </el-row>
      </section>

      <!-- 各事业部完成率 bar -->
      <section class="report-echart">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">
            <h1>{{constants.LABEL_REPORT_RATE}}</h1>
          </el-col>
          <el-col :span="12">
            <el-row type="flex" justify="end">
              <el-tabs v-model="rateBarActive" type="card" @tab-click="changeBarRate" class="echart-tabs">
                <el-tab-pane :label="constants.LABEL_SELF" name="self"></el-tab-pane>
                <el-tab-pane :label="constants.LABEL_SUP" name="sup"></el-tab-pane>
              </el-tabs>
            </el-row>
          </el-col>
        </el-row>
        <section class="loading-container">
          <echart-bar-rate :rateBar="rateBar" :completionBuNams="completionBuNams" :width="width"></echart-bar-rate>
        </section>
      </section>

      <!-- 各事业部总平均分 bar -->
      <section class="report-echart" v-if="level==1">
        <h1>{{constants.LABEL_REPORT_AVERAGE_ALL}}</h1>
        <section class="loading-container">
          <echart-bar-average-all :selfAverage="selfAverageAll" :supAverage="supAverageAll" :departmentsAverage="departmentsAverageAll" :yMin="yMinAll" :yMax="yMaxAll" :yInterval="yIntervalAll" :width="width"></echart-bar-average-all>
        </section>
        <el-row type="flex" justify="center">
          <span class="color-mark">
            <span style="color:#21c1a5">● {{constants.LABEL_SELF}}&nbsp;&nbsp;&nbsp;</span>
            <span style="color:#5399e1">● {{constants.LABEL_SUP}}</span>
          </span>
        </el-row>
      </section>

      <!-- 各事业部评分平均分 bar -->
      <section class="report-echart" v-if="level==1">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">
            <h1>{{constants.LABEL_REPORT_AVERAGE_SINGLE}}</h1>
          </el-col>
          <el-col :span="12">
            <el-row type="flex" justify="end">
              <el-tabs v-model="averageBarActive" type="card" @tab-click="changeBarAverage" class="echart-tabs">
                <el-tab-pane v-for="item in activeTabs" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
              </el-tabs>
            </el-row>
          </el-col>
        </el-row>
        <section class="loading-container">
          <echart-bar-average-all :selfAverage="selfAverageEach" :supAverage="supAverageEach" :departmentsAverage="departmentsAverageEach" :yMin="yMinEach" :yMax="yMaxEach" :yInterval="yIntervalEach" :width="width"></echart-bar-average-all>
        </section>
        <el-row type="flex" justify="center">
          <span class="color-mark">
            <span style="color:#21c1a5">● {{constants.LABEL_SELF}}&nbsp;&nbsp;&nbsp;</span>
            <span style="color:#5399e1">● {{constants.LABEL_SUP}}</span>
          </span>
        </el-row>
      </section>

      <section class="report-echart" v-if="level==1">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">
            <h1>{{constants.LABEL_REPORT_NUMBER}}</h1>
          </el-col>
          <el-col :span="12">
            <el-row type="flex" justify="end">
              <el-tabs v-model="numberLineActive" type="card" @tab-click="changeLineNumbers" class="echart-tabs">
                <el-tab-pane v-for="item in activeTabs" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
              </el-tabs>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <!-- 好未来教育各分值人数-自评 line -->
          <el-col :span="12">
            <section class="loading-container">
              <echart-line-number :numbers="selfNumbers" :color="selfLineColor" :width="width"></echart-line-number>
            </section>
            <el-row type="flex" justify="center">
              <span class="color-mark">
                <span style="color:#21c1a5">● {{constants.LABEL_SELF}}</span>
              </span>
            </el-row>
          </el-col>
          <!-- 好未来教育各分值人数-上级评 line -->
          <el-col :span="12">
            <section class="loading-container">
              <echart-line-number :isSelf="false" :numbers="supNumbers" :color="supLineColor" :width="width"></echart-line-number>
            </section>
            <el-row type="flex" justify="center">
              <span class="color-mark">
                <span style="color:#5399e1">● {{constants.LABEL_SUP}}</span>
              </span>
            </el-row>
          </el-col>
        </el-row>
      </section>

    </section>
  </div>
</template>
<script>
import {
  GRADE_REPORT,
  LABEL_REPORT_PROGRESS,
  LABEL_REPORT_AVERAGE,
  LABEL_REPORT_RATE,
  LABEL_REPORT_AVERAGE_ALL,
  LABEL_REPORT_AVERAGE_SINGLE,
  LABEL_REPORT_NUMBER,
  NAV_TAB_TYPE_ONE,
  NAV_TAB_TYPE_TWO,
  NAV_TAB_TYPE_THREE,
  NAV_TAB_TYPE_FOUR,
  LABEL_SELF,
  LABEL_SUP,
  LABEL_SELF_PROGRESS,
  LABEL_SUP_PROGRESS,
  LABEL_SELECT_DEPARTMENT,
  LABEL_SELECT_GRAGE
} from "@/constants/TEXT";
import {
  getGradeNames,
  getGradeDepartments,
  getGradeReports
} from "@/constants/API";
import { compact } from "@/utils/obj";
import { AsyncComp } from "@/utils/asyncCom.ts";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "echart-pie": AsyncComp(import("@/components/modules/gradereport/Pie.vue")),
    "echart-bar-average-single": AsyncComp(
      import("@/components/modules/gradereport/BarAverageSingle.vue")
    ),
    "echart-bar-rate": AsyncComp(
      import("@/components/modules/gradereport/BarRate.vue")
    ),
    "echart-bar-average-all": AsyncComp(
      import("@/components/modules/gradereport/BarAverageAll.vue")
    ),
    "echart-line-number": AsyncComp(
      import("@/components/modules/gradereport/LineNumber.vue")
    )
  },
  data() {
    return {
      nav: [
        {
          label: GRADE_REPORT,
          active: true
        }
      ],
      constants: {
        LABEL_REPORT_PROGRESS,
        LABEL_REPORT_AVERAGE,
        LABEL_REPORT_RATE,
        LABEL_REPORT_AVERAGE_ALL,
        LABEL_REPORT_AVERAGE_SINGLE,
        LABEL_REPORT_NUMBER,
        LABEL_SELF,
        LABEL_SUP,
        LABEL_SELF_PROGRESS,
        LABEL_SUP_PROGRESS,
        LABEL_SELECT_DEPARTMENT,
        LABEL_SELECT_GRAGE
      },
      level: 0,
      conditionForm: { evaluation_name_id: "", evaluation_id: "" },
      names: [],
      departments: [],
      currentDepartment: "",
      evaluationId: {},

      // 进度饼状图
      progressPieSelf: [{ value: 0, name: "" }, { value: 0, name: "" }],
      progressPieSuperior: [{ value: 0, name: "" }, { value: 0, name: "" }],

      // 某事业部平均分柱状图
      selfRates: [],
      supRates: [],

      // 各事业部完成率柱状图
      selfRateBar: [],
      superiorRateBar: [],
      rateBar: [],
      completionBuNams: [],
      // 当前自评/上级评数据
      rateBarActive: "self",

      // 各事业部总平均分
      selfAverageAll: [],
      supAverageAll: [],
      departmentsAverageAll: [],
      yMinAll: 0,
      yMaxAll: 20,
      yIntervalAll: 4,

      // 各事业部各评分平均分
      selfAverageA: [],
      selfAverageB: [],
      selfAverageC: [],
      selfAverageD: [],
      selfAverageEach: [],
      supAverageA: [],
      supAverageB: [],
      supAverageC: [],
      supAverageD: [],
      supAverageEach: [],
      departmentsAverageEach: [],
      yMinEach: 0,
      yMaxEach: 5,
      yIntervalEach: 1,
      activeTabs: [
        { label: NAV_TAB_TYPE_ONE, name: "first" },
        { label: NAV_TAB_TYPE_TWO, name: "second" },
        { label: NAV_TAB_TYPE_THREE, name: "third" },
        { label: NAV_TAB_TYPE_FOUR, name: "fourth" }
      ],
      averageBarActive: "first",

      // 好未来教育各分值人数
      // 自评
      selfNumbersA: [],
      selfNumbersB: [],
      selfNumbersC: [],
      selfNumbersD: [],
      selfNumbers: [],
      selfLineColor: "#3ed6bf",
      // 上级评
      supNumbersA: [],
      supNumbersB: [],
      supNumbersC: [],
      supNumbersD: [],
      supNumbers: [],
      supLineColor: "#5399e1",
      numberLineActive: "first",
      // body width
      width: 0
    };
  },
  computed: {
    evaluation_id: {
      get() {
        return this.evaluationId;
      },
      set(obj) {
        this.evaluationId = obj;
        this.conditionForm = Object.assign({}, this.conditionForm, {
          evaluation_id: obj.value
        });
      }
    }
  },
  created() {
    this.level = parseInt(localStorage.getItem("talLevel"));
    this.getGrades();
  },
  mounted() {
    this.resize();
  },
  methods: {
    resize() {
      window.onresize = () => {
        this.width = document.body.clientWidth;
      };
    },
    // 文化评分列表
    getGrades() {
      getGradeNames()
        .then(res => {
          // console.log("getGrades", res.evaluations);
          res.evaluations.map(function(item) {
            item.label = item.evaluation_name;
            item.value = item.id;
          });
          this.names = res.evaluations;
          this.conditionForm = Object.assign({}, this.conditionForm, {
            evaluation_name_id: res.evaluations[0].value
          });
          if (this.level === 1) {
            this.getDepartments(res.evaluations[0].id);
          } else {
            this.currentDepartment = res.user.department.name;
            this.getReports();
          }
        })
        .catch(err => {});
    },
    // 部门列表
    getDepartments(id) {
      return getGradeDepartments(id)
        .then(res => {
          // console.log("getGradeDepartments", res);
          res.map(function(item) {
            item.label = item.department_name;
            item.value = item.id;
          });
          this.departments = res;
          this.conditionForm = Object.assign({}, this.conditionForm, {
            evaluation_id: res[0].value
          });
          this.evaluationId = res[0];
          this.currentDepartment = res[0].label;
          // 报告数据
          this.getReports();
        })
        .catch(err => {});
    },
    getReports() {
      getGradeReports(compact(this.conditionForm))
        .then(res => {
          // console.log("getGradeReports", res);
          // 评分进度Pie
          this.progressPieSelf = [
            {
              value: res.process.self,
              name: "已完成" + res.process.self + "人"
            },
            {
              value: res.process.count - res.process.self,
              name: "未完成" + (res.process.count - res.process.self) + "人"
            }
          ];
          this.progressPieSuperior = [
            {
              value: res.process.superior,
              name: "已完成" + res.process.superior + "人"
            },
            {
              value: res.process.count - res.process.superior,
              name: "未完成" + (res.process.count - res.process.superior) + "人"
            }
          ];
          // 某事业部|部门平均分
          this.selfRates = Object.values(res.avg.self);
          this.supRates = Object.values(res.avg.superior);
          // 各事业部完成率bar
          this.selfRateBar = [];
          this.superiorRateBar = [];
          this.completionBuNams = [];
          res.finish.forEach(item => {
            this.selfRateBar.push(
              item.count ? item.self_status / item.count : 0
            );
            this.superiorRateBar.push(
              item.count ? item.superior_status / item.count : 0
            );
            this.completionBuNams.push(item.department_name);
          });
          this.rateBarActive = "self";
          this.rateBar = [...this.selfRateBar];
          // 各事业部总平均分
          const m_selfAverageAll = [];
          const m_supAverageAll = [];
          const m_departmentsAverageAll = [];
          res.total.self.forEach(item => {
            m_selfAverageAll.push(item.score);
            m_departmentsAverageAll.push(item.department_name);
          });
          res.total.superior.forEach(item => {
            m_supAverageAll.push(item.score);
          });
          this.selfAverageAll = m_selfAverageAll;
          this.supAverageAll = m_supAverageAll;
          this.departmentsAverageAll = m_departmentsAverageAll;
          // 各事业部文化评分
          const m_departmentsAverageEach = [];
          this.selfAverageA = [];
          this.selfAverageB = [];
          this.selfAverageC = [];
          this.selfAverageD = [];
          res.question.self.forEach(item => {
            this.selfAverageA.push(item.a);
            this.selfAverageB.push(item.b);
            this.selfAverageC.push(item.c);
            this.selfAverageD.push(item.d);
            m_departmentsAverageEach.push(item.department_name);
          });
          this.supAverageA = [];
          this.supAverageB = [];
          this.supAverageC = [];
          this.supAverageD = [];
          res.question.superior.forEach(item => {
            this.supAverageA.push(item.a);
            this.supAverageB.push(item.b);
            this.supAverageC.push(item.c);
            this.supAverageD.push(item.d);
          });
          this.selfAverageEach = [...this.selfAverageA];
          this.supAverageEach = [...this.supAverageA];
          this.departmentsAverageEach = m_departmentsAverageEach;
          this.averageBarActive = "first";
          // 各分值人数
          res.number.self.forEach((item, index) => {
            if (index == 0) {
              this.selfNumbersA = Object.values(item);
            } else if (index == 1) {
              this.selfNumbersB = Object.values(item);
            } else if (index == 2) {
              this.selfNumbersC = Object.values(item);
            } else if (index == 3) {
              this.selfNumbersD = Object.values(item);
            }
          });
          res.number.superior.forEach((item, index) => {
            if (index == 0) {
              this.supNumbersA = Object.values(item);
            } else if (index == 1) {
              this.supNumbersB = Object.values(item);
            } else if (index == 2) {
              this.supNumbersC = Object.values(item);
            } else if (index == 3) {
              this.supNumbersD = Object.values(item);
            }
          });
          this.selfNumbers = [...this.selfNumbersA];
          this.supNumbers = [...this.supNumbersA];
          this.numberLineActive = "first";
        })
        .catch(err => {});
    },
    changeName(val) {
      this.getDepartments(val);
    },
    changeDepartment(item) {
      this.conditionForm = Object.assign({}, this.conditionForm, {
        evaluation_id: item.value
      });
      this.currentDepartment = item.label;
      // 报告数据
      this.getReports();
    },
    // 某事业部平均分切换自评or上级评数据
    changeBarRate(tab) {
      if (tab.name == "self") {
        this.rateBar = this.selfRateBar.concat();
      } else {
        this.rateBar = this.superiorRateBar.concat();
      }
    },
    // 各事业部各评分平均分切换各评分数据
    changeBarAverage(tab) {
      if (tab.name == "first") {
        this.selfAverageEach = [...this.selfAverageA];
        this.supAverageEach = [...this.supAverageA];
      } else if (tab.name == "second") {
        this.selfAverageEach = [...this.selfAverageB];
        this.supAverageEach = [...this.supAverageB];
      } else if (tab.name == "third") {
        this.selfAverageEach = [...this.selfAverageC];
        this.supAverageEach = [...this.supAverageC];
      } else if (tab.name == "fourth") {
        this.selfAverageEach = [...this.selfAverageD];
        this.supAverageEach = [...this.supAverageD];
      }
    },
    // 好未来教育各分值人数切换各评分数据
    changeLineNumbers(tab) {
      if (tab.name == "first") {
        this.selfNumbers = [...this.selfNumbersA];
        this.supNumbers = [...this.supNumbersA];
      } else if (tab.name == "second") {
        this.selfNumbers = [...this.selfNumbersB];
        this.supNumbers = [...this.supNumbersB];
      } else if (tab.name == "third") {
        this.selfNumbers = [...this.selfNumbersC];
        this.supNumbers = [...this.supNumbersC];
      } else if (tab.name == "fourth") {
        this.selfNumbers = [...this.selfNumbersD];
        this.supNumbers = [...this.supNumbersD];
      }
    }
  }
};
</script>

<style scoped>
.des {
  margin: 0;
  color: gray;
}
.des-num {
  color: #333;
}
.report-echart {
  padding: 25px;
  border-radius: 3px;
  background-color: #fff;
  margin-bottom: 20px;
  min-height: 280px;
}
.loading-container {
  height: 250px;
}
h1 {
  font-size: 16px;
  color: #333;
  font-weight: normal;
  margin: 0;
}
.color-mark {
  display: inline-block;
  background-color: #f8f8f8;
  padding: 8px 14px;
  border-radius: 20px;
  min-width: 64px;
  text-align: center;
}
.echart-tabs >>> .el-tabs__header {
  margin: 0;
}
</style>
