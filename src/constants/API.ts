/**
 * api 都集中在这里
 * https://jsonplaceholder.typicode.com/posts/1
 * */
import {
  sendDelete,
  sendGet,
  sendPost,
  sendPatch,
  sendPut
} from "@/utils/base";

const test = "https://www.easy-mock.com/mock/5b62572dbf26d2748cff3d03/pr";
// 用户管理
// 扫码登录
export const qrLogin = (data: object) => sendPost("/admin/api/login", data);
// 扫码登录

// 退出
export const logout = () => {
  return sendPost("/admin/api/logout", {});
};
// 管理员列表

export const getManagers = (params: object) => {
  return sendGet(`${test}/permission/users`, params);
};

export const addManager = (data: object) => {
  return sendPost(`${test}/permission/users`, data);
};
// 用户搜索(添加管理员)
export const searchManager = (params: object) => {
  return sendGet(`/admin/api/search`, params);
};
// 删除管理员
export const deleteManager = (id: string) => {
  return sendDelete(`${test}/permission/users/${id}`, {});
};

export const updateManager = (id: string, data: object) => {
  return sendPatch(`${test}/permission/users/${id}`, data);
};

// 部门接口
// 事业部-分校列表
export const getAdminsDepartments = () => {
  return sendGet(`/admin/api/admins/departments`);
};
// 事业部列表
export const getDepartments = () => {
  return sendGet(`/admin/api/departments`);
};

// 评分报告
// 文化评分列表
export const getGradeNames = () => {
  return sendGet(`/admin/api/reports/select`);
};
// 可筛选部门列表
export const getGradeDepartments = (id: string) => {
  return sendGet(`/admin/api/evaluations/${id}/departments`);
};
// 评分报告数据
export const getGradeReports = (params: object) => {
  return sendGet(`/admin/api/reports`, params);
};

// 评分管理
// 评分列表
export const getDepList = () => sendGet("/admin/api/actionable-departments");
// 创建评分
export const postNewGrade = (data: object) =>
  sendPost("/admin/api/evaluations", data);
// 评测列表
export const getGradeList = (page: number, perPage: number = 20) =>
  sendGet("/admin/api/evaluations", { page, perPage });

// 评分进度列表
export const getProgressList = (id: string, params: object) =>
  sendGet(`/admin/api/evaluations/${id}`, params);
//添加评测人员
export const postNewUser = (id: string, params: object) =>
  sendPost(`/admin/api/user_list/${id}`, params);
// 修改评测人信息
export const postUpdateUser = (eid: string, uid: string, params: object) =>
  sendPost(`/admin/api/user_list/update/${eid}/${uid}`, params);
// 删除评测人员
export const delUser = (params: object) =>
  sendDelete(`/admin/api/user_list/delete`, params);
// EHR导入
export const postEHR = (data: object) =>
  sendPost("/admin/api/import/ehr", data);

// 事业部详情列表
export const getUserList = (id: string, params: object) =>
  sendGet(`/admin/api/evaluations/${id}/users`, params);
// 用户信息搜索根据工号或邮箱
export const getUserDetail = (params: object) =>
  sendGet("/admin/api/search", params);
// 设置时间
export const postTimeSettings = (eid: string, params: object) =>
  sendPost(`/admin/api/evaluation/set-time/${eid}`, params);
// 获取个人的评测详情
export const getUserGradeContent = (uid: string) =>
  sendGet(`/admin/api/user_list/detail/${uid}`);
// 发出提醒

export const postReminder = (params: object) =>
  sendPost("/admin/api/messages", params);

// 角色列表 全量
export const getRoleList = () => sendGet(`${test}/permission/users/roles`);
// 分页
export const getRoleListByPage = (params: object) =>
  sendGet(`${test}/permission/roles`, params);

// 模板列表
export const getTplList = (params: object) =>
  sendGet(`/performance/admin/templates`, params);
// 删除模板
export const delTpl = (id: string) =>
  sendDelete(`${test}/performance/admin/templates/${id}`, {});
// 组织架构树
export const getOrgTree = () =>
  sendGet(`${test}/performance/admin/organization`);
// 新增模板
export const postTpl = (params: object) =>
  sendPost(`/performance/admin/templates`, params);
// 更新模板
export const putTpl = (id: string, params: object) =>
  sendPut(`${test}/performance/admin/templates/${id}`, params);
// 获取模板详情
export const getTpl = (id: string) =>
  sendGet(`${test}/performance/admin/templates/${id}`);
// 获取规则列表
export const getRuleList = (params: object) =>
  sendGet(`/performance/admin/rule`, params);
// 跟新规则

export const putRule = (id: String, params: Object) =>
  sendPut(`${test}/performance/admin/rule/${id}`, params);
// 获取权限组织🌲
export const getAccessTree = () =>
  sendGet(`${test}/permission/department-tree`);
// 设置用户部门管理范围
export const patchUserScope = (id: String, params: Object) =>
  sendPatch(`${test}/permission/users/${id}/set-department`, params);
// 根据部门获取模板列表

export const getTplRuleByDep = (params: Object) =>
  sendGet(`${test}/performance/admin/department_tempate`, params);
// 创建评分
export const postAddPerformanceGrade = (params: Object) =>
  sendPost(`${test}/performance/admin/performance`, params);
// 绩效评分列表
export const getPerformanceList = (params: Object) =>
  sendGet(`${test}/performance/admin/performances`, params);
// 绩效评分部门列表
export const getPerformanceDepartmentsList = (id: String, page: String) =>
  sendGet(`${test}/performance/admin/departments/${id}?page=${page}`);
// 绩效评分事业部详情
export const getPerormanceDepartmentDetails = (id: String) =>
  sendGet(`${test}/performance/admin/${id}/users`);
// 删除业绩user
export const delPerformanceUser = (performanceID: String, params: Object) =>
  sendDelete(`${test}/performance/admin/${performanceID}/users`, params);
// 添加业绩user
export const postPerformanceUser = (orgID: String, params: Object) =>
  sendPost(`${test}/performance/admin/${orgID}/users`, params);
// 业绩提醒
export const postPerformanceReminder = (params: Object) =>
  sendPost(`${test}/performance/admin/message`, params);
// 更新业绩 user
export const pathPerformanceUser = (
  orgID: String,
  uid: String,
  params: Object
) => sendPatch(`${test}/performance/admin/${orgID}/users/${uid}`, params);

// 设置业绩时间
export const postPerformanceTime = (orgID: String, params: Object) =>
  sendPost(`${test}/performance/admin/${orgID}/set-time`, params);
// 业绩EHR 导入
export const postPerformanceEHR = (orgID: String, params: Object) =>
  sendPost(`${test}/performance/admin/${orgID}/import/ehr`, params);
// 业绩管理 员工详情
export const getPerformanceUserDetail = (orgID: String, uid: String) =>
  sendGet(`${test}/performance/admin/${orgID}/users/${uid}`);
