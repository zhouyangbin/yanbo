<template>
  <el-row type="flex" justify="end" class="level-section">
    <el-col :span="4">
      <span>
        结果/ 
      </span>
      <span v-if="readOnly" class="level">
        {{ value }}
          <el-popover
                placement="top"
                width="331"
                >
                <div class="tip_A">
                </div>
                <el-button slot="reference" type="text" class="Badge_logo"></el-button>
              </el-popover>
      </span>
      <el-select v-model="innerLevel" v-else placeholder="请选择">
        <el-option
          v-for="item in levels"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
      <el-row v-if="value != 'B'">
          <el-col :span="6">标签/</el-col>
          <el-tag v-if="levalLabelRules.length">{{getlevalLabelRules(levalLabelRules)}}</el-tag>
      </el-row>
      <el-row v-if="value == 'B' ">
          <el-col :span="6">标签/</el-col>
          <el-col :span="10" height="100px">
            <el-radio
                :disabled="!canEdit"
                v-for="item of levalLabelRules"
                :key="item.id"
                :label="item.id"
                v-model="innerBlevel"
                >{{ item.name }}
            </el-radio>
          </el-col>
      </el-row>
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
      type: Number,
      default: ""
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    canEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      levels: ["S", "A", "B", "C", "D"],
      levalLabelRules: [],
      id:1
    };
  },
  created() {
    console.log(this.label_id)
    this.getTagsRules();
  },
  methods: {
    getTagsRules() {
      return postAdminTagsRules(
        this.id,
        this.value,
        "superior"
      )
      .then(res => {
          console.log(res);
          this.levalLabelRules = res;
      })
      .catch(e => {});
    },
    getlevalLabelRules(data){
      this.$emit("update", data[0].id.toString());
      return data[0].name;
    }
  },
  computed: {
    innerLevel: {
      get: function() {
        return this.value;
      },
      set: function(v) {
        console.log(v)
        this.$emit("input", v);
      }
    },
    innerBlevel: {
      get: function() {
        return this.label_id;
      },
      set: function(v) {
        console.log(v)
        this.$emit("update", v);
      }
    }
  },
  watch: {
     value(newV,oldV) {
       // do something
       console.log(newV,oldV);
       this.getTagsRules();
     }
  }
};
</script>
<style scoped>
.Badge_logo{
  width: 12px;
  height: 12px;
  padding: 0;
  position: relative;
  top: -9px;
  left: -4px;
  border:none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../../../assets/img/what.png");
}
.tip_A{
  width: 331px;
  height: 254px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../../../assets/img/level_A.png");
}
.level-section {
  font-size: 18px;
  color: #6c7a92;
}
.level-section .level {
  font-size: 26px;
  color: orange;
}
</style>
