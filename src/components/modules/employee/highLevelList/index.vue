<template>
  <div>
    <section class="progress-header">
      <el-row type="flex" :gutter="20" align="top">
        <el-col
          :span="4"
          style="border-right: solid 1px rgba(233,235,242,1); min-height: 400px"
        >
          <el-radio
            class="check_tag"
            v-for="(item, index) in level_team_list"
            :key="index"
            v-model="level_team_id"
            :label="item.superior_workcode"
          >
            {{ item.superior_name }}
            <span v-if="item.abnormal_status" class="Badge_logo"></span>
          </el-radio>
        </el-col>
        <el-col :span="20" style="min-height: 400px">
          <el-row
            class="progress-header"
            style="display: flex; align-items: center;"
          >
            <el-col :span="18">
              <span class="color_gray">{{ team_name }}: </span>
              <span class="total">共{{ total }}人</span>
              <span
                v-if="submit_yes == 1 || reject_yes == 1"
                class="overview_text"
                ><span class="total">, </span> {{ team_overview_text }}</span
              >
              <el-popover
                v-if="submit_yes == 1 || reject_yes == 1"
                placement="bottom"
                width="688"
                trigger="click"
              >
                <p>提交记录</p>
                <template>
                  <el-table :data="team_reviewData" height="250">
                    <el-table-column
                      width="188"
                      property="created_at"
                      label="提交时间"
                    ></el-table-column>
                    <el-table-column
                      width="50"
                      property="type_text"
                      label="操作"
                    ></el-table-column>
                    <el-table-column width="120" label="是否符合分布">
                      <template slot-scope="scope">
                        <span v-if="scope.row.type == 1">{{
                          scope.row.is_pass == 1 ? "符合分布" : "不符合分布"
                        }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      width="280"
                      property="content"
                      label="理由"
                    ></el-table-column>
                    <el-table-column
                      width="100"
                      property="name"
                      label="提交人"
                    ></el-table-column>
                  </el-table>
                </template>
                <el-button
                  class="show_relect_overview"
                  size="medium"
                  slot="reference"
                  @click="team_submit_overview()"
                  >查看审批记录</el-button
                >
              </el-popover>
            </el-col>
            <el-col align="right" :span="6">
              <el-button
                v-if="is_reject == 1"
                size="medium"
                type="warning"
                @click="reject_team_show = true"
                >{{ reject_team_title }}
              </el-button>
              <span v-if="reject_yes == 1" class="overview_text">已驳回</span>
            </el-col>
          </el-row>
          <el-dialog
            :title="reject_team_title"
            :visible.sync="reject_team_show"
            width="30%"
          >
            <el-input
              type="textarea"
              placeholder="请输入驳回理由"
              v-model="content"
              rows="5"
              autofocus="true"
            >
            </el-input>
            <span slot="footer" class="dialog-footer">
              <el-button @click="reject_team_show = false">取 消</el-button>
              <el-button type="primary" @click="reject_send()">确 定</el-button>
            </span>
          </el-dialog>
          <el-table
            :data="list_data"
            stripe
            style="width: 100%"
            :header-cell-style="{ background: '#eef1f6' }"
          >
            <el-table-column prop="workcode" label="工号"></el-table-column>
            <el-table-column prop="name" :label="constants.LABEL_NAME">
              <template slot-scope="scope">
                <el-row type="flex" align="middle">
                  <span>{{ scope.row.name }}</span>
                  <span class="appeal-tag" v-if="scope.row.has_appeal">
                    {{ constants.APPEAL }}
                  </span>
                </el-row>
              </template>
            </el-table-column>
            <el-table-column prop="hr_name" label="HRBP"></el-table-column>
            <el-table-column
              prop="superior_name"
              label="上级"
            ></el-table-column>
            <el-table-column
              prop="high_level_name"
              label="隔级"
            ></el-table-column>
            <el-table-column prop="self_score" label="自评分"></el-table-column>
            <el-table-column
              prop="superior_score"
              label="上级评分"
            ></el-table-column>
            <el-table-column
              prop="score_level"
              label="绩效等级"
            ></el-table-column>
            <el-table-column label="标签分布" align="left">
              <template slot-scope="scope">
                <el-tag
                  v-if="
                    scope.row.score_level == 'A' || scope.row.score_level == 'S'
                  "
                  class="status-tag top-style"
                >
                  <span class="top-style-text">{{ scope.row.label_name }}</span>
                </el-tag>
                <el-tag
                  v-if="scope.row.score_level == 'B'"
                  class="status-tag bplus-style"
                >
                  <span class="bplus-style-text">{{
                    scope.row.label_name
                  }}</span>
                </el-tag>
                <el-tag
                  v-if="
                    scope.row.score_level == 'C' || scope.row.score_level == 'D'
                  "
                  class="status-tag other-style"
                >
                  <span class="other-style-text">{{
                    scope.row.label_name
                  }}</span>
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="stage_status" label="状态" align="center">
              <template slot-scope="scope">
                <span>
                  {{ get_stage_status(scope.row.stage) }}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="ops" label="操作">
              <template slot-scope="scope">
                <el-button
                  v-if="scope.row.operate_status == 1"
                  @click="goDetail(scope.row)"
                  type="text"
                  size="small"
                  >详情</el-button
                >
                <el-button
                  v-if="scope.row.operate_status == 2"
                  @click="goDetail(scope.row)"
                  type="text"
                  size="small"
                  >评分</el-button
                >
                <el-button
                  v-if="scope.row.operate_status == 3"
                  @click="goDetail(scope.row)"
                  type="text"
                  size="small"
                  >修改评分</el-button
                >
                <el-button
                  v-if="scope.row.operate_status == 4"
                  @click="goDetail(scope.row)"
                  type="text"
                  size="small"
                  >处理申诉</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import { LABEL_NAME, APPEAL, ENUM_PERFORMANCE_FINISH } from "@/constants/TEXT";
import {
  PATH_EMPLOYEE_TEAM_MEMEBER,
  PATH_TEAM_DETAIL_MEMEBER,
  PATH_EMPLOYY_LEVEL_TEAM_GRADE_ORG_DETAIL
} from "@/constants/URL";
import {
  highLevelTeamList,
  highLevelTeamReview,
  rejectHighLevelTeam
} from "@/constants/API";
export default {
  props: {
    list_data: {
      type: null,
      default: () => []
    },
    department_id: {
      type: String,
      default: ""
    },
    total: {
      type: [String, Number],
      default: ""
    },
    team_overview: {
      type: null,
      default: () => []
    }
  },
  data() {
    return {
      constants: {
        LABEL_NAME,
        APPEAL,
        ENUM_PERFORMANCE_FINISH
      },
      level_team_list: [], //下属团队的打他
      level_team_id: null, //当前下属id
      team_name: "全部下属",
      submit_yes: 0, //是否展示diff差值
      is_reject: 0, //是否可以驳回
      reject_yes: 0,
      team_reviewData: [], //提交理由 data
      reject_team_show: false, //是否显示驳回dialog
      content: "" //驳回理由
    };
  },
  components: {},
  created() {
    this.get_highLevelTeamList();
  },
  methods: {
    get_highLevelTeamList() {
      //请求隔级团队
      return highLevelTeamList(this.department_id)
        .then(res => {
          res.highLevelList.unshift({
            abnormal_status: 0,
            is_reject: 0,
            submit_yes: 0,
            reject_yes: 0,
            superior_team: 1,
            superior_name: "全部下属",
            superior_workcode: null
          });
          res.highLevelList.map((item, index) => {
            if (item.superior_team == 0) {
              item.superior_name = item.superior_name + "团队";
            }
          });
          this.level_team_list = res.highLevelList;
        })
        .catch(e => {});
    },
    team_submit_overview() {
      //提交理由
      return highLevelTeamReview(this.department_id, {
        workcode: this.level_team_id
      })
        .then(res => {
          this.team_reviewData = res;
        })
        .catch(e => {});
    },
    reject_send() {
      //驳回
      let that = this;
      let data = {
        content: this.content
      };
      this.reject_team_show = false;
      return rejectHighLevelTeam(
        this.$route.params.id,
        this.level_team_id,
        data
      )
        .then(res => {
          //驳回 成功
          this.$emit("reload");
        })
        .catch(e => {});
    },
    goDetail(row) {
      //跳转详情
      if (row.is_directly == 1) {
        //去到直属下级的个人详情页
        this.$router.push(
          // PATH_EMPLOYEE_TEAM_MEMEBER(this.$route.params.id, row.id)
          PATH_TEAM_DETAIL_MEMEBER(
            this.$route.params.id,
            row.performance_id,
            row.id
          )
        );
      } else {
        //隔级的团队里的个人详情
        // console.log(this.$route.params.id,row.performance_id, row.id);
        this.$router.push(
          PATH_EMPLOYY_LEVEL_TEAM_GRADE_ORG_DETAIL(
            this.$route.params.id,
            row.performance_id,
            row.id
          )
        );
      }
    },
    get_stage_status(status) {
      let status_text = this.constants.ENUM_PERFORMANCE_FINISH.filter(
        item => item.key == status
      )[0].value;
      return status_text;
    }
  },
  computed: {
    team_overview_text() {
      //获取隔级的不符合条件的描述
      return this.team_overview.join(",");
    },
    reject_team_title() {
      //获取驳回隔级团队的title
      return "驳回" + this.team_name;
    }
  },
  watch: {
    level_team_id(newv, oldv) {
      //下属或者团队的data的监听
      this.$emit("get_workcode", newv);
      this.team_name = this.level_team_list
        .filter(item => newv == item.superior_workcode)
        .map(item => item.superior_name)
        .join(",");
      this.is_reject = this.level_team_list
        .filter(item => newv == item.superior_workcode)
        .map(item => item.is_reject)
        .join(",");
      this.reject_yes = this.level_team_list
        .filter(item => newv == item.superior_workcode)
        .map(item => item.reject_yes)
        .join(",");
      this.submit_yes = this.level_team_list
        .filter(item => newv == item.superior_workcode)
        .map(item => item.submit_yes)
        .join(",");
    }
  }
};
</script>
<style scoped>
.progress-header {
  background-color: white;
  padding: 0px 10px 10px 10px;
}
.appeal-tag {
  width: 32px;
  height: 18px;
  text-align: center;
  background: rgba(244, 63, 2, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: rgba(244, 63, 2, 1);
  font-size: 12px;
  position: absolute;
  top: 10px;
}
.status-tag {
  min-width: 60px;
  height: 28px;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  border-radius: 4px;
  border: none;
  font-weight: 500;
}
.top-style {
  background: #e8f5eb;
  color: rgba(0, 177, 45, 1) !important;
}
.bplus-style {
  background: #fff0e3;
  color: rgba(255, 104, 0, 1);
}
.other-style {
  background: #f1f2f5;
  color: rgba(92, 108, 139, 1);
}
.progress-header >>> .el-radio__inner {
  display: none;
}
.progress-header >>> .el-checkbox__inner {
  display: none;
}
.check_tag {
  width: 100%;
  height: 22px;
  font-size: 14px;
  font-weight: 500;
  /*color:rgba(56,208,175,1);*/
  line-height: 22px;
  margin: 16px 0 0 0;
}
.check_tag:not(:first-child) {
  padding-left: 20px;
  color: rgba(96, 98, 102, 1);
}
.Badge_logo {
  width: 12px;
  height: 12px;
  margin-left: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../../../assets/img/large_diff.png");
  position: absolute;
  top: 5px;
}
.color_gray {
  color: rgba(96, 98, 102, 1);
}
.total {
  font-size: 14px;
  font-weight: 400;
  color: rgba(144, 147, 153, 1);
}
.overview_text {
  font-size: 14px;
  font-weight: 400;
  color: rgba(235, 12, 0, 1);
}
.show_relect_overview {
  font-size: 14px;
  font-weight: 500;
  color: rgba(56, 208, 175, 1);
  border: none;
  background: none;
}
</style>
