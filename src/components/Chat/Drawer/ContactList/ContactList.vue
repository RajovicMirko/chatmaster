<template>
  <div class="contact-list">
    <div class="title"><h3>{{$t("chat.contacts")}}</h3></div>
    <input type="text" class="search" :placeholder="$t('chat.search')" v-model="query" @input="searchForContact" @keypress="handleEnterPress" @keydown.esc="handleEnterPress">
    <ul class="contacts">
      <component v-for="(contact, i) in contactsFiltered" :key="i" :is="$getComponent('Contact')" :contact="contact" />
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'ContactList',

    data(){
      return {
        query:"",
      }
    },

    computed:{
      contactsFiltered(){
          return this.$store.getters["chat/getContactsFiltered"];
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
.contact-list{
  position: relative;
  display: flex;
  flex-direction: column;
  // height: 87%;

  & .title{
    align-self: center;
    flex: 1;
    margin: 0.5rem 0;
  }

  & .search{
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

  & .contacts{
    flex: 35;
    height: 78%;
    overflow: auto;

    &::-webkit-scrollbar{
      display: none;
    }
  }
}
</style>