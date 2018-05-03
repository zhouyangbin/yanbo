/**
 * Typescript常量声明
 * const声明一个只读的常量，大写，具体使用含义单词拼接
 * 后续可以考虑拆分为多个文件及模块 HTTP/NAV/ENUM/LABEL/ERROR
 * */
export const PI = 3.1415
export const SUCCESS = "成功"
export const FAIL = "失败"
export const FILE_SIZE_ERROR: string = "文件超出大小！"
export const UPDATE_PASSWORD_ERR: string = "修改密码错误！"
export const CONST_ADD_SUCCESS: string = "提交成功!"
export const CONST_DELETE_SUCCESS: string = "删除成功!"
export const ENUM_COLOR: object = {
  RED: "红色",
  GREEN: "绿色",
  BLANK: "白色",
  YELLOW: "黄色"
}
// 枚举,常量文字都放这里
export const HTTP_STATUS_MSG_404 = "页面走丢了"
export const HTTP_STATUS_MSG_401 = "token过期，请重新登录"
export const HTTP_STATUS_MSG_5XX = "网络错误，请稍后重试"
export const HTTP_STATUS_TITLE_ERROR = "请求错误"
export const HTTP_STATUS_TITLE_5XX = "服务器错误"

export const NAV_HOME_PAGE = "Home页面"
export const NAV_HOME_SUB_PAGE = "Homedsd页面"
export const NAV_TABLE_MODULE = "表格模块"
export const NAV_TANLE_MODULE_SUB_PAGE = "表格child模块名字"
export const NAV_FORM_MODULE = "表格模块"
export const NAV_FORM_CHILE_PAGE = "form child模块名字"
export const NAV_ABOUT_MODULE = "about模块"
export const NAV_ABOUT_MODULE_SUB_PAGE = "about 页"
export const NAV_TEST_PAGE = "test页无子模块"
export const NAV_AUTH_PAGE = "auth"

// 固定头部
export const LABEL_TAL = "TAL"
export const LABEL_MY_MSG = "我的消息"
export const LABEL_SETTINGS = "设置"
export const LABEL_LOGIN = "登录"
export const LABEL_LOGOUT = "退出"
// demo-table
export const LABEL_NAME = "姓名"
export const LABEL_MOBILE = "手机"
export const LABEL_JOIN_DATE = "入职日期"
export const LABEL_ID_NUMBER = "身份证号"
export const LABEL_JOIN_POSITION_NAME = "入职职位"

// demo-form
export const LABEL_ACTIVITY_NAME = "活动名称"

// LOGIN
export const LABEL_LOGIN_EMAIL = "请输入邮箱"
export const LABEL_LOGIN_EMAIL_MSG = "邮箱不能为空"
export const LABEL_LOGIN_PASSWORD = "请输入密码"
export const LABEL_LOGIN_PASSWORD_MSG = "密码不能为空"
export const LABEL_LOGIN_REMEMBER_USER = "记住用户名"

// 文化评分
export const GRADE_REPORT = "评分报告"
export const GRADE_MANAGE = "评分管理"
export const USER_MANAGE = "用户管理"
export const GRADE_PROGRESS = "评分进度"
export const ORG_DETAIL = "事业部详情"
export const GRADE_DETAIL = "评分详情"

// 评分管理
export const GRADE_LIST = "好未来集团文化评分列表"
export const CREATE_GRADE = "创建评分"
export const GRADE_NAME = "评分名称"
export const BU = "事业部"
export const FINISHED_DATE = "截止时间"
export const CREATED_DATE = "创建时间"
export const OPERATIONS = "操作"
export const DETAILS = "详情"
export const MODIFY = "修改"
export const DEL = "删除"
export const EXPORT_DETAILS = "导出明细"
// export const GRADE = "评分"
export const CONFIRM = "确定"
export const CANCEL = "取消"

export const MSG_FILL_GRADE_NAME = "请填写评分名称"
export const MSG_SELECT_BU = "请选择评分事业部"
export const MSG_SELECT_FINISHED_DATE = "请选择截止时间"

// 评分进度
export const RECORD_STATUS = "名单状态"
export const SELF_EVALUATION_STATUS = "自评状态"
export const LEADER_EVALUATION_STATUS = "上级评状态"
export const LEADER_PLUS_EVALUATION_STATUS = "隔级上级评状态"
export const FACE_EVALUATION_STATUS = "面谈状态"
export const DEPARTMENT = "部门"
export const RESULT_CONFIRM = "结果确认"
export const SELECTION_TIPS = (total: number, selection: number) =>
  `共计${total}人/已选${selection}人`
export const ADD = "添加"
export const REMINDER = "提醒"
export const BATCH_DEL = "批量删除"
export const NUMBER = "工号"
export const NAME = "姓名"
export const LEADER_NUMBER = "上级工号"
export const LEADER_NAME = "上级姓名"
export const PLUS_LEADER_NUMBER = "隔级上级工号"
export const PLUS_LEADER_NAME = "隔级上级姓名"
export const RESET = "清除"
export const BASE_OR_BU = `总部/${BU}`
export const DEP_OR_SUB = `大${DEPARTMENT}/分校`
export const WORK_LEVEL = "职级"
export const EMAIL = "邮箱"
export const UP_LEVEL = "上级"
export const PLUS_UP_LEVEL = "隔级"
export const FACE_FEEDBACK = "面谈反馈"
export const SET_TIMES = "设置时间"
export const IMPORT_RECORDS = "导入名单"
export const SELF_EVALUATION_TIME = "自评时间"
export const LEADER_EVALUATION_TIME = "上级评时间"
export const LEADER_PLUS_EVALUATION_TIME = "隔级上级评时间"
export const FACE_EVALUATION_TIME = "面谈时间"
export const REQUIRE_271 = "271等级必填"
export const EHR_IMPORT = "EHR获取"
export const EXCEL_IMPORT = "EXCEL导入"
export const DRAG_FILE = "将文件拖到此处，或"
export const CLICK_TO_UPLOAD = "点击上传"
export const DOWNLOAD_EXCEL_TEMPLATE = "EXCEL表格模板下载"
export const IMPORT_TIPS = "请选择一种导入方式"
export const LEADER_TIME_VALIDATE_MSG = "上级评价时间必须大于自评时间"
export const UP_LEADER_TIME_VALIDATE_MSG = "隔级上级评价时间必须大于上级评时间"
export const FACE_TIME_VALIDATE_MSG = "面谈时间必须大于隔级上级评价时间"
export const EMAIL_VALIATE_MSG = "请填写邮箱地址"
export const SELF_TIME_REQUIRE_MSG = "请填写自评时间"
export const LEADER_TIME_REQUIRE_MSG = "请填写上级评时间"
export const UP_LEADER_TIME_REQUIRE_MSG = "请填写隔级上级评时间"
export const FACE_TIME_REQUIRE_MSG = "请填写面谈时间"
export const NUMBER_REQUIRE_MSG = "请填写工号"
export const EMAIL_FORMAT_MSG = "请输入正确的邮箱地址"
export const LEADER_NUMBER_REQUIRE_MSG = "请填写上级工号"

export const SELF_EVALUATION = "自评"
export const LEADER_EVALUATION = "上级评"
export const EVALUATION_FEEDBACK = "评价反馈"

export const ENUM_RECORD_STATUS = [
  {
    key: "0",
    value: "未导入"
  },
  {
    key: "1",
    value: "已导入"
  }
]
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
]
export const ENUM_GENERIC_COMPLETE_STATUS = [
  {
    key: "0",
    value: "未完成"
  },
  {
    key: "1",
    value: "已完成"
  }
]

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
]

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
]
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
]

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
]

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
]
