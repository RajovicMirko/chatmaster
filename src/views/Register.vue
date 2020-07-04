<template>
  <div class="register flex flex-column flex-align-center flex-justify-center">
    <form class="flex flex-column flex-align-center" @submit="handleSubmit">
      <h1 class="title">Chat Register</h1>
      <input class="bordered" v-model="fullName" type="text" name="fullName" placeholder="Full name" />
      <input class="bordered" v-model="email" type="email" name="email" placeholder="Email" />
      <input class="bordered" v-model="password" type="password" name="password" placeholder="Password" />
      <input class="bordered" v-model="repeatPassword" type="password" name="repeatPassword" placeholder="Repeat password" />

      <button type="submit" class="bordered">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
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
  @import "@sc/register.scss";
</style>