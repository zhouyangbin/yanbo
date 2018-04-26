<template>
    <div>
        <nav-bar :list="nav"></nav-bar>
        <section class="content-container">

            progress
            <router-link to="/grademanage/adbac/org/123">
                test
            </router-link>
        </section>
    </div>
</template>
<script>
    import { GRADE_PROGRESS, GRADE_MANAGE } from "@/constants/TEXT"
    import { PATH_GRADE_MANAGE } from "@/constants/URL"
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
