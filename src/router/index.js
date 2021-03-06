import Vue from "vue";
import VueRouter from "vue-router";
import store from "@st";
import { getComponent } from '@c/componentMap'

//PAGES
import Error404 from "@v/Error404.vue";
import Login from "@v/Login.vue";
import Register from "@v/Register.vue";
import Chat from "@v/Chat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/logout",
    name: "Logout",
  },
  {
    path: "/chat",
    component: Chat,
    children:[
      {
        path: '',
        name: 'Chat',
        component: getComponent("HappyMessaging")
      },
      {
        path: "messages/:id",
        name: "Messages",
        component: getComponent("Messages")
      }
    ]
  },
  {
    path: "*",
    name: "Error404",
    component: Error404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["auth/getIsAuthenticated"];
  const availablePages = store.getters['chat/getDrawerBtnVisiblePages'];
  
  store.dispatch("chat/handleCurrentContact", to.params.id);

  if (!isAuthenticated && ["Login", "Register"].indexOf(to.name) === -1) {
    return next({ name: "Login" });
  }

  if(to.name === "Logout"){
    return store.dispatch('auth/handleLogout');
  }
  
  if (isAuthenticated && availablePages.indexOf(to.name) === -1) {
    return next({ name: "Chat" });
  }

  store.commit('chat/setCurrentPageName', to.name);
  next();
});
