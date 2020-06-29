<template>
  <div class="register flex flex-column flex-align-center flex-justify-center">
    <form class="flex flex-column flex-align-center" @submit="handleSubmit">
      <h1 class="title">Chat Register</h1>
      <input v-model="email" type="email" name="email" placeholder="Email" />
      <input v-model="username" type="text" name="username" placeholder="Username" />
      <input v-model="password" type="password" name="password" placeholder="Password" />

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      username: "",
      password: "",
      email: ""
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
@import "@/scss/register.scss";
</style>