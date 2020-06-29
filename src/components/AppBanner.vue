<template>
  <div class="banner">
    <div class="flex flex-align-end">
      <img class="banner-icon" src="@/assets/icon-white.png" alt />
      <span class="banner-title">{{appName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBanner",
  props: {
    appName: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/navigation";
</style>