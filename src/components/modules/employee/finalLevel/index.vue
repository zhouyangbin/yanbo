<template>
  <el-row type="flex" justify="end" class="level-section">
    <el-col :span="4">
      <el-row justify="center">
        <el-col :span="6">
          <span style="line-height: 40px;">结果/</span>
        </el-col>
        <el-col :span="18">
          <el-select
            v-if="operate_status"
            v-model="innerLevel"
            placeholder="请选择"
          >
            <el-option
              v-for="item in levels"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
          <span v-else class="level">
            {{ value }}
            <el-popover placement="top" width="360">
              <div class="tip_A"></div>
              <el-button
                slot="reference"
                type="text"
                class="Badge_logo"
              ></el-button>
            </el-popover>
          </span>
        </el-col>
      </el-row>
      <br />
      <div v-if="old_s">
        <el-row v-if="value != 'B'">
          <el-col :span="6">标签/</el-col>
          <el-tag
            :class="
              value == 'A' || value == 'S'
                ? 'status-tag top-style'
                : 'status-tag other-style'
            "
            v-if="levalLabelRules.length"
            >{{ getlevalLabelRules(levalLabelRules) }}</el-tag
          >
        </el-row>
        <el-row v-if="value == 'B'" style="margin-top: 10px">
          <el-col :span="6">标签/</el-col>
          <el-col :span="18" height="100px">
            <el-radio
              style="display: block; margin-top: 5px"
              :disabled="!canEdit"
              v-for="item of levalLabelRules"
              :key="item.id"
              :label="item.id"
              v-model="innerBlevel"
              >{{ item.name }}</el-radio
            >
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { postAdminTagsRules } from "@/constants/API";
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    label_id: {
      type: null,
      default: ""
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    operate_status: {
      type: Boolean,
      default: null
    },
    canEdit: {
      type: Boolean,
      default: false
    },
    old_s: {
      type:null,
      default:"",
    }
  },
  data() {
    return {
      levels: ["S", "A", "B", "C", "D"],
      levalLabelRules: [],
      id: 1
    };
  },
  created() {
    this.getTagsRules();
  },
  methods: {
    getTagsRules() {
      if (!this.value) {
        return false;
      }
      return postAdminTagsRules(this.id, this.value, "superior") //请求 label标签接口
        .then(res => {
          this.levalLabelRules = res;
          if (this.value != "B") {
            //假如  props 的label_id 不是B 那么就取res的第一个id
            this.$emit("update_label_id", res[0].id);
          }
        })
        .catch(e => {});
    },
    getlevalLabelRules(data) {
      this.$emit("update", data[0].id.toString());
      return data[0].name;
    }
  },
  computed: {
    innerLevel: {
      //计算等级
      get: function() {
        return this.value;
      },
      set: function(v) {
        this.$emit("input", v);
      }
    },
    innerBlevel: {
      //计算标签
      get: function() {
        return this.label_id;
      },
      set: function(v) {
        this.$emit("update_label_id", v);
      }
    }
  },
  watch: {
    value(newV, oldV) {
      if (this.value == "B") {
        //假如 结果等级变化为B级 那么 label_id 就清空
        this.$emit("update_label_id", "");
      }
      this.getTagsRules();
    }
  }
};
</script>
<style scoped>
.Badge_logo {
  width: 12px;
  height: 12px;
  padding: 0;
  position: relative;
  top: -9px;
  left: -4px;
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../../../assets/img/what.png");
}
.tip_A {
  width: 360px;
  height: 207px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../../../assets/img/level_A.jpg");
}
.level-section {
  font-size: 18px;
  color: #6c7a92;
}
.level-section .level {
  font-size: 26px;
  color: orange;
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
