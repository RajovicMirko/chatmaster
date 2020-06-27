<template>
  <div class="navigation">
    <component :is="$getComponent('AppBanner')" :appName="packageJson.name" />
  </div>
</template>

<script>
  import pkgJson from '../../package.json';

  export default {
    name: 'Navigation',
    data(){
      return{
        packageJson: pkgJson
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/navigation';
</style>