<template>
  <el-dialog
    class="examine-dialog"
    title="审批记录"
    :visible="isExamineDialog"
    :close-on-click-modal="false"
    width="700px"
    @close="close"
  >
    <el-timeline class="line">
      <el-row v-for="(item, index) in approvalData" :key="index">
        <el-col :span="4">{{ item.stage }}</el-col>
        <el-col :span="20">
          <el-timeline-item :color="item.color" :icon="item.icon">
            <el-row>
              <el-col :span="2">
                <img
                  v-if="item.avatar"
                  class="avatar-img"
                  :src="item.avatar"
                  alt=""
                />
                <div class="avatar-img avatar-name" v-else>
                  {{ item.name.substr(item.name.length - 1, 1) }}
                </div>
              </el-col>
              <el-col :span="22">
                <el-row v-if="item.stage !== '考核启动'">
                  <span class="name-workcode">{{ item.name }}</span>
                  <span class="name-workcode">（{{ item.workcode }}）</span>
                  <el-tag :type="showType(item.target_status)" size="small">{{
                    showStatus(item.target_status)
                  }}</el-tag>
                </el-row>
                <el-tooltip placement="bottom">
                  <div slot="content">{{ item.reason }}</div>
                  <el-row class="reason" v-if="item.reason"
                    >意见：{{ item.reason }}</el-row
                  >
                </el-tooltip>
                <!-- <el-row v-if="item.reason">{{ item.reason }}</el-row> -->
                <el-row class="time">{{ item.created_at }}</el-row>
              </el-col>
            </el-row>
          </el-timeline-item>
        </el-col>
      </el-row>
    </el-timeline>
  </el-dialog>
</template>
<script>
import { getExecutiveApprovalRecords } from "@/constants/API";
export default {
  props: {
    isExamineDialog: {
      type: Boolean,
      default: false
    },
    approvalData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      lineData: [],
      data: []
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    showStatus(status) {
      let state = "";
      switch (status) {
        case 1:
          state = "已提交";
          break;
        case 2:
          state = "已退回";
          break;
        case 3:
          state = "确认中";
          break;
        case 4:
          state = "已确认";
          break;
        default:
          state = "";
          break;
      }
      return state;
    },
    showType(status) {
      let type = "";
      switch (status) {
        case 1:
          type = "";
          break;
        case 2:
          type = "danger";
          break;
        case 3:
          type = "warning";
          break;
        case 4:
          type = "success";
          break;
        default:
          type = "";
          break;
      }
      return type;
    }
  }
};
</script>
<style scoped>
.examine-dialog .line >>> .el-timeline-item__tail {
  display: block;
}
.examine-dialog >>> .el-timeline-item__node--normal {
  width: 18px;
  height: 18px;
  left: -4px;
}
.examine-dialog >>> .my-icon {
  background-image: url("../../../../assets/img/reject_icon.png");
  background-size: 100%, 100%;
  display: block;
  width: 18px;
  height: 18px;
}
.examine-dialog >>> .my-affriming {
  background-image: url("../../../../assets/img/affriming_icon.png");
  background-size: 100%, 100%;
  display: block;
  width: 18px;
  height: 18px;
}
.examine-dialog .avatar-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.examine-dialog .avatar-name {
  background-color: rgb(2, 137, 255);
  color: #ffffff;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
}
.examine-dialog .name-workcode {
  font-weight: bold;
}
.examine-dialog .time {
  color: #909399;
  margin-top: 5px;
}
.reason {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
