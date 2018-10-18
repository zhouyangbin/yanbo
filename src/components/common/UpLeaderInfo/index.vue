<template>
  <div>
    <div class="section-title">隔级信息:</div>
    <el-form-item prop="upLeaderNum">
      <el-input :disabled="!canBeEdit" size="small" @input="searchUpLeader" :placeholder="constants.PLUS_UP_LEVEL+constants.NUMBER" v-model="infoForm.upLeaderNum"></el-input>
    </el-form-item>
    <el-form-item prop="upLeaderName">
      <el-input size="small" :disabled="true" :placeholder="constants.PLUS_UP_LEVEL+constants.NAME" v-model="infoForm.upLeaderName"></el-input>
    </el-form-item>
    <el-form-item prop="upLeaderBU">
      <el-input size="small" :disabled="true" :placeholder="constants.PLUS_UP_LEVEL+constants.BASE_OR_BU" v-model="infoForm.upLeaderBU"></el-input>
    </el-form-item>
    <el-form-item prop="upLeaderEmail">
      <el-input size="small" :placeholder="constants.PLUS_UP_LEVEL+constants.EMAIL" v-model="infoForm.upLeaderEmail"></el-input>
    </el-form-item>
  </div>
</template>
<script>
// 隔级信息
import {
  PLUS_UP_LEVEL,
  NUMBER,
  NAME,
  BASE_OR_BU,
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
        PLUS_UP_LEVEL,
        NUMBER,
        NAME,
        BASE_OR_BU,
        EMAIL
      }
    };
  },
  methods: {
    searchUpLeader(v) {
      if (v != "") {
        getUserDetail({
          empID: v
        })
          .then(res => {
            if (res) {
              this.infoForm.upLeaderName = res.name;
              this.infoForm.upLeaderBU = res.department;

              this.infoForm.upLeaderEmail = res.email;
            } else {
              this.infoForm.upLeaderName = "";
              this.infoForm.upLeaderBU = "";
              this.infoForm.upLeaderEmail = "";
            }
          })
          .catch(e => {});
      } else {
        this.infoForm.upLeaderName = "";
        this.infoForm.upLeaderBU = "";
        this.infoForm.upLeaderEmail = "";
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
