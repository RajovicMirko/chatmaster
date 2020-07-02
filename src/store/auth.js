import { vm } from "@/main";
import {Loader} from "@/js/loaders/loader"


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
    setTimeout(() => {
      commit("register", payload);
    }, 1000)
  },

  handleLogin({ commit }, payload) {
    Loader.start();
    try {
      setTimeout(() => {
          commit("login", payload);
          vm.$router.push({ name: "Chat" });
          
          Loader.end();
      }, 3000)
    } catch (error) {
      Loader.end();
    }
  },

  handleLogout({ commit }, payload) {
    Loader.start();

    try {
      setTimeout(() => {
        commit("logout", payload);
        vm.$router.push({ name: "Login" });

        Loader.end();
      }, 1000)
    } catch (error) {
      Loader.end();
    }
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
