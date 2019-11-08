<template>
  <div>
    <el-menu
      class="nav-container"
      text-color="#111"
      active-text-color="#42cfaf"
      :default-active="activeIndex"
      mode="horizontal"
    >
      <el-menu-item
        @click="v.href ? nav(v.href) : null"
        v-for="v of list"
        :key="v.label"
        :index="v.label"
        >{{ v.label }}</el-menu-item
      >
      <div @click="feedbackVisible = true" class="btn-feedback-container">
        <el-button class="btn-feedback">
          <img width="19" src="@/assets/img/feedback.png" alt />
          <span>问题反馈</span>
        </el-button>
      </div>
    </el-menu>
    <Drawer @close="feedbackVisible = false" align="right">
      <feedback
        :onSubmit="onSubmitFeedback"
        v-if="feedbackVisible"
        :visible.sync="feedbackVisible"
      ></feedback>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
import { postFeedback } from "@/constants/API";
export default {
  created(){
    console.log(this.list,"qqq");
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      feedbackVisible: false
    };
  },
  computed: {
    activeIndex() {
      return (this.list.filter(v => v.active)[0] || {}).label;
    }
  },
  methods: {
    nav(url) {
      this.$router.push(url);
    },
    onSubmitFeedback(content) {
      postFeedback({
        content,
        url: window.location.href
      }).then(res => {
        this.$message({
          message: "提交成功",
          type: "success"
        });
        this.feedbackVisible = false;
      });
    }
  },
  components: {
    Drawer,
    feedback: () => import("@/components/common/FeedbackForm/index.vue")
  }
};
</script>
<style lang="scss" scoped>
.nav-container {
  padding: 0 20px;
  min-width: 1120px;
}
.nav-container >>> .el-menu--horizontal > .el-menu-item {
  height: 74px;
  line-height: 74px;
}
.btn-feedback-container {
  float: right;
  height: 60px;
  line-height: 60px;
}
.btn-feedback {
  margin-right: 15px;
  padding: 5px;
  font-size: 13px;
  color: #ff6b01;
  letter-spacing: 0.16px;
  background: #fbfbfb;
  border: 1px solid #e2e2e2;
  border-radius: 14px;
  & ::v-deep span {
    display: flex;
    align-items: center;
    & img {
      margin-right: 5px;
    }
  }
}
</style>
