/**
 * Typescript常量声明
 * const声明一个只读的常量，大写，具体使用含义单词拼接
 * 后续可以考虑拆分为多个文件及模块 HTTP/NAV/ENUM/LABEL/ERROR
 * */

export const FAIL = "失败";
export const ERROR = "错误";
export const SUCCESS = "成功";
export const ATTENTION = "提示";
export const FILE_SIZE_ERROR: string = "文件超出大小！";
export const UPDATE_PASSWORD_ERR: string = "修改密码错误！";
export const CONST_ADD_SUCCESS: string = "提交成功!";
export const CONST_DELETE_SUCCESS: string = "删除成功!";
export const CONST_MODIFY_SUCCESS: string = "修改成功!";
export const CONST_OPERATIONS_SUCCESS: string = "操作成功!";
export const CONST_LOGOUT_SUCCESS: string = "退出成功!";
export const CONST_UNDELETE_SUCCESS: string = "已取消删除";
export const CONST_CANCEL_LOGOUT_SUCCESS: string = "已取消退出";

export const HTTP_STATUS_MSG_404 = "页面走丢了";
export const HTTP_STATUS_MSG_401 = "登录信息已过期,请重新登录";
export const HTTP_STATUS_MSG_5XX = "网络错误，请稍后重试";
export const HTTP_STATUS_TITLE_ERROR = "请求错误";
export const HTTP_STATUS_TITLE_5XX = "服务器错误";

export const NAV_TAB_TYPE_ONE = "成就客户";
export const NAV_TAB_TYPE_TWO = "务实";
export const NAV_TAB_TYPE_THREE = "创新";
export const NAV_TAB_TYPE_FOUR = "合作";

// 固定头部（table/form）
export const LABEL_TAL = "TAL";
export const LABEL_MY_MSG = "我的消息";
export const LABEL_SETTINGS = "设置";
// export const LABEL_LOGIN = "登录";
export const LABEL_LOGOUT = "退出";
export const LABEL_NAME = "姓名";
export const LABEL_MOBILE = "手机";
export const LABEL_JOIN_DATE = "入职日期";
export const LABEL_ID_NUMBER = "身份证号";
export const LABEL_JOIN_POSITION_NAME = "入职职位";
export const LABEL_TAL_EMAIL = "企业邮箱";
export const LABEL_DEPARTMENT = "部门";
// export const LABEL_SCOPE = "范围";

export const LABEL_STATUS = "状态";
export const LABEL_CREATED_DATE = "创建时间";
export const LABEL_OPERATIONS = "操作";
export const LABEL_MODIFY = "修改";
export const LABEL_FORBIDDEN = "禁用";
export const LABEL_ENABLED = "启用";
export const LABEL_DEL = "删除";
export const LABEL_ADD = "新增";
export const LABEL_ADD_USER = "新增用户";
export const LABEL_SELECT_DIVISION = "选择事业部";
export const LABEL_SELECT_DEPARTMENT = "选择部门";
export const LABEL_SELECT_GRAGE = "选择文化评分";
export const LABEL_EMPTY = "清空";
export const LABEL_CONFIRM = "确 定";
export const LABEL_CANCEL = "取 消";
export const LABEL_SELF = "自评";
export const LABEL_SUP = "上级评";

// LOGIN

export const LABEL_LOGOUT_MSG = "确定退出登录?";

// 用户管理
export const LABEL_USER_DEL_MSG = "确定删除此用户?";

// 评分报告
export const LABEL_REPORT_PROGRESS = "文化评分进度";
export const LABEL_REPORT_AVERAGE = "文化平均分";
export const LABEL_REPORT_RATE = "各事业部完成率";
export const LABEL_REPORT_AVERAGE_ALL = "各事业部总平均分";
export const LABEL_REPORT_AVERAGE_SINGLE = "各事业各文化平均分";
export const LABEL_REPORT_NUMBER = "好未来教育各分值人数";
export const LABEL_SELF_PROGRESS = "自评进度";
export const LABEL_SUP_PROGRESS = "上级评进度";

// 绩效评分
export const PERFORMANCE_GRADE = "业绩评分";
export const CULTURE_GRADE = "文化评分";

// 文化评分
export const GRADE_REPORT = "评分报告";
export const GRADE_MANAGE = "评分管理";
export const USER_MANAGE = "用户管理";
export const GRADE_PROGRESS = "评分进度";
export const ORG_DETAIL = "事业部详情";
export const GRADE_DETAIL = "评分详情";

// 评分管理
export const GRADE_LIST = "好未来集团文化评分列表";
export const PERFORMANCE_GRADE_LIST = "好未来集团评分列表";
export const CREATE_GRADE = "创建评分";
export const GRADE_NAME = "评分名称";
export const BU = "事业部";
export const FINISHED_DATE = "截止时间";
export const CREATED_DATE = "创建时间";
export const OPERATIONS = "操作";
export const DETAILS = "详情";
export const MODIFY = "修改";
export const DEL = "删除";
export const EXPORT_DETAILS = "导出明细";
// export const GRADE = "评分"
export const CONFIRM = "确定";
export const CANCEL = "取消";

export const MSG_FILL_GRADE_NAME = "请填写评分名称";
export const MSG_SELECT_BU = "请选择评分事业部";
export const MSG_SELECT_FINISHED_DATE = "请选择截止时间";

// 评分进度
export const RECORD_STATUS = "名单状态";
export const SELF_EVALUATION_STATUS = "自评状态";
export const LEADER_EVALUATION_STATUS = "上级评状态";
export const LEADER_PLUS_EVALUATION_STATUS = "隔级上级评状态";
export const FACE_EVALUATION_STATUS = "面谈状态";
export const DEPARTMENT = "部门";
export const RESULT_CONFIRM = "结果确认";
export const SELECTION_TIPS = (total: number, selection: number) =>
  `共计${total}人/已选${selection}人`;
export const ADD = "添加";
export const REMINDER = "提醒";
export const BATCH_DEL = "批量删除";
export const NUMBER = "工号";
export const NAME = "姓名";
export const LEADER_NUMBER = "上级工号";
export const LEADER_NAME = "上级姓名";
export const PLUS_LEADER_NUMBER = "隔级上级工号";
export const PLUS_LEADER_NAME = "隔级上级姓名";
export const RESET = "清除";
export const BASE_OR_BU = `总部/${BU}`;
export const DEP_OR_SUB = `大${DEPARTMENT}/分校`;
export const WORK_LEVEL = "职级";
export const EMAIL = "邮箱";
export const UP_LEVEL = "上级";
export const PLUS_UP_LEVEL = "隔级";
export const FACE_FEEDBACK = "面谈反馈";
export const SET_TIMES = "设置时间";
export const MODIFY_TIMES = "修改时间";
export const IMPORT_RECORDS = "导入名单";
export const SELF_EVALUATION_TIME = "自评时间";
export const LEADER_EVALUATION_TIME = "上级评时间";
export const LEADER_PLUS_EVALUATION_TIME = "隔级上级评时间";
export const FACE_EVALUATION_TIME = "面谈时间";
export const REQUIRE_271 = "271等级必填";
export const EHR_IMPORT = "EHR获取";
export const EXCEL_IMPORT = "EXCEL导入";
export const DRAG_FILE = "将文件拖到此处，或";
export const CLICK_TO_UPLOAD = "点击上传";
export const DOWNLOAD_EXCEL_TEMPLATE = "EXCEL表格模板下载";
export const IMPORT_TIPS = "请选择一种导入方式";
export const SELF_START_TIME_VALIDATE_MSG = "自评开始时间必须大于当前时间";
export const START_END_VALIDATE_MSG = "结束时间必须大于开始时间";
export const LEADER_TIME_VALIDATE_MSG = "上级评价时间必须大于自评时间";
export const UP_LEADER_TIME_VALIDATE_MSG = "隔级上级评价时间必须大于上级评时间";
export const FACE_TIME_VALIDATE_MSG = "面谈时间必须大于隔级上级评价时间";
export const FACE_TIME_OVER_GRADE_MSG = "面谈时间不能晚于评测截止时间";
export const EMAIL_VALIATE_MSG = "请填写邮箱地址";
export const SELF_TIME_REQUIRE_MSG = "请填写自评";
export const LEADER_TIME_REQUIRE_MSG = "请填写上级评";
export const UP_LEADER_TIME_REQUIRE_MSG = "请填写隔级上级评";
export const FACE_TIME_REQUIRE_MSG = "请填写面谈";
export const NUMBER_REQUIRE_MSG = "请填写工号";
export const EMAIL_FORMAT_MSG = "请输入正确的邮箱地址";
export const LEADER_NUMBER_REQUIRE_MSG = "请填写上级工号";

export const SELF_EVALUATION = "自评";
export const LEADER_EVALUATION = "上级评";
export const EVALUATION_FEEDBACK = "评价反馈";
export const IMPORT_SUCCESS = "导入成功";
export const START_TIME = "开始时间";
export const END_TIME = "结束时间";
export const TOKEN_EXPIRE = "登录信息已过期,请重新登录";
export const UPLOAD_SUCCESS = "上传成功";
export const UPLOAD_FAIL = "上传失败";

export const TPL_SETTING = "模板设置";
export const TPL = "模板";
export const RULES_SETTING = "规则设置";
export const ACCESS_SETTING = "权限管理";
export const ROLE_SETTING = "角色管理";
export const ROLE = "角色";

export const ENUM_RECORD_STATUS = [
  {
    key: "0",
    value: "未导入"
  },
  {
    key: "2",
    value: "已导入"
  }
];
export const ENUM_SELF_EVALUATION_STATUS = [
  {
    key: "0",
    value: "未开始"
  },
  {
    key: "1",
    value: "进行中"
  },
  {
    key: "2",
    value: "已完成"
  }
];
export const ENUM_GENERIC_COMPLETE_STATUS = [
  {
    key: "0",
    value: "未完成"
  },
  {
    key: "2",
    value: "已完成"
  }
];

export const ENUM_LEADER_EVALUATION_STATUS = [
  {
    key: "0",
    value: "未开始"
  },
  {
    key: "1",
    value: "进行中"
  },
  {
    key: "2",
    value: "已完成"
  }
];

export const ENUM_LEADER_PLUS_EVALUATION_STATUS = [
  {
    key: "0",
    value: "未开始"
  },
  {
    key: "1",
    value: "进行中"
  },
  {
    key: "2",
    value: "已完成"
  }
];
export const ENUM_FACE_EVALUATION_STATUS = [
  {
    key: "0",
    value: "未开始"
  },
  {
    key: "1",
    value: "进行中"
  },
  {
    key: "2",
    value: "已完成"
  }
];

export const ENUM_WAIT_CONFIRM = [
  {
    key: "0",
    value: "未完成"
  },
  {
    key: "1",
    value: "申诉"
  },
  {
    key: "2",
    value: "确认"
  }
];

export const ENUM_LEVELS = [
  {
    key: "1.1",
    value: "1.1"
  },
  {
    key: "1.2",
    value: "1.2"
  },
  {
    key: "1.3",
    value: "1.3"
  },
  {
    key: "2.1",
    value: "2.1"
  },
  {
    key: "2.2",
    value: "2.2"
  },
  {
    key: "2.3",
    value: "2.3"
  },
  {
    key: "3.1",
    value: "3.1"
  },
  {
    key: "3.2",
    value: "3.2"
  },
  {
    key: "3.3",
    value: "3.3"
  },
  {
    key: "4.1",
    value: "4.1"
  },
  {
    key: "4.2",
    value: "4.2"
  },
  {
    key: "4.3",
    value: "4.3"
  },
  {
    key: "5.1",
    value: "5.1"
  },
  {
    key: "5.2",
    value: "5.2"
  },
  {
    key: "5.3",
    value: "5.3"
  },
  {
    key: "6.1",
    value: "6.1"
  },
  {
    key: "6.2",
    value: "6.2"
  },
  {
    key: "6.3",
    value: "6.3"
  },
  {
    key: "7.0",
    value: "7.0"
  }
];

// 1 年度
// 2 半年
// 3 季度
// 4 月度
// 5 春署秋寒
// 6 不固定日期
export const ENUM_PERFORMANCE_TYPE = [
  {
    key: "1",
    value: "年度"
  },
  {
    key: "2",
    value: "半年"
  },
  {
    key: "3",
    value: "季度"
  },
  {
    key: "4",
    value: "月度"
  },
  {
    key: "5",
    value: "春署秋寒"
  },
  {
    key: "6",
    value: "不固定日期"
  }
];

// 1 权重，2 完成期限，3 衡量标准，4 加减分
export const ENUM_PERFORMANCE_CONFIG_PROPERTY = [
  {
    key: "1",
    value: "权重"
  },
  {
    key: "2",
    value: "完成期限"
  },
  {
    key: "3",
    value: "衡量标准"
  },
  {
    key: "4",
    value: "加减分"
  }
];

export const ENUM_PERFORMANCE_FINISH = [
  {
    key: 0,
    value: "未完成"
  },
  {
    key: 1,
    value: "已完成"
  }
];

export const ENUM_PERFORMANCE_USER_CONFIRM = [
  {
    key: 0,
    value: "未完成"
  },
  {
    key: 1,
    value: "已完成"
  },
  {
    key: 2,
    value: "申诉中"
  }
];
