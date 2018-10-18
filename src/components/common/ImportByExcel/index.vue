<template>
  <div>
    <el-upload :on-success="uploadSuccess" :on-error="uploadErr" class="uploader" :headers="uploadHeader" :data="uploadData" drag :action="actionURL">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">{{constants.DRAG_FILE}}
        <em>{{constants.CLICK_TO_UPLOAD}}</em>
      </div>
      <div class="el-upload__tip" slot="tip">
        <a style="cursor: pointer;" @click="downloadTpl">{{constants.DOWNLOAD_EXCEL_TEMPLATE}}</a>
      </div>
    </el-upload>
    <err-table :errorData="errorData"></err-table>
  </div>
</template>
<script>
import {
  DRAG_FILE,
  CLICK_TO_UPLOAD,
  DOWNLOAD_EXCEL_TEMPLATE
} from "@/constants/TEXT";
import ImportErrTable from "@/components/common/ImportErrTable/index.vue";

export default {
  props: {
    downloadURL: {
      type: String,
      default: ""
    },
    uploadSuccess: {
      type: Function,
      default: () => {}
    },
    uploadErr: {
      type: Function,
      default: () => {}
    },
    actionURL: {
      type: String,
      default: ""
    },
    uploadData: {
      type: Object,
      default: () => ({})
    },
    errorData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showTable: false,
      constants: {
        DRAG_FILE,
        CLICK_TO_UPLOAD,
        DOWNLOAD_EXCEL_TEMPLATE
      }
    };
  },
  computed: {
    uploadHeader() {
      return {
        Authorization: `Bearer ${localStorage.getItem("talToken")}`
      };
    }
  },
  methods: {
    downloadTpl() {
      if (this.downloadURL) {
        window.open(this.downloadURL, "_blank", "noopener");
      }
    }
  },
  components: {
    "err-table": ImportErrTable
  }
};
</script>
<style scoped>
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
