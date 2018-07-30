// 路由,路径相关
import qs from "qs";

const base = process.env.VUE_APP_API_URL;

export const PATH_GRADE_REPORT = "/gradereport";
export const PATH_GRADE_MANAGE = "/grademanage";
export const PATH_USER_MANAGE = "/userManage";

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
export const PATH_PERFORMANCE_PROGRESS = (id = ":id") =>
  `${PATH_PERFORMANCE_MANAGER}/${id}`;
export const PATH_PERFORMANCE_ORG_LIST = (id = ":id", orgID = ":orgID") =>
  `${PATH_PERFORMANCE_MANAGER}/${id}/org/${orgID}`;
