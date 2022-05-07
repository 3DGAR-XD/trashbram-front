<template>
  <header>
    <h1>TrashBram, With friends is better 😉</h1>
  </header>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/signup">Register</router-link></li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>
