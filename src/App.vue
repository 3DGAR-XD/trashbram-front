<template>
  <header>
    <h1>TrashBram, With friends is better 😉</h1>
  </header>
  <nav>
    <ul class="list-group">
      <li class="list-group-item"><router-link to="/">Home</router-link></li>
      <li class="list-group-item">
        <router-link to="/login">Log In</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/signup">Register</router-link>
      </li>
    </ul>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "app",
};
</script>
