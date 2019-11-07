<template>
  <div class="target-settings">
    <nav-bar :list="nav"></nav-bar>
    <div>
      <el-row class="target-header">
        <el-row class="title">{{ $route.params.name }}</el-row>
        <el-row class="user-info flex">
          <!-- <img src="" alt=""> -->
          <span class="img">我是图片</span>
          <el-col>
            <el-row class="user-name">
              <span>{{ userInfo.name }}</span>
              <el-divider direction="vertical"></el-divider>
              <span>{{ userInfo.workcode }}</span>
            </el-row>
            <el-row>
              <el-col :span="3">
                <el-row class="other-info-title">直接上级</el-row>
                <el-row
                  >{{ userInfo.superior_name }}({{
                    userInfo.superior_workcode
                  }})</el-row
                >
              </el-col>
              <el-col :span="5">
                <el-row class="other-info-title">部门</el-row>
                <el-row>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    :content="userInfo.department"
                    placement="top"
                  >
                    <div class="text-over">{{ userInfo.department }}</div>
                  </el-tooltip>
                </el-row>
              </el-col>
              <el-col :span="3">
                <el-row class="other-info-title">岗位</el-row>
                <el-row>{{ userInfo.station }}</el-row>
              </el-col>
              <el-col :span="5">
                <el-row class="other-info-title">考核周期</el-row>
                <el-row>{{ userInfo.cycle }}</el-row>
              </el-col>
              <el-col :span="5">
                <el-row class="other-info-title">指标设定截止时间</el-row>
                <el-row>{{ userInfo.deadline }}</el-row>
              </el-col>
              <el-button icon="el-icon-upload2" class="upload-target"
                >上传指标</el-button
              >
            </el-row>
            <el-row class="linkman"
              >如直接上级的姓名或工号有误，请联系HRBP。</el-row
            >
          </el-col>
        </el-row>
      </el-row>
      <el-row
        v-for="(targetItem, index) in allTarget"
        :key="index"
        class="target-detail"
      >
        <el-row class="target-detail-title">
          <span class="target-title">{{ targetItem.type }}</span>
          <span class="target-weight">权重{{ targetItem.weight }}%</span>
        </el-row>
        <el-form :ref="`form${index}`" :model="targetItem">
          <el-table
            :data="targetItem.table"
            border
            :header-cell-style="{
              backgroundColor: '#F5F6F7',
              color: '#303133'
            }"
          >
            <el-table-column label="权重" width="180" align="center">
              <template slot-scope="scope">
                <div v-if="targetItem.isMoney">{{ scope.row.weights }}%</div>
                <el-form-item
                  v-if="!targetItem.isMoney"
                  :prop="`table.${scope.$index}.weights`"
                  :rules="rules.weights"
                >
                  <el-input
                    v-model.number="scope.row.weights"
                    type="number"
                    size="small"
                  >
                    <template slot="append"
                      >%</template
                    >
                  </el-input>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              v-if="targetItem.isMoney"
              label="指标名称"
              min-width="240"
              align="center"
              prop="target"
            ></el-table-column>
            <el-table-column
              v-if="!targetItem.isMoney"
              label="指标名称"
              min-width="240"
              align="center"
              :render-header="changeLabel"
              prop="target"
            >
              <template slot-scope="scope">
                <el-form-item
                  :prop="`table.${scope.$index}.target`"
                  :rules="rules.target"
                >
                  <el-input
                    type="textarea"
                    v-model="scope.row.target"
                    autosize
                  ></el-input>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              label="具体工作/任务描述"
              min-width="300"
              header-align="center"
              v-if="targetItem.table[0].content !== undefined"
            >
              <template slot-scope="scope">
                <div v-if="targetItem.isMoney">{{ scope.row.content }}</div>
                <el-form-item
                  v-if="!targetItem.isMoney"
                  :prop="`table.${scope.$index}.content`"
                  :rules="rules.content"
                >
                  <el-input
                    type="textarea"
                    v-model="scope.row.content"
                    autosize
                  ></el-input>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              label="衡量标准"
              min-width="300"
              header-align="center"
            >
              <template slot-scope="scope">
                <ul>
                  <li
                    class="flex"
                    v-for="(item, index) in scope.row.metrics"
                    :key="index"
                  >
                    <el-col class="measure-title" v-if="targetItem.isMoney">
                      <span v-if="item.is_required" class="is-required">*</span>
                      <span>&nbsp;{{ item.name }}</span>
                    </el-col>
                    <el-col v-if="targetItem.isMoney">{{
                      item.content
                    }}</el-col>
                    <el-form-item
                      v-if="!targetItem.isMoney"
                      :label="item.name"
                      label-width="130px"
                      :prop="`table.${scope.$index}.metrics.${index}.content`"
                      :rules="item.is_required ? metricsRules.content : {}"
                    >
                      <el-input
                        type="textarea"
                        autosize
                        v-model="item.content"
                      ></el-input>
                    </el-form-item>
                  </li>
                </ul>
              </template>
            </el-table-column>
          </el-table>
          <el-button
            icon="el-icon-plus"
            class="add-target"
            v-if="!targetItem.isMoney"
            @click="addTarget(index)"
            >添加考核</el-button
          >
        </el-form>
      </el-row>
      <el-button @click="submitForm()">an</el-button>
    </div>
  </div>
</template>
<script>
import { MY_GRADE } from "@/constants/TEXT";
import { PATH_EMPLOYEE_MY } from "@/constants/URL";
import {
  getPerformanceUserInfo,
  getUniqueTemplate,
  getTargetContent
} from "@/constants/API";
import { Divider } from "element-ui";

export default {
  data() {
    return {
      nav: [
        {
          label: MY_GRADE,
          href: PATH_EMPLOYEE_MY
        },
        {
          label: "指标详情",
          active: true
        }
      ],
      userInfo: {
        name: "",
        workcode: "",
        superior_name: "",
        superior_workcode: "",
        department: "",
        station: "",
        cycle: "",
        deadline: ""
      },
      allTarget: [],
      rules: {
        weights: [{ required: true, message: "权重不能为空", trigger: "blur" }],
        target: [
          { required: true, message: "指标名称不能为空", trigget: "blur" }
        ],
        content: [
          {
            required: true,
            message: "具体工作/任务描述不能为空",
            trigger: "blur"
          }
        ]
      },
      metricsRules: {
        content: [
          { required: true, message: "请输入衡量标准", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue")
  },
  methods: {
    changeLabel(h, { column }) {
      return h("div", [
        h("span", column.label),
        h("br"),
        h("span", "（最多可填写"),
        h("span", 5, {
          style: "color: red;"
        }),
        h("span", "项）")
      ]);
    },
    getUserInfo() {
      let data = {
        performance_id: this.$route.params.id,
        performance_user_id: this.$route.params.uid
      };
      getPerformanceUserInfo(data)
        .then(res => {
          const {
            name,
            workcode,
            superior_name,
            superior_workcode,
            department,
            station,
            cycle,
            deadline
          } = res;
          this.userInfo = {
            name,
            workcode,
            superior_name,
            superior_workcode,
            department,
            station,
            cycle,
            deadline
          };
        })
        .catch(() => {});
    },
    getWrokAndTeamTarget() {
      let data = {
        performance_id: this.$route.params.id
      };
      getUniqueTemplate(data)
        .then(res => {
          const isTeam = res.team !== undefined;
          const isWork = res.work !== undefined;
          const isFinance = res.finance !== undefined;
          this.allTarget = [];
          if (isTeam) {
            let team = res.team;
            this.allTarget[team.sort - 1] = {
              isMoney: 0,
              sort: team.sort,
              type: team.type,
              weight: team.weight,
              table: team.template_columns
            };
          }
          if (isWork) {
            let work = res.work;
            this.allTarget[work.sort - 1] = {
              isMoney: 0,
              sort: work.sort,
              type: work.type,
              weight: work.weight,
              table: work.template_columns
            };
          }
          if (isFinance) {
            let finance = res.finance;
            this.allTarget[finance.sort - 1] = {
              isMoney: 1,
              sort: finance.sort,
              type: finance.type,
              weight: finance.weight,
              table: finance.template_columns
            };
          }
        })
        .catch(() => {});
    },
    submitForm() {
      // 用于表单验证，由于是循环的内容，所以需要对每个表单都进行验证，所有表单全部通过才会发送请求
      let refs = Object.keys(this.$refs);
      let total = 0;
      refs.forEach((v, i) => {
        this.$refs[v][0].validate(valid => {
          if (valid) {
            total++;
          }
        });
        return total;
      });
      if (total === refs.length) {
        // TODO 向后端发送请求
        alert("hhh");
      }
    },
    addTarget(index) {
      let data = {
        performance_id: this.$route.params.id,
        performance_user_id: this.$route.params.uid
      };
      getTargetContent(data).then(res => {
        this.allTarget[index].table.push(res[0]);
      });
    }
  },
  created() {
    this.getUserInfo();
    this.getWrokAndTeamTarget();
  }
};
</script>
<style scoped>
.target-settings .text-over {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.target-settings .flex {
  display: flex;
}
.target-settings .target-detail >>> .el-table th div {
  line-height: 20px;
}
.target-settings .target-detail .el-form-item {
  margin-bottom: 16px;
}
.target-settings .target-detail >>> .el-form-item__content {
  line-height: normal;
}
.target-settings .target-header {
  background-color: #ffffff;
  padding: 0 30px 20px 30px;
  margin-bottom: 20px;
}
.target-settings .target-header .title {
  text-align: center;
  color: #303133;
  font-size: 22px;
  font-weight: 500;
  padding: 23px 0;
}
.target-settings .flex {
  display: flex;
}
.target-settings .target-header .user-info .img {
  width: 62px;
}
.target-settings .target-header .user-info .user-name {
  font-size: 16px;
  color: #303133;
  font-weight: 500;
}
.target-settings .target-header .user-info .other-info-title {
  color: #909399;
  margin-top: 10px;
  margin-bottom: 5px;
}
.target-settings .target-header .user-info .upload-target {
  float: right;
  margin-top: 15px;
}
.target-settings .target-header .user-info .linkman {
  margin-top: 8px;
  color: #ff8519;
}
.target-settings .target-detail {
  background-color: #ffffff;
  margin: 6px 30px;
  padding: 20px;
  border-radius: 3px;
}
.target-settings .target-detail .target-detail-title {
  margin-bottom: 10px;
}
.target-settings .target-detail .target-title {
  font-size: 16px;
  font-weight: 500;
}
.target-settings .target-detail .target-weight {
  color: #909399;
  margin-left: 10px;
}
.target-settings .target-detail .measure-title {
  width: 180px;
  text-align: right;
  flex-shrink: 1;
}
.target-settings .target-detail .measure-title .is-required {
  color: #f56c6c;
}
.target-settings .target-detail ul {
  padding: 0;
  margin: 0;
}
.target-settings .target-detail .add-target {
  width: 100%;
  margin-top: 10px;
  border: 1px dashed #dcdfe6;
}
</style>
