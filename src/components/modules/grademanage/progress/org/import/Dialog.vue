<template>
  <el-dialog
    @close="close"
    width="500px"
    :visible="dialogImport"
    :close-on-click-modal="false"
    class="dialogImport"
  >
    <div slot="title" class="title">{{ constants.IMPORT_RECORDS }}</div>
    <div class="importTab">
      <el-tabs v-model="importTab">
        <el-tab-pane :label="constants.EHR_IMPORT" name="first">
          <el-form
            label-width="80px"
            :rules="importRules"
            ref="importForm"
            :model="importForm"
            class="importForm"
          >
            <el-form-item :label="constants.WORK_LEVEL" prop="levels">
              <el-checkbox-group v-model="importForm.levels">
                <el-checkbox
                  v-for="v of levels"
                  :key="v.key"
                  :label="v.value"
                  name="levels"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
          <err-table :errorData="eHRError"></err-table>
        </el-tab-pane>
        <el-tab-pane :label="constants.EXCEL_IMPORT" name="second">
          <import-excel
            :uploadSuccess="uploadSuccess"
            :uploadErr="uploadErr"
            :errorData="tableData"
            :uploadHeader="uploadHeader"
            :uploadData="uploadData"
            :actionURL="constants.PATH_IMPORT_BY_EXCEL"
            :downloadURL="constants.PATH_EXCEL_TPL"
          ></import-excel>
        </el-tab-pane>
      </el-tabs>
      <span class="tips">{{ constants.IMPORT_TIPS }}</span>
    </div>
    <div v-if="importTab === 'first'" slot="footer" class="dialog-footer">
      <el-row type="flex" justify="center">
        <el-button
          round
          size="medium"
          type="primary"
          @click="importFiles('importForm')"
          >{{ constants.CONFIRM }}</el-button
        >
        <el-button round size="medium" @click="close" class="btn-reset">
          {{ constants.CANCEL }}
        </el-button>
      </el-row>
    </div>
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
import { postEHR } from "@/constants/API";
import { PATH_IMPORT_BY_EXCEL, PATH_EXCEL_TPL } from "@/constants/URL";

import ImportByExcel from "@/components/common/ImportByExcel/index.vue";
import ImportErrTable from "@/components/common/ImportErrTable/index.vue";

export default {
  props: {
    dialogImport: {
      type: Boolean,
      default: false
    },
    isManagerGrade: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      importTab: "first",
      importForm: {
        levels: []
      },
      importRules: {
        levels: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个级别",
            trigger: "change"
          }
        ]
      },
      constants: {
        IMPORT_TIPS,
        IMPORT_RECORDS,
        EHR_IMPORT,
        WORK_LEVEL,
        ENUM_LEVELS,
        EXCEL_IMPORT,
        CONFIRM,
        CANCEL,
        PATH_IMPORT_BY_EXCEL,
        PATH_EXCEL_TPL
      },
      tableData: [],
      showTable: false,
      eHRError: [],
      showTableEHR: false
    };
  },
  methods: {
    initImportLevels() {
      if (!this.isManagerGrade) {
        this.importForm.levels = ENUM_LEVELS.filter(
          v => parseFloat(v.value) <= 3.3
        ).map(v => v.value);
        return;
      }
      this.importForm.levels = ENUM_LEVELS.map(v => v.value);
    },
    // 导入操作提交
    importFiles(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!")
          // console.log(this.$route.params.orgID)
          const postData = {
            evaluation_id: this.$route.params.orgID,
            // department_id: this.$route.params.orgID,
            levels: this.importForm.levels
          };
          // console.log(postData)
          postEHR(postData)
            .then(res => {
              this.$message({
                message: IMPORT_SUCCESS,
                type: "success"
              });
              this.close();
            })
            .catch(e => {
              if (e.data.data) {
                this.eHRError = e.data.data;
              } else {
                this.eHRError = [];
              }
              this.showTableEHR = true;
            });
        } else {
          // console.log("error submit!!")
          return false;
        }
      });
    },
    close() {
      this.$emit("close");
    },
    uploadErr(err, file, fileList) {
      // console.log(err, file, fileList)
      const errObj = JSON.parse(err.message);
      this.tableData = errObj.data;
      this.showTable = true;
      this.$notify.error({
        title: ERROR,
        message: `${file.name}${UPLOAD_FAIL}: ${errObj.message}`
      });
    },
    uploadSuccess(response, file, fileList) {
      this.$notify({
        title: SUCCESS,
        message: UPLOAD_SUCCESS,
        type: "success"
      });
      this.close();
    }
  },
  computed: {
    uploadData() {
      return {
        evaluation_id: this.$route.params.orgID
      };
    },
    uploadHeader() {
      return {
        Authorization: `Bearer ${localStorage.getItem("talToken")}`
      };
    },
    levels() {
      return this.isManagerGrade
        ? this.constants.ENUM_LEVELS
        : this.constants.ENUM_LEVELS.filter(v => v.value <= 3.3);
    }
  },
  created() {
    this.initImportLevels();
  },
  components: {
    "import-excel": ImportByExcel,
    "err-table": ImportErrTable
  }
};
</script>
<style scoped>
.importForm >>> .el-checkbox {
  margin-left: 30px;
}
.dialogImport .title {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}
.dialogImport >>> .el-dialog {
  padding: 20px 40px;
}
.importTab {
  position: relative;
}
.importTab .tips {
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
