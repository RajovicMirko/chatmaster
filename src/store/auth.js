import { vm } from "@/main";

// STATE /////////////////////////////////////////////////////////////////////////////
const state = {
  isAuthenticated: false,
  user: {},
};

// MUTATIONS /////////////////////////////////////////////////////////////////////////////
const mutations = {
  register(state, payload) {
    state;
    console.log("register", payload);
  },

  login(state) {
    state.isAuthenticated = true;
  },

  logout(state) {
    state.isAuthenticated = false;
    state.user = {};
  },
};

// ACTIONS /////////////////////////////////////////////////////////////////////////////
const actions = {
  handleRegister({ commit }, payload) {
    commit("register", payload);
  },

  handleLogin({ commit }, payload) {
    commit("login", payload);
    vm.$router.push({ name: "Chat" });
  },

  handleLogout({ commit }, payload) {
    commit("logout", payload);
    vm.$router.push({ name: "Login" });
  },
};

// GETTERS /////////////////////////////////////////////////////////////////////////////
const getters = {
  getIsAuthenticated(state) {
    return state.isAuthenticated;
  },

  getUser(state) {
    return state.user;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
