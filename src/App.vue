<template>
  <h1>TrashBram, With friends is better 😉</h1>
  <nav>
  <ul>
  <router-link to="/">Home</router-link>
  <router-link to="/login">Sign In</router-link>
  <router-link to="signup">Sign Up </router-link>
  </ul>
  </nav>
  <router-view>
</template>

<script>
export default {
  name: 'Home',
}
</script>
