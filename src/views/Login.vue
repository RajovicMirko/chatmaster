<template>
  <div class="login flex flex-column flex-align-center flex-justify-center">
    <form class="flex flex-column flex-align-center" @submit="handleSubmit">
      <h1 class="title">Chat Login</h1>
      <input v-model="username" type="text" name="username" placeholder="Username" />
      <input v-model="password" type="password" name="password" placeholder="Password" />

      <button type="submit" class="logout-btn">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(this.$data);
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/login.scss";
</style>