
<template>
  <div class="self-report-component">
    <div class="title">
      {{name}}
    </div>
    <hr>
    <br>
    <div>
      <span class="sub-title">
        优势: &nbsp;
      </span>
      <span class="content">
        {{advantage}}
      </span>
    </div>
    <br>
    <div>
      <span class="sub-title">
        待提升: &nbsp;
      </span>
      <span class="content">
        {{promotion}}
      </span>
    </div>
    <br>
    <case-item :data="v" v-for="(v,i) in scores" :key="i"></case-item>
    <el-row type="flex" justify="end">
      <el-button type="primary">申诉</el-button>
      <el-button type="primary">确认</el-button>
    </el-row>
  </div>
</template>
<script>
import { getMyCultureUnConfirmedDetail } from "@/constants/API";

export default {
  data() {
    return {
      name: "",
      advantage: "",
      promotion: "",
      scores: []
    };
  },
  components: {
    "case-item": () => import("./caseitem/index.vue")
  },
  methods: {
    getInfo() {
      getMyCultureUnConfirmedDetail(this.$route.params.id).then(res => {
        const {
          employee_name,
          employee_workcode,
          highlevel_name,
          highlevel_workcode,
          advantage,
          promotion,
          scores,
          name
        } = res;
        this.promotion = promotion;
        this.advantage = advantage;
        this.scores = scores;
        this.name = name;
        this.$parent.basicInfo = {
          name: employee_name,
          workcode: employee_workcode,
          highlevel_name,
          highlevel_workcode
        };
      });
    }
  },
  created() {
    this.getInfo();
  }
};
</script>
<style lang='scss' scoped>
.self-report-component {
  .title {
    font-size: 36px;
    font-weight: bold;
    color: #4a4a4a;
  }
  .sub-title {
    font-size: 24px;
    color: #4bc8aa;
    line-height: 30px;
    font-weight: bold;
  }
  .content {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 30px;
  }
}
</style>
