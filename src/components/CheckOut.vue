<template>
  <div>
    <div class="container">
      <div class="cart">
        <div class="page-title">
          <h2>Shopping Cart</h2>
        </div>
        <div class="table-responsive">
          <!-- 這邊應該是form交給後端處理 -->
          <div>
            <!-- <form method="post" action="#updatePost/"> -->
            <fieldset>
              <table class="data-table cart-table" id="shopping-cart-table">
                <thead>
                  <tr class="first last">
                    <th rowspan="1"></th>
                    <th rowspan="1"><span class="nobr">產品名稱</span></th>
                    <th rowspan="1"></th>
                    <th colspan="1" class="a-center">
                      <span class="nobr">價格</span>
                    </th>
                    <th class="a-center qty-middle" rowspan="1">數量</th>
                    <th colspan="1" class="a-center">總價</th>
                    <th class="a-center" rowspan="1"></th>
                  </tr>
                </thead>
                <tfoot>
                  <tr class="first last">
                    <td class="a-right last" colspan="50">
                      <button
                        class="button btn-continue"
                        title="Continue Shopping"
                        type="button"
                      >
                        <span>繼續購物</span>
                      </button>
                      <button
                        @click="getCheckOut()"
                        class="button btn-update"
                        title="Update Cart"
                        value="update_qty"
                        name="update_cart_action"
                      >
                        <span>結帳</span>
                      </button>
                      <button
                        id="empty_cart_button"
                        class="button btn-empty"
                        title="Clear Cart"
                        value="empty_cart"
                        name="update_cart_action"
                        type="submit"
                      >
                        <span>清空購物車</span>
                      </button>
                    </td>
                  </tr>
                </tfoot>
                <tbody id="putHere">
                  <div id="jspPutHere"></div>
                  <template v-for="item in cart">
                    <tr
                      v-if="cart != '購物車內目前沒有商品!'"
                      :key="item.productId"
                      class="classItem${ItemCnt}"
                      id="item${ItemCnt}"
                    >
                      <td class="image">
                        <a
                          class="product-image"
                          href="#/women-s-crepe-printed-black/"
                          ><img
                            width="75"
                            alt="Sample Product"
                            :src="item.productImg"
                        /></a>
                      </td>
                      <td>
                        <h2 class="product-name">
                          <a href="#/women-s-crepe-printed-black/">{{
                            item.productName
                          }}</a>
                        </h2>
                      </td>
                      <td class="a-center">
                        <a
                          title="Edit item parameters"
                          class="edit-bnt"
                          href="#configure/id/15945/"
                        ></a>
                      </td>
                      <td class="a-right">
                        <span class="cart-price">
                          <span class="price">$</span
                          ><span class="price" id="price${ItemCnt}">{{
                            item.productPrice
                          }}</span></span
                        >
                      </td>
                      <td class="a-center movewishlist qty-middle">
                        <form id="myform" method="POST" action="#">
                          <input
                            type="button"
                            value="-"
                            class="qtyminus btn btn-success"
                            field="quantity${ItemCnt}"
                            @click="
                              minusSingleProduct(item.productId), getCart()
                            "
                          />
                          <input
                            type="text"
                            name="quantity${ItemCnt}"
                            :value="item.qty"
                            disabled="disabled"
                            class="qty"
                            id="quantity${ItemCnt}"
                          />
                          <input
                            type="button"
                            value="+"
                            class="qtyplus btn btn-success"
                            field="quantity${ItemCnt}"
                            @click="addSingleProduct(item.productId), getCart()"
                          />
                        </form>
                      </td>
                      <td class="a-right movewishlist">
                        <span class="cart-price"
                          ><span class="price" id="totalPrice${ItemCnt}"
                            >${{ item.singleTotal }}</span
                          ></span
                        >
                      </td>
                      <td class="a-center last">
                        <button
                          id="remove${ItemCnt}"
                          class="button remove"
                          title="Remove item"
                          @click="
                            removeSingleProducts(item.productId), getCart()
                          "
                        >
                          <span>Remove item</span>
                        </button>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------------ -->
    <div
      v-if="isVisible"
      id="checkOut"
      class="main-container col2-right-layout"
    >
      <div class="main container">
        <div class="row">
          <section class="col-sm-12 col-xs-12">
            <div class="col-main">
              <div class="page-title">
                <h1>結帳</h1>
              </div>
              <ol class="one-page-checkout" id="checkoutSteps">
                <li id="opc-billing" class="section allow">
                  <!-- 綁定會員資料 -->
                  <div class="step-title">
                    <span class="number">1</span>
                    <h3>訂購人資料</h3>
                  </div>
                  <div id="checkout-step-billing" class="step a-item">
                    <table>
                      <tr>
                        <th>姓名:</th>
                        <td>
                          {{
                            memberInfo.memberFirstname +
                            " " +
                            memberInfo.memberLastname
                          }}
                        </td>
                      </tr>
                      <tr>
                        <th>E-Mail:</th>
                        <td>{{ memberInfo.memberEmail }}</td>
                      </tr>
                      <tr>
                        <th>聯絡電話:</th>
                        <td>{{ memberInfo.memberTel }}</td>
                      </tr>
                      <tr>
                        <th>地址:</th>
                        <td>{{ memberInfo.memberAddr }}</td>
                      </tr>
                    </table>
                  </div>
                </li>
                <li id="opc-shipping" class="section">
                  <div class="step-title">
                    <span class="number">2</span>
                    <h3 class="one_page_heading">寄送方式</h3>
                  </div>
                  <div id="checkout-step-billing" class="step a-item">
                    <label for="delivery">
                      <input
                        type="radio"
                        name="opc-shipping_method"
                        id="delivery"
                        value="delivery"
                        class="radio"
                        v-model="deliveryType"
                      />宅配到府
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="opc-shipping_method"
                        value="FamilyMart"
                        class="radio"
                        v-model="deliveryType"
                      />全家超商取貨
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="opc-shipping_method"
                        id="7-ELEVEN"
                        value="7-ELEVEN"
                        class="radio"
                        v-model="deliveryType"
                      />7-11超商取貨
                    </label>

                    <br />
                    <template v-if="deliveryType === 'delivery'">
                      <tr>
                        <th>宅配地址：</th>
                        <td>
                          <input
                            type="text"
                            key="delivery"
                            style="width: 400px"
                            v-model="customerAddress"
                          />
                        </td>
                      </tr>
                    </template>
                    <template v-else-if="deliveryType === '7-ELEVEN'">
                      門市名稱：
                      <input
                        type="text"
                        name="cvs"
                        list="cvs"
                        class="cvs"
                        value=""
                      />
                      <datalist id="cvs">
                        <option value="7-ELEVEN 三中門市"></option>
                        <option value="7-ELEVEN 明義門市"></option>
                      </datalist>
                    </template>
                    <template v-else-if="deliveryType === 'FamilyMart'">
                      門市名稱：
                      <input
                        type="text"
                        name="cvs"
                        list="cvs"
                        class="cvs"
                        value=""
                      />
                      <datalist id="cvs">
                        <option value="全家 台中公益路大進店"></option>
                        <option value="全家 台中精誠店"></option>
                      </datalist>
                    </template>

                    <br />
                  </div>
                </li>
                <li id="opc-shipping_method" class="section">
                  <div class="step-title">
                    <span class="number">3</span>
                    <h3 class="one_page_heading">收件人資料</h3>
                  </div>
                  <div id="checkout-step-billing" class="step a-item">
                    <input
                      type="radio"
                      name="customerInfo"
                      id="sameAsOrder"
                      value="sameAsOrder"
                      class="radio"
                      v-model="receiver"
                    />
                    <label for="sameAsOrder">同訂購人 </label>
                    <input
                      type="radio"
                      name="customerInfo"
                      id="changeReceiver"
                      value="changeReceiver"
                      class="radio"
                      v-model="receiver"
                    />
                    <label for="changeReceiver">修改收件人資料 </label>
                    <br />
                    <template v-if="receiver == 'sameAsOrder'">
                      <tr>
                        <th>姓名：</th>
                        <td>
                          <p>
                            {{
                              memberInfo.memberFirstname +
                              " " +
                              memberInfo.memberLastname
                            }}
                          </p>
                        </td>
                        <br />
                      </tr>
                      <tr>
                        <th>聯絡電話：</th>
                        <td>
                          <p>{{ memberInfo.memberTel }}</p>
                        </td>
                      </tr>
                    </template>
                    <template v-if="receiver == 'changeReceiver'">
                      <tr>
                        <th>姓名：</th>
                        <td>
                          <input type="text" />
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <th>聯絡電話：</th>
                        <td>
                          <input type="text" />
                        </td>
                      </tr>
                    </template>
                  </div>
                </li>
                <li id="opc-payment" class="section">
                  <div class="step-title">
                    <span class="number">4</span>
                    <h3 class="one_page_heading">付款方式</h3>
                  </div>
                  <div id="checkout-step-billing" class="step a-item">
                    <label for="貨到付款">
                      <input
                        type="radio"
                        name="payment"
                        id="貨到付款"
                        value="貨到付款"
                        v-model="payMethod"
                        class="radio"
                      />門市取貨付款
                    </label>
                    <label for="creditCard">
                      <input
                        type="radio"
                        name="payment"
                        id="creditCard"
                        value="creditCard"
                        v-model="payMethod"
                        class="radio"
                      />信用卡
                    </label>

                    <label for="LinePay">
                      <input
                        type="radio"
                        name="payment"
                        id="LinePay"
                        value="LinePay"
                        v-model="payMethod"
                        class="radio"
                      />Line Pay
                    </label>
                    <br />
                    <template v-if="payMethod === 'creditCard'">
                      <tr>
                        <th>信用卡號：</th>
                        <td>
                          <input type="text" />
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <th>有效日期：</th>
                        <td>
                          <select name="validMonth" id="" style="width: 80px">
                            <option value="0">請選擇</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                          <select name="validYear" id="" style="width: 80px">
                            <option value="0">請選擇</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                          <input type="text" placeholder="信用卡背面末三碼" />
                        </td>
                      </tr>
                    </template>
                  </div>
                </li>
                <li id="opc-review" class="section">
                  <div id="checkout-step-billing" class="step a-item">
                    <button
                      @click="submitOrder()"
                      type="button"
                      class="button continue"
                    >
                      <span>確認結帳</span>
                    </button>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import store from "@/store/index";

export default {
  name: "CheckOut",
  data() {
    return {
      cart: [],
      isVisible: false,
      deliveryType: "delivery",
      payMethod: "",
      customerAddress: "",
      totalprice: 0,
      receiver: "sameAsOrder",
      // memberId: "",
      memberInfo: {},
    };
  },

  async mounted() {
    axios.get(`http://localhost:8081/api/cart/checkout`).then((res) => {
      this.cart = res.data;
      this.totalprice = 0;
      $.each(this.cart, (index, products) => {
        this.totalprice += parseInt(products.productPrice);
      });
    });
    let user = sessionStorage.getItem("user");
    console.log(user);

    // //檢查是不是linepay回呼
    // let transactionId = new URLSearchParams(window.location.search).get(
    //   "transactionId"
    // );
    // if (transactionId != null) {
    //   //是linepay回呼
    //   var settings = {
    //     url: "http://localhost:8081/api/orders/linepay/" + transactionId,
    //     method: "GET",
    //   };
    //   $.ajax(settings).done(function (response) {
    //     if (response == "ok") {
    //       alert("付款成功...跳轉回dashboard");
    //       // 跳轉
    //       // this.$router.push({ path: "/dashboard" });
    //       window.location.href = "http://localhost:8081/index#/dashboard";
    //     } else {
    //       //付款失敗,應該要呼叫database把訂單狀態改成取消
    //       alert(response);
    //     }
    //   });
    // }
    // store.dispatch("GETPRODUCTS");
  },
  // computed: {
  //   createOrderId() {
  //     var date = new Date();
  //     var month = date.getMonth() + 1;
  //     var strDate = date.getDate();
  //     return (
  //       date.getFullYear() +
  //       this.padTo2Digits(month) +
  //       this.padTo2Digits(strDate) +
  //       this.padTo2Digits(date.getHours()) +
  //       this.padTo2Digits(date.getMinutes()) +
  //       this.padTo2Digits(date.getSeconds())
  //     );
  //   },
  // },
  // asyncComputed: {
  //   getMemberId() {
  //     return this.setMemberId();
  //   },
  // },
  methods: {
    getCart() {
      axios.get(`http://localhost:8081/api/cart/checkout`).then((res) => {
        this.cart = res.data;
        this.totalprice = 0;
        $.each(this.cart, (index, products) => {
          this.totalprice += parseInt(products.productPrice);
        });
      });
    },

    getCheckOut() {
      // console.log(`sessionscope=${sessionScope.user}`);
      this.isVisible = true;

      console.log(store.state.memberId);
      axios.get("http://localhost:8081/api/test/session/mid").then((res) => {
        if (res.status != 404) {
          axios
            .get(`http://localhost:8081/api/member/${res.data}`)
            .then((res) => {
              this.memberInfo = res.data;
            });
        }
      });
    },
    addSingleProduct(id) {
      console.log(id);

      axios
        .get(`http://localhost:8081/api/cart/add/${id}/qty/`)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
    minusSingleProduct(id) {
      console.log(id);
      axios
        .get(`http://localhost:8081/api/cart/minus/${id}/qty/`)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
    removeSingleProducts(id) {
      console.log(id);

      axios
        .get(`http://localhost:8081/api/cart/remove/${id}`)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
    submitOrder() {
      var orderId = this.createOrderId();
      var settings = {
        url: "http://localhost:8081/api/orders/createOrder",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          orderId: orderId,
          memberId: store.state.memberId, //應該要抓session的會員資訊,但目前前台網頁還沒整合到project無法做session控管所以寫死
          payMethod: this.payMethod, //抓前端表格內容
          deliverCvs: $(".cvs").val(), //抓前端表格內容(下拉式選單的超商名稱)
          deliverAddr: this.customerAddress, //如果使用者選擇宅配有輸入地址的話
        }),
      };

      $.ajax(settings)
        .done((resp) => {
          if (this.payMethod == "LinePay") {
            var settings = {
              url: "http://localhost:8081/api/orders/linepay/request",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              data: JSON.stringify({
                amount: this.totalprice,
                productName: "JavaEEIT42 Linepay付款",
                orderId: orderId,
              }),
            };
            $.ajax(settings)
              .done(function (response) {
                console.log(response);
                window.location.href = response;
              })
              .fail(function () {
                this.$swal(
                  "CMA",
                  "呼叫LinePay失敗,請使用其他付款方式",
                  "error"
                );
              });
          } else {
            this.$swal("CMA", resp);
            this.$router.push({ path: "/dashboard" });
          }
        })
        .fail(function (resp) {
          this.$swal("CMA", resp);
        });
    },

    padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    },
    createOrderId() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      return (
        date.getFullYear() +
        this.padTo2Digits(month) +
        this.padTo2Digits(strDate) +
        this.padTo2Digits(date.getHours()) +
        this.padTo2Digits(date.getMinutes()) +
        this.padTo2Digits(date.getSeconds())
      );
    },
  },
  // watch: {
  //   "$route.params.memberId": function (memberId) {
  //     this.memberId = memberId;
  //   },
  // },
};
</script>

<style scoped>
.cart {
  margin: 30px 0 0 0;
}
</style>
