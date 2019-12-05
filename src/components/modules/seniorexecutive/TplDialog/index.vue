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
        <el-input
          type="textarea"
          :autosize="{ minRows: 2 }"
          style="width:400px;line-height:38px"
          v-model="tplForm.name"
          maxlength="100"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT"
        prop="department_ids"
      >
        <common-tree
          :orgTree="orgTree"
          :department_ids="tplForm.department_ids"
          @selectedIds="selectedOrg"
        ></common-tree>
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
      <!-- // !fix  -->
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
  TPL_NAME,
  BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,
  PLEASE_SELECT_MULTIPLE,
  EXECUTIVE_TYPE_TEXT,
  PERFORMANCE_TYPE,
  PLEASE_SELECT_PERFORMANCE_TYPE,
  TEMPLATE_FIELD,
  IS_THE_MEASUREMENT_REQUIRED,
  TARGET_WEIGH,
  SORT
} from "@/constants/TEXT";
import {
  putExecutivePerformanceTpls,
  postExecutivePerformanceTpl,
  getExecutivePerformanceTpl
} from "@/constants/API";
import { AsyncComp } from "@/utils/asyncCom";
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
    performanceId: {
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
    },
    indicatorTypes: {
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
            message: "请至少选择一个组织部类型",
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
        performance_indicator_types: this.indicatorTypes
      },
      constants: {
        ADD_NEW_TPL,
        UPDATE_TPL,
        CONFIRM,
        CANCEL,
        TPL_NAME,
        BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,
        PLEASE_SELECT_MULTIPLE,
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
  components: {
    "common-tree": AsyncComp(
      import("@/components/modules/seniorexecutive/CommonTree/index.vue")
    )
  },
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
    require() {
      if (this.infoType == "add") {
        return postExecutivePerformanceTpl(this.tplForm).then(res => {
          this.$emit("update");
        });
      } else {
        return putExecutivePerformanceTpls(
          this.performanceId,
          this.tplForm
        ).then(res => {
          this.$emit("update");
        });
      }
    },
    alert(query) {
      this.$alert(`业绩指标标型三：${query}未填写`, "提示", {
        // confirmButtonText: '确定',
        cancelButtonText: "确定",
        type: "warning"
      })
        .then(e => {})
        .catch(e => {
          this.require();
        });
    },
    selectedOrg(data) {
      this.tplForm.department_ids = data;
    },
    louseFouce(item) {
      item.sort = item.sort || 0;
      item.weight = item.weight || 0;
      let reg = /^[0-9]+[0-9]*$/;
      if (!reg.test(item.weight)) {
        this.$alert("权重配比必须为正整数！");
        item.weight = 0;
      }
      if (!reg.test(item.sort)) {
        this.$alert("排序必须为正整数！");
        item.sort = 0;
      }
    },
    close() {
      this.$emit("close");
    },
    submit() {
      this.$refs["tplForm"].validate(valid => {
        if (valid) {
          let indicatorTypes = this.tplForm.performance_indicator_types;
          let isSubmit = true;
          let weight = 0;
          let sort = [];
          let newSort = [];
          for (let i = 0; i < indicatorTypes.length; i++) {
            weight = weight + parseInt(indicatorTypes[i].weight);
            sort.push(indicatorTypes[i].sort);
            newSort = sort.sort();
            if (
              indicatorTypes[i].name === "" &&
              indicatorTypes[i].key !== "team"
            ) {
              return false;
            }
          }
          for (let i = 0; i < sort.length; i++) {
            if ((sort[i] == sort[i + 1]) != 0) {
              this.$alert("排序不能相同!");
              return false;
            }
          }
          // 权重之和是否不为100
          if (weight != 100) {
            this.$alert("所填写的指标类型的权重配比之和必须等于100%！");
            return false;
          }
          for (let i = 0; i < newSort.length; i++) {
            if ((newSort[i] == newSort[i + 1]) != 0) {
              this.$alert("排序不能相同!");
              return false;
            }
          }
          for (let i = 0; i < indicatorTypes.length - 1; i++) {
            if (
              indicatorTypes[i].name == "" ||
              indicatorTypes[i].weight == 0 ||
              indicatorTypes[i].sort == 0
            ) {
              this.$alert("必填项不能为空！");
              isSubmit = false;
              return;
            } else {
              isSubmit = true;
            }
          }
          if (!isSubmit) {
            return false;
          } else {
            if (indicatorTypes[indicatorTypes.length - 1].name) {
              if (
                indicatorTypes[indicatorTypes.length - 1].name == "团队维度指标"
              ) {
                if (indicatorTypes[indicatorTypes.length - 1].weight != 0) {
                  if (indicatorTypes[indicatorTypes.length - 1].sort == 0) {
                    this.alert("排序");
                  }
                } else {
                  if (indicatorTypes[indicatorTypes.length - 1].sort != 0) {
                    this.$alert("业绩指标标型三：“权重”未填写！");
                  } else {
                    this.require();
                  }
                }
              } else {
                if (indicatorTypes[indicatorTypes.length - 1].weight != 0) {
                  if (indicatorTypes[indicatorTypes.length - 1].sort != 0) {
                    this.require();
                  } else {
                    this.alert("排序");
                  }
                } else {
                  if (indicatorTypes[indicatorTypes.length - 1].sort != 0) {
                    this.alert("权重");
                  } else {
                    this.alert("权重、排序");
                  }
                }
              }
            } else {
              if (indicatorTypes[indicatorTypes.length - 1].weight != 0) {
                if (indicatorTypes[indicatorTypes.length - 1].sort != 0) {
                  this.alert("指标");
                } else {
                  this.alert("指标、排序");
                }
              } else {
                if (indicatorTypes[indicatorTypes.length - 1].sort != 0) {
                  this.alert("指标、权重");
                }
              }
            }
            if (
              indicatorTypes[indicatorTypes.length - 1].name &&
              // indicatorTypes[indicatorTypes.length - 1].name != "团队维度指标" &&
              indicatorTypes[indicatorTypes.length - 1].weight != 0 &&
              indicatorTypes[indicatorTypes.length - 1].sort != 0
            ) {
              this.require();
            }
            if (
              !indicatorTypes[indicatorTypes.length - 1].name &&
              indicatorTypes[indicatorTypes.length - 1].name !=
                "团队维度指标" &&
              indicatorTypes[indicatorTypes.length - 1].weight == 0 &&
              indicatorTypes[indicatorTypes.length - 1].sort == 0
            ) {
              this.require();
            }
          }
        }
      });
    }
  },
  beforeDestroy() {
    this.$refs["tplForm"].resetFields();
  },
  created() {
    if (this.infoType != "add" && this.performanceId) {
      getExecutivePerformanceTpl(this.performanceId).then(res => {
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
    } else {
      Object.keys(this.indicatorTypes).forEach(key => {
        this.indicatorTypes[key].weight = 0;
        this.indicatorTypes[key].sort = 0;
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
</style>
