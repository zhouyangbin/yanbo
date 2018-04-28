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
export const LABEL_LOGIN_ASSWORD_MSG = "密码不能为空"
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
