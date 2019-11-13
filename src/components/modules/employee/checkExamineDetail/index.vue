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
      <el-row v-for="(item, index) in lineData" :key="index">
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
                <el-row v-if="item.reason">意见：{{ item.reason }}</el-row>
                <el-row class="time">{{ item.create_at }}</el-row>
              </el-col>
            </el-row>
          </el-timeline-item>
        </el-col>
      </el-row>
    </el-timeline>
  </el-dialog>
</template>
<script>
import { getExamineLog } from "@/constants/API";
export default {
  props: {
    isExamineDialog: {
      type: Boolean,
      default: false
    },
    workCode: {
      tyoe: String,
      default: ""
    }
  },
  data() {
    return {
      lineData: []
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    /**
     * 得到审批记录的数据
     */
    getExamineDetail() {
      let data = {
        workcode: this.workCode
      };
      getExamineLog(data)
        .then(res => {
          this.lineData = res.records;
          res.records.forEach(v => {
            if (v.sign === "green") {
              v["icon"] = "el-icon-check";
              v["color"] = "rgb(41, 197, 80)";
            } else if (v.sign === "red") {
              v["icon"] = "my-icon";
              v["color"] = "";
            } else if (v.sign === "blue") {
              v["icon"] = "my-affriming";
              v["color"] = "";
            }
          });
        })
        .catch(() => {});
    },
    /**
     * 区分状态显示
     */
    showStatus(status) {
      let state = "";
      switch (status) {
        case 1:
          state = "已提交";
          break;
        case 2:
          state = "已驳回";
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
    /**
     * 根据不同的状态加载不同的标签类型
     */
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
  },
  mounted() {
    this.getExamineDetail();
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
</style>
