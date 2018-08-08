<template>
    <div class="moreMarksSection">
        <div class="inner-container">
            <span class="label title">加、减分:</span> &nbsp;
            <el-input :maxlength="200" style="width:80%" type="textarea" :rows="2" placeholder="请输入内容" v-model="innerDesc">
            </el-input>
        </div>
        <br>
        <div class="marks">
            <el-input-number size="large" class="numbers" v-model="innerMark" :min="-0.5" :max="0.5" :step="0.1" label="描述文字"></el-input-number>
            <span>您的打分/5</span>
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
    }
  },
  computed: {
    innerDesc: {
      get: function() {
        return this.desc;
      },
      set: function(v) {
        console.log(v);
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
}
.moreMarksSection .label {
  margin-right: 20px;
  color: black;
  width: 100px;
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
  margin-right: 20px;
}
.moreMarksSection {
  background: white;
  padding: 20px;
}
</style>
