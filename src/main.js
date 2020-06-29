import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { getComponent } from "./components/componentMap";
Vue.prototype.$getComponent = getComponent;

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default vm;
