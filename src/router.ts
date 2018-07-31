import Vue from "vue";
import Router from "vue-router";
import {
  PATH_LOGIN,
  PATH_GRADE_REPORT,
  PATH_GRADE_MANAGE,
  PATH_USER_MANAGE,
  PATH_GRADE_PROGRESS,
  PATH_GRADE_ORG_LIST,
  PATH_GRADE_EMP_DETAIL
} from "@/constants/URL";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: PATH_GRADE_REPORT
    },
    {
      path: PATH_GRADE_REPORT,
      component: () => import("@/layout/SidebarLayout/index.vue"),
      children: [
        {
          path: "",
          components: {
            default: () => import("@/views/gradereport/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_GRADE_MANAGE,
          components: {
            default: () => import("@/views/grademanage/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_GRADE_PROGRESS(),
          components: {
            default: () => import("@/views/grademanage/progress/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_GRADE_ORG_LIST(),
          components: {
            default: () => import("@/views/grademanage/progress/org/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_GRADE_EMP_DETAIL(),
          components: {
            default: () =>
              import("@/views/grademanage/progress/org/user/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_USER_MANAGE,
          components: {
            default: () => import("@/views/usermanage/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        }
      ]
    },
    // {
    //   path: PATH_AUTH,
    //   props: { iconCls: "el-icon-location", label: NAV_AUTH_PAGE },
    //   meta: { requiresAuth: true },
    //   component: () => import("@/views/Test.vue")
    // },
    {
      path: PATH_LOGIN,
      component: () => import("@/views/login/index.vue")
    },
    {
      path: "*",
      name: "notfound",
      component: () => import("@/views/404.vue")
    }
  ]
});

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.

//     try {
//       const logined = await Auth.isLogined();
//       console.log(logined);
//       if (logined) {
//         // 如果判断是已登录情况,则继续
//         next();
//       } else {
//         // 假设这里的about页是未登录情况下跳转的地方
//         console.log("not authrized");
//         next({
//           path: PATH_LOGIN
//         });
//       }
//     } catch (error) {
//       console.log("get user auth 500");
//       // 如果请求报错,一般是500的时候,应该停留在当前页面
//       next(false);
//     }
//   } else {
//     next();
//   }
// });

export default router;
