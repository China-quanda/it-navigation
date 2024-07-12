<template>
  <div class="bookmark-container">
    <div class="bookmark-wrapper">
      <Search v-model="keyword"></Search>
    </div>
  </div>
</template>

<script setup>
const keyword = ref('')
definePageMeta({
  layout: false,
});
</script>

<style scoped lang="scss">
.bookmark-container {
  position: relative;
  background-image: url(https://www.gxfcseo.com/wp-content/uploads/bing/1720627200_UHD.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #242424;
  height: 100vh;
  width: 100vw;
  margin: 0;
  opacity: 1;
  padding: 0;
  transition: opacity .5s ease 0s;
}
.bookmark-wrapper{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>