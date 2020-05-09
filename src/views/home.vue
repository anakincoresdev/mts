<template>
  <section class="home">
    <app-button>
      Кнопка
    </app-button>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AppButton from '@/components/ui/app-button.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    AppButton,
  }
}
</script>

<style lang="scss">
  .home {
    padding: 30px;
    width: 100%;
  }
</style>
