<template>
    <div ref="echartLine" class="echart-line" id="echart-line"></div>
</template>
<script>
// ECharts 主模块
import echarts from "echarts/lib/echarts";
// 折线图
import "echarts/lib/chart/line";
// 提示框和标题
import "echarts/lib/component/tooltip";
import "echarts/lib/component/grid";
export default {
  props: {
    numbers: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: "#3ed6bf"
    },
    width: {
      type: Number,
      default: 0
    }
  },
  computed: {
    maxNum() {
      return Math.max(...this.numbers);
    }
  },
  data() {
    return {
      myChart: null,
      option: {
        tooltip: {
          trigger: "item",
          formatter: function(data) {
            return data.value + "人";
          },
          position: "top"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1分", "2分", "3分", "4分", "5分"],
          // 设置坐标轴字体颜色和宽度
          axisLine: {
            lineStyle: {
              color: "#eee"
            }
          },
          // 控制网格线是否显示
          splitLine: {
            show: true,
            // 改变轴线颜色
            lineStyle: {
              // 使用深浅的间隔色
              color: ["#eee"]
            }
          },
          // 去除x轴上的刻度线
          axisTick: {
            show: false
          },
          // 改变x轴字体颜色和大小
          axisLabel: {
            textStyle: {
              color: "#999"
            }
          }
        },
        yAxis: [
          {
            type: "value",
            min: 0,
            max: this.maxNum,
            interval: 50,
            // 是否显示Y轴线
            show: true,
            splitLine: {
              // 是否显示网格线
              show: false
            },
            axisLabel: {
              formatter: "{value}",
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
        series: [
          {
            type: "line",
            lineWidth: 15,
            data: this.numbers,
            itemStyle: {
              normal: {
                color: this.color,
                lineStyle: {
                  width: 2
                }
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.echartLine);
    this.myChart.setOption(this.option);
  },
  watch: {
    numbers: function(newDate) {
      this.myChart.setOption(this.option);
    },
    // 监听拉动浏览器大小自适应
    width: function() {
      const width = document.getElementById("echart-line").clientWidth;
      this.myChart.resize({ width });
    }
  }
};
</script>

<style scoped>
.echart-line {
  height: 250px;
  width: 100%;
  display: inline-block;
}
</style>
