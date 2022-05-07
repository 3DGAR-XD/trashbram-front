import { createApp } from "vue";
import app from "./App.vue";
import { router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

createApp(app).use(router).mount("#app");
