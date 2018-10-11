
<template>
  <div v-html="text" class="rules-text">

  </div>
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
<style scoped>
.rules-text {
  font-size: 14px;
  color: #9b9b9b;
  line-height: 30px;
}
</style>
