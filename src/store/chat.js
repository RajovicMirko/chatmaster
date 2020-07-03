// STATE /////////////////////////////////////////////////////////////////////////////
const state = {
  contacts: [
    {id: 1, fullName: "Ivan Milutinović", img: "https://media-exp1.licdn.com/dms/image/C4E03AQFevRUndtwiiA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=fe_-fUfDqZGyFhIm1fyW50fRf1Tz3I7nSQ1A-bWhoEg", status: "online"},
    {id: 2, fullName: "Nikola Ćebić", img: "https://media-exp1.licdn.com/dms/image/C5603AQGbdU1QeIWt-A/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=na0cdl9dhPl55U9u_1afB4SEBVwcNGBRqq45biMNAWg", status: "busy"},
    {id: 3, fullName: "Nikola Lukić", img: "https://media-exp1.licdn.com/dms/image/C4D03AQGrugbu0TEJig/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=FiqZ0bBkel6rCreTTjGBhT8Dgl3K7gWkt5I8v6XbmbA", status: "offline"},
    {id: 4, fullName: "Default User", img: "", status: ""},
    
    {id: 1, fullName: "Ivan Milutinović", img: "https://media-exp1.licdn.com/dms/image/C4E03AQFevRUndtwiiA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=fe_-fUfDqZGyFhIm1fyW50fRf1Tz3I7nSQ1A-bWhoEg", status: "online"},
    {id: 2, fullName: "Nikola Ćebić", img: "https://media-exp1.licdn.com/dms/image/C5603AQGbdU1QeIWt-A/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=na0cdl9dhPl55U9u_1afB4SEBVwcNGBRqq45biMNAWg", status: "busy"},
    {id: 3, fullName: "Nikola Lukić", img: "https://media-exp1.licdn.com/dms/image/C4D03AQGrugbu0TEJig/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=FiqZ0bBkel6rCreTTjGBhT8Dgl3K7gWkt5I8v6XbmbA", status: "offline"},
    {id: 4, fullName: "Default User", img: "", status: ""},
    {id: 1, fullName: "Ivan Milutinović", img: "https://media-exp1.licdn.com/dms/image/C4E03AQFevRUndtwiiA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=fe_-fUfDqZGyFhIm1fyW50fRf1Tz3I7nSQ1A-bWhoEg", status: "online"},
    {id: 2, fullName: "Nikola Ćebić", img: "https://media-exp1.licdn.com/dms/image/C5603AQGbdU1QeIWt-A/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=na0cdl9dhPl55U9u_1afB4SEBVwcNGBRqq45biMNAWg", status: "busy"},
    {id: 3, fullName: "Nikola Lukić", img: "https://media-exp1.licdn.com/dms/image/C4D03AQGrugbu0TEJig/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=FiqZ0bBkel6rCreTTjGBhT8Dgl3K7gWkt5I8v6XbmbA", status: "offline"},
    {id: 4, fullName: "Default User", img: "", status: ""},
    {id: 1, fullName: "Ivan Milutinović", img: "https://media-exp1.licdn.com/dms/image/C4E03AQFevRUndtwiiA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=fe_-fUfDqZGyFhIm1fyW50fRf1Tz3I7nSQ1A-bWhoEg", status: "online"},
    {id: 2, fullName: "Nikola Ćebić", img: "https://media-exp1.licdn.com/dms/image/C5603AQGbdU1QeIWt-A/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=na0cdl9dhPl55U9u_1afB4SEBVwcNGBRqq45biMNAWg", status: "busy"},
    {id: 3, fullName: "Nikola Lukić", img: "https://media-exp1.licdn.com/dms/image/C4D03AQGrugbu0TEJig/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=FiqZ0bBkel6rCreTTjGBhT8Dgl3K7gWkt5I8v6XbmbA", status: "offline"},
    {id: 4, fullName: "Default User", img: "", status: ""},
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

  getContacts(state){
    return state.contacts;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
