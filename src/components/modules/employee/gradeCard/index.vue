<template>
  <div class="grade-card-container">
    <div class="info">
      <section>
        <span class="label title">{{constants.PERFORMANCE_TARGET}}{{index+1}}:</span>
        <div class="target-name">{{data.target}}</div>
      </section>
      <br>
      <section>
        <span class="label"></span>

        <el-row style="flex:1" type="flex" justify="space-between">
          <div class="delight">
            <div v-if="data.description">
              <section>
                <span class="label">具体工作/任务描述:</span> &nbsp;
                <span>{{data.description}}</span>
              </section>
              <!-- <br> -->
            </div>
            <div v-if="data.metrics">
              <section>
                <span class="label">衡量标准:</span> &nbsp;
                <span v-html="data.metrics.replace(/\n/g, '<br/>')"></span>
              </section>
            </div>
            <div v-if="data.target_self_score && data.target_self_score.description!=null">
              <section>
                <span class="label">自评分理由:</span> &nbsp;
                <span>{{data.target_self_score && data.target_self_score.description}}</span>
              </section>
            </div>
            <div
              v-if="readOnly&&data.target_superior_score && data.target_superior_score.description!=null"
            >
              <section>
                <span class="label">上级评分理由:</span> &nbsp;
                <span>{{data.target_superior_score && data.target_superior_score.description}}</span>
              </section>
            </div>

            <div v-if="data.deadlines">
              <section>
                <span class="label">{{constants.FINISH_DATE}}:</span>
                <span>{{data.deadlines}}</span>
              </section>
              <br>
            </div>
          </div>
          <div class="hilight">
            <div v-if="data.weights">
              <section>
                <span class="label">{{constants.TARGET_WEIGH}}:</span> &nbsp;
                <span>{{data.weights*100}}%</span>
              </section>
            </div>
            <div v-if="data.target_self_score && data.target_self_score.score!=null">
              <section>
                <span class="label">{{constants.SELF_SCORE}}:</span> &nbsp;
                <span>{{data.target_self_score && data.target_self_score.score}}分</span>
              </section>
            </div>
            <div v-if="data.target_superior_score && data.target_superior_score.score!=null">
              <section class="colorful">
                <span class="label">{{constants.LEADER_SOCRE}}:</span> &nbsp;
                <span>{{data.target_superior_score && data.target_superior_score.score}}分</span>
              </section>
            </div>
            <div v-if="false">
              <section class="colorful">
                <span class="label">您的打分:</span> &nbsp;
                <span>{{value&& parseFloat(value).toFixed(1)}}分</span>
              </section>
            </div>
          </div>
        </el-row>
      </section>
      <br>
    </div>
    <div v-if="!readOnly" class="marks">
      <div class="target-desc">
        <case-area
          :rows="2"
          :placeholder="placeholder"
          :value="desc"
          @input="$emit('update:desc',$event)"
          :readOnly="readOnly"
        ></case-area>
      </div>
      <div>
        <el-input-number
          :precision="1"
          size="large"
          class="numbers"
          @change="markChange"
          v-model="defaultValue"
          :min="this.config.min"
          :max="this.config.max"
          :step="this.config.step"
          label="描述文字"
        ></el-input-number>
        <!-- <span class="greyText">您的打分 /
          <span class="hightlight-mark">{{value&& parseFloat(value).toFixed(1)}}分</span>
        </span>-->
      </div>
    </div>
  </div>
</template>
<script>
import {
  PERFORMANCE_TARGET,
  TARGET_WEIGH,
  FINISH_DATE,
  SELF_SCORE,
  LEADER_SOCRE
} from "@/constants/TEXT";
export default {
  props: {
    value: {
      type: Number | String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    config: {
      type: Object,
      default: () => ({
        min: 1,
        max: 5,
        step: 1
      })
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    maxlength: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      defaultValue: this.value || "",
      constants: {
        PERFORMANCE_TARGET,
        TARGET_WEIGH,
        FINISH_DATE,
        SELF_SCORE,
        LEADER_SOCRE
      }
    };
  },
  methods: {
    markChange(v) {
      const value = (v && parseFloat(v).toFixed(1)) || 0;
      this.defaultValue = value;
      this.$emit("input", parseFloat(value));
    }
  },
  components: {
    "case-area": () => import("@/components/common/CaseArea/index.vue")
  }
};
</script>
<style scoped>
.grade-card-container {
  background-color: white;
  padding: 20px 20px 20px 0;
}
.grade-card-container .info {
  color: grey;
}
.grade-card-container .info section {
  display: flex;
}
.grade-card-container .marks {
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.grade-card-container .marks .numbers {
  margin-right: 100px;
}
.grade-card-container .marks .target-desc {
  flex: 1;
  margin-right: 40px;
  margin-left: 100px;
}
.grade-card-container .label {
  margin-right: 20px;
  color: #778294;
  width: 130px;
  min-width: 130px;
  height: 26px;
  box-sizing: border-box;
  line-height: 26px;
  padding: 0 10px;
  flex-shrink: 0;
}
.greyText {
  color: #778294;
}
.grade-card-container .label.title {
  background-color: #52ddab;
  color: white;
  border-radius: 0 13px 13px 0;
}
.hightlight-mark {
  font-size: 1.3em;
  color: #52ddab;
}
.target-name {
  align-self: center;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 600;
}
.delight {
  font-size: 14px;
  line-height: 30px;
}
.hilight {
  font-size: 20px;
  line-height: 36px;
  font-weight: 600;
  margin-right: 100px;
}
.grade-card-container .hilight .colorful,
.grade-card-container .colorful .label {
  color: #f18d23;
}
.grade-card-container .hilight .label {
  line-height: 36px;
}
</style>
