/**
 * api 都集中在这里
 * https://jsonplaceholder.typicode.com/posts/1
 * */
import {
  sendAll,
  sendDelete,
  sendGet,
  sendPost,
  sendPut,
  sendPatch
} from "@/utils/base";

let TEST_GET_URL = "http://www.zhiyinlou.com/theme/index.css";
let TEST_DELETE_URL = "https://jsonplaceholder.typicode.com/posts/";
let DEMO_TABLE_DATA_URL = "/table.json";

export const getTestApi = () => {
  return sendGet(`${TEST_GET_URL}`);
};
export const deleteTestApi = (params: object, id: string) => {
  return sendDelete(`${TEST_DELETE_URL}${id}`, params);
};
export const putTestApi = (params: object, id: string) => {
  return sendPut(`${TEST_DELETE_URL}${id}`, params);
};
export const postTestApi = (params: object, id: string) => {
  return sendPost(`${TEST_DELETE_URL}`, params);
};
export const allTestApi = (iterable: any[], callback: () => Promise<any>) => {
  return sendAll(iterable, callback);
};
export const getDemoTableDataApi = () => {
  return sendGet(`${DEMO_TABLE_DATA_URL}`);
};

// 用户管理
// 登录
export const login = (data: object) => sendPost("/admin/api/login", data);
// 退出
export const logout = () => {
  return sendPost("/admin/api/logout", {});
};
// 管理员列表
export const getManagers = (params: object) => {
  return sendGet(`/admin/api/admins`, params);
};
// 添加管理员
export const addManager = (data: object) => {
  return sendPost(`/admin/api/admins`, data);
};
// 用户搜索(添加管理员)
export const searchManager = (params: object) => {
  return sendGet(`/admin/api/search`, params);
};
// 删除管理员
export const deleteManager = (id: string) => {
  return sendDelete(`/admin/api/admins/${id}`, {});
};
// 修改管理员
export const updateManager = (id: string, data: object) => {
  return sendPatch(`/admin/api/admins/${id}`, data);
};
// 启用|禁用管理员
export const enableManager = (id: string, data: object) => {
  return sendPatch(`/admin/api/admins/${id}`, data);
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
