<template>
  <div>
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
    <el-tree
      empty-text="努力加载中..."
      @check-change="treeChange"
      :props="defaultProps"
      :default-checked-keys="checkedKeys"
      node-key="id"
      ref="tree"
      :filter-node-method="filterNode"
      show-checkbox
      :data="treeOps"
    ></el-tree>
  </div>
</template>
<script>
const debounce = require("lodash.debounce");

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    //所有组织架构树
    data: {
      type: Array,
      default: () => []
    },
    // 目前已选中节点
    checkedNodes: {
      type: Array,
      default: () => []
    },
    exclusive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultProps: { label: "name" },
      filterText: "",
      tree: this.data
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
    treeChange: debounce(function(data, checked, indeterminate) {
      const nodes = this.$refs.tree.getCheckedNodes();
      if (this.exclusive) {
        if (checked) {
          const rootID = this.findRoot(data.id).id;
          // console.log(rootID)
          this.disabledOtherBranch(rootID);
        }

        if (nodes.length == 0) {
          this.enableAll();
        }
      }

      // console.log(nodes)
      this.$emit(
        "update:checkedNodes",
        nodes.map(({ name, id }) => ({ name, department_id: id }))
      );
    }, 500),
    findRoot(id) {
      // console.log("find id", id)
      let currentRoot = {};
      for (let index = 0; index < this.data.length; index++) {
        currentRoot = this.data[index];
        // console.log("currentRoot", currentRoot)
        if (this.findNode(id, this.data[index])) {
          return currentRoot;
        }
      }
    },
    findNode(id, node) {
      if (node.id == id) {
        return true;
      }
      const children = node.children;
      if (children && children.length > 0) {
        for (let index = 0; index < children.length; index++) {
          if (this.findNode(id, children[index])) {
            return true;
          }
        }
      }
      return false;
    },
    disabledOtherBranch(id) {
      let tree = this.tree;
      for (let index = 0; index < tree.length; index++) {
        if (tree[index].id == id) {
          // console.log(id, tree[index], "will continue")
          continue;
        }
        tree[index] = this.disableNode(tree[index], true);
        this.$set(tree, index, { ...tree[index] });
      }
      // this.$emit("update:data", tree)
      // this.tree = tree.slice()

      // this.$forceUpdate()
    },
    disableNode(node, disabled) {
      node.disabled = disabled;
      const children = node.children;
      if (children && children.length > 0) {
        node.children = children.map(c => {
          return this.disableNode(c, disabled);
        });
      }
      return node;
    },
    enableAll() {
      let tree = this.tree;
      for (let index = 0; index < tree.length; index++) {
        tree[index] = this.disableNode(tree[index], false);
        this.$set(tree, index, { ...tree[index] });
      }
      // this.da = tree
      // this.$emit("update:data", tree)
      // this.$forceUpdate()
    },
    outside() {
      this.$emit("update:visible", false);
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
    data(v) {
      this.tree = v;
    }
  },
  computed: {
    checkedKeys() {
      return this.checkedNodes.map(({ department_id }) => department_id);
    },
    treeOps() {
      return this.tree || this.data;
    }
  },
  directives: {
    "click-outside": {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
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
