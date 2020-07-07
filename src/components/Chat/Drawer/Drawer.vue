<template>
  <div class="chat-drawer" :class="{inactive: !drawerActive}">
    <!-- INSERT LIST COMPONENT -->
    <component :is="$getComponent('User')" />
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
  // @import "@sc/chat-drawer.scss";

.chat-drawer{
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: $drawer-width;
  max-width: $drawer-width;
  left: 0;
  height: 100%;
  background-color: $primary;
  color: $white;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease-in-out;
  z-index: 999;

  &.inactive{
    left: -$drawer-width;
    box-shadow: none;
    min-width: 0;
    max-width: 0;
  }

  & .title{
    display: flex;
    justify-content: center;
    align-items: center;
    position: static;
    height: 40px;
    min-height: 40px;
  }

  & .search{
    position: relative;
    height: 32px;
    min-height: 32px;
    width: 100%;
    background-color: change-color($color: $black, $alpha: 0.4);
    border: none;
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    color: $white;
    box-shadow: 0 2px 2px change-color($color: $white, $alpha: 0.4);
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
  }
}
</style>