<template>
    <div style="width: 100%;height: 100%">
    <nav-bar :list="nav"></nav-bar>
    <div :class="className" :id="id" :style="{ height: height, width: width }" ref="myEchart">
      
    </div>
  </div>
</template>
<script>
  import {
  GRADE_MANAGE,
} from "@/constants/TEXT";
import echarts from "echarts";
import { getNewOrgTree } from "@/constants/API";
import { PATH_PERFORMANCE_MANAGER } from "@/constants/URL";
export default {
  props: {
    className: {
      type: String,
      default: "yourClassName"
    },
    id: {
      type: String,
      default: "yourID"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "90%"
    }
  },
  data() {
    return {
      chart: null,
      data: [],
      nav: [
        {
          label: GRADE_MANAGE,
          href: PATH_PERFORMANCE_MANAGER
        }
      ],
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
  },
  mounted() {
    this.getNewOrgTree(this.$route.params.id);
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    getNewOrgTree(id) {
      return getNewOrgTree(id)
        .then(res => {
          this.data = res;
          if(res.length){
            this.initChart()
          }else{
            this.$message({
            message: '当前评分没有数据',
            type: 'warning',
            duration: "2000"
          });
          }
        })
        .catch(e => {});
    },
    initChart() {
      let that = this;
      this.chart = echarts.init(this.$refs.myEchart);
      // 把配置和数据放这里
      let app = {};
      let option = null;
      this.chart.showLoading();
      this.chart.hideLoading();
      let data = {
        name: "好未来",
        itemStyle: {
          borderType: "solid",
          borderColor: "#D7A013",
          borderWidth: "0"
        },
        label: {
          position: "top",
          rotate: 0,
          verticalAlign: "middle",
          align: "center",
          fontSize: 16,
          color: "#54dbbb"
        },
        children: that.data
      };
      echarts.util.each(data.children, function(item, index) {
        //index % 2 === 0 && (item.collapsed = true);
        that.setItemStyle(item);
      });
      this.chart.setOption({
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
          backgroundColor: "none",
          formatter: function(params) {
            //console.log(params)//
            return that.set_tooltip_html(params);
          }
        },
        series: [
          {
            type: "tree",
            data: [data],
            top: "10%", //距离上
            left: "10%", //距离左
            bottom: "10%", //距离下
            right: "10%", //距离右
            orient: "vertical", // vertical horizontal
            rootLocation: { x: "center", y: "100" }, // 根节点位置  {x: 100, y: 'center'}
            nodePadding: 50,
            layerPadding: 120,
            hoverable: false,
            roam: true,
            expandAndCollapse: false, //是否接待你折叠
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      });
      if (option && typeof option === "object") {
        this.chart.setOption(option, true);
      }
    },
    set_tooltip_html(item) {
      let background =
        item.data.is_super_status && item.data.is_high_level_status
          ? "rgba(7, 171, 48, 1)"
          : "#d3d3d3"; //隔级整体提交 上级整体提交
      let is_super = item.data.is_super; //是否是上级
      let is_super_status = item.data.is_super_status ? "是" : "否"; //上级整体提交 1是 0否

      let is_high_level = item.data.is_high_level; //是否是隔级
      let is_high_level_status = item.data.is_high_level_status ? "是" : "否"; //隔级整体提交状态 1 提交 0否
      var htmlStr = `<div style="background:${background};border:10px;color:#fff;border-radius:4px;padding:4px;">`;
      htmlStr += `${item.name} <br/>`;
      is_super ? (htmlStr += `上级整体提交: ${is_super_status} <br/>`) : null;
      is_high_level
        ? (htmlStr += `隔级审核: ${is_high_level_status} <br/>`)
        : null;
      htmlStr += `</div>`;
      return htmlStr;
    },
    setItemStyle(item) {
      let background =
        item.is_super_status && item.is_high_level_status
          ? "rgba(7, 171, 48, 1)"
          : "#d3d3d3"; //隔级整体提交 上级整体提交
      let font_color = "";

      if (item.is_abnormal) {
        //是否异常
        font_color = "#eb0c00";
      } else {
        if (!item.no_in_score) {
          font_color = "#000";
        } else {
          font_color = "#f45900";
        }
      }

      // let font_color =
      //   item.is_super_status && item.is_high_level_status
      //     ? "rgba(7, 171, 48, 1)"
      //     : "#f45900"; //隔级整体提交 上级整体提交
      item.symbolSize = [10, 10];
      item.nodePadding = 50;
      item.symbol = "circle";
      item.itemStyle = {
        borderType: "solid",
        borderColor: "#D7A013",
        borderWidth: "0",
        color: background
        //margin:"40px"
      };
      item.label = {
        color: font_color,
        fontSize: 12,
        position: "bottom",
        rotate: 0,
        verticalAlign: "top",
        align: "center",
        formatter: function(params) {
          var tar = params;
          var txtarry = tar.name.split("");
          var rs = "";
          for (var i = 0; i < txtarry.length; i++) {
            rs += txtarry[i] + "\n";
          }
          return rs;
        }
      };
      if (item.children.length) {
        item.children.map(item => {
          this.setItemStyle(item);
        });
      }
    }
  }
};
</script>
