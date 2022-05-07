import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "Register",
      component: Register
    }
  ]
});
export { router };
