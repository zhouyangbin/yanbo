<template>
    <div ref="echartBar" class="echart-bar"></div>
</template>
<script>
    // ECharts 主模块
    import echarts from 'echarts/lib/echarts'
    // 饼状图
    import 'echarts/lib/chart/bar'
    // 提示框和标题
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/title'
    export default {
      props: {
        rateBar: {
          type: Array,
          default: []
        },
        completionBuNams: {
          type: Array,
          default: []
        }
      },
      data() {
        return {
          myChart: null,
          option: {
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'shadow',
                crossStyle: {
                  color: '#999'
                },
                shadowStyle:{
                  color: 'transparent',
                }
              },
              position:'top',
              formatter:function (data) {
                return data.value * 100 + '%'
              }

            },
            color:["#3BDABC","#72b7f5"],
            xAxis: [
            {
              type: 'category',
              data: this.completionBuNams,
              axisPointer: {
                type: 'shadow',
              },
              // 设置坐标轴字体颜色和宽度
              axisLine:{
                lineStyle:{
                  color:'gray',
                  width:2
                },
              },
              axisLabel:{
                // 横轴信息全部显示
                interval:0,
                // -30度角倾斜显示
                rotate:-25,
                textStyle: {
                  color: '#999999',
                }
              },
              // 隐藏x轴
              axisLine: {show: false},
              // 去除x轴上的刻度线
              axisTick: {
                show: false
              }
            }
            ],
            yAxis: [
            {
              type: 'value',
              name: '',
              min: 0,
              max: 1,
              interval: 0.2,
              // 显示Y轴线
              show:true,
              // 控制网格线是否显示
              splitLine: {
                show: true,
                // 改变轴线颜色
                lineStyle: {
                  // 使用深浅的间隔色
                  color: ['#eeeeee']
                }
              },
              axisLabel: {
                formatter: function (value, index) {
                  if(value == 0) {
                    return value;
                  }else {
                    return value * 100 + '%'
                  }
                },
                textStyle: {
                  color: '#c7c7c7'
                }
              },
              // 设置坐标轴字体颜色和宽度
              axisLine:{
                lineStyle:{
                  color:'gray',
                  width:2
                }
              },
              // 隐藏y轴
              axisLine: {show: false},
              // 去除y轴上的刻度线
              axisTick: {
                show: false
              }
            }
            ],
            series: [
            {
              type:'bar',
              data:this.rateBar,
              barWidth:12,
              itemStyle: {
                normal: {
                  barBorderRadius:[6, 6, 0, 0],
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 1,
                    [
                    {offset: 0, color: '#ffc083'},
                    {offset: 1, color: '#ff8b67'}
                    ]
                    )
                },
              },
              label:{
                normal:{
                  show:false,
                  position:'outside',
                  textStyle:{
                    color:'green'
                  },
                  formatter:function (data) {
                    return data.value * 100 + '%'
                  }
                }
              }
            }
            ]
          }
        }
      },
      mounted() {
        this.myChart = echarts.init(this.$refs.echartBar)
        this.myChart.setOption(this.option)
      },
      watch: {
        rateBar: function(newDate){
          this.myChart.setOption(this.option)
        }
      }
    }
</script>

<style scoped>
  .echart-bar{
    height: 250px;
    width: 100%;
    display: inline-block;
  }
</style>