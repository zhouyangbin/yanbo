<template>
  <div class="appeal-reason-components">
    <span class="label">{{ constants.APPEAL_REASON }}</span>
    <span>{{ data.reason }}</span>
    <span class="appeal-time">{{ data.time }}</span>
  </div>
</template>
<script>
import { APPEAL_REASON } from "@/constants/TEXT";
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      constants: {
        APPEAL_REASON
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.appeal-reason-components {
  padding: 30px 36px;
  display: flex;
  //   justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  line-height: 30px;
  background: #f18d23;
  position: relative;
  & .label {
    font-size: 24px;
    margin-right: 32px;
    flex-shrink: 0;
  }
  .appeal-time {
    position: absolute;
    right: 30px;
    top: 0;
  }
}
</style>
