<template>
  <div class="banner-img">
    <img id="myBanner" src="../assets/images/banner.jpeg" alt="" />
  </div>
</template>

<script>
export default {
  name: "MyBanner",
};
</script>

<style scoped>
.banner-img img {
  object-fit: cover !important;
  width: 100%;
  margin: 0;
}
</style>