<template>
  <div class="create">
    <h1 class="create__title">
      Создание информационного кванта
    </h1>
    <app-field
      label="Название"
      class="create__field"
    />
    <app-field
      label="Описание"
      class="create__field"
    />
    <add-files class="create__add-files" />
    <add-button
      @click="openRuleWindow"
      class="create__rule"
    >
      Добавить правило
    </add-button>
    <div class="create__buttons">
      <app-button
        @click="save"
        class="create__button"
      >
        Сохранить
      </app-button>
      <app-button
        @click="$router.push({name: 'home'})"
        outline
        class="create__button"
      >
        Отменить
      </app-button>
    </div>
    <modal-window
      v-if="isModalOpen"
      @close="isModalOpen = false"
    >
      <div class="create__rule-modal">
        <h1 class="rule-modal__title">
          Создание правила
        </h1>
        <div class="rule-modal__fields">
          <app-select
            placeholder="Параметр"
            class="rule-modal__select"
          />
          <app-select
            placeholder="Баллы при совпадении"
            class="rule-modal__select"
          />
        </div>
        <div class="create__buttons">
          <app-button
            @click="save"
            class="create__button"
          >
            Сохранить
          </app-button>
          <app-button
            @click="$router.push({name: 'home'})"
            outline
            class="create__button"
          >
            Отменить
          </app-button>
        </div>
      </div>
    </modal-window>
  </div>
</template>

<script>
import AppField from '../components/form-fields/app-field.vue'
import AddFiles from '../components/add-files.vue'
import AddButton from '../components/ui/add-button.vue'
import AppButton from '../components/ui/app-button.vue'
import ModalWindow from '../components/modal-window.vue'
import AppSelect from '../components/form-fields/app-select.vue'

export default {
  name: "create",
  components: {
    AppField,
    AddFiles,
    AddButton,
    AppButton,
    ModalWindow,
    AppSelect,
  },
  data() {
    return {
      isModalOpen: false,
      rules: [],
    };
  },
  methods: {
    openRuleWindow() {
      this.isModalOpen = true;
    },
    save() {
      this.$router.push({name: 'home'});
    },
  },
}
</script>

<style lang="scss">
  .create {
    padding: 35px 40px;
    background: $bg-default-color;
    border-radius: $border-radius-block;
    width: 700px;
    &__title {
      font-size: $font-size-title;
      margin-bottom: 28px;
    }
    &__field {
      margin-bottom: 25px;
    }
    &__add-files {
      margin-bottom: 25px;
    }
    &__button {
      margin-right: 10px;
    }
    &__rule {
      margin-bottom: 35px;
    }
    &__buttons {
      display: flex;
      align-items: center;
    }
  }
  .rule-modal {
    &__title {
      font-size: $font-size-title;
      text-align: center;
      margin-bottom: 24px;
    }
    &__fields {
      margin-bottom: 35px;
    }
  }
</style>