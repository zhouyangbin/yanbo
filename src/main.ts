import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@assets/css/common.scss";
import Element from "element-ui";
import "core-js/fn/promise";
// import Raven from "raven-js";
// import RavenVue from "@/utils/sentry";
// //@ts-ignore
// const RavenPlugin: Raven.RavenPlugin = RavenVue;
// Raven.config("http://3032bfbac9f8464db2b36b47e78544a4@localhost:9000/2", {
//   environment: process.env.NODE_ENV,
//   captureUnhandledRejections: true
// })
//   .addPlugin(RavenPlugin, Vue)
//   .install();

Vue.use(Element);
Vue.config.productionTip = false;

// Raven.context(function() {
//   new Vue({
//     router,
//     render: h => h(App)
//   }).$mount("#app");
// });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
