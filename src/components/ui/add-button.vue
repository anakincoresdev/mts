<template>
  <div @click="$emit('click')" class="add-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "add-button"
}
</script>

<style lang="scss">
  .add-button {
    height: $ui-height;
    border-radius: $border-radius-field;
    border: 1px dashed $main-color;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
  }
</style>