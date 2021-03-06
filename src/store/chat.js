const contacts = [
  {id: 1, fullName: "Ivan Milutinović", img: "https://media-exp1.licdn.com/dms/image/C4E03AQFevRUndtwiiA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=fe_-fUfDqZGyFhIm1fyW50fRf1Tz3I7nSQ1A-bWhoEg", status: "online"},
  {id: 2, fullName: "Nikola Ćebić", img: "https://media-exp1.licdn.com/dms/image/C5603AQGbdU1QeIWt-A/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=na0cdl9dhPl55U9u_1afB4SEBVwcNGBRqq45biMNAWg", status: "busy"},
  {id: 3, fullName: "Nikola Lukić", img: "https://media-exp1.licdn.com/dms/image/C4D03AQGrugbu0TEJig/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=FiqZ0bBkel6rCreTTjGBhT8Dgl3K7gWkt5I8v6XbmbA", status: "offline"},
  {id: 4, fullName: "Default User", img: "", status: ""},
  {id: 5, fullName: "Default User", img: "", status: ""},
  {id: 6, fullName: "Default User", img: "", status: ""},
  {id: 7, fullName: "Default User", img: "", status: ""},
  {id: 8, fullName: "Default User", img: "", status: ""},
  {id: 9, fullName: "Default User", img: "", status: ""},
  {id: 10, fullName: "Default User", img: "", status: ""},
  {id: 11, fullName: "Default User", img: "", status: ""},
  {id: 12, fullName: "Default User", img: "", status: ""},
  {id: 13, fullName: "Default User", img: "", status: ""},
  {id: 14, fullName: "Default Last User", img: "", status: ""},
]

// STATE /////////////////////////////////////////////////////////////////////////////
const state = {
  drawerActive: true,
  drawerBtnVisiblePages: ['Chat', 'Messages'],
  currentPageName: '',
  contactsFiltered: contacts,
  currentContact: {},
  userSetupVisible: false
};

// MUTATIONS /////////////////////////////////////////////////////////////////////////////
const mutations = {
  setCurrentPageName(state, payload){
    state.currentPageName = payload;
  },
  
  setDrawerActive(state, payload){
    state.drawerActive = payload;
  },

  setContactsFiltered(state, payload){
    const result = contacts.filter(contact => contact.fullName.toLowerCase().indexOf(payload.toLowerCase()) !== -1);
    state.contactsFiltered = Object.assign([], result);
  },

  setCurrentContact(state, payload){
    const result = Object.assign({}, contacts.find(contact => contact.id == payload));
    
    state.currentContact = Object.assign({}, result);
  },

  setUserSetupVisible(state){
    state.userSetupVisible = !state.userSetupVisible;
  }
};

// ACTIONS /////////////////////////////////////////////////////////////////////////////
const actions = {
  handleDrawerActive({commit}, payload){
    commit("setDrawerActive", payload)
  },

  handleSearch({commit}, payload){
    commit("setContactsFiltered", payload);
  },

  handleCurrentContact({commit}, payload){
    commit("setCurrentContact", payload);
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

  getDrawerBtnVisiblePages(state){
    return state.drawerBtnVisiblePages;
  },

  getContactsFiltered(state){
    return state.contactsFiltered;
  },

  getCurrentContact(state){
    return state.currentContact;
  },

  getUserSetupVisible(state){
    return state.userSetupVisible;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
