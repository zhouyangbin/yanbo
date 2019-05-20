<template>
  <el-dialog
    :close-on-click-modal="false"
    @close="close"
    width="650px"
    :visible="visible"
    class="ruleDialog"
  >
    <div slot="title" class="title">{{ data.department }}</div>
    <el-form
      :rules="rules"
      label-width="150px"
      ref="ruleForm"
      :model="ruleForm"
      class="ruleForm"
    >
      <el-form-item label="是否强制对应" prop="isMapping">
        <el-radio-group v-model="ruleForm.isMapping">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="showMapping">
        <div class="mapping-container">
          <span>D</span>
          <span>对应</span>
          <div>
            <el-slider
              tooltip-class="tooltip"
              style="width:400px"
              :max="496"
              v-model="D"
              :format-tooltip="formatTooltip"
            ></el-slider>
          </div>
        </div>
        <div class="mapping-container">
          <span>C</span>
          <span>对应</span>
          <div>
            <el-slider
              tooltip-class="tooltip"
              range
              :min="1"
              :max="497"
              style="width:400px"
              v-model="C"
              :format-tooltip="formatTooltip"
            ></el-slider>
          </div>
        </div>
        <div class="mapping-container">
          <span>B</span>
          <span>对应</span>
          <div>
            <el-slider
              tooltip-class="tooltip"
              range
              :min="2"
              :max="498"
              style="width:400px"
              v-model="B"
              :format-tooltip="formatTooltip"
            ></el-slider>
          </div>
        </div>
        <div class="mapping-container">
          <span>A</span>
          <span>对应</span>
          <div>
            <el-slider
              tooltip-class="tooltip"
              range
              :min="3"
              :max="499"
              style="width:400px"
              v-model="A"
              :format-tooltip="formatTooltip"
            ></el-slider>
          </div>
        </div>
        <div class="mapping-container">
          <span>S</span>
          <span>对应</span>
          <div>
            <el-slider
              tooltip-class="tooltip"
              :min="4"
              range
              :max="500"
              style="width:400px"
              v-model="S"
              :format-tooltip="formatTooltip"
            ></el-slider>
          </div>
        </div>
      </div>
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
import { CONFIRM, CANCEL } from "@/constants/TEXT";
import { putRule } from "@/constants/API";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      ruleForm: {
        isMapping: this.data.type_id || ""
      },
      D: (this.data.fraction && this.data.fraction[0]) || 100,
      C: [
        (this.data.fraction &&
          this.data.fraction[0] &&
          this.data.fraction[0] + 1) ||
          101,
        (this.data.fraction && this.data.fraction[1]) || 200
      ],
      B: [
        (this.data.fraction &&
          this.data.fraction[1] &&
          this.data.fraction[1] + 1) ||
          201,
        (this.data.fraction && this.data.fraction[2]) || 300
      ],
      A: [
        (this.data.fraction &&
          this.data.fraction[2] &&
          this.data.fraction[2] + 1) ||
          301,
        (this.data.fraction && this.data.fraction[3]) || 400
      ],
      S: [(this.data.fraction && this.data.fraction[3] + 1) || 401, 500],
      rules: {
        isMapping: [{ required: true, message: "请选择类型", trigger: "blur" }]
      },
      constants: {
        CONFIRM,
        CANCEL
      }
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    formatTooltip(val) {
      // console.log(val)
      return parseInt(val) / 100;
    },
    submit() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          let postData = {
            type_id: this.ruleForm.isMapping
          };
          if (this.showMapping) {
            postData.fraction = [
              this.D / 100,
              this.C[1] / 100,
              this.B[1] / 100,
              this.A[1] / 100
            ];
          }
          putRule(this.data.id, postData)
            .then(res => {
              this.close();
            })
            .catch(e => {});
        }
      });
    }
  },
  computed: {
    showMapping() {
      return this.ruleForm.isMapping == 1;
    }
  },
  watch: {
    // 小心死循环
    C: {
      handler: function(v, o) {
        if (v[0] != o[0]) {
          // console.log("C Change")
          this.D = v[0] - 1 < 0 ? 0 : v[0] - 1;
        }
        if (v[1] != o[1] && v[1] - this.B[0] != 1) {
          this.B = [v[1] + 1, Math.max(v[1] + 1, this.B[1])];
        }
      }
      // deep: true
    },
    D: {
      handler: function(v, o) {
        if (v != o) {
          // console.log("D Change")
          this.C = [v + 1, this.C[1]];
        }
      }
      // deep: true
    },
    B: {
      handler: function(v, o) {
        if (v[0] != o[0] && v[0] - this.C[1] != 1) {
          // console.log("B Change")
          const end = v[0] - 1 < 1 ? 1 : v[0] - 1;
          const start = Math.min(end, this.C[0]);
          this.C = [start, end];
        }
        if (v[1] != o[1]) {
          this.A = [v[1] + 1, Math.max(v[1] + 1, this.A[1])];
        }
      }
      // deep: true
    },
    A: {
      handler: function(v, o) {
        if (v[0] != o[0] && v[0] - this.B[1] != 1) {
          // console.log("A Change")
          const end = v[0] - 1 < 1 ? 1 : v[0] - 1;
          const start = Math.min(end, this.B[0]);
          this.B = [start, end];
        }
        if (v[1] != o[1]) {
          this.S = [v[1] + 1, 500];
        }
      }
      // deep: true
    },
    S: {
      handler: function(v, o) {
        if (v[0] != o[0] && v[0] - this.A[1] != 1) {
          // console.log("A Change")
          const end = v[0] - 1 < 1 ? 1 : v[0] - 1;
          const start = Math.min(end, this.A[0]);
          this.A = [start, end];
        }
        if (v[1] != o[1]) {
          this.S = [v[0], 500];
        }
      }
      // deep: true
    }
  }
};
</script>
<style scoped>
.ruleDialog .mapping-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}
.ruleDialog .mockNumber {
  width: 180px;
  text-align: center;
}
</style>
