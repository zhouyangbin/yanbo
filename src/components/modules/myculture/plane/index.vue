
<template>
  <div class="plane-page">
    <img src="@assets/img/plane.png" alt="">
    <div :data-score="`${planeScore.wsScore}分`" class="circle wushi">
      务实
    </div>
    <div :data-score="`${planeScore.hzScore}分`" class="circle hezuo">
      合作
    </div>
    <div :data-score="`${planeScore.cxScore}分`" class="circle chuangxin">
      创新
    </div>
    <div :data-score="`${planeScore.cjkhScore}分`" class="circle kehu">
      成就客户
    </div>
  </div>
</template>
<script>
export default {
  props: {
    planeScore: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
<style lang="scss" scoped>
.plane-page {
  position: relative;
  .circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    text-align: center;
    line-height: 64px;
    font-size: 24px;
    color: #ffffff;
    &.wushi {
      background: #006fbc;
      position: absolute;
      right: 130px;
      top: 20px;
      &::before {
        position: absolute;
        background: #006fbc;
        content: "";
        width: 100px;
        height: 1px;
        right: 64px;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        position: absolute;
        color: #006fbc;
        content: attr(data-score);
        right: -80px;
      }
    }
    &.hezuo {
      background: #f18d23;
      position: absolute;
      right: 50px;
      top: 220px;
      &::before {
        position: absolute;
        background: #f18d23;
        content: "";
        width: 100px;
        height: 1px;
        right: 64px;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        position: absolute;
        color: #f18d23;
        content: attr(data-score);
        right: -80px;
      }
    }
    &.chuangxin {
      background: #f18d23;
      position: absolute;
      left: 60px;
      top: 80px;
      &::before {
        position: absolute;
        background: #f18d23;
        content: "";
        width: 100px;
        height: 1px;
        right: -100px;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        position: absolute;
        color: #f18d23;
        content: attr(data-score);
        left: -50px;
      }
    }
    &.kehu {
      background: #006fbc;
      position: absolute;
      left: 130px;
      bottom: 40px;
      line-height: 32px;
      &::before {
        position: absolute;
        background: #006fbc;
        content: "";
        width: 100px;
        height: 1px;
        right: -100px;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        position: absolute;
        color: #006fbc;
        content: attr(data-score);
        left: -60px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
