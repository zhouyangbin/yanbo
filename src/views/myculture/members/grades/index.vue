<template>
  <div class="my-grade-list">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <br />
    <section class="content-container">
      <br />
      <section class="content-container bg-white" style="margin-top: -16px">
        <!-- to do 我的下级 -->
        <div class="switch-btns">
          <el-button
            class="normal-btn"
            :class="gradeListType === 'pending' ? 'active-btn' : ''"
            @click="getPendingCultureList('pending', { page: 1 })"
            >进行中</el-button
          >
          <el-button
            class="normal-btn"
            :class="gradeListType === 'end' ? 'active-btn' : ''"
            @click="getEndCultureList('end', { page: 1 })"
            >已结束</el-button
          >
        </div>
        <hr />
        <div
          class="empty"
          v-if="
            gradeListType == 'pending' && isHigh == false && isStaff == false
          "
        >
          <span>暂无数据</span>
        </div>
        <div v-if="isHigh && gradeListType == 'pending'" class="container">
          <div class="container-role">
            <span>组织部成员</span>
            &nbsp; &nbsp;
            <span style="font-size: 14px;margin-left: 90px;color: #494949"
              >评分名称：{{ high_evaluation_name }}</span
            >
            &nbsp; &nbsp;
            <span style="font-size: 14px;color: #494949"
              >截止时间：{{ high_end_time }}</span
            >
          </div>
          <div class="container-desc">
            <partition :data="highSmmary"></partition>
          </div>
          <div class="container-list">
            <div class="container-list-message">
              <div class="container-list-message-left">
                <div class="container-list-message-left-msg">
                  <i
                    style="font-size: 16px"
                    class="el-alert__icon el-icon-info"
                  ></i>
                  温馨提示：<span style="color: #00CCB2">绿色</span
                  >为自评，<span style="color: #3296FA">蓝色</span>为上级评价
                </div>
                <div class="container-list-message-left-space"></div>
              </div>
              <div class="container-list-message-left"></div>
              <!-- <el-button type="primary" @click="highDetail()"
                >查看详情</el-button
              > -->
            </div>
            <el-table stripe style="width: 100%" :data="tableData">
              <el-table-column prop="name" label="姓名" width="70">
              </el-table-column>
              <el-table-column min-width="110" label="自评分数/上级分数">
                <template slot-scope="scope">
                  <span
                    v-if="scope.row.scores.self.total != null"
                    class="self-text"
                  >
                    {{
                      scope.row
                        | path(["scores", "self", "total"])
                        | placeholder("-")
                    }}
                  </span>
                  <span
                    v-if="scope.row.scores.self.total == null"
                    class="self-text"
                  >
                    -
                  </span>
                  <span class="self-superior">/</span>
                  <span
                    v-if="scope.row.scores.superior.total != null"
                    class="superior-text"
                  >
                    {{ scope.row.scores.superior.total }}
                  </span>
                  <span
                    v-if="scope.row.scores.superior.total == null"
                    class="self-text"
                  >
                    -
                  </span>
                </template>
              </el-table-column>
              <el-table-column min-width="130" label="自评平均分/上级平均分">
                <template slot-scope="scope">
                  <span
                    v-if="scope.row.scores.self.average != null"
                    class="self-text"
                  >
                    {{ scope.row.scores.self.average }}
                  </span>
                  <span
                    v-if="scope.row.scores.self.average == null"
                    class="self-text"
                    >-</span
                  >
                  <span class="self-superior">/</span>
                  <span
                    v-if="scope.row.scores.self.average != null"
                    class="superior-text"
                  >
                    {{ scope.row.scores.superior.average }}
                  </span>
                  <span
                    v-if="scope.row.scores.superior.average == null"
                    class="superior-text"
                    >-</span
                  >
                </template>
              </el-table-column>
              <el-table-column min-width="80" label="成就客户">
                <template slot-scope="scope">
                  <span class="self-text">
                    {{
                      scope.row
                        | path(["scores", "self", "questions", "0"])
                        | placeholder("-")
                    }}
                  </span>
                  <span class="self-superior">/</span>
                  <span class="superior-text">
                    {{
                      scope.row
                        | path(["scores", "superior", "questions", "0"])
                        | placeholder("-")
                    }}
                  </span>
                </template>
              </el-table-column>

              <el-table-column min-width="80" label="创新">
                <template slot-scope="scope">
                  <span class="self-text">
                    {{
                      scope.row
                        | path(["scores", "self", "questions", "1"])
                        | placeholder("-")
                    }}
                  </span>
                  <span class="self-superior">/</span>
                  <span class="superior-text">
                    {{
                      scope.row
                        | path(["scores", "superior", "questions", "1"])
                        | placeholder("-")
                    }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column min-width="80" label="合作">
                <template slot-scope="scope">
                  <span class="self-text">
                    {{
                      scope.row
                        | path(["scores", "self", "questions", "2"])
                        | placeholder("-")
                    }}
                  </span>
                  <span class="self-superior">/</span>
                  <span class="superior-text">
                    {{
                      scope.row
                        | path(["scores", "superior", "questions", "2"])
                        | placeholder("-")
                    }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column min-width="80" label="务实">
                <template slot-scope="scope">
                  <span class="self-text">
                    {{
                      scope.row
                        | path(["scores", "self", "questions", "3"])
                        | placeholder("-")
                    }}
                  </span>
                  <span class="self-superior">/</span>
                  <span class="superior-text">
                    {{
                      scope.row
                        | path(["scores", "superior", "questions", "3"])
                        | placeholder("-")
                    }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                style="text-algin: left"
                prop="_271_level"
                label="271等级"
              >
                <template slot-scope="scope">
                  {{
                    scope.row._271_level
                      ? getLevelText(scope.row._271_level)
                      : "无"
                  }}
                  <el-tooltip
                    v-if="scope.row.special_recommended"
                    placement="top"
                  >
                    <div slot="content">上级特殊推荐top</div>
                    <img width="15" src="@/assets/img/recommend.png" alt />
                  </el-tooltip>
                </template>
              </el-table-column>
              <el-table-column
                min-width="100"
                prop="superior_status"
                :label="constants.LEADER_EVALUATION_STATUS"
              ></el-table-column>
              <el-table-column
                prop="stage_name"
                :label="constants.LABEL_STATUS"
              >
                <template slot-scope="scope">
                  <div
                    class="reject_status"
                    v-if="scope.row.reject_status == 1"
                  >
                    <div>{{ constants.REJECT }}</div>
                  </div>
                  <div
                    class="complain_status"
                    v-if="scope.row.reject_status == 2"
                  >
                    <div>{{ constants.APPEAL }}</div>
                  </div>
                  <div v-if="scope.row.reject_status == 0">
                    {{ scope.row.stage_name }}
                  </div>
                </template>
              </el-table-column>
              <!-- <el-table-column prop="address" :label="constants.OPERATIONS">
                <template slot-scope="scope">
                  <el-button
                    @click="goDetail(scope.row.id, evaluation_id)"
                    type="text"
                    size="small"
                    >{{ constants.DETAILS }}</el-button
                  >
                </template>
              </el-table-column> -->
            </el-table>
            <div class="container-list-message">
              <div class="container-list-message-left"></div>
              <el-button type="primary" @click="highDetail()"
                >查看更多(共{{ highNumber }}人)</el-button
              >
              <div class="container-list-message-left"></div>
            </div>
          </div>
        </div>
        <div v-if="isStaff && gradeListType == 'pending'" class="container">
          <div class="container-role">
            <span>员工</span>
            &nbsp;
            <span style="font-size: 14px;margin-left: 90px;color: #494949"
              >评分名称：{{ evaluation_name }}</span
            >
            &nbsp; &nbsp;
            <span style="font-size: 14px;color: #494949"
              >截止时间：{{ end_time }}</span
            >
          </div>
          <div class="container-desc">
            <partition style="margin-top: 30px" :data="summary"></partition>
          </div>
          <div class="container-list">
            <div class="container-list-message">
              <div class="container-list-message-left">
                <div class="container-list-message-left-msg">
                  <i
                    style="font-size: 16px"
                    class="el-alert__icon el-icon-info"
                  ></i>
                  温馨提示：<span style="color: #00CCB2">绿色</span
                  >为自评，<span style="color: #3296FA">蓝色</span>为上级评价
                </div>
                <div class="container-list-message-left-space"></div>
              </div>
              <div class="container-list-message-left"></div>
            </div>
            <el-table stripe style="width: 100%" :data="stafftableData">
              <el-table-column prop="name" label="姓名" width="70">
              </el-table-column>
              <el-table-column min-width="110" label="自评分数/上级分数">
                <template slot-scope="scope">
                  <span class="self-text">
                    {{
                      scope.row
                        | path(["scores", "self", "total"])
                        | placeholder("-")
                    }}
                  </span>
                  <span class="self-superior">/</span>
                  <span class="superior-text">
                    {{
                      scope.row
                        | path(["scores", "superior", "total"])
                        | placeholder("-")
                    }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column min-width="130" label="自评平均分/上级平均分">
                <template slot-scope="scope">
                  <span class="self-text">
                    {{
                      scope.row
                        | path(["scores", "self", "average"])
                        | placeholder("-")
                    }}
                  </span>
                  <span class="self-superior">/</span>
                  <span class="superior-text">
                    {{
                      scope.row
                        | path(["scores", "superior", "average"])
                        | placeholder("-")
                    }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column min-width="80" label="成就客户">
                <template slot-scope="scope">
                  <span class="self-text">
                    {{
                      scope.row
                        | path(["scores", "self", "questions", "0"])
                        | placeholder("-")
                    }}
                  </span>
                  <span class="self-superior">/</span>
                  <span class="superior-text">
                    {{
                      scope.row
                        | path(["scores", "superior", "questions", "0"])
                        | placeholder("-")
                    }}
                  </span>
                </template>
              </el-table-column>

              <el-table-column min-width="80" label="创新">
                <template slot-scope="scope">
                  <span class="self-text">
                    {{
                      scope.row
                        | path(["scores", "self", "questions", "1"])
                        | placeholder("-")
                    }}
                  </span>
                  <span class="self-superior">/</span>
                  <span class="superior-text">
                    {{
                      scope.row
                        | path(["scores", "superior", "questions", "1"])
                        | placeholder("-")
                    }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column min-width="80" label="合作">
                <template slot-scope="scope">
                  <span class="self-text">
                    {{
                      scope.row
                        | path(["scores", "self", "questions", "2"])
                        | placeholder("-")
                    }}
                  </span>
                  <span class="self-superior">/</span>
                  <span class="superior-text">
                    {{
                      scope.row
                        | path(["scores", "superior", "questions", "2"])
                        | placeholder("-")
                    }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column min-width="80" label="务实">
                <template slot-scope="scope">
                  <span class="self-text">
                    {{
                      scope.row
                        | path(["scores", "self", "questions", "3"])
                        | placeholder("-")
                    }}
                  </span>
                  <span class="self-superior">/</span>
                  <span class="superior-text">
                    {{
                      scope.row
                        | path(["scores", "superior", "questions", "3"])
                        | placeholder("-")
                    }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                style="text-algin: left"
                prop="_271_level"
                label="271等级"
              >
                <template slot-scope="scope">
                  {{
                    scope.row._271_level
                      ? getLevelText(scope.row._271_level)
                      : "无"
                  }}
                  <el-tooltip
                    v-if="scope.row.special_recommended"
                    placement="top"
                  >
                    <div slot="content">上级特殊推荐top</div>
                    <img width="15" src="@/assets/img/recommend.png" alt />
                  </el-tooltip>
                </template>
              </el-table-column>
              <el-table-column
                min-width="100"
                prop="superior_status"
                :label="constants.LEADER_EVALUATION_STATUS"
              ></el-table-column>
              <el-table-column
                prop="stage_name"
                :label="constants.LABEL_STATUS"
              >
                <template slot-scope="scope">
                  <div
                    class="reject_status"
                    v-if="scope.row.reject_status == 1"
                  >
                    <div>{{ constants.REJECT }}</div>
                  </div>
                  <div
                    class="complain_status"
                    v-if="scope.row.reject_status == 2"
                  >
                    <div>{{ constants.APPEAL }}</div>
                  </div>
                  <div v-if="scope.row.reject_status == 0">
                    {{ scope.row.stage_name }}
                  </div>
                </template>
              </el-table-column>
              <!-- <el-table-column prop="address" :label="constants.OPERATIONS">
                <template slot-scope="scope">
                  <el-button
                    @click="goDetail(scope.row.id, staff_evaluation_id)"
                    type="text"
                    size="small"
                    >{{ constants.DETAILS }}</el-button
                  >
                </template>
              </el-table-column> -->
            </el-table>
            <div class="container-list-message">
              <div class="container-list-message-left"></div>
              <el-button type="primary" @click="staffDetail()"
                >查看更多(共{{ staffNumber }}人)</el-button
              >
              <div class="container-list-message-left"></div>
            </div>
          </div>
        </div>
        <finished v-if="gradeListType == 'end'"></finished>
        <br />
        <el-row type="flex" justify="end">
          <pagination
            @current-change="handleCurrentChange"
            :currentPage="currentPage"
            :total="total"
          ></pagination>
        </el-row>
        <br />
        <div @click="tips" class="rule">
          <img src="@/assets/img/box.png" alt="" />
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import {
  DETAILS,
  NAME,
  SELF_SCORE,
  OPERATIONS,
  MEMBERS_GRADE_LIST,
  EXPORT_DETAILS,
  SELF_AVG,
  SUP_AVG,
  NAV_TAB_TYPE_ONE,
  NAV_TAB_TYPE_TWO,
  NAV_TAB_TYPE_THREE,
  NAV_TAB_TYPE_FOUR,
  LABEL_STATUS,
  _271_LEVEL,
  LEVEL_ALIAS,
  LEADER_EVALUATION_STATUS,
  REJECT,
  APPEAL
} from "@/constants/TEXT";
import { getMyTeamCultureList, getMyTeamEndCultureList } from "@/constants/API";
import {
  PATH_MEMBER_CULTURE_LIST,
  PATH_EXPORT_CULTURE_GRADE,
  PATH_MEMEBER_HIGH_DETAIL,
  PATH_MEMBER_CULTURE_DETAILS
} from "@/constants/URL";
export default {
  data() {
    return {
      highNumber: 0,
      staffNumber: 0,
      highType: "",
      staffType: "",
      evaluation_id: 0, //  评分id
      staff_evaluation_id: 0, //员工评分ID
      high_evaluation_name: "", //高管评分名称
      high_end_time: "", //高管评分结束时间
      evaluation_name: "", //评分名称
      end_time: "", //结束时间
      currentPage: 1,
      total: 0,
      tableData: [], //高管评分列表
      stafftableData: [], //  员工评分列表
      managerKey: [], //高管评分id
      staffKey: [], //员工评分ID

      nav: [
        {
          label: MEMBERS_GRADE_LIST,
          active: true
        }
      ],
      constants: {
        DETAILS,
        OPERATIONS,
        EXPORT_DETAILS,
        LEADER_EVALUATION_STATUS,
        LABEL_STATUS,
        REJECT,
        APPEAL
      },

      isHigh: false,
      isStaff: false,
      gradeListType: "pending",
      highSmmary: {
        top: {
          count: 0,
          expected: 0
        },
        middle: {
          count: 0,
          expected: 0
        },
        bottom: {
          count: 0,
          expected: 0
        }
      },
      summary: {
        top: {
          count: 0,
          expected: 0
        },
        middle: {
          count: 0,
          expected: 0
        },
        bottom: {
          count: 0,
          expected: 0
        }
      },

      count: 0
    };
  },
  components: {
    partition: () =>
      import("@/components/modules/myculture/membersdistribute/index.vue"),
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    finished: () =>
      import("@/components/modules/myculture/finished/lower/index.vue")
  },
  methods: {
    tips() {
      this.$alert(
        "<p>1-总：打分前，对团队中的271排名做到心中有数：前面的20%，后面的10%；</br>2-分：打分时，对团队中每个成员的具体得分负责：看标准，核案例，确定得分；</br>3-总：打分后，根据步骤1和步骤2，微调/确定最终271，确保前20%和后10%的精准。</p>",
        "“上级评”打分方法推荐：",
        {
          dangerouslyUseHTMLString: true
        }
      );
    },
    getLevelText(num) {
      return LEVEL_ALIAS[num];
    },
    postSummary(data) {
      let obj = {};
      for (let i in data) {
        obj[data[i].key] = {
          count: parseInt(data[i].count),
          expected: data[i].expected_value
        };
      }
      return { ...obj };
    },
    // goDetail(val, id) {
    //   this.$router.push(PATH_MEMBER_CULTURE_DETAILS(id, val));
    // },
    highDetail() {
      const isHigh = { type: this.highType };
      localStorage.setItem("type", JSON.stringify(isHigh));
      this.$router.push(
        PATH_MEMBER_CULTURE_LIST(this.evaluation_id, this.highType)
      );
    },
    staffDetail() {
      const isHigh = { type: this.staffType };
      localStorage.setItem("type", JSON.stringify(isHigh));
      this.$router.push(
        PATH_MEMBER_CULTURE_LIST(this.staff_evaluation_id, this.staffType)
      );
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      if (this.gradeListType === "pending") {
        this.getPendingCultureList(this.gradeListType, { page: val });
      } else {
        this.getEndCultureList(this.gradeListType, { page: val });
      }
    },
    getPendingCultureList(val, data) {
      //状态  页码
      this.gradeListType = val;
      return getMyTeamCultureList()
        .then(res => {
          Object.keys(res.evaluations).forEach(key => {
            // 高管
            if (key == 2) {
              this.highNumber = res.users[key].data.length;
              this.isHigh = true;
              this.highType = key;
              this.highSmmary = this.postSummary(res.users[key].overview);
              this.high_evaluation_name = res.evaluations[key].name;
              this.high_end_time = res.evaluations[key].end_time;
              this.evaluation_id = res.evaluations[key].evaluation_name_id;
              //只展示3条数据
              if (res.users[key].data.length <= 3) {
                this.tableData = res.users[key].data;
              } else {
                for (let i = 0; i < 3; i++) {
                  this.tableData[i] = res.users[key].data[i];
                }
              }
            }
            //员工
            if (key == 1) {
              this.staffNumber = res.users[key].data.length;
              this.isStaff = true;
              this.staffType = key;
              this.summary = this.postSummary(res.users[key].overview);
              this.evaluation_name = res.evaluations[key].name;
              this.end_time = res.evaluations[key].end_time;
              this.staff_evaluation_id =
                res.evaluations[key].evaluation_name_id;
              if (res.users[key].data.length <= 3) {
                this.stafftableData = res.users[key].data;
              } else {
                for (let i = 0; i < 3; i++) {
                  this.stafftableData[i] = res.users[key].data[i];
                }
              }
            }
          });
        })
        .catch(e => {});
    },
    getEndCultureList(val) {
      this.gradeListType = val;
    },
    exportMore(row) {
      window.open(PATH_EXPORT_CULTURE_GRADE(row.id, 1), "_blank", "noopener");
    }
  },
  created() {
    this.getPendingCultureList(this.gradeListType, { page: 1 });
  }
};
</script>
<style scoped lang="scss">
@mixin target-metro {
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    @content;
  }
}
.my-grade-list .content-container {
  padding: 20px;
}
.my-grade-list .bg-white {
  background-color: white;
}
.content-container .switch-btns {
  text-align: right;
  margin-bottom: 20px;
}
.content-container .switch-btns .normal-btn {
  box-sizing: border-box;
  width: 100px;
  height: 40px;
  margin-right: 20px;
  color: #5dc5b2;
  border: 2px solid #5dc5b2;
  border-radius: 4px;
}
.content-container .switch-btns .normal-btn:last-child {
  margin-right: 0;
}
.content-container .switch-btns .active-btn {
  background-color: #5dc5b2;
  color: #fff;
}
.content-container .switch-btns .active-btn:hover {
  background-color: rgba(93, 197, 178, 0.8);
}
.self-text {
  font-size: 14px;
  color: #5dc5b2;
  letter-spacing: 0.17px;
}
.superior-text {
  font-size: 14px;
  color: #518feb;
  letter-spacing: 0.17px;
}
.self-superior {
  font-size: 14px;
  color: #adadad;
  letter-spacing: 0.17px;
  padding: 0 5px;
}
.reject_status div {
  border-radius: 20px;
  border: solid 2px #e94a2d;
  color: #e94a2d;
  width: 60px;
  transform: rotateZ(-12deg);
}
.complain_status,
.reject_status {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  position: absolute;
  height: 100%;
  left: 24%;
  transform: translate(-50%, -50%);
  top: 50%;
}
.complain_status div {
  border-radius: 20px;
  border: solid 2px #46beeb;
  color: #46beeb;
  width: 60px;
  transform: rotateZ(-12deg);
}
@include target-metro {
  .complain_status,
  .reject_status {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
    position: absolute;
    height: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 100%;
  }
}
.container {
  height: 500px;
  width: 100%;
  background: #fff;
  // border-bottom: 5px solid rgb(245,245,245)
  &-role {
    height: 30px;
    width: 99%;
    border-left: 5px solid #02c8b2;
    font-size: 18px;
    font-weight: 500;
    color: rgba(0, 204, 178, 1);
    line-height: 30px;
    padding-left: 19px;
  }
  &-desc {
    width: 98%;
    height: 20px;
    margin-left: 24px;
    line-height: 20px;
    &-expect {
      width: 75%;
      float: left;
    }
    &-info {
      font-size: 14px;
      line-height: 38px;
      color: #494949;
      float: right;
    }
  }
  &-list {
    margin-top: 56px;
    border-top: 2px dashed #9a9a9a;
    padding: 10px;
    &-message {
      height: 40px;
      width: 100%;
      margin-top: 16px;
      display: flex;
      &-left {
        flex: 1;
        display: flex;
        &-msg {
          width: 240px;
          height: 32px;
          background: rgba(249, 248, 236, 1);
          margin-top: 4px;
          padding-left: 6px;
          line-height: 32px;
          font-size: 12px;
        }
        &-space {
          flex: 1;
        }
      }
    }
  }
}
.empty {
  font-size: 16px;
  color: #adadad;
  text-align: center;
  margin-top: 20px;
}
.rule {
  z-index: 1;
  position: fixed;
  bottom: 50px;
  right: 50px;
}
.rule img {
  height: 120px;
  opacity: 1;
  filter: alpha(opacity=100);
}
.rule img:hover {
  cursor: pointer;
}
</style>
