import { vm } from "@/main";

// STATE /////////////////////////////////////////////////////////////////////////////
const state = {
  isAuthenticated: false,
  user: {},
  navigationLinks: [
    { name: "Login", to: "/login", isAuthenticated: false },
    { name: "Register", to: "/register", isAuthenticated: false },
    { name: "Logout", to: "/logout", isAuthenticated: true }
  ]
};

// MUTATIONS /////////////////////////////////////////////////////////////////////////////
const mutations = {
  register(state, payload) {
    state;
    payload;
    state.isAuthenticated = true;
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
  getNavigationLinks(state){
    return state.navigationLinks.filter(link => link.isAuthenticated === state.isAuthenticated);
  },
  
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
