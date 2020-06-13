import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsList: [],
    cartList: [],
    userName: ""
  },
  mutations: {
    SET_CART_LIST: (state, obj = null) => {
      console.log('chamado SET_CART_LIST')
      console.log(obj)
      if (obj) {
        obj.qtd = 1
        state.cartList.push(obj)
      } else {
        state.cartList = []
      }
    },

    SET_ITEMS_LIST: (state, obj) => {
      state.itemsList = obj.list
    },

    SET_USER_NAME: (state, obj) => {
      state.userName = obj
    }
  },
  actions: {
    addToCartList: ({commit}, obj) => {
      commit('SET_CART_LIST', obj)
    },

    clearCartList: ({commit}) => {
      commit('SET_CART_LIST')
    },

    setItemsList: async ({commit}) => {
      const list = (await axios.get(`https://paguru-challenge-api.herokuapp.com/products`)).data
      commit('SET_ITEMS_LIST', {list})
    },

    setUserName: ({commit}, obj) => {
      commit('SET_USER_NAME', obj)
    }
  },
  modules: {
  }
})
