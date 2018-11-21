<template>
  <div class="set-target-page">
    <section class="content-container">
      <div class="basic-info">
        <div>
          <span class="label">{{constants.BASIC_INFO}}:</span>
          <span>
            <span class="greycolor">{{constants.LEADER_NUMBER}}</span> / {{basicInfo.superior_workcode}} &nbsp;&nbsp;
            <span class="greycolor">{{constants.LEADER_NAME}}</span> / {{basicInfo.superior_name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="tip">注: 若上级姓名工号与实际不符, 请联系HR</span>
        </div>
        <div v-if="!readOnly">
          <el-button :disabled="!canPlus" @click="targets.push({})" icon="el-icon-plus" type="text">
            {{constants.ADD_TARGET}}
          </el-button>
          <el-button @click="showImportDia=true" icon="el-icon-upload" type="text">
            {{constants.UPLOAD_TARGET}}
          </el-button>
        </div>
        <div v-else>
          <el-button @click="readOnly=false" icon="el-icon-edit-outline" type="text">
            重新设定目标
          </el-button>
        </div>
      </div>
      <target-card :keys="keys" :readOnly="readOnly" @delete="deleteTarget" :data.sync="targets[index]" :index="index" v-for="(item, index) in targets" :key="index">

      </target-card>
      <br>
      <el-row type="flex" justify="center">
        <el-button v-if="!submitted" @click="saveDraft">{{constants.SAVE_DRAFT}}</el-button>
        <el-button @click="sumbit" type="primary">{{constants.SUBMIT}}</el-button>
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
  UPLOAD_TARGET
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
      submitted: true
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
      this.targets.splice(i, 1);
    },
    beforeRouteLeave(to, from, next) {
      // FIXME: 文案可能会修改, 要确认
      if (!this.readOnly) {
        this.$confirm("修改完成后请提交，否则修改记录将不被保存?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
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
      postSetSelfTargetsDraft(this.$route.params.id, {
        target: this.targets.map(t => {
          t.target_name = t.target;
          delete t.target;
          return t;
        })
      })
        .then(res => {
          this.$message({
            message: "草稿保存成功",
            type: "success"
          });
        })
        .catch(e => {});
    },
    isAllFilled() {
      return !this.targets.some(t => {
        return this.keys
          .map(v => {
            if (v == "name") {
              return "target";
            }
            return v;
          })
          .some(k => {
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
      if (this.isAllFilled()) {
        if (this.checkWeightsSum()) {
          postSetSelfTargets(this.$route.params.id, {
            target: this.targets.map(t => {
              t.target_name = t.target;
              delete t.target;
              return t;
            })
          })
            .then(res => {
              this.$emit("refresh");
            })
            .catch(e => {});
        } else {
          this.$message({
            message: "请将目标权重总和应为100!",
            type: "warning"
          });
        }
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
          template
        } = res;
        this.basicInfo = {
          superior_workcode,
          superior_name
        };
        this.keys = Object.keys(
          template || {
            name: "",
            metrics: "",
            weights: 0,
            deadlines: ""
          }
        );
        // TODO: 关于是否是readOnly
        if (stage == 0) {
          this.submitted = false;
          return this.getDraft();
        }
        this.readOnly = true;
        this.targets = targets.map(t => {
          t.weights = parseInt(t.weights * 100);
          return t;
        });
      });
    },
    getDraft() {
      getSelfTargetsDraft(this.$route.params.id)
        .then(res => {
          const { targets } = res;
          this.targets = targets.map(t => {
            t.weights = parseInt(t.weights * 100);
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
}
</style>
