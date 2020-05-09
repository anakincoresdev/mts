<template>
  <div class="add-files">
    <div class="add-files__button">
      <add-button class="add-files__area">
        Добавить файл
      </add-button>
      <input
        @change="addFile($event.target.files)"
        type="file"
        name="file"
        class="add-files__input-file"
      >
    </div>
    <div class="add-files__chips">
      <file-chip
        v-for="(item, index) in attachedFiles"
        :name="`Файл ${index + 1}`"
        extension="svg"
        mime-type="doc"
        :key="index"
        @delete-file="deleteFile(index)"
        class="add-files__chip"
      />
    </div>
  </div>
</template>

<script>
import AddButton from './ui/add-button.vue'
import FileChip from './file-chip.vue'

export default {
  name: "add-files",
  components: {
    AddButton,
    FileChip,
  },
  data() {
    return {
      attachedFiles: [],
    };
  },
  methods: {
    addFile() {
      this.attachedFiles.push({});
    },
    deleteFile(index) {
      this.attachedFiles.splice(index, 1);
    }
  },
}
</script>

<style lang="scss">
  .add-files {
    &__button {
      position: relative;
      margin-bottom: 10px;
    }
    &__input-file {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    &__chips {
      display: flex;
    }
    &__chip {
      margin-right: 15px;
    }
  }
</style>