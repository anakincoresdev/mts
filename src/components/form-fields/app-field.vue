<template>
  <label class="app-field">
    <span class="app-field__label">{{ label }}</span>
    <input
      :value="value"
      @input="inputHandler"
      :type="type"
      class="app-field__input"
    >
  </label>
</template>

<script>
  export default {
    name: "app-field",
    props: {
      value: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      label: {
        type: String,
        default: '',
      },
    },
    methods: {
      inputHandler(event) {
        this.$emit('input', event.target.value);
      },
    },
  }
</script>

<style lang="scss">
  .app-field {
    width: 100%;
    display: block;
    &__input {
      padding: 0 10px;
      width: 100%;
      height: $ui-height;
      border-radius: $border-radius-field;
      border: $border-field;
      &:focus {
        border: $border-field-focus;
      }
    }
    &__label {
      color: #333333;
      font-size: 12px;
      margin-bottom: 5px;
      display: block;
      font-weight: 500;
    }
  }
</style>