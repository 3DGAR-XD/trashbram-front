const { createApp } = require('vue');
import Home from "./App.vue";
import router from "./router/router.js"

createApp(Home).use(router).mount("#app");
