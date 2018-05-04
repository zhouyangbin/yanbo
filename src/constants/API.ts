/**
 * api 都集中在这里
 * https://jsonplaceholder.typicode.com/posts/1
 * */
import { sendAll, sendDelete, sendGet, sendPost, sendPut } from "@/utils/base";

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

// 评分管理
// 部分列表
export const getDepList = () => sendGet("/admin/api/actionable-departments");
// 创建评分
export const postNewGrade = (data: object) =>
  sendPost("/admin/api/evaluations", data);
// 评测列表
export const getGradeList = (page: number) =>
  sendGet("/admin/api/evaluations", { page });
