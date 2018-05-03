<template>
    <div ref="echartPie" class="echart-pie"></div>
</template>
<script>
    // ECharts 主模块
    import echarts from 'echarts/lib/echarts'
    // 饼状图
    import 'echarts/lib/chart/pie'
    // 提示框和标题
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/title'
    export default {
      props: {
        data: {
          type: Array,
          default: [
              {value:0, name:'已完成'},
              {value:100, name:'未完成'}
          ]
        },
        title: {
          type: String,
          default: '进度'
        }
      },
      data() {
        return {
          option: {
            title : {
                text: this.title,
                x: 'center',
                textStyle: {
                  fontSize: 14,
                  color: '#838384'
                },
                top: '20px'
            },
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
            {
              type: 'pie',
              name: this.title,
              radius : '55%',
              center: ['50%', '60%'],
              label: {
                normal: {
                  position: 'inner'
                }
              },
              color:['#21c1a5','#ff742c'],
              data:this.data,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
            ]
          }
        }
      },
      mounted() {
        var myChart = echarts.init(this.$refs.echartPie)
        myChart.setOption(this.option)
      }
    }
</script>

<style scoped>
  .echart-pie{
    height: 250px;
    width: 50%;
    display: inline-block;
  }
</style>