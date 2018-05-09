<template>
  <el-dialog @close="close" width="500px" :visible="dialogImport" class="dialogImport">
    <div slot="title" class="title">
      {{constants.IMPORT_RECORDS}}
    </div>
    <div class="importTab">
      <el-tabs v-model="importTab">
        <el-tab-pane :label="constants.EHR_IMPORT" name="first">
          <el-form label-width="80px" :rules="importRules" ref="importForm" :model="importForm" class="importForm">
            <el-form-item :label="constants.WORK_LEVEL" prop="levels">
              <el-checkbox-group v-model="importForm.levels">
                <el-checkbox v-for="v of constants.ENUM_LEVELS" :key="v.key" :label="v.value" name="levels"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane :label="constants.EXCEL_IMPORT" name="second">
          <el-upload class="uploader" drag action="https://jsonplaceholder.typicode.com/posts/">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">{{constants.DRAG_FILE}}
              <em>{{constants.CLICK_TO_UPLOAD}}</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              <a href="https://www.baidu.com">{{constants.DOWNLOAD_EXCEL_TEMPLATE}}</a>
            </div>
          </el-upload>
        </el-tab-pane>
      </el-tabs>
      <span class="tips">
        {{constants.IMPORT_TIPS}}
      </span>
    </div>

    <div v-if="importTab==='first'" slot="footer" class="dialog-footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" type="primary" @click="importFiles('importForm')">{{constants.CONFIRM}}</el-button>
        <el-button round size="medium" @click="close" class="btn-reset">{{constants.CANCEL}}</el-button>
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
  DRAG_FILE,
  CLICK_TO_UPLOAD,
  DOWNLOAD_EXCEL_TEMPLATE,
  CONFIRM,
  CANCEL,
  IMPORT_SUCCESS
} from "@/constants/TEXT";
import { postEHR } from "@/constants/API";
export default {
  props: {
    dialogImport: {
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
            message: "请至少选择一个活动性质",
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
        DRAG_FILE,
        CLICK_TO_UPLOAD,
        DOWNLOAD_EXCEL_TEMPLATE,
        CONFIRM,
        CANCEL
      }
    };
  },
  methods: {
    initImportLevels() {
      this.importForm.levels = ENUM_LEVELS.filter(
        v => parseFloat(v.value) > 3.0
      ).map(v => v.value);
    },
    // 导入操作提交
    importFiles(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!")
          // console.log(this.$route.params.orgID)
          const postData = {
            evaluation_id: this.$route.params.id,
            department_id: this.$route.params.orgID,
            "levels[]": this.importForm.levels
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
            .catch(e => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    close() {
      this.$emit("close");
    }
  },
  created() {
    this.initImportLevels();
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
</style>
