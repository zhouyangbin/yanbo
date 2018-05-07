<template>
  <div ref="echartPie" class="echart-pie" id="echart-pie"></div>
</template>
<script>
// ECharts 主模块
import echarts from "echarts/lib/echarts";
// 饼状图
import "echarts/lib/chart/pie";
// 提示框和标题
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
export default {
  props: {
    data: {
      type: Array,
      default: () => [
        { value: 0, name: "已完成" },
        { value: 100, name: "未完成" }
      ]
    },
    title: {
      type: String,
      default: "进度"
    },
    width: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      myChart: null,
      isLoading: true,
      option: {
        title: {
          text: this.title,
          x: "center",
          textStyle: {
            fontSize: 14,
            color: "#838384"
          },
          top: "20px"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%",
          position: "top"
        },
        series: [
          {
            type: "pie",
            name: this.title,
            radius: "55%",
            center: ["50%", "60%"],
            label: {
              normal: {
                position: "inner"
              }
            },
            color: ["#21c1a5", "#ff742c"],
            data: this.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.echartPie);
    this.myChart.setOption(this.option);
  },
  watch: {
    // 监听拉动浏览器大小自适应
    width: function() {
      const width = document.getElementById("echart-pie").clientWidth;
      this.myChart.resize({ width });
    }
  }
};
</script>

<style scoped>
.echart-pie {
  height: 100%;
  width: 100%;
  display: inline-block;
}
</style>
