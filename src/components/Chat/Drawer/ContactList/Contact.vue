<template>
  <li class="drawer-contact" :class="{active: contact.id === activeUser.id}" @click="handleContactSelected(contact)">
    <div class="status-img">
      <div class="status" :class="contact.status" />
      <img v-if="contact.img" :src="contact.img" alt="">
      <img v-else src="@a/user-default-icon3.png" alt="">
    </div>
    <div class="text">
      <span class="user-name">{{contact.fullName}}</span>
      <small v-if="contact.id !== 4" class="last-msg-text">Text from last message...</small>
      <small v-else class="last-msg-text">No messages...</small>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'Contact',
    props: {
      contact:{
        type: Object,
        default: () => {return {}}
      }
    },

    computed:{
      activeUser(){
        return this.$store.getters["chat/getCurrentContact"];
      }
    },

    methods:{
      handleContactSelected(contact){
        this.$router.push({
          path: `/chat/messages/${contact.id}`
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
$border: 3px solid change-color($secondary, $alpha: 0.5);

.drawer-contact{
  background-color: change-color($gray, $alpha: 0.4);
  display: flex;
  align-items: center;
  // justify-content: space-between;
  padding: 0.2rem 1.2rem;
  margin: 0.3rem 0;

  &.active{
    background-color: change-color($secondary, $alpha: 0.8);
  }

  &:hover{
    background-color: change-color($gray, $alpha: 0.8);
  }

  &:active{
    background-color: change-color($gray, $alpha: 1);
  }

  & .status-img{
    position: relative;
    padding: 0.2rem 0 0 0;
    margin-right: 1rem;
  }

  & img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid change-color($white, $alpha: 0.5);
  }

  & .status{
    position: absolute;
    left: -3px;
    width: 12px;
    height: 12px;
    border: $border;
    border-radius: 50%;
    background-color: #000000;

    &.online{
      background-color: $online;
    }

    &.offline{
      background-color: $offline;
    }

    &.busy{
      background-color: $busy;
    }
  }

  & .text{
    display: flex;
    flex-direction: column;
    white-space: nowrap;

    & .user-name{
      font-weight: bold;
    }
  }

}
</style>