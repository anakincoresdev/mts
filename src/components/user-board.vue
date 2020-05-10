<template>
  <div class="user-board">
    <progress-numbers class="user-board__numbers" />
    <progress-bar class="user-board__progress-bar" />
    <div class="user-board__check-title">
      <h1 class="user-board__title">Чек-лист</h1>
    </div>
    <div class="user-board__task-items">
      <task-item class="user-board__task-item" checked>
        Сезонная акция “подключи домашний интернет и ТВ, получи приставку в подарок”
      </task-item>
      <task-item class="user-board__task-item" checked>
        7 правил работы с клиентом
      </task-item>
      <task-item class="user-board__task-item">
        Название статьи, например: корморотивные ценности
      </task-item>
    </div>
    <h1 class="user-board__title">Коллеги</h1>
    <img
      src="../assets/people.png"
      class="user-board__people"
    >
  </div>
</template>

<script>
import ProgressNumbers from './progress-numbers.vue'
import ProgressBar from './progress-bar.vue'
import TaskItem from './task-item.vue'
import AppButton from './ui/app-button.vue'

export default {
  name: "user-board",
  components: {
    ProgressNumbers,
    ProgressBar,
    TaskItem,
    AppButton,
  }
}
</script>

<style lang="scss">
  .user-board {
    background: $bg-default-color;
    border-radius: $border-radius-block;
    box-shadow: $shadow-default;
    padding: 30px 25px;
    &__numbers {
      margin-bottom: 25px;
    }
    &__people {
      width: 100%;
    }
    &__progress-bar {
      margin-bottom: 45px;
    }
    &__title {
      font-size: $font-size-title;
      margin-bottom: 25px;
    }
    &__task-item {
      margin-bottom: 11px;
    }
    &__task-items {
      margin-bottom: 55px;
    }
    &__check-title {
      display: flex;
      justify-content: space-between;
    }
  }
</style>