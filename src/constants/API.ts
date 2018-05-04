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
export const login = (data: object) => {
  return sendPost("/admin/api/login", data);
};
// 退出
export const logout = () => {
  return sendPost("/admin/api/logout");
};
// 管理员列表
export const getManagers = (params: object) => {
  return sendGet(`/admin/api/admins`, params);
};
// 添加管理员
export const addManager = (data: object) => {
  return sendPost(`/admin/api/admins`);
};
// 用户搜索(添加管理员)
export const searchManager = (params: object) => {
  return sendget(`/admin/api/admins`, params);
};
// 删除管理员
export const deleteManager = (id: string) => {
  return sendDelete(`/admin/api/admins/${id}`);
};
// 修改管理员
export const updateManager = (id: string, data: object) => {
  return sendPatch(`/admin/api/admins/${id}`, data);
};
// 启用|禁用管理员
export const enableManager = (id: string, data: object) => {
  return sendPatch(`/admin/api/admins/${id}`, data);
};

// 评分管理
// 部分列表
export const getDepList = () => sendGet("/admin/api/departments");
// 创建评分
export const postNewGrade = (data: object) =>
  sendPost("/admin/api/evaluations", data);
