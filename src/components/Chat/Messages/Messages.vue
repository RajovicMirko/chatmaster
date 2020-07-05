<template>
  <div class="chat-messages">
    <div class="text" ref="text">
      <component v-for="(message, i) in messages" :key="i" :is="$getComponent('SingleMsg')" :message="message" :contact="contact" />
    </div>
    <div class="msg-input">
      <!-- <input type="text" placeholder="Send Message" v-model="newMsg" @keypress="handleSendMessage" /> -->
      <textarea :rows="textAreaRows" :placeholder="$t('chat.newMessage')" v-model="newMsg" @keydown.enter="handleSendMessage"></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChatMessages",

    data(){
      return {
        newMsg: "",
        textAreaRows: 1,
        messages:[
          {text: 'First message for contact ', type: 'recived'},
          {text: 'This is message for contact id This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'This is message for contact id ', type: 'send'},
          {text: 'This is message for contact id ', type: 'recived'},
          {text: 'Last message for contact id Last message for contact id Last message for contact id Last message for contact id Last message for contact id Last message for contact id Last message for contact id Last message for contact id ', type: 'send'
          },
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
        if(e.keyCode === 13 && !e.shiftKey){
          e.preventDefault();

          if(this.newMsg){
            const result = { text: this.newMsg, type: "send" };
            this.messages.push(result);
            this.newMsg = "";
            this.scrollToBottom();
            this.textAreaRows = 1;
          }
        }
        
        if(e.shiftKey){
          this.textAreaRows += 1;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@sc/chat-messages.scss";
</style>