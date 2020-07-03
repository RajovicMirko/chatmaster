<template>
  <div class="chat-drawer" :class="{inactive: !drawerActive}">
    <!-- INSERT LIST COMPONENT -->
    <component :is="$getComponent('User')" />
    <component :is="$getComponent('ContactList')" />
  </div>
</template>

<script>
  export default {
    name: "ChatDrawer",
    props: {
      drawerActive:{
        type: Boolean,
        requiered: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/chat-drawer.scss";
</style>