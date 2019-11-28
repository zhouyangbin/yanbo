<template>
  <div>
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <el-row align="middle" type="flex" justify="space-between">
        <div>
          <span>{{ constants.PERFORMANCE_GRADE_LIST }}</span>
          <el-cascader
            v-model="filterForm.dp"
            :placeholder="constants.LABEL_SELECT_DIVISION"
            :props="filterProps"
            style="margin-left:30px"
            :options="dpArr"
            :show-all-levels="false"
          ></el-cascader>
          <el-select
            style="margin-left:30px"
            v-model="filterForm.type"
            placeholder="请选择周期类型"
          >
            <el-option
              v-for="item in constants.ENUM_PERFORMANCE_TYPE"
              :key="item.key"
              :label="item.value"
              :value="item.key"
            ></el-option>
          </el-select>
          <el-button style="margin-left:30px" round @click="resetFilter">
            {{ constants.LABEL_EMPTY }}
          </el-button>
        </div>
        <el-button
          type="primary"
          v-if="canCreatePerformanceGrade"
          @click="createGrade"
          round
          >{{ constants.CREATE_GRADE }}</el-button
        >
      </el-row>

      <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
        <el-table-column prop="name" :label="constants.GRADE_NAME" width="180">
          <template slot-scope="scope">
            {{ scope.row.name }}
            <span class="newTag" v-if="scope.row.index === 0">NEW!</span>
          </template>
        </el-table-column>
        <el-table-column
          :show-overflow-tooltip="true"
          prop="department"
          :label="constants.DEPARTMENT"
          min-width="180"
        ></el-table-column>
        <el-table-column
          prop="type"
          :label="constants.DURATION_TYPE"
        ></el-table-column>
        <el-table-column
          prop="end_time"
          :label="constants.FINISHED_DATE"
        ></el-table-column>
        <el-table-column
          prop="start_time"
          :label="constants.CREATED_DATE"
        ></el-table-column>
        <el-table-column prop="address" :label="constants.OPERATIONS">
          <template slot-scope="scope">
            <el-button @click="goSubList(scope.row)" type="text" size="small">
              {{ constants.DETAILS }}
            </el-button>
            <el-button
              @click="gradeExport(scope.row)"
              type="text"
              size="small"
              >{{ constants.EXPORT_DETAILS }}</el-button
            >
            <el-button
              v-if="canCreatePerformanceGrade"
              @click="copyGrade(scope.row)"
              type="text"
              size="small"
              >{{ constants.COPY_GRADE }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <br />
      <el-row type="flex">
        <pagination
          :currentPage="currentPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :total="total"
          :pageSize="perPage"
        ></pagination>
      </el-row>
    </section>
    <Drawer @close="createGradeDialog = false" align="left">
      <grade-dialog
        :copyID="copyID"
        v-if="createGradeDialog"
        :initData="initData"
        :defaultChecked="checkedNodes"
        :actionType="actionType"
        :initForm="initForm"
        :departmentTree="departmentTree"
        :visible.sync="createGradeDialog"
      ></grade-dialog>
    </Drawer>
  </div>
</template>
<script>
import {
  GRADE_MANAGE,
  PERFORMANCE_GRADE_LIST,
  CREATE_GRADE,
  GRADE_NAME,
  DETAILS,
  EXPORT_DETAILS,
  ENUM_PERFORMANCE_TYPE,
  LABEL_SELECT_DIVISION,
  DEPARTMENT,
  DURATION_TYPE,
  FINISHED_DATE,
  CREATED_DATE,
  OPERATIONS,
  COPY_GRADE,
  LABEL_EMPTY
} from "@/constants/TEXT";

import { getOrgTree, getPerformanceList } from "@/constants/API";
import {
  PATH_PERFORMANCE_PROGRESS,
  PATH_EXPORT_PERFORMANCE_GRADE
} from "@/constants/URL";
import Drawer from "vue-simple-drawer";

export default {
  data() {
    return {
      // tree panel
      checkedNodes: [],
      departmentTree: [],
      actionType: "",
      copyID: "",
      filterProps: {
        value: "id",
        label: "name",
        children: "children"
      },
      // filter form
      filterForm: {
        type: "",
        dp: []
      },
      createGradeDialog: false,
      constants: {
        PERFORMANCE_GRADE_LIST,
        CREATE_GRADE,
        GRADE_NAME,
        DETAILS,
        EXPORT_DETAILS,
        ENUM_PERFORMANCE_TYPE,
        LABEL_SELECT_DIVISION,
        DEPARTMENT,
        DURATION_TYPE,
        FINISHED_DATE,
        CREATED_DATE,
        OPERATIONS,
        COPY_GRADE,
        LABEL_EMPTY
      },
      nav: [
        {
          label: GRADE_MANAGE,
          active: true
        }
      ],
      tableData: [],
      currentPage: 1,
      total: 0,
      initForm: {},
      initData: {},
      dpArr: [],
      permissions: [],
      perPage: 10
    };
  },
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    pagination: () => import("@/components/common/Pagination/index.vue"),
    "grade-dialog": () =>
      import("@/components/modules/performance/GradeDialog/index.vue"),
    Drawer
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.refreshList({
        page: val,
        department_id: this.selectedDep,
        type_id: this.filterForm.type
      });
    },
    handleSizeChange(val) {
      //切换条数
      this.perPage = val;
      this.currentPage = 1;
      const data = {
        page: this.currentPage,
        department_id: this.selectedDep,
        type_id: this.filterForm.type
      };
      this.refreshList(data);
    },
    refreshList(data) {
      data["perPage"] = this.perPage;
      return getPerformanceList(data).then(res => {
        const { total, data } = res;
        this.total = total;

        this.tableData = data.map((v, i) => {
          v.index = i;
          return v;
        });
      });
    },

    createGrade() {
      this.getOrgList(() => {
        this.createGradeDialog = true;
      });
    },
    copyGrade(row) {
      this.actionType = "copy";
      this.copyID = String(row.id);

      const id = row.template_id;
      this.initForm = {
        tpl: id,
        mapping: row.rule_id,
        name: "",
        property: row.type_id.toString(),
        startTime: "",
        endTime: ""
      };
      let rulesArr = [];
      for (const k in row.rules) {
        rulesArr.push({
          id: parseInt(k),
          type: row.rules[k]
        });
      }

      this.initData = { tplArr: row.templates, rulesArr };

      const depArr = row.department.split(",");
      this.checkedNodes = row.department_ids.map((id, i) => {
        return {
          department_id: id,
          name: depArr[i]
        };
      });
      this.createGrade();
    },
    gradeExport(row) {
      window.open(PATH_EXPORT_PERFORMANCE_GRADE(row.id), "_blank", "noopener");
    },

    getOrgList(cb) {
      return getOrgTree()
        .then(res => {
          this.departmentTree = res;
          if (cb) {
            cb();
          }
        })
        .catch(e => {});
    },

    getDepartments() {
      return getOrgTree()
        .then(res => {
          this.dpArr = res;
        })
        .catch(err => {});
    },
    goSubList(row) {
      this.$router.push(PATH_PERFORMANCE_PROGRESS(row.id));
    },
    resetFilter() {
      this.filterForm = {
        type: "",
        dp: []
      };
    }
  },
  computed: {
    selectedDep() {
      return this.filterForm.dp.length > 0
        ? this.filterForm.dp[this.filterForm.dp.length - 1]
        : "";
    },
    canCreatePerformanceGrade() {
      return this.permissions.includes(301);
    }
  },

  watch: {
    filterForm: {
      handler: function(v) {
        const filterData = {
          page: 1,
          department_id: v.dp.length > 0 ? v.dp[v.dp.length - 1] : "",
          type_id: v.type
        };
        this.currentPage = 1;
        this.refreshList(filterData);
      },
      deep: true,
      immediate: true
    },
    createGradeDialog: function(v) {
      if (!v) {
        this.actionType = "";
        this.copyID = "";

        this.initForm = {
          tpl: "",
          mapping: "",
          name: "",
          property: "",
          startTime: "",
          endTime: ""
        };
        this.checkedNodes = [];
        this.refreshList({
          page: this.currentPage,
          department_id: this.selectedDep,
          type_id: this.filterForm.type
        });
      }
    }
  },
  created() {
    this.getDepartments();
    this.permissions = JSON.parse(localStorage.getItem("permissions") || "[]");
  }
};
</script>
<style scoped>
.dialog-title {
  font-weight: 700;
}
.create-form-dialog {
  padding: 15px;
}
.create-form-dialog >>> .el-form-item__label {
  font-size: 13px;
  color: gray;
}
.create-form-dialog >>> .el-checkbox__label {
  font-size: 13px;
  color: gray;
}

.create-form-dialog >>> .el-checkbox-group,
.create-form-dialog >>> .el-checkbox-group + .el-checkbox {
  margin-left: -30px !important;
}
.newTag {
  color: rgb(62, 170, 255);
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
}
</style>
