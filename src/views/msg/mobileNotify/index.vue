<template>
  <div class="mobileNotify-page">
    <h1>请在PC端打开</h1>
    <img src="@assets/img/blank_sign.png" alt="好文来文化评分" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.mobileNotify-page {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f0cd;
  h1 {
    display: inline-block;
    font-size: 35px;
  }
  img {
    margin-top: 20px;
    height: 100px;
  }
}
</style>
