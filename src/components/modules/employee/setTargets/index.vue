<template>
  <div class="set-target-page">
    <section class="content-container">
      <div class="basic-info">
        <div>
          <span class="label">{{constants.BASIC_INFO}}:</span>
          <span>
            <span class="greycolor">{{constants.LEADER_NUMBER}}</span>
            / {{basicInfo.superior_workcode}} &nbsp;&nbsp;
            <span
              class="greycolor"
            >{{constants.LEADER_NAME}}</span>
            / {{basicInfo.superior_name}}
          </span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span>
        </div>
        <div v-if="!readOnly">
          <el-button
            @click="showImportDia=true"
            icon="el-icon-upload"
            type="text"
          >{{constants.UPLOAD_TARGET}}</el-button>
        </div>
        <div v-if="readOnly && can_edit_target">
          <el-button @click="readOnly=false" icon="el-icon-edit-outline" type="text">重新设定目标</el-button>
        </div>
      </div>
      <div v-if="hasRejectedReasons">
        <el-row
          class="rejectFrame"
          type="flex"
          justify="space-between"
          v-for="(v,i) of target_reject"
          :key="i"
        >
          <div class="reason">{{v.reason}}</div>
          <div>{{v.created_at}}</div>
        </el-row>
      </div>
      <target-card
        :keys="keys"
        :readOnly="readOnly"
        @delete="deleteTarget"
        :data.sync="targets[index]"
        :index="index"
        v-for="(item, index) in targets"
        :key="index"
      ></target-card>
      <br>
      <div v-if="!readOnly">
        <el-button
          style
          :disabled="!canPlus"
          @click="targets.push({})"
          type="primary"
        >{{constants.ADD_TARGET}}</el-button>
      </div>
      <el-row type="flex" justify="center">
        <el-button v-if="!submitted" @click="saveDraft">{{constants.SAVE_DRAFT}}</el-button>
        <el-button
          v-if=" !readOnly && can_edit_target"
          @click="sumbit"
          type="primary"
        >{{constants.SUBMIT}}</el-button>
      </el-row>
    </section>
    <import-target @refresh="getInfo" v-if="showImportDia" :visible.sync="showImportDia"></import-target>
  </div>
</template>
<script>
import {
  BASIC_INFO,
  LEADER_NUMBER,
  SAVE_DRAFT,
  SUBMIT,
  LEADER_NAME,
  ADD_TARGET,
  UPLOAD_TARGET,
  ATTENTION,
  CONFIRM,
  CANCEL,
  DRAFT_SAVE_SUCCESSFULLY
} from "@/constants/TEXT";

import {
  getEmployeeDetail,
  postSetSelfTargets,
  postSetSelfTargetsDraft,
  getSelfTargetsDraft
} from "@/constants/API";
export default {
  data() {
    return {
      basicInfo: {},
      showImportDia: false,
      constants: {
        BASIC_INFO,
        LEADER_NUMBER,
        LEADER_NAME,
        ADD_TARGET,
        UPLOAD_TARGET,
        SAVE_DRAFT,
        SUBMIT
      },
      targets: [{}, {}, {}],
      keys: [],
      readOnly: false,
      submitted: true,
      can_edit_target: true,
      // 审批拒绝理由
      target_reject: []
    };
  },
  components: {
    "target-card": () =>
      import("@/components/modules/employee/targetCard/index.vue"),
    "import-target": () =>
      import("@/components/modules/employee/ImportTarget/index.vue")
  },
  methods: {
    deleteTarget(i) {
      this.$confirm("此操作将永久删除该目标, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.targets.splice(i, 1);
        })
        .catch(() => {});
    },
    beforeRouteLeave(to, from, next) {
      if (!this.readOnly) {
        this.$confirm("修改完成后请提交，否则修改将不被保存?", ATTENTION, {
          confirmButtonText: CONFIRM,
          cancelButtonText: CANCEL,
          type: "warning"
        })
          .then(() => {
            next();
          })
          .catch(() => {
            next(false);
          });
      } else {
        next();
      }
    },
    saveDraft() {
      const postData = this.targets.map(t => {
        let o = {};
        this.keys.forEach(k => {
          o[k] = t[k];
        });
        if (this.keys.includes("weights") && o.weights) {
          o.weights = o.weights / 100;
        }
        return o;
      });
      postSetSelfTargetsDraft(this.$route.params.id, {
        target: postData
      })
        .then(res => {
          this.$message({
            message: DRAFT_SAVE_SUCCESSFULLY,
            type: "success"
          });
          // this.getInfo()
        })
        .catch(e => {});
    },
    isAllFilled() {
      return !this.targets.some(t => {
        return this.keys.some(k => {
          return !t[k];
        });
      });
    },
    checkWeightsSum() {
      return (
        this.targets
          .map(v => v.weights)
          .reduce((p, c) => parseInt(p) + parseInt(c), 0) == 100
      );
    },
    sumbit() {
      if (!this.targetNum) {
        return this.$message({
          message: "请填写至少一个目标",
          type: "warning"
        });
      }
      if (this.isAllFilled()) {
        if (this.keys.includes("weights") && !this.checkWeightsSum()) {
          return this.$message({
            message: "请将目标权重总和应为100!",
            type: "warning"
          });
        }
        postSetSelfTargets(this.$route.params.id, {
          target: this.targets.map(t => {
            let o = {};
            this.keys.forEach(k => {
              o[k] = t[k];
            });
            if (this.keys.includes("weights") && o.weights) {
              o.weights = o.weights / 100;
            }
            return o;
          })
        })
          .then(res => {
            this.$emit("refresh");
          })
          .catch(e => {});
      } else {
        this.$message({
          message: "请将目标填写完整后再提交!",
          type: "warning"
        });
      }
    },
    getInfo() {
      getEmployeeDetail(
        this.$route.params.orgID,
        this.$route.params.id,
        "self"
      ).then(res => {
        const {
          stage,
          superior_workcode,
          superior_name,
          targets,
          template,
          can_edit_target,
          target_reject
        } = res;
        this.basicInfo = {
          superior_workcode,
          superior_name
        };
        const keys = Object.keys(template || {});
        this.keys = keys;
        this.can_edit_target = can_edit_target == 1;
        this.target_reject = target_reject || [];
        if (targets && targets.length > 0) {
          this.readOnly = true;
          this.submitted = true;
          this.targets = targets.map(t => {
            if (keys.includes("weights") && t.weights) {
              t.weights = parseInt(t.weights * 100);
            }
            return t;
          });
          return;
        }
        this.submitted = false;
        this.getDraft();
      });
    },
    getDraft() {
      getSelfTargetsDraft(this.$route.params.id)
        .then(res => {
          const { targets } = res;
          this.targets = targets.map(t => {
            if (this.keys.includes("weights") && t.weights) {
              t.weights = parseInt(t.weights * 100);
            }
            return t;
          });
        })
        .catch(e => {});
    }
  },
  computed: {
    canPlus() {
      return this.targetNum < 10;
    },
    targetNum() {
      return this.targets.length;
    },
    hasRejectedReasons() {
      return this.target_reject.length > 0;
    }
  },
  created() {
    this.getInfo();
  }
};
</script>
<style lang="scss" scoped>
.set-target-page {
  .basic-info {
    background: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .label {
      margin-right: 20px;
      color: #778294;
      width: 100px;
      min-width: 100px;
      height: 26px;
      box-sizing: border-box;
      line-height: 26px;
      padding: 0 10px;
    }
    .tip {
      color: #ea7754;
    }
    .greycolor {
      color: #778294;
    }
  }
  .rejectFrame {
    padding: 10px;
    background: white;
    margin: 10px 0;
    align-items: center;
    color: grey;
    .reason {
      color: #ea7754;
      font-weight: 600;
      font-size: 20px;
    }
  }
}
</style>
