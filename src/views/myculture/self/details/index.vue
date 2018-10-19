
<template>
  <div class="self-details-page">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container" style="padding:40px">
      <basic-info :data="basicInfo"></basic-info>
      <br>
      <hr>
      <br>
      <div v-if="showRules">
        <rule-text :text="ruleText"></rule-text>
        <br>
        <br>
      </div>
      <component :stage="stage" v-bind:is="currentTabComponent"></component>
    </section>
  </div>
</template>
<script>
import {
  MY_GRADE,
  GRADE_DETAIL,
  MY_RULE,
  MY_UNCONFIRMED_RULE
} from "@/constants/TEXT";
import { PATH_MY_CULTURE_GRADE } from "@/constants/URL";
import { getMyCultureStatus } from "@/constants/API";

const ruleMap = {
  "self-grade": MY_RULE,
  "self-unconfirm": MY_UNCONFIRMED_RULE
};
export default {
  data() {
    return {
      isManager: false,
      stage: 30,
      nav: [
        {
          label: MY_GRADE,
          href: PATH_MY_CULTURE_GRADE
        },
        {
          label: GRADE_DETAIL,
          active: true
        }
      ],
      currentTabComponent: "",
      basicInfo: {}
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "basic-info": () =>
      import("@/components/modules/myculture/basicinfo/index.vue"),
    "rule-text": () =>
      import("@/components/modules/myculture/ruletext/index.vue"),
    "self-grade": () =>
      import("@/components/modules/myculture/selfgrade/index.vue"),
    "self-unconfirm": () =>
      import("@/components/modules/myculture/selfunconfirm/index.vue"),
    "self-report": () =>
      import("@/components/modules/myculture/selfreport/index.vue")
  },
  computed: {
    ruleText() {
      return ruleMap[this.currentTabComponent];
    },
    showRules() {
      return this.currentTabComponent != "self-report";
    }
  },
  created() {
    // this.currentTabComponent = "self-grade";
    // return;
    return getMyCultureStatus(this.$route.params.id).then(res => {
      this.isManager = res.evaluation_type == 2;
      if (res.status == 2) {
        this.currentTabComponent = "self-report";
      } else if (res.status == 1 && res.stage == 60) {
        this.currentTabComponent = "self-unconfirm";
      } else {
        this.currentTabComponent = "self-grade";
      }
      this.stage = res.stage;
      // TODO: 中断的时候
      return res;
    });
  }
};
</script>
<style lang="scss" scoped>
.self-details-page {
  &.content-container {
    padding: 20px;
  }
}
</style>
