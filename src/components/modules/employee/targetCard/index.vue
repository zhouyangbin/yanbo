
<template>
  <div class="target-card-component">
    <div class="info">
      <section class="header">
        <span class="label title">{{constants.PERFORMANCE_TARGET}}{{index+1}}:</span>
        <div>
          <span class="label">{{constants.TARGET_WEIGH}} <span v-if="!readOnly">%</span>:</span>
          <el-input-number v-if="!readOnly" @change="handleChange('weights',$event)" :min="1" :max="100" :precision="0" :label="constants.TARGET_WEIGH" controls-position="right" :value="data.weights"></el-input-number>
          <span v-else>
            {{data.weights}} %
          </span>
        </div>
      </section>
      <section>
        <span class="label">{{constants.PERFORMANCE_TARGET}}:</span>
        <el-input v-if="!readOnly" @input="handleChange('target',$event)" class="input-frame" :value="data.target" placeholder="请输入绩效目标"></el-input>
        <span v-else>
          {{data.target}}
        </span>
      </section>
      <section>
        <span class="label">衡量标准:</span>
        <el-input v-if="!readOnly" @input="handleChange('metrics',$event)" class="input-frame" :value="data.metrics" type="textarea" :rows="2" placeholder="请输入衡量标准"></el-input>
        <span v-html="data.metrics&&data.metrics.replace(/\n/g, '<br/>')" v-else>
        </span>
      </section>
      <section>
        <span class="label">完成期限:</span>
        <el-date-picker v-if="!readOnly" value-format="yyyy-MM-dd HH:mm" format="yyyy-MM-dd HH:mm" @input="handleChange('deadlines',$event)" :value="data.deadlines" type="date" placeholder="选择日期">
        </el-date-picker>
        <span v-else>
          {{data.deadlines}}
        </span>
      </section>
      <el-button v-if="!readOnly" @click="$emit('delete',index)" style="margin-left:10px" type="primary">删除</el-button>
    </div>
    <br>
  </div>
</template>
<script>
import { PERFORMANCE_TARGET, TARGET_WEIGH } from "@/constants/TEXT";
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange(key, v) {
      this.$emit("update:data", { ...this.data, [key]: v });
    }
  },
  data() {
    return {
      constants: {
        PERFORMANCE_TARGET,
        TARGET_WEIGH
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.target-card-component {
  background-color: white;
  padding: 20px 20px 20px 0;
  & + .target-card-component {
    border-top: solid 1px grey;
  }
  .info {
    color: grey;
    & section {
      display: flex;
      margin-bottom: 10px;
      &.header {
        justify-content: space-between;
      }
      .input-frame {
        width: 40%;
        min-width: 100px;
      }
    }
    .label {
      margin-right: 20px;
      color: #778294;
      width: 110px;
      min-width: 110px;
      height: 26px;
      box-sizing: border-box;
      line-height: 26px;
      padding: 0 10px;
      flex-shrink: 0;
      &.title {
        background-color: #52ddab;
        color: white;
        border-radius: 0 13px 13px 0;
      }
    }
  }
}
</style>
