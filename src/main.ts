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

const RavenPlugin: any = RavenVue;
Raven.config(process.env.VUE_APP_SENTRY_URL!, {
  environment: process.env.NODE_ENV,
  captureUnhandledRejections: true
})
  .addPlugin(RavenPlugin, Vue)
  .install();

Vue.use(Element);
Vue.use(Waves);
Vue.config.productionTip = false;
Vue.filter("placeholder", placeholderFilter);
Vue.filter("linebreak", linebreak);
Vue.filter("path", path);
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
