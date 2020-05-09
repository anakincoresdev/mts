<template>
  <label class="app-select">
    <span class="app-select__label">
      {{ label }}
    </span>
    <div
      @click="isOpen = !isOpen"
      :class="{'app-select__controls--focus': isOpen}"
      class="app-select__controls"
    >
      {{ selected.label || placeholder }}
    </div>
    <div
      v-if="isOpen"
      class="app-select__options"
    >
      <div
        v-for="option in options"
        @click="selectOption(option)"
        class="app-select__option"
      >
        {{ option.label }}
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: "app-select",
  props: {
    options: {
      type: Array,
      default: () => [
        { label: 'Опция 1', value: 1 },
        { label: 'Опция 2', value: 2 },
        { label: 'Опция 3', value: 3 },
      ],
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: String,
  },
  data() {
    return {
      isOpen: false,
      selected: { label: '', name: ''},
    };
  },
  methods: {
    selectOption(option) {
      this.selected = option;
      this.isOpen = false;
    },
  },
}
</script>

<style lang="scss">
  .app-select {
    position: relative;
    display: block;
    &__label {
      color: #333333;
      font-size: 12px;
      margin-bottom: 5px;
      display: block;
      font-weight: 500;
    }
    &__controls {
      display: flex;
      align-items: center;
      height: $ui-height;
      padding: $padding-field;
      background: $bg-default-color;
      border-radius: $border-radius-field;
      border: $border-field;
      transition: $ui-transition;
      cursor: pointer;
      font-size: 15px;
      &--focus {
        border: $border-field-focus;
        transition: $ui-transition;
      }
    }
    &__options {
      position: absolute;
      left: 0;
      width: 100%;
      box-shadow: $shadow-default;
      background-color: $bg-default-color;
      border-radius: 3px;
      z-index: 2;
    }
    &__option {
      font-size: $ui-font-size;
      line-height: 18;
      height: 26px;
      display: flex;
      align-items: center;
      padding: 0 14px;
      transition: $ui-transition;
      cursor: pointer;
      overflow: hidden;
      &:hover {
        transition: $ui-transition;
        background: $bg-hover-color;
      }
    }
  }
</style>