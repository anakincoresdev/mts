<template>
  <div class="checkbox">
    <label class="checkbox__wrap">
      <input
        :class="{'checkbox__control--checked': check, 'checkbox__control--small': small}"
        v-model="check"
        type="checkbox"
        class="checkbox__control"
      >
      <span class="checkbox__label"><slot /></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    small: Boolean,
  },
  data: () => ({
    check: false,
  }),
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        this.check = newVal;
      },
    },
    check: {
      handler(newVal) {
        this.$emit('input', newVal);
      },
    },
  },
};
</script>

<style lang="scss">
  .checkbox {
    display: flex;

    &__wrap {
      user-select: none;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &__control {
      cursor: pointer;
      width: 29px;
      min-width: 29px;
      height: 29px;
      background-color: white;
      appearance: none;
      border: 2px solid $text-color;
      border-radius: 2px;
      transition: all $ui-transition;
      margin-right: 15px;
      position: relative;
      &--checked {
        border: none;
        &:after {
          content: '';
          position: absolute;
          background: url("../../assets/check_box.png");
          width: 18px;
          height: 18px;
          top: 0;
          left: 0;
        }
      }
      &--small {
        min-width: 18px;
        width: 18px;
        height: 18px;
      }
      &--small:after {
        background-size: 18px;
        background-repeat: no-repeat;
        top: 0;
        left: 0;
      }
      &:active, &:focus {
        outline: none;
      }
      &::-moz-focus-inner {
        border: 0;
      }
    }
    &__label {
      font-size: 14px;
      color: $text-color;
    }
  }
</style>