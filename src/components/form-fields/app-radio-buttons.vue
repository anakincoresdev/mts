<template>
  <div class="app-radio-buttons">
    <label
      v-for="element in elements"
      class="app-radio-buttons__item"
    >
      <input
        :value="element.value"
        v-model="selected"
        type="radio"
        :class="{'app-radio-buttons__input--checked': selected === element.value}"
        class="app-radio-buttons__input"
      >
      <span class="app-radio-buttons__name">
        {{ element.name }}
      </span>
    </label>
  </div>
</template>

<script>
  export default {
    name: "app-radio-buttons",
    props: {
      elements: {
        type: Array,
        default: () => [],
      }
    },
    data() {
      return {
        selected: null,
      };
    },
    watch: {
      selected: {
        handler(value) {
          this.$emit('input', value)
        }
      }
    },
  }
</script>

<style lang="scss">
  .app-radio-buttons {
    display: flex;
    &__item {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }
    &__input {
      position: relative;
      margin-right: 10px;
      height: 18px;
      width: 18px;
      &:before {
        content: '';
        position: absolute;
        left: calc(50% - 9px);
        top: calc(50% - 9px);
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: $bg-default-color;
        border: 2px solid $text-color;
      }
      &--checked {
        &:before {
          border-color: $main-color;
        }
        &:after {
          content: '';
          position: absolute;
          left: calc(50% - 4px);
          top: calc(50% - 4px);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: $main-color;
        }
      }
    }
  }
</style>