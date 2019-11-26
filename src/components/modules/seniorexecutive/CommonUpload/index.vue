<template>
  <el-dialog
    class="common-upload"
    :visible="visible"
    @close="close"
    :close-on-click-modal="false"
    width="650px"
  >
    <div slot="title" class="title">上传{{ uploadTitle }}</div>
    <el-form label-width="80px">
      <el-form-item label="模版下载">
        <el-button type="text"
          ><a class="down-load" download :href="downloadUrl">下载</a></el-button
        >
      </el-form-item>
      <el-form-item label="上传文件">
        <el-upload
          class="upload-demo"
          :action="uploadActionUrl"
          :on-success="uploadSuccess"
          :on-error="uploadError"
        >
          <el-button type="text">选择文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="notice">
      请注意：如页面已有{{ uploadTitle }}内容，上传将覆盖所有{{
        uploadTitle
      }}内容。
    </div>
  </el-dialog>
</template>
<script>
import { UPLOAD_FAIL } from "@/constants/TEXT";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    uploadTitle: {
      type: String,
      default: ""
    },
    uploadActionUrl: {
      type: String,
      default: ""
    },
    downloadUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
    uploadSuccess(response, file, fileList) {
      this.$notify({
        title: SUCCESS,
        message: UPLOAD_SUCCESS,
        type: "success"
      });
    },
    uploadError(err, file, fileList) {
      const errObj = JSON.parse(err.message);
      this.tableData = errObj.data;
      this.showTable = true;
      this.$notify.error({
        title: ERROR,
        message: `${file.name}${UPLOAD_FAIL}: ${errObj.message}`
      });
    }
  }
};
</script>
<style scoped>
.common-upload >>> .el-dialog__header {
  border-bottom: 1px solid #e4e7ed;
}
.common-upload .down-load {
  color: #52ddab;
  text-decoration: none;
}
</style>
