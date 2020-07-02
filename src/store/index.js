import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import chat from "./chat";

Vue.use(Vuex);

export default (() => {
  const Store = new Vuex.Store({
    modules: { auth, chat },
  });

  return Store;
})();
