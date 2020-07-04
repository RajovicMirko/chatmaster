<template>
  <div class="banner" @click="handleBannerClick">
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
  },

  methods:{
    handleBannerClick(){
      this.$store.dispatch("chat/handleDrawerActive", true);
      this.$router.push({name: "Chat"});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@sc/navigation";
</style>