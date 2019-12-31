import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/views/calendar/index.vue")
    },
    {
      path: "*",
      name: "notfound",
      component: () => import("@/views/calendar/index.vue")
    }
  ] as RouteConfig[]
});
router.onError(error => {
  // const targetPath = router.fullPath;
});
export default router;
