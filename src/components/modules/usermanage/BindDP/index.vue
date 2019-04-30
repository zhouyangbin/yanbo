<template>
  <div class="bindDPDialog">
    <div slot="title" class="title">{{ constants.BIND_DEPARTMENT }}</div>
    <br />
    <br />
    <el-form
      :rules="bindRules"
      ref="bindForm"
      :model="bindForm"
      class="bindForm"
    >
      <el-form-item
        v-if="currentInfo.has_culture_permission"
        prop="culture"
        :label="constants.CULTURE_SCOPE"
      >
        <el-input
          style="width:400px"
          :placeholder="constants.LABEL_SELECT_DIVISION"
          v-model="cultrueSelectedNames"
          icon="caret-bottom"
          readonly="readonly"
          @click.native.stop="
            showPerformanceTree = false;
            show271Tree = false;
            showCultureTree = !showCultureTree;
          "
        ></el-input>
      </el-form-item>
      <el-form-item
        v-if="currentInfo.has_achievement_permission"
        prop="performance"
        :label="constants.PERFORMANCE_SCOPE"
      >
        <el-input
          style="width:400px"
          :placeholder="constants.LABEL_SELECT_DIVISION"
          v-model="performanceSelectedNames"
          icon="caret-bottom"
          readonly="readonly"
          @click.native.stop="
            showCultureTree = false;
            show271Tree = false;
            showPerformanceTree = !showPerformanceTree;
          "
        ></el-input>
      </el-form-item>

      <el-form-item
        v-if="currentInfo.has_271_permission"
        prop="_271"
        label="271范围"
      >
        <el-input
          style="width:400px"
          :placeholder="constants.LABEL_SELECT_DIVISION"
          v-model="_271SelectedNames"
          icon="caret-bottom"
          readonly="readonly"
          @click.native.stop="
            showCultureTree = false;
            showPerformanceTree = false;
            show271Tree = !show271Tree;
          "
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button
          round
          size="medium"
          @click="submit('bindForm')"
          type="primary"
          >{{ constants.CONFIRM }}</el-button
        >
        <el-button round size="medium" @click="close" class="btn-reset">
          {{ constants.CANCEL }}
        </el-button>
      </el-row>
    </div>
    <Drawer @close="closeAll" :closeable="false" :maskClosable="true">
      <dp-panel
        v-if="showCultureTree"
        key="showCultureTree"
        :checkedNodes.sync="cultureCheckedNodes"
        :visible.sync="showCultureTree"
        :data="cultureDepartmentTree"
      ></dp-panel>
      <dp-panel
        v-if="showPerformanceTree"
        key="showPerformanceTree"
        :checkedNodes.sync="performanceCheckedNodes"
        :visible.sync="showPerformanceTree"
        :data="performanceDepartmentTree"
      ></dp-panel>
      <dp-panel
        v-if="show271Tree"
        key="show271Tree"
        :checkedNodes.sync="level_271CheckedNodes"
        :visible.sync="show271Tree"
        :data="level_271DepartmentTree"
      ></dp-panel>
    </Drawer>
  </div>
</template>
<script>
import {
  CONFIRM,
  CANCEL,
  CULTURE_SCOPE,
  PERFORMANCE_SCOPE,
  LABEL_SELECT_DIVISION,
  BIND_DEPARTMENT
} from "@/constants/TEXT";
import TreeSelectPanel from "@/components/common/TreeSelectPanel/index.vue";
import { getAccessTree, patchUserScope, getBindInfo } from "@/constants/API";
import Drawer from "vue-simple-drawer";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    currentInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    const cultureTreeValidator = (rule, value, callback) => {
      if (this.cultureCheckedNodes.length == 0) {
        callback("请选择文化管理范围");
      } else {
        callback();
      }
    };
    const performanceTreeValidator = (rule, value, callback) => {
      if (this.performanceCheckedNodes.length == 0) {
        callback("请选择绩效管理范围");
      } else {
        callback();
      }
    };
    const _271TreeValidator = (rule, value, callback) => {
      if (this.level_271CheckedNodes.length == 0) {
        callback("请选择271管理范围");
      } else {
        callback();
      }
    };
    return {
      show271Tree: false,
      level_271CheckedNodes: [],
      level_271DepartmentTree: [],
      // show: true,
      showCultureTree: false,
      cultureCheckedNodes: [],
      showPerformanceTree: false,
      performanceCheckedNodes: [],
      cultureDepartmentTree: [],
      performanceDepartmentTree: [],
      filterText: "",
      constants: {
        CONFIRM,
        CANCEL,
        CULTURE_SCOPE,
        PERFORMANCE_SCOPE,
        LABEL_SELECT_DIVISION,
        BIND_DEPARTMENT
      },
      bindRules: {
        culture: [{ validator: cultureTreeValidator, trigger: "change" }],
        performance: [
          { validator: performanceTreeValidator, trigger: "change" }
        ],
        _271: [{ validator: _271TreeValidator, trigger: "change" }]
      },
      bindForm: {
        culture: "",
        performance: ""
      }
    };
  },
  beforeDestroy() {
    this.$refs["bindForm"].resetFields();
  },
  components: {
    "dp-panel": TreeSelectPanel,
    Drawer
  },
  computed: {
    cultrueSelectedNames() {
      return this.cultureCheckedNodes.map(({ name }) => name).join(", ");
    },
    performanceSelectedNames() {
      return this.performanceCheckedNodes.map(({ name }) => name).join(", ");
    },
    _271SelectedNames() {
      return (this.level_271CheckedNodes || [])
        .map(({ name }) => name)
        .join(", ");
    }
  },
  methods: {
    submit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          const params = {
            culture_department_ids: this.cultureCheckedNodes.map(
              v => v.department_id
            ),
            achievement_department_ids: this.performanceCheckedNodes.map(
              v => v.department_id
            ),
            _271_department_ids: this.level_271CheckedNodes.map(
              v => v.department_id
            )
          };
          // console.log(this.currentInfo)
          patchUserScope(this.currentInfo.id, params)
            .then(res => {
              // console.log(res);
              this.close();
            })
            .catch(e => {});
        }
      });
    },
    close() {
      this.$emit("update:visible", false);
    },
    closeAll() {
      this.show271Tree = false;
      this.showCultureTree = false;
      this.showPerformanceTree = false;
    }
  },
  created() {
    getAccessTree()
      .then(res => {
        const {
          cultureDepartment,
          achievementDepartmentTree,
          _271DepartmentTree
        } = res;
        this.cultureDepartmentTree = cultureDepartment
          ? [cultureDepartment]
          : [];
        this.performanceDepartmentTree = achievementDepartmentTree
          ? [achievementDepartmentTree]
          : [];
        this.level_271DepartmentTree = _271DepartmentTree
          ? [_271DepartmentTree]
          : [];
      })
      .catch(e => {});
    getBindInfo(this.currentInfo.id)
      .then(res => {
        this.cultureCheckedNodes = res.culture_departments;
        this.performanceCheckedNodes = res.achievement_departments;
        this.level_271CheckedNodes = res._271_departments;
      })
      .catch(e => {});
  }
};
</script>

<style lang="scss" scoped>
.bindDPDialog {
  .bindForm {
    max-width: 700px;
    & ::v-deep .el-form-item__label,
    & ::v-deep .el-checkbox__label {
      color: white;
    }
  }
  .title {
    text-align: center;
    font-weight: 700;
    font-size: 18px;
  }
}
</style>
