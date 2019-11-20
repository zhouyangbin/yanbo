<template>
  <div class="assessment-detail">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <section class="content-container bg-white">
      <div class="content-title">
        <div>{{ performanceDetail.name }}</div>
      </div>
      <div class="list-timeline">
        <div
          class="time-line"
          :class="performanceDetail.stage === 0 ? '' : 'active'"
          :data="
            '填写中' +
              performanceDetail.indicator_fill_in +
              '/确认中' +
              performanceDetail.indicator_confirm
          "
        >
          指标设定
        </div>
        <div
          class="time-line-sign"
          :class="performanceDetail.stage === 0 ? '' : 'active'"
          :data="performanceDetail.indicator_setting_end_time | filterDate"
        ></div>
        <div
          class="time-line-circle"
          :class="
            performanceDetail.self_evaluation_begin_time > nowTime
              ? 'active'
              : ''
          "
        >
          <div class="circle-list"></div>
          <div class="circle-list"></div>
          <div class="circle-list"></div>
          <div class="circle-list"></div>
          <div class="circle-list"></div>
          <div class="circle-list"></div>
        </div>
        <div
          class="time-line-sign"
          :class="
            performanceDetail.self_evaluation_begin_time > nowTime
              ? 'active'
              : ''
          "
          :data="performanceDetail.self_evaluation_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="performanceDetail.self_evaluation > nowTime ? 'active' : ''"
          :data="'自评中' + performanceDetail.self_evaluation"
        >
          自评
        </div>
        <div
          class="time-line-sign"
          :class="
            performanceDetail.superior_begin_time > nowTime ? 'active' : ''
          "
          :data="performanceDetail.superior_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="
            performanceDetail.superior_begin_time > nowTime ? 'active' : ''
          "
          :data="'复评中' + performanceDetail.re_evaluation"
        >
          上级评分
        </div>
        <div
          class="time-line-sign"
          :class="
            performanceDetail.isolation_begin_time > nowTime ? 'active' : ''
          "
          :data="performanceDetail.isolation_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="
            performanceDetail.isolation_begin_time > nowTime ? 'active' : ''
          "
          :data="'隔级审核中' + performanceDetail.isolation_adult"
        >
          隔级审核
        </div>
        <div
          class="time-line-sign"
          :class="
            performanceDetail.president_audit_begin_time > nowTime
              ? 'active'
              : ''
          "
          :data="performanceDetail.president_audit_begin_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="
            performanceDetail.president_audit_begin_time > nowTime
              ? 'active'
              : ''
          "
          :data="'总裁审核中' + performanceDetail.president_audit"
        >
          总裁审核
        </div>
        <div
          class="time-line-sign"
          :class="performanceDetail.stage === 60 ? 'active' : ''"
          :data="performanceDetail.result_comfirm_end_time | filterDate"
        ></div>
        <div
          class="time-line"
          :class="performanceDetail.stage === 60 ? 'active' : ''"
          :data="
            '确认中' +
              performanceDetail.confirm +
              '/已确认' +
              performanceDetail.confirmed
          "
        >
          结果确认
        </div>
        <div
          class="time-line-sign"
          :class="performanceDetail.stage === 60 ? 'active' : ''"
          :data="performanceDetail.result_confirm_end_time | filterDate"
        ></div>
      </div>
    </section>
    <section class="content-container">
      <el-radio-group class="group-list" v-model="grade">
        <el-radio-button label="superior">我的直属下级</el-radio-button>
        <el-radio-button label="isolation">我的隔级下属</el-radio-button>
      </el-radio-group>
      <lower-level
        :performanceId="performanceId"
        v-if="grade === 'superior'"
      ></lower-level>
      <isolation-level
        :performanceId="performanceId"
        v-if="grade === 'isolation'"
      ></isolation-level>
    </section>
  </div>
</template>
<script>
import { getPerformanceDetail } from "@/constants/API";
import { PATH_EMPLOYEE_TEAM } from "@/constants/URL";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "lower-level": () =>
      import("@/components/modules/seniorexecutive/LowerLevel/index.vue"),
    "isolation-level": () =>
      import("@/components/modules/seniorexecutive/IsolationLevel/index.vue")
  },
  data() {
    return {
      nav: [
        {
          label: "团队评分",
          href: PATH_EMPLOYEE_TEAM
        },
        {
          label: "评分详情",
          active: true
        }
      ],
      grade: "superior",
      performanceId: this.$route.params.performanceId,
      performanceDetail: {},
      nowTime: ""
    };
  },
  filters: {
    filterDate(val) {
      let newVal = "";
      if (val) {
        newVal = /\d{4}-\d{1,2}-\d{1,2}/g.exec(val);
        newVal = newVal[0];
      }
      return newVal;
    }
  },
  created() {
    this.nowTime = new Date();
    getPerformanceDetail(this.performanceId)
      .then(res => {
        this.performanceDetail = res;
      })
      .catch(e => {});
  }
};
</script>
<style scoped>
.assessment-detail .group-list >>> .el-radio-button__inner {
  border: none;
}
</style>
<style lang="scss" scoped>
.assessment-detail {
  color: #303133;
  .bg-white {
    background-color: white;
  }
  .content-title {
    font-size: 22px;
    text-align: center;
  }
  .list-timeline {
    display: flex;
    padding: 40px 30px;
    .time-line {
      position: relative;
      width: 15%;
      padding: 6px 0 30px 0;
      text-align: center;
      border-bottom: 4px solid #e6e9f0;
      &::after {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 26px;
        width: 100%;
        content: attr(data);
        color: #ff8519;
        font-size: 12px;
      }
    }
    .time-line.active {
      border-bottom: 4px solid #38d0afff;
    }
    .time-line-sign {
      position: relative;
      top: 50px;
      width: 12px;
      height: 12px;
      margin: 0 4px;
      box-sizing: border-box;
      border: 3px solid #e6e9f0ff;
      border-radius: 50%;
      &::after {
        position: absolute;
        left: -24px;
        top: 14px;
        width: 66px;
        content: attr(data);
        color: #909399ff;
        font-size: 12px;
      }
    }
    .time-line-sign.active {
      border: 3px solid #38d0afff;
      &::before {
        position: absolute;
        left: -6px;
        top: -26px;
        content: "\E79E";
        font-family: "element-icons" !important;
        font-size: 18px;
        color: #38d0afff;
      }
    }
    .time-line-circle {
      min-width: 45px;
      position: relative;
      top: 47px;
      left: 0;
      .circle-list {
        display: inline-block;
        margin-right: 4px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #e6e9f0;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .time-line-circle.active {
      .circle-list {
        background-color: #38d0afff;
      }
    }
  }
}
</style>
