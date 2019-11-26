<template>
  <el-dialog
    class="uploadTargetDialog"
    title="上传工作指标"
    :visible="isUpload"
    @close="close"
    :close-on-click-modal="false"
    width="650px"
  >
    <el-form label-width="150px">
      <el-form-item label="模版下载">
        <el-button type="text"
          ><a
            class="down-load"
            download
            :href="constants.PATH_UPLOAD_TARGET(this.$route.params.uid)"
            >下载</a
          ></el-button
        >
      </el-form-item>
      <el-form-item label="上传文件">
        <el-upload
          class="upload-demo"
          :action="constants.PATH_IMPORT_TARGET(this.$route.params.uid)"
          :on-success="uploadSuccess"
          :on-error="uploadErr"
        >
          <el-button type="text">选择文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="notice">
      请注意：如页面已有工作指标内容，上传将覆盖所有工作指标内容。
    </div>
  </el-dialog>
</template>
<script>
import {
  getTargetTemplate,
  getUniqueTemplate
} from "@/constants/API";
import { PATH_UPLOAD_FILE ,PATH_IMPORT_TARGET,PATH_UPLOAD_TARGET} from "@/constants/URL";
export default {
  props: {
    isUpload: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      constants: {
        PATH_IMPORT_TARGET,
        PATH_UPLOAD_TARGET
      }
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    // 上传指标确认
    cover() {
      getUniqueTemplate({
        performance_id: this.$route.params.id,
        performance_user_id: this.$route.params.uid
      });
      this.close();
    },
    /**
     * 下载模版按钮
     */
    downloadTemplate() {
      getTargetTemplate(this.$route.params.uid)
        .then(res => {
          this.$message.success("下载成功");
        })
        .catch(() => {});
    },
    /**
     * 上传指标成功
     */
    uploadSuccess(response, file, fileList) {
      this.$notify({
        title: SUCCESS,
        message: UPLOAD_SUCCESS,
        type: "success"
      });
      this.$emit("update");
    },
    uploadErr(err, file, fileList) {
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
.uploadTargetDialog .notice {
  color: #ff8519;
}
.uploadTargetDialog .down-load {
  color: #52ddab;
  text-decoration: none;
}
</style>
