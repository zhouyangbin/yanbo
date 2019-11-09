<template>
  <el-dialog
    :close-on-click-modal="false"
    @close="close"
    width="650px"
    :visible="visible"
    class="label-dialog"
  >
    <div slot="title" class="title">
      {{
        infoType === "add" ? constants.ADD_NEW_LABEL : constants.UPDATE_LABEL
      }}
    </div>
    <el-form
      :rules="rules"
      ref="tplForm"
      :model="tplForm"
      border
      class="tpl-form"
    >
      <el-form-item label="标签类型" prop="tag_type" class="tag-type">
        <el-select v-model="tplForm.tag_type" :placeholder="constants.TAG_TYPE">
          <el-option
            v-for="v of tagTypesList"
            :key="v.key"
            :label="v.name"
            :value="v.key"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- to do 需要改动的地方，先以中文显示，方便联调是改动 -->
      <el-form-item label="标签规则" class="label-rules" prop="rules">
        <el-table :data="table23221" border style="width: 100%">
          <el-table-column label="标签名称" align="center">
            <template slot-scope="scope">
              <el-input
                :class="scope.row.isChildren ? 'add-padding' : ''"
                v-model="scope.row.name"
                placeholder="请输入标签名称"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="level"
            label="对应等级"
            align="center"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="range_des"
            label="人数占比"
            align="center"
            width="80"
          ></el-table-column>
          <el-table-column
            prop="computation_rule_name"
            align="center"
            label="计算规则"
            width="120"
          ></el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item :label="constants.FORCED_DISTRIBUTION_OR_NOT" prop="forced">
        <el-checkbox v-model="tplForm.forced"></el-checkbox>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="submit" type="primary">{{
          constants.CONFIRM
        }}</el-button>
        <el-button round size="medium" @click="close" class="btn-reset">{{
          constants.CANCEL
        }}</el-button>
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import {
  ADD_NEW_LABEL,
  UPDATE_LABEL,
  CONFIRM,
  CANCEL,
  TAG_TYPE,
  DEFAULT_TABLE23221,
  FORCED_DISTRIBUTION_OR_NOT
} from "@/constants/TEXT";
import { postAdminTags, putAdminTagChange } from "@/constants/API";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    infoType: {
      type: String,
      default: "add"
    },
    initData: {
      type: Object,
      default: () => ({})
    },
    departmentsOps: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      rules: {
        tag_type: [
          { required: true, message: "请选择标签类型", trigger: "change" }
        ],
        departments: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个业务单元/职能单元",
            trigger: "change"
          }
        ],
        rules: [{ required: true }]
      },
      tplForm: {
        tag_type: "23221",
        rules: {},
        departments: [],
        forced: false
      },
      constants: {
        ADD_NEW_LABEL,
        UPDATE_LABEL,
        CONFIRM,
        CANCEL,
        TAG_TYPE,
        DEFAULT_TABLE23221,
        FORCED_DISTRIBUTION_OR_NOT
      },
      tagTypesList: [],
      // 切换的数据暂时先这样写，看后台接口如何定义字段，并且在form表单里校验是否必填
      table23221: DEFAULT_TABLE23221,
      tagName: ""
    };
  },
  computed: {},
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      let postData = {
        type: this.tplForm.tag_type,
        rules: this.table23221,
        forced: this.tplForm.forced ? 1 : 0
      };
      if (this.infoType == "add") {
        return postAdminTags(postData).then(res => {
          this.close();
        });
      } else {
        return putAdminTagChange(this.initData.id, postData).then(res => {
          this.close();
        });
      }
    },
    reSpritInitData() {
      let newInitData = JSON.parse(JSON.stringify(this.table23221));
      this.initData.rules.find((v, i) => {
        newInitData[i].name = v.name;
      });
      this.initData.forced
        ? (this.tplForm.forced = true)
        : (this.tplForm.forced = false);
      this.table23221 = newInitData;
    }
  },
  beforeDestroy() {
    this.$refs["tplForm"].resetFields();
  },
  created() {
    if (this.infoType != "add" && this.initData.id) {
      this.reSpritInitData();
    }
  }
};
</script>
<style scoped>
.label-dialog .title {
  text-align: left;
}
.label-dialog >>> .el-dialog__header {
  border-bottom: 1px solid #e4e7ed;
}
.label-dialog >>> .el-dialog__body {
  padding-top: 0;
  padding-bottom: 0;
}
.label-dialog .add-padding {
  padding-left: 20px;
}
.label-dialog >>> .tag-type {
  margin-top: 10px !important;
}
.label-dialog >>> .el-form-item {
  margin-bottom: 0px;
}
.label-dislog >>> .el-input {
  height: 20px !important;
}
.tpl-form .select-tree {
  max-height: 260px;
  overflow: auto;
}
</style>
