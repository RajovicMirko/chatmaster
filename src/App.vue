<template>
  <div id="app">
    <component :is="$getComponent('Navigation')" />
    <router-view class="router-page" />
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  name: 'App',
  components:{
    Navigation
  }
}
</script>

<style lang="scss">
  @import '@/scss/app.scss';
</style>