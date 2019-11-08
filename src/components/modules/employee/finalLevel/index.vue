<template>
  <el-row type="flex" justify="end" class="level-section">
    <el-col :span="4">
      <span>
        结果/ 
      </span>
      <span v-if="readOnly" class="level" v-on:mouseenter="()=>{this.tip_A_show = true}" >
        {{ value }}
        <span class="Badge_logo"></span>
        <span v-if="tip_A_show" class="tip_A" v-on:mouseleave="()=>{this.tip_A_show = false}"></span>
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
          <el-col :span="12">
            <el-radio
                v-for="item of sttusCodes"
                :key="item.value"
                :label="item.value"
                v-model="B_level"
                >{{ item.label }}
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
    B_level: {
      type: String,
      default: ""
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      levels: ["S", "A", "B", "C", "D"],
      radio: "1",
      sttusCodes: [
            {
              label: "A",
              value: "0",
              selected: "1"
            },
            {
              label: "B",
              value: "1",
              selected: "0"
            },
            {
              label: "C",
              value: "2",
              selected: "0"
            },
            {
              label: "D",
              value: "3",
              selected: "0"
            }
      ],
      id:1,
      tip_A_show:false
    };
  },
  created() {
    //this.getTagsRules();
  },
  methods: {
    getTagsRules() {
      return postAdminTagsRules(
        this.id,
        this.value,
        "superior"
      )
        .then(res => {
          console.log(res)
        })
        .catch(e => {});
    }
  },
  computed: {
    innerLevel: {
      get: function() {
        return this.value;
      },
      set: function(v) {
        this.$emit("input", v);
      }
    }
  }
};
</script>
<style scoped>
.Badge_logo {
  width: 12px;
  height: 12px;
  display: inline-block;
  position: absolute;
  top: 0px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../../../assets/img/what.png");
}
.tip_A{
  width: 331px;
  height: 254px;
  display: inline-block;
  position: absolute;
  top: 20px;
  right:10px;
  z-index: 1;
  cursor: pointer;
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
