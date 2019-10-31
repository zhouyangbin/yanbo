<template>
  <div ref="echartBar" class="echart-bar" id="echart-bar"></div>
</template>
<script>
// ECharts 主模块
import echarts from "echarts/lib/echarts";
// 柱状图
import "echarts/lib/chart/bar";
// 提示框和标题
import "echarts/lib/component/tooltip";
// dataZoom
import "echarts/lib/component/dataZoom";
export default {
  props: {
    rateBar: {
      type: Array,
      default: () => []
    },
    completionBuNams: {
      type: Array,
      default: () => []
    },
    width: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      myChart: null
    };
  },
  computed: {
    option: function() {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            crossStyle: {
              color: "#999"
            },
            shadowStyle: {
              color: "transparent"
            }
          },
          position: "top",
          formatter: function(data) {
            if (data[0] && !data[0].data) {
              return "0%";
            } else {
              return parseFloat(data[0].data * 100).toFixed(2) + "%";
            }
          }
        },
        color: ["#3BDABC", "#72b7f5"],
        xAxis: [
          {
            type: "category",
            data: this.completionBuNams,
            axisLabel: {
              // 横轴信息全部显示
              // interval: 0,
              // -30度角倾斜显示
              rotate: -20,
              textStyle: {
                color: "#999"
              }
            },
            // 隐藏x轴
            axisLine: {
              show: false
            },
            // 去除x轴上的刻度线
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 1,
            interval: 0.2,
            // 显示Y轴线
            show: true,
            // 控制网格线是否显示
            splitLine: {
              show: true,
              // 改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ["#eee"]
              }
            },
            axisLabel: {
              formatter: function(value, index) {
                if (value == 0) {
                  return value;
                } else {
                  return value * 100 + "%";
                }
              },
              textStyle: {
                color: "#c7c7c7"
              }
            },
            // 隐藏y轴
            axisLine: { show: false },
            // 去除y轴上的刻度线
            axisTick: {
              show: false
            }
          }
        ],
        dataZoom: [
          {
            type: "slider"
          }
        ],
        series: [
          {
            type: "bar",
            data: this.rateBar,
            // data:[0.0476],
            barWidth: 12,
            itemStyle: {
              normal: {
                barBorderRadius: [6, 6, 0, 0],
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                  { offset: 0, color: "#ffc083" },
                  { offset: 1, color: "#ff8b67" }
                ])
              }
            }
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
    rateBar: function() {
      this.myChart.setOption(this.option);
    },
    completionBuNams: function() {
      this.myChart.setOption(this.option);
    },
    // 监听拉动浏览器大小自适应
    width: function() {
      const width = document.getElementById("echart-bar").clientWidth;
      this.myChart.resize({ width });
    }
  }
};
</script>

<style scoped>
.echart-bar {
  height: 100%;
  width: 100%;
  display: inline-block;
}
</style>
