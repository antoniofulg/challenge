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
      const object = state.cartList.find(item => item.id === obj.id)
      const index = state.cartList.indexOf(object)
      object.qty++
      Vue.set(state.cartList, index, object)
    },

    REMOVE_ITEM_CART_LIST: (state, obj = null) => {
      if (obj) {
        const object = state.cartList.find(item => item.id === obj.id)
        const index = state.cartList.indexOf(object)
        state.cartList.splice(index, 1)
      } else {
        state.cartList = []
      }
    },

    REMOVE_ITEM_QTY_ON_CART_LIST: (state, obj) => {
      const object = state.cartList.find(item => item.id === obj.id)
      if (object.qty > 1) {
        const index = state.cartList.indexOf(object)
        object.qty--
        Vue.set(state.cartList, index, object)
      } else {
        const object = state.cartList.find(item => item.id === obj.id)
        const index = state.cartList.indexOf(object)
        state.cartList.splice(index, 1)
      }
    },

    SET_CART_LIST: (state, obj) => {
      const object = state.cartList.find(item => item.id === obj.id)
      if (object) {
        const index = state.cartList.indexOf(object)
        object.qty++
        Vue.set(state.cartList, index, object)
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
