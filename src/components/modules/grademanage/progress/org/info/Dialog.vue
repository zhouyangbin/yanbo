<template>
  <el-dialog @close="close" width="650px" :visible="dialogInfo" class="dialogInfo">
    <div slot="title" class="title">
      {{infoType ==='add' ? constants.ADD: constants.MODIFY}}
    </div>
    <el-form :inline="true" :rules="infoRules" ref="infoForm" :model="infoForm" class="infoForm">
      <emp-info :infoForm="infoForm" :infoType="infoType"></emp-info>
      <leader-info :canEdit="currentInfo.canEditLeaderInfo" :infoForm="infoForm" :infoType="infoType"></leader-info>
      <up-leader-info :canEdit="currentInfo.canEdit" :infoForm="infoForm" :infoType="infoType"></up-leader-info>
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
  EMAIL_VALIATE_MSG,
  NUMBER_REQUIRE_MSG,
  LEADER_NUMBER_REQUIRE_MSG,
  EMAIL_FORMAT_MSG,
  CONFIRM,
  CANCEL
} from "@/constants/TEXT";
import { postNewUser, postUpdateUser } from "@/constants/API";
import EmpInfo from "@/components/common/EmpInfo/index.vue";
import LeaderInfo from "@/components/common/LeaderInfo/index.vue";
import UpLeaderInfo from "@/components/common/UpLeaderInfo/index.vue";
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
                  message: "修改成功",
                  type: "success"
                });
                this.close();
              })
              .catch(e => {});
          }
        } else {
          return false;
        }
      });
    }
  },
  beforeDestroy() {
    this.resetFilter("infoForm");
  },
  components: {
    "emp-info": EmpInfo,
    "leader-info": LeaderInfo,
    "up-leader-info": UpLeaderInfo
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
