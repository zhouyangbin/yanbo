<template>
  <div id="orgManagement">
    
  </div>
</template>
<script>
import {
  GRADE_PROGRESS,
  GRADE_MANAGE,
  FINISHED_DATE,
  DEPARTMENT,
  OPERATIONS,
  DETAILS,
  EXPORT_DETAILS,
  RECORD_STATUS,
  SELF_EVALUATION_STATUS,
  LEADER_EVALUATION_STATUS,
  TARGET_STATUS,
  APPEAL_STATUS
} from "@/constants/TEXT";
import {
  PATH_PERFORMANCE_MANAGER,
  PATH_PERFORMANCE_ORG_LIST,
  PATH_EXPORT_PERFORMANCE_DEPARTMENT
} from "@/constants/URL";

import { getPerformanceDepartmentsList } from "@/constants/API";
import echarts from 'echarts'
export default {
  data() {
      return {
        chartData: {
          //这里参考相关图表的data格式
        }
      }
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById('orgManagement'))
        this.chart.on('contextmenu', params => {
          console.log(params)
          if (params.componentType === 'series') {
              this.selectedOrg = params.data
              this.popoverPanelShow = true
          }else {
            return
          }
        });
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
              {
                  type: 'tree',

                  data: [this.chartData],

                  top: '1%',
                  left: '15%',
                  bottom: '1%',
                  right: '20%',

                  symbolSize: 12,

                  label: {
                      normal: {
                          position: 'left',
                          verticalAlign: 'middle',
                          align: 'right',
                          fontSize: 12
                      }
                  },

                  leaves: {
                      label: {
                          normal: {
                              position: 'right',
                              verticalAlign: 'middle',
                              align: 'left'
                          }
                      }
                  },
                  expandAndCollapse: true,
                  animationDuration: 550,
                  animationDurationUpdate: 750
              }
          ]
        })
      },
      hidePopoverPanel(){
        this.popoverPanelShow = false;
      }
    },
  mounted() {
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
};
</script>
<style scoped>
.progress-header {
  background-color: white;
  padding: 20px 10px 10px 10px;
}
.tips {
  font-size: 10px;
  color: grey;
}
hr {
  margin-top: 20px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
</style>
