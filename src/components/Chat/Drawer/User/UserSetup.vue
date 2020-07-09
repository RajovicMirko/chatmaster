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
  height: 0%;
  max-height: 0;
  background-color: change-color($secondary, $alpha: 0.5);
  transition: all 0.3s ease-in-out;

  &.user-setup-active{
    padding-top: 5px;
    height: 100%;
    max-height: 180px;
  }

  & form{
    position: relative;
    display: flex;
    flex-direction: column;

    & label{
      align-self: center;
    }
    
    & input, & select{
      position: relative;
      margin: 0.4rem;
      border: 1px solid $white;
      min-width: inherit;
      border: none;
      outline: none;
      background: none;
      border: 1px solid change-color($color: $white, $alpha: 1.0);
      border-radius: 10px;
      color: $white;
      font-size: 1rem;
      padding: 3px;
    }

    & input:hover,
    & select:hover{
      box-shadow: 4px 4px 10px change-color($color: $black, $alpha: 0.3);;
    }

    & select{
      text-transform: capitalize;

      & option{
        background-color: $secondary;
        padding: 1rem;
      }
    }
  }
}
</style>