<template>
  <div class="chat-drawer" :class="{inactive: !drawerActive}">
    <!-- INSERT LIST COMPONENT -->
    <component :is="$getComponent('User')" />
    <component :is="$getComponent('UserSetup')" />
    <div class="title"><h3>{{$t("chat.contacts")}}</h3></div>
    <input type="text" class="search" :placeholder="$t('chat.search')" v-model="query" @input="searchForContact" @keypress="handleEnterPress" @keydown.esc="handleEnterPress">
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
    },
    
    data(){
      return {
        query:"",
      }
    },
    
    methods:{
      searchForContact(){
        this.$store.dispatch("chat/handleSearch", this.query);
      },
      
      handleEnterPress(e){
        const validKeyCode = [13, 27];
        if(validKeyCode.indexOf(e.keyCode) !== -1) {
          this.$store.dispatch("chat/handleSearch", this.query);
          this.query = "";
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@sc/chat-drawer.scss";
</style>