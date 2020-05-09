<template>
  <transition
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    name="expand"
  >
    <slot />
  </transition>
</template>

<script>
  export default {
    name: 'transition-expand',
    methods: {
      enter(element) {
        const { width } = getComputedStyle(element);

        element.style.width = width;
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.height = 'auto';

        const { height } = getComputedStyle(element);

        element.style.width = null;
        element.style.position = null;
        element.style.visibility = null;
        element.style.height = 0;

        if (parseInt(height,10) < 150) {
          element.style.transitionDuration = `0.3s`;
        }

        setTimeout(() => {
          element.style.height = height;
        });
      },
      afterEnter(element) {
        element.style.height = 'auto';
      },
      leave(element) {
        const { height } = getComputedStyle(element);
        element.style.height = height;
        getComputedStyle(element).height;
        setTimeout(() => {
          element.style.height = 0;
        });
      },
    },
  };
</script>

<style lang="scss">

  .expand-enter-active,
  .expand-leave-active {
    transition: height .5s ease-in-out;
    overflow: hidden;
  }

  .expand-enter,
  .expand-leave-to {
    height: 0;
  }
</style>