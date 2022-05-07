<template>
  <form method="post" @submit.prevent="login">
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        pattern="[A-Zaa-z]{10}"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button type="submit" class="btn btn-outline-secondary">
      Iniciar Sesion
    </button>
  </form>
</template>

<script>
export default {
  name: "login",
  methods: {
    login() {
      console.log("logueado")
    }
  }
};
</script>