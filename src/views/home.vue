<template>
  <section class="home">
    <user-info class="home__user-info" />
    <user-board/>
  </section>
</template>

<script>
import UserInfo from '@/components/user-info.vue'
import UserBoard from '@/components/user-board.vue'

export default {
  name: 'home',
  components: {
    UserInfo,
    UserBoard,
  },
  data() {
    return {
      inputValue: '',
    };
  },
}
</script>

<style lang="scss">
  .home {
    margin: 0 45px;
    width: 100%;
    &__user-info {
      margin-bottom: 25px;
    }
  }
</style>
