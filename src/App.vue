<template>
  <div id="app">
    <component :is="$getComponent('Navigation')" />
    <router-view class="router-page" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "@/scss/app.scss";
</style>