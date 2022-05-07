<template>
  <h1>TrashBram, With friends is better 😉</h1>
  <router-link to="/">Home</router-link>
  <router-link to="/login">Login</router-link>
  <router-link to="/signup">Register</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>
