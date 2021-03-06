import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@assets/css/common.scss";
import Element from "element-ui";
import "core-js/fn/promise";
import Raven from "raven-js";
import RavenVue from "@/utils/sentry";
import "./registerServiceWorker";
import placeholderFilter from "@/filter/placeholder";
import linebreak from "@/filter/linebreak";
import path from "@/filter/path";
import Waves from "@/directives/waves/index.js";
import device from "vue-device-detector";
const RavenPlugin: any = RavenVue;
Raven.config(process.env.VUE_APP_SENTRY_URL!, {
  environment: process.env.NODE_ENV,
  captureUnhandledRejections: true,
  ignoreErrors: [
    "Do not support the current environment：notInDingTalk",
    /^Non-Error exception captured with keys:/
  ]
})
  .addPlugin(RavenPlugin, Vue)
  .install();

Vue.use(Element);
Vue.use(Waves);
Vue.config.productionTip = false;
Vue.filter("placeholder", placeholderFilter);
Vue.filter("linebreak", linebreak);
Vue.filter("path", path);
Vue.use(device); //使用判断终端模块

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
