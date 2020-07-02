// STATE /////////////////////////////////////////////////////////////////////////////
const state = {
  users: [
    {id: 1, fullName: "Rajović Mirko", img: "@/assets/user-default-icon.png", status: "offline"},
    {id: 2, fullName: "Ivan Milutinović", img: "@/assets/user-default-icon.png", status: "active"},
    {id: 3, fullName: "Nikola Ćebić", img: "@/assets/user-default-icon.png", status: "busy"},
    {id: 4, fullName: "Nikola Lukić", img: "@/assets/user-default-icon.png", status: "active"},
  ],
  drawerActive: true,
  currentPageName: ''
};

// MUTATIONS /////////////////////////////////////////////////////////////////////////////
const mutations = {
  setCurrentPageName(state, payload){
    state.currentPageName = payload;
  },
  
  setDrawerActive(state, payload){
    state.drawerActive = payload;
  }
};

// ACTIONS /////////////////////////////////////////////////////////////////////////////
const actions = {
  handleDrawerActive({commit}, payload){
    commit("setDrawerActive", payload)
  }
};

// GETTERS /////////////////////////////////////////////////////////////////////////////
const getters = {
  getCurrentPageName(state){
    return state.currentPageName;
  },

  getDrawerActive(state){
    return state.drawerActive;
  },
  getUsers(state){
    return state.users;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
