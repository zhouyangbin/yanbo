<template>
  <el-dialog
    :close-on-click-modal="false"
    @close="close"
    width="650px"
    :visible="visible"
    class="tpl-dialog"
  >
    <div slot="title" class="title">
      {{ infoType === "add" ? constants.ADD_NEW_TPL : constants.UPDATE_TPL }}
    </div>
    <el-form
      :rules="rules"
      label-width="140px"
      ref="tplForm"
      :model="tplForm"
      class="tpl-form"
    >
      <el-form-item :label="constants.TPL_NAME" prop="name">
        <el-input style="width:400px" v-model="tplForm.name"></el-input>
      </el-form-item>
      <el-form-item
        :label="constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT"
        prop="department_ids"
      >
        <el-tree
          class="select-tree"
          empty-text="努力加载中..."
          @check-change="treeChange"
          :props="defaultProps"
          :default-checked-keys="tplForm.department_ids"
          node-key="department_id"
          ref="tree"
          :filter-node-method="filterNode"
          show-checkbox
          :data="orgTree"
        ></el-tree>
      </el-form-item>
      <el-form-item
        :label="constants.EXECUTIVE_TYPE_TEXT"
        prop="executive_types"
      >
        <el-checkbox-group v-model="tplForm.executive_types">
          <el-checkbox
            v-for="item in executiveTypes"
            :label="item.key"
            :key="item.key"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        :label="constants.PERFORMANCE_TYPE"
        class="is-required no-margin-bottom"
        prop="performance_type"
      >
        <el-select
          v-model="tplForm.performance_type"
          :placeholder="constants.PLEASE_SELECT_PERFORMANCE_TYPE"
        >
          <el-option
            v-for="item in performanceTypes"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="constants.TEMPLATE_FIELD" prop="template_fields">
        <el-checkbox-group v-model="tplForm.template_fields">
          <el-checkbox
            v-for="item in tplFields"
            :key="item.key"
            :label="item.key"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        v-show="showMeasurementRequired"
        :label="constants.IS_THE_MEASUREMENT_REQUIRED"
        class="no-margin-bottom"
        prop="measures"
      >
        <el-checkbox-group v-model="tplForm.measures">
          <el-checkbox
            v-for="item in tplMeasures"
            :key="item.key"
            :label="item.key"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        :class="item.key === 'team' ? '' : 'is-required'"
        v-for="item in tplForm.performance_indicator_types"
        :key="item.key"
        :label="item.label"
      >
        <el-input
          class="input-type"
          v-model="item.name"
          placeholder="请输入业绩指标"
        ></el-input>
        <el-input
          class="input-type"
          @blur="louseFouce(item)"
          :placeholder="constants.TARGET_WEIGH"
          v-model="item.weight"
        >
          <span slot="prepend">{{ constants.TARGET_WEIGH }}</span>
          <span slot="append">%</span>
        </el-input>
        <el-input
          class="input-type"
          @blur="louseFouce(item)"
          :placeholder="constants.SORT"
          v-model="item.sort"
        >
          <span slot="prepend">{{ constants.SORT }}</span>
        </el-input>
        <div
          class="el-form-item__error"
          v-show="!item.name && item.key !== 'team'"
        >
          请输入{{ item.label }}
        </div>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="submit" type="primary">
          {{ constants.CONFIRM }}
        </el-button>
        <el-button round size="medium" @click="close" class="btn-reset">
          {{ constants.CANCEL }}
        </el-button>
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import {
  ADD_NEW_TPL,
  UPDATE_TPL,
  CONFIRM,
  CANCEL,
  EXECUTIVE_PERFORMANCE_TYPE,
  EXECUTIVE_ENUM_PERFORMANCE_CONFIG_PROPERTY,
  TPL_NAME,
  BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,
  PLEASE_SELECT_MULTIPLE,
  EXECUTIVE_TYPE,
  STANDARD_OF_MEASUREMENT,
  EXECUTIVE_TYPE_TEXT,
  PERFORMANCE_TYPE,
  PLEASE_SELECT_PERFORMANCE_TYPE,
  TEMPLATE_FIELD,
  IS_THE_MEASUREMENT_REQUIRED,
  TARGET_WEIGH,
  SORT
} from "@/constants/TEXT";
import {
  putPerformanceTpls,
  postPerformanceTpl,
  getPerformanceTpl
} from "@/constants/API";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    infoType: {
      type: String,
      default: "add"
    },
    tplId: {
      type: Number,
      default: 0
    },
    performanceTypes: {
      type: Array,
      default: () => []
    },
    executiveTypes: {
      type: Array,
      default: () => []
    },
    tplFields: {
      type: Array,
      default: () => []
    },
    tplMeasures: {
      type: Array,
      default: () => []
    },
    orgTree: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showMeasurementRequired: false,
      defaultProps: {
        label: "department_name",
        children: "children"
      },
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        department_ids: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个业务单元/职能单元",
            trigger: "change"
          }
        ],
        executive_types: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个高管类型",
            trigger: "change"
          }
        ],
        template_fields: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个模板字段",
            trigger: "change"
          }
        ]
      },
      tplForm: {
        name: "",
        department_ids: [],
        executive_types: [],
        performance_type: "annual",
        template_fields: ["weight", "indicator_name"],
        measures: [],
        performance_indicator_types: [
          {
            label: "业绩指标类型一",
            key: "finance",
            name: "财务维度指标",
            weight: 0,
            sort: 0
          },
          {
            label: "业绩指标类型二",
            key: "work",
            name: "工作维度指标",
            weight: 0,
            sort: 0
          },
          {
            label: "业绩指标类型三",
            key: "team",
            name: "团队维度指标",
            weight: 0,
            sort: 0
          }
        ]
      },
      constants: {
        ADD_NEW_TPL,
        UPDATE_TPL,
        CONFIRM,
        CANCEL,
        EXECUTIVE_PERFORMANCE_TYPE,
        EXECUTIVE_ENUM_PERFORMANCE_CONFIG_PROPERTY,
        TPL_NAME,
        BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,
        PLEASE_SELECT_MULTIPLE,
        EXECUTIVE_TYPE,
        STANDARD_OF_MEASUREMENT,
        EXECUTIVE_TYPE_TEXT,
        PERFORMANCE_TYPE,
        PLEASE_SELECT_PERFORMANCE_TYPE,
        TEMPLATE_FIELD,
        IS_THE_MEASUREMENT_REQUIRED,
        TARGET_WEIGH,
        SORT
      }
    };
  },
  // computed: {
  //   checkedKeys() {
  //     return this.tplForm.department_ids.map(({ department_id }) => department_id);
  //   }
  // },
  watch: {
    tplForm: {
      handler: function(val, oldVal) {
        this.showMeasurementRequired = val.template_fields.includes("measure")
          ? true
          : false;
      },
      deep: true
    }
  },
  methods: {
    louseFouce(item) {
      item.sort = item.sort || 0;
      item.weight = item.weight || 0;
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.department_name.indexOf(value) !== -1;
    },
    treeChange(data, checked, indeterminate) {
      this.tplForm.department_ids = this.$refs.tree.getCheckedNodes();
    },
    close() {
      this.$emit("close");
    },
    handleCheckedExecutiveType() {},
    submit() {
      this.$refs["tplForm"].validate(valid => {
        if (valid) {
          let indicatorTypes = this.tplForm.performance_indicator_types;
          for (let i = 0; i < indicatorTypes.length; i++) {
            if (
              indicatorTypes[i].name === "" &&
              indicatorTypes[i].key !== "team"
            ) {
              return false;
            }
          }
          this.tplForm.department_ids = this.tplForm.department_ids.map(
            v => v.department_id
          );
          if (this.infoType == "add") {
            return postPerformanceTpl(this.tplForm).then(res => {
              this.close();
            });
          } else {
            return putPerformanceTpls(this.tplId, this.tplForm).then(res => {
              this.close();
            });
          }
        }
      });
    }
  },
  beforeDestroy() {
    this.$refs["tplForm"].resetFields();
  },
  created() {
    if (this.infoType != "add" && this.tplId) {
      getPerformanceTpl(this.tplId).then(res => {
        const {
          name,
          department_ids,
          executive_types,
          performance_type,
          template_fields,
          measures,
          performance_indicator_types
        } = res;
        this.tplForm = {
          name,
          department_ids,
          executive_types,
          performance_type,
          template_fields,
          measures,
          performance_indicator_types
        };
      });
    }
  }
};
</script>
<style scoped>
.tpl-dialog .title {
  text-align: left;
}
.tpl-dialog >>> .el-dialog__header {
  border-bottom: 1px solid #e4e7ed;
}
.tpl-dialog >>> .el-form-item {
  margin-bottom: 22px;
}
.tpl-dialog >>> .el-form-item .el-input-group__prepend,
.tpl-dialog >>> .el-form-item .el-input-group__append {
  padding: 0 10px !important;
  background-color: #fff !important;
  border: none !important;
}
.tpl-form >>> .el-form-item {
  margin-bottom: 16px !important;
}
.tpl-form .input-type {
  float: left;
  width: 33.33%;
}
.tpl-form .select-tree {
  max-height: 260px;
  overflow: auto;
}
</style>
