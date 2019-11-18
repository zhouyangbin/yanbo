<template>
  <el-dialog
    class="common-upload"
    title="上传工作指标"
    :visible="visible"
    @close="close"
    :close-on-click-modal="false"
    width="650px"
  >
    <el-form label-width="150px">
      <el-form-item label="模版下载">
        <el-button type="text" @click="downloadTemplate">下载</el-button>
      </el-form-item>
      <el-form-item label="上传文件">
        <el-upload
          class="upload-demo"
          :action="actionUrl"
          :headers="uploadHeader"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          @before-upload="beforeUpload"
        >
          <el-button type="text">选择文件</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="提示信息"></el-form-item>
    </el-form>
    <div class="notice">
      请注意：如页面已有工作指标内容，上传将覆盖所有工作指标内容。
    </div>
    <div slot="footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import {
  getFinancialIndicators,
  postUploadFinancialIndicators
} from "@/constants/API";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      actionUrl: ""
    };
  },
  created() {
    console.log(this.$route.params.uid);
  },
  computed: {
    uploadHeader() {
      return {
        Authorization: `Bearer ${localStorage.getItem("talToken")}`
      };
    }
  },
  methods: {
    close() {
      this.$emit("close");
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
      //TODO 待修改
      if (
        response &&
        response.data &&
        response.data.errors &&
        response.data.errors.length > 0
      ) {
        this.$notify.error({
          title: ERROR,
          message: `上传内容有部分错误!`
        });
      } else {
        this.$notify({
          title: SUCCESS,
          message: UPLOAD_SUCCESS,
          type: "success"
        });
      }
      console.log(response, file, fileList);
    },
    /**
     * 上传指标失败
     */
    uploadError(err, file, fileList) {
      // TODO 待修改
      const errObj = JSON.parse(err.message);
      // this.tableData = errObj.data
      // this.showTable = true
      let msg;
      if (errObj.status == 435 && errObj.data && errObj.data.errors) {
        msg = errObj.data.errors[Object.keys(errObj.data.errors)[0]].join("/");
      } else {
        msg = errObj.message;
      }
      this.$notify.error({
        title: "ERROR",
        message: msg || `${file.name}${UPLOAD_FAIL}`
      });
    },
    beforeUpload(file) {
      console.log(file);
    }
  }
};
</script>
<style scoped>
.uploadTargetDialog .notice {
  color: #ff8519;
}
</style>
