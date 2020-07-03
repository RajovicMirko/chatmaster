<template>
  <div class="chat-messages">
    <div class="text" ref="text">
    <div class="single-msg" v-for="(message, i) in messages" :key="i">{{`${message.text} ${contact.fullName}`}}</div>
    </div>
    <div class="msg-input">
      <input type="text" placeholder="Send Message" v-model="newMsg" @keypress="handleSendMessage">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChatMessages",

    data(){
      return {
        newMsg: "",
        messages:[
          {text: 'First message for contact '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'This is message for contact id '},
          {text: 'Last message for contact id '},
        ]
      }
    },

    mounted(){
      this.scrollToBottom();
    },

    beforeUpdate(){
      this.scrollToBottom();
    },

    computed:{
      contact(){
        return this.$store.getters["chat/getCurrentContact"];
      }
    },

    methods:{
      scrollToBottom(){
        const self = this;
        setTimeout(
          function(){
            var objDiv = self.$refs.text;
            objDiv.scrollTop = objDiv.scrollHeight;
          }
        , 10)
      },

      handleSendMessage(e){
        if(e.keyCode === 13){
          const result = { text: this.newMsg };
          this.messages.push(result);
          this.newMsg = "";
          this.scrollToBottom();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/chat-messages.scss";
</style>