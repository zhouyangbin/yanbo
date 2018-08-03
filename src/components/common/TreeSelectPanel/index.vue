<template>
  <transition @before-leave="beforeLeave" @after-enter="afterEnter" name="fade">
    <div v-click-outside="outside" class="objectTree-container" v-if="visible">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText">
      </el-input>
      <el-tree @check-change="treeChange" :props="defaultProps" :default-checked-keys="checkedKeys" node-key="department_id" ref="tree" :filter-node-method="filterNode" show-checkbox empty-text="暂无数据" :data="data">
      </el-tree>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    checkedNodes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      defaultProps: { label: "name" },
      filterText: ""
    };
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    afterEnter(el) {
      el.style.width = "30%";
    },
    beforeLeave(el) {
      el.style.width = "0px";
      el.style.padding = "0px";
    },
    treeChange() {
      const nodes = this.$refs.tree.getCheckedNodes();
      console.log(nodes);
      this.$emit(
        "update:checkedNodes",
        nodes.map(({ name, department_id }) => ({ name, department_id }))
      );
    },
    outside() {
      this.$emit("update:visible", false);
    }
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
  directives: {
    "click-outside": {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== "function") {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression '${
            binding.expression
          }' is not a function, but has to be`;
          if (compName) {
            warn += `Found in component '${compName}'`;
          }

          console.warn(warn);
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble;
        const handler = e => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;

        // add Event Listeners
        document.addEventListener("click", handler);
      },

      unbind: function(el, binding) {
        // Remove Event Listeners
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  }
};
</script>
<style scoped>
.objectTree-container {
  position: fixed;
  overflow: auto;
  right: 0;
  top: 0;
  z-index: 100;
  background: rgba(242, 247, 249, 0.9);
  padding: 60px 20px 20px 20px;
  height: 100%;
  box-sizing: border-box;
  transition: all 1s;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
  width: 30%;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  width: 0;
}
</style>
