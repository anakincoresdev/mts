<template>
  <button
    @click="clickHandler"
    class="app-button"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: "app-button",
    methods: {
      clickHandler(event) {
        this.$emit('click', event);
      }
    },
  };
</script>

<style lang="scss">
  .app-button {
    padding: 0 40px;
    height: $ui-height;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $main-color;
    color: $contrast-text-color;
    font-size: $ui-font-size;
    transition: $ui-transition;
    &:hover {
      background-color: darken($main-color, 7%);
      transition: $ui-transition;
    }
  }
</style>