<template>
  <div class="department-form">
    <div class="department-form__title">{{ value.code.label }}</div>
    <div class="department-form__row">
      <div class="department-form__group">
        <app-select
          label="Условие"
          :options="[{label: 'Равно', value: '='},{label: 'Не равно', value: '!='}]"
          @input="formChanged($event, 'matching')"
          placeholder="Выберите условие"
          class="department-form__select"
        />
        <div class="department-form__add">+</div>
      </div>
      <div class="department-form__group">
        <app-select
          label="Значение"
          :options="dict[value.code.value]"
          @input="formChanged($event, 'value')"
          placeholder="Выберите значение"
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
  props: {
    value: Object,
  },
  data() {
    return {
      dict: {
        position: [
          { label: 'Директор', value: '1' },
          { label: 'Руководитель IT-отдела', value: '2' },
          { label: 'Руководитель отдела разработки', value: '3' },
          { label: 'Программист frontend', value: '4' },
          { label: 'Программист backend', value: '5' },
        ],
        department: [
          { label: 'Дирекция', value: '1' },
          { label: 'IT-отдел', value: '2' },
          { label: 'Отдел разработки системы заказов', value: '3' },
        ],
        eng: [
          { label: 'Да', value: 'Да' },
          { label: 'Нет', value: 'Нет' },
        ],
        serv: [
          { label: 'Apache',value:"Apache"},
          { label: 'NGINX',value:"NGINX"},
          { label: 'IIS',value:"IIS"}
        ],
        bd: [
          {label: 'Хорошо', value: "Хорошо"},
          {label: 'Отлично', value: "Отлично"},
          {label: 'Плохо', value: "Плохо"},
        ],
        serv_lang: [
          { label: 'PHP', value: 'PHP' },
          { label: 'Go', value: 'Go' },
          { label: 'Python', value: 'Python' },
        ],
        front: [
          { label: 'Angular', value: 'Angular' },
          { label: 'React', value: 'React' },
          { label: 'Vue', value: 'Vue' },
        ],
      }
    };
  },
  methods: {
    formChanged(data, fieldName) {
      this.value.values[0][fieldName] = data;
      this.$emit('input', this.value);
    }
  },
}
</script>

<style lang="scss">
  .department-form {
    border-radius: $border-radius-block;
    border: $border-field-focus;
    padding: 10px 15px;
    background: #f1f1f1;
    &__title {
      font-size: 15px;
      margin-bottom: 10px;
    }
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