<template>
  <div class="register flex flex-column flex-align-center flex-justify-center">
    <form class="flex flex-column flex-align-center" @submit="handleSubmit">
      <h1 class="title">Chat {{$t("register.title")}}</h1>
      <input class="bordered" v-model="fullName" type="text" name="fullName" :placeholder="$t('register.inputFullName')" />
      <input class="bordered" v-model="email" type="email" name="email" :placeholder="$t('register.inputEmail')" />
      <input class="bordered" v-model="password" type="password" name="password" :placeholder="$t('register.inputPassword')" />
      <input class="bordered" v-model="repeatPassword" type="password" name="repeatPassword" :placeholder="$t('register.inputRepeatPassword')" />

      <button type="submit" class="bordered">{{$t("register.btnRegister")}}</button>
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