<template>
  <div id="app">
    <component :is="$getComponent('Navigation')" />
    <component :is="$getComponent('LocaleSwitcher')" />

    <notifications position="center"/>
    
    <router-view class="router-page" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
  @import "@sc/app.scss";
</style>