<template>
  <div class="login flex flex-column flex-align-center flex-justify-center">
    <form class="flex flex-column flex-align-center" @submit="handleSubmit">
      <h1 class="title">Chat {{$t("login.title")}}</h1>
      <input class="bordered" v-model="email" type="email" name="email" :placeholder="$t('login.inputEmail')" />
      <input class="bordered" v-model="password" type="password" name="password" :placeholder="$t('login.inputPassword')" />

      <button type="submit" class="bordered">{{$t("login.btnLogin")}}</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$store.dispatch('auth/handleLogin', this.$data)
    }
  }
};
</script>

<style lang="scss">
  @import "@sc/login.scss";
</style>