import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import {
  PATH_LOGIN,
  PATH_GRADE_REPORT,
  PATH_GRADE_MANAGE,
  PATH_USER_MANAGE,
  PATH_GRADE_PROGRESS,
  PATH_GRADE_ORG_LIST,
  PATH_GRADE_EMP_DETAIL,
  PATH_PERFORMANCE_MANAGER,
  PATH_PERFORMANCE_PROGRESS,
  PATH_PERFORMANCE_ORG_LIST,
  PATH_PERFORMANCE_TPL,
  PATH_PERFORMANCE_RULES,
  PATH_ACCESS_ROLES,
  PATH_EMPLOYEE_MY,
  PATH_EMPLOYEE_TEAM,
  PATH_EMPLYEE_MY_DETAIL,
  PATH_EMPLOYY_TEAM_GRADE_DETAIL,
  PATH_EMPLOYEE_TEAM_MEMEBER,
  PATH_PERFORMANCE_USER_DETAIL,
  PATH_MSG_MOBILE,
  PATH_MY_CULTURE_GRADE,
  PATH_MEMEBER_CULTURE_GRADE,
  PATH_MEMBER_CULTURE_LIST,
  PATH_DOWN_MEMEBER_CULTURE_GRADE,
  PATH_DOWN_MEMBER_CULTURE_LIST,
  PATH_MY_CULTURE_GRADE_DETAILS,
  PATH_MEMBER_CULTURE_DETAILS,
  PATH_DOWN_MEMBER_CULTURE_DETAILS,
  PATH_GRADE_EMP_DETAIL_CHANGE,
  PATH_GRADE_EMP_DETAIL_HISTORY,
  PATH_CULTURE_LEVEL,
  PATH_DOWN_MEMBER_CULTURE_DETAILS_HISTORY,
  PATH_MEMBER_CULTURE_DETAILS_HISTORY,
  PATH_CULTURE_LEVEL_DETAIL,
  PATH_CULTURE_LEVEL_DETAIL_HISTORY
} from "@/constants/URL";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: PATH_EMPLOYEE_MY
    },
    //文化评分
      //评分报告
      //评分管理
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
        //评分管理详情
        {
          path: PATH_GRADE_PROGRESS(),
          components: {
            default: () => import("@/views/grademanage/progress/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        //事业部详情
        {
          path: PATH_GRADE_ORG_LIST(),
          components: {
            default: () => import("@/views/grademanage/progress/org/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        //评分详情
        {
          path: PATH_GRADE_EMP_DETAIL(),
          components: {
            default: () =>
              import("@/views/grademanage/progress/org/user/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        //修改评分
        {
          path: PATH_GRADE_EMP_DETAIL_CHANGE(),
          components: {
            default: () =>
              import("@/views/grademanage/progress/org/user/modify/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_GRADE_EMP_DETAIL_HISTORY(),
          components: {
            default: () =>
              import("@/views/grademanage/progress/org/user/history/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        //用户管理
        {
          path: PATH_USER_MANAGE,
          components: {
            default: () => import("@/views/usermanage/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        
        {
          path: PATH_PERFORMANCE_MANAGER,
          components: {
            default: () => import("@/views/performance/manage/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_PERFORMANCE_PROGRESS(),
          components: {
            default: () => import("@/views/performance/manage/list/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_PERFORMANCE_ORG_LIST(),
          components: {
            default: () =>
              import("@/views/performance/manage/list/org/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_PERFORMANCE_TPL,
          components: {
            default: () => import("@/views/performance/tpl/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_PERFORMANCE_RULES,
          components: {
            default: () => import("@/views/performance/rules/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_ACCESS_ROLES,
          components: {
            default: () => import("@/views/rolemanage/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_EMPLOYEE_MY,
          components: {
            default: () => import("@/views/employee/my/list/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_EMPLOYEE_TEAM,
          components: {
            default: () => import("@/views/employee/team/list/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_EMPLOYY_TEAM_GRADE_DETAIL(),
          components: {
            default: () => import("@/views/employee/team/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_EMPLYEE_MY_DETAIL(),
          components: {
            default: () => import("@/views/employee/my/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_EMPLOYEE_TEAM_MEMEBER(),
          components: {
            default: () => import("@/views/employee/team/member/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_PERFORMANCE_USER_DETAIL(),
          components: {
            default: () =>
              import("@/views/performance/manage/list/org/user/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_MY_CULTURE_GRADE,
          components: {
            default: () => import("@/views/myculture/self/list/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        //员工评分  我的下级
        {
          path: PATH_MEMEBER_CULTURE_GRADE,
          components: {
            default: () => import("@/views/myculture/members/grades/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_DOWN_MEMEBER_CULTURE_GRADE,
          components: {
            default: () =>
              import("@/views/myculture/downmembers/grades/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_MEMBER_CULTURE_LIST(),
          components: {
            default: () =>
              import("@/views/myculture/members/grades/list/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_MEMBER_CULTURE_DETAILS(),
          components: {
            default: () =>
              import("@/views/myculture/members/grades/details/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_DOWN_MEMBER_CULTURE_LIST(),
          components: {
            default: () =>
              import("@/views/myculture/downmembers/grades/list/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },

        {
          path: PATH_MY_CULTURE_GRADE_DETAILS(),
          components: {
            default: () => import("@/views/myculture/self/details/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_MEMBER_CULTURE_DETAILS_HISTORY(),
          components: {
            default: () =>
              import("@/views/myculture/members/grades/details/history/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_DOWN_MEMBER_CULTURE_DETAILS(),
          components: {
            default: () =>
              import("@/views/myculture/downmembers/grades/details/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_DOWN_MEMBER_CULTURE_DETAILS_HISTORY(),
          components: {
            default: () =>
              import("@/views/myculture/downmembers/grades/details/history/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_CULTURE_LEVEL,
          components: {
            default: () => import("@/views/myculture/levels/list/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_CULTURE_LEVEL_DETAIL(),
          components: {
            default: () => import("@/views/myculture/levels/details/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        },
        {
          path: PATH_CULTURE_LEVEL_DETAIL_HISTORY(),
          components: {
            default: () => import("@/views/myculture/levels/history/index.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        }
      ]
    },
    {
      path: PATH_LOGIN,
      component: () => import("@/views/login/index.vue")
    },
    {
      path: PATH_MSG_MOBILE,
      component: () => import("@/views/msg/mobileNotify/index.vue")
    },
    {
      path: "*",
      name: "notfound",
      component: () => import("@/views/404.vue")
    }
  ] as RouteConfig[]
});
router.onError(error => {
  const pattern = /Loading chunk ([a-z]|[0-9]|-)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  // const targetPath = router.fullPath;
  if (isChunkLoadFailed) {
    Vue.prototype.$alert("网页资源加载失败,请刷新页面", "提示", {
      confirmButtonText: "确定",
      callback: () => {
        location.replace(location.href);
      }
    });
  }
});
export default router;
