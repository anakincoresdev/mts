<template>
  <div class="questions">
    <h1 class="questions__title">Анкета стажера</h1>
    <main class="questions__main">
      <div class="questions__group">
        <h3 class="questions__question">Ваше образование?</h3>
        <app-select
          :options="[{label: 'Высшее', value: 1},{label: 'Средне-специальное', value: 2}]"
          placeholder="Выберите из вариантов"
        />
      </div>
      <div class="questions__group">
        <h3 class="questions__question">Владеете ли вы английским языком?</h3>
        <app-radio-buttons
          :elements="[{name: 'Да', value: 1},{name: 'Нет', value: 2}]"
        />
      </div>
      <div class="questions__group">
        <h3 class="questions__question">Какие принципы работы сервера вы понимаете?</h3>
        <app-select
          :options="[{label: 'Apache', value: 1},{label: 'Nginx', value: 2},{label: 'IIS,', value: 3}]"
          placeholder="Выберите из вариантов"
        />
      </div>
      <div class="questions__group">
        <h3 class="questions__question">Умеете ли вы писать юнит-тесты и покрывать код тестами?</h3>
        <app-select
          :options="[{label: 'Да', value: 1},{label: 'Нет', value: 2}]"
          placeholder="Выберите из вариантов"
        />
      </div>
      <div class="questions__group">
        <h3 class="questions__question">Какими фреймворками вы владеете?</h3>
        <app-select
          :options="[{label: 'React', value: 1},{label: 'Angular', value: 2},{label: 'Vue', value: 3},{label: 'Ember', value: 4}]"
          placeholder="Выберите из вариантов"
        />
      </div>
      <app-button @click="$router.push({name: 'home'})">Готово</app-button>
    </main>
  </div>
</template>

<script>
import AppSelect from '@/components/form-fields/app-select.vue'
import AppButton from '@/components/ui/app-button.vue'
import AppRadioButtons from '@/components/form-fields/app-radio-buttons.vue'

export default {
  name: "questions",
  components: {
    AppSelect,
    AppRadioButtons,
    AppButton,
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
    &__group {
      margin-bottom: 25px;
    }
    &__title {
      text-align: center;
      font-size: $font-size-title;
      margin-bottom: 40px;
    }
    &__question {
      margin-bottom: 10px;
      font-weight: 600;
    }
  }
</style>