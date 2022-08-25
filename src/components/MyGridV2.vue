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
                          <li><a @click="priceH2L()">價格:高➜低</a></li>
                          <li><a @click="priceL2H()">價格:低➜高</a></li>
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
              <ul class="products-grid" id="test1"></ul>
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
                  <li
                    v-for="(item, index) in categories"
                    :key="item"
                    class="mega-menu"
                  >
                    <router-link
                      :to="{ name: 'grid', params: { category: index } }"
                    >
                      {{ item }}
                    </router-link>
                  </li>
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
                        @click="clearText(), setList()"
                      /><br />
                    </li>
                    <li></li>
                    <br />
                    <li>
                      <input
                        type="button"
                        value="套用條件"
                        @click="doText()"
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
// import store from "@/store/index";
// import axios from "axios";

import $ from "jquery";

export default {
  name: "MyGridV2",
  data() {
    return {
      myIndex: 0,
      sortState: 0,
      categories: ["全部商品", "飾品", "家飾佈置", "3C", "運動用品"],
      category: 0,
      products: [],
    };
  },

  mounted() {
    $("#test1").empty();
    this.category = parseInt(this.$route.params.category);
    this.getList;
  },
  computed: {
    getList() {
      return this.setList();
    },
  },
  methods: {
    setList() {
      $("#test1").empty();

      let categories = ["全部商品", "飾品", "家飾佈置", "3C", "運動用品"];
      let categoryId = this.category;

      let bestSaleList = this.products;
      $.each(bestSaleList, (index, products) => {
        // console.log(index);
        // console.log(this.category);
        if ("全部商品" == categories[categoryId]) {
          $("#test1")
            .append(` <li class="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="#/product/${products.productId}" title="Lorem ipsum dolor"
                                                        class="product-image"><img src="${products.productImg1}"
                                                            alt="Lorem ipsum dolor" style="aspect-ratio: 1/1;"></a>
                                                    
                                                    
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a id="productName1" title="Lorem ipsum dolor" href="#/product/${products.productId}">${products.productName}</a></div>
                                                    <div class="item-content">
                                                        
                                                        <div class="item-price">
                                                            <div class="price-box">
                                                              
                                                                <p class="special-price"><span
                                                                        class="price-label">Special Price</span><span
                                                                        class="price" id="productPrice1">NT ${products.productPrice} </span></p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> `);
        } else if (products.productCatalog == categories[categoryId]) {
          $("#test1")
            .append(` <li class="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="#/product/${products.productId}" title="Lorem ipsum dolor"
                                                        class="product-image"><img src="${products.productImg1}"
                                                            alt="Lorem ipsum dolor"  style="aspect-ratio: 1/1;"></a>
                                                    
                                                    
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a id="productName1" title="Lorem ipsum dolor" href="#">${products.productName}</a></div>
                                                    <div class="item-content">
                                                        
                                                        <div class="item-price">
                                                            <div class="price-box">
                                                              
                                                                <p class="special-price"><span
                                                                        class="price-label">Special Price</span><span
                                                                        class="price" id="productPrice1">NT ${products.productPrice} </span></p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> `);
        }
      });
    },
    priceH2L() {
      $("#test1").empty();
      // location.reload();
      let categories = ["全部商品", "飾品", "家飾佈置", "3C", "運動用品"];
      let categoryId = this.category;

      let priceH2L = this.products;
      priceH2L.sort(function (a, b) {
        return b.productPrice - a.productPrice;
      });
      $.each(priceH2L, (index, products) => {
        if ("全部商品" == categories[categoryId]) {
          $("#test1")
            .append(` <li class="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="#/product/${products.productId}" title="Lorem ipsum dolor"
                                                        class="product-image"><img src="${products.productImg1}"
                                                            alt="Lorem ipsum dolor"  style="aspect-ratio: 1/1;"></a>
                                                  
                                                    
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a id="productName1" title="Lorem ipsum dolor" href="#/product/${products.productId}">${products.productName}</a></div>
                                                    <div class="item-content">
                                                        
                                                        <div class="item-price">
                                                            <div class="price-box">
                                                              
                                                                <p class="special-price"><span
                                                                        class="price-label">Special Price</span><span
                                                                        class="price" id="productPrice1">NT ${products.productPrice} </span></p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> `);
        } else if (products.productCatalog == categories[categoryId]) {
          $("#test1")
            .append(` <li class="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="#/product/${products.productId}" title="Lorem ipsum dolor"
                                                        class="product-image"><img src="${products.productImg1}"
                                                            alt="Lorem ipsum dolor"  style="aspect-ratio: 1/1;"></a>
                                                    
                                                    
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a id="productName1" title="Lorem ipsum dolor" href="#/product/${products.productId}">${products.productName}</a></div>
                                                    <div class="item-content">
                                                        
                                                        <div class="item-price">
                                                            <div class="price-box">
                                                              
                                                                <p class="special-price"><span
                                                                        class="price-label">Special Price</span><span
                                                                        class="price" id="productPrice1">NT ${products.productPrice} </span></p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> `);
        }
      });
    },
    priceL2H() {
      $("#test1").empty();
      // location.reload();
      let categories = ["全部商品", "飾品", "家飾佈置", "3C", "運動用品"];
      let categoryId = this.category;

      let priceL2H = this.products;
      priceL2H.sort(function (a, b) {
        return a.productPrice - b.productPrice;
      });
      $.each(priceL2H, (index, products) => {
        if ("全部商品" == categories[categoryId]) {
          $("#test1")
            .append(` <li class="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="#/product/${products.productId}" title="Lorem ipsum dolor"
                                                        class="product-image"><img src="${products.productImg1}"
                                                            alt="Lorem ipsum dolor"  style="aspect-ratio: 1/1;"></a>
                                                    
                                                    
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a id="productName1" title="Lorem ipsum dolor" href="#/product/${products.productId}">${products.productName}</a></div>
                                                    <div class="item-content">
                                                        
                                                        <div class="item-price">
                                                            <div class="price-box">
                                                              
                                                                <p class="special-price"><span
                                                                        class="price-label">Special Price</span><span
                                                                        class="price" id="productPrice1">NT ${products.productPrice} </span></p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> `);
        } else if (products.productCatalog == categories[categoryId]) {
          $("#test1")
            .append(` <li class="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="#/product/${products.productId}" title="Lorem ipsum dolor"
                                                        class="product-image"><img src="${products.productImg1}"
                                                            alt="Lorem ipsum dolor"  style="aspect-ratio: 1/1;"></a>
                                               
                                                    
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a id="productName1" title="Lorem ipsum dolor" href="#/product/${products.productId}">${products.productName}</a></div>
                                                    <div class="item-content">
                                                        
                                                        <div class="item-price">
                                                            <div class="price-box">
                                                              
                                                                <p class="special-price"><span
                                                                        class="price-label">Special Price</span><span
                                                                        class="price" id="productPrice1">NT ${products.productPrice} </span></p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> `);
        }
      });
    },
    doText() {
      $("#test1").empty();
      let categories = ["全部商品", "飾品", "家飾佈置", "3C", "運動用品"];
      let categoryId = this.category;

      let sortPrice = this.products;

      sortPrice.sort(function (a, b) {
        return a.productPrice - b.productPrice;
      });
      var mini = document.getElementById("inputMi").value;
      var max = document.getElementById("inputMa").value;

      $.each(sortPrice, (index, products) => {
        if ("全部商品" == categories[categoryId]) {
          if (
            parseInt(products.productPrice) >= mini &&
            parseInt(products.productPrice) <= max
          ) {
            $("#test1")
              .append(` <li class="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="#/product/${products.productId}" title="Lorem ipsum dolor"
                                                        class="product-image"><img src="${products.productImg1}"
                                                            alt="Lorem ipsum dolor"  style="aspect-ratio: 1/1;"></a>
                                                   
                                                    
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a id="productName1" title="Lorem ipsum dolor" href="#/product/${products.productId}">${products.productName}</a></div>
                                                    <div class="item-content">
                                                        
                                                        <div class="item-price">
                                                            <div class="price-box">
                                                              
                                                                <p class="special-price"><span
                                                                        class="price-label">Special Price</span><span
                                                                        class="price" id="productPrice1">NT ${products.productPrice} </span></p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> `);
          }
        } else if (products.productCatalog == categories[categoryId]) {
          if (
            parseInt(products.productPrice) >= mini &&
            parseInt(products.productPrice) <= max
          ) {
            $("#test1")
              .append(` <li class="item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="#/product/${products.productId}" title="Lorem ipsum dolor"
                                                        class="product-image"><img src="${products.productImg1}"
                                                            alt="Lorem ipsum dolor"  style="aspect-ratio: 1/1;"></a>
                                                    
                                                    
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a id="productName1" title="Lorem ipsum dolor" href="#/product/${products.productId}">${products.productName}</a></div>
                                                    <div class="item-content">
                                                        
                                                        <div class="item-price">
                                                            <div class="price-box">
                                                              
                                                                <p class="special-price"><span
                                                                        class="price-label">Special Price</span><span
                                                                        class="price" id="productPrice1">NT ${products.productPrice} </span></p>
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> `);
          }
        }
      });
    },
    clearText() {
      document.getElementById("inputMi").value = "";
      document.getElementById("inputMa").value = "";
    },
  },
  watch: {
    "$route.params.category": function (category) {
      this.category = category;
      this.setList();
    },
  },
};
</script>

<style scoped>
#test1 img {
  aspect-ratio: 1/1;
  object-fit: contain;
}

#sortbySize {
  font-size: 16px;
}
</style>
