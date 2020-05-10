<template>
  <div class="questions">
    <h1 class="questions__title">Анкета нового сотрудника</h1>
    <main v-if="questions.features" class="questions__main">
      <div
        v-for="question in questions.features"
        class="questions__group"
      >
        <h3 class="questions__question">{{ question.title }}?</h3>
        <app-radio-buttons
          v-if="question.type === 'yesno'"
          :elements="[{name: 'Да', value: 'yes'},{name: 'Нет', value: 'no'}]"
        />
        <app-select
          v-else-if="question.type === 'select'"
          :options="[{label: 'Высшее', value: 1},{label: 'Средне-специальное', value: 2}]"
          placeholder="Выберите из вариантов"
        />
        <div
          v-else-if="question.type === 'multiselect'"
          class="questions__check-group"
        >
          <checkbox
            v-for="item in question.featureValues"
            small
            class="questions__checkbox"
          >
            {{ item.value }}
          </checkbox>
        </div>
      </div>
      <app-button @click="sendQuestionary">Готово</app-button>
    </main>
  </div>
</template>

<script>
import AppSelect from '@/components/form-fields/app-select.vue'
import AppButton from '@/components/ui/app-button.vue'
import AppRadioButtons from '@/components/form-fields/app-radio-buttons.vue'
import Checkbox from '../components/form-fields/checkbox.vue'

export default {
  name: "questions",
  components: {
    AppSelect,
    AppRadioButtons,
    AppButton,
    Checkbox,
  },
  data() {
    return {
      formData: {}
    };
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
  },
  mounted() {
    this.$store.dispatch('getQuestions');
  },
  methods: {
    sendQuestionary() {
      this.$router.push({name: 'home'});
    }
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
    &__checkbox {
      margin-bottom: 5px;
    }
  }
</style>