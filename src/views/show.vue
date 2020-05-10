<template>
  <div class="show">
    <div class="show__head">
      <h1 class="show__title">{{ task.entry.title }}</h1>
    </div>
    <div class="show__main">
      <p class="show__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aliquid, aut deleniti dignissimos excepturi illo ipsa labore libero repellendus rerum similique, veritatis, voluptas. A accusantium ad commodi, consequuntur cum debitis dolorum et exercitationem fugiat fugit ipsum nam nemo nihil omnis optio possimus quae quaerat quia quo tempora temporibus veniam?</p>
      <img src="../assets/show.png" style="width: 100%">
      <div class="show__buttons">
        <app-button v-if="!task.learned" @click="check" class="show__button">
          Ознакомился
        </app-button>
        <app-button @click="$router.push({name: 'home'})" outline class="show__button">
          Отмена
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '../components/ui/app-button.vue'

export default {
  name: "show",
  components: {
    AppButton,
  },
  computed: {
    task() {
      return this.$store.state.task;
    },
  },
  created() {
    this.$store.dispatch('getTask', this.$route.params.id);
  },
  methods: {
    check() {
      this.$store.dispatch('setLearnStatus', this.$route.params.id);
    },
  },
}
</script>

<style lang="scss">
  .show {
    width: 600px;
    &__head {
      padding: 16px 35px;
      background: $bg-default-color;
      border-radius: $border-radius-block;
      box-shadow: $shadow-default;
      margin-bottom: 30px;
    }
    &__title {
      font-size: $font-size-title;
      text-align: center;
    }
    &__main {
      padding: 26px 35px;
      background: $bg-default-color;
      border-radius: $border-radius-block;
      box-shadow: $shadow-default;
    }
    &__desc {
      font-size: 13px;
      margin-bottom: 20px;
    }
    &__button {
      margin-top: 30px;
      margin-right: 10px;
    }
    &__buttons {
      display: flex;
    }
  }
</style>