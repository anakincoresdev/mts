<template>
  <div class="admin">
    <div class="admin__head">
      <h1 class="admin__title">Содержание</h1>
      <div class="admin__buttons">
        <app-button class="admin__button" @click="$router.push({name: 'create'})">Создать информационный квант</app-button>
        <app-button class="admin__button" @click="$router.push({name: 'create-project'})">Создать проект</app-button>
      </div>
    </div>
    <div class="admin__main">
      <div class="admin__tabs">
        <div
          @click="tab = 'task'"
          :class="{'admin__tab--active': tab === 'task'}"
          class="admin__tab"
        >
          Информационные кванты
        </div>
        <div
          @click="tab = 'project'"
          :class="{'admin__tab--active': tab === 'project'}"
          class="admin__tab"
        >
          Проекты
        </div>
      </div>
      <div v-if="tab === 'project'" class="admin__items">
        <task-item
          withoutCheck
          class="admin__item"
        >Название проекта</task-item>
        <task-item
          withoutCheck
          class="admin__item"
        >Название проекта</task-item>
        <task-item
          withoutCheck
          class="admin__item"
        >Название проекта</task-item>
        <task-item
          withoutCheck
          class="admin__item"
        >Название проекта</task-item>
        <task-item
          withoutCheck
          class="admin__item"
        >Название проекта</task-item>
      </div>
      <div v-else class="admin__items">
        <task-item
          v-for="task in tasks"
          :key="task.id"
          :item="task"
          withoutCheck
          class="admin__item"
        >
          {{ task.title }}
        </task-item>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '../components/ui/app-button.vue'
import TaskItem from '../components/task-item.vue'

export default {
  name: "admin",
  components: {
    AppButton,
    TaskItem,
  },
  data() {
    return {
      tab: 'task',
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  mounted() {
    this.$store.dispatch('getTasks');
  }
}
</script>

<style lang="scss">
  .admin {
    width: 100%;
    &__head {
      height: 63px;
      padding: 0 23px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: $bg-default-color;
      border-radius: $border-radius-block;
      box-shadow: $shadow-default;
      margin-bottom: 30px;
    }
    &__buttons {
      display: flex;
    }
    &__button {
      margin-left: 15px;
    }
    &__title {
      font-size: $font-size-title;
    }
    &__main {
      background: $bg-default-color;
      border-radius: $border-radius-block;
      box-shadow: $shadow-default;
      min-height: 400px;
      padding-bottom: 30px;
    }
    &__tabs {
      width: 100%;
      height: 60px;
      border-bottom: 2px solid $border-color;
      display: flex;
      padding: 0 30px;
      margin-bottom: 35px;
    }
    &__tab {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 40px;
      padding: 0 7px;
      cursor: pointer;
      &--active {
        color: $main-color;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          bottom: -2px;
          height: 2px;
          width: 100%;
          left: 0;
          background: $main-color;
        }
      }
    }
    &__items {
      padding-left: 25px;
    }
    &__item {
      margin-bottom: 10px;
    }
  }
</style>