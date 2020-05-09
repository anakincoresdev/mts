<template>
  <div class="app-accordion">
    <div
      @click="expand"
      class="app-accordion__head"
    >
      <slot name="head" />
    </div>
    <transition-expand>
      <div
        v-if="isOpen"
        class="app-accordion__expand"
      >
        <slot name="expand" />
      </div>
    </transition-expand>
  </div>
</template>

<script>
import TransitionExpand from '../animation/transition-expand.vue'

export default {
  name: "app-accordion",
  components: {
    TransitionExpand,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    expand() {
      this.isOpen = !this.isOpen;
    }
  },
}
</script>

<style lang="scss">
  .app-accordion {
    &__head {
      cursor: pointer;
      padding: 10px 20px;
    }
  }
</style>