<template>
  <el-dialog @close="close" width="650px" :visible="dialogInfo" class="dialogInfo">
    <div slot="title" class="title">
      {{infoType ==='add' ? constants.ADD: constants.MODIFY}}
    </div>
    <el-form :inline="true" :rules="infoRules" ref="infoForm" :model="infoForm" class="infoForm">
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
      <div class="section-title">上级信息:</div>
      <el-form-item prop="leaderNum">
        <el-input size="small" @input="searchLeader" :placeholder="constants.LEADER_NUMBER" v-model="infoForm.leaderNum"></el-input>
      </el-form-item>
      <el-form-item prop="leaderName">
        <el-input size="small" :disabled="true" :placeholder="constants.LEADER_NAME" v-model="infoForm.leaderName"></el-input>
      </el-form-item>
      <el-form-item prop="leaderBU">
        <el-input size="small" :disabled="true" :placeholder="constants.UP_LEVEL+constants.BASE_OR_BU" v-model="infoForm.leaderBU"></el-input>
      </el-form-item>
      <el-form-item prop="leaderEmail">
        <el-input size="small" :placeholder="constants.UP_LEVEL+constants.EMAIL" v-model="infoForm.leaderEmail"></el-input>
      </el-form-item>
      <div class="section-title">隔级信息:</div>
      <div>
        <el-form-item prop="upLeaderNum">
          <el-input size="small" @input="searchUpLeader" :placeholder="constants.PLUS_UP_LEVEL+constants.NUMBER" v-model="infoForm.upLeaderNum"></el-input>
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

    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="infoSubmit('infoForm')" type="primary">{{constants.CONFIRM}}</el-button>
        <el-button round size="medium" @click="close" class="btn-reset">{{constants.CANCEL}}</el-button>
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import {
  ADD,
  MODIFY,
  NUMBER,
  NAME,
  BASE_OR_BU,
  DEP_OR_SUB,
  WORK_LEVEL,
  EMAIL,
  LEADER_NUMBER,
  LEADER_NAME,
  UP_LEVEL,
  EMAIL_VALIATE_MSG,
  NUMBER_REQUIRE_MSG,
  LEADER_NUMBER_REQUIRE_MSG,
  EMAIL_FORMAT_MSG,
  PLUS_UP_LEVEL,
  CONFIRM,
  CANCEL
} from "@/constants/TEXT";
import { postNewUser, postUpdateUser, getUserDetail } from "@/constants/API";
export default {
  props: {
    dialogInfo: {
      type: Boolean,
      default: false
    },
    infoType: {
      type: String,
      default: "add"
    },
    currentInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    // 填了隔级的邮箱就必须填隔级的工号
    const upLeaderEmailValidator = (rule, value, callback) => {
      if (this.infoForm.upLeaderNum && !value) {
        callback(EMAIL_VALIATE_MSG);
      } else {
        callback();
      }
    };
    return {
      constants: {
        ADD,
        MODIFY,
        NUMBER,
        NAME,
        BASE_OR_BU,
        DEP_OR_SUB,
        WORK_LEVEL,
        EMAIL,
        LEADER_NUMBER,
        LEADER_NAME,
        UP_LEVEL,
        PLUS_UP_LEVEL,
        CONFIRM,
        CANCEL
      },
      infoRules: {
        num: {
          type: "string",
          required: true,
          message: NUMBER_REQUIRE_MSG,
          trigger: "change"
        },
        email: [
          { required: true, message: EMAIL_VALIATE_MSG, trigger: "blur" },
          {
            type: "email",
            message: EMAIL_FORMAT_MSG,
            trigger: ["blur", "change"]
          }
        ],
        leaderNum: [
          {
            type: "string",
            required: true,
            message: LEADER_NUMBER_REQUIRE_MSG,
            trigger: "change"
          }
        ],
        leaderEmail: [
          { required: true, message: EMAIL_VALIATE_MSG, trigger: "blur" },
          {
            type: "email",
            message: EMAIL_FORMAT_MSG,
            trigger: ["blur", "change"]
          }
        ],
        upLeaderEmail: [
          {
            type: "email",
            message: EMAIL_FORMAT_MSG,
            trigger: ["blur", "change"]
          },
          { validator: upLeaderEmailValidator, trigger: "change" }
        ]
      },
      infoForm: {
        num: "",
        name: "",
        BU: "",
        dep: "",
        level: "",
        email: "",
        leaderNum: "",
        leaderName: "",
        leaderBU: "",
        leaderEmail: "",
        upLeaderNum: "",
        upLeaderName: "",
        upLeaderBU: "",
        upLeaderEmail: ""
      }
    };
  },
  created() {
    this.infoForm.num = this.currentInfo.workcode;
    this.infoForm.name = this.currentInfo.name;
    this.infoForm.BU = this.currentInfo.department;
    this.infoForm.dep = this.currentInfo.first_department;
    this.infoForm.level = this.currentInfo.level;
    this.infoForm.email = this.currentInfo.email;
    this.infoForm.leaderNum = this.currentInfo.superior_workcode;
    this.infoForm.leaderName = this.currentInfo.superior_name;
    this.infoForm.leaderBU = this.currentInfo.superior_department;
    this.infoForm.leaderEmail = this.currentInfo.superior_email;
    this.infoForm.upLeaderNum = this.currentInfo.highlevel_workcode;
    this.infoForm.upLeaderName = this.currentInfo.highlevel_name;
    this.infoForm.upLeaderBU = this.currentInfo.highlevel_department;
    this.infoForm.upLeaderEmail = this.currentInfo.highlevel_email;
  },
  methods: {
    resetFilter(formName) {
      this.$refs[formName].resetFields();
    },
    close() {
      this.$emit("close");
    },
    // 添加或修改用户信息提交
    infoSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log(this.infoType)
          if (this.infoType === "add") {
            // 添加的情况下
            const postData = {
              ev_user_workcode: this.infoForm.num,
              ev_user_email: this.infoForm.email,
              evaluator_workcode: this.infoForm.leaderNum,
              evaluator_email: this.infoForm.leaderEmail,
              highlevel_workcode: this.infoForm.upLeaderNum,
              highlevel_email: this.infoForm.upLeaderEmail
            };
            postNewUser(this.$route.params.orgID, postData)
              .then(res => {
                this.$message({
                  message: "添加成功",
                  type: "success"
                });
                this.close();
              })
              .catch(e => {
                // console.log(e)
              });
          } else {
            // console.log("modifu")
            postUpdateUser(this.$route.params.orgID, this.currentInfo.id, {
              ev_user_email: this.infoForm.email,
              evaluator_workcode: this.infoForm.leaderNum,
              evaluator_email: this.infoForm.leaderEmail,
              highlevel_workcode: this.infoForm.upLeaderNum,
              highlevel_email: this.infoForm.upLeaderEmail
            })
              .then(res => {
                this.$message({
                  message: "添加成功",
                  type: "success"
                });
                this.close();
              })
              .catch(e => {});
          }
        } else {
          // console.log("error submit!!")
          return false;
        }
      });
    },
    searchME(v) {
      if (v != "") {
        getUserDetail({
          empID: v
        }).then(res => {
          if (res) {
            this.infoForm.name = res.name;
            this.infoForm.BU = res.department;
            this.infoForm.dep = res.first_department;
            this.infoForm.level = res.level;
            this.infoForm.email = res.email;
          }
        });
        // .catch(e => {});
      }
    },
    searchLeader(v) {
      if (v != "") {
        getUserDetail({
          empID: v
        })
          .then(res => {
            if (res) {
              this.infoForm.leaderName = res.name;
              this.infoForm.leaderBU = res.department;
              // this.infoForm.dep = res.first_department
              // this.infoForm.level = res.level
              this.infoForm.leaderEmail = res.email;
            }
          })
          .catch(e => {});
      }
    },
    searchUpLeader(v) {
      if (v != "") {
        getUserDetail({
          empID: v
        })
          .then(res => {
            if (res) {
              this.infoForm.upLeaderName = res.name;
              this.infoForm.upLeaderBU = res.department;
              // this.infoForm.dep = res.first_department
              // this.infoForm.level = res.level
              this.infoForm.upLeaderEmail = res.email;
            }
          })
          .catch(e => {});
      }
    }
  },
  beforeDestroy() {
    this.resetFilter("infoForm");
  }
};
</script>
<style scoped>
.dialogInfo .title {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}
.section-title {
  font-weight: bold;
}
</style>
