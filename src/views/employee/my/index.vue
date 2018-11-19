<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <component ref="child" :is="currentComponent"></component>
  </div>
</template>
<script>
import { MY_GRADE } from "@/constants/TEXT";
import { PATH_EMPLOYEE_MY } from "@/constants/URL";
export default {
  data() {
    return {
      currentComponent: "set-targets",
      nav: [
        {
          label: MY_GRADE,
          href: PATH_EMPLOYEE_MY
        },
        {
          label: "评分详情",
          active: true
        }
      ]
    };
  },
  components: {
    grade: () => import("@/components/modules/employee/gradePage/index.vue"),
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "set-targets": () =>
      import("@/components/modules/employee/setTargets/index.vue")
  },
  beforeRouteLeave(to, from, next) {
    if (this.currentComponent == "set-targets") {
      this.$refs["child"].beforeRouteLeave(to, from, next);
    } else {
      next();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
