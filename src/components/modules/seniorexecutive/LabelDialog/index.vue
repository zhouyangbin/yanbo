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
        infoType === "add"
          ? constants.ADD_NEW_LABEL
          : constants.EXECTIVE_UPDATE_LABEL
      }}
    </div>
    <el-form :rules="rules" ref="tplForm" :model="tplForm" class="tpl-form">
      <el-form-item :label="constants.LABEL_TYPE" prop="tag_type">
        <el-select
          v-model="tplForm.tag_type"
          :placeholder="constants.PLEASE_SELECT_LABEL_TYPE"
          :disabled="isDisable"
        >
          <el-option
            v-for="v of tagTypesList"
            :key="v.key"
            :label="v.name"
            :value="v.key"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签规则" class="label-rules" prop="rules">
        <el-table
          :data="table253"
          v-show="tplForm.tag_type == constants.EXECUTIVE_LABEL_TYPE[0]"
          border
          style="width: 100%"
        >
          <el-table-column label="标签名称" align="center">
            <template slot-scope="scope">
              <el-input
                v-model="scope.row.display_name"
                placeholder="请输入标签名称"
                maxlength="20"
                show-word-limit
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="people_percent"
            label="人数占比"
            align="center"
            width="150"
          >
            <template slot-scope="scope">
              {{ scope.row.people_percent }}%
            </template>
          </el-table-column>
          <el-table-column
            prop="computation_rule_name"
            align="center"
            label="计算规则"
            width="150"
          >
          </el-table-column>
        </el-table>
        <el-table
          :data="table271"
          v-show="tplForm.tag_type == constants.EXECUTIVE_LABEL_TYPE[1]"
          border
          style="width: 100%"
        >
          <el-table-column label="标签名称" align="center">
            <template slot-scope="scope">
              <el-input
                v-model="scope.row.display_name"
                placeholder="请输入标签名称"
                maxlength="20"
                show-word-limit
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="people_percent"
            label="人数占比"
            align="center"
            width="150"
          >
            <template slot-scope="scope">
              {{ scope.row.people_percent }}%
            </template>
          </el-table-column>
          <el-table-column
            prop="computation_rule_name"
            align="center"
            label="计算规则"
            width="150"
          >
          </el-table-column>
        </el-table>
        <el-table
          :data="table23221"
          v-show="tplForm.tag_type == constants.EXECUTIVE_LABEL_TYPE[2]"
          border
          style="width: 100%"
        >
          <el-table-column label="标签名称" align="center">
            <template slot-scope="scope">
              <el-input
                :class="scope.row.isChildren ? 'add-padding' : ''"
                v-model="scope.row.display_name"
                placeholder="请输入标签名称"
                maxlength="20"
                show-word-limit
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column label="是否展示给员工" align="center" width="80">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.is_show"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column
            prop="people_percent"
            label="人数占比"
            align="center"
            width="150"
          >
            <template slot-scope="scope">
              {{ scope.row.people_percent }}%
            </template>
          </el-table-column>
          <el-table-column
            prop="computation_rule_name"
            align="center"
            label="计算规则"
            width="150"
          >
          </el-table-column>
        </el-table>
        <el-table
          :data="table2521"
          v-show="tplForm.tag_type == constants.EXECUTIVE_LABEL_TYPE[3]"
          border
          style="width: 100%"
        >
          <el-table-column label="标签名称" align="center">
            <template slot-scope="scope">
              <el-input
                :class="scope.row.isChildren ? 'add-padding' : ''"
                v-model="scope.row.display_name"
                placeholder="请输入标签名称"
                maxlength="20"
                show-word-limit
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="people_percent"
            label="人数占比"
            align="center"
            width="150"
          >
            <template slot-scope="scope">
              {{ scope.row.people_percent }}%
            </template>
          </el-table-column>
          <el-table-column
            prop="computation_rule_name"
            align="center"
            label="计算规则"
            width="150"
          >
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item
        :label="constants.BUSINESS_UNIT_AND_FUNCTIONAL_UNIT"
        prop="department_ids"
        label-width="140px"
      >
        <common-tree
          :orgTree="orgTree"
          @selectedIds="selectedOrg"
          :department_ids="tplForm.department_ids"
        ></common-tree>
      </el-form-item>
      <el-form-item
        :label="constants.FORCED_DISTRIBUTION"
        prop="force_distribution"
      >
        <el-checkbox v-model="tplForm.force_distribution"></el-checkbox>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-row type="flex" justify="center">
        <el-button round size="medium" @click="submit" type="primary">
          {{ constants.CONFIRM }}
        </el-button>
        <el-button round size="medium" @click="close" class="btn-reset">
          {{ constants.CANCEL }}
        </el-button>
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import {
  ADD_NEW_LABEL,
  EXECTIVE_UPDATE_LABEL,
  CONFIRM,
  CANCEL,
  LABEL_TYPE,
  BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,
  PLEASE_SELECT_MULTIPLE,
  PLEASE_SELECT_LABEL_TYPE,
  EXECUTIVE_LABEL_TYPE,
  FORCED_DISTRIBUTION,
  DEFAULT_TABLE253,
  DEFAULT_TABLE271,
  DEFAULT_PERFORMANCE_TABLE23221,
  DEFAULT_TABLE2521
} from "@/constants/TEXT";
import {
  postExecutiveAdminTags,
  getExecutiveAdminTagTypes,
  getExecutiveAdminTagDetails,
  putExecutiveAdminTagChange
} from "@/constants/API";
import { AsyncComp } from "@/utils/asyncCom";
export default {
  components: {
    "common-tree": AsyncComp(
      import("@/components/modules/seniorexecutive/CommonTree/index.vue")
    )
  },
  props: {
    isDisable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    infoType: {
      type: String,
      default: "add"
    },
    userId: {
      type: Number,
      default: 0
    },
    orgTree: {
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
        department_ids: [
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
        department_ids: [],
        force_distribution: false
      },
      constants: {
        ADD_NEW_LABEL,
        EXECTIVE_UPDATE_LABEL,
        CONFIRM,
        CANCEL,
        LABEL_TYPE,
        BUSINESS_UNIT_AND_FUNCTIONAL_UNIT,
        PLEASE_SELECT_MULTIPLE,
        PLEASE_SELECT_LABEL_TYPE,
        EXECUTIVE_LABEL_TYPE,
        FORCED_DISTRIBUTION,
        DEFAULT_TABLE253,
        DEFAULT_TABLE271,
        DEFAULT_PERFORMANCE_TABLE23221,
        DEFAULT_TABLE2521
      },
      defaultProps: {
        label: "department_name",
        children: "children"
      },
      tagTypesList: [],
      // 切换的数据暂时先这样写，看后台接口如何定义字段，并且在form表单里校验是否必填
      table253: DEFAULT_TABLE253,
      table271: DEFAULT_TABLE271,
      table23221: DEFAULT_PERFORMANCE_TABLE23221,
      table2521: DEFAULT_TABLE2521,
      tagName: ""
    };
  },
  computed: {
    checkedKeys() {
      return this.tplForm.department_ids.map(
        ({ department_id }) => department_id
      );
    }
  },
  methods: {
    selectedOrg(data) {
      this.tplForm.department_ids = data;
    },
    close() {
      this.$emit("close");
    },
    handleCheckedExecutiveType() {},
    /**
     * 253,271标签设置时将标签规则处理为后端期望的规则
     * @params tableArr 当前标签规则
     * @return 后端期望的数据结构
     */
    handleTagRules(tableArr) {
      let rules = [];
      tableArr.forEach((v, i) => {
        let obj = {};
        if (this.tplForm.tag_type === this.tagName && this.tagName) {
          obj["id"] = v.id;
        }
        obj["display_name"] = v.display_name;
        rules.push(obj);
      });
      return rules;
    },
    handle23221TagRules() {
      let rules = [];
      this.table23221.forEach((v, i) => {
        if (i === 2 || i === 3) {
          if (i === 2) {
            rules[1]["children"] = [];
          }
          let obj = {};
          if (this.tagName) {
            obj["id"] = v.id;
          }
          obj["display_name"] = v.display_name;
          rules[1]["children"].push(obj);
        } else if (i === 5 || i === 6) {
          if (i === 5) {
            rules[2]["children"] = [];
          }
          let obj = {};
          if (this.tagName) {
            obj["id"] = v.id;
          }
          obj["display_name"] = v.display_name;
          rules[2]["children"].push(obj);
        } else {
          let obj = {};
          if (this.tplForm.tag_type === this.tagName && this.tagName) {
            obj["id"] = v.id;
          }
          obj["display_name"] = v.display_name;
          rules.push(obj);
        }
      });
      return rules;
    },
    handle2521TagRules() {
      let rules = [];
      this.table2521.forEach((v, i) => {
        if (i === 3 || i === 4) {
          if (i === 3) {
            rules[2]["children"] = [];
          }
          let obj = {};
          if (this.tagName) {
            obj["id"] = v.id;
          }
          obj["display_name"] = v.display_name;
          rules[2]["children"].push(obj);
        } else {
          let obj = {};
          if (this.tplForm.tag_type === this.tagName && this.tagName) {
            obj["id"] = v.id;
          }
          obj["display_name"] = v.display_name;
          rules.push(obj);
        }
      });
      return rules;
    },
    submit() {
      this.$refs["tplForm"].validate(valid => {
        if (valid) {
          let rules = [];
          let isSubmit = true;
          if (this.tplForm.tag_type == EXECUTIVE_LABEL_TYPE[0]) {
            // 253传递的标签规则参数
            rules = this.handleTagRules(this.table253);
          } else if (this.tplForm.tag_type == EXECUTIVE_LABEL_TYPE[1]) {
            // 271传递的标签规则参数
            rules = this.handleTagRules(this.table271);
          } else if (this.tplForm.tag_type == EXECUTIVE_LABEL_TYPE[2]) {
            // 23221传递的标签规则参数
            rules = this.handle23221TagRules();
          } else if (this.tplForm.tag_type == EXECUTIVE_LABEL_TYPE[3]) {
            // 2521传递的标签规则参数
            rules = this.handle2521TagRules();
          }
          let postData = {
            tag_type: this.tplForm.tag_type,
            force_distribution: this.tplForm.force_distribution ? 1 : 0,
            department_ids: this.tplForm.department_ids,
            rules: rules
          };
          Object.keys(postData.rules).forEach(key => {
            if (postData.rules[key].display_name == "") {
              isSubmit = false;
            }
            if (postData.rules[key].children) {
              Object.keys(postData.rules[key].children).forEach(i => {
                if (postData.rules[key].children[i].display_name == "") {
                  isSubmit = false;
                }
              });
            }
          });
          if (this.infoType === "add") {
            // 新增标签
            if (isSubmit) {
              return postExecutiveAdminTags(postData)
                .then(res => {
                  this.$emit("getList");
                })
                .catch(() => {});
            } else {
              this.$alert("标签名称不能为空！");
            }
          } else {
            let UpData = postData;
            if (isSubmit) {
              return putExecutiveAdminTagChange(this.userId, UpData)
                .then(res => {
                  this.$emit("getList");
                })
                .catch(() => {});
            } else {
              this.$alert("标签名称不能为空！");
            }
          }
        }
      });
    },
    // 更新标签传递数据
    updateTemplate() {},
    getAdminTagTypesList() {
      getExecutiveAdminTagTypes().then(res => {
        this.tagTypesList = res;
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.department_name.indexOf(value) !== -1;
    },
    treeChange(data, checked, indeterminate) {
      this.tplForm.department_ids = this.$refs.tree.getCheckedNodes();
    },
    /**
     * 将后端返回数据中的children提取到外层，并追加在当前包含children的对象后面
     * @param arr 后端返回的数组
     * @return newArr 不包含children的数组
     */
    handleTagRulesDataStructure(arr) {
      let newArr = [];
      arr.forEach((v, i) => {
        if (v.children == undefined) {
          newArr.push(v);
        }
        if (v.children != undefined) {
          newArr.push(v);
          v.children.forEach((obj, index) => {
            obj["isChildren"] = true;
            newArr.push(obj);
          });
          delete v.children;
        }
      });
      return newArr;
    },
    getTagDetails() {
      getExecutiveAdminTagDetails(this.userId).then(res => {
        this.tplForm.tag_type = res.tag_type;
        if (this.tplForm.tag_type == EXECUTIVE_LABEL_TYPE[0]) {
          this.table253 = this.handleTagRulesDataStructure(res.rules);
        } else if (this.tplForm.tag_type == EXECUTIVE_LABEL_TYPE[1]) {
          this.table271 = this.handleTagRulesDataStructure(res.rules);
        } else if (this.tplForm.tag_type == EXECUTIVE_LABEL_TYPE[2]) {
          this.table23221 = this.handleTagRulesDataStructure(res.rules);
        } else if (this.tplForm.tag_type == EXECUTIVE_LABEL_TYPE[3]) {
          this.table2521 = this.handleTagRulesDataStructure(res.rules);
        }
        this.tplForm.department_ids = res.department_ids;
        this.tplForm.force_distribution = res.force_distribution ? true : false;
        this.tagName = res.tag_type;
      });
    }
  },
  beforeDestroy() {
    this.$refs["tplForm"].resetFields();
  },
  created() {
    this.getAdminTagTypesList();
    if (this.infoType != "add" && this.userId) {
      this.getTagDetails();
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
.label-dialog >>> .el-form-item {
  margin-bottom: 22px;
}
.label-dialog >>> .el-form-item .el-input-group__prepend,
.label-dialog >>> .el-form-item .el-input-group__append {
  padding: 0 10px !important;
  background-color: #fff !important;
  border: none !important;
}
.label-dialog .input-type {
  float: left;
  width: 33.33%;
}
.label-dialog .add-padding {
  padding-left: 20px;
}
.tpl-form .select-tree {
  max-height: 260px;
  overflow: auto;
}
</style>
