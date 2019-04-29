
<template>
  <div class="target-card-component">
    <div class="info">
      <section class="header">
        <span class="label title">{{constants.PERFORMANCE_TARGET}}{{index+1}}:</span>
        <div v-if="containKey('weights')">
          <span class="label">
            {{constants.TARGET_WEIGH}}
            <span v-if="!readOnly">%</span>:
          </span>
          <el-input-number
            v-if="!readOnly"
            @change="handleChange('weights',$event)"
            :min="1"
            :max="100"
            :precision="0"
            :label="constants.TARGET_WEIGH"
            controls-position="right"
            :value="data.weights"
          ></el-input-number>
          <span v-else>{{data.weights}} %</span>
        </div>
      </section>
      <section v-if="containKey('target')">
        <span class="label">{{constants.PERFORMANCE_TARGET}}:</span>
        <el-input
          v-if="!readOnly"
          @input="handleChange('target',$event)"
          class="input-frame"
          :value="data.target"
          placeholder="请输入绩效目标"
        ></el-input>
        <span v-else>{{data.target}}</span>
      </section>
      <section v-if="containKey('description')">
        <span class="label">具体工作/任务描述:</span>
        <el-input
          :maxlength="1000"
          v-if="!readOnly"
          @input="handleChange('description',$event)"
          class="input-frame"
          :value="data.description"
          type="textarea"
          :rows="2"
          placeholder="具体工作/任务描述"
        ></el-input>
        <span v-html="data.description&&data.description.replace(/\n/g, '<br/>')" v-else></span>
      </section>
      <section v-if="containKey('metrics')">
        <span class="label">衡量标准:</span>
        <el-input
          :maxlength="1000"
          v-if="!readOnly"
          @input="handleChange('metrics',$event)"
          class="input-frame"
          :value="data.metrics"
          type="textarea"
          :rows="2"
          placeholder="请输入衡量标准"
        ></el-input>
        <span v-html="data.metrics&&data.metrics.replace(/\n/g, '<br/>')" v-else></span>
      </section>

      <section v-if="containKey('deadlines')">
        <span class="label">完成期限:</span>
        <el-date-picker
          v-if="!readOnly"
          value-format="yyyy-MM-dd HH:mm"
          format="yyyy-MM-dd HH:mm"
          @input="handleChange('deadlines',$event)"
          :value="data.deadlines"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
        <span v-else>{{data.deadlines}}</span>
      </section>
      <el-button
        v-if="!readOnly"
        @click="$emit('delete',index)"
        style="margin-left:10px"
        type="primary"
      >删除</el-button>
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
    },
    keys: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleChange(key, v) {
      this.$emit("update:data", { ...this.data, [key]: v });
    },
    containKey(key) {
      return this.keys.includes(key);
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
  padding: 20px 20px 20px 0;
  background-color: white;
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
    // prettier-ignore
    .label {
      flex-shrink: 0;
      box-sizing: border-box;
      width: 180px;
      min-width: 120PX;
      height: 26px;
      padding: 0 10px;
      margin-right: 20px;
      color: #778294;
      line-height: 26px;
      &.title {
        color: white;
        background-color: #52ddab;
        border-radius: 0 13px 13px 0;
      }
    }
  }
}
</style>
