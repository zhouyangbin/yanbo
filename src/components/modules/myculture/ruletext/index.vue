
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
  color: rgb(109, 110, 111);
}
</style>
