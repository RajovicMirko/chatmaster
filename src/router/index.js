import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

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
    path: "/chat",
    name: "Chat",
    component: Chat,
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

  if (!isAuthenticated && ["Login", "Register"].indexOf(to.name) === -1) {
    return next({ name: "Login" });
  }

  if (isAuthenticated && "Chat" !== to.name) {
    return next({ name: "Chat" });
  }

  next();
});
