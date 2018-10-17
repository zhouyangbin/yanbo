
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
      <el-popover placement="top" trigger="click">
        <el-input type="textarea" :rows="2" placeholder="请输入申诉理由" v-model="reason">
        </el-input>
        <br>
        <br>
        <el-button style="margin-left:50%;transform:translateX(-50%)" @click="complain" type="primary">确认</el-button>
        <el-button style="margin-right:20px" slot="reference" type="primary">申诉</el-button>
      </el-popover>

      <el-button @click="confirm" type="primary">确认</el-button>
    </el-row>
  </div>
</template>
<script>
import { getMyCultureUnConfirmedDetail, postConfirm } from "@/constants/API";

export default {
  data() {
    return {
      reason: "",
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
    complain() {
      if (!this.reason) {
        this.$message({
          message: "请填写申诉理由",
          type: "warning"
        });
        return;
      }
      const postData = {
        evaluation_name_id: this.$route.params.id,
        action: 1,
        reason: this.reason
      };
      postConfirm(postData).then(res => {
        this.$message({
          message: "操作成功!",
          type: "success"
        });
        this.getInfo();
      });
    },
    confirm() {
      this.$confirm("是否确认提交, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const postData = {
            evaluation_name_id: this.$route.params.id,
            action: 2
          };
          postConfirm(postData).then(res => {
            this.$message({
              message: "操作成功!",
              type: "success"
            });
            this.getInfo();
          });
        })
        .catch(() => {});
    },
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
