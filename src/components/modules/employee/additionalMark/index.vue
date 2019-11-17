<template>
  <div class="moreMarksSection">
    <div class="inner-container">
      <span class="label title">{{ prefixTitle }}加减分:</span>
      &nbsp;
    </div>
    <br />
    <el-row style="margin-left:110px" type="flex" justify="space-between">
      <div class="delight" style="flex: 1;width: 80%">
        <span
          style="word-wrap: break-word;"
          :inner-html.prop="desc | linebreak"
          v-if="readOnly"
        ></span>
        <el-input
          v-if="!readOnly"
          :maxlength="1000"
          style="width:100%;"
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="innerDesc"
        ></el-input>
      </div>
      <div class="hilight">
        <div v-if="readOnly">
          <div class="inner-container colorful">
            <span class="label">分数:</span>
            <span>{{ (mark && parseFloat(mark).toFixed(1)) || "0.0" }}分</span>
          </div>
          <br />
        </div>
        <div v-else>
          <div>
            您的打分 /
            <span class="hightlight-mark"
              >{{ (mark && parseFloat(mark).toFixed(1)) || "0.0" }}分</span
            >
          </div>
          <el-input-number
            size="large"
            class="numbers"
            v-model="innerMark"
            :min="-0.5"
            :max="0.5"
            :step="0.1"
            label="描述文字"
          ></el-input-number>
        </div>
      </div>
    </el-row>
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
      type: [Number, String],
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
  width: 130px;
  min-width: 130px;
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
  margin-top: 10px;
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
  color: #f18d23;
}
.hilight {
  font-size: 20px;
  line-height: 36px;
  font-weight: 600;
  color: #f18d23;
  margin-right: 100px;
  flex-shrink: 0;
  margin-left: 40px;
}
.hilight .label {
  line-height: 36px;
}
.hilight .colorful,
.colorful .label {
  color: #f18d23;
}
.delight {
  font-size: 14px;
  line-height: 30px;
}
</style>
