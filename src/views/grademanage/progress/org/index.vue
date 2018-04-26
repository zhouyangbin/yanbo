<template>
    <div>
        <nav-bar :list="nav"></nav-bar>
        <section class="content-container">

            org list
            <router-link to="/grademanage/2323/org/abaa/user/888">test</router-link>
        </section>
    </div>
</template>
<script>
    import { GRADE_PROGRESS, GRADE_MANAGE, ORG_DETAIL } from "@/constants/TEXT"
    import { PATH_GRADE_MANAGE, PATH_GRADE_PROGRESS } from "@/constants/URL"
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
