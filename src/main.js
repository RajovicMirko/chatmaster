import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@st";

Vue.config.productionTip = false;

import { getComponent } from "@c/componentMap";
Vue.prototype.$getComponent = getComponent;

import { i18n } from '@l/index'

import Notifications from 'vue-notification';
Vue.use(Notifications);

const vm = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

export{
  vm
}
