import { createWebHistory, createRouter } from "vue-router";
import login from "@/views/Login.vue";
import register from "@/views/Register.vue";
import home from "@/views/Home.vue";
import terms from "@/views/Terms.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: login
    },
    {
      path: "/signup",
      name: "Register",
      component: register
    },
    {
      path: "/",
      name: "Home",
      component: home
    }
  ]
});
export { router };
