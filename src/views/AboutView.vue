<template>
  <div class="about">
    <button @click="clickbtn()">按按看</button>
  </div>
</template>

<script>
export default {
  name: "aboutView",
  methods: {
    clickbtn() {
      this.$swal("CMA", "成功加入購物車", "error");
    },
  },
};
</script>
