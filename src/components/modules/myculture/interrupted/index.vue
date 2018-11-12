<template>
    <div class="self-interrupt-page">
        <h2>{{msg}}</h2>
        <br>
        <br>
        <img src="@assets/img/interrupt.png" alt="">
    </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.self-interrupt-page {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
