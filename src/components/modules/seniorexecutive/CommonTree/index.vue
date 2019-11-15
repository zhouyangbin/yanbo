<template>
  <el-tree
    class="select-tree"
    empty-text="努力加载中..."
    @check-change="treeChange"
    :props="defaultProps"
    :default-checked-keys="department_ids"
    node-key="id"
    ref="tree"
    :filter-node-method="filterNode"
    show-checkbox
    :data="orgTree"
  ></el-tree>
</template>
<script>
export default {
  props: {
    orgTree: {
      type: Array,
      default: () => []
    },
    department_ids: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      defaultProps: {
        label: "name",
        children: "children"
      }
    };
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    treeChange(data, checked, indeterminate) {
      let ids = this.$refs.tree.getCheckedNodes();
      ids = ids.map(v => v.id);
      this.$emit("selectedIds", ids);
    }
  },
  created() {}
};
</script>
<style scoped>
.select-tree {
  max-height: 260px;
  overflow: auto;
}
</style>
