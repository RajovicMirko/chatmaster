<template>
  <div class="welcome-view flex flex-column flex-1 flex-justify-center flex-align-center">
    <img src="@/assets/icon.png" alt />
    <h1>{{$t("chat.happyMessaging.title")}}</h1>
  </div>
</template>

<script>
  export default {
    name: "HappyMessaging"
  }
</script>

<style lang="scss" scoped>
.welcome-view{
  white-space: nowrap;
}
</style>