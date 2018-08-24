<template>
  <div>
    <div class="section-title">员工信息:</div>
    <el-form-item prop="num">
      <el-input :disabled="infoType !== 'add'" size="small" @input="searchME" :placeholder="constants.NUMBER" v-model="infoForm.num"></el-input>
    </el-form-item>
    <el-form-item prop="name">
      <el-input size="small" :disabled="true" :placeholder="constants.NAME" v-model="infoForm.name"></el-input>
    </el-form-item>
    <el-form-item prop="BU">
      <el-input size="small" :disabled="true" :placeholder="constants.BASE_OR_BU" v-model="infoForm.BU"></el-input>
    </el-form-item>
    <el-form-item prop="dep">
      <el-input size="small" :disabled="true" :placeholder="constants.DEP_OR_SUB" v-model="infoForm.dep"></el-input>
    </el-form-item>
    <el-form-item prop="level">
      <el-input size="small" :disabled="true" :placeholder="constants.WORK_LEVEL" v-model="infoForm.level"></el-input>
    </el-form-item>
    <el-form-item prop="email">
      <el-input size="small" :placeholder="constants.EMAIL" v-model="infoForm.email"></el-input>
    </el-form-item>
  </div>
</template>
<script>
// 员工信息
import {
  NUMBER,
  NAME,
  BASE_OR_BU,
  DEP_OR_SUB,
  WORK_LEVEL,
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
    }
  },
  data() {
    return {
      constants: {
        NUMBER,
        NAME,
        BASE_OR_BU,
        DEP_OR_SUB,
        WORK_LEVEL,
        EMAIL
      }
    };
  },
  methods: {
    searchME(v) {
      if (v != "") {
        getUserDetail({
          empID: v
        })
          .then(res => {
            if (res) {
              this.infoForm.name = res.name;
              this.infoForm.BU = res.department;
              this.infoForm.dep = res.first_department;
              this.infoForm.level = res.level;
              this.infoForm.email = res.email;
            } else {
              this.infoForm.name = "";
              this.infoForm.BU = "";
              this.infoForm.dep = "";
              this.infoForm.level = "";
              this.infoForm.email = "";
            }
          })
          .catch(e => {});
      } else {
        this.infoForm.name = "";
        this.infoForm.BU = "";
        this.infoForm.dep = "";
        this.infoForm.level = "";
        this.infoForm.email = "";
      }
    }
  }
};
</script>
<style scoped>
.section-title {
  font-weight: bold;
}
</style>
