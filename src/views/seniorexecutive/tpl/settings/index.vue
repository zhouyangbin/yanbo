<template>
  <div class="tpl-settings">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <section>
        <el-form :inline="true">
          <el-form-item class="content-search">
            <el-input
              placeholder="输入关键字进行过滤"
              v-model="filterText"
            ></el-input>
            <el-tree
              class="select-tree"
              empty-text="努力加载中..."
              @check-change="treeChange"
              :props="defaultProps"
              :default-checked-keys="checkedKeys"
              node-key="department_id"
              ref="tree"
              :filter-node-method="filterNode"
              show-checkbox
              :data="orgTree"
            ></el-tree>
          </el-form-item>
          <el-form-item>
            <el-button round @click="reset">{{ constants.RESET }}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              v-if="canCreateTpl"
              @click="createTpl"
              round
              >{{ constants.ADD_NEW_TPL }}</el-button
            >
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
            prop="name"
            :label="constants.TPL_NAME"
          ></el-table-column>
          <el-table-column
            prop="department_text"
            :label="constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT"
          ></el-table-column>
          <el-table-column
            prop="performance_type_text"
            :label="constants.PERFORMANCE_TYPE"
          ></el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            prop="executive_type_text"
            :label="constants.ORGANIZATION_DEPARTMENT_MEMBER_TYPE"
          ></el-table-column>
          <el-table-column
            prop="performance_indicator_type_text"
            :label="constants.INDICATOR_TYPE_AND_PROPORTION"
          ></el-table-column>
          <el-table-column :label="constants.LABEL_OPERATIONS">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="updateTpl(scope.row)"
                size="small"
                >{{ constants.LABEL_MODIFY }}</el-button
              >
              <el-button type="text" size="small" @click="delTpl(scope.row)">{{
                constants.LABEL_DEL
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br />
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </section>
    </section>
    <tpl-dialog
      v-if="showDialog"
      @close="tplDialogClose"
      :visible="showDialog"
      :infoType="infoType"
      :tplId="tplId"
      :performanceTypes="performanceTypes"
      :executiveTypes="executiveTypes"
      :tplFields="tplFields"
      :tplMeasures="tplMeasures"
      :orgTree="orgTree"
    ></tpl-dialog>
    <el-dialog
      title="提示"
      :visible.sync="showConfirmDialog"
      width="30%"
      class="del-dialog"
      :before-close="handleClose"
    >
      <span>{{ dialogText }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showConfirmDialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmBtn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  TPL_SETTING,
  LABEL_SELECT_DIVISION,
  ADD_NEW_TPL,
  SERIAL_NUMBER,
  BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,
  ORGANIZATION_DEPARTMENT_MEMBER_TYPE,
  INDICATOR_TYPE_AND_PROPORTION,
  TPL_NAME,
  PERFORMANCE_TYPE,
  LABEL_OPERATIONS,
  LABEL_MODIFY,
  LABEL_DEL,
  ATTENTION,
  LABEL_CONFIRM,
  LABEL_CANCEL,
  ID_DET_TPL_CONFIRM,
  RESET
} from "@/constants/TEXT";
import {
  getAdminTpls,
  deleteTpls,
  getPerformanceTypes,
  getExecutiveTypes,
  getTplFields,
  getTplMeasures,
  getOrganization
} from "@/constants/API";
import { AsyncComp } from "@/utils/asyncCom";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "tpl-dialog": AsyncComp(
      import("@/components/modules/seniorexecutive/TplDialog/index.vue")
    )
  },
  data() {
    return {
      filterText: "",
      checkedNodes: [],
      defaultProps: {
        label: "department_name",
        children: "children"
      },
      performanceTypes: [],
      executiveTypes: [],
      tplFields: [],
      tplMeasures: [],
      orgTree: [],
      currentPage: 1,
      total: 0,
      infoType: "add",
      showDialog: false,
      dialogText: "是否确认删除模板？",
      tplId: 0,
      showConfirmDialog: false,
      department_ids: [],
      canCreateTpl: true,
      tableData: [],
      initData: {},
      constants: {
        LABEL_SELECT_DIVISION,
        ADD_NEW_TPL,
        SERIAL_NUMBER,
        BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,
        ORGANIZATION_DEPARTMENT_MEMBER_TYPE,
        INDICATOR_TYPE_AND_PROPORTION,
        TPL_NAME,
        PERFORMANCE_TYPE,
        LABEL_OPERATIONS,
        LABEL_MODIFY,
        LABEL_DEL,
        RESET
      },
      nav: [
        {
          label: TPL_SETTING,
          active: true
        }
      ]
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  computed: {
    checkedKeys() {
      return this.checkedNodes.map(({ department_id }) => department_id);
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.department_name.indexOf(value) !== -1;
    },
    treeChange(data, checked, indeterminate) {
      this.department_ids = this.$refs.tree.getCheckedNodes();
      let getData = {
        department_ids: this.department_ids.map(v => v.department_id)
      };
      this.getTplList(getData);
    },
    getTplList(getData) {
      getAdminTpls(getData)
        .then(res => {
          const { total, data } = res;
          this.tableData = data;
          this.total = total;
        })
        .catch(e => {});
    },
    reset() {
      this.filterText = "";
      this.getTplList({});
    },
    createTpl() {
      this.infoType = "add";
      this.showDialog = true;
    },
    tplDialogClose() {
      this.showDialog = false;
    },
    handleCurrentChange(val) {
      // 分页
      this.currentPage = val;
    },
    handleSizeChange(val) {
      this.currentPage = val;
    },
    updateTpl(row) {
      this.infoType = "modify";
      this.tplId = row.id;
      this.showDialog = true;
    },
    delTpl(row) {
      this.tplId = row.id;
      this.showConfirmDialog = true;
      this.dialogText = "是否确认删除模板？";
      // 删除 是否确认删除模板？or 该模板正在使用中，不能删除。
    },
    confirmBtn() {
      deleteTpls(this.tplId)
        .then(res => {
          debugger;
        })
        .catch(e => {});
    },
    handleClose() {
      this.showConfirmDialog = false;
    }
  },
  created() {
    this.getTplList({});
    getPerformanceTypes()
      .then(res => {
        this.performanceTypes = res;
      })
      .catch(e => {});
    getExecutiveTypes()
      .then(res => {
        this.executiveTypes = res;
      })
      .catch(e => {});
    getTplFields()
      .then(res => {
        this.tplFields = res;
      })
      .catch(e => {});
    getTplMeasures()
      .then(res => {
        this.tplMeasures = res;
      })
      .catch(e => {});
    getOrganization()
      .then(res => {
        this.orgTree = res;
      })
      .catch(e => {});
  }
};
</script>
<style scoped>
.tpl-settings .el-form .el-form-item:last-child {
  float: right;
}
.del-dialog >>> .el-dialog__header {
  border-bottom: 1px solid #e4e7ed;
}
.tpl-settings .content-search {
  position: relative;
}
.tpl-settings .content-search .select-tree {
  position: absolute;
  left: 0;
  top: 42px;
  background-color: #fff;
  z-index: 999;
}
.tpl-settings .select-tree >>> .el-tree__empty-block {
  width: 180px;
}
</style>
