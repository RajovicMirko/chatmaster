<template>
  <div class="links">
    <router-link class="link" v-for="link in navigationLinks" :key="link.name" :to="link.to">{{link.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: "NavigationLinks",
  computed:{
    navigationLinks(){
      return this.$store.getters["auth/getNavigationLinks"];
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "@sc/navigation";
</style>