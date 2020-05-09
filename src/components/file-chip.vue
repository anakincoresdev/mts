<template>
  <div
    :title="name"
    :class="{'file-chip--undeletable': readonly}"
    class="file-chip"
  >
    <component
      :is="iconName"
      class="file-chip__icon"
    />
    <span class="file-chip__name">{{ name }}</span>
    <button
      v-if="!readonly"
      @click="deleteFileChip"
      class="file-chip__close-button"
    >
      <icon-close class="file-chip__close" />
    </button>
  </div>
</template>

<script>
import IconFile from './icons/icon-file.vue';
import IconClose from './icons/icon-close.vue';

export default {
  name: 'file-chip',
  components: {
    IconFile,
    IconClose,
  },
  props: {
    file: {
      type: Object,
      default() {
        return {};
      },
    },
    name: {
      type: String,
      default: '',
    },
    extension: {
      type: String,
      default: '',
    },
    mimeType: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    readonly: Boolean,
  },
  computed: {
    iconName() {
      return 'icon-file';
    },
  },
  methods: {
    deleteFileChip() {
      this.$emit('delete-file');
    },
  },
};
</script>

<style lang="scss">
  .file-chip {
    padding: 8px 8px 8px 15px;
    background: $progress-bar-background;
    border-radius: 25px;
    width: 118px;
    display: flex;
    align-items: center;
    cursor: default;
    &--undeletable {
      cursor: pointer;
    }
    &__icon {
      height: 16px;
    }
    &__name {
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 62px;
      margin-left: 4px;
      color: $text-color;
      font-size: 13px;
      flex: 1;
    }
    &__close {
      width: 16px;
      height: 16px;
      fill: $icon-grey-color;
      transition: $ui-transition;
      cursor: pointer;
      margin-left: 2px;
      &:hover {
        fill: darken($icon-grey-color, 10%);
        transition: $ui-transition;
      }
      &-button {
        display: flex;
      }
    }
  }
</style>