<template>
  <div class="drawer-user" @click="handleUserSetupVisible">
    <div class="status-img">
      <div class="status" :class="user.status" />
      <img v-if="user.img" :src="user.img" alt="">
      <img v-else src="@a/user-default-icon3.png" alt="">
    </div>
    <span class="user-name">{{user.fullName}}</span>
    <i class="fas fa-chevron-down" :class="{rotate: userSetupVisible}"></i>
  </div>
</template>

<script>
  export default {
    name: 'User',
    
    computed:{
      user(){
        return this.$store.getters['auth/getUser'];
      },

      userSetupVisible(){
        return this.$store.getters['chat/getUserSetupVisible']
      }
    },

    methods:{
      handleUserSetupVisible(){
        this.$store.commit('chat/setUserSetupVisible');
      }
    }
  }
</script>

<style lang="scss" scoped>
$border: 3px solid change-color($secondary, $alpha: 0.5);

.drawer-user{
  //position: relative;
  background-color: change-color($secondary, $alpha: 0.5);
  display: flex;
  height: 65px;
  min-height: 65px;
  justify-content: space-around;
  align-items: center;
  white-space: nowrap;

  &:hover{
    background-color: change-color($secondary, $alpha: 0.8);
  }

  &:active{
    background-color: change-color($secondary, $alpha: 1);
  }

  & .status-img{
    position: relative;
    display: flex;
  }

  & img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid change-color($white, $alpha: 0.5);
  }

  & .status{
    position: absolute;
    // left: -3px;
    width: 12px;
    height: 12px;
    border: $border;
    border-radius: 50%;

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

  & .user-name{
    font-weight: bold;
  }

  & i{
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    transition: all 0.5s;

    &.rotate{
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
}
</style>