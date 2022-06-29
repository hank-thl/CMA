<template>
  <header>
    <div class="header-container">
      <div class="container">
        <div class="row">
          <!-- Search-col -->
          <div class="col-lg-4 col-xs-12 col-sm-4 search-section hidden-xs">
            <div class="search-box pull-left">
              <form
                action="cat"
                method="POST"
                id="search_mini_form"
                name="Categories"
              >
                <input
                  type="text"
                  name="search"
                  value=""
                  placeholder="Search"
                  class="searchbox"
                  id="search"
                  autocomplete="off"
                /><button type="button" class="search-btn-bg">
                  <span class="glyphicon glyphicon-search"></span>&nbsp;
                </button>
              </form>
            </div>
          </div>
          <!-- End Search-col -->
          <div class="col-lg-4 col-sm-4 col-xs-12 logo-block">
            <!-- Header Logo -->
            <div class="logo">
              <a href="index.html">
                <router-link
                  :to="{
                    name: 'home',
                  }"
                >
                  <img src="../assets/images/5.png" alt="Kabrio logo" />
                </router-link>
              </a>
            </div>
            <!-- End Header Logo -->
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-12 toplinks-right">
            <!-- <div class="mm-toggle-wrap">
              <div class="mm-toggle">
                <i class="fa fa-align-justify"></i
                ><span class="mm-label">Menu</span>
              </div>
            </div> -->

            <div class="top-cart-contain" @click.stop="dropdown(), getCart()">
              <!-- Top Cart -->
              <div class="mini-cart">
                <div class="basket">
                  <a
                    ><span>{{ getItemAmount }}</span></a
                  >
                </div>
                <div>
                  <div class="top-cart-content" @mouseleave.stop="up()">
                    <div class="block-subtitle">
                      <div class="top-subtotal">
                        {{
                          cart == "購物車內目前沒有商品!" ? "0" : cart.length
                        }}
                        items,

                        <span class="price">${{ amount }}</span>
                      </div>
                    </div>
                    <ul
                      v-if="cart != '購物車內目前沒有商品!'"
                      class="mini-products-list"
                      id="cart-sidebar"
                    >
                      <li v-for="item in cart" :key="item" class="item">
                        <div class="item-inner">
                          <a
                            class="product-image"
                            title="Lorem ipsum dolor"
                            href="#l"
                            ><img
                              alt="Lorem ipsum dolor"
                              :src="item.productImg"
                          /></a>
                          <div class="product-details">
                            <div class="access">
                              <a
                                class="btn-remove1"
                                title="Remove This Item"
                                @click="removeItem(item.productId)"
                                >Remove</a
                              ><a class="btn-edit" title="Edit item" href="#"
                                ><i class="icon-pencil"></i
                                ><span class="hidden">Edit item</span></a
                              >
                            </div>
                            <p class="product-name">
                              <a href="#">{{ item.productName }}</a>
                            </p>
                            <strong>{{ item.qty }}</strong
                            >x
                            <span class="price">{{ item.singleTotal }}</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class="actions">
                      <router-link
                        :to="{
                          name: memberId > 0 ? 'checkout' : 'login',
                        }"
                      >
                        <button
                          class="btn-checkout"
                          title="Checkout"
                          type="button"
                        >
                          <span>結帳</span>
                        </button>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Top Cart -->
            </div>
            <!-- Header Top Links -->
            <div class="toplinks" @mouseenter="getMember()">
              <div class="click-nav">
                <div class="no-js">
                  <a title="Company" class="clicker"
                    ><span class="icon-account"
                      ><img
                        src="../assets/images/icon-account.jpg"
                        alt="icon-account" /></span
                  ></a>
                  <div class="top-links">
                    <ul class="links">
                      <li>
                        <router-link
                          :to="{
                            name: 'login',
                          }"
                        >
                          {{ memberId > 0 ? " 登出" : " 登入" }}
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          :to="{
                            name: memberId > 0 ? 'dashboard' : 'login',
                          }"
                        >
                          訂單總覽
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Header Top Links -->
          </div>
        </div>
      </div>
    </div>
    <!-- <template v-for="item in cart" :key="item.id"> -->
    <!-- </template> -->
  </header>
</template>

<script>
import store from "@/store/index";
import $ from "jquery";
import axios from "axios";

export default {
  name: "MyHeader",
  data() {
    return {
      cart: [],
      amount: 0,
      memberId: 0,
    };
  },
  mounted() {
    $(".top-cart-content").slideUp();
    axios.get(`http://localhost:8081/api/cart/checkout`).then((res) => {
      this.cart = res.data;
      this.amount = 0;
      if (this.cart != "購物車內目前沒有商品!") {
        $.each(this.cart, (index, products) => {
          this.amount += parseInt(products.singleTotal);
        });
      }
    });
  },
  computed: {
    getItemAmount() {
      return store.state.cartAmount;
    },
  },

  methods: {
    dropdown() {
      $(".top-cart-content").slideDown();
    },
    up() {
      $(".top-cart-content").slideUp();
    },
    removeItem(id) {
      axios
        .get(`http://localhost:8081/api/cart/remove/${id}`)
        .then((res) => {
          if (res.status != 404) {
            this.memberId = res.data;
          }
        })
        .catch();
      this.getCart();
    },
    getMember() {
      axios
        .get("http://localhost:8081/api/test/session/mid")
        .then((res) => {
          if (res.status != 404) {
            this.memberId = res.data;
          }
        })
        .catch();
    },
    getCart() {
      axios.get(`http://localhost:8081/api/cart/checkout`).then((res) => {
        this.cart = res.data;
        this.amount = 0;
        if (this.cart != "購物車內目前沒有商品!") {
          $.each(this.cart, (index, products) => {
            this.amount += parseInt(products.singleTotal);
          });
        }
      });

      axios
        .get("http://localhost:8081/api/test/session/mid")
        .then((res) => {
          if (res.status != 404) {
            this.memberId = res.data;
            console.log(this.memberId);
          }
        })
        .catch();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart {
  width: 300px !important;
  padding: 0 !important;
}
</style>
