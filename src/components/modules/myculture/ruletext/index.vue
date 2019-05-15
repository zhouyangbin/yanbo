<template>
  <div v-html="text" class="rules-text"></div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.rules-text {
  color: #9b9b9b;
  font-size: 14px;
  line-height: 22px;
}
</style>
