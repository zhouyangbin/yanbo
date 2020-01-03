<template>
  <div class="container">
    <div class="container">
      <div class="header">
        <div class="prev" @click="prev_mouth">上一月</div>
        <div class="current">{{ year + "年" }}{{ month + "月" }}</div>
        <div class="next" @click="next_mouth">下一月</div>
      </div>
      <div class="calendar_box">
        <div class="week">
          <div class="item" v-for="(item, index) in week" :key="index">
            {{ item }}
          </div>
        </div>
        <div
          class="dayList"
          v-for="(line, lineIndex) in showData"
          :key="lineIndex"
        >
          <div
            class="item2"
            v-for="(showDay, dayIndex) in line"
            :key="dayIndex"
          >
            {{ showDay.day }}<br /><span class="name"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header">
        <div class="prev" @click="last_week">上一周</div>
        <div class="current" v-if="weekData[0]">
          {{ weekData[0].year }}/{{ weekData[0].month }}/{{ weekData[0].day
          }}<br />
          {{ weekData[6].year }}/{{ weekData[6].month }}/{{ weekData[6].day }}
        </div>
        <div class="next" @click="next_week">下一周</div>
      </div>
      <div style="display:flex">
        <div class="calendar_box" style="width:60px;overflow: hidden;">
          <div class="week" style="width:100%">
            <div class="item">
              时间
            </div>
          </div>
          <div class="week_left_bottom" ref="week_left">
            <div
              class="dayList"
              style="width:100%"
              v-for="(item, index) in timeData"
              :key="index"
            >
              <div class="item2">
                {{ item.time }}
              </div>
            </div>
          </div>
        </div>
        <div class="calendar_box" style="overflow: hidden;">
          <div class="week_right_top" ref="week_top">
            <div class="week">
              <div class="item" v-for="(item, index) in weekData" :key="index">
                {{ item.week }}<br />{{ item.day }}
              </div>
            </div>
          </div>
          <div class="week_right_bottom" @scroll="scrollGet($event)">
            <div class="dayList" v-for="(item, index) in timeData" :key="index">
              <div
                class="item2"
                v-for="(action, timeIndex) in item.action"
                :key="timeIndex"
              >
                {{ action.do }}<br />
                {{ action.willdo }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeaderSchedule",
  data() {
    return {
      //记录年月日
      year: "",
      month: "",
      day: "",
      week: ["Sun", "Sun", "Tues", "Wed", "Thur", "Fri", "Sat"],
      //要展示和绑定的数据
      showData: [[], [], [], [], [], []],
      monthDay: [], //保存当前年每月的天数
      weekData: [],
      time_strat: 8,
      time_end: 24,
      timeData: [],
      currentFirstDate: ""
    };
  },
  mounted: function() {
    var date = new Date("2019-12");
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    this.monthDay = this.getMonthDay(this.year);
    //初始化数据
    this.changeDay();
    this.setDate(new Date());
  },
  watch: {},
  methods: {
    setDate: function(date) {
      let clen = this.week.length;
      let week = date.getDay() - 1;
      date = this.addDate(date, week * -1);
      this.currentFirstDate = new Date(date);
      this.weekData = [];
      for (var i = 0; i < clen; i++) {
        let week_item = this.formatDate(
          i == 0 ? this.addDate(date, -1) : this.addDate(date, 1)
        ); //星期日开始
        this.weekData.push(week_item);
      }
      this.set_timeData();
    },
    addDate: function(date, n) {
      date.setDate(date.getDate() + n);
      return date;
    },
    formatDate: function(date) {
      let year = date.getFullYear() + "年";
      let month = date.getMonth() + 1 + "月";
      let day = date.getDate() + "日";
      let week = this.week;
      week = week[date.getDay()];
      return { year: year, month: month, day: day, week: week };
    },
    last_week: function() {
      let date = this.addDate(this.currentFirstDate, -7);
      this.setDate(date);
    },
    next_week: function() {
      let date = this.addDate(this.currentFirstDate, 7);
      this.setDate(date);
    },
    set_timeData: function() {
      for (let i = this.time_strat; i < this.time_end; i++) {
        this.timeData.push({
          time: i + ":00",
          action: this.set_time_action()
        });
      }
    },
    set_time_action() {
      let action = [];
      for (let j = 0; j < this.week.length; j++) {
        action.push({
          do: "已完成",
          willdo: "未完成"
        });
      }
      return action;
    },
    scrollGet(e) {
      let scrollTop = e.srcElement.scrollTop || e.target.scrollTop;
      let scrollLeft = e.srcElement.scrollLeft || e.target.scrollLeft;

      console.log(scrollLeft);
      this.$refs.week_left.scrollTop = scrollTop;
      this.$refs.week_top.scrollLeft = scrollLeft;
      // this.$refs.week_left.$el.scrollTop;
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
      if (day <= this.monthDay[month]) {
        for (var s = 0; s < 7; s++) {
          if (day > this.monthDay[month]) {
            _arr[5].push("");
          } else {
            _arr[5].push({
              day: day
            });
            day++;
          }
        }
      }
      this.$set(this, "showData", _arr);
    },
    prev_mouth() {
      this.month -= 1;
      if (this.month == 0) {
        this.month = 12;
        this.year -= 1;
      }
      this.changeDay();
    },
    next_mouth() {
      this.month += 1;
      if (this.month > 12) {
        this.month = 1;
        this.year += 1;
      }
      this.changeDay();
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
.container {
  width: 100%;
}
.header {
  width: 100%;

  display: flex;
}
.prev {
  height: 50px;
  flex: 3;
  display: flex;
  justify-content: center;
}
.current {
  height: 50px;
  display: flex;
  flex: 10;
  align-items: center;
  justify-content: center;
}
.next {
  height: 50px;
  flex: 3;
  display: flex;
  justify-content: center;
}
.prev,
.next {
  align-items: center;
  justify-content: center;
  background-color: rgb(66, 207, 175);
  color: #fff;
}
.calendar_box {
  width: 100%;
  height: calc(100vh - 50px);
  overflow: scroll;
}
.week_left_bottom {
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 90px);
}
.week_right_top {
  width: 100%;
  overflow: hidden;
}
.week_right_bottom {
  overflow: scroll;
  height: calc(100vh - 90px);
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
  color: #f45900;
  border: solid 1px rgba(255, 134, 51, 1);
  background-color: rgba(255, 230, 213, 1);
}
.dayList {
  width: 140%;
  height: auto;
  display: inline-flex;
  border-radius: 5px;
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
.active {
  font-size: 20px;
  color: #ffc0cb;
  /*background-color: #FFC0CB;*/
}
</style>
