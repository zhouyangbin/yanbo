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
                <el-cascader style="width:400px" placeholder="选择事业部" :options="options" v-model="tplForm.dp " change-on-select></el-cascader>
            </el-form-item>
            <el-form-item label="绩效类型" prop="types">
                <el-select v-model="tplForm.types " placeholder="请选择活动区域 ">
                    <el-option label="区域一 " value="shanghai "></el-option>
                    <el-option label="区域二 " value="beijing "></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="模板字段" prop="property">
                <el-checkbox-group v-model="tplForm.property">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
        </el-form>
        <div slot="footer ">
            <el-row type="flex " justify="center ">
                <el-button round size="medium " @click="submit " type="primary ">{{constants.CONFIRM}}</el-button>
                <el-button round size="medium " @click="close " class="btn-reset ">{{constants.CANCEL}}</el-button>
            </el-row>
        </div>
    </el-dialog>
</template>
<script>
import { ADD, MODIFY, CONFIRM, CANCEL } from "@/constants/TEXT"
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    infoType: {
      type: String,
      default: "add"
    }
  },
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        dp: [{ required: true, message: "请选择事业部", trigger: "blur" }],
        types: [{ required: true, message: "请选择绩效类型", trigger: "blur" }]
      },
      tplForm: { name: "", dp: [], types: "", property: [] },
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        }
      ],
      constants: {
        ADD,
        MODIFY,
        CONFIRM,
        CANCEL
      }
    }
  },
  methods: {
    close() {
      this.$emit("close")
    },
    submit() {
      this.$refs["tplForm"].validate(valid => {
        if (valid) {
          // TODO: ajax
        }
      })
    }
  },
  beforeDestroy() {
    this.resetFilter("tplForm")
  }
}
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
