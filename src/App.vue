<template>
  <header>
    <h1>TrashBram, With friends is better 😉</h1>
  </header>
  <login></login>
</template>

<script>
import login from "./views/Login.vue";

export default {
  name: "App",
  components: {
    login,
  },
};
</script>
