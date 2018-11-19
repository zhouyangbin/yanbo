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
          <el-button icon="el-icon-upload" type="text">
            {{constants.UPLOAD_TARGET}}
          </el-button>
        </div>
        <div v-else>
          <el-button icon="el-icon-edit-outline" type="text">
            重新设定目标
          </el-button>
        </div>
      </div>
      <target-card :readOnly="readOnly" @delete="deleteTarget" :data.sync="targets[index]" :index="index" v-for="(item, index) in targets" :key="index">

      </target-card>
      <br>
      <el-row type="flex" justify="center">
        <el-button>{{constants.SAVE_DRAFT}}</el-button>
        <el-button type="primary">{{constants.SUBMIT}}</el-button>
      </el-row>
    </section>
    <import-target @refresh="getTargets" v-if="showImportDia" :visible.sync="showImportDia"></import-target>
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
      readOnly: false
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
    getTargets() {
      // TODO: getTargets api
      console.log("getTargets");
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
    }
  },
  computed: {
    canPlus() {
      return this.targets.length < 10;
    }
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
