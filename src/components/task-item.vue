<template>
  <div @click="$emit('click')" class="task-item" :class="{'task-item--admin': withoutCheck}">
    <div
      :class="{'task-item--checked': checked, 'task-item--admin': withoutCheck}"
      class="task-item__check"
    >
      <svg v-if="checked" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.98438 14.0156L15.9844 5.01562L14.5781 3.5625L6.98438 11.1562L3.42188 7.59375L2.01562 9L6.98438 14.0156ZM15.9844 0C16.5469 0 17.0156 0.203125 17.3906 0.609375C17.7969 1.01562 18 1.48438 18 2.01562V15.9844C18 16.5156 17.7969 16.9844 17.3906 17.3906C17.0156 17.7969 16.5469 18 15.9844 18H2.01562C1.45312 18 0.96875 17.7969 0.5625 17.3906C0.1875 16.9844 0 16.5156 0 15.9844V2.01562C0 1.48438 0.1875 1.01562 0.5625 0.609375C0.96875 0.203125 1.45312 0 2.01562 0H15.9844Z" fill="#DFDFDF"/>
      </svg>
      <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.98438 14.0156L15.9844 5.01562L14.5781 3.5625L6.98438 11.1562L3.42188 7.59375L2.01562 9L6.98438 14.0156ZM15.9844 0C16.5469 0 17.0156 0.203125 17.3906 0.609375C17.7969 1.01562 18 1.48438 18 2.01562V15.9844C18 16.5156 17.7969 16.9844 17.3906 17.3906C17.0156 17.7969 16.5469 18 15.9844 18H2.01562C1.45312 18 0.96875 17.7969 0.5625 17.3906C0.1875 16.9844 0 16.5156 0 15.9844V2.01562C0 1.48438 0.1875 1.01562 0.5625 0.609375C0.96875 0.203125 1.45312 0 2.01562 0H15.9844Z" fill="#E30611"/>
      </svg>
    </div>
    <div class="task-item__info">
      <h3 class="task-item__title">
        <slot/>
      </h3>
      <div class="task-item__more">
        <div class="task-item__more-card">
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.85938 13.4609C6.00521 14.6068 7.38542 15.1797 9 15.1797C10.6146 15.1797 11.9818 14.6068 13.1016 13.4609C14.2474 12.3151 14.8203 10.9349 14.8203 9.32031C14.8203 7.70573 14.2474 6.33854 13.1016 5.21875C11.9818 4.07292 10.6146 3.5 9 3.5C7.38542 3.5 6.00521 4.07292 4.85938 5.21875C3.73958 6.33854 3.17969 7.70573 3.17969 9.32031C3.17969 10.9349 3.73958 12.3151 4.85938 13.4609ZM3.6875 4.04688C5.14583 2.5625 6.91667 1.82031 9 1.82031C11.0833 1.82031 12.8542 2.5625 14.3125 4.04688C15.7708 5.50521 16.5 7.26302 16.5 9.32031C16.5 11.3776 15.7708 13.1484 14.3125 14.6328C12.8542 16.0911 11.0833 16.8203 9 16.8203C6.91667 16.8203 5.14583 16.0911 3.6875 14.6328C2.22917 13.1484 1.5 11.3776 1.5 9.32031C1.5 7.26302 2.22917 5.50521 3.6875 4.04688ZM9.42969 5.17969V9.55469L12.75 11.5078L12.125 12.5234L8.17969 10.1797V5.17969H9.42969ZM5.5625 1.3125L1.73438 4.51562L0.679688 3.26562L4.50781 0.0625L5.5625 1.3125ZM17.3203 3.26562L16.2656 4.55469L12.4375 1.3125L13.4922 0.0625L17.3203 3.26562Z" fill="#E30611"/>
          </svg>
          <span class="task-item__more-label">до 21 мая</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "task-item",
  props: {
    item: Object,
    checked: Boolean,
    withoutCheck: Boolean,
  },
}
</script>

<style lang="scss">
  .task-item {
    height: 55px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: darken($bg-default-color, 7%);
    }
    &--admin &__check {
      display: none;
    }
    &--admin &__info {
      height: 100%;
    }
    &__check {
      padding-right: 12px;
      margin-left: 5px;
      display: flex;
      align-items: center;
      width: 32px;
      height: 100%;
    }
    &__info {
      padding-left: 15px;
      border-left: 2px solid $main-color;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__more {
      margin-top: 5px;
      &-card {
        font-size: 13px;
        display: flex;
        align-items: center;
      }
      &-label {
        margin-left: 10px;
      }
    }
  }
</style>