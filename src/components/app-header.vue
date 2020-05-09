<template>
  <div class="app-header">
    <logo />
    <img
      src="../assets/user-icon.png"
      class="app-header__avatar"
    >
  </div>
</template>

<script>
import Logo from './logo.vue'

export default {
  name: "app-header",
  components: {
    Logo,
  },
}
</script>

<style lang="scss">
  .app-header {
    height: 50px;
    padding: 0 45px;
    background-color  : $bg-default-color;
    box-shadow: $shadow-default;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__avatar {
      width: 35px;
    }
  }
</style>