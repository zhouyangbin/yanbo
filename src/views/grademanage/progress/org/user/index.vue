<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      empl detail
    </section>
  </div>
</template>
<script>
  import {
    GRADE_PROGRESS,
    GRADE_MANAGE,
    ORG_DETAIL,
    GRADE_DETAIL
  } from "@/constants/TEXT"
  import {
    PATH_GRADE_MANAGE,
    PATH_GRADE_PROGRESS,
    PATH_GRADE_ORG_LIST
  } from "@/constants/URL"
  export default {
    data() {
      return {
        nav: [
          {
            label: GRADE_MANAGE,
            href: PATH_GRADE_MANAGE
          },
          {
            label: GRADE_PROGRESS,
            href: PATH_GRADE_PROGRESS(this.$route.params.id)
          },
          {
            label: ORG_DETAIL,
            href: PATH_GRADE_ORG_LIST(
              this.$route.params.id,
              this.$route.params.orgID
            )
          },
          {
            label: GRADE_DETAIL,
            active: true
          }
        ]
      }
    },
    components: {
      "nav-bar": () => import("@/components/common/Navbar/index.vue")
    }
  }
</script>
<style scoped>

</style>
