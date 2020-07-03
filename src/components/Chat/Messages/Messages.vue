<template>
  <div class="chat-messages">
    this is messages view for partner id {{contact.id}}
  </div>
</template>

<script>
  export default {
    name: "ChatMessages",

    computed:{
      contact(){
        return this.$store.getters["chat/getContactById"](this.$route.params.id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/chat-messages.scss";
</style>