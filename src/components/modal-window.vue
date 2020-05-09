<template>
  <div class="modal-window">
    <div class="modal-window__content">
      <div
        @click="close"
        class="modal-window__close"
      >
        <icon-close
          class="modal-window__close-icon"
        />
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>
import IconClose from './icons/icon-close.vue'

export default {
  name: "modal-window",
  components: {
    IconClose,
  },
  methods: {
    close() {
      console.log('dasd')
      this.$emit('close');
    },
  }
}
</script>

<style lang="scss">
  .modal-window {
    background: rgba(44,44,44, .7);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
      width: 700px;
      position: relative;
      padding: 30px 25px;
      background: $bg-default-color;
      border-radius: $border-radius-block;
    }
    &__close {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
      &-icon {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>