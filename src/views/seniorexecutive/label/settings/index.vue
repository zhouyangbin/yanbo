<template>
  <div class="label-settings">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <section>
        <el-form :inline="true" ref="conditionForm" :model="conditionForm">
          <el-form-item>
            <el-cascader
              v-model="evaluation_id"
              :props="filterProps"
              :placeholder="constants.LABEL_SELECT_DIVISION"
              :options="orgTree"
              :show-all-levels="false"
              @change="checkCascader"
            ></el-cascader>
          </el-form-item>
          <el-form-item>
            <el-button round @click="resetForm('conditionForm')">{{
              constants.RESET
            }}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              v-if="canCreateTpl"
              @click="createTpl"
              round
              >{{ constants.ADD_NEW_LABEL }}</el-button
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
          <!-- 是否强制分布 -->
          <el-table-column
            prop="force_distribution"
            :label="constants.FORCED_DISTRIBUTION_OR_NOT"
            width="120"
          >
            <template slot-scope="scope">
              {{
                (
                  constants.FORCED_DISTRIBUTION_VALUE.filter(
                    v => v.key === scope.row.force_distribution
                  )[0] || {}
                ).value
              }}
            </template>
          </el-table-column>
          <el-table-column :label="constants.LABEL_OPERATIONS" width="120">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="updateTpl(scope.row)"
                size="small"
                >{{ constants.LABEL_MODIFY }}</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <br />
        <el-pagination
          v-if="total"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[10, 20, 50]"
          :page-size="perPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </section>
    </section>
    <label-dialog
      v-if="showDialog"
      :initData="initData"
      :departmentsOps="options"
      @close="tplDialogClose"
      :visible="showDialog"
      :infoType="infoType"
      :orgTree="orgTree"
      @getList="getAdminTagsList"
    ></label-dialog>
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
import { getAdminTags, getOrganization } from "@/constants/API";
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
      options: [], // 业务单元/职能单元数据来源
      conditionForm: { evaluation_name_id: "", evaluation_id: "" },
      departments: [],
      canCreateTpl: true,
      tableData: [],
      initData: {},
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
      evaluation_id: []
    };
  },

  methods: {
    checkCascader() {
      this.getAdminTagsList();
    },
    /**
     * 将后端返回数据中的children提取到外层，并追加在当前包含children的对象后面
     * @param arr 后端返回的数组
     * @return newArr 不包含children的数组
     */
    handleTagRulesDataStructure(arr) {
      let newArr = [];
      arr.forEach((v, i) => {
        if (v.children === undefined) {
          newArr.push(v);
        }
        if (v.children !== undefined) {
          newArr.push(v);
          v.children.forEach((obj, index) => {
            obj["isChildren"] = true;
            newArr.push(obj);
          });
          delete v.children;
        }
      });
      return newArr;
    },
    resetForm(formName) {
      this.evaluation_id = [];
      this.getAdminTagsList();
    },
    changeDepartment(item) {
      this.conditionForm = Object.assign({}, this.conditionForm, {
        evaluation_id: item.value
      });
    },
    createTpl() {
      // 创建模板
      this.infoType = "add";
      this.showDialog = true;
    },
    tplDialogClose() {
      this.showDialog = false;
      // 关闭弹框
    },
    /**
     * 改变分页size
     */
    handleSizeChange(val) {
      this.perPage = val;
      this.getAdminTagsList();
    },
    /**
     * 改变分页page
     */
    handleCurrentChange(val) {
      this.page = val;
      this.getAdminTagsList();
    },
    updateTpl(row) {
      // 修改
      this.infoType = "modify";
      this.initData = { id: row.id };
      this.showDialog = true;
    },
    getAdminTagsList() {
      let data = {
        department_ids: this.evaluation_id,
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
