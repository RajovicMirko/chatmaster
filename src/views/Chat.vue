<template>
  <div class="chat">
    <component :is="$getComponent('Drawer')" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Chat",

  computed: {
    users(){
      return this.$store.getters["chat/getUsers"];
    }
  }
};
</script>

<style lang="scss">
  @import "@sc/chat.scss";
</style>