<template>
    <div ref="echartBar" class="echart-bar-performance" id="echart-bar-performance"></div>
</template>
<script>
// ECharts 主模块
import echarts from "echarts/lib/echarts";
// 柱状图
import "echarts/lib/chart/bar";
// 提示框和标题
import "echarts/lib/component/tooltip";
export default {
  data() {
    return {
      myChart: null
    };
  },
  computed: {
    option: function() {
      return {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      };
    }
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.echartBar);
    this.myChart.setOption(this.option);
  },
  watch: {
    // 监听拉动浏览器大小自适应
    width: function() {
      const width = document.getElementById("echart-bar-performance")
        .clientWidth;
      this.myChart.resize({ width });
    }
  }
};
</script>

<style scoped>
.echart-bar-performance {
  height: 100%;
  max-height: 400px;
  width: 100%;
  display: inline-block;
}
</style>
