import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    products: [],
    memberId: "",
    cartAmount: 0,
  },
  getters: {
  },
  mutations: {
    SETPRODUCTS(state, products) {
      state.products = products;
    },
    // SETMEMBERID(state, memberId) {
    //   state.memberId = memberId;
    // },

  },
  actions: {
    GETPRODUCTS(context) {

      return axios
        .get(
          `http://localhost:8081/api/products/`
        )
        .then((res) => {

          context.commit('SETPRODUCTS', res.data)
        });
    },
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
