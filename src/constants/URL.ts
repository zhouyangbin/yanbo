// 路由,路径相关

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

export const PATH_ABOUT = "/about";
export const PATH_TEST = "/test";
export const PATH_AUTH = "/auth";
