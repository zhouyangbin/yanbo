<template>
    <el-dialog @close="close" width="500px" :visible="visible" class="dialogImport">
        <div slot="title" class="title">
            导入目标
        </div>
        <import-excel></import-excel>
    </el-dialog>
</template>
<script>
import ImportByExcel from "@/components/common/ImportByExcel/index.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  components: {
    "import-excel": ImportByExcel
  }
};
</script>
<style scoped>
.dialogImport .title {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}
.dialogImport >>> .el-dialog {
  padding: 20px 40px;
}
</style>
