<template>
  <div class="assessment-detail">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <section class="content-container bg-white">
      <div class="content-title">
        <div>测试考核一</div>
      </div>
      <div class="list-timeline">
        <div class="time-line active" data="填写中100/确认中300">指标设定</div>
        <div class="time-line-sign active" data="11月15日"></div>
        <div class="time-line-circle active">
          <div class="circle-list"></div>
          <div class="circle-list"></div>
          <div class="circle-list"></div>
          <div class="circle-list"></div>
          <div class="circle-list"></div>
          <div class="circle-list"></div>
        </div>
        <div class="time-line-sign active" data="11月18日"></div>
        <div class="time-line active">自评</div>
        <div class="time-line-sign active" data="11月23日"></div>
        <div class="time-line">上级评分</div>
        <div class="time-line-sign" data="11月30日"></div>
        <div class="time-line">隔级审核</div>
        <div class="time-line-sign" data="12月1日"></div>
        <div class="time-line">总裁审核</div>
        <div class="time-line-sign" data="12月18日"></div>
        <div class="time-line">结果确认</div>
        <div class="time-line-sign" data="12月30日"></div>
      </div>
    </section>
    <section>
      <el-radio-group class="group-list" v-model="grade" @change="changeGrade">
        <el-radio-button label="sub">我的直属下级</el-radio-button>
        <el-radio-button label="nextSub">我的隔级下属</el-radio-button>
      </el-radio-group>
      <div class="filter-box">
        <div class="filter-title"><span>考核人员明细</span><span class="filter-number">共10人</span></div>
        <el-form :inline="true" ref="filterForm" :model="filterForm" class="demo-form-inline">
          <el-form-item prop="name">
            <el-input v-model="filterForm.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item prop="stage">
            <el-select v-model="filterForm.stage" placeholder="请选择状态">
              <el-option
                v-for="item in stageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm('filterForm')">清空</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
    <el-row type="flex" justify="end">
      <pagination
        @current-change="handleCurrentChange"
        :currentPage="page"
        :total="total"
      ></pagination>
    </el-row>
  </div>
</template>
<script>
import { AsyncComp } from "@/utils/asyncCom";
import {
  postMyUnderLower
} from "@/constants/API";
import {PATH_EMPLOYEE_TEAM} from "@/constants/URL"
import { LABEL_EMPTY, LABEL_SELECT_DIVISION } from "@/constants/TEXT";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue")
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
      grade: "sub",
      page: 1,
      total: 0,
      filterForm: {
        name: "",
        stage: ""
      },
      stageOptions: [
        {
          label: "待导入目标",
          value: 0
        },
        {
          label: "指标填写中",
          value: 1
        },
        {
          label: "指标确认中",
          value: 10
        },
        {
          label: "指标已确认",
          value: 20
        },
        {
          label: "评分未开始",
          value: 30
        },
        {
          label: "自评中",
          value: 40
        },
        {
          label: "复评中",
          value: 50
        },
        {
          label: "隔级审核中",
          value: 60
        },
        {
          label: "总裁审核中",
          value: 70
        },
        {
          label: "已审核",
          value: 80
        },
        {
          label: "确认中（确认成绩）",
          value: 90
        },
        {
          label: "申诉中",
          value: 100
        },
        {
          label: "已确认",
          value: 110
        },
        {
          label: "已结束",
          value: 120
        }
      ]
    };
  },
  computed: {
  },
  filters: {
  },
  methods: {
    changeGrade() {
      console.log(this.grade)
    },
    resetForm (formName){
      this.$refs[formName].resetFields();
    },
    handleCurrentChange() {
      this.page = val;
    }
  },
  created() {
  }
};
</script>
<style scoped>
.limit-width >>> .el-form-item__content {
  width: 194px;
}
.more-btn {
  padding: 0 20px;
  line-height: 36px;
  cursor: pointer;
}
.more-btn i {
  margin-right: 5px;
}
.more-btn:hover {
  background-color: #eefcf7;
  color: #75e4bc;
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
        color: #FF8519;
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
  .setting-list-box {
    margin-bottom: 8px;
    background-color: #fff;
    .setting-title {
      display: flex;
      justify-content: space-between;
      padding: 14px 24px;
      font-size: 16px;
      border-bottom: 1px solid #e9ebf2;
      .update-settin {
        font-size: 14px;
        color: #38d0af;
        cursor: pointer;
      }
    }
    .basic-setting {
      padding: 20px 24px;
      overflow: hidden;
      .setting-detail {
        float: left;
        box-sizing: border-box;
        padding: 0 10px;
        width: 33.33%;
        margin-bottom: 16px;
        &:nth-child(7n) {
          margin-bottom: 0;
        }
        .setting-key {
          float: left;
          width: 90px;
          text-align: right;
          color: #909399;
        }
        .setting-value {
          float: left;
          margin-left: 8px;
          width: calc(100% - 98px);
          line-height: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .time-setting {
      padding: 20px 24px;
      .time-setting-box {
        display: flex;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        .setting-key {
          width: 110px;
          text-align: right;
          color: #909399;
          margin-right: 8px;
        }
        .setting-detail {
          width: calc(100% - 118px);
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .setting-value {
            position: relative;
            min-width: 110px;
            &::after {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              top: 22px;
              width: 100%;
              content: attr(data);
            }
          }
        }
      }
    }
    .form-list {
      padding: 20px 24px;
      overflow: hidden;
      .el-form-item {
        float: left;
        width: 33.33%;
        margin-bottom: 16px;
      }
      .on-query {
        width: 66.66%;
        text-align: right;
      }
    }
    .table-operate {
      display: flex;
      .btn-group {
        margin: 0 10px;
      }
    }
    .table-number {
      line-height: 40px;
      i,
      span {
        color: #38d0af;
      }
    }
  }
}
</style>
