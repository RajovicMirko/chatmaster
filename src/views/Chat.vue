<template>
  <div class="chat">
    <component :is="$getComponent('Drawer')" :drawerActive="drawerActive" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Chat",

  beforeMount(){
    this.$store.dispatch("chat/handleDrawerActive", true);
  },

  computed: {
    drawerActive(){
      return this.$store.getters['chat/getDrawerActive'];
    },
    
    users(){
      return this.$store.getters["chat/getUsers"];
    }
  }
};
</script>

<style lang="scss">
  @import "@sc/chat.scss";
</style>