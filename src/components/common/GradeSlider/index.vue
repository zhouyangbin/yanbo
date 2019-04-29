<template>
  <div class="GradeSlider-page">
    <!-- <div v-if="min==0" @click="readOnly?undefined:$emit('input',0)" @mouseover="hoverDot" :class="{'hoverd' :hoverValue===0,'selected':value===0,'invisible':value>0 &&!onHover,'half-invisible':hoverValue>0}" class="dot" :data-num="0" :style="{left: `0`}"></div> -->
    <div
      @click="readOnly ? undefined : $emit('input', (x - 1 + min) * step)"
      @mouseleave="hoverValue = ''"
      :class="{
        hoverd: hoverValue === (x - 1 + min) * step,
        selected: value == (x - 1 + min) * step,
        invisible: value > (x - 1 + min) * step && !onHover,
        'half-invisible': hoverValue > (x - 1 + min) * step
      }"
      @mouseover="hoverDot"
      v-for="x in diff / step"
      :data-num="(x - 1 + min) * step"
      :key="x"
      class="dot"
      :style="{ left: `${(100 / (diff / step - 1)) * (x - 1)}%` }"
    ></div>

    <div
      v-show="!onHover"
      :style="selectedStyle"
      class="selected-wrapper"
    ></div>
    <div v-show="onHover" :style="hoverStyle" class="hover-wrapper"></div>
  </div>
</template>
<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    step: {
      type: Number,
      default: 0.5
    },
    value: {
      type: [String, Number],
      default: ""
    },
    self: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hoverValue: ""
    };
  },
  methods: {
    hoverDot(e) {
      this.hoverValue = e.target.dataset.num;
    }
  },
  computed: {
    selectedStyle() {
      return {
        width: `${
          this.value
            ? (100 / (this.diff / this.step - 1)) *
                ((this.value - this.min) / this.step) +
              1
            : 0
        }% `
      };
    },
    hoverStyle() {
      return {
        width: `${
          this.hoverValue
            ? (100 / (this.diff / this.step - 1)) *
                ((this.hoverValue - this.min) / this.step) +
              1
            : 0
        }% `
      };
    },
    onHover() {
      return this.hoverValue != "";
    },
    diff() {
      return this.max - this.min + this.step;
    }
  }
};
</script>
<style lang="scss" scoped>
.GradeSlider-page {
  height: 4px;
  display: flex;
  background: #d8d8d8;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 40px 40px 40px 0;
  .dot {
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: #d8d8d8;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    &.half-invisible {
      opacity: 0.5;
    }
    &.invisible {
      background: transparent;
    }
    &.selected {
      background: #f18d23;
      height: 40px;
      width: 40px;
      &::before {
        font-size: 26px;
        color: #f18d23;
        top: -30px;
      }
    }
    &.hoverd {
      background: #c98d0d;
      height: 40px;
      width: 40px;
      // z-index: initial;
      // opacity: 0.5;
    }
    &::before {
      content: attr(data-num);
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      color: #9b9b9b;
    }
  }
  .selected-wrapper {
    position: absolute;
    height: 20px;
    left: 0;
    background-image: linear-gradient(90deg, #f9c149 7%, #f18d23 92%);
    border-radius: 12px 0 0 12px;
  }
  .hover-wrapper {
    position: absolute;
    opacity: 0.5;
    height: 20px;
    left: 0;
    background-image: linear-gradient(90deg, #f9c149 7%, #f18d23 92%);
    border-radius: 12px 0 0 12px;
  }
}
</style>
