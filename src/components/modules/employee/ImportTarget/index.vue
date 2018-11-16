<template>
  <el-dialog @close="close" width="500px" :visible="visible" class="dialogImport">
    <div slot="title" class="title">
      导入目标
    </div>
    <import-excel :uploadSuccess="uploadSuccess" :uploadHeader="uploadHeader" :errorData="tableData" :uploadErr="uploadErr" :actionURL="constants.PATH_PERFORMANCE_IMPORT_TARGET($route.params.orgID)" :downloadURL="constants.PATH_PERFORMANCE_EXCEL_TARGET_TPL($route.params.orgID)"></import-excel>
  </el-dialog>
</template>
<script>
import ImportByExcel from "@/components/common/ImportByExcel/index.vue";
import {
  PATH_PERFORMANCE_EXCEL_TARGET_TPL,
  PATH_PERFORMANCE_IMPORT_TARGET
} from "@/constants/URL";
import { UPLOAD_FAIL, UPLOAD_SUCCESS, SUCCESS, ERROR } from "@/constants/TEXT";
// FIXME: api
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
    uploadErr(err, file, fileList) {
      // console.log(err, file, fileList)
      // const errObj = JSON.parse(err.message)
      // this.tableData = errObj.data
      // this.showTable = true
      this.$notify.error({
        title: ERROR,
        message: `${file.name}${UPLOAD_FAIL}`
      });
    },
    uploadSuccess(response, file, fileList) {
      if (
        response &&
        response.data &&
        response.data.errors &&
        response.data.errors.length > 0
      ) {
        this.tableData = response.data.errors.slice();
        this.$notify.error({
          title: ERROR,
          message: `上传内容有部分错误!`
        });
      } else {
        this.tableData = [];
        this.$notify({
          title: SUCCESS,
          message: UPLOAD_SUCCESS,
          type: "success"
        });
        this.$emit("refresh");
        this.close();
      }
    }
  },
  components: {
    "import-excel": ImportByExcel
  },
  data() {
    return {
      constants: {
        PATH_PERFORMANCE_EXCEL_TARGET_TPL,
        PATH_PERFORMANCE_IMPORT_TARGET
      },
      tableData: []
    };
  },
  computed: {
    uploadHeader() {
      return {
        Authorization: `Bearer ${localStorage.getItem("talToken")}`
      };
    }
  },
  beforeDestroy() {
    this.tableData = [];
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
