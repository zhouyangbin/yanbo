//Typescript常量声明 const声明一个只读的常量，大写，具体使用含义单词拼接

export const FAIL = "失败";
export const ERROR = "错误";
export const SUCCESS = "成功";
export const ATTENTION = "提示";
export const FILE_SIZE_ERROR: string = "文件超出大小！";
export const YES = "是";
export const NO = "否";
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
export const SUBMIT = "提交";

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
export const LABEL_SCOPE = "范围";

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
export const PLUS_LEVEL_SUP = "隔级评";
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
export const SET_TIMES = "设置时间";
export const MODIFY_TIMES = "修改时间";
export const IMPORT_RECORDS = "导入名单";
export const SELF_EVALUATION_TIME = "自评时间";
export const LEADER_EVALUATION_TIME = "上级评时间";
export const LEADER_PLUS_EVALUATION_TIME = "隔级上级评时间";
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
export const EMAIL_VALIATE_MSG = "请填写邮箱地址";
export const SELF_TIME_REQUIRE_MSG = "请填写自评";
export const LEADER_TIME_REQUIRE_MSG = "请填写上级评";
export const UP_LEADER_TIME_REQUIRE_MSG = "请填写隔级上级评";

export const OFFLINETALK_TIME_REQUIRE_MSG = "请填写线下合议";
export const FACE_TIME_REQUIRE_MSG = "请填写员工确认";
export const PLUS_UP_LEVEL_REQUIRE_MSG = "请填写隔级工号";
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
export const LABEL_SETTING = "标签设置";
export const ADD_NEW_LABEL = "新增标签";
export const UPDATE_LABEL = "更新标签";
export const SERIAL_NUMBER = "序号";
export const TAG_NAME = "标签名称";
export const TAG_TYPE = "标签类型";

export const BUSINESS_UNIT_AND_FUNCTIONAL_UNIT = "业务单元/职能单元";
export const CORRESPONDING_GRADE_AND_PROPORTION = "对应等级及占比";
export const FORCED_DISTRIBUTION_OR_NOT = "是否强制分布";

export const ACCESS_SETTING = "权限管理";
export const ROLE_SETTING = "角色管理";
export const ROLE = "角色";
export const ACCESS = "权限";

export const EMPLOYEE_GRADE = "员工评分";
export const MY_GRADE = "我的评分";
export const TEAM_GRADE = "团队评分";
export const LEVEL_TEAM_GRADE = "隔级评分";
export const EMPLOYEE_DETAIL = "员工详情";
export const TPL_NAME = "模板名称";
export const PERFORMANCE_TYPE = "绩效类型";

export const BIND_DEPARTMENT = "绑定事业部";
export const APPLIED_DEPARTMENTS = "适用事业部";
export const DEL_TPL_CONFIRM = "确定要删除这个模板么?";
export const DURATION_TYPE = "周期类型";
export const COPY_GRADE = "复制评分";
export const SAVE_DRAFT = "保存草稿";
export const APPEAL = "申诉";
export const CANCEL_APPEAL = "取消申诉";
export const GRADE_STATUS = "评分状态";
export const TARGET_STATUS = "目标状态";
export const PLEASE_SELECT_PERFORMANCE_TYPE = "请选择绩效类型";
export const PLEASE_SELECT_LABEL_TYPE = "请选择标签类型";

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
export const EMUM_CULTURE_GENERIC_COMPLETE_STATUS = [
  {
    key: "0",
    value: "未完成"
  },
  {
    key: "1",
    value: "驳回中"
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
    value: "未完成"
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
export const ENUM_OFFLINE_STATUS = [
  {
    key: "0",
    value: "未完成"
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
    key: "1",
    value: "1"
  },
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
    key: "7",
    value: "7"
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
    value: "春暑秋寒"
  },
  {
    key: "6",
    value: "不固定日期"
  }
];

// 1 权重，2 完成期限，3 衡量标准，4 加减分, 5 具体工作/任务描述
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
  },
  {
    key: "5",
    value: "具体工作/任务描述"
  }
];

export const ENUM_PERFORMANCE_FINISH = [
  {
    key: 0,
    value: "目标未导入"
  },
  {
    key: 5,
    value: "上级审核目标"
  },
  {
    key: 10,
    value: "目标已导入"
  },
  {
    key: 20,
    value: "自评中"
  },
  {
    key: 30,
    value: "上级评中"
  },
  {
    key: 35,
    value: "隔级评中"
  },
  {
    key: 50,
    value: "申诉中"
  },
  {
    key: 40,
    value: "待确认"
  },
  {
    key: 60,
    value: "已确认"
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
export const PLS_SELECT_TPL = "请选择模板";
export const PLS_SELECT_SCOPE = "请先选择范围";
export const PLS_SELECT_START_TIME = "请先选择开始时间";
export const END_TIME_NOT_LESS_THAN_START_TIME = "结束时间不能小于开始时间";
export const PLS_SELECT_MAPPING = "请选择对应关系";
export const CULTURE_SCOPE = "文化范围";
export const PERFORMANCE_SCOPE = "绩效范围";
export const PLS_SELECT = "请选择";
export const APPEAL_STATUS = "申诉状态";
export const BASIC_INFO = "基本信息";
export const EMPLOYEE_WORKCODE = "员工工号";
export const EMPYEE_NAME = "员工姓名";
export const DRAFT_SAVE_SUCCESSFULLY = "草稿保存成功";
export const DEP_NAME = "部门名称";
export const MY_CULTURE = "我的文化";
export const MY_MEMBERS = "我的下级";
export const MEMBERS_GRADE_LIST = "下级评分列表";
export const DOWN_MEMBERS_GRADE_LIST = "隔级评分列表";
export const MY_DOWN_MEMBER = "我的隔级";

export const MY_DOWN_MEMBER_RULE = `
隔级确认阶段规则：<br>
1、根据员工自评和上级评的详情，对文化评分分数和标签进行审核。如无异议，则点击确认。<br>
2、如对分数有异议，点击驳回并填写理由，驳回后由员工的直接上级进行更改分数（标签不可更改）。如对于员工的评分标签（top/middle/bottom）有异议，需要线下与员工的直接上级沟通后，通过点击“修改”进行标签的更改，更改完成后点击确认，系统会实时更新员工等级标签，不再通知员工的直接上级；<br>
3、对于隔级未操作的情况，隔级评阶段结束时系统会自动默认通过；<br>
`;

export const MY_MEMBER_RULE = `
上级评阶段规则: <br>
1、评分以0.5分为单位，上级调整下级自评分数必须填写理由；<br>
2、文化评分标签为必填项，分别显示为top（代表团队前20%的人）、middle（代表中间70%的人）、bottom（代表末尾10%的人），系统将根据实际团队人数自动校验比例分布，请按照系统提醒操作；<br>
3、请根据如下分数标准，进行打分：<br>
总分大于等于12分：部分超出期望，文化考核为优秀；<br>
总分8分（含）至12分，且每项大于等于2分：基本胜任，文化考核为过关；<br>
总分4分（含）至8分，或任意一项为1分：不胜任，需指定改进计划，连续两期需降级；<br>
总分4分以下，或任意一项为0分：不可接受，价值观考核不合格，绩效考核整体不合格，需要书面警告，限期改进，两期则淘汰；<br>
4、若隔级进行驳回操作，上级只可修改分数，不可修改标签<br>
<br>文化价值观内容:
<br>

<table style="width:100%;">
  <tr>
    <td >
    成就客户<br>
1分、尊重客户，随时随地维护好未来形象。&nbsp;<br>
2分、微笑面对客户的投诉，不推诿，积极地帮助客户解决问题。<br>
3分、每周主动和客户接触，践行客户亲密度法则。<br>
4分、从客户需求出发，不断改进我们的工作，让客户和公司都满意。<br>
5分、研究客户的本质需求，前瞻性提供超出客户预期的产品和服务。
    </td>
    <td >
    创新<br>
1分、适应公司的日常变化，不抱怨。<br>
2分、根据公司变化，自己做出有效的调整。<br>
3分、学习并复制各行业的先进经验，用于自己的工作。<br>
4分、不断改进，总结本质，让自己的工作水平处于行业领先。<br>
5分、在工作中有前瞻意识，主动创造变化，引领公司和行业的进步。
    </td>
  </tr>
  <tr>
  <td >
    合作<br>
1分、接受专业分工，积极融入团队，乐于接受团队的帮助，配合团队完成工作。<br>
2分、决策前，积极参与讨论并发表意见；决策后，无论个人是否有异议，须从言行上完全予以支持。<br>
3分、善于利用团队的力量，避免重复劳动，并积极主动的分享经验。<br>
4分、快速响应伙伴合理需求，达成合作共赢。<br>
5分、不计较个人短期、局部得失，实现公司长期、整体利益最大化。
    </td>
    <td >
    务实<br>
1分、如实汇报自己的工作，不隐瞒问题。<br>
2分、积极参与团队建设工作，如周报，述职， 例会，活动等。<br>
3分、不断反思、总结和复盘，形成有价值的经验并进行分享。<br>
4分、能抓住重点，持续取得业绩的提升。<br>
5分、能将远大理想，分解为现实目标，并逐一实现。
    </td>
  </tr>
</table>
`;
export const MY_RULE = `
1分为红线，2分为胜任，3分为优秀，4分超预期 ，5分为卓越<br>
自评阶段规则：<br>
1分：文化红线，有负面案例即视为不符合，不符合会被淘汰；<br>
2分：胜任要求，有负面案例即视为不符合，不符合会影响绩效或被降级；<br>
3分：文化优秀，具有主动意识，个人的行为能够产生正面影响，需列举1个案例；<br>
4分：有影响力，有进取心并不断突破，行为由己到人，能够带动和影响他人，需列举1个案例；<br>
5分：组织贡献，有高度也有落地的方法，能够系统的解决问题并产生深远的影响，需列举1个案例；<br>
注意：<br>
1、评分实行通关制原则，只有满足低分要求后才能选择高分，中间不可跳级（如：1分满足才能考虑2分，2分满足才能考虑3分）<br>
2、3分（含）以上需要提供案例，自评分为1分或2分不需要填写案例（如：您的自评分为3分，则需要提供1个3分案例；您的评分为4分，则需要填写1个3分案例和1个4分案例；您的自评为5分，则需要填写1个3分案例、1个4分案例和1个5分案例）
`;
export const MY_MANAGER_RULE = `
文化测评占您年度绩效考核的50%，请您认真回顾并完成评分。<br>
核心提示：<br>
1分为红线，2分为胜任，3分为优秀，4分超预期 ，5分为卓越<br>
自评阶段规则：<br>
1分：文化红线，有负面案例即视为不符合，不符合会被淘汰；<br>
2分：胜任要求，有负面案例即视为不符合，不符合会影响绩效或被降级；<br>
3分：有影响力，要体现对团队、组织的影响力，需列举1个案例；<br>
4分：建立机制，要体现通过建立机制从根本上解决问题，需列举1个案例；<br>
5分：要有战功，要体现给业务或工作带来的突破性贡献和价值，需列举1个案例；<br>
`;

export const MY_UNCONFIRMED_RULE = `
本次文化评分结果如下，如无异议请点击确认，如有异议可以进行申诉，申诉规则如下：<br>
第一次申诉，通知上级和hrbp处理<br>
第二次申诉，通知隔级和hrbp处理（如没有隔级上级，只能进行一次申诉）<br>
`;

export const LEVEL_ALIAS = ["无", "Bottom", "Middle", "Top"];

export const BREF_HIGH_LEVEL_STATUS = [
  {
    key: "0",
    value: "未操作"
  },
  {
    key: "1",
    value: "驳回"
  },
  {
    key: "2",
    value: "通过"
  }
];
export const BREF_LEADER_STATUS = [
  {
    key: "0",
    value: "未评"
  },
  {
    key: "2",
    value: "已评"
  }
];

export const LEVELMAP = {
  top: 3,
  middle: 2,
  bottom: 1
};

export const DOWN_MEMBER_REJECT_REASON = "隔级驳回理由";
export const LEVEL_TAG = "等级标签";
export const ADVANTAGE = "优势";
export const PROMOTION = "待提升";
export const SELF_SCORE = "自评分数";
export const LEADER_SOCRE = "上级评分数";
export const VIEW_DETAILS = "查看详情";
export const BATCH_REJECT = "批量驳回";
export const BATCH_PASS = "批量通过";
export const REJECT = "驳回";
export const HIGHLV_STATUS = "隔级评状态";
export const APPEAL_REASON = "申诉理由";
export const MY_PERFORMANCE = "我的业绩";
export const CHANGE_REASON = "修改理由";
export const REJECT_REASON = "驳回理由";
export const TOTAL_SCORES = "总分";
export const ADD_TARGET = "添加目标";
export const UPLOAD_TARGET = "上传目标";
export const PERFORMANCE_TARGET = "绩效目标";
export const TARGET_WEIGH = "权重";
export const CHANGE_RECORDS = "修改日志";
export const FINISH_DATE = "完成期限";
export const EXECUTIVE_PERFORMANCE = "组织部绩效";
export const ADD_NEW_TPL = "新增模板";
export const ORGANIZATION_DEPARTMENT_MEMBER_TYPE = "组织部成员类型";
export const INDICATOR_TYPE_AND_PROPORTION = "指标类型及占比";
export const ID_DET_TPL_CONFIRM = "是否确认删除模板？";
export const UPDATE_TPL = "修改模板";
export const PLEASE_SELECT_MULTIPLE = "请选择，可多选";
export const EXECUTIVE_TYPE_TEXT = "组织部类型";
export const TEMPLATE_FIELD = "模板字段";
export const IS_THE_MEASUREMENT_REQUIRED = "衡量标准是否必填";
export const SORT = "排序";
export const EXECTIVE_UPDATE_LABEL = "修改标签";
export const LABEL_TYPE = "标签类型";
export const FORCED_DISTRIBUTION = "强制分布";
export const EXECUTIVE_LABEL_TYPE = ["253", "271", "23221", "2521"];
export const FORCED_DISTRIBUTION_VALUE = [
  {
    key: 0,
    value: "否"
  },
  {
    key: 1,
    value: "是"
  }
];
export const DEFAULT_TABLE253 = [
  {
    id: "",
    display_name: "Top",
    people_percent: 20,
    computation_rule_name: "四舍五入取整数"
  },
  {
    id: "",
    display_name: "Middle",
    people_percent: 50,
    computation_rule_name: ""
  },
  {
    id: "",
    display_name: "Bottom",
    people_percent: 30,
    computation_rule_name: "不四舍五入取整数"
  }
];
export const DEFAULT_TABLE271 = [
  {
    id: "",
    display_name: "Top",
    people_percent: 20,
    computation_rule_name: "四舍五入取整数"
  },
  {
    id: "",
    display_name: "Middle",
    people_percent: 70,
    computation_rule_name: ""
  },
  {
    id: "",
    display_name: "Bottom",
    people_percent: 10,
    computation_rule_name: "不四舍五入取整数"
  }
];
export const DEFAULT_TABLE2521 = [
  {
    id: "",
    display_name: "Top",
    people_percent: 20,
    computation_rule_name: "四舍五入取整数"
  },
  {
    id: "",
    display_name: "Middle",
    people_percent: 50,
    computation_rule_name: ""
  },
  {
    id: "",
    display_name: "Bottom",
    people_percent: 30,
    computation_rule_name: "不四舍五入取整数"
  },
  {
    display_name: "(自定义)",
    people_percent: 20,
    computation_rule_name: "",
    isChildren: true
  },
  {
    id: "",
    display_name: "(自定义)",
    people_percent: 10,
    computation_rule_name: "不四舍五入取整数",
    isChildren: true
  }
];

// 指标设定
export const SUPERIOR_OPINION = "上级意见";
export const IMMEDIATE_SUPERIOR = "直接上级";
export const ASSESS_CYCLE = "考核周期";
export const SET_TARGET_DEADLINE = "指标设定截止时间";
export const ERROR_MESSAGE_CONTACT_USER =
  "如直接上级的姓名或工号有误，请联系HRBP。";
export const SENIOR_UPLOAD_TARGET = "上传指标";
export const TARGET_DETAIL = "指标详情";
export const CHECK_EXAMINE_LOG = "查看审批记录";
export const TARGET_RETURN = "返回";
export const TARGET_NAME = "指标名称";
export const TASK_DESCRIPTION = "具体工作/任务描述";
export const YARD_STICK = "衡量标准";
export const ADD_TARGET_LINE = "添加考核项";
export const FINANCE_DIMENSIONALITY_SUBTOTAL = "财务维度小计";
export const OFFLINE_STATUS = "线下合议状态";
export const FACE_EVALUATION_STATUS = "员工确认状态";
export const FACE_FEEDBACK = "员工确认反馈";
export const BATCH_SET_TIMES = "批量设置时间";
export const OFFLINETALK_EVALUATION_TIME = "线下合议时间";
export const FACE_EVALUATION_TIME = "员工确认时间";
export const OFFLINETALK_TIME_VALIDATE_MSG =
  "线下合议时间必须大于隔级上级评价时间";
export const FACE_TIME_VALIDATE_MSG = "员工确认时间必须大于线下合议时间";
export const FACE_TIME_OVER_GRADE_MSG = "员工确认时间不能晚于评测截止时间";
export const IMPRESSIONS = "心得体会（仅B事业部涉及）";
export const BREAK_STATUS = [
  "",
  "未自评",
  "未上级评",
  "隔级驳回上级未修改",
  "申诉上级未修改",
  "员工确认阶段未确认"
];
export const DEFAULT_PERFORMANCE_TABLE23221 = [
  {
    id: "",
    display_name: "Top",
    people_percent: 20,
    computation_rule_name: "四舍五入取整数"
  },
  {
    id: "",
    display_name: "Middle(50%)",
    people_percent: 50,
    computation_rule_name: ""
  },
  {
    id: "",
    display_name: "(自定义)",
    people_percent: 30,
    computation_rule_name: "",
    isChildren: true
  },
  {
    id: "",
    display_name: "(自定义)",
    people_percent: 20,
    computation_rule_name: "",
    isChildren: true
  },
  {
    id: "",
    display_name: "Bottom",
    people_percent: 30,
    computation_rule_name: "不四舍五入取整数"
  },
  {
    id: "",
    display_name: "(自定义)",
    people_percent: 20,
    computation_rule_name: "",
    isChildren: true
  },
  {
    id: "",
    display_name: "(自定义)",
    people_percent: 10,
    computation_rule_name: "不四舍五入取整数",
    isChildren: true
  }
];

export const DEFAULT_TABLE23221 = [
  {
    id: "1",
    name: "Top",
    is_show: false,
    level: "S/A",
    range: -1,
    threshold: 20,
    range_des: "<=20%",
    computation_rule_name: "四舍五入取整数"
  },
  {
    id: "2",
    name: "Middle(50%)",
    is_show: false,
    level: "B",
    range: 0,
    threshold: 50,
    range_des: "50%",
    computation_rule_name: ""
  },
  {
    parent_id: "2",
    name: "B+(自定义)",
    is_show: false,
    level: "--",
    range: -1,
    threshold: 30,
    range_des: "<=30%",
    computation_rule_name: "四舍五入取整数",
    isChildren: true
  },
  {
    parent_id: "2",
    name: "B(自定义)",
    is_show: false,
    level: "--",
    range: 0,
    threshold: 20,
    range_des: "20%",
    computation_rule_name: "",
    isChildren: true
  },
  {
    id: "3",
    name: "Bottom",
    is_show: false,
    level: "--",
    range: 1,
    threshold: 30,
    range_des: ">=30%",
    computation_rule_name: "四舍五入取整数"
  },
  {
    parent_id: "3",
    name: "B-(自定义)",
    is_show: false,
    level: "--",
    range: 1,
    threshold: 20,
    range_des: "20%",
    computation_rule_name: "四舍不五入取整数",
    isChildren: true
  },
  {
    parent_id: "3",
    name: "C/D(自定义)",
    is_show: false,
    level: "C/D",
    range: 1,
    threshold: 10,
    range_des: ">=10%",
    computation_rule_name: "四舍五入取整数",
    isChildren: true
  }
];
