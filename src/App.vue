<template>
  <div id="app">
    <app-header/>
    <section class="app__container">
      <router-view/>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/app-header.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $text-color;
    background-color: $bg-substrate;
    min-height: 100vh;
  }
  .app {
    &__container {
      padding: 40px 45px;
      display: flex;
      justify-content: center;
    }
  }
</style>
