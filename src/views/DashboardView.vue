<template>
  <div class="MyDashboard">
    <MyHeader />
    <NavigationBar />
    <MyDashboard />
    <MyFooter />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import MyDashboard from "@/components/MyDashboard.vue";

export default {
  name: "DashboardView",
  components: {
    MyHeader,
    NavigationBar,
    MyFooter,
    MyDashboard,
  },
};
</script>
