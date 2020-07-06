<template>
  <div class="drawer-user">
    <div class="status-img">
      <div class="status" :class="user.status" />
      <img v-if="user.img" :src="user.img" alt="">
      <img v-else src="@a/user-default-icon3.png" alt="">
    </div>
    <span class="user-name">{{user.fullName}}</span>
    <i class="fas fa-chevron-down"></i>
  </div>
</template>

<script>
  export default {
    name: 'User',
    
    computed:{
      user(){
        return this.$store.getters['auth/getUser'];
      }
    }
  }
</script>

<style lang="scss" scoped>
$border: 3px solid change-color($secondary, $alpha: 0.5);

.drawer-user{
  background-color: change-color($secondary, $alpha: 0.5);
  display: flex;
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
}
</style>