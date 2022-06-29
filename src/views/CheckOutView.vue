<template>
  <div class="MyGrid">
    <MyHeader />
    <NavigationBar />
    <CheckOut />
    <MyFooter />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import CheckOut from "@/components/CheckOut.vue";

export default {
  name: "CheckOutView",
  components: {
    MyHeader,
    NavigationBar,
    MyFooter,
    CheckOut,
  },
};
</script>
