<template>
  <div class="home">
    <div id="page">
      <MyHeader />
      <NavigationBar />
      <MyRegister />

      <MyFooter />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyRegister from "@/components/MyRegister.vue";
import MyFooter from "@/components/MyFooter.vue";
// import CheckOut from "./components/CheckOut.vue";
// import ProductList from "./components/ProductList.vue";

// import jQuery from "jquery";
export default {
  name: "RegisterView",
  components: {
    NavigationBar,
    MyHeader,

    MyRegister,
    MyFooter,
  },
};
</script>
