<template>
  <el-dialog
    @close="close"
    width="650px"
    :visible="visible"
    :close-on-click-modal="false"
    class="import-list"
  >
    <div slot="title" class="title">导入名单</div>
    <el-tabs type="card" v-model="activeName">
      <el-tab-pane label="从EHR读取" name="first">
        <el-form label-width="80px">
          <el-form-item label="是否高管">
            <el-switch v-model="is_executive"></el-switch>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="上传文件" name="second">
        <el-form label-width="80px">
          <el-form-item label="模版下载">
            <el-button type="text"
              ><a class="down-load" download :href="importTplUrl"
                >下载</a
              ></el-button
            >
          </el-form-item>
          <el-form-item label="上传文件">
            <el-upload
              class="upload-demo"
              :action="uploadTplUrl"
              :on-success="uploadSuccess"
              :on-error="uploadError"
            >
              <el-button type="text">选择文件</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <span slot="footer" v-if="activeName === 'first'" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button @click="confirmBtn" type="primary">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import {
  IMPORT_TIPS,
  IMPORT_RECORDS,
  EHR_IMPORT,
  WORK_LEVEL,
  ENUM_LEVELS,
  EXCEL_IMPORT,
  CONFIRM,
  CANCEL,
  IMPORT_SUCCESS,
  SUCCESS,
  ERROR,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL
} from "@/constants/TEXT";
import { postExecutiveImportFromEHR } from "@/constants/API";
import { PATH_IMPORT_BY_EXCEL, PATH_EXCEL_TPL } from "@/constants/URL";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    uploadTplUrl: {
      type: String,
      default: ""
    },
    importTplUrl: {
      type: String,
      default: ""
    },
    performanceId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      activeName: "first",
      is_executive: false
    };
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
      this.$emit("update");
      this.close();
    },
    uploadError(err, file, fileList) {
      const errObj = JSON.parse(err.message);
      this.tableData = errObj.data;
      this.showTable = true;
      this.$notify.error({
        title: ERROR,
        message: `${file.name}${UPLOAD_FAIL}: ${errObj.message}`
      });
    },
    confirmBtn() {
      let data = {
        is_executive: this.is_executive ? 1 : 0
      };
      postExecutiveImportFromEHR(this.performanceId, data)
        .then(res => {
          this.$emit("update");
        })
        .catch(e => {});
    }
  }
};
</script>
<style scoped>
.import-list >>> .el-dialog__header {
  border-bottom: 1px solid #e4e7ed;
}
.import-list >>> .el-dialog__body {
  padding: 8px 0;
}
.import-list .down-load {
  color: #52ddab;
  text-decoration: none;
}
.import-list .title {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}
.import-list >>> .el-dialog {
  padding: 20px 40px;
}
.import-tab {
  position: relative;
}
.import-tab .tips {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: grey;
}
.el-upload__tip >>> a {
  color: #1e90ff;
  text-decoration: none;
}
.el-upload__tip {
  text-align: center;
  font-size: 14px;
}
.uploader {
  margin-top: 10px;
}
.err-table >>> .cell {
  font-size: 12px;
}
</style>
