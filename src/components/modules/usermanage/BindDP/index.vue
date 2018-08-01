<template>
  <el-dialog @close="$emit('update:visible',false)" width="650px" :visible="visible" class="bindDPDialog">
    <div slot="title" class="title">
      {{constants.MODIFY}}
    </div>
    <div>
    </div>
    <el-form :inline="true" :rules="bindRules" ref="bindForm" :model="bindForm" class="bindForm">
      <el-form-item prop="culture" label="文化范围">
        <el-input style="width:400px" placeholder="请选择事业部" v-model="cultrueSelectedNames" icon="caret-bottom" readonly="readonly" @click.native="showCultureTree = !showCultureTree">
        </el-input>
      </el-form-item>
      <el-form-item prop="performance" label="绩效范围">
        <el-input style="width:400px" placeholder="请选择事业部" v-model="performanceSelectedNames" icon="caret-bottom" readonly="readonly" @click.native="showPerformanceTree = !showPerformanceTree">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="submit('bindForm')" type="primary">{{constants.CONFIRM}}</el-button>
        <el-button round size="medium" @click="$emit('update:visible',false)" class="btn-reset">{{constants.CANCEL}}</el-button>
      </el-row>
    </div>
    <dp-panel :checkedNodes.sync="cultureCheckedNodes" :visible.sync="showCultureTree" :data="data"></dp-panel>
    <dp-panel :checkedNodes.sync="performanceCheckedNodes" :visible.sync="showPerformanceTree" :data="data"></dp-panel>
  </el-dialog>
</template>
<script>
import { MODIFY, CONFIRM, CANCEL } from "@/constants/TEXT";
import TreeSelectPanel from "@/components/common/TreeSelectPanel/index.vue";
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
      filterText: "",
      constants: {
        MODIFY,
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
      },
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ]
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
      return this.cultureCheckedNodes.map(({ label }) => label).join(", ");
    },
    performanceSelectedNames() {
      return this.performanceCheckedNodes.map(({ label }) => label).join(", ");
    }
  },
  methods: {
    submit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          // TODO: ajax to update bind
          console.log("object");
        }
      });
    }
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
