<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <component
      @refresh="getStatus"
      ref="child"
      :is="currentComponent"
    ></component>
  </div>
</template>
<script>
import { MY_GRADE } from "@/constants/TEXT";
import { PATH_EMPLOYEE_MY } from "@/constants/URL";
import { getEmployeeDetail } from "@/constants/API";

export default {
  data() {
    return {
      currentComponent: "",
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
  },
  methods: {
    getStatus() {
      this.currentComponent = "";
      getEmployeeDetail(
        this.$route.params.orgID,
        this.$route.params.id,
        "self"
      ).then(res => {
        const { performance_status } = res;
        if (performance_status >= 30) {
          this.currentComponent = "grade";
        } else {
          this.currentComponent = "set-targets";
        }
      })
      .catch(e=>{
        console.log(1)
      })
    }
  },
  created() {
    this.getStatus();
  }
};
</script>
<style lang="scss" scoped></style>
