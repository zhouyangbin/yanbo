<template>
  <div class="label-settings">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <section>
        <el-form :inline="true">
          <el-form-item>
            <el-cascader
              v-model="department_ids"
              :props="filterProps"
              :placeholder="constants.LABEL_SELECT_DIVISION"
              :options="orgTree"
              :show-all-levels="false"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
          <el-form-item>
            <el-button round @click="resetForm">{{
              constants.RESET
            }}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="createTpl" round>{{
              constants.ADD_NEW_LABEL
            }}</el-button>
          </el-form-item>
        </el-form>
        <br />
        <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
          <el-table-column
            type="index"
            :label="constants.SERIAL_NUMBER"
            width="50"
          >
          </el-table-column>
          <el-table-column
            prop="tag_type"
            :label="constants.TAG_NAME"
            width="80"
          ></el-table-column>
          <el-table-column
            prop="departments_text"
            :label="constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT"
            width="250"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="rule_text"
            :label="constants.CORRESPONDING_GRADE_AND_PROPORTION"
            min-width="200"
          ></el-table-column>
          <el-table-column
            prop="force_distribution"
            :label="constants.FORCED_DISTRIBUTION_OR_NOT"
            width="120"
          >
            <template slot-scope="scope">
              {{ scope.row.force_distribution ? "是" : "否" }}
            </template>
          </el-table-column>
          <el-table-column :label="constants.LABEL_OPERATIONS" width="120">
            <template slot-scope="scope">
              <el-button
                size="small"
                type="text"
                @click="updateTpl(scope.row)"
                >{{ constants.LABEL_MODIFY }}</el-button
              >
              <el-button
                size="small"
                type="text"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <br />
        <el-row type="flex" justify="end">
          <el-pagination
            v-if="total"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[10, 20, 50]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </el-row>
      </section>
    </section>
    <label-dialog
      v-if="showDialog"
      :userId="userId"
      @close="tplDialogClose"
      :visible="showDialog"
      :infoType="infoType"
      :orgTree="orgTree"
    ></label-dialog>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="400px">
      <span>是否确认删除标签？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="deleteMsg">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  LABEL_SETTING,
  LABEL_SELECT_DIVISION,
  ADD_NEW_LABEL,
  SERIAL_NUMBER,
  BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,
  FORCED_DISTRIBUTION_OR_NOT,
  TAG_NAME,
  CORRESPONDING_GRADE_AND_PROPORTION,
  LABEL_OPERATIONS,
  LABEL_MODIFY,
  RESET,
  FORCED_DISTRIBUTION_VALUE
} from "@/constants/TEXT";
import { getAdminTags, getOrganization, deleteLabel } from "@/constants/API";
import { AsyncComp } from "@/utils/asyncCom";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "label-dialog": AsyncComp(
      import("@/components/modules/seniorexecutive/LabelDialog/index.vue")
    )
  },
  data() {
    return {
      filterProps: {
        value: "id",
        label: "name",
        children: "children"
      },
      page: 1,
      perPage: 10,
      total: 0,
      infoType: "add",
      showDialog: false,
      tableData: [],
      userId: 0,
      orgTree: [],
      constants: {
        LABEL_SELECT_DIVISION,
        ADD_NEW_LABEL,
        SERIAL_NUMBER,
        BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,
        FORCED_DISTRIBUTION_OR_NOT,
        TAG_NAME,
        CORRESPONDING_GRADE_AND_PROPORTION,
        LABEL_OPERATIONS,
        LABEL_MODIFY,
        RESET,
        FORCED_DISTRIBUTION_VALUE
      },
      nav: [
        {
          label: LABEL_SETTING,
          active: true
        }
      ],
      department_ids: [],
      dialogVisible: false,
      deleteId: 0
    };
  },
  methods: {
    handleChange() {
      this.page = 1;
      this.getAdminTagsList();
    },
    resetForm() {
      this.page = 1;
      this.department_ids = [];
      this.getAdminTagsList();
    },
    createTpl() {
      this.infoType = "add";
      this.showDialog = true;
    },
    tplDialogClose() {
      this.showDialog = false;
    },
    handleSizeChange(val) {
      this.perPage = val;
      this.getAdminTagsList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getAdminTagsList();
    },
    updateTpl(row) {
      this.infoType = "modify";
      this.userId = row.id;
      this.showDialog = true;
    },
    getAdminTagsList() {
      let data = {
        department_ids: this.department_ids,
        page: this.page,
        perPage: this.perPage
      };
      getAdminTags(data)
        .then(res => {
          const { data, total } = res;
          this.total = total;
          this.tableData = data;
        })
        .catch(() => {});
    },
    handleDelete(row) {
      this.dialogVisible = true;
      this.deleteId = row.id;
    },
    deleteMsg() {
      this.dialogVisible = false;
      deleteLabel(this.deleteId)
        .then(res => {
          this.getAdminTagsList();
        })
        .catch(e => {});
    }
  },
  created() {
    this.getAdminTagsList();
    getOrganization()
      .then(res => {
        this.orgTree = res;
      })
      .catch(e => {});
  }
};
</script>
<style lang="scss" scoped>
.label-settings .el-form .el-form-item:last-child {
  float: right;
}
</style>
