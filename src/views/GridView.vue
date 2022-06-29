<template>
  <div class="MyGrid">
    <MyHeader />
    <NavigationBar />
    <MyGridV2 />
    <MyFooter />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import MyGridV2 from "@/components/MyGridV2.vue";

export default {
  name: "GridView",
  components: {
    MyHeader,
    NavigationBar,
    MyFooter,
    MyGridV2,
  },
};
</script>
