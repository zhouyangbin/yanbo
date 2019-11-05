<template>
  <div>
    <div class="section-title">上级信息:</div>
    <el-form-item prop="leaderNum">
      <el-input
        :disabled="!canBeEdit"
        size="small"
        @input="searchLeader"
        :placeholder="constants.LEADER_NUMBER"
        v-model="infoForm.leaderNum"
      ></el-input>
    </el-form-item>
    <el-form-item prop="leaderName">
      <el-input
        size="small"
        :disabled="true"
        :placeholder="constants.LEADER_NAME"
        v-model="infoForm.leaderName"
      ></el-input>
    </el-form-item>
    <el-form-item prop="leaderBU">
      <el-input
        size="small"
        :disabled="true"
        :placeholder="constants.UP_LEVEL + constants.BASE_OR_BU"
        v-model="infoForm.leaderBU"
      ></el-input>
    </el-form-item>
    <el-form-item prop="leaderEmail">
      <el-input
        size="small"
        :placeholder="constants.UP_LEVEL + constants.EMAIL"
        v-model="infoForm.leaderEmail"
      ></el-input>
    </el-form-item>
  </div>
</template>
<script>
// 上级信息
import {
  LEADER_NUMBER,
  LEADER_NAME,
  BASE_OR_BU,
  UP_LEVEL,
  EMAIL
} from "@/constants/TEXT";
import { getUserDetail } from "@/constants/API";

export default {
  props: {
    infoForm: {
      type: Object,
      default: () => ({})
    },
    infoType: {
      type: String,
      default: "add"
    },
    canEdit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      constants: {
        LEADER_NUMBER,
        LEADER_NAME,
        BASE_OR_BU,
        UP_LEVEL,
        EMAIL
      }
    };
  },
  methods: {
    searchLeader(v) {
      // console.log(v);
      if (v != "" && v.length >= 6) {
        getUserDetail({
          empID: v
        })
          .then(res => {
            if (res) {
              this.infoForm.leaderName = res.name;
              this.infoForm.leaderBU = res.department_name;
              this.infoForm.leaderEmail = res.email;
            } else {
              this.infoForm.leaderName = "";
              this.infoForm.leaderBU = "";
              this.infoForm.leaderEmail = "";
            }
          })
          .catch(e => {});
      } else {
        this.infoForm.leaderName = "";
        this.infoForm.leaderBU = "";
        this.infoForm.leaderEmail = "";
      }
    }
  },
  computed: {
    canBeEdit() {
      if (this.infoType == "modify") {
        return this.canEdit;
      }
      return true;
    }
  }
};
</script>
<style scoped>
.section-title {
  font-weight: bold;
}
</style>
