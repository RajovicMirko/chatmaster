<template>
  <div class="chat-drawer" :class="{inactive: !drawerActive}">
    <span>test item in drawer</span>
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