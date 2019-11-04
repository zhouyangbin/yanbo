<template>
  <div>
    <div class="section-title">隔级信息:</div>
    <el-form-item prop="plusuplevelNum">
      <el-input
        :disabled="!canBeEdit"
        size="small"
        @input="searchLeader"
        :placeholder="constants.PLUS_LEADER_NUMBER"
        v-model="infoForm.plusuplevelNum"
      ></el-input>
    </el-form-item>
    <el-form-item prop="plusuplevelName">
      <el-input
        size="small"
        :disabled="true"
        :placeholder="constants.PLUS_LEADER_NAME"
        v-model="infoForm.plusuplevelName"
      ></el-input>
    </el-form-item>
    <!--<el-form-item prop="plusuplevelBU">
      <el-input
        size="small"
        :disabled="true"
        :placeholder="constants.PLUS_UP_LEVEL + constants.BASE_OR_BU"
        v-model="infoForm.plusuplevelBU"
      ></el-input>
    </el-form-item>
    <el-form-item prop="plusuplevelEmail">
      <el-input
        size="small"
        :placeholder="constants.PLUS_UP_LEVEL + constants.EMAIL"
        v-model="infoForm.plusuplevelEmail"
      ></el-input>
    </el-form-item>-->
  </div>
</template>
<script>
// 上级信息
import {
  PLUS_LEADER_NUMBER,
  PLUS_LEADER_NAME,
  BASE_OR_BU,
  PLUS_UP_LEVEL,
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
        PLUS_LEADER_NUMBER,
        PLUS_LEADER_NAME,
        BASE_OR_BU,
        PLUS_UP_LEVEL,
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
        }).then(res => {
            if (res) {
              this.infoForm.plusuplevelName = res.name;
              this.infoForm.plusuplevelBU = res.department;
              this.infoForm.plusuplevelEmail = res.email;
            } else {
              this.infoForm.plusuplevelName = "";
              this.infoForm.plusuplevelBU = "";
              this.infoForm.plusuplevelEmail = "";
            }
          })
          .catch(e => {});
      } else {
        this.infoForm.llntervalName = "";
        this.infoForm.lntervalBU = "";
        this.infoForm.lntervalEmail = "";
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
