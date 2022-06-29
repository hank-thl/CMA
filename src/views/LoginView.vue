<template>
  <div class="home">
    <div id="page">
      <MyHeader />
      <NavigationBar />
      <MyLogin />

      <MyFooter />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyLogin from "@/components/MyLogin.vue";
import MyFooter from "@/components/MyFooter.vue";
// import CheckOut from "./components/CheckOut.vue";
// import ProductList from "./components/ProductList.vue";

// import jQuery from "jquery";
export default {
  name: "LoginView",
  components: {
    NavigationBar,
    MyHeader,

    MyLogin,
    MyFooter,
  },
};
</script>
