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
    ADD_ITEM_QTY_ON_CART_LIST: (state, obj) => {
      const inCart = state.cartList.find(item => item.id === obj.id)
      inCart.qty++
    },

    REMOVE_ITEM_CART_LIST: (state, obj = null) => {
      if (obj) {
        const index = state.cartList.map(item => item.id === obj.id).indexOf(obj.id)
        if (index) {
          state.cartList.splice(index, 1)
        }
      } else {
        state.cartList = []
      }
    },

    REMOVE_ITEM_QTY_ON_CART_LIST: (state, obj) => {
      const inCart = state.cartList.find(item => item.id === obj.id)
      if (inCart.qty > 1) {
        inCart.qty--
      } else {
        const index = state.cartList.map(item => item.id === obj.id).indexOf(obj.id)
        if (index) {
          state.cartList.splice(index, 1)
        }
      }
    },

    SET_CART_LIST: (state, obj) => {
      const inCart = state.cartList.find(item => item.id === obj.id)
      if (inCart) {
        inCart.qty++;
      } else {
        obj.qty = 1
        state.cartList.push(obj)
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

    addItemQtyOnCartList: ({commit}, obj) => {
      commit('ADD_ITEM_QTY_ON_CART_LIST', obj)
    },

    clearCartList: ({commit}) => {
      commit('REMOVE_ITEM_CART_LIST')
    },

    removeItemCartList: ({commit}, obj) => {
      commit('REMOVE_ITEM_CART_LIST', obj)
    },

    removeItemQtyOnCartList: ({commit}, obj) => {
      commit('REMOVE_ITEM_QTY_ON_CART_LIST', obj)
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
