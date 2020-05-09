<template>
  <label class="app-field">
    <input
      :value="value"
      @input="inputHandler"
      :type="type"
      :placeholder="placeholder"
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
      placeholder: {
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
    &__input {
      padding: 0 10px;
      height: $ui-height;
    }
  }
</style>