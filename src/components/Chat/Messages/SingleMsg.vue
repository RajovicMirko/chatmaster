<template>
  <div class="single-msg" :class="message.type">
      <div v-if="message.type === 'recived'" class="status-img">
        <img v-if="contact.img" :src="contact.img" alt="">
        <img v-else src="@/assets/user-default-icon3.png" alt="">
      </div>

      <div v-if="message.type === 'recived'" class="contact-data">
        <div class="header">
          <small class="contact-name">{{ $t("chat.messageHeaderUserPart", {fullName: contact.fullName}) }}</small>
          <small class="time">{{ $d(new Date(), 'long') }}</small>
        </div>
        <p class="text">{{ message.text }}</p>
      </div>
    
    
      <div v-if="message.type === 'send'" class="status-img">
        <img v-if="user.img" :src="user.img" alt="">
        <img v-else src="@/assets/user-default-icon3.png" alt="">
      </div>

      <div v-if="message.type === 'send'" class="contact-data">
        <div class="header">
          <small class="contact-name">{{ $t("chat.messageHeaderUserPart", {fullName: user.fullName}) }}</small>
          <small class="time">{{ $d(new Date(), 'long') }}</small>
        </div>
        <p class="text">{{ message.text }}</p>
      </div>
  </div>
</template>

<script>
  export default {
    name: "SingleMessage",
    props: {
      message:{
        type: Object,
        required: true
      },

      contact:{
        type: Object,
        required: true
      }
    },
    
    computed:{
      user(){
        return this.$store.getters["auth/getUser"];
      }
    }
  }
</script>

<style lang="scss" scoped>

$border: 3px solid change-color($secondary, $alpha: 0.5);

.single-msg{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  min-width: 320px;
  align-items: stretch;
  margin: 0.3rem 0;
  border-radius: 1rem;

  &.send{
    flex-direction: row-reverse;
    float: right;

    & > *{
      color: $black;
    }

    & .contact-data{
      background-color: change-color($gray, $alpha: 0.3);
    }

  }

  &.recived{
    float: left;

    & > *{
      color: $black;
    }

    & .contact-data{
      background-color: change-color($online, $alpha: 0.2);
    }
  }

  & .contact-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.7rem;
    flex: 1;
    border-radius: 1rem;


    & .header{
      display: flex;
      justify-content: space-between;
      padding-bottom: 0.2rem;
      margin-bottom: 0.3rem;
      border-bottom: 1px solid change-color($primary, $alpha: 0.3);

      & .contact-name{
        font-weight: bold;
        white-space: nowrap;
      }

      & .time{
        font-weight: bold;
        font-size: 0.7rem;
      }
    }

    & p.text{
      display: flex;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      white-space: pre-wrap;
      word-wrap: break-word;
      width: 100%;
    }

  }

  &.active{
    background-color: change-color($secondary, $alpha: 0.8);
  }

  &:hover{
    background-color: change-color($gray, $alpha: 0.3);
  }

  &:active{
    background-color: change-color($gray, $alpha: 1);
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

}

  .status-img{
    align-self: center;
    padding: 0.2rem 0 0 0;
    margin: 0 0.3rem;
  }

  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid change-color($gray, $alpha: 0.5);
  }
</style>