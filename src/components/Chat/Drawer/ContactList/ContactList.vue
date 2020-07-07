<template>
  <div class="contact-list">
    <component v-for="(contact, i) in contactsFiltered" :key="i" :is="$getComponent('Contact')" :contact="contact" />
  </div>
</template>

<script>
  export default {
    name: 'ContactList',

    computed:{
      contactsFiltered(){
          return this.$store.getters["chat/getContactsFiltered"];
      }
    },
  }
</script>

<style lang="scss" scoped>
.contact-list{
  position: relative;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar{
    display: none;
  }
}
</style>