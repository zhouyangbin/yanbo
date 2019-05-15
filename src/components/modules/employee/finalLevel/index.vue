<template>
  <el-row type="flex" justify="end" class="level-section">
    <el-col :span="4">
      <span>
        结果/
      </span>
      <span v-if="readOnly" class="level">{{ value }}</span>
      <el-select v-model="innerLevel" v-else placeholder="请选择">
        <el-option
          v-for="item in levels"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      levels: ["S", "A", "B", "C", "D"]
    };
  },
  computed: {
    innerLevel: {
      get: function() {
        return this.value;
      },
      set: function(v) {
        this.$emit("input", v);
      }
    }
  }
};
</script>
<style scoped>
.level-section {
  font-size: 18px;
  color: #6c7a92;
}
.level-section .level {
  font-size: 26px;
  color: orange;
}
</style>
