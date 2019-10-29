<template>
  <div class="my-manager-levels">
    <nav-bar :list="nav"></nav-bar>
    <br />
    <br />
    <section class="content-container">
      <div class="levels-header">
        <span>{{ gradeName }}</span
        >&nbsp;
        <span class="tips">{{ constants.END_TIME }} {{ startedDate }}</span>
        <hr />
        <br />
        <el-form
          :model="searchForm"
          class="search-form"
          :inline="true"
          ref="searchForm"
        >
          <el-form-item prop="name">
            <el-input
              placeholder="请输入员工姓名"
              v-model="searchForm.name"
            ></el-input>
          </el-form-item>
          <el-form-item prop="superior_name">
            <el-input
              placeholder="请输入上级姓名"
              v-model="searchForm.superior_name"
            ></el-input>
          </el-form-item>
          <el-form-item prop="_271_level">
            <el-select v-model="searchForm._271_level" placeholder="271等级">
              <el-option
                v-for="(k, v) of constants.LEVELMAP"
                :key="k"
                :label="v"
                :value="k"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="department_ids">
            <el-select
              v-model="searchForm.department_ids"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择部门"
            >
              <el-option
                v-for="item in getBUListArr"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              @click="resetForm('searchForm')"
              style="margin-left:30px"
              type="primary"
              round
              >{{ constants.RESET }}</el-button
            >
            <el-button
              @click="exportFile"
              style="margin-left:30px"
              type="primary"
              round
              >{{ constants.EXPORT_DETAILS }}</el-button
            >
          </el-form-item>
        </el-form>
        <br />
        <distribute-summary :data="overview"></distribute-summary>
        <br />
        <br />
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column
            v-for="(v, i) of columns"
            :key="i"
            :prop="v.prop"
            :label="v.label"
          ></el-table-column>

          <el-table-column prop="_271_level" label="271等级">
            <template slot-scope="scope">
              <div
                :class="
                  `${constants.LEVEL_ALIAS[scope.row._271_level]}-container`
                "
              >
                {{ constants.LEVEL_ALIAS[scope.row._271_level] }}
              </div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" :label="constants.LABEL_OPERATIONS">
            <template slot-scope="scope">
              <el-button
                :disabled="!canOps"
                @click="goDetail(scope.row)"
                type="text"
                style="margin-right:15px;"
                size="small"
                >{{ constants.VIEW_DETAILS }}</el-button
              >
              <el-popover :ref="`level_pop${scope.row.id}`" placement="top">
                <span class="my-manager-levels-tips"
                  >修改标签仅通知上级和隔级，不通知本人</span
                >
                <el-form :model="levelForm" :inline="true">
                  <el-form-item prop="levels">
                    <el-select v-model="levelForm.level" placeholder="271等级">
                      <el-option
                        v-for="(k, v) of constants.LEVELMAP"
                        :key="k"
                        :label="v"
                        :value="k"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <el-row v-show="levelForm.level" type="flex" justify="center">
                  <el-button
                    :disabled="!canOps"
                    @click="updateLv(scope.row)"
                    type="primary"
                    round
                    >{{ constants.SUBMIT }}</el-button
                  >
                </el-row>
                <el-button
                  :disabled="!canOps"
                  @click="openLevelForm(scope.row)"
                  slot="reference"
                  type="text"
                  size="small"
                  >修改标签</el-button
                >
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
        <br />
        <el-row type="flex" justify="end">
          <pagination
            @current-change="currentChange"
            :currentPage="currentPage"
            :total="total"
          ></pagination>
        </el-row>
      </div>
    </section>
  </div>
</template>
<script>
import {
  END_TIME,
  LEVELMAP,
  LEVEL_ALIAS,
  EXPORT_DETAILS,
  NAME,
  SELF_SCORE,
  LEADER_SOCRE,
  LEADER_NAME,
  VIEW_DETAILS,
  SUBMIT,
  LABEL_OPERATIONS,
  LABEL_MODIFY,
  RESET
} from "@/constants/TEXT";
import { getManagerLvList, changeManagerLv, getBUList } from "@/constants/API";
import {
  PATH_CULTURE_LV_EXPORT,
  PATH_CULTURE_LEVEL_DETAIL
} from "@/constants/URL";
import { formatTime } from "@/utils/timeFormat";

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      evaluation_name_id: "",
      id: "",
      stage: 0,

      searchForm: {
        name: "",
        superior_name: "",
        _271_level: "",
        department_ids: []
      },
      levelForm: {
        level: ""
      },
      gradeName: "",
      startedDate: "",
      nav: [
        {
          label: "事业部271",
          active: true
        }
      ],
      getBUListArr: [],
      end_time: "",
      constants: {
        END_TIME,
        LEVELMAP,
        LEVEL_ALIAS,
        EXPORT_DETAILS,
        VIEW_DETAILS,
        SUBMIT,
        LABEL_OPERATIONS,
        LABEL_MODIFY,
        RESET
      },
      tableData: [],
      columns: [
        {
          prop: "name",
          label: NAME
        },
        {
          prop: "self_score",
          label: SELF_SCORE
        },
        {
          prop: "superior_name",
          label: LEADER_NAME
        },
        {
          prop: "superior_score",
          label: LEADER_SOCRE
        }
      ],
      // 271分布数据
      overview: {
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
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    "distribute-summary": () =>
      import("@/components/modules/myculture/membersdistribute/index.vue")
  },
  methods: {
    resetForm(formName) {
      // this.currentPage = 1
      this.$refs[formName].resetFields();
    },
    openLevelForm(row) {
      this.levelForm.level = row._271_level;
    },
    fetchList(data) {
      getManagerLvList(data).then(res => {
        // to do  优化记录 后台新增字段
        const { info, list, overview } = res;
        const {
          evaluation_name_id,
          id,
          name,
          feedback_start_time,
          end_time,
          stage
        } = info;
        this.stage = stage;
        this.tableData = list.data;
        this.end_time = end_time;
        this.evaluation_name_id = evaluation_name_id;
        this.startedDate = feedback_start_time;
        this.gradeName = name;
        this.id = id;
        this.total = list.total;
        this.postOverview(overview);
      });
    },
    currentChange(v) {
      this.currentPage = v;
      this.fetchList({ page: v, ...this.searchForm });
    },
    updateLv(row) {
      changeManagerLv(row.id, { _271_level: this.levelForm.level }).then(
        res => {
          this.$refs[`level_pop${row.id}`].doToggle();
          this.$message({
            message: "等级修改成功!",
            type: "success"
          });
          this.currentPage = 1;
          this.fetchList({ page: 1, ...this.searchForm });
        }
      );
    },
    exportFile() {
      window.open(
        PATH_CULTURE_LV_EXPORT(this.searchForm),
        "_blank",
        "noopener"
      );
    },
    goDetail(row) {
      this.$router.push(PATH_CULTURE_LEVEL_DETAIL(row.id));
    },
    postOverview(data) {
      if (data) {
        let obj = {};
        for (const i of data) {
          obj[i.key] = {
            count: parseInt(i.count),
            expected: i.expected_value
          };
        }
        this.overview = { ...obj };
      }
    }
  },
  watch: {
    searchForm: {
      handler: function(v) {
        this.currentPage = 1;
        this.fetchList({ page: 1, ...v });
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    canOps() {
      return this.stage == 55;
      // return this.end_time > formatTime(new Date());
    }
  },
  mounted() {
    getBUList()
      .then(res => {
        const data = res || [];
        this.getBUListArr = data.map(({ department_id, name }) => ({
          value: department_id,
          label: name
        }));
      })
      .catch(e => {});
  }
};
</script>
<style lang="scss" scoped>
.my-manager-levels {
  .levels-header {
    padding: 20px 10px 10px 10px;
    background-color: white;
  }
  .search-form {
    padding: 20px;
    padding-bottom: 0;
    background-color: #f8f8f8;
  }
  .tips {
    color: #afafaf;
    font-size: 10px;
  }
  .Bottom-container {
    color: #e94a2d;
  }
  .Middle-container {
    color: #f5d323;
  }
  .Top-container {
    color: #7ed321;
  }
}
</style>
<style>
.my-manager-levels-tips {
  color: #afafaf;
  font-size: 12px;
  line-height: 26px;
}
</style>
