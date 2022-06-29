<template>
  <section class="main-container col2-left-layout">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-xs-12 col-sm-push-3">
          <!-- 右邊上內頁 -->
          <article class="col-main">
            <div>
              <h2 class="page-heading">
                <span class="page-heading-title">{{
                  categories[category]
                }}</span>
              </h2>
              <div class="display-product-option">
                <div class="col-lg-3 col-md-10">
                  <div id="sort-by">
                    <ul>
                      <li>
                        篩 選:<span class="right-arrow"></span>
                        <ul>
                          <li><a @click="sortState = 1">價格:高➜低</a></li>
                          <li><a @click="sortState = 2">價格:低➜高</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右邊下面 -->

            <!-- 右邊中間 -->
            <div class="category-products">
              <ul class="products-grid" id="test1">
                <template v-for="(item, index) in typeProducts">
                  <li
                    v-if="index >= myIndex"
                    :key="item.id"
                    class="item col-lg-4 col-md-4 col-sm-4 col-xs-6"
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
                              :src="item.productImg1"
                              alt="Lorem ipsum dolor"
                              class="productImage"
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
                            >
                              {{ item.productName }}
                            </router-link>
                          </div>
                          <div class="item-content">
                            <div class="rating">
                              <div class="ratings">
                                <div class="rating-box">
                                  <div class="rating width80"></div>
                                </div>
                                <p class="rating-links">
                                  <a href="#">1 Review(s)</a
                                  ><span class="separator">|</span
                                  ><a href="#">Add Review</a>
                                </p>
                              </div>
                            </div>
                            <div class="item-price">
                              <div class="price-box">
                                <p class="special-price">
                                  <span class="price-label">Special Price</span
                                  ><span class="price"
                                    >${{ item.productPrice }}</span
                                  >
                                </p>
                              </div>
                            </div>
                            <div class="action">
                              <button
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
            <!-- 右邊下面 -->
          </article>
          <!--  End article -->
        </div>
        <!-- 左邊目錄 -->
        <div class="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9">
          <aside class="col-left sidebar">
            <div class="side-nav-categories">
              <div class="block-title">目錄</div>
              <div class="box-content box-category">
                <ul>
                  <li class="mega-menu"><a href="grid.html">飾品</a></li>
                  <li class="mega-menu"><a href="grid2.html">質感燈飾</a></li>
                  <li class="mega-menu"><a href="grid.html">服飾</a></li>
                  <li class="mega-menu"><a href="grid.html">日常用品</a></li>
                  <li class="mega-menu"><a href="grid.html">居家收納</a></li>
                  <li class="mega-menu"><a href="grid.html">外出旅行</a></li>
                </ul>
              </div>
              <!--box-content box-category-->
            </div>
            <div class="hot-banner">
              <!-- <img alt="banner" src="colinimage/rakuten.png" /> -->
            </div>
            <div class="block block-layered-nav">
              <div class="block-title">
                <!-- <img
                  src="colinimage/sagasu.jfif"
                  width="20"
                  height="30"
                /> -->
                條件篩選
              </div>

              <div class="block-content">
                <p class="block-subtitle"></p>
                <div class="price-filter" style="text-align: center">
                  <label><strong>價格</strong></label>
                  <ul>
                    <!-- <li><input  class="custom-control-input" id="below-50"><label
                                                    class="custom-control-label" for="below-20">below-$50</label></li> -->
                    <li style="text-align: center">
                      <input
                        type="number"
                        style="width: 80px"
                        maxlength="5"
                        min="0"
                        step="100"
                        placeholder="輸入金額"
                        id="inputMi"
                      />
                      <b>~</b>
                      <input
                        type="number"
                        style="width: 80px"
                        maxlength="5"
                        min="0"
                        step="100"
                        placeholder="輸入金額"
                        id="inputMa"
                      />
                    </li>
                  </ul>

                  <ul>
                    <li></li>
                    <br />
                    <li style="text-align: center">
                      <input
                        type="button"
                        value="清除全部"
                        onclick="clearText()"
                      /><br />
                    </li>
                    <li></li>
                    <br />
                    <li>
                      <input
                        type="button"
                        value="套用條件"
                        onclick="doText()"
                      /><br />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store/index";
// import axios from "axios";

// import $ from "jquery";

export default {
  name: "MyGrid",
  data() {
    return {
      myIndex: 0,
      sortState: 0,
      categories: ["全部商品", "配件", "生活小品"],
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    store.dispatch("GETPRODUCTS");
  },
  computed: {
    category() {
      return parseInt(this.$route.params.category);
    },
    typeProducts() {
      if (this.sortState == 1) {
        if (this.categories[this.category] === "全部商品") {
          return store.state.products.sort((a, b) => {
            return b.productPrice - a.productPrice;
          });
        } else {
          return store.state.products
            .sort((a, b) => {
              return b.productPrice - a.productPrice;
            })
            .filter((item) => {
              return item.productCatalog === this.categories[this.category];
            });
        }
      } else if (this.sortState == 2) {
        if (this.categories[this.category] === "全部商品") {
          return store.state.products.sort((a, b) => {
            return a.productPrice - b.productPrice;
          });
        } else {
          return store.state.products
            .sort((a, b) => {
              return a.productPrice - b.productPrice;
            })
            .filter((item) => {
              return item.productCatalog === this.categories[this.category];
            });
        }
      } else {
        if (this.categories[this.category] === "全部商品") {
          return store.state.products;
        } else {
          return store.state.products.filter((item) => {
            return item.productCatalog === this.categories[this.category];
          });
        }
      }
    },
  },
};

// function clearText() {
//   document.getElementById("inputMi").value = "";
//   document.getElementById("inputMa").value = "";
// }

// function doText() {
//   $("#test1").empty();
//   // location.reload();
//   $.get(
//     "http://bosian.ddns.net:8080/IIIFinalServlet_war_exploded/ProductServlet?pdaction=Select1",
//     function (e) {
//       priceH2L = JSON.parse(e);
//       // priceH2L.sort((a, b) => parseFloat(b.ProductPrice) - parseFloat(a.ProductPrice));
//       priceH2L.sort(function (a, b) {
//         return a.productPrice - b.productPrice;
//       });
//       var mini = document.getElementById("inputMi").value;
//       var max = document.getElementById("inputMa").value;

//       $.each(priceH2L, (index, products) => {
//         if (products.productCatalog == "配件") {
//           if (products.productPrice >= mini && products.productPrice <= max) {
//             $("#test1")
//               .append(` <li class="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
//                                         <div class="item-inner">
//                                             <div class="item-img">
//                                                 <div class="item-img-info"><a href="#" title="Lorem ipsum dolor"
//                                                         class="product-image"><img src="${products.productImg1}"
//                                                             alt="Lorem ipsum dolor" width="100" height="200"></a>
//                                                     <div class="new-label new-top-left">New</div>

//                                                 </div>
//                                             </div>
//                                             <div class="item-info">
//                                                 <div class="info-inner">
//                                                     <div class="item-title"><a id="productName1" title="Lorem ipsum dolor" href="#">${products.productName}</a></div>
//                                                     <div class="item-content">
//                                                         <div class="rating">
//                                                             <div class="ratings">
//                                                                 <div class="rating-box">
//                                                                     <div class="rating width80"></div>
//                                                                 </div>
//                                                                 <p class="rating-links"><a href="#">1 Review(s)</a><span
//                                                                         class="separator">|</span><a href="#">Add
//                                                                         Review</a></p>
//                                                             </div>
//                                                         </div>
//                                                         <div class="item-price">
//                                                             <div class="price-box">

//                                                                 <p class="special-price"><span
//                                                                         class="price-label">Special Price</span><span
//                                                                         class="price" id="productPrice1">NT ${products.productPrice} </span></p>
//                                                             </div>
//                                                         </div>
//                                                         <div class="action"><button class="button btn-cart"
//                                                                 type="button"
//                                                                 data-original-title="Add to Cart"><span>Add to
//                                                                     Cart</span></button></div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </li> `);
//           }
//         }
//       });
//     }
//   );
// }
</script>

<style scoped>
.productImage {
  aspect-ratio: 1/1;
  object-fit: contain;
}

#sortbySize {
  font-size: 16px;
}
</style>
