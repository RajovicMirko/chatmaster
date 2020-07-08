!<template>
  <div class="user-setup" :class="{'user-setup-active': userSetupVisible}">
    <form>
      <label for="userImg">Picture</label>
      <input type="text" id="userImg" v-model="user.img">
      
      <label for="fullName">Full name</label>
      <input type="text" id="fullName" v-model="user.fullName">

      <label for="status">Status</label>
      <select name="status" id="status" v-model="statusSelected">
        <option v-for="(status, i) in userStatusOptions" :key="i" :value="status">{{status}}</option>
      </select>
    </form>
  </div>
</template>

<script>
  export default {
    name: "UserSetup",

    computed:{
      userSetupVisible(){
        return this.$store.getters["chat/getUserSetupVisible"];
      },

      user(){
          return this.$store.getters["auth/getUser"];
      },

      statusSelected:{
        get(){
          return this.user.status;
        },
        set(value){
          this.$store.commit("auth/setUserStatus", value);
        }
      },

      userStatusOptions(){
        return this.$store.getters["auth/getUserStatusOptions"];
      }
    },
  }
</script>

<style lang="scss" scoped>
.user-setup{
  width: 100%;
  height: 0;
  min-height: 0;
  background-color: change-color($secondary, $alpha: 0.5);
  transition: all 0.3s ease-in-out;

  &.user-setup-active{
    min-height: 140px;
  }

  & form{
    margin: 0.5rem;
    
    & input, & select{
      margin-bottom: 0.2rem;
      border: 1px solid $white;
      width: 100%
    }

    & select{
      text-transform: capitalize;
    }
  }
}
</style>