<template>
  <div
    :data-summary="summary"
    :class="{ hide: !total }"
    class="members-distribute-number"
  >
    <div
      v-if="data.top.count"
      :style="{ flex: data.top.count }"
      :data-p="topP"
      class="top"
    >
      Top
    </div>
    <div
      v-if="data.middle.count"
      :style="{ flex: data.middle.count }"
      :data-p="mediumP"
      class="medium"
    >
      Middle
    </div>
    <div
      v-if="data.bottom.count"
      :style="{ flex: data.bottom.count }"
      :data-p="bottomP"
      class="bottom"
    >
      Bottom
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        top: {
          count: 0,
          expected: 0
        },
        middle: {
          count: 0,
          expected: 0
        },
        bottom: {
          count: 0,
          expected: 0
        }
      })
    }
  },
  computed: {
    total() {
      return (
        this.data.top.count + this.data.middle.count + this.data.bottom.count
      );
    },
    topP() {
      // return `${parseFloat(
      //   (parseFloat(this.data.top.count / this.total) * 100).toPrecision(4)
      // ).toFixed(2)}%`;
      return `${this.data.top.count}人`;
    },
    mediumP() {
      // return `${parseFloat(
      //   (parseFloat(this.data.middle.count / this.total) * 100).toPrecision(4)
      // ).toFixed(2)}%`;
      return `${this.data.middle.count}人`;
    },
    bottomP() {
      // return `${parseFloat(
      //   (parseFloat(this.data.bottom.count / this.total) * 100).toPrecision(4)
      // ).toFixed(2)}%`;
      return `${this.data.bottom.count}人`;
    },
    summary() {
      return `理想271比例分布：Top（${this.data.top.expected}人）、Middle（${
        this.data.middle.expected
      }人）、Bottom（${this.data.bottom.expected}人） 实际分布如下`;
    }
  }
};
</script>
<style lang="scss" scoped>
.members-distribute-number {
  font-size: 16px;
  min-width: 440px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex: 1;
  color: white;
  position: relative;
  &.hide {
    height: 0px;
  }
  &::before {
    content: attr(data-summary);
    position: absolute;
    left: 0;
    top: -20px;
    font-size: 14px;
    color: #4a4a4a;
    line-height: 20px;
  }
}
.members-distribute-number div {
  display: inline-block;
  text-align: center;
  padding: 10px 5px;
  position: relative;
}
.members-distribute-number .top {
  flex: 2;
  background: #7ed321;
  border-radius: 5px 0px 0px 5px;
  &::after {
    content: attr(data-p);
    position: absolute;
    bottom: -20px;
    color: #7ed321;
    left: 50%;
    transform: translateX(-50%);
  }
}
.members-distribute-number .medium {
  flex: 6;
  background: #f5d323;
  &::after {
    content: attr(data-p);
    position: absolute;
    bottom: -20px;
    color: #f5d323;
    left: 50%;
    transform: translateX(-50%);
  }
}
.members-distribute-number .bottom {
  background: #e94a2d;
  flex: 2;
  border-radius: 0px 5px 5px 0px;
  &::after {
    content: attr(data-p);
    position: absolute;
    bottom: -20px;
    color: #e94a2d;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
