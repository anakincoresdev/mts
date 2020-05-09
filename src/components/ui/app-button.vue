<template>
  <button
    @click="clickHandler"
    :class="{'app-button--outline': outline}"
    class="app-button"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: "app-button",
    props: {
      outline: Boolean,
    },
    methods: {
      clickHandler(event) {
        this.$emit('click', event);
      }
    },
  };
</script>

<style lang="scss">
  .app-button {
    padding: 0 20px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $main-color;
    color: $contrast-text-color;
    font-size: $ui-font-size;
    transition: $ui-transition;
    line-height: .4;
    border-radius: 3px;
    &:hover {
      background-color: darken($main-color, 7%);
      transition: $ui-transition;
    }
    &--outline {
      border: 1px solid $main-color;
      background: $bg-default-color;
      color: $main-color;
      &:hover {
        background-color: darken($bg-default-color, 5%);
        transition: $ui-transition;
      }
    }
  }
</style>