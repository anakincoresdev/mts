<template>
  <div class="progress-bar">
    <div class="progress-bar__titles">
      <span class="progress-bar__title">Начало</span>
      <span class="progress-bar__title">Конец</span>
    </div>
    <div class="progress-bar__bar">
      <div class="progress-bar__fill"></div>
    </div>
    <div class="progress-bar__titles">
      <span class="progress-bar__title">0</span>
      <span class="progress-bar__title">100</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "progress-bar"
}
</script>

<style lang="scss">
  .progress-bar {
    &__title {
      font-size: 13px;
    }
    &__titles {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
    &__bar {
      background: $border-color;
      overflow: hidden;
      height: 5px;
      width: 100%;
      border-radius: 5px;
      margin-bottom: 8px;
    }
    &__fill {
      background: $main-color;
      width: 70%;
      height: 5px;
    }
  }
</style>