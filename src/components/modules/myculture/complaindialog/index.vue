
<template>
  <el-dialog title="申诉" :show-close="false" :visible="visible" width="30%">
    <el-input type="textarea" :maxlength="1000" :rows="2" placeholder="请输入申诉理由" v-model="reason">
    </el-input>
    <span slot="footer">
      <el-button @click="$emit('update:visible',false)">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    submit: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    reason: {
      get: function() {
        return this.value;
      },
      set: function(v) {
        this.$emit("input", v);
      }
    }
  },
  beforeDestroy() {
    this.$emit("input", "");
  }
};
</script>
<style scoped>
</style>
