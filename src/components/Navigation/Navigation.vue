<template>
  <div class="navigation flex flex-align-center flex-justify-between">
    <component :is="$getComponent('AppBanner')" :appName="packageJson.name" />
    <component v-if="!isAuthenticated" :is="$getComponent('NavigationLinks')" />
  </div>
</template>

<script>
import pkgJson from "../../../package.json";

export default {
  name: "Navigation",
  data() {
    return {
      packageJson: pkgJson
    };
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/getIsAuthenticated"];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/navigation";
</style>