<template>
  <div>
    <section class="progress-header" style="min-height:400px">
      <el-row type="flex" :gutter="20" align="top">
        <el-col>
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
            <el-table-column
              v-if="1 > 2"
              prop="hr_name"
              label="HRBP"
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
  PATH_EMPLOYEE_TEAM
} from "@/constants/URL";
export default {
  props: {
    list_data: {
      type: null,
      default: () => ({})
    }
  },
  data() {
    return {
      constants: {
        LABEL_NAME,
        APPEAL,
        ENUM_PERFORMANCE_FINISH
      }
    };
  },
  components: {},
  created() {},
  methods: {
    goDetail(row) {
      this.$router.push(
        PATH_EMPLOYEE_TEAM_MEMEBER(this.$route.params.id, row.id)
      );
    },
    get_stage_status(status) {
      let status_text = this.constants.ENUM_PERFORMANCE_FINISH.filter(
        item => item.key == status
      )[0].value;
      return status_text;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style scoped>
.progress-header {
  background-color: white;
  padding: 20px 10px 10px 10px;
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
</style>
