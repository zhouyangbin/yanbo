<template>
    <div>
        <nav-bar :list="nav"></nav-bar>
        <section class="content-container">
            reort
        </section>
    </div>
</template>
<script>
    import { USER_MANAGE } from "@/constants/TEXT"
    export default {
      data() {
        return {
          nav: [
            {
              label: USER_MANAGE,
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