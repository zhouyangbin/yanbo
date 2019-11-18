// api 都集中在这里
import {
  sendDelete,
  sendGet,
  sendPost,
  sendPatch,
  sendPut,
  sendForm
} from "@/utils/base";
import qs from "qs";

// const test =
//   "http://api.admin.zhiyinlou.com/server/index.php?g=Web&c=Mock&o=simple&projectID=17&uri=";

// 用户管理
// 扫码登录
export const qrLogin = (data: object) => sendPost("/admin/api/login", data);
// 仿真登录
export const fzLogin = (params: Object) =>
  sendPost("/admin/api/login_fz", params);

// 退出
export const logout = () => {
  return sendPost("/admin/api/logout", {});
};
// 管理员列表

export const getManagers = (params: object) => {
  return sendGet(`/permission/users`, params);
};

export const addManager = (data: object) => {
  return sendPost(`/permission/users`, data);
};
// 用户搜索(添加管理员)
export const searchManager = (params: object) => {
  return sendGet(`/admin/api/search`, params);
};
// 删除管理员
export const deleteManager = (id: string) => {
  return sendDelete(`/permission/users/${id}`, {});
};

export const updateManager = (id: string, data: object) => {
  return sendPatch(`/permission/users/${id}`, data);
};

// 部门接口
// 事业部-分校列表
export const getAdminsDepartments = () => {
  return sendGet(`/admin/api/admins/departments`);
};
// 事业部列表
export const getDepartments = () => {
  return sendGet(`/permission/departments`);
};

// 获取事业部列表
export const getBUList = () => sendGet(`/admin/api/department/business_units`);

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
// 保存个人评分草稿
export const saveMyGradeDraft = (evaluation_name_id: string, params: object) =>
  sendPost(`/culture/web/evaluate-draft/${evaluation_name_id}`, params);
// 获取个人评分草稿
export const getMyGradeDraft = (evaluation_name_id: string) =>
  sendGet(`/culture/web/${evaluation_name_id}/my-evaluation-draft`);
// 发出提醒

export const postReminder = (params: object) =>
  sendPost("/admin/api/messages", params);

// 角色列表 全量
export const getRoleList = () => sendGet(`/permission/users/roles`);
// 分页
export const getRoleListByPage = (params: object) =>
  sendGet(`/permission/roles`, params);

// 模板列表
export const getTplList = (params: object) =>
  sendGet(`/performance/admin/templates`, params);
// 删除模板
export const delTpl = (id: string) =>
  sendDelete(`/performance/admin/templates/${id}`, {});
// 组织架构树
export const getOrgTree = () => sendGet(`/performance/admin/organization`);
// 新增模板
export const postTpl = (params: object) =>
  sendPost(`/performance/admin/templates`, params);
// 更新模板
export const putTpl = (id: string, params: object) =>
  sendPut(`/performance/admin/templates/${id}`, params);
// 获取模板详情
export const getTpl = (id: string) =>
  sendGet(`/performance/admin/templates/${id}`);
// 获取规则列表
export const getRuleList = (params: object) =>
  sendGet(`/performance/admin/rule`, params);
// 跟新规则

export const putRule = (id: String, params: Object) =>
  sendPut(`/performance/admin/rule/${id}`, params);
// 获取权限组织🌲
export const getAccessTree = () => sendGet(`/permission/department-tree`);
// 设置用户部门管理范围
export const patchUserScope = (id: String, params: Object) =>
  sendPatch(`/permission/users/${id}/set-department`, params);
// 根据部门获取模板列表

export const getTplRuleByDep = (params: Object) =>
  sendPost(`/performance/admin/department_template`, params);
// 创建评分
export const postAddPerformanceGrade = (params: Object) =>
  sendPost(`/performance/admin/performance`, params);
// 复制评分
export const postClonePerformanceGrade = (id: String, params: Object) =>
  sendPost(`/performance/admin/${id}/clone`, params);
// 绩效评分列表
export const getPerformanceList = (params: Object) =>
  sendGet(`/performance/admin/performances`, params);
// 绩效评分部门列表
export const getPerformanceDepartmentsList = (id: String, page: String) =>
  sendGet(`/performance/admin/${id}/departments?page=${page}`);
// 绩效评分事业部详情
export const getPerormanceDepartmentDetails = (id: String, params: Object) =>
  sendGet(`/performance/admin/${id}/users`, params);
// 删除业绩user
export const delPerformanceUser = (performanceID: String, params: Object) =>
  sendDelete(`/performance/admin/${performanceID}/users`, params);
// 添加业绩user
export const postPerformanceUser = (orgID: String, params: Object) =>
  sendPost(`/performance/admin/${orgID}/users`, params);
// 业绩提醒
export const postPerformanceReminder = (params: Object) =>
  sendPost(`/performance/admin/message`, params);
// 更新业绩 user
export const pathPerformanceUser = (
  orgID: String,
  uid: String,
  params: Object
) => sendPatch(`/performance/admin/${orgID}/users/${uid}`, params);

// 设置业绩时间
export const postPerformanceTime = (orgID: String, params: Object) =>
  sendPost(`/performance/admin/${orgID}/set-time`, params);
// 业绩EHR 导入
export const postPerformanceEHR = (orgID: String, params: Object) =>
  sendPost(`/performance/admin/${orgID}/import/ehr`, params);
// 业绩管理 员工详情
export const getPerformanceUserDetail = (orgID: String, uid: String) =>
  sendGet(`/performance/admin/${orgID}/users/${uid}`);

// 确认分数/修改分数
export const changePerformanceGrade = (
  orgID: String,
  uid: String,
  params: Object
) => sendPatch(`/performance/admin/${orgID}/users/${uid}/modify`, params);

export const getTeamGradeList = (params: Object) =>
  sendGet(`/performance/api/superior/performances`, params);
// 某个评分的团队成员列表
export const getTeamList = (id: String, params: Object) =>
  sendGet(`/performance/api/superior/${id}`, params);

// export const getTeamUserDetail = (orgID: String, uid: String) =>
//   sendGet(`/performance/api/superior/${orgID}/${uid}`);

// 上级评下级绩效
export const postUserPerformance = (uid: String, params: Object) =>
  sendPost(`/performance/api/superior/${uid}`, params);

export const postUserPerformanceDraft = (
  orgID: String,
  uid: String,
  params: Object
) => sendPost(`/performance/api/${orgID}/${uid}/draft`, params);

// 我的绩效评分列表

export const getMyPerformanceList = (params: Object) =>
  // sendGet(`/executive-performance/web/self/index`, params);
  sendGet(`/js/getMyPerformanceList.json`, params);
// 团队里的详情
export const getEmployeeDetail = (
  orgID: String,
  uid: String,
  attach_for: string
) =>
  sendGet(
    `/performance/api/${orgID}/${uid}?${qs.stringify({
      attach_for
    })}`
  );

// 个人设置目标
export const postSetSelfTargets = (uid: string, params: object) =>
  sendPost(`/performance/api/self/${uid}/set-targets`, params);

export const postSetSelfTargetsDraft = (uid: string, params: object) =>
  sendPost(`/performance/api/self/${uid}/draft`, params);
// 获取个人目标草稿
export const getSelfTargetsDraft = (uid: string) =>
  sendGet(`/performance/api/self/${uid}/draft`);
// 业绩管理 自评详情
// export const getPerformanceEmployeeDetail = (orgID: String, uid: String) =>
//   sendGet(`/performance/api/self/${orgID}/${uid}`);
// 绩效自评提交接口

export const postSelfPerformance = (uid: String, params: Object) =>
  sendPost(`/performance/api/self/${uid}`, params);
// 绩效申诉
export const postAppealPerformance = (params: Object) =>
  sendPost(`/performance/api/appeal`, params);

// 绩效取消申诉
export const delCancelAppeal = (params: Object) =>
  sendDelete(`/performance/api/appeal`, params);

// 获取用户事业部bind数据
export const getBindInfo = (uid: string) =>
  sendGet(`/permission/users/detail/${uid}`);

// 上级审核员工目标
export const postTargetReview = (params: object) =>
  sendPost("/performance/api/target-review", params);

// 发布接口

export const postPublish = (params: object) =>
  sendPost(`/performance/admin/publish`, params);

// 获取发布时的提示信息
export const getPublishMsg = (params: object) =>
  sendPost(`/performance/admin/publish-verify`, params);

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  我的文化评分
export const getMyCultureList = (params: Object) =>
  sendGet(`/culture/web/evaluations`, params);
// 下级评分列表
export const getMyMembersCultureList = (params: Object) =>
  sendGet(`/culture/web/team/subordinate-evaluations`, params);

// 文化隔级评分列表
export const getMyDownMembersCultureList = (params: Object) =>
  sendGet(`/culture/web/team/interval-evaluations`, params);

// 获取文化评分状态
export const getMyCultureStatus = (id: String) =>
  sendGet(`/culture/web/${id}/evaluation-status`);

// 获取文化自评评测信息
export const getMyEvaluation = (id: string) => {
  return sendGet(`/culture/web/${id}/my-evaluation`);
};
// 文化自评打分
export const selfMarking = (data: object, id: string) => {
  return sendPost(`/culture/web/${id}/self-marking`, data);
};

// 文化上级评详情
export const getMyMemberCultureDetails = (id: String) =>
  sendGet(`/culture/web/superior-detail/${id}`);
// 获取上级草稿
export const getMyMemberDetailDraft = (id: string) =>
  sendGet(`/culture/web/superior-draft/${id}`);
// 文化隔级详情
export const getMyDownMemberCultureDetails = (id: String) =>
  sendGet(`/culture/web/highlevel-detail/${id}`);
// 文化隔级成员list
export const getDownMembersList = (id: String, params: Object) =>
  sendGet(`/culture/web/${id}/team/highlevel`, params);
// 文化下级成员list
export const getMembersList = (id: String, params: Object) =>
  sendGet(`/culture/web/${id}/team/superior`, params);
// 文化个人报告
export const getMyCultureReport = (id: String) =>
  sendGet(`/culture/web/${id}/evaluation-report`);
// 文化个人待确认详情
export const getMyCultureUnConfirmedDetail = (id: String) =>
  sendGet(`/culture/web/${id}/feedback-confirmed`);
// 文化申诉/确认
export const postConfirm = (params: Object) =>
  sendPost(`/culture/web/confirm-feedback`, params);
// 文化上级打分
export const postMemberGrade = (id: String, params: Object) =>
  sendPost(`/culture/web/superior-evaluate/${id}`, params);

// 历史修改日志
export const getHistoryModifyList = (id: String) =>
  sendGet(`/admin/api/user_list/${id}/evaluation-record`);
// 高管修改评分
export const postManagerModify = (id: String, params: Object) =>
  sendPost(`/admin/api/superior-modify/${id}`, params);
// 隔级操作驳回/通过, 支持批量
export const postReject = (params: Object) =>
  sendPost(`/culture/web/team/approval`, params);
export const setLvFromHighLv = (params: Object) =>
  sendPost(`/culture/web/team/highlevel-set-level`, params);
// 事业部271列表
export const getManagerLvList = (params: Object) =>
  sendGet(`/culture/web/rank-manage`, params);
// 事业部271修改lv

//事业部271看到的详情
export const getManagerDetail = (uid: String) =>
  sendGet(`/culture/web/rank-manage/${uid}`);

// 事业部271看到的详情历史
export const getManagerDetailRecord = (uid: String) =>
  sendGet(`/culture/web/rank-manage/${uid}/evaluation-record`);
export const changeManagerLv = (id: String, params: Object) =>
  sendPost(`/culture/web/rank-manage/${id}`, params);
//hr重新打分接口（被驳回或申诉时）
export const reevaluate = (id: String, params: Object) =>
  sendPost(`/admin/api/user_list/${id}/reevaluate`, params);

// 反馈意见
export const postFeedback = (params: object) =>
  sendPost(`/admin/api/suggest`, params);

// 高管绩效标签列表
export const getAdminTags = (params: Object) =>
  sendGet(`/executive-performance/admin/tags`, params);
  // sendGet(`/js/getAdminTagsList.json`, params);
// 高管绩效标签类型列表
export const getAdminTagTypes = () =>
  // sendGet(`/executive-performance/admin/tag-types`);
  sendGet(`/js/getAdminTagTypes.json`);
// 高管绩效标签规则列表
export const getAdminTagTypesRules = (type: String) =>
  sendGet(`/executive-performance/admin/tag-types/${type}/rules`);
  // sendGet(`/js/getAdminTagTypesRules.json`, type);
// 高管绩效新增标签
export const postAdminTags = (params: Object) =>
  sendPost(`/executive-performance/admin/tags`, params);
  // sendPost(`/js/postAdminTags.json`, params);
// 高管绩效标签详情
export const getAdminTagDetails = (id: String) =>
  sendGet(`/executive-performance/admin/tags/${id}`);
  // sendGet(`/js/getTagDetails.json`, id);
// 高管绩效修改标签
export const putAdminTagChange = (id: String, params: Object) =>
  sendPut(`/executive-performance/admin/tags/${id}`, params);

// 高管绩效  绩效模板列表
export const getAdminTpls = (params: Object) =>
  sendGet(`/executive-performance/admin/templates`, params);
  // sendGet(`/js/getAdminTpls.json`, params);

// 高管绩效  新增绩效模板
export const postPerformanceTpl = (params: Object) =>
  sendPost(`/executive-performance/admin/templates`, params);

// 高管绩效  绩效模板信息
export const getPerformanceTpl = (id: String) =>
  sendGet(`/executive-performance/admin/templates/${id}`, { req_type: 1 });
  // sendGet(`/js/getPerformanceTpl.json`, { req_type: 1 });
// 高管绩效  修改模板
export const putPerformanceTpls = (id: String, params: Object) =>
  sendPut(`/executive-performance/admin/templates/${id}`, params);

// 高管绩效  删除模板
export const deleteTpls = (id: String) =>
  sendDelete(`/executive-performance/admin/templates/${id}`, {});

// 高管绩效  获取绩效类型
export const getPerformanceTypes = () =>
  sendGet(`/executive-performance/admin/templates/performance-types`);
  // sendGet(`/js/getPerformanceTypes.json`);

// 高管绩效  获取组织架构
export const getOrganization = () =>
  sendGet(`/executive-performance/admin/organization`);
  // sendGet(`/js/getOrganization.json`);

// 高管绩效  获取高管类型
export const getExecutiveTypes = () =>
  sendGet(`/executive-performance/admin/templates/executive-types`);
  // sendGet(`/js/getExecutiveTypes.json`);

// 高管绩效  获取模板字段
export const getTplFields = () =>
  sendGet(`/executive-performance/admin/templates/template-fields`);
  // sendGet(`/js/getTplFields.json`);

// 高管绩效  获取衡量标准
export const getTplMeasures = () =>
  sendGet(`/executive-performance/admin/templates/measures`);
  // sendGet(`/js/getTplMeasures.json`);

// 高管绩效  获取业绩指标类型
export const getIndicatorTypes = () =>
  sendGet(`/executive-performance/admin/templates/performance-indicator-types`, {req_type: 1});
  // sendGet(`/js/getIndicatorTypes.json`, { req_type: 1 });

// 高管绩效 创建绩效考核
export const postAddPerformanceAssessment = (params: Object) =>
  sendPost(`/executive-performance/admin/performances`, params);

// 高管绩效 更新绩效考核
export const putPerformanceAssessment = (id: String, params: Object) =>
  sendPut(`/executive-performance/admin/performances/${id}`, params);

// 高管绩效 开启考核
export const putOpenAssessment = (id: String) =>
  sendPut(`/executive-performance/admin/performances/${id}/start`, {});

// 高管绩效 删除绩效考核
export const delAssessment = (id: String) =>
  sendDelete(`/executive-performance/admin/performances/${id}`, {});

// 高管绩效指标设定-个人信息
export const getPerformanceUserInfo = (params: Object) =>
  // sendGet(`/executive-performance/web/target/header-info`, params);
  sendGet(`/js/getPerformanceUserInfo.json`, params);

// 高管绩效指标设定-获取维度指标
export const getUniqueTemplate = (params: Object) =>
  // sendGet(`/executive-performance/web/target/unique-template`, params);
  sendGet(`/js/getPerformanceUniqueTemplate.json`, params);

// 高管绩效指标设定添加考核项
export const getTargetContent = (params: Object) =>
  sendGet(`/executive-performance/web/target/items`, params);
  // sendGet(`/js/getTargetContent.json`, params);

// 高管绩效指标设定提交
export const postSubmitTargetContent = (id: String, params: Object) =>
  sendPost(`/executive-performance/web/self/${id}/set-targets`, params);
// 高管绩效指标设定暂存草稿
export const postSaveDraft = (id: String, params: Object) =>
  sendPost(`/executive-performance/web/self/${id}/draft`, params);

// 高管绩效指标模版下载
export const getTargetTemplate = (performance_id: String) =>
  sendGet(`/executive-performance/web/${performance_id}/target/template`);
  // /executive-performance/web/{performance_id}/target/template

// 高管绩效上级确认指标
export const postSuperAffirmTarget = (params: Object) =>
  sendPost(`/executive-performance/web/target/confirm`, params);

// 高管绩效审批记录
export const getExamineLog = (params: Object) =>
  // sendGet(`/executive-performance/web/approve/record`)
  sendGet(`/js/getExamineLog.json`);
// // 获取事业部列表
// export const getBUList = () =>
//   // sendGet(`/admin/api/departments`);
//   sendGet(`/js/getTplMeasures.json`);
// 高管绩效  获取绩效考核列表
export const getAdminPerformancesList = (params: Object) =>
  sendGet(`/executive-performance/admin/performances`, params);
  // sendGet(`/js/getAdminPerformancesList.json`, params);

// 高管绩效 获取标签
export const getTagDepartments = (params: Object) =>
  sendGet(`/executive-performance/admin/performances/get-tag-by-departments`, params);
  // sendGet(`/js/getTagDepartments.json`, params);

// 高管绩效 获取标签
export const getTplDepartments = (params: Object) =>
  sendGet(`/executive-performance/admin/performances/get-templates-by-departments`, params);
  // sendGet(`/js/getTplDepartments.json`, params);

// 高管绩效 绩效考核详情
export const getPerformanceDetail = (id: String) =>
  sendGet(`/executive-performance/admin/performances/${id}`)
  // sendGet(`/js/getPerformanceDetail.json`);

// 高管绩效 获取考核名单
export const getPerformanceUser = (id: String, params: Object) =>
  sendGet(`/executive-performance/admin/performances/${id}/users`, params)
  // sendGet(`/js/getPerformanceUser.json`, params);

// 高管绩效 设置评分时间
export const postPerformanceSetTime = (id: String, params: Object) =>
  sendPost(`/executive-performance/admin/performance/${id}/set-time`, params);

// 高管绩效 给评分添加员工
export const postAddStaff = (performance_id: String, params: Object) =>
  sendPost(
    `/executive-performance/admin/performance/${performance_id}/users`,
    params
  );

// 高管绩效 更新员工信息
export const putEmployeeInfo = (
  performance_id: String,
  performance_user_id: String,
  params: Object
) =>
  sendPut(
    `/executive-performance/admin/performance/${performance_id}/users/${performance_user_id}`,
    params
  );

// 高管绩效 提醒
export const getPerformanceNotice = (id: String) =>
  sendGet(`/executive-performance/admin/performances/${id}/notice`);

// 高管绩效 删除人员
export const deletePerformanceUser = (performance_id: String, params: Object) =>
  sendDelete(
    `/executive-performance/admin/performance/${performance_id}/users`,
    params
  );

// 高管绩效 删除标签
export const deleteLabel = (id: String) =>
  sendDelete(
    `/executive-performance/admin/tags/${id}`,
    {}
  );