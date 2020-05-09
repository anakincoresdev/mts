<template>
  <div class="questions">
    <h1 class="questions__title">Анкета стажера</h1>
    <main class="questions__main">
      <div class="questions__group">
        <h3 class="questions__question">Вопрос 1</h3>
        <app-select></app-select>
      </div>
      <div class="questions__group">
        <h3 class="questions__question">Вопрос 2</h3>
        <app-radio-buttons
          :elements="[{name: 'asdasd', value: 1},{name: '222222', value: 2}]"
        />
      </div>
    </main>
  </div>
</template>

<script>
import AppSelect from '@/components/form-fields/app-select.vue'
import AppRadioButtons from '@/components/form-fields/app-radio-buttons.vue'

export default {
  name: "questions",
  components: {
    AppSelect,
    AppRadioButtons,
  },
}
</script>

<style lang="scss">
  .questions {
    background-color: $bg-default-color;
    padding: 20px;
    border-radius: $border-radius-block;
    box-shadow: $shadow-default;
    width: 700px;
    &__title {
      text-align: center;
      font-size: $font-size-title;
      margin-bottom: 40px;
    }
  }
</style>