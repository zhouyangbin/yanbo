
<template>
  <div class="self-details-page">
    <nav-bar :list="nav"></nav-bar>
    <br>
    <section class="content-container" style="padding:40px">
      <basic-info :isReport="true"></basic-info>
      <br>
      <hr>
      <br>
      <div v-if="showRules">
        <rule-text :text="ruleText"></rule-text>
        <br>
        <br>
      </div>
      <component v-bind:is="currentTabComponent"></component>
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

const ruleMap = {
  "self-grade": MY_RULE,
  "self-unconfirm": MY_UNCONFIRMED_RULE
};
export default {
  data() {
    return {
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
      currentTabComponent: "self-report"
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
