import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@assets/css/common.scss";
import Element from "element-ui";
import "core-js/fn/promise";
import Raven from "raven-js";
import RavenVue from "@/utils/sentry";

const RavenPlugin: any = RavenVue;
Raven.config(process.env.VUE_APP_SENTRY_URL!, {
  environment: process.env.NODE_ENV,
  captureUnhandledRejections: true
})
  .addPlugin(RavenPlugin, Vue)
  .install();

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
