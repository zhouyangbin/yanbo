
<template>
  <div class="self-details-page">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container" style="padding:0.6rem">
      <basic-info v-if="!isError" :data="basicInfo"></basic-info>
      <div v-if="!isError">
        <br>
        <hr>
        <br>
      </div>
      <div v-if="!isError && showRules">
        <rule-text :text="ruleText"></rule-text>
        <br>
        <br>
      </div>
      <component :msg="msg" :stage="stage" v-bind:is="currentTabComponent"></component>
    </section>
  </div>
</template>
<script>
import {
  MY_GRADE,
  GRADE_DETAIL,
  MY_RULE,
  MY_UNCONFIRMED_RULE,
  MY_MANAGER_RULE
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
      msg: "",
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
      import("@/components/modules/myculture/selfreport/index.vue"),
    "self-msg": () =>
      import("@/components/modules/myculture/interrupted/index.vue")
  },
  computed: {
    ruleText() {
      return this.isManager
        ? MY_MANAGER_RULE
        : ruleMap[this.currentTabComponent];
    },
    showRules() {
      return this.currentTabComponent != "self-report";
    },
    isError() {
      return this.currentTabComponent == "self-msg";
    }
  },
  created() {
    this.getStatus();
  },
  methods: {
    getStatus() {
      this.currentTabComponent = "";
      getMyCultureStatus(this.$route.params.id).then(res => {
        this.isManager = res.evaluation_type == 2;
        if (res.status == -1) {
          this.currentTabComponent = "self-msg";
          this.msg = res.exception_msg;
        } else if (res.status == 2) {
          this.currentTabComponent = "self-report";
        } else if (res.status == 1 && res.stage == 60) {
          this.currentTabComponent = "self-unconfirm";
        } else {
          this.currentTabComponent = "self-grade";
        }
        this.stage = res.stage;
        return res;
      });
    }
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
