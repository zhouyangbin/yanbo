<template>
    <div class="reject-reason-components">
        <span class="label">隔级驳回理由</span>
        <span>{{data}}</span>
    </div>
</template>
<script>
export default {
  props: {
    data: {
      type: String,
      default: ""
    }
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
  }
}
</style>
