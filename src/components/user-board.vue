<template>
  <div class="user-board">
    <progress-numbers class="user-board__numbers" />
    <progress-bar class="user-board__progress-bar" />
    <div class="user-board__check-title">
      <h1 class="user-board__title">Чек-лист</h1>
    </div>
    <div v-if="tasks && tasks.length" class="user-board__task-items">
      <task-item v-for="task in tasks" @click="$router.push({name: 'show', params: {id: task.entry.id}})" :item="task" class="user-board__task-item" :checked="task.learned">
        {{ task.title }}
      </task-item>
    </div>
    <div v-else class="user-board__empty" style="height: 200px; display: flex; align-items: center; justify-content:center;font-size: 24px;padding-bottom: 60px;">
      Пусто
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
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  created() {
    this.$store.dispatch('getUserTasks');
  },
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