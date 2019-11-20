// 路由,路径相关
import qs from "qs";

const base = process.env.VUE_APP_API_URL;

export const PATH_GRADE_REPORT = "/culture/gradereport";
export const PATH_GRADE_MANAGE = "/culture/grademanage";
export const PATH_USER_MANAGE = "/access/user";
export const PATH_MSG_MOBILE = "/msg/mobile";

export const PATH_GRADE_PROGRESS = (id = ":id") => `${PATH_GRADE_MANAGE}/${id}`;
export const PATH_GRADE_ORG_LIST = (testID = ":id", orgID = ":orgID") =>
  `${PATH_GRADE_MANAGE}/${testID}/org/${orgID}`;
export const PATH_GRADE_EMP_DETAIL = (
  testID = ":id",
  orgID = ":orgID",
  uid = ":uid"
) => `${PATH_GRADE_MANAGE}/${testID}/org/${orgID}/user/${uid}`;
// 修改评分
export const PATH_GRADE_EMP_DETAIL_CHANGE = (
  testID = ":id",
  orgID = ":orgID",
  uid = ":uid"
) => `${PATH_GRADE_MANAGE}/${testID}/org/${orgID}/user/${uid}/modify`;

// 修改评分
export const PATH_GRADE_EMP_DETAIL_HISTORY = (
  testID = ":id",
  orgID = ":orgID",
  uid = ":uid"
) => `${PATH_GRADE_MANAGE}/${testID}/org/${orgID}/user/${uid}/history`;

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
export const PATH_PERFORMANCE_USER_DETAIL = (
  id: String = ":id",
  orgID: String = ":orgID",
  uid: String = ":uid"
) => `${PATH_PERFORMANCE_MANAGER}/${id}/org/${orgID}/user/${uid}`;

// 员工评分
export const PATH_EMPLOYEE_MY = "/employee/my";
export const PATH_EMPLOYEE_TEAM = "/employee/team";

export const PATH_EMPLYEE_MY_DETAIL = (
  orgID: String = ":orgID",
  id: String = ":id"
) => `/employee/my/${orgID}/${id}`;
export const PATH_EMPLOYY_TEAM_GRADE_DETAIL = (id: String = ":id") =>
  `/employee/team/${id}`;
export const PATH_EMPLOYEE_TEAM_MEMEBER = (
  gradeID: String = ":gradeID",
  uid: String = ":uid"
) => `/employee/team/${gradeID}/user/${uid}`;

export const PATH_PERFORMANCE_EXCEL_TARGET_TPL = (
  id: String,
  params: object = {}
) =>
  `${base}performance/api/${id}/target/template?${qs.stringify({
    token: localStorage.getItem("talToken"),
    ...params
  })}`;
export const PATH_PERFORMANCE_EXCEL_TPL = (id: String) =>
  `${base}performance/admin/${id}/users/template?${qs.stringify({
    token: localStorage.getItem("talToken")
  })}`;
export const PATH_PERFORMANCE_IMPORT_TARGET = (id: String) =>
  `${base}performance/admin/${id}/target/import`;
export const PATH_EXPORT_PERFORMANCE_GRADE = (id: String) =>
  `${base}performance/admin/export?performance_name_id=${id}&${qs.stringify({
    token: localStorage.getItem("talToken")
  })}`;
export const PATH_EXPORT_PERFORMANCE_DEPARTMENT = (id: String, did: String) =>
  `${base}performance/admin/export?performance_name_id=${id}&performance_id=${did}&${qs.stringify(
    {
      token: localStorage.getItem("talToken")
    }
  )}`;
export const PATH_EXPORT_PERFORMANCE_MEMBERS = (id: String, uids: String[]) =>
  `${base}performance/admin/export?performance_name_id=${id}&${qs.stringify(
    {
      user_ids: uids,
      token: localStorage.getItem("talToken")
    },
    { arrayFormat: "brackets" }
  )}`;

export const PATH_EXPORT_TEAM_PERFORMANCE = (id: string) =>
  `${base}/performance/api/superior/export/${id}?${qs.stringify({
    token: localStorage.getItem("talToken")
  })}`;

export const PATH_IMPORT_SELF_TARGETS = (uid: string) =>
  `${base}/performance/api/self/${uid}/import-targets?${qs.stringify({
    token: localStorage.getItem("talToken")
  })}`;

// 员工文化评分

export const PATH_MY_CULTURE_GRADE = "/culture/my";
export const PATH_MY_CULTURE_GRADE_DETAILS = (id: string = ":id") =>
  `/culture/my/${id}`;
export const PATH_MEMEBER_CULTURE_GRADE = "/culture/membersgrades";
export const PATH_DOWN_MEMEBER_CULTURE_GRADE = "/culture/downmembersgrades";
export const PATH_MEMBER_CULTURE_LIST = (id: string = ":id") =>
  `/culture/membersgrades/${id}`;
export const PATH_DOWN_MEMBER_CULTURE_LIST = (id: string = ":id") =>
  `/culture/downmembersgrades/${id}`;

export const PATH_MEMBER_CULTURE_DETAILS = (
  id: string = ":id",
  uid: string = ":uid"
) => `/culture/membersgrades/${id}/${uid}`;
export const PATH_MEMBER_CULTURE_DETAILS_HISTORY = (
  id: string = ":id",
  uid: String = ":uid"
) => `/culture/membersgrades/${id}/${uid}/history`;
export const PATH_DOWN_MEMBER_CULTURE_DETAILS = (
  id: string = ":id",
  uid: String = ":uid"
) => `/culture/downmembersgrades/${id}/${uid}`;
export const PATH_DOWN_MEMBER_CULTURE_DETAILS_HISTORY = (
  id: string = ":id",
  uid: String = ":uid"
) => `/culture/downmembersgrades/${id}/${uid}/history`;
// 我的文化评分导出
export const PATH_EXPORT_CULTURE_GRADE = (id: string, type: String) =>
  `${base}culture/web/${id}/team/export?${qs.stringify({
    type: type,
    token: localStorage.getItem("talToken")
  })}`;
// 事业部271

export const PATH_CULTURE_LEVEL = `/culture/manager/levels`;

// 事业部271总经理看的详情
export const PATH_CULTURE_LEVEL_DETAIL = (uid = ":uid") =>
  `/culture/manager/levels/${uid}`;
export const PATH_CULTURE_LEVEL_DETAIL_HISTORY = (uid = ":uid") =>
  `/culture/manager/levels/${uid}/history`;
// 个人中断状态
export const PATH_CULTURE_SELF_INTERRUPTED = `/culture/my/msg`;

// 事业部271 导出
export const PATH_CULTURE_LV_EXPORT = (params: Object) =>
  `${base}/culture/web/rank-manage/export?${qs.stringify({
    ...params,
    token: localStorage.getItem("talToken")
  })}`;
// 评分管理
export const PATH_PERFORMANCE_GRADE_MANAGEMENT = "/performance/scoremangement";
// 模板设置
export const PATH_PERFORMANCE_TPL_SETTINGS = "/performance/tplsettings";
// 标签设置
export const PATH_PERFORMANCE_LABEL_SETTINGS = "/performance/labelsettings";
// 我的业绩中高管评分高管填写指标页面
export const PATH_PERFORMANCE_TARGET_SET = (id = ":id", uid = ":uid") =>
  `/performance/targetsettings/${id}/${uid}`;

// 我的业绩中高管评分高管填写指标页面(只读)
export const PATH_PERFORMANCE_TARGET_DETAIL = (id = ":id", uid = ":uid") =>
  `/performance/targetdetails/${id}/${uid}`;
// 高管绩效 我的团队上级确认页面
export const PATH_PERFORMANCE_TEAM_TARGET_AFFRIM = (
  gradeID: String = ":gradeID",
  id: String = ":id",
  workcode = ":workcode"
) => `/employee/team/${gradeID}/target/${id}/${workcode}`;

export const PATH_ASSESSMENT_DATAILS = (id = ":id") =>
  `/performance/assessment/details/${id}`;

export const PATH_UPLOAD_FILE = (uid: String) =>
  `${base}/executive-performance/web/self/${uid}/import-targets`;
// 高管绩效 评分详情
export const PATH_PERFORMANCE_MY_DETAIL = (
  performanceId: String = ":performanceId"
) => `/performance/my/${performanceId}`;
// 高管绩效  导出名单
export const PATH_PERFORMANCE_USER_LIST = (id: String = ":id") =>
  `${base}executive-performance/admin/performances/${id}/users/export`;
// 高管绩效  财务指标模板
export const getFinancialIndicators = () =>
  `${base}/executive-performance/admin/performances/templates/financial-indicators`;
// 下载高管绩效  财务指标模板
export const getFinancialtpm = `${base}/executive-performance/admin/performances/templates/financial-indicators?${qs.stringify(
  {
    token: localStorage.getItem("talToken")
  }
)}`;
// 下载高管绩效  工作目标模板
export const getWorktpm = (id: String) =>
  `${base}executive-performance/web/${id}/target/template?token=${localStorage.getItem(
    "talToken"
  )}`;
// 高管绩效  上传财务指标
export const postUploadFinancialIndicators = (id: String) =>
  `${base}executive-performance/admin/performances/${id}/import-financial-indicators?token=${localStorage.getItem(
    "talToken"
  )}`;
// 高管绩效  上传工作指标
export const postUploadWorkIndicators = (id: String) =>
  `${base}executive-performance/web/self/${id}/import-targets?token=${localStorage.getItem(
    "talToken"
  )}`;
