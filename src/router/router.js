import {createWebHistory, createRouter} from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

import Home from "../App.vue";

const routes = [
  {
    path: "/",
    name:"home",
    component: Home 
  },
  { 
    path: "/login", 
    name: "login", 
    component: Login
  },
  {
    path: "/signup",
    name: "register",
    component: Register
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;