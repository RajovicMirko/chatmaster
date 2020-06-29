<template>
  <div class="navigation flex flex-align-center flex-justify-between">
    <component :is="$getComponent('AppBanner')" :appName="packageJson.name" />
    <component :is="$getComponent('NavigationLinks')" />
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/navigation";
</style>