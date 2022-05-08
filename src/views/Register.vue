<template>
  <form method="post" @submit.prevent="signUp">
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="name-sign-up"
        placeholder="Name"
        required
      />
      <label for="name-sign-up">Name</label>
    </div>
    <div class="form-floating">
      <input
        type="email"
        class="form-control"
        id="email-sign-up"
        placeholder="Email"
        required
      />
      <label for="email-sign-up">Email</label>
    </div>
    <div class="form-floating">
      <input
        type="form-contro"
        class="form-control"
        id="password-sign-up"
        placeholder="Password"
        required
      />
      <label for="password">Password</label>
    </div>
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="conditions-sign-up"
        required
      />
      <label class="form-check-label" for="conditions-sign-up"
        >Accept <router-link to="/terms">Terms and Conditions</router-link></label
      >
    </div>
    <button type="submit" class="btn btn-outline-secondary">Register</button>
  </form>
  <router-view/>
</template>

<script>
export default {
  name: "register",
  methods: {
    signUp() {
      console.log("registered");
    },
  },
};
</script>