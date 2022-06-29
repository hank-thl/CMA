<template>
  <div class="ProductView">
    <MyHeader />
    <NavigationBar />
    <MyProduct />
    <MyFooter />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import MyProduct from "@/components/MyProduct.vue";

export default {
  name: "ProductView",
  components: {
    MyHeader,
    NavigationBar,
    MyFooter,
    MyProduct,
  },
};
</script>
