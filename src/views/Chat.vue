<template>
  <div class="chat">
    <component :is="$getComponent('Drawer')" :drawerActive="drawerActive" />
    <component :is="$getComponent('Messages')" />
  </div>
</template>

<script>
export default {
  name: "Chat",

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
@import "@/scss/chat.scss";
</style>