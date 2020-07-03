<template>
  <div class="contact-list">
    <div class="title"><h2>Contacts</h2></div>
    <input type="text" class="search" id="contacts" placeholder="Search">
    <div class="contacts">
      <component v-for="(contact, i) in contacts" :key="i" :is="$getComponent('Contact')" :contact="contact" />
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ContactList',

    computed:{
      contacts(){
        return this.$store.getters["chat/getContacts"];
      }
    }
  }
</script>

<style lang="scss" scoped>
.contact-list{
  display: flex;
  flex-direction: column;
  height: 100%;

  & .title{
    align-self: center;
    margin: 0.5rem 0;
  }

  & .search{
    background-color: change-color($color: $black, $alpha: 0.4);
    border: none;
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    color: $white;
    box-shadow: 0 3px 4px change-color($color: $white, $alpha: 0.4);
  }

  & .contacts{
    height: 78%;
    overflow: auto;

    &::-webkit-scrollbar{
      display: none;
    }
  }
}
</style>