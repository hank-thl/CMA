<template>
  <section class="main-container col1-layout">
    <div class="main">
      <div class="container" v-for="item in product" :key="item.productId">
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <div class="col-main">
              <div class="product-view">
                <div class="product-essential">
                  <form action="#" method="post" id="product_addtocart_form">
                    <div class="product-img-box col-lg-4 col-sm-5 col-xs-12">
                      <div class="new-label new-top-left">New</div>
                      <div class="product-image">
                        <div class="product-full">
                          <img
                            id="productImg1"
                            class="productImage"
                            :src="item.productImg1"
                            data-zoom-image="到時候圖片網址要被取代"
                            alt="product-image"
                          />
                        </div>
                        <div class="more-views">
                          <div class="slider-items-products">
                            <div
                              id="gallery_01"
                              class="
                                product-flexslider
                                hidden-buttons
                                product-img-thumb
                              "
                            >
                              <div
                                class="
                                  slider-items slider-width-col4
                                  block-content
                                "
                              >
                                <div
                                  class="
                                    more-views-items
                                    col-lg-4 col-sm-4 col-xs-4
                                  "
                                >
                                  <a
                                    id="product-zoom01"
                                    @click="changeImage(2)"
                                    data-image="到時候圖片網址要被取代"
                                    data-zoom-image="到時候圖片網址要被取代"
                                  >
                                    <img
                                      class="productImage"
                                      id="productImg2"
                                      :src="item.productImg2"
                                      alt="product-image"
                                    />
                                  </a>
                                </div>
                                <div
                                  class="
                                    more-views-items
                                    col-lg-4 col-sm-4 col-xs-4
                                  "
                                >
                                  <a
                                    id="product-zoom02"
                                    @click="changeImage(3)"
                                    data-image="到時候圖片網址要被取代"
                                    data-zoom-image="到時候圖片網址要被取代"
                                  >
                                    <img
                                      class="productImage"
                                      id="productImg3"
                                      :src="item.productImg3"
                                      alt="product-image"
                                    />
                                  </a>
                                </div>
                                <div
                                  class="
                                    more-views-items
                                    col-lg-4 col-sm-4 col-xs-4
                                  "
                                >
                                  <a
                                    id="product-zoom03"
                                    @click="changeImage(4)"
                                    data-image="到時候圖片網址要被取代"
                                    data-zoom-image="到時候圖片網址要被取代"
                                  >
                                    <img
                                      class="productImage"
                                      id="productImg4"
                                      :src="item.productImg4"
                                      alt="product-image"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- end: more-images -->
                    </div>
                    <div class="product-shop col-lg-8 col-sm-7 col-xs-12">
                      <div class="product-name">
                        <h1 id="productHead">{{ item.productName }}</h1>
                      </div>
                      <br />
                      <div class="rating">
                        <div class="stars">
                          <span
                            class="fa fa-star checked"
                            id="star1"
                            onclick="IamTrying(event, 'star1')"
                          ></span>
                          <span
                            class="fa fa-star checked"
                            id="star2"
                            onclick="IamTrying(event, 'star2')"
                          ></span>
                          <span
                            class="fa fa-star checked"
                            id="star3"
                            onclick="IamTrying(event, 'star3')"
                          ></span>
                          <span
                            class="fa fa-star checked"
                            id="star4"
                            onclick="IamTrying(event, 'star4')"
                          ></span>
                          <span
                            class="fa fa-star"
                            id="star5"
                            onclick="IamTrying(event, 'star5')"
                          ></span>
                        </div>
                        <span class="review-no">41 則評價</span>
                      </div>
                      <div class="price-block">
                        <div class="price-box">
                          <p class="special-price">
                            <span class="price-label">Special Price</span
                            ><span class="price">NT$</span>
                            <span id="productPrice" class="price">
                              {{ item.productPrice }}</span
                            >
                          </p>
                          <p class="availability in-stock pull-right">
                            <span>有存貨</span>
                          </p>
                        </div>
                      </div>
                      <div class="short-description">
                        <h2>商品描述</h2>
                        <p id="productDiscript">{{ item.productDesc }}</p>
                      </div>
                      <div class="add-to-box">
                        <div class="add-to-cart">
                          <div class="pull-left">
                            <div class="custom pull-left">
                              <button
                                @click="qty > 1 ? (qty -= 1) : qty"
                                class="reduced items-count"
                                type="button"
                              >
                                <i class="fa fa-minus">&nbsp;</i>
                              </button>
                              <input
                                type="text"
                                :value="qty"
                                class="input-text qty"
                                disabled="disabled"
                                title="Qty"
                                maxlength="12"
                                id="qty"
                                name="qty"
                              />
                              <button
                                @click="qty += 1"
                                class="increase items-count"
                                type="button"
                              >
                                <i class="fa fa-plus">&nbsp;</i>
                              </button>
                            </div>
                          </div>
                          <button
                            @click="addToCart()"
                            id="addToCart"
                            class="button btn-cart"
                            title="Add to Cart"
                            type="button"
                          >
                            加入購物車
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="product-collateral col-lg-12 col-sm-12 col-xs-12">
            <div class="add_info">
              <ul id="product-detail-tab" class="nav nav-tabs product-tabs">
                <li :class="isVisible == 1 ? 'active bg-warning' : ''">
                  <a @click="isVisible = 1" data-toggle="tab">商品描述</a>
                </li>
                <li :class="isVisible == 2 ? 'active bg-warning' : ''">
                  <a @click="isVisible = 2" data-toggle="tab">送貨及付款方式</a>
                </li>
                <li :class="isVisible == 3 ? 'active bg-warning' : ''">
                  <a @click="isVisible = 3" data-toggle="tab">顧客評價</a>
                </li>
              </ul>
              <div id="productTabContent" class="tab-content">
                <div v-if="isVisible == 1" id="product_tabs_description">
                  <div class="std">
                    <p></p>
                    <h1>顧客評價</h1>

                    <br />
                    <p>這裡會詳述顧客評價</p>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
                <div v-if="isVisible == 2" id="product_tabs_tags">
                  <div class="box-collateral box-tags">
                    <p></p>
                    <h1>送貨及付款方式</h1>

                    <br />
                    <p>這裡會詳述送貨及付款方式</p>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
                <div v-if="isVisible == 3" id="reviews_tabs">
                  <div class="box-collateral box-reviews" id="customer-reviews">
                    <div class="box-reviews1">
                      <div class="form-add">
                        <form
                          id="review-form"
                          method="post"
                          action="http://www.magikcommerce.com/review/product/post/id/176/"
                        >
                          <h3>請給我們寶貴的意見</h3>
                          <fieldset>
                            <h4>
                              你對此項產品的評價為何?
                              <em class="required">*</em>
                            </h4>
                            <span id="input-message-box"></span>
                            <table id="product-review-table" class="data-table">
                              <thead>
                                <tr class="first last">
                                  <th>&nbsp;</th>
                                  <th><span class="nobr">1 *</span></th>
                                  <th><span class="nobr">2 *</span></th>
                                  <th><span class="nobr">3 *</span></th>
                                  <th><span class="nobr">4 *</span></th>
                                  <th><span class="nobr">5 *</span></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="first odd">
                                  <th>價錢</th>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="11"
                                      id="Price_1"
                                      name="ratings[3]"
                                    />
                                  </td>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="12"
                                      id="Price_2"
                                      name="ratings[3]"
                                    />
                                  </td>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="13"
                                      id="Price_3"
                                      name="ratings[3]"
                                    />
                                  </td>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="14"
                                      id="Price_4"
                                      name="ratings[3]"
                                    />
                                  </td>
                                  <td class="value last">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="15"
                                      id="Price_5"
                                      name="ratings[3]"
                                    />
                                  </td>
                                </tr>
                                <tr class="even">
                                  <th>價值</th>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="6"
                                      id="Value_1"
                                      name="ratings[2]"
                                    />
                                  </td>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="7"
                                      id="Value_2"
                                      name="ratings[2]"
                                    />
                                  </td>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="8"
                                      id="Value_3"
                                      name="ratings[2]"
                                    />
                                  </td>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="9"
                                      id="Value_4"
                                      name="ratings[2]"
                                    />
                                  </td>
                                  <td class="value last">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="10"
                                      id="Value_5"
                                      name="ratings[2]"
                                    />
                                  </td>
                                </tr>
                                <tr class="last odd">
                                  <th>品質</th>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="1"
                                      id="Quality_1"
                                      name="ratings[1]"
                                    />
                                  </td>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="2"
                                      id="Quality_2"
                                      name="ratings[1]"
                                    />
                                  </td>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="3"
                                      id="Quality_3"
                                      name="ratings[1]"
                                    />
                                  </td>
                                  <td class="value">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="4"
                                      id="Quality_4"
                                      name="ratings[1]"
                                    />
                                  </td>
                                  <td class="value last">
                                    <input
                                      type="radio"
                                      class="radio"
                                      value="5"
                                      id="Quality_5"
                                      name="ratings[1]"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <input
                              type="hidden"
                              value=""
                              class="validate-rating"
                              name="validate_rating"
                            />
                            <div class="review1">
                              <ul class="form-list">
                                <li>
                                  <label class="required" for="nickname_field"
                                    >暱稱<em>*</em></label
                                  >
                                  <div class="input-box">
                                    <input
                                      type="text"
                                      class="input-text"
                                      id="nickname_field"
                                      name="nickname"
                                    />
                                  </div>
                                </li>
                                <li>
                                  <label class="required" for="summary_field"
                                    >總結<em>*</em></label
                                  >
                                  <div class="input-box">
                                    <input
                                      type="text"
                                      class="input-text"
                                      id="summary_field"
                                      name="title"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="review2">
                              <ul>
                                <li>
                                  <label class="required" for="review_field"
                                    >評論區<em>*</em></label
                                  >
                                  <div class="input-box">
                                    <textarea
                                      rows="3"
                                      cols="5"
                                      id="review_field"
                                      name="detail"
                                    ></textarea>
                                  </div>
                                </li>
                              </ul>
                              <div class="buttons-set">
                                <button
                                  class="button submit"
                                  title="Submit Review"
                                  type="submit"
                                >
                                  <span>繳交意見 </span>
                                </button>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                    <div class="box-reviews2">
                      <h3>Customer Reviews</h3>
                      <div class="box visible">
                        <ul>
                          <li>
                            <table class="ratings-table">
                              <tbody>
                                <tr>
                                  <th>Value</th>
                                  <td>
                                    <div class="rating-box">
                                      <div class="rating width100"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Quality</th>
                                  <td>
                                    <div class="rating-box">
                                      <div class="rating width100"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Price</th>
                                  <td>
                                    <div class="rating-box">
                                      <div class="rating width100"></div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div class="review">
                              <h6>
                                <a href="#">Excellent</a>
                              </h6>
                              <small
                                >Review by <span>Leslie Prichard </span>on
                                1/3/2018
                              </small>
                              <div class="review-txt">
                                I have purchased shirts from Minimalism a few
                                times and am never disappointed. The quality is
                                excellent and the shipping is amazing. It seems
                                like it's at your front door the minute you get
                                off your pc. I have received my purchases within
                                two days - amazing.
                              </div>
                            </div>
                          </li>
                          <li class="even">
                            <table class="ratings-table">
                              <tbody>
                                <tr>
                                  <th>Value</th>
                                  <td>
                                    <div class="rating-box">
                                      <div class="rating width100"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Quality</th>
                                  <td>
                                    <div class="rating-box">
                                      <div class="rating width100"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Price</th>
                                  <td>
                                    <div class="rating-box">
                                      <div class="rating width80"></div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div class="review">
                              <h6>
                                <a href="#">Amazing</a>
                              </h6>
                              <small
                                >Review by <span>Sandra Parker</span>on 1/3/2018
                              </small>
                              <div class="review-txt">
                                Minimalism is the online !
                              </div>
                            </div>
                          </li>
                          <li>
                            <table class="ratings-table">
                              <tbody>
                                <tr>
                                  <th>Value</th>
                                  <td>
                                    <div class="rating-box">
                                      <div class="rating width100"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Quality</th>
                                  <td>
                                    <div class="rating-box">
                                      <div class="rating width100"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Price</th>
                                  <td>
                                    <div class="rating-box">
                                      <div class="rating width80"></div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div class="review">
                              <h6>
                                <a href="#">Nicely</a>
                              </h6>
                              <small
                                >Review by <span>Anthony Lewis</span>on 1/3/2018
                              </small>
                              <div class="review-txt last">
                                Unbeatable service and selection. This store has
                                the best business model I have seen on the net.
                                They are true to their word, and go the extra
                                mile for their customers. I felt like a
                                purchasing partner more than a customer. You
                                have a lifetime client in me.
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="actions">
                        <a class="button view-all" id="revies-button" href="#"
                          ><span><span>View all</span></span></a
                        >
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store/index";
import axios from "axios";

import $ from "jquery";

export default {
  name: "MyProduct",
  data() {
    return {
      myIndex: 0,
      qty: 1,
      isVisible: 1,
    };
  },
  mounted() {
    store.dispatch("GETPRODUCTS");
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    product() {
      return store.state.products.filter((item) => {
        return item.productId == this.id;
      });
    },
  },
  methods: {
    addToCart() {
      console.log("ppppp");
      axios
        .get(`http://localhost:8081/api/cart/add/${this.id}/qty/${this.qty}`)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      store.state.cartAmount += 1;
      this.$swal("CMA", "成功加入購物車", "success");
    },
    changeImage(no) {
      let temp;
      temp = $(`#productImg${no}`).prop("src");
      $(`#productImg${no}`).prop("src", $("#productImg1").prop("src"));
      $("#productImg1").prop("src", temp);
    },
  },
};
</script>

<style scoped>
.more-views-items {
  padding: 0 4px;
}

.productImage {
  aspect-ratio: 1/1;
  object-fit: contain;
}

#sortbySize {
  font-size: 16px;
}
</style>
