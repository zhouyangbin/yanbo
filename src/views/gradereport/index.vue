<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <!-- select form -->
    <section class="content-container">
      <section>
        <el-form :inline="true" :model="conditionForm" ref="conditionForm">
          <el-form-item>
            <el-select v-model="conditionForm.name" placeholder="选择文化评分" @change="changeName">
              <el-option v-for="item in names" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-cascader :options="departments" :value="conditionForm.department" change-on-select @change="changeDepartment" placeholder="部门" separator="-" style="width:100%"></el-cascader>
          </el-form-item>
          <el-form-item>
            <p class="des">参与人数共计<span class="des-num"> 3 </span>人，好未来集团总平均分：自评<span class="des-num"> 4分 </span>，上级评<span class="des-num"> 5分 </span></p>
          </el-form-item>  
        </el-form>
      </section>

      <section class="report-echart">
        <el-row>
          <el-col :span="12">
            <!-- 某部门文化评分进度 pie -->
            <h1><span>{{currentDepartment}}</span>文化评分进度</h1>
            <el-row>
              <el-col :span="12" class="loading-container"><echart-pie title="自评进度" :data="progressPieSelf"></echart-pie></el-col>
              <el-col :span="12" class="loading-container"><echart-pie title="上级评进度" :data="progressPieSuperior"></echart-pie></el-col>
            </el-row>           
          </el-col>

          <el-col :span="12">
            <!-- 某部门文化平均分 bar -->
            <el-row type="flex" justify="space-between">
              <el-col :span="12" >
                <h1><span>{{currentDepartment}}</span>文化平均分</h1>
              </el-col>
              <el-col :span="12">
                <el-row type="flex" justify="end">
                  <span style="color:#21c1a5">● 自评&nbsp;&nbsp;&nbsp;</span>
                  <span style="color:#5399e1">● 上级评</span>
                </el-row>
              </el-col>
            </el-row>
            <section class="loading-container">
              <echart-bar-average-single :selfRates="selfRates" :supRates="supRates"></echart-bar-average-single>
            </section>
          </el-col>
        </el-row>
      </section>

      <!-- 各事业部完成率 bar -->
      <section class="report-echart">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">
            <h1>各事业部完成率</h1>
          </el-col>
          <el-col :span="12">
            <el-row type="flex" justify="end">
              <el-tabs v-model="rateBarActive" type="card" @tab-click="changeBarRate" class="echart-tabs">
                <el-tab-pane label="自评" name="self"></el-tab-pane>
                <el-tab-pane label="上级评" name="sup"></el-tab-pane>
              </el-tabs>
            </el-row>
          </el-col>
        </el-row>
        <section class="loading-container">
          <echart-bar-rate :rateBar="rateBar" :completionBuNams="completionBuNams"></echart-bar-rate>
        </section>
      </section> 

      <!-- 各事业部总平均分 bar -->
      <section class="report-echart">         
        <h1>各事业部总平均分</h1>
        <section class="loading-container">
          <echart-bar-average-all :selfAverage="selfAverageAll" :supAverage="supAverageAll" :departmentsAverage="departmentsAverageAll" :yMin="yMinAll" :yMax="yMaxAll" :yInterval="yIntervalAll"></echart-bar-average-all>
        </section>
        <el-row type="flex" justify="center">
          <span class="color-mark">
            <span style="color:#21c1a5">● 自评&nbsp;&nbsp;&nbsp;</span>
            <span style="color:#5399e1">● 上级评</span>
          </span>
        </el-row>
      </section> 

      <!-- 各事业部评分平均分 bar -->
      <section class="report-echart">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">
            <h1>各事业各文化平均分</h1>
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
          <echart-bar-average-all :selfAverage="selfAverageEach" :supAverage="supAverageEach" :departmentsAverage="departmentsAverageEach" :yMin="yMinEach" :yMax="yMaxEach" :yInterval="yIntervalEach"></echart-bar-average-all>
        </section>
        <el-row type="flex" justify="center">
          <span class="color-mark">
            <span style="color:#21c1a5">● 自评&nbsp;&nbsp;&nbsp;</span>
            <span style="color:#5399e1">● 上级评</span>
          </span>
        </el-row>
      </section> 

      <section class="report-echart">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">
            <h1>好未来教育各分值人数</h1>
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
              <echart-line-number :numbers="selfNumbers" :color="selfLineColor"></echart-line-number>
            </section>
            <el-row type="flex" justify="center">
              <span class="color-mark">
                <span style="color:#21c1a5">● 自评</span>
              </span>
            </el-row>
          </el-col>
          <!-- 好未来教育各分值人数-上级评 line -->
          <el-col :span="12">
            <section class="loading-container">
              <echart-line-number :numbers="supNumbers" :color="supLineColor"></echart-line-number>
            </section>
            <el-row type="flex" justify="center">
              <span class="color-mark">
                <span style="color:#5399e1">● 上级评</span>
              </span>
            </el-row>
          </el-col>
        </el-row>
      </section> 

    </section>
  </div>
</template>
<script>
import { GRADE_REPORT } from "@/constants/TEXT";
import { AsyncComp } from "@/utils/asyncCom.ts";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "echart-pie": AsyncComp(import("./modules/Pie.vue")),
    "echart-bar-average-single": AsyncComp(
      import("./modules/BarAverageSingle.vue")
    ),
    "echart-bar-rate": AsyncComp(import("./modules/BarRate.vue")),
    "echart-bar-average-all": AsyncComp(import("./modules/BarAverageAll.vue")),
    "echart-line-number": AsyncComp(import("./modules/LineNumber.vue"))
  },
  data() {
    return {
      nav: [
        {
          label: GRADE_REPORT,
          active: true
        }
      ],
      conditionForm: { name: "", department: [] },
      names: [
        { label: "测试一", value: "id80" },
        { label: "测试二", value: "id90" },
        { label: "测试三", value: "id100" }
      ],
      departments: [
        {
          label: "培优事业部",
          value: "id001",
          children: [
            { label: "哈分校", value: "id009" },
            { label: "嘿分校", value: "id0010" }
          ]
        },
        { label: "集团总部", value: "id002" }
      ],
      currentDepartment: "",

      // 进度饼状图
      progressPieSelf: [
        { value: 335, name: "已完成335人" },
        { value: 700, name: "未完成700人" }
      ],
      progressPieSuperior: [
        { value: 700, name: "已完成335人" },
        { value: 335, name: "未完成700人" }
      ],

      // 某事业部平均分柱状图
      selfRates: [4, 5, 2, 3],
      supRates: [3, 3, 3, 2],

      // 各事业部完成率柱状图
      rateBar: [1, 0.4, 0.5, 0.6, 0.2, 0.3, 0.4, 0.7, 1, 0.5],
      completionBuNams: [
        "集团总部",
        "培优事业部",
        "集团总部",
        "培优事业部",
        "集团总部",
        "培优事业部",
        "集团总部",
        "培优事业部",
        "培优事业部",
        "集团总部"
      ],
      // 当前自评/上级评数据
      rateBarActive: "self",

      // 各事业部总平均分
      selfAverageAll: [16, 13, 12, 20, 17, 15, 18, 14, 20, 13],
      supAverageAll: [13, 20, 14, 18, 15, 17, 20, 12, 13, 16],
      departmentsAverageAll: [
        "集团总部",
        "培优事业部",
        "集团总部",
        "培优事业部",
        "集团总部",
        "培优事业部",
        "集团总部",
        "培优事业部",
        "培优事业部",
        "集团总部"
      ],
      yMinAll: 0,
      yMaxAll: 20,
      yIntervalAll: 4,

      // 各事业部各评分平均分
      selfAverageEach: [3, 4, 2, 5, 3, 3, 5, 4, 1, 5],
      supAverageEach: [5, 4, 4, 2, 3, 1, 4, 3, 2, 4],
      departmentsAverageEach: [
        "集团总部",
        "培优事业部",
        "集团总部",
        "培优事业部",
        "集团总部",
        "培优事业部",
        "集团总部",
        "培优事业部",
        "培优事业部",
        "集团总部"
      ],
      yMinEach: 0,
      yMaxEach: 5,
      yIntervalEach: 1,
      activeTabs: [
        { label: "成就客户", name: "first" },
        { label: "务实", name: "second" },
        { label: "创新", name: "third" },
        { label: "合作", name: "fourth" }
      ],
      averageBarActive: "first",

      // 好未来教育各分值人数
      // 自评
      selfNumbers: [250, 344, 356, 488, 500],
      selfLineColor: "#3ed6bf",
      // 上级评
      supNumbers: [344, 566, 300, 389, 200],
      supLineColor: "#5399e1",
      numberLineActive: "first"
    };
  },
  created() {
    this.conditionForm = {
      name: this.names[0].value,
      department: [this.departments[1].value]
    };
    this.currentDepartment = this.departments[1].label;
  },
  methods: {
    changeName(val) {
      console.log("更换文化评分", val, this.conditionForm);
    },
    changeDepartment(val) {
      console.log(val);
      this.conditionForm = Object.assign({}, this.conditionForm, {
        department: val
      });
    },
    // 某事业部平均分切换自评or上级评数据
    changeBarRate(tab) {
      console.log(tab.name);
      let name = tab.name;
      this.rateBar.reverse();
    },
    // 各事业部各评分平均分切换各评分数据
    changeBarAverage(tab) {
      console.log(tab.name);
      // 切换数据
      let name = tab.name;
      this.selfAverageEach.reverse();
      this.supAverageEach.reverse();
    },
    // 好未来教育各分值人数切换各评分数据
    changeLineNumbers(tab) {
      console.log(tab.name);
      // 切换数据
      let name = tab.name;
      this.selfNumbers.reverse();
      this.supNumbers.reverse();
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
