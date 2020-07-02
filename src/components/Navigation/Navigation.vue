<template>
  <div class="navigation flex flex-align-center flex-justify-between">
    <div class="flex">
      <i class="fas fa-bars drawer-controll" @click="drawerActive = !drawerActive" v-if="currentPageName === 'Chat'"></i>
      <component :is="$getComponent('AppBanner')" :appName="packageJson.name" />
    </div>
    <component :is="$getComponent('NavigationLinks')" />
  </div>
</template>

<script>
import pkgJson from "../../../package.json";

export default {
  name: "Navigation",
  data() {
    return {
      packageJson: pkgJson,
    };
  },

  computed:{
    currentPageName(){
      return this.$store.getters["chat/getCurrentPageName"]
    },

    drawerActive:{
      get(){
        return this.$store.getters['chat/getDrawerActive'];
      },
      set(val){
        this.$store.dispatch("chat/handleDrawerActive", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/navigation";
</style>