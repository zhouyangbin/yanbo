<template>
  <div class="moreMarksSection">
    <div class="inner-container">
      <span class="label title">{{prefixTitle}}加减分:</span> &nbsp;
      <span v-if="readOnly">
        {{desc}}
      </span>
      <el-input v-if="!readOnly" :maxlength="200" style="width:80%" type="textarea" :rows="2" placeholder="请输入内容" v-model="innerDesc">
      </el-input>
    </div>
    <br>
    <div v-if="readOnly">
      <div class="inner-container">
        <span class="label">分数:</span>
        <span>{{mark}}分</span>
      </div>
      <br>
    </div>
    <div v-if="!readOnly" class="marks">
      <el-input-number size="large" class="numbers" v-model="innerMark" :min="-0.5" :max="0.5" :step="0.1" label="描述文字"></el-input-number>
      <span class="greyText">您的打分 /
        <span class="hightlight-mark">{{mark||'0.0'}}分</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    desc: {
      type: String,
      default: ""
    },
    mark: {
      type: Number | String,
      default: ""
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    prefixTitle: {
      type: String,
      default: ""
    }
  },
  computed: {
    innerDesc: {
      get: function() {
        return this.desc;
      },
      set: function(v) {
        // console.log(v);
        this.$emit("update:desc", v);
      }
    },
    innerMark: {
      get() {
        return this.mark;
      },
      set(v) {
        this.$emit("update:mark", v);
      }
    }
  }
};
</script>
<style scoped>
.moreMarksSection .inner-container {
  display: flex;
  color: grey;
}
.moreMarksSection .label {
  margin-right: 20px;
  color: #778294;
  width: 110px;
  min-width: 100px;
  height: 26px;
  box-sizing: border-box;
  line-height: 26px;
  padding: 0 10px;
}
.moreMarksSection .label.title {
  background-color: #52ddab;
  color: white;
  border-radius: 0 13px 13px 0;
}
.moreMarksSection .marks {
  margin-left: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.moreMarksSection .marks .numbers {
  margin-right: 30px;
}
.moreMarksSection {
  background: white;
  padding: 20px 20px 20px 0;
}
.greyText {
  color: #778294;
}
.hightlight-mark {
  font-size: 1.3em;
  color: #52ddab;
}
</style>
