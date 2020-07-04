import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@st";

Vue.config.productionTip = false;

import { getComponent } from "@c/componentMap";
Vue.prototype.$getComponent = getComponent;

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export{
  vm
}
