<template>
    <div ref="echartBar" class="echart-bar" id="echart-bar"></div>
</template>
<script>
// ECharts 主模块
import echarts from "echarts/lib/echarts";
// 饼状图
import "echarts/lib/chart/bar";
// 提示框和标题
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
export default {
  props: {
    selfAverage: {
      type: Array,
      default: () => []
    },
    supAverage: {
      type: Array,
      default: () => []
    },
    departmentsAverage: {
      type: Array,
      default: () => []
    },
    yMin: {
      type: Number,
      default: 0
    },
    yMax: {
      type: Number,
      default: 0
    },
    yInterval: {
      type: Number,
      default: 1
    },
    width: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      myChart: null,
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // ‘cross属性有横向虚线’
            type: "shadow",
            crossStyle: {
              color: "#999"
            },
            shadowStyle: {
              color: "transparent"
            }
          },
          position: "top",
          formatter: function(datas) {
            return datas[0].value + "/" + datas[1].value;
          }
        },
        color: ["#3BDABC", "#72b7f5"],
        xAxis: [
          {
            type: "category",
            data: this.departmentsAverage,
            axisPointer: {
              type: "shadow"
            },
            grid: {
              y2: 140
            },
            axisLabel: {
              // 横轴信息全部显示
              interval: 0,
              // -30度角倾斜显示
              rotate: -25,
              textStyle: {
                color: "#999"
              }
            },
            // 隐藏x轴
            axisLine: { show: false },
            // 去除x轴上的刻度线
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            min: this.yMin,
            max: this.yMax,
            interval: this.yInterval,
            // 是否显示Y轴线
            show: true,
            // 控制网格线是否显示
            splitLine: {
              show: true,
              // 改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ["#eeeeee"]
              }
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
            name: "自评",
            type: "bar",
            data: this.selfAverage,
            barWidth: 12,
            itemStyle: {
              normal: {
                barBorderRadius: [6, 6, 0, 0],
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                  { offset: 0, color: "#3BDABC" },
                  { offset: 1, color: "#3BDABC" }
                ])
              }
            }
          },
          {
            name: "上级评",
            type: "bar",
            data: this.supAverage,
            barWidth: 12,
            itemStyle: {
              normal: {
                // 柱形图圆角，初始化效果
                barBorderRadius: [6, 6, 0, 0],
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                  { offset: 0, color: "#72b7f5" },
                  { offset: 1, color: "blue" }
                ])
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.echartBar);
    this.myChart.setOption(this.option);
  },
  watch: {
    selfAverage: function(newDate) {
      this.myChart.setOption(this.option);
    },
    supAverage: function(newDate) {
      this.myChart.setOption(this.option);
    },
    // 监听拉动浏览器大小自适应
    width: function(){
      const width = document.getElementById('echart-bar').clientWidth
      this.myChart.resize({width})
    }
  }
};
</script>

<style scoped>
.echart-bar {
  height: 250px;
  width: 100%;
  display: inline-block;
}
</style>
