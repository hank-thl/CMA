import { createStore } from 'vuex'
// import axios from "axios";

export default createStore({
  state: {
    products: [
      {
        productId: 1,
        productName: "KINYO．麥飯石電烤盤",
        productCatalog: "3C",
        productPrice: 1080,
        productStock: 0,
        productDesc:
          "大面積烤盤，給你速速烤好各式食材～急速均勻加熱，少一點等待多一點便利！全機可水洗，可拆式烤盤清潔更徹底；薄型機身最適合小家庭闔家烤肉啦！",
        productImg1:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/630436b189b8ae00315d26e1/800x.webp?source_format=jpg",
        productImg2:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/630436b18c4c8c0019892a2b/800x.webp?source_format=jpg",
        productImg3:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/630436b13e48830010340fbf/800x.webp?source_format=jpg",
        productImg4:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/630436b18c4c8c0028892a41/800x.webp?source_format=jpg",
      },
      {
        productId: 2,
        productName: "KINYO．麥飯石電烤盤37cm",
        productCatalog: "3C",
        productPrice: 1080,
        productStock: 3,
        productDesc:
          "一家烤肉，闔家歡樂～中秋節快到了，為因應這一天的活動，開始動起來提前準備當天需要的用品吧！",
        productImg1:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/63033a27726c55001945dae2/800x.webp?source_format=jpg",
        productImg2:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/63033a28ba11f0001cce6234/800x.webp?source_format=jpg",
        productImg3:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/63033a2885204f0013898776/800x.webp?source_format=jpg",
        productImg4:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/63033a28ac2679001fa6e0e1/800x.webp?source_format=jpg",
      },
      {
        productId: 3,
        productName: "韓系溫柔花邊檯燈",
        productCatalog: "3C",
        productPrice: 1280,
        productStock: 3,
        productDesc:
          "韓系小姐姐居家必備款💞奶油花邊散發出柔和暖光，木質燈座增添細膩質感，輕鬆營造空間溫柔氛圍。",
        productImg1:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/62fc6bb57586ac0028232142/800x.webp?source_format=jpg",
        productImg2:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/62fc6bb548caf400310038eb/800x.webp?source_format=jpg",
        productImg3:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/62fc6bb56ccdd42b1dab8865/800x.webp?source_format=jpg",
        productImg4:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/62fc6bb58d4de50031ea452e/800x.webp?source_format=jpg",
      },
      {
        productId: 4,
        productName: "KINYO．自動感應式泡泡洗手機",
        productCatalog: "3C",
        productPrice: 449,
        productStock: 3,
        productDesc:
          "減少共用產生的細菌造成的交叉感染，推推自動感應式泡泡洗手機免去洗手也會遇到的風險～無須按壓接觸，達到絕對乾淨洗手！",
        productImg1:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/62fca902bd966800317f0589/800x.webp?source_format=jpg",
        productImg2:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/62fca90141e081002803017f/800x.webp?source_format=jpg",
        productImg3:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/62fca902ace5f500220c125b/800x.webp?source_format=jpg",
        productImg4:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/62fca902fcf965003169fe98/800x.webp?source_format=jpg",
      },
      {
        productId: 5,
        productName: "KINYO・卡卡燈-廣角照明組",
        productCatalog: "燈飾",
        productPrice: 899,
        productStock: 3,
        productDesc:
          "多用途照明燈，不受任何空間和角度限制，隨夾隨照明，甚至可以單獨當手電筒使用！支架附加功能可當臨時掛勾，一燈好多用，滿足你的各種需求！",
        productImg1:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/6243d80467d84900300a1d8c/800x.webp?source_format=jpg",
        productImg2:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/6243d805d06bfc00159c7a07/800x.webp?source_format=jpg",
        productImg3:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/6243d80567d849001e0a1dc3/800x.webp?source_format=jpg",
        productImg4:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/6243d8054621570030be90d3/800x.webp?source_format=jpg",
      },
      {
        productId: 6,
        productName: "把星空送給你．投影夜燈",
        productCatalog: "燈飾",
        productPrice: 790,
        productStock: 3,
        productDesc:
          "把星空送給你，把海洋送給你，把宇宙送給你。多種燈光變換，三款投影片可替換，浪漫的氛圍輕鬆打造🌙",
        productImg1:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/607a91ff317fef002fb97a95/800x.webp?source_format=jpg",
        productImg2:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/604f3903eaf25b0011ce26c1/800x.webp?source_format=jpg",
        productImg3:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/604f390355c53f001a879bed/800x.webp?source_format=jpg",
        productImg4:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/604f3903c52bc700173385f1/800x.webp?source_format=jpg",
      },
      {
        productId: 7,
        productName: "水龍頭小夜燈",
        productCatalog: "燈飾",
        productPrice: 480,
        productStock: 3,
        productDesc:
          "特別的水龍頭造型設計，意在提醒大家節約用水用電！極簡金色開關，彷彿穿越時空進入工業風時代。",
        productImg1:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/6103c349ff9080002ccab74d/800x.webp?source_format=jpg",
        productImg2:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/6103c348ff9080002ccab74c/800x.webp?source_format=jpg",
        productImg3:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/6103c34c17a797001d6875fe/800x.webp?source_format=jpg",
        productImg4:
          "https://shoplineimg.com/55d3ecabe37ec6fbbf00003f/6103c35396e8eb00325a85ef/800x.webp?source_format=jpg",
      }

    ],
    memberId: "",
    cartAmount: 0,
  },
  getters: {
  },
  mutations: {
    // SETPRODUCTS(state, products) {
    //   state.products = products;
    // },
    // SETMEMBERID(state, memberId) {
    //   state.memberId = memberId;
    // },

  },
  actions: {
    // GETPRODUCTS(context) {

    //   return axios
    //     .get(
    //       `http://localhost:8081/api/products/`
    //     )
    //     .then((res) => {

    //       context.commit('SETPRODUCTS', res.data)
    //     });
    // },
    // GETMEMBERID(context) {

    //   return axios
    //     .post(
    //       `http://localhost:8081/dashboardGetMemberId`
    //     )
    //     .then((res) => {
    //       if (res.data != "") {
    //         context.commit('SETMEMBERID', res.data)
    //       }

    //     });
    // },

  },
  modules: {
  }
})
