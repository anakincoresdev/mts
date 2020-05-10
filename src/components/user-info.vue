<template>
  <div class="user-info">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKIdo_gn1HC08xyFBkVRPeADUBECYFVHqDFkyvtiqg8O2ZrZg1&usqp=CAU" style="width: 130px; margin-right: 20px">
    <div class="user-info__info">
      <h1 class="user-info__name">Елисеев Владислав Сергеевич</h1>
      <span class="user-info__tags">#стажер, менеджер по продажам</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user-info"
  }
</script>

<style lang="scss">
  .user-info {
    padding: 15px 20px;
    height: 187px;
    background: $bg-default-color;
    box-shadow: $shadow-default;
    border-radius: $border-radius-block;
    display: flex;
    align-items: center;
    &__avatar {
      height: 124px;
      width: 124px;
      border-radius: 50%;
      background: $bg-substrate;
      margin-right: 35px;
    }
    &__name {
      margin-bottom: 5px;
      font-size: $font-size-title;
    }
    &__tags {
      color: lighten($main-color, 20%);
      font-size: 13px;
      font-weight: 100;
    }
  }
</style>