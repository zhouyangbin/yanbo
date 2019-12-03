<template>
  <div class="target-detail-header">
    <el-row class="title">{{ userInfo.performance_name }}</el-row>
    <img class="status" :src="stageImg(userInfo.stage)" alt="" />
    <el-row class="flex">
      <el-row class="grow">
        <el-row
          class="superior-idea flex"
          v-if="userInfo.opinion && (userInfo.stage === 1) & self"
        >
          <el-col style="width: 80px;"
            >{{ constants.SUPERIOR_OPINION }}：</el-col
          >
          <el-col>{{ userInfo.opinion }}</el-col>
        </el-row>
        <el-row class="user-info flex">
          <img
            v-if="userInfo.avatar"
            class="img"
            :src="userInfo.avatar"
            alt=""
          />
          <div class="img avatar-name" v-else>
            {{ userInfo.name.substr(userInfo.name.length - 1, 1) }}
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
            <el-row class="linkman">{{
              constants.ERROR_MESSAGE_CONTACT_USER
            }}</el-row>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="upload-target" v-if="userInfo.stage == 0">
        <el-button
          icon="el-icon-upload2"
          class="btn"
          @click="uploadTarget"
          v-if="userInfo.current_user_identity == undefined"
          >{{ constants.SENIOR_UPLOAD_TARGET }}</el-button
        >
      </el-row>
      <el-row class="upload-target" v-else> </el-row>
    </el-row>
    <upload-target
      :is-upload="isUpload"
      @close="closeUploadDialog"
    ></upload-target>
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
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => ({})
    },
    self: {
      type: Boolean,
      default: true
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
        SENIOR_UPLOAD_TARGET
      },
      isUpload: false
    };
  },
  components: {
    "upload-target": () =>
      import("@/components/modules/employee/uploadTarget/index")
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
    },
    closeUploadDialog() {
      this.isUpload = false;
    }
  }
};
</script>
<style scoped>
.target-detail-header {
  background-color: #ffffff;
  padding: 0 30px 20px 30px;
  margin-bottom: 20px;
  position: relative;
}
.target-detail-header .superior-idea {
  color: #eb0c00;
  margin-bottom: 20px;
}
.target-detail-header .title {
  text-align: center;
  color: #303133;
  font-size: 22px;
  font-weight: 500;
  padding: 23px 0;
}
.target-detail-header .flex {
  display: flex;
}
.target-detail-header .grow {
  flex-grow: 1;
}
.target-detail-header .user-info .img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}
.target-detail-header .user-info .avatar-name {
  line-height: 60px;
  text-align: center;
  background-color: rgb(2, 137, 255);
  color: #ffffff;
  font-weight: bold;
}
.target-detail-header .user-info .user-name {
  font-size: 16px;
  color: #303133;
  font-weight: 500;
}
.target-detail-header .user-info .other-info-title {
  color: #909399;
  margin-top: 10px;
  margin-bottom: 5px;
}
.target-detail-header .user-info .super {
  flex-grow: 1;
}
.target-detail-header .user-info .department {
  flex-grow: 2;
}
.target-detail-header .user-info .cycle {
  flex-grow: 1;
}
.target-detail-header .user-info .deadline {
  width: 480px;
}
.target-detail-header .upload-target {
  width: 120px;
  position: relative;
  margin-left: 150px;
}
.target-detail-header .upload-target .btn {
  position: absolute;
  right: 0;
  bottom: 26px;
}
.target-detail-header .status {
  width: 130px;
  position: absolute;
  right: 60px;
  top: 10px;
}
.target-detail-header .user-info .linkman {
  margin-top: 8px;
  color: #ff8519;
}
</style>
