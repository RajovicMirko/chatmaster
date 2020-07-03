<template>
  <div class="drawer-contact">
    <div class="status-img">
      <div class="status" :class="contact.status" />
      <img v-if="contact.img" :src="contact.img" alt="">
      <img v-else src="@/assets/user-default-icon3.png" alt="">
    </div>
    <div class="text">
      <span class="user-name">{{contact.fullName}}</span>
      <small v-if="contact.id !== 4" class="last-msg-text">Text from last message...</small>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'User',
    props: {
      contact:{
        type: Object,
        default: () => {return {}}
      }
    },
    computed:{
      user(){
        return this.$store.getters['auth/getUser'];
      }
    }
  }
</script>

<style lang="scss" scoped>
$border: 3px solid change-color($secondary, $alpha: 0.5);

.drawer-contact{
  background-color: change-color(gray, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 1.2rem;
  margin-bottom: 0.3rem;

  & .status-img{
    position: relative;
    padding: 0.2rem 0 0 0;
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
      background-color: #17ff02;
    }

    &.offline{
      background-color: #ff0000;
    }

    &.busy{
      background-color: rgb(255, 196, 0);
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