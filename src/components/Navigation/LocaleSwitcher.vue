<template>
  <div class="locale-switcher flex" v-if="['Login', 'Register'].indexOf(currentPageName) !== -1">
    <div class="language" v-for="(lng, i) in locals" :key="i" @click="handleSwitch(lng)">
      <span class="delimiter">{{i !== 0 ? "/" : ""}}</span>
      {{lng}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "LocaleSwitcher",

    computed:{
      locals(){
        return this.$store.getters["auth/getLocals"];
      },

      currentPageName(){
        return this.$store.getters["chat/getCurrentPageName"];
      }
    },

    methods:{
      handleSwitch(lng){
        this.$i18n.locale = lng;
      }
    }

  }
</script>

<style lang="scss" scoped>
.locale-switcher{
  position: fixed;
  right: 0.8rem;
  top: 3.5rem;

  & .language{
    margin: 0 0.2rem;

    &:hover{
      cursor: pointer;
    }

    & .delimiter{
    }
  }
}
</style>