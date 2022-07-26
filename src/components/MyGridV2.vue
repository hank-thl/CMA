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
      products: [
        {
          productId: 1,
          productName: "Air Max97",
          productCatalog: "運動用品",
          productPrice: 3999,
          productStock: 3,
          productColor: "F",
          productDesc: "就是一雙鞋子",
          createUser: "admin",
          createDate: "2022-05-24T11:58:36.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-24T01:50:06.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_05_17_23_10_805.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_05_17_22_06_780.jpg",
          productImg3:
            "https://cdn-origin.cool-style.com.tw/cool/2019/04/64db7eb86e759076b3a13e86ce4d1474.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_05_17_22_19_427.jpg",
        },
        {
          productId: 2,
          productName: "復古收音機藍芽音響",
          productCatalog: "3C",
          productPrice: 1277,
          productStock: 55,
          productColor: "F",
          productDesc:
            "無法想像沒有音樂的世界！那現在就用用好看的音響聽好聽的音樂囉～復古設計不使用的時候當當擺設也很棒啊！",
          createUser: "admin",
          createDate: "2022-05-24T11:58:36.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T13:41:36.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_21_47_43_201.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 35,
          productName: "iPhone 13 Pro 白",
          productCatalog: "3C",
          productPrice: 29887,
          productStock: 10,
          productColor: "白",
          productDesc: "就是PRO",
          createUser: "admin",
          createDate: "2022-05-24T11:58:36.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T01:38:48.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_04_11_825.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 52,
          productName: "Samsung S22 Ultra",
          productCatalog: "3C",
          productPrice: 18899,
          productStock: 9,
          productColor: null,
          productDesc: "就是S22",
          createUser: null,
          createDate: null,
          updateUser: "TED",
          updateDate: "2022-06-01T23:25:47.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_21_50_52_422.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_20_03_20_37_741.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 74,
          productName: "Apple Watch Series 7 GPS 41mm",
          productCatalog: "3C",
          productPrice: 15800,
          productStock: 3,
          productColor: null,
          productDesc:
            "GPS 錶款能讓你在腕上打電話與回訊息。使用全新的感測器與 app 測量你的血氧濃度。在室內垂放手腕時，隨顯 Retina 顯示器的亮度提升達 70%。",
          createUser: "TED",
          createDate: null,
          updateUser: "TED",
          updateDate: "2022-05-31T22:47:38.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_22_28_40_191.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 76,
          productName: "HomePod mini-橙色",
          productCatalog: "3C",
          productPrice: 2588,
          productStock: 8,
          productColor: null,
          productDesc:
            "讓整個房間彌漫豐富飽滿的 360 度音感Siri智慧助理事事好用，助你處理日常事務輕鬆掌控你的智慧家庭生活(註一)為了保護你的資料隱私和安全而設計。",
          createUser: "TED",
          createDate: "2022-05-31T22:49:57.000+08:00",
          updateUser: "TED",
          updateDate: "2022-05-31T23:48:37.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_22_51_18_843.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 78,
          productName: "朵納香氛融蠟薰香燈  黑色",
          productCatalog: "家飾佈置",
          productPrice: 850,
          productStock: 10,
          productColor: null,
          productDesc: "韓國設計 安全無火香氛融蠟薰香燈",
          createUser: "TED",
          createDate: "2022-06-01T00:42:04.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T18:03:06.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_43_32_707.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_43_38_261.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_43_48_046.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 79,
          productName: "頌恩大理石香氛蠟燭暖台組",
          productCatalog: "家飾佈置",
          productPrice: 750,
          productStock: 77,
          productColor: null,
          productDesc: "韓國設計 安全無火香氛蠟燭暖台台灣專屬電壓 免轉接頭",
          createUser: "TED",
          createDate: "2022-06-01T00:43:38.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T00:43:38.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_44_15_339.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_44_20_665.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_44_28_407.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 80,
          productName: "韓國-依蘭依蘭香氛蠟燭",
          productCatalog: "家飾佈置",
          productPrice: 799,
          productStock: 210,
          productColor: null,
          productDesc: "韓劇同款香氛蠟燭-依蘭",
          createUser: "TED",
          createDate: "2022-06-01T00:44:24.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T00:44:24.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_45_02_781.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_45_13_571.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_45_24_054.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 81,
          productName: "菲莉特LED拉拉燈",
          productCatalog: "家飾佈置",
          productPrice: 820,
          productStock: 588,
          productColor: null,
          productDesc: "韓國設計 LED手拉式夜燈",
          createUser: "TED",
          createDate: "2022-06-01T00:45:05.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T00:45:05.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_45_56_736.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_46_05_301.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_46_12_439.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 82,
          productName: "水磨石氣氛LED夜燈",
          productCatalog: "家飾佈置",
          productPrice: 690,
          productStock: 12,
          productColor: null,
          productDesc: "韓國原創設計 質感居家裝飾",
          createUser: "TED",
          createDate: "2022-06-01T00:45:53.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T00:45:53.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_46_48_828.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_46_54_656.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_47_02_103.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 83,
          productName: "海登LED燈條",
          productCatalog: "家飾佈置",
          productPrice: 300,
          productStock: 30,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-01T00:46:29.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T00:46:29.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_47_24_411.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_47_30_748.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_47_37_083.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 84,
          productName: "波利LED拉拉燈",
          productCatalog: "家飾佈置",
          productPrice: 430,
          productStock: 10,
          productColor: null,
          productDesc: "韓系 LED手拉式氣氛夜燈",
          createUser: "TED",
          createDate: "2022-06-01T00:47:11.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T00:47:11.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_48_01_213.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_48_06_424.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_48_12_178.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 85,
          productName: "哈爾LED字母燈串",
          productCatalog: "家飾佈置",
          productPrice: 230,
          productStock: 15,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-01T00:47:52.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T00:47:52.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_48_40_005.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_48_43_491.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_48_46_939.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 86,
          productName: "麥肯琪LED夜燈 (幾何造型)",
          productCatalog: "家飾佈置",
          productPrice: 500,
          productStock: 12,
          productColor: null,
          productDesc:
            "韓國設計 台灣獨家進口LED夜燈 幾何造型款安全燈泡不易發熱揮別電線 讓夜燈裝飾更有品味",
          createUser: "TED",
          createDate: "2022-06-01T00:48:29.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T00:48:29.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_49_18_618.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_49_23_304.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_49_27_158.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 87,
          productName: "麥肯琪LED夜燈(金字塔造型)",
          productCatalog: "家飾佈置",
          productPrice: 500,
          productStock: 32,
          productColor: null,
          productDesc:
            "質感時尚玫瑰金 金字塔造型安全燈泡不易發熱無線設計 隨心移動 攜帶方便",
          createUser: "TED",
          createDate: "2022-06-01T00:49:03.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T00:49:03.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_50_03_456.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_50_07_355.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_50_10_691.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 88,
          productName: "朵妮LED燈串",
          productCatalog: "家飾佈置",
          productPrice: 290,
          productStock: 55,
          productColor: null,
          productDesc:
            "韓劇愛用LED燈飾 佈置首選柔和棉球燈串 適用各種空間省電、耐熱、攜帶方便長度170cm (10顆燈球)",
          createUser: "TED",
          createDate: "2022-06-01T00:49:33.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-01T00:49:33.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_50_38_844.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_50_43_051.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_18_50_46_827.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 94,
          productName: "弧形鑽・純銀項鍊",
          productCatalog: "飾品",
          productPrice: 950,
          productStock: 123,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-02T19:10:26.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T19:10:26.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_07_36_504.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_30_32_952.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_30_35_485.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 95,
          productName: "Essential．訂製水波項鍊",
          productCatalog: "飾品",
          productPrice: 1150,
          productStock: 9,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-02T19:16:57.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T19:16:57.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_21_10_372.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_17_58_335.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_18_05_563.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 96,
          productName: "冰花耳環",
          productCatalog: "飾品",
          productPrice: 590,
          productStock: 5,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-02T19:19:26.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T19:19:26.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_17_31_468.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_25_56_905.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_26_01_079.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 97,
          productName: "聖誕璀璨・耳環",
          productCatalog: "飾品",
          productPrice: 950,
          productStock: 6,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-02T19:20:44.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T19:20:44.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_22_31_560.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_26_26_389.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 98,
          productName: "三環・純銀耳環",
          productCatalog: "飾品",
          productPrice: 950,
          productStock: 9,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-02T19:21:24.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T19:21:24.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_32_37_491.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_26_54_218.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 99,
          productName: "珍珠玫瑰・純銀耳環",
          productCatalog: "飾品",
          productPrice: 750,
          productStock: 88,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-02T19:21:47.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-03T13:34:16.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_34_51_421.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_27_29_301.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_27_32_219.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 100,
          productName: "Essential．聖誕老人耳環",
          productCatalog: "飾品",
          productPrice: 550,
          productStock: 3,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-02T19:22:27.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T19:22:27.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_36_02_992.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_28_02_948.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 101,
          productName: "吊墜耳環",
          productCatalog: "飾品",
          productPrice: 790,
          productStock: 10,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-02T19:23:05.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T19:23:05.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_12_48_992.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_28_29_142.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 102,
          productName: "Essential．純鋼戒指",
          productCatalog: "飾品",
          productPrice: 680,
          productStock: 0,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-02T19:23:48.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T19:23:48.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_28_31_829.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_29_06_710.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_29_10_906.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_24_15_31_49_647.jpg",
        },
        {
          productId: 103,
          productName: "簍空純銀戒指",
          productCatalog: "飾品",
          productPrice: 950,
          productStock: 0,
          productColor: null,
          productDesc: "",
          createUser: "TED",
          createDate: "2022-06-02T19:24:45.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-02T19:24:45.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_03_13_14_29_663.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_29_36_978.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_02_19_29_41_115.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_11_50_49_935.jpg",
        },
        {
          productId: 133,
          productName: "【BLADEZ】M2 騎士全智能電動跑步機",
          productCatalog: "運動用品",
          productPrice: 9999,
          productStock: 0,
          productColor: null,
          productDesc:
            "智能串接，跑步機新主張。SPAX科學運動數據管理系統。Zwift運動社群，暢跑全世界。",
          createUser: "TED",
          createDate: "2022-06-23T11:18:16.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-23T11:18:16.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_11_18_40_915.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_11_18_51_228.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_11_19_00_302.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_24_15_28_19_479.jpg",
        },
        {
          productId: 134,
          productName: "美國 HOMEDICS 專業級無線筋膜按摩槍",
          productCatalog: "運動用品",
          productPrice: 2999,
          productStock: 0,
          productColor: null,
          productDesc:
            "6種按摩模式，4款按摩頭，12小時超長續航力，3200轉無刷大扭力強勁馬達，超靜音降噪技術",
          createUser: "TED",
          createDate: "2022-06-23T11:22:30.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-23T11:22:30.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_11_23_21_210.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_11_23_30_042.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_11_23_39_161.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 135,
          productName: "【HEAD 海德】震動按摩滾筒(強化版) 4段高頻震動",
          productCatalog: "運動用品",
          productPrice: 3999,
          productStock: 0,
          productColor: null,
          productDesc:
            "結合震動技術，加速回復肌肉活力，獨家凸點設計，按壓更深層，4段高頻震動調整，簡單操作，內建充電設計，隨充隨用\r\n台灣專業大廠生產",
          createUser: "TED",
          createDate: "2022-06-23T11:25:52.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-23T11:25:52.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_11_26_55_241.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_11_28_03_051.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
        {
          productId: 139,
          productName: "Macbook Air",
          productCatalog: "3C",
          productPrice: 37888,
          productStock: 0,
          productColor: null,
          productDesc: "This is the latest Macbook Air with M1 chip.",
          createUser: "TED",
          createDate: "2022-06-24T14:50:45.000+08:00",
          updateUser: "TED",
          updateDate: "2022-06-24T15:39:11.000+08:00",
          productImg1:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_24_14_51_07_869.jpg",
          productImg2:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_24_14_51_18_699.jpg",
          productImg3:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
          productImg4:
            "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_05_31_16_00_31_187.jpg",
        },
      ],
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
