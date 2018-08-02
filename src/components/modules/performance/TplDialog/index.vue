<template>
  <el-dialog @close="close" width="650px" :visible="visible" class="tplDialog">
    <div slot="title" class="title">
      {{infoType ==='add' ? constants.ADD: constants.MODIFY}}
    </div>
    <el-form :rules="rules" label-width="100px" ref="tplForm" :model="tplForm" class="tplForm">
      <el-form-item label="名称" prop="name">
        <el-input style="width:400px" v-model="tplForm.name"></el-input>
      </el-form-item>
      <el-form-item label="事业部" prop="dp">
        <el-cascader style="width:400px" :props="treeProps" placeholder="选择事业部" :options="departmentTree" v-model="tplForm.dp " change-on-select></el-cascader>
      </el-form-item>
      <el-form-item label="绩效类型" prop="types">
        <el-select v-model="tplForm.types" placeholder="请选择绩效类型 ">
          <el-option v-for="v of constants.ENUM_PERFORMANCE_TYPE" :key="v.key" :label="v.value" :value="v.key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="模板字段">
        <el-checkbox-group v-model="tplForm.property">
          <el-checkbox v-for="v of constants.ENUM_PERFORMANCE_CONFIG_PROPERTY" :key="v.key" :value="v.value" :label="v.key" name="property">{{v.value}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="submit" type="primary">{{constants.CONFIRM}}</el-button>
        <el-button round size="medium" @click="close" class="btn-reset">{{constants.CANCEL}}</el-button>
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import {
  ADD,
  MODIFY,
  CONFIRM,
  CANCEL,
  ENUM_PERFORMANCE_TYPE,
  ENUM_PERFORMANCE_CONFIG_PROPERTY
} from "@/constants/TEXT";
import { postTpl, putTpl, getTpl } from "@/constants/API";

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
    departmentTree: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      treeProps: {
        value: "id",
        label: "text"
      },
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        dp: [{ required: true, message: "请选择事业部", trigger: "blur" }],
        types: [{ required: true, message: "请选择绩效类型", trigger: "blur" }]
      },
      property: [],
      tplForm: { name: "", dp: [], types: "", property: [] },
      constants: {
        ADD,
        MODIFY,
        CONFIRM,
        CANCEL,
        ENUM_PERFORMANCE_TYPE,
        ENUM_PERFORMANCE_CONFIG_PROPERTY
      }
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      this.$refs["tplForm"].validate(valid => {
        if (valid) {
          const postData = {
            name: this.tplForm.name,
            department_id: this.tplForm.dp,
            type_id: this.tplForm.types,
            template_columns: this.tplForm.property
          };
          if (this.infoType == "add") {
            return postTpl(postData).then(res => {
              this.close();
            });
          } else {
            return putTpl(this.initData.id, postData).then(res => {
              this.close();
            });
          }
        }
      });
    }
  },
  beforeDestroy() {
    this.$refs["tplForm"].resetFields();
  },
  created() {
    if (this.infoType != "add" && this.initData.id) {
      getTpl(this.initData.id).then(res => {
        const { name, department_path, type_id, template_cloumns } = res;

        this.tplForm = {
          name,
          dp: department_path,
          types: type_id.toString(),
          property: template_cloumns.map(v => String(v.id))
        };
      });
    }
  }
};
</script>
<style scoped>
.tplDialog .title {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}
.tplDialog >>> .el-form-item {
  margin-bottom: 22px;
}
.tplDialog >>> .el-checkbox-group,
.tplDialog >>> .el-checkbox-group + .el-checkbox {
  margin-left: -30px !important;
}
</style>
