<template>
  <div class="label-settings">
    <nav-bar :list="nav"></nav-bar>
    <section class="content-container">
      <section>
        <el-form
         :inline="true" :model="conditionForm" ref="conditionForm" style="margin-bottom:20px">
          <!--el-form-item :label="constants.BU" label-width="80px">
            <el-select
              v-model="evaluation_id"
              :placeholder="constants.LABEL_SELECT_DIVISION"
              @change="changeDepartment"
            >
              <el-option
                v-for="item in departments"
                :key="item.value"
                :label="item.label"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item  label="事业部" label-width="120px">
            <el-select
              v-model="evaluation_id"
              :placeholder="constants.LABEL_SELECT_DIVISION"
              @change="changeDepartment"
            >
              <el-option
                v-for="item in departments"
                :key="item.value"
                :label="item.label"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button round @click="resetForm('conditionForm')">{{
              constants.RESET
            }}</el-button>
          </el-form-item-->
          <el-form-item>
            <el-button
              type="primary"
              v-if="canCreateTpl"
              @click="createTag"
              round
              >{{ constants.ADD_NEW_LABEL }}</el-button
            >
          </el-form-item>
        </el-form>
        <br />
        <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
          <el-table-column
            prop="id"
            :label="constants.SERIAL_NUMBER"
            width="50"
          >
          </el-table-column>
          <el-table-column
            prop="type"
            :label="constants.TAG_TYPE"
            width="80"
          ></el-table-column>
          <el-table-column
            :label="constants.CORRESPONDING_GRADE_AND_PROPORTION"
            min-width="200"
          >
            <template slot-scope="scope">
              {{ scope.row.rules.map(item => item.name).join(",") }}
            </template>
          </el-table-column>
          <!-- 是否强制分布 -->
          <el-table-column
            prop="type"
            :label="constants.FORCED_DISTRIBUTION_OR_NOT"
            width="120"
          >
            <template slot-scope="scope">
              {{ scope.row.forced ? constants.YES : constants.NO }}
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
        <pagination
          :currentPage="currentPage"
          @current-change="handleCurrentChange"
          :total="total"
        ></pagination>
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
  TAG_TYPE,
  CORRESPONDING_GRADE_AND_PROPORTION,
  LABEL_OPERATIONS,
  LABEL_MODIFY,
  RESET,
  BU,
  YES,
  NO
} from "@/constants/TEXT";
import { getAdminTags } from "@/constants/API";
import { AsyncComp } from "@/utils/asyncCom";
export default {
  components: {
    "nav-bar": () => import("@/components/common/Navbar/index.vue"),
    "label-dialog": AsyncComp(
      import("@/components/modules/seniorexecutive/LabelDialog/index.vue")
    ),
    pagination: () => import("@/components/common/Pagination/index.vue")
  },
  data() {
    return {
      currentPage: 1,
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
        TAG_TYPE,
        CORRESPONDING_GRADE_AND_PROPORTION,
        LABEL_OPERATIONS,
        LABEL_MODIFY,
        RESET,
        BU,
        YES,
        NO
      },
      nav: [
        {
          label: LABEL_SETTING,
          active: true
        }
      ]
    };
  },
  computed: {
    evaluation_id: {
      // 获取evaluation_id
      get() {
        return this.evaluationId;
      },
      set(obj) {
        this.evaluationId = obj;
        this.conditionForm = Object.assign({}, this.conditionForm, {
          evaluation_id: obj.value
        });
      }
    }
  },
  methods: {
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
      this.$refs[formName].resetFields();
    },
    changeDepartment(item) {
      this.conditionForm = Object.assign({}, this.conditionForm, {
        evaluation_id: item.value
      });
    },
    createTag() {
      // 创建模板
      this.infoType = "add";
      this.showDialog = true;
    },
    tplDialogClose() {
      this.showDialog = false;
      this.getAdminTagsList();
      // 关闭弹框
    },
    handleCurrentChange(val) {
      // 分页
      this.currentPage = val;
    },
    updateTpl(row) {
      // 修改
      this.infoType = "modify";
      this.initData = row;
      this.showDialog = true;
    },
    getAdminTagsList() {
      getAdminTags()
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
  }
};
</script>
<style lang="scss" scoped>
.label-settings .el-form .el-form-item:last-child {
  float: right;
}
</style>
