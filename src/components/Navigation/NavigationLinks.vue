<template>
  <div class="links">
    <router-link class="link" v-for="link in links" :key="link.name" :to="link.to">{{link.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: "NavigationLinks",
  data() {
    return {
      links: [
        { name: "Login", to: "/login" },
        { name: "Register", to: "/register" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/navigation";
</style>