import { vm } from "@/main";
import {Loader} from "@/js/loaders/loader"


// STATE /////////////////////////////////////////////////////////////////////////////
const state = {
  isAuthenticated: true,
  user: {
    id: 1,
    fullName: "Rajović Mirko",
    img: "https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/32089503_10216105870424518_2833207354701381632_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=BYu2dFGt75QAX88cu7P&_nc_ht=scontent.fbeg1-1.fna&oh=ee80d1171c3d60d590e9dca83adfc4b1&oe=5F230CC3",
    //img: '',
    status: "online"
  },
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
    state.isAuthenticated = true;
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
      }, 0)
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
