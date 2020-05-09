<template>
  <div class="progress-numbers">
    <div class="progress-numbers__item">
      <div class="progress-numbers__number">4</div>
      <div class="progress-numbers__label">Осталось статей для достижения цели</div>
    </div>
    <div class="progress-numbers__item">
      <div class="progress-numbers__number">30</div>
      <div class="progress-numbers__label">Баллов осталось для достижения цели</div>
    </div>
    <div class="progress-numbers__item">
      <div class="progress-numbers__number">12</div>
      <div class="progress-numbers__label">Статей <br>прочитано</div>
    </div>
    <div class="progress-numbers__item">
      <div class="progress-numbers__number">3</div>
      <div class="progress-numbers__label">Тестов <br>пройдено</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "progress-numbers"
  }
</script>

<style lang="scss">
  .progress-numbers {
    display: flex;
    align-items: center;
    justify-content: center;
    &__item {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-right: 80px;
      }
    }
    &__number {
      color: $main-color;
      font-size: 45px;
      margin-right: 14px;
    }
    &__label {
      max-width: 134px;
      font-size: 13px;
    }
  }
</style>