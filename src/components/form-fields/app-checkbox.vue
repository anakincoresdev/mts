<template>
  <label class="app-checkbox">
    <input
      type="checkbox"
      class="app-checkbox__input"
    >
    <slot/>
  </label>
</template>

<script>
  export default {
    name: "app-checkbox"
  }
</script>

<style lang="scss">
  .app-checkbox {
    display: flex;
    align-items: center;
    &__input {
      margin-right: 10px;
    }
  }
</style>