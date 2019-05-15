<template>
  <div
    ref="echartPie"
    class="echart-pie-performance"
    id="echart-pie-performance"
  ></div>
</template>
<script>
// ECharts 主模块
import echarts from "echarts/lib/echarts";
// 柱状图
import "echarts/lib/chart/pie";
// 提示框和标题
import "echarts/lib/component/tooltip";
export default {
  props: {
    data: {
      type: Array,
      defaul: () => []
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
          trigger: "item",
          formatter: "{b} : {c}人 ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.data.map(v => v.name)
        },
        series: [
          {
            // name: "评价等级",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            clockwise: false,
            // roseType: true,
            data: this.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            color: ["#6CC4B4", " #A2D03C", "#F4DB5D", "#A886C6", "#DF7E6B"]
          }
        ]
      };
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.myChart = echarts.init(this.$refs.echartPie);
      // console.log("mounted", this.myChart);
      this.myChart.setOption(this.option);
      this.$forceUpdate();
    });
  },
  watch: {
    // 监听拉动浏览器大小自适应
    width: function() {
      const width = document.getElementById("echart-par-performance")
        .clientWidth;
      this.myChart.resize({ width });
    },
    data: function() {
      this.myChart.setOption(this.option);
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>
.echart-pie-performance {
  height: 100%;
  min-height: 400px;
  max-height: 400px;
  width: 100%;
  display: inline-block;
}
</style>
