<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    var bpitCommonData = require("bpit.common.data");
    bpitCommonData.log({
      group: "talents",
      project: "FE-PC-TDC",
      env: process.env.VUE_APP_RDENV,
      page: "index"
    });
  },
  provide() {
    return {
      page_reload: this.page_reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    page_reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  /*background: url(assets/bg1.jpg) center !important;
          background-size: cover;*/
  background: white;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}

#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
</style>
