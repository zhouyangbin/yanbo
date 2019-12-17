<template>
  <el-dialog
    class="gradeForm"
    @close="close"
    title="修改成绩"
    :close-on-click-modal="false"
    :visible="visible"
    width="30%"
  >
    <el-form
      :model="gradeForm"
      :rules="gradeFormRules"
      ref="gradeForm"
      label-width="100px"
    >
      <el-form-item label="结果" prop="mark">
        <el-select style="width:100%" v-model="gradeForm.mark">
          <el-option
            v-for="v of marks"
            :label="v"
            :value="v"
            :key="v"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="gradeForm.mark != 'B'" label="标签/" prop="label_id">
        <el-tag
          :class="
            gradeForm.mark == 'A' || gradeForm.mark == 'S'
              ? 'status-tag top-style'
              : 'status-tag other-style'
          "
          v-if="levalLabelRules.length"
          >{{ getlevalLabelRules(levalLabelRules) }}</el-tag
        >
      </el-form-item>
      <el-form-item v-if="gradeForm.mark == 'B'" label="标签/" prop="label_id">
        <el-radio
          style="display: block; margin-top: 5px"
          v-for="item of levalLabelRules"
          :key="item.id"
          :label="item.id"
          v-model="gradeForm.label_id"
        >
          {{ item.name }}
        </el-radio>
      </el-form-item>
      <el-form-item label="原因" prop="reason">
        <el-input
          type="textarea"
          :maxlength="1000"
          v-model="gradeForm.reason"
        ></el-input>
      </el-form-item>
    </el-form>
    <span class="gradeForm-footer" slot="footer">
      <el-button @click="close">{{ constants.CANCEL }}</el-button>
      <el-button type="primary" @click="submit">
        {{ constants.CONFIRM }}
      </el-button>
    </span>
  </el-dialog>
</template>
<script>
import { changePerformanceGrade, postAdminTagsRules } from "@/constants/API";
import { CANCEL, CONFIRM } from "@/constants/TEXT";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    mark: {
      type: String,
      default: ""
    },
    label_id: {
      type: null,
      default: ""
    }
  },
  data() {
    return {
      gradeForm: {
        mark: this.mark,
        label_id: this.label_id,
        reason: ""
      },
      gradeFormRules: {
        mark: [{ required: true, message: "请选择分数", trigger: "change" }],
        label_id: [
          { required: true, message: "请选择标签", trigger: "change" }
        ],
        reason: [{ required: true, message: "请填写修改原因", trigger: "blur" }]
      },
      marks: ["S", "A", "B", "C", "D"],
      levalLabelRules: [],
      constants: {
        CANCEL,
        CONFIRM
      },
      id: 1
    };
  },
  created() {
    // console.log(this.value);
    this.getTagsRules();
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
      this.$emit("close");
    },
    submit() {
      this.$refs["gradeForm"].validate(valid => {
        if (valid) {
          //   alert("submit!")
          const { mark, reason, label_id } = this.gradeForm;
          const postData = {
            score_level: mark,
            reason,
            label_id,
            action: 3
          };
          changePerformanceGrade(
            this.$route.params.orgID,
            this.$route.params.uid,
            postData
          )
            .then(res => {
              this.close();
            })
            .catch(e => {});
        } else {
          //   console.log("error submit!!")
          return false;
        }
      });
    },
    getTagsRules() {
      return postAdminTagsRules(this.id, this.gradeForm.mark, "superior") //请求 label标签接口
        .then(res => {
          this.levalLabelRules = res;
        })
        .catch(e => {});
    },
    getlevalLabelRules(data) {
      //结果不为B
      this.gradeForm.label_id = data[0].id;
      return data[0].name;
    }
  },
  computed: {
    gradeForm_mark() {
      return this.gradeForm.mark;
    }
  },
  watch: {
    gradeForm_mark(newValue, oldValue) {
      //结果是B
      if (this.gradeForm.mark == "B") {
        this.gradeForm.label_id = "";
      }
      this.getTagsRules();
    }
  }
};
</script>
<style scoped>
.gradeForm >>> .el-dialog__footer {
  text-align: center;
}
.top-style {
  background: #e8f5eb;
  color: rgba(0, 177, 45, 1) !important;
}
.bplus-style {
  background: #fff0e3;
  color: rgba(255, 104, 0, 1);
}
.other-style {
  background: #f1f2f5;
  color: rgba(92, 108, 139, 1);
}
.status-tag {
  min-width: 60px;
  height: 28px;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  border-radius: 4px;
  border: none;
  font-weight: 500;
}
</style>
