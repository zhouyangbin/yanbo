<template>
  <el-dialog @close="close" width="650px" :visible="visible" class="bindDPDialog">
    <div slot="title" class="title">
      绑定事业部
    </div>
    <div>
    </div>
    <el-form :inline="true" :rules="bindRules" ref="bindForm" :model="bindForm" class="bindForm">
      <el-form-item v-if="currentInfo.has_culture_permission" prop="culture" label="文化范围">
        <el-input style="width:400px" placeholder="请选择事业部" v-model="cultrueSelectedNames" icon="caret-bottom" readonly="readonly" @click.native="showPerformanceTree=false;showCultureTree = !showCultureTree">
        </el-input>
      </el-form-item>
      <el-form-item v-if="currentInfo.has_achievement_permission" prop="performance" label="绩效范围">
        <el-input style="width:400px" placeholder="请选择事业部" v-model="performanceSelectedNames" icon="caret-bottom" readonly="readonly" @click.native="showCultureTree=false;showPerformanceTree = !showPerformanceTree">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="submit('bindForm')" type="primary">{{constants.CONFIRM}}</el-button>
        <el-button round size="medium" @click="close" class="btn-reset">{{constants.CANCEL}}</el-button>
      </el-row>
    </div>
    <dp-panel v-if="showCultureTree" key="showCultureTree" :checkedNodes.sync="cultureCheckedNodes" :visible.sync="showCultureTree" :data="cultureDepartmentTree"></dp-panel>
    <dp-panel v-if="showPerformanceTree" key="showPerformanceTree" :checkedNodes.sync="performanceCheckedNodes" :visible.sync="showPerformanceTree" :data="performanceDepartmentTree"></dp-panel>
  </el-dialog>
</template>
<script>
import { CONFIRM, CANCEL } from "@/constants/TEXT";
import TreeSelectPanel from "@/components/common/TreeSelectPanel/index.vue";
import { getAccessTree, patchUserScope, getBindInfo } from "@/constants/API";

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
    return {
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
        CANCEL
      },
      bindRules: {
        culture: [{ validator: cultureTreeValidator, trigger: "change" }],
        performance: [
          { validator: performanceTreeValidator, trigger: "change" }
        ]
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
    "dp-panel": TreeSelectPanel
  },
  computed: {
    cultrueSelectedNames() {
      return this.cultureCheckedNodes.map(({ name }) => name).join(", ");
    },
    performanceSelectedNames() {
      return this.performanceCheckedNodes.map(({ name }) => name).join(", ");
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
    }
  },
  created() {
    getAccessTree()
      .then(res => {
        const { cultureDepartment, achievementDepartmentTree } = res;
        this.cultureDepartmentTree = cultureDepartment
          ? [cultureDepartment]
          : [];
        this.performanceDepartmentTree = achievementDepartmentTree
          ? [achievementDepartmentTree]
          : [];
      })
      .catch(e => {});
    getBindInfo(this.currentInfo.id)
      .then(res => {
        this.cultureCheckedNodes = res.culture_departments;
        this.performanceCheckedNodes = res.achievement_departments;
      })
      .catch(e => {});
  }
};
</script>
<style scoped>
.bindDPDialog .title {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}
</style>
