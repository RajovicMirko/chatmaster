import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { getComponent } from '../components/componentMap'

//PAGES
import Error404 from "../views/Error404.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Chat from "../views/Chat.vue";

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
    name: "Chat",
    component: Chat,
    children:[
      {
        path: "messages/:id",
        name: "ChatMessages",
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
  
  store.dispatch("chat/handleCurrentContact", to.params.id);

  if (!isAuthenticated && ["Login", "Register"].indexOf(to.name) === -1) {
    return next({ name: "Login" });
  }

  if(to.name === "Logout"){
    return store.dispatch('auth/handleLogout');
  }

  // if (isAuthenticated && "Chat" !== to.name) {
  //   return next({ name: "Chat" });
  // }

  store.commit('chat/setCurrentPageName', to.name);
  next();
});
