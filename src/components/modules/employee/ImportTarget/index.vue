<template>
  <el-dialog
    @close="close"
    width="500px"
    :visible="visible"
    class="dialogImport"
    :close-on-click-modal="false"
  >
    <div slot="title" class="title">导入目标</div>
    <import-excel
      :uploadSuccess="uploadSuccess"
      :uploadHeader="uploadHeader"
      :errorData="tableData"
      :uploadErr="uploadErr"
      :actionURL="constants.PATH_IMPORT_SELF_TARGETS($route.params.id)"
      :downloadURL="
        constants.PATH_PERFORMANCE_EXCEL_TARGET_TPL($route.params.orgID, {
          performance_user_id: $route.params.id
        })
      "
    ></import-excel>
  </el-dialog>
</template>
<script>
import ImportByExcel from "@/components/common/ImportByExcel/index.vue";
import {
  PATH_PERFORMANCE_EXCEL_TARGET_TPL,
  PATH_IMPORT_SELF_TARGETS
} from "@/constants/URL";
import { UPLOAD_FAIL, UPLOAD_SUCCESS, SUCCESS, ERROR } from "@/constants/TEXT";
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
        title: ERROR,
        message: msg || `${file.name}${UPLOAD_FAIL}`
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
        PATH_IMPORT_SELF_TARGETS
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
