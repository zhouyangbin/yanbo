<template>
  <div class="index-header">
    <div class="header-title">{{ userInfo.performance_name }}</div>
    <img class="stage-img" :src="stageImg(userInfo.stage)" alt="" />
    <el-row class="flex">
      <el-row class="grow">
        <el-row
          class="superior-idea flex"
          v-if="isShowUpload && userInfo.opinion && userInfo.stage === 0"
        >
          <el-col style="width: 80px;"
            >{{ constants.SUPERIOR_OPINION }}：</el-col
          >
          <el-tooltip placement="top">
            <div slot="content">{{ userInfo.opinion }}</div>
            <el-col class="idea-detail">
              {{ userInfo.opinion }}
            </el-col>
          </el-tooltip>
          <!-- <el-col class="idea-detail">{{ userInfo.opinion }}</el-col> -->
        </el-row>
        <el-row class="user-info flex">
          <img
            v-if="userInfo.avatar"
            class="img"
            :src="userInfo.avatar"
            alt=""
          />
          <div class="img avatar-name" v-else>
            {{ userInfo.name | filterName }}
          </div>
          <el-col>
            <el-row class="user-name">
              <span>{{ userInfo.name }}</span>
              <el-divider direction="vertical"></el-divider>
              <span>{{ userInfo.workcode }}</span>
            </el-row>
            <el-row class="flex">
              <el-col class="super">
                <el-row class="other-info-title">{{
                  constants.IMMEDIATE_SUPERIOR
                }}</el-row>
                <el-row
                  >{{ userInfo.superior_name }}({{
                    userInfo.superior_workcode
                  }})</el-row
                >
              </el-col>
              <el-col class="department">
                <el-row class="other-info-title">{{
                  constants.LABEL_DEPARTMENT
                }}</el-row>
                <el-row>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    :content="userInfo.department_name"
                    placement="top"
                  >
                    <div class="text-over">{{ userInfo.department_name }}</div>
                  </el-tooltip>
                </el-row>
              </el-col>
              <el-col class="cycle">
                <el-row class="other-info-title">{{
                  constants.ASSESS_CYCLE
                }}</el-row>
                <el-row>{{ userInfo.cycle }}</el-row>
              </el-col>
              <el-col class="deadline">
                <el-row class="other-info-title">{{
                  constants.SET_TARGET_DEADLINE
                }}</el-row>
                <el-row>{{ userInfo.indicator_setting_end_time }}</el-row>
              </el-col>
            </el-row>
            <el-row class="tip-info">{{
              constants.ERROR_MESSAGE_CONTACT_USER
            }}</el-row>
          </el-col>
        </el-row>
      </el-row>
      <el-row
        class="upload-target"
        v-if="(userInfo.stage === 0 || userInfo.stage === 20) && isShowUpload"
      >
        <el-button icon="el-icon-upload2" class="btn" @click="uploadTarget">{{
          constants.SENIOR_UPLOAD_TARGET
        }}</el-button>
      </el-row>
    </el-row>
    <common-upload
      v-if="isUpload"
      :visible="isUpload"
      :uploadTitle="uploadTitle"
      :uploadActionUrl="uploadActionUrl"
      :downloadUrl="downloadUrl"
      @close="closeUploadDialog"
      @update="confirmUpload"
    >
    </common-upload>
  </div>
</template>
<script>
import {
  SUPERIOR_OPINION,
  IMMEDIATE_SUPERIOR,
  LABEL_DEPARTMENT,
  ASSESS_CYCLE,
  SET_TARGET_DEADLINE,
  ERROR_MESSAGE_CONTACT_USER,
  SENIOR_UPLOAD_TARGET
} from "@/constants/TEXT";
import { AsyncComp } from "@/utils/asyncCom";
import {
  PATH_EXECUTIVE_UPLOAD_TARGET,
  PATH_EXECUTIVE_IMPORT_TARGET
} from "@/constants/URL";
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => ({})
    },
    isShowUpload: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      constants: {
        SUPERIOR_OPINION,
        IMMEDIATE_SUPERIOR,
        LABEL_DEPARTMENT,
        ASSESS_CYCLE,
        SET_TARGET_DEADLINE,
        ERROR_MESSAGE_CONTACT_USER,
        SENIOR_UPLOAD_TARGET,
        PATH_EXECUTIVE_UPLOAD_TARGET,
        PATH_EXECUTIVE_IMPORT_TARGET
      },
      isUpload: false,
      uploadActionUrl: "",
      downloadUrl: "",
      uploadTitle: "",
      performanceId: this.$route.params.id,
      userId: this.$route.params.uid
    };
  },
  filters: {
    filterName(val) {
      let name = val.substr(val.length - 2, 2);
      return name;
    }
  },
  components: {
    "common-upload": AsyncComp(
      import("@/components/modules/seniorexecutive/CommonUpload/index.vue")
    )
  },
  methods: {
    /**
     * 根据不同的状态，加载不同的图片，如1 => 指标填写中
     * @param stage 状态
     */
    stageImg(stage) {
      let src = "";
      switch (stage) {
        case 0:
          src = require("@/assets/img/target_writing.png");
          break;
        case 10:
          src = require("@/assets/img/target_affirming.png");
          break;
        case 20:
          src = require("@/assets/img/target_affirmed.png");
          break;
        default:
          src = "";
          break;
      }
      return src;
    },
    uploadTarget() {
      this.isUpload = true;
      this.uploadTitle = "指标";
    },
    closeUploadDialog() {
      this.isUpload = false;
    },
    confirmUpload(data) {
      this.isUpload = false;
      this.$emit("update", data);
    }
  },
  created() {
    this.uploadActionUrl = this.constants.PATH_EXECUTIVE_UPLOAD_TARGET(
      this.userId
    );
    this.downloadUrl = this.constants.PATH_EXECUTIVE_IMPORT_TARGET(
      this.performanceId,
      parseInt(this.userId)
    );
  }
};
</script>
<style lang="scss" scoped>
.index-header {
  position: relative;
  padding: 0 30px 20px 30px;
  margin-bottom: 20px;
  background-color: #ffffff;
  .header-title {
    height: 30px;
    padding: 24px 0;
    text-align: center;
    color: #303133;
    font-size: 22px;
    font-weight: 500;
    word-wrap: break-word;
    word-break: break-all;
  }
  .stage-img {
    position: absolute;
    right: 60px;
    top: 10px;
    width: 130px;
  }
}
</style>
<style scoped>
.index-header .superior-idea {
  color: #eb0c00;
  margin-bottom: 20px;
}
.idea-detail {
  word-wrap: break-word;
  word-break: break-all;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.index-header .text-over {
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.index-header .flex {
  display: flex;
}
.index-header .grow {
  flex-grow: 1;
}
.index-header .user-info .img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}
.index-header .user-info .avatar-name {
  line-height: 60px;
  text-align: center;
  background-color: rgb(2, 137, 255);
  color: #ffffff;
  font-weight: bold;
}
.index-header .user-info .user-name {
  font-size: 16px;
  color: #303133;
  font-weight: 500;
}
.index-header .user-info .other-info-title {
  color: #909399;
  margin-top: 10px;
  margin-bottom: 5px;
}
.index-header .user-info .super {
  flex-grow: 1;
}
.index-header .user-info .department {
  flex-grow: 2;
  overflow: hidden;
}
.index-header .user-info .cycle {
  flex-grow: 1;
}
.index-header .user-info .deadline {
  width: 480px;
}
.index-header .upload-target {
  width: 120px;
  position: relative;
  margin-left: 150px;
}
.index-header .upload-target .btn {
  position: absolute;
  right: 0;
  bottom: 26px;
}
.index-header .user-info .tip-info {
  margin-top: 8px;
  color: #ff8519;
}
</style>
