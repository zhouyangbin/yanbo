// 路由,路径相关
import qs from "qs";

const base = process.env.VUE_APP_API_URL;

export const PATH_GRADE_REPORT = "/culture/gradereport";
export const PATH_GRADE_MANAGE = "/culture/grademanage";
export const PATH_USER_MANAGE = "/access/user";

export const PATH_GRADE_PROGRESS = (id = ":id") => `${PATH_GRADE_MANAGE}/${id}`;
export const PATH_GRADE_ORG_LIST = (testID = ":id", orgID = ":orgID") =>
  `${PATH_GRADE_MANAGE}/${testID}/org/${orgID}`;
export const PATH_GRADE_EMP_DETAIL = (
  testID = ":id",
  orgID = ":orgID",
  uid = ":uid"
) => `${PATH_GRADE_MANAGE}/${testID}/org/${orgID}/user/${uid}`;
export const PATH_LOGIN = "/login";
// 导出评测
export const PATH_EXPORT_GRADE = (id: string) =>
  `${base}admin/api/export/evaluation/${id}?token=${localStorage.getItem(
    "talToken"
  )}`;
// 导出部门的评测
export const PATH_EXPORT_DEP_GRADE = (id: string) =>
  `${base}admin/api/export/department/${id}?token=${localStorage.getItem(
    "talToken"
  )}`;
// 导出选择人的评测
export const PATH_EXPORT_USERS_GRADE = (ids: Array<string>) =>
  `${base}admin/api/export/users?${qs.stringify(
    { "ids[]": ids, token: localStorage.getItem("talToken") },
    { arrayFormat: "brackets" }
  )}`;
// excel方式导入user
export const PATH_IMPORT_BY_EXCEL = `${base}admin/api/import/excel`;

// excel模板下载
export const PATH_EXCEL_TPL = `${base}/admin/api/export/template?token=${localStorage.getItem(
  "talToken"
)}`;

export const PATH_PERFORMANCE_REPORT = "/performance/report";
export const PATH_PERFORMANCE_MANAGER = "/performance/manage";
export const PATH_PERFORMANCE_TPL = "/performance/tpl";
export const PATH_PERFORMANCE_RULES = "/performance/rules";
export const PATH_ACCESS_ROLES = "/access/roles";
export const PATH_PERFORMANCE_PROGRESS = (id = ":id") =>
  `${PATH_PERFORMANCE_MANAGER}/${id}`;
export const PATH_PERFORMANCE_ORG_LIST = (id = ":id", orgID = ":orgID") =>
  `${PATH_PERFORMANCE_MANAGER}/${id}/org/${orgID}`;
export const PATH_PERFORMANCE_EXCEL_IMPORT = (orgID: String) =>
  `${base}/performance/admin/${orgID}/import/excel`;

// 员工评分
export const PATH_EMPLOYEE_MY = "/employee/my";
export const PATH_EMPLOYEE_TEAM = "/employee/team";

export const PATH_EMPLYEE_MY_DETAIL = (id: String = ":id") =>
  `/employee/my/${id}`;
export const PATH_EMPLOYY_TEAM_GRADE_DETAIL = (id: String = ":id") =>
  `/employee/team/${id}`;
export const PATH_EMPLOYEE_TEAM_MEMEBER = (
  gradeID: String = ":gradeID",
  uid: String = "uid"
) => `/employee/team/${gradeID}/user/${uid}`;
export const PATH_PERFORMANCE_EXCEL_TARGET_TPL = (id: String) =>
  `/performance/admin/${id}/target/template?${qs.stringify({
    token: localStorage.getItem("talToken")
  })}`;
export const PATH_PERFORMANCE_EXCEL_TPL = (id: String) =>
  `/performance/admin/${id}/users/template`;
export const PATH_PERFORMANCE_IMPORT_TARGET = (id: String) =>
  `performance/admin/${id}/target/import`;
