<template>
  <section>
    <div style="width: 100%;height: 800px">
      <div style="width: 100%;height: 60px;text-align:left">
        <el-col :span="24" class="toolbar">
          <el-form :inline="true" :model="filters">
            <el-form-item label="时间">
              <el-date-picker
                v-model="filters.date"
                align="right"
                type="date"
                size="mini"
                placeholder="选择日期"
                :picker-options="pickerOptions1"
              >
              </el-date-picker>
            </el-form-item>
          </el-form>
        </el-col>
      </div>
      <div style="width: 100%;height: 90%;position: absolute">
        <div
          style=" height: 50px;position: relative;width: 100%;text-align: center;"
        >
          <div class="year">{{ year + "年" }}</div>
          <div class="month">{{ month + "月" }}</div>
        </div>

        <div class="calendar_box">
          <ul class="week">
            <li class="item">星期日</li>
            <li class="item">星期一</li>
            <li class="item">星期二</li>
            <li class="item">星期三</li>
            <li class="item">星期四</li>
            <li class="item">星期五</li>
            <li class="item">星期六</li>
          </ul>
          <ul
            class="dayList"
            v-for="(line, lineIndex) in showData"
            :key="lineIndex"
          >
            <li
              class="item2"
              :id="showID(day, showDay)"
              v-for="(showDay, dayIndex) in line"
              :key="dayIndex"
              :class="{ active: day == showDay }"
              @click="changeCalendar(showDay)"
            >
              {{ showDay.day }}<br /><span class="name"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--详情界面-->
    <el-dialog
      title="日程详情"
      :visible.sync="addFormVisible"
      top="5vh"
      width="70%"
      :close-on-click-modal="false"
    >
      <div style="height: 500px">
        <template>
          <el-table :data="tableData2" style="width: 100%;height: 100%;">
            <el-table-column prop="departmentname" label="部门" width="180">
            </el-table-column>
            <el-table-column prop="personnelname" label="人员" width="180">
            </el-table-column>
            <el-table-column prop="calendartitle" label="日程标题" width="180">
            </el-table-column>
            <el-table-column prop="begintime" label="开始时间" width="180">
            </el-table-column>
            <el-table-column prop="endtime" label="结束时间" width="180">
            </el-table-column>
            <el-table-column prop="content" label="日程内容"> </el-table-column>
          </el-table>
        </template>
      </div>
    </el-dialog>
  </section>
</template>
<script>
export default {
  name: "LeaderSchedule",
  mounted: function() {
    var date = new Date("2019-12");
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    this.monthDay = this.getMonthDay(this.year);
    //初始化数据
    this.changeDay();

    // this.selectDepartment();
  },

  data() {
    return {
      //日程详情是否隐藏参数
      addFormVisible: false,
      //部门id
      departmentId: "",
      //部门树形菜单
      departmentTree: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      tableData: [],
      departmentList: "",
      personnelList: [],
      filters: {
        date: "",
        department: "请选择部门",
        personnel: "请选择人员"
      },
      //日程详情
      tableData2: [],
      //日期选择控制
      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },

      props: {
        children: "children",
        id: "id",
        label: "label"
      },
      count: 1,

      //记录年月日
      year: "",
      month: "",
      day: "",
      //要展示和绑定的数据
      showData: [[], [], [], [], [], []],
      prevDay: -1, //第1行占多少天
      monthDay: [] //保存当前年每月的天数
    };
  },
  watch: {
    department: "handleNodeClick"
  },
  methods: {
    //清空表格
    empty() {
      this.$set(this, "showData", [[], [], [], [], [], []]);
    },
    //修改时间
    changedate() {
      var date = this.filters.date; //2018-09-30
      this.year = date.getFullYear();
      this.month = date.getMonth();
      this.day = date.getDate();
      this.monthDay = this.getMonthDay(this.year);
      this.changeDay();
    },
    //判断是不是闰年
    isLearYear: function(year) {
      var condition1 = year % 4 == 0;
      var condition2 = year % 100 != 0;
      var condition3 = year % 400 == 0;
      return (condition1 && condition2) || condition3;
    },
    //获得当前年的每月的天数
    getMonthDay: function(year) {
      var _arr = [31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (this.isLearYear(year)) {
        //闰年
        _arr.splice(1, 0, 29);
        return _arr;
      } else {
        //平年
        _arr.splice(1, 0, 28);
        return _arr;
      }
    },
    //修改天数数据
    changeDay: function(newday, text) {
      let _arr = [[], [], [], [], [], []];
      var month = Number(this.month - 1);
      //当前年的一月一日是星期几
      let current_week = new Date(this.year, month, 1).getDay();
      var day = 1;
      //第一行
      for (let i = 0; i < 7; i++) {
        if (i >= current_week) {
          _arr[0].push({
            day: day
          });
          day++;
        } else {
          _arr[0].push("");
        }
      }
      //第二到第四行
      for (let j = 0; j < 3; j++) {
        for (var k = 0; k < 7; k++) {
          //var newday = this.addMemorandum(day,newday,text);
          _arr[j + 1].push({
            day: day
          });
          day++;
        }
      }
      //第五行
      for (let q = 0; q < 7; q++) {
        if (day > this.monthDay[month]) {
          _arr[4].push("");
        } else {
          _arr[4].push({
            day: day
          });
          day++;
        }
      }
      //第六行
      for (var s = 0; s < 7; s++) {
        if (day > this.monthDay[month]) {
          //   _arr[5].push("");
        } else {
          _arr[5].push({
            day: day
          });
          day++;
        }
      }
      this.$set(this, "showData", _arr);
    },

    //为li标签增加id属性
    showID(day, newday) {
      if (day == newday) {
        return "li00" + newday;
      } else {
        return "li" + newday;
      }
    },

    //当天日程查询详情
    changeCalendar(day) {
      if (day == "" || day == undefined) {
        return;
      } else {
        var id = "#li" + day;
        for (var i = 1; i < 32; i++) {
          $("#li" + i).css({ "background-color": "#F8F8FF" });
        }
        $(id).css({ "background-color": "#00BFFF" });
        this.showCalender(day);
      }
    },

    //弹窗详情
    showCalender(day) {
      var self = this;
      var dbUrl = self.$API.ajaxPath;
      //   var param = [];
      //   var sj = self.filters.date;
      var yue = this.month;
      if (yue < 10) {
        yue = "0" + yue;
      }
      var nian = this.year;
      var youWant = nian + "-" + yue + "-" + day;
    },

    //查询按钮
    query() {
      $(".name").html("");
      this.changedate();
      var sj = this.filters.date;
      var yue = sj.getMonth() + 1;
      if (yue < 10) {
        yue = "0" + yue;
      }
      var nian = sj.getFullYear();
      var youWant = nian + "-" + yue;
      var self = this;
    },

    //点击菜单栏;
    handleNodeClick(node) {
      var self = this;
      self.departmentId = node.id;
      this.filters.department = node.label;
    },
    //根据部门查询人员
    selectDepartment() {},
    //部门查询
    departmentQuery() {}
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
.treediv {
  overflow-y: auto;
  overflow-x: auto;
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  z-index: 99999999;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  position: absolute;
}
/*滚动条样式*/
.treediv::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.treediv::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.treediv::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.calendar {
  position: relative;
  width: 350px;
  height: 50px;
}
.header {
  height: 50px;
  position: relative;
  width: 100%;
  text-align: center;
}
.year {
  display: inline-block;
  font-size: 25px;
  color: red;
}
.month {
  display: inline-block;
  font-size: 25px;
  color: red;
}
.calendar_box {
  width: 100%;
  height: auto;
  overflow: scroll;
}
.week {
  padding: 0;
  margin: 0;
  width: 140%;
  height: 40px;
  border-radius: 5px;
  display: inline-flex;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  background-color: #d3d3d3;
}
.dayList {
  padding: 0;
  margin: 0;
  width: 140%;
  height: auto;
  border-radius: 5px;
  display: inline-flex;
}
.item2 {
  flex: 1;
  height: 100px;
  text-align: center;
  padding: 0;
  margin: 0;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  background-color: #f8f8ff;
}
.item:last-child {
  border-right: 1px solid #dcdfe6;
}
ul {
  margin: 0;
  padding: 0;
  height: 21px;
}
.active {
  font-size: 20px;
  color: #ffc0cb;
  /*background-color: #FFC0CB;*/
}
.last,
.prev {
  background-color: #999999;
}
</style>
