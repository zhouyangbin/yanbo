<template>
    <div ref="echartBar" class="echart-bar" :id="id"></div>
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
    selfRates: {
      type: Array,
      default: () => []
    },
    supRates: {
      type: Array,
      default: () => []
    },
    width: {
      type: Number,
      default: 0
    },
    id: {
      type: String,
      default: "echart-bar"
    }
  },
  data() {
    return {
      myChart: null,
      option: {
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
          formatter: function(datas) {
            return datas[0].value + "/" + datas[1].value;
          }
        },
        color: ["#3BDABC", "#72b7f5"],
        xAxis: [
          {
            type: "category",
            data: ["成就客户", "务实", "创新", "合作"],
            axisPointer: {
              type: "shadow"
            },
            // 隐藏x轴
            axisLine: { show: false },
            // 去除x轴上的刻度线
            axisTick: {
              show: false
            },
            // 改变x轴字体颜色和大小
            axisLabel: {
              textStyle: {
                color: "#999999"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            min: 0,
            max: 5,
            interval: 1,
            show: true,
            // 控制网格线是否显示
            splitLine: {
              show: true,
              //  改变轴线颜色
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
            center: ["50%", "60%"],
            data: this.selfRates,
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
            data: this.supRates,
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
    // 监听拉动浏览器大小自适应
    width: function() {
      const width = document.getElementById(this.id).clientWidth;
      this.myChart.resize({ width });
    }
  }
};
</script>

<style scoped>
.echart-bar {
  height: 250px;
  width: 100%;
}
</style>
