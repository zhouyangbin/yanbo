<template>
  <div class="reject-reason-components">
    <span class="label">{{constants.DOWN_MEMBER_REJECT_REASON}}</span>
    <span>{{data}}</span>
  </div>
</template>
<script>
import { DOWN_MEMBER_REJECT_REASON } from "@/constants/TEXT";
export default {
  props: {
    data: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      constants: {
        DOWN_MEMBER_REJECT_REASON
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.reject-reason-components {
  padding: 30px 36px;
  display: flex;
  //   justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  line-height: 30px;
  background: #f18d23;
  & .label {
    font-size: 24px;
    margin-right: 32px;
    flex-shrink: 0;
  }
}
</style>
