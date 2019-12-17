<template>
  <div class="commentsSection">
    <div class="leaderComments">
      <div class="inner-container">
        <span class="label title">上级评价:</span>
        <span
          style="width:80%;overflow-wrap: break-word;"
          :inner-html.prop="comments | linebreak"
          v-if="readOnly"
        ></span>
        <el-input
          v-else
          :maxlength="1000"
          style="width:80%"
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="innerDesc"
        ></el-input>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comments: {
      type: String,
      default: ""
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    innerDesc: {
      get: function() {
        return this.comments;
      },
      set: function(v) {
        // console.log(v)
        this.$emit("update:comments", v);
      }
    }
  }
};
</script>
<style scoped>
.leaderComments .inner-container {
  display: flex;
  color: grey;
}
.leaderComments .label {
  margin-right: 20px;
  color: #778294;
  width: 110px;
  min-width: 100px;
  height: 26px;
  box-sizing: border-box;
  line-height: 26px;
  padding: 0 10px;
}
.commentsSection {
  background: white;
  padding: 20px 20px 20px 0;
}
.commentsSection .label.title {
  background-color: #52ddab;
  color: white;
  border-radius: 0 13px 13px 0;
}
</style>
