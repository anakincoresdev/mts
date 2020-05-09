<template>
  <div class="department-form">
    <div class="department-form__row">
      <div class="department-form__group">
        <app-select
          label="Параметр"
          :options="[{label: 'IT-Отдел', value: 'IT'}]"
          placeholder="Выберите параметр"
          class="department-form__select"
        />
        <div class="department-form__add">+</div>
      </div>
      <div class="department-form__group">
        <app-select
          label="Условие"
          placeholder="Выберите условие"
          class="department-form__select"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from './icons/icon-close.vue'
import AppSelect from './form-fields/app-select.vue'

export default {
  name: "department-form",
  components: {
    IconClose,
    AppSelect,
  },
}
</script>

<style lang="scss">
  .department-form {
    border-radius: $border-radius-block;
    border: $border-field-focus;
    padding: 10px 15px;
    background: #f1f1f1;
    &__row {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    &__group {
      display: flex;
      align-items: flex-end;
      flex: 1;
      &:not(:last-child) {
        margin-right: 25px;
      }
    }
    &__select {
      flex: 1;
    }
    &__add {
      border-radius: $border-radius-field;
      border: 1px dashed $main-color;
      height: $ui-height;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 8px;
      width: 40px;
      user-select: none;
      cursor: pointer;
    }
  }
</style>