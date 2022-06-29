<template>
  <div class="home">
    <div id="page">
      <MyHeader />
      <!-- <CheckOut /> -->
      <NavigationBar />
      <MyBanner />
      <PromoBanner />
      <MySession msg="全部商品" />
      <MySession msg="飾品" />
      <MySession msg="3C" />

      <MySession msg="家飾佈置" />
      <MySession msg="運動用品" />

      <MobileMenu />
      <!-- <ProductList /> -->
      <MyFooter />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import MyHeader from "@/components/MyHeader.vue";
import MySession from "@/components/MySession.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import MyBanner from "@/components/MyBanner.vue";
import PromoBanner from "@/components/PromoBanner.vue";
import MyFooter from "@/components/MyFooter.vue";
// import CheckOut from "./components/CheckOut.vue";
// import ProductList from "./components/ProductList.vue";

// import jQuery from "jquery";
export default {
  name: "HomeView",
  components: {
    NavigationBar,
    MyHeader,
    MySession,
    MobileMenu,
    MyBanner,
    PromoBanner,
    MyFooter,
  },
};
</script>
