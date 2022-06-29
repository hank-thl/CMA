<template>
  <div>
    <nav class="hidden-xs">
      <div class="container">
        <div class="nav-inner">
          <!-- BEGIN NAV -->
          <ul id="nav" class="hidden-xs">
            <li
              v-for="nav in navs"
              :key="nav.id"
              class="level0 nav-6 level-top drop-menu"
            >
              <router-link
                class="level-top"
                :to="{ name: 'grid', params: { category: nav.id } }"
              >
                <span>{{ nav.tab }}</span>
              </router-link>

              <!-- <ul v-if="nav.list.length > 0" class="level1">
                <li v-for="item in nav.list" :key="item" class="level2 first">
                  <router-link to="/about">
                    <span>{{ item }}</span>
                  </router-link>
                </li>
              </ul> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      navs: [
        {
          id: 0,
          tab: "全部商品",
        },
        {
          id: 1,
          tab: "飾品",
        },
        {
          id: 2,
          tab: "家飾佈置",
        },
        {
          id: 3,
          tab: "3C",
        },
        {
          id: 4,
          tab: "運動用品",
        },
      ],
    };
  },
};
console.log("Nav");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
