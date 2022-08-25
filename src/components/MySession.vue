<template>
  <section class="main-container col2-left-layout">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="category-product">
            <div class="navbar nav-menu">
              <div class="navbar-collapse">
                <div class="new_title">
                  <h2>{{ msg }}</h2>
                </div>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <div class="product-bestseller">
              <div class="product-bestseller-content">
                <div class="product-bestseller-list">
                  <div class="tab-container">
                    <!-- tab product -->
                    <div class="tab-panel active" id="tab-1">
                      <div class="category-products">
                        <ul class="products-grid">
                          <template v-for="(item, index) in typeProducts">
                            <li
                              v-if="index >= myIndex && index < myIndex + 8"
                              :key="item.productId"
                              class="item col-lg-3 col-md-3 col-sm-4 col-xs-6"
                            >
                              <div class="item-inner">
                                <div class="item-img">
                                  <div class="item-img-info">
                                    <router-link
                                      class="product-image"
                                      title="Lorem ipsum dolor"
                                      :to="{
                                        name: 'product',
                                        params: { id: item.productId },
                                      }"
                                    >
                                      <img
                                        class="productImage"
                                        alt="Lorem ipsum dolor"
                                        :src="item.productImg1"
                                      />
                                    </router-link>
                                  </div>
                                </div>
                                <div class="item-info">
                                  <div class="info-inner">
                                    <div class="item-title">
                                      <router-link
                                        title="productname"
                                        :to="{
                                          name: 'product',
                                          params: { id: item.productId },
                                        }"
                                        >{{ item.productName }}</router-link
                                      >
                                    </div>
                                    <div class="item-content">
                                      <div class="item-price">
                                        <div class="price-box">
                                          <span class="regular-price"
                                            ><span class="price"
                                              >${{ item.productPrice }}</span
                                            ></span
                                          >
                                        </div>
                                      </div>
                                      <div class="action">
                                        <button
                                          @click="addToCart(item.productId)"
                                          class="button btn-cart"
                                          type="button"
                                          data-original-title="Add to Cart"
                                        >
                                          <span>Add to Cart</span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </template>
                        </ul>
                      </div>
                    </div>
                    <!-- tab product -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="pagination">
              <ul>
                <li>
                  <a v-if="myIndex > 0" @click="changeIndex(-8)">&laquo;</a>
                </li>
                <template v-for="(item, index) in typeProducts">
                  <li
                    :key="item.id"
                    v-if="index % 8 == 0 && typeProducts.length > 8"
                  >
                    <a
                      :class="index == this.myIndex ? 'active' : ''"
                      @click="changePage(index)"
                    >
                      {{ index / 8 + 1 }}</a
                    >
                  </li>
                </template>

                <li>
                  <a
                    v-if="myIndex + 8 < typeProducts.length"
                    @click="changeIndex(+8)"
                    >&raquo;</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- ok -->
      </div>
      <!-- ok -->
    </div>
  </section>
</template>

<script>
import axios from "axios";
// import $ from "jquery";
import store from "@/store/index";

export default {
  name: "MySession",
  data() {
    return {
      myIndex: 0,
      products: [],
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    // axios.get("@/assets/data/products.json").then((res) => {
    //   this.products = res.data;
    //   console.log(res.data);
    // });
    this.products = store.state.products;
  },
  methods: {
    changeIndex(num) {
      if (this.myIndex >= 0 && this.myIndex < this.typeProducts.length)
        this.myIndex += num;
    },
    changePage(page) {
      this.myIndex = page;
    },

    addToCart(id) {
      axios.get(`http://localhost:8081/api/cart/add/${id}/qty/`);
      store.state.cartAmount += 1;
      // this.$swal("CMA", "成功加入購物車", "success");
      alert("成功加入購物車");
    },
  },
  computed: {
    typeProducts() {
      if (this.msg === "全部商品") {
        return this.products;
      } else {
        return this.products.filter((item) => {
          return item.productCatalog === this.msg;
        });
      }
    },
  },
};
</script>


<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}
.pagination ul {
  padding: 0;
}
.pagination li {
  list-style-type: none;
  display: inline;
}

.productImage {
  aspect-ratio: 1/1;
  object-fit: contain;
}
/* Pagination links */
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}

/* Style the active/current link */
.pagination a.active {
  background-color: #62a83d;
  color: white;
}

/* Add a grey background color on mouse-over */
.pagination a:hover:not(.active) {
  background-color: #ddd;
}
</style>